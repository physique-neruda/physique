/* =====================================================================
   comportement.js — registre de comportement de l'espace prof (v62)

   Reprend l'application « Comportement 1STI2D » (septembre 2026) : tuiles
   photo, saisie par élève (avec punition facultative) ou par critère,
   journal, copie pour le classeur — avec en plus le choix de la classe,
   le travail donné et son échéance, un bilan par période et l'import des
   lignes de l'ancienne application.

   v65 : l'HISTORIQUE de l'ancienne application (91 lignes, 18/09 → 16/10/2026) est repris tout seul à la
   première ouverture : les lignes, déjà chiffrées, sont rangées dans l'espace enseignant
   (donnees/comportement_import_1sti2d.json) et écrites dans la base si elles n'y sont pas ; reglages/prof
   garde la trace de cette reprise (elle ne se refait pas, même si les lignes sont effacées ensuite).
   L'import manuel (Export › « Importer les lignes de l'ancienne application… ») reste possible.

   Base Firestore : comportement/{id aléatoire} = {v: 1, iv, d}, CHIFFRÉ
   sur l'appareil (socle.js) ; en clair, rien : ni la classe, ni la date,
   ni l'élève — la base ne voit que le nombre de documents et l'heure à
   laquelle chacun est écrit (métadonnées de Firestore). Ligne déchiffrée :
     {classe, ident, nom, date, evenement, points, punition, travail,
      echeance, rendu, ts}
   ===================================================================== */
import {
  db, doc, getDoc, setDoc, deleteDoc, collection, onSnapshot, writeBatch, lireDonnees,
  garde, eleves, photo, esc, auj, fr, dateValide, pts, reglage, idAleatoire, chiffrerDoc, dechiffrerDoc,
  toast, ouvrirFeuille, fermerFeuille, confirmer, copier, telecharger, csv, cellule, afficherSynchro
} from "./socle.js?v=65";
import { EVTS, PUNITIONS } from "./criteres.js";

const $ = id => document.getElementById(id);
let R = null, ELEVES = [];
let classe = reglage("comportement-classe") || "sti2d";
let DOCS = new Map();              // id → ligne déchiffrée, telle que dans la base
const attente = new Map();         // id → ligne écrite ici, pas encore revenue de la base
const effaces = new Set();         // id effacés ici, pas encore confirmés
let lignes = [];                   // toutes classes, fusion des trois
let illisibles = 0, mode = "eleve", critere = null, derniere = null;
let docsServeur = false;           // la liste vient-elle de la base (et pas seulement du cache de l'appareil) ?

const jour = () => $("date").value || auj();
const duJourDe = id => lignes.filter(l => l.classe === classe && l.date === jour() && l.ident === id);
const ligneDe = (id, ev) => lignes.find(l => l.classe === classe && l.date === jour() && l.ident === id && l.evenement === ev);
const nomDe = id => { const e = ELEVES.find(x => x.id === id); return e ? e.affiche : id; };
const eleveDe = id => (R && R.eleves.find(x => x.id === id)) || null;
const libClasse = c => (R && R.classes[c] && R.classes[c].libelle) || c;

function fusion() {
  const m = new Map(DOCS);
  attente.forEach((v, k) => m.set(k, v));
  effaces.forEach(k => m.delete(k));
  lignes = [...m.entries()].map(([id, l]) => Object.assign({}, l, { id }))
    .sort((a, b) => (a.date + (a.ts || "")).localeCompare(b.date + (b.ts || "")));
}

// ------------------------------------------------------------------ écriture
async function envoyer(id, l) {
  try {
    const data = await chiffrerDoc("comportement/" + id, l);
    setDoc(doc(db, "comportement", id), data).catch(e => toast("Écriture refusée par la base (" + (e.code || "erreur") + ")"));
  } catch (e) { console.warn(e); toast("Chiffrement impossible"); }
}
function ajouter(id, lib, p, punition, travail, echeance) {
  const e = eleveDe(id);
  const l = { classe, ident: id, nom: e ? e.affiche : id, date: jour(), evenement: lib, points: +p || 0,
              punition: punition || "", travail: travail || "", echeance: dateValide(echeance) ? echeance : "", rendu: false,
              ts: new Date().toISOString() };
  const did = idAleatoire();
  attente.set(did, l); derniere = did;
  fusion(); maj(); envoyer(did, l);
  if (mode === "eleve") toast(nomDe(id) + " · " + pts(p) + (punition ? " · " + punition : ""), () => { if (derniere === did) supprimer(did); });
  return did;
}
function modifier(did, changement) {
  const l = lignes.find(x => x.id === did); if (!l) return;
  const n = Object.assign({}, l); delete n.id; changement(n); n.ts = new Date().toISOString();
  attente.set(did, n); fusion(); maj(); envoyer(did, n);
}
function supprimer(did) {
  attente.delete(did); effaces.add(did); fusion(); maj();
  deleteDoc(doc(db, "comportement", did)).catch(e => toast("Effacement refusé (" + (e.code || "erreur") + ")"));
}

