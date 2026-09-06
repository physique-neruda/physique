/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 04 · Dynamique des fluides
   Le bilan vient de ch04_bilan.tex, les cartes des \trou{} de
   ch04_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "4",
 "titre": "Dynamique des fluides",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Un débit de 60 L/min vaut, en m³/s :",
   "choix": [
    "1,0×10⁻³",
    "6,0×10⁻²",
    "1,0×10⁻²",
    "3,6"
   ],
   "bonne": 0,
   "expl": "60/60 000 = 1,0×10⁻³ m³/s."
  },
  {
   "q": "Si le diamètre d'une conduite est divisé par 2, la section est divisée par :",
   "choix": [
    "2",
    "4",
    "8",
    "√2"
   ],
   "bonne": 1,
   "expl": "La section varie comme le CARRÉ du diamètre. C'est le résultat le plus utile du chapitre."
  },
  {
   "q": "L'aire d'un disque de diamètre 25 mm vaut, en m² :",
   "choix": [
    "4,91×10⁻⁴",
    "1,96×10⁻³",
    "4,91×10⁻²",
    "6,25×10⁻⁴"
   ],
   "bonne": 0,
   "expl": "S = π × 0,025²/4 = 4,91×10⁻⁴ m²."
  },
  {
   "q": "Dans S₁v₁ = S₂v₂, la vitesse v₂ s'écrit :",
   "choix": [
    "v₂ = S₂/(S₁v₁)",
    "v₂ = S₁v₁/S₂",
    "v₂ = S₂v₁/S₁",
    "v₂ = v₁ − S₁/S₂"
   ],
   "bonne": 1,
   "expl": "L'équation de conservation se réarrange comme une proportion : ce qui est en face passe au dénominateur."
  },
  {
   "q": "Une grandeur y est proportionnelle à x². Si x augmente de 10 %, y augmente de :",
   "choix": [
    "10 %",
    "20 %",
    "21 %",
    "100 %"
   ],
   "bonne": 2,
   "expl": "1,10² = 1,21. Un carré n'ajoute pas deux fois le pourcentage : il le compose."
  },
  {
   "q": "Combien vaut 2,04² − 0,80² ?",
   "choix": [
    "1,24",
    "1,54",
    "3,52",
    "1,54²"
   ],
   "bonne": 2,
   "expl": "4,16 − 0,64 = 3,52. Ne jamais écrire (2,04 − 0,80)² : le carré d'une différence n'est pas la différence des carrés."
  }
 ],
 "bilan": [
  {
   "q": "Le débit volumique s'exprime, dans le Système international, en :",
   "choix": [
    "L/min",
    "m³/s",
    "kg/s"
   ],
   "bonne": 1,
   "expl": "le débitmètre affiche des L/min, le calcul exige des m³/s : diviser par 60000. La réponse b de la question 2 correspond à un oubli du facteur 60. 3pt"
  },
  {
   "q": "60 L/min valent :",
   "choix": [
    "1,0×10⁻³ m³/s",
    "60×10⁻³ m³/s",
    "1,0 m³/s"
   ],
   "bonne": 0,
   "expl": "le débitmètre affiche des L/min, le calcul exige des m³/s : diviser par 60000. La réponse b de la question 2 correspond à un oubli du facteur 60. 3pt"
  },
  {
   "q": "Le débit massique se calcule par :",
   "choix": [
    "Q_m = Q_v / ρ",
    "Q_m = ρQ_v",
    "Q_m = ρ/ Q_v"
   ],
   "bonne": 1,
   "expl": "Q_m = ρQ_v : une masse volumique multipliée par un volume par seconde donne bien des kg/s. Vérifier par les unités en cas de doute. 3pt"
  },
  {
   "q": "L'équation de continuité traduit la conservation :",
   "choix": [
    "de l'énergie",
    "de la masse",
    "de la pression"
   ],
   "bonne": 1,
   "expl": "la continuité découle de la conservation de la masse (rien ne s'accumule), pas de l'énergie : c'est Bernoulli qui traduit l'énergie. Et comme S D², diviser le diamètre par deux divise la section par quatre, donc multiplie la vitesse par quatre. 3pt"
  },
  {
   "q": "Une conduite passe de 40 mm à 20 mm de diamètre. La vitesse est multipliée par :",
   "choix": [
    "2",
    "4",
    "16"
   ],
   "bonne": 1,
   "expl": "la continuité découle de la conservation de la masse (rien ne s'accumule), pas de l'énergie : c'est Bernoulli qui traduit l'énergie. Et comme S D², diviser le diamètre par deux divise la section par quatre, donc multiplie la vitesse par quatre. 3pt"
  },
  {
   "q": "Dans le théorème de Bernoulli, le terme 1/2ρv² représente :",
   "choix": [
    "la pression statique",
    "la pression dynamique",
    "la pression de pesanteur"
   ],
   "bonne": 1,
   "expl": "les trois termes de Bernoulli sont la pression statique p, la pression dynamique 1/2ρv² et la pression de pesanteur ρg z. Les hypothèses ne sont pas décoratives : « parfait » veut dire sans viscosité, donc sans pertes de charge. Dans un circuit horizontal, z₁ = z₂ et les termes ρg z s'éliminent de part et d'autre. 3pt"
  },
  {
   "q": "Le théorème de Bernoulli suppose que le fluide est :",
   "choix": [
    "parfait, incompressible, en écoulement permanent",
    "visqueux et compressible",
    "au repos"
   ],
   "bonne": 0,
   "expl": "les trois termes de Bernoulli sont la pression statique p, la pression dynamique 1/2ρv² et la pression de pesanteur ρg z. Les hypothèses ne sont pas décoratives : « parfait » veut dire sans viscosité, donc sans pertes de charge. Dans un circuit horizontal, z₁ = z₂ et les termes ρg z s'éliminent de part et d'autre. 3pt"
  },
  {
   "q": "Dans un circuit horizontal, quel terme de Bernoulli disparaît ?",
   "choix": [
    "p",
    "1/2ρv²",
    "ρg z"
   ],
   "bonne": 2,
   "expl": "les trois termes de Bernoulli sont la pression statique p, la pression dynamique 1/2ρv² et la pression de pesanteur ρg z. Les hypothèses ne sont pas décoratives : « parfait » veut dire sans viscosité, donc sans pertes de charge. Dans un circuit horizontal, z₁ = z₂ et les termes ρg z s'éliminent de part et d'autre. 3pt"
  },
  {
   "q": "Au col d'un venturi, par rapport à l'amont :",
   "choix": [
    "la vitesse augmente et la pression diminue",
    "la vitesse et la pression augmentent",
    "la vitesse diminue et la pression augmente"
   ],
   "bonne": 0,
   "expl": "c'est l'effet Venturi. La continuité impose l'accélération ; la conservation de la somme impose alors la chute de pression statique. C'est aussi ce qui peut faire caviter une pompe dont la conduite d'aspiration est trop étroite. 3pt"
  },
  {
   "q": "La vitesse de sortie par l'orifice d'une cuve ouverte, situé à la profondeur h, vaut :",
   "choix": [
    "√(2gh)",
    "2gh",
    "ρg h"
   ],
   "bonne": 0,
   "expl": "v = √(2gh), indépendante de la masse volumique : de l'eau et du gazole sortent à la même vitesse sous la même hauteur. La réponse c est une pression, pas une vitesse — le contrôle des unités suffit à l'écarter. 3pt"
  },
  {
   "q": "Dans un circuit de relevage à 185 bar avec 1,4 m de dénivelé, le terme ρg z représente :",
   "choix": [
    "environ 50 % du total",
    "environ 6 % du total",
    "moins de 0,1 % du total"
   ],
   "bonne": 2,
   "expl": "870×9,81×1,4 = 1,19×10⁴ Pa face à 1,85×10⁷ Pa, soit 0,064 %. En haute pression, le dénivelé et la vitesse ne comptent pas ; ils redeviennent déterminants en aspiration et sur les cuves. 3pt"
  },
  {
   "q": "Comparé au débit réel, un venturi exploité par la formule du fluide parfait donne un débit :",
   "choix": [
    "légèrement surestimé",
    "exact",
    "très largement sous-estimé"
   ],
   "bonne": 0,
   "expl": "la formule ignore la viscosité et la contraction du jet au col. Le venturi annonce donc un peu plus que la réalité, typiquement 25. On corrige par un coefficient de débit C_d voisin de 0,95, obtenu en comparant à un empotage. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "Le <strong>débit massique</strong> Q_m est …….",
   "verso": "<strong>la masse correspondante</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le <strong>débit volumique</strong> Q_v est …….",
   "verso": "<strong>le volume de fluide traversant une section par unité de temps</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le fluide …… et ralentit dans les élargissements.",
   "verso": "<strong>accélère dans les rétrécissements</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le fluide accélère dans les rétrécissements et …….",
   "verso": "<strong>ralentit dans les élargissements</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Dans un circuit horizontal, la conservation impose …….",
   "verso": "<strong>p₁ - p₂ = 1/2ρ(v₂² - v₁²)</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Là où le fluide va plus vite, la pression statique est …….",
   "verso": "<strong>plus faible</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Dans un écoulement permanent d'un fluide incompressible, …….",
   "verso": "<strong>le débit volumique est le même à travers toute section de la conduite</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Là où le fluide va ……, la pression statique est plus faible.",
   "verso": "<strong>plus vite</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Comme les sections varient en D², diviser le diamètre par deux multiplie la vitesse par …….",
   "verso": "<strong>quatre</strong>",
   "origine": "cours a completer"
  }
 ]
};
