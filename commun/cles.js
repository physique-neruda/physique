/* =====================================================================
   commun/cles.js — les clés du site sur cet appareil (site v64, novembre 2026)

   Depuis la v64, tout le contenu du site est chiffré (outils/chiffrer.py) :
     - une clé par filière (1sti2d, bts-crsa, bts-et, bts-tsma) : documents, questionnaires,
       cartes, partie de la filière du catalogue ;
     - la clé « commune » : les animations et la partie commune du catalogue ;
     - la clé « prive » : l'espace enseignant et les animations des chapitres retirés.
   Un élève connecté reçoit ses clés depuis la base (entrainement/compte.js) ; sans base, le mot
   de passe de secours de la classe ou le code enseignant les ouvre ici même (enveloppes de
   acces.js). Les clés restent dans l'onglet (sessionStorage), et sur l'appareil
   (localStorage) seulement si l'élève a coché « Rester connecté ».

   window.NerudaCles :
     enLigne              vrai sur le site publié (acces.js v2) ; faux dans l'atelier (tout en clair)
     pret()               promesse : clés mémorisées relues et vérifiées
     cle(nom), noms(), filieres(), source()
     enregistrer({nom: {id, k}}, garder, source)  -> promesse : noms acceptés
     secours(mot, garder) -> promesse : noms ouverts ([] : mot de passe inconnu)
     retirer([noms])      referme ces clés-là (onglet et appareil)
     oublier(tout)        efface toutes les clés (onglet et appareil) ; tout = vrai : aussi le code
                          enseignant gardé par l'espace prof (base IndexedDB « neruda-prof »)
   La clé de l'espace enseignant (« prive ») ne va JAMAIS sur l'appareil (localStorage) : elle ne
   vit que dans l'onglet, même avec « Rester connecté ».
     dechiffrer(url, aad, nom) / texte(url, aad, nom)
     surChangement(fn)
   Script classique (pas un module) : il marche sur les vieux navigateurs du lycée.
   ===================================================================== */
