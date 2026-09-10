/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 05 · Viscosité et pertes de charge
   Le bilan vient de ch05_bilan.tex, les cartes des \trou{} de
   ch05_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "5",
 "titre": "Viscosité et pertes de charge",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Convertir 46 mm²/s en m²/s :",
   "choix": [
    "4,6×10⁻²",
    "4,6×10⁻⁵",
    "4,6×10⁻⁶",
    "46×10⁻³"
   ],
   "bonne": 1,
   "expl": "1 mm² = 10⁻⁶ m² : 46 mm²/s = 4,6×10⁻⁵ m²/s. C'est la viscosité d'une ISO VG 46."
  },
  {
   "q": "Si le diamètre D est multiplié par 2, la grandeur D⁴ est multipliée par :",
   "choix": [
    "4",
    "8",
    "16",
    "32"
   ],
   "bonne": 2,
   "expl": "2⁴ = 16. C'est le cœur du chapitre : un exposant 4 amplifie énormément le moindre écart de diamètre."
  },
  {
   "q": "Combien vaut 0,90⁴ ?",
   "choix": [
    "0,36",
    "0,656",
    "0,81",
    "0,90"
   ],
   "bonne": 1,
   "expl": "0,656 : dix pour cent de diamètre en moins font chuter la grandeur de 34 %."
  },
  {
   "q": "Combien vaut (3,00×10⁻³)⁴ ?",
   "choix": [
    "8,10×10⁻¹¹",
    "1,20×10⁻¹¹",
    "8,10×10⁻¹²",
    "9,00×10⁻⁶"
   ],
   "bonne": 0,
   "expl": "3⁴ = 81 et (10⁻³)⁴ = 10⁻¹², d'où 81×10⁻¹² = 8,10×10⁻¹¹."
  },
  {
   "q": "Une grandeur y est proportionnelle à x^1,75. Si x est multiplié par 2, y est multiplié par :",
   "choix": [
    "1,75",
    "2",
    "3,36",
    "3,50"
   ],
   "bonne": 2,
   "expl": "2^1,75 = 3,36. Un exposant supérieur à 1 fait croître le résultat plus vite que la variable."
  },
  {
   "q": "Le nombre de Reynolds Re = ρvD/η s'exprime :",
   "choix": [
    "en m/s",
    "en pascals",
    "sans unité",
    "en Pa·s"
   ],
   "bonne": 2,
   "expl": "Toutes les unités se simplifient : Re est un nombre pur, c'est ce qui lui permet de comparer des écoulements de tailles différentes."
  }
 ],
 "bilan": [
  {
   "q": "La viscosité dynamique η s'exprime en :",
   "choix": [
    "m²/s",
    "Pa·s",
    "Pa"
   ],
   "bonne": 1,
   "expl": "η en Pa·s. La réponse a est celle de la viscosité cinématique ν= η/ρ : les deux se distinguent par la masse volumique. 3pt"
  },
  {
   "q": "La désignation « ISO VG 46 » signifie que la viscosité cinématique vaut 46 mm²/s :",
   "choix": [
    "à toute température",
    "à 40 °C",
    "à 100 °C"
   ],
   "bonne": 1,
   "expl": "le nombre du grade ISO VG est la viscosité cinématique à 40 °C, température de référence normalisée. Une huile n'a pas « une » viscosité : elle en a une par température, et le facteur atteint 90 entre 0 °C et 100 °C. 3pt"
  },
  {
   "q": "Quand la température d'une huile augmente, sa viscosité :",
   "choix": [
    "augmente",
    "diminue fortement",
    "ne change pas"
   ],
   "bonne": 1,
   "expl": "le nombre du grade ISO VG est la viscosité cinématique à 40 °C, température de référence normalisée. Une huile n'a pas « une » viscosité : elle en a une par température, et le facteur atteint 90 entre 0 °C et 100 °C. 3pt"
  },
  {
   "q": "Le nombre de Reynolds s'exprime en :",
   "choix": [
    "m/s",
    "Pa",
    "il est sans unité"
   ],
   "bonne": 2,
   "expl": "Re est sans dimension : si le calcul lui donne une unité, une conversion manque. Sous 2000 l'écoulement est laminaire, au-dessus de 3000 turbulent. 3pt"
  },
  {
   "q": "Un écoulement pour lequel Re = 500 est :",
   "choix": [
    "laminaire",
    "turbulent",
    "impossible"
   ],
   "bonne": 0,
   "expl": "Re est sans dimension : si le calcul lui donne une unité, une conversion manque. Sous 2000 l'écoulement est laminaire, au-dessus de 3000 turbulent. 3pt"
  },
  {
   "q": "Une perte de charge due à un coude est dite :",
   "choix": [
    "régulière",
    "singulière",
    "négligeable"
   ],
   "bonne": 1,
   "expl": "un coude est une singularité : la perte y est concentrée en un point, alors que les pertes régulières se répartissent sur les longueurs droites. Dans les deux cas l'énergie part en chaleur et n'est jamais récupérable. 3pt"
  },
  {
   "q": "L'énergie perdue par pertes de charge se retrouve sous forme :",
   "choix": [
    "de pression en aval",
    "de chaleur",
    "d'énergie cinétique"
   ],
   "bonne": 1,
   "expl": "un coude est une singularité : la perte y est concentrée en un point, alors que les pertes régulières se répartissent sur les longueurs droites. Dans les deux cas l'énergie part en chaleur et n'est jamais récupérable. 3pt"
  },
  {
   "q": "La loi de Poiseuille n'est valable que si l'écoulement est :",
   "choix": [
    "laminaire",
    "turbulent",
    "de n'importe quel régime"
   ],
   "bonne": 0,
   "expl": "Poiseuille suppose un régime laminaire. Calculer Re avant d'appliquer la formule : employée à tort sur un écoulement turbulent, elle sous-estime les pertes d'un facteur 3 ou davantage, et conduit à dimensionner une pompe très insuffisante. 3pt"
  },
  {
   "q": "Dans la loi de Poiseuille, le débit est proportionnel à :",
   "choix": [
    "D",
    "D²",
    "D⁴"
   ],
   "bonne": 2,
   "expl": "le débit varie comme D⁴, donc doubler le diamètre le multiplie par 16. C'est le levier le plus efficace d'un circuit : passer au calibre supérieur coûte peu et rapporte bien davantage qu'une pompe plus puissante. 3pt"
  },
  {
   "q": "Doubler le diamètre d'une conduite, à Δp et L fixés, multiplie le débit par :",
   "choix": [
    "2",
    "8",
    "16"
   ],
   "bonne": 2,
   "expl": "le débit varie comme D⁴, donc doubler le diamètre le multiplie par 16. C'est le levier le plus efficace d'un circuit : passer au calibre supérieur coûte peu et rapporte bien davantage qu'une pompe plus puissante. 3pt"
  },
  {
   "q": "En régime laminaire, le tracé de Δp en fonction de Q_v est :",
   "choix": [
    "une droite passant par l'origine",
    "une courbe s'incurvant vers le haut",
    "une horizontale"
   ],
   "bonne": 0,
   "expl": "en laminaire, Δp Q_v : le tracé est une droite par l'origine, et c'est un diagnostic visuel indépendant du calcul de Re. En turbulent, Δp Q_v^1,75, donc doubler le débit multiplie les pertes par 2^1,75 = 3,4. Les pertes croissent plus vite que le débit : c'est ce qui interdit d'augmenter un débit sans revoir la conduite. tcolorbox"
  },
  {
   "q": "En régime turbulent, doubler le débit multiplie les pertes de charge par environ :",
   "choix": [
    "2",
    "3,4",
    "16"
   ],
   "bonne": 1,
   "expl": "en laminaire, Δp Q_v : le tracé est une droite par l'origine, et c'est un diagnostic visuel indépendant du calcul de Re. En turbulent, Δp Q_v^1,75, donc doubler le débit multiplie les pertes par 2^1,75 = 3,4. Les pertes croissent plus vite que le débit : c'est ce qui interdit d'augmenter un débit sans revoir la conduite. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "À Δp et L fixés, le débit varie comme …….",
   "verso": "<strong>la puissance quatrième du diamètre</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Elle s'exprime en pratique en mm²/s, avec …….",
   "verso": "<strong>1 mm²/s = 1×10⁻⁶ m²/s</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Doubler le diamètre multiplie le débit par …….",
   "verso": "<strong>16</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "On appelle <strong>perte de charge</strong> …….",
   "verso": "<strong>la chute de pression subie par un fluide entre deux points d'un circuit</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>viscosité dynamique</strong> η mesure …….",
   "verso": "<strong>la résistance d'un fluide au glissement de ses couches les unes sur les autres</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En régime <strong>turbulent</strong>, …… ; le profil s'aplatit.",
   "verso": "<strong>l'écoulement devient chaotique, parcouru de tourbillons</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "L'énergie correspondante est …… et ne peut jamais être récupérée.",
   "verso": "<strong>dissipée en chaleur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Réduire le diamètre de 10 % fait chuter le débit de …… (0,90⁴ = 0,656).",
   "verso": "<strong>34 %</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Les pertes <strong>singulières</strong> se produisent …… : Δp = K·1/2ρv².",
   "verso": "<strong>en un point précis : coude, vanne, raccord, filtre, rétrécissement</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "La viscosité dynamique η s'exprime en ……",
   "verso": "<strong>Pa·s</strong> — η en Pa·s. La réponse a est celle de la viscosité cinématique ν= η/ρ : les deux se distinguent par la masse volumique. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La désignation « ISO VG 46 » signifie que la viscosité cinématique vaut 46 mm²/s ……",
   "verso": "<strong>à 40 °C</strong> — le nombre du grade ISO VG est la viscosité cinématique à 40 °C, température de référence normalisée. Une huile n'a pas « une » viscosité : elle en a une par température, et le facteur atteint 90 entre 0 °C et 100 °C. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Quand la température d'une huile augmente, sa viscosité ……",
   "verso": "<strong>diminue fortement</strong> — le nombre du grade ISO VG est la viscosité cinématique à 40 °C, température de référence normalisée. Une huile n'a pas « une » viscosité : elle en a une par température, et le facteur atteint 90 entre 0 °C et 100 °C. 3pt",
   "origine": "bilan"
  }
 ]
};
