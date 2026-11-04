/* =====================================================================
   evaluer.js — page Évaluer de l'espace prof (v62, novembre 2026 ; v63 : indicateurs « sur la feuille »)

   Reprend les applications « Évaluation U51 » du groupe 1 et d'ETA1
   (septembre-octobre 2026) : tuiles photo, grille par élève ou par groupe,
   pointage par indicateur, composition des groupes, bilan, copie pour le
   registre Excel — avec en plus le choix de la classe, la gestion des
   épreuves (créer, modifier, dupliquer, importer) et la publication aux
   élèves.

   Base Firestore (règles v3) :
     grilles/{id}                     définition de l'épreuve (prof seul, en clair : aucune donnée d'élève)
     grilles/{id}/saisies/{opaque}    une saisie par élève, CHIFFRÉE sur l'appareil (socle.js) ;
                                      nom du document = HMAC("saisie|<id>|<identifiant>"), opaque
     epreuves/{id}                    fiche publique de l'épreuve, écrite à la publication
     epreuves/{id}/copies/{identifiant}  niveaux et note publiés, lisibles par l'élève seul
   ===================================================================== */
import {
  db, doc, setDoc, deleteDoc, collection, onSnapshot, writeBatch, getDocs,
  garde, eleves, lireDonnees, photo, esc, auj, fr, dateValide, reglage, idOpaque, chiffrerDoc, dechiffrerDoc,
  toast, ouvrirFeuille, fermerFeuille, feuille, confirmer, copier, telecharger, csv, cellule, afficherSynchro
} from "./socle.js";
import {
  NIVEAUX, COMPETENCES, PROFILS, CRITERES, NOMCOMP, poids, comps, inds, nbTot, nbObs, propose, niveau,
  arretee, note, fmt, commence, copiePubliee, fichePubliee, copieAJour, ligneRegistre, controlerGrille,
  feuille as indsFeuille, nbFeuille, aFixer
} from "./u51.js?v=63";                 // v63 : adresse nouvelle, jamais un ancien u51.js en cache

const $ = id => document.getElementById(id);
const clone = o => JSON.parse(JSON.stringify(o));

let R = null;                         // liste des élèves déchiffrée {classes, eleves}
const GRILLES = new Map();            // id → grille
let classe = reglage("evaluer-classe") || "";
let epId = reglage("evaluer-epreuve") || "";
let ELEVES = [];                      // élèves de l'épreuve courante
let HID = new Map();                  // identifiant → nom opaque du document de saisie
let SAISIES = new Map();              // identifiant → saisie déchiffrée (« _groupes » : composition)
const attente = new Map();            // identifiant → saisie modifiée ici, pas encore revenue de la base
const chaines = new Map();            // chemin → promesse : les écritures d'un même document partent dans l'ordre
const comEnCours = new Map();         // identifiant → envoi du commentaire en cours de frappe
let saisiesPretes = false;            // premier instantané des saisies appliqué ? (avant, une saisie partirait d'une fiche vide)
let COPIES = new Map();               // identifiant → copie publiée
let FICHE = null;                     // fiche publique epreuves/{id}
let desabonner = [];
let illisibles = 0;
let epAbonne = "";                    // épreuve dont les saisies sont suivies
let grillesServeur = false;           // la liste des grilles vient-elle de la base (et pas d'un cache encore vide) ?
let mode = "eleve", indCritere = null, etatCritere = "a", parGroupe = false, grpSel = 1;
let ouvert = null;                    // fiche ouverte : {membres, titre, liste, nums, pos, type}

const EP = () => GRILLES.get(epId) || null;
const chemin = ident => "grilles/" + epId + "/saisies/" + HID.get(ident);
const libClasse = c => (R && R.classes[c] && R.classes[c].libelle) || c;

// ------------------------------------------------------------------ saisies
function lire(ident) { return attente.get(ident) || SAISIES.get(ident) || null; }
function vierge(ident) { return { ident, epreuve: epId, date: auj(), ind: {}, niv: {}, com: "", ts: "" }; }
function ecrire(ident, modif) {
  if (!HID.has(ident)) return;
  if (!saisiesPretes) { toast("Lecture des saisies… un instant"); return; }
  const s = clone(lire(ident) || vierge(ident));
  s.ind = s.ind || {}; s.niv = s.niv || {};
  modif(s);
  s.ts = new Date().toISOString();
  attente.set(ident, s);
  rendre();
  const ch = chemin(ident);                     // figé maintenant : changer d'épreuve ensuite ne le détourne pas
  enchainer(ch, async () => {
    const data = await chiffrerDoc(ch, s);
    setDoc(doc(db, ch), data).catch(e => { console.warn("écriture refusée", e); toast("Écriture refusée par la base (" + (e.code || "erreur") + ")"); });
  });
}
function enchainer(ch, f) {
  const suite = (chaines.get(ch) || Promise.resolve()).then(f).catch(e => console.warn(e));
  chaines.set(ch, suite);
  suite.then(() => { if (chaines.get(ch) === suite) chaines.delete(ch); });
}
function envoyerCommentaires() { for (const f of [...comEnCours.values()]) f(); }
window.addEventListener("pagehide", envoyerCommentaires);
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") envoyerCommentaires(); });
function effacer(ident) {
  if (!HID.has(ident)) return;
  attente.delete(ident); SAISIES.delete(ident);
  rendre();
  const ch = chemin(ident);
  enchainer(ch, async () => { deleteDoc(doc(db, ch)).catch(e => console.warn(e)); });
}

// ------------------------------------------------------------------ groupes de travail
const grpDoc = () => lire("_groupes");
function grpDe(ident) { const d = grpDoc(); return (d && d.g && d.g[ident]) || 0; }
function groupes() {
  const m = new Map();
  ELEVES.forEach(e => { const g = grpDe(e.id); if (g) { if (!m.has(g)) m.set(g, []); m.get(g).push(e.id); } });
  return [...m.entries()].sort((a, b) => a[0] - b[0]).map(([num, membres]) => ({ num, membres }));
}
const seuls = () => ELEVES.map(e => e.id).filter(id => !grpDe(id));
function ecrireGroupes(modif) {
  ecrire("_groupes", d => { d.g = d.g || {}; modif(d.g); delete d.ind; delete d.niv; });
}
const prochainNum = () => groupes().reduce((m, g) => Math.max(m, g.num), 0) + 1;
const taille = k => ({ 1: "1 élève", 2: "binôme", 3: "trinôme" }[k] || k + " élèves");
function repartir(t) {
  const libres = seuls();
  if (!libres.length) return toast("Tous les élèves ont déjà un groupe");
  const nb = Math.ceil(libres.length / t), base = prochainNum();
  const petit = Math.floor(libres.length / nb), reste = libres.length % nb;
  const tailles = Array.from({ length: nb }, (_, k) => petit + (k < reste ? 1 : 0));
  let k = 0;
  ecrireGroupes(g => { tailles.forEach((n, num) => { for (let x = 0; x < n; x++) g[libres[k++]] = base + num; }); });
  grpSel = base;
  const nt = tailles.filter(x => x === 3).length, nd = tailles.filter(x => x === 2).length, ns = tailles.filter(x => x === 1).length;
  const autres = tailles.filter(x => x > 3).length;
  toast([nt ? nt + " trinôme" + (nt > 1 ? "s" : "") : "", nd ? nd + " binôme" + (nd > 1 ? "s" : "") : "", ns ? ns + " élève seul" : "",
         autres ? autres + " groupe" + (autres > 1 ? "s" : "") + " plus grand" + (autres > 1 ? "s" : "") : ""].filter(Boolean).join(", ") + " — composition modifiable");
}
function renumeroter() {
  const gs = groupes();
  if (gs.every((g, k) => g.num === k + 1)) return;
  ecrireGroupes(g => { gs.forEach((x, k) => x.membres.forEach(id => { g[id] = k + 1; })); });
}
const nomDe = id => { const e = ELEVES.find(x => x.id === id); return e ? e.affiche : id; };
const prenomDe = id => { const e = ELEVES.find(x => x.id === id); return e ? e.prenom.split(/[ -]/)[0] : id; };
const eleveDe = id => ELEVES.find(x => x.id === id);

