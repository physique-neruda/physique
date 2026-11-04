/* =====================================================================
   commun/corriges.js — les corrigés à débloquer par code (site v64.2, novembre 2026)

   Chaque corrigé (un exercice, une activité ou une partie d'activité) est un fichier chiffré
   corriges/<nom>.enc avec SA clé. La partie de la filière du catalogue (commun/donnees.js) en donne
   la liste et, pour chaque classe, une enveloppe par corrigé : la clé, chiffrée avec le CODE DE LA
   CLASSE (10 signes, ex. 7KQ4M-X2PJD) que le professeur donne en classe ou sur Pronote.
     - code de classe : ouvre l'enveloppe de la classe (PBKDF2-SHA256, 100 000 tours, sel de la classe) ;
     - code NOMINATIF (sans rapport avec celui de la classe) : ouvre l'enveloppe de l'élève, dans la base
       (codes/{uid}, déposée par « comptes_firebase.py cles », lisible par lui seul : même forme, sel de
       l'élève) ; le code d'un camarade ne donne rien ;
     - une activité découpée en parties a aussi un code pour toute l'activité (groupe) ;
     - le code enseignant ouvert sur l'appareil (clé « prive ») ouvre tous les corrigés.
   Une clé obtenue reste sur l'appareil (onglet ; appareil aussi si « Rester connecté ») et, avec un
   compte élève, dans la base (deblocages/{uid}) : le corrigé reste ouvert sur ses autres appareils.
   Se déconnecter l'efface de l'appareil (commun/cles.js). Ce qui est gardé sur l'appareil porte le nom de
   son propriétaire (compte, ou accès de secours) : un autre compte ne s'en sert jamais, il est effacé.

   window.NerudaCorriges :
     partie(cat, fil)          la partie « corriges » de la filière (catalogue déchiffré), ou null
     elements(cat, fil, cleCh) les corrigés d'un chapitre (cleCh : la clé du chapitre de l'accueil)
     ouvert(id) / prof()       clé sur l'appareil / code enseignant ouvert (tout s'ouvre)
     essayer(code, cat, o)     promesse {ok: [ids], nominatif} ; o = {fil, ids} (facultatif) ; en cas d'échec,
                               une erreur .code = "incorrect" (.perso = "absent" si les codes personnels de
                               l'élève ne sont pas, ou pas tous, dans la base) ; tant que le compte n'est pas
                               connu, le code attend (10 s au plus), puis seuls les codes de classe sont essayés
     ouvrir(el)                promesse : le PDF (ArrayBuffer)
     synchroniser()            fusion avec la base (compte élève) ; promesse : nombre de clés reçues
     lien(texte)               [{id, code}] d'un lien « #corrige=id~CODE,id~CODE », ou null
     garderLien(texte) / lienGarde() / oublierLien()   lien reçu avant la connexion (onglet)
     normaliser(code) / joli(code) / oublier() / surChangement(fn)
   Calculs identiques à outils/chiffrer.py (vecteurs d'essai : outils/tests_codes.py).
   Script classique (pas un module), chargé après commun/cles.js.
   ===================================================================== */
