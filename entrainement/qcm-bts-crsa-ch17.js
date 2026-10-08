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
   "type": "definition",
   "recto": "Qu'appelle-t-on « Gain en décibels » ?",
   "verso": "Le gain d'un montage, exprimé en décibels, se calcule à partir du rapport des amplitudes : il vaut vingt fois le logarithme de ce rapport.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Fréquence de coupure » ?",
   "verso": "La fréquence de coupure d'un filtre est celle pour laquelle le gain a chuté de 3 dB sous la valeur du palier — autrement dit celle où l'amplitude est divisée par √2.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Quantum, ou résolution » ?",
   "verso": "Le quantum d'un convertisseur est la plus petite variation de tension qu'il peut distinguer. Il vaut la pleine échelle divisée par le nombre de valeurs possibles.",
   "origine": "definition du cours"
  },
  {
   "type": "trou",
   "recto": "Sans lui, le nombre obtenu ne correspondrait à …….",
   "rep": "aucun instant précis",
   "verso": "<strong>aucun instant précis</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "L'échantillonneur bloqueur …… pendant toute la durée de la conversion.",
   "rep": "maintient la tension d'entrée constante",
   "verso": "<strong>maintient la tension d'entrée constante</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>bande passante</strong> est l'intervalle de fréquences pour lequel le gain reste au-dessus de …….",
   "rep": "-3 dB",
   "verso": "<strong>-3 dB</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Sa sortie ne varie donc que <strong>par paliers</strong> : le plus petit d'entre eux est, comme pour le CAN, le …… q.",
   "rep": "quantum",
   "verso": "<strong>quantum</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La fréquence de coupure d'un filtre est celle pour laquelle le gain a chuté de 3 dB sous la valeur du palier — autrement dit celle où l'amplitude est …….",
   "rep": "divisée par √2",
   "verso": "<strong>divisée par √2</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un filtre trie les composantes d'un signal selon leur ……",
   "rep": "fréquence",
   "verso": "<strong>fréquence</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pour éliminer un parasite à 50 Hz d'un signal quasi continu, on utilise un filtre ……",
   "rep": "passe-bas",
   "verso": "<strong>passe-bas</strong> — L'utile est en bas du spectre, le parasite en haut : on garde le bas.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un gain de -20 dB signifie que l'amplitude est ……",
   "rep": "divisée par 10",
   "verso": "<strong>divisée par 10</strong> — 10^-20/20 = 0,1. La réponse c est le piège : les décibels ne se lisent pas comme un facteur de division.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La fréquence de coupure d'un filtre se lit à ……",
   "rep": "-3 dB sous le palier",
   "verso": "<strong>-3 dB sous le palier</strong> — C'est la définition : l'amplitude y est divisée par √2. La réponse d est une confusion fréquente — la courbe est en décibels, pas en amplitude.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Deux signaux de même fréquence peuvent être séparés par ……",
   "rep": "aucun filtre",
   "verso": "<strong>aucun filtre</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le quantum d'un CAN 12 bits de pleine échelle 10 V vaut environ ……",
   "rep": "2,4 mV",
   "verso": "<strong>2,4 mV</strong> — 10/4096 = 2,44×10⁻³ V. La réponse a divise par 12 au lieu de 2¹².",
   "origine": "bilan"
  }
 ],
 "cartes_figees": false
};