// ------------------------------------------------------------------ tuiles
let dispo = "";
function grille(force) {
  const gs = groupes(), s = seuls();
  const cle = JSON.stringify([epId, ELEVES.map(e => e.id), gs, s, mode]);
  if (cle === dispo && !force) return;
  dispo = cle;
  const tuile = id => `<div class="tuile" id="t-${esc(id)}" data-id="${esc(id)}" tabindex="0" role="button" aria-label="${esc(nomDe(id))}">
      <span class="marque" hidden></span><span class="badge" hidden></span>
      <img src="${photo(eleveDe(id))}" alt=""><div class="nm">${esc(nomDe(id))}</div><div class="pips"></div></div>`;
  let h = "";
  if (!gs.length) h = `<div class="grille">${ELEVES.map(e => tuile(e.id)).join("")}</div>`;
  else {
    gs.forEach(g => {
      h += `<section class="grp"><div class="grp-t"><b>Groupe ${g.num}</b><span>${taille(g.membres.length)}</span>
        ${mode === "compo" ? "" : `<button type="button" class="mini evg" data-g="${g.num}">Évaluer le groupe ›</button>`}</div>
        <div class="grille">${g.membres.map(tuile).join("")}</div></section>`;
    });
    if (s.length) h += `<section class="grp seul"><div class="grp-t"><b>Sans groupe</b><span>${s.length} élève${s.length > 1 ? "s" : ""}</span></div>
        <div class="grille">${s.map(tuile).join("")}</div></section>`;
  }
  const g = $("grille");
  g.innerHTML = h;
  g.querySelectorAll(".tuile").forEach(t => {
    t.addEventListener("click", () => toucher(t.dataset.id));
    t.addEventListener("keydown", k => { if (k.key === "Enter" || k.key === " ") { k.preventDefault(); toucher(t.dataset.id); } });
  });
  g.querySelectorAll(".evg").forEach(b => b.addEventListener("click", () => ouvrirGroupe(+b.dataset.g)));
}

function rendre() {
  const ep = EP();
  if (!ep) return;
  grille();
  const evals = ELEVES.map(e => lire(e.id));
  const commences = evals.filter(commence).length;
  $("cpt").textContent = commences + "/" + ELEVES.length + " élèves commencés" + (illisibles ? " · " + illisibles + " saisie(s) illisible(s)" : "");
  ELEVES.forEach((e, i) => {
    const t = document.getElementById("t-" + e.id); if (!t) return;
    const s = evals[i], n = note(ep, s);
    const b = t.querySelector(".badge");
    b.hidden = !n; if (n) { b.textContent = n.complet ? fmt(n.v) : (nbObs(ep, s) < nbTot(ep) ? nbObs(ep, s) + "/" + nbTot(ep) : "à fixer"); b.className = "badge" + (n.complet ? "" : " prov"); }
    t.querySelector(".pips").innerHTML = comps(ep).map(c => { const l = niveau(ep, s, c); return `<span class="pip ${l || ""}${l && !arretee(ep, s, c) ? " encours" : ""}">${l || c}</span>`; }).join("");
    const m = t.querySelector(".marque");
    t.classList.remove("a", "p", "n", "sel");
    m.hidden = true;
    if (mode === "critere" && indCritere) {
      const st = s && s.ind && s.ind[indCritere.id];
      m.hidden = !st; if (st) { m.className = "marque " + st; m.textContent = { a: "✓", p: "½", n: "✗" }[st]; t.classList.add(st); }
    }
    if (mode === "compo" && grpDe(e.id) === grpSel) { t.classList.add("sel"); m.hidden = false; m.className = "marque g"; m.textContent = grpSel; }
  });
  const bc = $("critere");
  if (mode === "critere") {
    const nb = indCritere ? evals.filter(s => s && s.ind && s.ind[indCritere.id]).length : 0;
    bc.textContent = indCritere ? `${indCritere.c} · ${indCritere.t}  (${nb}/${ELEVES.length})` : "Choisir un indicateur…";
    bc.classList.toggle("choisi", !!indCritere);
    $("par-groupe").hidden = !groupes().length;
  }
  if (mode === "compo") rendreCompo();
  $("aide-groupe").textContent = {
    eleve: "Touchez une photo pour ouvrir la grille de l'élève, ou « Évaluer le groupe » pour saisir tout un groupe sur une seule fiche. Pastilles : niveau de chaque compétence, pâles tant qu'elle est en cours d'observation. Badge : indicateurs renseignés au poste (« à fixer » : niveaux à fixer après la feuille), puis note sur 20 quand tout est arrêté.",
    critere: "Choisissez un indicateur et un état, puis touchez les photos concernées. Avec « Tout le groupe », une photo marque tous les membres de son groupe. Toucher à nouveau une photo déjà marquée de cet état efface la marque.",
    compo: "« Binômes auto » ou « Trinômes auto » placent d'un coup les élèves sans groupe, dans l'ordre de la liste. Pour composer ou corriger à la main : choisissez un groupe en haut, puis touchez les élèves à y mettre ; toucher un élève déjà dans ce groupe le retire. Les groupes se recomposent à tout moment sans toucher aux évaluations."
  }[mode];
  rendreBilan();
  if (ouvert) rafraichirFeuille();
}
function basculerMode(m) {
  if (mode === "compo" && m !== "compo") renumeroter();
  mode = m;
  $("m-eleve").classList.toggle("on", m === "eleve");
  $("m-critere").classList.toggle("on", m === "critere");
  $("m-compo").classList.toggle("on", m === "compo");
  $("critere").hidden = m !== "critere";
  $("etats").hidden = m !== "critere";
  $("compo").hidden = m !== "compo";
  if (m === "compo") { const gs = groupes(); grpSel = gs.length ? gs[0].num : 1; }
  rendre();
}
function toucher(id) {
  if (mode === "compo") { ecrireGroupes(g => { if (g[id] === grpSel) delete g[id]; else g[id] = grpSel; }); return; }
  if (mode === "critere") {
    if (!indCritere) { choisirIndicateur(); return; }
    const code = indCritere.id;
    const cibles = (parGroupe && grpDe(id)) ? groupes().find(g => g.num === grpDe(id)).membres : [id];
    const s0 = lire(id), efface = s0 && s0.ind && s0.ind[code] === etatCritere;
    cibles.forEach(j => ecrire(j, s => { if (efface) delete s.ind[code]; else s.ind[code] = etatCritere; }));
    return;
  }
  ouvrirEleve(id);
}
function rendreCompo() {
  const gs = groupes(), nums = gs.map(g => g.num);
  if (!nums.includes(grpSel) && grpSel !== prochainNum()) grpSel = prochainNum();
  const liste = [...nums]; if (!liste.includes(grpSel)) liste.push(grpSel);
  $("compo-grp").innerHTML = liste.sort((a, b) => a - b).map(n => {
    const k = (gs.find(g => g.num === n) || { membres: [] }).membres.length;
    return `<button type="button" class="chip g${n === grpSel ? " on" : ""}" data-g="${n}">Groupe ${n} · ${k}</button>`;
  }).join("") + (nums.includes(grpSel) || !liste.length ? `<button type="button" class="chip" id="g-nouveau">+ Nouveau groupe</button>` : "");
  document.querySelectorAll("#compo-grp .chip[data-g]").forEach(c => c.addEventListener("click", () => { grpSel = +c.dataset.g; rendre(); }));
  const nv = $("g-nouveau");
  if (nv) nv.addEventListener("click", () => { grpSel = prochainNum(); rendre(); });
}

