/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 17 — Filtrage et conversion
   Le bilan vient de CRSA_ch17_bilan.tex, les cartes des \trou{} de
   CRSA_ch17_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "17",
 "cle": "ch17",
 "etiquette": "Chapitre 17",
 "titre": "Filtrage et conversion",
 "niveau": "BTS CRSA",
 "prerequis": [],
 "bilan": [
  {
   "q": "Un filtre trie les composantes d'un signal selon leur :",
   "choix": [
    "amplitude",
    "fréquence",
    "valeur moyenne",
    "phase"
   ],
   "bonne": 1,
   "expl": "C'est la seule chose qu'un filtre sache faire. Il ne distingue pas un « bon » d'un « mauvais » signal : il distingue des fréquences."
  },
  {
   "q": "Pour éliminer un parasite à 50 Hz d'un signal quasi continu, on utilise un filtre :",
   "choix": [
    "passe-haut",
    "passe-bande",
    "passe-bas",
    "de n'importe quel type"
   ],
   "bonne": 2,
   "expl": "L'utile est en bas du spectre, le parasite en haut : on garde le bas."
  },
  {
   "q": "Un gain de -20 dB signifie que l'amplitude est :",
   "choix": [
    "divisée par 2",
    "multipliée par 10",
    "divisée par 20",
    "divisée par 10"
   ],
   "bonne": 3,
   "expl": "10^-20/20 = 0,1. La réponse « divisée par 20 » est le piège : les décibels ne se lisent pas comme un facteur de division."
  },
  {
   "q": "La fréquence de coupure d'un filtre se lit à :",
   "choix": [
    "-3 dB sous le palier",
    "0 dB",
    "-20 dB",
    "mi-hauteur de la courbe"
   ],
   "bonne": 0,
   "expl": "C'est la définition : l'amplitude y est divisée par √2. La réponse « mi-hauteur de la courbe » est une confusion fréquente — la courbe est en décibels, pas en amplitude."
  },
  {
   "q": "Sur l'axe des fréquences d'un diagramme de Bode, deux intervalles égaux correspondent à :",
   "choix": [
    "une même différence de fréquence",
    "une même multiplication de la fréquence",
    "un même gain",
    "une même période"
   ],
   "bonne": 1,
   "expl": "L'échelle est logarithmique : d'une graduation à la suivante, on multiplie par dix. C'est l'erreur de lecture la plus fréquente du chapitre."
  },
  {
   "q": "Un filtre agissant sur un signal à trois raies donne en sortie :",
   "choix": [
    "une seule raie",
    "des raies à de nouvelles fréquences",
    "les mêmes raies, aux mêmes fréquences, d'amplitudes modifiées",
    "les mêmes raies, décalées en fréquence"
   ],
   "bonne": 2,
   "expl": "Un filtre ne crée, ne supprime ni ne déplace aucune fréquence : il ne modifie que les amplitudes."
  },
  {
   "q": "Deux signaux de même fréquence peuvent être séparés par :",
   "choix": [
    "un passe-bas",
    "un passe-bande étroit",
    "un coupe-bande",
    "aucun filtre"
   ],
   "bonne": 3,
   "expl": "Aucun filtre, puisqu'un filtre ne trie que par fréquence. Il faut agir autrement — à la source, par exemple."
  },
  {
   "q": "Le quantum d'un CAN 12 bits de pleine échelle 10 V vaut environ :",
   "choix": [
    "2,4 mV",
    "0,83 V",
    "24 mV",
    "0,24 mV"
   ],
   "bonne": 0,
   "expl": "10/4096 = 2,44×10⁻³ V. La réponse « 2,4 mV » divise par 12 au lieu de 2¹²."
  },
  {
   "q": "Ajouter un bit à un CAN :",
   "choix": [
    "double le quantum",
    "double la pleine échelle",
    "divise le quantum par deux",
    "ne change rien"
   ],
   "bonne": 2,
   "expl": "Chaque bit double le nombre de valeurs, donc divise la largeur de chaque marche par deux."
  },
  {
   "q": "À nombre de bits égal, réduire la pleine échelle d'un CAN :",
   "choix": [
    "dégrade la résolution",
    "fait saturer le CAN dans tous les cas",
    "n'a aucun effet",
    "améliore la résolution"
   ],
   "bonne": 3,
   "expl": "Les 2ⁿ marches se partagent un intervalle plus petit : chacune est plus fine. C'est le levier gratuit — à condition que le signal ne dépasse pas la nouvelle pleine échelle."
  },
  {
   "q": "L'échantillonneur bloqueur sert à :",
   "choix": [
    "filtrer le signal",
    "maintenir la tension constante pendant la conversion",
    "amplifier le signal",
    "augmenter le nombre de bits"
   ],
   "bonne": 1,
   "expl": "Sans lui, la tension bouge pendant la conversion et le nombre obtenu ne correspond à aucun instant précis."
  },
  {
   "q": "Un CNA 10 bits de pleine échelle 10 V reçoit N = 512. Il délivre environ :",
   "choix": [
    "5 V",
    "0,5 V",
    "10 V",
    "51,2 V"
   ],
   "bonne": 0,
   "expl": "q = 10/1024 9,8 mV et u = q × 512 5 V : la moitié des codes donne la moitié de la pleine échelle. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que fait un filtre ? À quelle condition peut-il séparer deux signaux ?",
   "verso": "Il <b>trie les composantes selon leur fréquence</b>. Il ne sépare deux signaux que si leurs <b>fréquences diffèrent</b>.",
   "origine": "Cours §1 Pourquoi filtrer"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quel type de filtre si l'utile est en bas du spectre ? en haut ? au milieu ?",
   "verso": "En bas : <b>passe-bas</b> ; en haut : <b>passe-haut</b> ; encadré : <b>passe-bande</b>. Fréquence de coupure <b>entre</b> les groupes de raies.",
   "origine": "Cours §1 Le gabarit"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formule du gain en décibels ? Formule inverse ?",
   "verso": "<b>G = 20 log(u<sub>s</sub>/u<sub>e</sub>)</b> ; <b>u<sub>s</sub>/u<sub>e</sub> = 10<sup>G/20</sup></b>.<br>Repères : −3 dB → 0,71 ; −20 dB → 0,10. G &lt; 0 : atténuation.",
   "origine": "Cours §2 Le gain en décibels"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la fréquence de coupure d'un filtre. Qu'est-ce que la bande passante ?",
   "verso": "f<sub>c</sub> : le gain a chuté de <b>3 dB</b> sous le palier (amplitude ÷ √2).<br>Bande passante : fréquences où G &gt; −3 dB (passe-bas : de 0 à f<sub>c</sub>).",
   "origine": "Cours §3 Fréquence de coupure"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quel piège sur l'axe des fréquences d'un diagramme de Bode ?",
   "verso": "Il est <b>logarithmique</b> : chaque intervalle = × 10. Entre 10 et 100 Hz, le milieu vaut ≈ <b>32 Hz</b>, pas 55.",
   "origine": "Cours §3 Axe logarithmique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Un filtre peut-il créer ou déplacer une fréquence ?",
   "verso": "<b>Non</b> : mêmes raies aux mêmes fréquences ; seules leurs <b>hauteurs</b> changent.",
   "origine": "Cours §4 Spectre de sortie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir le quantum (résolution) d'un CAN. Formule ?",
   "verso": "La plus petite variation de tension distinguée : <b>q = PE / 2<sup>n</sup></b> (PE pleine échelle, n bits).",
   "origine": "Cours §5 Quantum d'un CAN"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quels sont les deux leviers pour améliorer la résolution d'un CAN ?",
   "verso": "<b>Ajouter des bits</b> (chaque bit divise q par 2) ou <b>réduire la pleine échelle</b>. Inutile au-delà de la précision du capteur.",
   "origine": "Cours §5 Améliorer la résolution"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rôle de l'échantillonneur bloqueur ?",
   "verso": "Il <b>maintient la tension constante</b> pendant la conversion, pour que le nombre corresponde à un <b>instant précis</b>.",
   "origine": "Cours §6 Échantillonneur bloqueur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que fait un CNA ? Tension de sortie ? Caractéristiques à lire sur sa documentation ?",
   "verso": "Il transforme un nombre N en tension <b>u = q × N</b> (par paliers).<br>Doc : <b>résolution</b>, <b>non-linéarité</b>, <b>temps de conversion</b>.",
   "origine": "Cours §7 Le CNA"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment choisir le gabarit d'un filtre ?",
   "verso": "1. Lire le <b>spectre d'entrée</b>.<br>2. Repérer raies <b>utiles</b> et raies à éliminer.<br>3. En déduire passe-bas, passe-haut ou passe-bande.<br>4. Placer f<sub>c</sub> <b>entre</b> les deux groupes.",
   "origine": "Cours §1 Méthode — Choisir le gabarit"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment déterminer graphiquement la fréquence de coupure sur un diagramme de Bode ?",
   "verso": "1. Gain du <b>palier</b>.<br>2. Descendre de <b>3 dB</b>, tracer l'horizontale.<br>3. Intersection avec la courbe, descendre sur l'axe.<br>4. Lire (échelle <b>log</b>).<br>5. <b>Laisser les traits</b>.",
   "origine": "Cours §3 Méthode — f<sub>c</sub> à −3 dB"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment construire le spectre de sortie d'un filtre ?",
   "verso": "1. Pour chaque raie d'entrée :<br>2. Lire le gain G du filtre à sa fréquence.<br>3. Rapport = 10<sup>G/20</sup>.<br>4. Nouvelle amplitude = amplitude × rapport, <b>même fréquence</b>.",
   "origine": "Cours §4 Méthode — Spectre de sortie"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>CAN 12 bits, pleine échelle 10,0 V, chaîne à 0,10 V/°C. Comment trouver la résolution en °C ?",
   "verso": "1. q = 10,0 / 2<sup>12</sup> = 10,0/4096 = <b>2,44 mV</b>.<br>2. En °C : 2,44 × 10<sup>−3</sup> / 0,10 = <b>0,024 °C</b>.",
   "origine": "Cours §5 Exemple — Quantum"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
