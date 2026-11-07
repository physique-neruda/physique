/* =====================================================================
   compte.js — le compte élève, ses clés et la synchronisation (v64, novembre 2026 ; v64.2)

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
   v64.2 : corrigés à débloquer par code (commun/corriges.js) :
     codesCorriges(relire)     promesse {annee, tours, identifiant, classe, sel, env: {id: {iv, c}}} : les
                               enveloppes des codes NOMINATIFS de l'élève (codes/{uid}, déposées par
                               « comptes_firebase.py cles », lisibles par lui seul ; aucun code dedans) ;
                               null pour l'invité, le prof, ou si rien n'est déposé (relu la fois suivante ;
                               relire : relu même s'il l'a déjà été, après un « cles » relancé entre-temps)
     deblocages()              promesse : les corrigés débloqués gardés avec le compte (deblocages/{uid})
     enregistrerDeblocages(c)  les ajoute ({id: {k, t, n}}, fusion)
   v65 :
     accesCorriges()           promesse {classe, eleve} : les décisions du professeur sur les corrigés (cases de la page
                               « Corrigés partagés ») — acces-classes/{classe} et acces-eleves/{uid}, chacun
                               {v, maj, d: {id: {s: "o"|"f", t, k?}}} ; null si absent ou illisible
     retirerDeblocages(ids)    efface ces corrigés de deblocages/{uid} (corrigé refermé par le professeur)
     etat().collegue           compte collègue (fiche classe « collegue ») : les quatre filières, la clé collègue
                               (livres du professeur et diaporamas) et tous les corrigés (acces-eleves/{uid}, déposé
                               par « comptes_firebase.py cles ») ; aucun droit professeur, aucune donnée d'élève
     etat().mesures            mesures d'activité activées par le professeur (reglages/site) : temps de travail,
                               ouvertures des animations, réussite question par question ; neruda.mesures = « 1 »
                               sur l'appareil tant qu'un compte élève est connecté et que c'est activé

   Ce qui part dans Firestore : trois documents par élève, cartes/{uid},
   qcm/{uid}, simulations/{uid}, chacun {v:2, maj, cles:{<clé locale>: objet}}
   (v65 : et activite/{uid}, seulement quand les mesures sont activées).
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
  doc, getDoc, setDoc, updateDoc, deleteField, FieldPath, collection, query, where, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const DOMAINE = "@physique-neruda.site";
const USAGES = ["cartes", "qcm", "simulations", "activite"];      // v65 : activite (mesures activées seulement)
const DELAI_ENVOI = 3000;          // ms : regroupement des écritures
const TAILLE_MAX = 150000;         // caractères JSON par document envoyé
const FILIERE_DE = { sti2d: "1sti2d", crsa1: "bts-crsa", crsa2: "bts-crsa", tsma1: "bts-tsma", tsma2: "bts-tsma",
                     et1: "bts-et", et1a: "bts-et" };
const FILIERES = ["1sti2d", "bts-crsa", "bts-et", "bts-tsma"];
const CLASSES = {
  sti2d: "1re STI2D",
  crsa1: "BTS CRSA 1re année", crsa2: "BTS CRSA 2e année",
  tsma1: "BTS TSMA 1re année", tsma2: "BTS TSMA 2e année",
  et1: "BTS ET 1re année", et1a: "BTS ET 1re année (apprentis)",
  collegue: "Collègue (lecture seule)"
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
               identifiant: "", invite: false, actif: false, prof: false, collegue: false, depannage: false, mesures: false, derniereSync: 0 };
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
  if (usage === "activite" && (!etat.mesures || etat.prof || etat.collegue || etat.invite || etat.depannage)) return [];
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
           identifiant: String(f.identifiant || ""), invite: f.invite === true, actif: f.actif !== false,
           collegue: String(f.classe || "") === "collegue", depannage: f.depannage === true };
}
function appliquerFiche(user, fiche) {
  etat.connecte = true; etat.uid = user.uid;
  etat.prenom = fiche.prenom; etat.classe = fiche.classe;
  etat.classeLibelle = CLASSES[fiche.classe] || fiche.classe;
  etat.groupe = fiche.groupe; etat.invite = fiche.invite; etat.actif = fiche.actif;
  etat.identifiant = fiche.identifiant; etat.prof = fiche.classe === "prof";
  etat.collegue = fiche.collegue === true;
  etat.depannage = fiche.depannage === true;          // v65 : compte de dépannage partagé, jamais mesuré
  etat.filiere = FILIERE_DE[fiche.classe] || "";
}
function vider() {
  codesLus = null;
  etat.connecte = false; etat.uid = ""; etat.prenom = ""; etat.classe = ""; etat.classeLibelle = "";
  etat.groupe = ""; etat.identifiant = ""; etat.invite = false; etat.actif = false; etat.prof = false; etat.derniereSync = 0;
  etat.filiere = ""; etat.collegue = false; etat.depannage = false; etat.mesures = false;
  mesuresLocales(false);
}

// ---------------------------------------------------------------- mesures d'activité (v65)
/* reglages/site = {mesures: vrai|faux, depuis, maj, exclus: [uid]} : écrit par le professeur (tableau de bord), lu par tout compte
   actif. Sur l'appareil, neruda.mesures = l'uid du compte mesuré autorise commun/mesures.js, qcm.html et les
   animations à noter (temps, ouvertures, réussite question par question) ; pour un vrai compte d'élève seulement (ni le
   prof, ni le collègue, ni l'invité, ni un compte de dépannage partagé). Ce qui a été noté pour un autre compte est
   effacé avant de noter pour celui-ci ; une remise à zéro du professeur (remiseAZero) efface aussi l'appareil. */