// ------------------------------------------------------------------ affichage
function grille() {
  $("grille").innerHTML = ELEVES.map(e =>
    `<div class="tuile" id="t-${esc(e.id)}" data-id="${esc(e.id)}" tabindex="0" role="button" aria-label="${esc(e.affiche)}"><span class="pun"></span><span class="badge" hidden></span>
     <span class="coche-marque"></span><img src="${photo(e)}" alt=""><div class="nm">${esc(e.affiche)}</div></div>`).join("");
  $("grille").querySelectorAll(".tuile").forEach(t => {
    t.addEventListener("click", () => toucher(t.dataset.id));
    t.addEventListener("keydown", k => { if (k.key === "Enter" || k.key === " ") { k.preventDefault(); toucher(t.dataset.id); } });
  });
}
function maj() {
  const duJour = lignes.filter(l => l.classe === classe && l.date === jour());
  const total = lignes.filter(l => l.classe === classe).length;
  $("cpt").textContent = duJour.length + " ligne" + (duJour.length > 1 ? "s" : "") + " ce jour · " + total + " au total" + (illisibles ? " · " + illisibles + " illisible(s)" : "");
  let coches = 0;
  ELEVES.forEach(e => {
    const t = document.getElementById("t-" + e.id); if (!t) return;
    const dj = duJour.filter(l => l.ident === e.id);
    const som = dj.reduce((s, l) => s + (+l.points || 0), 0);
    const b = t.querySelector(".badge"), p = t.querySelector(".pun"), c = t.querySelector(".coche-marque");
    b.hidden = !dj.length; if (dj.length) { b.textContent = pts(Math.round(som * 10) / 10); b.className = "badge " + (som > 0 ? "plus" : som < 0 ? "moins" : ""); }
    p.textContent = dj.some(l => l.punition) ? "📄" : "";
    t.classList.remove("coche", "neg"); c.textContent = "";
    if (mode === "critere" && critere && ligneDe(e.id, critere.l)) {
      t.classList.add("coche"); if (critere.p < 0) t.classList.add("neg");
      c.textContent = "✓"; coches++;
    }
  });
  const b = $("critere");
  if (mode === "critere") {
    b.textContent = critere ? (critere.l + "  " + pts(critere.p) + "  (" + coches + "/" + ELEVES.length + ")") : "Choisir un critère…";
    b.classList.toggle("choisi", !!critere);
  }
  $("aide-classe").textContent = mode === "eleve"
    ? "Touchez une photo pour noter un écart ou un point positif (punition facultative). Badge : total du jour ; 📄 : punition donnée ce jour. « Annuler » dans le bandeau défait la dernière saisie."
    : "Choisissez un critère, puis touchez les photos concernées : chaque toucher ajoute ou retire ce critère pour la date choisie.";
  rendreJournal(); rendreBilan();
}
function basculerMode(m) {
  mode = m;
  $("m-eleve").classList.toggle("on", m === "eleve");
  $("m-critere").classList.toggle("on", m === "critere");
  ["critere", "tout", "rien"].forEach(id => { $(id).hidden = m !== "critere"; });
  maj();
}

