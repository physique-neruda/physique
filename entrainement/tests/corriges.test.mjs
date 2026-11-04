// Tests des codes des corrigés (site v64.2) : commun/corriges.js (élève) et prof/codes.js (professeur) donnent
// les mêmes valeurs qu'outils/chiffrer.py (vecteurs d'outils/tests_codes.py, clé FICTIVE : octets 0 à 31).
//     node --test entrainement/tests/corriges.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const S = globalThis.crypto.subtle, TE = new TextEncoder();
const hex = s => Uint8Array.from(s.match(/../g).map(x => parseInt(x, 16)));
const b64 = u => Buffer.from(u).toString("base64");
const KPR = Uint8Array.from({ length: 32 }, (_, i) => i);
const ID = "bts-tsma.ch07.ex03", CLASSE = "tsma1", ELEVE = "alex.m", ANNEE = "2026-2027";
const V = {
  kc: "abc70feebfb78d387dc2a13172ebc0910e126207038e35c1a7fcbb925768db94",
  cle: "56f87b48a28ebe506dae56db7cd753eff3d10047dd7afa97bff77d8efbc232e2",
  nom: "5377f4dce82998d93db0", code: "RV6ZWFYW42", nominatif: "VVH36V8B37",
  sel: "ea0f5702aaa81ab239646691ac710dc4", sel_nominatif: "a05c589380efd799114bd564cf9c8aed",
  env: { iv: "cmzaEIDAZs1WQxIE", cle: "jAs7q7CqiCiUH/xcUUbLvsGwanQd+umyT7dIwoBxI6EkOT49ootblbb30Q+bDpI2" },
  env_nominatif: { iv: "pujMtYCy5htNcnDy", c: "rGm817oLLQrk4g85OhRmOCTX0fyinWtDSTwpP024C2BANKY3697byNB9hnUAptyf" }
};
/* codes/{uid} de l'élève alex.m, tel que le dépose « comptes_firebase.py cles » */
const PERSO = { annee: ANNEE, tours: 100000, identifiant: ELEVE, classe: CLASSE, sel: b64(hex(V.sel_nominatif)), env: { [ID]: V.env_nominatif } };
const PDF = TE.encode("%PDF-1.5 corrigé d'essai");

function memoire() {
  const m = new Map();
  return { getItem: k => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: k => m.delete(k) };
}
async function fichierChiffre() {
  const k = await S.importKey("raw", hex(V.cle), "AES-GCM", false, ["encrypt"]);
  const iv = new Uint8Array(12).fill(7);
  const ct = new Uint8Array(await S.encrypt({ name: "AES-GCM", iv, additionalData: TE.encode("corriges/" + V.nom) }, k, PDF));
  return Uint8Array.from([...TE.encode("NRD1"), ...iv, ...ct]);
}
const CAT = { CORRIGES: { "bts-tsma": { v: 1, annee: ANNEE, tours: 100000, sels: { tsma1: b64(hex(V.sel)) },
  elements: [{ id: ID, ch: "ch07", chapitre: "Chapitre 7 — Combustions et carburants", sorte: "exercice", n: 3, titre: "Combustion incomplète", pages: 1, f: V.nom }],
  groupes: [], enveloppes: { tsma1: { [ID]: V.env } } } } };

