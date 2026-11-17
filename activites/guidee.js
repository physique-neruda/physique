/* =====================================================================
   activites/guidee.js — activité guidée, page élève (site v65.5, novembre 2026)
   Page en clair, sans contenu : guidee.html?a=<filière>.<activité> lit le contenu de l'activité dans
   activites/<filière>.<activité>.js, chiffré avec la clé de la filière (comme les questionnaires),
   une fois l'élève connecté. Les étapes s'ouvrent l'une après l'autre ; les aides s'ouvrent après un
   essai ; les visas du professeur arrivent par la base (geste sur son téléphone) ou, sans réseau,
   par un code du jour.
   Base Firestore (règles v7) :
     seances/{classe}--{activité}                 réglages de la séance (écrits par le professeur)
     seances/{…}/eleves/{uid}                     l'avancement de l'élève (écrit par lui seul)
     seances/{…}/visas/{uid}                      ses visas et déblocages (écrits par le professeur)
   Sans compte (accès de secours) ou sans réseau : tout marche sur l'appareil, rien n'est envoyé.
   ===================================================================== */
const SDK = "https://www.gstatic.com/firebasejs/10.12.2/";
const $ = id => document.getElementById(id);
const app = $("app");
let ACT = null, IMG = {}, ETAPES = [], PARTIES = [], PAR_ID = new Map(), PARTIE = new Map();
function installer(A) {
  ACT = A; IMG = window.IMAGES || {}; ETAPES = A.etapes; PARTIES = A.parties;
  PAR_ID = new Map(ETAPES.map((e, i) => [e.id, Object.assign(e, { rang: i })]));
  PARTIE = new Map(PARTIES.map(p => [p.id, p]));
  document.title = A.titre + " — activité guidée";
  const h = document.querySelector(".g-titre h1"); if (h) h.textContent = A.titre;
}
const SEUILS = { 1: { n: 1, min: 3 }, 2: { n: 2, min: 8 }, 3: { n: 3, min: 0 } };   // aide k : après n essais (ou min minutes)
const COUT = { 2: 0.5, 3: 1 };

