/* =====================================================================
   socle.js — socle commun des outils du professeur (v62, novembre 2026 ; v64 : site fermé ; v64.2 : codes des corrigés)

   Deux clés, indépendantes, ouvrent ces pages :
   1. le CODE ENSEIGNANT (celui de l'espace enseignant du site) : il donne,
      grâce à acces.js, la clé de l'espace enseignant ; elle déchiffre la
      liste des élèves (noms et photos, fichier prive/…enc) et sert à
      chiffrer et déchiffrer, sur l'appareil, tout ce que la base ne garde
      que pour le professeur (comportement, saisies des évaluations) ;
   2. le COMPTE PROFESSEUR du site (identifiant prof, revendication admin) :
      il ouvre la base Firestore.
   Google ne reçoit donc jamais ni nom complet, ni photo, ni ligne de
   comportement, ni saisie d'évaluation en clair ; seuls les niveaux et la
   note PUBLIÉS pour un élève sont lisibles, par lui seul (règles v3) — et,
   depuis la v64, la fiche de sa copie corrigée (règles v4).
   v64 : le code enseignant saisi ici ouvre aussi, sur l'appareil, les clés des
   classes et la clé commune du site (commun/cles.js, chargé par la page avant
   ce module) ; les refermer ici les referme aussi sur le site.
   v64.2 : la page « Codes des corrigés » ne demande que le code enseignant
   (gardeCode) : les codes se recalculent sur l'appareil (cleCodes), rien n'est
   lu ni écrit dans la base.

   Chiffrement (de quoi vérifier, rien à régler) :
     kpr = clé de l'espace enseignant (32 octets aléatoires, fixée une fois
           pour toutes : changer le code enseignant ne la change pas) ;
     clé des données  = HMAC-SHA256(kpr, "neruda|donnees|v1") → AES-256-GCM ;
     clé des noms     = HMAC-SHA256(kpr, "neruda|ids|v1")     → HMAC des noms
                        de documents (opaques : aucun nom d'élève visible) ;
     document chiffré = {v: 1, iv: base64(12 octets aléatoires),
                         d: base64(AES-GCM(JSON))}, avec le chemin du
                         document comme donnée authentifiée.
   ===================================================================== */
import config from "../entrainement/firebase-config.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, setPersistence,
  browserLocalPersistence, browserSessionPersistence, getIdTokenResult
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  initializeFirestore, getFirestore, persistentLocalCache, persistentMultipleTabManager, terminate, clearIndexedDbPersistence,
  doc, getDoc, setDoc, deleteDoc, collection, onSnapshot, writeBatch, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export { doc, getDoc, setDoc, deleteDoc, collection, onSnapshot, writeBatch, getDocs };

const DOMAINE = "@physique-neruda.site";
const TE = new TextEncoder(), TD = new TextDecoder();
const PROF = window.ACCES_PROF || null;
const ACCES = window.ACCES || {};

export const app = initializeApp(config);
export const auth = getAuth(app);
export let db;
try {
  db = initializeFirestore(app, { localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }) });
} catch (e) {
  db = getFirestore(app);            // navigation privée : pas de cache persistant, la page marche quand même
}

// ------------------------------------------------------------------ utilitaires
export const esc = s => String(s === undefined || s === null ? "" : s)
  .replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
export function auj() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
/* dates et points : toujours rendus sous une forme sûre (rien d'autre que des chiffres), même si une donnée importée
   était malformée — ils entrent tels quels dans le HTML des pages */
export function fr(iso) { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || "")); return m ? m[3] + "/" + m[2] + "/" + m[1] : ""; }
export const dateValide = iso => /^\d{4}-\d{2}-\d{2}$/.test(String(iso || ""));
export const pts = n => { const v = Number(n) || 0; return (v > 0 ? "+" : "") + String(v).replace(".", ","); };
function deB64(s) { const b = atob(s), u = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; }
function versB64(buf) { const u = new Uint8Array(buf); let s = ""; for (let i = 0; i < u.length; i++) s += String.fromCharCode(u[i]); return btoa(s); }
const hex = buf => [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2, "0")).join("");
function memoire() { try { return window.localStorage; } catch (e) { return null; } }
function session() { try { return window.sessionStorage; } catch (e) { return null; } }
function lire(st, k) { try { return st ? st.getItem(k) : null; } catch (e) { return null; } }
function ecrire(st, k, v) { try { if (st) st.setItem(k, v); } catch (e) { } }
function oublier(st, k) { try { if (st) st.removeItem(k); } catch (e) { } }
export function reglage(k, v) {            // petites préférences de l'appareil (classe, épreuve choisies)
  if (v === undefined) return lire(memoire(), "prof-" + k);
  ecrire(memoire(), "prof-" + k, v);
}

