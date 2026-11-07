/* =====================================================================
   tableau.js — Tableau de bord de l'activité des élèves (espace prof, site v65, novembre 2026)

   Lit, avec le compte professeur (règles v6), ce que les comptes élèves envoient déjà : cartes/{uid} (cartes de
   révision, journal des réponses, série), qcm/{uid} (questionnaires), simulations/{uid} (animations), deblocages/{uid}
   (corrigés débloqués par code) — et activite/{uid} quand les MESURES sont activées (temps de travail actif par jour et
   par sorte de page, animations ouvertes, documents ouverts, réussite question par question). Les noms viennent de la
   liste chiffrée (code enseignant) ; les titres des chapitres, le nombre de cartes et le texte des questions, des
   données du site (commun/donnees.js, avec les clés des filières ouvertes sur l'appareil ; sans elles : les clés des
   chapitres et les rangs des questions).
   Vue CLASSE : chiffres clés de la période, élèves actifs par jour, temps de travail par jour (mesures), chapitres
   travaillés (élèves × chapitres : cartes apprises ou meilleur score aux questionnaires), questions les plus ratées
   (mesures), animations, tableau des élèves. Vue ÉLÈVE : les mêmes, pour lui, chapitre par chapitre.
   L'interrupteur des mesures (reglages/site) : à activer après l'information des élèves (texte à copier ici) ; les
   couper efface aussi ce qui était noté sur les appareils (entrainement/compte.js) ; « Effacer » vide activite/.
   Graphiques en SVG faits ici (aucune bibliothèque) : une seule échelle, marques fines, info-bulle au survol et au
   clavier, et pour chacun son tableau.
   ===================================================================== */
import {
  garde, db, doc, getDoc, setDoc, getDocs, deleteDoc, collection, writeBatch, updateDoc, arrayUnion, arrayRemove,
  eleves, esc, toast, confirmer, copier, reglage, auj, fr, comptes, FIL_DE
} from "./socle.js?v=65";

const SRS = window.NerudaSRS, ND = window.NerudaDonnees;
const $ = id => document.getElementById(id);
const MOTIF = /^[a-z0-9-]+\.[a-z0-9]+\.[A-Za-z0-9_-]+$/;
/* Les clés des documents viennent des élèves : chapitre et type contrôlés (jamais « __proto__ »), tables sans prototype */
const CH_OK = /^[A-Za-z0-9]{1,16}$/;
const table = () => Object.create(null);
const TEMPS = [["cartes", "Cartes", "--s-1"], ["qcm", "Questionnaires", "--s-2"], ["anim", "Animations", "--s-3"], ["site", "Reste du site", "--s-4"]];
const TYPES = Object.assign(Object.create(null), { prerequis: "Prérequis", bilan: "Bilan" });
let ELV = { classes: {}, eleves: [] }, FICHES = [], DOCS = {}, MAJ = {}, REGL = null, LECTURE_ACTIVITE = true;
let CATA = null, CHAP = {}, N = 30, METRIQUE = "cartes";

/* ------------------------------------------------------------ outils */
const nb = n => Number(n || 0).toLocaleString("fr-FR");
const pct = x => Math.round(x * 100) + " %";
const minutes = s => { const m = Math.round((s || 0) / 60); return m < 60 ? m + " min" : Math.floor(m / 60) + " h " + String(m % 60).padStart(2, "0"); };
const jj = iso => iso ? iso.slice(8, 10) + "/" + iso.slice(5, 7) : "";
function joursPeriode() { const a = SRS.aujourdhui(), r = []; for (let i = N - 1; i >= 0; i--) r.push(SRS.plusJours(a, -i)); return r; }
function texteSeul(h) { const d = document.createElement("div"); d.innerHTML = String(h || ""); return (d.textContent || "").replace(/\s+/g, " ").trim(); }
function nomEleve(f) {
  const e = (ELV.eleves || []).find(x => x.id === f.identifiant);
  return e ? ((e.prenom || "") + " " + (e.nom || "")).trim() : (f.prenom || f.identifiant || "?");
}

/* ------------------------------------------------------------ lecture */
async function charger() {
  $("etat").textContent = "Lecture de la base…";
  const noms = ["cartes", "qcm", "simulations", "deblocages", "activite"];
  const [fiches, reg, ...snaps] = await Promise.all([
    comptes(),
    getDoc(doc(db, "reglages", "site")).catch(() => null),
    ...noms.map(n => getDocs(collection(db, n)).catch(e => { if (n === "activite") return null; throw e; }))
  ]);
  FICHES = fiches.filter(f => FIL_DE[f.classe] && f.actif !== false && f.invite !== true);
  noms.forEach((n, i) => {
    DOCS[n] = {}; MAJ[n] = {};
    const s = snaps[i];
    if (!s) return;
    s.docs.forEach(d => { const v = d.data() || {}; DOCS[n][d.id] = (v.cles && typeof v.cles === "object") ? v.cles : {}; MAJ[n][d.id] = Number(v.maj) || 0; });
  });
  LECTURE_ACTIVITE = !!snaps[4];
  REGL = reg && reg.exists() ? (reg.data() || {}) : (reg ? {} : null);
  $("etat").textContent = FICHES.length + " comptes élèves · base lue à " + new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}
/* catalogue du site : chapitres d'entraînement de chaque filière (ordre du site), titres des animations */
function lireCatalogue(c) {
  const r = { chap: {}, anim: {} };
  for (const d of (c && c.DOCUMENTS) || []) {
    const f = String(d.fichier || "");
    let m = /entrainement\/(?:qcm|cartes)\.html\?f=([a-z0-9-]+)&ch=([A-Za-z0-9]+)/.exec(f);
    if (m) {
      const l = r.chap[m[1]] = r.chap[m[1]] || [];
      if (!l.some(x => x.ch === m[2])) l.push({ ch: m[2], titre: String(d.chapitre || m[2]) });
    }
    m = /^animations\/([a-z0-9-]+)\.html/.exec(f);
    if (m && d.titre) r.anim[m[1]] = String(d.titre);
  }
  return r;
}
async function chapitre(fil, ch) {
  const k = fil + "/" + ch;
  if (k in CHAP) return CHAP[k];
  CHAP[k] = null;
  if (!ND) return null;
  try {
    const c = await ND.chapitre(fil, ch);
    if (c) CHAP[k] = { titre: (c.etiquette || (c.num !== undefined && c.num !== "" ? "Chapitre " + c.num : "")) + (c.titre ? " — " + c.titre : ""),
                       ids: SRS.idsCartes(c.cartes || []),
                       q: { prerequis: (c.prerequis || []).map(x => texteSeul(x.q)), bilan: (c.bilan || []).map(x => texteSeul(x.q)) } };
  } catch (e) { }
  return CHAP[k];
}
function chapitresDe(fil) {
  const l = ((CATA && CATA.chap[fil]) || []).map(x => x.ch);
  for (const uid of uidsFiliere(fil)) for (const k of Object.keys(DOCS.cartes[uid] || {}).concat(Object.keys(DOCS.qcm[uid] || {}))) {
    const m = /^neruda\.(?:cartes|qcm)\.([^.]+)\.([A-Za-z0-9]{1,16})(?:\.|$)/.exec(k);
    if (m && m[1] === fil && !l.includes(m[2])) l.push(m[2]);
  }
  return l;
}
function uidsFiliere(fil) { return FICHES.filter(f => FIL_DE[f.classe] === fil).map(f => f.uid); }
function titreChapitre(fil, ch) {
  const x = ((CATA && CATA.chap[fil]) || []).find(y => y.ch === ch); if (x && x.titre) return x.titre;   // le titre du site
  const c = CHAP[fil + "/" + ch]; return c && c.titre ? c.titre.replace(/^ — /, "") : ch;
}
function court(fil, ch) {
  const t = titreChapitre(fil, ch), m = /^(Chapitre|Cours|TP|ADM)\s+(\d+|[A-Za-z]+\d*)/i.exec(t);
  return m ? (m[1].toLowerCase() === "chapitre" ? "Ch. " : m[1] + " ") + m[2] : ch;
}

