/* =====================================================================
   u51.js — grille nationale U51 du BTS Électrotechnique et calculs de la
   page Évaluer (v62, novembre 2026 ; v63 : indicateurs « sur la feuille »).
   Fonctions pures, sans accès réseau : la page et les tests (node) les partagent.

   Une épreuve (document grilles/{id}) :
     {titre, court, nature, profil: "diag"|"mixte"|"maint", classe, groupe,
      indicateurs: {C2: [{id, t, q, d, f}, …], C13: […], …}}
       t : ce que l'examinateur observe ; q : question du sujet ; d : critère national visé
       f : true = indicateur évalué sur le document réponse ramassé (v63) : il s'affiche en
           rappel sous sa compétence, ne se coche pas et ne compte pas dans le niveau proposé ;
           sans f, l'indicateur s'observe au poste et se coche.
     Une compétence du profil peut n'avoir AUCUN indicateur à cocher (v63) : son niveau se
     fixe à la main (après correction de la feuille) et la note reste provisoire tant qu'il
     ne l'est pas.
   Une saisie (une par élève et par épreuve, chiffrée dans la base) :
     {ident, ind: {<id indicateur>: "a"|"p"|"n"}, niv: {C2: "N3", …}, com, date, ts}
       ind : acquis / partiel / non ; niv : niveau fixé à la main par l'examinateur
   ===================================================================== */
export const NIVEAUX = [
  ["N1", "Compétence non acquise", 0],
  ["N2", "Compétence en cours d'acquisition, non stabilisée", 0.4],
  ["N3", "Compétence partiellement acquise", 0.75],
  ["N4", "Compétence totalement acquise et transférable", 1]
];
export const COMPETENCES = [
  ["C2", "Extraire les informations nécessaires à la réalisation des tâches"],
  ["C13", "Mesurer les grandeurs caractéristiques d'un ouvrage, d'une installation, d'un équipement électrique"],
  ["C17", "Réaliser un diagnostic de performance y compris énergétique, de sécurité, d'un ouvrage, d'une installation, d'un équipement électrique"],
  ["C18", "Réaliser des opérations de maintenance sur un ouvrage, une installation, un équipement électrique"]
];
export const PROFILS = {
  diag: ["Analyse-diagnostic uniquement", { C2: 0.25, C13: 0.25, C17: 0.5, C18: 0 }],
  mixte: ["Analyse-diagnostic et maintenance", { C2: 0.25, C13: 0.25, C17: 0.25, C18: 0.25 }],
  maint: ["Maintenance uniquement", { C2: 0.25, C13: 0.25, C17: 0, C18: 0.5 }]
};
/* niveau proposé : acquis = 1, partiel = 0,5, non ou non observé = 0, rapporté au nombre d'indicateurs */
export const SEUILS = [["N4", 0.85], ["N3", 0.6], ["N2", 0.3], ["N1", 0]];
/* critères nationaux de la grille (version 1, février 2020), proposés dans l'éditeur d'épreuve */
export const CRITERES = {
  C2: ["La demande client/utilisateur est analysée",
    "Les informations nécessaires à l'analyse et aux mesures sont extraites des documents",
    "Les informations relatives aux prescriptions techniques et aux réglementations sont recueillies",
    "Les conditions de la maintenance sont prises en compte",
    "Les risques professionnels sont identifiés",
    "Les habilitations et les certifications sont vérifiées",
    "Les informations écrites et orales nécessaires sont collectées et hiérarchisées",
    "Les informations écrites et orales collectées sont pertinentes pour l'activité"],
  C13: ["La procédure définie est appliquée",
    "L'installation et l'environnement de travail sont pris en compte",
    "Le niveau d'habilitation nécessaire avant l'intervention est déterminé",
    "Les actions de prévention et de sécurité sont mises en œuvre",
    "Les appareils de mesures sont installés",
    "Les mesures sont collectées",
    "Les enregistrements sont réalisés",
    "Les informations venant des objets connectés sont exploitées",
    "Les contrôles (locaux ou à distance) sont effectués",
    "Les essais associés sont effectués"],
  C17: ["Le processus de diagnostic est appliqué",
    "Les conditions de la maintenance sont prises en compte",
    "Le niveau d'habilitation nécessaire est déterminé",
    "Les appareils de mesures sont sélectionnés et installés",
    "Les actions de prévention et de sécurité sont mises en œuvre",
    "Les mesures sont collectées et enregistrées",
    "Les informations venant des objets connectés sont collectées et enregistrées",
    "Le diagnostic est pertinent",
    "Suite au diagnostic, des modifications de l'installation sont proposées",
    "Suite au diagnostic, des recommandations, des réglages, des améliorations de l'installation sont proposées"],
  C18: ["Le protocole de maintenance est pris en compte",
    "Le niveau d'habilitation nécessaire est déterminé",
    "Les actions de prévention et de sécurité sont mises en œuvre",
    "La zone d'intervention est préparée",
    "Les opérations de maintenance préventive sont réalisées",
    "Le dysfonctionnement est diagnostiqué",
    "Les opérations de dépannage sont réalisées",
    "Les contrôles (locaux ou à distance) sont effectués",
    "Les essais associés sont effectués",
    "Le fonctionnement de l'installation est vérifié par rapport aux prescriptions",
    "Les fiches de contrôles, carnet de maintenance et/ou applications spécifiques sont complétées"]
};
export const TAUX = Object.fromEntries(NIVEAUX.map(n => [n[0], n[2]]));
export const NOMCOMP = Object.fromEntries(COMPETENCES.map(c => [c[0], c[1]]));
export const BAREME = 20;

