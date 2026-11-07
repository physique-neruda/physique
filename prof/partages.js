/* =====================================================================
   partages.js — Corrigés partagés (espace prof, site v65, novembre 2026)

   Le professeur coche ou décoche les corrigés à débloquer (ceux de « Codes des corrigés ») :
     - pour une CLASSE : acces-classes/{classe} ;
     - pour un ÉLÈVE  : acces-eleves/{uid} (l'uid se lit dans sa fiche eleves/{uid}, par son identifiant) ;
   chaque document {v: 1, maj, d: {id: {s: "o", t, k} | {s: "f", t}}} (règles v6 : le professeur écrit ; la classe, ou
   l'élève, lit le sien). Coché (« o ») : la clé du corrigé k (HMAC-SHA256(kpr, "neruda|corriges|cle|" + id), calculée
   ici avec le code enseignant, socle.js cleCorrige) est dans le document : le corrigé s'ouvre sans code. Décoché (« f ») :
   la clé n'y est plus, l'appareil de l'élève efface celle qu'il avait (et deblocages/{uid}), les codes sont refusés
   (commun/corriges.js). Sans décision : les codes marchent comme avant. Entre la classe et l'élève, la décision la plus
   récente (t) l'emporte. Une activité en plusieurs parties : sa ligne « toute l'activité » coche ou décoche ses parties.
   Un changement s'écrit avec updateDoc champ par champ (d.<id> remplacé en entier : la clé d'un corrigé refermé ne
   reste jamais dans le document).
   Récapitulatif : par chapitre et par élève, ce qui est ouvert, fermé, ou débloqué par code (deblocages/, lus ici).
   Partages de départ (une fois) : donnees/partages_initiaux.json (corrigés des séances de la v64.2, exercices
   d'approfondissement ouverts à un élève) — normalement faits par « comptes_firebase.py cles » (outils v7) ;
   repère reglages/prof.partagesInitiaux.
   ===================================================================== */
import {
  garde, db, doc, getDoc, setDoc, getDocs, collection, updateDoc, deleteField, FieldPath, runTransaction,
  lireDonnees, eleves, esc, toast, confirmer, reglage, auj, cleCorrige, comptes, CLASSES_DE, FIL_DE
} from "./socle.js?v=65";

const $ = id => document.getElementById(id);
const MOTIF = /^[a-z0-9-]+\.[a-z0-9]+\.[A-Za-z0-9_-]+$/;
let MAN = null, ELV = null, FICHES = [], UID_DE = {}, DEB = {}, ACL = {}, AEL = {}, REG = {}, INIT = null;
let MODE = "classe", LIGNES = [];

function etoiles(n) { return n ? "★".repeat(n) : ""; }
function nomChapitre(t) { return String(t || "").replace(/\s+—\s+/, " · "); }
function court(e) {
  if (e.sorte === "exercice") return "Ex. " + e.n;
  if (e.sorte === "appro") return "Appro. (énoncé)";
  if (e.sorte === "appro_corrige") return "Appro. (corrigé)";
  return String(e.titre || e.el).replace(/^Activit[ée]\s*/i, "Act. ") + (e.partie ? " " + String(e.partie).replace(/^Partie\s*/, "") : "");
}

/* ------------------------------------------------------------ lignes d'un chapitre (comme codes.js) */
function lignes(fil, ch) {
  const els = MAN.elements.filter(e => e.fil === fil && e.ch === ch);
  const grs = (MAN.groupes || []).filter(g => g.fil === fil && g.ch === ch);
  const out = [];
  els.filter(e => e.sorte === "exercice").sort((a, b) => a.n - b.n).forEach(e => out.push({
    ids: [e.id], sorte: "exercice", libelle: "Exercice " + e.n + " — " + e.titre,
    detail: [etoiles(e.etoiles), e.pages + " p."].filter(Boolean).join(" · ") }));
  const vus = new Set();
  els.filter(e => e.sorte === "activite").forEach(e => {
    if (e.groupe) {
      if (vus.has(e.groupe)) return;
      vus.add(e.groupe);
      const g = grs.find(x => x.id === e.groupe);
      if (!g) return;
      out.push({ ids: g.membres.slice(), sorte: "groupe", libelle: g.titre + " — toute l'activité", detail: g.membres.length + " parties" });
      g.membres.forEach(m => {
        const p = els.find(x => x.id === m);
        if (p) out.push({ ids: [p.id], sorte: "partie", libelle: p.titre + " — " + p.partie, detail: p.pages + " p." });
      });
    } else out.push({ ids: [e.id], sorte: "activite", libelle: e.titre, detail: e.pages + " p." });
  });
  els.filter(e => e.sorte === "appro" || e.sorte === "appro_corrige")
    .sort((x, y) => (x.sorte === "appro" ? 0 : 1) - (y.sorte === "appro" ? 0 : 1))
    .forEach(e => out.push({ ids: [e.id], sorte: e.sorte, libelle: e.titre + " (pour aller plus loin)", detail: e.pages + " p." }));
  return out;
}
function chapitres(fil) {
  const vus = new Map();
  for (const e of MAN.elements) if (e.fil === fil && !vus.has(e.ch)) vus.set(e.ch, e.chapitre);
  return [...vus.entries()].map(([ch, nom]) => ({ ch, nom }));
}
const element = id => MAN.elements.find(e => e.id === id);

