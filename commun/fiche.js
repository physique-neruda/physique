/* =====================================================================
   commun/fiche.js — la fiche d'un devoir corrigé (site v64, novembre 2026)

   Ce que l'élève lit dans « Mon espace » quand le professeur a publié les fiches d'un devoir
   (copies scannées puis corrigées) ; l'espace prof montre exactement la même chose en aperçu,
   avant de publier (prof/fiches.html).

   NerudaFiche.html(epreuve, copie) -> HTML (texte échappé partout)
     epreuve : {titre, nature, date, bareme, questions:[{q, intitule, max, competences:[…], detail}],
                grille:{code: libellé}}
     copie   : {note, bareme, appreciation, points:[{q, pts}] (ou {q: pts}), niveaux:{code: N1…N4}, absent}
   NerudaFiche.calcul(questions, points, bareme) -> {brut, total, note} : la note est la somme des
     points, ramenée au barème quand le total des questions en diffère. JAMAIS de coefficient
     PAP ni de note après aménagement : la note officielle reste dans Pronote.
   Présentation : commun/fiche.css.
   ===================================================================== */
(function (racine) {
  "use strict";
  function esc(t) {
    return String(t === undefined || t === null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function arrondi(x) { return Math.round(Number(x) * 100) / 100; }
  function nombre(x) {
    var v = Number(x);
    if (!isFinite(v)) return "";
    return String(arrondi(v)).replace(".", ",");
  }
  function dateFr(iso) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || "")); return m ? m[3] + "/" + m[2] + "/" + m[1] : ""; }
  function versTable(points) {
    var t = {};
    if (Array.isArray(points)) points.forEach(function (p) { if (p && p.q !== undefined) t[String(p.q)] = Number(p.pts); });
    else if (points && typeof points === "object") Object.keys(points).forEach(function (q) { t[q] = Number(points[q]); });
    return t;
  }
  function calcul(questions, points, bareme) {
    var t = versTable(points), brut = 0, total = 0;
    (questions || []).forEach(function (q) {
      total += Number(q.max) || 0;
      var v = t[String(q.q)];
      if (isFinite(v)) brut += v;
    });
    brut = arrondi(brut); total = arrondi(total);
    var b = Number(bareme) || total || 20;
    var note = total > 0 && Math.abs(total - b) > 1e-9 ? arrondi(brut * b / total) : brut;
    return { brut: brut, total: total, note: note, bareme: b };
  }
  function classeNiveau(n) { return String(n || "").replace(/[^A-Za-z0-9]/g, ""); }

  function html(ep, cp) {
    ep = ep || {}; cp = cp || {};
    var qs = Array.isArray(ep.questions) ? ep.questions : [];
    var t = versTable(cp.points);
    var c = calcul(qs, cp.points, cp.bareme !== undefined && cp.bareme !== null ? cp.bareme : ep.bareme);
    var note = cp.note !== undefined && cp.note !== null && isFinite(Number(cp.note)) ? Number(cp.note) : c.note;
    var grille = ep.grille || ep.competences || {};
    var h = '<article class="fiche">';
    h += '<div class="fiche-tete"><div><h3>' + esc(ep.titre || "Devoir") + '</h3><p>'
      + esc([ep.nature, dateFr(ep.date)].filter(Boolean).join(" · ")) + '</p></div>';
    if (!cp.absent) h += '<div class="fiche-note" aria-label="Note : ' + esc(nombre(note)) + ' sur ' + esc(nombre(c.bareme)) + '"><b>'
      + esc(nombre(note)) + '</b><span>/ ' + esc(nombre(c.bareme)) + '</span></div>';
    h += '</div>';
    if (cp.absent) h += '<p class="fiche-absent">Absent ce jour-là : pas de note pour ce devoir.</p>';
    if (cp.appreciation) h += '<p class="fiche-appreciation">' + esc(cp.appreciation) + '</p>';
    if (qs.length && !cp.absent) {
      h += '<div class="fiche-tab"><table class="fiche-points"><thead><tr><th scope="col">Question</th><th scope="col">Points</th>'
        + '<th scope="col">Compétences</th></tr></thead><tbody>';
      qs.forEach(function (q) {
        var v = t[String(q.q)], comp = Array.isArray(q.competences) ? q.competences : [];
        h += '<tr><th scope="row"><b>' + esc(q.q) + '</b>' + (q.intitule ? '<span>' + esc(q.intitule) + '</span>' : '') + '</th>'
          + '<td class="pts">' + (isFinite(v) ? esc(nombre(v)) : '—') + '<small> / ' + esc(nombre(q.max)) + '</small></td>'
          + '<td class="comp">' + comp.map(function (x) { return '<span title="' + esc(grille[x] || "") + '">' + esc(x) + '</span>'; }).join(" ") + '</td></tr>';
      });
      h += '</tbody><tfoot><tr><th scope="row">Total</th><td class="pts">' + esc(nombre(c.brut)) + '<small> / ' + esc(nombre(c.total)) + '</small></td><td></td></tr></tfoot></table></div>';
      if (Math.abs(c.total - c.bareme) > 1e-9 && c.total > 0)
        h += '<p class="fiche-ramene">Total ' + esc(nombre(c.brut)) + ' / ' + esc(nombre(c.total)) + ', soit ' + esc(nombre(note)) + ' / ' + esc(nombre(c.bareme)) + '.</p>';
    }
    var niv = cp.niveaux && typeof cp.niveaux === "object" ? cp.niveaux : {};
    var codes = Object.keys(niv);
    if (codes.length) {
      h += '<div class="fiche-niveaux"><h4>Compétences</h4><ul>';
      codes.sort(function (a, b) {
        var na = parseInt(String(a).replace(/\D/g, ""), 10) || 0, nb = parseInt(String(b).replace(/\D/g, ""), 10) || 0;
        return (na - nb) || (a < b ? -1 : a > b ? 1 : 0);
      }).forEach(function (code) {
        h += '<li><span class="niv ' + esc(classeNiveau(niv[code])) + '">' + esc(niv[code]) + '</span><b>' + esc(code) + '</b>'
          + (grille[code] ? ' <span class="lib">' + esc(grille[code]) + '</span>' : '') + '</li>';
      });
      h += '</ul><p class="fiche-legende">N1 : non acquise ; N2 : en cours d\'acquisition ; N3 : partiellement acquise ; N4 : acquise et transférable.</p></div>';
    }
    var details = qs.filter(function (q) { return q.detail; });
    if (details.length) {
      h += '<details class="fiche-bareme"><summary>Barème détaillé</summary><dl>';
      details.forEach(function (q) { h += '<dt>' + esc(q.q) + (q.intitule ? ' — ' + esc(q.intitule) : '') + ' (' + esc(nombre(q.max)) + ' pt)</dt><dd>' + esc(q.detail) + '</dd>'; });
      h += '</dl></details>';
    }
    return h + '</article>';
  }

  racine.NerudaFiche = { html: html, calcul: calcul, nombre: nombre, versTable: versTable };
})(window);
