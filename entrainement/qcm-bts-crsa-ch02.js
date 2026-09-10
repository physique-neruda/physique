/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 2 — Conversion et stockage de l'énergie
   Le bilan vient de CRSA_ch02_bilan.tex, les cartes des \trou{} de
   CRSA_ch02_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "2",
 "titre": "Conversion et stockage de l'énergie",
 "niveau": "BTS CRSA",
 "prerequis": [],
 "bilan": [
  {
   "q": "Dans une centrale nucléaire comme dans une centrale à gaz, l'électricité est produite par :",
   "choix": [
    "une pile",
    "un alternateur entraîné par une turbine",
    "un panneau photovoltaïque",
    "un transformateur"
   ],
   "bonne": 1,
   "expl": "La source change, la fin de chaîne est la même : turbine puis alternateur."
  },
  {
   "q": "Parmi ces sources, laquelle est renouvelable ?",
   "choix": [
    "le gaz naturel",
    "l'uranium",
    "la géothermie",
    "le charbon"
   ],
   "bonne": 2,
   "expl": "Les trois autres sont des stocks finis. Non renouvelable ne veut pas dire polluant : le nucléaire n'émet presque pas de CO₂ et n'est pas renouvelable."
  },
  {
   "q": "Un convertisseur qui transforme de l'alternatif en continu s'appelle :",
   "choix": [
    "un onduleur",
    "un hacheur",
    "un redresseur",
    "un gradateur"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Un convertisseur qui transforme du continu en alternatif s'appelle :",
   "choix": [
    "un onduleur",
    "un hacheur",
    "un redresseur",
    "un gradateur"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Le transformateur :",
   "choix": [
    "transforme le continu en alternatif",
    "change la tension sans changer la nature du courant",
    "est un convertisseur statique continu-continu",
    "redresse la tension"
   ],
   "bonne": 1,
   "expl": "Alternatif en entrée, alternatif en sortie : il ne convertit pas, il transforme. C'est pourquoi il ne figure pas dans le tableau des quatre."
  },
  {
   "q": "Une batterie 24 V alimente un moteur asynchrone triphasé. Le convertisseur à interposer est :",
   "choix": [
    "un redresseur",
    "un hacheur",
    "un onduleur",
    "un gradateur"
   ],
   "bonne": 2,
   "expl": "Source continue, machine alternative : onduleur."
  },
  {
   "q": "Un variateur de vitesse pour moteur asynchrone alimenté par le réseau contient :",
   "choix": [
    "un seul onduleur",
    "un redresseur puis un onduleur",
    "un hacheur seul",
    "un transformateur seul"
   ],
   "bonne": 1,
   "expl": "Il redresse d'abord, puis ondule à la fréquence voulue — deux convertisseurs dans un seul boîtier."
  },
  {
   "q": "Une batterie porte l'indication 12 V — 40 A·h. L'énergie stockée vaut :",
   "choix": [
    "40 W·h",
    "480 W·h",
    "12 W·h",
    "on ne peut pas la calculer"
   ],
   "bonne": 1,
   "expl": "E = U × Q = 12 × 40 = 480 W·h. La réponse d est le piège inverse : on peut la calculer, à condition de ne pas oublier la tension."
  },
  {
   "q": "L'ampère-heure est une unité :",
   "choix": [
    "d'énergie",
    "de puissance",
    "de charge électrique",
    "de tension"
   ],
   "bonne": 2,
   "expl": "C'est une charge. Multipliée par une tension, elle donne une énergie."
  },
  {
   "q": "Un condensateur de 4,7 F chargé sous 12 V stocke une énergie de :",
   "choix": [
    "56 J",
    "338 J",
    "677 J",
    "29 J"
   ],
   "bonne": 1,
   "expl": "1/2CU² = 0,5×4,7×144 = 338 J. La réponse c, 677 J, est l'énergie fournie par la source pendant la charge : la moitié part en chaleur dans la résistance."
  },
  {
   "q": "Un stockage dont le rendement vaut 90 % à la charge et 90 % à la décharge a un rendement de cycle de :",
   "choix": [
    "90 %",
    "180 %",
    "81 %",
    "45 %"
   ],
   "bonne": 2,
   "expl": "0,90×0,90 = 0,81. Les pertes comptent deux fois."
  },
  {
   "q": "On choisit un supercondensateur plutôt qu'une batterie lorsqu'on a besoin :",
   "choix": [
    "d'une grande autonomie",
    "d'un pic de puissance très bref",
    "de stocker beaucoup d'énergie",
    "d'un encombrement réduit"
   ],
   "bonne": 1,
   "expl": "Il stocke quarante fois moins qu'une pile bâton, mais il rend son énergie en une fraction de seconde. Le stockage se choisit sur l'usage, pas sur la quantité d'énergie. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "retenir",
   "recto": "Une fin de chaîne commune — qu'y a-t-il à retenir ?",
   "verso": "Quelle que soit la source — charbon, fission nucléaire, chute d'eau, vent — le schéma est le même : la source fait tourner une turbine, qui entraîne un alternateur. Seuls le photovoltaïque et les piles produisent l'électricité directement, sans pièce en mouvement.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Les quatre noms — qu'y a-t-il à retenir ?",
   "verso": "Alternatif vers continu : redresseur. Continu vers alternatif : onduleur. Continu vers continu : hacheur. Alternatif vers alternatif : gradateur.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "On ne stocke pas l'électricité — qu'y a-t-il à retenir ?",
   "verso": "L'électricité ne se conserve pas telle quelle : on la convertit en énergie chimique, électrostatique, mécanique, hydraulique, électromagnétique ou thermique, puis on refait le chemin inverse au moment de s'en servir.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Un dispositif qui rend 90 % dans chaque sens n'affiche que …… sur le cycle complet.",
   "verso": "<strong>81 %</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Seuls le photovoltaïque et les …… produisent l'électricité directement, sans pièce en mouvement.",
   "verso": "<strong>piles</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Quelle que soit la source — charbon, fission nucléaire, chute d'eau, vent — le schéma est le même : la source fait tourner une turbine, qui entraîne un …….",
   "verso": "<strong>alternateur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "L'électricité ne se conserve pas telle quelle : on la convertit en énergie chimique, électrostatique, mécanique, hydraulique, …… ou thermique, puis on refait le chemin inverse au moment de s'en servir.",
   "verso": "<strong>électromagnétique</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Dans une centrale nucléaire comme dans une centrale à gaz, l'électricité est produite par ……",
   "verso": "<strong>un alternateur entraîné par une turbine</strong> — La source change, la fin de chaîne est la même : turbine puis alternateur.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Parmi ces sources, laquelle est renouvelable ?",
   "verso": "<strong>la géothermie</strong> — Les trois autres sont des stocks finis. Non renouvelable ne veut pas dire polluant : le nucléaire n'émet presque pas de CO₂ et n'est pas renouvelable.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un convertisseur qui transforme de l'alternatif en continu s'appelle ……",
   "verso": "<strong>un redresseur</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un convertisseur qui transforme du continu en alternatif s'appelle ……",
   "verso": "<strong>un onduleur</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le transformateur ……",
   "verso": "<strong>change la tension sans changer la nature du courant</strong> — Alternatif en entrée, alternatif en sortie : il ne convertit pas, il transforme. C'est pourquoi il ne figure pas dans le tableau des quatre.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une batterie 24 V alimente un moteur asynchrone triphasé. Le convertisseur à interposer est ……",
   "verso": "<strong>un onduleur</strong> — Source continue, machine alternative : onduleur.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un variateur de vitesse pour moteur asynchrone alimenté par le réseau contient ……",
   "verso": "<strong>un redresseur puis un onduleur</strong> — Il redresse d'abord, puis ondule à la fréquence voulue — deux convertisseurs dans un seul boîtier.",
   "origine": "bilan"
  }
 ]
};
