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
    "la pression",
    "l'énergie interne"
   ],
   "bonne": 1,
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
    "2,0",
    "3,0",
    "1,0"
   ],
   "bonne": 1,
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
    "adiabatique",
    "isochore"
   ],
   "bonne": 1,
   "expl": "chaque nom dit ce qui ne bouge pas : iso-chore le volume, iso-bare la pression, iso-therme la température. L'adiabatique fait exception : elle ne fixe aucune variable d'état, elle interdit tout échange de chaleur. Et comme ΔU ne dépend que de T pour un gaz parfait, une transformation isotherme donne ΔU = 0, donc Q = -W. 3pt"
  },
  {
   "q": "Un gaz reçoit 500 J de chaleur et fournit 200 J de travail. Sa variation d'énergie interne vaut :",
   "choix": [
    "700 J",
    "300 J",
    "-300 J"
   ],
   "bonne": 1,
   "expl": "convention du banquier : Q = +500 J (reçu), W = -200 J (fourni), donc ΔU = 500 - 200 = 300 J. La réponse a correspond à une erreur de signe sur le travail. 3pt"
  },
  {
   "q": "Dans une transformation isochore, le travail vaut :",
   "choix": [
    "W = -p ΔV",
    "W = 0",
    "W = ΔU"
   ],
   "bonne": 1,
   "expl": "sans variation de volume, aucune paroi ne se déplace : le gaz ne peut ni recevoir ni fournir de travail. C'est pourquoi l'isochore est le cas le plus simple : ΔU = Q. 3pt"
  },
  {
   "q": "Pour un gaz parfait subissant une transformation isotherme :",
   "choix": [
    "ΔU = 0",
    "Q = 0",
    "W = 0"
   ],
   "bonne": 0,
   "expl": "chaque nom dit ce qui ne bouge pas : iso-chore le volume, iso-bare la pression, iso-therme la température. L'adiabatique fait exception : elle ne fixe aucune variable d'état, elle interdit tout échange de chaleur. Et comme ΔU ne dépend que de T pour un gaz parfait, une transformation isotherme donne ΔU = 0, donc Q = -W. 3pt"
  },
  {
   "q": "La première loi de Joule affirme que, pour un gaz parfait, ΔU dépend :",
   "choix": [
    "uniquement de la température",
    "de la température et du volume",
    "du chemin suivi"
   ],
   "bonne": 0,
   "expl": "c'est le cœur du chapitre. U est une fonction d'état : elle ne dépend que de l'état, jamais du chemin. W et Q, eux, en dépendent — c'est pourquoi on ne dit jamais qu'un système « contient de la chaleur ». L'exercice 5 le montre par le calcul : même ΔU, mais deux valeurs de Q différant de 249 J. 3pt"
  },
  {
   "q": "Deux chemins différents mènent du même état initial au même état final. Sont identiques :",
   "choix": [
    "W et Q",
    "ΔU seulement",
    "les trois"
   ],
   "bonne": 1,
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
    "Q = m L_f",
    "Q = n C_v,m ΔT"
   ],
   "bonne": 1,
   "expl": "pendant un changement d'état, la température ne bouge pas : toute l'énergie sert à rompre les liaisons entre molécules, pas à les agiter. La formule m c Δθ ne s'applique donc que hors palier ; sur le palier, c'est m L. Confondre les deux est l'erreur la plus fréquente des bilans calorimétriques. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "C'est une <strong>fonction d'état</strong> : …….",
   "verso": "<strong>elle ne dépend que de l'état du système, jamais du chemin suivi pour y parvenir</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "L'<strong>enthalpie</strong> est définie par …….",
   "verso": "<strong>H = U + p V</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Les deux sont séparés par ……, réelle ou imaginaire.",
   "verso": "<strong>la frontière</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "L'<strong>énergie interne</strong> U d'un système est …….",
   "verso": "<strong>l'énergie contenue dans l'agitation et les interactions de ses particules</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Pour un gaz parfait, l'énergie interne ne dépend que de …… : ΔU = n C_v,m ΔT.",
   "verso": "<strong>la température</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le <strong>système</strong> est …… ; tout le reste constitue le milieu extérieur.",
   "verso": "<strong>la portion de matière que l'on choisit d'étudier</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>température</strong> mesure …… : plus elles vont vite, plus elle est élevée.",
   "verso": "<strong>l'agitation des particules</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Tout ce que le système reçoit est compté …… ; tout ce qu'il cède est compté négativement.",
   "verso": "<strong>positivement</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Tout ce que le système reçoit est compté positivement ; tout ce qu'il cède est compté …….",
   "verso": "<strong>négativement</strong>",
   "origine": "cours a completer"
  }
 ]
};