/* ------------------------------------------------------------ calculs par élève */
function stats(f, jours) {
  const uid = f.uid, fil = FIL_DE[f.classe], a = SRS.aujourdhui();
  const C = DOCS.cartes[uid] || {}, Q = DOCS.qcm[uid] || {}, S = DOCS.simulations[uid] || {}, A = DOCS.activite[uid] || {}, D = DOCS.deblocages[uid] || {};
  const r = { f, nom: nomEleve(f), fil, cartes: table(), qcm: table(), sims: table(), qstat: table(), deb: [], jour: table(), temps: table(), anims: table(), docs: 0 };
  const jr = SRS.lireJournal(C["neruda.journal"]);
  for (const d of jours) { let n = 0; for (const k in (jr.jours[d] || {})) n += jr.jours[d][k]; r.jour[d] = { rep: n, sec: 0, qcm: 0 }; }
  r.serie = SRS.serieCourante(C["neruda.serie"], a);
  let derniere = "";
  for (const k of Object.keys(C)) {
    const m = /^neruda\.cartes\.([^.]+)\.(.+)$/.exec(k);
    if (!m || m[1] !== fil || !CH_OK.test(m[2])) continue;
    const e = SRS.lireCartes(C[k], a), info = CHAP[fil + "/" + m[2]];
    let vues = 0, apprises = 0, dues = 0, l = "";
    for (const id of Object.keys(e.cartes)) {
      const c = e.cartes[id];
      if (info && info.ids.length && !info.ids.includes(id)) continue;     // carte retirée du paquet
      if (!c || !c.n) continue;
      vues++; if (c.i >= SRS.SEUIL_APPRISE) apprises++; if (c.d <= a) dues++; if (c.l > l) l = c.l;
    }
    r.cartes[m[2]] = { vues, apprises, dues, total: info ? info.ids.length : 0, derniere: l };
    if (l > derniere) derniere = l;
  }
  for (const k of Object.keys(Q)) {
    const m = /^neruda\.qcm\.([^.]+)\.([^.]+)\.(.+)$/.exec(k);
    if (!m || m[1] !== fil || !CH_OK.test(m[2]) || !(m[3] in TYPES)) continue;
    const q = SRS.lireQcm(Q[k]);
    if (!q || !q.total) continue;
    (r.qcm[m[2]] = r.qcm[m[2]] || table())[m[3]] = q;
    if (q.date > derniere) derniere = q.date;
    if (r.jour[q.date]) r.jour[q.date].qcm++;
  }
  for (const k of Object.keys(S)) {
    if (!SRS.estCleSimulation(k)) continue;
    const s = SRS.resumeSimulation(S[k]);
    if (s && s.essayes) r.sims[k] = s;
  }
  for (const k of Object.keys(A)) {
    const m = /^neruda\.qstat\.([^.]+)\.([^.]+)\.(.+)$/.exec(k);
    if (m && m[1] === fil && CH_OK.test(m[2]) && (m[3] in TYPES)) r.qstat[m[2] + "|" + m[3]] = SRS.lireQstat(A[k]).q;
  }
  if (A["neruda.activite"]) {
    for (const j of SRS.activiteParJour(A["neruda.activite"], N, a)) {
      if (!r.jour[j.date]) continue;
      r.jour[j.date].sec = j.total;
      for (const c in j.t) r.temps[c] = (r.temps[c] || 0) + j.t[c];
      for (const n in j.a) { const v = r.anims[n] || [0, 0]; r.anims[n] = [v[0] + j.a[n][0], v[1] + j.a[n][1]]; }
      r.docs += j.d;
      if (j.total && j.date > derniere) derniere = j.date;
    }
    r.tempsJours = SRS.activiteParJour(A["neruda.activite"], N, a);
  }
  r.deb = Object.keys(D).filter(id => MOTIF.test(id) && D[id] && typeof D[id].k === "string");
  r.derniere = derniere;
  r.actifs = jours.filter(d => r.jour[d].rep || r.jour[d].sec || r.jour[d].qcm).length;
  r.reponses = jours.reduce((s, d) => s + r.jour[d].rep, 0);
  r.secondes = jours.reduce((s, d) => s + r.jour[d].sec, 0);
  r.qcmPeriode = jours.reduce((s, d) => s + r.jour[d].qcm, 0);
  return r;
}
function scoreCartes(c) { return c && c.vues ? (c.total ? c.apprises / c.total : null) : undefined; }
function scoreQcm(q) {
  if (!q) return undefined;
  let m = -1; for (const t in q) if (q[t].total) m = Math.max(m, q[t].meilleur / q[t].total);
  return m < 0 ? undefined : m;
}

