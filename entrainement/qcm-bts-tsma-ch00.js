/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 00 · Outils de base
   Le bilan vient de ch00_bilan.tex, les cartes des \trou{} de
   ch00_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "0",
 "titre": "Outils de base",
 "niveau": "BTS TSMA",
 "prerequis": [],
 "bilan": [
  {
   "q": "L'unité SI de la masse est :",
   "choix": [
    "le gramme",
    "le kilogramme",
    "la tonne"
   ],
   "bonne": 1,
   "expl": "le kilogramme est l'unité de base, et c'est la seule dont le nom porte déjà un préfixe : il n'existe pas de « kilokilogramme ». Et « kilo » vaut toujours 1000, jamais 100. 3pt"
  },
  {
   "q": "2,5 kW valent :",
   "choix": [
    "250 W",
    "2500 W",
    "25000 W"
   ],
   "bonne": 1,
   "expl": "le kilogramme est l'unité de base, et c'est la seule dont le nom porte déjà un préfixe : il n'existe pas de « kilokilogramme ». Et « kilo » vaut toujours 1000, jamais 100. 3pt"
  },
  {
   "q": "Le nombre 0,00450 comporte :",
   "choix": [
    "2 chiffres significatifs",
    "3 chiffres significatifs",
    "5 chiffres significatifs"
   ],
   "bonne": 1,
   "expl": "dans 0,00450, les zéros de gauche ne comptent pas, celui de droite si : trois chiffres significatifs. Et le quotient garde le nombre de chiffres de la donnée la moins précise, ici deux. Recopier les huit décimales de la calculatrice est sanctionné au titre de Communiquer. 3pt"
  },
  {
   "q": "On calcule 12,3 / 4,0. Le résultat s'écrit :",
   "choix": [
    "3,075",
    "3,1",
    "3"
   ],
   "bonne": 1,
   "expl": "dans 0,00450, les zéros de gauche ne comptent pas, celui de droite si : trois chiffres significatifs. Et le quotient garde le nombre de chiffres de la donnée la moins précise, ici deux. Recopier les huit décimales de la calculatrice est sanctionné au titre de Communiquer. 3pt"
  },
  {
   "q": "2,5 m² valent :",
   "choix": [
    "250 cm²",
    "25000 cm²",
    "2500000 cm²"
   ],
   "bonne": 1,
   "expl": "pour une surface, le facteur est 100² = 10000, et non 100. C'est l'erreur de conversion la plus fréquente de toute la collection. 3pt"
  },
  {
   "q": "72 km/h valent :",
   "choix": [
    "20 m/s",
    "26 m/s",
    "259 m/s"
   ],
   "bonne": 0,
   "expl": "on divise par 3,6. Contrôle : 72 km/h, c'est un peu plus de 1 km par minute, donc une vingtaine de mètres par seconde. 3pt"
  },
  {
   "q": "Une droite passe par les points (2,0 ; 5,4) et (8,0 ; 15,0). Sa pente vaut :",
   "choix": [
    "1,6",
    "2,7",
    "9,6"
   ],
   "bonne": 0,
   "expl": "a = (15,0-5,4)/(8,0-2,0) = 1,6 ; la réponse c oublie de diviser par l'écart des abscisses. Et comme l'ordonnée à l'origine vaut 2,2, la droite ne passe pas par l'origine : la règle de trois donnerait un résultat faux, et plausible — c'est ce qui la rend dangereuse. 3pt"
  },
  {
   "q": "Pour cette même droite, la règle de trois est :",
   "choix": [
    "valable, c'est une droite",
    "invalide : elle ne passe pas par l'origine",
    "valable si x est petit"
   ],
   "bonne": 1,
   "expl": "a = (15,0-5,4)/(8,0-2,0) = 1,6 ; la réponse c oublie de diviser par l'écart des abscisses. Et comme l'ordonnée à l'origine vaut 2,2, la droite ne passe pas par l'origine : la règle de trois donnerait un résultat faux, et plausible — c'est ce qui la rend dangereuse. 3pt"
  },
  {
   "q": "cosφ= 0,80. Alors tanφ vaut :",
   "choix": [
    "0,60",
    "0,75",
    "1,25"
   ],
   "bonne": 1,
   "expl": "φ= (0,80) = 36,9 °, donc tanφ= 0,75. La réponse a est le sinus, la c l'inverse du cosinus. 3pt"
  },
  {
   "q": "Le nombre 1200, écrit tel quel, comporte :",
   "choix": [
    "deux chiffres significatifs",
    "quatre chiffres significatifs",
    "c'est ambigu : l'écriture ne permet pas de trancher"
   ],
   "bonne": 2,
   "expl": "rien ne dit si les deux zéros sont mesurés ou s'ils placent seulement la virgule. C'est précisément pour lever ce doute qu'on écrit 1,2×10³, 1,20×10³ ou 1,200×10³ selon la précision réelle : l'écriture scientifique est la seule qui dise à la fois la valeur et la précision. 3pt"
  },
  {
   "q": "Un moteur de 100 kW consommerait 0,5 L de gazole par heure. Ce résultat est :",
   "choix": [
    "plausible",
    "aberrant, d'un facteur voisin de 50",
    "impossible à juger"
   ],
   "bonne": 1,
   "expl": "un moteur de 100 kW consomme plutôt 25 L/h : le résultat proposé est cinquante fois trop faible. Le contrôle d'ordre de grandeur ne remplace jamais le calcul — il attrape les erreurs que le calcul, lui, ne signale pas, parce qu'une calculatrice ne se trompe jamais sur une donnée fausse. tcolorbox"
  },
  {
   "q": "Le contrôle d'ordre de grandeur sert à :",
   "choix": [
    "remplacer le calcul",
    "attraper les erreurs que le calcul ne signale pas",
    "gagner du temps"
   ],
   "bonne": 1,
   "expl": "un moteur de 100 kW consomme plutôt 25 L/h : le résultat proposé est cinquante fois trop faible. Le contrôle d'ordre de grandeur ne remplace jamais le calcul — il attrape les erreurs que le calcul, lui, ne signale pas, parce qu'une calculatrice ne se trompe jamais sur une donnée fausse. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "Avant d'écrire un résultat, se demander …….",
   "verso": "<strong>s'il est plausible</strong>",
   "origine": "cours a completer"
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
   "recto": "Le tableau vert ci-dessus est une <strong>ressource</strong>, pas une leçon : on ne le retient pas, on le …….",
   "verso": "<strong>consulte</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Une égalité reste vraie si l'on effectue …… : additionner, soustraire, multiplier ou diviser par un même nombre non nul.",
   "verso": "<strong>la même opération sur ses deux membres</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Pour une <strong>somme</strong> ou une <strong>différence</strong>, c'est …… qui commande, et non le nombre de chiffres significatifs.",
   "verso": "<strong>le nombre de décimales</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Ce nombre est le <strong>coefficient de proportionnalité</strong> ; c'est le …… des deux grandeurs, et il doit rester <strong>constant</strong>.",
   "verso": "<strong>quotient</strong>",
   "origine": "cours a completer"
  }
 ]
};
