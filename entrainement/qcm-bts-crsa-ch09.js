/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 9 — Le transformateur
   Le bilan vient de CRSA_ch09_bilan.tex, les cartes des \trou{} de
   CRSA_ch09_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "9",
 "titre": "Le transformateur",
 "niveau": "BTS CRSA",
 "prerequis": [],
 "bilan": [
  {
   "q": "Un transformateur est un convertisseur :",
   "choix": [
    "continu continu",
    "alternatif continu",
    "alternatif alternatif",
    "continu alternatif"
   ],
   "bonne": 2,
   "expl": "Il entre de l'alternatif, il sort de l'alternatif. Le redressement est le travail du chapitre 10."
  },
  {
   "q": "Un transformateur alimenté sous 50 Hz délivre au secondaire une tension de fréquence :",
   "choix": [
    "25 Hz",
    "50 Hz",
    "100 Hz",
    "cela dépend de m"
   ],
   "bonne": 1,
   "expl": "Le transformateur ne touche jamais à la fréquence."
  },
  {
   "q": "Le rapport de transformation vaut :",
   "choix": [
    "N₁/N₂",
    "U₁/U₂",
    "U₂/U₁",
    "I₂/I₁"
   ],
   "bonne": 2,
   "expl": "m = U₂/U₁ = N₂/N₁ = I₁/I₂. Les réponses a et b sont les mêmes rapports à l'envers : c'est le piège habituel."
  },
  {
   "q": "Un transformateur 230 V / 24 V a un rapport de transformation d'environ :",
   "choix": [
    "9,58",
    "0,104",
    "206",
    "1,00"
   ],
   "bonne": 1,
   "expl": "24/230 = 0,104."
  },
  {
   "q": "Si m > 1, le transformateur est :",
   "choix": [
    "abaisseur",
    "élévateur",
    "d'isolement",
    "en court-circuit"
   ],
   "bonne": 1,
   "expl": "m > 1 signifie U₂ > U₁."
  },
  {
   "q": "Pour un transformateur parfait, les courants vérifient :",
   "choix": [
    "I₂/I₁ = m",
    "I₁/I₂ = m",
    "I₁ = I₂",
    "I₁ I₂ = m"
   ],
   "bonne": 1,
   "expl": "Les courants sont dans le rapport inverse des tensions."
  },
  {
   "q": "Un transformateur parfait conserve :",
   "choix": [
    "la tension",
    "le courant",
    "la puissance apparente",
    "le nombre de spires"
   ],
   "bonne": 2,
   "expl": "S₁ = S₂, soit U₁ I₁ = U₂ I₂."
  },
  {
   "q": "La plaque indique 24 V·A et 24 V au secondaire. L'intensité nominale au secondaire vaut :",
   "choix": [
    "0,104 A",
    "1,00 A",
    "24 A",
    "576 A"
   ],
   "bonne": 1,
   "expl": "I_2N = S/U₂ = 24/24 = 1,00 A."
  },
  {
   "q": "On branche le primaire d'un transformateur sur une batterie de 24 V continu. Au secondaire, on lit :",
   "choix": [
    "24 V",
    "230 V",
    "une tension nulle",
    "une tension alternative"
   ],
   "bonne": 2,
   "expl": "En continu le flux est constant, donc aucune tension induite. Et le primaire, réduit à sa résistance, grille rapidement."
  },
  {
   "q": "Les deux enroulements d'un transformateur sont :",
   "choix": [
    "reliés par un fil",
    "isolés électriquement, couplés magnétiquement",
    "en série",
    "en parallèle"
   ],
   "bonne": 1,
   "expl": "C'est l'isolement galvanique — une fonction recherchée en soi."
  },
  {
   "q": "Un oscilloscope montre au secondaire une sinusoïde de valeur maximale 34 V. Un voltmètre branché aux mêmes bornes afficherait :",
   "choix": [
    "34 V",
    "48 V",
    "24 V",
    "0 V"
   ],
   "bonne": 2,
   "expl": "U = U_max/√2 = 34/1,414 = 24 V. Le voltmètre affiche l'efficace, l'oscilloscope montre le maximum."
  },
  {
   "q": "Pour mesurer le rapport de transformation, le secondaire doit être :",
   "choix": [
    "ouvert",
    "en court-circuit",
    "chargé au nominal",
    "peu importe"
   ],
   "bonne": 0,
   "expl": "À vide, le courant primaire est négligeable : aucune chute de tension ne fausse la lecture. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Isolement galvanique » ?",
   "verso": "Les deux enroulements ne sont jamais reliés électriquement. L'énergie passe de l'un à l'autre par le flux magnétique commun au circuit de fer.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Pourquoi l'alternatif est indispensable — qu'y a-t-il à retenir ?",
   "verso": "Une tension n'apparaît au secondaire que si le flux varie. En continu, le flux est constant : la tension au secondaire est nulle, et le primaire, réduit à sa résistance, grille.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Le transformateur réel — qu'y a-t-il à retenir ?",
   "verso": "Il présente des <strong>pertes fer</strong> dans le circuit magnétique et des <strong>pertes cuivre</strong> dans les enroulements. Son rendement η= P₂/P₁ dépasse couramment 95 %. En charge, la tension au secondaire chute de quelques pour cent.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Une tension n'apparaît au secondaire que si le flux …….",
   "verso": "<strong>varie</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un transformateur parfait …… : S₁ = S₂, soit U₁ I₁ = U₂ I₂.",
   "verso": "<strong>conserve la puissance apparente</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En continu, le flux est constant : la tension au secondaire est nulle, et le primaire, réduit à sa résistance, …….",
   "verso": "<strong>grille</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un transformateur est un convertisseur ……",
   "verso": "<strong>alternatif alternatif</strong> — Il entre de l'alternatif, il sort de l'alternatif. Le redressement est le travail du chapitre 10.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un transformateur alimenté sous 50 Hz délivre au secondaire une tension de fréquence ……",
   "verso": "<strong>50 Hz</strong> — Le transformateur ne touche jamais à la fréquence.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le rapport de transformation vaut ……",
   "verso": "<strong>U₂/U₁</strong> — m = U₂/U₁ = N₂/N₁ = I₁/I₂. Les réponses a et b sont les mêmes rapports à l'envers : c'est le piège habituel.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un transformateur 230 V / 24 V a un rapport de transformation d'environ ……",
   "verso": "<strong>0,104</strong> — 24/230 = 0,104.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Si m > 1, le transformateur est ……",
   "verso": "<strong>élévateur</strong> — m > 1 signifie U₂ > U₁.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pour un transformateur parfait, les courants vérifient ……",
   "verso": "<strong>I₁/I₂ = m</strong> — Les courants sont dans le rapport inverse des tensions.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un transformateur parfait conserve ……",
   "verso": "<strong>la puissance apparente</strong> — S₁ = S₂, soit U₁ I₁ = U₂ I₂.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La plaque indique 24 V·A et 24 V au secondaire. L'intensité nominale au secondaire vaut ……",
   "verso": "<strong>1,00 A</strong> — I_2N = S/U₂ = 24/24 = 1,00 A.",
   "origine": "bilan"
  }
 ]
};
