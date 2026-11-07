// Tests de srs.js (planification, migration, fusion, code de sauvegarde).
//     node --test entrainement/tests/
import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const SRS = require("../srs.js");

const J = "2026-11-03";

function stockage(init) {
  const m = new Map(Object.entries(init || {}));
  return {
    get length() { return m.size; },
    key(i) { return [...m.keys()][i] ?? null; },
    getItem(k) { return m.has(k) ? m.get(k) : null; },
    setItem(k, v) { m.set(k, String(v)); },
    removeItem(k) { m.delete(k); },
    contenu() { return Object.fromEntries(m); }
  };
}

test("dates locales", () => {
  assert.equal(SRS.plusJours(J, 1), "2026-11-04");
  assert.equal(SRS.plusJours("2026-12-31", 1), "2027-01-01");
  assert.equal(SRS.joursEntre("2026-10-25", "2026-10-26"), 1);        // changement d'heure
  assert.equal(SRS.joursEntre(J, "2026-11-10"), 7);
});

test("migration v1 → v2 : une carte sue = 7 jours", () => {
  const e = SRS.lireCartes("[0,4,4,-1,\"x\"]", J, 100);
  assert.deepEqual(Object.keys(e.cartes), ["0", "4"]);
  assert.equal(e.cartes["4"].i, 7);
  assert.equal(e.cartes["4"].d, "2026-11-10");
  assert.equal(e.cartes["4"].n, 1);
  assert.equal(e.maj, 100);
  const vide = SRS.lireCartes("[]", J, 100);
  assert.equal(vide.maj, 0);
  assert.ok(SRS.cartesVide(vide));
  const abime = SRS.lireCartes("{pas du json", J, 100);
  assert.ok(SRS.cartesVide(abime));
});

test("planification again / hard / good", () => {
  const e = SRS.lireCartes(null, J, 1);
  let c = SRS.repondre(e, 2, "good", J, 10);
  assert.equal(c.i, 1); assert.equal(c.d, "2026-11-04"); assert.equal(c.n, 1); assert.equal(c.e, 2.6);
  c = SRS.repondre(e, 2, "good", "2026-11-04", 11);
  assert.equal(c.i, 3); assert.equal(c.d, "2026-11-07");
  c = SRS.repondre(e, 2, "good", "2026-11-07", 12);
  assert.equal(c.i, 8);                                    // 3 × 2,8 arrondi
  c = SRS.repondre(e, 2, "hard", "2026-11-15", 13);
  assert.equal(c.i, 10); assert.equal(c.e, 2.8);           // × 1,2, facilité inchangée
  c = SRS.repondre(e, 2, "again", "2026-11-25", 14);
  assert.equal(c.i, 1); assert.equal(c.e, 2.6); assert.equal(c.d, "2026-11-26");
  for (let k = 0; k < 20; k++) SRS.repondre(e, 2, "again", J, 20 + k);
  assert.equal(e.cartes["2"].e, 1.3);                      // plancher
  assert.equal(e.maj, 39);
  // nouvelle carte répondue « presque » : 1 jour
  c = SRS.repondre(e, 7, "hard", J, 50);
  assert.equal(c.i, 1); assert.equal(c.n, 1);
});

test("bilan du jour : dues, nouvelles, apprises, paquet de nouvelles", () => {
  const e = SRS.lireCartes([0, 1], J, 1);            // 2 apprises, dues le 10/11
  SRS.repondre(e, 2, "good", "2026-11-02", 2);       // due le 3/11
  SRS.repondre(e, 3, "good", J, 3);                  // due le 4/11
  const b = SRS.bilan(e, 30, J);
  assert.deepEqual(b.dues, [2]);
  assert.equal(b.nouvelles.length, 26);
  assert.equal(b.apprises, 2);
  assert.equal(b.vues, 4);
  assert.equal(b.aujourdhui, 1 + SRS.PAQUET_NOUVELLES);
  const b2 = SRS.bilan(e, 30, "2026-11-10");
  assert.deepEqual(b2.dues, [0, 1, 2, 3]);
});