// ------------------------------------------------------------------ clé de l'espace enseignant
let K = null;              // {prive, fichiers, donnees, ids}
const ecouteurs = [];
function prevenir() { for (const f of ecouteurs) { try { f(etat()); } catch (e) { console.warn(e); } } }
export function surChangement(f) { ecouteurs.push(f); }

/* « Garder sur cet appareil » : les clés sont rangées NON EXTRACTIBLES dans IndexedDB — un script peut s'en servir
   dans la page, jamais les lire ni les copier ailleurs ; aucune clé brute n'est écrite par ces pages. Sans « garder »,
   l'entrée est liée à l'onglet (jeton en sessionStorage) et oubliée avec lui. */
function coffre() {
  return new Promise((ok, ko) => {
    try {
      const r = indexedDB.open("neruda-prof", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("cles");
      r.onsuccess = () => ok(r.result); r.onerror = () => ko(r.error);
    } catch (e) { ko(e); }
  });
}
async function coffreLire() {
  try {
    const b = await coffre();
    return await new Promise(ok => { const q = b.transaction("cles").objectStore("cles").get("k"); q.onsuccess = () => ok(q.result || null); q.onerror = () => ok(null); });
  } catch (e) { return null; }
}
async function coffreEcrire(v) {
  try {
    const b = await coffre();
    await new Promise(ok => {
      const tr = b.transaction("cles", "readwrite");
      if (v) tr.objectStore("cles").put(v, "k"); else tr.objectStore("cles").delete("k");
      tr.oncomplete = ok; tr.onerror = ok; tr.onabort = ok;
    });
  } catch (e) { }
}
async function installer(brut) {
  const s = crypto.subtle;
  const fichiers = await s.importKey("raw", brut, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const kd = await s.sign("HMAC", fichiers, TE.encode("neruda|donnees|v1"));
  const ki = await s.sign("HMAC", fichiers, TE.encode("neruda|ids|v1"));
  const k = {
    prive: await s.importKey("raw", brut, "AES-GCM", false, ["decrypt"]),
    fichiers,
    donnees: await s.importKey("raw", kd, "AES-GCM", false, ["encrypt", "decrypt"]),
    ids: await s.importKey("raw", ki, { name: "HMAC", hash: "SHA-256" }, false, ["sign"])
  };
  // vérification : la liste des élèves doit se déchiffrer avec cette clé
  await lireFichierPrive(k, "donnees/eleves.json");
  K = k;
  return k;
}
async function restaurerCle() {
  if (!PROF || !PROF.prive || !window.crypto || !crypto.subtle) return;
  const v = await coffreLire();
  // v64 : le coffre ne garde des clés que si « Garder sur cet appareil » était coché ; sans cela, l'onglet
  // seulement (trace de sessionStorage). Un ancien coffre « lié à l'onglet » (v62-v63) est effacé.
  if (v && v.sel === PROF.sel && v.prive && v.donnees && v.garder) {
    try { await lireFichierPrive(v, "donnees/eleves.json"); K = { prive: v.prive, fichiers: v.fichiers, donnees: v.donnees, ids: v.ids }; return; }
    catch (e) { if (e && e.message === "absent") return; }
  }
  if (v) await coffreEcrire(null);
  // à défaut, la trace de la page d'accueil du site (code saisi dans l'espace enseignant)
  const brut = lire(session(), "acces-prive") || lire(memoire(), "acces-prive");
  if (!brut) return;
  let o = null; try { o = JSON.parse(brut); } catch (e) { }
  if (!o || o.sel !== PROF.sel) { oublier(session(), "acces-prive"); oublier(memoire(), "acces-prive"); return; }
  try { await installer(deB64(o.k)); }
  catch (e) {
    if (e && e.message === "absent") return;              // fichier pas encore publié : on garde la trace
    oublier(session(), "acces-prive"); oublier(memoire(), "acces-prive");
  }
}
/* Le code enseignant : mêmes calculs que la page d'accueil du site (index.html). */
export async function ouvrirCode(code, garder) {
  if (!PROF || !PROF.prive) throw new Error("Espace enseignant indisponible sur cette version du site.");
  if (!window.crypto || !crypto.subtle) throw new Error("Ce navigateur ne sait pas déchiffrer : essayer Chrome, Firefox ou Safari à jour.");
  const mot = String(code || "").trim().toLowerCase();
  if (!mot) throw new Error("Écrire le code enseignant.");
  const s = crypto.subtle;
  const base = await s.importKey("raw", TE.encode(mot), "PBKDF2", false, ["deriveBits"]);
  const bits = await s.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: deB64(PROF.sel), iterations: PROF.tours }, base, 256);
  const kp = await s.importKey("raw", bits, "AES-GCM", false, ["decrypt"]);
  let ok = false;
  try { ok = TD.decode(await s.decrypt({ name: "AES-GCM", iv: deB64(PROF.iv) }, kp, deB64(PROF.temoin))) === "acces-ok:prof"; } catch (e) { }
  if (!ok) throw new Error("Code incorrect.");
  const kpr = await s.decrypt({ name: "AES-GCM", iv: deB64(PROF.prive.iv), additionalData: TE.encode("prive") }, kp, deB64(PROF.prive.cle));
  let k;
  try { k = await installer(new Uint8Array(kpr)); }
  catch (e) { throw new Error(e && e.message === "absent" ? "La liste des élèves n'est pas encore sur le site (version trop ancienne)." : "Liste des élèves illisible."); }
  if (garder) {
    // appareil du professeur : clés NON EXTRACTIBLES dans IndexedDB (elles servent, ne se lisent pas)
    await coffreEcrire({ sel: PROF.sel, garder: true, jeton: "", prive: k.prive, fichiers: k.fichiers, donnees: k.donnees, ids: k.ids });
  } else {
    // ordinateur partagé : rien dans IndexedDB ; la clé ne vit que dans l'onglet (refermé avec lui)
    await coffreEcrire(null);
    ecrire(session(), "acces-prive", JSON.stringify({ sel: PROF.sel, k: versB64(kpr) }));
  }
  oublier(session(), "prof-jeton");
  // comme sur l'accueil : le code enseignant ouvre aussi les clés des classes et la clé commune du site
  // (v64 : commun/cles.js). Pas celle de l'espace enseignant : ces pages ne l'écrivent jamais en clair,
  // elle reste dans le coffre (IndexedDB, non extractible) ; l'accueil du site la redemande au besoin.
  const N = window.NerudaCles;
  if (N && N.enLigne) {
    const tr = {};
    const ouvrir = async (e, aad) => versB64(await s.decrypt({ name: "AES-GCM", iv: deB64(e.iv), additionalData: TE.encode(aad) }, kp, deB64(e.cle)));
    for (const f of Object.keys(PROF.cles || {})) { try { tr[f] = { k: await ouvrir(PROF.cles[f], f) }; } catch (e) { } }
    if (PROF.commune) { try { tr.commune = { k: await ouvrir(PROF.commune, "commune") }; } catch (e) { } }
    try { await N.enregistrer(tr, !!garder, "prof"); } catch (e) { }
  } else {
    // site v63 et avant (acces.js v1) : traces « acces-<filière> » lues par l'ancien accueil
    for (const f of Object.keys(PROF.cles || {})) {
      if (!ACCES[f]) continue;
      try {
        const e = PROF.cles[f];
        const kf = await s.decrypt({ name: "AES-GCM", iv: deB64(e.iv), additionalData: TE.encode(f) }, kp, deB64(e.cle));
        const t = JSON.stringify({ sel: ACCES[f].sel, k: versB64(kf) });
        ecrire(session(), "acces-" + f, t); if (garder) ecrire(memoire(), "acces-" + f, t);
      } catch (e) { }
    }
  }
  prevenir();
}
export async function fermerCode() {
  K = null; ELEVES = null;
  await coffreEcrire(null);
  oublier(session(), "prof-jeton"); oublier(session(), "acces-prive"); oublier(memoire(), "acces-prive");
  // v64 : la clé de l'espace enseignant se referme aussi sur le site ; et toutes les clés du site si c'est le
  // code enseignant qui les avait ouvertes (pas celles d'un compte)
  const N = window.NerudaCles;
  if (N && N.enLigne) { N.retirer(["prive"]); if (N.source() === "prof") N.oublier(true); }
  prevenir();
}

