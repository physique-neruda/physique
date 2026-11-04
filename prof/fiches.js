/* =====================================================================
   fiches.js — Fiches des copies corrigées (espace prof, site v64, novembre 2026)

   Format du fichier importé (« neruda-fiches », version 1), produit après la correction des copies :
     {
       "format": "neruda-fiches", "version": 1,
       "epreuve": {
         "id": "et1a-test-adm0bis",            minuscules, chiffres, tirets (3 à 64)
         "classe": "et1a",                      code de classe de la liste des élèves
         "titre": "Test — ADM 0 bis : instruments de mesure",
         "court": "Test ADM 0 bis", "nature": "Test écrit, 30 min", "date": "2026-11-05",
         "bareme": 20,                          la note affichée est sur ce barème
         "competences": {"C13": "Réaliser des mesures…"},          (libellés, facultatif)
         "questions": [ {"q": "1a", "intitule": "Choisir l'appareil", "max": 2,
                         "competences": ["C13"], "detail": "1 pt le calibre, 1 pt la justification"} ]
       },
       "fiches": [
         {"eleve": "DURAND Hugo", "points": {"1a": 1.5, "1b": 2}, "appreciation": "…", "niveaux": {"C13": "N3"}},
         {"identifiant": "lea.m", "absent": true}
       ]
     }
   Chaque fiche désigne l'élève par le nom écrit sur la copie (« eleve », rapproché ici de la liste chiffrée)
   ou par son identifiant. La note est la somme des points, ramenée au barème si le total des questions en
   diffère ; un champ « note » du fichier n'est qu'un contrôle. Tout champ PAP (pap, coef, note_pap…) est
   écarté : ni coefficient ni note après aménagement dans la base.

   Base (règles v4) :
     epreuves/{id}                      {classe, groupe, titre, court, nature, date, bareme, type: "devoir",
                                         questions, competences, publiee, maj}  — lu par les élèves de la classe
     epreuves/{id}/copies/{identifiant} {publie, note, bareme, date, appreciation, points:[{q, pts}],
                                         niveaux, absent, maj}                  — lu par cet élève seul
   ===================================================================== */
import { db, doc, getDoc, collection, writeBatch, getDocs, garde, eleves, esc, fr, dateValide, toast,
         ouvrirFeuille, fermerFeuille, confirmer, telecharger } from "./socle.js";

const $ = id => document.getElementById(id);
const F = window.NerudaFiche;
let R = null;                 // liste des élèves déchiffrée {classes, eleves}
let IMP = null;               // fichier importé et vérifié
let PUBLIES = [];             // devoirs publiés [{id, ep, n}]

const PAP = /^(pap|coef|coefficient|coefficients|amenagements?|aménagements?|note_?pap|note_?apres_?pap|note_?officielle|majoration|tiers_?temps)$/i;
const CODE = /^[A-Za-z0-9.]{1,12}$/;
const libClasse = c => (R && R.classes[c] && R.classes[c].libelle) || c;
function norm(s) { return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(); }
function jetons(s) { return norm(s).split(" ").filter(Boolean).sort().join(" "); }
const nomDe = e => e ? e.nom + " " + e.prenom : "";
const arrondi = x => Math.round(Number(x) * 100) / 100;
const nb = x => F.nombre(x);

// ------------------------------------------------------------------ rapprochement nom écrit → élève
function trouver(nom, liste) {
  const n = norm(nom), j = jetons(nom);
  if (!n) return null;
  let r = liste.filter(e => norm(e.nom + " " + e.prenom) === n || norm(e.prenom + " " + e.nom) === n || norm(e.affiche) === n);
  if (r.length === 1) return r[0];
  r = liste.filter(e => jetons(e.nom + " " + e.prenom) === j);
  if (r.length === 1) return r[0];
  // « DURAND H. », « Hugo D. » : nom entier + initiale du prénom, ou prénom entier + initiale du nom
  const t = n.split(" ");
  if (t.length === 2) {
    r = liste.filter(e => {
      const nn = norm(e.nom), pp = norm(e.prenom);
      return (t[0] === nn && pp.startsWith(t[1])) || (t[1] === nn && pp.startsWith(t[0]))
        || (t[0] === pp && nn.startsWith(t[1])) || (t[1] === pp && nn.startsWith(t[0]));
    });
    if (r.length === 1) return r[0];
  }
  // un seul mot : le nom de famille, s'il est unique dans la classe
  if (t.length === 1) { r = liste.filter(e => norm(e.nom) === n); if (r.length === 1) return r[0]; }
  return null;
}