test("fusion des cartes : la plus récente gagne, carte par carte", () => {
  const a = SRS.lireCartes(null, J, 1), b = SRS.lireCartes(null, J, 1);
  SRS.repondre(a, 0, "good", J, 100);
  SRS.repondre(a, 1, "again", J, 100);
  SRS.repondre(b, 1, "good", J, 200);                 // plus récente sur l'autre appareil
  SRS.repondre(b, 2, "hard", J, 50);
  const f = SRS.fusionnerCartes(a, b);
  assert.equal(f.cartes["0"].maj, 100);
  assert.equal(f.cartes["1"].maj, 200); assert.equal(f.cartes["1"].i, 1); assert.equal(f.cartes["1"].e, 2.6);
  assert.equal(f.cartes["2"].maj, 50);
  assert.equal(f.maj, 200);
  // fusion avec l'ancien format et avec du vide
  const g = SRS.fusionnerCartes("[5]", null);
  assert.ok(g.cartes["5"]);
  assert.deepEqual(SRS.fusionnerCartes(f, f), f);
});

test("questionnaires : migration, enregistrement, fusion", () => {
  const anc = SRS.lireQcm("12");
  assert.equal(anc.meilleur, 12); assert.equal(anc.tentatives, 1); assert.equal(anc.total, 0);
  const n1 = SRS.enregistrerQcm("12", 10, 16, [1, 4], J, 500);
  assert.equal(n1.meilleur, 12); assert.equal(n1.dernier, 10); assert.equal(n1.tentatives, 2);
  assert.deepEqual(n1.rates, [1, 4]); assert.equal(n1.date, J);
  const n2 = SRS.enregistrerQcm(JSON.stringify(n1), 15, 16, [], "2026-11-04", 600);
  assert.equal(n2.meilleur, 15); assert.equal(n2.tentatives, 3);
  // deux appareils le même jour : meilleur et essais au maximum, le reste du plus récent
  const autre = SRS.enregistrerQcm(JSON.stringify(n1), 9, 16, [2], "2026-11-04", 550);
  const f = SRS.fusionnerQcm(n2, autre);
  assert.equal(f.meilleur, 15); assert.equal(f.tentatives, 3); assert.equal(f.dernier, 15); assert.equal(f.maj, 600);
  assert.equal(SRS.lireQcm(""), null); assert.equal(SRS.lireQcm("n'importe quoi"), null);
  assert.equal(SRS.fusionnerQcm(null, "7").meilleur, 7);
});

test("série de jours", () => {
  let s = SRS.marquerJour(null, J, 1);
  assert.equal(s.jours, 1);
  assert.equal(SRS.marquerJour(s, J, 2).jours, 1);                  // même jour : inchangé
  s = SRS.marquerJour(s, "2026-11-04", 3); assert.equal(s.jours, 2);
  s = SRS.marquerJour(s, "2026-11-05", 4); assert.equal(s.jours, 3);
  assert.equal(SRS.serieCourante(s, "2026-11-05"), 3);
  assert.equal(SRS.serieCourante(s, "2026-11-06"), 3);              // hier : encore vivante
  assert.equal(SRS.serieCourante(s, "2026-11-07"), 0);              // cassée
  const r = SRS.marquerJour(s, "2026-11-09", 5); assert.equal(r.jours, 1);
  assert.equal(SRS.fusionnerSerie(s, r).dernier, "2026-11-09");
  assert.equal(SRS.fusionnerSerie({dernier: J, jours: 2, maj: 1}, {dernier: J, jours: 5, maj: 0}).jours, 5);
});

