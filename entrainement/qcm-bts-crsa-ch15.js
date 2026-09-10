/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 15 — Analyse du signal
   Le bilan vient de CRSA_ch15_bilan.tex, les cartes des \trou{} de
   CRSA_ch15_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "15",
 "titre": "Analyse du signal",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Convertir 20 ms en secondes, en écriture scientifique :",
   "choix": [
    "2,0×10⁻² s",
    "2,0×10⁻³ s",
    "2,0×10⁻⁵ s",
    "2,0×10¹ s"
   ],
   "bonne": 0,
   "expl": "milli vaut 10⁻³, et 20 = 2,0×10¹ : 2,0×10¹ × 10⁻³ = 2,0×10⁻² s."
  },
  {
   "q": "L'inverse d'une durée est :",
   "choix": [
    "une fréquence, en hertz",
    "une période, en secondes",
    "une pulsation, en rad/s",
    "un nombre sans unité"
   ],
   "bonne": 0,
   "expl": "1/s = Hz. C'est la définition même de la fréquence."
  },
  {
   "q": "Un rectangle a pour hauteur 24 et pour largeur 2,8. Son aire vaut :",
   "choix": [
    "67,2",
    "26,8",
    "8,57",
    "33,6"
   ],
   "bonne": 0,
   "expl": "24 × 2,8 = 67,2. L'aire sous un signal rectangulaire se calcule ainsi, et c'est ce qui donne la valeur moyenne."
  },
  {
   "q": "Comparer √0,35 à 0,35 :",
   "choix": [
    "√0,35 est plus grand",
    "√0,35 est plus petit",
    "les deux sont égaux",
    "la racine n'existe pas"
   ],
   "bonne": 0,
   "expl": "√0,35 = 0,592, plus grand que 0,35. Pour un nombre inférieur à 1, la racine remonte — le contraire de ce à quoi on s'attend."
  },
  {
   "q": "Calculer √(6² + 2,83²) :",
   "choix": [
    "6,63",
    "8,83",
    "44,0",
    "6,00"
   ],
   "bonne": 0,
   "expl": "√(36 + 8,0) = √44,0 = 6,63. Une somme quadratique n'est pas une somme : 8,83 serait 6 + 2,83."
  },
  {
   "q": "Une tension a pour valeur maximale 325 V. Sa valeur efficace vaut :",
   "choix": [
    "230 V",
    "460 V",
    "163 V",
    "325 V"
   ],
   "bonne": 0,
   "expl": "325/√2 = 230 V. C'est le réseau domestique, vu des deux côtés."
  }
 ],
 "bilan": [
  {
   "q": "Un signal a une période de 2,0 ms. Sa fréquence vaut :",
   "choix": [
    "2 Hz",
    "50 Hz",
    "500 Hz",
    "2000 Hz"
   ],
   "bonne": 2,
   "expl": "f = 1/T = 1/(2,0×10⁻³) = 500 Hz. La réponse a est le piège classique : oublier de convertir les millisecondes en secondes."
  },
  {
   "q": "La composante continue d'un signal périodique, c'est :",
   "choix": [
    "sa valeur maximale",
    "sa valeur moyenne",
    "sa valeur efficace",
    "son amplitude"
   ],
   "bonne": 1,
   "expl": "La composante continue est la valeur moyenne du signal. C'est elle que lit un voltmètre en position DC, et elle apparaît sur le spectre sous la forme d'une raie à 0 Hz."
  },
  {
   "q": "La valeur efficace d'un signal périodique est, par définition :",
   "choix": [
    "l'amplitude divisée par √2",
    "la moyenne des valeurs absolues",
    "la valeur de la tension continue qui dissiperait la même puissance",
    "la moitié de la valeur crête à crête"
   ],
   "bonne": 2,
   "expl": "C'est la définition énergétique, la seule valable pour tout signal, et celle que le programme demande de savoir énoncer. La réponse a est un résultat, et seulement pour un sinusoïdal."
  },
  {
   "q": "Un créneau varie entre 0 et 20 V avec un rapport cyclique α= 0,25. Sa valeur moyenne vaut :",
   "choix": [
    "20 V",
    "10 V",
    "5 V",
    "2,5 V"
   ],
   "bonne": 2,
   "expl": "u = αU_max = 0,25 × 20 = 5 V."
  },
  {
   "q": "Pour ce même créneau, la valeur efficace vaut :",
   "choix": [
    "5 V",
    "10 V",
    "14,1 V",
    "20 V"
   ],
   "bonne": 1,
   "expl": "U_eff = U_max√(α) = 20 × √(0,25) = 20 × 0,5 = 10 V. La réponse a confond avec la valeur moyenne — c'est l'erreur la plus fréquente du chapitre : on écrit α au lieu de √(α)."
  },
  {
   "q": "La relation U_eff = U_max/√2 s'applique :",
   "choix": [
    "à tout signal périodique",
    "aux seuls signaux sinusoïdaux",
    "aux seuls créneaux",
    "aux signaux de valeur moyenne nulle"
   ],
   "bonne": 1,
   "expl": "Uniquement pour un sinusoïdal. Appliquée à un créneau symétrique, où U_eff = U_max, elle donnerait une erreur de 30 %."
  },
  {
   "q": "Sur un spectre d'amplitude, la raie située à 0 Hz représente :",
   "choix": [
    "le fondamental",
    "la composante continue",
    "le premier harmonique",
    "une erreur de mesure"
   ],
   "bonne": 1,
   "expl": "La raie à fréquence nulle est la composante continue, et sa hauteur est la valeur moyenne. Le fondamental, lui, est la première raie de fréquence non nulle."
  },
  {
   "q": "Le fondamental d'un signal est à 50 Hz. L'harmonique de rang 7 est à :",
   "choix": [
    "57 Hz",
    "300 Hz",
    "350 Hz",
    "700 Hz"
   ],
   "bonne": 2,
   "expl": "f_n = n f₁ = 7 × 50 = 350 Hz. La réponse a ajoute au lieu de multiplier ; la réponse d confond le rang avec un facteur appliqué à la fréquence entière."
  },
  {
   "q": "Un spectre ne comporte qu'une seule raie, à 100 Hz. Le signal est :",
   "choix": [
    "continu",
    "sinusoïdal",
    "en créneau",
    "triangulaire"
   ],
   "bonne": 1,
   "expl": "Une seule raie signifie une seule fréquence : le signal est une sinusoïde pure. Un créneau ou un triangle donneraient un fondamental et des harmoniques. Un signal continu n'aurait qu'une raie, mais à 0 Hz."
  },
  {
   "q": "Pour mesurer la valeur moyenne d'un signal, on utilise un voltmètre en position :",
   "choix": [
    "AC",
    "DC",
    "AC+DC",
    "peu importe"
   ],
   "bonne": 1,
   "expl": "Position DC. En AC, la composante continue est bloquée et l'on mesurerait l'ondulation seule."
  },
  {
   "q": "Un signal a une valeur moyenne de 8 V et une composante alternative de valeur efficace 6 V. Sa valeur efficace totale vaut :",
   "choix": [
    "2 V",
    "10 V",
    "14 V",
    "48 V"
   ],
   "bonne": 1,
   "expl": "Les valeurs efficaces s'ajoutent quadratiquement : U_eff = √(8² + 6²) = √(64 + 36) = √(100) = 10 V. La réponse c additionne directement, ce qui est faux."
  },
  {
   "q": "Un voltmètre TRMS se distingue d'un voltmètre ordinaire parce qu'il :",
   "choix": [
    "est plus précis sur les sinusoïdes",
    "mesure la valeur efficace quelle que soit la forme du signal",
    "mesure aussi la fréquence",
    "ne nécessite pas de pile"
   ],
   "bonne": 1,
   "expl": "Un voltmètre ordinaire redresse le signal, en mesure la valeur moyenne et la multiplie par un coefficient valable pour une sinusoïde. Le TRMS, lui, élève réellement au carré : il est juste sur n'importe quelle forme d'onde. Sur une installation pleine de convertisseurs, c'est indispensable. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Décomposition d'un signal périodique » ?",
   "verso": "Tout signal périodique est la somme de sa composante continue, égale à sa valeur moyenne, et de sa composante alternative, de valeur moyenne nulle.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Valeur moyenne » ?",
   "verso": "La valeur moyenne d'un signal périodique, notée u, est l'aire algébrique sous la courbe sur une période, divisée par la période.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Valeur efficace, définition énergétique » ?",
   "verso": "La valeur efficace d'un signal périodique est la valeur de la tension continue qui dissiperait la même puissance dans la même résistance.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Fondamental et harmoniques » ?",
   "verso": "Un signal périodique alternatif se décompose en une somme de sinusoïdes : le <strong>fondamental</strong>, de fréquence f₁ égale à celle du signal, et les <strong>harmoniques</strong>, de fréquences multiples entiers de f₁.",
   "origine": "definition du cours"
  },
  {
   "type": "trou",
   "recto": "La valeur moyenne d'un signal périodique, notée u, est …… sur une période, divisée par la période.",
   "rep": "l'aire algébrique sous la courbe",
   "verso": "<strong>l'aire algébrique sous la courbe</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La valeur efficace d'un signal périodique est la valeur de …… qui dissiperait la même puissance dans la même résistance.",
   "rep": "la tension continue",
   "verso": "<strong>la tension continue</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un signal a une période de 2,0 ms. Sa fréquence vaut ……",
   "rep": "500 Hz",
   "verso": "<strong>500 Hz</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La composante continue d'un signal périodique, c'est ……",
   "rep": "sa valeur moyenne",
   "verso": "<strong>sa valeur moyenne</strong> — La composante continue est la valeur moyenne du signal. C'est elle que lit un voltmètre en position DC, et elle apparaît sur le spectre sous la forme d'une raie à 0 Hz.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un créneau varie entre 0 et 20 V avec un rapport cyclique α= 0,25. Sa valeur moyenne vaut ……",
   "rep": "5 V",
   "verso": "<strong>5 V</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pour ce même créneau, la valeur efficace vaut ……",
   "rep": "10 V",
   "verso": "<strong>10 V</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La relation U_eff = U_max/√2 s'applique ……",
   "rep": "aux seuls signaux sinusoïdaux",
   "verso": "<strong>aux seuls signaux sinusoïdaux</strong> — Uniquement pour un sinusoïdal. Appliquée à un créneau symétrique, où U_eff = U_max, elle donnerait une erreur de 30 %.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Sur un spectre d'amplitude, la raie située à 0 Hz représente ……",
   "rep": "la composante continue",
   "verso": "<strong>la composante continue</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le fondamental d'un signal est à 50 Hz. L'harmonique de rang 7 est à ……",
   "rep": "350 Hz",
   "verso": "<strong>350 Hz</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un spectre ne comporte qu'une seule raie, à 100 Hz. Le signal est ……",
   "rep": "sinusoïdal",
   "verso": "<strong>sinusoïdal</strong> — Une seule raie signifie une seule fréquence : le signal est une sinusoïde pure. Un créneau ou un triangle donneraient un fondamental et des harmoniques. Un signal continu n'aurait qu'une raie, mais à 0 Hz.",
   "origine": "bilan"
  }
 ]
};