// ------------------------------------------------------------------ noms de famille dans un texte
/* Les noms de famille ne vont jamais dans la base : on cherche, mot entier, ceux de TOUTE la classe. */
function nomsDans(texte, liste) {
  const t = " " + norm(texte) + " ", vus = [];
  liste.forEach(e => { const n = norm(e.nom); if (n.length >= 2 && t.indexOf(" " + n + " ") >= 0 && vus.indexOf(e.nom) < 0) vus.push(e.nom); });
  return vus;
}

// ------------------------------------------------------------------ lecture et contrôle du fichier
function papDans(o) { return !!(o && typeof o === "object" && Object.keys(o).some(k => PAP.test(k))); }
function lireFichier(texte) {
  let d;
  try { d = JSON.parse(texte); } catch (e) { throw new Error("Fichier illisible : ce n'est pas du JSON."); }
  if (!d || d.format !== "neruda-fiches") throw new Error("Ce n'est pas un fichier de fiches (format « neruda-fiches » attendu).");
  if (d.version !== 1) throw new Error("Version de fichier inconnue (" + esc(d.version) + ") : la 1 est attendue.");
  const E = d.epreuve || {}, erreurs = [], avert = [];
  let pap = papDans(d) || papDans(E);
  const ep = {
    id: String(E.id || "").trim(), classe: String(E.classe || "").trim(), groupe: String(E.groupe || "").trim().slice(0, 20),
    titre: String(E.titre || "").trim().slice(0, 200), court: String(E.court || "").trim().slice(0, 60),
    nature: String(E.nature || "").trim().slice(0, 120), date: String(E.date || "").trim(),
    bareme: Number(E.bareme === undefined || E.bareme === null ? 20 : E.bareme), grille: {}, questions: []
  };
  if (!/^[a-z0-9][a-z0-9-]{2,63}$/.test(ep.id)) erreurs.push("Identifiant du devoir invalide (minuscules, chiffres et tirets, 3 à 64 caractères).");
  if (!R.classes[ep.classe]) erreurs.push("Classe inconnue : « " + ep.classe + " ».");
  if (!ep.titre) erreurs.push("Titre du devoir manquant.");
  if (!dateValide(ep.date)) erreurs.push("Date du devoir invalide (AAAA-MM-JJ attendu).");
  if (!(ep.bareme > 0 && ep.bareme <= 200)) erreurs.push("Barème invalide.");
  if (E.competences && typeof E.competences === "object")
    for (const [c, l] of Object.entries(E.competences)) if (CODE.test(c)) ep.grille[c] = String(l || "").trim().slice(0, 200);
  const vus = new Set();
  (Array.isArray(E.questions) ? E.questions : []).forEach((q, i) => {
    q = q || {};
    if (papDans(q)) pap = true;
    const x = { q: String(q.q === undefined ? "" : q.q).trim().slice(0, 12), intitule: String(q.intitule || "").trim().slice(0, 200),
                max: arrondi(q.max) };
    if (!x.q) { erreurs.push("Question n° " + (i + 1) + " sans numéro."); return; }
    if (vus.has(x.q)) { erreurs.push("Question « " + x.q + " » en double."); return; }
    vus.add(x.q);
    if (!(x.max > 0 && x.max <= 100)) erreurs.push("Question « " + x.q + " » : barème invalide.");
    const comp = Array.isArray(q.competences) ? q.competences.map(String).filter(c => CODE.test(c)).slice(0, 6) : [];
    if (comp.length) x.competences = comp;
    if (q.detail) x.detail = String(q.detail).trim().slice(0, 600);
    ep.questions.push(x);
  });
  if (!ep.questions.length) erreurs.push("Aucune question dans le barème.");
  const total = arrondi(ep.questions.reduce((s, q) => s + (q.max || 0), 0));
  if (total && Math.abs(total - ep.bareme) > 1e-9) avert.push("Total des questions : " + nb(total) + " points ; les notes sont ramenées sur " + nb(ep.bareme) + ".");

  const classe = R.eleves.filter(e => e.classe === ep.classe);
  const fiches = [];
  (Array.isArray(d.fiches) ? d.fiches : []).forEach((f, i) => {
    f = f || {};
    if (papDans(f)) pap = true;
    const r = { rang: i, ecrit: String(f.eleve || f.nom || "").trim().slice(0, 120), ident: String(f.identifiant || "").trim().toLowerCase(),
                eleve: null, absent: f.absent === true, points: {}, niveaux: {}, appreciation: "", erreurs: [], avert: [], noteFichier: f.note };
    if (r.ident) {
      const s = R.eleves.find(e => e.id === r.ident);
      if (!s) r.erreurs.push("identifiant inconnu « " + r.ident + " »");
      else if (s.classe !== ep.classe) r.erreurs.push("élève d'une autre classe");
      else r.eleve = s;
    } else if (r.ecrit) r.eleve = trouver(r.ecrit, classe);
    if (!r.absent) {
      let pts = f.points;
      if (Array.isArray(pts)) { const o = {}; pts.forEach(p => { if (p && p.q !== undefined) o[String(p.q)] = p.pts; }); pts = o; }
      if (pts && typeof pts === "object") for (const [q, v] of Object.entries(pts)) {
        const Q = ep.questions.find(x => x.q === String(q).trim());
        if (!Q) { r.erreurs.push("question inconnue « " + q + " »"); continue; }
        if (v === null || v === "" || v === undefined) continue;
        const n = Number(String(v).replace(",", "."));
        if (!isFinite(n) || n < 0 || n > Q.max + 1e-9) { r.erreurs.push("points impossibles à la question " + Q.q + " (" + v + ")"); continue; }
        r.points[Q.q] = arrondi(n);
      }
      const sans = ep.questions.filter(q => r.points[q.q] === undefined).map(q => q.q);
      if (sans.length && sans.length < ep.questions.length) r.avert.push("sans points : " + sans.join(", ") + " (comptées 0)");
      if (sans.length === ep.questions.length) r.erreurs.push("aucun point (absent ? ajouter \"absent\": true)");
    }
    if (f.niveaux && typeof f.niveaux === "object")
      for (const [c, n] of Object.entries(f.niveaux)) {
        if (CODE.test(c) && /^N[1-4]$/.test(String(n))) r.niveaux[c] = String(n); else r.avert.push("niveau ignoré (" + c + ")");
      }
    r.appreciation = String(f.appreciation || "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, 1500);
    fiches.push(r);
  });
  if (!fiches.length) erreurs.push("Aucune fiche dans le fichier.");
  if (pap) avert.push("Champs PAP écartés : ni coefficient ni note après aménagement dans la base (la note officielle reste dans Pronote).");
  // le devoir lui-même (titre, nature, intitulés, barème détaillé, libellés) ne doit nommer aucun élève
  const texteDevoir = [ep.titre, ep.court, ep.nature].concat(Object.values(ep.grille))
    .concat(ep.questions.map(q => (q.intitule || "") + " " + (q.detail || ""))).join(" | ");
  const nomsDevoir = nomsDans(texteDevoir, classe);
  IMP = { ep, fiches, erreurs, avert, classe, nomsDevoir, nomsDevoirAcceptes: false };
  verifierFiches();
}
/* contrôles qui dépendent du rapprochement (refaits après un choix manuel) */
function verifierFiches() {
  const { ep, fiches } = IMP;
  const compte = new Map();
  fiches.forEach(r => { if (r.eleve) compte.set(r.eleve.id, (compte.get(r.eleve.id) || 0) + 1); });
  fiches.forEach(r => {
    r.bloque = r.erreurs.slice();
    r.alertes = r.avert.slice();
    if (!r.eleve && !r.erreurs.length) r.bloque.push("élève non reconnu : le choisir dans la liste");
    if (r.eleve && compte.get(r.eleve.id) > 1) r.bloque.push("deux fiches pour le même élève");
    const c = F.calcul(ep.questions, r.points, ep.bareme);
    r.note = r.absent ? null : c.note;
    if (!r.absent && r.noteFichier !== undefined && r.noteFichier !== null && r.noteFichier !== "") {
      const n = Number(String(r.noteFichier).replace(",", "."));
      if (!isFinite(n) || Math.abs(n - c.note) > 0.01) r.alertes.push("note du fichier (" + r.noteFichier + ") différente de la somme des points (" + nb(c.note) + ") : la somme fait foi");
    }
    r.nomsTrouves = r.appreciation ? nomsDans(r.appreciation, IMP.classe) : [];
    if (r.nomsTrouves.length && !r.nomsAcceptes)
      r.bloque.push("l'appréciation contient « " + r.nomsTrouves.join(" », « ") + " », nom de famille d'un élève de la classe : "
        + "le retirer du fichier (les noms ne vont pas dans la base), ou cocher « ce n'est pas un nom »");
  });
}
function copieDe(r) {
  const ep = IMP.ep;
  return { publie: true, note: r.absent ? null : r.note, bareme: ep.bareme, date: ep.date, appreciation: r.appreciation,
           points: ep.questions.filter(q => r.points[q.q] !== undefined).map(q => ({ q: q.q, pts: r.points[q.q] })),
           niveaux: r.niveaux, absent: r.absent, maj: Date.now() };
}
function ficheEpreuve(ep) {
  return { classe: ep.classe, groupe: ep.groupe, titre: ep.titre, court: ep.court, nature: ep.nature, date: ep.date,
           bareme: ep.bareme, type: "devoir", questions: ep.questions, competences: ep.grille, publiee: true, maj: Date.now() };
}

// ------------------------------------------------------------------ aperçu
function rendreApercu() {
  const z = $("apercu");
  if (!IMP) { z.innerHTML = ""; return; }
  const { ep, fiches, erreurs, avert, classe } = IMP;
  const prets = fiches.filter(r => !r.bloque.length);
  const sansFiche = classe.filter(e => !fiches.some(r => r.eleve && r.eleve.id === e.id));
  const notes = prets.filter(r => !r.absent).map(r => r.note);
  let h = '<div class="zone-import"><b>' + esc(ep.titre) + '</b><div class="d" style="font-size:13px;color:var(--gris)">'
    + esc(libClasse(ep.classe)) + ' · ' + esc(fr(ep.date)) + ' · ' + ep.questions.length + ' questions · noté sur ' + esc(nb(ep.bareme))
    + ' · identifiant « ' + esc(ep.id) + ' »</div>';
  h += '<div class="recap"><div><b>' + prets.length + '</b>prêtes</div><div><b>' + (fiches.length - prets.length) + '</b>à corriger</div>'
    + '<div><b>' + sansFiche.length + '</b>élèves sans fiche</div>'
    + (notes.length ? '<div><b>' + nb(notes.reduce((s, x) => s + x, 0) / notes.length) + '</b>moyenne (aperçu)</div>' : '') + '</div>';
  if (erreurs.length || avert.length) h += '<ul class="alertes">' + erreurs.map(e => '<li class="err">' + esc(e) + '</li>').join("")
    + avert.map(e => '<li class="av">' + esc(e) + '</li>').join("") + '</ul>';
  const nomsBloquent = IMP.nomsDevoir.length && !IMP.nomsDevoirAcceptes;
  if (IMP.nomsDevoir.length) h += '<ul class="alertes"><li class="' + (nomsBloquent ? 'err' : 'av') + '">Le devoir (titre, intitulés ou barème) contient « '
    + IMP.nomsDevoir.map(esc).join(" », « ") + " », nom de famille d'un élève de la classe : le retirer du fichier. "
    + '<label><input type="checkbox" id="noms-devoir-ok"' + (IMP.nomsDevoirAcceptes ? ' checked' : '') + '> ce n\'est pas un nom</label></li></ul>';
  if (sansFiche.length) h += '<p class="aide" style="margin:6px 0">Sans fiche dans le fichier : ' + sansFiche.map(e => esc(nomDe(e))).join(", ") + '.</p>';
  h += '<div class="tab"><table><thead><tr><th>Élève</th><th>Note</th><th>Appréciation</th><th>État</th></tr></thead><tbody>';
  const libres = classe.filter(e => !fiches.some(r => r.eleve && r.eleve.id === e.id));
  fiches.slice().sort((a, b) => nomDe(a.eleve || { nom: a.ecrit || a.ident, prenom: "" }).localeCompare(nomDe(b.eleve || { nom: b.ecrit || b.ident, prenom: "" }), "fr"))
    .forEach(r => {
      let nom;
      if (r.eleve) nom = esc(nomDe(r.eleve)) + (r.ecrit && norm(r.ecrit) !== norm(nomDe(r.eleve)) ? '<div class="d" style="font-size:12px;color:var(--gris)">copie : ' + esc(r.ecrit) + '</div>' : '');
      else nom = '<b>' + esc(r.ecrit || r.ident || "?") + '</b><br><select data-choix="' + r.rang + '" aria-label="Choisir l\'élève"><option value="">Choisir l\'élève…</option>'
        + libres.map(e => '<option value="' + esc(e.id) + '">' + esc(nomDe(e)) + '</option>').join("") + '</select>';
      const etat = (r.bloque.length ? r.bloque.map(x => '<div class="err">✗ ' + esc(x) + '</div>').join("")
        : '<div style="color:var(--vert)">✓ prête</div>')
        + (r.nomsTrouves && r.nomsTrouves.length ? '<label class="d" style="display:block;font-size:12.5px"><input type="checkbox" data-nom-ok="' + r.rang + '"'
          + (r.nomsAcceptes ? ' checked' : '') + '> « ' + r.nomsTrouves.map(esc).join(" », « ") + " » n'est pas un nom ici</label>" : "");
      h += '<tr class="cl" data-rang="' + r.rang + '"><td class="nom">' + nom + '</td><td>' + (r.absent ? "abs." : esc(nb(r.note))) + '</td>'
        + '<td class="app">' + esc(r.appreciation.length > 90 ? r.appreciation.slice(0, 88) + "…" : r.appreciation) + '</td>'
        + '<td class="etat-f">' + etat + r.alertes.map(x => '<div class="av">⚠ ' + esc(x) + '</div>').join("") + '</td></tr>';
    });
  h += '</tbody></table></div>';
  const deja = PUBLIES.find(p => p.id === ep.id);
  h += '<p class="aide">Toucher une ligne : la fiche telle que l\'élève la lira.' + (deja ? ' <b>Ce devoir est déjà publié</b> (' + deja.n
    + ' fiches) : publier de nouveau remplace les fiches en ligne.' : '') + '</p>';
  h += '<button class="gros" type="button" id="publier"' + (erreurs.length || nomsBloquent || !prets.length ? " disabled" : "") + '>Publier aux élèves ('
    + prets.length + ' fiche' + (prets.length > 1 ? 's' : '') + ')</button>'
    + '<button class="gros sec" type="button" id="annuler-import">Abandonner cet import</button></div>';
  z.innerHTML = h;
  z.querySelectorAll("select[data-choix]").forEach(s => {
    s.onclick = ev => ev.stopPropagation();
    s.onchange = () => {
      const r = IMP.fiches.find(x => x.rang === +s.getAttribute("data-choix"));
      r.eleve = R.eleves.find(e => e.id === s.value) || null;
      verifierFiches(); rendreApercu();
    };
  });
  z.querySelectorAll("input[data-nom-ok]").forEach(c => {
    c.onclick = ev => ev.stopPropagation();
    c.onchange = () => { const r = IMP.fiches.find(x => x.rang === +c.getAttribute("data-nom-ok")); r.nomsAcceptes = c.checked; verifierFiches(); rendreApercu(); };
  });
  const nd = $("noms-devoir-ok");
  if (nd) nd.onchange = () => { IMP.nomsDevoirAcceptes = nd.checked; rendreApercu(); };
  z.querySelectorAll("tr[data-rang]").forEach(tr => tr.onclick = () => voirFiche(IMP.fiches.find(x => x.rang === +tr.getAttribute("data-rang"))));
  $("publier").onclick = publier;
  $("annuler-import").onclick = () => { IMP = null; rendreApercu(); };
}
function voirFiche(r) {
  if (!r) return;
  const ep = IMP.ep;
  const f = ouvrirFeuille('<p class="qui">' + esc(r.eleve ? nomDe(r.eleve) + " · " + r.eleve.id : (r.ecrit || r.ident)) + ' — aperçu de « Mon espace »</p>'
    + F.html({ titre: ep.titre, nature: ep.nature, date: ep.date, bareme: ep.bareme, questions: ep.questions, grille: ep.grille }, copieDe(r))
    + '<button class="gros sec" type="button" id="fermer-fiche">Fermer</button>');
  f.querySelector("#fermer-fiche").onclick = fermerFeuille;
}

// ------------------------------------------------------------------ publication
async function publier() {
  const { ep, fiches } = IMP;
  const prets = fiches.filter(r => !r.bloque.length);
  if (!prets.length) return;
  let existant = null;
  try { const d = await getDoc(doc(db, "epreuves", ep.id)); existant = d.exists() ? d.data() : null; } catch (e) { }
  if (existant && existant.type !== "devoir") return toast("« " + ep.id + " » est déjà une épreuve U51 : changer l'identifiant du devoir dans le fichier");
  const ecartees = fiches.length - prets.length;
  confirmer("Publier " + prets.length + " fiche" + (prets.length > 1 ? "s" : "") + " de « " + ep.titre + " » (" + libClasse(ep.classe) + ") ? "
    + "Chaque élève lira la sienne dans « Mon espace »." + (ecartees ? " " + ecartees + " fiche(s) à corriger ne partiront pas." : "")
    + (existant ? " Les fiches déjà en ligne pour ce devoir seront remplacées." : ""), async () => {
    const b = $("publier"); if (b) { b.disabled = true; b.textContent = "Publication…"; }
    try {
      const anciennes = existant ? (await getDocs(collection(db, "epreuves", ep.id, "copies"))).docs.map(d => d.id) : [];
      const gardees = new Set(prets.map(r => r.eleve.id));
      const lot = writeBatch(db);
      lot.set(doc(db, "epreuves", ep.id), ficheEpreuve(ep));
      prets.forEach(r => lot.set(doc(db, "epreuves", ep.id, "copies", r.eleve.id), copieDe(r)));
      anciennes.filter(id => !gardees.has(id)).forEach(id => lot.delete(doc(db, "epreuves", ep.id, "copies", id)));
      await lot.commit();
      toast(prets.length + " fiche" + (prets.length > 1 ? "s publiées" : " publiée"));
      IMP = null; rendreApercu(); await lirePublies();
    } catch (e) {
      console.error(e);
      toast("Publication refusée : " + ((e && e.code) || (e && e.message) || "erreur") + " (règles de la base v4 publiées ?)");
      if (b) { b.disabled = false; b.textContent = "Publier aux élèves"; }
    }
  }, { titre: "Publier aux élèves", libelle: "Publier", danger: false });
}

// ------------------------------------------------------------------ devoirs publiés
async function lirePublies() {
  const z = $("publies");
  try {
    const snap = await getDocs(collection(db, "epreuves"));
    const liste = snap.docs.filter(d => (d.data() || {}).type === "devoir").map(d => ({ id: d.id, ep: d.data() }));
    for (const p of liste) { try { p.copies = (await getDocs(collection(db, "epreuves", p.id, "copies"))).docs.map(d => ({ id: d.id, c: d.data() })); } catch (e) { p.copies = []; } p.n = p.copies.length; }
    liste.sort((a, b) => (a.ep.date < b.ep.date ? 1 : a.ep.date > b.ep.date ? -1 : 0));
    PUBLIES = liste;
  } catch (e) { z.innerHTML = '<p class="vide">Liste illisible (' + esc((e && e.code) || "réseau") + ').</p>'; return; }
  if (!PUBLIES.length) { z.innerHTML = '<p class="vide">Aucun devoir publié pour l\'instant.</p>'; if (IMP) rendreApercu(); return; }
  z.innerHTML = PUBLIES.map(p => '<div class="ligne"><div style="flex:1;min-width:0"><div class="pub-ligne"><b>' + esc(p.ep.titre) + '</b>'
    + '<span class="d">' + esc(libClasse(p.ep.classe)) + ' · ' + esc(fr(p.ep.date)) + ' · ' + p.n + ' fiche' + (p.n > 1 ? 's' : '') + '</span></div>'
    + '<div class="etats" style="margin-top:6px"><button class="mini" type="button" data-voir="' + esc(p.id) + '">Voir</button>'
    + '<button class="mini danger" type="button" data-retirer="' + esc(p.id) + '">Retirer de « Mon espace »</button></div></div></div>').join("");
  z.querySelectorAll("[data-voir]").forEach(b => b.onclick = () => voirPublie(PUBLIES.find(p => p.id === b.getAttribute("data-voir"))));
  z.querySelectorAll("[data-retirer]").forEach(b => b.onclick = () => retirer(PUBLIES.find(p => p.id === b.getAttribute("data-retirer"))));
  if (IMP) rendreApercu();
}
function voirPublie(p) {
  if (!p) return;
  const parId = new Map(R.eleves.map(e => [e.id, e]));
  const lignes = p.copies.slice().sort((a, b) => nomDe(parId.get(a.id) || { nom: a.id, prenom: "" }).localeCompare(nomDe(parId.get(b.id) || { nom: b.id, prenom: "" }), "fr"));
  const f = ouvrirFeuille('<b style="font-size:17px">' + esc(p.ep.titre) + '</b><p class="qui">' + esc(libClasse(p.ep.classe)) + ' · ' + esc(fr(p.ep.date)) + '</p>'
    + '<div class="tab"><table><thead><tr><th>Élève</th><th>Note</th><th></th></tr></thead><tbody>'
    + lignes.map(x => '<tr class="cl" data-id="' + esc(x.id) + '"><td class="nom">' + esc(parId.has(x.id) ? nomDe(parId.get(x.id)) : x.id) + '</td><td>'
      + (x.c.absent ? "abs." : esc(nb(x.c.note))) + '</td><td>' + (x.c.publie ? "✓" : "") + '</td></tr>').join("")
    + '</tbody></table></div><div id="une-fiche"></div><button class="gros sec" type="button" id="fermer-pub">Fermer</button>');
  f.querySelectorAll("tr[data-id]").forEach(tr => tr.onclick = () => {
    const x = p.copies.find(c => c.id === tr.getAttribute("data-id"));
    f.querySelector("#une-fiche").innerHTML = '<p class="qui">' + esc(parId.has(x.id) ? nomDe(parId.get(x.id)) : x.id) + '</p>'
      + F.html({ titre: p.ep.titre, nature: p.ep.nature, date: p.ep.date, bareme: p.ep.bareme, questions: p.ep.questions, grille: p.ep.competences }, x.c);
    f.querySelector("#une-fiche").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  f.querySelector("#fermer-pub").onclick = fermerFeuille;
}
function retirer(p) {
  if (!p) return;
  confirmer("Retirer « " + p.ep.titre + " » (" + libClasse(p.ep.classe) + ") : les " + p.n + " fiches disparaissent de « Mon espace ». "
    + "Le fichier de fiches, lui, reste sur l'ordinateur et peut être publié de nouveau.", async () => {
    try {
      const lot = writeBatch(db);
      p.copies.forEach(x => lot.delete(doc(db, "epreuves", p.id, "copies", x.id)));
      lot.delete(doc(db, "epreuves", p.id));
      await lot.commit();
      toast("Fiches retirées"); await lirePublies();
    } catch (e) { toast("Retrait refusé : " + ((e && e.code) || "erreur")); }
  }, { titre: "Retirer les fiches", libelle: "Retirer", saisie: "RETIRER" });
}

// ------------------------------------------------------------------ modèle vide (reste sur l'ordinateur : il contient des noms)
function modele() {
  const classes = Object.keys(R.classes).sort((a, b) => libClasse(a).localeCompare(libClasse(b), "fr"));
  const f = ouvrirFeuille('<b style="font-size:17px">Modèle vide</b><p class="aide">Un fichier à remplir (barème et points), avec les '
    + 'élèves de la classe. <b>Il contient leurs noms : le garder sur l\'ordinateur</b> (dossier NE_PAS_PUBLIER), jamais sur le site.</p>'
    + '<label class="lab" for="m-classe">Classe</label><select class="champ-texte" id="m-classe">'
    + classes.map(c => '<option value="' + esc(c) + '">' + esc(libClasse(c)) + '</option>').join("") + '</select>'
    + '<button class="gros" type="button" id="m-ok" style="margin-top:12px">Télécharger le modèle</button>'
    + '<button class="gros sec" type="button" id="m-non">Annuler</button>');
  f.querySelector("#m-non").onclick = fermerFeuille;
  f.querySelector("#m-ok").onclick = () => {
    const c = f.querySelector("#m-classe").value;
    const el = R.eleves.filter(e => e.classe === c).sort((a, b) => nomDe(a).localeCompare(nomDe(b), "fr"));
    const m = { format: "neruda-fiches", version: 1,
      epreuve: { id: c + "-devoir-1", classe: c, titre: "Devoir — titre", court: "Devoir", nature: "Devoir surveillé", date: new Date().toISOString().slice(0, 10),
                 bareme: 20, competences: {}, questions: [{ q: "1", intitule: "", max: 2, competences: [] }] },
      fiches: el.map(e => ({ eleve: nomDe(e), points: { "1": null }, appreciation: "" })) };
    telecharger("fiches_modele_" + c + ".json", JSON.stringify(m, null, 1), "application/json;charset=utf-8");
    fermerFeuille();
  };
}

// ------------------------------------------------------------------ démarrage
garde($("verrou")).then(async () => {
  $("outil").hidden = false; $("barre").hidden = false;
  try { R = await eleves(); $("info").textContent = R.eleves.length + " élèves déchiffrés"; }
  catch (e) { $("info").textContent = "Liste des élèves illisible"; return; }
  $("importer").onclick = () => $("fichier").click();
  $("modele").onclick = modele;
  $("fichier").onchange = async ev => {
    const fi = ev.target.files && ev.target.files[0]; ev.target.value = "";
    if (!fi) return;
    try { lireFichier(await fi.text()); rendreApercu(); $("apercu").scrollIntoView({ behavior: "smooth", block: "start" }); }
    catch (e) { IMP = null; rendreApercu(); toast(e.message || "Fichier illisible"); }
  };
  lirePublies();
});