// ------------------------------------------------------------------ feuille de choix
function listeEvts(onClick, tete) {
  let html = tete || "";
  ["négatif", "positif"].forEach(sens => {
    const grp = [...new Set(EVTS.filter(e => e.s === sens).map(e => e.g))];
    html += `<div class="sect">${sens === "négatif" ? "Écarts" : "Points positifs"}</div>`;
    grp.forEach(g => {
      html += `<div class="grpt">${esc(g)}</div>` + EVTS.filter(e => e.s === sens && e.g === g).map(e =>
        `<button type="button" class="ev ${sens === "négatif" ? "neg" : "pos"}" data-l="${esc(e.l)}" data-p="${e.p}">
           <span>${esc(e.l)}</span><span class="pts">${pts(e.p)}</span></button>`).join("");
    });
  });
  html += '<button type="button" class="gros sec" id="fermer">Fermer</button>';
  const f = ouvrirFeuille(html);
  f.querySelectorAll(".ev").forEach(b => b.addEventListener("click", () => onClick(b.dataset.l, +b.dataset.p, f)));
  f.querySelector("#fermer").addEventListener("click", fermerFeuille);
  return f;
}
function toucher(id) {
  if (mode === "critere") {
    if (!critere) { choisirCritere(); return; }
    const l = ligneDe(id, critere.l);
    if (l) supprimer(l.id); else ajouter(id, critere.l, critere.p, "");
    return;
  }
  const e = eleveDe(id);
  let pun = "";
  const tete = `<div class="tete"><img src="${photo(e)}" alt="">
      <div class="qui"><b>${esc(e ? e.prenom + " " + e.nom : id)}</b><div class="sous">${fr(jour())} · ${esc(libClasse(classe))}</div></div></div>
    <div class="sect">Punition associée (facultatif)</div>
    <div class="chips">${PUNITIONS.map(p => `<button type="button" class="chip" data-p="${esc(p)}">${esc(p)}</button>`).join("")}</div>
    <div class="pun-detail" id="pun-detail" hidden>
      <div><label class="lab" for="pun-travail">Travail donné</label><input class="champ-texte" id="pun-travail" placeholder="ex. exercices de conversions"></div>
      <div><label class="lab" for="pun-pour">Pour le</label><input class="champ-texte" type="date" id="pun-pour"></div>
    </div>`;
  const f = listeEvts((lib, p, f) => {
    ajouter(id, lib, p, pun, pun ? f.querySelector("#pun-travail").value.trim() : "", pun ? f.querySelector("#pun-pour").value : "");
    fermerFeuille();
  }, tete);
  f.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
    const on = c.classList.contains("on");
    f.querySelectorAll(".chip").forEach(x => x.classList.remove("on"));
    if (!on) { c.classList.add("on"); pun = c.dataset.p; } else pun = "";
    f.querySelector("#pun-detail").hidden = !pun;
  }));
}
function choisirCritere() {
  listeEvts((lib, p) => { critere = { l: lib, p }; fermerFeuille(); maj(); },
    '<div class="tete"><div class="qui"><b>Choisir le critère à pointer</b><div class="sous">Ensuite, touchez les photos concernées</div></div></div>');
}
$("tout").addEventListener("click", () => {
  if (!critere) return choisirCritere();
  confirmer("Appliquer « " + critere.l + " » à tous les élèves qui ne l'ont pas déjà, pour le " + fr(jour()) + " ?", () => {
    ELEVES.forEach(e => { if (!ligneDe(e.id, critere.l)) ajouter(e.id, critere.l, critere.p, ""); });
    toast("Critère appliqué à toute la classe");
  }, { danger: false, libelle: "Appliquer" });
});
$("rien").addEventListener("click", () => {
  if (!critere) return;
  confirmer("Retirer « " + critere.l + " » à tous les élèves, pour le " + fr(jour()) + " ?", () => {
    lignes.filter(l => l.classe === classe && l.date === jour() && l.evenement === critere.l).forEach(l => supprimer(l.id));
  }, { libelle: "Retirer" });
});
$("m-eleve").addEventListener("click", () => basculerMode("eleve"));
$("m-critere").addEventListener("click", () => { basculerMode("critere"); if (!critere) choisirCritere(); });
$("critere").addEventListener("click", choisirCritere);

// ------------------------------------------------------------------ punitions : état
function etatPunition(l) {
  if (!l.punition) return "";
  if (l.rendu) return '<span class="etat-pun rendu">rendu</span>';
  if (!l.echeance) return "";
  return l.echeance < auj() ? `<span class="etat-pun retard">pour le ${fr(l.echeance)}, en retard</span>` : `<span class="etat-pun attendu">pour le ${fr(l.echeance)}</span>`;
}