test("simulations : résumé, copie pour le compte sans le nom, fusion", () => {
  const d = { nom: "Hugo Durand", defis: { a: { best: 80, etoiles: 2, essais: 3, niv: 1 }, b: { best: 10, etoiles: 0, essais: 1, niv: 2 } },
              missions: { m1: { best: 95, etoiles: 3, essais: 1 } }, comprendre: { c1: true }, tuto: {}, badges: { premier: "2026-11-01" }, stats: {} };
  const r = SRS.resumeSimulation(JSON.stringify(d));
  assert.equal(r.reussis, 2); assert.equal(r.essayes, 3); assert.equal(r.etoiles, 5); assert.equal(r.badges, 1); assert.equal(r.notions, 1);
  const pc = SRS.simulationPourCompte(d, 777);
  assert.equal(pc.nom, undefined); assert.equal(pc.maj, 777); assert.equal(d.nom, "Hugo Durand");
  const distant = Object.assign({}, pc, { maj: 900, badges: { premier: "2026-11-01", eclair: "2026-11-02" } });
  const f = SRS.fusionnerSimulation(d, distant);
  assert.equal(f.badges.eclair, "2026-11-02"); assert.equal(f.nom, "Hugo Durand");   // le nom reste local
  assert.equal(SRS.usageDeCle("instr-ut803"), "simulations");
  assert.equal(SRS.usageDeCle("multimetre-sdm3055-essentiel"), "simulations");
  assert.equal(SRS.usageDeCle("oscillo-loupe"), "");
  assert.equal(SRS.usageDeCle("banc-etape"), "");
});

test("export / import d'un stockage (code de sauvegarde aller-retour)", async () => {
  const s1 = stockage({
    "neruda.cartes.1sti2d.ch01": "[0,1,2]",
    "neruda.qcm.1sti2d.ch01.bilan": "9",
    "neruda.serie": JSON.stringify({ dernier: J, jours: 4, maj: 5 }),
    "instr-ut803": JSON.stringify({ nom: "Léa", defis: { x: { best: 50, etoiles: 1, essais: 1 } }, badges: {}, maj: 10 }),
    "oscillo-loupe": "{\"on\":true}",
    "autre": "x"
  });
  const paquet = SRS.exporter(s1, J);
  assert.deepEqual(Object.keys(paquet.cles).sort(), ["instr-ut803", "neruda.cartes.1sti2d.ch01", "neruda.qcm.1sti2d.ch01.bilan", "neruda.serie"]);
  assert.equal(paquet.cles["neruda.cartes.1sti2d.ch01"].v, 2);         // migré au passage
  const code = await SRS.fabriquerCode(paquet);
  assert.ok(code.startsWith("NRD1"));
  const relu = await SRS.lireCode("  " + code.replace(/(.{40})/g, "$1\n") + " ");   // retours à la ligne tolérés
  assert.deepEqual(relu, paquet);
  const s2 = stockage({ "neruda.qcm.1sti2d.ch01.bilan": JSON.stringify({ v: 2, meilleur: 12, dernier: 12, total: 16, tentatives: 2, rates: [], date: J, maj: 99 }) });
  const n = SRS.importer(s2, relu);
  assert.equal(n, 3);                                                          // le qcm local, plus récent et meilleur, ne bouge pas
  const q = SRS.lireQcm(s2.getItem("neruda.qcm.1sti2d.ch01.bilan"));
  assert.equal(q.meilleur, 12); assert.equal(q.tentatives, 2);                  // le meilleur reste
  assert.equal(SRS.lireCartes(s2.getItem("neruda.cartes.1sti2d.ch01")).cartes["2"].i, 7);
  assert.equal(SRS.importer(s2, relu), 0);                                     // idempotent
  assert.equal(s2.getItem("oscillo-loupe"), null);                             // pas exporté
  await assert.rejects(SRS.lireCode("bonjour"), /NRD1/);
  await assert.rejects(SRS.lireCode("NRD1r.AAAA"), /abîmé/);
});

test("code brut (sans compression) lisible aussi", async () => {
  const paquet = { v: 1, date: J, cles: { "neruda.serie": { dernier: J, jours: 1, maj: 1 } } };
  const brut = SRS.PREFIXE_R + SRS.b64url.encoder(SRS.utf8.encoder(JSON.stringify(paquet)));
  assert.deepEqual(await SRS.lireCode(brut), paquet);
  assert.equal(SRS.utf8.decoder(SRS.utf8.encoder("Énergie — « ok » 😀")), "Énergie — « ok » 😀");
  assert.deepEqual(SRS.b64url.decoder(SRS.b64url.encoder([0, 255, 1, 2, 3, 4])), [0, 255, 1, 2, 3, 4]);
});

