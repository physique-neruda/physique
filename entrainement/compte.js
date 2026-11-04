/* =====================================================================
   compte.js — le compte élève, ses clés et la synchronisation (v64, novembre 2026)

   Module ES chargé « en plus » par espace.html, cartes.html et qcm.html :
   si ce fichier ne se charge pas (pas de réseau, SDK bloqué, vieux
   navigateur), les pages continuent exactement comme avant, avec le seul
   localStorage. C'est la SEULE ressource extérieure du site : le SDK
   Firebase, servi par www.gstatic.com.

   Il expose window.NerudaCompte :
     pret                      promesse : l'état de connexion est connu
                               (et la première synchronisation faite)
     etat()                    {connecte, uid, prenom, classe, classeLibelle,
                                groupe, invite, derniereSync}
     connecter(id, mdp, rester) promesse ; erreurs en français
     deconnecter()             promesse
     toucher(usage)            « cartes », « qcm » ou « simulations » :
                               envoi groupé 3 s plus tard (et au pagehide)
     synchroniser(usages)      tout de suite ; rend les clés locales modifiées
     surChangement(fn)         fn({type:'etat'}) ou fn({type:'donnees', cles})
     competences()             promesse : les évaluations publiées de l'élève
                               (v62 : copies rangées sous son identifiant,
                               epreuves/{id}/copies/{identifiant}) ; v64 : aussi les
                               fiches des devoirs corrigés (type « devoir » : questions,
                               points, appréciation ; jamais de coefficient PAP)

   v64 : le site est fermé. À la connexion (et au retour sur le site), compte.js lit dans la
   base les clés du compte — cles/commune, et cles/<filière de sa classe> (le compte prof : toutes ;
   l'invité : la commune seulement) — et les confie à commun/cles.js (onglet, et appareil si
   « Rester connecté »). Se déconnecter les efface.
     cles(rester)              promesse : relit les clés du compte dans la base
   Le journal des réponses (neruda.journal : nombre de réponses par jour et par appareil) voyage
   avec les cartes.

   Ce qui part dans Firestore : trois documents par élève, cartes/{uid},
   qcm/{uid}, simulations/{uid}, chacun {v:2, maj, cles:{<clé locale>: objet}}.
   Jamais : le nom tapé dans une simulation pour le code de fin, les mots
   de passe des filières, les documents du site.
   La fusion (élément par élément, le plus récent gagne) est celle de srs.js.
   ===================================================================== */
import config from "./firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged,
  setPersistence, browserLocalPersistence, browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  initializeFirestore, getFirestore, memoryLocalCache,
  doc, getDoc, setDoc, collection, query, where, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const DOMAINE = "@physique-neruda.site";
const USAGES = ["cartes", "qcm", "simulations"];
const DELAI_ENVOI = 3000;          // ms : regroupement des écritures
const TAILLE_MAX = 150000;         // caractères JSON par document envoyé
const FILIERE_DE = { sti2d: "1sti2d", crsa1: "bts-crsa", crsa2: "bts-crsa", tsma1: "bts-tsma", tsma2: "bts-tsma",
                     et1: "bts-et", et1a: "bts-et" };
const CLASSES = {
  sti2d: "1re STI2D",
  crsa1: "BTS CRSA 1re année", crsa2: "BTS CRSA 2e année",
  tsma1: "BTS TSMA 1re année", tsma2: "BTS TSMA 2e année",
  et1: "BTS ET 1re année", et1a: "BTS ET 1re année (apprentis)"
};

const SRS = window.NerudaSRS;
if (!SRS) throw new Error("srs.js doit être chargé avant compte.js");

const app = initializeApp(config);
const auth = getAuth(app);
/* v64 : cache en mémoire seulement. Un cache persistant (IndexedDB) garderait sur l'appareil, après la
   déconnexion, tout ce qui a été lu — les clés du site comprises — et se lit sans passer par les règles.
   L'avancement, lui, reste dans le localStorage et se refusionne à la prochaine synchronisation. */
let db;
try {
  db = initializeFirestore(app, { localCache: memoryLocalCache() });
} catch (e) {
  db = getFirestore(app);
}

// ---------------------------------------------------------------- état
const etat = { connecte: false, uid: "", prenom: "", classe: "", classeLibelle: "", groupe: "", filiere: "",
               identifiant: "", invite: false, actif: false, prof: false, derniereSync: 0 };
const ecouteurs = [];
let enAttente = new Set();
let minuterie = null;
let enCours = null;                // promesse de la synchronisation en cours

