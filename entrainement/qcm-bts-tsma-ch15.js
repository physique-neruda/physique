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
    "dans le régime permanent",
    "dans le régime transitoire",
    "à l'instant de l'échelon"
   ],
   "bonne": 0,
   "expl": "la valeur finale se lit sur le palier, donc en régime permanent. Mais c'est le régime transitoire qui porte toute l'information : le permanent ne donne qu'un seul nombre. Et la transmittance statique est bien le rapport de ce qui sort à ce qui entre, avec son unité propre. 3pt"
  },
  {
   "q": "La transmittance statique d'un système vaut :",
   "choix": [
    "K = s_∞ × Δe",
    "K = Δe / Δs",
    "K = Δs / Δe"
   ],
   "bonne": 2,
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
    "trois fois s_∞",
    "95 % de s_∞"
   ],
   "bonne": 2,
   "expl": "ce sont les deux repères du premier ordre : 63 % à τ, 95 % à 3τ. Les retenir dans ce sens évite l'erreur symétrique, qui consiste à croire que la sortie atteint sa valeur finale à τ. 3pt"
  },
  {
   "q": "Parmi les trois méthodes de détermination de τ, la moins fiable est :",
   "choix": [
    "la tangente à l'origine",
    "la lecture à 63 %",
    "la lecture à 95 %"
   ],
   "bonne": 0,
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
    "ne ressort plus de la bande",
    "entre pour la première fois dans la bande",
    "atteint sa valeur finale"
   ],
   "bonne": 0,
   "expl": "le temps de réponse se termine à la dernière sortie de la bande, pas à la première entrée : un système qui oscille peut y entrer très tôt et en ressortir plusieurs fois. Et moins il y a d'amortissement, plus le dépassement est grand. 3pt"
  },
  {
   "q": "Quand on diminue l'amortissement d'un second ordre, le dépassement :",
   "choix": [
    "ne change pas",
    "diminue",
    "augmente"
   ],
   "bonne": 2,
   "expl": "le temps de réponse se termine à la dernière sortie de la bande, pas à la première entrée : un système qui oscille peut y entrer très tôt et en ressortir plusieurs fois. Et moins il y a d'amortissement, plus le dépassement est grand. 3pt"
  },
  {
   "q": "Trois réglages sont classés selon le temps de montée, puis selon le temps de réponse à 5 %. Les deux classements :",
   "choix": [
    "sont toujours identiques",
    "ne sont pas comparables",
    "peuvent être inversés"
   ],
   "bonne": 2,
   "expl": "et c'est la question la plus importante de la feuille. Le réglage le moins amorti monte le plus vite et se stabilise le plus lentement : les deux classements sont exactement inversés. Il n'existe donc pas de « réglage le plus rapide » dans l'absolu — cela dépend du critère retenu, et choisir ce critère est une décision d'ingénieur, pas un résultat de mesure. 3pt"
  },
  {
   "q": "Ce qui distingue une boucle fermée d'une boucle ouverte, c'est la présence :",
   "choix": [
    "d'un capteur et d'un comparateur",
    "d'un actionneur plus puissant",
    "d'une consigne"
   ],
   "bonne": 0,
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
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que la réponse indicielle ? Où se trouve l'information sur le comportement du système ?",
   "verso": "La sortie enregistrée quand l'entrée subit un <b>échelon</b>. Toute l'information est dans le <b>régime transitoire</b>.",
   "origine": "Cours §1 Réponse indicielle"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la transmittance statique K. Dépend-elle de l'amortissement ?",
   "verso": "<b>K = Δs / Δe</b> en régime permanent, avec unité (V/°C…). <b>Non</b> : c'est un contrôle de cohérence entre essais.",
   "origine": "Cours §1 Transmittance statique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Constante de temps d'un premier ordre ? À 3τ ?",
   "verso": "<b>τ</b> : instant où la sortie atteint <b>63 %</b> de sa valeur finale. À <b>3τ</b> : <b>95 %</b>.",
   "origine": "Cours §2 Premier ordre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment reconnaître un système du second ordre ?",
   "verso": "Un <b>dépassement</b> suffit (un premier ordre n'en a jamais). Sans dépassement : <b>tangente horizontale</b> au départ → second ordre amorti.",
   "origine": "Cours §3.1 Reconnaître l'ordre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formule du dépassement (TSMA) ? Définition du temps de réponse à 5 % ?",
   "verso": "<b>D = (s<sub>max</sub> − s<sub>∞</sub>) / s<sub>∞</sub></b>.<br>t<sub>5%</sub> : depuis l'échelon jusqu'à la <b>dernière sortie</b> de la bande s<sub>∞</sub> ± 5 %.",
   "origine": "Cours §3.2 Dépassement et temps de réponse"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Temps de montée et temps de réponse classent-ils les réglages dans le même ordre ?",
   "verso": "<b>Non</b>, souvent en sens inverse : pas de « plus rapide » sans critère choisi.",
   "origine": "Cours §3 Temps de montée et temps de réponse"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Éléments d'une boucle fermée ?",
   "verso": "<b>Consigne</b> → <b>comparateur</b> (écart) → <b>correcteur</b> → <b>actionneur</b> → <b>système</b> → sortie ; <b>capteur</b> et chaîne de retour vers le comparateur.",
   "origine": "Cours §4.1 Schéma fonctionnel"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qui distingue une boucle fermée d'une boucle ouverte ?",
   "verso": "La présence du <b>capteur</b> et du <b>comparateur</b>.",
   "origine": "Cours §4.1 Ce qui distingue les deux montages"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quel est l'intérêt d'une boucle fermée ? Sa correction est-elle instantanée ?",
   "verso": "Elle <b>compense les perturbations sans les connaître</b> et dépend moins du matériel. <b>Non</b> : il faut un écart pour réagir ; la sortie <b>revient</b> à la consigne.",
   "origine": "Cours §4.2 Intérêt d'un asservissement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que se passe-t-il si le capteur d'un asservissement est faux ?",
   "verso": "La boucle asservit <b>ce qu'on lui donne à mesurer</b> : la sortie réelle reste décalée, sans que rien ne le signale.",
   "origine": "Cours §4.3 Jamais meilleur que son capteur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment déterminer τ sur l'enregistrement d'un premier ordre ?",
   "verso": "1. Lire la <b>valeur finale</b> s<sub>∞</sub>.<br>2. Calculer <b>63 %</b>, lire l'instant : <b>τ</b>.<br>3. Vérifier : instant à <b>95 %</b> ÷ 3.<br>4. Les deux concordent (sinon palier non atteint).",
   "origine": "Cours §2 Méthode — Déterminer τ"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment exploiter la réponse indicielle d'un second ordre ?",
   "verso": "1. Lire s<sub>∞</sub> et s<sub>max</sub>.<br>2. <b>D = (s<sub>max</sub> − s<sub>∞</sub>)/s<sub>∞</sub></b>.<br>3. Tracer la bande ± 5 %.<br>4. t<sub>5%</sub> : <b>dernière sortie</b> de la bande.<br>5. K = Δs/Δe.",
   "origine": "Cours §3.2 Second ordre"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
