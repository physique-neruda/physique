/* =====================================================================
   codes.js — Codes des corrigés (espace prof, site v64.2, novembre 2026)

   Pour une classe et un chapitre : le code de la classe de chaque corrigé (exercice, activité, partie
   d'activité, et activité entière quand elle est découpée), le message à copier dans Pronote (codes et
   lien qui débloque tout d'un coup), et le code nominatif de chaque élève pour un corrigé.
   Tout est recalculé ici avec le code enseignant (mêmes calculs que outils/chiffrer.py) :
     Kc             = HMAC-SHA256(kpr, "neruda|codes-corriges|" + année)   (socle.js, cleCodes)
     code de classe = 10 signes de HMAC-SHA256(Kc, "classe|" + classe + "|" + id)
     code nominatif = 10 signes de HMAC-SHA256(Kc, "nominatif|" + identifiant + "|" + id)
   (le code nominatif ne s'ouvre qu'avec l'enveloppe de l'élève, déposée dans la base par « comptes_firebase.py
   cles »). L'année est celle du site publié (donnees/corriges.json, écrite par chiffrer.py). Rien n'est lu ni
   écrit dans la base.
   ===================================================================== */
import { gardeCode, cleCodes, lireDonnees, eleves, esc, copier, toast, reglage, fr, fermerCode } from "./socle.js";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const CLASSES_DE = { "1sti2d": ["sti2d"], "bts-crsa": ["crsa1", "crsa2"], "bts-tsma": ["tsma1", "tsma2"], "bts-et": ["et1", "et1a"] };
const FIL_DE = {};
for (const f of Object.keys(CLASSES_DE)) for (const c of CLASSES_DE[f]) FIL_DE[c] = f;
const TE = new TextEncoder();
const $ = id => document.getElementById(id);
const signes = o => Array.from(o.slice(0, 10), x => ALPHABET[x % 32]).join("");
const joli = c => c.slice(0, 5) + "-" + c.slice(5);
async function h(cle, texte) { return new Uint8Array(await crypto.subtle.sign("HMAC", cle, TE.encode(texte))); }
export async function codeClasse(kc, classe, id) { return signes(await h(kc, "classe|" + classe + "|" + id)); }
export async function codeNominatif(kc, identifiant, id) { return signes(await h(kc, "nominatif|" + identifiant + "|" + id)); }

let MAN = null, ELV = null, KC = null, LIGNES = [];
const BASE = new URL("../", location.href).href;            // l'adresse du site (…/physique/)

function etoiles(n) { return n ? "★".repeat(n) : ""; }
function libelle(l) { return l.libelle; }
function nomChapitre(t) { return String(t || "").replace(/\s+—\s+/, " · "); }

/* Les lignes d'un chapitre : exercices, puis activités (une activité découpée : sa ligne « toute l'activité »,
   puis ses parties). */
function lignes(fil, ch) {
  const els = MAN.elements.filter(e => e.fil === fil && e.ch === ch);
  const grs = (MAN.groupes || []).filter(g => g.fil === fil && g.ch === ch);
  const out = [];
  els.filter(e => e.sorte === "exercice").sort((a, b) => a.n - b.n).forEach(e => out.push({
    id: e.id, sorte: "exercice", libelle: "Exercice " + e.n + " — " + e.titre,
    detail: [etoiles(e.etoiles), e.pages + " p."].filter(Boolean).join(" · ") }));
  const vus = new Set();
  els.filter(e => e.sorte === "activite").forEach(e => {
    if (e.groupe) {
      if (vus.has(e.groupe)) return;
      vus.add(e.groupe);
      const g = grs.find(x => x.id === e.groupe);
      if (!g) return;
      out.push({ id: g.id, sorte: "groupe", libelle: g.titre + " — toute l'activité", detail: g.membres.length + " parties" });
      g.membres.forEach(m => {
        const p = els.find(x => x.id === m);
        if (p) out.push({ id: p.id, sorte: "partie", libelle: p.titre + " — " + p.partie, detail: p.pages + " p." });
      });
    } else out.push({ id: e.id, sorte: "activite", libelle: e.titre, detail: e.pages + " p." });
  });
  return out;
}