/* ------------------------------------------------------------ graphiques */
function bulle(carte) {
  let b = carte.querySelector(".bulle");
  if (!b) { b = document.createElement("div"); b.className = "bulle"; b.setAttribute("role", "status"); carte.appendChild(b); }
  return b;
}
function montrer(carte, x, y, titre, lignes) {
  const b = bulle(carte);
  b.textContent = "";
  const t = document.createElement("div"); t.className = "t"; t.textContent = titre; b.appendChild(t);
  for (const l of lignes) {
    const r = document.createElement("div"); r.className = "r";
    if (l.couleur) { const k = document.createElement("span"); k.className = "k"; k.style.background = "var(" + l.couleur + ")"; r.appendChild(k); }
    const v = document.createElement("b"); v.textContent = l.valeur; r.appendChild(v);
    if (l.nom) { const n = document.createElement("span"); n.className = "n"; n.textContent = l.nom; r.appendChild(n); }
    b.appendChild(r);
  }
  b.style.display = "block";
  const W = carte.clientWidth, bw = b.offsetWidth;
  b.style.left = Math.max(4, Math.min(W - bw - 4, x + 12)) + "px";
  b.style.top = Math.max(4, y - b.offsetHeight - 8) + "px";
}
function cacher(carte) { const b = carte.querySelector(".bulle"); if (b) b.style.display = "none"; }
function pas(max) {
  const brut = max / 4, p = Math.pow(10, Math.floor(Math.log10(brut))), r = brut / p;
  return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 2.5 ? 2.5 : r <= 5 ? 5 : 10) * p;
}
/* Colonnes (empilées si plusieurs séries), une seule échelle. series : [{nom, couleur, valeurs}] ; format(v) */
function colonnes(carte, jours, series, format, unite) {
  const W = Math.max(320, carte.clientWidth - 32), H = 210, g = 44, d = 6, h = 10, b = 24;
  const tot = jours.map((_, i) => series.reduce((s, x) => s + (x.valeurs[i] || 0), 0));
  const p = pas(Math.max(1, ...tot)), max = Math.max(p, Math.ceil(Math.max(1, ...tot) / p) * p);
  const pw = W - g - d, ph = H - h - b, slot = pw / jours.length, bw = Math.max(2, Math.min(24, slot * 0.62));
  const Y = v => h + ph - (v / max) * ph;
  let s = '<svg class="graph" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(series.map(x => x.nom).join(", ")) + ' par jour">';
  for (let v = 0; v <= max + 1e-9; v += p) {
    s += '<line class="' + (v ? "grille" : "axe") + '" x1="' + g + '" x2="' + (W - d) + '" y1="' + Y(v).toFixed(1) + '" y2="' + Y(v).toFixed(1) + '"/>'
      + '<text x="' + (g - 6) + '" y="' + (Y(v) + 4).toFixed(1) + '" text-anchor="end">' + esc(format(v, true)) + "</text>";
  }
  const tous = Math.ceil(jours.length / 8);
  jours.forEach((j, i) => { s += '<rect class="bande" x="' + (g + i * slot).toFixed(1) + '" y="' + h + '" width="' + slot.toFixed(1) + '" height="' + ph + '"/>'; });
  jours.forEach((j, i) => {
    const x = g + i * slot + (slot - bw) / 2;
    let base = Y(0), premier = true;
    const segs = series.map(x => x.valeurs[i] || 0), haut = segs.reduce((m, v, k) => v > 0 ? k : m, -1);
    segs.forEach((v, k) => {
      if (v <= 0) return;
      const hh = (v / max) * ph, gap = premier ? 0 : 2, y0 = base - hh, hr = Math.max(0, hh - gap);
      if (hr > 0.4) {
        const r = k === haut ? Math.min(4, bw / 2, hr) : 0, yt = y0, yb = y0 + hr;
        s += '<path fill="var(' + series[k].couleur + ')" d="M' + x.toFixed(1) + "," + yb.toFixed(1) + " L" + x.toFixed(1) + "," + (yt + r).toFixed(1)
          + " Q" + x.toFixed(1) + "," + yt.toFixed(1) + " " + (x + r).toFixed(1) + "," + yt.toFixed(1) + " L" + (x + bw - r).toFixed(1) + "," + yt.toFixed(1)
          + " Q" + (x + bw).toFixed(1) + "," + yt.toFixed(1) + " " + (x + bw).toFixed(1) + "," + (yt + r).toFixed(1) + " L" + (x + bw).toFixed(1) + "," + yb.toFixed(1) + ' Z"/>';
      }
      base = y0; premier = false;
    });
    if (i % tous === (jours.length - 1) % tous) s += '<text x="' + (g + i * slot + slot / 2).toFixed(1) + '" y="' + (H - 6) + '" text-anchor="middle">' + jj(j) + "</text>";
    s += '<rect class="zone" data-i="' + i + '" x="' + (g + i * slot).toFixed(1) + '" y="' + h + '" width="' + slot.toFixed(1) + '" height="' + ph
      + '" tabindex="0" aria-label="' + esc(fr(j) + " : " + series.map((x, k) => x.nom + " " + format(segs[k])).join(", ")) + '"/>';
  });
  s += "</svg>";
  const z = document.createElement("div");
  z.innerHTML = (series.length > 1 ? '<div class="legende">' + series.map(x => '<span><i style="background:var(' + x.couleur + ')"></i>' + esc(x.nom) + "</span>").join("") + "</div>" : "") + s
    + '<details class="vue-tableau"><summary>Voir le tableau</summary><div class="defile"><table><thead><tr><th>Jour</th>'
    + series.map(x => "<th>" + esc(x.nom) + "</th>").join("") + (series.length > 1 ? "<th>Total</th>" : "") + "</tr></thead><tbody>"
    + jours.map((j, i) => "<tr><td>" + fr(j) + "</td>" + series.map(x => '<td class="nb">' + esc(format(x.valeurs[i] || 0)) + "</td>").join("")
      + (series.length > 1 ? '<td class="nb">' + esc(format(tot[i])) + "</td>" : "") + "</tr>").join("") + "</tbody></table></div></details>";
  carte.appendChild(z);
  const svg = z.querySelector("svg"), bandes = svg.querySelectorAll(".bande");
  const eteindre = () => { bandes.forEach(x => x.classList.remove("on")); cacher(carte); };
  const voir = (el, ev) => {
    const i = +el.dataset.i, r = carte.getBoundingClientRect(), rr = el.getBoundingClientRect();
    bandes.forEach((x, k) => x.classList.toggle("on", k === i));
    const x = ev && ev.clientX ? ev.clientX - r.left : rr.left - r.left + rr.width / 2, y = rr.top - r.top + 30;
    montrer(carte, x, y, fr(jours[i]) + (unite ? " · " + unite : ""), series.map(sr => ({ couleur: sr.couleur, valeur: format(sr.valeurs[i] || 0), nom: series.length > 1 ? sr.nom : "" }))
      .concat(series.length > 1 ? [{ valeur: format(tot[i]), nom: "en tout" }] : []));
  };
  svg.addEventListener("pointermove", ev => { const el = ev.target.closest(".zone"); if (el) voir(el, ev); else eteindre(); });
  svg.addEventListener("pointerleave", eteindre);
  svg.addEventListener("focusin", ev => { const el = ev.target.closest(".zone"); if (el) voir(el); });
  svg.addEventListener("focusout", eteindre);
}
/* Barres horizontales classées, une seule teinte, valeur au bout */
function barres(lignes, max) {
  return '<div class="barres">' + lignes.map(l => '<div class="ligne-b"><span>' + esc(l.nom) + '</span><span class="piste"><i style="width:'
    + Math.max(0.5, 100 * l.v / Math.max(1, max)).toFixed(1) + '%"></i><span>' + esc(l.texte) + (l.detail ? " <small>" + esc(l.detail) + "</small>" : "")
    + "</span></span></div>").join("") + "</div>";
}
function teinte(v) {
  if (v === undefined) return "";
  if (v === null) return "var(--h1)";
  const n = v >= 1 ? 6 : v >= 0.8 ? 5 : v >= 0.6 ? 4 : v >= 0.4 ? 3 : v >= 0.2 ? 2 : 1;
  return "var(--h" + n + ")";
}