// ------------------------------------------------------------------ journal
function rendreJournal() {
  const j = $("journal");
  const L = lignes.filter(l => l.classe === classe);
  if (!L.length) { j.innerHTML = '<p class="vide">Aucune ligne pour cette classe.</p>'; return; }
  const dates = [...new Set(L.map(l => l.date))].sort().reverse();
  j.innerHTML = dates.map(d => `<div class="jour">${fr(d)}</div>` + L.filter(l => l.date === d)
    .map(l => `<div class="ligne"><div><b>${esc(l.nom || nomDe(l.ident))}</b><div class="d">${esc(l.evenement)} · ${pts(l.points)}${l.punition ? " · " + esc(l.punition) : ""}${l.travail ? " (" + esc(l.travail) + ")" : ""} ${etatPunition(l)}</div></div>
      <div class="actions">${l.punition && l.travail ? `<button type="button" class="mini" data-rendu="${esc(l.id)}">${l.rendu ? "Pas rendu" : "Rendu"}</button>` : ""}
      <button type="button" class="x" data-id="${esc(l.id)}" aria-label="Effacer">×</button></div></div>`).join("")).join("");
  j.querySelectorAll(".x").forEach(b => b.addEventListener("click", () => supprimer(b.dataset.id)));
  j.querySelectorAll("[data-rendu]").forEach(b => b.addEventListener("click", () => modifier(b.dataset.rendu, n => { n.rendu = !n.rendu; })));
}

// ------------------------------------------------------------------ bilan
function rentree() { const d = new Date(), a = d.getMonth() >= 7 ? d.getFullYear() : d.getFullYear() - 1; return a + "-09-01"; }
function rendreBilan() {
  if (!$("du").value) $("du").value = rentree();
  if (!$("au").value) $("au").value = auj();
  const du = $("du").value, au = $("au").value;
  const L = lignes.filter(l => l.classe === classe && l.date >= du && l.date <= au);
  let tp = 0, tn = 0;
  $("tbody").innerHTML = ELEVES.map(e => {
    const x = L.filter(l => l.ident === e.id);
    const som = Math.round(x.reduce((s, l) => s + (+l.points || 0), 0) * 10) / 10;
    const neg = x.filter(l => l.points < 0).length, pos = x.filter(l => l.points > 0).length;
    const pun = x.filter(l => l.punition).length, ar = x.filter(l => l.punition && l.travail && !l.rendu).length;
    tp += pos; tn += neg;
    return `<tr class="cl" data-id="${esc(e.id)}"><td class="nom"><span class="n"><img src="${photo(e)}" alt="">${esc(e.affiche)}</span></td>
      <td class="${som > 0 ? "pos" : som < 0 ? "neg" : ""}">${x.length ? pts(som) : "—"}</td><td>${neg || "—"}</td><td>${pos || "—"}</td><td>${pun || "—"}</td><td>${ar || "—"}</td></tr>`;
  }).join("");
  $("tbody").querySelectorAll("tr").forEach(r => r.addEventListener("click", () => detail(r.dataset.id, L)));
  $("resume-bilan").innerHTML = `<div><b>${L.length}</b>lignes</div><div><b>${tn}</b>écarts</div><div><b>${tp}</b>points positifs</div>
    <div><b>${L.filter(l => l.punition).length}</b>punitions</div>`;
}
function detail(id, L) {
  const e = eleveDe(id), x = L.filter(l => l.ident === id).slice().reverse();
  ouvrirFeuille(`<div class="tete"><img src="${photo(e)}" alt=""><div class="qui"><b>${esc(e ? e.prenom + " " + e.nom : id)}</b>
    <div class="sous">du ${fr($("du").value)} au ${fr($("au").value)} · ${x.length} ligne${x.length > 1 ? "s" : ""}</div></div></div>`
    + (x.length ? x.map(l => `<div class="ligne"><div><b>${fr(l.date)}</b><div class="d">${esc(l.evenement)} · ${pts(l.points)}${l.punition ? " · " + esc(l.punition) : ""}${l.travail ? " (" + esc(l.travail) + ")" : ""} ${etatPunition(l)}</div></div></div>`).join("")
      : '<p class="vide">Rien sur la période.</p>')
    + '<button type="button" class="gros sec" id="fermer">Fermer</button>').querySelector("#fermer").onclick = fermerFeuille;
}
$("du").addEventListener("change", rendreBilan);
$("au").addEventListener("change", rendreBilan);

