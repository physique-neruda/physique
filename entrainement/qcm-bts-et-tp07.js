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
   "type": "retenir",
   "recto": "Décomposition de Fourier — qu'y a-t-il à retenir ?",
   "verso": "Tout signal périodique de fréquence f peut s'écrire comme la somme d'une valeur moyenne et de sinusoïdes de fréquences f, 2f, 3f La sinusoïde de fréquence f est le fondamental ; celle de fréquence n f est l'harmonique de rang n.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Sur le réseau à 50 Hz, l'harmonique de rang 3 est à …….",
   "rep": "150 Hz",
   "verso": "<strong>150 Hz</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Les harmoniques de rang 3 (et multiples de 3), eux, sont en phase sur les trois phases : ils …….",
   "rep": "s'additionnent",
   "verso": "<strong>s'additionnent</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La tension étant sinusoïdale, seul le …… du courant transporte de la puissance active et réactive : P = V I₁cosφ₁ et Q = V I₁sinφ₁.",
   "rep": "fondamental",
   "verso": "<strong>fondamental</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Le fondamental d'un courant périodique à 50 Hz a pour fréquence ……",
   "rep": "50 Hz",
   "verso": "<strong>50 Hz</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "L'harmonique de rang 5 sur le réseau a pour fréquence ……",
   "rep": "250 Hz",
   "verso": "<strong>250 Hz</strong> — 5×50.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un courant symétrique ne contient que ……",
   "rep": "des rangs impairs",
   "verso": "<strong>des rangs impairs</strong> — Symétrie entre les alternances.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La valeur efficace d'un courant déformé se calcule par ……",
   "rep": "I² = I₁² + I₃² + ds/dt",
   "verso": "<strong>I² = I₁² + I₃² + ds/dt</strong> — On additionne les carrés.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un courant sinusoïdal a un THD ……",
   "rep": "nul",
   "verso": "<strong>nul</strong> — Pas d'harmoniques.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Avec une tension sinusoïdale, la puissance active est transportée par ……",
   "rep": "le fondamental seulement",
   "verso": "<strong>le fondamental seulement</strong> — Seul le fondamental a la même fréquence que la tension.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En régime déformé ……",
   "rep": "S² = P² + Q² + D²",
   "verso": "<strong>S² = P² + Q² + D²</strong> — D est la puissance déformante.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le facteur de puissance F d'un récepteur non linéaire est ……",
   "rep": "plus petit que cosφ₁",
   "verso": "<strong>plus petit que cosφ₁</strong> — D augmente S sans changer P.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une batterie de condensateurs compense ……",
   "rep": "Q seulement",
   "verso": "<strong>Q seulement</strong> — Elle n'a aucun effet sur D.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Les rangs harmoniques qui s'additionnent dans le neutre sont ……",
   "rep": "les multiples de 3",
   "verso": "<strong>les multiples de 3</strong> — Ils sont en phase sur les trois phases.",
   "origine": "bilan"
  }
 ],
 "cartes_figees": false
};