// ------------------------------------------------------------------ fiche : un élève ou un groupe entier
function ouvrirEleve(id) {
  ouvrir({ membres: [id], titre: nomDe(id), liste: ELEVES.map(e => [e.id]), pos: ELEVES.findIndex(e => e.id === id), type: "eleve" });
}
function ouvrirGroupe(num) {
  const gs = groupes(), pos = gs.findIndex(g => g.num === num);
  if (pos < 0) return;
  ouvrir({ membres: gs[pos].membres, titre: "Groupe " + num, liste: gs.map(g => g.membres), nums: gs.map(g => g.num), pos, type: "groupe" });
}
function ouvrir(o) { ouvert = o; construireFeuille(); }
function deplacer(d) {
  const o = ouvert, n = o.liste.length, p = (o.pos + d + n) % n;
  o.pos = p; o.membres = o.liste[p];
  o.titre = o.type === "groupe" ? "Groupe " + o.nums[p] : nomDe(o.membres[0]);
  construireFeuille();
}
const SYM = { a: "✓", p: "½", n: "✗" }, LIB = { a: "Acquis", p: "Partiel", n: "Non acquis" };
/* v63 : indicateurs du document réponse, en rappel sous leur compétence (rien à cocher) ; ouverts d'office
   quand la compétence n'a aucun indicateur à cocher */
function rappelFeuille(ep, c) {
  const L = indsFeuille(ep, c);
  if (!L.length) return "";
  const titre = aFixer(ep, c)
    ? `Sur le document réponse · ${L.length} indicateur${L.length > 1 ? "s" : ""} — après correction, fixer le niveau ci-dessus`
    : `Sur le document réponse · ${L.length} indicateur${L.length > 1 ? "s" : ""} — à prendre en compte en ajustant le niveau`;
  return `<details class="rappel"${aFixer(ep, c) ? " open" : ""}><summary>${esc(titre)}</summary>
    ${L.map(x => `<div class="r-ind"><span class="code">${esc(x.id)}</span><div class="t">${esc(x.t)}<small>${x.q ? "q. " + esc(x.q) + " · " : ""}${esc(x.d || "")}</small></div></div>`).join("")}
  </details>`;
}
const tri = (k, cible) => `<div class="tri">${["a", "p", "n"].map(s => `<button type="button" class="${s}" data-k="${esc(k)}" data-s="${s}" data-i="${esc(cible)}" aria-label="${LIB[s]}">${SYM[s]}</button>`).join("")}</div>`;
function construireFeuille() {
  const o = ouvert, M = o.membres, multi = M.length > 1, ep = EP();
  const nav = o.liste.length > 1 ? `<div class="nav-el"><button type="button" class="mini" id="prec">‹ Précédent</button><button type="button" class="mini" id="suiv">Suivant ›</button></div>` : "";
  let h;
  if (!multi) {
    const id = M[0], e = eleveDe(id);
    h = `<div class="tete"><img src="${photo(e)}" alt="">
      <div class="qui"><b>${esc(e ? e.prenom + " " + e.nom : id)}</b><div class="sous">${esc(ep.nature)} · ${esc(ep.court)}${grpDe(id) ? " · groupe " + grpDe(id) : ""}</div>${nav}</div>
      <div class="note" data-note="${esc(id)}"></div></div>`;
  } else {
    h = `<div class="tete"><div class="qui"><b>${esc(o.titre)}</b><div class="sous">${esc(ep.nature)} · ${esc(ep.court)} · ${M.length} élèves, évaluation individuelle</div>${nav}</div></div>
      <div class="membres">${M.map(id => `<div class="mb"><img src="${photo(eleveDe(id))}" alt=""><span>${esc(nomDe(id))}</span><b class="note petite" data-note="${esc(id)}"></b></div>`).join("")}</div>
      <p class="etiq">« Groupe » applique l'état à tous les membres ; chaque élève reste corrigeable à part.</p>`;
  }
  comps(ep).forEach(c => {
    const chips = id => `<div class="niveaux">${NIVEAUX.map(n => `<button type="button" class="niv" data-c="${c}" data-n="${n[0]}" data-i="${esc(id)}">${n[0]}<span>${Math.round(n[2] * 100)} %</span></button>`).join("")}</div>`;
    h += `<div class="comp" data-c="${c}"><h3>${c}<span class="poids">${Math.round(poids(ep)[c] * 100)} % de la note</span></h3>
      <div class="intit">${esc(NOMCOMP[c])}</div>
      ${multi ? M.map(id => `<div class="nivrow"><span class="qn">${esc(prenomDe(id))}</span>${chips(id)}</div>`).join("")
              : chips(M[0]) + `<div class="etiq" data-etiq="${c}"></div>`}
      ${inds(ep, c).map(x => multi
        ? `<div class="ind multi"><div class="t">${esc(x.t)}<small>${x.q ? "q. " + esc(x.q) + " · " : ""}${esc(x.d || "")}</small></div>
           <div class="tris"><div class="trig tous"><span>Groupe</span>${tri(x.id, "*")}</div>
           ${M.map(id => `<div class="trig"><span>${esc(prenomDe(id))}</span>${tri(x.id, id)}</div>`).join("")}</div></div>`
        : `<div class="ind"><div class="t">${esc(x.t)}<small>${x.q ? "q. " + esc(x.q) + " · " : ""}${esc(x.d || "")}</small></div>${tri(x.id, M[0])}</div>`).join("")}
      ${rappelFeuille(ep, c)}
    </div>`;
  });
  h += `<div class="sect">Commentaire pour le jury (jamais publié)</div>` + M.map(id =>
      `${multi ? `<label class="lab" for="com-${esc(id)}">${esc(nomDe(id))}</label>` : ""}<textarea id="com-${esc(id)}" data-i="${esc(id)}" placeholder="Observations, aide apportée, incident de manipulation…"></textarea>`).join("") +
    `<div style="height:10px"></div><button type="button" class="gros sec" id="fermer">Fermer</button>
    <button type="button" class="gros danger" id="raz">Effacer ${multi ? "les évaluations de ce groupe" : "l'évaluation de cet élève"}</button>`;
  envoyerCommentaires();                         // un commentaire en cours de frappe part avant de changer de fiche
  const f = ouvrirFeuille(h, () => { envoyerCommentaires(); ouvert = null; });
  f.querySelectorAll(".tri button").forEach(b => b.addEventListener("click", () => {
    const k = b.dataset.k, s = b.dataset.s;
    if (b.dataset.i === "*") {
      const tous = M.every(id => ((lire(id) || {}).ind || {})[k] === s);
      M.forEach(id => ecrire(id, x => { if (tous) delete x.ind[k]; else x.ind[k] = s; }));
    } else {
      const id = b.dataset.i;
      ecrire(id, x => { if (x.ind[k] === s) delete x.ind[k]; else x.ind[k] = s; });
    }
  }));
  f.querySelectorAll(".niv").forEach(b => b.addEventListener("click", () => {
    const c = b.dataset.c, n = b.dataset.n, id = b.dataset.i;
    ecrire(id, x => { if (x.niv[c] === n) delete x.niv[c]; else x.niv[c] = n; });
  }));
  f.querySelectorAll("textarea").forEach(ta => {
    const id = ta.dataset.i, ici = epId;
    ta.value = (lire(id) || {}).com || "";
    let tc = null;
    const envoyer = () => {
      clearTimeout(tc); comEnCours.delete(id);
      if (ici === epId && ((lire(id) || {}).com || "") !== ta.value) ecrire(id, x => { x.com = ta.value; });
    };
    ta.addEventListener("input", () => { clearTimeout(tc); comEnCours.set(id, envoyer); tc = setTimeout(envoyer, 700); });
    ta.addEventListener("blur", envoyer);
  });
  f.querySelector("#fermer").addEventListener("click", fermerFeuille);
  if (nav) { f.querySelector("#prec").addEventListener("click", () => deplacer(-1)); f.querySelector("#suiv").addEventListener("click", () => deplacer(1)); }
  f.querySelector("#raz").addEventListener("click", () => confirmer(
    multi ? `Effacer les évaluations des ${M.length} élèves du ${o.titre.toLowerCase()} pour cette épreuve ?` : `Effacer toute l'évaluation de ${nomDe(M[0])} pour cette épreuve ?`,
    () => { M.forEach(effacer); ouvert = null; toast("Évaluation effacée"); },
    { retour: () => construireFeuille() }));
  rafraichirFeuille();
}
function rafraichirFeuille() {
  const o = ouvert, ep = EP(), f = feuille();
  if (!o || !ep || !f.querySelector("[data-note]")) return;
  o.membres.forEach(id => {
    const s = lire(id), n = note(ep, s), el = f.querySelector(`[data-note="${CSS.escape(id)}"]`);
    if (el) el.innerHTML = n ? `${fmt(n.v)}<small>/20${n.complet ? "" : " · provisoire"}</small>` : `—<small>/20</small>`;
  });
  f.querySelectorAll(".tri button").forEach(b => {
    const k = b.dataset.k, s = b.dataset.s;
    const on = b.dataset.i === "*" ? o.membres.every(id => ((lire(id) || {}).ind || {})[k] === s) : (((lire(b.dataset.i) || {}).ind || {})[k] === s);
    b.classList.toggle("on", on);
  });
  comps(ep).forEach(c => {
    o.membres.forEach(id => {
      const s = lire(id), p = propose(ep, s, c), choisi = s && s.niv && s.niv[c], eff = choisi || p;
      f.querySelectorAll(`.niv[data-c="${c}"][data-i="${CSS.escape(id)}"]`).forEach(b => {
        b.className = "niv" + (b.dataset.n === eff ? " on " + eff : "") + (choisi && p && choisi !== p && b.dataset.n === p ? " prop" : "");
      });
    });
    const et = f.querySelector(`[data-etiq="${c}"]`);
    if (et) {
      const s = lire(o.membres[0]), p = propose(ep, s, c), choisi = s && s.niv && s.niv[c];
      const obs = inds(ep, c).filter(x => s && s.ind && s.ind[x.id]).length;
      const surFeuille = indsFeuille(ep, c).length > 0;
      if (aFixer(ep, c)) {
        et.textContent = choisi
          ? `Niveau fixé par l'examinateur. Toucher ${choisi} à nouveau pour l'effacer.`
          : (surFeuille ? "Rien à cocher au poste : fixer le niveau après correction du document réponse. La note reste provisoire jusque-là."
                        : "Rien à cocher : fixer le niveau à la main. La note reste provisoire jusque-là.");
      } else {
        et.textContent = choisi
          ? `Niveau fixé par l'examinateur${p && p !== choisi ? " (indicateurs : " + p + ", en pointillé)" : ""}. Toucher ${choisi} à nouveau pour revenir au niveau proposé.`
          : (p ? `Niveau proposé par les indicateurs du poste (${obs}/${inds(ep, c).length} observés). ${surFeuille ? "Après lecture de la feuille, toucher un autre niveau pour l'ajuster." : "Toucher un autre niveau pour le corriger."}`
               : "Aucun indicateur observé.");
      }
    }
  });
  f.querySelectorAll("textarea").forEach(ta => { if (document.activeElement !== ta) ta.value = (lire(ta.dataset.i) || {}).com || ""; });
}