/* ------------------------------------------------------------ mesures (interrupteur) */
function texteInformation() {
  return "Information — mesures d'activité sur le site de physique\n\n"
    + "À partir du " + fr(auj()) + ", le site de physique note, pour chaque élève connecté avec son compte, comment il "
    + "s'en sert. Le but : adapter les cours, repérer les notions qui posent problème et aider ceux qui en ont besoin. "
    + "Ce n'est pas noté et cela ne compte dans aucune moyenne.\n\n"
    + "Ce qui est noté :\n"
    + "- le temps de travail actif par jour, par sorte de page (cartes de révision, questionnaires, animations, reste du "
    + "site) ; une page laissée ouverte sans rien faire ne compte pas ;\n"
    + "- les animations ouvertes et le temps passé dans chacune ;\n"
    + "- le nombre de documents ouverts ;\n"
    + "- pour chaque questionnaire, les questions réussies et les questions ratées.\n"
    + "Ce qui n'est jamais noté : ce que tu écris, l'heure précise, les pages d'autres sites, ta position, rien en "
    + "dehors du site.\n\n"
    + "Qui le voit : ton professeur seul, dans l'espace professeur du site. Le temps et les animations sont gardés pour "
    + "les 70 derniers jours, la réussite aux questions pour l'année ; tout est effacé à la fin de l'année scolaire. "
    + "Les données sont rangées dans ton compte du site (service Firebase de Google).\n\n"
    + "Tes droits : tu peux demander à voir ce qui a été noté, ou à ce que ce soit effacé ; tu peux aussi t'opposer à "
    + "ces mesures : rien ne sera plus noté pour toi. Il suffit de me le dire (ou, pour tes parents, de m'écrire sur "
    + "Pronote). Le site fonctionne de la même façon pour tous.\n\nM. Cronenberger";
}
function afficherMesures() {
  const z = $("mesures"), on = !!(REGL && REGL.mesures === true);
  if (REGL === null) {
    z.innerHTML = '<div class="bandeau-m off"><b>Mesures d\'activité : réglage illisible.</b> Les règles v6 de la base ne sont '
      + "peut-être pas encore publiées (console Firebase › Firestore › Règles).</div>";
    return;
  }
  z.innerHTML = '<div class="bandeau-m ' + (on ? "on" : "off") + '"><b>Mesures d\'activité : ' + (on ? "activées" + (REGL.depuis ? " depuis le " + esc(fr(REGL.depuis)) : "") : "coupées") + ".</b> "
    + (on ? "Temps de travail actif, animations ouvertes, documents ouverts, réussite question par question — comptes élèves seulement."
          : "Rien de plus que les cartes, questionnaires et animations n'est noté. À activer <b>après avoir informé les élèves</b> (texte ci-dessous).")
    + '<div class="boutons">' + (on ? '<button class="mini" type="button" id="m-couper">Couper les mesures</button>'
      : '<button class="mini" type="button" id="m-activer">Activer les mesures…</button>')
    + '<button class="mini" type="button" id="m-effacer">Effacer les mesures déjà envoyées</button></div>'
    + '<details style="margin-top:8px"><summary>Texte d\'information des élèves et des familles (à copier dans Pronote)</summary>'
    + '<textarea id="m-texte" readonly></textarea><div class="boutons"><button class="mini" type="button" id="m-copier">Copier le texte</button></div></details></div>';
  $("m-texte").value = texteInformation();
}
/* reglages/site = {mesures, depuis, maj, exclus: [uid…]} — exclus : les élèves qui se sont opposés aux mesures (rien n'est
   noté pour eux, leurs appareils effacent ce qu'ils avaient noté ; règles v6 : leurs envois sont refusés) */
function exclus() { return Array.isArray(REGL && REGL.exclus) ? REGL.exclus.filter(u => typeof u === "string") : []; }
async function relireReglage() {
  const d = await getDoc(doc(db, "reglages", "site"));
  REGL = d.exists() ? (d.data() || {}) : {};
}
/* champ par champ : ce qu'un autre onglet a changé entre-temps (une opposition, l'interrupteur) n'est pas écrasé ;
   creation : les valeurs simples si le document n'existe pas encore */
async function majReglage(champs, creation) {
  const ref = doc(db, "reglages", "site");
  try { await updateDoc(ref, Object.assign({ maj: Date.now() }, champs)); }
  catch (e) {
    if (!(e && e.code === "not-found")) throw e;
    await setDoc(ref, Object.assign({ mesures: false, depuis: "", exclus: [] }, creation || champs, { maj: Date.now() }));
  }
  await relireReglage();
}
async function basculer(oui) {
  await majReglage(oui ? { mesures: true, depuis: auj() } : { mesures: false });
}
async function exclure(uid, oui) {
  await majReglage({ exclus: oui ? arrayUnion(uid) : arrayRemove(uid) }, { exclus: oui ? [uid] : [] });
}
async function effacerMesures(uid) {
  // toute la classe : la remise à zéro dit aussi aux appareils d'effacer ce qu'ils avaient noté (sinon ils le renverraient)
  if (!uid) await majReglage({ remiseAZero: Date.now() });
  // la liste relue dans la base, pas celle de l'ouverture de la page (des mesures ont pu arriver depuis)
  const ids = uid ? [uid] : (await getDocs(collection(db, "activite"))).docs.map(d => d.id);
  for (let i = 0; i < ids.length; i += 400) {
    const lot = writeBatch(db);
    ids.slice(i, i + 400).forEach(u => lot.delete(doc(db, "activite", u)));
    await lot.commit();
  }
  for (const u of ids) delete DOCS.activite[u];
  return ids.length;
}