/* Mesures coupées (ou compte déconnecté) : le drapeau, ET ce qui avait été noté sur l'appareil (neruda.activite,
   neruda.qstat.*) — rien ne reste ni ne part plus tard au nom d'un autre compte. Ce qui est déjà dans la base
   (activite/{uid}) s'efface depuis le tableau de bord. */
function purgerMesures() {
  try { for (const k of SRS.clesLocales(localStorage)) if (SRS.usageDeCle(k) === "activite") localStorage.removeItem(k); } catch (e) { }
}
function mesuresLocales(oui, remise) {
  try {
    const avant = localStorage.getItem("neruda.mesures") || "";
    if (oui) {
      // autre compte que celui pour qui l'appareil notait (ou propriétaire inconnu), ou remise à zéro du professeur
      // depuis : on repart de rien
      const r = Number(remise) || 0, vu = Number(localStorage.getItem("neruda.mesures.remise")) || 0;
      if (avant !== etat.uid || r > vu) purgerMesures();
      if (r > vu) localStorage.setItem("neruda.mesures.remise", String(r));
      localStorage.setItem("neruda.mesures", etat.uid);
      return;
    }
    localStorage.removeItem("neruda.mesures");
    purgerMesures();
  } catch (e) { }
}
async function lireReglages() {
  let oui = false, remise = 0;
  if (etat.connecte && etat.uid && etat.classe && !etat.prof && !etat.collegue && !etat.invite && !etat.depannage) {
    try {
      const d = await getDoc(doc(db, "reglages", "site")), v = d.exists() ? (d.data() || {}) : {};
      // v65 : un élève qui s'est opposé aux mesures (liste exclus) n'est jamais mesuré
      oui = v.mesures === true && !(Array.isArray(v.exclus) && v.exclus.includes(etat.uid));
      remise = Number(v.remiseAZero) || 0;
    } catch (e) { oui = lireLocal("neruda.mesures") === etat.uid; }     // hors ligne : on garde le dernier état connu
  }
  etat.mesures = oui;
  mesuresLocales(oui, remise);
  return oui;
}

// ---------------------------------------------------------------- clés du site (v64)
function resteConnecte() { return lireLocal("neruda.rester") === "1"; }
function clesManquantes() {
  const C = window.NerudaCles;
  if (!C || !C.enLigne || !etat.connecte || !etat.classe) return false;
  if (!C.cle("commune")) return true;
  if (etat.prof) return C.filieres().length < 4;
  if (etat.collegue) return C.filieres().length < 4 || !C.cle("collegue");
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
    const noms = etat.collegue ? ["commune"].concat(FILIERES, ["collegue"])
      : ["commune"].concat(!etat.invite && etat.filiere ? [etat.filiere] : []);
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
    // nouvelle identité sur cet onglet : on repart des seules clés de ce compte (oublier() efface aussi le drapeau des
    // mesures : les réglages se lisent après)
    if (window.NerudaCles && window.NerudaCles.noms().length) window.NerudaCles.oublier();
    try { await lireReglages(); } catch (e) { }
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
  if (etat.mesures) enAttente.add("activite");     // v65 : ce qui a été noté part avant d'être effacé de l'appareil
  envoyerEnAttente();
  if (enCours) { try { await enCours; } catch (e) { } }
  try { await signOut(auth); } catch (e) { }
  vider();
  try { localStorage.removeItem("neruda.rester"); } catch (e) { }
  if (window.NerudaCles) window.NerudaCles.oublier(true);    // tout : clés du site et code enseignant gardé
  prevenir({ type: "etat" });
}

