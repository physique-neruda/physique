/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · TP 7 — Le régime non sinusoïdal
   Le bilan vient de tp07_bilan.tex, les cartes des \trou{} de
   tp07_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "7",
 "cle": "tp07",
 "etiquette": "TP 7",
 "titre": "Le régime non sinusoïdal",
 "niveau": "BTS ET",
 "prerequis": [],
 "bilan": [
  {
   "q": "Le fondamental d'un courant périodique à 50 Hz a pour fréquence :",
   "choix": [
    "0 Hz",
    "100 Hz",
    "150 Hz",
    "50 Hz"
   ],
   "bonne": 3,
   "expl": "Les harmoniques sont à n×50 Hz."
  },
  {
   "q": "L'harmonique de rang 5 sur le réseau a pour fréquence :",
   "choix": [
    "55 Hz",
    "100 Hz",
    "250 Hz",
    "500 Hz"
   ],
   "bonne": 2,
   "expl": "5×50."
  },
  {
   "q": "Un courant symétrique ne contient que :",
   "choix": [
    "des rangs impairs",
    "des rangs pairs",
    "le fondamental",
    "une composante continue"
   ],
   "bonne": 0,
   "expl": "Symétrie entre les alternances."
  },
  {
   "q": "La valeur efficace d'un courant déformé se calcule par :",
   "choix": [
    "I = I₁ + I₃ + ds/dt",
    "I² = I₁² + I₃² + ds/dt",
    "I = I₁",
    "I = THD× I₁"
   ],
   "bonne": 1,
   "expl": "On additionne les carrés."
  },
  {
   "q": "Un courant sinusoïdal a un THD :",
   "choix": [
    "de 100 %",
    "infini",
    "de 50 %",
    "nul"
   ],
   "bonne": 3,
   "expl": "Pas d'harmoniques."
  },
  {
   "q": "Avec une tension sinusoïdale, la puissance active est transportée par :",
   "choix": [
    "le rang 3 seulement",
    "tous les harmoniques",
    "le fondamental seulement",
    "la composante continue"
   ],
   "bonne": 2,
   "expl": "Seul le fondamental a la même fréquence que la tension."
  },
  {
   "q": "En régime déformé :",
   "choix": [
    "S² = P² + Q² + D²",
    "S = P + Q + D",
    "S² = P² + Q²",
    "S = P"
   ],
   "bonne": 0,
   "expl": "D est la puissance déformante."
  },
  {
   "q": "Le facteur de puissance F d'un récepteur non linéaire est :",
   "choix": [
    "égal à cosφ₁",
    "plus petit que cosφ₁",
    "toujours nul",
    "plus grand que cosφ₁"
   ],
   "bonne": 1,
   "expl": "D augmente S sans changer P."
  },
  {
   "q": "Une batterie de condensateurs compense :",
   "choix": [
    "Q seulement",
    "D seulement",
    "P",
    "Q et D"
   ],
   "bonne": 0,
   "expl": "Elle n'a aucun effet sur D."
  },
  {
   "q": "Les rangs harmoniques qui s'additionnent dans le neutre sont :",
   "choix": [
    "les rangs pairs",
    "les rangs 5 et 7",
    "les multiples de 3",
    "aucun"
   ],
   "bonne": 2,
   "expl": "Ils sont en phase sur les trois phases."
  },
  {
   "q": "Pour mesurer correctement un courant déformé, il faut une pince :",
   "choix": [
    "à aiguille",
    "TRMS",
    "non TRMS",
    "en position DC"
   ],
   "bonne": 1,
   "expl": "Les autres sont étalonnées pour une sinusoïde."
  },
  {
   "q": "Un récepteur linéaire parmi les suivants :",
   "choix": [
    "un chargeur de téléphone",
    "un luminaire LED",
    "un variateur de vitesse",
    "un radiateur"
   ],
   "bonne": 3,
   "expl": "Une résistance absorbe un courant sinusoïdal."
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment se décompose un signal périodique de fréquence f ? Qu'est-ce que le fondamental ? un harmonique de rang n ?",
   "verso": "Valeur moyenne + sinusoïdes de fréquences f, 2f, 3f…<br><b>Fondamental</b> : la composante à f.<br><b>Harmonique de rang n</b> : à n·f (rang 3 sur le réseau : <b>150 Hz</b>).",
   "origine": "Cours §1 Décomposition de Fourier"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que représente le spectre d'un courant ? Quels rangs pour un signal à alternances symétriques ?",
   "verso": "La <b>valeur efficace de chaque harmonique</b> en fonction de son rang.<br>Alternances positive et négative symétriques → rangs <b>impairs</b> seulement.",
   "origine": "Cours §2 Le spectre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Valeur efficace totale à partir des harmoniques ?",
   "verso": "<b>I² = I<sub>1</sub>² + I<sub>2</sub>² + I<sub>3</sub>² + …</b> (somme des carrés, pas des valeurs).",
   "origine": "Cours §3 Valeur efficace d'un signal déformé"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définition du THD ? Que vaut-il pour un courant sinusoïdal ?",
   "verso": "<b>THD = √(I<sub>2</sub>² + I<sub>3</sub>² + …) / I<sub>1</sub></b> : les harmoniques comparés au fondamental.<br>Courant sinusoïdal : THD <b>nul</b>.",
   "origine": "Cours §3 Taux de distorsion harmonique"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>I<sub>1</sub> = 0,50 A, I<sub>3</sub> = 0,40 A, I<sub>5</sub> = 0,25 A, I<sub>7</sub> = 0,12 A : I et THD ?",
   "verso": "1. I = √(0,50² + 0,40² + 0,25² + 0,12²) = <b>0,70 A</b>.<br>2. THD = √(0,40² + 0,25² + 0,12²) / 0,50 = <b>97 %</b>.<br>3. Les harmoniques pèsent presque autant que le fondamental.",
   "origine": "Cours §3 Exploiter un spectre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Tension sinusoïdale, courant déformé : quelle partie du courant porte P et Q ? Que vaut S ?",
   "verso": "Seul le <b>fondamental</b> : <b>P = V I<sub>1</sub> cos φ<sub>1</sub></b>, <b>Q = V I<sub>1</sub> sin φ<sub>1</sub></b>.<br>Mais <b>S = V I</b> avec le courant total.",
   "origine": "Cours §4 Puissances en non sinusoïdal"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que la puissance déformante D ? Comment se compare F = P/S à cos φ<sub>1</sub> ?",
   "verso": "L'écart dû aux harmoniques : <b>S² = P² + Q² + D²</b> (D en var).<br>Le facteur de puissance <b>F = P/S est plus petit que cos φ<sub>1</sub></b>.",
   "origine": "Cours §4 Puissance déformante"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Même alimentation sous 230 V, cos φ<sub>1</sub> = 0,98 (I<sub>1</sub> = 0,50 A, I = 0,70 A) : P, Q, S, D, F ?",
   "verso": "1. P = 230 × 0,50 × 0,98 = <b>113 W</b> ; Q = 230 × 0,50 × 0,20 = <b>23 var</b>.<br>2. S = 230 × 0,70 = <b>160 VA</b>.<br>3. D = √(S² − P² − Q²) ≈ <b>112 var</b>.<br>4. F = 113 / 160 = <b>0,70</b>, alors que cos φ<sub>1</sub> = 0,98.",
   "origine": "Cours §4 Calculer les puissances"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Un condensateur de compensation corrige-t-il la puissance déformante ?",
   "verso": "<b>Non</b>, il ne corrige que <b>Q</b>. Pire, il peut <b>résonner</b> avec l'inductance du réseau à la fréquence d'un harmonique.",
   "origine": "Cours §4 Le condensateur ne corrige pas D"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>D'où viennent les harmoniques ? Quelles conséquences ?",
   "verso": "Des récepteurs <b>non linéaires</b> : redresseurs à condensateur (alimentations, variateurs, chargeurs), LED, fluorescent.<br>Conséquences : <b>échauffements</b> (câbles, transformateurs), déclenchements intempestifs, perturbations, <b>surcharge du neutre</b>.",
   "origine": "Cours §5 Origine et conséquences des harmoniques"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>En triphasé équilibré, pourquoi le neutre peut-il être surchargé ? Ordre de grandeur ?",
   "verso": "Les fondamentaux s'annulent, mais les harmoniques de <b>rang 3 et multiples</b> sont <b>en phase</b> sur les trois phases et s'additionnent : <b>I<sub>N</sub> ≈ 3 I<sub>3</sub></b>.<br>Le neutre peut dépasser le courant de phase : à dimensionner en conséquence.",
   "origine": "Cours §6 Le courant dans le neutre"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>20 alimentations par phase (I = 0,70 A, I<sub>3</sub> = 0,40 A chacune) : courant de phase et de neutre ?",
   "verso": "Phase : 20 × 0,70 = <b>14 A</b>.<br>Neutre : 3 × 20 × 0,40 = <b>24 A</b>, presque deux fois plus qu'une phase.",
   "origine": "Cours §6 Vingt ordinateurs par phase"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