/* ------------------------------------------------------------ vues */
function remplirClasses() {
  const libs = ELV.classes || {}, gardee = reglage("tableau-classe");
  const cl = Object.keys(FIL_DE).filter(c => FICHES.some(f => f.classe === c) || (ELV.eleves || []).some(e => e.classe === c));
  $("classe").innerHTML = cl.map(c => '<option value="' + esc(c) + '">' + esc((libs[c] && libs[c].libelle) || c) + "</option>").join("");
  if (gardee && cl.includes(gardee)) $("classe").value = gardee;
  remplirEleves();
}
function remplirEleves() {
  const c = $("classe").value, l = FICHES.filter(f => f.classe === c).map(f => ({ uid: f.uid, nom: nomEleve(f) })).sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
  $("eleve").innerHTML = '<option value="">Toute la classe</option>' + l.map(e => '<option value="' + esc(e.uid) + '">' + esc(e.nom) + "</option>").join("");
}
async function afficher() {
  const classe = $("classe").value, fil = FIL_DE[classe], uid = $("eleve").value;
  reglage("tableau-classe", classe);
  document.querySelectorAll("#periode button").forEach(b => b.classList.toggle("on", +b.dataset.n === N));
  afficherMesures();
  const z = $("vue");
  z.style.opacity = ".55";
  for (const ch of chapitresDe(fil)) await chapitre(fil, ch);         // titres, nombre de cartes, textes des questions
  z.style.opacity = "";
  const jours = joursPeriode();
  const liste = FICHES.filter(f => f.classe === classe).map(f => stats(f, jours)).sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
  z.innerHTML = "";
  if (uid) { const s = liste.find(x => x.f.uid === uid); if (s) return vueEleve(z, s, jours); }
  vueClasse(z, liste, jours, fil, classe);
}

function carte(z, titre, sous) {
  const c = document.createElement("section"); c.className = "carte";
  c.innerHTML = "<h2>" + esc(titre) + "</h2>" + (sous ? '<p class="sous">' + sous + "</p>" : "");
  z.appendChild(c); return c;
}
function kpi(z, tuiles) {
  const k = document.createElement("div"); k.className = "kpi";
  k.innerHTML = tuiles.map(t => '<div><div class="l">' + esc(t.l) + '</div><div class="v">' + t.v + "</div>" + (t.d ? '<div class="d">' + esc(t.d) + "</div>" : "") + "</div>").join("");
  z.appendChild(k);
}
function avecMesures(liste) { return liste.some(s => s.secondes > 0 || Object.keys(s.qstat).length); }