// ------------------------------------------------------------------ v64
test("v64 : identifiants des cartes (champ id, sinon le rang) et bilan par identifiants", () => {
  const cartes = [{ id: "0" }, { id: "7" }, {}, { id: 12 }];
  assert.deepEqual(SRS.idsCartes(cartes), ["0", "7", "2", "12"]);
  const e = SRS.lireCartes(null, J, 1);
  SRS.repondre(e, "7", "good", J, 10);
  SRS.repondre(e, "99", "good", J, 10);                 // carte retirée du paquet : ignorée par le bilan
  const b = SRS.bilan(e, SRS.idsCartes(cartes), "2026-11-04");
  assert.equal(b.total, 4);
  assert.equal(b.vues, 1);
  assert.deepEqual(b.dues, ["7"]);
  assert.deepEqual(b.nouvelles, ["0", "2", "12"]);
  // ids = rangs (départ v64) : même résultat qu'avec le nombre de cartes, comme avant
  const e2 = SRS.lireCartes("[0,1]", J, 1);
  const parNombre = SRS.bilan(e2, 3, J), parIds = SRS.bilan(e2, ["0", "1", "2"], J);
  assert.equal(parNombre.vues, parIds.vues);
  assert.equal(parNombre.apprises, parIds.apprises);
  assert.equal(parNombre.aujourdhui, parIds.aujourdhui);
});

test("v64 : journal des réponses (par jour et par appareil), fusion sans double compte", () => {
  let j = SRS.noterReponse(null, "tel", J, 1);
  j = SRS.noterReponse(j, "tel", J, 2);
  j = SRS.noterReponse(j, "tel", "2026-11-04", 3);
  assert.deepEqual(j.jours[J], { tel: 2 });
  const pc = SRS.noterReponse(null, "pc", J, 4);
  const f = SRS.fusionnerJournal(j, pc);
  assert.deepEqual(f.jours[J], { tel: 2, pc: 1 });
  // le même appareil vu deux fois (compte + local) : le maximum, pas la somme
  const f2 = SRS.fusionnerJournal(f, JSON.stringify(j));
  assert.deepEqual(f2.jours[J], { tel: 2, pc: 1 });
  const r = SRS.reponsesParJour(f2, 3, "2026-11-04");
  assert.deepEqual(r.map(x => x.n), [0, 3, 1]);
  assert.deepEqual(r.map(x => x.date), ["2026-11-02", "2026-11-03", "2026-11-04"]);
  // élagage : rien de plus vieux que 70 jours
  const vieux = SRS.noterReponse({ v: 1, jours: { "2026-01-01": { tel: 5 } } }, "tel", J, 9);
  assert.equal(vieux.jours["2026-01-01"], undefined);
  // valeurs abîmées ignorées
  const abime = SRS.lireJournal({ jours: { "pas-une-date": { a: 1 }, [J]: { "a b": 2, ok: -3, x: "4" } } });
  assert.deepEqual(abime.jours, { [J]: { x: 4 } });
});

test("v64 : le journal voyage avec les cartes (usage, normalisation, fusion)", () => {
  assert.equal(SRS.usageDeCle("neruda.journal"), "journal");
  const J = SRS.aujourdhui();                          // v65 : la fusion ne garde que les 70 derniers jours
  const a = SRS.noterReponse(null, "tel", J, 1), b = SRS.noterReponse(null, "pc", J, 2);
  const f = SRS.fusionner("neruda.journal", JSON.stringify(a), b);
  assert.deepEqual(f.jours[J], { tel: 1, pc: 1 });
  const vieux = SRS.fusionner("neruda.journal", { v: 1, jours: { [SRS.plusJours(J, -80)]: { tel: 3 } } }, a);
  assert.deepEqual(Object.keys(vieux.jours), [J]);
  const st = stockage({});
  const id1 = SRS.appareil(st), id2 = SRS.appareil(st);
  assert.match(id1, /^[0-9a-z]{6,16}$/);
  assert.equal(id1, id2);
});

