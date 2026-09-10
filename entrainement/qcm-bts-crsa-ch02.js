/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 2 — Conversion et stockage de l'énergie
   Le bilan vient de CRSA_ch02_bilan.tex, les cartes des \trou{} de
   CRSA_ch02_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "2",
 "titre": "Conversion et stockage de l'énergie",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Des volts multipliés par des ampères-heures donnent :",
   "choix": [
    "une énergie",
    "une puissance",
    "une charge",
    "une intensité"
   ],
   "bonne": 0,
   "expl": "V × A·h = W·h, donc une énergie. C'est ainsi qu'on lit la capacité d'une batterie 12 V — 7,2 A·h : 86,4 W·h."
  },
  {
   "q": "Dans ½ C U², la tension passe de 12 V à 15 V. L'énergie stockée est multipliée par :",
   "choix": [
    "1,56",
    "1,25",
    "2,25",
    "1,00"
   ],
   "bonne": 0,
   "expl": "(15/12)² = 1,56. C'est le carré du rapport des tensions : le facteur 1,25 sur la tension devient 1,56 sur l'énergie."
  },
  {
   "q": "Convertir 86,4 W·h en joules :",
   "choix": [
    "3,11×10⁵ J",
    "3,11×10³ J",
    "2,40×10⁻² J",
    "3,11×10⁸ J"
   ],
   "bonne": 0,
   "expl": "86,4 × 3600 = 3,11×10⁵ J. Une heure vaut 3600 secondes, et 1 W·h = 3600 J."
  },
  {
   "q": "Le produit de deux nombres inférieurs à 1 est :",
   "choix": [
    "plus petit que chacun des deux",
    "compris entre les deux",
    "plus grand que chacun des deux",
    "égal à leur moyenne"
   ],
   "bonne": 0,
   "expl": "0,92 × 0,83 = 0,764, plus petit que 0,83. C'est pourquoi une chaîne de conversions ne peut que dégrader le rendement."
  },
  {
   "q": "Une grandeur passe de 7,2 à 6,0. La diminution vaut :",
   "choix": [
    "16,7 %",
    "12,0 %",
    "20,0 %",
    "83,3 %"
   ],
   "bonne": 0,
   "expl": "1,2/7,2 = 16,7 %. Toujours l'écart divisé par la valeur de départ."
  },
  {
   "q": "Un multimètre en position DC mesure :",
   "choix": [
    "la composante continue",
    "la valeur maximale",
    "la valeur efficace d'un signal alternatif",
    "la fréquence"
   ],
   "bonne": 0,
   "expl": "DC (direct current) mesure le continu. Sur un signal alternatif, il affiche la valeur moyenne — souvent zéro."
  }
 ],
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
   "verso": "Quelle que soit la source — charbon, fission nucléaire, chute d'eau, vent — le schéma est le même : la source fait tourner une turbine, qui entraîne un alternateur.",
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
   "rep": "81 %",
   "verso": "<strong>81 %</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Seuls le photovoltaïque et les …… produisent l'électricité directement, sans pièce en mouvement.",
   "rep": "piles",
   "verso": "<strong>piles</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Quelle que soit la source — charbon, fission nucléaire, chute d'eau, vent — le schéma est le même : la source fait tourner une turbine, qui entraîne un …….",
   "rep": "alternateur",
   "verso": "<strong>alternateur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Dans une centrale nucléaire comme dans une centrale à gaz, l'électricité est produite par ……",
   "rep": "un alternateur entraîné par une turbine",
   "verso": "<strong>un alternateur entraîné par une turbine</strong> — La source change, la fin de chaîne est la même : turbine puis alternateur.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Parmi ces sources, laquelle est renouvelable ?",
   "rep": "la géothermie",
   "verso": "<strong>la géothermie</strong> — Les trois autres sont des stocks finis. Non renouvelable ne veut pas dire polluant : le nucléaire n'émet presque pas de CO₂ et n'est pas renouvelable.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un convertisseur qui transforme de l'alternatif en continu s'appelle ……",
   "rep": "un redresseur",
   "verso": "<strong>un redresseur</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un convertisseur qui transforme du continu en alternatif s'appelle ……",
   "rep": "un onduleur",
   "verso": "<strong>un onduleur</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le transformateur ……",
   "rep": "change la tension sans changer la nature du courant",
   "verso": "<strong>change la tension sans changer la nature du courant</strong> — Alternatif en entrée, alternatif en sortie : il ne convertit pas, il transforme. C'est pourquoi il ne figure pas dans le tableau des quatre.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un variateur de vitesse pour moteur asynchrone alimenté par le réseau contient ……",
   "rep": "un redresseur puis un onduleur",
   "verso": "<strong>un redresseur puis un onduleur</strong> — Il redresse d'abord, puis ondule à la fréquence voulue — deux convertisseurs dans un seul boîtier.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une batterie porte l'indication 12 V — 40 A·h. L'énergie stockée vaut ……",
   "rep": "480 W·h",
   "verso": "<strong>480 W·h</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "L'ampère-heure est une unité ……",
   "rep": "de charge électrique",
   "verso": "<strong>de charge électrique</strong> — C'est une charge. Multipliée par une tension, elle donne une énergie.",
   "origine": "bilan"
  }
 ]
};