function vueClasse(z, liste, jours, fil, classe) {
  const nl = (ELV.eleves || []).filter(e => e.classe === classe).length, actifs = liste.filter(s => s.actifs).length;
  const mes = avecMesures(liste), sec = liste.reduce((s, x) => s + x.secondes, 0), avecTemps = liste.filter(s => s.secondes).length;
  kpi(z, [
    { l: "Élèves actifs", v: actifs + " <small>/ " + liste.length + "</small>", d: "au moins un jour sur " + N + " · " + liste.length + " compte(s) sur " + nl + " élève(s)" },
    { l: "Réponses aux cartes", v: nb(liste.reduce((s, x) => s + x.reponses, 0)), d: "sur " + N + " jours" },
    { l: "Questionnaires faits", v: nb(liste.reduce((s, x) => s + x.qcmPeriode, 0)), d: "dernier essai dans la période" },
    { l: "Temps de travail", v: mes ? minutes(avecTemps ? sec / avecTemps : 0) : "—", d: mes ? "par élève mesuré, sur " + N + " jours" : (REGL && REGL.mesures ? "pas encore de mesure reçue" : "mesures coupées") }
  ]);
  const c1 = carte(z, "Élèves actifs par jour", "Un élève est actif un jour s'il a répondu à des cartes, fini un questionnaire ou, avec les mesures, travaillé sur le site.");
  colonnes(c1, jours, [{ nom: "Élèves actifs", couleur: "--s-1", valeurs: jours.map(d => liste.filter(s => s.jour[d].rep || s.jour[d].sec || s.jour[d].qcm).length) }],
    v => String(Math.round(v)), "élèves actifs");
  if (mes) {
    const c2 = carte(z, "Temps de travail actif par jour", "Toute la classe, en minutes, par sorte de page (mesures d'activité).");
    colonnes(c2, jours, TEMPS.map(([k, nom, coul]) => ({ nom, couleur: coul, valeurs: jours.map(d => liste.reduce((s, x) => {
      const j = (x.tempsJours || []).find(y => y.date === d); return s + ((j && j.t[k]) || 0) / 60; }, 0)) })),
      (v, axe) => axe ? String(Math.round(v)) : Math.round(v) + " min", "minutes");
  }
  // chapitres travaillés
  const chs = chapitresDe(fil).filter(ch => liste.some(s => s.cartes[ch] || s.qcm[ch]));
  const c3 = carte(z, "Chapitres travaillés", "");
  c3.querySelector(".sous") || c3.insertAdjacentHTML("beforeend", '<p class="sous"></p>');
  c3.querySelector(".sous").innerHTML = '<span class="seg2" id="metrique" style="display:inline-flex;min-height:34px"><button type="button" data-m="cartes"'
    + (METRIQUE === "cartes" ? ' class="on"' : "") + '>Cartes apprises</button><button type="button" data-m="qcm"' + (METRIQUE === "qcm" ? ' class="on"' : "")
    + ">Questionnaires (meilleur score)</button></span>";
  if (!chs.length) c3.insertAdjacentHTML("beforeend", '<p class="vide2">Aucune carte ni aucun questionnaire pour l\'instant.</p>');
  else {
    const val = (s, ch) => METRIQUE === "cartes" ? scoreCartes(s.cartes[ch]) : scoreQcm(s.qcm[ch]);
    let h = '<div class="defile"><table class="chaleur"><thead><tr><th></th>' + chs.map(ch => '<th title="' + esc(titreChapitre(fil, ch)) + '">' + esc(court(fil, ch)) + "</th>").join("") + "</tr></thead><tbody>";
    liste.forEach((s, i) => {
      h += '<tr><th class="nom">' + esc(s.nom) + "</th>" + chs.map(ch => { const v = val(s, ch); return '<td tabindex="0" data-e="' + i + '" data-ch="' + esc(ch) + '"'
        + (v !== undefined ? ' style="background:' + teinte(v) + '"' : "") + "></td>"; }).join("") + "</tr>";
    });
    h += '</tbody></table></div><div class="echelle"><span>' + (METRIQUE === "cartes" ? "cartes apprises (intervalle ≥ 7 jours) sur le paquet :" : "meilleur score :")
      + '</span><i style="background:var(--h0)"></i>rien <i style="background:var(--h1)"></i>0–20 % <i style="background:var(--h2)"></i>20–40 % '
      + '<i style="background:var(--h3)"></i>40–60 % <i style="background:var(--h4)"></i>60–80 % <i style="background:var(--h5)"></i>80–99 % <i style="background:var(--h6)"></i>100 %</div>';
    h += '<details class="vue-tableau"><summary>Voir le tableau</summary><div class="defile"><table><thead><tr><th>Élève</th>' + chs.map(ch => "<th>" + esc(court(fil, ch)) + "</th>").join("")
      + "</tr></thead><tbody>" + liste.map(s => "<tr><td>" + esc(s.nom) + "</td>" + chs.map(ch => '<td class="nb">' + esc(detailCellule(s, ch)) + "</td>").join("") + "</tr>").join("") + "</tbody></table></div></details>";
    c3.insertAdjacentHTML("beforeend", h);
    const t = c3.querySelector("table.chaleur");
    const voir = el => {
      const s = liste[+el.dataset.e], ch = el.dataset.ch, r = c3.getBoundingClientRect(), rr = el.getBoundingClientRect();
      montrer(c3, rr.left - r.left, rr.top - r.top, s.nom + " · " + titreChapitre(fil, ch), lignesCellule(s, ch));
    };
    t.addEventListener("pointerover", ev => { const el = ev.target.closest("td"); if (el) voir(el); });
    t.addEventListener("pointerleave", () => cacher(c3));
    t.addEventListener("focusin", ev => { const el = ev.target.closest("td"); if (el) voir(el); });
    t.addEventListener("focusout", () => cacher(c3));
  }
  // questions les plus ratées (mesures)
  const agr = table();
  for (const s of liste) for (const k of Object.keys(s.qstat)) for (const i of Object.keys(s.qstat[k])) {
    const a = agr[k + "|" + i] = agr[k + "|" + i] || { k, i: +i, p: 0, r: 0, e: 0 };
    a.p += s.qstat[k][i][0]; a.r += s.qstat[k][i][1]; a.e++;
  }
  const pires = Object.values(agr).filter(a => a.p >= 3 && a.r > 0).sort((a, b) => b.r / b.p - a.r / a.p || b.p - a.p).slice(0, 10);
  if (mes || pires.length) {
    const c4 = carte(z, "Questions les plus ratées", "Réussite question par question (mesures d'activité) : au moins 3 réponses ; part des réponses fausses.");
    c4.insertAdjacentHTML("beforeend", pires.length ? pires.map(a => {
      const [ch, typ] = a.k.split("|"), info = CHAP[fil + "/" + ch], txt = info && info.q[typ] && info.q[typ][a.i];
      return '<div class="q">' + esc(txt || "Question " + (a.i + 1)) + '<span class="compteur"><i style="width:' + (100 * a.r / a.p).toFixed(1) + '%"></i></span><div class="m">'
        + pct(a.r / a.p) + " de réponses fausses · " + a.p + " réponse(s), " + a.e + " élève(s) · " + esc(court(fil, ch) + " · " + (TYPES[typ] || typ)) + "</div></div>";
    }).join("") : '<p class="vide2">Pas encore assez de réponses.</p>');
  }
  // animations
  const anims = table();
  for (const s of liste) {
    for (const k of Object.keys(s.sims)) { const a = anims[k] = anims[k] || { e: 0, r: 0, t: 0, o: 0, sec: 0 }; a.e++; a.r += s.sims[k].reussis; a.t += s.sims[k].essayes; }
    for (const n of Object.keys(s.anims)) { const k = cleAnimation(n), a = anims[k] = anims[k] || { e: 0, r: 0, t: 0, o: 0, sec: 0 }; a.o += s.anims[n][0]; a.sec += s.anims[n][1]; }
  }
  const la = Object.keys(anims).map(k => ({ k, ...anims[k] })).sort((a, b) => b.e - a.e || b.o - a.o).slice(0, 15);
  const c5 = carte(z, "Animations", "Élèves qui ont joué (défis réussis sur tentés, toute l'année)" + (mes ? " ; ouvertures et temps dans la période (mesures)." : "."));
  c5.insertAdjacentHTML("beforeend", la.length ? barres(la.map(a => ({ nom: nomAnimation(a.k), v: a.e || 0,
    texte: a.e ? a.e + " élève" + (a.e > 1 ? "s" : "") : "—", detail: [a.t ? a.r + "/" + a.t + " défis" : "", a.o ? a.o + " ouverture" + (a.o > 1 ? "s" : "") + ", " + minutes(a.sec) : ""].filter(Boolean).join(" · ") })),
    Math.max(1, ...la.map(a => a.e))) : '<p class="vide2">Aucune animation jouée avec un compte pour l\'instant.</p>');
  // élèves
  const c6 = carte(z, "Élèves", "Cliquer sur un nom pour le détail. Période : " + N + " jours.");
  c6.insertAdjacentHTML("beforeend", '<div class="defile"><table class="liste"><thead><tr><th>Élève</th><th>Dernière activité</th><th>Jours actifs</th><th>Réponses aux cartes</th>'
    + "<th>Cartes apprises</th><th>Questionnaires (moyenne)</th><th>Défis réussis</th>" + (mes ? "<th>Temps</th>" : "") + "<th>Corrigés débloqués</th></tr></thead><tbody>"
    + liste.map(s => {
      const ap = Object.values(s.cartes).reduce((t, c) => t + c.apprises, 0), sc = Object.values(s.qcm).map(scoreQcm).filter(v => v !== undefined);
      const def = Object.values(s.sims).reduce((t, x) => t + x.reussis, 0);
      return '<tr class="clic" data-uid="' + esc(s.f.uid) + '"><td><a href="#" data-uid="' + esc(s.f.uid) + '">' + esc(s.nom) + "</a></td><td>" + (s.derniere ? fr(s.derniere) : "—")
        + '</td><td class="nb">' + s.actifs + '</td><td class="nb">' + nb(s.reponses) + '</td><td class="nb">' + nb(ap) + '</td><td class="nb">'
        + (sc.length ? pct(sc.reduce((a, b) => a + b, 0) / sc.length) + " (" + sc.length + " ch.)" : "—") + '</td><td class="nb">' + (def || "—") + "</td>"
        + (mes ? '<td class="nb">' + (s.secondes ? minutes(s.secondes) : "—") + "</td>" : "") + '<td class="nb">' + (s.deb.length || "—") + "</td></tr>";
    }).join("") + "</tbody></table></div>");
  const sans = (ELV.eleves || []).filter(e => e.classe === classe && !FICHES.some(f => f.identifiant === e.id));
  $("pied").textContent = sans.length ? sans.length + " élève(s) de la liste sans compte dans la base : " + sans.map(e => e.prenom).join(", ") + "." : "";
}
function cleAnimation(n) {
  for (const s of SRS.SIMULATIONS) if (s.page === "animations/" + n + ".html") return s.cle;
  return "anim:" + n;
}
function nomAnimation(k) {
  if (k.indexOf("anim:") === 0) { const n = k.slice(5); return (CATA && CATA.anim[n]) || n; }
  const s = SRS.infoSimulation(k);
  return s.nom + (s.niveau ? " · " + s.niveau : "");
}
function lignesCellule(s, ch) {
  const c = s.cartes[ch], q = s.qcm[ch] || {}, l = [];
  if (c) l.push({ couleur: "--s-1", valeur: c.apprises + (c.total ? "/" + c.total : ""), nom: "cartes apprises · " + c.vues + " vues" + (c.dues ? " · " + c.dues + " à revoir" : "") });
  for (const t of Object.keys(q)) l.push({ couleur: "--s-2", valeur: q[t].meilleur + "/" + q[t].total, nom: (TYPES[t] || t) + " (meilleur) · " + q[t].tentatives + " essai(s)" + (q[t].date ? ", le " + fr(q[t].date) : "") });
  if (!l.length) l.push({ valeur: "—", nom: "pas encore travaillé" });
  return l;
}
function detailCellule(s, ch) {
  const c = s.cartes[ch], v = METRIQUE === "cartes" ? (c ? c.apprises + (c.total ? "/" + c.total : "") + " apprises" : "") : (() => { const x = scoreQcm(s.qcm[ch]); return x === undefined ? "" : pct(x); })();
  return v || "—";
}

