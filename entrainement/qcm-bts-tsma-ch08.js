/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 08 · Gaz parfaits et premier principe
   Le bilan vient de ch08_bilan.tex, les cartes des \trou{} de
   ch08_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "8",
 "titre": "Gaz parfaits et premier principe",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Convertir 20 °C en kelvins :",
   "choix": [
    "253 K",
    "293 K",
    "273 K",
    "20 K"
   ],
   "bonne": 1,
   "expl": "T = θ + 273. Une température en kelvins n'est jamais négative."
  },
  {
   "q": "Convertir 8,0 bar en pascals :",
   "choix": [
    "8,0×10³ Pa",
    "8,0×10⁴ Pa",
    "8,0×10⁵ Pa",
    "8,0×10⁶ Pa"
   ],
   "bonne": 2,
   "expl": "1 bar = 10⁵ Pa."
  },
  {
   "q": "Un corps passe de 20 °C à 80 °C. L'écart ΔT en kelvins vaut :",
   "choix": [
    "60 K",
    "333 K",
    "353 K",
    "60,15 K"
   ],
   "bonne": 0,
   "expl": "Un ÉCART de température a la même valeur en kelvins et en degrés Celsius. Ce sont les températures absolues, pas les écarts, qu'il faut convertir."
  },
  {
   "q": "Dans pV = nRT, la quantité de matière s'écrit :",
   "choix": [
    "n = pVRT",
    "n = pV/(RT)",
    "n = RT/(pV)",
    "n = p/(VRT)"
   ],
   "bonne": 1,
   "expl": "n = pV/RT, avec p en pascals, V en m³ et T en kelvins."
  },
  {
   "q": "Une pression proportionnelle à T vaut 3,0 bar à 288 K. À 318 K elle vaut :",
   "choix": [
    "2,72 bar",
    "3,31 bar",
    "3,0 bar",
    "3,64 bar"
   ],
   "bonne": 1,
   "expl": "3,0 × 318/288 = 3,31 bar. Un rapport de températures se calcule TOUJOURS en kelvins."
  },
  {
   "q": "Convertir 2308 hPa en pascals :",
   "choix": [
    "2,308×10³ Pa",
    "2,308×10⁴ Pa",
    "2,308×10⁵ Pa",
    "2,308×10⁶ Pa"
   ],
   "bonne": 2,
   "expl": "1 hPa = 100 Pa."
  }
 ],
 "bilan": [
  {
   "q": "Parmi ces grandeurs, laquelle est intensive ?",
   "choix": [
    "le volume",
    "l'énergie interne",
    "la pression"
   ],
   "bonne": 2,
   "expl": "le test : je coupe le système en deux. La pression ne change pas (intensive) ; le volume et l'énergie interne sont divisés par deux (extensives). 3pt"
  },
  {
   "q": "Dans pV = nRT, la température doit être exprimée en :",
   "choix": [
    "degrés Celsius",
    "kelvins",
    "l'une ou l'autre"
   ],
   "bonne": 1,
   "expl": "deux conversions oubliées à chaque devoir. La température doit être absolue : une valeur en degrés Celsius donne un résultat absurde, parfois négatif. Et le manomètre affiche une pression relative : il faut ajouter le bar atmosphérique, ce qui change ici le résultat d'un tiers. 3pt"
  },
  {
   "q": "Un pneu affiche 2,0 au manomètre. La pression à employer dans pV = nRT est :",
   "choix": [
    "3,0",
    "2,0",
    "1,0"
   ],
   "bonne": 0,
   "expl": "deux conversions oubliées à chaque devoir. La température doit être absolue : une valeur en degrés Celsius donne un résultat absurde, parfois négatif. Et le manomètre affiche une pression relative : il faut ajouter le bar atmosphérique, ce qui change ici le résultat d'un tiers. 3pt"
  },
  {
   "q": "Une transformation à volume constant est dite :",
   "choix": [
    "isobare",
    "isochore",
    "isotherme"
   ],
   "bonne": 1,
   "expl": "chaque nom dit ce qui ne bouge pas : iso-chore le volume, iso-bare la pression, iso-therme la température. L'adiabatique fait exception : elle ne fixe aucune variable d'état, elle interdit tout échange de chaleur. Et comme ΔU ne dépend que de T pour un gaz parfait, une transformation isotherme donne ΔU = 0, donc Q = -W. 3pt"
  },
  {
   "q": "Une transformation sans échange de chaleur est dite :",
   "choix": [
    "isotherme",
    "isochore",
    "adiabatique"
   ],
   "bonne": 2,
   "expl": "chaque nom dit ce qui ne bouge pas : iso-chore le volume, iso-bare la pression, iso-therme la température. L'adiabatique fait exception : elle ne fixe aucune variable d'état, elle interdit tout échange de chaleur. Et comme ΔU ne dépend que de T pour un gaz parfait, une transformation isotherme donne ΔU = 0, donc Q = -W. 3pt"
  },
  {
   "q": "Un gaz reçoit 500 J de chaleur et fournit 200 J de travail. Sa variation d'énergie interne vaut :",
   "choix": [
    "300 J",
    "700 J",
    "-300 J"
   ],
   "bonne": 0,
   "expl": "convention du banquier : Q = +500 J (reçu), W = -200 J (fourni), donc ΔU = 500 - 200 = 300 J. La réponse « 700 J » correspond à une erreur de signe sur le travail. 3pt"
  },
  {
   "q": "Dans une transformation isochore, le travail vaut :",
   "choix": [
    "W = 0",
    "W = -p ΔV",
    "W = ΔU"
   ],
   "bonne": 0,
   "expl": "sans variation de volume, aucune paroi ne se déplace : le gaz ne peut ni recevoir ni fournir de travail. C'est pourquoi l'isochore est le cas le plus simple : ΔU = Q. 3pt"
  },
  {
   "q": "Pour un gaz parfait subissant une transformation isotherme :",
   "choix": [
    "W = 0",
    "Q = 0",
    "ΔU = 0"
   ],
   "bonne": 2,
   "expl": "chaque nom dit ce qui ne bouge pas : iso-chore le volume, iso-bare la pression, iso-therme la température. L'adiabatique fait exception : elle ne fixe aucune variable d'état, elle interdit tout échange de chaleur. Et comme ΔU ne dépend que de T pour un gaz parfait, une transformation isotherme donne ΔU = 0, donc Q = -W. 3pt"
  },
  {
   "q": "La première loi de Joule affirme que, pour un gaz parfait, ΔU dépend :",
   "choix": [
    "de la température et du volume",
    "uniquement de la température",
    "du chemin suivi"
   ],
   "bonne": 1,
   "expl": "c'est le cœur du chapitre. U est une fonction d'état : elle ne dépend que de l'état, jamais du chemin. W et Q, eux, en dépendent — c'est pourquoi on ne dit jamais qu'un système « contient de la chaleur ». L'exercice 5 le montre par le calcul : même ΔU, mais deux valeurs de Q différant de 249 J. 3pt"
  },
  {
   "q": "Deux chemins différents mènent du même état initial au même état final. Sont identiques :",
   "choix": [
    "ΔU seulement",
    "W et Q",
    "les trois"
   ],
   "bonne": 0,
   "expl": "c'est le cœur du chapitre. U est une fonction d'état : elle ne dépend que de l'état, jamais du chemin. W et Q, eux, en dépendent — c'est pourquoi on ne dit jamais qu'un système « contient de la chaleur ». L'exercice 5 le montre par le calcul : même ΔU, mais deux valeurs de Q différant de 249 J. 3pt"
  },
  {
   "q": "Pendant la fusion d'un glaçon, la température de l'eau et de la glace :",
   "choix": [
    "augmente régulièrement",
    "reste constante",
    "diminue"
   ],
   "bonne": 1,
   "expl": "pendant un changement d'état, la température ne bouge pas : toute l'énergie sert à rompre les liaisons entre molécules, pas à les agiter. La formule m c Δθ ne s'applique donc que hors palier ; sur le palier, c'est m L. Confondre les deux est l'erreur la plus fréquente des bilans calorimétriques. tcolorbox"
  },
  {
   "q": "L'énergie nécessaire pour fondre une masse m de glace s'écrit :",
   "choix": [
    "Q = m c Δθ",
    "Q = n C_v,m ΔT",
    "Q = m L_f"
   ],
   "bonne": 2,
   "expl": "pendant un changement d'état, la température ne bouge pas : toute l'énergie sert à rompre les liaisons entre molécules, pas à les agiter. La formule m c Δθ ne s'applique donc que hors palier ; sur le palier, c'est m L. Confondre les deux est l'erreur la plus fréquente des bilans calorimétriques. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'un système en thermodynamique ? Convention de signe des échanges ?",
   "verso": "La portion de matière étudiée, séparée du <b>milieu extérieur</b> par une <b>frontière</b>.<br>Ce que le système <b>reçoit</b> : <b>positif</b> ; ce qu'il <b>cède</b> : <b>négatif</b>.",
   "origine": "Cours §1.1 Système"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Grandeur intensive et grandeur extensive : définir et donner des exemples.",
   "verso": "<b>Intensive</b> : inchangée si l'on coupe le système en deux (T, p, ρ).<br><b>Extensive</b> : proportionnelle à la taille (V, m, n, U, H).",
   "origine": "Cours §1.2 Intensif, extensif"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Isochore, isobare, isotherme, adiabatique : que signifient-elles ?",
   "verso": "<b>Isochore</b> : V constant. <b>Isobare</b> : p constante. <b>Isotherme</b> : T constante. <b>Adiabatique</b> : Q = 0.",
   "origine": "Cours §1.3 Les transformations"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que traduisent la température et la pression d'un gaz à l'échelle des particules ?",
   "verso": "<b>Température</b> : l'<b>agitation</b> des particules.<br><b>Pression</b> : les <b>chocs</b> des particules sur les parois.",
   "origine": "Cours §2.1 Interprétation microscopique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Loi des gaz parfaits et unités ?",
   "verso": "<b>p V = n R T</b> : p en Pa (<b>absolue</b>), V en m³, n en mol, T en <b>K</b>, R = 8,314 J·mol<sup>−1</sup>·K<sup>−1</sup>.",
   "origine": "Cours §2.2 Loi des gaz parfaits"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pneu gonflé « à 2 bar » au manomètre : quelle pression dans pV = nRT ?",
   "verso": "La pression <b>absolue</b> : 2 + 1 = <b>3 bar</b> (3 × 10<sup>5</sup> Pa).",
   "origine": "Cours §2.2 La pression est toujours absolue"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer le premier principe. Qu'est-ce qu'une fonction d'état ?",
   "verso": "<b>ΔU = W + Q</b> (tout ce que le système reçoit).<br>U est une <b>fonction d'état</b> : ne dépend que de l'état, pas du chemin. W et Q en dépendent.",
   "origine": "Cours §3.1 Premier principe"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énergie interne d'un gaz parfait : de quoi dépend-elle ?",
   "verso": "Seulement de la <b>température</b> : <b>ΔU = n C<sub>v,m</sub> ΔT</b>, quelle que soit la transformation.",
   "origine": "Cours §3.2 Première loi de Joule"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que vaut W ou Q pour une isochore ? une isobare ? une isotherme ? une adiabatique ?",
   "verso": "Isochore : <b>W = 0</b>, Q = ΔU.<br>Isobare : <b>W = −p ΔV</b>.<br>Isotherme : <b>ΔU = 0</b>, Q = −W.<br>Adiabatique : <b>Q = 0</b>, ΔU = W.",
   "origine": "Cours §3.3 Les quatre transformations"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Température et pression après une compression adiabatique de taux τ ?",
   "verso": "<b>T<sub>2</sub> = T<sub>1</sub> τ<sup>γ−1</sup></b> ; <b>p<sub>2</sub> = p<sub>1</sub> τ<sup>γ</sup></b> (T en K).",
   "origine": "Cours §3.3 Compression adiabatique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir l'enthalpie. Son intérêt ?",
   "verso": "<b>H = U + p V</b>. À <b>pression constante</b> : <b>ΔH = Q</b>.",
   "origine": "Cours §4.1 L'enthalpie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelle formule hors changement d'état ? pendant un changement d'état ?",
   "verso": "Hors changement : <b>Q = m c Δθ</b> (θ varie).<br>Pendant : <b>Q = m L</b> (θ constante, L enthalpie massique de changement d'état).",
   "origine": "Cours §4.2 Changements d'état"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment exploiter la loi des gaz parfaits entre deux états ?",
   "verso": "1. Convertir : bar → Pa (× 10<sup>5</sup>, absolue), L → m³ (÷ 1000), °C → K (+ 273,15).<br>2. Repérer ce qui ne varie pas.<br>3. p<sub>1</sub>V<sub>1</sub>/T<sub>1</sub> = p<sub>2</sub>V<sub>2</sub>/T<sub>2</sub>, simplifier.<br>4. Pour n ou m : pV = nRT puis m = n M.",
   "origine": "Cours §2.2 Méthode — Gaz parfaits"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Air à 20 °C, taux de compression 18, γ = 1,40. Comment trouver la température en fin de compression ?",
   "verso": "1. Compression rapide → <b>adiabatique</b>.<br>2. T<sub>1</sub> = 293 K.<br>3. T<sub>2</sub> = 293 × 18<sup>0,40</sup> = <b>931 K</b> (658 °C).<br>4. &gt; 250 °C : le gazole s'enflamme sans bougie.",
   "origine": "Cours §3.3 La compression d'un diesel"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment déterminer une température d'équilibre dans un calorimètre ?",
   "verso": "1. Qui <b>cède</b>, qui <b>reçoit</b>.<br>2. <b>Vérifier la faisabilité</b> (assez d'énergie pour tout fondre ?).<br>3. Q<sub>cédé</sub> = Q<sub>reçu</sub> avec m c Δθ et m L.<br>4. Résoudre, vérifier θ<sub>f</sub> encadrée.",
   "origine": "Cours §4.3 Méthode — Calorimètre"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