/* ------------------------------------------------------------ état */
function decClasse(classe, id) { const o = ACL[classe]; return (o && o.d && o.d[id]) || null; }
function decEleve(uid, id) { const o = uid && AEL[uid]; return (o && o.d && o.d[id]) || null; }
/* pour un élève : {s: "o" | "f" | "code" | "", src: "classe" | "eleve" | "code" | ""} */
function effectif(classe, uid, id) {
  const c = decClasse(classe, id), e = decEleve(uid, id);
  if (e && (!c || (Number(e.t) || 0) >= (Number(c.t) || 0))) return { s: e.s, src: "eleve" };
  if (c) return { s: c.s, src: "classe" };
  const k = uid && DEB[uid] && DEB[uid][id];
  return k ? { s: "code", src: "code" } : { s: "", src: "" };
}
function elevesDe(classe) {
  return ((ELV && ELV.eleves) || []).filter(e => e.classe === classe)
    .map(e => ({ id: e.id, nom: ((e.prenom || "") + " " + (e.nom || "")).trim(), uid: UID_DE[e.id] || "" }));
}
function lireDecisions(v) {
  const r = { v: 1, maj: Number(v && v.maj) || 0, d: {} };
  const d = (v && v.d && typeof v.d === "object") ? v.d : {};
  for (const id of Object.keys(d)) {
    const x = d[id];
    if (MOTIF.test(id) && x && (x.s === "o" || x.s === "f")) r.d[id] = { s: x.s, t: Number(x.t) || 0, k: x.s === "o" ? x.k : undefined };
  }
  return r;
}