function prevenir(evt) {
  for (const f of ecouteurs) { try { f(evt); } catch (e) { console.warn("NerudaCompte :", e); } }
}
function copieEtat() { return Object.assign({}, etat); }

// ---------------------------------------------------------------- stockage local
function lireLocal(cle) { try { return localStorage.getItem(cle); } catch (e) { return null; } }
function ecrireLocal(cle, valeur) { try { localStorage.setItem(cle, valeur); return true; } catch (e) { return false; } }
function clesDe(usage) {
  const toutes = SRS.clesLocales(localStorage);
  return toutes.filter(k => {
    const u = SRS.usageDeCle(k);
    return u === usage || (usage === "cartes" && (u === "serie" || u === "journal"));
  });
}
function pourCompte(cle, objet) {
  if (SRS.usageDeCle(cle) === "simulations") return SRS.simulationPourCompte(objet, Date.now());
  return objet;
}

// ---------------------------------------------------------------- synchronisation
async function synchroniserUsage(usage) {
  if (!etat.connecte || !etat.uid) return [];
  const ref = doc(db, usage, etat.uid);
  let distant = {};
  try {
    const d = await getDoc(ref);
    if (d.exists()) { const data = d.data(); if (data && data.cles && typeof data.cles === "object") distant = data.cles; }
  } catch (e) {
    console.warn("NerudaCompte : lecture impossible (" + usage + ") :", e && e.code);
    return [];                       // hors ligne : on réessaiera à la prochaine occasion
  }
  const local = {};
  for (const k of clesDe(usage)) { const v = SRS.normaliser(k, lireLocal(k)); if (v !== null) local[k] = v; }
  const cles = new Set([...Object.keys(local), ...Object.keys(distant)]);
  const modifiees = [];
  const aEnvoyer = {};
  for (const k of cles) {
    if (!SRS.usageDeCle(k)) continue;
    const fusion = SRS.fusionner(k, local[k] === undefined ? null : local[k], distant[k] === undefined ? null : distant[k]);
    if (fusion === null || fusion === undefined) continue;
    const texte = JSON.stringify(fusion);
    if (texte !== JSON.stringify(local[k] === undefined ? null : local[k])) {
      if (ecrireLocal(k, texte)) modifiees.push(k);
    }
    const pc = pourCompte(k, fusion);
    if (pc !== null && JSON.stringify(pc) !== JSON.stringify(distant[k] === undefined ? null : distant[k])) aEnvoyer[k] = pc;
  }
  if (Object.keys(aEnvoyer).length && !etat.invite) {
    const docu = { v: 2, maj: Date.now(), cles: aEnvoyer };
    const taille = JSON.stringify(docu).length;
    if (taille > TAILLE_MAX) {
      console.warn("NerudaCompte : document " + usage + " trop gros (" + taille + " caractères), non envoyé");
    } else {
      try { await setDoc(ref, docu, { merge: true }); }
      catch (e) { console.warn("NerudaCompte : écriture impossible (" + usage + ") :", e && e.code); }
    }
  }
  return modifiees;
}

async function synchroniser(usages) {
  if (!etat.connecte) return [];
  const liste = (Array.isArray(usages) && usages.length) ? usages.filter(u => USAGES.includes(u)) : USAGES.slice();
  if (enCours) { try { await enCours; } catch (e) { } }
  enCours = (async () => {
    let modifiees = [];
    for (const u of liste) { modifiees = modifiees.concat(await synchroniserUsage(u)); }
    etat.derniereSync = Date.now();
    if (modifiees.length) prevenir({ type: "donnees", cles: modifiees });
    else prevenir({ type: "sync" });
    return modifiees;
  })();
  try { return await enCours; } finally { enCours = null; }
}

function envoyerEnAttente() {
  if (minuterie) { clearTimeout(minuterie); minuterie = null; }
  if (!enAttente.size || !etat.connecte) { enAttente = new Set(); return; }
  const usages = [...enAttente]; enAttente = new Set();
  synchroniser(usages).catch(() => { });
}
function toucher(usage) {
  if (usage === "serie" || usage === "journal") usage = "cartes";
  if (!USAGES.includes(usage)) return;
  enAttente.add(usage);
  if (!etat.connecte) return;      // sans compte : rien à faire, le localStorage suffit
  if (minuterie) clearTimeout(minuterie);
  minuterie = setTimeout(envoyerEnAttente, DELAI_ENVOI);
}
window.addEventListener("pagehide", envoyerEnAttente);
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") envoyerEnAttente(); });

