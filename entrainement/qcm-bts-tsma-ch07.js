/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 07 · Combustions et carburants
   Le bilan vient de ch07_bilan.tex, les cartes des \trou{} de
   ch07_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "7",
 "titre": "Combustions et carburants",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "La masse molaire de C₈H₁₈ (C : 12,0 ; H : 1,0 g/mol) vaut :",
   "choix": [
    "96,0 g/mol",
    "114,0 g/mol",
    "130,0 g/mol",
    "226,0 g/mol"
   ],
   "bonne": 1,
   "expl": "8 × 12,0 + 18 × 1,0 = 114,0 g/mol."
  },
  {
   "q": "Dans C₃H₈ + … O₂ → 3 CO₂ + 4 H₂O, le coefficient du dioxygène est :",
   "choix": [
    "3",
    "4",
    "5",
    "7"
   ],
   "bonne": 2,
   "expl": "3 CO₂ et 4 H₂O demandent 6 + 4 = 10 atomes d'oxygène, soit 5 O₂. Le carbone d'abord, l'hydrogène ensuite, l'oxygène en dernier."
  },
  {
   "q": "Un liquide a pour masse volumique 0,840 kg/L. La masse de 80,0 L vaut :",
   "choix": [
    "67,2 kg",
    "95,2 kg",
    "80,8 kg",
    "0,0105 kg"
   ],
   "bonne": 0,
   "expl": "80,0 × 0,840 = 67,2 kg. Vérifier le sens : un litre pesant moins d'un kilo, la masse doit être inférieure au volume en litres."
  },
  {
   "q": "Convertir 2,87×10⁹ J en kilowattheures (1 kW·h = 3,6 MJ) :",
   "choix": [
    "797 kW·h",
    "2870 kW·h",
    "1,03×10¹⁶ kW·h",
    "80 kW·h"
   ],
   "bonne": 0,
   "expl": "2,87×10⁹/3,6×10⁶ = 797 kW·h."
  },
  {
   "q": "Combien vaut 0,2000 × 4185 × 26,5 ?",
   "choix": [
    "2,22×10³",
    "2,22×10⁴",
    "2,22×10⁵",
    "8,37×10²"
   ],
   "bonne": 1,
   "expl": "≈ 22,2 kJ. C'est un calcul de Q = mcΔθ."
  },
  {
   "q": "Une température passe de 18,5 °C à 45,0 °C. L'écart Δθ vaut :",
   "choix": [
    "26,5 °C",
    "26,5 K, soit un autre nombre qu'en °C",
    "63,5 °C",
    "299,5 K"
   ],
   "bonne": 0,
   "expl": "Δθ = 26,5. Le nombre est le MÊME en kelvins et en degrés Celsius : les deux échelles ont la même graduation."
  }
 ],
 "bilan": [
  {
   "q": "Dans un moteur thermique, le comburant est :",
   "choix": [
    "le gazole",
    "le dioxygène de l'air",
    "le dioxyde de carbone"
   ],
   "bonne": 1,
   "expl": "le carburant est le combustible, l'air apporte le comburant. Le troisième côté du triangle est l'énergie d'activation : étincelle en essence, compression en diesel. Supprimer un seul côté éteint le feu. 3pt"
  },
  {
   "q": "Les trois éléments du triangle du feu sont :",
   "choix": [
    "combustible, comburant, énergie d'activation",
    "carbone, hydrogène, oxygène",
    "chaleur, pression, étincelle"
   ],
   "bonne": 0,
   "expl": "le carburant est le combustible, l'air apporte le comburant. Le troisième côté du triangle est l'énergie d'activation : étincelle en essence, compression en diesel. Supprimer un seul côté éteint le feu. 3pt"
  },
  {
   "q": "Une combustion complète d'hydrocarbure produit :",
   "choix": [
    "CO₂ et H₂O",
    "CO et H₂O",
    "CO₂ et O₂"
   ],
   "bonne": 0,
   "expl": "une combustion complète ne produit que CO₂ et H₂O. Pour l'octane, on compte 16 C et 36 H dans deux molécules, donc 16 CO₂ et 18 H₂O, soit 32 + 18 = 50 atomes d'oxygène à droite : 25 O₂. 3pt"
  },
  {
   "q": "L'équation ajustée de la combustion de l'octane est :",
   "choix": [
    "C₈H₁₈ + 12 O₂ → 8 CO₂ + 9 H₂O",
    "2 C₈H₁₈ + 25 O₂ → 16 CO₂ + 18 H₂O",
    "C₈H₁₈ + 8 O₂ → 8 CO₂ + 9 H₂O"
   ],
   "bonne": 1,
   "expl": "une combustion complète ne produit que CO₂ et H₂O. Pour l'octane, on compte 16 C et 36 H dans deux molécules, donc 16 CO₂ et 18 H₂O, soit 32 + 18 = 50 atomes d'oxygène à droite : 25 O₂. 3pt"
  },
  {
   "q": "Une combustion incomplète se produit quand :",
   "choix": [
    "le dioxygène est en excès",
    "le dioxygène est en défaut",
    "la température est trop élevée"
   ],
   "bonne": 1,
   "expl": "le défaut de dioxygène empêche l'oxydation complète du carbone. CO est inodore, incolore et mortel : c'est lui qui tue quand un moteur tourne dans un local fermé. Il faut aussi savoir qu'une combustion incomplète libère moins d'énergie. 3pt"
  },
  {
   "q": "Le monoxyde de carbone est dangereux parce qu'il est :",
   "choix": [
    "très odorant, donc irritant",
    "inodore et incolore, et se fixe sur l'hémoglobine",
    "explosif au contact de l'air"
   ],
   "bonne": 1,
   "expl": "le défaut de dioxygène empêche l'oxydation complète du carbone. CO est inodore, incolore et mortel : c'est lui qui tue quand un moteur tourne dans un local fermé. Il faut aussi savoir qu'une combustion incomplète libère moins d'énergie. 3pt"
  },
  {
   "q": "Le PCI d'un combustible s'exprime en :",
   "choix": [
    "MJ/kg",
    "MJ",
    "kg/MJ"
   ],
   "bonne": 0,
   "expl": "le PCI est une énergie par kilogramme. Le gaz naturel (50 MJ/kg) devance l'essence (44) et le gazole (42,7) ; le bioéthanol ferme la marche à 26,8. 3pt"
  },
  {
   "q": "Parmi ces carburants, celui qui a le PCI massique le plus élevé est :",
   "choix": [
    "le bioéthanol",
    "le gazole",
    "le gaz naturel"
   ],
   "bonne": 2,
   "expl": "le PCI est une énergie par kilogramme. Le gaz naturel (50 MJ/kg) devance l'essence (44) et le gazole (42,7) ; le bioéthanol ferme la marche à 26,8. 3pt"
  },
  {
   "q": "Un litre de gazole rejette environ :",
   "choix": [
    "0,84 kg de CO₂",
    "2,6 kg de CO₂",
    "44 kg de CO₂"
   ],
   "bonne": 1,
   "expl": "2,6 kg, soit plus de trois fois la masse du litre de gazole lui-même. L'oxygène du CO₂ provient de l'air, pas du carburant : c'est ce qui surprend, et c'est ce que le bilan de matière permet d'établir. 3pt"
  },
  {
   "q": "Pour comparer équitablement les rejets de CO₂ de deux carburants, on les rapporte à :",
   "choix": [
    "un litre",
    "un mégajoule d'énergie libérée",
    "une heure de fonctionnement"
   ],
   "bonne": 1,
   "expl": "rapporter au litre avantagerait mécaniquement les carburants peu énergétiques, dont il faut consommer davantage. Seule la comparaison à énergie égale a un sens. 3pt"
  },
  {
   "q": "Un indice de cétane élevé signifie que le gazole :",
   "choix": [
    "résiste bien à l'auto-inflammation",
    "s'enflamme facilement par compression",
    "contient beaucoup de soufre"
   ],
   "bonne": 1,
   "expl": "l'indice de cétane mesure l'aptitude à s'enflammer, l'indice d'octane la résistance à l'auto-inflammation. Les deux vont en sens contraire : un excellent gazole serait un très mauvais carburant essence. 3pt"
  },
  {
   "q": "Chauffer de l'eau avec un brûleur et calculer Q/Δm donne :",
   "choix": [
    "exactement le PCI du combustible",
    "le produit η× PCI, plus petit que le PCI",
    "le rendement du montage"
   ],
   "bonne": 1,
   "expl": "Q n'est que la part de l'énergie parvenue à l'eau ; le reste part par rayonnement et par les gaz chauds. On mesure donc un « PCI apparent » η× PCI. Pour s'affranchir de η, on fait le rapport de deux essais menés dans des conditions identiques. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Combustion » ?",
   "verso": "Une <strong>combustion</strong> est une réaction chimique entre un <strong>combustible</strong> et un <strong>comburant</strong>, qui libère de l'énergie sous forme thermique.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Combustion incomplète » ?",
   "verso": "Lorsque le dioxygène est en défaut, le carbone n'est oxydé qu'en partie. Il se forme alors, en plus, du monoxyde de carbone CO et des particules (suies).",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Pouvoir calorifique inférieur » ?",
   "verso": "Le <strong>pouvoir calorifique inférieur</strong> (PCI) d'un combustible est l'énergie libérée par la combustion complète d'un kilogramme de ce combustible, l'eau formée restant à l'état de vapeur. Il s'exprime en MJ/kg.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Les produits d'une combustion complète — qu'y a-t-il à retenir ?",
   "verso": "Un hydrocarbure brûlant complètement dans le dioxygène produit du dioxyde de carbone CO₂ et de l'eau H₂O, et rien d'autre.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Une combustion incomplète coûte deux fois — qu'y a-t-il à retenir ?",
   "verso": "Elle produit des polluants, <em>et</em> elle libère moins d'énergie : le carbone s'est arrêté à mi-chemin de son oxydation. L'énergie qui manque part par l'échappement, sous forme de CO et d'imbrûlés.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Comparer à énergie égale, pas à volume égal — qu'y a-t-il à retenir ?",
   "verso": "Un carburant se juge sur son rejet par mégajoule d'énergie libérée, non par litre : sinon on avantage mécaniquement les carburants peu énergétiques, dont il faut consommer davantage.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Lorsque le dioxygène est ……, le carbone n'est oxydé qu'en partie.",
   "rep": "en défaut",
   "verso": "<strong>en défaut</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Dans un moteur, le combustible est le carburant et le comburant est …….",
   "rep": "le dioxygène de l'air",
   "verso": "<strong>le dioxygène de l'air</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un hydrocarbure brûlant complètement dans le dioxygène produit ……, et rien d'autre.",
   "rep": "du dioxyde de carbone CO₂ et de l'eau H₂O",
   "verso": "<strong>du dioxyde de carbone CO₂ et de l'eau H₂O</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Une <strong>combustion</strong> est une réaction chimique entre un <strong>combustible</strong> et un <strong>comburant</strong>, qui …….",
   "rep": "libère de l'énergie sous forme thermique",
   "verso": "<strong>libère de l'énergie sous forme thermique</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un carburant se juge sur son rejet ……, non par litre : sinon on avantage mécaniquement les carburants peu énergétiques, dont il faut consommer davantage.",
   "rep": "par mégajoule d'énergie libérée",
   "verso": "<strong>par mégajoule d'énergie libérée</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Les trois éléments du triangle du feu sont ……",
   "rep": "combustible, comburant, énergie d'activation",
   "verso": "<strong>combustible, comburant, énergie d'activation</strong> — le carburant est le combustible, l'air apporte le comburant. Le troisième côté du triangle est l'énergie d'activation : étincelle en essence, compression en diesel. Supprimer un seul côté éteint le feu. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une combustion complète d'hydrocarbure produit ……",
   "rep": "CO₂ et H₂O",
   "verso": "<strong>CO₂ et H₂O</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "L'équation ajustée de la combustion de l'octane est ……",
   "rep": "2 C₈H₁₈ + 25 O₂ → 16 CO₂ + 18 H₂O",
   "verso": "<strong>2 C₈H₁₈ + 25 O₂ → 16 CO₂ + 18 H₂O</strong> — une combustion complète ne produit que CO₂ et H₂O. Pour l'octane, on compte 16 C et 36 H dans deux molécules, donc 16 CO₂ et 18 H₂O, soit 32 + 18 = 50 atomes d'oxygène à droite : 25 O₂. 3pt",
   "origine": "bilan"
  }
 ]
};
