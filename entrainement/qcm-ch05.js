/* Genere par outils/construire.py — ne pas editer a la main.
   Chapitre 05 · Puissance, énergie électriques, loi d'Ohm
   Les QCM viennent de ch05_prerequis.tex et ch05_bilan.tex,
   les cartes de cartes/cartes-ch05.json. */
window.CHAPITRE = {
 "num": "5",
 "titre": "Puissance, énergie électriques, loi d'Ohm",
 "niveau": "1re STI2D",
 "prerequis": [
  {
   "q": "L'unité de la résistance électrique est :",
   "choix": [
    "le volt",
    "l'ampère",
    "l'ohm",
    "le watt"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Dans la relation P = U × I, l'intensité s'exprime par :",
   "choix": [
    "I = P × U",
    "I = P/U",
    "I = U/P",
    "I = P - U"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Le carré de 16 vaut :",
   "choix": [
    "32",
    "64",
    "256",
    "160"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Si une grandeur est <strong>doublée</strong> et qu'elle intervient au carré, le résultat est :",
   "choix": [
    "doublé",
    "multiplié par 4",
    "divisé par 2",
    "inchangé"
   ],
   "bonne": 1,
   "expl": "(2x)² = 4x² : c'est toute la clé de l'effet Joule"
  },
  {
   "q": "Deux grandeurs sont proportionnelles si leur graphique est :",
   "choix": [
    "une droite quelconque",
    "une droite passant par l'origine",
    "une courbe",
    "une horizontale"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Le rendement d'un convertisseur se calcule par :",
   "choix": [
    "(P<sub>absorbée</sub>)/(P<sub>utile</sub>)",
    "(P<sub>utile</sub>)/(P<sub>absorbée</sub>)",
    "P<sub>utile</sub> × P<sub>absorbée</sub>",
    "P<sub>absorbée</sub> - P<sub>utile</sub>"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Convertir 2,5 mm² en mètres carrés :",
   "choix": [
    "2,5×10⁻³ m²",
    "2,5×10⁻⁶ m²",
    "2,5×10⁻² m²",
    "2,5×10⁶ m²"
   ],
   "bonne": 1,
   "expl": "1 mm vaut e-3 m, donc 1 mm² vaut e-6 m²"
  }
 ],
 "bilan": [
  {
   "q": "La loi d'Ohm s'écrit :",
   "choix": [
    "U = R/I",
    "U = R × I",
    "U = R + I",
    "U = I/R"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "La caractéristique U(I) d'un conducteur ohmique est :",
   "choix": [
    "une courbe",
    "une droite passant par l'origine",
    "une horizontale",
    "une droite quelconque"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Si l'on double la tension aux bornes d'une résistance, sa valeur R :",
   "choix": [
    "double",
    "est divisée par 2",
    "ne change pas",
    "devient nulle"
   ],
   "bonne": 2,
   "expl": "R est une caractéristique du composant"
  },
  {
   "q": "La puissance d'un dipôle quelconque vaut :",
   "choix": [
    "P = U × I",
    "P = U/I",
    "P = U + I",
    "P = R × U"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Les écritures P = R I² et P = U²/R ne sont valables que pour :",
   "choix": [
    "tous les dipôles",
    "un conducteur ohmique",
    "un moteur",
    "une pile"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Un appareil de 2000 W sous 230 V appelle une intensité de :",
   "choix": [
    "0,115 A",
    "8,7 A",
    "460 A",
    "2000 A"
   ],
   "bonne": 1,
   "expl": "2000/230"
  },
  {
   "q": "La puissance dissipée par effet Joule vaut :",
   "choix": [
    "R × I",
    "R × I²",
    "R/I²",
    "R + I²"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Si l'on double l'intensité dans un câble, les pertes par effet Joule sont :",
   "choix": [
    "doublées",
    "multipliées par 4",
    "divisées par 2",
    "inchangées"
   ],
   "bonne": 1,
   "expl": "l'intensité intervient au carré"
  },
  {
   "q": "Pour un câble, une section plus grande donne une résistance :",
   "choix": [
    "plus grande",
    "plus faible",
    "inchangée",
    "nulle"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "On transporte l'électricité sous haute tension pour :",
   "choix": [
    "augmenter la puissance transportée",
    "réduire l'intensité, donc les pertes",
    "réduire la tension chez l'usager",
    "éviter d'utiliser des transformateurs"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Un moteur absorbe 1500 W et fournit 1275 W. Les pertes valent :",
   "choix": [
    "225 W",
    "2775 W",
    "1275 W",
    "85 W"
   ],
   "bonne": 0,
   "expl": "1500 - 1275"
  },
  {
   "q": "En convention récepteur, un dipôle pour lequel P = U × I < 0 :",
   "choix": [
    "reçoit de l'énergie",
    "fournit de l'énergie",
    "ne consomme rien",
    "est en court-circuit"
   ],
   "bonne": 1,
   "expl": "P < 0 signale un dipôle qui <strong>fournit</strong>"
  },
  {
   "q": "Le rôle principal d'un disjoncteur <strong>magnétothermique</strong> est de protéger :",
   "choix": [
    "l'appareil branché",
    "le câble de l'installation",
    "les personnes",
    "le compteur"
   ],
   "bonne": 1,
   "expl": "il protège le <strong>câble</strong>, d'où l'importance d'accorder son calibre à la section"
  },
  {
   "q": "Le disjoncteur <strong>différentiel</strong> protège les personnes en :",
   "choix": [
    "limitant la tension",
    "comparant l'intensité aller et retour",
    "mesurant la puissance",
    "coupant au bout d'un temps fixe"
   ],
   "bonne": 1,
   "expl": "une différence trahit une fuite de courant, seuil 30 mA"
  },
  {
   "q": "Sous 230 V, une personne à la peau mouillée (R ≈ 1000 Ω) est traversée par :",
   "choix": [
    "2,3 mA",
    "23 mA",
    "230 mA",
    "2300 mA"
   ],
   "bonne": 2,
   "expl": "230/1000 = 230 mA, très au-delà du seuil de fibrillation"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "……",
   "verso": "<strong>proportionnelle</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Lorsqu'un dipôle est fléché en ……, on calcule P = U × I et l'on interprète le <strong>signe</strong> du résultat : si P > 0, le dipôle <strong>reçoit</strong> de l'énergie ; si P < 0, il en <strong>fournit</strong>.",
   "verso": "<strong>convention récepteur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "On flèche en convention récepteur, on calcule, et le ……. Une résistance donne toujours P > 0 — elle ne peut que recevoir.",
   "verso": "<strong>signe répond à notre place</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "C'est la relation la plus lourde de conséquences de tout le chapitre. Selon l'appareil, cet échauffement est un <strong>défaut</strong> (un câble qui chauffe est de l'énergie gaspillée) ou le …… (radiateur, plaque, grille-pain, fer à souder).",
   "verso": "<strong>but recherché</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Pour un conducteur ohmique, la tension à ses bornes est <strong>proportionnelle</strong> à l'intensité qui le traverse :\n……",
   "verso": "U = R × I, U en V, R en Ω, I en A.",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La même relation se réarrange selon ce que l'on cherche :\n……",
   "verso": "U = R I, I = U/R, R = U/I.",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un conducteur de résistance R parcouru par un courant d'intensité I dissipe une puissance thermique :\n……",
   "verso": "P<sub>J</sub> = R × I².",
   "origine": "cours a completer"
  }
 ]
};
