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
    "conditionneur, capteur, calculateur, convertisseur",
    "capteur, conditionneur, convertisseur, calculateur",
    "convertisseur, capteur, conditionneur, calculateur"
   ],
   "bonne": 1,
   "expl": "la grandeur physique traverse les quatre maillons dans cet ordre, et aucun n'améliore ce que le précédent lui donne : chacun ne fait que traduire. Retenir cette phrase règle la moitié des questions du chapitre. 3pt"
  },
  {
   "q": "Un capteur qui se contente de faire varier sa résistance est :",
   "choix": [
    "actif",
    "défectueux",
    "passif"
   ],
   "bonne": 2,
   "expl": "un capteur passif ne délivre rien par lui-même, il faut l'alimenter et le monter. Le thermocouple, lui, produit une tension à partir de la seule différence de température : c'est le type même du capteur actif. La jauge de contrainte et la CTN sont passives. 3pt"
  },
  {
   "q": "Parmi ces capteurs, le seul actif est :",
   "choix": [
    "le thermocouple",
    "la jauge de contrainte",
    "la CTN"
   ],
   "bonne": 0,
   "expl": "un capteur passif ne délivre rien par lui-même, il faut l'alimenter et le monter. Le thermocouple, lui, produit une tension à partir de la seule différence de température : c'est le type même du capteur actif. La jauge de contrainte et la CTN sont passives. 3pt"
  },
  {
   "q": "La sensibilité d'un capteur de pression délivrant 0,50 V à 0 bar et 4,50 V à 250 bar vaut :",
   "choix": [
    "18 mV/bar",
    "16 mV/bar",
    "0,50 V/bar"
   ],
   "bonne": 1,
   "expl": "(4,50 - 0,50)/250 = 0,016 V/bar. La réponse « 18 mV/bar » vient d'un oubli du décalage de 0,50 V (on aurait divisé 4,50 par 250). Ce décalage est volontaire : il permet de distinguer une pression nulle d'un capteur débranché. 3pt"
  },
  {
   "q": "Une CTN a un coefficient de température négatif : quand la température augmente, sa résistance :",
   "choix": [
    "augmente",
    "ne change pas",
    "diminue"
   ],
   "bonne": 2,
   "expl": "CTN veut dire coefficient de température négatif. Et le diviseur ne fabrique aucune information : il traduit la variation de résistance en variation de tension, sur une plage choisie. La réponse « ne change pas » est le contresens central du chapitre — un conditionneur rend un capteur commode, jamais plus juste. 3pt"
  },
  {
   "q": "Le rôle d'un montage diviseur placé après une CTN est de :",
   "choix": [
    "transformer la variation de résistance en variation de tension",
    "rendre le capteur plus juste",
    "augmenter la sensibilité du capteur lui-même"
   ],
   "bonne": 0,
   "expl": "CTN veut dire coefficient de température négatif. Et le diviseur ne fabrique aucune information : il traduit la variation de résistance en variation de tension, sur une plage choisie. La réponse « rendre le capteur plus juste » est le contresens central du chapitre — un conditionneur rend un capteur commode, jamais plus juste. 3pt"
  },
  {
   "q": "Le quantum d'un convertisseur 10 bits de pleine échelle 5,00 V vaut :",
   "choix": [
    "4,9 mV",
    "0,50 mV",
    "10 mV"
   ],
   "bonne": 0,
   "expl": "q = 5,00/1024 = 4,9 mV, pour 2¹⁰ = 1024 valeurs numérotées de 0 à 1023. Deux bits de plus multiplient le nombre de valeurs par quatre, donc divisent le quantum par quatre. 3pt"
  },
  {
   "q": "Un convertisseur 10 bits peut coder :",
   "choix": [
    "10 valeurs",
    "1024 valeurs",
    "100 valeurs"
   ],
   "bonne": 1,
   "expl": "q = 5,00/1024 = 4,9 mV, pour 2¹⁰ = 1024 valeurs numérotées de 0 à 1023. Deux bits de plus multiplient le nombre de valeurs par quatre, donc divisent le quantum par quatre. 3pt"
  },
  {
   "q": "Passer de 10 à 12 bits divise le quantum par :",
   "choix": [
    "2",
    "12",
    "4"
   ],
   "bonne": 2,
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
    "le logiciel d'affichage",
    "le capteur"
   ],
   "bonne": 2,
   "expl": "et c'est le cœur du chapitre. Le convertisseur distingue 0,15 °C, mais le capteur ignore 1,8 °C : la vraie température est quelque part dans un intervalle douze fois plus large que le dixième affiché. La résolution n'est pas la précision. Pour améliorer la chaîne, on améliore son maillon le plus faible — ici le capteur : tolérance plus serrée, ou étalonnage individuel de l'exemplaire monté. 3pt"
  },
  {
   "q": "Un signal à 120 Hz est échantillonné à 100 Hz. On observera :",
   "choix": [
    "une oscillation à 20 Hz qui n'existe pas",
    "le signal, un peu dégradé",
    "rien du tout"
   ],
   "bonne": 0,
   "expl": "c'est le repliement : 120 - 100 = 20 Hz. On n'obtient pas un signal dégradé, on obtient un autre signal, plus lent, qui n'a jamais existé. Le plus dangereux est que rien dans les données ne le signale : un technicien pourrait chercher longtemps une cause mécanique à cette oscillation. Remède, dans cet ordre : filtrer avant de convertir, puis échantillonner plus vite. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quels sont les quatre maillons d'une chaîne de mesure ?",
   "verso": "<b>Capteur</b> (grandeur électrique) → <b>conditionneur</b> (tension exploitable) → <b>convertisseur</b> (nombre) → <b>calculateur</b> (exploite, affiche).",
   "origine": "Cours §1 La chaîne de mesure"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quel maillon fixe la qualité d'une chaîne de mesure ?",
   "verso": "Le <b>maillon le plus faible</b> — presque toujours le <b>capteur</b>. Aucun étage n'améliore le précédent.",
   "origine": "Cours §1 Aucun maillon n'améliore le précédent"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Capteur actif et capteur passif : définir et donner des exemples sur un engin.",
   "verso": "<b>Actif</b> : délivre lui-même une tension ou un courant (thermocouple, génératrice tachymétrique, piézo de cliquetis).<br><b>Passif</b> : fait varier R, C ou L, il faut une alimentation (CTN, jauge, potentiomètre).",
   "origine": "Cours §1.1 Actif ou passif"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sensibilité, étendue de mesure, linéarité : définir.",
   "verso": "<b>Sensibilité</b> : la pente, <b>avec son unité</b> (V/bar, mV/K…).<br><b>Étendue</b> : plage utilisable.<br><b>Linéarité</b> : écart maximal à la droite, en % de l'étendue.",
   "origine": "Cours §2 Caractéristique d'un capteur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi un capteur de pression délivre-t-il 0,50 V à 0 bar ?",
   "verso": "Pour <b>distinguer une pression nulle d'un capteur débranché</b> : 0 V signale une panne.",
   "origine": "Cours §2 Le zéro décalé"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Loi de la CTN ? Défaut principal ?",
   "verso": "<b>R = R<sub>0</sub> e<sup>β(1/T − 1/T<sub>0</sub>)</sup></b>, T en <b>K</b>. Très sensible mais <b>très non linéaire</b> (R ÷ 30 entre 0 et 100 °C).",
   "origine": "Cours §3.1 La CTN"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Tension de mesure d'un conditionnement par diviseur avec une CTN ?",
   "verso": "<b>V<sub>m</sub> = V<sub>cc</sub> × R<sub>1</sub> / (R<sub>1</sub> + R)</b>. R<sub>1</sub> décide de la plage où la réponse est droite, pas de la qualité de la mesure.",
   "origine": "Cours §3.2 Le diviseur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quantum d'un convertisseur ? Que rend-il réellement ?",
   "verso": "<b>q = pleine échelle / 2<sup>N</sup></b> (10 bits, 5,00 V : 4,9 mV). Il rend la <b>partie entière de V/q</b> (le numéro de la marche). Un bit de plus divise q par 2.",
   "origine": "Cours §4.1 Quantifier"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Différence entre résolution et précision ? Qu'améliore l'ajout de bits ?",
   "verso": "<b>Résolution</b> : plus petit écart distingué, fixée par le <b>convertisseur</b>.<br><b>Précision</b> : écart à la vraie valeur, fixée par le <b>capteur</b>.<br>Ajouter des bits n'améliore que la <b>résolution</b>.",
   "origine": "Cours §4.2 Résolution et précision"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Condition de Shannon ? Que se passe-t-il si elle n'est pas respectée ?",
   "verso": "<b>f<sub>éch</sub> &gt; 2 f<sub>max</sub></b>. Sinon <b>repliement</b> : un autre signal, plus lent, apparaît (120 Hz à 100 Hz → 20 Hz), et rien ne le signale.",
   "origine": "Cours §5 Échantillonner"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment éviter le repliement ?",
   "verso": "1. <b>Filtrer avant de convertir</b> (filtre anti-repliement).<br>2. <b>Échantillonner assez vite</b>.<br>Filtrer après coup ne sert à rien.",
   "origine": "Cours §5 Deux remèdes"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment exploiter un conditionnement par diviseur ?",
   "verso": "1. Calculer R à quelques températures de la plage.<br>2. En déduire V<sub>m</sub>.<br>3. <b>Écarts successifs</b> de V<sub>m</sub> voisins → linéaire.<br>4. Sensibilité de l'ensemble en mV/°C.",
   "origine": "Cours §3.2 Méthode — Conditionnement par diviseur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Résolution 0,15 °C, CTN à ± 1,8 °C. L'affichage 80,3 °C est-il justifié ?",
   "verso": "1. Comparer : l'incertitude du capteur est <b>12 fois</b> la résolution.<br>2. La vraie valeur est entre 78,5 et 82,1 °C.<br>3. Le dixième affiché est du <b>bruit</b> : la précision vient du capteur.",
   "origine": "Cours §4.2 Le dixième de degré"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Convertisseur 10 bits, pleine échelle 5,00 V, tension 2,40 V. Quel nombre rend-il ?",
   "verso": "1. q = 5,00/1024 = 4,9 mV.<br>2. V/q = 2,40/4,88 × 10<sup>−3</sup> ≈ 491,5.<br>3. Partie entière : <b>491</b>.",
   "origine": "Cours §4.1 Quantifier"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
