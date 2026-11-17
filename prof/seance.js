/* =====================================================================
   seance.js — page « Activités guidées » de l'espace prof (v65.7, novembre 2026)

   Le téléphone du professeur pendant une ou plusieurs activités guidées de la même classe :
     Visas     les demandes de TOUTES les activités ouvertes de la classe, la plus ancienne en tête (v65.7 : par
               exemple les quatre systèmes d'une série d'ADM en même temps) ; une demande s'ouvre sur le schéma
               attendu, les photos du groupe et, si une épreuve d'Évaluer est liée, ses critères « au poste » ;
               on accorde d'un GESTE (glisser vers la droite) ou on renvoie « À reprendre » avec un motif.
     Suivi     par activité ouverte, par poste (ou par groupe) et par élève : étape, temps, aides, alertes.
     Étapes    pour l'activité choisie : faits, en cours, temps médian, aides ; les réponses de la classe.
     Réglages  pour l'activité choisie : ouvrir ou fermer, parties, formatif ou évalué, tout ouvrir (panne),
               épreuve d'Évaluer liée, codes de secours du jour, QR code ; ouvrir d'un coup toute une série.

   Base Firestore (règles v7) :
     seances/{classe}--{activité}            réglages (professeur), lus par les élèves de la classe
     seances/{…}/eleves/{uid}               avancement de chaque élève (écrit par lui), lu ici
     seances/{…}/visas/{uid}                visas, refus, déblocages, poste imposé (écrits ici), lus par l'élève
     grilles/{épreuve}/saisies/{opaque}     critères cochés au visa : les saisies CHIFFRÉES d'Évaluer (même format)
   Le contenu (étapes, visas) vient du fichier de l'activité, activites/<filière>.<activité>.js, chiffré avec la
   clé de la filière. Ce que l'élève ne doit pas voir (listes du professeur, schémas corrigés, critères et motifs
   des visas) vient de l'espace enseignant : donnees/visas_guidees.json. Rien de l'énoncé n'est en clair ici.
   ===================================================================== */
import {
  db, doc, getDoc, setDoc, deleteDoc, collection, onSnapshot, writeBatch, getDocs, updateDoc, deleteField, FieldPath,
  garde, eleves, comptes, photo, esc, auj, reglage, idOpaque, chiffrerDoc, dechiffrerDoc, lireDonnees,
  toast, ouvrirFeuille, fermerFeuille, confirmer, copier, afficherSynchro, CLASSES_DE
} from "./socle.js?v=65";