function classesDisponibles() {
  const libs = (ELV && ELV.classes) || {};
  return Object.keys(FIL_DE).filter(c => MAN.elements.some(e => e.fil === FIL_DE[c]))
    .map(c => ({ code: c, libelle: (libs[c] && libs[c].libelle) || c }));
}
function chapitres(fil) {
  const vus = new Map();
  for (const e of MAN.elements) if (e.fil === fil && !vus.has(e.ch)) vus.set(e.ch, e.chapitre);
  return [...vus.entries()].map(([ch, nom]) => ({ ch, nom }));
}

function remplirClasses() {
  const cl = classesDisponibles(), garde = reglage("codes-classe");
  $("classe").innerHTML = cl.map(c => '<option value="' + esc(c.code) + '">' + esc(c.libelle) + "</option>").join("");
  if (garde && cl.some(c => c.code === garde)) $("classe").value = garde;
  remplirChapitres();
}
function remplirChapitres() {
  const fil = FIL_DE[$("classe").value], chs = chapitres(fil), garde = reglage("codes-chapitre-" + fil);
  $("chapitre").innerHTML = chs.map(c => '<option value="' + esc(c.ch) + '">' + esc(nomChapitre(c.nom)) + "</option>").join("");
  if (garde && chs.some(c => c.ch === garde)) $("chapitre").value = garde;
  afficher();
}

async function afficher() {
  const classe = $("classe").value, fil = FIL_DE[classe], ch = $("chapitre").value;
  reglage("codes-classe", classe); reglage("codes-chapitre-" + fil, ch);
  LIGNES = lignes(fil, ch);
  for (const l of LIGNES) l.code = await codeClasse(KC, classe, l.id);
  $("table-classe").innerHTML = '<thead><tr><th class="noimp"></th><th>Corrigé</th><th>Code de la classe</th><th class="noimp"></th></tr></thead><tbody>'
    + LIGNES.map((l, i) => '<tr class="' + l.sorte + '"><td class="noimp"><input type="checkbox" data-i="' + i + '" aria-label="Choisir"></td>'
      + '<td class="t">' + esc(l.libelle) + '<span class="d">' + esc(l.detail) + "</span></td>"
      + '<td class="c">' + esc(joli(l.code)) + '</td><td class="noimp"><button class="mini" type="button" data-copier="' + i + '">Copier</button></td></tr>').join("")
    + "</tbody>";
  $("corrige-nominatif").innerHTML = LIGNES.map((l, i) => '<option value="' + i + '">' + esc(l.libelle) + "</option>").join("");
  majMessage();
  afficherEleves();
}

function choisies() {
  return [...document.querySelectorAll("#table-classe input[type=checkbox]")].filter(x => x.checked).map(x => LIGNES[+x.dataset.i]);
}
function lienDe(paires) { return BASE + "#corrige=" + paires.map(p => p.id + "~" + p.code).join(","); }
function majMessage() {
  const l = choisies(), classe = $("classe"), chap = $("chapitre");
  if (!l.length) { $("message").value = ""; $("copier-message").disabled = $("copier-lien").disabled = true; return; }
  $("copier-message").disabled = $("copier-lien").disabled = false;
  const titre = "Corrigés — " + classe.options[classe.selectedIndex].text + " — " + chap.options[chap.selectedIndex].text;
  $("message").value = titre + "\n"
    + l.map(x => "• " + x.libelle + " : " + joli(x.code)).join("\n") + "\n\n"
    + "Sur le site, connecté avec ton compte : ouvre le chapitre, puis tape le code dans « Corrigés des exercices et des activités ».\n"
    + "Ou ouvre ce lien (il débloque " + (l.length > 1 ? "ces corrigés" : "ce corrigé") + " après la connexion) :\n" + lienDe(l);
}