async function charger() {
  $("etat").textContent = "Lecture de la base…";
  const [fiches, acl, ael, deb, reg] = await Promise.all([
    comptes(),
    getDocs(collection(db, "acces-classes")),
    getDocs(collection(db, "acces-eleves")),
    getDocs(collection(db, "deblocages")),
    getDoc(doc(db, "reglages", "prof")).catch(() => null)
  ]);
  FICHES = fiches; UID_DE = {};
  for (const f of fiches) if (f.identifiant && f.actif !== false && f.classe !== "collegue" && f.classe !== "prof") UID_DE[f.identifiant] = f.uid;
  ACL = {}; acl.docs.forEach(d => { ACL[d.id] = lireDecisions(d.data()); });
  AEL = {}; ael.docs.forEach(d => { AEL[d.id] = lireDecisions(d.data()); });
  DEB = {}; deb.docs.forEach(d => { const v = d.data() || {}; DEB[d.id] = (v.cles && typeof v.cles === "object") ? v.cles : {}; });
  REG = (reg && reg.exists()) ? (reg.data() || {}) : {};
  $("etat").textContent = MAN.elements.length + " corrigés · base lue à " + new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

/* ------------------------------------------------------------ écriture
   changements : {id: "o" | "f" | null (retirer la décision)} ; rend la fonction qui annule. t0 : horodatage imposé
   (partages de départ : 0, plus ancien que toute décision du professeur, qu'ils ne doivent jamais primer) */
async function ecrire(coll, docId, changements, t0) {
  const t = t0 === undefined ? Date.now() : t0, ids = Object.keys(changements).filter(id => MOTIF.test(id));
  if (!ids.length) return null;
  const cible = coll === "acces-classes" ? ACL : AEL;
  const avant = {}, valeurs = {};
  for (const id of ids) {
    const p = cible[docId] && cible[docId].d[id];
    avant[id] = p ? Object.assign({}, p) : null;
    const c = changements[id];
    valeurs[id] = c === "o" ? { s: "o", t, k: await cleCorrige(id) } : c === "f" ? { s: "f", t } : null;
  }
  await poser(coll, docId, valeurs, t);
  return () => poser(coll, docId, avant, Date.now());
}
/* valeurs : {id: objet | null} — d.<id> remplacé en entier, ou retiré ; dans une transaction : si le document naît au
   même moment ailleurs (autre onglet, script), rien n'est écrasé */
async function poser(coll, docId, valeurs, t) {
  const ref = doc(db, coll, docId), args = [];
  for (const id of Object.keys(valeurs)) {
    const v = valeurs[id];
    args.push(new FieldPath("d", id), v ? nettoyer(v) : deleteField());
  }
  const maj = Math.max(Date.now(), t || 0);
  args.push(new FieldPath("maj"), maj, new FieldPath("v"), 1);
  await runTransaction(db, async tr => {
    const s = await tr.get(ref);
    if (s.exists()) tr.update(ref, ...args);
    else {
      const d = {};
      for (const id of Object.keys(valeurs)) if (valeurs[id]) d[id] = nettoyer(valeurs[id]);
      tr.set(ref, { v: 1, maj, d });
    }
  });
  const cible = coll === "acces-classes" ? ACL : AEL;
  const o = cible[docId] = cible[docId] || { v: 1, maj: 0, d: {} };
  for (const id of Object.keys(valeurs)) { if (valeurs[id]) o.d[id] = nettoyer(valeurs[id]); else delete o.d[id]; }
  o.maj = maj;
}
function nettoyer(v) { return v.s === "o" ? { s: "o", t: v.t, k: v.k } : { s: "f", t: v.t }; }

async function agir(coll, docId, changements, quoi) {
  try {
    const annuler = await ecrire(coll, docId, changements);
    afficher();
    if (annuler) toast(quoi, async () => {
      try { await annuler(); afficher(); toast("Annulé"); } catch (e) { toast("Annulation impossible : " + messageErreur(e)); }
    });
  } catch (e) { toast("Rien n'a changé : " + messageErreur(e)); afficher(); }
}
function messageErreur(e) {
  const c = (e && e.code) || "";
  if (/permission-denied/.test(c)) return "la base refuse (règles v6 publiées ? compte professeur ?)";
  if (/unavailable|network/.test(c)) return "pas de réseau";
  return (e && e.message) || c || "erreur";
}

/* ------------------------------------------------------------ affichage */
function etiquette(s, src, pour) {
  const qui = pour === "eleve" ? (src === "eleve" ? " (pour lui)" : " (classe)") : "";
  if (s === "o") return '<span class="etiq o">ouvert' + qui + "</span>";
  if (s === "f") return '<span class="etiq f">fermé' + (qui || ", codes refusés") + "</span>";
  if (s === "code") return '<span class="etiq p">débloqué par code</span>';
  return '<span class="etiq c">' + (pour === "eleve" ? "pas ouvert (par code)" : "par code") + "</span>";
}
function etatLigne(l, lire) {
  const etats = l.ids.map(lire);
  const coche = etats.every(x => x.s === "o");
  return { coche, partiel: !coche && etats.some(x => x.s === "o"), etats };
}

function remplirClasses() {
  const libs = (ELV && ELV.classes) || {}, garde = reglage("partages-classe");
  const cl = Object.keys(FIL_DE).filter(c => MAN.elements.some(e => e.fil === FIL_DE[c]));
  $("classe").innerHTML = cl.map(c => '<option value="' + esc(c) + '">' + esc((libs[c] && libs[c].libelle) || c) + "</option>").join("");
  if (garde && cl.includes(garde)) $("classe").value = garde;
  remplirChapitres(); remplirEleves();
}
function remplirChapitres() {
  const fil = FIL_DE[$("classe").value], chs = chapitres(fil), garde = reglage("partages-chapitre-" + fil);
  $("chapitre").innerHTML = chs.map(c => '<option value="' + esc(c.ch) + '">' + esc(nomChapitre(c.nom)) + "</option>").join("");
  if (garde && chs.some(c => c.ch === garde)) $("chapitre").value = garde;
}
function remplirEleves() {
  const l = elevesDe($("classe").value), garde = reglage("partages-eleve");
  $("eleve").innerHTML = l.map(e => '<option value="' + esc(e.id) + '">' + esc(e.nom) + (e.uid ? "" : " — pas de compte") + "</option>").join("");
  if (garde && l.some(e => e.id === garde)) $("eleve").value = garde;
}

function afficher() {
  const classe = $("classe").value, fil = FIL_DE[classe], ch = $("chapitre").value;
  reglage("partages-classe", classe); reglage("partages-chapitre-" + fil, ch);
  document.querySelectorAll(".modes button").forEach(b => b.classList.toggle("on", b.dataset.mode === MODE));
  $("l-eleve").hidden = MODE !== "eleve"; $("l-chapitre").hidden = MODE === "recap";
  afficherBandeau();
  if (MODE === "recap") return afficherRecap(classe, fil);
  LIGNES = lignes(fil, ch);
  if (MODE === "eleve") return afficherEleve(classe, fil, ch);
  const liste = elevesDe(classe).filter(e => e.uid);
  let h = '<h2>Pour toute la classe</h2><div class="defile"><table class="part"><thead><tr><th></th><th>Corrigé</th><th>État</th>'
    + "<th>Élèves</th><th></th></tr></thead><tbody>";
  LIGNES.forEach((l, i) => {
    const st = etatLigne(l, id => { const c = decClasse(classe, id); return { s: c ? c.s : "", src: c ? "classe" : "" }; });
    const s1 = st.etats[0].s, tousPareils = st.etats.every(x => x.s === s1);
    let code = 0, perso = 0;
    for (const e of liste) for (const id of l.ids) {
      const ef = effectif(classe, e.uid, id);
      if (ef.src === "code") code++;
      else if (ef.src === "eleve" && ef.s !== (decClasse(classe, id) || {}).s) perso++;
    }
    const n = [code ? code + " débloqué" + (code > 1 ? "s" : "") + " par code" : "", perso ? perso + " exception" + (perso > 1 ? "s" : "") + " (élève)" : ""]
      .filter(Boolean).join(" · ");
    const aDecision = st.etats.some(x => x.s);
    h += '<tr class="' + l.sorte + '"><td><input type="checkbox" data-i="' + i + '"' + (st.coche ? " checked" : "")
      + (st.partiel ? ' data-partiel="1"' : "") + ' aria-label="Ouvrir à la classe"></td>'
      + '<td class="t">' + esc(l.libelle) + '<span class="d">' + esc(l.detail) + "</span></td>"
      + "<td>" + (tousPareils ? etiquette(s1, "classe", "classe") : '<span class="etiq c">en partie</span>') + "</td>"
      + '<td class="n">' + esc(n) + "</td>"
      + "<td>" + (aDecision ? '<button class="mini" type="button" data-parcode="' + i + '" title="Retirer la décision : les codes remarchent">Par code</button>' : "") + "</td></tr>";
  });
  h += "</tbody></table></div>"
    + '<div class="boutons"><button class="mini" type="button" id="tout-o">Tout cocher (chapitre)</button>'
    + '<button class="mini" type="button" id="tout-f">Tout décocher (chapitre)</button>'
    + '<button class="mini" type="button" id="tout-c">Tout remettre « par code »</button></div>';
  $("zone").innerHTML = h;
  document.querySelectorAll('#zone input[data-partiel="1"]').forEach(x => { x.indeterminate = true; });
  $("pied").textContent = liste.length + " élève(s) de la classe avec un compte. Un élève voit le changement à sa prochaine visite du site (ou en rechargeant la page).";
}

function afficherEleve(classe, fil, ch) {
  const ident = $("eleve").value, e = elevesDe(classe).find(x => x.id === ident);
  reglage("partages-eleve", ident || "");
  if (!e) { $("zone").innerHTML = '<p class="vide">Aucun élève de cette classe dans la liste.</p>'; return; }
  if (!e.uid) {
    $("zone").innerHTML = '<p class="vide">' + esc(e.nom) + " n'a pas encore de compte dans la base (comptes_firebase.py ajouter) : "
      + "rien ne peut lui être ouvert pour l'instant.</p>"; return;
  }
  let h = "<h2>Pour " + esc(e.nom) + "</h2>"
    + '<div class="defile"><table class="part"><thead><tr><th></th><th>Corrigé</th><th>Pour cet élève</th><th></th></tr></thead><tbody>';
  LIGNES.forEach((l, i) => {
    const st = etatLigne(l, id => effectif(classe, e.uid, id));
    const ouvert = st.etats.every(x => x.s === "o" || x.s === "code");
    const s1 = st.etats[0], pareils = st.etats.every(x => x.s === s1.s && x.src === s1.src);
    const perso = l.ids.some(id => decEleve(e.uid, id));
    h += '<tr class="' + l.sorte + '"><td><input type="checkbox" data-i="' + i + '"' + (ouvert ? " checked" : "")
      + (!ouvert && st.etats.some(x => x.s === "o" || x.s === "code") ? ' data-partiel="1"' : "") + ' aria-label="Ouvrir à cet élève"></td>'
      + '<td class="t">' + esc(l.libelle) + '<span class="d">' + esc(l.detail) + "</span></td>"
      + "<td>" + (pareils ? etiquette(s1.s, s1.src, "eleve") : '<span class="etiq c">en partie</span>') + "</td>"
      + "<td>" + (perso ? '<button class="mini" type="button" data-commeclasse="' + i + '" title="Retirer la décision prise pour cet élève">Comme la classe</button>' : "") + "</td></tr>";
  });
  h += "</tbody></table></div>"
    + '<div class="boutons"><button class="mini" type="button" id="el-o">Tout ouvrir pour lui (chapitre)</button>'
    + '<button class="mini" type="button" id="el-f">Tout fermer pour lui (chapitre)</button>'
    + '<button class="mini" type="button" id="el-c">Tout remettre comme la classe</button></div>';
  $("zone").innerHTML = h;
  document.querySelectorAll('#zone input[data-partiel="1"]').forEach(x => { x.indeterminate = true; });
  $("pied").textContent = "Une décision pour l'élève l'emporte sur celle de la classe tant que la classe n'en prend pas une plus récente. "
    + "Fermer pour lui seul un corrigé ouvert à sa classe le referme sur le site, sans le protéger d'un élève qui contournerait le site "
    + "(la clé reste dans le document de la classe) : pour un corrigé vraiment réservé, l'ouvrir élève par élève.";
}

function afficherRecap(classe, fil) {
  const liste = elevesDe(classe), avec = liste.filter(e => e.uid);
  const els = MAN.elements.filter(e => e.fil === fil);
  let no = 0, nf = 0, nc = 0;
  for (const e of els) { const c = decClasse(classe, e.id); if (!c) nc++; else if (c.s === "o") no++; else nf++; }
  let h = '<h2>Récapitulatif — ' + esc($("classe").options[$("classe").selectedIndex].text) + "</h2>"
    + '<div class="chiffres"><div><b>' + no + "</b>ouverts à la classe</div><div><b>" + nf + "</b>fermés (codes refusés)</div><div><b>"
    + nc + "</b>par code</div><div><b>" + avec.length + "/" + liste.length + "</b>élèves avec un compte</div></div>";
  h += '<div class="defile"><table class="part"><thead><tr><th>Chapitre</th><th>Ouverts à la classe</th><th>Fermés</th>'
    + "<th>Débloqués par code</th><th>Exceptions (élèves)</th></tr></thead><tbody>";
  for (const c of chapitres(fil)) {
    const ce = els.filter(e => e.ch === c.ch);
    const o = ce.filter(e => (decClasse(classe, e.id) || {}).s === "o"), f = ce.filter(e => (decClasse(classe, e.id) || {}).s === "f");
    const parCode = {}, exc = [];
    for (const el of avec) for (const e of ce) {
      const ef = effectif(classe, el.uid, e.id);
      if (ef.src === "code") parCode[e.id] = (parCode[e.id] || 0) + 1;
      else if (ef.src === "eleve" && ef.s !== (decClasse(classe, e.id) || {}).s)
        exc.push(el.nom.split(" ")[0] + " : " + court(e) + (ef.s === "o" ? " ouvert" : " fermé"));
    }
    const pc = Object.keys(parCode).map(id => court(element(id)) + " (" + parCode[id] + ")");
    if (!o.length && !f.length && !pc.length && !exc.length) continue;
    h += "<tr><td>" + esc(nomChapitre(c.nom)) + '</td><td class="liste-ids">' + esc(o.map(court).join(", ") || "—")
      + '</td><td class="liste-ids">' + esc(f.map(court).join(", ") || "—") + '</td><td class="liste-ids">' + esc(pc.join(", ") || "—")
      + '</td><td class="liste-ids">' + esc(exc.join(" ; ") || "—") + "</td></tr>";
  }
  h += "</tbody></table></div>";
  h += '<h2 style="margin-top:16px">Par élève</h2><div class="defile"><table class="part"><thead><tr><th>Élève</th><th>Ouverts</th>'
    + "<th>dont pour lui seul</th><th>Fermés pour lui seul</th><th>Débloqués par code</th></tr></thead><tbody>";
  for (const el of liste) {
    if (!el.uid) { h += "<tr><td>" + esc(el.nom) + '</td><td class="sans" colspan="4">pas de compte dans la base</td></tr>'; continue; }
    let o = 0, op = 0, fp = 0, pc = 0;
    for (const e of els) {
      const ef = effectif(classe, el.uid, e.id), c = decClasse(classe, e.id) || {};
      if (ef.s === "o") { o++; if (ef.src === "eleve" && c.s !== "o") op++; }
      else if (ef.s === "f" && ef.src === "eleve" && c.s !== "f") fp++;
      else if (ef.s === "code") { o++; pc++; }
    }
    h += "<tr><td>" + esc(el.nom) + "</td><td>" + o + "</td><td>" + (op || "—") + "</td><td>" + (fp || "—") + "</td><td>" + (pc || "—") + "</td></tr>";
  }
  h += "</tbody></table></div>";
  const col = FICHES.filter(f => f.classe === "collegue" && f.actif !== false).length;
  if (col) h += '<p class="aide">' + col + " compte(s) collègue(s) : tous les corrigés ouverts (déposés par « comptes_firebase.py cles »).</p>";
  $("zone").innerHTML = h;
  $("pied").textContent = "« Débloqués par code » : corrigés que l'élève a ouverts avec un code (deblocages/), sans décision du professeur.";
}

function afficherBandeau() {
  const z = $("bandeau");
  if (!INIT || REG.partagesInitiaux) { z.innerHTML = ""; return; }
  const nc = Object.values(INIT.classes || {}).reduce((s, v) => s + v.length, 0), ne = Object.keys(INIT.eleves || {}).length;
  z.innerHTML = '<div class="bandeau"><b>Partages de départ pas encore faits.</b> Les « corrigés des séances » de la version '
    + "précédente deviennent des cases cochées (" + nc + " cases pour les sept classes)" + (ne ? ", et des exercices d'approfondissement "
    + "s'ouvrent à " + ne + " élève" : "") + ". Normalement faits par « comptes_firebase.py cles » (outils v7) ; sinon :"
    + '<br><button class="mini" type="button" id="init">Faire les partages de départ</button></div>';
}
async function partagesDepart() {
  let n = 0;
  for (const c of Object.keys(INIT.classes || {})) {
    if (!FIL_DE[c]) continue;
    const ch = {};
    for (const id of INIT.classes[c]) if (element(id) && !decClasse(c, id)) ch[id] = "o";
    if (Object.keys(ch).length) { await ecrire("acces-classes", c, ch, 0); n += Object.keys(ch).length; }
  }
  const attente = [];
  for (const ident of Object.keys(INIT.eleves || {})) {
    const uid = UID_DE[ident];
    if (!uid) { attente.push(ident); toast("Compte " + ident + " pas encore créé : ses corrigés s'ouvriront au prochain « comptes_firebase.py cles »"); continue; }
    const ch = {};
    for (const id of INIT.eleves[ident]) if (element(id) && !decEleve(uid, id)) ch[id] = "o";
    if (Object.keys(ch).length) { await ecrire("acces-eleves", uid, ch, 0); n += Object.keys(ch).length; }
  }
  await setDoc(doc(db, "reglages", "prof"), { partagesInitiaux: auj() + " (espace prof)", partagesEnAttente: attente }, { merge: true });
  REG.partagesInitiaux = auj();
  return n;
}

/* ------------------------------------------------------------ actions */
function idsDe(i) { return (LIGNES[+i] || { ids: [] }).ids; }
function tous(val) { const r = {}; for (const l of LIGNES) for (const id of l.ids) r[id] = val; return r; }

document.addEventListener("click", async ev => {
  const b = ev.target.closest && ev.target.closest("button");
  if (!b) return;
  const classe = $("classe").value;
  if (b.dataset.mode) { MODE = b.dataset.mode; reglage("partages-mode", MODE); afficher(); return; }
  if (b.id === "relire") { try { await charger(); } catch (e) { toast("Base illisible : " + messageErreur(e)); } afficher(); return; }
  if (b.id === "init") {
    b.disabled = true;
    try { const n = await partagesDepart(); toast(n + " case(s) cochée(s)"); } catch (e) { toast("Partages de départ non faits : " + messageErreur(e)); }
    afficher(); return;
  }
  if (b.dataset.parcode !== undefined) {
    const ch = {}; for (const id of idsDe(b.dataset.parcode)) ch[id] = null;
    return agir("acces-classes", classe, ch, "Remis « par code » : les codes remarchent");
  }
  if (b.id === "tout-o") return agir("acces-classes", classe, tous("o"), "Chapitre ouvert à la classe");
  if (b.id === "tout-f") return confirmer("Fermer tous les corrigés de ce chapitre pour la classe, codes compris ? Ce qui avait été "
    + "débloqué par code se refermera aussi.", () => agir("acces-classes", classe, tous("f"), "Chapitre fermé pour la classe"),
    { titre: "Tout décocher", libelle: "Tout fermer" });
  if (b.id === "tout-c") return agir("acces-classes", classe, tous(null), "Chapitre remis « par code »");
  const e = elevesDe(classe).find(x => x.id === $("eleve").value);
  if (!e || !e.uid) return;
  if (b.dataset.commeclasse !== undefined) {
    const ch = {}; for (const id of idsDe(b.dataset.commeclasse)) ch[id] = null;
    return agir("acces-eleves", e.uid, ch, "Comme la classe pour " + e.nom.split(" ")[0]);
  }
  if (b.id === "el-o") return agir("acces-eleves", e.uid, tous("o"), "Chapitre ouvert pour " + e.nom.split(" ")[0]);
  if (b.id === "el-f") return agir("acces-eleves", e.uid, tous("f"), "Chapitre fermé pour " + e.nom.split(" ")[0]);
  if (b.id === "el-c") return agir("acces-eleves", e.uid, tous(null), "Chapitre comme la classe pour " + e.nom.split(" ")[0]);
});
document.addEventListener("change", ev => {
  const t = ev.target, classe = $("classe").value;
  if (t.id === "classe") { remplirChapitres(); remplirEleves(); afficher(); return; }
  if (t.id === "chapitre" || t.id === "eleve") { afficher(); return; }
  if (!(t.matches && t.matches("#zone input[type=checkbox]"))) return;
  const ids = idsDe(t.dataset.i), val = t.checked ? "o" : "f", ch = {};
  for (const id of ids) ch[id] = val;
  if (MODE === "classe") agir("acces-classes", classe, ch, t.checked ? "Ouvert à la classe" : "Fermé pour la classe (codes compris)");
  else {
    const e = elevesDe(classe).find(x => x.id === $("eleve").value);
    if (e && e.uid) agir("acces-eleves", e.uid, ch, (t.checked ? "Ouvert pour " : "Fermé pour ") + e.nom.split(" ")[0]);
  }
});

if ($("verrou")) garde($("verrou")).then(async () => {
  try { MAN = await lireDonnees("corriges.json"); }
  catch (e) { $("etat").textContent = e && e.message === "absent" ? "Aucun corrigé à débloquer sur cette version du site." : "Liste des corrigés illisible."; return; }
  if (!MAN || !Array.isArray(MAN.elements)) { $("etat").textContent = "Liste des corrigés illisible."; return; }
  try { ELV = await eleves(); } catch (e) { ELV = { classes: {}, eleves: [] }; }
  try { INIT = await lireDonnees("partages_initiaux.json"); } catch (e) { INIT = null; }
  try { await charger(); }
  catch (e) { $("etat").textContent = "Base illisible : " + messageErreur(e); return; }
  MODE = ["classe", "eleve", "recap"].includes(reglage("partages-mode")) ? reglage("partages-mode") : "classe";
  $("outil").hidden = false;
  remplirClasses();
  afficher();
});
