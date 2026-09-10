/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 8 — Corrosion, risques chimiques et acoustiques
   Le bilan vient de CRSA_ch08_bilan.tex, les cartes des \trou{} de
   CRSA_ch08_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "8",
 "titre": "Corrosion, risques chimiques et acoustiques",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Combien vaut log(10⁶) ?",
   "choix": [
    "6",
    "10⁶",
    "0,6",
    "60"
   ],
   "bonne": 0,
   "expl": "Le logarithme décimal d'une puissance de dix, c'est son exposant. C'est toute la définition."
  },
  {
   "q": "Sachant que log 2 = 0,30, combien vaut log 20 ?",
   "choix": [
    "1,30",
    "0,60",
    "3,00",
    "0,30"
   ],
   "bonne": 0,
   "expl": "log 20 = log 2 + log 10 = 0,30 + 1 = 1,30. Multiplier par dix ajoute un au logarithme : c'est ce qui fait les décibels."
  },
  {
   "q": "Écrire 10^8,4 en notation scientifique, à deux chiffres significatifs :",
   "choix": [
    "2,5×10⁸",
    "8,4×10⁸",
    "2,5×10⁹",
    "1,4×10⁸"
   ],
   "bonne": 0,
   "expl": "10^0,4 = 2,5, donc 10^8,4 = 2,5×10⁸. On sépare la partie entière de l'exposant du reste."
  },
  {
   "q": "On résout 10 log(x) = 88 puis 10 log(x) = 91. Le rapport des deux solutions vaut :",
   "choix": [
    "2,0",
    "1,03",
    "3,0",
    "10"
   ],
   "bonne": 0,
   "expl": "3 décibels d'écart, c'est 10^0,3 = 2,0 : un doublement. Trois décibels de plus, deux fois plus d'énergie sonore."
  },
  {
   "q": "Compléter : Al → Al³⁺ + … e⁻",
   "choix": [
    "3",
    "2",
    "1",
    "6"
   ],
   "bonne": 0,
   "expl": "Trois électrons cédés, pour équilibrer la charge : l'aluminium passe de 0 à +3."
  },
  {
   "q": "Parmi −0,44 ; +0,34 ; −2,37 ; 0,00 ; −0,76, le plus petit est :",
   "choix": [
    "−2,37",
    "−0,76",
    "0,00",
    "−0,44"
   ],
   "bonne": 0,
   "expl": "−2,37. Chez les négatifs, plus le nombre paraît grand, plus il est petit — et c'est ce potentiel-là qui donne le métal le plus attaqué."
  }
 ],
 "bilan": [
  {
   "q": "Un réducteur est une espèce qui :",
   "choix": [
    "capte des électrons",
    "cède des électrons",
    "capte des protons",
    "ne réagit pas"
   ],
   "bonne": 1,
   "expl": "Il réduit l'autre espèce en lui cédant ses électrons. Le nom dit ce qu'il fait à l'autre, pas ce qu'il subit."
  },
  {
   "q": "Un métal qui se corrode subit :",
   "choix": [
    "une réduction",
    "une oxydation",
    "une dilution",
    "une fusion"
   ],
   "bonne": 1,
   "expl": "Il perd des électrons : c'est bien une oxydation. L'inversion oxydation / réduction est la faute la plus coûteuse du chapitre."
  },
  {
   "q": "Entre les couples Cu²+/Cu (+0,34) et Fe²+/Fe (-0,44), l'oxydant de la réaction est :",
   "choix": [
    "Fe",
    "Fe²+",
    "Cu²+",
    "Cu"
   ],
   "bonne": 2,
   "expl": "Le potentiel le plus élevé fournit l'oxydant : +0,34 > -0,44."
  },
  {
   "q": "Pour que la corrosion du fer se produise, il faut simultanément :",
   "choix": [
    "le fer et l'eau",
    "le fer et le dioxygène",
    "le fer, l'eau et le dioxygène",
    "le fer seul suffit"
   ],
   "bonne": 2,
   "expl": "Les trois sont nécessaires — et c'est pourquoi toute protection consiste à en supprimer un."
  },
  {
   "q": "Dans la demi-équation O2 + 2 H2O + 4 e- -> 4 OH-, le dioxygène :",
   "choix": [
    "est oxydé",
    "est réduit",
    "joue le rôle de réducteur",
    "ne change pas"
   ],
   "bonne": 1,
   "expl": "Il gagne quatre électrons : c'est une réduction, et O2 est l'oxydant."
  },
  {
   "q": "Pour protéger une cuve en acier (-0,44), on dispose d'argent (+0,80), de cuivre (+0,34) et de magnésium (-2,37). L'anode sacrificielle doit être en :",
   "choix": [
    "argent",
    "cuivre",
    "magnésium",
    "n'importe lequel des trois"
   ],
   "bonne": 2,
   "expl": "Seul le magnésium a un potentiel inférieur à celui du fer. Argent et cuivre, plus oxydants, aggraveraient la corrosion de la cuve."
  },
  {
   "q": "La galvanisation est une protection :",
   "choix": [
    "passive, car elle recouvre",
    "active, car le zinc s'oxyde à la place du fer",
    "active, car elle isole",
    "ni l'une ni l'autre"
   ],
   "bonne": 1,
   "expl": "Le zinc ne se contente pas de recouvrir : son potentiel étant plus bas, il s'oxyde à la place de l'acier même si le revêtement est rayé."
  },
  {
   "q": "Une solution de pH 12,5 est :",
   "choix": [
    "acide",
    "neutre",
    "basique",
    "sans danger"
   ],
   "bonne": 2,
   "expl": "12,5 > 7. Et elle est aussi dangereuse qu'un acide fort : une base concentrée est corrosive."
  },
  {
   "q": "Entre une solution de pH 2 et une solution de pH 4, l'acidité est multipliée par :",
   "choix": [
    "2",
    "10",
    "100",
    "1000"
   ],
   "bonne": 2,
   "expl": "Deux unités de pH d'écart, sur une échelle logarithmique, font un facteur 10² = 100. Répondre 2 est le piège de l'énoncé."
  },
  {
   "q": "L'appareil qui mesure un niveau d'intensité sonore s'appelle :",
   "choix": [
    "un oscilloscope",
    "un sonomètre",
    "un audiomètre",
    "un pH-mètre"
   ],
   "bonne": 1,
   "expl": "Le sonomètre. L'audiomètre, lui, teste l'audition d'une personne : c'est l'appareil du suivi médical, pas celui du poste de travail."
  },
  {
   "q": "Deux machines identiques de 85 dB fonctionnent côte à côte. Le sonomètre indique environ :",
   "choix": [
    "85 dB",
    "88 dB",
    "170 dB",
    "95 dB"
   ],
   "bonne": 1,
   "expl": "Doubler l'intensité ajoute 3 dB. Les niveaux en décibels ne s'additionnent jamais directement."
  },
  {
   "q": "À un poste où le niveau d'exposition ramené à 8 h vaut 86 dB(A), le port de protecteurs auditifs est :",
   "choix": [
    "facultatif",
    "obligatoire",
    "interdit",
    "à la discrétion du salarié"
   ],
   "bonne": 1,
   "expl": "Au-delà de 85 dB(A), le port devient obligatoire, le local doit être signalé et un suivi audiométrique organisé. Entre 80 et 85 , les protections sont seulement mises à disposition. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Oxydant, réducteur » ?",
   "verso": "Un <strong>oxydant</strong> est une espèce capable de capter un ou plusieurs électrons. Un <strong>réducteur</strong> est une espèce capable de céder un ou plusieurs électrons.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Corrosion » ?",
   "verso": "La corrosion est la dégradation d'un métal par oxydation au contact de son environnement : air humide, eau, sels, produits acides.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Fiche de données de sécurité » ?",
   "verso": "La <strong>FDS</strong> est le document qui accompagne obligatoirement tout produit dangereux. Elle indique :",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Niveau d'intensité sonore » ?",
   "verso": "Le niveau d'intensité sonore L se mesure en <strong>décibels</strong> (dB) à l'aide d'un sonomètre. Il se déduit de l'intensité sonore I, en W/meter² :",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "La règle de lecture — qu'y a-t-il à retenir ?",
   "verso": "Plus le potentiel d'un couple est <strong>élevé</strong>, plus son oxydant est fort. Plus il est <strong>bas</strong>, plus son réducteur est fort. Une réaction se produit spontanément entre l'oxydant du couple haut et le réducteur du couple bas.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Les trois ingrédients — qu'y a-t-il à retenir ?",
   "verso": "La corrosion du fer exige simultanément le métal, l'eau et le dioxygène. En supprimer un seul suffit à l'arrêter — c'est ce que fait toute protection.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Deux familles, deux logiques — qu'y a-t-il à retenir ?",
   "verso": "Une protection <strong>passive</strong> isole le métal de son environnement : elle cesse de protéger dès qu'elle est percée. Une protection <strong>active</strong> sacrifie un métal plus réducteur : elle protège encore après une rayure.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Un <strong>oxydant</strong> est une espèce capable de …….",
   "rep": "capter un ou plusieurs électrons",
   "verso": "<strong>capter un ou plusieurs électrons</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un <strong>réducteur</strong> est une espèce capable de …….",
   "rep": "céder un ou plusieurs électrons",
   "verso": "<strong>céder un ou plusieurs électrons</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Deux machines de 85 dB côte à côte donnent donc ……, et non 170 .",
   "rep": "88 dB",
   "verso": "<strong>88 dB</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Doubler l'intensité ajoute …… ; la multiplier par dix en ajoute 10 .",
   "rep": "3 dB",
   "verso": "<strong>3 dB</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Doubler l'intensité ajoute 3 dB ; la multiplier par dix en ajoute …….",
   "rep": "10",
   "verso": "<strong>10</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un réducteur est une espèce qui ……",
   "rep": "cède des électrons",
   "verso": "<strong>cède des électrons</strong> — Il réduit l'autre espèce en lui cédant ses électrons. Le nom dit ce qu'il fait à l'autre, pas ce qu'il subit.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un métal qui se corrode subit ……",
   "rep": "une oxydation",
   "verso": "<strong>une oxydation</strong>",
   "origine": "bilan"
  }
 ]
};
