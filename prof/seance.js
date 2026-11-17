/* =====================================================================
   seance.js — page « Activités guidées » de l'espace prof (v65.5, novembre 2026)

   Le téléphone du professeur pendant une activité guidée :
     Visas     les demandes des postes, la plus ancienne en tête ; une demande s'ouvre sur le schéma attendu,
               les photos du poste et, si une épreuve d'Évaluer est liée, ses critères « au poste » ;
               on accorde d'un GESTE (glisser vers la droite) ou on renvoie « À reprendre » avec un motif.
     Suivi     par poste et par élève : étape en cours, temps passé, aides, alertes (bloqué, visa, aide 3).
     Étapes    pour chaque étape : faits, en cours, temps médian, aides ; les réponses de toute la classe.
     Réglages  ouvrir ou fermer, parties ouvertes, formatif ou évalué, réponses attendues, tout ouvrir (panne),
               épreuve d'Évaluer liée, codes de secours du jour, QR code de l'activité.

   Base Firestore (règles v7) :
     seances/{classe}--{activité}            réglages (professeur), lus par les élèves de la classe
     seances/{…}/eleves/{uid}               avancement de chaque élève (écrit par lui), lu ici
     seances/{…}/visas/{uid}                visas, refus, déblocages, poste imposé (écrits ici), lus par l'élève
     grilles/{épreuve}/saisies/{opaque}     critères cochés au visa : les saisies CHIFFRÉES d'Évaluer (même format)
   Le contenu (étapes, schémas des visas) vient du fichier de l'activité, activites/<filière>.<activité>.js, chiffré
   avec la clé de la filière : rien de l'énoncé n'est en clair dans ce fichier.
   ===================================================================== */
import {
  db, doc, getDoc, setDoc, deleteDoc, collection, onSnapshot, writeBatch, getDocs, updateDoc, deleteField, FieldPath,
  garde, eleves, comptes, photo, esc, auj, reglage, idOpaque, chiffrerDoc, dechiffrerDoc,
  toast, ouvrirFeuille, fermerFeuille, confirmer, copier, afficherSynchro, CLASSES_DE
} from "./socle.js?v=65";

