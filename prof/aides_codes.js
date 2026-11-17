/* aides_codes.js — codes du jour des aides aux branchements (site v65.4, 16 novembre 2026). Module sans dépendance
   (testé en Node : entrainement/tests/aides_codes.test.mjs). Même calcul que build_aides.py v2 de la série 01 :
     Kc   = HMAC-SHA256(kpr, "neruda|codes-corriges|<année>")   (socle.js, cleCodes : la clé des codes des corrigés)
     code = 6 signes de HMAC-SHA256(Kc, "aide|<poste>|<niveau>|<AAAA-MM-JJ>")
   Un code ne vaut que pour un poste, un niveau (2 : indice, 3 : solution) et un jour. */
export const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
export const POSTES = [
  { id: "four", nom: "Four industriel" },
  { id: "banc", nom: "Banc départ-moteur" },
  { id: "harmocem", nom: "Banc Harmocem" },
  { id: "compensation", nom: "Coffret de compensation" },
];
const TE = new TextEncoder();
export async function codeAide(kc, poste, niveau, jour) {
  const h = new Uint8Array(await crypto.subtle.sign("HMAC", kc, TE.encode("aide|" + poste + "|" + niveau + "|" + jour)));
  return Array.from(h.slice(0, 6), x => ALPHABET[x % 32]).join("");
}
export const joli = c => c.slice(0, 3) + "-" + c.slice(3);
