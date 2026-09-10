/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 03 · Statique des fluides
   Le bilan vient de ch03_bilan.tex, les cartes des \trou{} de
   ch03_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "3",
 "titre": "Statique des fluides",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Convertir 5,0 cm² en m² :",
   "choix": [
    "5,0×10⁻²",
    "5,0×10⁻⁴",
    "5,0×10⁻⁶",
    "5,0×10⁻³"
   ],
   "bonne": 1,
   "expl": "1 cm² = 10⁻⁴ m² : une aire se convertit avec le carré du facteur de longueur."
  },
  {
   "q": "Convertir 250 mm² en m² :",
   "choix": [
    "2,5×10⁻⁴",
    "2,5×10⁻¹",
    "2,5×10⁻⁶",
    "0,25"
   ],
   "bonne": 0,
   "expl": "1 mm² = 10⁻⁶ m², donc 250 mm² = 2,5×10⁻⁴ m²."
  },
  {
   "q": "L'aire d'un disque de diamètre 60 mm vaut, en m² :",
   "choix": [
    "2,83×10⁻³",
    "2,83×10⁻⁵",
    "1,13×10⁻²",
    "2,83"
   ],
   "bonne": 0,
   "expl": "S = πD²/4 avec D = 0,060 m. Convertir le diamètre AVANT de l'élever au carré."
  },
  {
   "q": "Dans A = B × C × D, la grandeur C s'écrit :",
   "choix": [
    "C = A × B/D",
    "C = A/(B × D)",
    "C = A − B − D",
    "C = (A/B) × D"
   ],
   "bonne": 1,
   "expl": "On divise par tout ce qui multiplie C."
  },
  {
   "q": "Le poids d'une masse de 450 kg (g = 9,81 N/kg) vaut :",
   "choix": [
    "45,9 N",
    "450 N",
    "4,41×10³ N",
    "4,41×10³ kg"
   ],
   "bonne": 2,
   "expl": "P = mg = 4415 N. Un poids est une force : il s'exprime en newtons, jamais en kilogrammes."
  },
  {
   "q": "Une grandeur vaut 893 avec une incertitude relative de 3 %. Le résultat s'écrit :",
   "choix": [
    "893 ± 27",
    "890 ± 30",
    "893 ± 3",
    "900 ± 30"
   ],
   "bonne": 1,
   "expl": "u = 0,03 × 893 = 26,8, arrondi vers le haut à 30 ; la valeur s'aligne ensuite sur le même rang."
  }
 ],
 "bilan": [
  {
   "q": "La pression est :",
   "choix": [
    "une force",
    "une force divisée par une surface",
    "une force multipliée par une surface"
   ],
   "bonne": 1,
   "expl": "p = F/S."
  },
  {
   "q": "1 bar vaut :",
   "choix": [
    "1×10³ Pa",
    "1×10⁵ Pa",
    "1×10⁶ Pa"
   ],
   "bonne": 1,
   "expl": "1 bar = 1×10⁵ Pa = 0,1 MPa."
  },
  {
   "q": "Une section de 25 cm² vaut, en m² :",
   "choix": [
    "0,25",
    "2,5×10⁻³",
    "2,5×10⁻⁴"
   ],
   "bonne": 2,
   "expl": "une aire se convertit en e-4 : c'est le piège numéro un du chapitre. 3pt"
  },
  {
   "q": "Dans un liquide au repos, la pression au fond dépend :",
   "choix": [
    "de la hauteur de liquide et de sa masse volumique",
    "du volume de liquide contenu",
    "de la forme du récipient"
   ],
   "bonne": 0,
   "expl": "c'est le paradoxe hydrostatique : ni la forme, ni le volume n'interviennent. Attention, la force sur le fond dépend en revanche de l'aire de ce fond (F = p S) : pression et force ne se confondent pas. 3pt"
  },
  {
   "q": "Deux cuves de même hauteur de liquide, l'une cylindrique, l'autre évasée. La pression au fond est :",
   "choix": [
    "plus grande dans l'évasée",
    "identique",
    "plus grande dans la cylindrique"
   ],
   "bonne": 1,
   "expl": "c'est le paradoxe hydrostatique : ni la forme, ni le volume n'interviennent. Attention, la force sur le fond dépend en revanche de l'aire de ce fond (F = p S) : pression et force ne se confondent pas. 3pt"
  },
  {
   "q": "La différence de pression entre la surface et un point situé 4,0 m plus bas dans du gazole (ρ= 840 kg/m³) vaut environ :",
   "choix": [
    "3,3×10⁴ Pa",
    "3,3×10³ Pa",
    "3,4×10⁵ Pa"
   ],
   "bonne": 0,
   "expl": "840 × 9,81 × 4,0 = 3,3×10⁴ Pa, soit 0,33 bar. Vérifier l'ordre de grandeur : 10 m d'eau donnent 1 bar, donc quatre mètres de gazole doivent donner un tiers de bar environ. 3pt"
  },
  {
   "q": "Un manomètre d'atelier affiche :",
   "choix": [
    "la pression absolue",
    "la pression relative",
    "la pression atmosphérique"
   ],
   "bonne": 1,
   "expl": "le manomètre lit une pression relative ; on ajoute l'atmosphère pour obtenir l'absolue, indispensable dès qu'un gaz intervient. 3pt"
  },
  {
   "q": "Le théorème de Pascal énonce qu'une variation de pression dans un fluide incompressible enfermé :",
   "choix": [
    "s'atténue avec la distance",
    "se transmet intégralement en tout point",
    "ne se transmet que vers le bas"
   ],
   "bonne": 1,
   "expl": "la pression est la même partout, donc F₂ = F₁ × S₂/S₁. Le rapport des forces est celui des sections, pas celui des diamètres : si les diamètres sont dans le rapport 20, les forces le sont dans le rapport 400. 3pt"
  },
  {
   "q": "Dans un vérin, S₂/S₁ = 20. Le rapport F₂/F₁ vaut :",
   "choix": [
    "20",
    "1/20",
    "400"
   ],
   "bonne": 0,
   "expl": "la pression est la même partout, donc F₂ = F₁ × S₂/S₁. Le rapport des forces est celui des sections, pas celui des diamètres : si les diamètres sont dans le rapport 20, les forces le sont dans le rapport 400. 3pt"
  },
  {
   "q": "Dans ce même vérin, le gros piston se déplace, par rapport au petit :",
   "choix": [
    "20 fois plus",
    "autant",
    "20 fois moins"
   ],
   "bonne": 2,
   "expl": "le volume d'huile chassé est le volume reçu : S₁ d₁ = S₂ d₂. On échange de la course contre de la force ; l'énergie se conserve. 3pt"
  },
  {
   "q": "On trace p = f(h) dans un liquide, h en mètres. La pente de la droite vaut :",
   "choix": [
    "ρ",
    "ρg",
    "ρg h"
   ],
   "bonne": 1,
   "expl": "p = ρg h est de la forme y = a x avec a = ρg. D'où ρ= a/g, la méthode centrale de l'activité et du CCF. 3pt"
  },
  {
   "q": "Une mesure donne ρ= (890 ± 30) kg/m³ et la référence vaut 870. On conclut que :",
   "choix": [
    "la mesure est fausse, l'écart est de 20",
    "la mesure est compatible avec la référence",
    "on ne peut rien conclure sans refaire la mesure"
   ],
   "bonne": 1,
   "expl": "l'intervalle [860 ;920] contient 870. Comparer deux nombres ne suffit jamais : il faut construire l'intervalle, dire si la référence y appartient, puis conclure par une phrase. C'est exactement ce qu'évalue la compétence Valider. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Pression » ?",
   "verso": "La <strong>pression</strong> p exercée par une force F répartie perpendiculairement sur une surface S est le quotient de cette force par cette surface.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Principe fondamental de l'hydrostatique (PFH) » ?",
   "verso": "Dans un liquide <strong>au repos</strong> et <strong>incompressible</strong>, la différence de pression entre deux points séparés d'une hauteur h vaut :",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Les deux pressions » ?",
   "verso": "La <strong>pression relative</strong> (ou effective) est celle qu'affiche le manomètre : elle se compte à partir de la pression atmosphérique. La <strong>pression absolue</strong> se compte à partir du vide.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Théorème de Pascal » ?",
   "verso": "Toute variation de pression exercée en un point d'un fluide incompressible enfermé se transmet intégralement en tout autre point du fluide.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Les trois unités à savoir manier — qu'y a-t-il à retenir ?",
   "verso": "1 bar = 1×10⁵ Pa = 0,1 MPa et 1 MPa = 10 bar. Le pascal est la seule unité du Système international : c'est celle qu'il faut employer dans <em>tous</em> les calculs. Le bar sert à lire et à communiquer.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Le paradoxe hydrostatique — qu'y a-t-il à retenir ?",
   "verso": "La pression au fond d'un récipient ne dépend ni de sa forme, ni du volume de liquide qu'il contient : elle ne dépend que de la hauteur et de la masse volumique.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Le prix de la multiplication — qu'y a-t-il à retenir ?",
   "verso": "Le rapport des forces vaut le rapport des sections. Mais le volume d'huile chassé par le petit piston est celui que reçoit le gros, d'où S₁ d₁ = S₂ d₂ : le gros piston avance d'autant moins que la force est multipliée.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Lorsque ρ= a/g et que g est connu très précisément, l'incertitude relative se transmet telle quelle : …….",
   "rep": "u(ρ)/ρ= u(a)/a",
   "verso": "<strong>u(ρ)/ρ= u(a)/a</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La pression au fond d'un récipient ne dépend ni de sa forme, …… qu'il contient : elle ne dépend que de la hauteur et de la masse volumique.",
   "rep": "ni du volume de liquide",
   "verso": "<strong>ni du volume de liquide</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "La pression est ……",
   "rep": "une force divisée par une surface",
   "verso": "<strong>une force divisée par une surface</strong> — p = F/S.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "1 bar vaut ……",
   "rep": "1×10⁵ Pa",
   "verso": "<strong>1×10⁵ Pa</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une section de 25 cm² vaut, en m² ……",
   "rep": "2,5×10⁻⁴",
   "verso": "<strong>2,5×10⁻⁴</strong> — une aire se convertit en e-4 : c'est le piège numéro un du chapitre. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Deux cuves de même hauteur de liquide, l'une cylindrique, l'autre évasée. La pression au fond est ……",
   "rep": "identique",
   "verso": "<strong>identique</strong> — c'est le paradoxe hydrostatique : ni la forme, ni le volume n'interviennent. Attention, la force sur le fond dépend en revanche de l'aire de ce fond (F = p S) : pression et force ne se confondent pas. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La différence de pression entre la surface et un point situé 4,0 m plus bas dans du gazole (ρ= 840 kg/m³) vaut environ ……",
   "rep": "3,3×10⁴ Pa",
   "verso": "<strong>3,3×10⁴ Pa</strong>",
   "origine": "bilan"
  }
 ]
};