const ACTIVITES = [
  { id: "regime-sinusoidal", titre: "TP 3 — Régime sinusoïdal", fichier: "bts-et.regime-sinusoidal", filiere: "bts-et",
    qr: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAEOAQAAAABQysQIAAAC4ElEQVR4Xu1aQWrcQBCssQQ+jsAP2KdIX8vPZp+SBxiko2FEh6qeUUwI2T0owg0ejJBtIam3uqurazYZHqz95dEVwPclf19nfS5bSimNW0rTfZ8w4g7wOAL8R1pOe9DDdU5EsHU2s2FFzYZcajauda6YBz8550GX3WUEkDALlwTg9T0ZsN9W/rJNw3vYInGAQGgYJO629iy57NM950HMOmAeeNR5LoOSEJnHIV7W9TqyompiTamUFFfIOoJn17ASpj9+lHbhmAGiNoICON2x5ZoZQLwI2TnpfdldmHVVYHiy8ahqqr3E4kVk1l4+F5DG55qt5oJspL4cECMnAZGb8o1xVcBpYYiYdQpHL194IopjgKQLEKbLKuCcB4nrhM5gyjTVkQshSBFFjMi5zmGqpLii9iT2i4tRZso5WI0QhFpAparCYflQM3TqlnigGlcenpPeF95lS/utpGket8UJwX6mjwn7TUSxhtPefGcXdQ6WKKJN6ibqi4aR3rl3IoqH1l4bLYTU3pLcEkKk65rJcoeQiNphFZT3I3EdOaHNSjHnIwLBQY9yyOX3oetCYqTyd5mq9sqgXNcpAwMyg/KtjUJ9Muqkx+EiGte9IP/AtsidW0gO28I6AjvsPmlwurA3PlxPvIu7JT3N6NEVZeBvRyUaRmqjsoPkAjGcg/TiThNePsq07i1welXDDam9mXVwWpNx1wYlBRWT66h85JkUuVuiBUXXsHuiGr/SJa5UZWq5/lkFjUaJqrEiYkRqqQzEPVV5klQLso5DRuSmlk957jDI8W6TRTyMfCnZfDA/lKr+GDCibmRpM6IN4y4biFRMXffZaiDvucMgIRTTC/Ii0rYLQ5DV0LfDAmbd0UnmNAG5vGqy0LmmpKBKVQLV+c2nct/gc10Ujeu46WrcVkbd8PHG8tnf1jouFWVYpzHezvKxx+delrxidVidSA59JYnzxLtwr//f6/tbNP/5KzIP1y+0WLNg0VP+zgAAAABJRU5ErkJggg==" }
];
const SITE = "https://physique-neruda.github.io/physique/";
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const TOURS_SECOURS = 60000;
const MOTIFS = ["Condensateur", "Masse commune", "Résistance côté masse", "Voies de l'oscilloscope", "Ampèremètre en série",
                "Bornes du multimètre", "Position AC", "Câblage à reprendre"];
const LIB = { et1: "BTS ET 1re année", et1a: "BTS ET 1re année (apprentis)" };

const $ = id => document.getElementById(id);
const clone = o => JSON.parse(JSON.stringify(o));
const maintenant = () => Date.now();
function depuis(t) {
  if (!t) return "";
  const m = Math.max(0, Math.floor((maintenant() - t) / 60000));
  return m < 1 ? "à l'instant" : m < 60 ? m + " min" : Math.floor(m / 60) + " h " + String(m % 60).padStart(2, "0");
}
function heure(t) { if (!t) return ""; const d = new Date(t); return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0"); }
function nombre(x) { return typeof x === "number" && isFinite(x) ? x.toLocaleString("fr-FR", { maximumFractionDigits: 4 }) : esc(x); }

// ------------------------------------------------------------------ état
let R = null, COMPTES = [], ACT = null, CONTENU = null, IMGS = {};
let actId = reglage("guidee-activite") || ACTIVITES[0].id;
let classe = reglage("guidee-classe") || "";
let sid = "";
let SEANCE = null, seanceLue = false;
const SUIVIS = new Map(), VISAS = new Map();
let GRILLE = null, SAISIES = new Map(), HID = new Map(), saisiesPretes = false;
let abonnements = [], abonnementsGrille = [];
let feuilleOuverte = null;                 // {type, cle} : la feuille se redessine quand les données changent
const chaines = new Map();

const activite = () => ACTIVITES.find(a => a.id === actId) || ACTIVITES[0];
const etapes = () => (CONTENU ? CONTENU.etapes : []);
const etape = id => etapes().find(e => e.id === id);
const partie = id => (CONTENU ? CONTENU.parties.find(p => p.id === id) : null);

// ------------------------------------------------------------------ le contenu de l'activité (page élève chiffrée)
async function chargerContenu() {
  const a = activite(), C = window.NerudaCles;
  let t;
  if (C && C.enLigne) {
    if (!C.cle(a.filiere)) throw new Error("La clé de la classe n'est pas ouverte sur cet appareil : rouvrir le code enseignant.");
    t = await C.texte("../activites/" + a.fichier + ".js.enc", "activites/" + a.fichier + ".js", a.filiere);
  } else {
    const r = await fetch("../activites/" + a.fichier + ".js", { cache: "no-cache" });
    if (!r.ok) throw new Error("absent");
    t = await r.text();
  }
  const m = /^window\.ACTIVITE_RESUME = (.*);$/m.exec(t), mi = /^window\.IMAGES = (.*);$/m.exec(t);
  if (!m) throw new Error("contenu de l'activité illisible");
  CONTENU = JSON.parse(m[1]);
  IMGS = mi ? JSON.parse(mi[1]) : {};
}

// ------------------------------------------------------------------ élèves : compte de la base + liste chiffrée (nom, photo)
function eleveDe(uid) {
  const c = COMPTES.find(x => x.uid === uid) || {};
  const s = SUIVIS.get(uid) || {};
  const ident = c.identifiant || s.identifiant || "";
  const e = R ? R.eleves.find(x => x.id === ident) : null;
  return { uid, ident, e, nom: e ? (e.prenom + " " + e.nom) : (c.prenom || s.prenom || ident || "élève"),
           court: e ? (e.prenom + " " + (e.nom || "").slice(0, 1) + ".") : (c.prenom || s.prenom || ident || "élève"), photo: photo(e) };
}
function roster() {
  // les élèves de la classe (comptes actifs), qu'ils aient commencé ou non
  const uids = new Set(COMPTES.filter(c => c.classe === classe && c.actif !== false && !c.invite && !c.depannage).map(c => c.uid));
  for (const uid of SUIVIS.keys()) uids.add(uid);
  return [...uids].map(eleveDe).sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
}
const posteDe = uid => { const v = VISAS.get(uid), s = SUIVIS.get(uid); return (v && v.poste) || (s && s.poste) || 0; };

// ------------------------------------------------------------------ abonnements
function desabonner() { abonnements.forEach(f => f()); abonnements = []; desabonnerGrille(); }
function desabonnerGrille() { abonnementsGrille.forEach(f => f()); abonnementsGrille = []; GRILLE = null; SAISIES = new Map(); saisiesPretes = false; }
function abonner() {
  desabonner();
  SUIVIS.clear(); VISAS.clear(); SEANCE = null; seanceLue = false;
  sid = classe + "--" + actId;
  reglage("guidee-classe", classe); reglage("guidee-activite", actId);
  const ici = sid;
  abonnements.push(onSnapshot(doc(db, "seances", sid), { includeMetadataChanges: true }, snap => {
    if (ici !== sid) return;
    SEANCE = snap.exists() ? snap.data() : null; seanceLue = true;
    afficherSynchro($("sync"), snap.metadata);
    if (SEANCE && (SEANCE.epreuve || "") !== (GRILLE ? GRILLE.id : "")) abonnerGrille(SEANCE.epreuve || "");
    if (SEANCE && SEANCE.etat === "ouverte") assurerSecours();
    rendre();
  }, e => { $("sync").textContent = "● lecture refusée (" + (e.code || "erreur") + ")"; }));
  abonnements.push(onSnapshot(collection(db, "seances", sid, "eleves"), snap => {
    if (ici !== sid) return;
    SUIVIS.clear(); snap.docs.forEach(d => SUIVIS.set(d.id, d.data())); rendre();
  }, e => console.warn("suivi illisible", e && e.code)));
  abonnements.push(onSnapshot(collection(db, "seances", sid, "visas"), snap => {
    if (ici !== sid) return;
    VISAS.clear(); snap.docs.forEach(d => VISAS.set(d.id, d.data())); rendre();
  }, e => console.warn("visas illisibles", e && e.code)));
}
async function abonnerGrille(ep) {
  desabonnerGrille();
  if (!ep) return;
  const ici = ep;
  try {
    const g = await getDoc(doc(db, "grilles", ep));
    if (!g.exists()) { toast("Épreuve d'Évaluer introuvable : " + ep); return; }
    GRILLE = Object.assign({ id: ep }, g.data());
  } catch (e) { toast("Épreuve illisible (" + (e.code || "erreur") + ")"); return; }
  const idents = R.eleves.filter(e => e.classe === classe).map(e => e.id);
  const hids = await Promise.all(idents.map(id => idOpaque("saisie|" + ep + "|" + id)));
  HID = new Map(idents.map((id, k) => [id, hids[k]]));
  const parHid = new Map(idents.map((id, k) => [hids[k], id]));
  let tour = 0;
  abonnementsGrille.push(onSnapshot(collection(db, "grilles", ep, "saisies"), async snap => {
    const n = ++tour, m = new Map();
    await Promise.all(snap.docs.map(async d => {
      const ident = parHid.get(d.id); if (!ident) return;
      const s = await dechiffrerDoc("grilles/" + ici + "/saisies/" + d.id, d.data());
      if (s && s.ident === ident) m.set(ident, s);
    }));
    if (n !== tour || !GRILLE || GRILLE.id !== ici) return;
    SAISIES = m; saisiesPretes = true; rendreFeuille();
  }, e => console.warn("saisies illisibles", e && e.code)));
  rendre();
}

// ------------------------------------------------------------------ écritures
function enchainer(ch, f) {
  const suite = (chaines.get(ch) || Promise.resolve()).then(f).catch(e => { console.warn(e); toast("Écriture refusée par la base (" + (e.code || "erreur") + ")"); });
  chaines.set(ch, suite);
  suite.then(() => { if (chaines.get(ch) === suite) chaines.delete(ch); });
  return suite;
}
async function majSeance(champs) {
  if (!SEANCE) return;
  const ici = sid;
  await enchainer("seance|" + ici, () => updateDoc(doc(db, "seances", ici), Object.assign({ maj: maintenant() }, champs)));
}
async function creerSeance() {
  const a = activite();
  await setDoc(doc(db, "seances", sid), { v: 1, activite: a.id, classe, titre: a.titre, etat: "fermee",
    parties: CONTENU ? [CONTENU.parties[0].id] : [], mode: "formatif", conclusions: true, toutOuvrir: false, epreuve: "", seuil: 10,
    cree: maintenant(), maj: maintenant() });
  toast("Séance créée (fermée) : choisir les parties, puis l'ouvrir");
}
function accorder(uids, V) {
  const t = maintenant(), b = writeBatch(db);
  uids.forEach(uid => b.set(doc(db, "seances", sid, "visas", uid), { v: 1, maj: t, ok: { [V]: { t } } }, { merge: true }));
  return b.commit();
}
function refuser(uids, V, motif) {
  const t = maintenant(), b = writeBatch(db);
  uids.forEach(uid => {
    const s = SUIVIS.get(uid), d = s && s.demande && s.demande.visa === V ? s.demande.t : 0;
    b.set(doc(db, "seances", sid, "visas", uid), { v: 1, maj: t, refus: { [V]: { t, d, motif: String(motif || "").slice(0, 200) } } }, { merge: true });
  });
  return b.commit();
}
function debloquer(uid, id) { return setDoc(doc(db, "seances", sid, "visas", uid), { v: 1, maj: maintenant(), ouvrir: { [id]: maintenant() } }, { merge: true }); }
function changerPoste(uid, n) { return setDoc(doc(db, "seances", sid, "visas", uid), { v: 1, maj: maintenant(), poste: n }, { merge: true }); }
/* critères : même écriture que la page Évaluer (saisie complète, chiffrée sur l'appareil) */
function cocher(idents, ind, etat) {
  if (!GRILLE || !saisiesPretes) { toast("Lecture des saisies… un instant"); return; }
  const ep = GRILLE.id;
  idents.forEach(ident => {
    if (!HID.has(ident)) return;
    const s = clone(SAISIES.get(ident) || { ident, epreuve: ep, date: auj(), ind: {}, niv: {}, com: "", ts: "" });
    s.ind = s.ind || {}; s.niv = s.niv || {};
    if (etat) s.ind[ind] = etat; else delete s.ind[ind];
    s.ts = new Date().toISOString();
    SAISIES.set(ident, s);
    const ch = "grilles/" + ep + "/saisies/" + HID.get(ident);
    enchainer(ch, async () => setDoc(doc(db, ch), await chiffrerDoc(ch, s)));
  });
  rendreFeuille();
}

// ------------------------------------------------------------------ codes de secours du jour (sans réseau côté élève)
const TE = new TextEncoder();
function b64(buf) { const u = new Uint8Array(buf); let s = ""; for (let i = 0; i < u.length; i++) s += String.fromCharCode(u[i]); return btoa(s); }
async function empreinte(code, sel, visa, tours) {      // même calcul que la page élève
  const k = await crypto.subtle.importKey("raw", TE.encode(code), "PBKDF2", false, ["deriveBits"]);
  return b64(await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: TE.encode(sel + "|" + visa), iterations: tours }, k, 128));
}
async function codeSecours(V, jour) {
  const h = await idOpaque("guidee|secours|" + sid + "|" + V + "|" + (jour || auj()));
  let c = "";
  for (let i = 0; i < 6; i++) c += ALPHABET[parseInt(h.substr(2 * i, 2), 16) % 32];
  return c;
}
let secoursEnCours = false;
async function assurerSecours() {
  if (!SEANCE || !CONTENU || secoursEnCours) return;
  if (SEANCE.secours && SEANCE.secours.date === auj()) return;
  secoursEnCours = true;
  try {
    const sel = b64(crypto.getRandomValues(new Uint8Array(12))), h = {};
    for (const V of Object.keys(CONTENU.visas)) h[V] = await empreinte(await codeSecours(V), sel, V, TOURS_SECOURS);
    await majSeance({ secours: { date: auj(), sel, tours: TOURS_SECOURS, h } });
  } catch (e) { console.warn("codes de secours", e); }
  finally { secoursEnCours = false; }
}