export const poids = ep => (PROFILS[ep && ep.profil] || PROFILS.diag)[1];
export const comps = ep => COMPETENCES.map(c => c[0]).filter(c => poids(ep)[c] > 0);
/* tous les indicateurs d'une compétence ; inds : ceux qui se cochent (au poste) ; feuille : ceux du document réponse */
export const tous = (ep, c) => (ep && ep.indicateurs && Array.isArray(ep.indicateurs[c])) ? ep.indicateurs[c].filter(x => x && typeof x === "object") : [];
export const inds = (ep, c) => tous(ep, c).filter(x => !x.f);
export const feuille = (ep, c) => tous(ep, c).filter(x => !!x.f);
export const nbTot = ep => comps(ep).reduce((t, c) => t + inds(ep, c).length, 0);
export const nbFeuille = ep => comps(ep).reduce((t, c) => t + feuille(ep, c).length, 0);
/* indicateurs renseignés, comptés seulement s'ils appartiennent encore à la grille */
export function nbObs(ep, s) {
  if (!s || !s.ind) return 0;
  return comps(ep).reduce((t, c) => t + inds(ep, c).filter(x => s.ind[x.id]).length, 0);
}
export function propose(ep, s, c) {
  const L = inds(ep, c);
  if (!s || !s.ind || !L.length || !L.some(x => s.ind[x.id])) return null;
  const v = L.reduce((t, x) => t + ({ a: 1, p: 0.5 }[s.ind[x.id]] || 0), 0) / L.length;
  return SEUILS.find(x => v >= x[1] - 1e-9)[0];
}
export function niveau(ep, s, c) { return (s && s.niv && s.niv[c]) || propose(ep, s, c); }
/* une compétence est arrêtée quand son niveau est fixé à la main ou que tous ses indicateurs à cocher sont
   renseignés ; sans indicateur à cocher, seul un niveau fixé à la main l'arrête */
