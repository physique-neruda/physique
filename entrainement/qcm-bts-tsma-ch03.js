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
    "une force multipliée par une surface",
    "une force divisée par une surface"
   ],
   "bonne": 2,
   "expl": "p = F/S."
  },
  {
   "q": "1 bar vaut :",
   "choix": [
    "1×10⁵ Pa",
    "1×10³ Pa",
    "1×10⁶ Pa"
   ],
   "bonne": 0,
   "expl": "1 bar = 1×10⁵ Pa = 0,1 MPa."
  },
  {
   "q": "Une section de 25 cm² vaut, en m² :",
   "choix": [
    "0,25",
    "2,5×10⁻⁴",
    "2,5×10⁻³"
   ],
   "bonne": 1,
   "expl": "une aire se convertit en e-4 : c'est le piège numéro un du chapitre. 3pt"
  },
  {
   "q": "Dans un liquide au repos, la pression au fond dépend :",
   "choix": [
    "du volume de liquide contenu",
    "de la hauteur de liquide et de sa masse volumique",
    "de la forme du récipient"
   ],
   "bonne": 1,
   "expl": "c'est le paradoxe hydrostatique : ni la forme, ni le volume n'interviennent. Attention, la force sur le fond dépend en revanche de l'aire de ce fond (F = p S) : pression et force ne se confondent pas. 3pt"
  },
  {
   "q": "Deux cuves de même hauteur de liquide, l'une cylindrique, l'autre évasée. La pression au fond est :",
   "choix": [
    "plus grande dans l'évasée",
    "plus grande dans la cylindrique",
    "identique"
   ],
   "bonne": 2,
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
    "la pression atmosphérique",
    "la pression relative"
   ],
   "bonne": 2,
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
    "20 fois moins",
    "autant"
   ],
   "bonne": 1,
   "expl": "le volume d'huile chassé est le volume reçu : S₁ d₁ = S₂ d₂. On échange de la course contre de la force ; l'énergie se conserve. 3pt"
  },
  {
   "q": "On trace p = f(h) dans un liquide, h en mètres. La pente de la droite vaut :",
   "choix": [
    "ρ",
    "ρg h",
    "ρg"
   ],
   "bonne": 2,
   "expl": "p = ρg h est de la forme y = a x avec a = ρg. D'où ρ= a/g, la méthode centrale de l'activité et du CCF. 3pt"
  },
  {
   "q": "Une mesure donne ρ= (890 ± 30) kg/m³ et la référence vaut 870. On conclut que :",
   "choix": [
    "la mesure est compatible avec la référence",
    "la mesure est fausse, l'écart est de 20",
    "on ne peut rien conclure sans refaire la mesure"
   ],
   "bonne": 0,
   "expl": "l'intervalle [860 ;920] contient 870. Comparer deux nombres ne suffit jamais : il faut construire l'intervalle, dire si la référence y appartient, puis conclure par une phrase. C'est exactement ce qu'évalue la compétence Valider. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la pression. Unités ?",
   "verso": "<b>p = F / S</b> : force répartie perpendiculairement sur une surface. p en <b>Pa</b>, F en N, S en <b>m²</b> (1 Pa = 1 N/m²).",
   "origine": "Cours §1.1 La pression"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Section d'un piston de diamètre D ? 1 cm² en m² ?",
   "verso": "<b>S = π D² / 4</b>.<br><b>1 cm² = 10<sup>−4</sup> m²</b> (et non 10<sup>−2</sup>).",
   "origine": "Cours §1.1 L'erreur qui coûte cher"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relations entre bar, pascal et mégapascal ?",
   "verso": "<b>1 bar = 10<sup>5</sup> Pa = 0,1 MPa</b> ; <b>1 MPa = 10 bar</b>. On lit en bar, on calcule en Pa.",
   "origine": "Cours §1.2 Les unités"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer le principe fondamental de l'hydrostatique.",
   "verso": "Dans un liquide au repos et incompressible : <b>Δp = ρ g h</b> (Pa ; kg/m³ ; g = 9,81 N/kg ; m). La pression est plus grande <b>en bas</b>.",
   "origine": "Cours §2.1 Principe fondamental de l'hydrostatique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>La pression au fond d'une cuve dépend-elle de sa forme ? du volume de liquide ?",
   "verso": "<b>Non</b> : seulement de la <b>hauteur</b> et de la <b>masse volumique</b>.",
   "origine": "Cours §2.2 Le paradoxe hydrostatique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation entre pression absolue et relative ? Laquelle affiche le manomètre ? Laquelle pour un gaz ?",
   "verso": "<b>p<sub>abs</sub> = p<sub>atm</sub> + p<sub>rel</sub></b>. Le manomètre affiche la <b>relative</b>. Les calculs sur un <b>gaz</b> exigent la <b>absolue</b>.",
   "origine": "Cours §2.3 Pression absolue, relative"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer le théorème de Pascal. Conséquence pour deux pistons ?",
   "verso": "Une variation de pression dans un fluide incompressible enfermé <b>se transmet intégralement</b> partout.<br><b>F<sub>1</sub>/S<sub>1</sub> = F<sub>2</sub>/S<sub>2</sub></b> → F<sub>2</sub> = F<sub>1</sub> × S<sub>2</sub>/S<sub>1</sub>.",
   "origine": "Cours §3.1 Théorème de Pascal"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que paie-t-on quand une presse multiplie la force ?",
   "verso": "La <b>course</b> : S<sub>1</sub> d<sub>1</sub> = S<sub>2</sub> d<sub>2</sub>. On échange de la course contre de la force ; l'énergie se conserve.",
   "origine": "Cours §3.2 Le prix de la multiplication"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Manomètre et capteur de pression : que délivrent-ils ?",
   "verso": "<b>Manomètre</b> : affiche une pression <b>relative</b> ; incertitude fixée par sa classe.<br><b>Capteur</b> : une <b>tension</b> proportionnelle à la pression, pour une acquisition.",
   "origine": "Cours §4.1 Les instruments"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Si ρ = a / g avec g très précis, quelle incertitude relative sur ρ ?",
   "verso": "<b>u(ρ)/ρ = u(a)/a</b> : 3 % sur la pente → 3 % sur ρ.",
   "origine": "Cours §4.3 Incertitude relative"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment utiliser Δp = ρ g h selon l'inconnue ?",
   "verso": "Pression : <b>Δp = ρ g h</b>.<br>Hauteur : <b>h = Δp / (ρ g)</b> (indicateur de niveau).<br>Fluide : <b>ρ = Δp / (g h)</b>.<br>h en m, hauteur de liquide <b>au-dessus du point</b>.",
   "origine": "Cours §2.1 Méthode — PFH dans les trois sens"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Petit piston 2,0 cm² poussé par 200 N, grand piston 50 cm². Comment trouver p et F<sub>2</sub> ?",
   "verso": "1. p = 200 / 2,0 × 10<sup>−4</sup> = <b>1,0 × 10<sup>6</sup> Pa</b> (10 bar).<br>2. F<sub>2</sub> = p × S<sub>2</sub> = 10<sup>6</sup> × 50 × 10<sup>−4</sup> = <b>5000 N</b>.<br>3. Force × 25, course ÷ 25.",
   "origine": "Cours §3.1 Un ordre de grandeur d'atelier"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment déterminer une masse volumique par la pente de p = f(h) ?",
   "verso": "1. Zéro du capteur <b>à la surface</b>.<br>2. Au moins 6 couples (h ; p), h en m.<br>3. Tracer, vérifier l'alignement et l'origine.<br>4. Pente a = Δp/Δh sur deux points éloignés.<br>5. <b>ρ = a / g</b>.",
   "origine": "Cours §4.2 Méthode — ρ par la pente"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Pente a = 8,76 × 10<sup>3</sup> Pa/m, incertitude 3 %, référence 870 kg/m³. Comment conclure ?",
   "verso": "1. ρ = 8760/9,81 = 893 kg/m³.<br>2. u = 3 % → 27, arrondi vers le haut à 30.<br>3. ρ = <b>(890 ± 30) kg/m³</b> → [860 ; 920].<br>4. 870 y est → <b>compatible</b>.",
   "origine": "Cours §4.3 Conclure proprement"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
