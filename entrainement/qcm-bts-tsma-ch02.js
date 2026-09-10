/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 02 · Énergie, puissance, rendement
   Le bilan vient de ch02_bilan.tex, les cartes des \trou{} de
   ch02_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "2",
 "titre": "Énergie, puissance, rendement",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Convertir 45 min en secondes :",
   "choix": [
    "450 s",
    "2700 s",
    "4500 s",
    "0,75 s"
   ],
   "bonne": 1,
   "expl": "45 × 60 = 2700 s. Toute énergie en joules exige des secondes, jamais des minutes."
  },
  {
   "q": "Un débit de 45 L/min vaut, en m³/s :",
   "choix": [
    "7,5×10⁻⁴",
    "4,5×10⁻²",
    "7,5×10⁻²",
    "2,7"
   ],
   "bonne": 0,
   "expl": "1 L = 10⁻³ m³ et 1 min = 60 s : on divise par 60 000."
  },
  {
   "q": "Un arbre tourne à 540 tr/min. Sa vitesse angulaire ω = 2πN/60 vaut :",
   "choix": [
    "9,0 rad/s",
    "56,5 rad/s",
    "540 rad/s",
    "3393 rad/s"
   ],
   "bonne": 1,
   "expl": "2π × 540/60 = 56,5 rad/s. C'est le régime de la prise de force normalisée."
  },
  {
   "q": "Le produit 0,38 × 0,88 × 0,75 vaut :",
   "choix": [
    "0,251",
    "0,670",
    "2,01",
    "1,04"
   ],
   "bonne": 0,
   "expl": "Le résultat est plus petit que chacun des facteurs : multiplier des nombres inférieurs à 1 fait toujours décroître. C'est pourquoi une chaîne de conversions a un mauvais rendement global."
  },
  {
   "q": "Une grandeur passe de 0,251 à 0,277. La variation relative vaut :",
   "choix": [
    "2,6 %",
    "9,4 %",
    "10,4 %",
    "26 %"
   ],
   "bonne": 2,
   "expl": "(0,277 − 0,251)/0,251 = 0,104. Une variation relative se rapporte toujours à la valeur de départ."
  },
  {
   "q": "Dans η = P_u/P_a, la puissance absorbée s'écrit :",
   "choix": [
    "P_a = η × P_u",
    "P_a = P_u/η",
    "P_a = P_u − η",
    "P_a = η/P_u"
   ],
   "bonne": 1,
   "expl": "Diviser la puissance utile par le rendement donne bien un nombre plus grand : c'est le contrôle de bon sens."
  }
 ],
 "bilan": [
  {
   "q": "L'unité de l'énergie dans le Système international est :",
   "choix": [
    "le watt",
    "le joule",
    "le kilowattheure"
   ],
   "bonne": 1,
   "expl": "le joule est l'unité légale, le kilowattheure celle des factures : 1 kW·h = 1000 × 3600 = 3,6×10⁶ J. 3pt"
  },
  {
   "q": "1 kW·h vaut :",
   "choix": [
    "1000 J",
    "3600 J",
    "3,6 MJ"
   ],
   "bonne": 2,
   "expl": "le joule est l'unité légale, le kilowattheure celle des factures : 1 kW·h = 1000 × 3600 = 3,6×10⁶ J. 3pt"
  },
  {
   "q": "Un arbre tourne à 540 1/min. Sa vitesse angulaire vaut :",
   "choix": [
    "540 rad/s",
    "56,5 rad/s",
    "9 rad/s"
   ],
   "bonne": 1,
   "expl": "ω= 2πN/60 = 56,5 rad/s. Employer N directement dans P = Cω fausse le résultat d'un facteur 9,55 : c'est l'erreur la plus fréquente du chapitre. 3pt"
  },
  {
   "q": "La puissance transmise par un arbre en rotation s'écrit :",
   "choix": [
    "P = C × N",
    "P = C × ω",
    "P = C / ω"
   ],
   "bonne": 1,
   "expl": "ω= 2πN/60 = 56,5 rad/s. Employer N directement dans P = Cω fausse le résultat d'un facteur 9,55 : c'est l'erreur la plus fréquente du chapitre. 3pt"
  },
  {
   "q": "Une pompe débite 45 L/min sous 180 bar. Sa puissance hydraulique vaut environ :",
   "choix": [
    "8,1 kW",
    "13,5 kW",
    "135 kW"
   ],
   "bonne": 1,
   "expl": "Q_v = 45/60 000 = 7,5×10⁻⁴ m³/s et p = 1,8×10⁷ Pa, d'où P = 1,35×10⁴ W. La réponse a correspond à un oubli de conversion de la pression, la c à un oubli sur le débit. 3pt"
  },
  {
   "q": "Un rendement peut valoir :",
   "choix": [
    "1,25",
    "0,72",
    "72 W"
   ],
   "bonne": 1,
   "expl": "un rendement est sans unité et toujours inférieur à 1. Trouver 1,25, c'est avoir inversé entrée et sortie ; l'exprimer en watts, c'est confondre rendement et puissance. 3pt"
  },
  {
   "q": "Un moteur absorbe 60,0 W et restitue 43,6 W. La puissance perdue vaut :",
   "choix": [
    "16,4 W",
    "103,6 W",
    "0,73 W"
   ],
   "bonne": 0,
   "expl": "la puissance perdue est la différence P_a - P_u, et elle part en chaleur : effet Joule, pertes fer, frottements. L'énergie se conserve toujours ; c'est sa qualité qui se dégrade. 3pt"
  },
  {
   "q": "Cette puissance perdue se manifeste principalement sous forme :",
   "choix": [
    "de bruit",
    "de chaleur",
    "de lumière"
   ],
   "bonne": 1,
   "expl": "la puissance perdue est la différence P_a - P_u, et elle part en chaleur : effet Joule, pertes fer, frottements. L'énergie se conserve toujours ; c'est sa qualité qui se dégrade. 3pt"
  },
  {
   "q": "Trois étages de rendements 0,38, 0,88 et 0,75 donnent un rendement global de :",
   "choix": [
    "0,67",
    "0,25",
    "2,01"
   ],
   "bonne": 1,
   "expl": "les rendements en série se multiplient, ils ne s'additionnent ni ne se moyennent. Et le bon étage à améliorer se détermine par le calcul : faire passer les pneus de 0,75 à 0,85 rapporte plus que faire passer le moteur de 0,38 à 0,42 — pour un coût sans commune mesure. 3pt"
  },
  {
   "q": "Pour améliorer une chaîne de rendements, il faut en priorité :",
   "choix": [
    "agir au hasard, tous les étages se valent",
    "comparer par le calcul les gains possibles sur chaque étage",
    "toujours changer le moteur"
   ],
   "bonne": 1,
   "expl": "les rendements en série se multiplient, ils ne s'additionnent ni ne se moyennent. Et le bon étage à améliorer se détermine par le calcul : faire passer les pneus de 0,75 à 0,85 rapporte plus que faire passer le moteur de 0,38 à 0,42 — pour un coût sans commune mesure. 3pt"
  },
  {
   "q": "La consommation spécifique d'un moteur s'exprime en :",
   "choix": [
    "L/h",
    "g/kW·h",
    "kW"
   ],
   "bonne": 1,
   "expl": "la consommation spécifique rapporte la masse de carburant à l'énergie mécanique produite. Contrairement à la consommation horaire, elle ne dépend pas de la charge : c'est le seul indicateur qui permette de comparer deux moteurs. 3pt"
  },
  {
   "q": "Le rendement d'un motoréducteur mesuré au banc est :",
   "choix": [
    "constant quelle que soit la charge",
    "maximal à faible charge",
    "faible à vide, maximal près de la charge nominale"
   ],
   "bonne": 2,
   "expl": "à vide, les pertes fixes (frottements, pertes fer) représentent une fraction énorme de la puissance absorbée. Conséquence pratique : surdimensionner un entraînement dégrade son rendement. On dimensionne au plus près du besoin. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "Hydraulique : ……, avec p en Pa et Q_v en m³/s.",
   "verso": "<strong>P = p × Q_v</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>puissance</strong> est le quotient de …….",
   "verso": "<strong>l'énergie échangée par la durée de l'échange</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "1 kW·h = 1000 × 3600 = 3,6×10⁶ J = 3,6 MJ 1 = 736 W et ……",
   "verso": "<strong>1 L de gazole ≈ 36 MJ</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Électricité (courant continu) : ……, avec U en V et I en A.",
   "verso": "<strong>P = U × I</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "P = C × ω avec …… C en N·m, ω en rad/s, N en tours par minute.",
   "verso": "<strong>ω= (2πN)/60</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "…… avec ω= (2πN)/60 C en N·m, ω en rad/s, N en tours par minute.",
   "verso": "<strong>P = C × ω</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "1 kW·h = 1000 × 3600 = 3,6×10⁶ J = 3,6 MJ …… et 1 L de gazole ≈ 36 MJ",
   "verso": "<strong>1 = 736 W</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Quand plusieurs convertisseurs se suivent, les rendements …… : η_global = η₁ × η₂ × η₃ × …",
   "verso": "<strong>se multiplient</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le <strong>rendement</strong> d'un convertisseur est le quotient de …… par la puissance absorbée.",
   "verso": "<strong>la puissance utile</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "L'unité de l'énergie dans le Système international est ……",
   "verso": "<strong>le joule</strong> — le joule est l'unité légale, le kilowattheure celle des factures : 1 kW·h = 1000 × 3600 = 3,6×10⁶ J. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "1 kW·h vaut ……",
   "verso": "<strong>3,6 MJ</strong> — le joule est l'unité légale, le kilowattheure celle des factures : 1 kW·h = 1000 × 3600 = 3,6×10⁶ J. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un arbre tourne à 540 1/min. Sa vitesse angulaire vaut ……",
   "verso": "<strong>56,5 rad/s</strong> — ω= 2πN/60 = 56,5 rad/s. Employer N directement dans P = Cω fausse le résultat d'un facteur 9,55 : c'est l'erreur la plus fréquente du chapitre. 3pt",
   "origine": "bilan"
  }
 ]
};
