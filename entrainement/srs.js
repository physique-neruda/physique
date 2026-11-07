/* =====================================================================
   srs.js — la mémoire de l'entraînement (v61, novembre 2026 ; v64 : journal, identifiants des cartes ;
   v65 : outils v2, animations à jeux, mesures d'activité et réussite question par question)

   Tout ce qui décide QUAND revoir une carte, comment garder un score de
   questionnaire, comment fusionner deux historiques (le téléphone et
   l'ordinateur, ou le local et le compte) et comment fabriquer le code
   de sauvegarde. Aucune dépendance, aucun accès réseau : ce fichier ne
   fait que des calculs sur des objets.

   Script classique (pas un module) pour marcher en file:// et sur les
   vieux navigateurs Android du lycée ; en Node, il s'exporte aussi avec
   module.exports pour les tests (entrainement/tests/srs.test.mjs).

   Clés de stockage (localStorage) :
     neruda.cartes.<filière>.<chapitre>   état v2 des cartes du chapitre
     neruda.qcm.<filière>.<chapitre>.<type>  état v2 d'un questionnaire
     neruda.serie                           série de jours de révision
     neruda.journal                         v64 : nombre de réponses aux cartes par jour et par
                                            appareil (l'écran de l'accueil) ; voyage avec les cartes
     neruda.appareil                        v64 : identifiant aléatoire de l'appareil (ne voyage pas)
     instr-<nom>, les clés propres des simulations de la 1re STI2D et celles
     des deux outils (outil-transformer-formule, outil-conversion-unites) :
                                            données des simulations
                                            (écrites par les simulations
                                            elles-mêmes, lues ici)
     neruda.anim.<nom>                      v65 : jeux d'une animation ({<jeu>: {ok, essais,
                                            etoiles}}), fusionnés jeu par jeu
     neruda.activite                        v65 : temps de travail et ouvertures des animations,
                                            par jour et par appareil (mesures activées par le
                                            professeur, après l'information des élèves)
     neruda.qstat.<filière>.<chapitre>.<type>  v65 : réussite question par question d'un
                                            questionnaire (mêmes conditions) ; voyage avec les
                                            mesures d'activité (activite/{uid})
     neruda.mesures                         v65 : « 1 » quand les mesures sont activées (lu dans
                                            la base par compte.js ; ne voyage pas)

   État v2 d'un chapitre de cartes :
     {"v":2,"maj":<ms>,"cartes":{"<indice>":{"e":2.5,"i":<jours>,
       "d":"AAAA-MM-JJ","n":<révisions>,"l":"AAAA-MM-JJ","maj":<ms>}}}
     e : facilité (plancher 1,3)   i : intervalle en jours (0 = nouvelle)
     d : échéance                   n : nombre de réponses données
     l : dernière révision          maj : horodatage de la réponse
   L'ancien format (v1) était un simple tableau des indices « sus » :
   il est converti automatiquement (carte sue → intervalle 7 jours).

   État v2 d'un questionnaire :
     {"v":2,"meilleur":n,"dernier":n,"total":N,"tentatives":k,
      "rates":[indices des questions ratées au dernier essai],
      "date":"AAAA-MM-JJ","maj":<ms>}
   L'ancien format était la chaîne du nombre de bonnes réponses.

   Règle de fusion, partout : élément par élément, l'horodatage « maj »
   le plus récent gagne ; pour un questionnaire, le meilleur score et le
   nombre d'essais sont pris au maximum des deux côtés.
   ===================================================================== */
