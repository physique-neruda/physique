/* aides.js — Codes des aides aux branchements (espace prof, site v65.4, 16 novembre 2026).
   Pour un jour : le code de niveau 2 (indice, −0,5 point en partie C) et de niveau 3 (solution, −1 point) de chaque
   poste de la série 01. Recalculés sur l'appareil avec le code enseignant ; rien n'est lu ni écrit dans la base. */
import { gardeCode, cleCodes, lireDonnees, esc, copier, toast, fr, fermerCode } from "./socle.js?v=65";
import { POSTES, codeAide, joli } from "./aides_codes.js?v=65.4";
const $ = id => document.getElementById(id);
let KC = null;
const iso = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
function decaler(j, n) { const [a, m, d] = j.split("-").map(Number); return iso(new Date(a, m - 1, d + n)); }
async function afficher() {
  const jour = $("jour").value || iso(new Date());
  const lignes = [];
  for (const p of POSTES) lignes.push({ p, c2: await codeAide(KC, p.id, 2, jour), c3: await codeAide(KC, p.id, 3, jour) });
  $("titre-jour").textContent = "Codes du " + fr(jour) + (jour === iso(new Date()) ? " (aujourd'hui)" : "");
  $("table").innerHTML = '<thead><tr><th>Poste</th><th>Niveau 2 — indice<br><span class="d">−0,5 pt en partie C</span></th>'
    + '<th>Niveau 3 — solution<br><span class="d">−1 pt en partie C</span></th></tr></thead><tbody>'
    + lignes.map(l => '<tr><td class="t">' + esc(l.p.nom) + '</td><td class="c"><button class="code" type="button" data-c="' + l.c2 + '">' + joli(l.c2)
      + '</button></td><td class="c"><button class="code" type="button" data-c="' + l.c3 + '">' + joli(l.c3) + "</button></td></tr>").join("") + "</tbody>";
}
document.addEventListener("click", async ev => {
  const b = ev.target.closest && ev.target.closest("button"); if (!b) return;
  if (b.dataset.c) { if (await copier(b.dataset.c)) toast("Code copié : " + joli(b.dataset.c)); }
  else if (b.id === "veille" || b.id === "lendemain") { $("jour").value = decaler($("jour").value, b.id === "veille" ? -1 : 1); afficher(); }
  else if (b.id === "aujourdhui") { $("jour").value = iso(new Date()); afficher(); }
  else if (b.id === "imprimer") window.print();
  else if (b.id === "fermer-code") { await fermerCode(); location.reload(); }
});
document.addEventListener("change", ev => { if (ev.target.id === "jour") afficher(); });
gardeCode($("verrou")).then(async () => {
  let annee = null;
  try { annee = (await lireDonnees("corriges.json")).annee; } catch (e) { }
  if (!/^\d{4}-\d{4}$/.test(String(annee || ""))) { $("etat").textContent = "Année des codes illisible (donnees/corriges.json)."; return; }
  KC = await cleCodes(annee);
  $("jour").value = iso(new Date());
  $("outil").hidden = false; $("etat").textContent = "Codes de l'année " + annee;
  afficher();
});