// ------------------------------------------------------------------ mode par indicateur
function choisirIndicateur() {
  const ep = EP();
  let h = '<div class="tete"><div class="qui"><b>Indicateur à pointer</b><div class="sous">Ensuite, touchez les photos concernées</div></div></div>';
  comps(ep).forEach(c => {
    if (!inds(ep, c).length) return;           // compétence sans indicateur à cocher : niveau fixé dans la fiche
    h += `<div class="sect">${c} · ${esc(NOMCOMP[c])}</div>` + inds(ep, c).map(x =>
      `<button type="button" class="ev" data-k="${esc(x.id)}"><span>${esc(x.t)}</span><small>${x.q ? "q. " + esc(x.q) : ""}</small></button>`).join("");
  });
  if (!nbTot(ep)) h += '<p class="aide">Cette épreuve n\'a aucun indicateur à cocher au poste : les niveaux se fixent dans la fiche de chaque élève.</p>';
  h += '<button type="button" class="gros sec" id="fermer">Fermer</button>';
  ouvert = null;
  const f = ouvrirFeuille(h);
  f.querySelectorAll(".ev").forEach(b => b.addEventListener("click", () => {
    comps(ep).forEach(c => inds(ep, c).forEach(x => { if (x.id === b.dataset.k) indCritere = Object.assign({}, x, { c }); }));
    fermerFeuille(); rendre();
  }));
  f.querySelector("#fermer").addEventListener("click", fermerFeuille);
}
document.querySelectorAll("#etats .chip[data-e]").forEach(c => c.addEventListener("click", () => {
  etatCritere = c.dataset.e;
  document.querySelectorAll("#etats .chip[data-e]").forEach(x => x.classList.toggle("on", x === c));
}));
$("par-groupe").addEventListener("click", e => { parGroupe = !parGroupe; e.currentTarget.classList.toggle("on", parGroupe); });
$("tous").addEventListener("click", () => {
  if (!indCritere) return choisirIndicateur();
  const lib = { a: "acquis", p: "partiel", n: "non acquis" }[etatCritere];
  confirmer(`Marquer « ${indCritere.t} » comme ${lib} pour les élèves qui n'ont encore rien sur cet indicateur ?`, () => {
    ELEVES.forEach(e => { const s = lire(e.id); if (!s || !s.ind || !s.ind[indCritere.id]) ecrire(e.id, x => { x.ind[indCritere.id] = etatCritere; }); });
    toast("Indicateur appliqué à tous les élèves");
  }, { danger: false });
});
$("m-eleve").addEventListener("click", () => basculerMode("eleve"));
$("m-critere").addEventListener("click", () => { basculerMode("critere"); if (!indCritere) choisirIndicateur(); });
$("m-compo").addEventListener("click", () => basculerMode("compo"));
$("critere").addEventListener("click", choisirIndicateur);
$("g-fini").addEventListener("click", () => basculerMode("eleve"));
$("g-binomes").addEventListener("click", () => repartir(2));
$("g-trinomes").addEventListener("click", () => repartir(3));
$("g-vider").addEventListener("click", () => confirmer(
  "Défaire tous les groupes de cette épreuve ? Les évaluations déjà saisies sont conservées.",
  () => { ecrireGroupes(g => { Object.keys(g).forEach(k => delete g[k]); }); grpSel = 1; toast("Groupes défaits"); }));