// ------------------------------------------------------------------ export, import
function rangees() {
  return lignes.filter(l => l.classe === classe).sort((a, b) => (a.date + a.nom).localeCompare(b.date + b.nom, "fr"))
    .map(l => [fr(l.date), l.nom || nomDe(l.ident), l.evenement, l.punition || "",
               (l.travail || "") + (l.echeance ? (l.travail ? " " : "") + "(pour le " + fr(l.echeance) + ")" : "")]);
}
$("b-copie").addEventListener("click", async () => {
  const L = rangees();
  if (!L.length) return toast("Aucune ligne à copier");
  toast((await copier(L.map(r => r.map(cellule).join("\t")).join("\n"))) ? L.length + " ligne(s) copiée(s)" : "Copie refusée par cet appareil");
});
$("b-csv").addEventListener("click", () => {
  const L = lignes.filter(l => l.classe === classe).sort((a, b) => (a.date + a.nom).localeCompare(b.date + b.nom, "fr"));
  if (!L.length) return toast("Aucune ligne à enregistrer");
  telecharger("comportement_" + classe + "_" + auj() + ".csv", csv([["Date", "Élève", "Événement", "Punition", "Travail donné", "Points", "Échéance", "Rendu"]]
    .concat(L.map(l => [fr(l.date), l.nom || nomDe(l.ident), l.evenement, l.punition || "", l.travail || "", String(l.points).replace(".", ","), fr(l.echeance || ""), l.rendu ? "oui" : ""]))), "text/csv;charset=utf-8");
});
$("b-vide").addEventListener("click", () => {
  const L = lignes.filter(l => l.classe === classe);
  if (!L.length) return toast("Aucune ligne");
  confirmer("Effacer les " + L.length + " lignes de " + libClasse(classe) + " ? Pensez à les avoir copiées dans le classeur.", () => {
    L.forEach(l => supprimer(l.id)); toast("Lignes effacées");
  }, { saisie: "EFFACER", libelle: "Effacer" });
});
/* Fichier préparé à partir de l'ancienne application : lignes DÉJÀ chiffrées avec la clé de l'espace enseignant
   (format neruda-comportement-import). Chaque ligne est vérifiée (déchiffrable ici) puis écrite telle quelle ;
   les noms de documents sont fixes, si bien qu'importer deux fois le même fichier n'ajoute rien. */
$("b-importer").addEventListener("click", () => $("fichier").click());
$("fichier").addEventListener("change", async ev => {
  const fi = ev.target.files && ev.target.files[0]; ev.target.value = "";
  if (!fi) return;
  let d;
  try { d = JSON.parse(await fi.text()); } catch (e) { return toast("Fichier illisible"); }
  if (!d || d.format !== "neruda-comportement-import" || !Array.isArray(d.lignes)) return toast("Ce n'est pas un fichier d'import du registre");
  if (!docsServeur) return toast("Lecture de la base en cours : réessayer dans un instant");
  const valides = [];
  for (const x of d.lignes) {
    if (!x || !/^[0-9a-f]{20}$/.test(x.id || "")) continue;
    const l = await dechiffrerDoc("comportement/" + x.id, x);
    if (l && l.ident && dateValide(l.date)) valides.push([x, l]);
  }
  const nouveaux = valides.filter(([x]) => !DOCS.has(x.id) && !attente.has(x.id));
  if (!valides.length) return toast("Aucune ligne déchiffrable : fichier préparé pour une autre clé ?");
  confirmer(`Importer ${nouveaux.length} ligne${nouveaux.length > 1 ? "s" : ""} (${valides.length - nouveaux.length} déjà présente${valides.length - nouveaux.length > 1 ? "s" : ""}) depuis « ${fi.name} » ?`, async () => {
    for (let k = 0; k < nouveaux.length; k += 400) {
      const b = writeBatch(db);
      nouveaux.slice(k, k + 400).forEach(([x, l]) => { b.set(doc(db, "comportement", x.id), { v: 1, iv: x.iv, d: x.d }); attente.set(x.id, l); });
      b.commit().catch(e => toast("Import refusé (" + (e.code || "erreur") + ")"));
    }
    fusion(); maj(); toast(nouveaux.length + " ligne(s) importée(s)");
  }, { danger: false, libelle: "Importer" });
});