/* commun/corriges.js dans une fausse fenêtre ; compte : null (accès de secours) ou {etat, perso} */
async function charger(opts) {
  opts = opts || {};
  const fichier = await fichierChiffre();
  const hp = await S.importKey("raw", KPR, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const ecoute = [];
  const win = {
    crypto: globalThis.crypto, TextEncoder, setTimeout, clearTimeout, atob: s => Buffer.from(s, "base64").toString("binary"),
    btoa: s => Buffer.from(s, "binary").toString("base64"),
    sessionStorage: memoire(), localStorage: memoire(),
    fetch: async url => ({ ok: url.endsWith("corriges/" + V.nom + ".enc"), arrayBuffer: async () => fichier.buffer }),
    NerudaCles: {
      source: () => opts.source || "secours", noms: () => ["bts-tsma", "commune"],
      cle: n => (n === "prive" ? !!opts.prof : true), surChangement: f => ecoute.push(f),
      deriverPrive: async t => S.sign("HMAC", hp, TE.encode(t))
    }
  };
  if (opts.avant) win.sessionStorage.setItem("neruda.corriges", JSON.stringify(opts.avant));
  if (opts.avantAppareil) win.localStorage.setItem("neruda.corriges", JSON.stringify(opts.avantAppareil));
  if (opts.compte) win.NerudaCompte = {
    etat: () => opts.compte.etat, surChangement: f => { win.__etat = f; },
    pret: opts.compte.pret || (opts.compte.enAttente ? new Promise(() => { }) : Promise.resolve()),
    codesCorriges: async relire => { win.lectures = (win.lectures || 0) + 1; return (relire && opts.compte.persoRelu) || opts.compte.perso || null; },
    deblocages: async () => ({}), enregistrerDeblocages: async c => { (win.envoyes = win.envoyes || []).push(c); return true; }
  };
  // comme dans un navigateur : la fenêtre est l'objet global (crypto, fetch, atob… y sont)
  win.document = { currentScript: { src: "http://essai/commun/corriges.js" }, addEventListener: () => { } };
  win.window = win;
  const ctx = vm.createContext(win);
  vm.runInContext(readFileSync(new URL("../../commun/corriges.js", import.meta.url), "utf8"), ctx);
  await new Promise(r => setTimeout(r, 0));
  return win;
}

test("normaliser : majuscules, tirets et espaces ignorés ; I, O, 0, 1 refusés", async () => {
  const w = await charger();
  const N = w.NerudaCorriges;
  assert.equal(N.normaliser(" rv6zw-fyw42 ").code, "RV6ZWFYW42");
  assert.ok(N.normaliser("RV6ZWFYW4O").erreur.includes("ni I, ni O"));
  assert.ok(N.normaliser("RV6ZW").erreur.includes("10 signes"));
  assert.equal(N.joli("RV6ZWFYW42"), "RV6ZW-FYW42");
});

test("le code de la classe ouvre l'enveloppe ; la clé obtenue déchiffre le corrigé", async () => {
  const w = await charger();
  const N = w.NerudaCorriges;
  assert.equal(N.ouvert(ID), false);
  const r = await N.essayer("rv6zw-fyw42", CAT);
  assert.deepEqual(Array.from(r.ok), [ID]);
  assert.equal(r.nominatif, false);
  const garde = JSON.parse(w.sessionStorage.getItem("neruda.corriges"));
  assert.equal(Buffer.from(garde.cles[ID].k, "base64").toString("hex"), V.cle);
  assert.equal(garde.qui, "secours");
  assert.equal(N.ouvert(ID), true);
  const clair = new Uint8Array(await N.ouvrir(CAT.CORRIGES["bts-tsma"].elements[0]));
  assert.equal(Buffer.from(clair).toString(), Buffer.from(PDF).toString());
});

test("un mauvais code est refusé, sans rien garder", async () => {
  const w = await charger();
  await assert.rejects(w.NerudaCorriges.essayer("RV6ZWFYW43", CAT), e => e.code === "incorrect");
  assert.equal(w.sessionStorage.getItem("neruda.corriges"), null);
});

test("code nominatif : il marche avec le compte de l'élève, pas avec celui d'un camarade", async () => {
  const eleve = await charger({ source: "compte", compte: { etat: { connecte: true, uid: "u1", classe: "tsma1" }, perso: PERSO } });
  const r = await eleve.NerudaCorriges.essayer(V.nominatif, CAT);
  assert.deepEqual(Array.from(r.ok), [ID]);
  assert.equal(r.nominatif, true);
  assert.equal(eleve.envoyes.length, 1);                                  // gardé avec le compte
  // un camarade (ses propres enveloppes : un autre sel, un autre identifiant) : le code d'alex.m ne lui sert à rien
  const autrePerso = Object.assign({}, PERSO, { identifiant: "sam.b", sel: b64(new Uint8Array(16).fill(3)) });
  const autre = await charger({ source: "compte", compte: { etat: { connecte: true, uid: "u2", classe: "tsma1" }, perso: autrePerso } });
  await assert.rejects(autre.NerudaCorriges.essayer(V.nominatif, CAT), e => e.code === "incorrect" && !e.perso);
  // le code de la classe marche pour tous les élèves de la classe…
  assert.deepEqual(Array.from((await autre.NerudaCorriges.essayer(V.code, CAT)).ok), [ID]);
  // … mais pas pour un élève d'une autre classe
  const ailleurs = await charger({ source: "compte", compte: { etat: { connecte: true, uid: "u3", classe: "tsma2" }, perso: PERSO } });
  await assert.rejects(ailleurs.NerudaCorriges.essayer(V.code, CAT));
  // le code nominatif n'ouvre pas l'enveloppe de la classe (accès de secours) : il ne vaut qu'avec le compte
  const secours = await charger();
  await assert.rejects(secours.NerudaCorriges.essayer(V.nominatif, CAT), e => e.code === "incorrect");
});

test("codes personnels absents, d'une autre année ou incomplets : le message le dit", async () => {
  for (const perso of [null, Object.assign({}, PERSO, { annee: "2025-2026" }), Object.assign({}, PERSO, { env: {} })]) {
    const w = await charger({ source: "compte", compte: { etat: { connecte: true, uid: "u1", classe: "tsma1" }, perso } });
    await assert.rejects(w.NerudaCorriges.essayer(V.nominatif, CAT), e => e.code === "incorrect" && e.perso === "absent"
      && /pas encore sur ton compte/.test(e.message));
    // le code de la classe, lui, marche toujours
    assert.deepEqual(Array.from((await w.NerudaCorriges.essayer(V.code, CAT)).ok), [ID]);
  }
});

test("ce qui est gardé sur l'appareil ne sert pas à un autre compte", async () => {
  const w = await charger({ source: "compte", compte: { etat: { connecte: true, uid: "u1", classe: "tsma1" }, perso: PERSO } });
  await w.NerudaCorriges.essayer(V.code, CAT);
  assert.equal(w.NerudaCorriges.ouvert(ID), true);
  // un autre élève se connecte dans le même onglet sans que l'appareil ait été vidé
  const avant = w.sessionStorage.getItem("neruda.corriges");
  const w2 = await charger({ source: "compte", compte: { etat: { connecte: true, uid: "u9", classe: "tsma1" }, perso: PERSO } });
  w2.sessionStorage.setItem("neruda.corriges", avant);
  const N2 = w2.NerudaCorriges;
  N2.oublier(); w2.sessionStorage.setItem("neruda.corriges", avant);     // relecture à neuf
  assert.equal(N2.ouvert(ID), false);
});

test("compte pas encore connu : le code attend le compte, puis ses codes personnels marchent", async () => {
  let ouvrirCompte;
  const pret = new Promise(r => { ouvrirCompte = r; });
  const w = await charger({ source: "compte", compte: { etat: { connecte: true, uid: "u1", classe: "tsma1" }, perso: PERSO, pret } });
  const essai = w.NerudaCorriges.essayer(V.nominatif, CAT);         // lien Pronote ouvert pendant la restauration
  setTimeout(() => ouvrirCompte(), 80);
  const r = await essai;
  assert.deepEqual(Array.from(r.ok), [ID]);
  assert.equal(r.nominatif, true);
  assert.equal(JSON.parse(w.sessionStorage.getItem("neruda.corriges")).qui, "u:u1");
  assert.equal(w.envoyes.length, 1);
});

test("compte jamais connu : codes de classe seulement, rien d'effacé, repris par le compte une fois connu", async () => {
  const laisse = { v: 1, qui: "u:B", cles: { "bts-tsma.ch07.ex09": { k: b64(new Uint8Array(32).fill(5)), t: 1, n: "classe" } } };
  const etat = { connecte: false };                                // session pas encore restaurée
  const w = await charger({ source: "compte", avant: laisse, compte: { etat, perso: PERSO, enAttente: true } });
  const N = w.NerudaCorriges;
  assert.equal(N.ouvert("bts-tsma.ch07.ex09"), false);           // pas à lui
  await assert.rejects(N.essayer(V.nominatif, CAT, { attente: 30 }), e => e.code === "incorrect");   // pas de compte : pas de code personnel
  await N.essayer(V.code, CAT, { attente: 30 });
  assert.equal(N.ouvert(ID), true);                               // débloqué dans cette page
  assert.equal(N.ouvert("bts-tsma.ch07.ex09"), false);
  assert.deepEqual(JSON.parse(w.sessionStorage.getItem("neruda.corriges")), laisse);   // rien d'écrit ni d'effacé
  Object.assign(etat, { connecte: true, uid: "u1", classe: "tsma1" });
  w.__etat({ type: "etat" });                                     // le compte u1 est connu
  const garde = JSON.parse(w.sessionStorage.getItem("neruda.corriges"));
  assert.equal(garde.qui, "u:u1");
  assert.deepEqual(Object.keys(garde.cles), [ID]);                 // celui de B est écarté, le sien est gardé
  assert.equal(w.envoyes.length, 1);                              // et enregistré avec son compte
});

test("onglet et appareil de deux propriétaires : seul celui de l'onglet est repris", async () => {
  const deB = { v: 1, qui: "u:B", cles: { "bts-tsma.ch07.ex09": { k: b64(new Uint8Array(32).fill(5)), t: 1, n: "classe" } } };
  const deA = { v: 1, qui: "u:u1", cles: { [ID]: { k: b64(hex(V.cle)), t: 1, n: "classe" } } };
  const w = await charger({ source: "compte", avant: deA, avantAppareil: deB,
                            compte: { etat: { connecte: true, uid: "u1", classe: "tsma1" }, perso: PERSO } });
  assert.equal(w.NerudaCorriges.ouvert(ID), true);
  assert.equal(w.NerudaCorriges.ouvert("bts-tsma.ch07.ex09"), false);
});

test("accès de secours ouvert par-dessus un compte : rien n'est envoyé au compte", async () => {
  const w = await charger({ source: "secours", compte: { etat: { connecte: true, uid: "u1", classe: "tsma1" }, perso: PERSO } });
  await w.NerudaCorriges.essayer(V.code, CAT);
  assert.equal(JSON.parse(w.sessionStorage.getItem("neruda.corriges")).qui, "secours");
  assert.equal(w.envoyes, undefined);
});

test("codes personnels déposés pendant la session : relus avant de refuser", async () => {
  const w = await charger({ source: "compte", compte: { etat: { connecte: true, uid: "u1", classe: "tsma1" }, perso: null, persoRelu: PERSO } });
  const r = await w.NerudaCorriges.essayer(V.nominatif, CAT);
  assert.deepEqual(Array.from(r.ok), [ID]);
  assert.equal(w.lectures, 2);
});

test("enveloppe d'une autre version (bonne clé, mauvaise longueur) : « préviens le professeur »", async () => {
  const k = hex(V.cle), sel = hex(V.sel_nominatif);
  const base = await S.importKey("raw", TE.encode(V.nominatif), "PBKDF2", false, ["deriveBits"]);
  const kw = await S.importKey("raw", await S.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: sel, iterations: 100000 }, base, 256), "AES-GCM", false, ["encrypt"]);
  const iv = new Uint8Array(12).fill(1);
  const c = new Uint8Array(await S.encrypt({ name: "AES-GCM", iv, additionalData: TE.encode("nominatif|" + ELEVE + "|" + ID) }, kw, Uint8Array.from([...k, ...k])));
  const vieux = Object.assign({}, PERSO, { env: { [ID]: { iv: b64(iv), c: b64(c) } } });
  const w = await charger({ source: "compte", compte: { etat: { connecte: true, uid: "u1", classe: "tsma1" }, perso: vieux } });
  await assert.rejects(w.NerudaCorriges.essayer(V.nominatif, CAT), e => e.perso === "absent" && /préviens le professeur/.test(e.message));
});