const ACTIVITES = [
  { id: "regime-sinusoidal", titre: "TP 3 — Régime sinusoïdal", court: "TP 3", fichier: "bts-et.regime-sinusoidal", filiere: "bts-et",
    qr: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAEOAQAAAABQysQIAAAC4ElEQVR4Xu1aQWrcQBCssQQ+jsAP2KdIX8vPZp+SBxiko2FEh6qeUUwI2T0owg0ejJBtIam3uqurazYZHqz95dEVwPclf19nfS5bSimNW0rTfZ8w4g7wOAL8R1pOe9DDdU5EsHU2s2FFzYZcajauda6YBz8550GX3WUEkDALlwTg9T0ZsN9W/rJNw3vYInGAQGgYJO629iy57NM950HMOmAeeNR5LoOSEJnHIV7W9TqyompiTamUFFfIOoJn17ASpj9+lHbhmAGiNoICON2x5ZoZQLwI2TnpfdldmHVVYHiy8ahqqr3E4kVk1l4+F5DG55qt5oJspL4cECMnAZGb8o1xVcBpYYiYdQpHL194IopjgKQLEKbLKuCcB4nrhM5gyjTVkQshSBFFjMi5zmGqpLii9iT2i4tRZso5WI0QhFpAparCYflQM3TqlnigGlcenpPeF95lS/utpGket8UJwX6mjwn7TUSxhtPefGcXdQ6WKKJN6ibqi4aR3rl3IoqH1l4bLYTU3pLcEkKk65rJcoeQiNphFZT3I3EdOaHNSjHnIwLBQY9yyOX3oetCYqTyd5mq9sqgXNcpAwMyg/KtjUJ9Muqkx+EiGte9IP/AtsidW0gO28I6AjvsPmlwurA3PlxPvIu7JT3N6NEVZeBvRyUaRmqjsoPkAjGcg/TiThNePsq07i1welXDDam9mXVwWpNx1wYlBRWT66h85JkUuVuiBUXXsHuiGr/SJa5UZWq5/lkFjUaJqrEiYkRqqQzEPVV5klQLso5DRuSmlk957jDI8W6TRTyMfCnZfDA/lKr+GDCibmRpM6IN4y4biFRMXffZaiDvucMgIRTTC/Ii0rYLQ5DV0LfDAmbd0UnmNAG5vGqy0LmmpKBKVQLV+c2nct/gc10Ujeu46WrcVkbd8PHG8tnf1jouFWVYpzHezvKxx+delrxidVidSA59JYnzxLtwr//f6/tbNP/5KzIP1y+0WLNg0VP+zgAAAABJRU5ErkJggg==" },
  { id: "adm-s01-four", titre: "ADM série 01 — Four industriel", court: "Four", fichier: "bts-et.adm-s01-four", filiere: "bts-et", serie: "adm-s01",
    qr: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAEOAQAAAABQysQIAAAC8UlEQVR4Xu1aQWrkMBAsRYYcPZAH5CnyD/KkZX9mPyU/kI8BmV6qWp7AbtghIAwNacLg4EGyXF3V1dIkw4M4nh59A/j5ytcx6r3sKaU07csETNimfQE2XYM30jJsoocxZkWwWswsV+RarBbMa7Y1VzSUbGa1tDETXToKgUBp2I4b2v4LwPG6TgD2xM9Ln+VBfONZ5hXz+mxcSEMBitVz8G+M8p+4bBSCwNjfNhTsb+3lNwDbE+ba7132LGMmOnlkq7PGzNpspn9j8gieXbmWf/8EXjhlgJ3RUNpsmFlyzYxUUkTTOmZdExZQsjHlpOFNt4Ji5NUHp8q12Rqlj6iFxEi4ZOMSsq1mq2oTXBa4rjESdNkopIzEjUg5g6hyXS6IXbQV6dXty7Sn40bFO9LSlH5mdrzKmF/2dsdMBFOmKffo6KQMELMYATFSPZIF0gXljikoASSt4jlVSjRFQPShJsyWJQhW0RVvTDJcNgoxkg4UR4dp1q2RZ2NArevJJoxUg6jkCqtSwsve7piJunr787O2gmxivkkWckQenZlGv9rrLPHy3OPFmFd32SjdqTouvhBG14c1JEayo3fF09KMTlUZGJJHpL/7Ulc8rqj7OvV9EbNOIkBr6qCAgtBpFRAjEtbMnm39SMs0G/bT11UcN1q+6zg9Rjzu7SqJQ3SYgZRu51fMjo8eVQ/v6k2/6r25d4LxeORFR47urz0HkitkhSVAbrN9dW7z2CW5ho9J78tG6d2E0CF9zhZJe+Bh65F7VP+89xFu80JmnfogNRHERYTqG6pslEIqQzdyd6fqO11nkQ3IIw9vJXofQZhcKKIqg1TaC2tnk5KQx2TxMHpyd9pNAgm15fcFsx8k4SPmqaVbU5pwcUqF9dzdilePPgvfcfPNfDZHHzdMolXkU0t7rtDO6pYrl5PfE/bEDLys2o+ZiCCYzvqBrb3YgXK81DYtDWuut5C7xPczPmm4TvrUzOrUL2DHl35+RfNljGHAmFH+AGuunYxZwY2GAAAAAElFTkSuQmCC" },
  { id: "adm-s01-banc", titre: "ADM série 01 — Banc départ-moteur", court: "Banc", fichier: "bts-et.adm-s01-banc", filiere: "bts-et", serie: "adm-s01",
    qr: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAEOAQAAAABQysQIAAACxUlEQVR4Xu1aQYojMQxUjxtydEMesE9xfjbsz5wHDbiPAQctVeXOzsIsczENgjE5BCe0rUgqVUlZ3L5Zz7fvvmH285Wv15zfxbzh8cm95+qtWHbLzs3Cc0ufc9BpTzFvxd2TO8yxklqBdWavzWgW4adblpvti9ndcu1m3Ww1W3dsroGTpKy59v22/Pq90nE91xHtp8XL9IP290u79/322OAjOE5r+kH/W3MOQlg5w+xxbc9rTX6/dHusJXVbs9sezqID6xox4d9XVKzTagCE5J6E25noxxUN6wACn+oRQZsV6u/+nPA+7SmENbNO3E7uliscRKNYZMPVI/oi19RgjsIvHaUW5uSAUUcr3IeP8IZESE4KmUdeCQX1MA2Bl2BgwUchfcRrK8BAVkdmydLUYuYRMOG4Px308lfIqAPWlcM1wD2wcRJyhGJIHwnuEHLg3hRHCZuAdCiL0yrJnINwc9yfii+ROcgQKT7k15yDTnuKEIAalsrIkUTMKYeBIfMIN2fWEMNZahl7Insx0dtBuRFsxAREmviPhHm8qINcFW0YuaPOSR+6LGAeNZjwsmLgtmprVBZEc4B1oqpHj4tFKijWCcAP6IaUIDiAOYTMI3Ie8jp6hwJW5VW6LyQyjKwB4onUMY/U44qIdRSwlK7KHXQb6DVwhrAWMYnEE0R+WJ6C6qPB60BT5Z2jq0+yGrIeMdIGWxhNBnYYhlCKiAxEg5FK6jOg1QDromKd4k3sjjrC0ONidyukKj+aWmzTQc8SzIeSDWnRmPEhaz5PxIZd8bj3m1SD7e/PjUQo18dyuzRMKwb9Pk19zjlI/W1El/qNKkmSezG7xJgfafXVltwei/VrWz+29GH9CnyIO/0n/b4nr5dmz608N4xiA85hX7NyaQqovDE8GlI9YoXl/xnYstPoX7xuMPB4WLf8/IvmyzUHd+c85Q+O+K1w1DsjkQAAAABJRU5ErkJggg==" },
  { id: "adm-s01-harmocem", titre: "ADM série 01 — Banc Harmocem", court: "Harmocem", fichier: "bts-et.adm-s01-harmocem", filiere: "bts-et", serie: "adm-s01",
    qr: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAEOAQAAAABQysQIAAAC/UlEQVR4Xu1aQWrjQBCsyQj2OAI/IE8Z/yBPWvZJ+YEM+5F9QGB0NIzpparHYlkC1sEENWQQRokHW63qrq5qORkerNvLox3A95bP17Puy5pSStN6nnDhsZ7hJwDfSOenfdHD9ZyIYK2aWW48ya2iLNmW3GpHzWbWan/OF33ppxAIYMLlOqOvPwHcXhfe0TVNcYukGIplWyagowKX3O5Z8qV398HacS0EQXC83VL9/fHWT78A2DqjtPHejk850pZ7HRnLx2uqFzP+aTHrCKbsyqKF/w6BF44ZYGOJClRNzDozgHgRsiOl1I5rYdZ1LyUlG1NOHN71VkiMWs22dNTOKBRCsV4WFOuCKR5GooLMrGNoppMOOFEwrh1IH2mLZx2xED+wgshypItqjb0pXkRMOcaC4uiIEFodAIWMiITgR24QMwywIP0QDaMXae9zmsl2t1fL7eKccEtJkjWc+ZHkVt+h8BbRSYFbBwbjHansd1yLmim7avVmxDQb0shTMRzXMesUAiZUl6Y/bEmzLAbdX8Csc7oWv3my8VWagaYvnuOTrhtCiIknl8TDc48nO3L3SFsYkTSDmwhhJJiGQ4+IkUzEXYGTJToVuOs6xXskAHZcCznBtZz3U4dMuk6tNmJEUnFdI6DNGW1DhpAY3blOFUQ5R6So66j0iNcOpI+0ZbOrQ6YSKUrWYfdCOj4WzjBHIgSln6uIoG7Cm859qjBmC7K0PlGJl3WSCm7M/7V7w6dHrCNJbikH2iKGpuHJkKwR2VuBbOKHEyGRuQ4qh4BZR9+qHHMrwQpyaTcc05Goece1+ExVpaSUcwPrUxS+Rsw6X83HdIPJe9EM3P+5474cacs291btCBRvRjJHETF6caLj+LFhYlCX/OeM4g+ScI351NLDoQhX7fj4zo1SwKzbKqCmuU4yfSjLdcY0airgnEEddrghUoFG36I+N+bRmIHjH+NjZa7r6X0q9XZqfTp3LLnN00dEjPwZ3zbDd7tH6na3Hg2j9P0rmk/XkTrsX2Exopp2e+03AAAAAElFTkSuQmCC" },
  { id: "adm-s01-compensation", titre: "ADM série 01 — Compensation", court: "Compensation", fichier: "bts-et.adm-s01-compensation", filiere: "bts-et", serie: "adm-s01",
    qr: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAEOAQAAAABQysQIAAAC2klEQVR4Xu1aUYrrMAwcN4F8OjfoUZKblT3Su4F7lN7A+Vxw0DIjp7yPXfYnBATrLweKU1Wj0WjcZPhl7bffPgH8feT7dc7vAqs8fqhouQDLUIFs3Jhnb2nnvOiyU2B1MbPBilXukctgpjAZlNWQEfmXb0wNhsrHlstQma8hXkQHGLZ13BJy+bx/NI+LINS6DC/nvEhIU/kQYIAxWSoos7g5MmM69vvHYGVP60SwYU8rsrV4OboBz5QSsEyvx7g9pgpsD2e/PaU0B0Sdr0q8ie64geDnKyR7O7+JBpwWrLcnFdc5BXvZKUyKmtGiZmTOcozLMxUxItGCNANR5xtkxWjW4mkGgsGstFymVxpzATcrtnWfMeJJUXQZXs55kasgKgQhjXgjaediVqIygys6pemNPU+ciCIcM9yAJd3LCAwvtqERz32mDh8lvEOijuUvxhPwuLIpQeTwmP2I5UNdJ0XnM8Uh8CjIA/ajhcXCCULJ0ljRMicmoS5cHR2yR+R2BILjkV0pYI46aYu6pX9cCxn7bECuE8z+sxc69sTnnrWYOSK5uavgqXHtLboLiDp1WPo/WXUkHe66rg+254iTy04hV7u1pRmc1SR3i2rBJUS8iNRh6SrIWOittmvvmMygsajXkYy7XkcOv3i6TgrB3TlyQtc/qiOJ8JARSWCr9dBQ1SMFah8uQnKdJnGKOjp13azzESOoc6IcuYRj4Yju1I9kFEfMkWiBPOBWA+2FA35BnRORtgYKjhXHhO4GV9D5SN6CT0Y+8pEofBeS67qn6jYdXRRpb9aUdHjAOup3fD70aSDqOQqq6+icOBVMFVPFmMtk3PuUFPD+iJZPwoJtbiMw1z1xj/kf7yxCRnTciEmU0gCXf/L2Idl5L5sDTn9RLro5emJ7jLm0LZHPX+v5L/ppnRPR+67cZap7d8edclCf4c11mmG9H0mvqh/FQ136+xfNt+ucCjjnlC80OqU08sGuIwAAAABJRU5ErkJggg==" }
];
const SERIES = { "adm-s01": "ADM série 01" };
const SITE = "https://physique-neruda.github.io/physique/";
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const TOURS_SECOURS = 60000;
const MOTIFS = ["Câblage à reprendre", "Calibre ou mode", "Hors tension d'abord", "Cordons"];
const LIB = { et1: "BTS ET 1re année", et1a: "BTS ET 1re année (apprentis)" };

const $ = id => document.getElementById(id);
const clone = o => JSON.parse(JSON.stringify(o));
const maintenant = () => Date.now();
function depuis(t) {
  if (!t) return "";
  const m = Math.max(0, Math.floor((maintenant() - t) / 60000));
  return m < 1 ? "à l'instant" : m < 60 ? m + " min" : Math.floor(m / 60) + " h " + String(m % 60).padStart(2, "0");
}
function heure(t) { if (!t) return ""; const d = new Date(t); return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0"); }
function nombre(x) { return typeof x === "number" && isFinite(x) ? x.toLocaleString("fr-FR", { maximumFractionDigits: 4 }) : esc(x); }

// ------------------------------------------------------------------ état : un contexte par activité de la classe
let R = null, COMPTES = [], PROF = { activites: {}, epreuves: {} }, GRILLES_CLASSE = null;
let actId = reglage("guidee-activite") || ACTIVITES[0].id;
let classe = reglage("guidee-classe") || "";
const CTX = new Map();                     // activité -> contexte de séance (classe courante)
let K = null;                              // le contexte affiché par Suivi, Étapes et Réglages
let feuilleOuverte = null;                 // {type, k, …} : la feuille se redessine quand les données changent
const chaines = new Map();
const CACHE = new Map();                   // fichier -> Promise({CONTENU, IMGS}) : un seul déchiffrement par activité

function contexte(a) {
  return { a, id: a.id, sid: classe + "--" + a.id, CONTENU: null, IMGS: {}, erreur: "", chargement: null,
    SEANCE: null, seanceLue: false, SUIVIS: new Map(), VISAS: new Map(), suivie: false,
    GRILLE: null, SAISIES: new Map(), HID: new Map(), saisiesPretes: false,
    abonnements: [], abonnementsGrille: [], secoursEnCours: false };
}
/* exécute f avec le contexte k comme contexte courant (rendus et écritures synchrones) */
function avec(k, f) { const g = K; K = k; try { return f(); } finally { K = g; } }
const activite = () => K.a;
const etapes = () => (K && K.CONTENU ? K.CONTENU.etapes : []);
const etape = id => etapes().find(e => e.id === id);
const partie = id => (K && K.CONTENU ? K.CONTENU.parties.find(p => p.id === id) : null);
const ouverts = () => [...CTX.values()].filter(k => k.CONTENU && k.SEANCE && k.SEANCE.etat === "ouverte");
/* visa : le contenu de l'activité, complété par l'espace enseignant (listes, images, critères, motifs) */
function visaDef(V) {
  const c = (K.CONTENU && K.CONTENU.visas[V]) || { titre: V, prof: [], eleve: [] };
  const p = ((PROF.activites || {})[K.a.fichier] || {})[V] || {};
  return Object.assign({}, c, p);
}

// ------------------------------------------------------------------ le contenu de l'activité (page élève chiffrée)
function lireContenu(a) {
  if (!CACHE.has(a.fichier)) CACHE.set(a.fichier, (async () => {
    const C = window.NerudaCles;
    let t;
    if (C && C.enLigne) {
      if (!C.cle(a.filiere)) throw new Error("La clé de la classe n'est pas ouverte sur cet appareil : rouvrir le code enseignant.");
      t = await C.texte("../activites/" + a.fichier + ".js.enc", "activites/" + a.fichier + ".js", a.filiere);
    } else {
      const r = await fetch("../activites/" + a.fichier + ".js", { cache: "no-cache" });
      if (!r.ok) throw new Error("absent");
      t = await r.text();
    }
    const m = /^window\.ACTIVITE_RESUME = (.*);$/m.exec(t), mi = /^window\.IMAGES = (.*);$/m.exec(t);
    if (!m) throw new Error("contenu de l'activité illisible");
    return { CONTENU: JSON.parse(m[1]), IMGS: mi ? JSON.parse(mi[1]) : {} };
  })().catch(e => { CACHE.delete(a.fichier); throw e; }));
  return CACHE.get(a.fichier);
}
function chargerContenu(k) {
  if (k.CONTENU) return Promise.resolve();
  if (!k.chargement) k.chargement = lireContenu(k.a).then(c => {
    k.CONTENU = c.CONTENU; k.IMGS = c.IMGS; k.erreur = "";
    if (k.SEANCE && k.SEANCE.etat === "ouverte") assurerSecours(k);
    rendre();
  }, e => {
    k.erreur = e.message === "absent" || /404|introuvable|absent/i.test(e.message || "") ? "Le fichier de cette activité n'est pas (encore) sur le site." : (e.message || "erreur");
    k.chargement = null; rendre();
  });
  return k.chargement;
}

// ------------------------------------------------------------------ élèves : compte de la base + liste chiffrée (nom, photo)
function eleveDe(uid) {
  const c = COMPTES.find(x => x.uid === uid) || {};
  const s = K.SUIVIS.get(uid) || {};
  const ident = c.identifiant || s.identifiant || "";
  const e = R ? R.eleves.find(x => x.id === ident) : null;
  return { uid, ident, e, nom: e ? (e.prenom + " " + e.nom) : (c.prenom || s.prenom || ident || "élève"),
           court: e ? (e.prenom + " " + (e.nom || "").slice(0, 1) + ".") : (c.prenom || s.prenom || ident || "élève"), photo: photo(e) };
}
function roster() {
  // les élèves de la classe (comptes actifs), qu'ils aient commencé ou non
  const uids = new Set(COMPTES.filter(c => c.classe === classe && c.actif !== false && !c.invite && !c.depannage).map(c => c.uid));
  for (const uid of K.SUIVIS.keys()) uids.add(uid);
  return [...uids].map(eleveDe).sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
}
const posteDe = uid => { const v = K.VISAS.get(uid), s = K.SUIVIS.get(uid); return (v && v.poste) || (s && s.poste) || 0; };
const groupeUnique = () => !!(K.CONTENU && K.CONTENU.groupeUnique);

// ------------------------------------------------------------------ abonnements (toutes les activités de la classe)
function desabonner(k) { k.abonnements.forEach(f => f()); k.abonnements = []; desabonnerGrille(k); }
function desabonnerGrille(k) { k.abonnementsGrille.forEach(f => f()); k.abonnementsGrille = []; k.GRILLE = null; k.SAISIES = new Map(); k.saisiesPretes = false; }
function abonnerClasse() {
  for (const k of CTX.values()) desabonner(k);
  CTX.clear(); GRILLES_CLASSE = null;
  reglage("guidee-classe", classe);
  for (const a of ACTIVITES.filter(a => (CLASSES_DE[a.filiere] || []).includes(classe))) { const k = contexte(a); CTX.set(a.id, k); abonner(k); }
}
function abonner(k) {
  const ici = k.sid;
  k.abonnements.push(onSnapshot(doc(db, "seances", k.sid), { includeMetadataChanges: true }, snap => {
    if (CTX.get(k.id) !== k || k.sid !== ici) return;
    k.SEANCE = snap.exists() ? snap.data() : null; k.seanceLue = true;
    if (k === K) afficherSynchro($("sync"), snap.metadata);
    if (k.SEANCE) { suivre(k); chargerContenu(k); }
    if (k.SEANCE && (k.SEANCE.epreuve || "") !== (k.GRILLE ? k.GRILLE.id : "")) abonnerGrille(k, k.SEANCE.epreuve || "");
    if (k.SEANCE && k.SEANCE.etat === "ouverte") assurerSecours(k);
    rendre();
  }, e => { if (k === K) $("sync").textContent = "● lecture refusée (" + (e.code || "erreur") + ")"; }));
}
function suivre(k) {
  if (k.suivie) return;
  k.suivie = true;
  k.abonnements.push(onSnapshot(collection(db, "seances", k.sid, "eleves"), snap => {
    k.SUIVIS.clear(); snap.docs.forEach(d => k.SUIVIS.set(d.id, d.data())); rendre();
  }, e => console.warn("suivi illisible", e && e.code)));
  k.abonnements.push(onSnapshot(collection(db, "seances", k.sid, "visas"), snap => {
    k.VISAS.clear(); snap.docs.forEach(d => k.VISAS.set(d.id, d.data())); rendre();
  }, e => console.warn("visas illisibles", e && e.code)));
}
async function abonnerGrille(k, ep) {
  desabonnerGrille(k);
  if (!ep) return;
  const ici = ep;
  try {
    const g = await getDoc(doc(db, "grilles", ep));
    if (!g.exists()) { toast("Épreuve d'Évaluer introuvable : " + ep); return; }
    k.GRILLE = Object.assign({ id: ep }, g.data());
  } catch (e) { toast("Épreuve illisible (" + (e.code || "erreur") + ")"); return; }
  const idents = R.eleves.filter(e => e.classe === classe).map(e => e.id);
  const hids = await Promise.all(idents.map(id => idOpaque("saisie|" + ep + "|" + id)));
  k.HID = new Map(idents.map((id, n) => [id, hids[n]]));
  const parHid = new Map(idents.map((id, n) => [hids[n], id]));
  let tour = 0;
  k.abonnementsGrille.push(onSnapshot(collection(db, "grilles", ep, "saisies"), async snap => {
    const n = ++tour, m = new Map();
    await Promise.all(snap.docs.map(async d => {
      const ident = parHid.get(d.id); if (!ident) return;
      const s = await dechiffrerDoc("grilles/" + ici + "/saisies/" + d.id, d.data());
      if (s && s.ident === ident) m.set(ident, s);
    }));
    if (n !== tour || !k.GRILLE || k.GRILLE.id !== ici) return;
    k.SAISIES = m; k.saisiesPretes = true; rendreFeuille();
  }, e => console.warn("saisies illisibles", e && e.code)));
  rendre();
}

// ------------------------------------------------------------------ écritures (sur le contexte courant ou donné)
function enchainer(ch, f) {
  const suite = (chaines.get(ch) || Promise.resolve()).then(f).catch(e => { console.warn(e); toast("Écriture refusée par la base (" + (e.code || "erreur") + ")"); });
  chaines.set(ch, suite);
  suite.then(() => { if (chaines.get(ch) === suite) chaines.delete(ch); });
  return suite;
}
async function majSeance(champs, k) {
  k = k || K;
  if (!k.SEANCE) return;
  const ici = k.sid;
  await enchainer("seance|" + ici, () => updateDoc(doc(db, "seances", ici), Object.assign({ maj: maintenant() }, champs)));
}
async function grillesDeLaClasse() {
  if (!GRILLES_CLASSE) {
    try { const snap = await getDocs(collection(db, "grilles")); GRILLES_CLASSE = snap.docs.map(d => Object.assign({ id: d.id }, d.data())).filter(g => g.classe === classe); }
    catch (e) { GRILLES_CLASSE = []; }
  }
  return GRILLES_CLASSE;
}
async function epreuveParDefaut(k) {
  const id = (PROF.epreuves || {})[k.a.fichier];
  if (!id) return "";
  return (await grillesDeLaClasse()).some(g => g.id === id) ? id : "";
}
async function creerSeance(k, ouverte) {
  k = k || K;
  await chargerContenu(k);
  if (!k.CONTENU) throw new Error(k.erreur || "contenu illisible");
  const P = k.CONTENU.ouvrir === "toutes" ? k.CONTENU.parties.map(p => p.id) : [k.CONTENU.parties[0].id];
  await setDoc(doc(db, "seances", k.sid), { v: 1, activite: k.a.id, classe, titre: k.a.titre, etat: ouverte ? "ouverte" : "fermee",
    parties: P, mode: "formatif", conclusions: true, toutOuvrir: false, epreuve: await epreuveParDefaut(k), seuil: 10,
    cree: maintenant(), maj: maintenant() });
}
async function ouvrirSerie(serie) {
  const ks = [...CTX.values()].filter(k => k.a.serie === serie);
  let n = 0;
  for (const k of ks) {
    try {
      if (!k.SEANCE) { await creerSeance(k, true); n++; }
      else if (k.SEANCE.etat !== "ouverte") { await majSeance({ etat: "ouverte" }, k); n++; }
    } catch (e) { toast(k.a.court + " : " + (e.code || e.message)); }
  }
  toast(n ? n + " séance" + (n > 1 ? "s ouvertes" : " ouverte") : "Toutes les séances de la série sont déjà ouvertes");
}
function accorder(uids, V) {
  const t = maintenant(), b = writeBatch(db);
  uids.forEach(uid => b.set(doc(db, "seances", K.sid, "visas", uid), { v: 1, maj: t, ok: { [V]: { t } } }, { merge: true }));
  return b.commit();
}
function refuser(uids, V, motif) {
  const t = maintenant(), b = writeBatch(db);
  uids.forEach(uid => {
    const s = K.SUIVIS.get(uid), d = s && s.demande && s.demande.visa === V ? s.demande.t : 0;
    b.set(doc(db, "seances", K.sid, "visas", uid), { v: 1, maj: t, refus: { [V]: { t, d, motif: String(motif || "").slice(0, 200) } } }, { merge: true });
  });
  return b.commit();
}
function debloquer(uid, id) { return setDoc(doc(db, "seances", K.sid, "visas", uid), { v: 1, maj: maintenant(), ouvrir: { [id]: maintenant() } }, { merge: true }); }
function changerPoste(uid, n) { return setDoc(doc(db, "seances", K.sid, "visas", uid), { v: 1, maj: maintenant(), poste: n }, { merge: true }); }
/* critères : même écriture que la page Évaluer (saisie complète, chiffrée sur l'appareil) */
function cocher(idents, ind, etat) {
  if (!K.GRILLE || !K.saisiesPretes) { toast("Lecture des saisies… un instant"); return; }
  const ep = K.GRILLE.id, SA = K.SAISIES, HI = K.HID;
  idents.forEach(ident => {
    if (!HI.has(ident)) return;
    const s = clone(SA.get(ident) || { ident, epreuve: ep, date: auj(), ind: {}, niv: {}, com: "", ts: "" });
    s.ind = s.ind || {}; s.niv = s.niv || {};
    if (etat) s.ind[ind] = etat; else delete s.ind[ind];
    s.ts = new Date().toISOString();
    SA.set(ident, s);
    const ch = "grilles/" + ep + "/saisies/" + HI.get(ident);
    enchainer(ch, async () => setDoc(doc(db, ch), await chiffrerDoc(ch, s)));
  });
  rendreFeuille();
}

// ------------------------------------------------------------------ codes de secours du jour (sans réseau côté élève)
const TE = new TextEncoder();
function b64(buf) { const u = new Uint8Array(buf); let s = ""; for (let i = 0; i < u.length; i++) s += String.fromCharCode(u[i]); return btoa(s); }
async function empreinte(code, sel, visa, tours) {      // même calcul que la page élève
  const kk = await crypto.subtle.importKey("raw", TE.encode(code), "PBKDF2", false, ["deriveBits"]);
  return b64(await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: TE.encode(sel + "|" + visa), iterations: tours }, kk, 128));
}
async function codeSecours(V, jour, sid) {
  const h = await idOpaque("guidee|secours|" + (sid || K.sid) + "|" + V + "|" + (jour || auj()));
  let c = "";
  for (let i = 0; i < 6; i++) c += ALPHABET[parseInt(h.substr(2 * i, 2), 16) % 32];
  return c;
}
async function assurerSecours(k) {
  if (!k.SEANCE || !k.CONTENU || k.secoursEnCours) return;
  if (k.SEANCE.secours && k.SEANCE.secours.date === auj()) return;
  k.secoursEnCours = true;
  try {
    const sel = b64(crypto.getRandomValues(new Uint8Array(12))), h = {};
    for (const V of Object.keys(k.CONTENU.visas)) h[V] = await empreinte(await codeSecours(V, null, k.sid), sel, V, TOURS_SECOURS);
    await majSeance({ secours: { date: auj(), sel, tours: TOURS_SECOURS, h } }, k);
  } catch (e) { console.warn("codes de secours", e); }
  finally { k.secoursEnCours = false; }
}

// ------------------------------------------------------------------ calculs de suivi (contexte courant)
function etatEleve(uid) {
  const s = K.SUIVIS.get(uid);
  if (!s) return { absent: true };
  const pos = s.pos || "", e = s.e || {}, et = etape(pos);
  const x = e[pos] || {};
  const faits = etapes().filter(y => e[y.id] && e[y.id].ok).length;
  const vu = Math.max(s.vu || 0, s.maj || 0);
  const seuil = Math.max((K.SEANCE && K.SEANCE.seuil) || 10, (et && et.duree) || 0);
  const demande = s.demande && !visaOk(uid, s.demande.visa) ? s.demande : null;
  let aides = 0, a3 = 0, maint = 0, pen = 0;
  for (const k of Object.keys(e)) { aides += e[k].a || 0; if ((e[k].a || 0) >= 3) a3++; if (e[k].m) maint++; pen += e[k].ac || 0; }
  return {
    s, pos, et, x, faits, total: etapes().length, fini: pos === "fin", demande, aides, a3, maint, pen,
    surEtape: x.t0 ? maintenant() - x.t0 : 0,
    bloque: !!(et && x.t0 && !demande && maintenant() - x.t0 > seuil * 60000),
    inactif: !!(vu && maintenant() - vu > 6 * 60000 && pos !== "fin")
  };
}
const visaOk = (uid, V) => { const v = K.VISAS.get(uid); return !!(v && v.ok && v.ok[V]); };
function libEtape(et) {
  if (!et) return "—";
  const p = partie(et.partie);
  return (p ? p.court.replace("Partie ", "") : "") + (et.q ? " · " + et.q : "") + " — " + et.titre;
}
function demandes() {
  const groupes = new Map();
  for (const [uid] of K.SUIVIS) {
    const st = etatEleve(uid);
    if (!st.demande) continue;
    const p = posteDe(uid), cle = (p ? "p" + p : "u" + uid) + "|" + st.demande.visa;
    if (!groupes.has(cle)) groupes.set(cle, { cle, poste: p, visa: st.demande.visa, uids: [], t: st.demande.t });
    const g = groupes.get(cle); g.uids.push(uid); g.t = Math.min(g.t, st.demande.t || maintenant());
  }
  return [...groupes.values()].sort((a, b) => a.t - b.t);
}
function toutesDemandes() {
  const out = [];
  for (const k of CTX.values()) {
    if (!k.CONTENU || !k.SEANCE) continue;
    avec(k, () => demandes().forEach(g => { g.k = k; g.membres = membresDe(g); out.push(g); }));
  }
  return out.sort((a, b) => a.t - b.t);
}
function membresDe(g) {
  // ceux qui ont demandé, puis les autres élèves du même poste arrêtés à la même étape de visa
  const et = etapes().find(e => e.visa === g.visa);
  const autres = g.poste ? [...K.SUIVIS.keys()].filter(u => !g.uids.includes(u) && posteDe(u) === g.poste && et && K.SUIVIS.get(u).pos === et.id && !visaOk(u, g.visa)) : [];
  return g.uids.concat(autres);
}
/* « Poste 3 », ou, pour une activité à groupe unique, les prénoms du groupe */
function libGroupe(g) {
  if (groupeUnique() || !g.poste) return g.membres.slice(0, 3).map(u => eleveDe(u).court).join(", ") + (g.membres.length > 3 ? "…" : "");
  return "Poste " + g.poste;
}

// ------------------------------------------------------------------ rendu
function rendre() {
  if (!R || !K) return;
  majListeActivites();
  const d = toutesDemandes();
  $("nb-visas").innerHTML = d.length ? `<span class="badge-n">${d.length}</span>` : "";
  rendreVisas(d);
  if (K.CONTENU) { rendreSuivi(); rendreEtapes(); rendreReglages(); }
  else {
    const msg = K.erreur ? `<div class="panne"><b>${esc(K.a.titre)}</b><p>${esc(K.erreur)}</p></div>` : '<p class="vide">Lecture de l\'activité…</p>';
    $("v-suivi").innerHTML = msg; $("v-etapes").innerHTML = msg; $("v-reglages").innerHTML = msg; signatureReglages = "";
  }
  // une feuille ouverte suit les données, sauf celle du visa (on y glisse un doigt) ou si l'on y saisit quelque chose
  const f = document.getElementById("feuille"), a = document.activeElement;
  if (feuilleOuverte && feuilleOuverte.type !== "visa" && !(f && a && f.contains(a) && /^(INPUT|SELECT|TEXTAREA)$/.test(a.tagName))) rendreFeuille();
}
function majListeActivites() {
  const s = $("activite"); if (!s) return;
  [...s.options].forEach(o => {
    const k = CTX.get(o.value), a = k ? k.a : null;
    if (!a) return;
    const t = (k.SEANCE && k.SEANCE.etat === "ouverte" ? "● " : "") + a.titre;
    if (o.textContent !== t) o.textContent = t;
  });
}
function bandeauSeance() {
  if (!K.seanceLue) return '<p class="vide">Lecture de la séance…</p>';
  if (!K.SEANCE) return `<div class="cle"><h3>Pas encore de séance pour cette classe</h3><p>${esc(K.a.titre)} — ${esc(LIB[classe] || classe)}.</p>
    <button class="gros" type="button" data-creer>Créer la séance</button></div>`;
  if (K.SEANCE.etat !== "ouverte") return `<div class="cle"><h3>Séance fermée</h3><p>${esc(K.a.titre)} : les élèves voient leurs réponses sans pouvoir avancer.</p>
    <button class="gros" type="button" data-ouvrir>Ouvrir la séance</button></div>`;
  return "";
}
function brancherBandeau(zone) {
  const k = K;
  const c = zone.querySelector("[data-creer]"); if (c) c.onclick = () => creerSeance(k).then(() => toast("Séance créée (fermée) : vérifier les parties, puis l'ouvrir"), e => toast("Création refusée (" + (e.code || e.message) + ")"));
  const o = zone.querySelector("[data-ouvrir]"); if (o) o.onclick = () => majSeance({ etat: "ouverte" }, k);
}
function rendreVisas(liste) {
  const z = $("v-visas"), multi = ouverts().length > 1;
  let h = K.CONTENU ? bandeauSeance() : "";
  h += `<h2>Demandes de visa${multi ? ` <small style="font-weight:500;color:var(--gris);font-size:13px">${ouverts().map(k => esc(k.a.court)).join(" · ")}</small>` : ""}</h2>`;
  if (!liste.length) h += '<p class="vide">Aucune demande en attente. Elles arrivent ici dès qu\'un groupe appelle.</p>';
  h += '<div class="file">' + liste.map(g => avec(g.k, () => {
    const V = visaDef(g.visa), att = maintenant() - g.t;
    return `<button type="button" class="dem${att > 5 * 60000 ? " vieux" : ""}" data-dem="${esc(g.k.id + "|" + g.cle)}">
      <span class="ph">${g.membres.slice(0, 3).map(u => `<img src="${eleveDe(u).photo}" alt="">`).join("")}</span>
      <span class="tx"><b>${multi || g.k !== K ? esc(g.k.a.court) + " · " : ""}${esc(libGroupe(g))}</b><small>${esc(g.visa)} · ${esc(V.titre)}</small></span>
      <span class="att">${depuis(g.t)}</span></button>`;
  })).join("") + "</div>";
  h += `<p class="aide">Toucher une demande : le schéma attendu, les photos du groupe et les critères de l'épreuve liée ; glisser vers la droite pour accorder le visa, ou « À reprendre ».</p>`;
  z.innerHTML = h; brancherBandeau(z);
  z.querySelectorAll("[data-dem]").forEach(b => b.onclick = () => { const [kid, ...r] = b.dataset.dem.split("|"); ouvrirVisa(kid, r.join("|")); });
}
function suiviDe() {
  const tous = roster();
  let h = "";
  const parPoste = new Map();
  tous.forEach(el => { const p = K.SUIVIS.has(el.uid) ? posteDe(el.uid) : -1; if (!parPoste.has(p)) parPoste.set(p, []); parPoste.get(p).push(el); });
  const cles = [...parPoste.keys()].sort((a, b) => (a <= 0 ? 99 : a) - (b <= 0 ? 99 : b) || a - b);
  for (const p of cles) {
    const els = parPoste.get(p);
    if (p === -1 && groupeUnique() && ouverts().length > 1) continue;     // série d'ADM : chaque groupe est sur son système
    const nom = p > 0 ? (groupeUnique() ? "Le groupe" : "Poste " + p) : p === 0 ? "Sans poste" : "Pas encore commencé";
    h += `<div class="poste"><h3>${nom}<small>${els.length} élève${els.length > 1 ? "s" : ""}</small></h3><div class="els">`;
    h += els.map(el => {
      const st = etatEleve(el.uid);
      if (st.absent) return `<div class="el loin"><img src="${el.photo}" alt=""><span class="i"><b>${esc(el.court)}</b><span class="d">pas encore connecté à l'activité</span></span></div>`;
      const cls = st.demande ? "visa" : st.fini ? "fini" : (st.bloque ? "alerte" : "");
      const fl = (st.demande ? '<span class="fl" title="visa demandé">✋</span>' : "") + (st.bloque ? '<span class="fl" title="même étape depuis longtemps">⏱</span>' : "")
        + (st.a3 ? `<span class="fl" title="aide 3 ouverte">🛟${st.a3 > 1 ? st.a3 : ""}</span>` : "") + (st.maint ? '<span class="fl" title="mesure maintenue">⚑</span>' : "")
        + (st.inactif ? '<span class="fl" title="plus de nouvelles depuis 6 min">💤</span>' : "");
      return `<button type="button" class="el ${cls}" data-el="${esc(el.uid)}" data-k="${esc(K.id)}"><img src="${el.photo}" alt=""><span class="i"><b>${esc(el.court)}${fl}</b>
        <span class="e">${st.fini ? "terminé" : esc(st.et ? (partie(st.et.partie) || {}).court + (st.et.type === "visa" ? " · visa " + st.et.visa : st.et.q ? " · " + st.et.q : st.et.type === "texte" ? " · conclusion" : "") : "—")}</span>
        <span class="d">${st.fini ? st.faits + " étapes" : depuis(st.x.t0) + (st.aides ? " · " + st.aides + " aide" + (st.aides > 1 ? "s" : "") : "") + (st.x.n ? " · " + st.x.n + " essai" + (st.x.n > 1 ? "s" : "") : "")}</span>
        <span class="barre-prog"><i style="width:${Math.round(100 * st.faits / st.total)}%"></i></span></span></button>`;
    }).join("") + "</div></div>";
  }
  return h;
}
function rendreSuivi() {
  const z = $("v-suivi");
  let h = bandeauSeance();
  const ks = [...CTX.values()].filter(k => k === K || (k.CONTENU && k.SEANCE && k.SEANCE.etat === "ouverte"));
  const nb = ks.reduce((n, k) => n + k.SUIVIS.size, 0);
  h += `<h2>Suivi <small style="font-weight:500;color:var(--gris);font-size:13px">${nb} élève${nb > 1 ? "s" : ""} au travail</small></h2>`;
  if (ks.length > 1) for (const k of ks) h += `<h3 class="act-titre">${esc(k.a.titre)}${k.SEANCE && k.SEANCE.etat === "ouverte" ? "" : " (fermée)"}</h3>` + avec(k, suiviDe);
  else h += suiviDe();
  h += `<p class="aide">✋ visa demandé · ⏱ même étape depuis plus de ${(K.SEANCE && K.SEANCE.seuil) || 10} min (ou la durée prévue de l'étape) · 🛟 aide 3 ouverte · ⚑ mesure maintenue malgré l'alerte · 💤 plus de nouvelles depuis 6 min. Toucher un élève pour le détail et les actions.</p>`;
  z.innerHTML = h; brancherBandeau(z);
  z.querySelectorAll("[data-el]").forEach(b => b.onclick = () => ouvrirEleve(b.dataset.k, b.dataset.el));
}
function mediane(v) { if (!v.length) return 0; const s = v.slice().sort((a, b) => a - b), k = Math.floor(s.length / 2); return s.length % 2 ? s[k] : (s[k - 1] + s[k]) / 2; }
function rendreEtapes() {
  const z = $("v-etapes"), uids = [...K.SUIVIS.keys()];
  let h = `<h2>Étapes <small style="font-weight:500;color:var(--gris);font-size:13px">${esc(K.a.titre)}</small></h2><p class="aide">Faits / élèves au travail, élèves arrêtés sur l'étape, temps médian, élèves ayant ouvert une aide, essais moyens. Toucher une ligne : les réponses de la classe.</p>`;
  h += '<div class="tab"><table><thead><tr><th>Étape</th><th>Faits</th><th>Ici</th><th>Temps</th><th>Aides</th><th>Essais</th></tr></thead><tbody>';
  let pAvant = "";
  for (const et of etapes()) {
    if (et.partie !== pAvant) { pAvant = et.partie; const p = partie(et.partie); h += `<tr><th colspan="6" style="text-align:left;background:var(--doux)">${esc(p.court)} — ${esc(p.titre)}</th></tr>`; }
    const xs = uids.map(u => (K.SUIVIS.get(u).e || {})[et.id]).filter(Boolean);
    const faits = xs.filter(x => x.ok), ici = uids.filter(u => K.SUIVIS.get(u).pos === et.id).length;
    const tps = faits.filter(x => x.t0 && x.t1 && x.t1 > x.t0).map(x => (x.t1 - x.t0) / 60000);
    const aides = xs.filter(x => (x.a || 0) > 0).length, ess = faits.filter(x => x.n).map(x => x.n);
    h += `<tr class="clic" data-et="${esc(et.id)}"><td>${esc((et.q ? et.q + " · " : "") + et.titre)}</td><td class="num">${faits.length}/${uids.length}</td><td class="num">${ici || ""}</td>
      <td class="num">${tps.length ? Math.round(mediane(tps)) + " min" : ""}</td><td class="num">${aides || ""}</td><td class="num">${ess.length ? (ess.reduce((a, b) => a + b, 0) / ess.length).toFixed(1).replace(".", ",") : ""}</td></tr>`;
  }
  h += "</tbody></table></div>";
  z.innerHTML = h;
  z.querySelectorAll("[data-et]").forEach(r => r.onclick = () => ouvrirReponses(r.dataset.et));
}
let signatureReglages = "";
function rendreReglages(force) {
  const z = $("v-reglages"), a = activite(), k = K;
  const serie = a.serie ? [...CTX.values()].filter(x => x.a.serie === a.serie) : [];
  const sig = JSON.stringify([K.SEANCE, K.seanceLue, classe, K.id, K.GRILLE ? K.GRILLE.id : "", serie.map(x => x.SEANCE ? x.SEANCE.etat : "")]);
  if (!force && sig === signatureReglages && z.innerHTML) return;           // rien n'a changé : on ne casse pas une saisie en cours
  if (!force && z.contains(document.activeElement) && /^(INPUT|SELECT)$/.test(document.activeElement.tagName)) return;
  signatureReglages = sig;
  let h = bandeauSeance();
  if (serie.length > 1 && serie.some(x => !x.SEANCE || x.SEANCE.etat !== "ouverte")) {
    h += `<div class="cle"><h3>${esc(SERIES[a.serie] || a.serie)}</h3><p>${serie.map(x => esc(x.a.court) + (x.SEANCE ? (x.SEANCE.etat === "ouverte" ? " ●" : " (fermée)") : " (à créer)")).join(" · ")}</p>
      <button class="gros" type="button" id="r-serie">Créer et ouvrir toutes les séances de la série</button>
      <p class="aide">Toutes les parties ouvertes, aides en formatif, épreuve d'Évaluer de chaque système liée si elle existe pour cette classe. Les demandes de visa arrivent toutes dans l'onglet Visas.</p></div>`;
  }
  if (K.SEANCE) {
    const P = K.SEANCE.parties || [];
    h += `<h2>Séance</h2><div class="lig"><span><b>${K.SEANCE.etat === "ouverte" ? "Ouverte" : "Fermée"}</b><br><span class="d">${esc(a.titre)} · ${esc(LIB[classe] || classe)}</span></span>
      <button class="mini ${K.SEANCE.etat === "ouverte" ? "danger" : "fini"}" type="button" id="r-etat">${K.SEANCE.etat === "ouverte" ? "Fermer" : "Ouvrir"}</button></div>`;
    h += `<div class="sect">Parties ouvertes aux élèves</div><div class="chips">${K.CONTENU.parties.map(p => `<button type="button" class="chip${P.includes(p.id) ? " on a" : ""}" data-p="${p.id}">${esc(p.court)}</button>`).join("")}</div>`;
    h += `<div class="sect">Aides</div><div class="seg" role="group"><button type="button" data-mode="formatif" class="${K.SEANCE.mode !== "evalue" ? "on" : ""}">Formatif : gratuites</button><button type="button" data-mode="evalue" class="${K.SEANCE.mode === "evalue" ? "on" : ""}">Évalué : 0,5 et 1 point</button></div>`;
    h += `<label class="case"><input type="checkbox" id="r-conc" ${K.SEANCE.conclusions !== false ? "checked" : ""}> Montrer la réponse attendue après celle de l'élève (questions rédigées et conclusions)</label>`;
    h += `<label class="case"><input type="checkbox" id="r-tout" ${K.SEANCE.toutOuvrir ? "checked" : ""}> Tout ouvrir (panne, fin de séance) : toutes les étapes deviennent accessibles, sans visa</label>`;
    h += `<label class="lab" for="r-seuil">Alerte « bloqué » après (minutes sur la même étape, au moins la durée prévue de l'étape)</label><input class="champ-texte" id="r-seuil" type="number" min="3" max="60" value="${(K.SEANCE.seuil) || 10}" style="max-width:120px">`;
    h += `<div class="sect">Critères au visa</div><select class="champ-texte" id="r-epreuve"><option value="">Aucune épreuve liée (visas seulement)</option></select>
      <p class="aide">Une épreuve d'Évaluer de cette classe : ses critères « au poste » s'affichent au visa et se cochent pour les élèves choisis (mêmes saisies que dans Évaluer).</p>`;
    h += `<div class="sect">Codes de secours du jour (élève sans réseau)</div><div id="r-codes" class="chips"><span class="aide">Calcul…</span></div>
      <p class="aide">Si la base ne répond plus, dictez le code du visa au poste : l'élève le tape sous « Pas de réseau ? ». Un code ne vaut que pour aujourd'hui et pour cette classe.</p>`;
  }
  const url = SITE + "activites/guidee.html?a=" + a.fichier;
  h += `<div class="sect">Pour les élèves</div><div class="qr">${a.qr && a.qr.startsWith("data:") ? `<img src="${a.qr}" alt="QR code de l'activité">` : ""}<div><code>${esc(url)}</code><br>
    <button class="mini" type="button" id="r-copier">Copier l'adresse</button> <a class="mini" href="../activites/guidee.html?a=${esc(a.fichier)}" target="_blank" rel="noopener">Ouvrir en aperçu</a></div></div>
    <p class="aide">Le même QR code est imprimé en tête de la feuille de l'activité, avec l'adresse et le chemin sur le site pour ceux qui travaillent sur un ordinateur. Les élèves se connectent avec leur compte du site ; sans compte, l'activité marche sur leur appareil mais vous ne la voyez pas.</p>`;
  if (K.SEANCE) h += `<div class="sect">Fin d'année</div><button class="gros danger" type="button" id="r-effacer">Effacer cette séance (avancement, réponses, visas)</button>`;
  z.innerHTML = h; brancherBandeau(z);
  const rs = $("r-serie"); if (rs) rs.onclick = () => confirmer("Les séances manquantes de la série sont créées et toutes sont ouvertes pour " + (LIB[classe] || classe) + ".",
    async () => { fermerFeuille(); await ouvrirSerie(a.serie); }, { titre: "Ouvrir toute la série", libelle: "Ouvrir", danger: false });
  if (!K.SEANCE) { brancherQr(z, url); return; }
  $("r-etat").onclick = () => majSeance({ etat: k.SEANCE.etat === "ouverte" ? "fermee" : "ouverte" }, k);
  z.querySelectorAll("[data-p]").forEach(b => b.onclick = () => {
    const P = new Set(k.SEANCE.parties || []); P.has(b.dataset.p) ? P.delete(b.dataset.p) : P.add(b.dataset.p);
    majSeance({ parties: k.CONTENU.parties.map(p => p.id).filter(id => P.has(id)) }, k);
  });
  z.querySelectorAll("[data-mode]").forEach(b => b.onclick = () => majSeance({ mode: b.dataset.mode }, k));
  $("r-conc").onchange = e => majSeance({ conclusions: e.target.checked }, k);
  $("r-tout").onchange = e => {
    if (e.target.checked) confirmer("Toutes les étapes deviennent accessibles à tous les élèves, sans attendre les visas. À réserver à une panne ou à la fin de la séance.",
      () => majSeance({ toutOuvrir: true }, k), { titre: "Tout ouvrir ?", libelle: "Tout ouvrir", danger: false, retour: () => { e.target.checked = false; fermerFeuille(); } });
    else majSeance({ toutOuvrir: false }, k);
  };
  $("r-seuil").onchange = e => { const v = Math.max(3, Math.min(60, Number(e.target.value) || 10)); majSeance({ seuil: v }, k); };
  remplirEpreuves(k);
  afficherCodes(k);
  brancherQr(z, url);
  $("r-effacer").onclick = () => confirmer("L'avancement, les réponses et les visas de tous les élèves pour cette activité seront effacés de la base. Les critères cochés dans Évaluer restent.",
    () => effacerSeance(k), { titre: "Effacer la séance", libelle: "Effacer", saisie: "EFFACER" });
}
function brancherQr(z, url) { const c = z.querySelector("#r-copier"); if (c) c.onclick = async () => toast(await copier(url) ? "Adresse copiée" : "Copie impossible"); }
async function remplirEpreuves(k) {
  const s = $("r-epreuve"); if (!s) return;
  try {
    const liste = await grillesDeLaClasse();
    if (!$("r-epreuve") || K !== k) return;
    s.innerHTML = '<option value="">Aucune épreuve liée (visas seulement)</option>' + liste.map(g => `<option value="${esc(g.id)}"${g.id === k.SEANCE.epreuve ? " selected" : ""}>${esc(g.court || g.titre || g.id)}</option>`).join("");
  } catch (e) { s.innerHTML = '<option value="">Épreuves illisibles</option>'; }
  s.onchange = () => majSeance({ epreuve: s.value }, k);
}
async function afficherCodes(k) {
  const z = $("r-codes"); if (!z || !k.CONTENU) return;
  const cs = await Promise.all(Object.keys(k.CONTENU.visas).map(async V => [V, await codeSecours(V, null, k.sid)]));
  if (!$("r-codes") || K !== k) return;
  z.innerHTML = cs.map(([V, c]) => `<div class="lig" style="width:100%"><span>${esc(V)} · ${esc(k.CONTENU.visas[V].titre)}</span><span class="code-sec">${c}</span></div>`).join("")
    + (k.SEANCE.secours && k.SEANCE.secours.date === auj() ? "" : '<p class="aide">Les codes seront actifs dès que la séance sera ouverte aujourd\'hui.</p>');
}
async function effacerSeance(k) {
  const ici = k.sid;
  try {
    const b = writeBatch(db);
    const [e, v] = await Promise.all([getDocs(collection(db, "seances", ici, "eleves")), getDocs(collection(db, "seances", ici, "visas"))]);
    e.docs.forEach(d => b.delete(d.ref)); v.docs.forEach(d => b.delete(d.ref)); b.delete(doc(db, "seances", ici));
    await b.commit(); toast("Séance effacée");
  } catch (x) { toast("Effacement refusé (" + (x.code || "erreur") + ")"); }
}

// ------------------------------------------------------------------ feuille : un visa
function ouvrirVisa(kid, cle) {
  const k = CTX.get(kid);
  const g = k && k.CONTENU ? avec(k, () => { const x = demandes().find(y => y.cle === cle); if (x) x.membres = membresDe(x); return x; }) : null;
  if (!g) { toast("Cette demande n'est plus en attente"); return; }
  feuilleOuverte = { type: "visa", k, cle, g, sel: new Set(g.membres), motif: "", pts: new Set() };
  ouvrirFeuille("", () => { feuilleOuverte = null; });
  rendreFeuille();
}
function rendreFeuille() {
  const fo = feuilleOuverte;
  if (!fo) return;
  const f = document.getElementById("feuille");
  if (!f) return;
  const haut = f.scrollTop;
  avec(fo.k || K, () => {
    if (fo.type === "visa") rendreFeuilleVisa(f, fo);
    else if (fo.type === "eleve") rendreFeuilleEleve(f, fo);
    else if (fo.type === "reponses") rendreFeuilleReponses(f, fo);
  });
  f.scrollTop = haut;
}
function criteresDuVisa(V, def) {
  if (!K.GRILLE || !K.GRILLE.indicateurs) return { du: [], autres: [] };
  const tous = [];
  Object.keys(K.GRILLE.indicateurs).forEach(c => (K.GRILLE.indicateurs[c] || []).forEach(x => { if (!x.f) tous.push(Object.assign({ c }, x)); }));
  if (def && Array.isArray(def.criteres) && def.criteres.length) {
    const dans = x => def.criteres.includes(x.id);
    return { du: def.criteres.map(id => tous.find(x => x.id === id)).filter(Boolean), autres: tous.filter(x => !dans(x)) };
  }
  const re = new RegExp("\\b" + V + "\\b");
  return { du: tous.filter(x => re.test(x.q || "")), autres: tous.filter(x => !re.test(x.q || "")) };
}
function rendreFeuilleVisa(f, fo) {
  const k = K, g = fo.g, V = visaDef(g.visa);
  const tousPoste = g.poste ? [...K.SUIVIS.keys()].filter(u => posteDe(u) === g.poste) : g.uids.slice();
  const membres = [...new Set(membresDe(g).concat(tousPoste))];
  const idents = [...fo.sel].map(u => eleveDe(u).ident).filter(Boolean);
  const cr = criteresDuVisa(g.visa, V);
  const ligneCrit = x => {
    const etats = idents.map(i => ((K.SAISIES.get(i) || {}).ind || {})[x.id] || "");
    const commun = etats.length && etats.every(e => e === etats[0]) ? etats[0] : "";
    return `<div class="ind"><div class="t">${esc(x.t)}<small>${esc(x.c)}${x.q ? " · " + esc(x.q) : ""}</small></div><div class="tri">${["a", "p", "n"].map(e =>
      `<button type="button" class="${commun === e ? "on " + e : ""}" data-ind="${esc(x.id)}" data-e="${e}" aria-label="${{ a: "acquis", p: "partiel", n: "non" }[e]}">${{ a: "A", p: "P", n: "N" }[e]}</button>`).join("")}</div></div>`;
  };
  const multi = ouverts().length > 1;
  let h = `<div class="tete"><div class="qui"><b>${multi ? esc(K.a.court) + " · " : ""}${esc(libGroupe(Object.assign({}, g, { membres })))} · ${esc(g.visa)}</b><div class="sous">${esc(V.titre)} · attend depuis ${depuis(g.t)}</div></div></div>`;
  h += `<div class="mbs">${membres.map(u => {
    const el = eleveDe(u), dem = g.uids.includes(u);
    return `<div class="tuile${fo.sel.has(u) ? " sel" : ""}" data-u="${esc(u)}" tabindex="0"><img src="${el.photo}" alt=""><div class="nm">${esc(el.court)}${dem ? " ✋" : ""}</div></div>`;
  }).join("")}</div><p class="aide" style="margin-top:-4px">Toucher une photo pour retirer ou ajouter l'élève.</p>`;
  const images = Array.isArray(V.images) && V.images.length ? V.images : (K.IMGS[V.image] ? [K.IMGS[V.image]] : []);
  h += images.map(u => `<div class="ref"><img src="${u}" alt="Schéma ou photo attendus"></div>`).join("");
  h += `<div class="sect">Ce que vous vérifiez</div><div class="pts">${(V.prof || []).map((t, n) => `<label class="pt"><input type="checkbox" data-pt="${n}" ${fo.pts.has(n) ? "checked" : ""}>${esc(t)}</label>`).join("")}</div>`;
  if (K.GRILLE) {
    h += `<div class="sect">Critères — ${esc(K.GRILLE.court || K.GRILLE.titre || K.GRILLE.id)} (pour les élèves choisis)</div>`;
    if (!K.saisiesPretes) h += '<p class="aide">Lecture des saisies…</p>';
    else if (!cr.du.length && !cr.autres.length) h += '<p class="aide">Aucun critère « au poste » dans cette épreuve.</p>';
    else {
      h += cr.du.map(ligneCrit).join("");
      if (cr.autres.length) h += `<details${cr.du.length ? "" : " open"}><summary class="aide">Autres critères au poste (${cr.autres.length})</summary>${cr.autres.map(ligneCrit).join("")}</details>`;
    }
  }
  const motifs = Array.isArray(V.motifs) && V.motifs.length ? V.motifs : MOTIFS;
  h += `<div class="sect">Ou renvoyer « À reprendre »</div><div class="motifs">${motifs.map(m => `<button type="button" class="chip${fo.motif === m ? " on n" : ""}" data-motif="${esc(m)}">${esc(m)}</button>`).join("")}</div>
    <input class="champ-texte" id="motif-libre" placeholder="Précision (facultatif)" maxlength="120" value="">
    <button type="button" class="gros danger" id="refuser" style="margin-top:8px">À reprendre</button>
    <button type="button" class="gros sec" id="fermer">Fermer</button>`;
  h += `<div class="pied-visa"><div class="glisse" id="glisse"><span>Glisser pour accorder le visa${fo.sel.size > 1 ? " (" + fo.sel.size + " élèves)" : ""}</span><div class="poignee" id="poignee">➜</div></div></div>`;
  const libre = f.querySelector("#motif-libre") ? f.querySelector("#motif-libre").value : "";
  f.innerHTML = h;
  f.querySelector("#motif-libre").value = libre;
  f.querySelectorAll("[data-pt]").forEach(c => c.onchange = () => { c.checked ? fo.pts.add(+c.dataset.pt) : fo.pts.delete(+c.dataset.pt); });
  f.querySelectorAll("[data-u]").forEach(t => t.onclick = () => { fo.sel.has(t.dataset.u) ? fo.sel.delete(t.dataset.u) : fo.sel.add(t.dataset.u); rendreFeuille(); });
  f.querySelectorAll("[data-ind]").forEach(b => b.onclick = () => {
    if (!fo.sel.size) { toast("Choisir au moins un élève"); return; }
    const deja = b.classList.contains("on");
    avec(k, () => cocher([...fo.sel].map(u => eleveDe(u).ident).filter(Boolean), b.dataset.ind, deja ? "" : b.dataset.e));
  });
  f.querySelectorAll("[data-motif]").forEach(b => b.onclick = () => { fo.motif = fo.motif === b.dataset.motif ? "" : b.dataset.motif; rendreFeuille(); });
  f.querySelector("#fermer").onclick = fermerFeuille;
  f.querySelector("#refuser").onclick = async () => {
    if (!fo.sel.size) { toast("Choisir au moins un élève"); return; }
    const motif = [fo.motif, f.querySelector("#motif-libre").value.trim()].filter(Boolean).join(" : ");
    try { await avec(k, () => refuser([...fo.sel], g.visa, motif)); fermerFeuille(); toast("Renvoyé : à reprendre" + (motif ? " (" + motif + ")" : "")); }
    catch (e) { toast("Écriture refusée (" + (e.code || "erreur") + ")"); }
  };
  brancherGlisse(f.querySelector("#glisse"), async () => {
    if (!fo.sel.size) { toast("Choisir au moins un élève"); return false; }
    try {
      await avec(k, () => accorder([...fo.sel], g.visa)); fermerFeuille();
      toast("Visa " + g.visa + " accordé : " + avec(k, () => [...fo.sel].map(u => eleveDe(u).court).join(", "))); return true;
    } catch (e) { toast("Écriture refusée (" + (e.code || "erreur") + ")"); return false; }
  });
}
/* le geste : glisser la poignée jusqu'au bout (un toucher ne suffit pas, pour éviter les visas par erreur) */
function brancherGlisse(zone, action) {
  const p = zone.querySelector(".poignee");
  let x0 = null, dx = 0, max = 0, fini = false;
  const pos = v => { p.style.transform = "translateX(" + v + "px)"; };
  zone.addEventListener("pointerdown", e => {
    if (fini || (e.target !== p && !p.contains(e.target))) return;
    x0 = e.clientX; max = zone.clientWidth - p.offsetWidth - 8; zone.setPointerCapture(e.pointerId); p.style.transition = "none";
  });
  zone.addEventListener("pointermove", e => { if (x0 === null) return; dx = Math.max(0, Math.min(max, e.clientX - x0)); pos(dx); });
  const fin = async () => {
    if (x0 === null) return;
    x0 = null; p.style.transition = "transform .2s";
    if (dx >= max * 0.9) { fini = true; pos(max); zone.classList.add("fait"); const ok = await action(); if (!ok) { fini = false; zone.classList.remove("fait"); pos(0); } }
    else pos(0);
    dx = 0;
  };
  zone.addEventListener("pointerup", fin); zone.addEventListener("pointercancel", fin);
  // au clavier : Entrée sur la poignée (accessibilité)
  p.tabIndex = 0; p.setAttribute("role", "button"); p.setAttribute("aria-label", "Accorder le visa");
  p.addEventListener("keydown", async e => { if (e.key === "Enter" && !fini) { fini = true; if (!(await action())) fini = false; } });
}

// ------------------------------------------------------------------ feuille : un élève
function ouvrirEleve(kid, uid) {
  const k = CTX.get(kid) || K;
  feuilleOuverte = { type: "eleve", k, uid }; ouvrirFeuille("", () => { feuilleOuverte = null; }); rendreFeuille();
}
function resumeReponse(et, x) {
  if (!x) return "";
  const r = x.r || {};
  if (et.type === "texte") return r.t ? esc(r.t) : "";
  if (et.type === "visa") return x.ok ? (r.par === "code" ? "visa par code de secours" : x.p ? "débloqué" : "visa accordé") + (x.t1 ? " à " + heure(x.t1) : "") : (x.refus ? "à reprendre" + (x.refus.motif ? " : " + esc(x.refus.motif) : "") : "");
  const parts = [];
  (et.champs || []).forEach(c => { if (r[c.id] !== undefined) parts.push(esc(c.label.replace(/[=:]\s*$/, "").trim()) + " = " + (c.texte ? "« " + esc(r[c.id]) + " »" : nombre(r[c.id])) + (c.unite ? " " + esc(c.unite) : "")); });
  (et.questions || []).forEach((q, n) => { if (r["q" + n] !== undefined) parts.push((et.type === "exo" ? (r["q" + n] === q.bonne ? "✓ " : "✗ ") : "→ ") + esc(q.choix[r["q" + n]] || "?")); });
  if (r.j) parts.push("« " + esc(r.j) + " »");
  if (x.m) parts.push("⚑ maintenue malgré l'alerte");
  if (x.s) parts.push("passée (facultative)");
  return parts.join("\n");
}
function rendreFeuilleEleve(f, fo) {
  const k = K, el = eleveDe(fo.uid), st = etatEleve(fo.uid);
  let h = `<div class="tete"><img src="${el.photo}" alt=""><div class="qui"><b>${esc(el.nom)}</b><div class="sous">${ouverts().length > 1 ? esc(K.a.court) + " · " : ""}${posteDe(fo.uid) && !groupeUnique() ? "poste " + posteDe(fo.uid) + " · " : ""}${st.absent ? "pas encore connecté à l'activité" : st.faits + "/" + st.total + " étapes"}${st.pen ? " · pénalité des aides " + String(st.pen).replace(".", ",") + " pt" : ""}</div></div></div>`;
  if (!st.absent) {
    h += `<div class="sect">En ce moment</div><p>${st.fini ? "Activité terminée." : esc(libEtape(st.et)) + " — depuis " + depuis(st.x.t0) + (st.x.n ? ", " + st.x.n + " essai" + (st.x.n > 1 ? "s" : "") : "") + (st.x.a ? ", aide " + st.x.a + " ouverte" : "")}</p>`;
    if (!st.fini && st.et) {
      h += st.et.type === "visa" ? `<button class="gros" type="button" id="e-visa">Accorder le visa ${esc(st.et.visa)} à cet élève</button>`
        : `<button class="gros sec" type="button" id="e-debloquer">Débloquer cette étape (elle compte comme faite)</button>`;
    }
    if (!groupeUnique()) h += `<label class="lab" for="e-poste">Poste</label><select class="champ-texte" id="e-poste">${Array.from({ length: 13 }, (_, n) => `<option value="${n}"${posteDe(fo.uid) === n ? " selected" : ""}>${n ? "Poste " + n : "Sans poste"}</option>`).join("")}</select>`;
    h += '<div class="sect">Étapes</div>';
    const e = st.s.e || {};
    for (const et of etapes()) {
      const x = e[et.id];
      if (!x) continue;
      const dur = x.t0 && x.t1 ? Math.max(1, Math.round((x.t1 - x.t0) / 60000)) + " min" : x.t0 ? "en cours" : "";
      h += `<div class="det-et"><div class="h"><span>${x.ok ? '<span class="ok">✓</span>' : '<span class="ko">…</span>'} ${esc((et.q ? et.q + " · " : "") + et.titre)}</span>
        <span class="d" style="font-size:12px;color:var(--gris);white-space:nowrap">${dur}${x.n ? " · " + x.n + " ess." : ""}${x.a ? " · aide " + x.a : ""}${x.l ? " · " + x.l + " ress." : ""}${x.m ? " · ⚑" : ""}${x.p ? " · débloquée" : ""}</span></div>
        ${resumeReponse(et, x) ? `<div class="r">${resumeReponse(et, x)}</div>` : ""}</div>`;
    }
  }
  h += '<button type="button" class="gros sec" id="fermer" style="margin-top:12px">Fermer</button>';
  f.innerHTML = h;
  f.querySelector("#fermer").onclick = fermerFeuille;
  const v = f.querySelector("#e-visa"); if (v) v.onclick = async () => { await avec(k, () => accorder([fo.uid], st.et.visa)); toast("Visa accordé"); };
  const d = f.querySelector("#e-debloquer"); if (d) d.onclick = () => { feuilleOuverte = null; confirmer("L'étape « " + st.et.titre + " » sera comptée comme faite pour cet élève, qui passe à la suivante.",
    async () => { await avec(k, () => debloquer(fo.uid, st.et.id)); toast("Étape débloquée"); ouvrirEleve(k.id, fo.uid); }, { titre: "Débloquer l'étape", libelle: "Débloquer", danger: false, retour: () => ouvrirEleve(k.id, fo.uid) }); };
  const p = f.querySelector("#e-poste"); if (p) p.onchange = async () => { await avec(k, () => changerPoste(fo.uid, Number(p.value))); toast("Poste changé"); };
}

// ------------------------------------------------------------------ feuille : les réponses de la classe à une étape
function ouvrirReponses(id) { feuilleOuverte = { type: "reponses", k: K, id }; ouvrirFeuille("", () => { feuilleOuverte = null; }); rendreFeuille(); }
function rendreFeuilleReponses(f, fo) {
  const et = etape(fo.id);
  const lignes = roster().filter(el => K.SUIVIS.has(el.uid)).map(el => ({ el, x: (K.SUIVIS.get(el.uid).e || {})[fo.id] })).filter(o => o.x);
  let h = `<div class="tete"><div class="qui"><b>${esc((et.q ? et.q + " · " : "") + et.titre)}</b><div class="sous">${esc(K.a.court)} · ${lignes.filter(o => o.x.ok).length} réponse(s)</div></div></div>`;
  if (et.questions && et.questions.length) {
    et.questions.forEach((q, n) => {
      const nb = q.choix.map((c, j) => lignes.filter(o => o.x.r && o.x.r["q" + n] === j).length);
      h += `<div class="sect">${esc(q.texte)}</div>` + q.choix.map((c, j) => `<div class="lig"><span>${et.type === "exo" && j === q.bonne ? "✓ " : ""}${esc(c)}</span><b>${nb[j]}</b></div>`).join("");
    });
  }
  h += '<div class="sect">Par élève</div><div class="reps">' + (lignes.map(o => `<div class="rep"><b>${esc(o.el.court)}${posteDe(o.el.uid) && !groupeUnique() ? " · poste " + posteDe(o.el.uid) : ""}${o.x.ok ? "" : " · en cours"}</b>${resumeReponse(et, o.x) || "—"}</div>`).join("") || '<p class="vide">Personne n\'est encore passé par cette étape.</p>') + "</div>";
  h += '<button type="button" class="gros sec" id="fermer" style="margin-top:12px">Fermer</button>';
  f.innerHTML = h;
  f.querySelector("#fermer").onclick = fermerFeuille;
}

// ------------------------------------------------------------------ navigation et démarrage
document.querySelectorAll("nav.bas button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll("nav.bas button").forEach(x => x.classList.remove("on")); b.classList.add("on");
  document.querySelectorAll(".vue").forEach(v => v.classList.remove("on"));
  $("v-" + b.dataset.v).classList.add("on");
}));
setInterval(() => { if (document.visibilityState === "visible") rendre(); }, 30000);     // les durées avancent
window.addEventListener("online", () => rendre());

function remplirSelects() {
  const acts = ACTIVITES.filter(a => (CLASSES_DE[a.filiere] || []).includes(classe));
  if (!acts.find(a => a.id === actId)) actId = acts.length ? acts[0].id : ACTIVITES[0].id;
  $("activite").innerHTML = acts.map(a => `<option value="${esc(a.id)}"${a.id === actId ? " selected" : ""}>${esc(a.titre)}</option>`).join("");
}
function choisir(id) {
  actId = CTX.has(id) ? id : [...CTX.keys()][0];
  reglage("guidee-activite", actId);
  K = CTX.get(actId); signatureReglages = "";
  chargerContenu(K);
  rendre();
}
garde($("verrou")).then(async () => {
  try { R = await eleves(); }
  catch (e) { document.querySelector("main").innerHTML = '<div class="panne"><b>Liste des élèves illisible</b><p>Recharger la page ; si cela persiste, refermer puis rouvrir le code enseignant depuis l\'espace prof.</p></div>'; return; }
  try { COMPTES = await comptes(); } catch (e) { COMPTES = []; console.warn("comptes illisibles", e && e.code); }
  try { const p = await lireDonnees("visas_guidees.json"); if (p && p.activites) PROF = p; } catch (e) { console.warn("visas des activités guidées (espace enseignant) illisibles", e && e.message); }
  const classes = [...new Set(ACTIVITES.flatMap(a => CLASSES_DE[a.filiere] || []))];
  if (!classes.includes(classe)) classe = classes[classes.length - 1] || "";
  $("classe").innerHTML = classes.map(c => `<option value="${esc(c)}"${c === classe ? " selected" : ""}>${esc(LIB[c] || (R.classes[c] && R.classes[c].libelle) || c)}</option>`).join("");
  $("classe").onchange = () => { if (feuilleOuverte) fermerFeuille(); classe = $("classe").value; abonnerClasse(); remplirSelects(); choisir(actId); };
  $("activite").onchange = () => choisir($("activite").value);
  $("contenu").hidden = false; $("nav").hidden = false;
  abonnerClasse(); remplirSelects(); choisir(actId);
});
window.__SEANCE = {
  get SUIVIS() { return K.SUIVIS; }, get VISAS() { return K.VISAS; }, get SEANCE() { return K.SEANCE; }, get GRILLE() { return K.GRILLE; },
  get SAISIES() { return K.SAISIES; }, get K() { return K; }, CTX, demandes: () => toutesDemandes(), accorder, refuser,
  codeSecours, empreinte, rendre, choisir
};