// ---------------------------------------------------------------- corrigés à débloquer (v64.2)
let codesLus = null;                 // {uid, promesse} : lu une fois par page (sauf « relire »)
function codesCorriges(relire) {
  if (!etat.connecte || !etat.uid || etat.invite || etat.prof) return Promise.resolve(null);
  if (codesLus && codesLus.uid === etat.uid && !relire) return codesLus.promesse;
  const uid = etat.uid;
  const promesse = (async () => {
    try {
      const d = await getDoc(doc(db, "codes", uid));
      if (!d.exists()) { if (codesLus && codesLus.promesse === promesse) codesLus = null; return null; }   // relu la fois suivante
      const v = d.data() || {};
      const b64 = (s, n) => typeof s === "string" && s.length === n && /^[A-Za-z0-9+/]+=*$/.test(s);
      const tours = Number(v.tours);
      if (v.v !== 2 || !/^\d{4}-\d{4}$/.test(String(v.annee || "")) || typeof v.identifiant !== "string" || !v.identifiant
          || !b64(v.sel, 24) || !Number.isInteger(tours) || tours < 10000 || tours > 2000000
          || !v.env || typeof v.env !== "object") return null;
      const env = {};
      for (const id of Object.keys(v.env)) {
        const e = v.env[id];
        if (/^[a-z0-9-]+\.[a-z0-9]+\.[A-Za-z0-9_-]+$/.test(id) && e && b64(e.iv, 16) && typeof e.c === "string"
            && e.c.length >= 64 && e.c.length < 4000 && /^[A-Za-z0-9+/]+=*$/.test(e.c)) env[id] = { iv: e.iv, c: e.c };
      }
      return { annee: v.annee, tours, identifiant: v.identifiant, classe: String(v.classe || ""), sel: v.sel, env };
    } catch (e) {
      console.warn("NerudaCompte : codes personnels illisibles :", e && e.code);
      codesLus = null;                 // on réessaiera
      return null;
    }
  })();
  codesLus = { uid, promesse };
  return promesse;
}
async function deblocages() {
  if (!etat.connecte || !etat.uid || etat.invite || etat.prof) return {};
  try {
    const d = await getDoc(doc(db, "deblocages", etat.uid));
    if (!d.exists()) return {};
    const v = d.data() || {};
    return (v.cles && typeof v.cles === "object") ? v.cles : {};
  } catch (e) {
    console.warn("NerudaCompte : corrigés débloqués illisibles :", e && e.code);
    return {};
  }
}
/* v65 : les décisions du professeur (cases de « Corrigés partagés ») : celles de la classe et celles de l'élève. */
function lireDecisions(v) {
  if (!v || typeof v !== "object" || !v.d || typeof v.d !== "object") return null;
  const d = {};
  for (const id of Object.keys(v.d)) {
    const x = v.d[id];
    if (!/^[a-z0-9-]+\.[a-z0-9]+\.[A-Za-z0-9_-]+$/.test(id) || !x || (x.s !== "o" && x.s !== "f")) continue;
    const t = Number(x.t) || 0;
    if (x.s === "o") { if (typeof x.k === "string" && /^[A-Za-z0-9+/]{43}=$/.test(x.k)) d[id] = { s: "o", t, k: x.k }; }
    else d[id] = { s: "f", t };
  }
  return { maj: Number(v.maj) || 0, d };
}
async function accesCorriges() {
  if (!etat.connecte || !etat.uid || etat.invite || etat.prof) return { classe: null, eleve: null };
  const res = { classe: null, eleve: null };
  if (etat.classe && !etat.collegue) {
    try { const d = await getDoc(doc(db, "acces-classes", etat.classe)); if (d.exists()) res.classe = lireDecisions(d.data()); }
    catch (e) { console.warn("NerudaCompte : corrigés partagés (classe) illisibles :", e && e.code); res.classe = undefined; }
  } else if (!etat.collegue) res.classe = undefined;      // classe inconnue (fiche illisible) : rien ne change sur l'appareil
  try { const d = await getDoc(doc(db, "acces-eleves", etat.uid)); if (d.exists()) res.eleve = lireDecisions(d.data()); }
  catch (e) { console.warn("NerudaCompte : corrigés partagés (élève) illisibles :", e && e.code); res.eleve = undefined; }
  return res;
}
async function retirerDeblocages(ids) {
  if (!etat.connecte || !etat.uid || etat.invite || etat.prof || !Array.isArray(ids) || !ids.length) return false;
  try {
    const args = [];
    for (const id of ids) args.push(new FieldPath("cles", id), deleteField());
    args.push("maj", Date.now());
    await updateDoc(doc(db, "deblocages", etat.uid), ...args);
    return true;
  } catch (e) {
    if (e && e.code === "not-found") return true;
    console.warn("NerudaCompte : corrigés refermés non retirés :", e && e.code); return false;
  }
}
async function enregistrerDeblocages(cles) {
  if (!etat.connecte || !etat.uid || etat.invite || etat.prof || !cles || typeof cles !== "object") return false;
  try { await setDoc(doc(db, "deblocages", etat.uid), { v: 2, maj: Date.now(), cles }, { merge: true }); return true; }
  catch (e) { console.warn("NerudaCompte : corrigés débloqués non enregistrés :", e && e.code); return false; }
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
          try { await lireReglages(); } catch (e) { }
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
  codesCorriges, deblocages, enregistrerDeblocages, accesCorriges, retirerDeblocages, reglages: lireReglages,
  surChangement(fn) { if (typeof fn === "function") ecouteurs.push(fn); },
  CLASSES
};
try { document.dispatchEvent(new CustomEvent("neruda-compte-pret")); } catch (e) { }
export default window.NerudaCompte;