// ------------------------------------------------------------------ bilan et publication
function rendreBilan() {
  const ep = EP(); if (!ep) return;
  const cs = comps(ep);
  $("thead").innerHTML = `<tr><th style="text-align:left">Élève</th><th>Gr.</th>${cs.map(c => `<th>${c}<br><span style="font-weight:500">${Math.round(poids(ep)[c] * 100)} %</span></th>`).join("")}<th>Note /20</th><th>Indic.</th><th>Publié</th></tr>`;
  const notes = [];
  let publies = 0, perimes = 0;
  $("tbody").innerHTML = ELEVES.map(e => {
    const s = lire(e.id), n = note(ep, s), cp = COPIES.get(e.id);
    if (n && n.complet) notes.push(n.v);
    let pub = "—";
    if (cp) { publies++; if (copieAJour(ep, s, cp)) pub = '<span class="pub ok">✓</span>'; else { perimes++; pub = '<span class="pub modif" title="modifié depuis la publication">✓*</span>'; } }
    return `<tr class="cl" data-id="${esc(e.id)}"><td class="nom"><span class="n"><img src="${photo(e)}" alt="">${esc(e.affiche)}</span></td><td style="color:var(--gris)">${grpDe(e.id) || "—"}</td>
      ${cs.map(c => { const l = niveau(ep, s, c), f = s && s.niv && s.niv[c]; return `<td><span class="lv ${l || "vide"}${f ? " force" : ""}${l && !arretee(ep, s, c) ? " encours" : ""}">${l || "—"}</span></td>`; }).join("")}
      <td><b>${n ? fmt(n.v) : "—"}</b>${n && !n.complet ? ' <small style="color:var(--gris)">prov.</small>' : ""}</td>
      <td style="color:var(--gris)">${nbObs(ep, s)}/${nbTot(ep)}</td><td>${pub}</td></tr>`;
  }).join("");
  document.querySelectorAll("#tbody tr").forEach(r => r.addEventListener("click", () => ouvrirEleve(r.dataset.id)));
  const moy = notes.length ? fmt(notes.reduce((a, b) => a + b, 0) / notes.length) : "—";
  $("resume").innerHTML =
    `<div><b>${notes.length}/${ELEVES.length}</b>notes complètes</div><div><b>${moy}</b>moyenne</div>
     <div><b>${cs.map(c => Math.round(poids(ep)[c] * 100)).join(" / ")}</b>${esc(PROFILS[ep.profil][0].toLowerCase())}</div>
     <div><b>${publies}</b>publiée${publies > 1 ? "s" : ""}${perimes ? " (" + perimes + " à mettre à jour)" : ""}</div>`;
  $("publier").textContent = publies ? "Mettre à jour la publication…" : "Publier aux élèves…";
  $("depublier").hidden = !publies && !FICHE;
}
$("publier").addEventListener("click", () => {
  const ep = EP(); if (!ep) return;
  const prets = ELEVES.filter(e => { const n = note(ep, lire(e.id)); return n && n.complet; });
  const autres = ELEVES.length - prets.length;
  if (!prets.length) return toast("Aucune note complète à publier");
  confirmer(`Publier pour ${prets.length} élève${prets.length > 1 ? "s" : ""} dont la note est complète ? Chacun verra dans « Mon espace » ses niveaux par compétence et sa note sur 20 pour « ${ep.court} » — ni les indicateurs, ni le commentaire pour le jury.`
    + (autres ? ` ${autres} élève${autres > 1 ? "s" : ""} sans note complète ne ${autres > 1 ? "sont" : "est"} pas publié${autres > 1 ? "s" : ""}.` : ""), () => {
    const b = writeBatch(db);
    b.set(doc(db, "epreuves", epId), fichePubliee(ep, auj()));
    prets.forEach(e => b.set(doc(db, "epreuves", epId, "copies", e.id), copiePubliee(ep, lire(e.id), auj())));
    b.commit().then(() => toast("Publication enregistrée"), e => toast("Publication refusée (" + (e.code || "erreur") + ")"));
    toast("Publication en cours…");
  }, { danger: false, libelle: "Publier" });
});
$("depublier").addEventListener("click", () => {
  confirmer("Retirer la publication de cette épreuve ? Les élèves ne verront plus ni leurs niveaux ni leur note ; vos saisies restent intactes.", () => {
    const b = writeBatch(db);
    COPIES.forEach((v, id) => b.delete(doc(db, "epreuves", epId, "copies", id)));
    b.delete(doc(db, "epreuves", epId));
    b.commit().then(() => toast("Publication retirée"), e => toast("Retrait refusé (" + (e.code || "erreur") + ")"));
  }, { libelle: "Retirer" });
});

// ------------------------------------------------------------------ export
function rangees() {
  const ep = EP();
  return ELEVES.map(e => { const s = lire(e.id); return commence(s) ? ligneRegistre(ep, s, e.affiche, epId) : null; }).filter(Boolean);
}
$("b-copie").addEventListener("click", async () => {
  const L = rangees();
  if (!L.length) return toast("Aucune évaluation à copier pour cette épreuve");
  toast((await copier(L.map(r => r.map(cellule).join("\t")).join("\n"))) ? L.length + " ligne(s) copiée(s)" : "Copie refusée par cet appareil");
});
$("b-csv").addEventListener("click", () => {
  const L = rangees();
  if (!L.length) return toast("Aucune évaluation à enregistrer");
  telecharger("U51_" + classe + "_" + epId + "_" + auj() + ".csv",
    csv([["Date", "Épreuve", "Élève", "C2", "C13", "C17", "C18", "Note", "Indicateurs", "Commentaire"]].concat(L)), "text/csv;charset=utf-8");
});
$("b-vide").addEventListener("click", () => confirmer(
  "Effacer toutes les évaluations de cette épreuve ? Pensez à les avoir copiées dans le registre. (Les groupes et une éventuelle publication sont conservés.)",
  () => { ELEVES.forEach(e => { if (lire(e.id)) effacer(e.id); }); toast("Saisies effacées"); }, { saisie: "EFFACER" }));

// ------------------------------------------------------------------ épreuves : choix, gestion, éditeur
function epreuvesDe(c) {
  return [...GRILLES.entries()].filter(([, g]) => g.classe === c)
    .sort((a, b) => String(a[1].date || "9999").localeCompare(String(b[1].date || "9999"))
      || (+a[1].ordre || 0) - (+b[1].ordre || 0) || String(a[1].court).localeCompare(String(b[1].court), "fr"))
    .map(([id]) => id);
}
const ordreSuivant = () => [...GRILLES.values()].reduce((m, g) => Math.max(m, +g.ordre || 0), 0) + 1;
function remplirSelecteurs() {
  const classes = Object.keys(R.classes).sort((a, b) => libClasse(a).localeCompare(libClasse(b), "fr"));
  if (!R.classes[classe]) classe = [...GRILLES.values()].length ? ([...GRILLES.values()][0].classe || classes[0]) : (R.classes.et1a ? "et1a" : classes[0]);
  $("classe").innerHTML = classes.map(c => `<option value="${esc(c)}">${esc(libClasse(c))} (${epreuvesDe(c).length})</option>`).join("");
  $("classe").value = classe;
  const ids = epreuvesDe(classe);
  if (!ids.includes(epId)) epId = ids[0] || "";
  $("epreuve").innerHTML = ids.map(id => { const g = GRILLES.get(id); return `<option value="${esc(id)}">${esc(g.court || id)} — ${esc(g.nature || "")}</option>`; }).join("");
  $("epreuve").value = epId;
  $("epreuve").hidden = !ids.length;
}
$("classe").addEventListener("change", () => { classe = $("classe").value; reglage("evaluer-classe", classe); epId = ""; changerEpreuve(); });
$("epreuve").addEventListener("change", () => { epId = $("epreuve").value; changerEpreuve(); });