// ------------------------------------------------------------------ reprise automatique de l'historique (v65)
const REPRISE = "comportement-1sti2d-2026-11-03";
let repriseFaite = false;
async function repriseAutomatique() {
  if (repriseFaite || !docsServeur) return;
  repriseFaite = true;
  let reg = {};
  try { const d = await getDoc(doc(db, "reglages", "prof")); reg = d.exists() ? (d.data() || {}) : {}; }
  catch (e) { repriseFaite = false; return; }                      // règles pas encore à jour, hors ligne : plus tard
  if (reg.imports && reg.imports[REPRISE]) return;
  let paquet = null;
  try { paquet = await lireDonnees("comportement_import_1sti2d.json"); } catch (e) { return; }      // absent de cette version
  if (!paquet || paquet.format !== "neruda-comportement-import" || !Array.isArray(paquet.lignes)) return;
  const valides = [];
  for (const x of paquet.lignes) {
    if (!x || !/^[0-9a-f]{20}$/.test(x.id || "")) continue;
    const l = await dechiffrerDoc("comportement/" + x.id, x);
    if (l && l.ident && dateValide(l.date)) valides.push([x, l]);
  }
  if (!valides.length) return;                                     // autre clé : on ne marque rien
  const nouveaux = valides.filter(([x]) => !DOCS.has(x.id) && !attente.has(x.id));
  try {
    for (let k = 0; k < nouveaux.length; k += 400) {
      const b = writeBatch(db);
      nouveaux.slice(k, k + 400).forEach(([x, l]) => { b.set(doc(db, "comportement", x.id), { v: 1, iv: x.iv, d: x.d }); attente.set(x.id, l); });
      await b.commit();
    }
    const imports = Object.assign({}, reg.imports || {}); imports[REPRISE] = auj();
    await setDoc(doc(db, "reglages", "prof"), { imports, maj: Date.now() }, { merge: true });
  } catch (e) { toast("Reprise de l'historique refusée par la base (" + (e.code || "erreur") + ")"); repriseFaite = false; return; }
  fusion(); maj();
  if (nouveaux.length) toast("Historique de l'ancienne application repris : " + nouveaux.length + " ligne" + (nouveaux.length > 1 ? "s" : "") + " (18/09 → 16/10)");
}

// ------------------------------------------------------------------ démarrage
function changerClasse() {
  reglage("comportement-classe", classe);
  ELEVES = R.eleves.filter(e => e.classe === classe);
  critere = null; grille(); basculerMode(mode);
}
$("classe").addEventListener("change", () => { classe = $("classe").value; changerClasse(); });
$("date").addEventListener("change", maj);
$("date").value = auj();
document.querySelectorAll("nav.bas button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll("nav.bas button").forEach(x => x.classList.remove("on")); b.classList.add("on");
  document.querySelectorAll(".vue").forEach(v => v.classList.remove("on"));
  $("v-" + b.dataset.v).classList.add("on");
}));
window.addEventListener("offline", () => afficherSynchro($("sync"), { fromCache: true }));

garde($("verrou")).then(async () => {
  try { R = await eleves(); }
  catch (e) { document.querySelector("main").innerHTML = '<div class="panne"><b>Liste des élèves illisible</b><p>Recharger la page ; si cela persiste, refermer puis rouvrir le code enseignant depuis l\'espace prof.</p></div>'; return; }
  const classes = Object.keys(R.classes).sort((a, b) => libClasse(a).localeCompare(libClasse(b), "fr"));
  if (!R.classes[classe]) classe = R.classes.sti2d ? "sti2d" : classes[0];
  $("classe").innerHTML = classes.map(c => `<option value="${esc(c)}">${esc(libClasse(c))}</option>`).join("");
  $("classe").value = classe;
  $("barre").hidden = false; $("nav").hidden = false;
  ["v-classe", "v-journal", "v-bilan", "v-export"].forEach(v => { $(v).hidden = false; });
  changerClasse();
  let tour = 0;
  onSnapshot(collection(db, "comportement"), { includeMetadataChanges: true }, async snap => {
    const n = ++tour, m = new Map(); let ko = 0;
    docsServeur = docsServeur || !snap.metadata.fromCache;
    await Promise.all(snap.docs.map(async d => {
      const l = await dechiffrerDoc("comportement/" + d.id, d.data());
      if (l) m.set(d.id, l); else ko++;
    }));
    if (n !== tour) return;
    DOCS = m; illisibles = ko;
    attente.forEach((l, id) => { const x = m.get(id); if (x && (x.ts || "") >= (l.ts || "")) attente.delete(id); });
    effaces.forEach(id => { if (!m.has(id)) effaces.delete(id); });
    afficherSynchro($("sync"), snap.metadata);
    fusion(); maj();
    if (docsServeur && !repriseFaite) repriseAutomatique();
  }, e => { $("sync").textContent = "● lecture refusée (" + (e.code || "erreur") + ")"; });
});