test("v65 : mesures d'activité (temps par sorte de page, animations, documents ; 70 jours ; fusion par appareil)", () => {
  assert.equal(SRS.usageDeCle("neruda.activite"), "activite");
  const J = SRS.aujourdhui();
  let a = SRS.noterActivite(null, "tel", { categorie: "cartes", secondes: 15 }, J, 1);
  a = SRS.noterActivite(a, "tel", { categorie: "anim", secondes: 15, animation: "Principe-Inertie!" }, J, 2);
  a = SRS.noterActivite(a, "tel", { animation: "principe-inertie", ouverture: true }, J, 3);
  a = SRS.noterActivite(a, "tel", { document: true }, J, 4);
  a = SRS.noterActivite(a, "tel", { categorie: "inconnue", secondes: 15 }, J, 5);      // catégorie inconnue : ignorée
  assert.deepEqual(a.jours[J].tel, { t: { cartes: 15, anim: 15 }, a: { "principe-inertie": [1, 15] }, d: 1 });
  const b = SRS.noterActivite(null, "pc", { categorie: "cartes", secondes: 30 }, J, 6);
  const f = SRS.fusionner("neruda.activite", JSON.stringify(a), b);
  assert.deepEqual(Object.keys(f.jours[J]).sort(), ["pc", "tel"]);
  const f2 = SRS.fusionner("neruda.activite", f, f);                                   // fusion idempotente
  assert.deepEqual(f2.jours, f.jours);
  const pj = SRS.activiteParJour(f, 2, J);
  assert.equal(pj.length, 2);
  assert.equal(pj[1].total, 60);
  assert.deepEqual(pj[1].a["principe-inertie"], [1, 15]);
  const vieux = SRS.noterActivite({ v: 1, jours: { "2026-08-01": { tel: { t: { site: 15 } } } } }, "tel", { categorie: "site", secondes: 15 }, J, 7);
  assert.equal(vieux.jours["2026-08-01"], undefined);                                  // plus de 70 jours : effacé
  const garde = SRS.fusionner("neruda.activite", { v: 1, jours: { [SRS.plusJours(J, -71)]: { tel: { t: { site: 15 } } } } }, a);
  assert.deepEqual(Object.keys(garde.jours), [J]);                                     // … et ne revient pas par la fusion
  assert.equal(SRS.normaliser("neruda.activite", null), null);
});

test("v65 : réussite question par question (voyage avec les mesures, pas avec les questionnaires)", () => {
  assert.equal(SRS.usageDeCle("neruda.qstat.bts-crsa.ch01.bilan"), "activite");
  let q = SRS.noterQuestions(null, [{ i: 0, ok: true }, { i: 3, ok: false }, { i: -1, ok: false }], 1);
  q = SRS.noterQuestions(q, [{ i: 3, ok: false }], 2);
  assert.deepEqual(q.q, { "0": [1, 0], "3": [2, 2] });
  const f = SRS.fusionner("neruda.qstat.bts-crsa.ch01.bilan", q, SRS.noterQuestions(null, [{ i: 0, ok: false }], 3));
  assert.deepEqual(f.q, { "0": [1, 1], "3": [2, 2] });
  assert.equal(SRS.normaliser("neruda.qstat.x.ch01.bilan", { v: 1, q: { "7": [0, 0] } }), null);
  const st = stockage({ "neruda.qstat.bts-crsa.ch01.bilan": JSON.stringify(q), "neruda.qcm.bts-crsa.ch01.bilan": JSON.stringify({ meilleur: 3, total: 5 }) });
  assert.deepEqual(SRS.clesLocales(st), ["neruda.qcm.bts-crsa.ch01.bilan", "neruda.qstat.bts-crsa.ch01.bilan"]);
});

test("v65 : animations à jeux (neruda.anim.*) et outils v2", () => {
  assert.equal(SRS.usageDeCle("neruda.anim.principe-inertie"), "simulations");
  const r = SRS.resumeSimulation({ j1: { ok: true, essais: 2, etoiles: 3 }, j2: { ok: false, essais: 1, etoiles: 0 } });
  assert.equal(r.reussis, 1); assert.equal(r.essayes, 2); assert.equal(r.etoiles, 3);
  const f = SRS.fusionner("neruda.anim.principe-inertie", { j1: { ok: false, essais: 1, etoiles: 0 } }, { j1: { ok: true, essais: 1, etoiles: 2 } });
  assert.deepEqual(f.j1, { ok: true, essais: 1, etoiles: 2 });
});