async function changerEpreuve() {
  remplirSelecteurs();
  reglage("evaluer-classe", classe);
  desabonner.forEach(f => f()); desabonner = [];
  saisiesPretes = false;
  SAISIES = new Map(); COPIES = new Map(); FICHE = null; HID = new Map(); attente.clear(); illisibles = 0;
  indCritere = null; dispo = ""; ouvert = null;
  const ep = EP();
  const vide = !ep;
  $("sans-epreuve").hidden = !vide;
  ["v-groupe", "v-bilan", "v-export"].forEach(v => { $(v).hidden = vide; });
  $("nav").hidden = vide;
  if (vide) { epAbonne = ""; majVide(); $("cpt").textContent = ""; return; }
  reglage("evaluer-epreuve", epId);
  ELEVES = R.eleves.filter(e => e.classe === ep.classe && (!ep.groupe || e.groupe === ep.groupe));
  const ids = ELEVES.map(e => e.id).concat(["_groupes"]);
  const epRef = epId;
  const hids = await Promise.all(ids.map(id => idOpaque("saisie|" + epRef + "|" + id)));
  if (epId !== epRef) return;                    // l'épreuve a changé pendant le calcul
  ids.forEach((id, k) => HID.set(id, hids[k]));
  const parHid = new Map(ids.map((id, k) => [hids[k], id]));
  const ici = epId;
  epAbonne = epId;
  let tour = 0;                                  // les déchiffrements peuvent finir dans le désordre : seul le dernier compte
  desabonner.push(onSnapshot(collection(db, "grilles", epId, "saisies"), { includeMetadataChanges: true }, async snap => {
    const n = ++tour;
    const m = new Map(); let ko = 0;
    await Promise.all(snap.docs.map(async d => {
      const ident = parHid.get(d.id);
      const s = await dechiffrerDoc("grilles/" + ici + "/saisies/" + d.id, d.data());
      if (!s || !ident || s.ident !== ident) { ko++; return; }
      m.set(ident, s);
    }));
    if (ici !== epId || n !== tour) return;
    SAISIES = m; illisibles = ko; saisiesPretes = true;
    m.forEach((s, id) => { const a = attente.get(id); if (a && s.ts && a.ts <= s.ts) attente.delete(id); });
    afficherSynchro($("sync"), snap.metadata);
    rendre();
  }, e => { $("sync").textContent = "● lecture refusée (" + (e.code || "erreur") + ")"; }));
  desabonner.push(onSnapshot(collection(db, "epreuves", epId, "copies"), snap => {
    if (ici !== epId) return;
    COPIES = new Map(snap.docs.map(d => [d.id, d.data()])); rendreBilan();
  }, () => { }));
  desabonner.push(onSnapshot(doc(db, "epreuves", epId), d => { if (ici !== epId) return; FICHE = d.exists() ? d.data() : null; rendreBilan(); }, () => { }));
  basculerMode("eleve");
}

const PROFIL_LIB = p => PROFILS[p][0] + " (" + COMPETENCES.map(c => c[0]).filter(c => PROFILS[p][1][c] > 0).map(c => c + " " + Math.round(PROFILS[p][1][c] * 100) + " %").join(", ") + ")";
function gerer() {
  const ids = epreuvesDe(classe);
  let h = `<div class="tete"><div class="qui"><b>Épreuves — ${esc(libClasse(classe))}</b><div class="sous">${ids.length} épreuve${ids.length > 1 ? "s" : ""}</div></div></div>`;
  ids.forEach(id => {
    const g = GRILLES.get(id);
    h += `<div class="liste-ep${id === epId ? " courante" : ""}"><b>${esc(g.titre)}</b><div class="d">${esc(g.nature || "")} · ${esc(g.groupe ? "groupe " + g.groupe : "toute la classe")} · ${esc(PROFILS[g.profil] ? PROFILS[g.profil][0] : g.profil)} · ${nbTot(g)} indicateur${nbTot(g) > 1 ? "s" : ""} au poste${nbFeuille(g) ? " · " + nbFeuille(g) + " sur la feuille" : ""}${dateValide(g.date) ? " · " + esc(fr(g.date)) : ""}</div>
      <div class="etats"><button type="button" class="mini" data-ouvrir="${esc(id)}">Ouvrir</button><button type="button" class="mini" data-modifier="${esc(id)}">Modifier</button>
      <button type="button" class="mini" data-dupliquer="${esc(id)}">Dupliquer</button><button type="button" class="mini" data-exporter="${esc(id)}">Fichier .json</button>
      <button type="button" class="mini danger" data-supprimer="${esc(id)}">Supprimer</button></div></div>`;
  });
  h += `<div style="height:6px"></div><button type="button" class="gros" id="g-nouvelle">Nouvelle épreuve</button>
    <button type="button" class="gros sec" id="g-prep">Importer les grilles préparées</button>
    <button type="button" class="gros sec" id="g-fichier">Importer un fichier de grille (.json)</button>
    <button type="button" class="gros sec" id="g-fermer">Fermer</button>
    <p class="aide">Une grille ne contient aucune donnée d'élève : on peut l'exporter en fichier .json pour la garder ou la
    transmettre, puis la réimporter (dans une autre classe aussi). Modifier une grille après des saisies : les observations
    d'un indicateur supprimé ne comptent plus ; celles des indicateurs gardés restent.</p>`;
  const f = ouvrirFeuille(h);
  f.querySelectorAll("[data-ouvrir]").forEach(b => b.onclick = () => { epId = b.dataset.ouvrir; fermerFeuille(); changerEpreuve(); });
  f.querySelectorAll("[data-modifier]").forEach(b => b.onclick = () => editer(b.dataset.modifier, false));
  f.querySelectorAll("[data-dupliquer]").forEach(b => b.onclick = () => editer(b.dataset.dupliquer, true));
  f.querySelectorAll("[data-exporter]").forEach(b => b.onclick = () => {
    const g = GRILLES.get(b.dataset.exporter);
    telecharger("grille_" + b.dataset.exporter + ".json", JSON.stringify({ format: "neruda-grille-u51", v: 1, grille: Object.assign({ id: b.dataset.exporter }, g) }, null, 1), "application/json");
  });
  f.querySelectorAll("[data-supprimer]").forEach(b => b.onclick = () => supprimerEpreuve(b.dataset.supprimer));
  f.querySelector("#g-nouvelle").onclick = () => editer(null, false);
  f.querySelector("#g-prep").onclick = importerPreparees;
  f.querySelector("#g-fichier").onclick = () => $("fichier").click();
  f.querySelector("#g-fermer").onclick = fermerFeuille;
}
$("gerer").addEventListener("click", gerer);
$("nouvelle").addEventListener("click", () => editer(null, false));
$("importer-prep").addEventListener("click", importerPreparees);

