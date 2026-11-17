// node entrainement/tests/aides_codes.test.mjs <mots_de_passe_v3.json> — compare les codes de la page prof à ceux de build_aides.py
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { codeAide, POSTES } from "../../prof/aides_codes.js";
const C = JSON.parse(readFileSync(process.argv[2], "utf8"));
const kpr = await crypto.subtle.importKey("raw", Buffer.from(C._prive.cle, "base64"), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
const brut = await crypto.subtle.sign("HMAC", kpr, new TextEncoder().encode("neruda|codes-corriges|2026-2027"));
const kc = await crypto.subtle.importKey("raw", brut, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
let n = 0;
for (const jour of ["2026-11-16", "2026-11-19", "2027-03-02"]) {
  const attendu = JSON.parse(execFileSync("python3", [process.env.CODES_PY, jour]));
  for (const p of POSTES) for (const L of [2, 3]) {
    const c = await codeAide(kc, p.id, L, jour);
    if (c !== attendu[p.id][String(L)]) { console.error("différent", jour, p.id, L, c, attendu[p.id][L]); process.exit(1); }
    n++;
  }
}
console.log(n + " codes identiques à ceux des pages des élèves");