// ------------------------------------------------------------------ fichiers chiffrés de l'espace enseignant
async function idFichier(k, rel) { return hex(await crypto.subtle.sign("HMAC", k.fichiers, TE.encode("fichier|" + rel))).slice(0, 20); }
async function lireFichierPrive(k, rel) {
  const id = await idFichier(k, rel);
  const r = await fetch("../prive/" + id + ".enc", { cache: "no-cache" });
  if (!r.ok) throw new Error("absent");
  const u = new Uint8Array(await r.arrayBuffer());
  if (String.fromCharCode(u[0], u[1], u[2], u[3]) !== "NRD1") throw new Error("format");
  const clair = await crypto.subtle.decrypt({ name: "AES-GCM", iv: u.slice(4, 16), additionalData: TE.encode("prive/" + id) }, k.prive, u.slice(16));
  return JSON.parse(TD.decode(clair));
}
/* v64.2 : Kc = HMAC-SHA256(kpr, "neruda|codes-corriges|" + année), clé HMAC non extractible (codes des corrigés) */
export async function cleCodes(annee) {
  if (!K) throw new Error("code enseignant manquant");
  if (!/^\d{4}-\d{4}$/.test(String(annee || ""))) throw new Error("année scolaire illisible");
  const brut = await crypto.subtle.sign("HMAC", K.fichiers, TE.encode("neruda|codes-corriges|" + annee));
  return crypto.subtle.importKey("raw", brut, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
}
export async function lireDonnees(nom) {
  if (!K) throw new Error("code enseignant manquant");
  return lireFichierPrive(K, "donnees/" + nom);
}
let ELEVES = null;
/* {classes: {code: {libelle, groupes}}, eleves: [{id, nom, prenom, affiche, classe, groupe, photo}]} */
export async function eleves() {
  if (!ELEVES) {
    const d = await lireDonnees("eleves.json");
    d.eleves.sort((a, b) => (a.nom + " " + a.prenom).localeCompare(b.nom + " " + b.prenom, "fr"));
    ELEVES = d;
  }
  return ELEVES;
}
export function photo(e) {
  if (e && e.photo && /^[A-Za-z0-9+/=]+$/.test(e.photo)) return "data:image/jpeg;base64," + e.photo;
  const ini = e ? ((e.prenom || "?")[0] + (e.nom || "")[0]).toUpperCase() : "?";
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 190"><rect width="150" height="190" fill="#c9d3db"/>'
    + '<text x="75" y="112" font-family="Arial,sans-serif" font-size="54" font-weight="700" fill="#5c6c79" text-anchor="middle">'
    + esc(ini) + "</text></svg>";
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// ------------------------------------------------------------------ chiffrement des documents de la base
export async function idOpaque(texte) {
  if (!K) throw new Error("code enseignant manquant");
  return hex(await crypto.subtle.sign("HMAC", K.ids, TE.encode(texte))).slice(0, 20);
}
export function idAleatoire() { return hex(crypto.getRandomValues(new Uint8Array(10))); }
export async function chiffrerDoc(chemin, objet) {
  if (!K) throw new Error("code enseignant manquant");
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const d = await crypto.subtle.encrypt({ name: "AES-GCM", iv, additionalData: TE.encode(chemin) }, K.donnees, TE.encode(JSON.stringify(objet)));
  return { v: 1, iv: versB64(iv), d: versB64(d) };
}
export async function dechiffrerDoc(chemin, data) {
  if (!K || !data || data.v !== 1 || !data.iv || !data.d) return null;
  try {
    const t = await crypto.subtle.decrypt({ name: "AES-GCM", iv: deB64(data.iv), additionalData: TE.encode(chemin) }, K.donnees, deB64(data.d));
    return JSON.parse(TD.decode(t));
  } catch (e) { return null; }
}

// ------------------------------------------------------------------ compte professeur (Firebase)
const compte = { connu: false, user: null, admin: false, email: "" };
function messageErreur(e) {
  const code = (e && e.code) || "";
  if (/invalid-credential|wrong-password|user-not-found|invalid-email|invalid-login-credentials|missing-password/.test(code)) return "Identifiant ou mot de passe incorrect.";
  if (/too-many-requests/.test(code)) return "Trop d'essais : patienter quelques minutes.";
  if (/network-request-failed/.test(code)) return "Pas de réseau.";
  if (/user-disabled/.test(code)) return "Ce compte est désactivé.";
  return (e && e.message && !code) ? e.message : "Connexion impossible" + (code ? " (" + code + ")" : "") + ".";
}
export async function connecterProf(identifiant, mdp, rester) {
  let id = String(identifiant || "").trim().toLowerCase();
  if (!id) throw new Error("Écrire l'identifiant (prof).");
  if (id.indexOf("@") < 0) id += DOMAINE;
  try {
    await setPersistence(auth, rester ? browserLocalPersistence : browserSessionPersistence);
    const cred = await signInWithEmailAndPassword(auth, id, String(mdp || ""));
    const t = await getIdTokenResult(cred.user, true);
    if (!(t && t.claims && t.claims.admin === true)) {
      try { await signOut(auth); } catch (e) { }
      throw new Error("Ce compte n'est pas le compte professeur.");
    }
  } catch (e) { throw new Error(messageErreur(e)); }
}
/* Se déconnecter du compte professeur : la session, puis le cache de la base sur cet appareil (copies publiées,
   documents chiffrés), qui se lirait sans passer par les règles. Si un autre onglet de l'espace prof est ouvert,
   le cache ne peut pas être effacé tout de suite : il le sera à la prochaine déconnexion. */
export async function deconnecterProf() {
  reglage("admin-uid", "");
  try { await signOut(auth); } catch (e) { }
  try { await terminate(db); await clearIndexedDbPersistence(db); } catch (e) { console.warn("cache non effacé :", e && e.code); }
  location.reload();
}
export function etat() { return { cle: !!K, compte: Object.assign({}, compte), pret: !!K && compte.admin }; }

const pretCompte = new Promise(resolve => {
  let premier = true;
  onAuthStateChanged(auth, async u => {
    compte.user = u; compte.email = u ? (u.email || "") : ""; compte.admin = false;
    if (u) {
      try { const t = await getIdTokenResult(u); compte.admin = !!(t && t.claims && t.claims.admin === true); reglage("admin-uid", compte.admin ? u.uid : ""); }
      catch (e) { compte.admin = reglage("admin-uid") === u.uid; }   // hors ligne, jeton expiré : la dernière vérification fait foi (la base, elle, revérifie)
    }
    compte.connu = true;
    prevenir();
    if (premier) { premier = false; resolve(); }
  });
});
export const pret = Promise.all([restaurerCle(), pretCompte]).then(etat);

// ------------------------------------------------------------------ interface commune
export function toast(txt, annuler) {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.innerHTML = '<span></span>' + (annuler ? '<button type="button">Annuler</button>' : "");
  t.firstChild.textContent = txt;
  if (annuler) t.querySelector("button").onclick = () => { t.style.display = "none"; annuler(); };
  t.style.display = "flex"; clearTimeout(toast.m); toast.m = setTimeout(() => { t.style.display = "none"; }, annuler ? 4500 : 3500);
}
function modale() {
  let m = document.getElementById("modale");
  if (!m) {
    m = document.createElement("div"); m.id = "modale"; m.className = "modale";
    m.innerHTML = '<div class="feuille" id="feuille" role="dialog" aria-modal="true"></div>';
    document.body.appendChild(m);
    m.addEventListener("click", e => { if (e.target === m) fermerFeuille(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && m.classList.contains("on")) fermerFeuille(); });
  }
  return m;
}
let surFermeture = null;
export function ouvrirFeuille(html, quandFerme) {
  const m = modale(), f = m.querySelector(".feuille");
  f.innerHTML = html; f.scrollTop = 0; m.classList.add("on"); surFermeture = quandFerme || null;
  return f;
}
export function fermerFeuille() {
  const m = document.getElementById("modale"); if (m) m.classList.remove("on");
  const f = surFermeture; surFermeture = null; if (f) f();
}
export function feuille() { return modale().querySelector(".feuille"); }
export function confirmer(txt, ok, options) {
  const o = options || {}, garde = surFermeture; surFermeture = null;
  const f = ouvrirFeuille('<div class="confirme"><b>' + esc(o.titre || "Confirmer") + "</b><p></p>"
    + (o.saisie ? '<label class="lab">Taper <b>' + esc(o.saisie) + '</b> pour confirmer<input class="champ-texte" id="conf-saisie" autocomplete="off"></label>' : "")
    + '<button type="button" class="gros ' + (o.danger === false ? "" : "danger") + '" id="conf-oui">' + esc(o.libelle || "Confirmer") + "</button>"
    + '<button type="button" class="gros sec" id="conf-non">Annuler</button></div>');
  f.querySelector("p").textContent = txt;
  f.querySelector("#conf-oui").onclick = () => {
    if (o.saisie && f.querySelector("#conf-saisie").value.trim().toUpperCase() !== o.saisie) { f.querySelector("#conf-saisie").focus(); return; }
    fermerFeuille(); ok();
  };
  f.querySelector("#conf-non").onclick = () => { if (o.retour) o.retour(); else { surFermeture = garde; fermerFeuille(); } };
}
export async function copier(texte) {
  try { await navigator.clipboard.writeText(texte); return true; }
  catch (e) {
    const z = document.createElement("textarea"); z.value = texte; document.body.appendChild(z); z.select();
    let ok = false; try { ok = document.execCommand("copy"); } catch (x) { }
    z.remove(); return ok;
  }
}
export function telecharger(nom, texte, type) {
  const blob = new Blob([texte], { type: type || "text/plain;charset=utf-8" });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = nom;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 60000);
}
/* une cellule qui commencerait par = + - @ deviendrait une formule dans le tableur : on la préfixe d'une apostrophe
   (sauf les nombres, comme « -0,5 ») */
export function cellule(c) {
  const s = String(c === undefined || c === null ? "" : c);
  return (/^[=@\t\r]/.test(s) || /^[+-](?![\d.,]+$)/.test(s)) ? "'" + s : s;
}
export function csv(lignes) {
  return "\uFEFF" + lignes.map(r => r.map(c => '"' + cellule(c).replace(/"/g, '""') + '"').join(";")).join("\r\n");
}

/* Panneau d'accès : tant que les deux clés ne sont pas ouvertes, la page n'affiche que lui. */
export function garde(zone) {
  return new Promise(resolve => {
    let fini = false, derniere = "", errCode = "", errCompte = "";
    function rendre(force) {
      const e = etat();
      if (e.pret) {
        zone.hidden = true; zone.innerHTML = "";
        if (!fini) { fini = true; resolve(e); }
        return;
      }
      if (fini) { location.reload(); return; }       // une clé s'est refermée (autre onglet) : on repart proprement
      zone.hidden = false;
      const c = e.compte;
      // ne reconstruire que si l'état a changé (on est peut-être en train d'écrire)
      const cle = JSON.stringify([e.cle, c.connu, c.admin, !!c.user, c.email]);
      if (cle === derniere && force !== true) return;
      derniere = cle;
      let h = '<h2>Accès réservé au professeur</h2><p class="aide">Deux clés ouvrent ces outils : le <b>code enseignant</b> '
        + "(il déchiffre sur l'appareil la liste des élèves et tout ce que la base ne garde que pour vous) et le "
        + '<b>compte professeur</b> du site (il ouvre la base). Chacune se saisit une fois par appareil.</p>';
      h += '<div class="cle' + (e.cle ? " ok" : "") + '"><h3>1. Code enseignant</h3>';
      h += e.cle ? '<p>Ouvert sur cet appareil.</p>'
        : '<form id="f-code"><label class="lab" for="code">Code enseignant</label>'
          + '<input class="champ-texte" id="code" type="password" autocomplete="off" autocapitalize="none" spellcheck="false">'
          + '<label class="case"><input type="checkbox" id="code-garder" checked> Garder sur cet appareil (décocher sur un ordinateur partagé)</label>'
          + '<p class="erreur" id="code-err">' + esc(errCode) + '</p><button class="gros" type="submit" id="code-ok">Ouvrir</button></form>';
      h += "</div>";
      h += '<div class="cle' + (c.admin ? " ok" : "") + '"><h3>2. Compte professeur</h3>';
      if (!c.connu) h += "<p>Lecture de la connexion…</p>";
      else if (c.admin) h += "<p>Connecté.</p>";
      else {
        if (c.user) h += '<p class="erreur">Connecté avec le compte « ' + esc(c.email.replace(DOMAINE, "")) + " », qui n'est pas le compte professeur.</p>"
          + '<button class="gros sec" type="button" id="compte-sortir">Se déconnecter</button>';
        else h += '<form id="f-compte"><label class="lab" for="ident">Identifiant</label>'
          + '<input class="champ-texte" id="ident" value="prof" autocomplete="username" autocapitalize="none" spellcheck="false">'
          + '<label class="lab" for="mdp">Mot de passe (Bitwarden)</label>'
          + '<input class="champ-texte" id="mdp" type="password" autocomplete="current-password">'
          + '<label class="case"><input type="checkbox" id="rester" checked> Rester connecté sur cet appareil (décocher sur un ordinateur partagé)</label>'
          + '<p class="erreur" id="compte-err">' + esc(errCompte) + '</p><button class="gros" type="submit" id="compte-ok">Se connecter</button></form>';
      }
      h += "</div>";
      zone.innerHTML = h;
      const fc = zone.querySelector("#f-code");
      if (fc) fc.onsubmit = async ev => {
        ev.preventDefault();
        const b = zone.querySelector("#code-ok"), err = zone.querySelector("#code-err");
        b.disabled = true; b.textContent = "Vérification…"; err.textContent = "";
        try { await ouvrirCode(zone.querySelector("#code").value, zone.querySelector("#code-garder").checked); errCode = ""; }
        catch (x) { errCode = x.message; err.textContent = x.message; b.disabled = false; b.textContent = "Ouvrir"; rendre(true); }
      };
      const fk = zone.querySelector("#f-compte");
      if (fk) fk.onsubmit = async ev => {
        ev.preventDefault();
        const b = zone.querySelector("#compte-ok"), err = zone.querySelector("#compte-err");
        b.disabled = true; b.textContent = "Connexion…"; err.textContent = "";
        const ident = zone.querySelector("#ident").value;
        try { await connecterProf(ident, zone.querySelector("#mdp").value, zone.querySelector("#rester").checked); errCompte = ""; }
        catch (x) {
          errCompte = x.message; err.textContent = x.message; b.disabled = false; b.textContent = "Se connecter";
          rendre(true); const i = zone.querySelector("#ident"); if (i) i.value = ident;
        }
      };
      const so = zone.querySelector("#compte-sortir");
      if (so) so.onclick = () => deconnecterProf();
    }
    surChangement(rendre);
    pret.then(rendre);
  });
}

/* v64.2 : panneau d'accès réduit au code enseignant (pages qui ne lisent ni n'écrivent la base). */
export function gardeCode(zone) {
  return new Promise(resolve => {
    let fini = false, err = "", derniere = null;
    function rendre(force) {
      const e = etat();
      if (e.cle) {
        zone.hidden = true; zone.innerHTML = "";
        if (!fini) { fini = true; resolve(e); }
        return;
      }
      if (fini) { location.reload(); return; }
      zone.hidden = false;
      if (derniere === false && force !== true) return;
      derniere = false;
      zone.innerHTML = '<h2>Accès réservé au professeur</h2><p class="aide">Le <b>code enseignant</b> suffit ici : il recalcule '
        + "les codes sur l'appareil, rien n'est lu ni écrit dans la base. Sans « Garder », il se referme avec l'onglet.</p>"
        + '<div class="cle"><h3>Code enseignant</h3><form id="f-code"><label class="lab" for="code">Code enseignant</label>'
        + '<input class="champ-texte" id="code" type="password" autocomplete="off" autocapitalize="none" spellcheck="false">'
        + '<label class="case"><input type="checkbox" id="code-garder"> Garder sur cet appareil (seulement sur votre ordinateur ou votre téléphone)</label>'
        + '<p class="erreur" id="code-err">' + esc(err) + '</p><button class="gros" type="submit" id="code-ok">Ouvrir</button></form></div>';
      const fc = zone.querySelector("#f-code");
      fc.onsubmit = async ev => {
        ev.preventDefault();
        const b = zone.querySelector("#code-ok"), er = zone.querySelector("#code-err");
        b.disabled = true; b.textContent = "Vérification…"; er.textContent = "";
        try { await ouvrirCode(zone.querySelector("#code").value, zone.querySelector("#code-garder").checked); err = ""; }
        catch (x) { err = x.message; derniere = null; rendre(true); }
      };
    }
    surChangement(rendre);
    pret.then(rendre);
  });
}

/* État de la synchronisation, d'après les métadonnées des instantanés Firestore. */
export function afficherSynchro(el, meta) {
  if (!el) return;
  const horsLigne = (meta && meta.fromCache) || (typeof navigator !== "undefined" && navigator.onLine === false);
  const attente = meta && meta.hasPendingWrites;
  el.textContent = attente ? (horsLigne ? "● hors ligne, envoi en attente" : "● envoi…") : (horsLigne ? "● hors ligne" : "● synchronisé");
  el.className = "info synchro" + (attente || horsLigne ? " attente" : "");
}
