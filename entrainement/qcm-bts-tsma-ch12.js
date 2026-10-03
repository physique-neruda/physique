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
    "250 Hz",
    "4 Hz",
    "4000 Hz"
   ],
   "bonne": 0,
   "expl": "f = 1/(4,0×10⁻³) = 250 Hz. La réponse « 4 Hz » vient d'un oubli de conversion des millisecondes, la réponse « 4000 Hz » d'une inversion. Repère utile : 20 ms 50 Hz, le réseau. 3pt"
  },
  {
   "q": "La valeur moyenne d'un signal est ce qu'affiche un multimètre en position :",
   "choix": [
    "alternatif",
    "continu",
    "ohmmètre"
   ],
   "bonne": 1,
   "expl": "position continu : la valeur moyenne. En position alternatif, le multimètre retire la composante continue et ne mesure plus que l'ondulation. 3pt"
  },
  {
   "q": "Un hacheur alimenté sous 24 V est réglé à α= 0,60. La valeur moyenne vaut :",
   "choix": [
    "24 V",
    "18,6 V",
    "14,4 V"
   ],
   "bonne": 2,
   "expl": "u_moy = αU = 0,60 × 24 = 14,4 V ; la réponse « 18,6 V » est la valeur efficace (24√(0,60)), qui existe bien mais répond à une autre question. Et c'est la valeur moyenne qui fixe la vitesse : un moteur à courant continu ne répond qu'à la composante continue. Le hacheur fait tourner le moteur comme s'il était sous 14,4 V, mais il chauffe les câbles comme s'il était sous 18,6 V. 3pt"
  },
  {
   "q": "Pour ce même hacheur, la grandeur qui fixe la vitesse du moteur est :",
   "choix": [
    "la valeur efficace",
    "la valeur moyenne",
    "l'amplitude"
   ],
   "bonne": 1,
   "expl": "u_moy = αU = 0,60 × 24 = 14,4 V ; la réponse « la valeur moyenne » est la valeur efficace (24√(0,60)), qui existe bien mais répond à une autre question. Et c'est la valeur moyenne qui fixe la vitesse : un moteur à courant continu ne répond qu'à la composante continue. Le hacheur fait tourner le moteur comme s'il était sous 14,4 V, mais il chauffe les câbles comme s'il était sous 18,6 V. 3pt"
  },
  {
   "q": "La valeur efficace se définit comme :",
   "choix": [
    "la tension continue qui produirait le même échauffement",
    "la moyenne des valeurs absolues",
    "la moitié de la valeur crête à crête"
   ],
   "bonne": 0,
   "expl": "la définition est énergétique, pas géométrique. Et pour un créneau symétrique, la tension vaut toujours 6 V en valeur absolue : elle chauffe donc exactement comme une continue de 6 V. La réponse « la moyenne des valeurs absolues » applique le √2 de la sinusoïde à un signal qui n'en est pas une — l'erreur la plus fréquente du chapitre. 3pt"
  },
  {
   "q": "Un créneau symétrique d'amplitude 6,0 V a pour valeur efficace :",
   "choix": [
    "3,0 V",
    "4,2 V",
    "6,0 V"
   ],
   "bonne": 2,
   "expl": "la définition est énergétique, pas géométrique. Et pour un créneau symétrique, la tension vaut toujours 6 V en valeur absolue : elle chauffe donc exactement comme une continue de 6 V. La réponse « 4,2 V » applique le √2 de la sinusoïde à un signal qui n'en est pas une — l'erreur la plus fréquente du chapitre. 3pt"
  },
  {
   "q": "Un signal a une valeur moyenne de 3,0 V et une composante alternative de valeur efficace 0,57 V. Sa valeur efficace totale vaut :",
   "choix": [
    "3,05 V",
    "3,57 V",
    "2,43 V"
   ],
   "bonne": 0,
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
    "deux tensions fixées en volts",
    "10 et 90 % de la valeur finale"
   ],
   "bonne": 2,
   "expl": "les seuils du temps de montée sont des pourcentages de la valeur finale, jamais des volts : changer l'amplitude ne change pas la durée. Et un harmonique de rang n est à n f, soit ici 5 × 200 = 1000 Hz — jamais à f/n, jamais décalé d'une constante. 3pt"
  },
  {
   "q": "Un harmonique de rang 5 d'un signal à 200 Hz se trouve à :",
   "choix": [
    "1000 Hz",
    "205 Hz",
    "40 Hz"
   ],
   "bonne": 0,
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
    "tantôt l'un, tantôt l'autre",
    "forcément supérieur à la valeur réelle",
    "forcément inférieur à la valeur réelle"
   ],
   "bonne": 2,
   "expl": "et c'est la question la plus utile de la feuille. La série des harmoniques est infinie, et les carrés ne font que s'ajouter : en s'arrêtant à cinq raies, on ne peut que sous-estimer. C'est le seul écart de toute l'année dont le signe soit connu avant la première mesure — et il se réduit en ajoutant une raie, non en retouchant le montage. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir période et fréquence d'un signal. Comment repérer correctement une période ?",
   "verso": "<b>T</b> : durée du motif ; <b>f = 1/T</b> en Hz.<br>Entre deux points de <b>même valeur et même sens de variation</b>.",
   "origine": "Cours §1 Période et fréquence"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la valeur moyenne. Quelle position du multimètre l'affiche ?",
   "verso": "Le niveau constant qui donnerait <b>la même aire</b> sur une période. Position <b>continu (DC)</b>.",
   "origine": "Cours §2 La valeur moyenne"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Valeur moyenne d'un signal rectangulaire (U pendant αT, 0 sinon) ? Ce qu'elle fixe pour un moteur ?",
   "verso": "<b>u<sub>moy</sub> = α U</b> (α rapport cyclique). Elle fixe la <b>vitesse</b> d'un moteur à courant continu (24 V, α = 0,60 → 14,4 V).",
   "origine": "Cours §2 Signal rectangulaire"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la valeur efficace. Puissance dans une résistance ?",
   "verso": "La tension <b>continue</b> qui produirait <b>le même échauffement</b> dans la même résistance.<br><b>P = U<sub>eff</sub>² / R</b>.",
   "origine": "Cours §3.1 La valeur efficace"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Valeur efficace d'une sinusoïde, d'un créneau symétrique, d'un triangle symétrique ?",
   "verso": "Sinusoïde : <b>U<sub>max</sub>/√2</b>.<br>Créneau : <b>U<sub>max</sub></b>.<br>Triangle : <b>U<sub>max</sub>/√3</b>.",
   "origine": "Cours §3.1 Formes usuelles"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation entre valeur efficace totale, valeur moyenne et composante alternative ?",
   "verso": "<b>U<sub>eff</sub>² = U<sub>moy</sub>² + U<sub>alt,eff</sub>²</b> : les <b>carrés</b> s'ajoutent, jamais les valeurs.",
   "origine": "Cours §3.2 Les carrés s'ajoutent"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que mesure un multimètre ordinaire en position AC ? Sur quel signal est-il juste ?",
   "verso": "1,11 × la valeur moyenne du signal redressé : juste <b>seulement sur une sinusoïde</b> (créneau : + 11 % ; triangle : − 3,8 %). Il faut un <b>TRMS</b> ou un oscilloscope.",
   "origine": "Cours §4 Ce que mesure un multimètre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir le temps de montée et le temps d'établissement à 5 %.",
   "verso": "<b>t<sub>m</sub></b> : de <b>10 à 90 %</b> de la valeur finale (rapidité).<br><b>t<sub>5%</sub></b> : à partir duquel le signal reste dans <b>± 5 %</b> de la valeur finale (stabilisation).",
   "origine": "Cours §5 Régime transitoire"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que le fondamental ? les harmoniques ? Que porte le spectre d'amplitude ?",
   "verso": "<b>Fondamental</b> : sinusoïde de même fréquence que le signal. <b>Harmoniques</b> : fréquences multiples. Spectre : <b>fréquence</b> en abscisse, <b>amplitude</b> en ordonnée.",
   "origine": "Cours §6.1 Fondamental et harmoniques"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que dit un spectre à une seule raie ? Quels rangs pour un signal symétrique ? Décroissance d'un créneau, d'un triangle ?",
   "verso": "Une raie : <b>sinusoïde pure</b>.<br>Symétrique : <b>rangs impairs</b> seulement.<br>Créneau : en <b>1/n</b> ; triangle : en <b>1/n²</b>.",
   "origine": "Cours §6.1 Reconnaître une forme"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Valeur efficace d'un signal à partir de son spectre ?",
   "verso": "<b>U<sub>eff</sub> = √(U<sub>0</sub>² + U<sub>1</sub>² + U<sub>3</sub>² + …)</b> (valeurs efficaces des raies). Une somme tronquée <b>sous-estime</b>.",
   "origine": "Cours §6.2 Du spectre à la valeur efficace"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Alimentation : 3,0 V continus et ondulation sinusoïdale d'amplitude 0,80 V. Comment trouver la valeur efficace totale ?",
   "verso": "1. U<sub>alt,eff</sub> = 0,80/√2 = 0,57 V.<br>2. U<sub>eff</sub>² = 3,0² + 0,57² = 9,32.<br>3. U<sub>eff</sub> = <b>3,05 V</b> (+ 1,8 % seulement).",
   "origine": "Cours §3.2 Une ondulation résiduelle"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment identifier une forme d'onde à partir de son spectre ?",
   "verso": "1. Raie la plus basse = <b>fondamental</b> (fréquence du signal).<br>2. Autres raies à des <b>multiples</b>.<br>3. Rangs <b>présents</b> (impairs → symétrique).<br>4. <b>Décroissance</b> : 1/n créneau, 1/n² triangle.",
   "origine": "Cours §6.1 Méthode — Identifier une forme d'onde"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment lire t<sub>m</sub> et t<sub>5%</sub> sur un enregistrement ?",
   "verso": "1. Repérer la <b>valeur finale</b>.<br>2. t<sub>m</sub> : instants à 10 % et 90 % de la valeur finale, faire la différence.<br>3. t<sub>5%</sub> : dernier instant où le signal entre dans ± 5 % sans en ressortir.",
   "origine": "Cours §5 Régime transitoire"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
