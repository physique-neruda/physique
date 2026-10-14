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
   "expl": "40,1 + 12,0 + 3×16,0 = 100,1. La réponse « le gramme » correspond à un oubli du facteur 3 sur l'oxygène. 3pt"
  },
  {
   "q": "La masse molaire de CaCO₃ vaut (Ca 40,1 ; C 12,0 ; O 16,0) :",
   "choix": [
    "68,1 g/mol",
    "116,1 g/mol",
    "100,1 g/mol"
   ],
   "bonne": 2,
   "expl": "40,1 + 12,0 + 3×16,0 = 100,1. La réponse « 68,1 g/mol » correspond à un oubli du facteur 3 sur l'oxygène. 3pt"
  },
  {
   "q": "Dans Ca(OH)₂, le nombre d'atomes d'hydrogène est :",
   "choix": [
    "4",
    "2",
    "1"
   ],
   "bonne": 0,
   "expl": "l'indice 2 porte sur tout le groupe (OH) : deux O et deux H. C'est le piège le plus fréquent du calcul de masse molaire. 3pt"
  },
  {
   "q": "Pour une espèce en solution, la quantité de matière se calcule par :",
   "choix": [
    "n = C × V",
    "n = V/V_m",
    "n = m/M"
   ],
   "bonne": 0,
   "expl": "trois chemins vers n selon la forme de l'espèce. Le volume molaire ne dépend que de la température et de la pression : un même volume de dihydrogène et de dioxyde de carbone contient le même nombre de molécules, mais pas du tout la même masse. Et 0,240/24,0 = 0,010. 3pt"
  },
  {
   "q": "Le volume molaire d'un gaz dépend :",
   "choix": [
    "de la nature du gaz",
    "de la masse du gaz",
    "de la température et de la pression"
   ],
   "bonne": 2,
   "expl": "trois chemins vers n selon la forme de l'espèce. Le volume molaire ne dépend que de la température et de la pression : un même volume de dihydrogène et de dioxyde de carbone contient le même nombre de molécules, mais pas du tout la même masse. Et 0,240/24,0 = 0,010. 3pt"
  },
  {
   "q": "0,240 L de gaz à V_m = 24,0 L/mol correspondent à :",
   "choix": [
    "0,10 mol",
    "0,010 mol",
    "5,76 mol"
   ],
   "bonne": 1,
   "expl": "trois chemins vers n selon la forme de l'espèce. Le volume molaire ne dépend que de la température et de la pression : un même volume de dihydrogène et de dioxyde de carbone contient le même nombre de molécules, mais pas du tout la même masse. Et 0,240/24,0 = 0,010. 3pt"
  },
  {
   "q": "Pour ajuster une équation, on modifie :",
   "choix": [
    "les indices dans les formules",
    "les deux indifféremment",
    "les coefficients devant les formules"
   ],
   "bonne": 2,
   "expl": "on n'agit que sur les coefficients : changer un indice, c'est changer d'espèce chimique. Pour le méthane, il faut deux O₂ pour fournir les quatre atomes d'oxygène de CO₂ et des deux H₂O. 3pt"
  },
  {
   "q": "L'équation ajustée de la combustion du méthane est :",
   "choix": [
    "CH₄ + 2 O₂ → CO₂ + 2 H₂O",
    "CH₄ + O₂ → CO₂ + H₂O",
    "CH₄ + 3 O₂ → CO₂ + 2 H₂O"
   ],
   "bonne": 0,
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
    "les deux réactifs disparaissent en même temps",
    "les deux réactifs ont la même masse",
    "l'un des réactifs est en large excès"
   ],
   "bonne": 0,
   "expl": "les quotients n/ν sont alors égaux et les deux réactifs s'épuisent ensemble, sans reste. Rien à voir avec l'égalité des masses. 3pt"
  },
  {
   "q": "Dans un dosage par dégagement gazeux, on place un réactif en excès afin que :",
   "choix": [
    "la réaction aille plus vite",
    "le volume de gaz soit plus grand",
    "l'espèce à doser soit le réactif limitant"
   ],
   "bonne": 2,
   "expl": "c'est la raison d'être de l'excès, et la question tombe dans presque tous les sujets. Si l'espèce à doser n'était pas limitante, le volume de gaz renseignerait sur l'autre réactif et la mesure ne voudrait rien dire. Le sujet demande ensuite de vérifier par le calcul que l'excès est réel. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'une mole ? Valeur de N<sub>A</sub> ?",
   "verso": "La quantité de matière contenant <b>N<sub>A</sub> = 6,02 × 10<sup>23</sup></b> entités (atomes, molécules, ions). Symbole <b>mol</b>. On compte en pesant.",
   "origine": "Cours §1.1 La mole"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la masse molaire. Comment la calcule-t-on pour une molécule ?",
   "verso": "La masse d'<b>une mole</b>, en <b>g/mol</b>. On additionne les masses molaires atomiques, chacune <b>multipliée par son indice</b>.",
   "origine": "Cours §1.2 Masse molaire"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans 2 Ca(OH)<sub>2</sub>, sur quoi porte l'indice 2 ? Le coefficient 2 entre-t-il dans M ?",
   "verso": "L'indice porte sur <b>tout le groupe</b> entre parenthèses (2 O, 2 H). Le coefficient devant la formule <b>n'entre jamais</b> dans M.",
   "origine": "Cours §1.2 Deux pièges de lecture"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment calculer n pour un solide ? un gaz ? une espèce en solution ?",
   "verso": "Solide/liquide : <b>n = m / M</b>.<br>Gaz : <b>n = V / V<sub>m</sub></b>.<br>Solution : <b>n = C × V</b> (mol/L, L).",
   "origine": "Cours §2 Les trois relations"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>De quoi dépend le volume molaire V<sub>m</sub> ? Valeur à 20 °C ?",
   "verso": "Seulement de la <b>température et de la pression</b>, pas du gaz. <b>24,0 L/mol</b> à 20 °C (22,4 à 0 °C).",
   "origine": "Cours §2 Le volume molaire"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que représentent les nombres stœchiométriques ? Quand une équation est-elle ajustée ?",
   "verso": "Les <b>proportions</b> dans lesquelles les espèces réagissent et se forment. Ajustée : <b>chaque élément</b> en même nombre des deux côtés.",
   "origine": "Cours §3.1 Nombres stœchiométriques"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pour ajuster une équation, que peut-on modifier ?",
   "verso": "Seulement les <b>coefficients</b>. Changer un indice change l'espèce chimique.",
   "origine": "Cours §3.1 Ce qu'on n'a pas le droit de toucher"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que l'avancement x ? Comment varient réactifs et produits ?",
   "verso": "Le degré de progression de la réaction, en mol. Réactif : <b>− ν x</b> ; produit : <b>+ ν x</b>.",
   "origine": "Cours §4.1 L'avancement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment trouver le réactif limitant ?",
   "verso": "Comparer les quotients <b>n<sub>initial</sub> / ν</b> : le <b>plus petit</b> désigne le limitant et donne <b>x<sub>max</sub></b>. Jamais les n bruts.",
   "origine": "Cours §4.2 Le réactif limitant"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'un mélange stœchiométrique ?",
   "verso": "Les quotients n/ν de tous les réactifs sont <b>égaux</b> : ils disparaissent <b>en même temps</b>, sans reste.",
   "origine": "Cours §4.3 Mélange stœchiométrique"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment aborder un énoncé de chimie ?",
   "verso": "1. Repérer la <b>forme</b> de chaque espèce (masse, volume de gaz, solution).<br>2. Convertir (g, L, mol/L).<br>3. Calculer les <b>quantités de matière initiales</b> de tous les réactifs.",
   "origine": "Cours §2 Méthode — Aborder un énoncé de chimie"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment établir un bilan de matière ?",
   "verso": "1. Équation <b>ajustée</b>.<br>2. n initiales des réactifs.<br>3. Plus petit n/ν → limitant et <b>x<sub>max</sub></b>.<br>4. Restant = n<sub>i</sub> − ν x<sub>max</sub> ; formé = ν x<sub>max</sub>.<br>5. Revenir à m = n M ou V = n V<sub>m</sub>.",
   "origine": "Cours §4.2 Méthode — Bilan de matière"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>2,80 g de fer et 80,0 mL de HCl à 1,00 mol/L (Fe + 2 HCl → FeCl<sub>2</sub> + H<sub>2</sub>). Comment trouver le limitant et le volume de H<sub>2</sub> ?",
   "verso": "1. n(Fe) = 2,80/55,8 = 5,02 × 10<sup>−2</sup> mol ; n(HCl) = 8,00 × 10<sup>−2</sup> mol.<br>2. Quotients : 5,02 × 10<sup>−2</sup> et 4,00 × 10<sup>−2</sup> → <b>HCl limitant</b>.<br>3. V(H<sub>2</sub>) = x<sub>max</sub> × V<sub>m</sub> = 4,00 × 10<sup>−2</sup> × 24,0 = <b>0,96 L</b>.",
   "origine": "Cours §4.2 Le décapage d'une pièce"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
