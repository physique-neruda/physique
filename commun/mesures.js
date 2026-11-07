/* =====================================================================
   commun/mesures.js — mesures d'activité (site v65, novembre 2026)

   Ne note RIEN tant que le professeur n'a pas activé les mesures (tableau de bord de l'espace prof, après
   l'information des élèves) : entrainement/compte.js lit ce réglage dans la base (reglages/site) et le
   recopie sur l'appareil (neruda.mesures = l'uid du compte mesuré), pour un vrai compte d'élève seulement.

   Ce qui est noté, sur l'appareil (neruda.activite, entrainement/srs.js) puis dans le compte (activite/{uid}) :
     - le temps de travail ACTIF par jour et par sorte de page (cartes, questionnaires, animations, reste du
       site), compté par tranches de 15 s seulement quand la page est affichée et qu'une action a eu lieu
       dans les 2 dernières minutes : une page oubliée ouverte ne compte pas ;
     - les ouvertures de chaque animation et le temps passé dans chacune ;
     - le nombre de documents ouverts.
   Jamais : ce qui est tapé, l'heure précise, l'adresse des pages, quoi que ce soit hors du site.

   window.NerudaMesures :
     actif()                       vrai si les mesures sont activées sur cet appareil
     demarrer(categorie, anim)     compte le temps de cette page : "cartes", "qcm", "anim" (avec le nom de
                                   l'animation) ou "site"
     ouverture(anim)               une ouverture d'animation
     document()                    un document ouvert
   Script classique (pas un module) ; demande entrainement/srs.js (chargé avant). Sans lui, ne fait rien.
   ===================================================================== */
(function (racine) {
  "use strict";
  if (racine.NerudaMesures) return;
  var CLE = "neruda.activite", TRANCHE = 15, INACTIF = 120000, ENVOI = 300;
  var categorie = null, animation = "", derniere = Date.now(), cumul = 0, minuterie = null;

  function st() { try { return racine.localStorage; } catch (e) { return null; } }
  function actif() { var s = st(); try { return !!(s && s.getItem("neruda.mesures") && racine.NerudaSRS); } catch (e) { return false; } }
  function noter(quoi) {
    var s = st(), S = racine.NerudaSRS;
    if (!s || !S || !actif()) return;
    try {
      var r = S.noterActivite(s.getItem(CLE), S.appareil(s), quoi);
      s.setItem(CLE, JSON.stringify(r));
    } catch (e) { }
  }
  function envoyer() {
    try { if (racine.NerudaCompte && racine.NerudaCompte.toucher) racine.NerudaCompte.toucher("activite"); } catch (e) { }
  }
  function visible() { try { return document.visibilityState !== "hidden"; } catch (e) { return true; } }
  function tic() {
    if (!categorie || !actif() || !visible() || Date.now() - derniere > INACTIF) return;
    noter({ categorie: categorie, secondes: TRANCHE, animation: animation });
    cumul += TRANCHE;
    if (cumul >= ENVOI) { cumul = 0; envoyer(); }
  }
  function action() { derniere = Date.now(); }
  function brancher() {
    ["pointerdown", "keydown", "wheel", "touchstart", "scroll", "input"].forEach(function (e) {
      try { racine.addEventListener(e, action, { passive: true, capture: true }); } catch (x) { }
    });
    try {
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") { if (cumul) { cumul = 0; envoyer(); } }
        else action();
      });
    } catch (e) { }
  }

  racine.NerudaMesures = {
    actif: actif,
    demarrer: function (cat, anim) {
      categorie = String(cat || "site");
      animation = String(anim || "").toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 60);
      derniere = Date.now();
      if (!minuterie) { brancher(); minuterie = setInterval(tic, TRANCHE * 1000); }
    },
    ouverture: function (anim) { noter({ animation: anim, ouverture: true }); },
    document: function () { noter({ document: true }); }
  };
})(window);
