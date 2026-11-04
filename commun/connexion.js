/* =====================================================================
   commun/connexion.js — la carte « Se connecter » (site v64)

   NerudaConnexion.monter(zone, {apres, titre})
     dessine le formulaire dans zone : identifiant (prénom.initiale), mot de passe, « Rester
     connecté », puis l'accès de secours (mot de passe de la classe ou code enseignant), replié.
     apres() est appelé quand des clés sont ouvertes sur l'appareil.
   NerudaConnexion.attendreCompte(ms) : promesse de window.NerudaCompte (entrainement/compte.js,
     module chargé à part par la page ; il apporte le SDK Firebase depuis www.gstatic.com).
   Utilisé par l'accueil, les pages d'accès des animations et les pages d'entraînement.
   ===================================================================== */
(function (racine) {
  "use strict";
  function attendreCompte(ms) {
    return new Promise(function (ok, ko) {
      if (racine.NerudaCompte) { ok(racine.NerudaCompte); return; }
      var fini = false;
      document.addEventListener("neruda-compte-pret", function () { if (!fini) { fini = true; ok(racine.NerudaCompte); } });
      setTimeout(function () {
        if (fini) return; fini = true;
        if (racine.NerudaCompte) ok(racine.NerudaCompte); else ko(new Error("indisponible"));
      }, ms || 12000);
    });
  }
  function el(id) { return document.getElementById(id); }

  function monter(zone, opts) {
    opts = opts || {};
    var n = "cx" + Math.floor(Math.random() * 1e6);        // identifiants uniques si deux cartes
    zone.innerHTML = '<form class="porte" id="' + n + '-f" novalidate>'
      + '<h2>' + (opts.titre || "Se connecter") + '</h2>'
      + '<label for="' + n + '-id">Identifiant</label>'
      + '<input type="text" id="' + n + '-id" name="username" autocomplete="username" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="prénom.initiale" required>'
      + '<label for="' + n + '-mdp">Mot de passe</label>'
      + '<input type="password" id="' + n + '-mdp" name="password" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="les trois mots de ta feuille" required>'
      + '<label class="case"><input type="checkbox" id="' + n + '-rester"> Rester connecté sur cet appareil</label>'
      + '<p class="erreur" id="' + n + '-err" role="alert"></p>'
      + '<button class="principal" type="submit" id="' + n + '-ok">Se connecter</button>'
      + '<p class="aide">Identifiant et mot de passe sont sur la feuille donnée en classe. Perdus ? M. Cronenberger t\'en donne un nouveau.</p>'
      + '<details class="secours" id="' + n + '-sec"><summary>Accès de secours</summary>'
      + '<p class="aide">Si la connexion est en panne, le professeur peut donner le mot de passe de la classe.</p>'
      + '<label for="' + n + '-code">Mot de passe de la classe ou code enseignant</label>'
      + '<input type="password" id="' + n + '-code" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false">'
      + '<p class="erreur" id="' + n + '-err2" role="alert"></p>'
      + '<button class="secondaire-bouton" type="button" id="' + n + '-codeok">Ouvrir avec ce code</button>'
      + '</details></form>';
    var f = el(n + "-f"), err = el(n + "-err"), err2 = el(n + "-err2"), ok = el(n + "-ok"), okc = el(n + "-codeok");
    try { if (localStorage.getItem("neruda.rester") === "1") el(n + "-rester").checked = true; } catch (e) { }

    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var id = el(n + "-id").value.trim(), mdp = el(n + "-mdp").value, rester = el(n + "-rester").checked;
      if (!id || !mdp) { err.textContent = "Écris ton identifiant et ton mot de passe."; return; }
      ok.disabled = true; ok.textContent = "Connexion…"; err.textContent = "";
      attendreCompte().then(function (NC) {
        return NC.connecter(id, mdp, rester);
      }, function () {
        throw new Error("Le service de connexion ne répond pas : vérifie le réseau, puis recharge la page.");
      }).then(function () {
        if (!racine.NerudaCles.noms().length)
          throw new Error("Tu es connecté, mais les clés de ta classe ne sont pas arrivées. Réessaie dans un instant ; si cela continue, préviens M. Cronenberger.");
        if (opts.apres) opts.apres();
      }).catch(function (x) {
        err.textContent = (x && x.message) || "Connexion impossible pour l'instant.";
      }).then(function () { ok.disabled = false; ok.textContent = "Se connecter"; });
    });
    okc.addEventListener("click", function () {
      var code = el(n + "-code").value, rester = el(n + "-rester").checked;
      if (!code.trim()) { err2.textContent = "Écris le code."; return; }
      okc.disabled = true; okc.textContent = "Vérification…"; err2.textContent = "";
      racine.NerudaCles.secours(code, rester).then(function (noms) {
        if (!noms.length) { err2.textContent = "Code incorrect."; return; }
        if (opts.apres) opts.apres();
      }).catch(function (x) { err2.textContent = (x && x.message) || "Impossible de vérifier le code."; })
        .then(function () { okc.disabled = false; okc.textContent = "Ouvrir avec ce code"; });
    });
    el(n + "-code").addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); okc.click(); } });
    return { focus: function () { try { el(n + "-id").focus(); } catch (e) { } } };
  }

  racine.NerudaConnexion = { monter: monter, attendreCompte: attendreCompte };
})(window);