function slug(s) {
  return String(s || "epreuve").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 24) || "epreuve";
}
function nouvelId(base) {
  let id = slug(base);
  while (GRILLES.has(id)) id = slug(base) + "-" + Math.random().toString(36).slice(2, 5);
  return id;
}
function propre(g) {
  const out = { titre: String(g.titre || "").trim(), court: String(g.court || g.titre || "").trim(), nature: String(g.nature || "").trim(),
    profil: PROFILS[g.profil] ? g.profil : "diag", classe: String(g.classe || classe), groupe: String(g.groupe || ""),
    date: dateValide(g.date) ? String(g.date) : "", ordre: +g.ordre || 0, indicateurs: {} };
  COMPETENCES.forEach(([c]) => {
    const L = (g.indicateurs && g.indicateurs[c]) || [];
    out.indicateurs[c] = L.map(x => Array.isArray(x) ? { id: x[0], t: x[1], q: x[2], d: x[3], f: x[4] } : x)
      .filter(x => x && typeof x === "object")
      .map(x => Object.assign({ id: String(x.id || "").trim().replace(/[^A-Za-z0-9_-]/g, "").slice(0, 24), t: String(x.t || "").trim(),
                   q: String(x.q || "").trim(), d: String(x.d || "").trim() }, x.f ? { f: true } : {}))   // f : sur la feuille (v63)
      .filter(x => x.id || x.t);
  });
  return out;
}
function editer(id, dupliquer) {
  const source = id ? clone(GRILLES.get(id)) : { titre: "", court: "", nature: "Activité de découverte (3 h)", profil: "diag", classe, groupe: "", date: "", indicateurs: {} };
  if (dupliquer) { source.titre += " (copie)"; source.court += " (copie)"; }
  const cible = (id && !dupliquer) ? id : null;
  const g = propre(source);
  const classes = Object.keys(R.classes);
  const groupesDe = c => (R.classes[c] && R.classes[c].groupes) || [];
  let h = `<div class="tete"><div class="qui"><b>${cible ? "Modifier l'épreuve" : dupliquer ? "Dupliquer l'épreuve" : "Nouvelle épreuve"}</b>
      <div class="sous">${cible ? "code " + esc(cible) : "le code est tiré du titre court"}</div></div></div>
    <label class="lab" for="e-titre">Titre</label><input class="champ-texte" id="e-titre" value="${esc(g.titre)}">
    <label class="lab" for="e-court">Titre court (menus, export, registre)</label><input class="champ-texte" id="e-court" value="${esc(g.court)}">
    <label class="lab" for="e-nature">Nature</label><input class="champ-texte" id="e-nature" list="natures" value="${esc(g.nature)}">
    <datalist id="natures"><option value="Activité de découverte (3 h)"><option value="TP évalué"><option value="Épreuve blanche"><option value="Situation d'évaluation U51 (CCF)"></datalist>
    <div class="deux"><div><label class="lab" for="e-classe">Classe</label><select class="champ-texte" id="e-classe">${classes.map(c => `<option value="${esc(c)}"${c === g.classe ? " selected" : ""}>${esc(libClasse(c))}</option>`).join("")}</select></div>
    <div><label class="lab" for="e-groupe">Élèves</label><select class="champ-texte" id="e-groupe"></select></div></div>
    <div class="deux"><div><label class="lab" for="e-profil">Profil (pondération nationale)</label><select class="champ-texte" id="e-profil">${Object.keys(PROFILS).map(p => `<option value="${p}"${p === g.profil ? " selected" : ""}>${esc(PROFIL_LIB(p))}</option>`).join("")}</select></div>
    <div><label class="lab" for="e-date">Date prévue (facultatif)</label><input class="champ-texte" type="date" id="e-date" value="${esc(g.date)}"></div></div>
    <div id="e-inds"></div>
    ${COMPETENCES.map(([c]) => `<datalist id="crit-${c}">${CRITERES[c].map(x => `<option value="${esc(x)}">`).join("")}</datalist>`).join("")}
    <p class="erreur" id="e-err"></p>
    <button type="button" class="gros" id="e-ok">Enregistrer</button><button type="button" class="gros sec" id="e-annuler">Annuler</button>`;
  const f = ouvrirFeuille(h);
  const remplirGroupes = () => {
    const c = f.querySelector("#e-classe").value;
    f.querySelector("#e-groupe").innerHTML = `<option value="">Toute la classe</option>` + groupesDe(c).map(x => `<option value="${esc(x)}"${x === g.groupe ? " selected" : ""}>Groupe ${esc(x)}</option>`).join("");
  };
  remplirGroupes();
  f.querySelector("#e-classe").onchange = () => { g.groupe = ""; remplirGroupes(); };
  const lireForm = () => {
    g.titre = f.querySelector("#e-titre").value; g.court = f.querySelector("#e-court").value; g.nature = f.querySelector("#e-nature").value;
    g.classe = f.querySelector("#e-classe").value; g.groupe = f.querySelector("#e-groupe").value; g.profil = f.querySelector("#e-profil").value;
    g.date = f.querySelector("#e-date").value;
    f.querySelectorAll(".ed-ligne").forEach(l => {
      const c = l.dataset.c, k = +l.dataset.k, x = g.indicateurs[c][k];
      x.t = l.querySelector(".t").value; x.q = l.querySelector(".q").value; x.d = l.querySelector(".crit").value;
      if (l.querySelector(".fe").checked) x.f = true; else delete x.f;
    });
  };
  const codeLibre = c => {
    const pris = new Set(); COMPETENCES.forEach(([k]) => (g.indicateurs[k] || []).forEach(x => pris.add(x.id)));
    for (let i = 0; i < 26 * 27; i++) {
      const s = i < 26 ? String.fromCharCode(97 + i) : String.fromCharCode(96 + Math.floor(i / 26)) + String.fromCharCode(97 + i % 26);
      if (!pris.has(c.toLowerCase() + s)) return c.toLowerCase() + s;
    }
    return c.toLowerCase() + Date.now();
  };
  const rendreInds = () => {
    const p = PROFILS[g.profil][1];
    f.querySelector("#e-inds").innerHTML = `<p class="aide">Chaque indicateur se coche <b>au poste</b>, ou s'évalue <b>sur la feuille</b> (case « feuille » :
      rappel dans la fiche, rien à cocher). Une compétence sans indicateur à cocher se note en fixant son niveau à la main.</p>` +
      COMPETENCES.map(([c, nom]) => {
      const L = g.indicateurs[c] || [], nf = L.filter(x => x.f).length, np = L.length - nf;
      return `<div class="ed-comp${p[c] > 0 ? "" : " zero"}">
      <h3>${c} · ${Math.round(p[c] * 100)} %${p[c] > 0 ? (L.length ? ` · ${np} au poste, ${nf} sur la feuille` : " · niveau fixé à la main") : " — non évaluée dans ce profil"}</h3><div class="etiq">${esc(nom)}</div>
      ${L.map((x, k) => `<div class="ed-ligne${x.f ? " fe-on" : ""}" data-c="${c}" data-k="${k}"><span class="code">${esc(x.id)}</span>
        <input class="champ-texte t" value="${esc(x.t)}" placeholder="Ce que l'examinateur observe" aria-label="Indicateur ${esc(x.id)}">
        <input class="champ-texte q" value="${esc(x.q)}" placeholder="q." aria-label="Question">
        <button type="button" class="mini danger" data-retirer="${c}:${k}" aria-label="Retirer ${esc(x.id)}">×</button>
        <label class="fe-lab" title="Évalué sur le document réponse : rappel dans la fiche, rien à cocher"><input type="checkbox" class="fe"${x.f ? " checked" : ""} aria-label="${esc(x.id)} : sur la feuille"> feuille</label>
        <input class="champ-texte crit" list="crit-${c}" value="${esc(x.d)}" placeholder="Critère national visé" aria-label="Critère national"></div>`).join("")}
      <button type="button" class="mini" data-ajouter="${c}">+ Indicateur ${c}</button></div>`; }).join("");
    f.querySelectorAll(".ed-ligne .fe").forEach(cb => cb.onchange = () => { lireForm(); rendreInds(); });
    f.querySelectorAll("[data-ajouter]").forEach(b => b.onclick = () => {
      lireForm(); const c = b.dataset.ajouter; (g.indicateurs[c] = g.indicateurs[c] || []).push({ id: codeLibre(c), t: "", q: "", d: "" }); rendreInds();
      const L = f.querySelectorAll(`.ed-ligne[data-c="${c}"] .t`); if (L.length) L[L.length - 1].focus();
    });
    f.querySelectorAll("[data-retirer]").forEach(b => b.onclick = () => { lireForm(); const [c, k] = b.dataset.retirer.split(":"); g.indicateurs[c].splice(+k, 1); rendreInds(); });
  };
  rendreInds();
  f.querySelector("#e-profil").onchange = () => { lireForm(); rendreInds(); };
  f.querySelector("#e-annuler").onclick = () => gerer();
  f.querySelector("#e-ok").onclick = async () => {
    lireForm();
    const final = propre(g);
    COMPETENCES.forEach(([c]) => { if (!(PROFILS[final.profil][1][c] > 0) && !final.indicateurs[c].length) delete final.indicateurs[c]; });
    const err = controlerGrille(final);
    if (err.length) { f.querySelector("#e-err").textContent = err.join(" ; "); return; }
    if (!cible && !baseLue()) return;
    const nid = cible || nouvelId(final.court || final.titre);
    final.maj = Date.now(); final.cree = (cible && GRILLES.get(cible).cree) || auj();
    if (!cible) final.ordre = ordreSuivant();
    try {
      setDoc(doc(db, "grilles", nid), final).catch(e => toast("Enregistrement refusé (" + (e.code || "erreur") + ")"));
      GRILLES.set(nid, final);                 // tout de suite, sans attendre l'aller-retour
      classe = final.classe; epId = nid; fermerFeuille(); changerEpreuve();
      toast(cible ? "Épreuve modifiée" : "Épreuve créée");
    } catch (e) { f.querySelector("#e-err").textContent = "Enregistrement impossible : " + e.message; }
  };
}
async function supprimerEpreuve(id) {
  const g = GRILLES.get(id);
  confirmer(`Supprimer l'épreuve « ${g.court} » avec TOUTES ses saisies et sa publication ? C'est définitif ; pensez à copier les saisies dans le registre avant.`, async () => {
    try {
      const [s, c] = await Promise.all([getDocs(collection(db, "grilles", id, "saisies")), getDocs(collection(db, "epreuves", id, "copies"))]);
      const b = writeBatch(db);
      s.docs.forEach(d => b.delete(d.ref || doc(db, "grilles", id, "saisies", d.id)));
      c.docs.forEach(d => b.delete(d.ref || doc(db, "epreuves", id, "copies", d.id)));
      b.delete(doc(db, "epreuves", id));
      b.delete(doc(db, "grilles", id));
      await b.commit();
      GRILLES.delete(id); if (epId === id) epId = "";
      changerEpreuve(); toast("Épreuve supprimée");
    } catch (e) { toast("Suppression refusée (" + (e.code || e.message) + ")"); }
  }, { saisie: "SUPPRIMER", libelle: "Supprimer" });
}
function majVide() {
  $("sans-epreuve-txt").textContent = grillesServeur
    ? "Aucune épreuve pour " + libClasse(classe) + " : importer les grilles déjà préparées, ou en créer une."
    : "Lecture des épreuves dans la base…";
  $("importer-prep").disabled = !grillesServeur; $("nouvelle").disabled = !grillesServeur;
}
/* tant que la liste des grilles n'est pas venue de la base, un code « libre » pourrait déjà y être pris :
   on n'importe ni ne crée rien (sinon une grille existante serait écrasée) */