// ------------------------------------------------------------------ calculs de suivi
function etatEleve(uid) {
  const s = SUIVIS.get(uid);
  if (!s) return { absent: true };
  const pos = s.pos || "", e = s.e || {}, et = etape(pos);
  const x = e[pos] || {};
  const faits = etapes().filter(y => e[y.id] && e[y.id].ok).length;
  const vu = Math.max(s.vu || 0, s.maj || 0);
  const seuil = (SEANCE && SEANCE.seuil) || 10;
  const demande = s.demande && !visaOk(uid, s.demande.visa) ? s.demande : null;
  let aides = 0, a3 = 0, maint = 0, pen = 0;
  for (const k of Object.keys(e)) { aides += e[k].a || 0; if ((e[k].a || 0) >= 3) a3++; if (e[k].m) maint++; pen += e[k].ac || 0; }
  return {
    s, pos, et, x, faits, total: etapes().length, fini: pos === "fin", demande, aides, a3, maint, pen,
    surEtape: x.t0 ? maintenant() - x.t0 : 0,
    bloque: !!(et && x.t0 && !demande && maintenant() - x.t0 > seuil * 60000),
    inactif: !!(vu && maintenant() - vu > 6 * 60000 && pos !== "fin")
  };
}
const visaOk = (uid, V) => { const v = VISAS.get(uid); return !!(v && v.ok && v.ok[V]); };
function libEtape(et) {
  if (!et) return "—";
  const p = partie(et.partie);
  return (p ? p.court.replace("Partie ", "") : "") + (et.q ? " · " + et.q : "") + " — " + et.titre;
}
function demandes() {
  const groupes = new Map();
  for (const [uid] of SUIVIS) {
    const st = etatEleve(uid);
    if (!st.demande) continue;
    const p = posteDe(uid), cle = (p ? "p" + p : "u" + uid) + "|" + st.demande.visa;
    if (!groupes.has(cle)) groupes.set(cle, { cle, poste: p, visa: st.demande.visa, uids: [], t: st.demande.t });
    const g = groupes.get(cle); g.uids.push(uid); g.t = Math.min(g.t, st.demande.t || maintenant());
  }
  return [...groupes.values()].sort((a, b) => a.t - b.t);
}

