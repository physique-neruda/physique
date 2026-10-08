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
   "type": "trou",
   "recto": "Le numérique résiste mieux aux parasites : le récepteur n'a qu'à distinguer …….",
   "rep": "deux niveaux",
   "verso": "<strong>deux niveaux</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "<strong>Loi de la réflexion</strong> : l'angle de réflexion est égal à l'angle d'incidence, …….",
   "rep": "r = i₁",
   "verso": "<strong>r = i₁</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Dans une chaîne de transmission, le maillon qui met l'information en forme s'appelle ……",
   "rep": "l'émetteur",
   "verso": "<strong>l'émetteur</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le support le moins sensible aux parasites électromagnétiques est ……",
   "rep": "la fibre optique",
   "verso": "<strong>la fibre optique</strong> — La lumière ne se laisse pas perturber par un champ électromagnétique : c'est l'argument décisif en atelier.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Les angles d'incidence et de réfraction se mesurent par rapport ……",
   "rep": "à la normale",
   "verso": "<strong>à la normale</strong> — Toujours la normale. Mesurer depuis la surface donne le complémentaire de l'angle, et toute la suite est fausse.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En passant de l'air dans l'eau, un rayon ……",
   "rep": "se rapproche de la normale",
   "verso": "<strong>se rapproche de la normale</strong> — L'eau a un indice plus grand que l'air.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La réflexion totale peut se produire quand la lumière passe ……",
   "rep": "du verre vers l'air",
   "verso": "<strong>du verre vers l'air</strong> — Seulement vers un milieu d'indice plus faible.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "L'angle limite verre (n = 1,50) / air vaut environ ……",
   "rep": "42",
   "verso": "<strong>42</strong> — sin i_lim = 1/1,50 = 0,667.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans une fibre optique, l'indice de la gaine est ……",
   "rep": "plus petit que celui du cœur",
   "verso": "<strong>plus petit que celui du cœur</strong> — Sans cela, pas de réflexion totale à la frontière cœur-gaine.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une atténuation de 3 dB correspond à une puissance reçue ……",
   "rep": "divisée par 2",
   "verso": "<strong>divisée par 2</strong> — 10^-0,3 ≈ 0,5. La réponse a est le piège : les décibels ne sont pas un facteur de division.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une liaison à 9600 1/s transmet un bit en environ ……",
   "rep": "104 µs",
   "verso": "<strong>104 µs</strong> — 1/9600 = 1,04×10⁻⁴ s.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans une trame série, le premier bit envoyé après le start est ……",
   "rep": "le bit de poids faible",
   "verso": "<strong>le bit de poids faible</strong> — Convention des liaisons série : le poids faible d'abord.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une liaison numérique résiste mieux aux parasites qu'une liaison analogique parce que ……",
   "rep": "le récepteur n'a que deux niveaux à distinguer",
   "verso": "<strong>le récepteur n'a que deux niveaux à distinguer</strong> — Un parasite qui déforme un peu le signal ne change pas un 0 en 1 ; il change en revanche directement la valeur d'une grandeur analogique. enumerate",
   "origine": "bilan"
  }
 ],
 "cartes_figees": false
};