function baseLue() {
  if (grillesServeur) return true;
  toast("Lecture de la base en cours : réessayer dans un instant");
  return false;
}
async function enregistrerGrilles(liste, origine) {
  if (!baseLue()) return { n: 0, deja: 0, existantes: [] };
  let n = 0, deja = 0, rang = ordreSuivant();
  const aEcrire = [], existantes = [];
  for (const brut of liste) {
    if (!brut || typeof brut !== "object") continue;
    const brutId = String(brut.id || "").trim();
    const id = /^[A-Za-z0-9_-]{1,40}$/.test(brutId) ? brutId : nouvelId(brut.court || brut.titre);
    if (GRILLES.has(id)) {
      deja++;
      const g = propre(brut);                    // v63 : proposée au remplacement (import d'un fichier)
      if (!controlerGrille(g).length) existantes.push([id, g]);
      continue;
    }
    const g = propre(brut);
    if (controlerGrille(g).length) continue;
    g.maj = Date.now(); g.cree = auj(); g.origine = String(origine).slice(0, 120); g.ordre = rang++;
    aEcrire.push([id, g]);
  }
  for (let k = 0; k < aEcrire.length; k += 400) {
    const b = writeBatch(db);
    aEcrire.slice(k, k + 400).forEach(([id, g]) => b.set(doc(db, "grilles", id), g));
    b.commit().catch(e => toast("Import refusé (" + (e.code || "erreur") + ")"));
  }
  aEcrire.forEach(([id, g]) => { GRILLES.set(id, g); n++; });
  return { n, deja, existantes };
}
/* v63 : remplacer des grilles déjà présentes par celles d'un fichier ; les saisies restent (elles sont rangées
   sous grilles/{id}/saisies et ne dépendent que des codes d'indicateurs) */
function remplacerGrilles(existantes, origine) {
  const b = writeBatch(db);
  existantes.forEach(([id, g]) => {
    const ancien = GRILLES.get(id) || {};
    g.maj = Date.now(); g.cree = ancien.cree || auj(); g.ordre = ancien.ordre || ordreSuivant();
    g.origine = String(origine).slice(0, 120);
    b.set(doc(db, "grilles", id), g);
    GRILLES.set(id, g);
  });
  b.commit().catch(e => toast("Remplacement refusé (" + (e.code || "erreur") + ")"));
  if (existantes.some(([id]) => id === epId)) { dispo = ""; }
  changerEpreuve();
  toast(existantes.length + " grille(s) remplacée(s) — saisies conservées");
}
async function importerPreparees() {
  try {
    const d = await lireDonnees("epreuves_u51.json");
    const r = await enregistrerGrilles(d.epreuves || [], "grilles préparées");
    fermerFeuille();
    if (!epId || !EP()) { const ids = epreuvesDe(classe); if (!ids.length) { const c = (d.epreuves[0] || {}).classe; if (c) classe = c; } }
    changerEpreuve();
    toast(r.n ? r.n + " grille(s) importée(s)" + (r.deja ? ", " + r.deja + " déjà présente(s)" : "") : "Toutes les grilles préparées sont déjà là");
  } catch (e) { toast("Grilles préparées illisibles (" + e.message + ")"); }
}
$("fichier").addEventListener("change", async ev => {
  const fi = ev.target.files && ev.target.files[0]; ev.target.value = "";
  if (!fi) return;
  try {
    const d = JSON.parse(await fi.text());
    const liste = d.grille ? [d.grille] : (Array.isArray(d.epreuves) ? d.epreuves : (Array.isArray(d) ? d : [d]));
    const r = await enregistrerGrilles(liste, "fichier " + fi.name);
    fermerFeuille(); changerEpreuve();
    if (r.existantes && r.existantes.length) {   // v63 : même code qu'une grille présente → proposer de la remplacer
      const noms = r.existantes.map(([id]) => "« " + ((GRILLES.get(id) || {}).court || id) + " »").join(", ");
      confirmer((r.n ? r.n + " grille(s) importée(s). " : "") + (r.existantes.length > 1 ? "Ces grilles existent déjà : " : "Cette grille existe déjà : ") + noms
        + (r.existantes.length > 1 ? ". Les remplacer" : ". La remplacer") + " par celle du fichier ? Les saisies sont conservées ; un indicateur retiré, ou passé « sur la feuille », ne compte plus dans le niveau proposé.",
        () => remplacerGrilles(r.existantes, "fichier " + fi.name), { titre: "Grille déjà présente", libelle: "Remplacer", danger: false });
      return;
    }
    toast(r.n ? r.n + " grille(s) importée(s)" : (r.deja ? "Grille déjà présente (même code) : la dupliquer pour en faire une autre" : "Aucune grille lisible dans ce fichier"));
  } catch (e) { toast("Fichier illisible"); }
});

// ------------------------------------------------------------------ navigation et démarrage
document.querySelectorAll("nav.bas button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll("nav.bas button").forEach(x => x.classList.remove("on")); b.classList.add("on");
  document.querySelectorAll(".vue").forEach(v => v.classList.remove("on"));
  $("v-" + b.dataset.v).classList.add("on");
}));
window.addEventListener("online", () => rendre());
window.addEventListener("offline", () => afficherSynchro($("sync"), { fromCache: true }));

garde($("verrou")).then(async () => {
  try { R = await eleves(); }
  catch (e) { document.querySelector("main").innerHTML = '<div class="panne"><b>Liste des élèves illisible</b><p>Recharger la page ; si cela persiste, refermer puis rouvrir le code enseignant depuis l\'espace prof.</p></div>'; return; }
  $("barre").hidden = false;
  let premier = true;
  onSnapshot(collection(db, "grilles"), { includeMetadataChanges: true }, snap => {
    grillesServeur = grillesServeur || !snap.metadata.fromCache;
    const avant = JSON.stringify(EP());
    GRILLES.clear(); snap.docs.forEach(d => GRILLES.set(d.id, d.data()));
    if (premier) { premier = false; changerEpreuve(); return; }
    remplirSelecteurs();
    // une grille arrivée de la base après un premier instantané vide (cache) : ouvrir l'épreuve proposée
    if (epId !== epAbonne) changerEpreuve();
    else if (JSON.stringify(EP()) !== avant) { dispo = ""; rendre(); }
    else if (!EP()) majVide();
  }, e => { $("sync").textContent = "● lecture refusée (" + (e.code || "erreur") + ")"; });
});