async function afficherEleves() {
  const classe = $("classe").value, l = LIGNES[+$("corrige-nominatif").value];
  const liste = ((ELV && ELV.eleves) || []).filter(e => e.classe === classe);
  if (!l || !liste.length) { $("table-eleves").innerHTML = '<tbody><tr><td class="vide">Aucun élève de cette classe dans la liste.</td></tr></tbody>'; return; }
  const rangs = [];
  for (const e of liste) rangs.push({ e, code: await codeNominatif(KC, e.id, l.id) });
  $("table-eleves").innerHTML = '<thead><tr><th>Élève</th><th>Code nominatif</th><th class="noimp"></th></tr></thead><tbody>'
    + rangs.map((r, i) => "<tr><td>" + esc((r.e.prenom || "") + " " + (r.e.nom || "")) + '</td><td class="c">' + esc(joli(r.code))
      + '</td><td class="noimp"><button class="mini" type="button" data-nominatif="' + i + '">Copier le message</button></td></tr>').join("")
    + "</tbody>";
  $("table-eleves").rangs = rangs;
  $("table-eleves").ligne = l;
}

document.addEventListener("click", async ev => {
  const b = ev.target.closest && ev.target.closest("button");
  if (!b) return;
  if (b.dataset.copier !== undefined) {
    const l = LIGNES[+b.dataset.copier];
    if (await copier(joli(l.code))) toast("Code copié : " + joli(l.code));
  } else if (b.dataset.nominatif !== undefined) {
    const t = $("table-eleves"), r = t.rangs[+b.dataset.nominatif], l = t.ligne, chap = $("chapitre");
    const msg = "Corrigé — " + chap.options[chap.selectedIndex].text + " — " + l.libelle + "\n"
      + "Ton code personnel : " + joli(r.code) + " (il ne marche qu'avec ton compte).\n"
      + "Sur le site, connecté : ouvre le chapitre et tape-le dans « Corrigés des exercices et des activités », ou ouvre ce lien :\n"
      + lienDe([{ id: l.id, code: r.code }]);
    if (await copier(msg)) toast("Message copié pour " + (r.e.prenom || "l'élève"));
  } else if (b.id === "copier-message") { if (await copier($("message").value)) toast("Message copié : à coller dans Pronote"); }
  else if (b.id === "copier-lien") { if (await copier(lienDe(choisies()))) toast("Lien copié"); }
  else if (b.id === "tout" || b.id === "rien") {
    document.querySelectorAll("#table-classe input[type=checkbox]").forEach(x => { x.checked = b.id === "tout"; });
    majMessage();
  } else if (b.id === "imprimer") window.print();
  else if (b.id === "fermer-code") { await fermerCode(); location.reload(); }
});
document.addEventListener("change", ev => {
  const t = ev.target;
  if (t.id === "classe") remplirChapitres();
  else if (t.id === "chapitre") afficher();
  else if (t.id === "corrige-nominatif") afficherEleves();
  else if (t.matches && t.matches("#table-classe input[type=checkbox]")) majMessage();
});

if (document.getElementById("verrou")) gardeCode($("verrou")).then(async () => {
  try {
    MAN = await lireDonnees("corriges.json");
  } catch (e) {
    $("etat").textContent = e && e.message === "absent" ? "Aucun corrigé à débloquer sur cette version du site." : "Liste des corrigés illisible.";
    return;
  }
  if (!MAN || !/^\d{4}-\d{4}$/.test(String(MAN.annee || "")) || !Array.isArray(MAN.elements)) { $("etat").textContent = "Liste des corrigés illisible."; return; }
  try { ELV = await eleves(); } catch (e) { ELV = { classes: {}, eleves: [] }; }
  KC = await cleCodes(MAN.annee);
  $("outil").hidden = false;
  $("etat").textContent = MAN.elements.length + " corrigés · codes de l'année " + MAN.annee;
  $("annee").textContent = "Codes de l'année scolaire " + MAN.annee + " ; corrigés fabriqués le " + (fr(MAN.fabrique) || MAN.fabrique || "?")
    + ". À la rentrée, la nouvelle version du site et « comptes_firebase.py cles » donnent de nouveaux codes.";
  remplirClasses();
});
