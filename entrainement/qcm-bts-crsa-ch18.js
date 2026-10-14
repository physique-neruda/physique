/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 18 — Transmission du signal
   Le bilan vient de CRSA_ch18_bilan.tex, les cartes des \trou{} de
   CRSA_ch18_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "18",
 "cle": "ch18",
 "etiquette": "Chapitre 18",
 "titre": "Transmission du signal",
 "niveau": "BTS CRSA",
 "prerequis": [],
 "bilan": [
  {
   "q": "Dans une chaîne de transmission, le maillon qui met l'information en forme s'appelle :",
   "choix": [
    "le canal",
    "le récepteur",
    "le destinataire",
    "l'émetteur"
   ],
   "bonne": 3,
   "expl": "L'émetteur code ; le canal transporte ; le récepteur décode."
  },
  {
   "q": "Le support le moins sensible aux parasites électromagnétiques est :",
   "choix": [
    "la fibre optique",
    "le câble coaxial",
    "l'onde radio",
    "la paire torsadée"
   ],
   "bonne": 0,
   "expl": "La lumière ne se laisse pas perturber par un champ électromagnétique : c'est l'argument décisif en atelier."
  },
  {
   "q": "Dans un milieu d'indice n = 1,50, la lumière se propage à :",
   "choix": [
    "4,5×10⁸ m/s",
    "3,0×10⁸ m/s",
    "2,0×10⁸ m/s",
    "1,5×10⁸ m/s"
   ],
   "bonne": 2,
   "expl": "v = c/n = 3,0×10⁸/1,50. La réponse « 4,5×10⁸ m/s » multiplie au lieu de diviser : la lumière ralentit dans la matière."
  },
  {
   "q": "Les angles d'incidence et de réfraction se mesurent par rapport :",
   "choix": [
    "à la surface",
    "à la normale",
    "au rayon réfléchi",
    "à l'horizontale"
   ],
   "bonne": 1,
   "expl": "Toujours la normale. Mesurer depuis la surface donne le complémentaire de l'angle, et toute la suite est fausse."
  },
  {
   "q": "En passant de l'air dans l'eau, un rayon :",
   "choix": [
    "s'écarte de la normale",
    "se rapproche de la normale",
    "n'est jamais dévié",
    "est totalement réfléchi"
   ],
   "bonne": 1,
   "expl": "L'eau a un indice plus grand que l'air."
  },
  {
   "q": "La réflexion totale peut se produire quand la lumière passe :",
   "choix": [
    "de l'air vers le verre",
    "dans les deux sens",
    "du verre vers l'air",
    "seulement sous incidence nulle"
   ],
   "bonne": 2,
   "expl": "Seulement vers un milieu d'indice plus faible."
  },
  {
   "q": "L'angle limite verre (n = 1,50) / air vaut environ :",
   "choix": [
    "30",
    "90",
    "56",
    "42"
   ],
   "bonne": 3,
   "expl": "sin i_lim = 1/1,50 = 0,667."
  },
  {
   "q": "Dans une fibre optique, l'indice de la gaine est :",
   "choix": [
    "plus petit que celui du cœur",
    "égal à celui du cœur",
    "plus grand que celui du cœur",
    "sans importance"
   ],
   "bonne": 0,
   "expl": "Sans cela, pas de réflexion totale à la frontière cœur-gaine."
  },
  {
   "q": "Une atténuation de 3 dB correspond à une puissance reçue :",
   "choix": [
    "divisée par 3",
    "multipliée par 2",
    "divisée par 10",
    "divisée par 2"
   ],
   "bonne": 3,
   "expl": "10^-0,3 ≈ 0,5. La réponse « divisée par 3 » est le piège : les décibels ne sont pas un facteur de division."
  },
  {
   "q": "Une liaison à 9600 1/s transmet un bit en environ :",
   "choix": [
    "9,6 ms",
    "104 µs",
    "1,04 ms",
    "10 µs"
   ],
   "bonne": 1,
   "expl": "1/9600 = 1,04×10⁻⁴ s."
  },
  {
   "q": "Dans une trame série, le premier bit envoyé après le start est :",
   "choix": [
    "le bit de poids faible",
    "le bit de parité",
    "le bit de poids fort",
    "le bit de stop"
   ],
   "bonne": 0,
   "expl": "Convention des liaisons série : le poids faible d'abord."
  },
  {
   "q": "Une liaison numérique résiste mieux aux parasites qu'une liaison analogique parce que :",
   "choix": [
    "elle va plus vite",
    "elle n'a pas de canal",
    "le récepteur n'a que deux niveaux à distinguer",
    "elle utilise toujours une fibre"
   ],
   "bonne": 2,
   "expl": "Un parasite qui déforme un peu le signal ne change pas un 0 en 1 ; il change en revanche directement la valeur d'une grandeur analogique. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quels sont les cinq maillons d'une chaîne de transmission ? Que subit le signal sur le canal ?",
   "verso": "<b>Source</b> → <b>émetteur</b> (codage) → <b>canal</b> → <b>récepteur</b> (décodage) → <b>destinataire</b>. Le canal ajoute <b>atténuation et parasites</b>.",
   "origine": "Cours §1 La chaîne de transmission"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Transmission analogique et numérique : différence ? Laquelle résiste mieux aux parasites ?",
   "verso": "<b>Analogique</b> : une grandeur varie continûment (4-20 mA).<br><b>Numérique</b> : suite de bits. Le <b>numérique</b> résiste mieux : deux niveaux à distinguer.",
   "origine": "Cours §2 Les types de transmission"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir l'indice de réfraction. Unité ? Valeur minimale ?",
   "verso": "<b>n = c / v</b> (c = 3,00 × 10<sup>8</sup> m/s). <b>Sans unité</b>, <b>≥ 1</b>. Verre n = 1,50 → v = 2,00 × 10<sup>8</sup> m/s.",
   "origine": "Cours §3 Indice de réfraction"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Lois de la réflexion et de la réfraction ? Par rapport à quoi mesure-t-on les angles ?",
   "verso": "Réflexion : <b>r = i<sub>1</sub></b>.<br>Réfraction : <b>n<sub>1</sub> sin i<sub>1</sub> = n<sub>2</sub> sin i<sub>2</sub></b>.<br>Angles mesurés par rapport à la <b>normale</b>.",
   "origine": "Cours §4 Réflexion et réfraction"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>En passant dans un milieu d'indice plus grand, le rayon se rapproche ou s'écarte de la normale ?",
   "verso": "Il se <b>rapproche</b> de la normale.",
   "origine": "Cours §4 Réfraction"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Angle limite ? Quand y a-t-il réflexion totale ?",
   "verso": "<b>sin i<sub>lim</sub> = n<sub>2</sub> / n<sub>1</sub></b>, seulement vers un milieu d'indice <b>plus faible</b>. Incidence &gt; i<sub>lim</sub> → <b>réflexion totale</b>.",
   "origine": "Cours §5 La réflexion totale"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment une fibre optique guide-t-elle la lumière ? Condition sur les indices ?",
   "verso": "Par <b>réflexions totales successives</b> à la frontière cœur-gaine : <b>n<sub>cœur</sub> &gt; n<sub>gaine</sub></b>.",
   "origine": "Cours §6 La fibre optique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Ouverture numérique d'une fibre ?",
   "verso": "<b>sin θ<sub>max</sub> = √(n<sub>1</sub>² − n<sub>2</sub>²)</b> : seuls les rayons entrant avec θ ≤ θ<sub>max</sub> sont guidés.",
   "origine": "Cours §6 Ouverture numérique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Atténuation d'une fibre : formule ? Rapport de puissance ?",
   "verso": "<b>A = α × L</b> (dB) ; <b>P<sub>s</sub>/P<sub>e</sub> = 10<sup>−A/10</sup></b>. En puissance : 10 log (pas 20). 3 dB = moitié de la puissance.",
   "origine": "Cours §6 L'atténuation"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Atouts de la fibre optique en milieu industriel ?",
   "verso": "<b>Insensible aux parasites</b> électromagnétiques, débit très élevé, grandes distances, <b>isolation électrique</b>.",
   "origine": "Cours §6 Atouts de la fibre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Débit binaire et durée d'un bit ? Que contient une trame série ?",
   "verso": "<b>D</b> en bit/s ; <b>T<sub>b</sub> = 1/D</b>.<br>Trame : <b>start</b> (0), 8 bits de données (poids faible en premier), <b>parité</b> éventuelle, <b>stop</b> (1).",
   "origine": "Cours §7 La transmission numérique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment varient débit et distance d'une liaison (RS-485) ?",
   "verso": "En <b>sens contraire</b> : 10 Mbit/s sur quelques mètres, ≈ 100 kbit/s sur 1200 m.",
   "origine": "Cours §7 Débit et distance"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Transmetteur 4-20 mA sur une cuve, paire de fils, entrée automate. Comment identifier les maillons ?",
   "verso": "1. <b>Source</b> : le niveau.<br>2. <b>Émetteur</b> : le transmetteur (code en courant).<br>3. <b>Canal</b> : la paire de fils.<br>4. <b>Récepteur</b> : l'entrée analogique.<br>5. <b>Destinataire</b> : l'automate et l'opérateur.",
   "origine": "Cours §1 Méthode — Identifier les maillons"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Rayon air → verre (n = 1,50) sous 40°. Comment trouver l'angle de réfraction ?",
   "verso": "1. n<sub>1</sub> sin i<sub>1</sub> = n<sub>2</sub> sin i<sub>2</sub>.<br>2. sin i<sub>2</sub> = 1,00 × sin 40° / 1,50 = 0,429.<br>3. sin<sup>−1</sup> (calculatrice en <b>degrés</b>) : <b>i<sub>2</sub> = 25,4°</b>.<br>4. i<sub>2</sub> &lt; i<sub>1</sub> : cohérent.",
   "origine": "Cours §4 Méthode — Angle de réfraction"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Rayon verre (1,50) → air sous 55°. Comment prévoir s'il y a réflexion totale ?",
   "verso": "1. Vers un indice plus faible : possible.<br>2. sin i<sub>lim</sub> = 1,00/1,50 → <b>i<sub>lim</sub> = 41,8°</b>.<br>3. 55° &gt; 41,8° → <b>réflexion totale</b>.",
   "origine": "Cours §5 Méthode — Réflexion totale"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>9600 bit/s, trames de 11 bits, 120 octets. Comment calculer la durée de transmission ?",
   "verso": "1. T<sub>b</sub> = 1/9600 = 104 µs.<br>2. Trame : 11 × 104 µs = 1,15 ms.<br>3. Total : 120 × 1,15 = <b>138 ms</b>.<br>4. Débit utile : 9600 × 8/11 ≈ 6980 bit/s.",
   "origine": "Cours §7 Méthode — Durée de transmission"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
