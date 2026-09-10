/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 0 — Outils de base
   Le bilan vient de CRSA_ch00_bilan.tex, les cartes des \trou{} de
   CRSA_ch00_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "0",
 "titre": "Outils de base",
 "niveau": "BTS CRSA",
 "prerequis": [],
 "bilan": [
  {
   "q": "L'unité SI de la masse est :",
   "choix": [
    "le gramme",
    "le kilogramme",
    "la tonne"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "2,5 kW valent :",
   "choix": [
    "250 W",
    "2500 W",
    "25000 W"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Le nombre 0,00450 comporte :",
   "choix": [
    "2 chiffres significatifs",
    "3 chiffres significatifs",
    "5 chiffres significatifs"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "On calcule 12,3 / 4,0. Le résultat s'écrit :",
   "choix": [
    "3,075",
    "3,1",
    "3"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "2,5 m² valent :",
   "choix": [
    "250 cm²",
    "25000 cm²",
    "2500000 cm²"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "72 km/h valent :",
   "choix": [
    "20 m/s",
    "26 m/s",
    "259 m/s"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Une droite passe par les points (2,0 ; 5,4) et (8,0 ; 15,0). Sa pente vaut :",
   "choix": [
    "1,6",
    "2,7",
    "9,6"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Pour cette même droite, la règle de trois est :",
   "choix": [
    "valable, c'est une droite",
    "invalide : elle ne passe pas par l'origine",
    "valable si x est petit"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "cosφ= 0,80. Alors tanφ vaut :",
   "choix": [
    "0,60",
    "0,75",
    "1,25"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Le nombre 1200, écrit tel quel, comporte :",
   "choix": [
    "deux chiffres significatifs",
    "quatre chiffres significatifs",
    "c'est ambigu : l'écriture ne permet pas de trancher"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Un moteur de 100 kW consommerait 0,5 L de gazole par heure. Ce résultat est :",
   "choix": [
    "plausible",
    "aberrant, d'un facteur voisin de 50",
    "impossible à juger"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Le contrôle d'ordre de grandeur sert à :",
   "choix": [
    "remplacer le calcul",
    "attraper les erreurs que le calcul ne signale pas",
    "gagner du temps"
   ],
   "bonne": 0,
   "expl": ""
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « L'unité est un découpage » ?",
   "verso": "Choisir une unité, c'est décider en <strong>combien de morceaux</strong> on découpe la grandeur. Mesurer, c'est alors <strong>compter ces morceaux</strong>. Un même arbre mesure 3dm ou 30cm : l'arbre n'a pas changé, seule la finesse du découpage a changé.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Grandeurs proportionnelles » ?",
   "verso": "Deux grandeurs sont <strong>proportionnelles</strong> si l'on passe de l'une à l'autre en multipliant <em>toujours</em> par le même nombre. Ce nombre est le <strong>coefficient de proportionnalité</strong> ; c'est le <strong>quotient</strong> des deux grandeurs, et il doit rester <strong>constant</strong>.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Le principe de l'égalité » ?",
   "verso": "Une égalité reste vraie si l'on effectue <strong>la même opération sur ses deux membres</strong> : additionner, soustraire, multiplier ou diviser par un même nombre non nul. C'est le seul outil nécessaire — tout le reste n'en est qu'un raccourci.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "L'aide-mémoire des unités dérivées — qu'y a-t-il à retenir ?",
   "verso": "Le tableau vert ci-dessus est une <strong>ressource</strong>, pas une leçon : on ne le retient pas, on le consulte. Il sert à une seule chose — vérifier qu'un résultat sort dans la bonne unité. Et le résultat sort automatiquement dans la bonne unité à une seule condition : [1] avoir converti toutes les données en unités SI <em>avant</em> de calculer.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "C'est la même question que pour les conversions — qu'y a-t-il à retenir ?",
   "verso": "Agrandir exposant positif, rapetisser exposant négatif. On ne retient donc <strong>aucune règle sur le sens de déplacement de la virgule</strong> : on se demande seulement si le nombre doit grandir ou rétrécir, exactement comme pour un changement d'unité.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "La règle du plus faible — qu'y a-t-il à retenir ?",
   "verso": "[1]Le résultat d'un <strong>produit</strong> ou d'un <strong>quotient</strong> garde autant de chiffres significatifs que la <strong>donnée la moins précise</strong>. Pour une <strong>somme</strong> ou une <strong>différence</strong>, c'est le nombre de décimales qui commande, et non le nombre de chiffres significatifs.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "C'est faux : il faut <strong>aussi</strong> que …….",
   "verso": "<strong>la droite passe par l'origine</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "<strong>Le contrôle d'ordre de grandeur ne remplace pas le calcul</strong> : il attrape …….",
   "verso": "<strong>les erreurs que le calcul ne signale pas</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Deux grandeurs sont <strong>proportionnelles</strong> si l'on passe de l'une à l'autre en multipliant …….",
   "verso": "<strong>toujours par le même nombre</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La partie décimale est une <strong>fraction d'heure</strong> : 0,5 h = 0,5 × 60 = 30min, donc 1,5 h vaut …….",
   "verso": "<strong>1 h 30 min</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Une égalité reste vraie si l'on effectue …… : additionner, soustraire, multiplier ou diviser par un même nombre non nul.",
   "verso": "<strong>la même opération sur ses deux membres</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "L'unité SI de la masse est ……",
   "verso": "<strong>le gramme</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "2,5 kW valent ……",
   "verso": "<strong>250 W</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le nombre 0,00450 comporte ……",
   "verso": "<strong>2 chiffres significatifs</strong>",
   "origine": "bilan"
  }
 ]
};
