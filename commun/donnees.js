/* =====================================================================
   commun/donnees.js — le catalogue et les données d'entraînement (site v64 ; v64.2 : corrigés à débloquer)

   window.NerudaDonnees :
     catalogue()         promesse {FILIERES, DOCUMENTS, CORRIGES}
                         atelier : ce que définit catalogue.js (en clair ; chargé au besoin) ;
                         site publié : les parties de catalogue/ que les clés de l'appareil
                         ouvrent (commune + filière), remises dans l'ordre du catalogue.
     chapitre(fil, cle)  promesse : l'objet CHAPITRE (questionnaires et cartes d'un chapitre),
                         lu dans entrainement/qcm-<fil>-<cle>.js (atelier) ou .js.enc (site publié).
                         Site publié : les images (entrainement/media/…, chiffrées elles aussi) y sont
                         notées data-nrd-src au lieu de src ;
     surveillerImages(el, fil)  les déchiffre et les affiche dans el, au fur et à mesure ;
     sourcesImages(html)        rend le HTML avec src (export Anki).
   Charger après commun/cles.js (et catalogue.js dans l'atelier).
   ===================================================================== */
(function (racine) {
  "use strict";
  var script = document.currentScript;
  var RACINE = script && script.src ? script.src.replace(/commun\/donnees\.js(\?.*)?$/, "") : "";
  var C = racine.NerudaCles;
  var promesseCatalogue = null;

  function chargerScript(url) {
    return new Promise(function (ok, ko) {
      var s = document.createElement("script");
      s.src = url; s.onload = function () { ok(); }; s.onerror = function () { ko(new Error("absent")); };
      document.head.appendChild(s);
    });
  }
  function executer(texte) {
    var s = document.createElement("script");
    s.textContent = texte;
    document.head.appendChild(s);
    s.parentNode.removeChild(s);
  }
  function clair() {
    /* catalogue.js déclare FILIERES et DOCUMENTS avec const : ce ne sont pas des propriétés de window */
    var f = [], d = [];
    try { f = (typeof FILIERES !== "undefined") ? FILIERES : (racine.FILIERES || []); } catch (e) { }
    try { d = (typeof DOCUMENTS !== "undefined") ? DOCUMENTS : (racine.DOCUMENTS || []); } catch (e) { }
    return { FILIERES: f, DOCUMENTS: d, CORRIGES: {} };
  }

  function catalogue(rafraichir) {
    if (!racine.ACCES2) {
      /* atelier : le catalogue en clair, chargé ici si la page ne l'a pas déjà fait */
      var c = clair();
      if (c.FILIERES.length) return Promise.resolve(c);
      return chargerScript(RACINE + "catalogue.js").then(clair, clair);
    }
    if (promesseCatalogue && !rafraichir) return promesseCatalogue;
    promesseCatalogue = C.pret().then(function () {
      var parties = racine.ACCES2.catalogue || {}, res = { FILIERES: [], DOCUMENTS: [], CORRIGES: {} };
      var noms = Object.keys(parties).filter(function (n) { return C.cle(n); });
      return Promise.all(noms.map(function (n) {
        return C.texte(RACINE + parties[n], "catalogue/" + n, n).then(function (t) {
          var p = JSON.parse(t);
          if (p.filieres) res.FILIERES = p.filieres;
          res.DOCUMENTS = res.DOCUMENTS.concat(p.documents || []);
          if (p.corriges) res.CORRIGES[n] = p.corriges;
        });
      })).then(function () {
        res.DOCUMENTS.sort(function (a, b) { return (a._i || 0) - (b._i || 0); });
        return res;
      });
    });
    promesseCatalogue.catch(function () { promesseCatalogue = null; });
    return promesseCatalogue;
  }
  if (C && C.surChangement) C.surChangement(function () { promesseCatalogue = null; });

  /* ---- images des questionnaires et des cartes (site publié : chiffrées, clé de la filière) ---- */
  var MOTIF_IMG = /(<img\b[^>]*?\s)src=(["'])(media\/[^"'<>]+)\2/gi;
  function noterImages(o) {
    if (typeof o === "string") return o.indexOf("media/") >= 0 ? o.replace(MOTIF_IMG, "$1data-nrd-src=$2$3$2") : o;
    if (Array.isArray(o)) { for (var i = 0; i < o.length; i++) o[i] = noterImages(o[i]); return o; }
    if (o && typeof o === "object") { for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) o[k] = noterImages(o[k]); }
    return o;
  }
  function sourcesImages(html) { return String(html || "").replace(/data-nrd-src=/g, "src="); }
  var images = {};
  function typeImage(c) { return /\.svg$/i.test(c) ? "image/svg+xml" : /\.jpe?g$/i.test(c) ? "image/jpeg" : /\.gif$/i.test(c) ? "image/gif" : /\.webp$/i.test(c) ? "image/webp" : "image/png"; }
  function image(chemin, fil) {
    var id = fil + "|" + chemin;
    if (!images[id]) {
      var essai = function (nom) { return C.dechiffrer(RACINE + "entrainement/" + chemin + ".enc", "entrainement/" + chemin, nom); };
      images[id] = essai(fil).catch(function () { return essai("commune"); })        // image partagée : clé commune
        .then(function (b) { return URL.createObjectURL(new Blob([b], { type: typeImage(chemin) })); });
      images[id].catch(function () { delete images[id]; });
    }
    return images[id];
  }
  function resoudre(el, fil) {
    if (!el || !el.querySelectorAll) return;
    [].forEach.call(el.querySelectorAll("img[data-nrd-src]"), function (img) {
      var chemin = img.getAttribute("data-nrd-src");
      img.removeAttribute("data-nrd-src");
      if (!/^media\/[A-Za-z0-9_./-]+$/.test(chemin) || chemin.indexOf("..") >= 0) return;
      if (!racine.ACCES2) { img.src = chemin; return; }
      image(chemin, fil).then(function (u) { img.src = u; }, function () { if (!img.alt) img.alt = "(image indisponible)"; });
    });
  }
  function surveillerImages(el, fil) {
    resoudre(el, fil);
    if (el && racine.MutationObserver) new MutationObserver(function () { resoudre(el, fil); }).observe(el, { childList: true, subtree: true });
  }

  function chapitre(fil, cle) {
    fil = String(fil || "").replace(/[^a-z0-9-]/g, "");
    cle = String(cle || "").replace(/[^0-9A-Za-z]/g, "");
    var nom = "qcm-" + fil + "-" + cle + ".js";
    racine.CHAPITRE = null;
    if (!racine.ACCES2) return chargerScript(RACINE + "entrainement/" + nom).then(function () { return racine.CHAPITRE; });
    return C.pret().then(function () {
      if (!C.cle(fil)) { var e = new Error("cle"); e.cle = fil; throw e; }
      return C.texte(RACINE + "entrainement/" + nom + ".enc", "entrainement/" + nom, fil);
    }).then(function (t) { executer(t); return noterImages(racine.CHAPITRE); });
  }

  racine.NerudaDonnees = { racine: RACINE, catalogue: catalogue, chapitre: chapitre,
                           surveillerImages: surveillerImages, sourcesImages: sourcesImages };
})(window);