// ------------------------------------------------------------------ rendu
function rendre() {
  if (!R || !CONTENU) return;
  const d = demandes();
  $("nb-visas").innerHTML = d.length ? `<span class="badge-n">${d.length}</span>` : "";
  rendreVisas(d); rendreSuivi(); rendreEtapes(); rendreReglages();
  // une feuille ouverte suit les données, sauf celle du visa (on y glisse un doigt) ou si l'on y saisit quelque chose
  const f = document.getElementById("feuille"), a = document.activeElement;
  if (feuilleOuverte && feuilleOuverte.type !== "visa" && !(f && a && f.contains(a) && /^(INPUT|SELECT|TEXTAREA)$/.test(a.tagName))) rendreFeuille();
}
function bandeauSeance() {
  if (!seanceLue) return '<p class="vide">Lecture de la séance…</p>';
  if (!SEANCE) return `<div class="cle"><h3>Pas encore de séance pour cette classe</h3><p>${esc(activite().titre)} — ${esc(LIB[classe] || classe)}.</p>
    <button class="gros" type="button" data-creer>Créer la séance</button></div>`;
  if (SEANCE.etat !== "ouverte") return `<div class="cle"><h3>Séance fermée</h3><p>Les élèves voient leurs réponses sans pouvoir avancer.</p>
    <button class="gros" type="button" data-ouvrir>Ouvrir la séance</button></div>`;
  return "";
}
function brancherBandeau(zone) {
  const c = zone.querySelector("[data-creer]"); if (c) c.onclick = () => creerSeance().catch(e => toast("Création refusée (" + (e.code || e.message) + ")"));
  const o = zone.querySelector("[data-ouvrir]"); if (o) o.onclick = () => majSeance({ etat: "ouverte" });
}
function rendreVisas(liste) {
  const z = $("v-visas");
  let h = bandeauSeance();
  h += `<h2>Demandes de visa</h2>`;
  if (!liste.length) h += '<p class="vide">Aucune demande en attente. Elles arrivent ici dès qu\'un poste appelle.</p>';
  h += '<div class="file">' + liste.map(g => {
    const V = CONTENU.visas[g.visa] || { titre: g.visa }, att = maintenant() - g.t;
    const membres = membresDe(g);
    return `<button type="button" class="dem${att > 5 * 60000 ? " vieux" : ""}" data-dem="${esc(g.cle)}">
      <span class="ph">${membres.slice(0, 3).map(u => `<img src="${eleveDe(u).photo}" alt="">`).join("")}</span>
      <span class="tx"><b>${g.poste ? "Poste " + g.poste : esc(eleveDe(g.uids[0]).court)}</b><small>${esc(g.visa)} · ${esc(V.titre)}</small></span>
      <span class="att">${depuis(g.t)}</span></button>`;
  }).join("") + "</div>";
  h += `<p class="aide">Toucher une demande : le schéma attendu, les photos du poste${GRILLE ? " et les critères de l'épreuve « " + esc(GRILLE.court || GRILLE.titre || GRILLE.id) + " »" : ""} ; glisser vers la droite pour accorder le visa, ou « À reprendre ».</p>`;
  z.innerHTML = h; brancherBandeau(z);
  z.querySelectorAll("[data-dem]").forEach(b => b.onclick = () => ouvrirVisa(b.dataset.dem));
}
function membresDe(g) {
  // ceux qui ont demandé, puis les autres élèves du même poste arrêtés à la même étape de visa
  const et = etapes().find(e => e.visa === g.visa);
  const autres = g.poste ? [...SUIVIS.keys()].filter(u => !g.uids.includes(u) && posteDe(u) === g.poste && et && SUIVIS.get(u).pos === et.id && !visaOk(u, g.visa)) : [];
  return g.uids.concat(autres);
}
function rendreSuivi() {
  const z = $("v-suivi"), tous = roster();
  let h = bandeauSeance();
  const parPoste = new Map();
  tous.forEach(el => { const p = SUIVIS.has(el.uid) ? posteDe(el.uid) : -1; if (!parPoste.has(p)) parPoste.set(p, []); parPoste.get(p).push(el); });
  const cles = [...parPoste.keys()].sort((a, b) => (a <= 0 ? 99 : a) - (b <= 0 ? 99 : b) || a - b);
  const nb = [...SUIVIS.keys()].length;
  h += `<h2>Suivi <small style="font-weight:500;color:var(--gris);font-size:13px">${nb} élève${nb > 1 ? "s" : ""} au travail</small></h2>`;
  for (const p of cles) {
    const els = parPoste.get(p);
    h += `<div class="poste"><h3>${p > 0 ? "Poste " + p : p === 0 ? "Sans poste" : "Pas encore commencé"}<small>${els.length} élève${els.length > 1 ? "s" : ""}</small></h3><div class="els">`;
    h += els.map(el => {
      const st = etatEleve(el.uid);
      if (st.absent) return `<div class="el loin"><img src="${el.photo}" alt=""><span class="i"><b>${esc(el.court)}</b><span class="d">pas encore connecté à l'activité</span></span></div>`;
      const cls = st.demande ? "visa" : st.fini ? "fini" : (st.bloque ? "alerte" : "");
      const fl = (st.demande ? '<span class="fl" title="visa demandé">✋</span>' : "") + (st.bloque ? '<span class="fl" title="même étape depuis longtemps">⏱</span>' : "")
        + (st.a3 ? `<span class="fl" title="aide 3 ouverte">🛟${st.a3 > 1 ? st.a3 : ""}</span>` : "") + (st.maint ? '<span class="fl" title="mesure maintenue">⚑</span>' : "")
        + (st.inactif ? '<span class="fl" title="plus de nouvelles depuis 6 min">💤</span>' : "");
      return `<button type="button" class="el ${cls}" data-el="${esc(el.uid)}"><img src="${el.photo}" alt=""><span class="i"><b>${esc(el.court)}${fl}</b>
        <span class="e">${st.fini ? "terminé" : esc(st.et ? (partie(st.et.partie) || {}).court + (st.et.type === "visa" ? " · visa " + st.et.visa : st.et.q ? " · " + st.et.q : st.et.type === "texte" ? " · conclusion" : "") : "—")}</span>
        <span class="d">${st.fini ? st.faits + " étapes" : depuis(st.x.t0) + (st.aides ? " · " + st.aides + " aide" + (st.aides > 1 ? "s" : "") : "") + (st.x.n ? " · " + st.x.n + " essai" + (st.x.n > 1 ? "s" : "") : "")}</span>
        <span class="barre-prog"><i style="width:${Math.round(100 * st.faits / st.total)}%"></i></span></span></button>`;
    }).join("") + "</div></div>";
  }
  h += `<p class="aide">✋ visa demandé · ⏱ même étape depuis plus de ${(SEANCE && SEANCE.seuil) || 10} min · 🛟 aide 3 ouverte · ⚑ mesure maintenue malgré l'alerte · 💤 plus de nouvelles depuis 6 min. Toucher un élève pour le détail et les actions.</p>`;
  z.innerHTML = h; brancherBandeau(z);
  z.querySelectorAll("[data-el]").forEach(b => b.onclick = () => ouvrirEleve(b.dataset.el));
}
function mediane(v) { if (!v.length) return 0; const s = v.slice().sort((a, b) => a - b), k = Math.floor(s.length / 2); return s.length % 2 ? s[k] : (s[k - 1] + s[k]) / 2; }
function rendreEtapes() {
  const z = $("v-etapes"), uids = [...SUIVIS.keys()];
  let h = `<h2>Étapes</h2><p class="aide">Faits / élèves au travail, élèves arrêtés sur l'étape, temps médian, élèves ayant ouvert une aide, essais moyens. Toucher une ligne : les réponses de la classe.</p>`;
  h += '<div class="tab"><table><thead><tr><th>Étape</th><th>Faits</th><th>Ici</th><th>Temps</th><th>Aides</th><th>Essais</th></tr></thead><tbody>';
  let pAvant = "";
  for (const et of etapes()) {
    if (et.partie !== pAvant) { pAvant = et.partie; const p = partie(et.partie); h += `<tr><th colspan="6" style="text-align:left;background:var(--doux)">${esc(p.court)} — ${esc(p.titre)}</th></tr>`; }
    const xs = uids.map(u => (SUIVIS.get(u).e || {})[et.id]).filter(Boolean);
    const faits = xs.filter(x => x.ok), ici = uids.filter(u => SUIVIS.get(u).pos === et.id).length;
    const tps = faits.filter(x => x.t0 && x.t1 && x.t1 > x.t0).map(x => (x.t1 - x.t0) / 60000);
    const aides = xs.filter(x => (x.a || 0) > 0).length, ess = faits.filter(x => x.n).map(x => x.n);
    h += `<tr class="clic" data-et="${esc(et.id)}"><td>${esc((et.q ? et.q + " · " : "") + et.titre)}</td><td class="num">${faits.length}/${uids.length}</td><td class="num">${ici || ""}</td>
      <td class="num">${tps.length ? Math.round(mediane(tps)) + " min" : ""}</td><td class="num">${aides || ""}</td><td class="num">${ess.length ? (ess.reduce((a, b) => a + b, 0) / ess.length).toFixed(1).replace(".", ",") : ""}</td></tr>`;
  }
  h += "</tbody></table></div>";
  z.innerHTML = h;
  z.querySelectorAll("[data-et]").forEach(r => r.onclick = () => ouvrirReponses(r.dataset.et));
}
let signatureReglages = "";
function rendreReglages(force) {
  const z = $("v-reglages"), a = activite();
  const sig = JSON.stringify([SEANCE, seanceLue, classe, actId, GRILLE ? GRILLE.id : ""]);
  if (!force && sig === signatureReglages && z.innerHTML) return;           // rien n'a changé : on ne casse pas une saisie en cours
  if (!force && z.contains(document.activeElement) && /^(INPUT|SELECT)$/.test(document.activeElement.tagName)) return;
  signatureReglages = sig;
  let h = bandeauSeance();
  if (SEANCE) {
    const P = SEANCE.parties || [];
    h += `<h2>Séance</h2><div class="lig"><span><b>${SEANCE.etat === "ouverte" ? "Ouverte" : "Fermée"}</b><br><span class="d">${esc(a.titre)} · ${esc(LIB[classe] || classe)}</span></span>
      <button class="mini ${SEANCE.etat === "ouverte" ? "danger" : "fini"}" type="button" id="r-etat">${SEANCE.etat === "ouverte" ? "Fermer" : "Ouvrir"}</button></div>`;
    h += `<div class="sect">Parties ouvertes aux élèves</div><div class="chips">${CONTENU.parties.map(p => `<button type="button" class="chip${P.includes(p.id) ? " on a" : ""}" data-p="${p.id}">${esc(p.court)}</button>`).join("")}</div>`;
    h += `<div class="sect">Aides</div><div class="seg" role="group"><button type="button" data-mode="formatif" class="${SEANCE.mode !== "evalue" ? "on" : ""}">Formatif : gratuites</button><button type="button" data-mode="evalue" class="${SEANCE.mode === "evalue" ? "on" : ""}">Évalué : 0,5 et 1 point</button></div>`;
    h += `<label class="case"><input type="checkbox" id="r-conc" ${SEANCE.conclusions !== false ? "checked" : ""}> Montrer la réponse attendue après celle de l'élève (questions rédigées et conclusions)</label>`;
    h += `<label class="case"><input type="checkbox" id="r-tout" ${SEANCE.toutOuvrir ? "checked" : ""}> Tout ouvrir (panne, fin de séance) : toutes les étapes deviennent accessibles, sans visa</label>`;
    h += `<label class="lab" for="r-seuil">Alerte « bloqué » après (minutes sur la même étape)</label><input class="champ-texte" id="r-seuil" type="number" min="3" max="60" value="${(SEANCE.seuil) || 10}" style="max-width:120px">`;
    h += `<div class="sect">Critères au visa</div><select class="champ-texte" id="r-epreuve"><option value="">Aucune épreuve liée (visas seulement)</option></select>
      <p class="aide">Une épreuve d'Évaluer de cette classe : ses critères « au poste » s'affichent au visa et se cochent pour les élèves choisis (mêmes saisies que dans Évaluer).</p>`;
    h += `<div class="sect">Codes de secours du jour (élève sans réseau)</div><div id="r-codes" class="chips"><span class="aide">Calcul…</span></div>
      <p class="aide">Si la base ne répond plus, dictez le code du visa au poste : l'élève le tape sous « Pas de réseau ? ». Un code ne vaut que pour aujourd'hui et pour cette classe.</p>`;
  }
  const url = SITE + "activites/guidee.html?a=" + a.fichier;
  h += `<div class="sect">Pour les élèves</div><div class="qr">${a.qr && a.qr.startsWith("data:") ? `<img src="${a.qr}" alt="QR code de l'activité">` : ""}<div><code>${esc(url)}</code><br>
    <button class="mini" type="button" id="r-copier">Copier l'adresse</button> <a class="mini" href="../activites/guidee.html?a=${esc(a.fichier)}" target="_blank" rel="noopener">Ouvrir en aperçu</a></div></div>
    <p class="aide">À projeter en début de séance. Les élèves se connectent avec leur compte du site ; sans compte, l'activité marche sur leur appareil mais vous ne la voyez pas.</p>`;
  if (SEANCE) h += `<div class="sect">Fin d'année</div><button class="gros danger" type="button" id="r-effacer">Effacer cette séance (avancement, réponses, visas)</button>`;
  z.innerHTML = h; brancherBandeau(z);
  if (!SEANCE) { brancherQr(z, url); return; }
  $("r-etat").onclick = () => majSeance({ etat: SEANCE.etat === "ouverte" ? "fermee" : "ouverte" });
  z.querySelectorAll("[data-p]").forEach(b => b.onclick = () => {
    const P = new Set(SEANCE.parties || []); P.has(b.dataset.p) ? P.delete(b.dataset.p) : P.add(b.dataset.p);
    majSeance({ parties: CONTENU.parties.map(p => p.id).filter(id => P.has(id)) });
  });
  z.querySelectorAll("[data-mode]").forEach(b => b.onclick = () => majSeance({ mode: b.dataset.mode }));
  $("r-conc").onchange = e => majSeance({ conclusions: e.target.checked });
  $("r-tout").onchange = e => {
    if (e.target.checked) confirmer("Toutes les étapes deviennent accessibles à tous les élèves, sans attendre les visas. À réserver à une panne ou à la fin de la séance.",
      () => majSeance({ toutOuvrir: true }), { titre: "Tout ouvrir ?", libelle: "Tout ouvrir", danger: false, retour: () => { e.target.checked = false; fermerFeuille(); } });
    else majSeance({ toutOuvrir: false });
  };
  $("r-seuil").onchange = e => { const v = Math.max(3, Math.min(60, Number(e.target.value) || 10)); majSeance({ seuil: v }); };
  remplirEpreuves();
  afficherCodes();
  brancherQr(z, url);
  $("r-effacer").onclick = () => confirmer("L'avancement, les réponses et les visas de tous les élèves pour cette activité seront effacés de la base. Les critères cochés dans Évaluer restent.",
    effacerSeance, { titre: "Effacer la séance", libelle: "Effacer", saisie: "EFFACER" });
}
function brancherQr(z, url) { const c = z.querySelector("#r-copier"); if (c) c.onclick = async () => toast(await copier(url) ? "Adresse copiée" : "Copie impossible"); }
async function remplirEpreuves() {
  const s = $("r-epreuve"); if (!s) return;
  try {
    const snap = await getDocs(collection(db, "grilles"));
    const liste = snap.docs.map(d => Object.assign({ id: d.id }, d.data())).filter(g => g.classe === classe);
    if (!$("r-epreuve")) return;
    s.innerHTML = '<option value="">Aucune épreuve liée (visas seulement)</option>' + liste.map(g => `<option value="${esc(g.id)}"${g.id === SEANCE.epreuve ? " selected" : ""}>${esc(g.court || g.titre || g.id)}</option>`).join("");
  } catch (e) { s.innerHTML = '<option value="">Épreuves illisibles</option>'; }
  s.onchange = () => majSeance({ epreuve: s.value });
}
async function afficherCodes() {
  const z = $("r-codes"); if (!z || !CONTENU) return;
  const cs = await Promise.all(Object.keys(CONTENU.visas).map(async V => [V, await codeSecours(V)]));
  if (!$("r-codes")) return;
  z.innerHTML = cs.map(([V, c]) => `<div class="lig" style="width:100%"><span>${esc(V)} · ${esc(CONTENU.visas[V].titre)}</span><span class="code-sec">${c}</span></div>`).join("")
    + (SEANCE.secours && SEANCE.secours.date === auj() ? "" : '<p class="aide">Les codes seront actifs dès que la séance sera ouverte aujourd\'hui.</p>');
}
async function effacerSeance() {
  const ici = sid;
  try {
    const b = writeBatch(db);
    const [e, v] = await Promise.all([getDocs(collection(db, "seances", ici, "eleves")), getDocs(collection(db, "seances", ici, "visas"))]);
    e.docs.forEach(d => b.delete(d.ref)); v.docs.forEach(d => b.delete(d.ref)); b.delete(doc(db, "seances", ici));
    await b.commit(); toast("Séance effacée");
  } catch (x) { toast("Effacement refusé (" + (x.code || "erreur") + ")"); }
}

