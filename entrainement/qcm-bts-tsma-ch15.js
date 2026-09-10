/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 15 · Systèmes linéaires et asservissement
   Le bilan vient de ch15_bilan.tex, les cartes des \trou{} de
   ch15_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "15",
 "titre": "Systèmes linéaires et asservissement",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "63 % d'une valeur finale de 5,00 V font :",
   "choix": [
    "0,50 V",
    "3,15 V",
    "4,50 V",
    "4,75 V"
   ],
   "bonne": 1,
   "expl": "C'est la valeur atteinte au bout d'une constante de temps."
  },
  {
   "q": "Combien vaut 1 − e⁻¹, en pourcentage ?",
   "choix": [
    "36,8 %",
    "50,0 %",
    "63,2 %",
    "95,0 %"
   ],
   "bonne": 2,
   "expl": "e⁻¹ = 0,368. Après une constante de temps, la sortie a fait 63 % du chemin."
  },
  {
   "q": "Pour s(t) = 5,00(1 − e^(−t/0,220)), la valeur à t = 0,660 s vaut :",
   "choix": [
    "3,16 V",
    "4,50 V",
    "4,75 V",
    "5,00 V"
   ],
   "bonne": 2,
   "expl": "t = 3τ, donc s = 5,00 × 0,950 = 4,75 V. Au bout de 3τ, on est à 95 % : c'est le critère du temps de réponse."
  },
  {
   "q": "Une entrée de 0 à 80 °C donne une sortie de 0 à 4,00 V. La transmittance vaut :",
   "choix": [
    "0,050 V/°C",
    "20 V/°C",
    "320 V/°C",
    "0,050 °C/V"
   ],
   "bonne": 0,
   "expl": "4,00/80 = 0,050 V/°C, soit 50 mV par degré."
  },
  {
   "q": "La bande à ±5 % autour d'une valeur finale de 4,00 V va de :",
   "choix": [
    "3,95 à 4,05 V",
    "3,80 à 4,20 V",
    "3,60 à 4,40 V",
    "3,00 à 5,00 V"
   ],
   "bonne": 1,
   "expl": "5 % de 4,00 V font 0,20 V."
  },
  {
   "q": "Un maximum de 5,75 V pour une valeur finale de 4,02 V correspond à un dépassement de :",
   "choix": [
    "1,73 %",
    "30 %",
    "43 %",
    "143 %"
   ],
   "bonne": 2,
   "expl": "(5,75 − 4,02)/4,02 = 0,430. Le dépassement se rapporte toujours à la valeur finale, jamais au maximum."
  }
 ],
 "bilan": [
  {
   "q": "La valeur finale d'une réponse indicielle se lit :",
   "choix": [
    "dans le régime transitoire",
    "dans le régime permanent",
    "à l'instant de l'échelon"
   ],
   "bonne": 1,
   "expl": "la valeur finale se lit sur le palier, donc en régime permanent. Mais c'est le régime transitoire qui porte toute l'information : le permanent ne donne qu'un seul nombre. Et la transmittance statique est bien le rapport de ce qui sort à ce qui entre, avec son unité propre. 3pt"
  },
  {
   "q": "La transmittance statique d'un système vaut :",
   "choix": [
    "K = Δs / Δe",
    "K = Δe / Δs",
    "K = s_∞ × Δe"
   ],
   "bonne": 0,
   "expl": "la valeur finale se lit sur le palier, donc en régime permanent. Mais c'est le régime transitoire qui porte toute l'information : le permanent ne donne qu'un seul nombre. Et la transmittance statique est bien le rapport de ce qui sort à ce qui entre, avec son unité propre. 3pt"
  },
  {
   "q": "Pour un premier ordre, la sortie atteint 63 % de sa valeur finale à l'instant :",
   "choix": [
    "τ/3",
    "τ",
    "3τ"
   ],
   "bonne": 1,
   "expl": "ce sont les deux repères du premier ordre : 63 % à τ, 95 % à 3τ. Les retenir dans ce sens évite l'erreur symétrique, qui consiste à croire que la sortie atteint sa valeur finale à τ. 3pt"
  },
  {
   "q": "À t = 3τ, la sortie d'un premier ordre vaut :",
   "choix": [
    "63 % de s_∞",
    "95 % de s_∞",
    "trois fois s_∞"
   ],
   "bonne": 1,
   "expl": "ce sont les deux repères du premier ordre : 63 % à τ, 95 % à 3τ. Les retenir dans ce sens évite l'erreur symétrique, qui consiste à croire que la sortie atteint sa valeur finale à τ. 3pt"
  },
  {
   "q": "Parmi les trois méthodes de détermination de τ, la moins fiable est :",
   "choix": [
    "la lecture à 63 %",
    "la tangente à l'origine",
    "la lecture à 95 %"
   ],
   "bonne": 1,
   "expl": "et c'est un résultat expérimental, pas une opinion. La tangente à l'origine se trace à main levée, dans la zone la plus raide de la courbe : sur un même enregistrement, des binômes différents en tirent des valeurs distantes de près de 20 %, contre 2 % pour la lecture à 95 %. Cette dispersion vient de la méthode, pas du matériel — lire un graphique est une mesure, avec sa propre incertitude. 3pt"
  },
  {
   "q": "Un enregistrement présente un dépassement. On peut affirmer que le système :",
   "choix": [
    "est du premier ordre",
    "est au moins du second ordre",
    "est mal réglé"
   ],
   "bonne": 1,
   "expl": "un premier ordre ne dépasse jamais : un dépassement suffit donc à conclure. En son absence, c'est le départ de la courbe qu'il faut regarder — un premier ordre part avec une tangente oblique, un second ordre amorti démarre en douceur. La réponse « pas de dépassement donc premier ordre » ne vaut que la moitié des points. 3pt"
  },
  {
   "q": "Un système ne dépasse pas, mais sa courbe démarre avec une tangente horizontale. Il est :",
   "choix": [
    "du premier ordre",
    "du second ordre fortement amorti",
    "impossible à classer"
   ],
   "bonne": 1,
   "expl": "un premier ordre ne dépasse jamais : un dépassement suffit donc à conclure. En son absence, c'est le départ de la courbe qu'il faut regarder — un premier ordre part avec une tangente oblique, un second ordre amorti démarre en douceur. La réponse « pas de dépassement donc premier ordre » ne vaut que la moitié des points. 3pt"
  },
  {
   "q": "Le temps de réponse à 5 % est l'instant où la sortie :",
   "choix": [
    "entre pour la première fois dans la bande",
    "ne ressort plus de la bande",
    "atteint sa valeur finale"
   ],
   "bonne": 1,
   "expl": "le temps de réponse se termine à la dernière sortie de la bande, pas à la première entrée : un système qui oscille peut y entrer très tôt et en ressortir plusieurs fois. Et moins il y a d'amortissement, plus le dépassement est grand. 3pt"
  },
  {
   "q": "Quand on diminue l'amortissement d'un second ordre, le dépassement :",
   "choix": [
    "augmente",
    "diminue",
    "ne change pas"
   ],
   "bonne": 0,
   "expl": "le temps de réponse se termine à la dernière sortie de la bande, pas à la première entrée : un système qui oscille peut y entrer très tôt et en ressortir plusieurs fois. Et moins il y a d'amortissement, plus le dépassement est grand. 3pt"
  },
  {
   "q": "Trois réglages sont classés selon le temps de montée, puis selon le temps de réponse à 5 %. Les deux classements :",
   "choix": [
    "sont toujours identiques",
    "peuvent être inversés",
    "ne sont pas comparables"
   ],
   "bonne": 1,
   "expl": "et c'est la question la plus importante de la feuille. Le réglage le moins amorti monte le plus vite et se stabilise le plus lentement : les deux classements sont exactement inversés. Il n'existe donc pas de « réglage le plus rapide » dans l'absolu — cela dépend du critère retenu, et choisir ce critère est une décision d'ingénieur, pas un résultat de mesure. 3pt"
  },
  {
   "q": "Ce qui distingue une boucle fermée d'une boucle ouverte, c'est la présence :",
   "choix": [
    "d'un actionneur plus puissant",
    "d'un capteur et d'un comparateur",
    "d'une consigne"
   ],
   "bonne": 1,
   "expl": "ni la puissance ni la qualité des composants ne distinguent les deux montages : c'est le capteur qui mesure la sortie et le comparateur qui en fait un écart. Sans eux, personne ne vérifie ce qui sort. 3pt"
  },
  {
   "q": "Le tachymètre d'un régulateur indique systématiquement 100 1/min de trop. Le moteur tournera :",
   "choix": [
    "exactement à la consigne, la boucle corrige tout",
    "100 1/min en dessous de la consigne",
    "100 1/min au-dessus de la consigne"
   ],
   "bonne": 1,
   "expl": "la boucle croit le régime trop élevé et réduit l'injection jusqu'à ce que sa mesure corresponde à la consigne : le moteur tourne donc 100 1/min en dessous, sans que rien ne le signale. Un asservissement n'est jamais meilleur que son capteur : il asservit ce qu'on lui donne à mesurer, pas la réalité. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Réponse indicielle » ?",
   "verso": "La <strong>réponse indicielle</strong> est l'enregistrement de la sortie lorsque l'entrée subit un échelon, c'est-à-dire une variation brusque.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Constante de temps » ?",
   "verso": "Un système du premier ordre est entièrement décrit par sa transmittance statique et par sa <strong>constante de temps</strong> τ, qui est l'instant où la sortie atteint 63 % de sa valeur finale. À 3τ, elle en atteint 95 %.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Deux indices, dans cet ordre — qu'y a-t-il à retenir ?",
   "verso": "Un <strong>dépassement</strong> suffit à conclure : le système est au moins du second ordre, car un premier ordre n'en présente jamais.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Deux grandeurs à relever — qu'y a-t-il à retenir ?",
   "verso": "Le <strong>dépassement</strong> D = s_max - s_∞s_∞ dit de combien le système déborde. Le <strong>temps de réponse à 5 %</strong> est l'instant à partir duquel la sortie ne ressort plus de la bande s_∞ ± 5 %.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Les éléments d'une boucle fermée — qu'y a-t-il à retenir ?",
   "verso": "Une <strong>consigne</strong> entre dans un comparateur, qui la confronte à la mesure venue de la chaîne de retour et en forme l'écart.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Le <strong>dépassement</strong> D = s_max - s_∞s_∞ dit …….",
   "rep": "de combien le système déborde",
   "verso": "<strong>de combien le système déborde</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le <strong>temps de réponse à 5 %</strong> est …… de la bande s_∞ ± 5 %.",
   "rep": "l'instant à partir duquel la sortie ne ressort plus",
   "verso": "<strong>l'instant à partir duquel la sortie ne ressort plus</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En l'absence de dépassement, regarder le …… : une tangente horizontale trahit un second ordre fortement amorti.",
   "rep": "départ de la courbe",
   "verso": "<strong>départ de la courbe</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Une <strong>consigne</strong> entre dans un comparateur, qui la confronte à la mesure venue de la …… et en forme l'écart.",
   "rep": "chaîne de retour",
   "verso": "<strong>chaîne de retour</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>réponse indicielle</strong> est l'enregistrement de la sortie lorsque l'entrée subit ……, c'est-à-dire une variation brusque.",
   "rep": "un échelon",
   "verso": "<strong>un échelon</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "La valeur finale d'une réponse indicielle se lit ……",
   "rep": "dans le régime permanent",
   "verso": "<strong>dans le régime permanent</strong> — la valeur finale se lit sur le palier, donc en régime permanent. Mais c'est le régime transitoire qui porte toute l'information : le permanent ne donne qu'un seul nombre.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La transmittance statique d'un système vaut ……",
   "rep": "K = Δs / Δe",
   "verso": "<strong>K = Δs / Δe</strong> — la valeur finale se lit sur le palier, donc en régime permanent. Mais c'est le régime transitoire qui porte toute l'information : le permanent ne donne qu'un seul nombre.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pour un premier ordre, la sortie atteint 63 % de sa valeur finale à l'instant ……",
   "rep": "τ",
   "verso": "<strong>τ</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "À t = 3τ, la sortie d'un premier ordre vaut ……",
   "rep": "95 % de s_∞",
   "verso": "<strong>95 % de s_∞</strong> — ce sont les deux repères du premier ordre : 63 % à τ, 95 % à 3τ. Les retenir dans ce sens évite l'erreur symétrique, qui consiste à croire que la sortie atteint sa valeur finale à τ. 3pt",
   "origine": "bilan"
  }
 ]
};