// ---------------------------------------------------------------- fiche élève
async function chargerFiche(user) {
  const d = await getDoc(doc(db, "eleves", user.uid));
  if (!d.exists()) return null;
  const f = d.data() || {};
  if (f.actif === false) return null;
  return { prenom: String(f.prenom || ""), classe: String(f.classe || ""), groupe: String(f.groupe || ""),
           identifiant: String(f.identifiant || ""), invite: f.invite === true, actif: f.actif !== false };
}
function appliquerFiche(user, fiche) {
  etat.connecte = true; etat.uid = user.uid;
  etat.prenom = fiche.prenom; etat.classe = fiche.classe;
  etat.classeLibelle = CLASSES[fiche.classe] || fiche.classe;
  etat.groupe = fiche.groupe; etat.invite = fiche.invite; etat.actif = fiche.actif;
  etat.identifiant = fiche.identifiant; etat.prof = fiche.classe === "prof";
  etat.filiere = FILIERE_DE[fiche.classe] || "";
}
function vider() {
  etat.connecte = false; etat.uid = ""; etat.prenom = ""; etat.classe = ""; etat.classeLibelle = "";
  etat.groupe = ""; etat.identifiant = ""; etat.invite = false; etat.actif = false; etat.prof = false; etat.derniereSync = 0;
  etat.filiere = "";
}

// ---------------------------------------------------------------- clés du site (v64)
function resteConnecte() { return lireLocal("neruda.rester") === "1"; }
function clesManquantes() {
  const C = window.NerudaCles;
  if (!C || !C.enLigne || !etat.connecte || !etat.classe) return false;
  if (!C.cle("commune")) return true;
  if (etat.prof) return C.filieres().length < 4;
  return !etat.invite && !!etat.filiere && !C.cle(etat.filiere);
}
async function chargerCles(rester) {
  const C = window.NerudaCles;
  if (!C || !C.enLigne || !etat.connecte) return [];
  if (rester === undefined) rester = resteConnecte();
  const lues = {};
  if (etat.prof) {
    try {
      const snap = await getDocs(collection(db, "cles"));
      for (const d of snap.docs) { const v = d.data() || {}; if (v.k) lues[d.id] = { id: String(v.id || ""), k: String(v.k) }; }
    } catch (e) { console.warn("NerudaCompte : clés illisibles :", e && e.code); }
  } else {
    // une lecture refusée (clé absente, règles pas encore à jour) n'empêche pas de garder les autres
    const noms = ["commune"].concat(!etat.invite && etat.filiere ? [etat.filiere] : []);
    for (const n of noms) {
      try {
        const d = await getDoc(doc(db, "cles", n));
        if (d.exists()) { const v = d.data() || {}; if (v.k) lues[n] = { id: String(v.id || ""), k: String(v.k) }; }
      } catch (e) { console.warn("NerudaCompte : clé " + n + " illisible :", e && e.code); }
    }
  }
  const acceptees = await C.enregistrer(lues, rester, "compte");
  prevenir({ type: "cles", cles: acceptees });
  return acceptees;
}

function messageErreur(e) {
  const code = (e && e.code) || "";
  if (/invalid-credential|wrong-password|user-not-found|invalid-email|invalid-login-credentials|missing-password/.test(code))
    return "Identifiant ou mot de passe incorrect.";
  if (/too-many-requests/.test(code)) return "Trop d'essais : patiente quelques minutes avant de réessayer.";
  if (/network-request-failed/.test(code)) return "Pas de réseau : réessaie quand tu seras connecté.";
  if (/user-disabled/.test(code)) return "Ce compte est désactivé. Vois avec le professeur.";
  if (e && e.message === "sans-classe") return "Ce compte n'est rattaché à aucune classe. Vois avec le professeur.";
  return "Connexion impossible pour l'instant" + (code ? " (" + code + ")" : "") + ".";
}

async function connecter(identifiant, motDePasse, rester) {
  let id = String(identifiant || "").trim().toLowerCase();
  if (!id) throw new Error("Écris ton identifiant (prénom.initiale).");
  if (id.indexOf("@") < 0) id += DOMAINE;
  try {
    await setPersistence(auth, rester ? browserLocalPersistence : browserSessionPersistence);
    const cred = await signInWithEmailAndPassword(auth, id, String(motDePasse || ""));
    const fiche = await chargerFiche(cred.user);
    if (!fiche) { try { await signOut(auth); } catch (e) { } throw new Error("sans-classe"); }
    appliquerFiche(cred.user, fiche);
    try { if (rester) localStorage.setItem("neruda.rester", "1"); else localStorage.removeItem("neruda.rester"); } catch (e) { }
    // nouvelle identité sur cet onglet : on repart des seules clés de ce compte
    if (window.NerudaCles && window.NerudaCles.noms().length) window.NerudaCles.oublier();
    try { await chargerCles(!!rester); }
    catch (e) { console.warn("NerudaCompte : clés illisibles :", e && e.code); }
    prevenir({ type: "etat" });
    // la première synchronisation est lancée par onAuthStateChanged, qui suit
    return copieEtat();
  } catch (e) {
    throw new Error(messageErreur(e));
  }
}
async function deconnecter() {
  envoyerEnAttente();
  if (enCours) { try { await enCours; } catch (e) { } }
  try { await signOut(auth); } catch (e) { }
  vider();
  try { localStorage.removeItem("neruda.rester"); } catch (e) { }
  if (window.NerudaCles) window.NerudaCles.oublier(true);    // tout : clés du site et code enseignant gardé
  prevenir({ type: "etat" });
}

