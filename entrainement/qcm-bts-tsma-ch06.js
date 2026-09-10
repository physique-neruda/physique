/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 06 · La réaction chimique
   Le bilan vient de ch06_bilan.tex, les cartes des \trou{} de
   ch06_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "6",
 "titre": "La réaction chimique",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Dans la formule Ca(OH)₂, le nombre d'atomes d'oxygène est :",
   "choix": [
    "1",
    "2",
    "3",
    "4"
   ],
   "bonne": 1,
   "expl": "L'indice 2 porte sur tout le groupe entre parenthèses : 2 O et 2 H."
  },
  {
   "q": "Convertir 80,0 mL en litres :",
   "choix": [
    "0,800 L",
    "0,0800 L",
    "8,00 L",
    "8,00×10⁻⁴ L"
   ],
   "bonne": 1,
   "expl": "1 mL = 10⁻³ L. La relation n = C·V exige des litres."
  },
  {
   "q": "Dans n = m/M, la masse molaire s'écrit :",
   "choix": [
    "M = n × m",
    "M = m/n",
    "M = n/m",
    "M = m − n"
   ],
   "bonne": 1,
   "expl": "M = m/n, en g/mol."
  },
  {
   "q": "Un produit contient 85,0 % en masse d'espèce active. 1,000 g de produit en contient :",
   "choix": [
    "0,850 g",
    "1,176 g",
    "0,150 g",
    "85,0 g"
   ],
   "bonne": 0,
   "expl": "1,000 × 0,850. Dans l'autre sens on diviserait par 0,850."
  },
  {
   "q": "Convertir 1,20 t en grammes :",
   "choix": [
    "1,20×10³ g",
    "1,20×10⁵ g",
    "1,20×10⁶ g",
    "1,20×10⁹ g"
   ],
   "bonne": 2,
   "expl": "1 t = 10³ kg = 10⁶ g."
  },
  {
   "q": "Un volume de 205 mL est connu à 2,0 % près. L'incertitude absolue vaut :",
   "choix": [
    "2 mL",
    "4 mL",
    "10 mL",
    "41 mL"
   ],
   "bonne": 1,
   "expl": "0,020 × 205 = 4,1 mL, arrondi à 4 mL."
  }
 ],
 "bilan": [
  {
   "q": "L'unité de la quantité de matière est :",
   "choix": [
    "le gramme",
    "la mole",
    "le litre"
   ],
   "bonne": 1,
   "expl": "40,1 + 12,0 + 3×16,0 = 100,1. La réponse a correspond à un oubli du facteur 3 sur l'oxygène. 3pt"
  },
  {
   "q": "La masse molaire de CaCO₃ vaut (Ca 40,1 ; C 12,0 ; O 16,0) :",
   "choix": [
    "68,1 g/mol",
    "100,1 g/mol",
    "116,1 g/mol"
   ],
   "bonne": 1,
   "expl": "40,1 + 12,0 + 3×16,0 = 100,1. La réponse a correspond à un oubli du facteur 3 sur l'oxygène. 3pt"
  },
  {
   "q": "Dans Ca(OH)₂, le nombre d'atomes d'hydrogène est :",
   "choix": [
    "1",
    "2",
    "4"
   ],
   "bonne": 2,
   "expl": "l'indice 2 porte sur tout le groupe (OH) : deux O et deux H. C'est le piège le plus fréquent du calcul de masse molaire. 3pt"
  },
  {
   "q": "Pour une espèce en solution, la quantité de matière se calcule par :",
   "choix": [
    "n = m/M",
    "n = V/V_m",
    "n = C × V"
   ],
   "bonne": 2,
   "expl": "trois chemins vers n selon la forme de l'espèce. Le volume molaire ne dépend que de la température et de la pression : un même volume de dihydrogène et de dioxyde de carbone contient le même nombre de molécules, mais pas du tout la même masse. Et 0,240/24,0 = 0,010. 3pt"
  },
  {
   "q": "Le volume molaire d'un gaz dépend :",
   "choix": [
    "de la nature du gaz",
    "de la température et de la pression",
    "de la masse du gaz"
   ],
   "bonne": 1,
   "expl": "trois chemins vers n selon la forme de l'espèce. Le volume molaire ne dépend que de la température et de la pression : un même volume de dihydrogène et de dioxyde de carbone contient le même nombre de molécules, mais pas du tout la même masse. Et 0,240/24,0 = 0,010. 3pt"
  },
  {
   "q": "0,240 L de gaz à V_m = 24,0 L/mol correspondent à :",
   "choix": [
    "0,010 mol",
    "0,10 mol",
    "5,76 mol"
   ],
   "bonne": 0,
   "expl": "trois chemins vers n selon la forme de l'espèce. Le volume molaire ne dépend que de la température et de la pression : un même volume de dihydrogène et de dioxyde de carbone contient le même nombre de molécules, mais pas du tout la même masse. Et 0,240/24,0 = 0,010. 3pt"
  },
  {
   "q": "Pour ajuster une équation, on modifie :",
   "choix": [
    "les indices dans les formules",
    "les coefficients devant les formules",
    "les deux indifféremment"
   ],
   "bonne": 1,
   "expl": "on n'agit que sur les coefficients : changer un indice, c'est changer d'espèce chimique. Pour le méthane, il faut deux O₂ pour fournir les quatre atomes d'oxygène de CO₂ et des deux H₂O. 3pt"
  },
  {
   "q": "L'équation ajustée de la combustion du méthane est :",
   "choix": [
    "CH₄ + O₂ → CO₂ + H₂O",
    "CH₄ + 2 O₂ → CO₂ + 2 H₂O",
    "CH₄ + 3 O₂ → CO₂ + 2 H₂O"
   ],
   "bonne": 1,
   "expl": "on n'agit que sur les coefficients : changer un indice, c'est changer d'espèce chimique. Pour le méthane, il faut deux O₂ pour fournir les quatre atomes d'oxygène de CO₂ et des deux H₂O. 3pt"
  },
  {
   "q": "Pour identifier le réactif limitant, on compare :",
   "choix": [
    "les quantités de matière n",
    "les quotients n/ν",
    "les masses"
   ],
   "bonne": 1,
   "expl": "c'est le cœur du chapitre. Ici n(Fe)1 = 5,0×10⁻² contre n(HCl)2 = 4,0×10⁻² : le plus petit quotient désigne l'acide, alors même qu'il est présent en plus grande quantité. Comparer les n bruts conduit à la réponse inverse — et fausse tout le bilan. 3pt"
  },
  {
   "q": "Pour Fe + 2 HCl → … avec n(Fe) = 5,0×10⁻² mol et n(HCl) = 8,0×10⁻² mol, le limitant est :",
   "choix": [
    "le fer",
    "l'acide",
    "aucun, le mélange est stœchiométrique"
   ],
   "bonne": 1,
   "expl": "c'est le cœur du chapitre. Ici n(Fe)1 = 5,0×10⁻² contre n(HCl)2 = 4,0×10⁻² : le plus petit quotient désigne l'acide, alors même qu'il est présent en plus grande quantité. Comparer les n bruts conduit à la réponse inverse — et fausse tout le bilan. 3pt"
  },
  {
   "q": "Un mélange stœchiométrique est un mélange dans lequel :",
   "choix": [
    "les deux réactifs ont la même masse",
    "les deux réactifs disparaissent en même temps",
    "l'un des réactifs est en large excès"
   ],
   "bonne": 1,
   "expl": "les quotients n/ν sont alors égaux et les deux réactifs s'épuisent ensemble, sans reste. Rien à voir avec l'égalité des masses. 3pt"
  },
  {
   "q": "Dans un dosage par dégagement gazeux, on place un réactif en excès afin que :",
   "choix": [
    "la réaction aille plus vite",
    "l'espèce à doser soit le réactif limitant",
    "le volume de gaz soit plus grand"
   ],
   "bonne": 1,
   "expl": "c'est la raison d'être de l'excès, et la question tombe dans presque tous les sujets. Si l'espèce à doser n'était pas limitante, le volume de gaz renseignerait sur l'autre réactif et la mesure ne voudrait rien dire. Le sujet demande ensuite de vérifier par le calcul que l'excès est réel. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "La masse molaire d'une molécule s'obtient en …….",
   "verso": "<strong>additionnant les masses molaires atomiques, chacune multipliée par son indice</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Les réactifs disparaissent alors ……, sans reste.",
   "verso": "<strong>en même temps</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Une équation est <strong>ajustée</strong> lorsque …….",
   "verso": "<strong>chaque élément est présent en même nombre des deux côtés de la flèche</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>masse molaire</strong> M d'une espèce est …….",
   "verso": "<strong>la masse d'une mole de cette espèce</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un mélange est <strong>stœchiométrique</strong> lorsque …….",
   "verso": "<strong>les quotients n/ν de tous les réactifs sont égaux</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Gaz, on mesure son volume : ……, avec V en L et V_m en L/mol.",
   "verso": "<strong>n = V/V_m</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Solide ou liquide, on le pèse : ……, avec m en g et M en g/mol.",
   "verso": "<strong>n = m/M</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le <strong>réactif limitant</strong> est …… : c'est lui qui arrête la réaction.",
   "verso": "<strong>celui qui s'épuise le premier</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Espèce en solution, on connaît volume et concentration : ……, avec C en mol/L et V en L.",
   "verso": "<strong>n = C × V</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "L'unité de la quantité de matière est ……",
   "verso": "<strong>la mole</strong> — 40,1 + 12,0 + 3×16,0 = 100,1. La réponse a correspond à un oubli du facteur 3 sur l'oxygène. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La masse molaire de CaCO₃ vaut (Ca 40,1 ; C 12,0 ; O 16,0) ……",
   "verso": "<strong>100,1 g/mol</strong> — 40,1 + 12,0 + 3×16,0 = 100,1. La réponse a correspond à un oubli du facteur 3 sur l'oxygène. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans Ca(OH)₂, le nombre d'atomes d'hydrogène est ……",
   "verso": "<strong>4</strong> — l'indice 2 porte sur tout le groupe (OH) : deux O et deux H. C'est le piège le plus fréquent du calcul de masse molaire. 3pt",
   "origine": "bilan"
  }
 ]
};
