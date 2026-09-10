/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 12 · Analyse du signal
   Le bilan vient de ch12_bilan.tex, les cartes des \trou{} de
   ch12_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "12",
 "titre": "Analyse du signal",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Un signal a une période de 20 ms. Sa fréquence vaut :",
   "choix": [
    "20 Hz",
    "50 Hz",
    "500 Hz",
    "0,05 Hz"
   ],
   "bonne": 1,
   "expl": "f = 1/T = 1/0,020 = 50 Hz. Repère utile : 20 ms ↔ 50 Hz, la fréquence du réseau."
  },
  {
   "q": "Combien vaut 230 × √2 ?",
   "choix": [
    "163",
    "325",
    "460",
    "115"
   ],
   "bonne": 1,
   "expl": "230 × 1,414 = 325 : c'est la valeur maximale de la tension du réseau."
  },
  {
   "q": "Combien vaut √(3,0² + 0,57²) ?",
   "choix": [
    "3,57",
    "3,05",
    "2,43",
    "9,32"
   ],
   "bonne": 1,
   "expl": "√9,32 = 3,05, très différent de la somme 3,57 : une composition quadratique n'est jamais une addition."
  },
  {
   "q": "Un signal vaut 6,0 V pendant 2,4 ms puis −2,0 V pendant 1,6 ms. Sa valeur moyenne vaut :",
   "choix": [
    "2,0 V",
    "2,8 V",
    "4,0 V",
    "3,6 V"
   ],
   "bonne": 1,
   "expl": "(6,0 × 2,4 + (−2,0) × 1,6)/4,0 = 11,2/4,0 = 2,8 V. La moyenne pondère par les durées."
  },
  {
   "q": "Un signal vaut 24 V pendant 60 % du temps et 0 V le reste. Sa valeur efficace vaut :",
   "choix": [
    "14,4 V",
    "18,6 V",
    "24 V",
    "12 V"
   ],
   "bonne": 1,
   "expl": "24 × √0,60 = 18,6 V, alors que la valeur moyenne vaut 14,4 V. Moyenne et efficace sont deux nombres différents."
  },
  {
   "q": "L'harmonique de rang 3 d'un signal à 200 Hz est à :",
   "choix": [
    "200 Hz",
    "600 Hz",
    "800 Hz",
    "66,7 Hz"
   ],
   "bonne": 1,
   "expl": "Un harmonique de rang n est à la fréquence n × f."
  }
 ],
 "bilan": [
  {
   "q": "Un signal a une période de 4,0 ms. Sa fréquence vaut :",
   "choix": [
    "4 Hz",
    "250 Hz",
    "4000 Hz"
   ],
   "bonne": 1,
   "expl": "f = 1/(4,0×10⁻³) = 250 Hz. La réponse a vient d'un oubli de conversion des millisecondes, la c d'une inversion. Repère utile : 20 ms 50 Hz, le réseau. 3pt"
  },
  {
   "q": "La valeur moyenne d'un signal est ce qu'affiche un multimètre en position :",
   "choix": [
    "continu",
    "alternatif",
    "ohmmètre"
   ],
   "bonne": 0,
   "expl": "position continu : la valeur moyenne. En position alternatif, le multimètre retire la composante continue et ne mesure plus que l'ondulation. 3pt"
  },
  {
   "q": "Un hacheur alimenté sous 24 V est réglé à α= 0,60. La valeur moyenne vaut :",
   "choix": [
    "14,4 V",
    "18,6 V",
    "24 V"
   ],
   "bonne": 0,
   "expl": "u_moy = αU = 0,60 × 24 = 14,4 V ; la réponse b est la valeur efficace (24√(0,60)), qui existe bien mais répond à une autre question. Et c'est la valeur moyenne qui fixe la vitesse : un moteur à courant continu ne répond qu'à la composante continue. Le hacheur fait tourner le moteur comme s'il était sous 14,4 V, mais il chauffe les câbles comme s'il était sous 18,6 V. 3pt"
  },
  {
   "q": "Pour ce même hacheur, la grandeur qui fixe la vitesse du moteur est :",
   "choix": [
    "la valeur efficace",
    "la valeur moyenne",
    "l'amplitude"
   ],
   "bonne": 1,
   "expl": "u_moy = αU = 0,60 × 24 = 14,4 V ; la réponse b est la valeur efficace (24√(0,60)), qui existe bien mais répond à une autre question. Et c'est la valeur moyenne qui fixe la vitesse : un moteur à courant continu ne répond qu'à la composante continue. Le hacheur fait tourner le moteur comme s'il était sous 14,4 V, mais il chauffe les câbles comme s'il était sous 18,6 V. 3pt"
  },
  {
   "q": "La valeur efficace se définit comme :",
   "choix": [
    "la moyenne des valeurs absolues",
    "la tension continue qui produirait le même échauffement",
    "la moitié de la valeur crête à crête"
   ],
   "bonne": 1,
   "expl": "la définition est énergétique, pas géométrique. Et pour un créneau symétrique, la tension vaut toujours 6 V en valeur absolue : elle chauffe donc exactement comme une continue de 6 V. La réponse b applique le √2 de la sinusoïde à un signal qui n'en est pas une — l'erreur la plus fréquente du chapitre. 3pt"
  },
  {
   "q": "Un créneau symétrique d'amplitude 6,0 V a pour valeur efficace :",
   "choix": [
    "3,0 V",
    "4,2 V",
    "6,0 V"
   ],
   "bonne": 2,
   "expl": "la définition est énergétique, pas géométrique. Et pour un créneau symétrique, la tension vaut toujours 6 V en valeur absolue : elle chauffe donc exactement comme une continue de 6 V. La réponse b applique le √2 de la sinusoïde à un signal qui n'en est pas une — l'erreur la plus fréquente du chapitre. 3pt"
  },
  {
   "q": "Un signal a une valeur moyenne de 3,0 V et une composante alternative de valeur efficace 0,57 V. Sa valeur efficace totale vaut :",
   "choix": [
    "3,57 V",
    "3,05 V",
    "2,43 V"
   ],
   "bonne": 1,
   "expl": "√(3,0² + 0,57²) = 3,05 V, et non 3,0 + 0,57. Ce sont les carrés qui s'ajoutent, et c'est pourquoi une ondulation cinq fois plus petite ne pèse que 4 % en énergie. 3pt"
  },
  {
   "q": "Un multimètre non TRMS branché sur un créneau symétrique :",
   "choix": [
    "donne la bonne valeur",
    "surestime d'environ 11 %",
    "sous-estime d'environ 11 %"
   ],
   "bonne": 1,
   "expl": "il affiche 1,11 fois la valeur moyenne redressée, soit 1,11 × 6,00 = 6,66 V au lieu de 6,00 V. Attention : sur un triangle, le même appareil sous-estime de 3,8 %. L'erreur change de signe avec la forme, donc aucun coefficient correcteur unique n'existe. 3pt"
  },
  {
   "q": "Le temps de montée d'un signal se mesure entre :",
   "choix": [
    "0 et 100 % de la valeur finale",
    "10 et 90 % de la valeur finale",
    "deux tensions fixées en volts"
   ],
   "bonne": 1,
   "expl": "les seuils du temps de montée sont des pourcentages de la valeur finale, jamais des volts : changer l'amplitude ne change pas la durée. Et un harmonique de rang n est à n f, soit ici 5 × 200 = 1000 Hz — jamais à f/n, jamais décalé d'une constante. 3pt"
  },
  {
   "q": "Un harmonique de rang 5 d'un signal à 200 Hz se trouve à :",
   "choix": [
    "40 Hz",
    "205 Hz",
    "1000 Hz"
   ],
   "bonne": 2,
   "expl": "les seuils du temps de montée sont des pourcentages de la valeur finale, jamais des volts : changer l'amplitude ne change pas la durée. Et un harmonique de rang n est à n f, soit ici 5 × 200 = 1000 Hz — jamais à f/n, jamais décalé d'une constante. 3pt"
  },
  {
   "q": "Un spectre ne comportant qu'une seule raie correspond à :",
   "choix": [
    "un créneau",
    "une sinusoïde pure",
    "un signal continu"
   ],
   "bonne": 1,
   "expl": "une seule raie signifie aucun harmonique : c'est la définition même d'une sinusoïde pure, et c'est la façon la plus rapide de juger la qualité d'un alternateur. Un signal purement continu, lui, n'aurait pas de raie du tout à fréquence non nulle. 3pt"
  },
  {
   "q": "On reconstitue une valeur efficace à partir des cinq premières raies d'un spectre. Le résultat obtenu est :",
   "choix": [
    "forcément inférieur à la valeur réelle",
    "forcément supérieur à la valeur réelle",
    "tantôt l'un, tantôt l'autre"
   ],
   "bonne": 0,
   "expl": "et c'est la question la plus utile de la feuille. La série des harmoniques est infinie, et les carrés ne font que s'ajouter : en s'arrêtant à cinq raies, on ne peut que sous-estimer. C'est le seul écart de toute l'année dont le signe soit connu avant la première mesure — et il se réduit en ajoutant une raie, non en retouchant le montage. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "La <strong>période</strong> T est ……, en secondes.",
   "verso": "<strong>la durée du motif qui se répète</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Leurs valeurs efficaces ne s'additionnent pas : …….",
   "verso": "<strong>U_eff² = U_moy² + U_alt,eff²</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "C'est la valeur qu'affiche un multimètre en position …….",
   "verso": "<strong>continue</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>fréquence</strong> f est ……, en hertz, avec f = 1/T.",
   "verso": "<strong>le nombre de motifs par seconde</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>fréquence</strong> f est le nombre de motifs par seconde, en hertz, avec …….",
   "verso": "<strong>f = 1/T</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le <strong>spectre d'amplitude</strong> porte …… en abscisse et l'amplitude en ordonnée.",
   "verso": "<strong>la fréquence</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le <strong>spectre d'amplitude</strong> porte la fréquence en abscisse et …… en ordonnée.",
   "verso": "<strong>l'amplitude</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La corriger supposerait donc de …… — c'est-à-dire de disposer déjà de l'information que l'on cherche.",
   "verso": "<strong>connaître la forme d'onde à l'avance</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Tout signal périodique se décompose en une composante continue — sa valeur moyenne — et …… de moyenne nulle.",
   "verso": "<strong>une composante alternative</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un signal a une période de 4,0 ms. Sa fréquence vaut ……",
   "verso": "<strong>250 Hz</strong> — f = 1/(4,0×10⁻³) = 250 Hz. La réponse a vient d'un oubli de conversion des millisecondes, la c d'une inversion. Repère utile : 20 ms 50 Hz, le réseau. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La valeur moyenne d'un signal est ce qu'affiche un multimètre en position ……",
   "verso": "<strong>continu</strong> — position continu : la valeur moyenne. En position alternatif, le multimètre retire la composante continue et ne mesure plus que l'ondulation. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un hacheur alimenté sous 24 V est réglé à α= 0,60. La valeur moyenne vaut ……",
   "verso": "<strong>14,4 V</strong> — u_moy = αU = 0,60 × 24 = 14,4 V ; la réponse b est la valeur efficace (24√(0,60)), qui existe bien mais répond à une autre question. Et c'est la valeur moyenne qui fixe la vitesse : un moteur à courant continu ne répond qu'à la composante continue. Le hacheur fait tourner le moteur comme s'il était sous 14,4 V, mais il chauffe les câbles comme s'il était sous 18,6 V. 3pt",
   "origine": "bilan"
  }
 ]
};