test("code enseignant ouvert : tous les corrigés s'ouvrent, sans code", async () => {
  const w = await charger({ source: "prof", prof: true });
  assert.equal(w.NerudaCorriges.prof(), true);
  assert.equal(w.NerudaCorriges.ouvert(ID), true);
  const clair = new Uint8Array(await w.NerudaCorriges.ouvrir(CAT.CORRIGES["bts-tsma"].elements[0]));
  assert.equal(Buffer.from(clair).toString(), Buffer.from(PDF).toString());
});

test("liens « #corrige=… » de Pronote", async () => {
  const N = (await charger()).NerudaCorriges;
  assert.deepEqual(JSON.parse(JSON.stringify(N.lien("#corrige=" + ID + "~rv6zw-fyw42,mauvais~X,bts-et.c01.a1_chauffage-A~RV6ZWFYW42"))),
    [{ id: ID, code: "RV6ZWFYW42" }, { id: "bts-et.c01.a1_chauffage-A", code: "RV6ZWFYW42" }]);
  assert.equal(N.lien("#bts-tsma/ch07"), null);
});

test("prof/codes.js : mêmes codes de classe et codes nominatifs", async () => {
  let src = readFileSync(new URL("../../prof/codes.js", import.meta.url), "utf8");
  src = src.replace(/^import .*$/m, "const gardeCode = () => new Promise(() => {}), cleCodes = null, lireDonnees = null, eleves = null, esc = s => s, copier = null, toast = null, reglage = () => null, fr = s => s, fermerCode = null;")
           .replace(/^export /mg, "");
  const ctx = vm.createContext({ crypto: globalThis.crypto, TextEncoder, URL, location: { href: "https://essai/physique/prof/codes.html" },
    document: { getElementById: () => null, addEventListener: () => { } }, Uint8Array, Array, Promise, Map, Set, String });
  vm.runInContext(src + "\n;globalThis.__f = { codeClasse, codeNominatif };", ctx);
  const kc = await S.importKey("raw", hex(V.kc), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  assert.equal(await ctx.__f.codeClasse(kc, CLASSE, ID), V.code);
  assert.equal(await ctx.__f.codeNominatif(kc, ELEVE, ID), V.nominatif);
});