// ------------------------------------------------------------------ feuille : un visa
function ouvrirVisa(cle) {
  const g = demandes().find(x => x.cle === cle);
  if (!g) { toast("Cette demande n'est plus en attente"); return; }
  const sel = new Set(membresDe(g));
  feuilleOuverte = { type: "visa", cle, g, sel, motif: "", pts: new Set() };
  ouvrirFeuille("", () => { feuilleOuverte = null; });
  rendreFeuille();
}
function rendreFeuille() {
  const fo = feuilleOuverte;
  if (!fo) return;
  const f = document.getElementById("feuille");
  if (!f) return;
  const haut = f.scrollTop;
  if (fo.type === "visa") rendreFeuilleVisa(f, fo);
  else if (fo.type === "eleve") rendreFeuilleEleve(f, fo);
  else if (fo.type === "reponses") rendreFeuilleReponses(f, fo);
  f.scrollTop = haut;
}
function criteresDuVisa(V) {
  if (!GRILLE || !GRILLE.indicateurs) return { du: [], autres: [] };
  const tous = [];
  Object.keys(GRILLE.indicateurs).forEach(c => (GRILLE.indicateurs[c] || []).forEach(x => { if (!x.f) tous.push(Object.assign({ c }, x)); }));
  const re = new RegExp("\\b" + V + "\\b");
  return { du: tous.filter(x => re.test(x.q || "")), autres: tous.filter(x => !re.test(x.q || "")) };
}
function rendreFeuilleVisa(f, fo) {
  const g = fo.g, V = CONTENU.visas[g.visa] || { titre: g.visa, prof: [] };
  const tousPoste = g.poste ? [...SUIVIS.keys()].filter(u => posteDe(u) === g.poste) : g.uids.slice();
  const membres = [...new Set(membresDe(g).concat(tousPoste))];
  const idents = [...fo.sel].map(u => eleveDe(u).ident).filter(Boolean);
  const cr = criteresDuVisa(g.visa);
  const ligneCrit = x => {
    const etats = idents.map(i => ((SAISIES.get(i) || {}).ind || {})[x.id] || "");
    const commun = etats.length && etats.every(e => e === etats[0]) ? etats[0] : "";
    return `<div class="ind"><div class="t">${esc(x.t)}<small>${esc(x.c)}${x.q ? " · " + esc(x.q) : ""}</small></div><div class="tri">${["a", "p", "n"].map(e =>
      `<button type="button" class="${commun === e ? "on " + e : ""}" data-ind="${esc(x.id)}" data-e="${e}" aria-label="${{ a: "acquis", p: "partiel", n: "non" }[e]}">${{ a: "A", p: "P", n: "N" }[e]}</button>`).join("")}</div></div>`;
  };
  let h = `<div class="tete"><div class="qui"><b>${g.poste ? "Poste " + g.poste : esc(eleveDe(g.uids[0]).nom)} · ${esc(g.visa)}</b><div class="sous">${esc(V.titre)} · attend depuis ${depuis(g.t)}</div></div></div>`;
  h += `<div class="mbs">${membres.map(u => {
    const el = eleveDe(u), dem = g.uids.includes(u);
    return `<div class="tuile${fo.sel.has(u) ? " sel" : ""}" data-u="${esc(u)}" tabindex="0"><img src="${el.photo}" alt=""><div class="nm">${esc(el.court)}${dem ? " ✋" : ""}</div></div>`;
  }).join("")}</div><p class="aide" style="margin-top:-4px">Toucher une photo pour retirer ou ajouter l'élève.</p>`;
  if (IMGS[V.image]) h += `<div class="ref"><img src="${IMGS[V.image]}" alt="Schéma attendu"></div>`;
  h += `<div class="sect">Ce que vous vérifiez</div><div class="pts">${(V.prof || []).map((t, k) => `<label class="pt"><input type="checkbox" data-pt="${k}" ${fo.pts.has(k) ? "checked" : ""}>${esc(t)}</label>`).join("")}</div>`;
  if (GRILLE) {
    h += `<div class="sect">Critères — ${esc(GRILLE.court || GRILLE.titre || GRILLE.id)} (pour les élèves choisis)</div>`;
    if (!saisiesPretes) h += '<p class="aide">Lecture des saisies…</p>';
    else if (!cr.du.length && !cr.autres.length) h += '<p class="aide">Aucun critère « au poste » dans cette épreuve.</p>';
    else {
      h += cr.du.map(ligneCrit).join("");
      if (cr.autres.length) h += `<details${cr.du.length ? "" : " open"}><summary class="aide">Autres critères au poste (${cr.autres.length})</summary>${cr.autres.map(ligneCrit).join("")}</details>`;
    }
  }
  h += `<div class="sect">Ou renvoyer « À reprendre »</div><div class="motifs">${MOTIFS.map(m => `<button type="button" class="chip${fo.motif === m ? " on n" : ""}" data-motif="${esc(m)}">${esc(m)}</button>`).join("")}</div>
    <input class="champ-texte" id="motif-libre" placeholder="Précision (facultatif)" maxlength="120" value="">
    <button type="button" class="gros danger" id="refuser" style="margin-top:8px">À reprendre</button>
    <button type="button" class="gros sec" id="fermer">Fermer</button>`;
  h += `<div class="pied-visa"><div class="glisse" id="glisse"><span>Glisser pour accorder le visa${fo.sel.size > 1 ? " (" + fo.sel.size + " élèves)" : ""}</span><div class="poignee" id="poignee">➜</div></div></div>`;
  const libre = f.querySelector("#motif-libre") ? f.querySelector("#motif-libre").value : "";
  f.innerHTML = h;
  f.querySelector("#motif-libre").value = libre;
  f.querySelectorAll("[data-pt]").forEach(c => c.onchange = () => { c.checked ? fo.pts.add(+c.dataset.pt) : fo.pts.delete(+c.dataset.pt); });
  f.querySelectorAll("[data-u]").forEach(t => t.onclick = () => { fo.sel.has(t.dataset.u) ? fo.sel.delete(t.dataset.u) : fo.sel.add(t.dataset.u); rendreFeuille(); });
  f.querySelectorAll("[data-ind]").forEach(b => b.onclick = () => {
    if (!fo.sel.size) { toast("Choisir au moins un élève"); return; }
    const deja = b.classList.contains("on");
    cocher([...fo.sel].map(u => eleveDe(u).ident).filter(Boolean), b.dataset.ind, deja ? "" : b.dataset.e);
  });
  f.querySelectorAll("[data-motif]").forEach(b => b.onclick = () => { fo.motif = fo.motif === b.dataset.motif ? "" : b.dataset.motif; rendreFeuille(); });
  f.querySelector("#fermer").onclick = fermerFeuille;
  f.querySelector("#refuser").onclick = async () => {
    if (!fo.sel.size) { toast("Choisir au moins un élève"); return; }
    const motif = [fo.motif, f.querySelector("#motif-libre").value.trim()].filter(Boolean).join(" : ");
    try { await refuser([...fo.sel], g.visa, motif); fermerFeuille(); toast("Renvoyé : à reprendre" + (motif ? " (" + motif + ")" : "")); }
    catch (e) { toast("Écriture refusée (" + (e.code || "erreur") + ")"); }
  };
  brancherGlisse(f.querySelector("#glisse"), async () => {
    if (!fo.sel.size) { toast("Choisir au moins un élève"); return false; }
    try { await accorder([...fo.sel], g.visa); fermerFeuille(); toast("Visa " + g.visa + " accordé : " + [...fo.sel].map(u => eleveDe(u).court).join(", ")); return true; }
    catch (e) { toast("Écriture refusée (" + (e.code || "erreur") + ")"); return false; }
  });
}
/* le geste : glisser la poignée jusqu'au bout (un toucher ne suffit pas, pour éviter les visas par erreur) */
function brancherGlisse(zone, action) {
  const p = zone.querySelector(".poignee");
  let x0 = null, dx = 0, max = 0, fini = false;
  const pos = v => { p.style.transform = "translateX(" + v + "px)"; };
  zone.addEventListener("pointerdown", e => {
    if (fini || (e.target !== p && !p.contains(e.target))) return;
    x0 = e.clientX; max = zone.clientWidth - p.offsetWidth - 8; zone.setPointerCapture(e.pointerId); p.style.transition = "none";
  });
  zone.addEventListener("pointermove", e => { if (x0 === null) return; dx = Math.max(0, Math.min(max, e.clientX - x0)); pos(dx); });
  const fin = async () => {
    if (x0 === null) return;
    x0 = null; p.style.transition = "transform .2s";
    if (dx >= max * 0.9) { fini = true; pos(max); zone.classList.add("fait"); const ok = await action(); if (!ok) { fini = false; zone.classList.remove("fait"); pos(0); } }
    else pos(0);
    dx = 0;
  };
  zone.addEventListener("pointerup", fin); zone.addEventListener("pointercancel", fin);
  // au clavier : Entrée sur la poignée (accessibilité)
  p.tabIndex = 0; p.setAttribute("role", "button"); p.setAttribute("aria-label", "Accorder le visa");
  p.addEventListener("keydown", async e => { if (e.key === "Enter" && !fini) { fini = true; if (!(await action())) fini = false; } });
}

