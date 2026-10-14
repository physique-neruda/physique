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
    "forcées",
    "libres",
    "résonantes"
   ],
   "bonne": 1,
   "expl": "c'est la distinction fondatrice du chapitre. En libre, la fréquence est imposée par le système lui-même ; en forcé, elle est imposée de l'extérieur. La résonance, elle, n'est pas un troisième type d'oscillation : c'est ce qui arrive aux oscillations forcées dans un cas particulier. 3pt"
  },
  {
   "q": "En régime forcé établi, le système oscille à :",
   "choix": [
    "la fréquence de l'excitateur",
    "sa fréquence propre",
    "la moyenne des deux"
   ],
   "bonne": 0,
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
    "divisée par 4",
    "divisée par 2",
    "multipliée par 2"
   ],
   "bonne": 1,
   "expl": "f₀ varie en 1/√m : quadrupler m divise f₀ par √4 = 2. La racine carrée écrase les variations : pour diviser une fréquence propre par deux, il ne suffit pas de doubler la masse. 3pt"
  },
  {
   "q": "Les amplitudes successives d'un système amorti valent 42,0, 34,0, 27,6, 22,3 mm. La décroissance est :",
   "choix": [
    "linéaire",
    "sans loi identifiable",
    "géométrique, de rapport voisin de 0,81"
   ],
   "bonne": 2,
   "expl": "les rapports successifs valent 0,810, 0,812, 0,808 : ils sont constants, ce qui est la signature d'une décroissance géométrique, donc exponentielle. L'amplitude ne perd pas une quantité fixe, elle est multipliée par un facteur fixe. En revanche, la pseudo-période ne bouge pratiquement pas : le système garde son rythme en perdant son ampleur — ce qui permet de mesurer une fréquence propre sur un système amorti. 3pt"
  },
  {
   "q": "Lorsqu'on augmente l'amortissement d'un système, la pseudo-période :",
   "choix": [
    "change très peu",
    "change beaucoup",
    "devient infinie"
   ],
   "bonne": 0,
   "expl": "les rapports successifs valent 0,810, 0,812, 0,808 : ils sont constants, ce qui est la signature d'une décroissance géométrique, donc exponentielle. L'amplitude ne perd pas une quantité fixe, elle est multipliée par un facteur fixe. En revanche, la pseudo-période ne bouge pratiquement pas : le système garde son rythme en perdant son ampleur — ce qui permet de mesurer une fréquence propre sur un système amorti. 3pt"
  },
  {
   "q": "Il y a résonance lorsque la fréquence d'excitation :",
   "choix": [
    "est voisine de la fréquence propre",
    "est très élevée",
    "est très faible"
   ],
   "bonne": 0,
   "expl": "la résonance ne dépend ni du niveau d'excitation, ni de la valeur absolue de la fréquence, mais de la coïncidence entre l'excitation et la fréquence propre. Et moins il y a d'amortissement, plus le pic est haut et étroit — c'est précisément pourquoi un système peu amorti est dangereux : il monte très haut, mais dans une plage si étroite qu'on peut la manquer au balayage. 3pt"
  },
  {
   "q": "Plus l'amortissement est faible, plus le pic de résonance est :",
   "choix": [
    "bas et large",
    "haut et étroit",
    "décalé vers les hautes fréquences"
   ],
   "bonne": 1,
   "expl": "la résonance ne dépend ni du niveau d'excitation, ni de la valeur absolue de la fréquence, mais de la coïncidence entre l'excitation et la fréquence propre. Et moins il y a d'amortissement, plus le pic est haut et étroit — c'est précisément pourquoi un système peu amorti est dangereux : il monte très haut, mais dans une plage si étroite qu'on peut la manquer au balayage. 3pt"
  },
  {
   "q": "Un rotor tourne à 900 1/min. Il excite la structure à :",
   "choix": [
    "54000 Hz",
    "900 Hz",
    "15 Hz"
   ],
   "bonne": 2,
   "expl": "900/60 = 15 Hz : un régime se convertit en fréquence en divisant par 60, premier geste de tout diagnostic. Et un pic exactement à la fréquence de rotation désigne un balourd ; c'est un pic au double qui orienterait vers un désalignement. On ne cherche pas d'où vient le bruit, on cherche à quelle fréquence il se produit. 3pt"
  },
  {
   "q": "Un pic vibratoire mesuré exactement à la fréquence de rotation oriente vers :",
   "choix": [
    "un désalignement",
    "un balourd",
    "un défaut de roulement"
   ],
   "bonne": 1,
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
    "ne prouve rien : le protocole était trop grossier pour détecter un écart",
    "prouve que les deux fréquences sont égales",
    "est invalide car on ne peut pas comparer deux mesures"
   ],
   "bonne": 0,
   "expl": "et c'est la question la plus importante de la feuille. Avec un pas de 0,50 Hz, l'incertitude sur la position du maximum atteint 0,3 Hz, soit 7 % : un tel protocole aurait conclu « compatible » même si l'écart réel avait été énorme. Un protocole aveugle conclut toujours à la compatibilité, et sa conclusion ne vaut rien. La précision ne vient pas ici de la qualité de l'appareil, mais du pas de balayage — c'est-à-dire d'un choix. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'un oscillateur ? Par quoi est-il caractérisé ?",
   "verso": "Un système qui, écarté de l'équilibre, y revient <b>en le dépassant</b>. Caractérisé par sa <b>période propre T<sub>0</sub></b> et sa <b>fréquence propre f<sub>0</sub> = 1/T<sub>0</sub></b>.",
   "origine": "Cours §1 Oscillateur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Fréquence propre d'un système masse-ressort ? Comment doubler f<sub>0</sub> ?",
   "verso": "<b>f<sub>0</sub> = (1/2π) √(k/m)</b> : en √k et en 1/√m. Doubler f<sub>0</sub> → <b>quadrupler la raideur</b>.",
   "origine": "Cours §1 Masse-ressort"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quels sont les trois régimes d'oscillation selon l'amortissement ?",
   "verso": "<b>Périodique</b> : sans amortissement (idéal).<br><b>Pseudopériodique</b> : oscille en perdant de l'amplitude.<br><b>Apériodique</b> : retour sans oscillation.",
   "origine": "Cours §2 Les trois régimes"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Augmenter toujours l'amortissement accélère-t-il le retour à l'équilibre ?",
   "verso": "<b>Non</b> : au-delà du seuil apériodique, il le <b>ralentit</b>. Un amortisseur est réglé près de ce seuil.",
   "origine": "Cours §2 Plus d'amortissement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>En régime pseudopériodique, comment évoluent les amplitudes ? la période ?",
   "verso": "Les amplitudes décroissent dans un <b>rapport constant</b> ; la période reste <b>pratiquement inchangée</b>.",
   "origine": "Cours §3 L'amortissement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>À quelle fréquence vibre un système en oscillations libres ? forcées ?",
   "verso": "<b>Libres</b> : à sa <b>fréquence propre</b>.<br><b>Forcées</b> : à la fréquence de l'<b>excitateur</b> ; seule l'amplitude dépend du système.",
   "origine": "Cours §4 Libres et forcées"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que la résonance ? Effet de l'amortissement ?",
   "verso": "L'amplitude passe par un <b>maximum</b> quand la fréquence d'excitation approche <b>f<sub>0</sub></b>. Amortissement faible → pic <b>haut et étroit</b>.",
   "origine": "Cours §5 La résonance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Où recherche-t-on la résonance ? Où la redoute-t-on ?",
   "verso": "Recherchée : crible vibrant, compacteur, table vibrante. Redoutée : cabine, tôlerie, tuyauterie, échappement.",
   "origine": "Cours §5 Recherchée ou redoutée"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>À quelle fréquence excite un balourd ? Que signale un pic au double ?",
   "verso": "À la <b>fréquence de rotation</b> : <b>f = N/60</b>. Un pic à <b>2f</b> oriente vers un <b>désalignement</b>.",
   "origine": "Cours §6.1 Le balourd"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quand des plots élastiques isolent-ils efficacement des vibrations ?",
   "verso": "Seulement si <b>f &gt; √2 × f<sub>0</sub></b> (f<sub>0</sub> du système sur plots). En dessous, ils <b>amplifient</b>.",
   "origine": "Cours §6.2 Règle de l'isolation"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans quel ordre traiter une vibration ?",
   "verso": "1. <b>Supprimer l'excitation</b> (équilibrer, aligner).<br>2. <b>Déplacer f<sub>0</sub></b> (raideur du support).<br>3. <b>Amortir</b> (dernier recours).",
   "origine": "Cours §6.2 Traiter une vibration"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment exploiter un enregistrement d'oscillations libres ?",
   "verso": "1. Durée de <b>plusieurs</b> oscillations ÷ leur nombre → T<sub>0</sub>.<br>2. f<sub>0</sub> = 1/T<sub>0</sub>.<br>3. Amplitudes successives du même côté.<br>4. Rapports X<sub>2</sub>/X<sub>1</sub>, X<sub>3</sub>/X<sub>2</sub>… <b>égaux</b> → amortissement visqueux.",
   "origine": "Cours §3 Méthode — Oscillations libres"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment relever une courbe de résonance ?",
   "verso": "1. Excitateur à <b>amplitude constante</b>.<br>2. Balayer par <b>pas réguliers</b>, attendre le régime établi.<br>3. Repérer le maximum, <b>balayage plus fin</b> autour.<br>4. Comparer à f<sub>0</sub> mesurée en libre.",
   "origine": "Cours §5 Méthode — Courbe de résonance"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>m = 0,200 kg, k = 120 N/m. Comment calculer f<sub>0</sub> et T<sub>0</sub> ?",
   "verso": "1. f<sub>0</sub> = (1/2π) √(120/0,200) = <b>3,90 Hz</b>.<br>2. T<sub>0</sub> = 1/f<sub>0</sub> = <b>0,256 s</b>.",
   "origine": "Cours §1 Ordre de grandeur"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
