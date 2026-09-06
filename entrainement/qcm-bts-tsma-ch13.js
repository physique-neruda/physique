/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 13 · Oscillations et résonance
   Le bilan vient de ch13_bilan.tex, les cartes des \trou{} de
   ch13_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "13",
 "titre": "Oscillations et résonance",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Un enregistrement montre 20 oscillations en 5,12 s. La période vaut :",
   "choix": [
    "5,12 s",
    "0,256 s",
    "102 s",
    "0,0256 s"
   ],
   "bonne": 1,
   "expl": "T = 5,12/20. Mesurer sur 20 oscillations plutôt qu'une seule divise l'incertitude par 20."
  },
  {
   "q": "Avec T = 0,256 s, la fréquence vaut :",
   "choix": [
    "0,256 Hz",
    "3,91 Hz",
    "25,6 Hz",
    "2,56 Hz"
   ],
   "bonne": 1,
   "expl": "f = 1/T = 3,91 Hz."
  },
  {
   "q": "Si x est multiplié par 4, la grandeur y = √x est multipliée par :",
   "choix": [
    "4",
    "2",
    "16",
    "√4 = 1,4"
   ],
   "bonne": 1,
   "expl": "Une racine carrée amortit les variations : quadrupler la raideur ne double que la fréquence propre."
  },
  {
   "q": "Convertir un régime de 2400 tr/min en hertz :",
   "choix": [
    "2400 Hz",
    "40 Hz",
    "144 000 Hz",
    "4 Hz"
   ],
   "bonne": 1,
   "expl": "2400/60 = 40 Hz. Un régime moteur se convertit en divisant par 60."
  },
  {
   "q": "Les rapports 34,0/42,0 ; 27,6/34,0 ; 22,3/27,6 valent tous 0,81. Cela signale :",
   "choix": [
    "une décroissance linéaire",
    "une décroissance géométrique",
    "une croissance",
    "une erreur de mesure"
   ],
   "bonne": 1,
   "expl": "Un rapport constant d'un terme au suivant est la signature d'une décroissance exponentielle — ici, l'amortissement."
  },
  {
   "q": "Une suite part de 42,0 et chaque terme vaut 0,81 fois le précédent. Le quatrième terme vaut :",
   "choix": [
    "34,0",
    "27,6",
    "22,3",
    "18,1"
   ],
   "bonne": 2,
   "expl": "42,0 → 34,0 → 27,6 → 22,3."
  }
 ],
 "bilan": [
  {
   "q": "Un système écarté puis lâché, sans excitation extérieure, effectue des oscillations :",
   "choix": [
    "libres",
    "forcées",
    "résonantes"
   ],
   "bonne": 0,
   "expl": "c'est la distinction fondatrice du chapitre. En libre, la fréquence est imposée par le système lui-même ; en forcé, elle est imposée de l'extérieur. La résonance, elle, n'est pas un troisième type d'oscillation : c'est ce qui arrive aux oscillations forcées dans un cas particulier. 3pt"
  },
  {
   "q": "En régime forcé établi, le système oscille à :",
   "choix": [
    "sa fréquence propre",
    "la fréquence de l'excitateur",
    "la moyenne des deux"
   ],
   "bonne": 1,
   "expl": "c'est la distinction fondatrice du chapitre. En libre, la fréquence est imposée par le système lui-même ; en forcé, elle est imposée de l'extérieur. La résonance, elle, n'est pas un troisième type d'oscillation : c'est ce qui arrive aux oscillations forcées dans un cas particulier. 3pt"
  },
  {
   "q": "Un enregistrement montre un retour à l'équilibre sans aucune oscillation. Le régime est :",
   "choix": [
    "périodique",
    "pseudopériodique",
    "apériodique"
   ],
   "bonne": 2,
   "expl": "un retour sans oscillation signe un amortissement fort : c'est le régime apériodique, et c'est celui que l'on recherche pour un amortisseur de suspension. Le régime périodique pur, lui, n'existe pas en pratique. 3pt"
  },
  {
   "q": "La fréquence propre d'un système masse-ressort vaut f₀ = 1/2π√(k/m). Si on quadruple la masse, f₀ est :",
   "choix": [
    "divisée par 2",
    "divisée par 4",
    "multipliée par 2"
   ],
   "bonne": 0,
   "expl": "f₀ varie en 1/√m : quadrupler m divise f₀ par √4 = 2. La racine carrée écrase les variations : pour diviser une fréquence propre par deux, il ne suffit pas de doubler la masse. 3pt"
  },
  {
   "q": "Les amplitudes successives d'un système amorti valent 42,0, 34,0, 27,6, 22,3 mm. La décroissance est :",
   "choix": [
    "linéaire",
    "géométrique, de rapport voisin de 0,81",
    "sans loi identifiable"
   ],
   "bonne": 1,
   "expl": "les rapports successifs valent 0,810, 0,812, 0,808 : ils sont constants, ce qui est la signature d'une décroissance géométrique, donc exponentielle. L'amplitude ne perd pas une quantité fixe, elle est multipliée par un facteur fixe. En revanche, la pseudo-période ne bouge pratiquement pas : le système garde son rythme en perdant son ampleur — ce qui permet de mesurer une fréquence propre sur un système amorti. 3pt"
  },
  {
   "q": "Lorsqu'on augmente l'amortissement d'un système, la pseudo-période :",
   "choix": [
    "change beaucoup",
    "change très peu",
    "devient infinie"
   ],
   "bonne": 1,
   "expl": "les rapports successifs valent 0,810, 0,812, 0,808 : ils sont constants, ce qui est la signature d'une décroissance géométrique, donc exponentielle. L'amplitude ne perd pas une quantité fixe, elle est multipliée par un facteur fixe. En revanche, la pseudo-période ne bouge pratiquement pas : le système garde son rythme en perdant son ampleur — ce qui permet de mesurer une fréquence propre sur un système amorti. 3pt"
  },
  {
   "q": "Il y a résonance lorsque la fréquence d'excitation :",
   "choix": [
    "est très élevée",
    "est voisine de la fréquence propre",
    "est très faible"
   ],
   "bonne": 1,
   "expl": "la résonance ne dépend ni du niveau d'excitation, ni de la valeur absolue de la fréquence, mais de la coïncidence entre l'excitation et la fréquence propre. Et moins il y a d'amortissement, plus le pic est haut et étroit — c'est précisément pourquoi un système peu amorti est dangereux : il monte très haut, mais dans une plage si étroite qu'on peut la manquer au balayage. 3pt"
  },
  {
   "q": "Plus l'amortissement est faible, plus le pic de résonance est :",
   "choix": [
    "haut et étroit",
    "bas et large",
    "décalé vers les hautes fréquences"
   ],
   "bonne": 0,
   "expl": "la résonance ne dépend ni du niveau d'excitation, ni de la valeur absolue de la fréquence, mais de la coïncidence entre l'excitation et la fréquence propre. Et moins il y a d'amortissement, plus le pic est haut et étroit — c'est précisément pourquoi un système peu amorti est dangereux : il monte très haut, mais dans une plage si étroite qu'on peut la manquer au balayage. 3pt"
  },
  {
   "q": "Un rotor tourne à 900 1/min. Il excite la structure à :",
   "choix": [
    "15 Hz",
    "900 Hz",
    "54000 Hz"
   ],
   "bonne": 0,
   "expl": "900/60 = 15 Hz : un régime se convertit en fréquence en divisant par 60, premier geste de tout diagnostic. Et un pic exactement à la fréquence de rotation désigne un balourd ; c'est un pic au double qui orienterait vers un désalignement. On ne cherche pas d'où vient le bruit, on cherche à quelle fréquence il se produit. 3pt"
  },
  {
   "q": "Un pic vibratoire mesuré exactement à la fréquence de rotation oriente vers :",
   "choix": [
    "un balourd",
    "un désalignement",
    "un défaut de roulement"
   ],
   "bonne": 0,
   "expl": "900/60 = 15 Hz : un régime se convertit en fréquence en divisant par 60, premier geste de tout diagnostic. Et un pic exactement à la fréquence de rotation désigne un balourd ; c'est un pic au double qui orienterait vers un désalignement. On ne cherche pas d'où vient le bruit, on cherche à quelle fréquence il se produit. 3pt"
  },
  {
   "q": "Des plots élastiques n'isolent réellement des vibrations que si :",
   "choix": [
    "f < f₀",
    "f = f₀",
    "f > √2 f₀"
   ],
   "bonne": 2,
   "expl": "c'est le piège classique du montage antivibratoire. Des plots forment avec la masse portée un nouvel oscillateur : en dessous de √2 f₀ on amplifie les vibrations au lieu de les atténuer. Monter une cabine sur des silentblocs mal choisis peut donc empirer les choses. 3pt"
  },
  {
   "q": "On cherche un maximum de résonance en balayant par pas de 0,50 Hz, et l'on conclut que f_rés est compatible avec f₀. Cette conclusion :",
   "choix": [
    "prouve que les deux fréquences sont égales",
    "ne prouve rien : le protocole était trop grossier pour détecter un écart",
    "est invalide car on ne peut pas comparer deux mesures"
   ],
   "bonne": 1,
   "expl": "et c'est la question la plus importante de la feuille. Avec un pas de 0,50 Hz, l'incertitude sur la position du maximum atteint 0,3 Hz, soit 7 % : un tel protocole aurait conclu « compatible » même si l'écart réel avait été énorme. Un protocole aveugle conclut toujours à la compatibilité, et sa conclusion ne vaut rien. La précision ne vient pas ici de la qualité de l'appareil, mais du pas de balayage — c'est-à-dire d'un choix. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "En revanche, la durée d'un aller-retour reste …….",
   "verso": "<strong>pratiquement inchangée</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Plus l'amortissement est faible, plus le pic est …….",
   "verso": "<strong>haut et étroit</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Sans amortissement, le régime est …… — cas idéal, jamais atteint.",
   "verso": "<strong>périodique</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Pour une vitesse de N tours par minute, cette fréquence vaut …… en hertz.",
   "verso": "<strong>f = N/60</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En régime pseudopériodique, les amplitudes successives se succèdent dans un …….",
   "verso": "<strong>rapport constant</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Avec un amortissement fort, il devient apériodique : le retour à l'équilibre se fait …….",
   "verso": "<strong>sans aucune oscillation</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Avec un amortissement modéré, il est …… : le système oscille encore en perdant de l'amplitude.",
   "verso": "<strong>pseudopériodique</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un <strong>oscillateur</strong> est un système qui, écarté de sa position d'équilibre, y revient …….",
   "verso": "<strong>en la dépassant</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Avec un amortissement fort, il devient …… : le retour à l'équilibre se fait sans aucune oscillation.",
   "verso": "<strong>apériodique</strong>",
   "origine": "cours a completer"
  }
 ]
};
