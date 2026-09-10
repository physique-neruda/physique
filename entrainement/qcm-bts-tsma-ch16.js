/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 16 · Capteurs, conditionnement et conversion
   Le bilan vient de ch16_bilan.tex, les cartes des \trou{} de
   ch16_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "16",
 "titre": "Capteurs, conditionnement et conversion",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Combien vaut 2¹² ?",
   "choix": [
    "1024",
    "2048",
    "4096",
    "16384"
   ],
   "bonne": 2,
   "expl": "Chaque bit supplémentaire double le nombre de niveaux d'un convertisseur."
  },
  {
   "q": "Le quantum d'un convertisseur 10 bits sur 5,00 V vaut :",
   "choix": [
    "4,88 mV",
    "1,22 mV",
    "48,8 mV",
    "5,00 mV"
   ],
   "bonne": 0,
   "expl": "5,00/1024 = 4,88 mV. En 12 bits il tomberait à 1,22 mV."
  },
  {
   "q": "R = 142 Ω et R₁ = 51 Ω en série sous 5,00 V : la tension aux bornes de R₁ vaut :",
   "choix": [
    "1,32 V",
    "3,68 V",
    "1,80 V",
    "2,50 V"
   ],
   "bonne": 0,
   "expl": "5,00 × 51/193. Le diviseur donne à chaque résistance sa part de la tension."
  },
  {
   "q": "Une tension passe de 1,321 V à 2,604 V quand θ passe de 60 à 100 °C. La pente vaut :",
   "choix": [
    "12,8 mV/K",
    "32,1 mV/K",
    "65,1 mV/K",
    "0,0321 K/V"
   ],
   "bonne": 1,
   "expl": "(2,604 − 1,321)/40 = 0,0321 V/K : c'est la sensibilité du capteur."
  },
  {
   "q": "Une résistance de 79 Ω à 5 % près est comprise entre :",
   "choix": [
    "74 et 84 Ω",
    "75 et 83 Ω",
    "78 et 80 Ω",
    "76 et 82 Ω"
   ],
   "bonne": 1,
   "expl": "5 % de 79 font 3,95 Ω."
  },
  {
   "q": "Une grandeur varie de 2,8 % par degré. Une variation de 5,0 % correspond à :",
   "choix": [
    "0,56 °C",
    "1,8 °C",
    "2,2 °C",
    "14 °C"
   ],
   "bonne": 1,
   "expl": "5,0/2,8 = 1,8 °C. Ce calcul convertit une tolérance en incertitude de température."
  }
 ],
 "bilan": [
  {
   "q": "Dans une chaîne de mesure, l'ordre des maillons est :",
   "choix": [
    "capteur, conditionneur, convertisseur, calculateur",
    "conditionneur, capteur, calculateur, convertisseur",
    "convertisseur, capteur, conditionneur, calculateur"
   ],
   "bonne": 0,
   "expl": "la grandeur physique traverse les quatre maillons dans cet ordre, et aucun n'améliore ce que le précédent lui donne : chacun ne fait que traduire. Retenir cette phrase règle la moitié des questions du chapitre. 3pt"
  },
  {
   "q": "Un capteur qui se contente de faire varier sa résistance est :",
   "choix": [
    "actif",
    "passif",
    "défectueux"
   ],
   "bonne": 1,
   "expl": "un capteur passif ne délivre rien par lui-même, il faut l'alimenter et le monter. Le thermocouple, lui, produit une tension à partir de la seule différence de température : c'est le type même du capteur actif. La jauge de contrainte et la CTN sont passives. 3pt"
  },
  {
   "q": "Parmi ces capteurs, le seul actif est :",
   "choix": [
    "la CTN",
    "la jauge de contrainte",
    "le thermocouple"
   ],
   "bonne": 2,
   "expl": "un capteur passif ne délivre rien par lui-même, il faut l'alimenter et le monter. Le thermocouple, lui, produit une tension à partir de la seule différence de température : c'est le type même du capteur actif. La jauge de contrainte et la CTN sont passives. 3pt"
  },
  {
   "q": "La sensibilité d'un capteur de pression délivrant 0,50 V à 0 bar et 4,50 V à 250 bar vaut :",
   "choix": [
    "16 mV/bar",
    "18 mV/bar",
    "0,50 V/bar"
   ],
   "bonne": 0,
   "expl": "(4,50 - 0,50)/250 = 0,016 V/bar. La réponse b vient d'un oubli du décalage de 0,50 V (on aurait divisé 4,50 par 250). Ce décalage est volontaire : il permet de distinguer une pression nulle d'un capteur débranché. 3pt"
  },
  {
   "q": "Une CTN a un coefficient de température négatif : quand la température augmente, sa résistance :",
   "choix": [
    "augmente",
    "diminue",
    "ne change pas"
   ],
   "bonne": 1,
   "expl": "CTN veut dire coefficient de température négatif. Et le diviseur ne fabrique aucune information : il traduit la variation de résistance en variation de tension, sur une plage choisie. La réponse a est le contresens central du chapitre — un conditionneur rend un capteur commode, jamais plus juste. 3pt"
  },
  {
   "q": "Le rôle d'un montage diviseur placé après une CTN est de :",
   "choix": [
    "rendre le capteur plus juste",
    "transformer la variation de résistance en variation de tension",
    "augmenter la sensibilité du capteur lui-même"
   ],
   "bonne": 1,
   "expl": "CTN veut dire coefficient de température négatif. Et le diviseur ne fabrique aucune information : il traduit la variation de résistance en variation de tension, sur une plage choisie. La réponse a est le contresens central du chapitre — un conditionneur rend un capteur commode, jamais plus juste. 3pt"
  },
  {
   "q": "Le quantum d'un convertisseur 10 bits de pleine échelle 5,00 V vaut :",
   "choix": [
    "0,50 mV",
    "4,9 mV",
    "10 mV"
   ],
   "bonne": 1,
   "expl": "q = 5,00/1024 = 4,9 mV, pour 2¹⁰ = 1024 valeurs numérotées de 0 à 1023. Deux bits de plus multiplient le nombre de valeurs par quatre, donc divisent le quantum par quatre. 3pt"
  },
  {
   "q": "Un convertisseur 10 bits peut coder :",
   "choix": [
    "10 valeurs",
    "100 valeurs",
    "1024 valeurs"
   ],
   "bonne": 2,
   "expl": "q = 5,00/1024 = 4,9 mV, pour 2¹⁰ = 1024 valeurs numérotées de 0 à 1023. Deux bits de plus multiplient le nombre de valeurs par quatre, donc divisent le quantum par quatre. 3pt"
  },
  {
   "q": "Passer de 10 à 12 bits divise le quantum par :",
   "choix": [
    "2",
    "4",
    "12"
   ],
   "bonne": 1,
   "expl": "q = 5,00/1024 = 4,9 mV, pour 2¹⁰ = 1024 valeurs numérotées de 0 à 1023. Deux bits de plus multiplient le nombre de valeurs par quatre, donc divisent le quantum par quatre. 3pt"
  },
  {
   "q": "Une chaîne a une résolution de 0,15 °C et un capteur de tolérance ±1,8 °C. Afficher 80,3 °C :",
   "choix": [
    "est justifié, puisque la résolution le permet",
    "donne une illusion de précision",
    "est impossible à calculer"
   ],
   "bonne": 1,
   "expl": "et c'est le cœur du chapitre. Le convertisseur distingue 0,15 °C, mais le capteur ignore 1,8 °C : la vraie température est quelque part dans un intervalle douze fois plus large que le dixième affiché. La résolution n'est pas la précision. Pour améliorer la chaîne, on améliore son maillon le plus faible — ici le capteur : tolérance plus serrée, ou étalonnage individuel de l'exemplaire monté. 3pt"
  },
  {
   "q": "Pour améliorer réellement la précision de cette chaîne, il faut agir sur :",
   "choix": [
    "le convertisseur",
    "le capteur",
    "le logiciel d'affichage"
   ],
   "bonne": 1,
   "expl": "et c'est le cœur du chapitre. Le convertisseur distingue 0,15 °C, mais le capteur ignore 1,8 °C : la vraie température est quelque part dans un intervalle douze fois plus large que le dixième affiché. La résolution n'est pas la précision. Pour améliorer la chaîne, on améliore son maillon le plus faible — ici le capteur : tolérance plus serrée, ou étalonnage individuel de l'exemplaire monté. 3pt"
  },
  {
   "q": "Un signal à 120 Hz est échantillonné à 100 Hz. On observera :",
   "choix": [
    "le signal, un peu dégradé",
    "une oscillation à 20 Hz qui n'existe pas",
    "rien du tout"
   ],
   "bonne": 1,
   "expl": "c'est le repliement : 120 - 100 = 20 Hz. On n'obtient pas un signal dégradé, on obtient un autre signal, plus lent, qui n'a jamais existé. Le plus dangereux est que rien dans les données ne le signale : un technicien pourrait chercher longtemps une cause mécanique à cette oscillation. Remède, dans cet ordre : filtrer avant de convertir, puis échantillonner plus vite. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "L'<strong>étendue de mesure</strong> est …….",
   "verso": "<strong>la plage dans laquelle le capteur est utilisable</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le <strong>conditionneur</strong> en fait …….",
   "verso": "<strong>une tension exploitable</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un capteur est <strong>actif</strong> s'il …….",
   "verso": "<strong>délivre lui-même une tension ou un courant</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le <strong>convertisseur</strong> la traduit en …….",
   "verso": "<strong>un nombre</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>sensibilité</strong> est ……, avec son unité.",
   "verso": "<strong>la pente de la caractéristique</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le <strong>capteur</strong> traduit la grandeur physique en …….",
   "verso": "<strong>une grandeur électrique</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>précision</strong> est …… ; elle est fixée par le capteur.",
   "verso": "<strong>l'écart possible avec la vraie valeur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>linéarité</strong> est ……, exprimé en pourcentage de l'étendue.",
   "verso": "<strong>l'écart maximal à la droite</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>résolution</strong> est …… ; elle est fixée par le convertisseur.",
   "verso": "<strong>le plus petit écart que la chaîne peut distinguer</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Dans une chaîne de mesure, l'ordre des maillons est ……",
   "verso": "<strong>capteur, conditionneur, convertisseur, calculateur</strong> — la grandeur physique traverse les quatre maillons dans cet ordre, et aucun n'améliore ce que le précédent lui donne : chacun ne fait que traduire. Retenir cette phrase règle la moitié des questions du chapitre. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un capteur qui se contente de faire varier sa résistance est ……",
   "verso": "<strong>passif</strong> — un capteur passif ne délivre rien par lui-même, il faut l'alimenter et le monter. Le thermocouple, lui, produit une tension à partir de la seule différence de température : c'est le type même du capteur actif. La jauge de contrainte et la CTN sont passives. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Parmi ces capteurs, le seul actif est ……",
   "verso": "<strong>le thermocouple</strong> — un capteur passif ne délivre rien par lui-même, il faut l'alimenter et le monter. Le thermocouple, lui, produit une tension à partir de la seule différence de température : c'est le type même du capteur actif. La jauge de contrainte et la CTN sont passives. 3pt",
   "origine": "bilan"
  }
 ]
};
