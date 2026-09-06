/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 17 · Distribution électrique et sécurité
   Le bilan vient de ch17_bilan.tex, les cartes des \trou{} de
   ch17_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "17",
 "titre": "Distribution électrique et sécurité",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Une tension composée de 400 V correspond à une tension simple de :",
   "choix": [
    "231 V",
    "400 V",
    "693 V",
    "200 V"
   ],
   "bonne": 0,
   "expl": "400/√3 = 231 V. Les deux opérations, × √3 et / √3, sont inverses l'une de l'autre."
  },
  {
   "q": "Un facteur de puissance cos φ = 0,74 correspond à un angle de :",
   "choix": [
    "21,6°",
    "42,3°",
    "47,7°",
    "74°"
   ],
   "bonne": 1,
   "expl": "φ = arccos 0,74 = 42,3°, dont la tangente vaut 0,909."
  },
  {
   "q": "Combien vaut √3 × 400 × 4,20 ?",
   "choix": [
    "1680",
    "2910",
    "970",
    "2400"
   ],
   "bonne": 1,
   "expl": "C'est la puissance apparente d'un récepteur triphasé, en voltampères."
  },
  {
   "q": "Combien vaut 2150/2903 ?",
   "choix": [
    "0,741",
    "1,35",
    "0,935",
    "0,241"
   ],
   "bonne": 0,
   "expl": "C'est un facteur de puissance : le rapport de la puissance active à la puissance apparente."
  },
  {
   "q": "Combien vaut 1100/(3 × 314 × 400²), exprimé en microfarads ?",
   "choix": [
    "0,73 µF",
    "7,3 µF",
    "73 µF",
    "7,3×10⁻⁶ µF"
   ],
   "bonne": 1,
   "expl": "1100/1,508×10⁸ = 7,3×10⁻⁶ F. C'est le calcul d'une batterie de condensateurs."
  },
  {
   "q": "Deux incertitudes relatives de 0,5 % et 1,5 % donnent une incertitude élargie de :",
   "choix": [
    "2,0 %",
    "3,2 %",
    "1,6 %",
    "4,0 %"
   ],
   "bonne": 1,
   "expl": "√(0,5² + 1,5²) = 1,58 %, donc U = 2u = 3,2 %. Le terme le plus grand domine."
  }
 ],
 "bilan": [
  {
   "q": "La tension composée se mesure :",
   "choix": [
    "entre une phase et le neutre",
    "entre deux phases",
    "entre le neutre et la terre"
   ],
   "bonne": 1,
   "expl": "la composée se mesure entre deux phases, et U = √3 × 230 = 400 V. La réponse a de la question 2 vient d'une division au lieu d'une multiplication : contrôler que la composée est toujours la plus grande des deux suffit à écarter l'erreur. 3pt"
  },
  {
   "q": "Sur un réseau où V = 230 V, la tension composée vaut :",
   "choix": [
    "133 V",
    "400 V",
    "690 V"
   ],
   "bonne": 1,
   "expl": "la composée se mesure entre deux phases, et U = √3 × 230 = 400 V. La réponse a de la question 2 vient d'une division au lieu d'une multiplication : contrôler que la composée est toujours la plus grande des deux suffit à écarter l'erreur. 3pt"
  },
  {
   "q": "En couplage étoile, chaque récepteur est soumis à :",
   "choix": [
    "la tension simple",
    "la tension composée",
    "la moitié de la tension composée"
   ],
   "bonne": 0,
   "expl": "en étoile, chaque récepteur voit la tension simple. Un moteur 230 /400 V a des enroulements prévus pour 230 V : sur un réseau 400 V entre phases, seul le couplage étoile leur donne les 231 V attendus. Le coupler en triangle triple la puissance appelée et le détruit en quelques minutes. 3pt"
  },
  {
   "q": "Un moteur 230 /400 V est branché sur un réseau 400 V entre phases. Il faut le coupler en :",
   "choix": [
    "triangle",
    "étoile",
    "peu importe"
   ],
   "bonne": 1,
   "expl": "en étoile, chaque récepteur voit la tension simple. Un moteur 230 /400 V a des enroulements prévus pour 230 V : sur un réseau 400 V entre phases, seul le couplage étoile leur donne les 231 V attendus. Le coupler en triangle triple la puissance appelée et le détruit en quelques minutes. 3pt"
  },
  {
   "q": "En triphasé équilibré, la puissance apparente vaut :",
   "choix": [
    "S = U I",
    "S = √3 U I",
    "S = 3 U I"
   ],
   "bonne": 1,
   "expl": "S = √3 U I en triphasé équilibré. Et le disjoncteur ne connaît que le courant : c'est donc la puissance apparente qu'il voit. On paie P, on dimensionne sur S — toute la question du facteur de puissance tient dans cet écart. 3pt"
  },
  {
   "q": "La puissance que « voit » le disjoncteur est :",
   "choix": [
    "la puissance active",
    "la puissance réactive",
    "la puissance apparente"
   ],
   "bonne": 2,
   "expl": "S = √3 U I en triphasé équilibré. Et le disjoncteur ne connaît que le courant : c'est donc la puissance apparente qu'il voit. On paie P, on dimensionne sur S — toute la question du facteur de puissance tient dans cet écart. 3pt"
  },
  {
   "q": "On relève le facteur de puissance d'une installation de 0,74 à 0,93. La puissance active :",
   "choix": [
    "augmente",
    "diminue",
    "ne change pas"
   ],
   "bonne": 2,
   "expl": "et c'est le cœur du chapitre. Relever le facteur de puissance ne change rien à la puissance active : le moteur fournit le même travail et la facture d'énergie active ne bouge pas. Ce qui baisse, c'est le courant — et comme les pertes varient en I², une baisse de 20 % du courant en fait une de 36 % sur les pertes. Le bénéfice est réel, mais il n'est pas là où on l'attend. 3pt"
  },
  {
   "q": "Ce relèvement fait baisser le courant de ligne de 20 %. Les pertes en ligne baissent alors de :",
   "choix": [
    "20 %",
    "36 %",
    "40 %"
   ],
   "bonne": 1,
   "expl": "et c'est le cœur du chapitre. Relever le facteur de puissance ne change rien à la puissance active : le moteur fournit le même travail et la facture d'énergie active ne bouge pas. Ce qui baisse, c'est le courant — et comme les pertes varient en I², une baisse de 20 % du courant en fait une de 36 % sur les pertes. Le bénéfice est réel, mais il n'est pas là où on l'attend. 3pt"
  },
  {
   "q": "Ce qui rend un contact électrique mortel, c'est :",
   "choix": [
    "la tension",
    "le courant qui traverse le corps",
    "la puissance de l'installation"
   ],
   "bonne": 1,
   "expl": "ce n'est pas la tension qui tue, c'est le courant, et quelques dizaines de milliampères suffisent. C'est précisément pourquoi la « basse tension » est le domaine le plus meurtrier : elle est partout, et on s'en méfie moins. 3pt"
  },
  {
   "q": "Un dispositif différentiel déclenche quand :",
   "choix": [
    "le courant dépasse son calibre",
    "le courant aller et le courant retour diffèrent",
    "la tension chute"
   ],
   "bonne": 1,
   "expl": "le différentiel ne mesure aucune intensité en valeur absolue : il compare l'aller et le retour, et coupe si du courant s'échappe. Le disjoncteur, lui, coupe sur surintensité et protège les câbles, donc les biens. Les deux ne se remplacent pas, et sans prise de terre le différentiel ne voit presque rien. 3pt"
  },
  {
   "q": "Le disjoncteur protège avant tout :",
   "choix": [
    "les personnes",
    "les biens",
    "le fournisseur d'électricité"
   ],
   "bonne": 1,
   "expl": "le différentiel ne mesure aucune intensité en valeur absolue : il compare l'aller et le retour, et coupe si du courant s'échappe. Le disjoncteur, lui, coupe sur surintensité et protège les câbles, donc les biens. Les deux ne se remplacent pas, et sans prise de terre le différentiel ne voit presque rien. 3pt"
  },
  {
   "q": "Dans la consignation, la vérification d'absence de tension :",
   "choix": [
    "peut se faire au début, avant de condamner",
    "se fait sur place, juste avant de toucher",
    "est facultative si l'on a cadenassé"
   ],
   "bonne": 1,
   "expl": "et c'est la question la plus importante de la feuille. La vérification d'absence de tension est la dernière étape, elle se fait sur place, juste avant de toucher. Une vérification faite cinq minutes plus tôt ne prouve rien : entre-temps, quelqu'un a pu réalimenter. C'est le seul chapitre de l'année où une erreur de méthode ne se rattrape pas. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "La puissance <strong>active</strong> P, en watts, est …….",
   "verso": "<strong>celle qui travaille et que l'on paie</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La puissance <strong>réactive</strong> Q, en var, est …….",
   "verso": "<strong>celle qui fait des allers-retours sans travailler</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La puissance <strong>apparente</strong> S, en V·A, est …….",
   "verso": "<strong>celle que voient les câbles et le disjoncteur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Il ne mesure aucune intensité en valeur absolue : il compare …….",
   "verso": "<strong>le courant aller et le courant retour</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En couplage <strong>étoile</strong>, chaque récepteur est soumis à …….",
   "verso": "<strong>la tension simple V</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Ce n'est pas la tension qui tue, c'est le courant — et il suffit de …….",
   "verso": "<strong>quelques dizaines de milliampères</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En couplage <strong>triangle</strong>, il est soumis à ……, soit √3 fois plus.",
   "verso": "<strong>la tension composée U</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Si la différence dépasse son calibre — 30 mA usuellement — il coupe, parce que du courant …….",
   "verso": "<strong>s'échappe vers la terre</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Ce n'est pas la tension qui tue, c'est …… — et il suffit de quelques dizaines de milliampères.",
   "verso": "<strong>le courant</strong>",
   "origine": "cours a completer"
  }
 ]
};
