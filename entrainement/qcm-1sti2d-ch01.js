/* Genere par outils/construire.py — ne pas editer a la main.
   1sti2d · chapitre 01 · Mesure et incertitudes
   Les QCM viennent de ch01_prerequis.tex et ch01_bilan.tex,
   les cartes de cartes/cartes-1sti2d-ch01.json. */
window.CHAPITRE = {
 "filiere": "1sti2d",
 "num": "1",
 "titre": "Mesure et incertitudes",
 "niveau": "1re STI2D",
 "prerequis": [
  {
   "q": "La moyenne des trois valeurs 12,4, 12,6 et 12,5 vaut :",
   "choix": [
    "12,4",
    "12,5",
    "12,6",
    "37,5"
   ],
   "bonne": 1,
   "expl": "(12,4+12,6+12,5)/3 = 12,5"
  },
  {
   "q": "Convertir 45,6 mm en centimètres :",
   "choix": [
    "456 cm",
    "4,56 cm",
    "0,456 cm",
    "45,6 cm"
   ],
   "bonne": 1,
   "expl": "on divise par 10"
  },
  {
   "q": "Le nombre 2,5 × 10⁻³ s'écrit aussi :",
   "choix": [
    "0,25",
    "0,025",
    "0,0025",
    "2500"
   ],
   "bonne": 2,
   "expl": "l'exposant -3 décale la virgule de trois rangs"
  },
  {
   "q": "Arrondir 3,472 à deux chiffres après la virgule donne :",
   "choix": [
    "3,4",
    "3,47",
    "3,48",
    "3,5"
   ],
   "bonne": 1,
   "expl": "le chiffre suivant est un 2, on arrondit vers le bas"
  },
  {
   "q": "La racine carrée de 16 vaut :",
   "choix": [
    "2",
    "4",
    "8",
    "256"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Une valeur passe de 200 à 206. L'écart relatif vaut :",
   "choix": [
    "6 %",
    "3 %",
    "0,03 %",
    "60 %"
   ],
   "bonne": 1,
   "expl": "6/200 = 0,03, soit 3 %"
  },
  {
   "q": "Sur une règle graduée en millimètres, la plus petite division lisible est :",
   "choix": [
    "1 cm",
    "1 mm",
    "0,1 mm",
    "1 µm"
   ],
   "bonne": 1,
   "expl": "c'est la <em>résolution</em> de l'instrument"
  }
 ],
 "bilan": [
  {
   "q": "Un résultat de mesure complet comporte :",
   "choix": [
    "une valeur seule",
    "une valeur et une unité",
    "une valeur, une incertitude et une unité",
    "une valeur et une incertitude"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Un instrument mal réglé au zéro provoque une erreur :",
   "choix": [
    "aléatoire",
    "systématique",
    "négligeable",
    "impossible à déceler"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Répéter les mesures et faire la moyenne permet de réduire :",
   "choix": [
    "les erreurs systématiques",
    "les erreurs aléatoires",
    "les deux à la fois",
    "aucune des deux"
   ],
   "bonne": 1,
   "expl": "la moyenne compense les écarts aléatoires, jamais un décalage systématique"
  },
  {
   "q": "Des mesures très groupées mais toutes décalées de la valeur vraie sont :",
   "choix": [
    "justes et fidèles",
    "fidèles mais pas justes",
    "justes mais pas fidèles",
    "ni justes ni fidèles"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Le nombre 0,0250 comporte :",
   "choix": [
    "2 chiffres significatifs",
    "3 chiffres significatifs",
    "4 chiffres significatifs",
    "5 chiffres significatifs"
   ],
   "bonne": 1,
   "expl": "les zéros de tête ne comptent pas, celui de fin oui"
  },
  {
   "q": "Le produit 12,4 × 3,0 doit s'écrire :",
   "choix": [
    "37,2",
    "37",
    "37,20",
    "40"
   ],
   "bonne": 1,
   "expl": "le facteur 3,0 n'a que 2 chiffres significatifs"
  },
  {
   "q": "Dans une série de mesures, l'écart-type s mesure :",
   "choix": [
    "la valeur moyenne",
    "la dispersion des valeurs",
    "le nombre de mesures",
    "l'erreur systématique"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "L'incertitude-type sur la moyenne se calcule par :",
   "choix": [
    "u = s",
    "u = s√n",
    "u = s/√n",
    "u = s/n"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "On effectue <strong>une seule</strong> mesure avec un instrument dont la notice indique ± 0,02 mm. L'incertitude-type vaut :",
   "choix": [
    "0,02 mm",
    "0,012 mm",
    "0,035 mm",
    "on ne peut pas la calculer"
   ],
   "bonne": 1,
   "expl": "mesure unique, donc type B : 0,02/√3 = 0,012 mm"
  },
  {
   "q": "Pour diviser l'incertitude-type par 2, il faut multiplier le nombre de mesures par :",
   "choix": [
    "2",
    "4",
    "8",
    "16"
   ],
   "bonne": 1,
   "expl": "u varie en 1/√n"
  },
  {
   "q": "L'incertitude doit être arrondie à :",
   "choix": [
    "un chiffre significatif",
    "deux chiffres significatifs",
    "trois décimales",
    "autant de chiffres que la calculatrice en affiche"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Deux résultats sont déclarés compatibles lorsque l'écart normalisé E<sub>n</sub> vérifie :",
   "choix": [
    "E<sub>n</sub> > 2",
    "E<sub>n</sub> < 2",
    "E<sub>n</sub> = 0 exactement",
    "E<sub>n</sub> > 1"
   ],
   "bonne": 1,
   "expl": ""
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "Un …… comporte trois éléments indissociables : une <strong>valeur</strong>, une <strong>incertitude</strong> et une <strong>unité</strong>.",
   "verso": "<strong>résultat de mesure</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>justesse</strong> caractérise l'écart entre la moyenne des mesures et la valeur vraie : elle traduit une …… (un appareil mal réglé, un zéro décalé).",
   "verso": "<strong>erreur systématique</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>fidélité</strong> caractérise le regroupement des mesures entre elles : elle traduit les …… (lecture, vibrations, opérateur).",
   "verso": "<strong>erreurs aléatoires</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "C'est la signature des ……, qui jouent autant dans un sens que dans l'autre — et c'est précisément pour cela que la moyenne les compense.",
   "verso": "<strong>erreurs aléatoires</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Deux voies mènent à l'incertitude-type, et l'énoncé indique toujours laquelle suivre : …… → on exploite leur dispersion, u = s/√n (type A) ; <strong>une seule mesure</strong> → on exploite l'instrument, u = a/√3 (type B).",
   "verso": "<strong>plusieurs mesures</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "On l'écrit sous la forme\n……",
   "verso": "d = (25,020 ± 0,008) mm .",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>moyenne</strong> m des n mesures est le meilleur estimateur de la grandeur cherchée :\n……",
   "verso": "m = (x₁ + x₂ + … + x<sub>n</sub>)/n.",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un résultat de mesure complet comporte ……",
   "verso": "<strong>une valeur, une incertitude et une unité</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un instrument mal réglé au zéro provoque une erreur ……",
   "verso": "<strong>systématique</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Répéter les mesures et faire la moyenne permet de réduire ……",
   "verso": "<strong>les erreurs aléatoires</strong> — la moyenne compense les écarts aléatoires, jamais un décalage systématique",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Des mesures très groupées mais toutes décalées de la valeur vraie sont ……",
   "verso": "<strong>fidèles mais pas justes</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le nombre 0,0250 comporte ……",
   "verso": "<strong>3 chiffres significatifs</strong> — les zéros de tête ne comptent pas, celui de fin oui",
   "origine": "bilan"
  }
 ]
};