/* ------------------------------------------------------------------ utilitaires */
const esc = s => String(s === undefined || s === null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
/* espaces insécables de la typographie française, dans le texte seulement (pas dans les balises) */
function typo(html) {
  return String(html || "").split(/(<[^>]*>)/).map(t => t.startsWith("<") ? t
    : t.replace(/ ([:;?!»])/g, " $1").replace(/« /g, "« ").replace(/(\d) (?=\d{3}\b)/g, "$1 ")).join("");
}
function fmt(x, n) {
  if (!isFinite(x)) return "—";
  const a = Math.abs(x), d = n !== undefined ? n : (a >= 1000 ? 0 : a >= 100 ? 1 : a >= 10 ? 2 : 3);
  return Number(x.toFixed(d)).toLocaleString("fr-FR", { maximumFractionDigits: d });
}
function lireNombre(s) {
  const t = String(s === undefined || s === null ? "" : s).trim().replace(/[\s  ]/g, "").replace(/−/g, "-").replace(",", ".");
  if (!/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(t)) return NaN;
  return parseFloat(t);
}
const maintenant = () => Date.now();
function proche(x, e, tol, tolA) {
  if (!isFinite(x) || !isFinite(e)) return false;
  return Math.abs(x - e) <= Math.max((tol || 0) * Math.abs(e), tolA || 0) + 1e-12;
}
function duree(ms) {
  const m = Math.floor(ms / 60000);
  return m < 1 ? "moins d'une minute" : m < 60 ? m + " min" : Math.floor(m / 60) + " h " + String(m % 60).padStart(2, "0");
}
function img(cle, classe) {
  const u = IMG[cle];
  return u ? `<img class="${classe || "g-img"}" src="${u}" alt="">` : "";
}

/* ------------------------------------------------------------------ état */
const S = {
  compte: null, F: null, db: null, sid: "", local: true, apercu: false, raison: "",
  seance: null, visas: null, chargee: false,
  moi: null, vue: "", sommaire: false, attenteEcriture: null, derniereEcriture: 0, ouvertes: new Set()
};
function cleLocale() { return "neruda.guidee." + ACT.id + "." + (S.compte && S.compte.uid ? S.compte.uid : "local"); }
function vierge() {
  return { v: 1, uid: S.compte && S.compte.uid || "", identifiant: S.compte && S.compte.identifiant || "", prenom: S.compte && S.compte.prenom || "",
           poste: 0, pos: "", e: {}, demande: null, debut: maintenant(), maj: 0, vu: 0, fin: 0 };
}
function lireLocal() { try { const t = localStorage.getItem(cleLocale()); return t ? JSON.parse(t) : null; } catch (e) { return null; } }
function ecrireLocal() { try { localStorage.setItem(cleLocale(), JSON.stringify(S.moi)); } catch (e) { } }
/* deux versions de l'avancement (appareil, base) : étape par étape, une étape faite l'emporte, sinon la plus avancée */
function fusionner(a, b) {
  if (!a) return b; if (!b) return a;
  const r = Object.assign({}, (a.maj || 0) >= (b.maj || 0) ? a : b);
  r.e = {};
  for (const id of new Set([...Object.keys(a.e || {}), ...Object.keys(b.e || {})])) {
    const x = (a.e || {})[id], y = (b.e || {})[id];
    if (!x || !y) { r.e[id] = x || y; continue; }
    if (!!x.ok !== !!y.ok) { r.e[id] = x.ok ? x : y; continue; }
    r.e[id] = (x.n || 0) + (x.a || 0) >= (y.n || 0) + (y.a || 0) ? x : y;
  }
  r.debut = Math.min(a.debut || maintenant(), b.debut || maintenant());
  return r;
}
const E = id => (S.moi.e[id] = S.moi.e[id] || { ok: 0, n: 0, a: 0, t0: 0, t1: 0, r: {} });
const fait = id => !!(S.moi.e[id] && S.moi.e[id].ok);

/* ------------------------------------------------------------------ séance : ce qui est ouvert */
function toutOuvert() { return S.apercu || !!(S.seance && S.seance.toutOuvrir); }
function partieOuverte(pid) {
  if (S.local || S.apercu) return true;
  if (!S.seance || S.seance.etat !== "ouverte") return false;
  return toutOuvert() || (Array.isArray(S.seance.parties) && S.seance.parties.includes(pid));
}
function enLecture() { return !S.local && !S.apercu && (!S.seance || S.seance.etat !== "ouverte"); }
function courante() {
  for (const e of ETAPES) if (partieOuverte(e.partie) && !fait(e.id)) return e;
  return null;
}
function accessible(e) {
  if (fait(e.id)) return true;
  if (!partieOuverte(e.partie)) return false;
  if (toutOuvert()) return true;
  const c = courante();
  return !!c && c.id === e.id;
}
function modeEvalue() { return !!(S.seance && S.seance.mode === "evalue"); }
function montrerReponses() { return S.local || S.apercu || !S.seance || S.seance.conclusions !== false; }
function penalite() {
  let p = 0;
  for (const id of Object.keys(S.moi.e)) p += S.moi.e[id].ac || 0;
  return p;
}

/* ------------------------------------------------------------------ enregistrement */
function sauver(immediat) {
  S.moi.maj = maintenant();
  const c = courante();
  S.moi.pos = c ? c.id : "fin";
  if (!c && !S.moi.fin) S.moi.fin = maintenant();
  ecrireLocal();
  if (S.local || S.apercu || !S.db || enLecture()) return;
  clearTimeout(S.attenteEcriture);
  S.attenteEcriture = setTimeout(envoyer, immediat ? 0 : 1200);
}
async function envoyer() {
  if (S.local || !S.db || enLecture()) return;
  const d = JSON.parse(JSON.stringify(S.moi));
  d.uid = S.compte.uid;
  try {
    await S.F.setDoc(S.F.doc(S.db, "seances", S.sid, "eleves", S.compte.uid), d);
    S.derniereEcriture = maintenant(); etatSync();
  } catch (e) { console.warn("activité guidée : écriture refusée", e && e.code); etatSync(e && e.code); }
}
function etatSync(err) {
  const q = $("qui"); if (!q) return;
  q.classList.toggle("hors", !!err || (navigator.onLine === false));
}
setInterval(() => {          // présence : le professeur voit qui travaille encore
  if (S.local || S.apercu || !S.moi || document.visibilityState !== "visible" || enLecture()) return;
  S.moi.vu = maintenant(); sauver();
}, 60000);
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden" && S.attenteEcriture) { clearTimeout(S.attenteEcriture); envoyer(); } });

/* ------------------------------------------------------------------ visas et déblocages venus du professeur */
function appliquerProf() {
  if (!S.visas || !S.moi) return false;
  let change = false;
  const ok = S.visas.ok || {}, ouvrir = S.visas.ouvrir || {}, refus = S.visas.refus || {};
  for (const e of ETAPES) {
    if (e.type === "visa" && ok[e.visa] && !fait(e.id)) {
      const x = E(e.id); x.ok = 1; x.t1 = ok[e.visa].t || maintenant(); x.r = { par: "professeur" }; change = true;
      if (S.moi.demande && S.moi.demande.visa === e.visa) S.moi.demande = null;
    }
    if (ouvrir[e.id] && !fait(e.id)) { const x = E(e.id); x.ok = 1; x.p = 1; x.t1 = maintenant(); change = true; }
  }
  if (S.moi.demande) {
    const r = refus[S.moi.demande.visa];
    if (r && (r.d === S.moi.demande.t || (!r.d && (r.t || 0) > (S.moi.demande.t || 0)))) {
      const id = (ETAPES.find(e => e.visa === S.moi.demande.visa) || {}).id;
      if (id) { const x = E(id); x.n = (x.n || 0) + 1; x.refus = { motif: String(r.motif || ""), t: r.t }; }
      S.moi.demande = null; change = true;
    }
  }
  if (S.visas.poste && S.visas.poste !== S.moi.poste) { S.moi.poste = S.visas.poste; change = true; }
  if (change) sauver(true);
  return change;
}

/* ------------------------------------------------------------------ rendu général */
function rendre() {
  if (!S.moi) return;
  const q = $("qui");
  q.hidden = false;
  q.innerHTML = esc(S.apercu ? "Aperçu (professeur)" : S.local ? "Sans compte" : (S.compte.prenom || "Élève"))
    + (S.moi.poste ? ` · poste ${S.moi.poste}` : "") + (S.local || S.apercu ? "" : '<span class="pt" aria-hidden="true"></span>');
  q.onclick = () => { if (!S.apercu) choisirPoste(); };
  if (!S.local && !S.apercu && !S.chargee) { app.innerHTML = '<p class="g-attente">Lecture de la séance…</p>'; return; }
  if (!S.local && !S.apercu && (!S.seance || S.seance.etat !== "ouverte") && !Object.keys(S.moi.e).length) { rendreFermee(); return; }
  if (!S.moi.accueil) { rendreAccueil(); return; }
  const c = courante();
  if (!S.vue || !PAR_ID.has(S.vue) || !accessible(PAR_ID.get(S.vue))) S.vue = c ? c.id : ETAPES[ETAPES.length - 1].id;
  const e = PAR_ID.get(S.vue);
  if (c && c.id === e.id) { const x = E(e.id); if (!x.t0) { x.t0 = maintenant(); sauver(); } }
  app.innerHTML = rendreBandeau() + rendreParties(e) + rendreEtape(e) + (c ? "" : rendreFin());
  brancher(e);
}
function rendreFermee() {
  app.innerHTML = `<section class="g-carte"><h2>${typo("L'activité n'est pas encore ouverte")}</h2>
    <p>${typo("Le professeur ouvre l'activité au début de la séance. Cette page se mettra à jour toute seule : garde-la ouverte.")}</p>
    <p class="g-discret">${esc(S.compte && S.compte.classeLibelle || "")}</p></section>`;
}
function rendreAccueil() {
  const postes = Array.from({ length: 12 }, (_, i) => i + 1);
  app.innerHTML = `<section class="g-carte g-accueil">
    <h2>${typo(ACT.titre)}</h2><p class="g-sous">${typo(ACT.sousTitre)}</p>
    ${S.local ? `<p class="g-alerte">${typo("Tu n'es pas connecté avec ton compte : ton avancement reste sur cet appareil et le professeur ne le voit pas. Les visas se donnent alors de vive voix.")}</p>`
      : S.apercu ? `<p class="g-alerte">${typo("Aperçu du professeur : toutes les étapes sont ouvertes, rien n'est enregistré dans la base.")}</p>`
      : `<div class="g-info"><b>${typo("Ce que voit ton professeur")}</b><p>${typo("Ton avancement dans cette activité : les étapes faites et quand, le nombre d'essais, les aides ouvertes, tes réponses. Lui seul les voit ; elles servent à t'aider pendant la séance. Elles sont effacées à la fin de l'année scolaire.")}</p></div>`}
    <h3>${typo("À quel poste travailles-tu ?")}</h3>
    <div class="g-postes">${postes.map(n => `<button type="button" class="g-poste${S.moi.poste === n ? " on" : ""}" data-p="${n}">${n}</button>`).join("")}</div>
    <button type="button" class="principal" id="commencer" ${S.moi.poste ? "" : "disabled"}>Commencer</button></section>`;
  app.querySelectorAll(".g-poste").forEach(b => b.onclick = () => {
    S.moi.poste = Number(b.dataset.p); app.querySelectorAll(".g-poste").forEach(x => x.classList.toggle("on", x === b));
    $("commencer").disabled = false;
  });
  $("commencer").onclick = () => { S.moi.accueil = 1; sauver(true); rendre(); };
}
function choisirPoste() {
  const n = prompt("Numéro de ton poste (1 à 12) :", S.moi.poste || "");
  const v = Number(n);
  if (Number.isInteger(v) && v >= 1 && v <= 12) { S.moi.poste = v; sauver(true); rendre(); }
}
function rendreBandeau() {
  let h = "";
  if (enLecture()) h += `<p class="g-bandeau">${typo("La séance est fermée : tu peux relire tes réponses, plus les modifier.")}</p>`;
  else if (toutOuvert() && !S.apercu) h += `<p class="g-bandeau">${typo("Le professeur a tout ouvert : tu peux faire les étapes dans l'ordre que tu veux.")}</p>`;
  if (modeEvalue()) h += `<p class="g-bandeau evalue">${typo("Activité évaluée : l'aide 2 coûte 0,5 point, l'aide 3 coûte 1 point.")}${penalite() ? " " + typo("Pénalité actuelle : " + fmt(penalite(), 1) + " point.") : ""}</p>`;
  return h;
}
function rendreParties(e) {
  const p = PARTIE.get(e.partie);
  let h = '<nav class="g-parties" aria-label="Parties">';
  for (const q of PARTIES) {
    const et = ETAPES.filter(x => x.partie === q.id), n = et.filter(x => fait(x.id)).length;
    const ouverte = partieOuverte(q.id);
    const premiere = et.find(x => accessible(x));
    h += `<button type="button" class="g-partie${q.id === p.id ? " on" : ""}${n === et.length ? " finie" : ""}${ouverte ? "" : " fermee"}" data-aller="${premiere ? premiere.id : ""}" ${premiere ? "" : "disabled"}>
      <b>${esc(q.court)}</b><span>${ouverte || n ? n + "/" + et.length : "fermée"}</span></button>`;
  }
  h += "</nav>";
  const et = ETAPES.filter(x => x.partie === e.partie);
  h += `<div class="g-fil" aria-label="Étapes de la partie">` + et.map(x => {
    const cls = fait(x.id) ? "fait" : accessible(x) ? "ici" : "";
    return `<button type="button" class="g-pas ${cls}${x.id === e.id ? " vue" : ""}" data-aller="${x.id}" ${accessible(x) ? "" : "disabled"} title="${esc(x.q ? "question " + x.q : x.titre.replace(/<[^>]+>/g, ""))}">${esc(x.q || (x.type === "visa" ? "✓" : x.type === "texte" ? "✎" : "•"))}</button>`;
  }).join("") + "</div>";
  return h;
}
function rendreFin() {
  const n = ETAPES.filter(e => fait(e.id)).length;
  return `<section class="g-carte g-fin"><h2>${typo("Activité terminée")}</h2><p>${typo(n + " étapes sur " + ETAPES.length + ".")}${modeEvalue() && penalite() ? " " + typo("Pénalité des aides : " + fmt(penalite(), 1) + " point.") : ""}</p></section>`;
}

/* ------------------------------------------------------------------ une étape */
function valeur(id, champ) { const x = S.moi.e[id]; return x && x.r && x.r[champ] !== undefined ? Number(x.r[champ]) : NaN; }
function api(saisies) {
  return { v: valeur, r: c => saisies && saisies[c] !== undefined ? saisies[c] : NaN, fmt: x => fmt(x) };
}
function rendreEtape(e) {
  const p = PARTIE.get(e.partie), x = S.moi.e[e.id] || {}, c = courante();
  const estCourante = c && c.id === e.id, lecture = fait(e.id) || enLecture();
  const premiere = ETAPES.find(y => y.partie === e.partie) === e;
  let h = `<section class="g-carte g-etape" data-type="${e.type}">
    <p class="g-ou">${esc(p.court)}${e.q ? " · question " + esc(e.q) : ""}${e.facultatif ? " · facultative" : ""}</p>
    <h2>${typo(e.titre)}</h2>`;
  if (premiere) h += `<p class="g-moment">${typo(p.titre)} — ${typo(p.moment)}</p>`;
  if (e.moment) h += `<p class="g-moment">${typo(e.moment)}</p>`;
  if (e.type === "visa") h += rendreVisa(e, x, lecture);
  else {
    if (e.image) h += `<figure class="g-fig">${img(e.image)}</figure>`;
    if (e.photos) h += `<div class="g-photos">${e.photos.map(k => img(k, "g-photo")).join("")}</div>`;
    h += `<div class="g-consigne">${typo(String(e.html || "").replace("{{MATERIEL}}", ACT.materiel))}</div>`;
    if (e.image2) h += `<figure class="g-fig">${img(e.image2)}</figure>`;
    if (e.type === "info") h += lecture ? '<p class="g-ok">✓ Fait</p>' : `<button type="button" class="principal" id="valider">${typo(e.bouton || "C'est fait")}</button>`;
    if (e.type === "exo") h += rendreExo(e, x, lecture);
    if (e.type === "prevision") h += rendrePrevision(e, x, lecture);
    if (e.type === "texte") h += rendreTexte(e, x, lecture);
  }
  if (x.p) h += `<p class="g-discret">${typo("Étape débloquée par le professeur.")}</p>`;
  if (fait(e.id)) {
    const suiv = ETAPES.slice(e.rang + 1).find(y => accessible(y));
    if (suiv) h += `<button type="button" class="principal" data-aller="${suiv.id}">Étape suivante →</button>`;
  }
  h += "</section>";
  if (!lecture && estCourante || (!lecture && toutOuvert())) h += rendreAides(e, x);
  else if (e.ressources && e.ressources.length) h += rendreRessources(e);
  return h;
}
function rendreChamp(f, x, lecture) {
  const v = x.r && x.r[f.id] !== undefined ? fmt(Number(x.r[f.id]), 4).replace(/ /g, "") : "";
  return `<label class="g-champ"><span class="l">${typo(f.label)}</span><span class="z"><input type="text" inputmode="decimal" autocomplete="off" data-champ="${f.id}" value="${esc(v)}" ${lecture ? "disabled" : ""}><span class="u">${esc(f.unite || "")}</span></span></label>`;
}
function rendreQuestion(q, k, x, lecture, prevision) {
  const rep = x.r && x.r["q" + k];
  return `<fieldset class="g-q" data-q="${k}"><legend>${typo(q.texte)}</legend>` + q.choix.map((c, j) =>
    `<label class="g-choix${rep === j ? " pris" : ""}${lecture && !prevision && j === q.bonne ? " bon" : ""}"><input type="radio" name="q${k}" value="${j}" ${rep === j ? "checked" : ""} ${lecture ? "disabled" : ""}><span>${typo(c)}</span></label>`).join("")
    + "</fieldset>";
}
function rendreExo(e, x, lecture) {
  let h = '<form class="g-form" id="form" autocomplete="off" novalidate>';
  const champs = e.champs || [], qs = e.questions || [];
  const blocChamps = () => {
    if (!champs.length) return "";
    if (e.tableau) {
      // une ligne par colonne de la feuille (ici, une fréquence) : on relève tout à une fréquence, puis on passe à la suivante
      const T = e.tableau;
      let t = '<div class="g-tab"><table><thead><tr><th></th>' + T.titres.map(c => `<th>${typo(c)}</th>`).join("") + "</tr></thead><tbody>";
      T.colonnes.forEach((col, k) => {
        t += `<tr><th>${typo(col)}</th>` + T.lignes.map(l => {
          const id = l[k], v = x.r && x.r[id] !== undefined ? fmt(Number(x.r[id]), 4).replace(/\u202f/g, "") : "";
          return `<td><input type="text" inputmode="decimal" autocomplete="off" data-champ="${id}" value="${esc(v)}" aria-label="${esc(((champs.find(f => f.id === id) || {}).label || id).replace(/<[^>]+>/g, ""))}" ${lecture ? "disabled" : ""}></td>`;
        }).join("") + "</tr>";
      });
      return t + "</tbody></table></div>";
    }
    return champs.map(f => rendreChamp(f, x, lecture)).join("");
  };
  const blocQs = () => qs.map((q, k) => rendreQuestion(q, k, x, lecture, false)).join("");
  h += e.questionsAvant ? blocQs() + blocChamps() : blocChamps() + blocQs();
  h += '<div class="g-retour" id="retour" role="status"></div>';
  if (!lecture) {
    h += '<button type="submit" class="principal" id="verifier">Vérifier</button>';
    if (e.maintenir && (x.n || 0) >= 3 && x.horsPlage) h += `<button type="button" class="secondaire-bouton" id="maintenir">${typo("Je maintiens mes mesures (le professeur le verra)")}</button>`;
    if (e.facultatif) h += `<button type="button" class="secondaire-bouton" id="passer">${typo("Passer cette question facultative")}</button>`;
  }
  h += "</form>";
  if (fait(e.id)) {
    if (x.m) h += `<p class="g-discret">${typo("Mesures maintenues malgré l'alerte de cohérence.")}</p>`;
    if (x.s) h += `<p class="g-discret">${typo("Question passée.")}</p>`;
    if (e.prevision) h += rendreRappelPrevision(e.prevision);
    if (e.apres) h += `<div class="g-apres">${typo(e.apres)}</div>`;
  }
  return h;
}
function rendreRappelPrevision(pid) {
  const pe = PAR_ID.get(pid), px = S.moi.e[pid];
  if (!pe || !px || !px.r) return "";
  const rep = pe.questions.map((q, k) => px.r["q" + k] !== undefined ? q.choix[px.r["q" + k]] : null).filter(Boolean);
  return `<div class="g-prev"><b>${typo("Ta prévision (question " + pe.q + ") :")}</b> ${typo(rep.join(" ; "))}${px.r.j ? `<br><i>${esc(px.r.j)}</i>` : ""}<br>${typo("Compare-la à ta mesure.")}</div>`;
}
function rendrePrevision(e, x, lecture) {
  let h = '<form class="g-form" id="form" autocomplete="off" novalidate>';
  h += (e.questions || []).map((q, k) => rendreQuestion(q, k, x, lecture, true)).join("");
  if (e.justification) h += `<label class="g-texte"><span>${typo(e.invite || "Justifie en une phrase.")}</span><textarea id="just" rows="3" ${lecture ? "disabled" : ""}>${esc(x.r && x.r.j || "")}</textarea></label>`;
  h += '<div class="g-retour" id="retour" role="status"></div>';
  h += lecture ? `<p class="g-ok">${typo("✓ Prévision enregistrée : la mesure tranchera.")}</p>` : '<button type="submit" class="principal" id="verifier">Enregistrer ma prévision</button>';
  return h + "</form>";
}
function rendreTexte(e, x, lecture) {
  let h = `<form class="g-form" id="form" autocomplete="off" novalidate><label class="g-texte"><span>${e.conclusion ? "Ta conclusion" : "Ta réponse"}</span>
    <textarea id="texte" rows="${e.conclusion ? 6 : 3}" ${lecture ? "disabled" : ""}>${esc(x.r && x.r.t || "")}</textarea></label>
    <div class="g-retour" id="retour" role="status"></div>`;
  if (!lecture) h += `<button type="submit" class="principal" id="verifier">${e.conclusion ? "Valider ma conclusion" : "Valider ma réponse"}</button>`;
  h += "</form>";
  if (fait(e.id) && e.reponse && montrerReponses()) h += `<div class="g-apres"><b>${e.conclusion ? "Conclusion attendue" : "Réponse attendue"}</b>${typo(e.reponse)}<p class="g-discret">${typo("Compare avec la tienne : complète-la sur ta feuille si besoin.")}</p></div>`;
  return h;
}
function rendreVisa(e, x, lecture) {
  const V = ACT.visas[e.visa], d = S.moi.demande, attend = d && d.visa === e.visa;
  let h = `<figure class="g-fig">${img(V.image)}</figure><p>${typo("Avant d'appeler le professeur, vérifie chaque point et coche-le.")}</p><form class="g-form" id="form" novalidate>`;
  h += V.eleve.map((t, k) => `<label class="g-coche"><input type="checkbox" data-c="${k}" ${lecture || attend ? "checked disabled" : ""}><span>${typo(t)}</span></label>`).join("");
  if (x.refus && !lecture && !attend) h += `<p class="g-alerte">${typo("À reprendre" + (x.refus.motif ? " : " + x.refus.motif : "") + ". Corrige, puis redemande le visa.")}</p>`;
  if (lecture) h += `<p class="g-ok">${typo(x.r && x.r.par === "code" ? "✓ Visa accordé (code du professeur)." : "✓ Visa accordé.")}</p>`;
  else if (S.local) h += `<button type="submit" class="principal" id="verifier">${typo("Le professeur a vérifié : je continue")}</button>`;
  else if (attend) h += `<div class="g-attend"><span class="tourne" aria-hidden="true"></span>${typo("Visa demandé : le professeur arrive. Ne mets pas sous tension.")}</div><button type="button" class="secondaire-bouton" id="annuler">Annuler la demande</button>`;
  else h += '<button type="submit" class="principal" id="verifier" disabled>Demander le visa</button>';
  if (!lecture && !S.local) h += `<details class="g-code"><summary>${typo("Pas de réseau ? Code donné par le professeur")}</summary>
      <label class="g-champ"><span class="l">Code</span><span class="z"><input type="text" id="code" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="8"></span></label>
      <button type="button" class="secondaire-bouton" id="code-ok">Valider le code</button></details>`;
  return h + '<div class="g-retour" id="retour" role="status"></div></form>';
}
function rendreRessources(e) {
  return `<section class="g-aides"><h3>Ressources du site</h3><div class="g-res">${e.ressources.map((r, k) =>
    `<a href="${esc(r.u)}" target="_blank" rel="noopener" data-res="${k}">${typo(r.t)}</a>`).join("")}</div></section>`;
}
function niveauDispo(e, x, k) {
  if (!e.aides || k > e.aides.length) return { ok: false };
  if (k > 1 && (x.a || 0) < k - 1) return { ok: false, pourquoi: "après l'aide " + (k - 1) };
  const s = SEUILS[k], essais = x.n || 0, min = x.t0 ? (maintenant() - x.t0) / 60000 : 0;
  const sansEssai = e.type === "info" || e.type === "texte" || e.type === "visa";
  if (essais >= s.n) return { ok: true };
  if ((sansEssai || s.min) && s.min && min >= s.min) return { ok: true };
  return { ok: false, pourquoi: sansEssai ? "dans " + Math.max(1, Math.ceil(s.min - min)) + " min" : (s.n === 1 ? "après un essai" : "après " + s.n + " essais") };
}
function rendreAides(e, x) {
  const n = e.aides ? e.aides.length : 0;
  if (!n && !(e.ressources && e.ressources.length)) return "";
  let h = '<section class="g-aides" aria-label="Aides">';
  if (n) {
    h += `<h3>${typo("Besoin d'aide ?")}</h3><div class="g-niveaux">`;
    for (let k = 1; k <= n; k++) {
      const ouverte = (x.a || 0) >= k, d = niveauDispo(e, x, k);
      h += ouverte ? `<div class="g-aide ouverte"><b>Aide ${k}</b>${typo(e.aides[k - 1])}</div>`
        : `<button type="button" class="g-aide" data-aide="${k}" ${d.ok ? "" : "disabled"}><b>Aide ${k}</b><span>${d.ok ? (modeEvalue() && COUT[k] ? typo("ouvrir (coûte " + fmt(COUT[k], 1) + " point)") : "ouvrir") : typo(d.pourquoi || "")}</span></button>`;
    }
    h += "</div>";
  }
  if (e.ressources && e.ressources.length) h += `<p class="g-res-t">Ressources du site</p><div class="g-res">${e.ressources.map((r, k) =>
    `<a href="${esc(r.u)}" target="_blank" rel="noopener" data-res="${k}">${typo(r.t)}</a>`).join("")}</div>`;
  return h + "</section>";
}

/* ------------------------------------------------------------------ actions */
function brancher(e) {
  app.querySelectorAll("[data-aller]").forEach(b => b.onclick = () => { if (b.dataset.aller) { S.vue = b.dataset.aller; rendre(); window.scrollTo(0, 0); } });
  const v = $("valider"); if (v) v.onclick = () => terminer(e, {});
  app.querySelectorAll("[data-aide]").forEach(b => b.onclick = () => ouvrirAide(e, Number(b.dataset.aide)));
  app.querySelectorAll("[data-res]").forEach(a => a.addEventListener("click", () => { const x = E(e.id); x.l = (x.l || 0) + 1; sauver(); }));
  const f = $("form"); if (!f) return;
  if (e.type === "visa") brancherVisa(e, f);
  else f.onsubmit = ev => { ev.preventDefault(); verifier(e); };
  const m = $("maintenir"); if (m) m.onclick = () => { const x = E(e.id); x.m = 1; x.r = lireSaisies(e).v; terminer(e, x.r, true); };
  const p = $("passer"); if (p) p.onclick = () => { const x = E(e.id); x.s = 1; terminer(e, {}, true); };
}
function ouvrirAide(e, k) {
  const x = E(e.id);
  if (!niveauDispo(e, x, k).ok) return;
  if (modeEvalue() && COUT[k] && !confirm("Cette aide coûte " + fmt(COUT[k], 1).replace(".", ",") + " point. L'ouvrir ?")) return;
  x.a = Math.max(x.a || 0, k);
  if (modeEvalue() && COUT[k]) x.ac = Math.max(x.ac || 0, COUT[k]);
  x.ta = Object.assign({}, x.ta || {}, { [k]: maintenant() });
  sauver(); rendre();
  const z = app.querySelector(".g-aide.ouverte:last-of-type"); if (z) z.scrollIntoView({ block: "nearest" });
}
function lireSaisies(e) {
  const v = {}, vides = [];
  (e.champs || []).forEach(f => {
    const i = app.querySelector(`[data-champ="${f.id}"]`);
    const n = lireNombre(i ? i.value : "");
    if (isNaN(n)) vides.push(f.id); else v[f.id] = n;
  });
  (e.questions || []).forEach((q, k) => {
    const c = app.querySelector(`input[name="q${k}"]:checked`);
    if (c) v["q" + k] = Number(c.value); else vides.push("q" + k);
  });
  return { v, vides };
}
function marquer(ids, cls) {
  ids.forEach(id => {
    const el = /^q\d+$/.test(id) ? app.querySelector(`fieldset[data-q="${id.slice(1)}"]`) : app.querySelector(`[data-champ="${id}"]`);
    if (el) el.classList.add(cls);
  });
}
function retour(html, ok) { const r = $("retour"); if (r) { r.innerHTML = typo(html); r.className = "g-retour " + (ok ? "ok" : "ko"); } }
function verifier(e) {
  const x = E(e.id);
  if (e.type === "texte") {
    const t = ($("texte").value || "").trim();
    if (t.length < (e.min || 20)) { retour("Développe un peu plus ta réponse (au moins " + (e.min || 20) + " caractères).", false); return; }
    x.r = { t: t.slice(0, 2000) }; terminer(e, x.r); return;
  }
  if (e.type === "prevision") {
    const s = lireSaisies(e);
    if (s.vides.length) { marquer(s.vides, "manque"); retour("Choisis une réponse à chaque question.", false); return; }
    const j = $("just") ? $("just").value.trim() : "";
    if (e.justification && j.length < 10) { retour("Écris ta justification en une phrase.", false); return; }
    x.r = Object.assign(s.v, j ? { j: j.slice(0, 600) } : {}); terminer(e, x.r); return;
  }
  // exo
  app.querySelectorAll(".manque,.faux").forEach(el => el.classList.remove("manque", "faux"));
  const s = lireSaisies(e);
  if (s.vides.length) { marquer(s.vides, "manque"); retour("Complète tout ce qui est encadré.", false); return; }
  const A = api(s.v), msgs = [], faux = [], types = new Set();
  for (const f of e.champs || []) {
    const val = s.v[f.id];
    if (f.plage && (val < f.plage[0] || val > f.plage[1])) { faux.push(f.id); types.add("mesure"); msgs.push(f.hors || e.hors || "Cette valeur surprend : refais la mesure."); continue; }
    if (f.verif) { const m = f.verif(val, A); if (m) { faux.push(f.id); types.add("calcul"); msgs.push(m); continue; } }
    if (f.attendu) {
      const att = f.attendu(A);
      if (!isFinite(att)) continue;            // valeur de départ manquante (étape débloquée sans mesure) : non vérifiable
      if (!proche(val, att, f.tol, f.tolA)) { faux.push(f.id); types.add("calcul"); msgs.push(f.faux || "Refais ce calcul."); }
    }
  }
  if (!faux.length && e.verif) { const m = e.verif(A); if (m) { types.add("mesure"); msgs.push(m); faux.push(...(e.champs || []).map(f => f.id)); } }
  (e.questions || []).forEach((q, k) => {
    if (s.v["q" + k] !== q.bonne) { faux.push("q" + k); types.add("question"); msgs.push((q.retours && q.retours[s.v["q" + k]]) || "Relis la question."); }
  });
  x.n = (x.n || 0) + 1;
  x.r = s.v;
  if (faux.length) {
    x.horsPlage = types.size === 1 && types.has("mesure") ? 1 : 0;   // seule une alerte de mesure peut être « maintenue »
    x.ko = (x.ko || 0) + 1;
    sauver();
    rendre();
    marquer([...new Set(faux)], "faux");
    retour([...new Set(msgs)].map(m => "<p>" + m + "</p>").join(""), false);
    return;
  }
  terminer(e, s.v);
}
function terminer(e, r, force) {
  const x = E(e.id);
  if (r && Object.keys(r).length) x.r = r;
  x.ok = 1; x.t1 = maintenant(); if (!x.t0) x.t0 = x.t1;
  delete x.horsPlage;
  sauver(true);
  if (e.type === "exo" || e.type === "texte" || e.type === "prevision" || force) { S.vue = e.id; rendre(); const r2 = $("retour"); if (r2 && e.type === "exo" && !force) { r2.innerHTML = "✓ Juste."; r2.className = "g-retour ok"; } }
  else { const c = courante(); S.vue = c ? c.id : e.id; rendre(); }
  window.scrollTo({ top: 0 });
}
function brancherVisa(e, f) {
  const coches = [...f.querySelectorAll("input[data-c]")], b = $("verifier");
  const maj = () => { if (b && !S.local) b.disabled = !coches.every(c => c.checked); };
  coches.forEach(c => c.onchange = maj); maj();
  f.onsubmit = ev => {
    ev.preventDefault();
    if (S.local) { const x = E(e.id); x.r = { par: "local" }; terminer(e, x.r); return; }
    if (!coches.every(c => c.checked)) return;
    S.moi.demande = { visa: e.visa, t: maintenant() };
    const x = E(e.id); x.dem = (x.dem || 0) + 1; delete x.refus;
    sauver(true); rendre();
  };
  const an = $("annuler"); if (an) an.onclick = () => { S.moi.demande = null; sauver(true); rendre(); };
  const ok = $("code-ok"); if (ok) ok.onclick = () => verifierCode(e);
}
const TE = new TextEncoder();
function b64(buf) { const u = new Uint8Array(buf); let s = ""; for (let i = 0; i < u.length; i++) s += String.fromCharCode(u[i]); return btoa(s); }
/* même calcul dans prof/seance.js : PBKDF2-SHA256(code, sel|visa, tours), 16 octets */
async function empreinte(code, sel, visa, tours) {
  const k = await crypto.subtle.importKey("raw", TE.encode(code), "PBKDF2", false, ["deriveBits"]);
  return b64(await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: TE.encode(sel + "|" + visa), iterations: tours }, k, 128));
}
async function verifierCode(e) {
  const brut = ($("code").value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  const sec = S.seance && S.seance.secours;
  const x = E(e.id);
  if (!brut) return;
  if (!sec || !sec.h || !sec.h[e.visa] || sec.date !== jour()) { retour("Pas de code de secours pour aujourd'hui : appelle le professeur.", false); return; }
  x.c = (x.c || 0) + 1;
  let bon = false;
  try { bon = (await empreinte(brut, sec.sel, e.visa, sec.tours)) === sec.h[e.visa]; } catch (err) { }
  if (!bon) { sauver(); retour("Code incorrect.", false); return; }
  x.r = { par: "code" }; S.moi.demande = null; terminer(e, x.r);
}
function jour() { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }

/* ------------------------------------------------------------------ démarrage */
const PARAM = (new URLSearchParams(location.search).get("a") || "").trim();
const MOTIF = /^(1sti2d|bts-crsa|bts-et|bts-tsma)\.([a-z0-9-]{1,40})$/;
function panne(txt) { app.innerHTML = `<section class="g-carte"><h2>${typo("Activité indisponible")}</h2><p>${typo(txt)}</p></section>`; }
function executer(texte) { const s = document.createElement("script"); s.textContent = texte; document.head.appendChild(s); s.remove(); }
async function chargerContenu(fil) {
  const C = window.NerudaCles;
  let t;
  if (C && C.enLigne) t = await C.texte("./" + PARAM + ".js.enc", "activites/" + PARAM + ".js", fil);
  else { const r = await fetch("./" + PARAM + ".js", { cache: "no-cache" }); if (!r.ok) throw new Error("absent"); t = await r.text(); }
  executer(t);
  if (!window.ACTIVITE || !Array.isArray(window.ACTIVITE.etapes)) throw new Error("contenu illisible");
  installer(window.ACTIVITE);
}
async function demarrer() {
  const m = MOTIF.exec(PARAM);
  if (!m) { panne("L'adresse ne précise pas l'activité : passe par le QR code ou le lien donné par le professeur."); return; }
  const fil = m[1], C = window.NerudaCles;
  if (!C || !window.crypto || !crypto.subtle) { panne("Ce navigateur ne sait pas ouvrir les activités du site : essaie Chrome, Firefox ou Safari à jour."); return; }
  await C.pret();
  let NC = null;
  try { NC = await window.NerudaConnexion.attendreCompte(8000); } catch (e) { NC = null; }
  if (NC) { try { await Promise.race([NC.pret, new Promise((_, ko) => setTimeout(() => ko(new Error("lent")), 9000))]); } catch (e) { } }
  if (C.enLigne && !C.cle(fil)) {
    app.innerHTML = `<section class="g-carte"><p>${typo(C.noms().length ? "Ton compte n'ouvre pas cette activité : elle est réservée à une autre classe." : "Connecte-toi avec ton compte du site pour commencer.")}</p><div id="connexion"></div></section>`;
    window.NerudaConnexion.monter($("connexion"), { apres: () => { if (C.cle(fil)) location.reload(); } });
    return;
  }
  try { await chargerContenu(fil); }
  catch (e) { panne(e && e.message === "absent" ? "Cette activité n'est pas sur le site." : "Le contenu de l'activité n'a pas pu être ouvert. Reconnecte-toi, puis recharge la page."); return; }
  const et = NC ? NC.etat() : null;
  S.compte = et;
  if (!et || !et.connecte || !et.uid) { S.local = true; S.raison = NC ? "sans-compte" : "sans-reseau"; }
  else if (et.prof || et.collegue || et.invite) { S.local = false; S.apercu = true; }
  else if (!et.classe) { S.local = true; S.raison = "sans-classe"; }
  else S.local = false;
  S.moi = lireLocal() || vierge();
  if (!S.local && !S.apercu) {
    S.sid = et.classe + "--" + ACT.id;
    try {
      const [{ getApp }, F] = await Promise.all([import(SDK + "firebase-app.js"), import(SDK + "firebase-firestore.js")]);
      S.F = F; S.db = F.getFirestore(getApp());
      try {
        const d = await F.getDoc(F.doc(S.db, "seances", S.sid, "eleves", et.uid));
        if (d.exists()) S.moi = fusionner(S.moi, d.data());
      } catch (e) { }
      S.moi.uid = et.uid; S.moi.identifiant = et.identifiant || ""; S.moi.prenom = et.prenom || "";
      ecouterSeance(); ecouterVisas();
    } catch (e) {
      console.warn("base indisponible", e && e.message);
      S.local = true; S.raison = "sans-reseau";
    }
  }
  rendre();
}
/* écoutes de la base : en cas d'erreur (réseau, règles pas encore publiées), on réessaie toutes les 20 s */
function ecouterSeance() {
  const F = S.F, et = S.compte;
  F.onSnapshot(F.doc(S.db, "seances", S.sid), snap => {
    const avant = S.seance && S.seance.etat;
    S.seance = snap.exists() ? snap.data() : null; S.chargee = true;
    if (S.seance && S.seance.etat === "ouverte" && avant !== "ouverte") sauver(true);
    rendreSiCalme();
  }, err => {
    console.warn("séance illisible", err && err.code);
    S.chargee = true; rendreSiCalme();
    setTimeout(ecouterSeance, 20000);
  });
}
function ecouterVisas() {
  const F = S.F, et = S.compte;
  F.onSnapshot(F.doc(S.db, "seances", S.sid, "visas", et.uid), snap => {
    S.visas = snap.exists() ? snap.data() : null;
    appliquerProf(); rendreSiCalme();
  }, err => { console.warn("visas illisibles", err && err.code); setTimeout(ecouterVisas, 20000); });
}
/* une mise à jour venue de la base ne doit pas effacer ce que l'élève est en train de taper */
function rendreSiCalme() {
  const a = document.activeElement;
  if (a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA") && app.contains(a) && a.type !== "radio" && a.type !== "checkbox") {
    clearTimeout(rendreSiCalme.m); rendreSiCalme.m = setTimeout(rendreSiCalme, 1500); return;
  }
  rendre();
}
window.__GUIDEE = { S, get ETAPES() { return ETAPES; }, rendre, fait, courante, accessible, empreinte, lireNombre, proche };
demarrer().catch(e => { console.error(e); app.innerHTML = '<p class="g-alerte">L\'activité n\'a pas pu démarrer. Recharge la page.</p>'; });
