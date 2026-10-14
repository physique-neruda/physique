/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 15 — Analyse du signal
   Le bilan vient de CRSA_ch15_bilan.tex, les cartes des \trou{} de
   CRSA_ch15_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "15",
 "cle": "ch15",
 "etiquette": "Chapitre 15",
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
    "2000 Hz",
    "500 Hz"
   ],
   "bonne": 3,
   "expl": "f = 1/T = 1/(2,0×10⁻³) = 500 Hz. La réponse « 2 Hz » est le piège classique : oublier de convertir les millisecondes en secondes."
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
    "la valeur de la tension continue qui dissiperait la même puissance",
    "la moyenne des valeurs absolues",
    "l'amplitude divisée par √2",
    "la moitié de la valeur crête à crête"
   ],
   "bonne": 0,
   "expl": "C'est la définition énergétique, la seule valable pour tout signal, et celle que le programme demande de savoir énoncer. La réponse « la valeur de la tension continue qui dissiperait la même puissance » est un résultat, et seulement pour un sinusoïdal."
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
   "expl": "U_eff = U_max√(α) = 20 × √(0,25) = 20 × 0,5 = 10 V. La réponse « 5 V » confond avec la valeur moyenne — c'est l'erreur la plus fréquente du chapitre : on écrit α au lieu de √(α)."
  },
  {
   "q": "La relation U_eff = U_max/√2 s'applique :",
   "choix": [
    "à tout signal périodique",
    "aux signaux de valeur moyenne nulle",
    "aux seuls créneaux",
    "aux seuls signaux sinusoïdaux"
   ],
   "bonne": 3,
   "expl": "Uniquement pour un sinusoïdal. Appliquée à un créneau symétrique, où U_eff = U_max, elle donnerait une erreur de 30 %."
  },
  {
   "q": "Sur un spectre d'amplitude, la raie située à 0 Hz représente :",
   "choix": [
    "le fondamental",
    "le premier harmonique",
    "la composante continue",
    "une erreur de mesure"
   ],
   "bonne": 2,
   "expl": "La raie à fréquence nulle est la composante continue, et sa hauteur est la valeur moyenne. Le fondamental, lui, est la première raie de fréquence non nulle."
  },
  {
   "q": "Le fondamental d'un signal est à 50 Hz. L'harmonique de rang 7 est à :",
   "choix": [
    "350 Hz",
    "300 Hz",
    "57 Hz",
    "700 Hz"
   ],
   "bonne": 0,
   "expl": "f_n = n f₁ = 7 × 50 = 350 Hz. La réponse « 350 Hz » ajoute au lieu de multiplier ; la réponse « 700 Hz » confond le rang avec un facteur appliqué à la fréquence entière."
  },
  {
   "q": "Un spectre ne comporte qu'une seule raie, à 100 Hz. Le signal est :",
   "choix": [
    "sinusoïdal",
    "continu",
    "en créneau",
    "triangulaire"
   ],
   "bonne": 0,
   "expl": "Une seule raie signifie une seule fréquence : le signal est une sinusoïde pure. Un créneau ou un triangle donneraient un fondamental et des harmoniques. Un signal continu n'aurait qu'une raie, mais à 0 Hz."
  },
  {
   "q": "Pour mesurer la valeur moyenne d'un signal, on utilise un voltmètre en position :",
   "choix": [
    "AC",
    "peu importe",
    "AC+DC",
    "DC"
   ],
   "bonne": 3,
   "expl": "Position DC. En AC, la composante continue est bloquée et l'on mesurerait l'ondulation seule."
  },
  {
   "q": "Un signal a une valeur moyenne de 8 V et une composante alternative de valeur efficace 6 V. Sa valeur efficace totale vaut :",
   "choix": [
    "2 V",
    "14 V",
    "10 V",
    "48 V"
   ],
   "bonne": 2,
   "expl": "Les valeurs efficaces s'ajoutent quadratiquement : U_eff = √(8² + 6²) = √(64 + 36) = √(100) = 10 V. La réponse « 10 V » additionne directement, ce qui est faux."
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
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>La fréquence se lit-elle sur un chronogramme ?",
   "verso": "Non : on lit la <b>période T</b> et on calcule <b>f = 1/T</b> (attention ms → s).",
   "origine": "Cours §1 Chronogramme"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>De quoi se compose tout signal périodique ?",
   "verso": "D'une <b>composante continue</b> (sa valeur moyenne) + une <b>composante alternative</b> (de valeur moyenne nulle).",
   "origine": "Cours §2 Continue et alternative"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la valeur moyenne d'un signal périodique. Raccourci si le motif est symétrique ?",
   "verso": "L'<b>aire algébrique</b> sous la courbe sur une période, divisée par la période. Motif symétrique : c'est l'<b>axe de symétrie</b>.<br>Créneau : ⟨u⟩ = α U<sub>max</sub>.",
   "origine": "Cours §3 La valeur moyenne"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer la définition de la valeur efficace.",
   "verso": "La valeur de la <b>tension continue</b> qui dissiperait <b>la même puissance</b> dans la même résistance.",
   "origine": "Cours §4 La valeur efficace"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>U<sub>eff</sub> = U<sub>max</sub>/√2 : est-ce valable pour tout signal ?",
   "verso": "<b>Non</b> : seulement pour un signal <b>sinusoïdal</b>. Faux pour un créneau.",
   "origine": "Cours §4 La valeur efficace"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation entre valeur efficace totale, valeur moyenne et valeur efficace de la composante alternative ?",
   "verso": "<b>U<sub>eff</sub>² = ⟨u⟩² + U<sub>eff,alt</sub>²</b> (valable pour tout signal périodique).",
   "origine": "Cours §4 Relation générale"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que le fondamental ? les harmoniques ?",
   "verso": "<b>Fondamental</b> : sinusoïde de fréquence <b>f<sub>1</sub></b> = celle du signal.<br><b>Harmoniques</b> : fréquences <b>f<sub>n</sub> = n × f<sub>1</sub></b>.",
   "origine": "Cours §5 Fondamental et harmoniques"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sur un spectre d'amplitude, que représente la raie à 0 Hz ? la première raie non nulle ?",
   "verso": "Raie à 0 Hz : la <b>composante continue</b> (valeur moyenne).<br>Première raie non nulle : le <b>fondamental</b>.",
   "origine": "Cours §5 Le spectre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelle position du voltmètre pour une valeur moyenne ? pour la vraie valeur efficace ?",
   "verso": "Valeur moyenne : <b>DC</b>.<br>Valeur efficace vraie : <b>AC+DC</b> sur un voltmètre <b>TRMS</b> (AC suffit sans composante continue).",
   "origine": "Cours §6 Mesurer"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment déterminer une valeur moyenne sur un chronogramme ?",
   "verso": "1. Repérer une <b>période</b>.<br>2. Chercher une <b>symétrie</b> horizontale (axe = valeur moyenne).<br>3. Sinon, découper en rectangles/triangles, aires algébriques ÷ T.<br>4. Contrôler : entre u<sub>min</sub> et u<sub>max</sub>.",
   "origine": "Cours §3 Méthode — Valeur moyenne"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>⟨u⟩ = 12 V et composante alternative de valeur efficace 5,66 V. Comment trouver U<sub>eff</sub> ?",
   "verso": "1. U<sub>eff</sub>² = ⟨u⟩² + U<sub>eff,alt</sub>².<br>2. = 12² + 5,66² = 176.<br>3. U<sub>eff</sub> = √176 = <b>13,3 V</b>.",
   "origine": "Cours §4 Relation générale"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment exploiter un spectre d'amplitude ?",
   "verso": "1. Raie à <b>0 Hz</b> : valeur moyenne.<br>2. <b>Fondamental</b> : première raie non nulle.<br>3. <b>Rang</b> d'un harmonique = f / f<sub>1</sub> (250 Hz avec f<sub>1</sub> = 50 Hz → rang 5).<br>4. Lire les amplitudes (vérifier l'unité de l'axe).",
   "origine": "Cours §5 Méthode — Exploiter un spectre"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment répondre à « indiquer le réglage du voltmètre » ?",
   "verso": "1. Grandeur demandée : moyenne ou efficace ?<br>2. Moyenne → <b>DC</b>.<br>3. Efficace vraie → <b>AC+DC</b>, appareil <b>TRMS</b>.<br>4. Nommer l'appareil <b>et</b> sa position.",
   "origine": "Cours §6 Méthode — Réglage du voltmètre"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