(function (racine) {
  "use strict";
  var C = racine.NerudaCles;
  var script = document.currentScript;
  var RACINE = script && script.src ? script.src.replace(/commun\/corriges\.js(\?.*)?$/, "") : "";
  var NOM = "neruda.corriges", LIEN = "neruda.corrige-lien";
  var TE = new TextEncoder();
  var stock = null, stockQui = "", ecouteurs = [], importees = {}, compteConnu = false, attentes = [];
  var provisoires = {};        // débloqués avant que le compte soit connu : dans la page seulement, puis à lui
  var MOTIF_ID = /^[a-z0-9-]+\.[a-z0-9]+\.[A-Za-z0-9_-]+$/;

  function st(n) { try { return racine[n]; } catch (e) { return null; } }
  function lireSt(s) { try { var b = s && s.getItem(NOM); return b ? JSON.parse(b) : null; } catch (e) { return null; } }
  function ecrireSt(s, o) { try { if (!s) return; if (o) s.setItem(NOM, JSON.stringify(o)); else s.removeItem(NOM); } catch (e) { } }
  function deB64(s) { var b = atob(s), u = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; }
  function versB64(buf) { var u = new Uint8Array(buf), s = ""; for (var i = 0; i < u.length; i++) s += String.fromCharCode(u[i]); return btoa(s); }
  function prevenir() { ecouteurs.slice().forEach(function (f) { try { f(); } catch (e) { } }); }
  function compte() { return racine.NerudaCompte || null; }
  function etatCompte() { var N = compte(); try { return N ? N.etat() : null; } catch (e) { return null; } }
  /* « Rester connecté » (ou accès de secours gardé) : les clés du site sont aussi sur l'appareil */
  function garder() { try { return !!(st("localStorage") && st("localStorage").getItem("neruda.cles")); } catch (e) { return false; } }

  /* Le propriétaire : « u:<uid> » (compte, une fois connu), « secours » (mot de passe de la classe), « prof »
     (code enseignant) ; null tant que le compte n'est pas encore connu. */
  function identite() {
    var src = C && C.source ? C.source() : null;
    if (src === "secours") return "secours";
    if (src === "prof") return "prof";
    if (!compteConnu) return null;
    var e = etatCompte();
    return (e && e.connecte && e.uid) ? "u:" + e.uid : null;
  }
  function charger() {
    if (stock) return stock;
    stock = {}; stockQui = "";
    var bon = function (o) { return !!(o && o.v === 1 && o.cles && typeof o.cles === "object"); };
    var loc = lireSt(st("localStorage")), ses = lireSt(st("sessionStorage"));
    // l'onglet l'emporte sur l'appareil ; ce qui appartient à un autre propriétaire n'est pas repris
    stockQui = bon(ses) ? String(ses.qui || "") : bon(loc) ? String(loc.qui || "") : "";
    [loc, ses].forEach(function (o) {
      if (!bon(o) || String(o.qui || "") !== stockQui) return;
      for (var id in o.cles) if (Object.prototype.hasOwnProperty.call(o.cles, id) && valide(o.cles[id])) stock[id] = o.cles[id];
    });
    return stock;
  }
  /* Clés venues d'un compte : attendre que le compte soit connu (session restaurée par Firebase) avant d'essayer
     un code — sinon ni la classe ni les codes personnels de l'élève ne sont connus. */
  function attendreCompte(ms) {
    if (compteConnu || !(C && C.source && C.source() === "compte")) return Promise.resolve(true);
    return new Promise(function (ok) {
      var fini = false;
      function fin() { if (!fini) { fini = true; ok(compteConnu); } }
      attentes.push(fin);
      setTimeout(fin, ms);
    });
  }
  /* Rend vrai si ce qui est gardé appartient à qui utilise l'appareil (sinon l'efface). Ce qui a été débloqué dans
     la page avant que le compte soit connu lui revient. */
  function proprietaire() {
    charger();
    var q = identite();
    if (!q) return false;
    if (!stockQui) { if (Object.keys(stock).length) { stockQui = q; memoriser(); } else stockQui = q; }
    else if (stockQui !== q) { stock = {}; stockQui = q; importees = {}; memoriser(); prevenir(); }
    var p = Object.keys(provisoires);
    if (p.length) {
      var neufs = {};
      p.forEach(function (id) { if (!stock[id]) { stock[id] = provisoires[id]; neufs[id] = provisoires[id]; } });
      provisoires = {};
      memoriser();
      envoyer(neufs);
    }
    return true;
  }
  function valide(e) { return !!(e && typeof e.k === "string" && /^[A-Za-z0-9+/]{43}=$/.test(e.k)); }
  function memoriser() {
    var o = Object.keys(stock || {}).length ? { v: 1, qui: stockQui || "", cles: stock, maj: Date.now() } : null;
    ecrireSt(st("sessionStorage"), o);
    ecrireSt(st("localStorage"), garder() ? o : null);
  }
  function oublier() {
    stock = {}; stockQui = ""; importees = {}; provisoires = {};
    ecrireSt(st("sessionStorage"), null); ecrireSt(st("localStorage"), null);
    prevenir();
  }

  /* ---------- codes ---------- */
  function normaliser(code) {
    var c = String(code || "").toUpperCase().replace(/[\s\-–—_.·]/g, "");
    if (!c) return { erreur: "Écris le code donné par le professeur." };
    if (/[IO01]/.test(c)) return { erreur: "Un code ne contient ni I, ni O, ni 0, ni 1 : vérifie ces signes." };
    if (!/^[A-Z2-9]+$/.test(c)) return { erreur: "Un code ne contient que des lettres et des chiffres." };
    if (c.length !== 10) return { erreur: "Un code a 10 signes (par exemple 7KQ4M-X2PJD) : il en manque ou il y en a trop." };
    return { code: c };
  }
  function joli(c) { c = String(c || ""); return c.length === 10 ? c.slice(0, 5) + "-" + c.slice(5) : c; }

  /* ---------- catalogue ---------- */
  function partie(cat, fil) {
    var P = cat && cat.CORRIGES && cat.CORRIGES[fil];
    return (P && P.v === 1 && Array.isArray(P.elements)) ? P : null;
  }
  function plat(s) { return (s || "").toString().normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
  function cleDuChapitre(nom) { return plat(nom).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }
  function elements(cat, fil, cleCh) {
    var P = partie(cat, fil);
    if (!P) return [];
    return P.elements.filter(function (e) { return cleDuChapitre(e.chapitre) === cleCh; });
  }
  function groupes(cat, fil, cleCh) {
    var P = partie(cat, fil);
    if (!P) return [];
    return (P.groupes || []).filter(function (g) { return cleDuChapitre(g.chapitre) === cleCh; });
  }

  /* ---------- clés ---------- */
  function prof() { return !!(C && C.cle && C.cle("prive") && C.deriverPrive); }
  /* Ce qui est gardé sert à qui utilise l'appareil ; tant que le compte n'est pas connu, seulement ce qui vient
     d'être débloqué dans cette page (provisoires : le compte le prend dès qu'il est connu). */
  function ouvert(id) { return prof() || (proprietaire() && !!stock[id]) || !!provisoires[id]; }
  function cleDe(id) {
    if (importees[id]) return importees[id];
    var e = (proprietaire() ? stock[id] : null) || provisoires[id], p;
    if (e) p = crypto.subtle.importKey("raw", deB64(e.k), "AES-GCM", false, ["decrypt"]);
    else if (prof()) p = C.deriverPrive("neruda|corriges|cle|" + id).then(function (b) {
      return crypto.subtle.importKey("raw", b, "AES-GCM", false, ["decrypt"]);
    });
    else { var x = new Error("verrou"); return Promise.reject(x); }
    importees[id] = p;
    p.catch(function () { delete importees[id]; });
    return p;
  }
  function ouvrir(el) {
    if (!el || !/^[0-9a-f]{20}$/.test(el.f || "") || !MOTIF_ID.test(el.id || "")) return Promise.reject(new Error("format"));
    return cleDe(el.id).then(function (k) {
      return fetch(RACINE + "corriges/" + el.f + ".enc", { cache: "no-cache" }).then(function (r) {
        if (!r.ok) throw new Error("absent");
        return r.arrayBuffer();
      }).then(function (buf) {
        var u = new Uint8Array(buf);
        if (String.fromCharCode(u[0], u[1], u[2], u[3]) !== "NRD1") throw new Error("format");
        return crypto.subtle.decrypt({ name: "AES-GCM", iv: u.slice(4, 16), additionalData: TE.encode("corriges/" + el.f) }, k, u.slice(16));
      });
    });
  }

  /* ---------- déblocage ---------- */
  function deriver(code, sel, tours) {
    return crypto.subtle.importKey("raw", TE.encode(code), "PBKDF2", false, ["deriveBits"])
      .then(function (b) { return crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: deB64(sel), iterations: tours }, b, 256); })
      .then(function (bits) { return crypto.subtle.importKey("raw", bits, "AES-GCM", false, ["decrypt"]); });
  }
  /* Les corrigés et groupes de la partie : {id: membres (groupe) ou null}. */
  function connus(P) {
    var o = {};
    P.elements.forEach(function (e) { if (MOTIF_ID.test(e.id || "")) o[e.id] = null; });
    (P.groupes || []).forEach(function (g) { if (MOTIF_ID.test(g.id || "") && Array.isArray(g.membres)) o[g.id] = g.membres; });
    return o;
  }
  /* Essaie un code (déjà normalisé) sur des enveloppes {id: {iv, cle|c}} : une seule dérivation (le sel est celui de
     la classe, ou de l'élève), puis chaque enveloppe ; rend {id: clé brute} des corrigés ouverts. */
  function essayerEnveloppes(P, env, sel, tours, aad, code, ids) {
    if (!env || !sel) return Promise.resolve({ t: {}, perime: false });
    var membres = connus(P), perime = false;
    return deriver(code, sel, tours).then(function (kw) {
      var trouves = {};
      var liste = (ids && ids.length ? ids : Object.keys(env)).filter(function (id) {
        return Object.prototype.hasOwnProperty.call(membres, id) && env[id] && typeof env[id].iv === "string";
      });
      return Promise.all(liste.map(function (id) {
        var e = env[id];
        return crypto.subtle.decrypt({ name: "AES-GCM", iv: deB64(e.iv), additionalData: TE.encode(aad + id) }, kw, deB64(e.cle || e.c || ""))
          .then(function (b) {
            var u = new Uint8Array(b), m = membres[id];
            if (m) { if (u.length !== 32 * m.length) { perime = true; return; } m.forEach(function (x, i) { trouves[x] = u.slice(32 * i, 32 * i + 32); }); }
            else if (u.length === 32) trouves[id] = u;
            else perime = true;                       // le bon code, mais une enveloppe d'une autre version du site
          }, function () { });
      })).then(function () { return { t: trouves, perime: perime }; });
    });
  }
  function essayerClasse(P, classe, code, ids) {
    return essayerEnveloppes(P, (P.enveloppes || {})[classe], (P.sels || {})[classe], P.tours || 100000,
                             "corrige|" + classe + "|", code, ids);
  }
  /* Codes personnels : l'enveloppe de l'élève (codes/{uid}), pour l'année de la partie. */
  function persoValable(P, doc) { return !!(doc && doc.annee === P.annee && doc.env && doc.sel && doc.identifiant); }
  function persoComplet(P, doc) {
    if (!persoValable(P, doc)) return false;
    var ids = Object.keys(connus(P));
    for (var i = 0; i < ids.length; i++) if (!doc.env[ids[i]]) return false;
    return true;
  }
  function essayerPerso(P, doc, code, ids) {
    if (!persoValable(P, doc)) return Promise.resolve({ t: {}, perime: false });
    return essayerEnveloppes(P, doc.env, doc.sel, doc.tours || 100000, "nominatif|" + doc.identifiant + "|", code, ids);
  }
  function essayer(code, cat, o) {
    o = o || {};
    var n = normaliser(code);
    if (n.erreur) return Promise.reject(new Error(n.erreur));
    if (!racine.crypto || !crypto.subtle) return Promise.reject(new Error("Ce navigateur ne sait pas déchiffrer : essayer Chrome, Firefox ou Safari à jour."));
    var fils = Object.keys((cat && cat.CORRIGES) || {}).filter(function (f) { return partie(cat, f) && (!o.fil || f === o.fil); });
    if (!fils.length) return Promise.reject(new Error("Aucun corrigé à débloquer pour l'instant."));
    // compte encore inconnu au bout de 10 s (réseau très lent, Firebase injoignable) : seuls les codes de classe
    // sont essayés, et ce qui s'ouvre reste dans la page jusqu'à ce que le compte soit connu
    return attendreCompte(o.attente || 10000).then(function () { return essayerConnu(n.code, cat, o, fils); });
  }
  function essayerConnu(code, cat, o, fils) {
    var e = etatCompte(), N = compte();
    var maClasse = (e && e.connecte && !e.prof && !e.invite && e.classe) ? e.classe : "";
    var perso = (maClasse && N && N.codesCorriges) ? N.codesCorriges(!!o.relire).catch(function () { return null; }) : Promise.resolve(null);
    var incomplet = false;
    return perso.then(function (doc) {
      var essais = [];
      fils.forEach(function (f) {
        var P = partie(cat, f);
        var classes = maClasse ? ((P.sels || {})[maClasse] ? [maClasse] : []) : Object.keys(P.sels || {});
        classes.forEach(function (cl) {
          essais.push(essayerClasse(P, cl, code, o.ids).then(function (r) { return { t: r.t, perime: r.perime, nominatif: false }; }));
        });
        if (maClasse && classes.length) {
          if (!persoComplet(P, doc)) incomplet = true;
          if (doc) essais.push(essayerPerso(P, doc, code, o.ids).then(function (r) { return { t: r.t, perime: r.perime, nominatif: true }; }));
        }
      });
      if (!essais.length) throw new Error("Ces corrigés ne sont pas ceux de ta classe.");
      return Promise.all(essais);
    }).then(function (res) {
      var neufs = {}, ok = [], nominatif = false, t = Date.now();
      res.forEach(function (r) {
        if (r.perime && r.nominatif) incomplet = true;
        Object.keys(r.t).forEach(function (id) {
          if (ok.indexOf(id) < 0) ok.push(id);
          if (r.nominatif) nominatif = true;
          neufs[id] = { k: versB64(r.t[id]), t: t, n: r.nominatif ? "nominatif" : "classe" };
        });
      });
      if (!ok.length && maClasse && incomplet && !o.relire)        // codes personnels peut-être déposés entre-temps
        return essayerConnu(code, cat, Object.assign({}, o, { relire: true }), fils);
      if (!ok.length) {
        var err = new Error(!maClasse ? "Code incorrect : vérifie-le, ou demande au professeur (un code personnel ne marche qu'une fois connecté avec le compte de l'élève à qui il est donné)."
          : incomplet ? "Code incorrect : vérifie-le. Si c'est un code personnel, il ne marche pas encore sur ton compte : préviens le professeur."
          : "Code incorrect : vérifie-le, ou demande au professeur (un code personnel ne marche qu'avec le compte de l'élève à qui il est donné).");
        err.code = "incorrect";
        if (maClasse && incomplet) err.perso = "absent";
        throw err;
      }
      var s = charger();
      if (proprietaire()) {
        Object.keys(neufs).forEach(function (id) { if (!s[id]) s[id] = neufs[id]; });
        memoriser();
        envoyer(neufs);
      } else {                                   // compte pas encore connu : rien n'est écrit ni effacé sur l'appareil
        Object.keys(neufs).forEach(function (id) { provisoires[id] = neufs[id]; });
      }
      prevenir();
      return { ok: ok, nominatif: nominatif };
    });
  }

  /* ---------- base (compte élève) ---------- */
  /* Le compte élève connecté, s'il est aussi le propriétaire de ce qui est gardé (pas l'accès de secours ni le code
     enseignant ouverts par-dessus un compte). */
  function avecCompte() {
    var e = etatCompte(), N = compte();
    return !!(e && e.connecte && e.uid && !e.invite && !e.prof && N && N.deblocages && N.enregistrerDeblocages
              && identite() === "u:" + e.uid) ? N : null;
  }
  function envoyer(cles) {
    var N = avecCompte();
    if (!N || !Object.keys(cles).length) return Promise.resolve(false);
    return N.enregistrerDeblocages(cles).catch(function () { return false; });
  }
  var enCours = null, enCoursQui = "";
  function synchroniser() {
    var N = avecCompte(), q = identite();
    if (!N || !q) return Promise.resolve(0);
    if (enCours && enCoursQui === q) return enCours;
    enCoursQui = q;
    var p = enCours = N.deblocages().then(function (distant) {
      if (identite() !== q || !proprietaire()) return 0;        // le compte a changé pendant la lecture
      var s = stock, recus = 0, manquants = {};
      Object.keys(distant || {}).forEach(function (id) {
        if (MOTIF_ID.test(id) && valide(distant[id]) && !s[id]) { s[id] = distant[id]; recus++; }
      });
      Object.keys(s).forEach(function (id) { if (!(distant || {})[id]) manquants[id] = s[id]; });
      if (recus) { memoriser(); prevenir(); }
      if (Object.keys(manquants).length) envoyer(manquants);
      return recus;
    }, function () { return 0; });
    p.then(function () { if (enCours === p) enCours = null; }, function () { if (enCours === p) enCours = null; });
    return p;
  }

  /* ---------- liens « #corrige=… » (Pronote) ---------- */
  function lien(texte) {
    var m = /(?:^|#)corrige=([^#&]*)/.exec(String(texte || ""));
    if (!m) return null;
    var brut = m[1];
    try { brut = decodeURIComponent(brut); } catch (e) { }
    var out = [];
    brut.split(",").forEach(function (b) {
      var p = b.split("~"), id = (p[0] || "").trim(), c = normaliser(p[1] || "");
      if (MOTIF_ID.test(id) && c.code && out.length < 40) out.push({ id: id, code: c.code });
    });
    return out;
  }
  function garderLien(texte) { try { st("sessionStorage").setItem(LIEN, String(texte || "")); } catch (e) { } }
  function lienGarde() { try { return st("sessionStorage").getItem(LIEN) || ""; } catch (e) { return ""; } }
  function oublierLien() { try { st("sessionStorage").removeItem(LIEN); } catch (e) { } }

  if (C && C.surChangement) C.surChangement(function () {
    // plus aucune clé sur l'appareil (déconnexion) : les corrigés débloqués partent aussi
    if (!C.noms().length && ((stock && Object.keys(stock).length) || Object.keys(provisoires).length)) oublier();
    importees = {};
  });
  /* Le compte est connu au premier état publié par compte.js (fiche lue, avant la synchronisation des cartes), ou
     quand il est prêt. */
  function compteEstConnu() {
    if (compteConnu) return;
    compteConnu = true;
    proprietaire(); prevenir();
    attentes.splice(0).forEach(function (f) { f(); });
  }
  function brancher() {
    var N = compte();
    if (!N || brancher.fait) return;
    brancher.fait = true;
    N.surChangement(function (evt) {
      if (!evt || evt.type !== "etat") return;
      if (!compteConnu) { compteEstConnu(); synchroniser(); }
      else { proprietaire(); synchroniser(); }
    });
    Promise.resolve(N.pret).then(function () { compteEstConnu(); return synchroniser(); }, compteEstConnu);
  }
  document.addEventListener("neruda-compte-pret", brancher);
  brancher();

  racine.NerudaCorriges = {
    partie: partie, elements: elements, groupes: groupes, ouvert: ouvert, prof: prof,
    essayer: essayer, ouvrir: ouvrir, synchroniser: synchroniser,
    lien: lien, garderLien: garderLien, lienGarde: lienGarde, oublierLien: oublierLien,
    normaliser: normaliser, joli: joli, oublier: oublier, cleDuChapitre: cleDuChapitre,
    surChangement: function (f) { if (typeof f === "function") ecouteurs.push(f); }
  };
})(window);
