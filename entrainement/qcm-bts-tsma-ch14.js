/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 14 · Ondes acoustiques et protection
   Le bilan vient de ch14_bilan.tex, les cartes des \trou{} de
   ch14_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "14",
 "titre": "Ondes acoustiques et protection",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Combien vaut log(10⁹) ?",
   "choix": [
    "9",
    "90",
    "10⁹",
    "0,9"
   ],
   "bonne": 0,
   "expl": "Le logarithme décimal d'une puissance de 10 est son exposant."
  },
  {
   "q": "Combien vaut 10 × log(2), arrondi à l'unité ?",
   "choix": [
    "2 dB",
    "3 dB",
    "6 dB",
    "10 dB"
   ],
   "bonne": 1,
   "expl": "log 2 = 0,30, donc 3 dB. Doubler l'intensité ajoute 3 dB : c'est le repère à connaître par cœur."
  },
  {
   "q": "Combien vaut 10^8,5, en écriture scientifique ?",
   "choix": [
    "8,5×10⁸",
    "3,16×10⁸",
    "1,00×10⁸",
    "7,94×10⁷"
   ],
   "bonne": 1,
   "expl": "10^0,5 = 3,16, donc 10^8,5 = 3,16×10⁸."
  },
  {
   "q": "Une grandeur varie en 1/r². Si la distance double, elle est divisée par :",
   "choix": [
    "2",
    "4",
    "8",
    "√2"
   ],
   "bonne": 1,
   "expl": "La puissance se répartit sur une sphère dont la surface varie comme r²."
  },
  {
   "q": "Toujours en 1/r² : si la distance est multipliée par 4, la grandeur est divisée par :",
   "choix": [
    "4",
    "8",
    "16",
    "32"
   ],
   "bonne": 2,
   "expl": "Multiplier la distance par 4, c'est doubler deux fois : on divise deux fois par 4."
  },
  {
   "q": "Combien vaut log(4,0×10⁹) ?",
   "choix": [
    "9,0",
    "9,6",
    "36",
    "4,6"
   ],
   "bonne": 1,
   "expl": "log(4,0) + 9 = 0,60 + 9 = 9,6. C'est un calcul de niveau sonore."
  }
 ],
 "bilan": [
  {
   "q": "Dans une onde acoustique, ce qui se déplace est :",
   "choix": [
    "l'air, d'un point à un autre",
    "la perturbation de pression",
    "la source"
   ],
   "bonne": 1,
   "expl": "chaque tranche d'air ne fait qu'aller et venir sur place : c'est la perturbation qui voyage, pas la matière. Un son n'est pas un courant d'air. Et lors d'un changement de milieu, c'est la célérité qui change ; la fréquence, elle, est imposée par la source et ne change jamais — d'où une longueur d'onde qui suit. 3pt"
  },
  {
   "q": "Un son de 500 Hz passe de l'air à l'acier. Ce qui ne change pas est :",
   "choix": [
    "la célérité",
    "la longueur d'onde",
    "la fréquence"
   ],
   "bonne": 2,
   "expl": "chaque tranche d'air ne fait qu'aller et venir sur place : c'est la perturbation qui voyage, pas la matière. Un son n'est pas un courant d'air. Et lors d'un changement de milieu, c'est la célérité qui change ; la fréquence, elle, est imposée par la source et ne change jamais — d'où une longueur d'onde qui suit. 3pt"
  },
  {
   "q": "En champ direct, l'intensité acoustique à la distance r d'une source de puissance P vaut :",
   "choix": [
    "I = P/(4πr²)",
    "I = P/r",
    "I = P r²"
   ],
   "bonne": 0,
   "expl": "la puissance de la source se répartit sur la sphère de rayon r, dont la surface vaut 4πr². Retenir que la puissance caractérise la source seule, alors que l'intensité dépend aussi d'où l'on se place. 3pt"
  },
  {
   "q": "Ajouter 10 dB à un niveau, c'est multiplier l'intensité par :",
   "choix": [
    "2",
    "10",
    "100"
   ],
   "bonne": 1,
   "expl": "les deux seuls repères à connaître : +10 dB → × 10 et +3 dB → × 2, puisque 10log(2) = 3,0. Tout le reste s'en déduit. 3pt"
  },
  {
   "q": "Doubler l'intensité acoustique ajoute :",
   "choix": [
    "2 dB",
    "3 dB",
    "6 dB"
   ],
   "bonne": 1,
   "expl": "les deux seuls repères à connaître : +10 dB → × 10 et +3 dB → × 2, puisque 10log(2) = 3,0. Tout le reste s'en déduit. 3pt"
  },
  {
   "q": "Deux machines produisent chacune 85 dB(A) au même poste. Ensemble, elles produisent :",
   "choix": [
    "88 dB(A)",
    "170 dB(A)",
    "85 dB(A)"
   ],
   "bonne": 0,
   "expl": "deux sources identiques ajoutent trois décibels, jamais le double. La réponse b additionne des logarithmes comme s'il s'agissait de nombres ordinaires : c'est l'erreur de fond du chapitre. 3pt"
  },
  {
   "q": "Une source A donne 88 dB et une source B 82 dB. Supprimer B fait gagner environ :",
   "choix": [
    "1 dB",
    "6 dB",
    "82 dB"
   ],
   "bonne": 0,
   "expl": "l'ensemble vaut 89,0 dB ; sans B il reste 88 dB, soit un décibel gagné, imperceptible. Sans A il resterait 82 dB, soit sept. On traite toujours la source dominante — et l'ordre des travaux en découle. 3pt"
  },
  {
   "q": "En champ direct, doubler la distance à la source fait perdre :",
   "choix": [
    "3 dB",
    "6 dB",
    "la moitié du niveau"
   ],
   "bonne": 1,
   "expl": "chaque doublement de distance retire 6 dB ; ce qui compte est le rapport des distances, jamais leur différence. De 8 à 9 m, le rapport ne vaut que 1,125, soit 1 dB à peine. Le même geste, très efficace près de la source, presque inutile loin d'elle. 3pt"
  },
  {
   "q": "Un opérateur est à 8 m d'une source. Reculer d'un mètre lui fait gagner :",
   "choix": [
    "6 dB",
    "environ 1 dB",
    "rien du tout"
   ],
   "bonne": 1,
   "expl": "chaque doublement de distance retire 6 dB ; ce qui compte est le rapport des distances, jamais leur différence. De 8 à 9 m, le rapport ne vaut que 1,125, soit 1 dB à peine. Le même geste, très efficace près de la source, presque inutile loin d'elle. 3pt"
  },
  {
   "q": "La pondération A sert à :",
   "choix": [
    "amplifier les mesures",
    "tenir compte de la sensibilité de l'oreille selon la fréquence",
    "convertir les watts en décibels"
   ],
   "bonne": 1,
   "expl": "le dB(A) mesure la même énergie que le décibel, corrigée de ce que l'oreille en perçoit : celle-ci est peu sensible aux graves. Toute la réglementation du bruit au travail est écrite en dB(A), jamais en décibels bruts. 3pt"
  },
  {
   "q": "Au poste de conduite, le sonomètre indique 92 dB(A). Avec un casque de SNR 34, le niveau perçu serait de 58 dB(A). Ce choix est :",
   "choix": [
    "le meilleur, car c'est le plus atténuant",
    "discutable : l'opérateur n'entendrait plus les signaux d'alerte",
    "interdit par la réglementation"
   ],
   "bonne": 1,
   "expl": "et c'est la question la plus utile de la feuille. Les trois protections « fonctionnent » au sens où elles ramènent sous 85 dB(A) ; le casque lourd descend pourtant beaucoup trop bas. À 58 dB(A), l'opérateur n'entend plus l'alarme de recul, ni le bruit anormal de sa machine, ni ses collègues : la surprotection crée un autre risque. On vise entre 70 et 80 dB(A) sous protection. 3pt"
  },
  {
   "q": "Dans la hiérarchie des actions contre le bruit, l'EPI vient :",
   "choix": [
    "en premier, car c'est le plus rapide",
    "en dernier, après l'action à la source et sur le trajet",
    "à égalité avec les autres"
   ],
   "bonne": 1,
   "expl": "la hiérarchie réglementaire est : à la source d'abord (silencieux, capotage, liaisons souples), sur le trajet ensuite (cabine isolée, écrans), et seulement en dernier recours sur l'opérateur. Un EPI ne protège que celui qui le porte, et seulement s'il le porte correctement — c'est la protection la moins fiable de toutes. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Onde acoustique » ?",
   "verso": "Une onde acoustique est la propagation d'une suite de compressions et de dilatations dans un milieu matériel. La grandeur que l'on mesure est la surpression, c'est-à-dire l'écart à la pression atmosphérique.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Puissance et intensité acoustiques » ?",
   "verso": "La <strong>puissance acoustique</strong> P, en watts, caractérise la source seule. L'<strong>intensité acoustique</strong> I, en W/m², est la puissance qui traverse un mètre carré : elle dépend aussi de la distance à la source.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Décibel pondéré A » ?",
   "verso": "Le <strong>décibel pondéré A</strong>, noté dB(A), est le niveau corrigé de la sensibilité de l'oreille selon la fréquence. C'est lui, et lui seul, qu'utilise la réglementation.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "La célérité dépend du milieu, pas de la source — qu'y a-t-il à retenir ?",
   "verso": "Lorsqu'un son passe d'un milieu à un autre, sa fréquence ne change pas — elle est imposée par la source — mais sa célérité change, donc sa longueur d'onde aussi. Le son va d'autant plus vite que le milieu est rigide.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Lire une échelle logarithmique — qu'y a-t-il à retenir ?",
   "verso": "Ajouter 10 dB, c'est multiplier l'intensité par dix. Ajouter 3 dB, c'est la multiplier par deux. Doubler le nombre de décibels ne double donc rien du tout.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "La règle des 6 dB — qu'y a-t-il à retenir ?",
   "verso": "En champ direct, doubler la distance fait perdre 6 dB. Ce qui compte est le rapport des distances, jamais leur différence.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Le son va d'autant plus vite que le milieu est …….",
   "rep": "rigide",
   "verso": "<strong>rigide</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "À intensité égale, un grave est perçu …… qu'un son medium.",
   "rep": "beaucoup moins fort",
   "verso": "<strong>beaucoup moins fort</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La perception d'un son dépend de son …… et de sa fréquence.",
   "rep": "intensité",
   "verso": "<strong>intensité</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Une onde acoustique est la propagation d'une …… dans un milieu matériel.",
   "rep": "suite de compressions et de dilatations",
   "verso": "<strong>suite de compressions et de dilatations</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le <strong>décibel pondéré A</strong>, noté dB(A), est le niveau corrigé de …….",
   "rep": "la sensibilité de l'oreille selon la fréquence",
   "verso": "<strong>la sensibilité de l'oreille selon la fréquence</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Dans une onde acoustique, ce qui se déplace est ……",
   "rep": "la perturbation de pression",
   "verso": "<strong>la perturbation de pression</strong> — chaque tranche d'air ne fait qu'aller et venir sur place : c'est la perturbation qui voyage, pas la matière. Un son n'est pas un courant d'air.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un son de 500 Hz passe de l'air à l'acier. Ce qui ne change pas est ……",
   "rep": "la fréquence",
   "verso": "<strong>la fréquence</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En champ direct, l'intensité acoustique à la distance r d'une source de puissance P vaut ……",
   "rep": "I = P/(4πr²)",
   "verso": "<strong>I = P/(4πr²)</strong> — la puissance de la source se répartit sur la sphère de rayon r, dont la surface vaut 4πr². Retenir que la puissance caractérise la source seule, alors que l'intensité dépend aussi d'où l'on se place. 3pt",
   "origine": "bilan"
  }
 ]
};