// ------------------------------------------------------------------ feuille : un élève
function ouvrirEleve(uid) { feuilleOuverte = { type: "eleve", uid }; ouvrirFeuille("", () => { feuilleOuverte = null; }); rendreFeuille(); }
function resumeReponse(et, x) {
  if (!x) return "";
  const r = x.r || {};
  if (et.type === "texte") return r.t ? esc(r.t) : "";
  if (et.type === "visa") return x.ok ? (r.par === "code" ? "visa par code de secours" : x.p ? "débloqué" : "visa accordé") + (x.t1 ? " à " + heure(x.t1) : "") : (x.refus ? "à reprendre" + (x.refus.motif ? " : " + esc(x.refus.motif) : "") : "");
  const parts = [];
  (et.champs || []).forEach(c => { if (r[c.id] !== undefined) parts.push(esc(c.label.replace(/[=:]\s*$/, "").trim()) + " = " + nombre(r[c.id]) + (c.unite ? " " + esc(c.unite) : "")); });
  (et.questions || []).forEach((q, k) => { if (r["q" + k] !== undefined) parts.push((et.type === "exo" ? (r["q" + k] === q.bonne ? "✓ " : "✗ ") : "→ ") + esc(q.choix[r["q" + k]] || "?")); });
  if (r.j) parts.push("« " + esc(r.j) + " »");
  return parts.join("\n");
}
function rendreFeuilleEleve(f, fo) {
  const el = eleveDe(fo.uid), st = etatEleve(fo.uid);
  let h = `<div class="tete"><img src="${el.photo}" alt=""><div class="qui"><b>${esc(el.nom)}</b><div class="sous">${posteDe(fo.uid) ? "poste " + posteDe(fo.uid) + " · " : ""}${st.absent ? "pas encore connecté à l'activité" : st.faits + "/" + st.total + " étapes"}${st.pen ? " · pénalité des aides " + String(st.pen).replace(".", ",") + " pt" : ""}</div></div></div>`;
  if (!st.absent) {
    h += `<div class="sect">En ce moment</div><p>${st.fini ? "Activité terminée." : esc(libEtape(st.et)) + " — depuis " + depuis(st.x.t0) + (st.x.n ? ", " + st.x.n + " essai" + (st.x.n > 1 ? "s" : "") : "") + (st.x.a ? ", aide " + st.x.a + " ouverte" : "")}</p>`;
    if (!st.fini && st.et) {
      h += st.et.type === "visa" ? `<button class="gros" type="button" id="e-visa">Accorder le visa ${esc(st.et.visa)} à cet élève</button>`
        : `<button class="gros sec" type="button" id="e-debloquer">Débloquer cette étape (elle compte comme faite)</button>`;
    }
    h += `<label class="lab" for="e-poste">Poste</label><select class="champ-texte" id="e-poste">${Array.from({ length: 13 }, (_, n) => `<option value="${n}"${posteDe(fo.uid) === n ? " selected" : ""}>${n ? "Poste " + n : "Sans poste"}</option>`).join("")}</select>`;
    h += '<div class="sect">Étapes</div>';
    const e = st.s.e || {};
    for (const et of etapes()) {
      const x = e[et.id];
      if (!x) continue;
      const dur = x.t0 && x.t1 ? Math.max(1, Math.round((x.t1 - x.t0) / 60000)) + " min" : x.t0 ? "en cours" : "";
      h += `<div class="det-et"><div class="h"><span>${x.ok ? '<span class="ok">✓</span>' : '<span class="ko">…</span>'} ${esc((et.q ? et.q + " · " : "") + et.titre)}</span>
        <span class="d" style="font-size:12px;color:var(--gris);white-space:nowrap">${dur}${x.n ? " · " + x.n + " ess." : ""}${x.a ? " · aide " + x.a : ""}${x.l ? " · " + x.l + " ress." : ""}${x.m ? " · ⚑" : ""}${x.p ? " · débloquée" : ""}</span></div>
        ${resumeReponse(et, x) ? `<div class="r">${resumeReponse(et, x)}</div>` : ""}</div>`;
    }
  }
  h += '<button type="button" class="gros sec" id="fermer" style="margin-top:12px">Fermer</button>';
  f.innerHTML = h;
  f.querySelector("#fermer").onclick = fermerFeuille;
  const v = f.querySelector("#e-visa"); if (v) v.onclick = async () => { await accorder([fo.uid], st.et.visa); toast("Visa accordé"); };
  const d = f.querySelector("#e-debloquer"); if (d) d.onclick = () => { feuilleOuverte = null; confirmer("L'étape « " + st.et.titre + " » sera comptée comme faite pour cet élève, qui passe à la suivante.",
    async () => { await debloquer(fo.uid, st.et.id); toast("Étape débloquée"); ouvrirEleve(fo.uid); }, { titre: "Débloquer l'étape", libelle: "Débloquer", danger: false, retour: () => ouvrirEleve(fo.uid) }); };
  const p = f.querySelector("#e-poste"); if (p) p.onchange = async () => { await changerPoste(fo.uid, Number(p.value)); toast("Poste changé"); };
}