(function (racine) {
  "use strict";

  var SRS = {};
  SRS.VERSION = 2;
  SRS.JOUR_MS = 86400000;
  SRS.PAQUET_NOUVELLES = 10;   // cartes nouvelles servies par série
  SRS.SEUIL_APPRISE = 7;       // intervalle (jours) à partir duquel une carte est « apprise »
  SRS.FACILITE_DEPART = 2.5;
  SRS.FACILITE_MIN = 1.3;

  // ------------------------------------------------------------ dates
  function deuxChiffres(n) { return (n < 10 ? "0" : "") + n; }
  /* Date locale au format AAAA-MM-JJ (jamais l'UTC : à 23 h 30 on est
     encore « aujourd'hui »). */
  SRS.aujourdhui = function (d) {
    d = d || new Date();
    return d.getFullYear() + "-" + deuxChiffres(d.getMonth() + 1) + "-" + deuxChiffres(d.getDate());
  };
  function versDate(iso) {
    var p = String(iso || "").split("-");
    return new Date(+p[0], (+p[1] || 1) - 1, +p[2] || 1, 12, 0, 0);   // midi : à l'abri des changements d'heure
  }
  SRS.plusJours = function (iso, n) {
    var d = versDate(iso);
    d.setDate(d.getDate() + (n || 0));
    return SRS.aujourdhui(d);
  };
  SRS.joursEntre = function (a, b) {
    return Math.round((versDate(b) - versDate(a)) / SRS.JOUR_MS);
  };
  SRS.dateValide = function (iso) { return /^\d{4}-\d{2}-\d{2}$/.test(String(iso || "")); };

  // ------------------------------------------------------------ cartes
  function nombre(x, defaut) { x = Number(x); return isFinite(x) ? x : defaut; }

  /* Lit la valeur brute du localStorage (chaîne, objet ou null) et rend un
     état v2 propre. L'ancien tableau d'indices est converti : chaque carte
     « sue » a un intervalle de 7 jours et une échéance dans 7 jours. */
  SRS.lireCartes = function (brut, aujourdhui, maintenant) {
    aujourdhui = aujourdhui || SRS.aujourdhui();
    maintenant = maintenant || Date.now();
    var v = brut;
    if (typeof v === "string") {
      try { v = JSON.parse(v); } catch (e) { v = null; }
    }
    var etat = { v: 2, maj: 0, cartes: {} };
    if (Array.isArray(v)) {                                   // ancien format
      for (var k = 0; k < v.length; k++) {
        var idx = v[k];
        if (typeof idx !== "number" || idx < 0) continue;
        etat.cartes[String(idx)] = { e: SRS.FACILITE_DEPART, i: SRS.SEUIL_APPRISE,
          d: SRS.plusJours(aujourdhui, SRS.SEUIL_APPRISE), n: 1, l: aujourdhui, maj: maintenant };
      }
      etat.maj = v.length ? maintenant : 0;
      return etat;
    }
    if (v && typeof v === "object" && v.cartes && typeof v.cartes === "object") {
      etat.maj = nombre(v.maj, 0);
      for (var c in v.cartes) {
        if (!Object.prototype.hasOwnProperty.call(v.cartes, c)) continue;
        var x = v.cartes[c];
        if (!x || typeof x !== "object") continue;
        etat.cartes[c] = {
          e: Math.max(SRS.FACILITE_MIN, nombre(x.e, SRS.FACILITE_DEPART)),
          i: Math.max(0, Math.round(nombre(x.i, 0))),
          d: SRS.dateValide(x.d) ? x.d : aujourdhui,
          n: Math.max(0, Math.round(nombre(x.n, 0))),
          l: SRS.dateValide(x.l) ? x.l : aujourdhui,
          maj: nombre(x.maj, 0)
        };
      }
    }
    return etat;
  };

  /* Enregistre une réponse. reponse : "again" (je ne savais pas),
     "hard" (presque), "good" (je savais). Modifie etat et rend la carte. */
  SRS.repondre = function (etat, indice, reponse, aujourdhui, maintenant) {
    aujourdhui = aujourdhui || SRS.aujourdhui();
    maintenant = maintenant || Date.now();
    var cle = String(indice);
    var c = etat.cartes[cle] || { e: SRS.FACILITE_DEPART, i: 0, d: aujourdhui, n: 0, l: aujourdhui, maj: 0 };
    if (reponse === "again") {
      c.i = 1;
      c.e = Math.max(SRS.FACILITE_MIN, Math.round((c.e - 0.2) * 100) / 100);
    } else if (reponse === "hard") {
      c.i = Math.max(1, Math.round(c.i * 1.2));
    } else {                                                  // good
      if (c.n === 0 || c.i === 0) c.i = 1;
      else if (c.n === 1 || c.i < 3) c.i = 3;
      else c.i = Math.max(c.i + 1, Math.round(c.i * c.e));
      c.e = Math.round((c.e + 0.1) * 100) / 100;
    }
    c.n += 1;
    c.l = aujourdhui;
    c.d = SRS.plusJours(aujourdhui, c.i);
    c.maj = maintenant;
    etat.cartes[cle] = c;
    etat.maj = Math.max(nombre(etat.maj, 0), maintenant);
    etat.v = 2;
    return c;
  };

  /* Ce qu'il y a à faire aujourd'hui pour un chapitre : dues (échéance passée ou atteinte),
     nouvelles (jamais vues), apprises (intervalle ≥ 7 jours), vues.
     cartes : le nombre de cartes (identifiants « 0 », « 1 »…) ou, depuis la v64, la liste des
     identifiants des cartes (champ id de chaque carte : il ne change plus quand le paquet est
     réorganisé). Les éléments rendus dans dues et nouvelles sont des identifiants (chaînes), ou des
     indices quand on a donné un nombre (comme avant). */
  SRS.bilan = function (etat, cartes, aujourdhui) {
    aujourdhui = aujourdhui || SRS.aujourdhui();
    var liste = Array.isArray(cartes);
    var n = liste ? cartes.length : cartes;
    var dues = [], nouvelles = [], apprises = 0, vues = 0;
    for (var i = 0; i < n; i++) {
      var id = liste ? String(cartes[i]) : String(i), rendu = liste ? id : i;
      var c = etat.cartes[id];
      if (!c || c.n === 0) { nouvelles.push(rendu); continue; }
      vues++;
      if (c.d <= aujourdhui) dues.push(rendu);
      if (c.i >= SRS.SEUIL_APPRISE) apprises++;
    }
    return { dues: dues, nouvelles: nouvelles, apprises: apprises, vues: vues, total: n,
             aujourdhui: dues.length + Math.min(nouvelles.length, SRS.PAQUET_NOUVELLES) };
  };
  /* Identifiants des cartes d'un chapitre (v64) : le champ id de chaque carte, sinon son rang. */
  SRS.idsCartes = function (cartes) {
    var r = [];
    for (var i = 0; i < (cartes || []).length; i++) r.push(cartes[i] && cartes[i].id !== undefined ? String(cartes[i].id) : String(i));
    return r;
  };

  // ------------------------------------------------------------ journal (v64)
  /* {v:1, jours:{"AAAA-MM-JJ":{"<appareil>": n}}, maj} : les réponses de chaque appareil sont
     comptées à part, si bien que deux appareils se fusionnent sans compter deux fois. */
  SRS.JOURS_JOURNAL = 70;
  SRS.lireJournal = function (brut) {
    var v = brut;
    if (typeof v === "string") { try { v = JSON.parse(v); } catch (e) { v = null; } }
    var r = { v: 1, jours: {}, maj: 0 };
    if (!v || typeof v !== "object" || !v.jours || typeof v.jours !== "object") return r;
    r.maj = nombre(v.maj, 0);
    for (var j in v.jours) {
      if (!Object.prototype.hasOwnProperty.call(v.jours, j) || !SRS.dateValide(j)) continue;
      var a = v.jours[j];
      if (!a || typeof a !== "object") continue;
      var o = {};
      for (var k in a) if (Object.prototype.hasOwnProperty.call(a, k) && /^[0-9a-z]{1,16}$/i.test(k)) {
        var n = Math.max(0, Math.round(nombre(a[k], 0)));
        if (n) o[k] = n;
      }
      if (Object.keys(o).length) r.jours[j] = o;
    }
    return r;
  };
  function elaguer(j, aujourdhui) {
    var limite = SRS.plusJours(aujourdhui, -SRS.JOURS_JOURNAL);
    for (var d in j.jours) if (Object.prototype.hasOwnProperty.call(j.jours, d) && d < limite) delete j.jours[d];
    return j;
  }
  SRS.noterReponse = function (brut, appareil, aujourdhui, maintenant) {
    aujourdhui = aujourdhui || SRS.aujourdhui();
    var j = SRS.lireJournal(brut);
    var a = String(appareil || "x").replace(/[^0-9a-z]/gi, "").slice(0, 16) || "x";
    j.jours[aujourdhui] = j.jours[aujourdhui] || {};
    j.jours[aujourdhui][a] = (j.jours[aujourdhui][a] || 0) + 1;
    j.maj = maintenant || Date.now();
    return elaguer(j, aujourdhui);
  };
  SRS.fusionnerJournal = function (a, b) {
    a = SRS.lireJournal(a); b = SRS.lireJournal(b);
    var r = { v: 1, jours: {}, maj: Math.max(a.maj, b.maj) };
    var limite = SRS.plusJours(SRS.aujourdhui(), -SRS.JOURS_JOURNAL);   // v65 : les jours trop anciens ne reviennent pas
    [a, b].forEach(function (x) {
      for (var d in x.jours) {
        if (!Object.prototype.hasOwnProperty.call(x.jours, d) || d < limite) continue;
        r.jours[d] = r.jours[d] || {};
        for (var k in x.jours[d]) if (Object.prototype.hasOwnProperty.call(x.jours[d], k))
          r.jours[d][k] = Math.max(r.jours[d][k] || 0, x.jours[d][k]);
      }
    });
    return r;
  };
  /* Réponses par jour sur les n derniers jours (le dernier : aujourd'hui). */
  SRS.reponsesParJour = function (brut, n, aujourdhui) {
    aujourdhui = aujourdhui || SRS.aujourdhui();
    var j = SRS.lireJournal(brut), r = [];
    for (var i = n - 1; i >= 0; i--) {
      var d = SRS.plusJours(aujourdhui, -i), t = 0, a = j.jours[d] || {};
      for (var k in a) if (Object.prototype.hasOwnProperty.call(a, k)) t += a[k];
      r.push({ date: d, n: t });
    }
    return r;
  };
  SRS.appareil = function (stockage) {
    var a = null;
    try { a = stockage.getItem("neruda.appareil"); } catch (e) { }
    if (!a || !/^[0-9a-z]{6,16}$/.test(a)) {
      a = ""; for (var i = 0; i < 10; i++) a += "abcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 36));
      try { stockage.setItem("neruda.appareil", a); } catch (e) { }
    }
    return a;
  };

  /* Fusion de deux états de cartes : carte par carte, la plus récente gagne. */
  SRS.fusionnerCartes = function (a, b) {
    a = SRS.lireCartes(a); b = SRS.lireCartes(b);
    var r = { v: 2, maj: Math.max(a.maj, b.maj), cartes: {} }, k;
    for (k in a.cartes) if (Object.prototype.hasOwnProperty.call(a.cartes, k)) r.cartes[k] = a.cartes[k];
    for (k in b.cartes) {
      if (!Object.prototype.hasOwnProperty.call(b.cartes, k)) continue;
      if (!r.cartes[k] || nombre(b.cartes[k].maj, 0) > nombre(r.cartes[k].maj, 0)) r.cartes[k] = b.cartes[k];
    }
    return r;
  };

  SRS.cartesVide = function (etat) {
    for (var k in etat.cartes) if (Object.prototype.hasOwnProperty.call(etat.cartes, k)) return false;
    return true;
  };

  // ------------------------------------------------------------ questionnaires
  /* Lit une valeur brute (chaîne « 12 » de l'ancien format, ou objet v2). */
  SRS.lireQcm = function (brut) {
    var v = brut;
    if (v === null || v === undefined || v === "") return null;
    if (typeof v === "string") {
      if (/^\d+$/.test(v.trim())) {                            // ancien format
        var n = parseInt(v, 10);
        return { v: 2, meilleur: n, dernier: n, total: 0, tentatives: 1, rates: [], date: "", maj: 0 };
      }
      try { v = JSON.parse(v); } catch (e) { return null; }
    }
    if (!v || typeof v !== "object") return null;
    return {
      v: 2,
      meilleur: Math.max(0, Math.round(nombre(v.meilleur, 0))),
      dernier: Math.max(0, Math.round(nombre(v.dernier, 0))),
      total: Math.max(0, Math.round(nombre(v.total, 0))),
      tentatives: Math.max(0, Math.round(nombre(v.tentatives, 0))),
      rates: Array.isArray(v.rates) ? v.rates.filter(function (x) { return typeof x === "number"; }) : [],
      date: SRS.dateValide(v.date) ? v.date : "",
      maj: nombre(v.maj, 0)
    };
  };

  /* Nouvel essai terminé : bons bonnes réponses sur total, rates = indices
     (dans le fichier de données) des questions ratées. */
  SRS.enregistrerQcm = function (precedent, bons, total, rates, aujourdhui, maintenant) {
    aujourdhui = aujourdhui || SRS.aujourdhui();
    maintenant = maintenant || Date.now();
    var p = SRS.lireQcm(precedent);
    return {
      v: 2,
      meilleur: Math.max(p ? p.meilleur : 0, bons),
      dernier: bons,
      total: total,
      tentatives: (p ? p.tentatives : 0) + 1,
      rates: (rates || []).slice(),
      date: aujourdhui,
      maj: maintenant
    };
  };

  SRS.fusionnerQcm = function (a, b) {
    a = SRS.lireQcm(a); b = SRS.lireQcm(b);
    if (!a) return b; if (!b) return a;
    var r = (b.maj > a.maj) ? b : a, autre = (r === a) ? b : a;
    var f = {};
    for (var k in r) if (Object.prototype.hasOwnProperty.call(r, k)) f[k] = r[k];
    f.meilleur = Math.max(a.meilleur, b.meilleur);
    f.tentatives = Math.max(a.tentatives, b.tentatives);
    if (!f.total) f.total = autre.total;
    return f;
  };

  // ------------------------------------------------------------ série de jours
  SRS.lireSerie = function (brut) {
    var v = brut;
    if (typeof v === "string") { try { v = JSON.parse(v); } catch (e) { v = null; } }
    if (!v || typeof v !== "object" || !SRS.dateValide(v.dernier)) return { dernier: "", jours: 0, maj: 0 };
    return { dernier: v.dernier, jours: Math.max(0, Math.round(nombre(v.jours, 0))), maj: nombre(v.maj, 0) };
  };
  /* À appeler quand une carte vient d'être répondue : prolonge ou relance
     la série. Rend le nouvel objet (à écrire dans neruda.serie). */
  SRS.marquerJour = function (brut, aujourdhui, maintenant) {
    aujourdhui = aujourdhui || SRS.aujourdhui();
    maintenant = maintenant || Date.now();
    var s = SRS.lireSerie(brut);
    if (s.dernier === aujourdhui) return s;
    var jours = (s.dernier && SRS.joursEntre(s.dernier, aujourdhui) === 1) ? s.jours + 1 : 1;
    return { dernier: aujourdhui, jours: jours, maj: maintenant };
  };
  /* Série encore vivante ? (répondu aujourd'hui ou hier) */
  SRS.serieCourante = function (brut, aujourdhui) {
    aujourdhui = aujourdhui || SRS.aujourdhui();
    var s = SRS.lireSerie(brut);
    if (!s.dernier) return 0;
    var ecart = SRS.joursEntre(s.dernier, aujourdhui);
    return (ecart === 0 || ecart === 1) ? s.jours : 0;
  };
  SRS.fusionnerSerie = function (a, b) {
    a = SRS.lireSerie(a); b = SRS.lireSerie(b);
    if (!a.dernier) return b; if (!b.dernier) return a;
    if (a.dernier === b.dernier) return (a.jours >= b.jours) ? a : b;
    return (a.dernier > b.dernier) ? a : b;
  };

  // ------------------------------------------------------------ simulations
  /* Les simulations écrivent elles-mêmes leurs données ; on ne fait que les
     lire. Registre des clés connues (page, nom affiché, niveau). */
  SRS.SIMULATIONS = [
    { cle: "instr-ut803",        nom: "Multimètre UNI-T UT803",              page: "animations/multimetre-ut803.html",            niveau: "BTS ET" },
    { cle: "instr-sdm3055",      nom: "Multimètre de table Siglent SDM3055", page: "animations/multimetre-sdm3055.html",          niveau: "BTS ET" },
    { cle: "instr-ds1104z",      nom: "Oscilloscope Rigol DS1104Z Plus",     page: "animations/oscilloscope.html",                niveau: "BTS ET" },
    { cle: "instr-ds1102cd",     nom: "Oscilloscope Rigol DS1102CD",         page: "animations/oscilloscope.html",                niveau: "BTS ET" },
    { cle: "instr-fiwatt",       nom: "Wattmètre FIWATT",                    page: "animations/wattmetre.html",                   niveau: "BTS ET" },
    { cle: "instr-ca8331",       nom: "Analyseur de réseau C.A 8331",        page: "animations/analyseur-reseau.html",            niveau: "BTS ET" },
    { cle: "multimetre-sdm3055-essentiel", nom: "Multimètre Siglent SDM3055", page: "animations/multimetre-sdm3055-essentiel.html", niveau: "1re STI2D" },
    { cle: "instr-ds1102cd-ens", nom: "Oscilloscope Rigol DS1102CD",         page: "animations/oscilloscope-ds1102cd.html",       niveau: "1re STI2D" },
    // novembre 2026 : les deux outils transversaux (tutoriel + jeux + bilan, mêmes champs defis/comprendre)
    { cle: "outil-transformer-formule", nom: "Transformer une formule",       page: "animations/transformer-formule.html",         niveau: "Outils" },
    { cle: "outil-conversion-unites",   nom: "Convertir avec les puissances de dix", page: "animations/conversion-unites.html",   niveau: "Outils" },
    // v65 : animation à jeux (forme plate {<jeu>: {ok, essais, etoiles}})
    { cle: "neruda.anim.principe-inertie", nom: "Forces et principe d'inertie", page: "animations/principe-inertie.html",       niveau: "BTS CRSA" }
  ];
  SRS.estCleSimulation = function (cle) {
    if (cle.indexOf("instr-") === 0 || cle.indexOf("neruda.anim.") === 0) return true;
    for (var i = 0; i < SRS.SIMULATIONS.length; i++) if (SRS.SIMULATIONS[i].cle === cle) return true;
    return false;
  };
  SRS.infoSimulation = function (cle) {
    for (var i = 0; i < SRS.SIMULATIONS.length; i++) if (SRS.SIMULATIONS[i].cle === cle) return SRS.SIMULATIONS[i];
    if (cle.indexOf("neruda.anim.") === 0) return { cle: cle, nom: cle.slice(12), page: "animations/" + cle.slice(12) + ".html", niveau: "" };
    return { cle: cle, nom: cle.replace(/^instr-/, "Instrument "), page: "", niveau: "" };
  };
  /* Résumé d'une simulation : défis (ou missions + charges mystères) réussis,
     étoiles, badges. Ne calcule aucun code de fin : il n'est pas stocké. */
  SRS.resumeSimulation = function (brut) {
    var v = brut;
    if (typeof v === "string") { try { v = JSON.parse(v); } catch (e) { v = null; } }
    if (!v || typeof v !== "object") return null;
    var groupes = ["defis", "missions", "mysteres"], reussis = 0, essayes = 0, etoiles = 0, k, g;
    for (var i = 0; i < groupes.length; i++) {
      g = v[groupes[i]];
      if (!g || typeof g !== "object") continue;
      for (k in g) {
        if (!Object.prototype.hasOwnProperty.call(g, k) || !g[k]) continue;
        essayes++;
        var et = nombre(g[k].etoiles, 0);
        etoiles += et;
        if (et > 0) reussis++;
      }
    }
    if (!essayes) {                       // v65 : animation à jeux, forme plate {<jeu>: {ok, essais, etoiles}}
      for (k in v) {
        if (!Object.prototype.hasOwnProperty.call(v, k) || !v[k] || typeof v[k] !== "object" || Array.isArray(v[k])) continue;
        if (!("ok" in v[k]) && !("etoiles" in v[k]) && !("essais" in v[k])) continue;
        essayes++;
        etoiles += nombre(v[k].etoiles, 0);
        if (v[k].ok || nombre(v[k].etoiles, 0) > 0) reussis++;
      }
    }
    var badges = 0;
    if (v.badges && typeof v.badges === "object") for (k in v.badges) if (Object.prototype.hasOwnProperty.call(v.badges, k) && v.badges[k]) badges++;
    var notions = 0;
    if (v.comprendre && typeof v.comprendre === "object") for (k in v.comprendre) if (Object.prototype.hasOwnProperty.call(v.comprendre, k) && v.comprendre[k]) notions++;
    return { reussis: reussis, essayes: essayes, etoiles: etoiles, badges: badges, notions: notions, maj: nombre(v.maj, 0) };
  };
  /* Copie d'une simulation prête à partir dans le compte : sans le nom que
     l'élève a tapé pour son code de fin, avec un horodatage. */
  SRS.simulationPourCompte = function (brut, maintenant) {
    var v = brut;
    if (typeof v === "string") { try { v = JSON.parse(v); } catch (e) { v = null; } }
    if (!v || typeof v !== "object") return null;
    var r = {};
    for (var k in v) if (Object.prototype.hasOwnProperty.call(v, k) && k !== "nom") r[k] = v[k];
    if (!r.maj) r.maj = maintenant || Date.now();
    return r;
  };
  SRS.fusionnerSimulation = function (a, b) {
    if (typeof a === "string") { try { a = JSON.parse(a); } catch (e) { a = null; } }
    if (typeof b === "string") { try { b = JSON.parse(b); } catch (e) { b = null; } }
    if (!a || typeof a !== "object") return b; if (!b || typeof b !== "object") return a;
    var r = (nombre(b.maj, 0) > nombre(a.maj, 0)) ? b : a, autre = (r === a) ? b : a, f = {};
    for (var k in r) if (Object.prototype.hasOwnProperty.call(r, k)) f[k] = r[k];
    if (!f.nom && autre.nom) f.nom = autre.nom;      // le nom ne voyage pas : on garde celui de l'appareil
    return f;
  };

  /* v65 : animation à jeux sans horodatage ({<jeu>: {ok, essais, etoiles}}) : fusion jeu par jeu, sans rien
     perdre (réussi d'un côté = réussi ; essais et étoiles au maximum). */
  SRS.fusionnerAnim = function (a, b) {
    if (typeof a === "string") { try { a = JSON.parse(a); } catch (e) { a = null; } }
    if (typeof b === "string") { try { b = JSON.parse(b); } catch (e) { b = null; } }
    if (!a || typeof a !== "object") return b; if (!b || typeof b !== "object") return a;
    var f = {}, k;
    [a, b].forEach(function (x) {
      for (k in x) {
        if (!Object.prototype.hasOwnProperty.call(x, k)) continue;
        var v = x[k];
        if (v && typeof v === "object" && !Array.isArray(v) && ("ok" in v || "etoiles" in v || "essais" in v)) {
          var g = f[k] || {};
          f[k] = { ok: !!(g.ok || v.ok), essais: Math.max(nombre(g.essais, 0), nombre(v.essais, 0)),
                   etoiles: Math.max(nombre(g.etoiles, 0), nombre(v.etoiles, 0)) };
        } else if (k === "maj") f.maj = Math.max(nombre(f.maj, 0), nombre(v, 0));
        else if (!(k in f)) f[k] = v;
      }
    });
    return f;
  };

  // ------------------------------------------------------------ mesures d'activité (v65)
  /* {v:1, maj, jours:{"AAAA-MM-JJ":{"<appareil>":{t:{cartes, qcm, anim, site}, a:{"<animation>":[ouvertures, secondes]},
     d: documents ouverts}}}} : comptées par appareil (deux appareils se fusionnent sans compter deux fois, au maximum
     de chaque compteur), gardées 70 jours. Rien n'est noté tant que le professeur n'a pas activé les mesures. */
  SRS.CATEGORIES_TEMPS = ["cartes", "qcm", "anim", "site"];
  function lireJourActivite(o) {
    var r = { t: {}, a: {}, d: 0 }, k;
    if (!o || typeof o !== "object") return r;
    if (o.t && typeof o.t === "object") for (k in o.t) if (SRS.CATEGORIES_TEMPS.indexOf(k) >= 0) {
      var s = Math.max(0, Math.round(nombre(o.t[k], 0))); if (s) r.t[k] = Math.min(s, 86400);
    }
    if (o.a && typeof o.a === "object") for (k in o.a) if (Object.prototype.hasOwnProperty.call(o.a, k) && /^[a-z0-9-]{1,60}$/.test(k)
        && Array.isArray(o.a[k])) {
      var ou = Math.max(0, Math.round(nombre(o.a[k][0], 0))), se = Math.max(0, Math.round(nombre(o.a[k][1], 0)));
      if (ou || se) r.a[k] = [Math.min(ou, 999), Math.min(se, 86400)];
    }
    r.d = Math.max(0, Math.min(999, Math.round(nombre(o.d, 0))));
    return r;
  }
  SRS.lireActivite = function (brut) {
    var v = brut;
    if (typeof v === "string") { try { v = JSON.parse(v); } catch (e) { v = null; } }
    var r = { v: 1, jours: {}, maj: 0 };
    if (!v || typeof v !== "object" || !v.jours || typeof v.jours !== "object") return r;
    r.maj = nombre(v.maj, 0);
    for (var j in v.jours) {
      if (!Object.prototype.hasOwnProperty.call(v.jours, j) || !SRS.dateValide(j)) continue;
      var a = v.jours[j], o = {};
      if (!a || typeof a !== "object") continue;
      for (var k in a) if (Object.prototype.hasOwnProperty.call(a, k) && /^[0-9a-z]{1,16}$/i.test(k)) {
        var x = lireJourActivite(a[k]);
        if (Object.keys(x.t).length || Object.keys(x.a).length || x.d) o[k] = x;
      }
      if (Object.keys(o).length) r.jours[j] = o;
    }
    return r;
  };
  /* quoi : {categorie, secondes, animation, ouverture (vrai), document (vrai)} */
  SRS.noterActivite = function (brut, appareil, quoi, aujourdhui, maintenant) {
    aujourdhui = aujourdhui || SRS.aujourdhui();
    quoi = quoi || {};
    var j = SRS.lireActivite(brut);
    var app = String(appareil || "x").replace(/[^0-9a-z]/gi, "").slice(0, 16) || "x";
    var jour = j.jours[aujourdhui] = j.jours[aujourdhui] || {};
    var x = jour[app] = jour[app] || { t: {}, a: {}, d: 0 };
    var s = Math.max(0, Math.round(nombre(quoi.secondes, 0)));
    if (s && SRS.CATEGORIES_TEMPS.indexOf(quoi.categorie) >= 0) x.t[quoi.categorie] = Math.min((x.t[quoi.categorie] || 0) + s, 86400);
    var an = String(quoi.animation || "").toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 60);
    if (an && (quoi.ouverture || s)) {
      var v = x.a[an] || [0, 0];
      x.a[an] = [Math.min(v[0] + (quoi.ouverture ? 1 : 0), 999), Math.min(v[1] + s, 86400)];
    }
    if (quoi.document) x.d = Math.min((x.d || 0) + 1, 999);
    j.maj = maintenant || Date.now();
    var limite = SRS.plusJours(aujourdhui, -SRS.JOURS_JOURNAL);
    for (var d in j.jours) if (Object.prototype.hasOwnProperty.call(j.jours, d) && d < limite) delete j.jours[d];
    return j;
  };
  SRS.fusionnerActivite = function (a, b) {
    a = SRS.lireActivite(a); b = SRS.lireActivite(b);
    var r = { v: 1, jours: {}, maj: Math.max(a.maj, b.maj) };
    // gardées 70 jours : un jour plus ancien, encore dans la copie du compte, n'est pas repris (et part à l'envoi suivant)
    var limite = SRS.plusJours(SRS.aujourdhui(), -SRS.JOURS_JOURNAL);
    [a, b].forEach(function (x) {
      for (var d in x.jours) {
        if (!Object.prototype.hasOwnProperty.call(x.jours, d) || d < limite) continue;
        var J = r.jours[d] = r.jours[d] || {};
        for (var k in x.jours[d]) {
          if (!Object.prototype.hasOwnProperty.call(x.jours[d], k)) continue;
          var s = x.jours[d][k], c = J[k] = J[k] || { t: {}, a: {}, d: 0 }, n;
          for (n in s.t) c.t[n] = Math.max(c.t[n] || 0, s.t[n]);
          for (n in s.a) { var v = c.a[n] || [0, 0]; c.a[n] = [Math.max(v[0], s.a[n][0]), Math.max(v[1], s.a[n][1])]; }
          c.d = Math.max(c.d || 0, s.d || 0);
        }
      }
    });
    return r;
  };
  /* Par jour (tous appareils) : [{date, t:{cartes, qcm, anim, site}, total, a:{animation:[ouvertures, secondes]}, d}] */
  SRS.activiteParJour = function (brut, n, aujourdhui) {
    aujourdhui = aujourdhui || SRS.aujourdhui();
    var j = SRS.lireActivite(brut), r = [];
    for (var i = n - 1; i >= 0; i--) {
      var d = SRS.plusJours(aujourdhui, -i), o = { date: d, t: {}, total: 0, a: {}, d: 0 }, J = j.jours[d] || {};
      for (var k in J) {
        if (!Object.prototype.hasOwnProperty.call(J, k)) continue;
        var x = J[k], m;
        for (m in x.t) { o.t[m] = (o.t[m] || 0) + x.t[m]; o.total += x.t[m]; }
        for (m in x.a) { var v = o.a[m] || [0, 0]; o.a[m] = [v[0] + x.a[m][0], v[1] + x.a[m][1]]; }
        o.d += x.d || 0;
      }
      r.push(o);
    }
    return r;
  };

  // ------------------------------------------------------------ réussite question par question (v65)
  /* {v:1, maj, q:{"<indice>":[posées, ratées]}} : cumulée d'un essai à l'autre (au maximum de chaque compteur à la
     fusion) ; indices du fichier de données, comme « rates ». Même condition que les mesures d'activité. */
  SRS.lireQstat = function (brut) {
    var v = brut;
    if (typeof v === "string") { try { v = JSON.parse(v); } catch (e) { v = null; } }
    var r = { v: 1, q: {}, maj: 0 };
    if (!v || typeof v !== "object" || !v.q || typeof v.q !== "object") return r;
    r.maj = nombre(v.maj, 0);
    for (var k in v.q) if (Object.prototype.hasOwnProperty.call(v.q, k) && /^\d{1,4}$/.test(k) && Array.isArray(v.q[k])) {
      var a = Math.max(0, Math.min(9999, Math.round(nombre(v.q[k][0], 0)))), b = Math.max(0, Math.min(a, Math.round(nombre(v.q[k][1], 0))));
      if (a) r.q[k] = [a, b];
    }
    return r;
  };
  /* resultats : [{i: indice, ok: vrai|faux}] d'un essai terminé */
  SRS.noterQuestions = function (brut, resultats, maintenant) {
    var s = SRS.lireQstat(brut);
    (resultats || []).forEach(function (x) {
      if (!x || typeof x.i !== "number" || x.i < 0 || x.i > 9999) return;
      var k = String(Math.round(x.i)), v = s.q[k] || [0, 0];
      s.q[k] = [Math.min(v[0] + 1, 9999), Math.min(v[1] + (x.ok ? 0 : 1), 9999)];
    });
    s.maj = maintenant || Date.now();
    return s;
  };
  SRS.fusionnerQstat = function (a, b) {
    a = SRS.lireQstat(a); b = SRS.lireQstat(b);
    var r = { v: 1, q: {}, maj: Math.max(a.maj, b.maj) };
    [a, b].forEach(function (x) {
      for (var k in x.q) if (Object.prototype.hasOwnProperty.call(x.q, k)) {
        var v = r.q[k] || [0, 0];
        r.q[k] = [Math.max(v[0], x.q[k][0]), Math.max(v[1], x.q[k][1])];
      }
    });
    return r;
  };

  // ------------------------------------------------------------ fusion générale
  SRS.usageDeCle = function (cle) {
    if (cle.indexOf("neruda.cartes.") === 0) return "cartes";
    if (cle.indexOf("neruda.qcm.") === 0) return "qcm";
    if (cle === "neruda.serie") return "serie";
    if (cle === "neruda.journal") return "journal";
    if (cle === "neruda.activite") return "activite";                       // v65
    if (cle.indexOf("neruda.qstat.") === 0) return "activite";             // v65 : voyage avec les mesures (activite/{uid})
    if (SRS.estCleSimulation(cle)) return "simulations";
    return "";
  };
  SRS.fusionner = function (cle, a, b) {
    switch (SRS.usageDeCle(cle)) {
      case "cartes": return SRS.fusionnerCartes(a, b);
      case "qcm": return SRS.fusionnerQcm(a, b);
      case "serie": return SRS.fusionnerSerie(a, b);
      case "journal": return SRS.fusionnerJournal(a, b);
      case "activite": return cle.indexOf("neruda.qstat.") === 0 ? SRS.fusionnerQstat(a, b) : SRS.fusionnerActivite(a, b);
      case "simulations": return cle.indexOf("neruda.anim.") === 0 ? SRS.fusionnerAnim(a, b) : SRS.fusionnerSimulation(a, b);
      default: return b === undefined ? a : b;
    }
  };
  /* Normalise une valeur brute d'une clé en objet v2 (ce qu'on envoie et
     ce qu'on compare). Rend null si la valeur est vide ou illisible. */
  SRS.normaliser = function (cle, brut) {
    switch (SRS.usageDeCle(cle)) {
      case "cartes": { var c = SRS.lireCartes(brut); return SRS.cartesVide(c) ? null : c; }
      case "qcm": return SRS.lireQcm(brut);
      case "serie": { var s = SRS.lireSerie(brut); return s.dernier ? s : null; }
      case "journal": { var jo = SRS.lireJournal(brut); return Object.keys(jo.jours).length ? jo : null; }
      case "activite": {
        if (cle.indexOf("neruda.qstat.") === 0) { var qs = SRS.lireQstat(brut); return Object.keys(qs.q).length ? qs : null; }
        var ac = SRS.lireActivite(brut); return Object.keys(ac.jours).length ? ac : null;
      }
      case "simulations": {
        var v = brut;
        if (typeof v === "string") { try { v = JSON.parse(v); } catch (e) { v = null; } }
        return (v && typeof v === "object") ? v : null;
      }
      default: return null;
    }
  };

  // ------------------------------------------------------------ localStorage
  /* Liste des clés qui nous concernent dans un stockage (objet à la manière
     de localStorage : length, key(i), getItem). */
  SRS.clesLocales = function (stockage) {
    var cles = [];
    try {
      for (var i = 0; i < stockage.length; i++) {
        var k = stockage.key(i);
        if (k && SRS.usageDeCle(k)) cles.push(k);
      }
    } catch (e) { }
    return cles.sort();
  };
  SRS.exporter = function (stockage, aujourdhui) {
    var cles = SRS.clesLocales(stockage), r = { v: 1, date: aujourdhui || SRS.aujourdhui(), cles: {} };
    for (var i = 0; i < cles.length; i++) {
      var v = SRS.normaliser(cles[i], stockage.getItem(cles[i]));
      if (v !== null) r.cles[cles[i]] = v;
    }
    return r;
  };
  /* Fusionne un export (ou un document distant de la même forme) dans le
     stockage. Rend le nombre de clés modifiées. */
  SRS.importer = function (stockage, paquet) {
    if (!paquet || typeof paquet !== "object" || !paquet.cles || typeof paquet.cles !== "object") return 0;
    var n = 0;
    for (var k in paquet.cles) {
      if (!Object.prototype.hasOwnProperty.call(paquet.cles, k) || !SRS.usageDeCle(k)) continue;
      var local = null;
      try { local = stockage.getItem(k); } catch (e) { }
      var avant = SRS.normaliser(k, local);
      var apres = SRS.fusionner(k, avant, paquet.cles[k]);
      if (apres === null || apres === undefined) continue;
      if (JSON.stringify(apres) !== JSON.stringify(avant)) {
        try { stockage.setItem(k, JSON.stringify(apres)); n++; } catch (e) { }
      }
    }
    return n;
  };

  // ------------------------------------------------------------ base64url
  var ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  SRS.b64url = {
    encoder: function (octets) {
      var s = "", i, a, b, c;
      for (i = 0; i < octets.length; i += 3) {
        a = octets[i]; b = octets[i + 1]; c = octets[i + 2];
        s += ALPHA[a >> 2] + ALPHA[((a & 3) << 4) | ((b || 0) >> 4)];
        s += (b === undefined) ? "" : ALPHA[((b & 15) << 2) | ((c || 0) >> 6)];
        s += (c === undefined) ? "" : ALPHA[c & 63];
      }
      return s;
    },
    decoder: function (texte) {
      var t = String(texte || "").replace(/[^A-Za-z0-9\-_]/g, ""), out = [], i, v, bits = 0, acc = 0;
      for (i = 0; i < t.length; i++) {
        v = ALPHA.indexOf(t[i]);
        if (v < 0) continue;
        acc = (acc << 6) | v; bits += 6;
        if (bits >= 8) { bits -= 8; out.push((acc >> bits) & 255); }
      }
      return out;
    }
  };
  /* UTF-8 sans TextEncoder (vieux navigateurs). */
  SRS.utf8 = {
    encoder: function (s) {
      var out = [], i, c;
      for (i = 0; i < s.length; i++) {
        c = s.charCodeAt(i);
        if (c >= 0xD800 && c < 0xDC00 && i + 1 < s.length) {    // paire de substitution
          c = 0x10000 + ((c - 0xD800) << 10) + (s.charCodeAt(++i) - 0xDC00);
        }
        if (c < 0x80) out.push(c);
        else if (c < 0x800) out.push(0xC0 | (c >> 6), 0x80 | (c & 63));
        else if (c < 0x10000) out.push(0xE0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
        else out.push(0xF0 | (c >> 18), 0x80 | ((c >> 12) & 63), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
      }
      return out;
    },
    decoder: function (octets) {
      var s = "", i = 0, c, n;
      while (i < octets.length) {
        c = octets[i++];
        if (c < 0x80) n = c;
        else if (c < 0xE0) n = ((c & 31) << 6) | (octets[i++] & 63);
        else if (c < 0xF0) n = ((c & 15) << 12) | ((octets[i++] & 63) << 6) | (octets[i++] & 63);
        else { n = ((c & 7) << 18) | ((octets[i++] & 63) << 12) | ((octets[i++] & 63) << 6) | (octets[i++] & 63); }
        if (n > 0xFFFF) { n -= 0x10000; s += String.fromCharCode(0xD800 + (n >> 10), 0xDC00 + (n & 1023)); }
        else s += String.fromCharCode(n);
      }
      return s;
    }
  };

  // ------------------------------------------------------------ code de sauvegarde
  /* Code = préfixe + base64url du JSON de l'export, compressé si le
     navigateur sait le faire (deflate-raw) : « NRD1z. », sinon brut :
     « NRD1r. ». Les deux fonctions rendent une promesse pour que la version
     compressée (API asynchrone) et la version brute aient la même forme. */
  SRS.PREFIXE_Z = "NRD1z.";
  SRS.PREFIXE_R = "NRD1r.";

  function promesse(valeur) {
    if (typeof Promise === "undefined") return { then: function (f) { f(valeur); return this; }, "catch": function () { return this; } };
    return Promise.resolve(valeur);
  }
  function tamponVersOctets(tampon) { return Array.prototype.slice.call(new Uint8Array(tampon)); }
  function concatener(morceaux) {
    var n = 0, i; for (i = 0; i < morceaux.length; i++) n += morceaux[i].length;
    var out = new Uint8Array(n), p = 0;
    for (i = 0; i < morceaux.length; i++) { out.set(morceaux[i], p); p += morceaux[i].length; }
    return out;
  }
  function flux(nomClasse, octets) {
    var Classe = racine[nomClasse];
    var cs = new Classe("deflate-raw");
    var w = cs.writable.getWriter();
    w.write(new Uint8Array(octets))["catch"](function () { });
    w.close()["catch"](function () { });
    var r = cs.readable.getReader(), morceaux = [];
    function lire() {
      return r.read().then(function (x) {
        if (x.done) return tamponVersOctets(concatener(morceaux).buffer);
        morceaux.push(x.value); return lire();
      });
    }
    return lire();
  }
  SRS.fabriquerCode = function (paquet) {
    var json = JSON.stringify(paquet), octets = SRS.utf8.encoder(json);
    if (typeof racine.CompressionStream === "function") {
      return flux("CompressionStream", octets)
        .then(function (z) { return SRS.PREFIXE_Z + SRS.b64url.encoder(z); })
        ["catch"](function () { return SRS.PREFIXE_R + SRS.b64url.encoder(octets); });
    }
    return promesse(SRS.PREFIXE_R + SRS.b64url.encoder(octets));
  };
  SRS.lireCode = function (code) {
    var t = String(code || "").replace(/\s+/g, "");
    function fini(octets) {
      var obj;
      try { obj = JSON.parse(SRS.utf8.decoder(octets)); } catch (e) { throw new Error("Ce code est abîmé : vérifie qu'il est copié en entier."); }
      if (!obj || typeof obj !== "object" || !obj.cles) throw new Error("Ce code ne contient pas de sauvegarde.");
      return obj;
    }
    if (t.indexOf(SRS.PREFIXE_R) === 0) {
      return promesse(null).then(function () { return fini(SRS.b64url.decoder(t.slice(SRS.PREFIXE_R.length))); });
    }
    if (t.indexOf(SRS.PREFIXE_Z) === 0) {
      if (typeof racine.DecompressionStream !== "function") {
        return promesse(null).then(function () { throw new Error("Ce code vient d'un navigateur plus récent : ce téléphone ne sait pas le lire."); });
      }
      return flux("DecompressionStream", SRS.b64url.decoder(t.slice(SRS.PREFIXE_Z.length))).then(fini);
    }
    return promesse(null).then(function () { throw new Error("Ce n'est pas un code de sauvegarde (il commence par NRD1)."); });
  };

  // ------------------------------------------------------------ export
  racine.NerudaSRS = SRS;
  if (typeof module !== "undefined" && module.exports) module.exports = SRS;
})(typeof window !== "undefined" ? window : (typeof globalThis !== "undefined" ? globalThis : this));