// ---------------------------------------------------------------- compétences
/* Les évaluations de la classe (epreuves, champ classe) et, pour chacune,
   la copie de l'élève si elle est publiée (epreuves/{id}/copies/{identifiant} :
   la page Évaluer de l'espace prof l'écrit à la publication, les règles ne la
   laissent lire qu'à l'élève dont la fiche porte cet identifiant). Rend une
   liste triée par date, la plus récente d'abord. */
async function competences() {
  if (!etat.connecte || !etat.classe || !etat.identifiant || etat.prof) return [];
  const q = query(collection(db, "epreuves"), where("classe", "==", etat.classe));
  const res = [];
  const snap = await getDocs(q);
  for (const d of snap.docs) {
    const ep = d.data() || {};
    const item = { id: d.id, type: ep.type === "devoir" ? "devoir" : "u51",
                   titre: String(ep.titre || d.id), court: String(ep.court || ""), nature: String(ep.nature || ""),
                   date: String(ep.date || ""), grille: ep.competences || ep.grille || {},
                   bareme: ep.bareme || 20, questions: Array.isArray(ep.questions) ? ep.questions : [],
                   niveaux: null, note: null, commentaire: "", appreciation: "", points: [], absent: false, publie: false };
    try {
      const c = await getDoc(doc(db, "epreuves", d.id, "copies", etat.identifiant));
      if (c.exists()) {
        const copie = c.data() || {};
        item.publie = copie.publie === true;
        item.niveaux = copie.niveaux || null;
        item.note = (copie.note === undefined) ? null : copie.note;
        if (copie.bareme !== undefined && copie.bareme !== null) item.bareme = copie.bareme;
        item.commentaire = String(copie.commentaire || "");
        item.appreciation = String(copie.appreciation || "");          // v64 : fiche d'un devoir corrigé
        item.points = Array.isArray(copie.points) ? copie.points : [];
        item.absent = copie.absent === true;
        if (copie.date) item.date = String(copie.date);
      }
    } catch (e) { /* copie non publiée : la règle refuse la lecture, c'est normal */ }
    res.push(item);
  }
  res.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return res;
}

// ---------------------------------------------------------------- démarrage
const pret = new Promise(resolve => {
  let premier = true;
  onAuthStateChanged(auth, async user => {
    const C = window.NerudaCles;
    if (user) {
      try {
        const fiche = await chargerFiche(user);
        if (fiche) {
          appliquerFiche(user, fiche);
          if (clesManquantes()) { try { await chargerCles(); } catch (e) { console.warn("NerudaCompte : clés illisibles :", e && e.code); } }
        } else {
          vider(); try { await signOut(auth); } catch (e) { }
          if (C && C.source() === "compte") C.oublier();
        }
      } catch (e) {
        // fiche illisible (hors ligne et pas en cache) : on garde la session, sans synchroniser
        if (!etat.connecte) { etat.connecte = true; etat.uid = user.uid; etat.prenom = ""; etat.classe = ""; }
      }
    } else {
      vider();
      // plus de session (onglet fermé sans « Rester connecté », ou déconnexion ailleurs) : les clés du compte partent aussi
      if (C && C.source() === "compte") { C.oublier(); try { localStorage.removeItem("neruda.rester"); } catch (e) { } }
    }
    prevenir({ type: "etat" });
    if (etat.connecte && etat.classe) { try { await synchroniser(); } catch (e) { } }
    if (premier) { premier = false; resolve(copieEtat()); }
  });
});

window.NerudaCompte = {
  pret,
  etat: copieEtat,
  connecter, deconnecter, toucher, synchroniser, competences, cles: chargerCles,
  surChangement(fn) { if (typeof fn === "function") ecouteurs.push(fn); },
  CLASSES
};
try { document.dispatchEvent(new CustomEvent("neruda-compte-pret")); } catch (e) { }
export default window.NerudaCompte;