// ------------------------------------------------------------------ feuille : les réponses de la classe à une étape
function ouvrirReponses(id) { feuilleOuverte = { type: "reponses", id }; ouvrirFeuille("", () => { feuilleOuverte = null; }); rendreFeuille(); }
function rendreFeuilleReponses(f, fo) {
  const et = etape(fo.id);
  const lignes = roster().filter(el => SUIVIS.has(el.uid)).map(el => ({ el, x: (SUIVIS.get(el.uid).e || {})[fo.id] })).filter(o => o.x);
  let h = `<div class="tete"><div class="qui"><b>${esc((et.q ? et.q + " · " : "") + et.titre)}</b><div class="sous">${lignes.filter(o => o.x.ok).length} réponse(s)</div></div></div>`;
  if (et.questions && et.questions.length) {
    et.questions.forEach((q, k) => {
      const comptes = q.choix.map((c, j) => lignes.filter(o => o.x.r && o.x.r["q" + k] === j).length);
      h += `<div class="sect">${esc(q.texte)}</div>` + q.choix.map((c, j) => `<div class="lig"><span>${et.type === "exo" && j === q.bonne ? "✓ " : ""}${esc(c)}</span><b>${comptes[j]}</b></div>`).join("");
    });
  }
  h += '<div class="sect">Par élève</div><div class="reps">' + (lignes.map(o => `<div class="rep"><b>${esc(o.el.court)}${posteDe(o.el.uid) ? " · poste " + posteDe(o.el.uid) : ""}${o.x.ok ? "" : " · en cours"}</b>${resumeReponse(et, o.x) || "—"}</div>`).join("") || '<p class="vide">Personne n\'est encore passé par cette étape.</p>') + "</div>";
  h += '<button type="button" class="gros sec" id="fermer" style="margin-top:12px">Fermer</button>';
  f.innerHTML = h;
  f.querySelector("#fermer").onclick = fermerFeuille;
}