function vueEleve(z, s, jours) {
  const fil = s.fil, mes = s.secondes > 0 || Object.keys(s.qstat).length;
  const tete = document.createElement("div");
  tete.innerHTML = '<p style="margin:6px 0"><a href="#" id="retour-classe" style="color:var(--bleu)">← Toute la classe</a></p>'
    + '<h2 style="font-size:20px">' + esc(s.nom) + " <span class=\"etiq\">" + esc(s.f.classe) + "</span></h2>"
    + '<p class="sous" style="font-size:13px;color:var(--gris)">Dernière activité : ' + (s.derniere ? fr(s.derniere) : "aucune")
    + " · dernière synchronisation des cartes : " + (MAJ.cartes[s.f.uid] ? new Date(MAJ.cartes[s.f.uid]).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" }) : "jamais") + "</p>";
  z.appendChild(tete);
  kpi(z, [
    { l: "Jours actifs", v: s.actifs + " <small>/ " + N + "</small>", d: "cartes, questionnaires ou travail mesuré" },
    { l: "Réponses aux cartes", v: nb(s.reponses), d: "série en cours : " + s.serie + " jour" + (s.serie > 1 ? "s" : "") },
    { l: "Questionnaires faits", v: nb(s.qcmPeriode), d: "dernier essai dans la période" },
    { l: "Temps de travail", v: mes ? minutes(s.secondes) : "—", d: mes ? "dont cartes " + minutes(s.temps.cartes) + ", questionnaires " + minutes(s.temps.qcm) : (REGL && REGL.mesures ? "pas encore de mesure reçue" : "mesures coupées") }
  ]);
  const c1 = carte(z, mes ? "Temps de travail actif par jour" : "Réponses aux cartes par jour", mes ? "En minutes, par sorte de page." : "");
  if (mes) colonnes(c1, jours, TEMPS.map(([k, nom, coul]) => ({ nom, couleur: coul, valeurs: jours.map(d => { const j = (s.tempsJours || []).find(y => y.date === d); return ((j && j.t[k]) || 0) / 60; }) })),
    (v, axe) => axe ? String(Math.round(v)) : Math.round(v) + " min", "minutes");
  else colonnes(c1, jours, [{ nom: "Réponses aux cartes", couleur: "--s-1", valeurs: jours.map(d => s.jour[d].rep) }], v => String(Math.round(v)), "réponses aux cartes");
  const chs = chapitresDe(fil).filter(ch => s.cartes[ch] || s.qcm[ch]);
  const c2 = carte(z, "Chapitre par chapitre", "Cartes : vues, apprises (intervalle ≥ 7 jours), à revoir aujourd'hui. Questionnaires : meilleur et dernier score, essais, questions ratées au dernier essai.");
  if (!chs.length) c2.insertAdjacentHTML("beforeend", '<p class="vide2">Aucune carte ni aucun questionnaire pour l\'instant.</p>');
  else c2.insertAdjacentHTML("beforeend", '<div class="defile"><table class="liste"><thead><tr><th>Chapitre</th><th>Cartes</th><th>Questionnaires</th></tr></thead><tbody>'
    + chs.map(ch => {
      const c = s.cartes[ch], q = s.qcm[ch] || {}, info = CHAP[fil + "/" + ch];
      const tq = Object.keys(q).map(t => {
        const x = q[t], st = s.qstat[ch + "|" + t] || {};
        const rates = (x.rates || []).map(i => (info && info.q[t] && info.q[t][i]) || ("question " + (i + 1)));
        return "<b>" + esc(TYPES[t] || t) + "</b> : " + x.meilleur + "/" + x.total + " (dernier " + x.dernier + "/" + x.total + ", " + x.tentatives + " essai" + (x.tentatives > 1 ? "s" : "")
          + (x.date ? ", le " + fr(x.date) : "") + ")" + (rates.length ? '<div class="m" style="font-size:12px;color:var(--gris)">Ratées : ' + rates.map(esc).join(" · ") + "</div>" : "")
          + (Object.keys(st).length ? '<div class="m" style="font-size:12px;color:var(--gris)">Mesures : ' + Object.values(st).reduce((a, v) => a + v[0], 0) + " réponses, "
            + Object.values(st).reduce((a, v) => a + v[1], 0) + " fausses</div>" : "");
      }).join("<br>");
      return "<tr><td>" + esc(titreChapitre(fil, ch)) + '</td><td class="nb">' + (c ? c.vues + " vues · " + c.apprises + (c.total ? "/" + c.total : "") + " apprises" + (c.dues ? " · " + c.dues + " à revoir" : "")
        + (c.derniere ? "<br><small>le " + fr(c.derniere) + "</small>" : "") : "—") + "</td><td>" + (tq || "—") + "</td></tr>";
    }).join("") + "</tbody></table></div>");
  const sims = Object.keys(s.sims), an = Object.keys(s.anims);
  const c3 = carte(z, "Animations", "");
  c3.insertAdjacentHTML("beforeend", (sims.length || an.length) ? '<div class="defile"><table class="liste"><thead><tr><th>Animation</th><th>Défis</th><th>Étoiles</th>' + (an.length ? "<th>Ouvertures · temps (période)</th>" : "") + "</tr></thead><tbody>"
    + [...new Set(sims.concat(an.map(cleAnimation)))].map(k => {
      const x = s.sims[k], n = an.find(a => cleAnimation(a) === k), o = n ? s.anims[n] : null;
      return "<tr><td>" + esc(nomAnimation(k)) + '</td><td class="nb">' + (x ? x.reussis + "/" + x.essayes : "—") + '</td><td class="nb">' + (x ? x.etoiles : "—") + "</td>"
        + (an.length ? '<td class="nb">' + (o ? o[0] + " · " + minutes(o[1]) : "—") + "</td>" : "") + "</tr>";
    }).join("") + "</tbody></table></div>" : '<p class="vide2">Aucune animation jouée avec son compte.</p>');
  const c4 = carte(z, "Corrigés débloqués par code", "Les corrigés partagés sans code (cases cochées) se voient dans « Corrigés partagés ».");
  c4.insertAdjacentHTML("beforeend", s.deb.length ? '<p style="font-size:14px">' + s.deb.map(id => esc(id.split(".").slice(1).join(" · "))).join(", ") + "</p>" : '<p class="vide2">Aucun.</p>');
  const ex = exclus().includes(s.f.uid);
  const c5 = carte(z, "Mesures d'activité de cet élève", ex ? "Cet élève s'est opposé aux mesures : rien n'est noté pour lui."
    : (mes ? "Documents ouverts dans la période : " + s.docs + "." : "Rien de mesuré pour lui dans la période."));
  c5.insertAdjacentHTML("beforeend", '<div class="boutons" style="display:flex;gap:8px;flex-wrap:wrap">'
    + '<button class="mini" type="button" id="m-exclure" data-uid="' + esc(s.f.uid) + '" data-oui="' + (ex ? "" : "1") + '">'
    + (ex ? "Le réintégrer aux mesures" : "L'exclure des mesures (opposition)") + "</button>"
    + (DOCS.activite[s.f.uid] ? '<button class="mini" type="button" id="m-effacer-eleve" data-uid="' + esc(s.f.uid) + '">Effacer ses mesures (à sa demande)</button>' : "")
    + "</div>");
  $("pied").textContent = "";
}

/* ------------------------------------------------------------ actions */
document.addEventListener("click", async ev => {
  const a = ev.target.closest && ev.target.closest("a[data-uid], tr.clic, #retour-classe");
  if (a) {
    ev.preventDefault();
    $("eleve").value = a.id === "retour-classe" ? "" : (a.dataset.uid || "");
    window.scrollTo(0, 0); afficher(); return;
  }
  const b = ev.target.closest && ev.target.closest("button");
  if (!b) return;
  if (b.dataset.n) { N = +b.dataset.n; reglage("tableau-periode", String(N)); afficher(); return; }
  if (b.dataset.m) { METRIQUE = b.dataset.m; reglage("tableau-metrique", METRIQUE); afficher(); return; }
  if (b.id === "relire") { try { await charger(); } catch (e) { toast("Base illisible : " + ((e && e.code) || e)); } afficher(); return; }
  if (b.id === "m-copier") { if (await copier($("m-texte").value)) toast("Texte copié : à coller dans Pronote"); return; }
  if (b.id === "m-activer") return confirmer("Les élèves et les familles ont-ils été informés (texte d'information, sur Pronote par exemple) ? "
    + "Les mesures commencent sur chaque appareil à la prochaine connexion ou au retour sur le site.", async () => {
      try { await basculer(true); toast("Mesures activées"); } catch (e) { toast("Non activées : " + ((e && e.code) || e)); }
      afficher();
    }, { titre: "Activer les mesures d'activité", libelle: "Activer", saisie: "ACTIVER", danger: false });
  if (b.id === "m-couper") return confirmer("Couper les mesures ? Les appareils des élèves arrêtent de noter et effacent ce qu'ils avaient noté "
    + "à leur prochaine visite ; ce qui est déjà dans la base reste lisible ici (bouton « Effacer » pour le supprimer).", async () => {
      try { await basculer(false); toast("Mesures coupées"); } catch (e) { toast("Non coupées : " + ((e && e.code) || e)); }
      afficher();
    }, { titre: "Couper les mesures", libelle: "Couper" });
  if (b.id === "m-effacer") return confirmer("Effacer de la base toutes les mesures d'activité déjà envoyées (" + Object.keys(DOCS.activite || {}).length
    + " compte(s)) ? Les cartes, questionnaires et animations ne sont pas touchés.", async () => {
      try { const n = await effacerMesures(); toast(n + " document(s) effacé(s)"); } catch (e) { toast("Non effacées : " + ((e && e.code) || e)); }
      afficher();
    }, { titre: "Effacer les mesures", libelle: "Effacer", saisie: "EFFACER" });
  if (b.id === "m-exclure") {
    try { await exclure(b.dataset.uid, !!b.dataset.oui); toast(b.dataset.oui ? "Exclu des mesures : son appareil efface ce qu'il avait noté à sa prochaine visite" : "Réintégré aux mesures"); }
    catch (e) { toast("Non enregistré : " + ((e && e.code) || e)); }
    afficher(); return;
  }
  if (b.id === "m-effacer-eleve") return confirmer("Effacer les mesures d'activité de cet élève ? (Tant qu'il n'est pas exclu des mesures, "
    + "son appareil peut renvoyer ce qu'il a encore noté : l'exclure d'abord s'il s'y oppose.)", async () => {
      try { await effacerMesures(b.dataset.uid); toast("Mesures effacées"); } catch (e) { toast("Non effacées : " + ((e && e.code) || e)); }
      afficher();
    }, { titre: "Effacer ses mesures", libelle: "Effacer" });
});
document.addEventListener("change", ev => {
  if (ev.target.id === "classe") { remplirEleves(); afficher(); }
  else if (ev.target.id === "eleve") afficher();
});

if ($("verrou")) garde($("verrou")).then(async () => {
  if (!SRS) { $("etat").textContent = "srs.js manque."; return; }
  try { ELV = await eleves(); } catch (e) { ELV = { classes: {}, eleves: [] }; }
  try { await charger(); }
  catch (e) { $("etat").textContent = "Base illisible : " + ((e && e.code) || e); return; }
  try { CATA = lireCatalogue(ND ? await ND.catalogue() : null); } catch (e) { CATA = null; }
  const p = +reglage("tableau-periode"); if ([7, 30, 70].includes(p)) N = p;
  if (["cartes", "qcm"].includes(reglage("tableau-metrique"))) METRIQUE = reglage("tableau-metrique");
  $("outil").hidden = false;
  remplirClasses();
  afficher();
});
