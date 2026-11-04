// Tests de commun/fiche.js (v64) : calcul de la note, échappement, absent, note ramenée au barème.
//     node --test entrainement/tests/fiche.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(readFileSync(new URL("../../commun/fiche.js", import.meta.url), "utf8").replace("})(window);", "})(this.window);"), ctx);
const F = ctx.window.NerudaFiche;
const Q = [{ q: "1", max: 4, intitule: "Choisir", competences: ["C13"] }, { q: "2", max: 6 }, { q: "3", max: 10, detail: "3 pt l'unité" }];

test("note = somme des points ; ramenée au barème si le total diffère", () => {
  const simple = o => JSON.parse(JSON.stringify(o));             // objets nés dans un autre contexte vm
  assert.deepEqual(simple(F.calcul(Q, { "1": 3.5, "2": 5, "3": 7 }, 20)), { brut: 15.5, total: 20, note: 15.5, bareme: 20 });
  assert.deepEqual(F.calcul(Q, [{ q: "1", pts: 2 }, { q: "3", pts: 10 }], 20).brut, 12);
  const sur30 = F.calcul(Q.concat([{ q: "4", max: 10 }]), { "1": 4, "2": 6, "3": 10, "4": 2.5 }, 20);
  assert.equal(sur30.total, 30);
  assert.equal(sur30.note, 15);                              // 22,5 / 30 → 15 / 20
  assert.equal(F.nombre(15.5), "15,5");
});

test("tout est échappé (titre, appréciation, questions, compétences)", () => {
  const h = F.html({ titre: "<img src=x onerror=alert(1)>", questions: [{ q: "<b>", max: 2, intitule: "\"x\"", competences: ["C<1"] }],
    grille: { C2: "<script>" } }, { appreciation: "<script>alert(1)</script>", points: { "<b>": 1 }, niveaux: { C2: "N3" }, bareme: 20 });
  assert.ok(!/<script>|<img|<b>/.test(h.replace(/<\/?(article|div|h3|p|b|span|table|thead|tbody|tfoot|tr|th|td|small|ul|li|h4|details|summary|dl|dt|dd)( [^>]*)?>/g, "")));
  assert.ok(h.includes("&lt;script&gt;alert(1)&lt;/script&gt;"));
});

test("absent : pas de note ni de tableau de points", () => {
  const h = F.html({ titre: "Devoir", questions: Q, bareme: 20 }, { absent: true, note: null, points: [] });
  assert.ok(/Absent/.test(h));
  assert.ok(!/fiche-note/.test(h) && !/fiche-points/.test(h));
});

test("barème détaillé seulement s'il y a un détail", () => {
  assert.ok(/Barème détaillé/.test(F.html({ questions: Q }, { points: {} })));
  assert.ok(!/Barème détaillé/.test(F.html({ questions: [{ q: "1", max: 2 }] }, { points: {} })));
});