// ------------------------------------------------------------------ navigation et démarrage
document.querySelectorAll("nav.bas button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll("nav.bas button").forEach(x => x.classList.remove("on")); b.classList.add("on");
  document.querySelectorAll(".vue").forEach(v => v.classList.remove("on"));
  $("v-" + b.dataset.v).classList.add("on");
}));
setInterval(() => { if (document.visibilityState === "visible") rendre(); }, 30000);     // les durées avancent
window.addEventListener("online", () => rendre());

garde($("verrou")).then(async () => {
  try { R = await eleves(); }
  catch (e) { document.querySelector("main").innerHTML = '<div class="panne"><b>Liste des élèves illisible</b><p>Recharger la page ; si cela persiste, refermer puis rouvrir le code enseignant depuis l\'espace prof.</p></div>'; return; }
  try { COMPTES = await comptes(); } catch (e) { COMPTES = []; console.warn("comptes illisibles", e && e.code); }
  try { await chargerContenu(); }
  catch (e) {
    document.querySelector("main").innerHTML = '<div class="panne"><b>Activité illisible</b><p>' + esc(e.message === "absent" ? "La page de l'activité n'est pas sur le site." : e.message) + "</p></div>";
    return;
  }
  const classes = CLASSES_DE[activite().filiere] || [];
  if (!classes.includes(classe)) classe = classes[classes.length - 1] || "";
  $("activite").innerHTML = ACTIVITES.map(a => `<option value="${esc(a.id)}"${a.id === actId ? " selected" : ""}>${esc(a.titre)}</option>`).join("");
  $("classe").innerHTML = classes.map(c => `<option value="${esc(c)}"${c === classe ? " selected" : ""}>${esc(LIB[c] || (R.classes[c] && R.classes[c].libelle) || c)}</option>`).join("");
  $("classe").onchange = () => { classe = $("classe").value; abonner(); rendre(); };
  $("activite").onchange = async () => { actId = $("activite").value; await chargerContenu(); abonner(); rendre(); };
  $("contenu").hidden = false; $("nav").hidden = false;
  abonner(); rendre();
});
window.__SEANCE = { SUIVIS, VISAS, get SEANCE() { return SEANCE; }, get GRILLE() { return GRILLE; }, get SAISIES() { return SAISIES; }, demandes, accorder, refuser, codeSecours, empreinte, rendre };