(function (racine) {
  "use strict";
  var A = racine.ACCES2 || null;
  var P = racine.ACCES_PROF || null;
  var NOM = "neruda.cles";
  var ANCIENNES = ["acces-1sti2d", "acces-bts-crsa", "acces-bts-et", "acces-bts-tsma"];
  var TE = new TextEncoder(), TD = new TextDecoder();
  var cache = {}, brutes = {}, source = null, attente = null, ecouteurs = [];

  function st(n) { try { return racine[n]; } catch (e) { return null; } }
  function lireSt(s) { try { var b = s && s.getItem(NOM); return b ? JSON.parse(b) : null; } catch (e) { return null; } }
  function ecrireSt(s, o) { try { if (!s) return; if (o) s.setItem(NOM, JSON.stringify(o)); else s.removeItem(NOM); } catch (e) { } }
  function ecrireBrut(s, k, v) { try { if (!s) return; if (v === null) s.removeItem(k); else s.setItem(k, v); } catch (e) { } }
  function deB64(s) { var b = atob(s), u = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; }
  function versB64(buf) { var u = new Uint8Array(buf), s = ""; for (var i = 0; i < u.length; i++) s += String.fromCharCode(u[i]); return btoa(s); }
  function capable() { return !!(racine.crypto && crypto.subtle && racine.fetch); }
  function importer(octets) { return crypto.subtle.importKey("raw", octets, "AES-GCM", false, ["decrypt"]); }
  function deriver(mot, sel, tours) {
    return crypto.subtle.importKey("raw", TE.encode(mot), "PBKDF2", false, ["deriveBits"])
      .then(function (b) { return crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: deB64(sel), iterations: tours }, b, 256); })
      .then(importer);
  }
  function ouvrirEnveloppe(k, e, aad) {
    return crypto.subtle.decrypt({ name: "AES-GCM", iv: deB64(e.iv), additionalData: TE.encode(aad) }, k, deB64(e.cle));
  }
  function temoinOk(nom, k) {
    var t = A && A.cles[nom];
    if (!t) return Promise.resolve(false);
    return crypto.subtle.decrypt({ name: "AES-GCM", iv: deB64(t.iv) }, k, deB64(t.temoin))
      .then(function (x) { return TD.decode(x) === "acces-ok:" + nom; }, function () { return false; });
  }
  function prevenir() {
    ecouteurs.slice().forEach(function (f) { try { f(); } catch (e) { } });
    try { racine.dispatchEvent(new CustomEvent("neruda-cles")); } catch (e) { }
  }
  function memoriser(garder) {
    var o = Object.keys(brutes).length ? { v: 2, source: source, cles: brutes, maj: Date.now() } : null;
    ecrireSt(st("sessionStorage"), o);
    var appareil = null;
    if (garder && o) {                                      // jamais la clé de l'espace enseignant
      var c = {};
      for (var n in brutes) if (Object.prototype.hasOwnProperty.call(brutes, n) && n !== "prive") c[n] = brutes[n];
      if (Object.keys(c).length) appareil = { v: 2, source: source, cles: c, maj: o.maj };
    }
    ecrireSt(st("localStorage"), appareil);
  }

  /* Relit les clés de l'onglet puis de l'appareil ; garde celles qui ouvrent encore leur témoin. */
  function charger() {
    if (!A || !capable()) { attente = Promise.resolve(cache); return attente; }
    var l = lireSt(st("localStorage")), s = lireSt(st("sessionStorage")), tout = {};
    [l, s].forEach(function (o) {                           // l'onglet l'emporte sur l'appareil
      if (!o || o.v !== 2 || !o.cles) return;
      for (var n in o.cles) if (Object.prototype.hasOwnProperty.call(o.cles, n)) tout[n] = o.cles[n];
      if (o.source) source = o.source;
    });
    var noms = Object.keys(tout);
    attente = Promise.all(noms.map(function (n) {
      var e = tout[n];
      if (!e || !A.cles[n] || e.id !== A.cles[n].id) return null;    // clé d'une autre version du site
      return importer(deB64(e.k)).then(function (k) {
        return temoinOk(n, k).then(function (ok) { if (ok) { cache[n] = k; brutes[n] = e; } });
      }, function () { });
    })).then(function () {
      if (noms.length && !Object.keys(cache).length) { ecrireSt(st("sessionStorage"), null); ecrireSt(st("localStorage"), null); source = null; }
      return cache;
    });
    return attente;
  }

  function enregistrer(nouvelles, garder, src) {
    if (!A || !capable()) return Promise.resolve([]);
    return (attente || charger()).then(function () {
      return Promise.all(Object.keys(nouvelles || {}).map(function (n) {
        var e = nouvelles[n];
        if (!A.cles[n] || !e || !e.k) return null;
        if (e.id && e.id !== A.cles[n].id) return null;
        return importer(deB64(e.k)).then(function (k) {
          return temoinOk(n, k).then(function (ok) {
            if (!ok) return null;
            cache[n] = k; brutes[n] = { id: A.cles[n].id, k: e.k };
            return n;
          });
        }, function () { return null; });
      }));
    }).then(function (r) {
      var acceptees = r.filter(Boolean);
      if (acceptees.length) { if (src) source = src; memoriser(!!garder); prevenir(); }
      return acceptees;
    });
  }

  function oublier(tout) {
    cache = {}; brutes = {}; source = null;
    ["sessionStorage", "localStorage"].forEach(function (n) {
      var s = st(n);
      ecrireSt(s, null);
      ANCIENNES.concat(["acces-prive"]).forEach(function (k) { ecrireBrut(s, k, null); });
      if (tout) ecrireBrut(s, "prof-jeton", null);
    });
    if (tout) { try { racine.indexedDB.deleteDatabase("neruda-prof"); } catch (e) { } }   // code gardé par l'espace prof
    prevenir();
  }
  function retirer(noms) {
    var fait = false;
    (noms || []).forEach(function (n) { if (cache[n] || brutes[n]) { delete cache[n]; delete brutes[n]; fait = true; } });
    if ((noms || []).indexOf("prive") >= 0) ["sessionStorage", "localStorage"].forEach(function (n) { ecrireBrut(st(n), "acces-prive", null); });
    if (!fait) return;
    var garder = !!lireSt(st("localStorage"));
    if (!Object.keys(brutes).length) source = null;
    memoriser(garder);
    prevenir();
  }

  /* Le mot de passe de secours d'une classe : la clé de la filière et la clé commune.
     Sinon, le code enseignant : toutes les clés, et la trace lue par l'espace prof. */
  function secours(mot, garder) {
    mot = String(mot || "").trim().toLowerCase();
    if (!A || !capable()) return Promise.reject(new Error("Ce navigateur ne sait pas déchiffrer : essayer Chrome, Firefox ou Safari à jour."));
    if (!mot) return Promise.resolve([]);
    var S = A.secours, trouvees = {};
    return deriver(mot, S.sel, S.tours).then(function (kw) {
      return Promise.all(Object.keys(S.cles).map(function (f) {
        var e = S.cles[f];
        return ouvrirEnveloppe(kw, e.env, "cle|" + f).then(function (b) {
          trouvees[f] = { k: versB64(b) };
          return ouvrirEnveloppe(kw, e.envc, "cle|commune").then(function (bc) { trouvees.commune = { k: versB64(bc) }; });
        }, function () { });
      }));
    }).then(function () {
      if (Object.keys(trouvees).length) return enregistrer(trouvees, garder, "secours");
      return codeEnseignant(mot, garder);
    });
  }
  function codeEnseignant(mot, garder) {
    if (!P) return Promise.resolve([]);
    return deriver(mot, P.sel, P.tours).then(function (kp) {
      return crypto.subtle.decrypt({ name: "AES-GCM", iv: deB64(P.iv) }, kp, deB64(P.temoin)).then(function (t) {
        if (TD.decode(t) !== "acces-ok:prof") return [];
        var tr = {}, travaux = [];
        Object.keys(P.cles || {}).forEach(function (f) {
          travaux.push(ouvrirEnveloppe(kp, P.cles[f], f).then(function (b) { tr[f] = { k: versB64(b) }; }, function () { }));
        });
        if (P.commune) travaux.push(ouvrirEnveloppe(kp, P.commune, "commune").then(function (b) { tr.commune = { k: versB64(b) }; }, function () { }));
        if (P.prive) travaux.push(ouvrirEnveloppe(kp, P.prive, "prive").then(function (b) {
          tr.prive = { k: versB64(b) };
          var trace = JSON.stringify({ sel: P.sel, k: versB64(b) });     // lue par prof/socle.js, onglet seulement
          ecrireBrut(st("sessionStorage"), "acces-prive", trace);
        }, function () { }));
        return Promise.all(travaux).then(function () { return enregistrer(tr, garder, "prof"); });
      }, function () { return []; });
    });
  }

  function dechiffrer(url, aad, nom) {
    return (attente || charger()).then(function () {
      var k = cache[nom];
      if (!k) { var e = new Error("cle"); e.cle = nom; throw e; }
      return fetch(url, { cache: "no-cache" }).then(function (r) {
        if (!r.ok) throw new Error("absent");
        return r.arrayBuffer();
      }).then(function (buf) {
        var u = new Uint8Array(buf);
        if (String.fromCharCode(u[0], u[1], u[2], u[3]) !== "NRD1") throw new Error("format");
        return crypto.subtle.decrypt({ name: "AES-GCM", iv: u.slice(4, 16), additionalData: TE.encode(aad) }, k, u.slice(16));
      });
    });
  }

  racine.NerudaCles = {
    enLigne: !!A,
    pret: function () { return attente || charger(); },
    cle: function (n) { return cache[n] || null; },
    noms: function () { return Object.keys(cache); },
    filieres: function () { return Object.keys(cache).filter(function (n) { return n !== "commune" && n !== "prive"; }); },
    source: function () { return source; },
    enregistrer: enregistrer,
    secours: secours,
    retirer: retirer,
    oublier: oublier,
    dechiffrer: dechiffrer,
    texte: function (url, aad, nom) { return dechiffrer(url, aad, nom).then(function (b) { return TD.decode(b); }); },
    surChangement: function (f) { if (typeof f === "function") ecouteurs.push(f); }
  };
  charger();
})(window);