export function arretee(ep, s, c) {
  if (!s) return false;
  if (s.niv && s.niv[c]) return true;
  const L = inds(ep, c);
  return L.length > 0 && L.every(x => s.ind && s.ind[x.id]);
}
/* une compétence dont le niveau se fixe seulement à la main (aucun indicateur à cocher) */
export const aFixer = (ep, c) => inds(ep, c).length === 0;
export function note(ep, s) {
  if (!s) return null;
  let tot = 0, manque = 0, vu = 0;
  comps(ep).forEach(c => {
    const n = niveau(ep, s, c);
    if (n) { tot += poids(ep)[c] * TAUX[n] * BAREME; vu++; }
    if (!arretee(ep, s, c)) manque++;
  });
  if (!vu) return null;
  return { v: tot, complet: manque === 0 };
}
export const arrondi = v => Math.round(v * 10) / 10;
export const fmt = v => arrondi(v).toFixed(1).replace(".", ",");
/* niveaux retenus pour la publication : seulement les compétences évaluées de l'épreuve */
export function niveaux(ep, s) {
  const o = {};
  comps(ep).forEach(c => { const n = niveau(ep, s, c); if (n) o[c] = n; });
  return o;
}
export function commence(s) {
  return !!s && ((s.ind && Object.keys(s.ind).length > 0) || (s.niv && Object.keys(s.niv).length > 0) || !!(s.com && s.com.trim()));
}
/* ce que voit l'élève une fois l'épreuve publiée (document epreuves/{id}/copies/{identifiant}) */
export function copiePubliee(ep, s, date) {
  const n = note(ep, s);
  return { publie: true, niveaux: niveaux(ep, s), note: n ? arrondi(n.v) : null, bareme: BAREME,
           date: (s && s.date) || date || "", maj: Date.now() };
}
/* fiche publique de l'épreuve (document epreuves/{id}), lisible par les élèves de la classe */
export function fichePubliee(ep, date) {
  const competences = {}, p = {};
  comps(ep).forEach(c => { competences[c] = NOMCOMP[c]; p[c] = poids(ep)[c]; });
  return { classe: ep.classe || "", groupe: ep.groupe || "", titre: ep.titre || "", court: ep.court || "",
           nature: ep.nature || "", profil: ep.profil || "diag", competences, poids: p,
           date: ep.date || date || "", publiee: true, maj: Date.now() };
}
/* une copie publiée est-elle encore à jour ? */
export function copieAJour(ep, s, copie) {
  if (!copie) return false;
  const a = copiePubliee(ep, s), trie = o => JSON.stringify(Object.keys(o || {}).sort().map(k => [k, o[k]]));
  return trie(a.niveaux) === trie(copie.niveaux) && a.note === (copie.note === undefined ? null : copie.note);   // l'ordre des clés lues n'est pas garanti
}
const frDate = iso => { if (!iso) return ""; const [a, m, j] = String(iso).split("-"); return j + "/" + m + "/" + a; };
/* ligne pour l'onglet Saisie du registre Excel : Date, Épreuve, Élève, C2, C13, C17, C18, Note, Indicateurs, Commentaire */
export function ligneRegistre(ep, s, nomAffiche, idEpreuve) {
  const n = note(ep, s), ind = [];
  COMPETENCES.forEach(c => inds(ep, c[0]).forEach(x => { if (s.ind && s.ind[x.id]) ind.push(x.id + "=" + s.ind[x.id]); }));
  return [frDate(s.date), idEpreuve, nomAffiche,
          ...COMPETENCES.map(c => poids(ep)[c[0]] > 0 ? (niveau(ep, s, c[0]) || "") : ""),
          n ? fmt(n.v) : "", ind.join(" "), (s.com || "").replace(/[\t\r\n]+/g, " ")];
}
/* contrôle d'une grille avant enregistrement : liste de messages, vide si tout va bien */
export function controlerGrille(ep) {
  const err = [];
  if (!ep || typeof ep !== "object") return ["grille illisible"];
  if (!String(ep.titre || "").trim()) err.push("le titre manque");
  if (!PROFILS[ep.profil]) err.push("profil inconnu : " + ep.profil);
  const ids = new Set();
  /* v63 : une compétence peut n'avoir aucun indicateur à cocher (niveau fixé à la main) */
  comps(ep).forEach(c => {
    tous(ep, c).forEach(x => {
      if (!x || !String(x.id || "").trim()) err.push(c + " : indicateur sans code");
      else if (ids.has(x.id)) err.push("code en double : " + x.id);
      else ids.add(x.id);
      if (x && !String(x.t || "").trim()) err.push(c + " : indicateur " + (x.id || "?") + " sans texte");
    });
  });
  return err;
}
