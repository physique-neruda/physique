/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 19 — Réponse des systèmes linéaires et résonance
   Le bilan vient de CRSA_ch19_bilan.tex, les cartes des \trou{} de
   CRSA_ch19_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "19",
 "cle": "ch19",
 "etiquette": "Chapitre 19",
 "titre": "Réponse des systèmes linéaires et résonance",
 "niveau": "BTS CRSA",
 "prerequis": [],
 "bilan": [
  {
   "q": "La réponse indicielle d'un système est sa réponse :",
   "choix": [
    "à une sinusoïde",
    "en régime permanent seulement",
    "à une impulsion",
    "à un échelon"
   ],
   "bonne": 3,
   "expl": "L'échelon est l'entrée de référence de tout le chapitre."
  },
  {
   "q": "Un moteur passe de 0 à 3000 1/min sous un échelon de 0 à 24 V. Sa transmittance statique vaut :",
   "choix": [
    "125, sans unité",
    "125 1/min/V",
    "0,008 V/1/min",
    "3000 1/min"
   ],
   "bonne": 1,
   "expl": "3000/24 = 125, avec son unité ; la réponse « 125 1/min/V » oublie l'unité."
  },
  {
   "q": "Pour un premier ordre, la sortie atteint 63 % de sa variation à :",
   "choix": [
    "t = τ",
    "t = τ/2",
    "t = 3τ",
    "t = 5τ"
   ],
   "bonne": 0,
   "expl": "Définition de τ."
  },
  {
   "q": "Le temps de réponse à 5 % d'un premier ordre vaut :",
   "choix": [
    "τ",
    "2τ",
    "3τ",
    "5τ"
   ],
   "bonne": 2,
   "expl": "À 3τ, 95 % de la variation est faite."
  },
  {
   "q": "La réponse d'un premier ordre à un échelon :",
   "choix": [
    "ne dépasse jamais sa valeur finale",
    "oscille",
    "dépasse toujours sa valeur finale",
    "est instantanée"
   ],
   "bonne": 0,
   "expl": "Un premier ordre monte sans dépasser."
  },
  {
   "q": "Pour un second ordre, diminuer le coefficient d'amortissement m :",
   "choix": [
    "supprime le dépassement",
    "ne change rien",
    "augmente le dépassement",
    "rend le système du premier ordre"
   ],
   "bonne": 2,
   "expl": "Moins d'amortissement, plus d'oscillations."
  },
  {
   "q": "Le compromis rapidité-dépassement d'un second ordre est obtenu pour :",
   "choix": [
    "m ≈ 0,1",
    "m = 0",
    "m ≈ 2",
    "m ≈ 0,7"
   ],
   "bonne": 3,
   "expl": "Un léger dépassement, la réponse la plus rapide."
  },
  {
   "q": "Valeur initiale 0, maximum 130, valeur finale 100 : le dépassement vaut :",
   "choix": [
    "130 %",
    "30 %",
    "23 %",
    "70 %"
   ],
   "bonne": 1,
   "expl": "(130 - 100)/(100 - 0) = 0,30. La réponse « 30 % » divise par le maximum."
  },
  {
   "q": "La fréquence de coupure d'un premier ordre correspond à un gain diminué de :",
   "choix": [
    "20 dB",
    "3 dB",
    "50 %",
    "63 %"
   ],
   "bonne": 1,
   "expl": "Soit une tension multipliée par 0,71."
  },
  {
   "q": "Un système de constante de temps 1 ms a une fréquence de coupure d'environ :",
   "choix": [
    "1 kHz",
    "6,3 kHz",
    "16 Hz",
    "160 Hz"
   ],
   "bonne": 3,
   "expl": "1/(2π×10⁻³) = 159 Hz."
  },
  {
   "q": "La résonance d'un second ordre est d'autant plus marquée que :",
   "choix": [
    "son amortissement est faible",
    "son amortissement est fort",
    "sa constante de temps est grande",
    "il est du premier ordre"
   ],
   "bonne": 0,
   "expl": "Faible amortissement : pic haut et étroit."
  },
  {
   "q": "Pour protéger une machine d'une résonance dangereuse, on peut :",
   "choix": [
    "l'exciter exactement à sa fréquence propre",
    "supprimer les amortisseurs",
    "éloigner la fréquence d'excitation de sa fréquence propre",
    "rigidifier le capteur de vitesse"
   ],
   "bonne": 2,
   "expl": "On peut aussi amortir, ou traverser vite la zone critique. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "À t = τ, la sortie a parcouru …… de sa variation totale.",
   "rep": "63 %",
   "verso": "<strong>63 %</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Pour m ≥ 1, elle ne dépasse plus : elle est ……, mais lente.",
   "rep": "apériodique",
   "verso": "<strong>apériodique</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le meilleur compromis rapidité-dépassement est obtenu pour m ≈ …….",
   "rep": "0,7",
   "verso": "<strong>0,7</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Sa <strong>fréquence de coupure</strong> f_c est la fréquence où le gain a baissé de …… par rapport à sa valeur maximale.",
   "rep": "3 dB",
   "verso": "<strong>3 dB</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La fréquence de résonance f_r est la fréquence du …… ; pour un faible amortissement, elle est très proche de la <strong>fréquence propre</strong> f₀ du système.",
   "rep": "maximum du gain",
   "verso": "<strong>maximum du gain</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "La réponse indicielle d'un système est sa réponse ……",
   "rep": "à un échelon",
   "verso": "<strong>à un échelon</strong> — L'échelon est l'entrée de référence de tout le chapitre.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un moteur passe de 0 à 3000 1/min sous un échelon de 0 à 24 V. Sa transmittance statique vaut ……",
   "rep": "125 1/min/V",
   "verso": "<strong>125 1/min/V</strong> — 3000/24 = 125, avec son unité ; la réponse b oublie l'unité.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pour un premier ordre, la sortie atteint 63 % de sa variation à ……",
   "rep": "t = τ",
   "verso": "<strong>t = τ</strong> — Définition de τ.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le temps de réponse à 5 % d'un premier ordre vaut ……",
   "rep": "3τ",
   "verso": "<strong>3τ</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La réponse d'un premier ordre à un échelon ……",
   "rep": "ne dépasse jamais sa valeur finale",
   "verso": "<strong>ne dépasse jamais sa valeur finale</strong> — Un premier ordre monte sans dépasser.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pour un second ordre, diminuer le coefficient d'amortissement m ……",
   "rep": "augmente le dépassement",
   "verso": "<strong>augmente le dépassement</strong> — Moins d'amortissement, plus d'oscillations.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le compromis rapidité-dépassement d'un second ordre est obtenu pour ……",
   "rep": "m ≈ 0,7",
   "verso": "<strong>m ≈ 0,7</strong> — Un léger dépassement, la réponse la plus rapide.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Valeur initiale 0, maximum 130, valeur finale 100 : le dépassement vaut ……",
   "rep": "30 %",
   "verso": "<strong>30 %</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La fréquence de coupure d'un premier ordre correspond à un gain diminué de ……",
   "rep": "3 dB",
   "verso": "<strong>3 dB</strong> — Soit une tension multipliée par 0,71.",
   "origine": "bilan"
  }
 ],
 "cartes_figees": false
};
