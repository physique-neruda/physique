/* Genere par outils/construire.py — ne pas editer a la main.
   1sti2d · chapitre 02 · Énergie, puissance, chaînes
   Les QCM viennent de ch02_prerequis.tex et ch02_bilan.tex,
   les cartes de cartes/cartes-1sti2d-ch02.json. */
window.CHAPITRE = {
 "filiere": "1sti2d",
 "num": "2",
 "titre": "Énergie, puissance, chaînes",
 "niveau": "1re STI2D",
 "prerequis": [
  {
   "q": "Le préfixe « kilo » signifie :",
   "choix": [
    "× 100",
    "× 1000",
    "÷ 1000",
    "× 10"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Une durée de 2,5 h correspond à :",
   "choix": [
    "150 min",
    "250 min",
    "25 min",
    "2500 s"
   ],
   "bonne": 0,
   "expl": "2,5 × 60 = 150 min"
  },
  {
   "q": "Combien de secondes dans une heure ?",
   "choix": [
    "60",
    "360",
    "3600",
    "86 400"
   ],
   "bonne": 2,
   "expl": "60 × 60"
  },
  {
   "q": "Dans la relation E = P × Δt, la puissance P s'exprime par :",
   "choix": [
    "P = E × Δt",
    "P = E/Δt",
    "P = Δt/E",
    "P = E + Δt"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "85 % de 1500 vaut :",
   "choix": [
    "127,5",
    "1275",
    "176",
    "1415"
   ],
   "bonne": 1,
   "expl": "1500 × 0,85"
  },
  {
   "q": "Le rapport 1275/1500 vaut :",
   "choix": [
    "0,85",
    "1,18",
    "8,5",
    "0,117"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Le produit 0,90 × 0,80 vaut :",
   "choix": [
    "1,70",
    "0,72",
    "0,10",
    "1,125"
   ],
   "bonne": 1,
   "expl": "un produit de deux nombres inférieurs à 1 est <em>plus petit</em> que chacun d'eux : c'est exactement ce qui se passe pour les rendements en série"
  }
 ],
 "bilan": [
  {
   "q": "L'unité de l'énergie dans le système international est :",
   "choix": [
    "le watt",
    "le joule",
    "le kilowattheure",
    "le newton"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "L'unité de la puissance est :",
   "choix": [
    "le joule",
    "le watt",
    "le wattheure",
    "le kelvin"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "La relation entre énergie, puissance et durée s'écrit :",
   "choix": [
    "E = P/Δt",
    "E = P × Δt",
    "E = Δt/P",
    "E = P + Δt"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "1 Wh correspond à :",
   "choix": [
    "60 J",
    "1000 J",
    "3600 J",
    "3,6×10⁶ J"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Un appareil de 2000 W fonctionnant 30 min consomme :",
   "choix": [
    "1 kWh",
    "2 kWh",
    "60 kWh",
    "0,5 kWh"
   ],
   "bonne": 0,
   "expl": "2000 × 0,5 = 1000 Wh"
  },
  {
   "q": "Dans une chaîne énergétique, un moteur électrique est :",
   "choix": [
    "un réservoir",
    "un convertisseur",
    "un transfert",
    "une perte"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Les pertes d'un convertisseur se font le plus souvent sous forme :",
   "choix": [
    "chimique",
    "thermique",
    "nucléaire",
    "sonore"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Le rendement d'un convertisseur se calcule par :",
   "choix": [
    "η = (E<sub>absorbée</sub>)/(E<sub>utile</sub>)",
    "η = (E<sub>utile</sub>)/(E<sub>absorbée</sub>)",
    "η = E<sub>utile</sub> × E<sub>absorbée</sub>",
    "η = E<sub>absorbée</sub> - E<sub>utile</sub>"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Un rendement peut valoir :",
   "choix": [
    "1,25",
    "0,85",
    "125 %",
    "n'importe quelle valeur"
   ],
   "bonne": 1,
   "expl": "un rendement est toujours inférieur à 1, sans quoi le convertisseur créerait de l'énergie"
  },
  {
   "q": "Un moteur absorbe 900 W et fournit 720 W. Son rendement vaut :",
   "choix": [
    "125 %",
    "80 %",
    "20 %",
    "180 %"
   ],
   "bonne": 1,
   "expl": "720/900 = 0,80"
  },
  {
   "q": "Deux convertisseurs de rendements 0,90 et 0,80 montés en série donnent un rendement global de :",
   "choix": [
    "1,70",
    "0,85",
    "0,72",
    "0,10"
   ],
   "bonne": 2,
   "expl": "les rendements se <em>multiplient</em>"
  },
  {
   "q": "Pour consommer moins d'énergie, on peut agir sur :",
   "choix": [
    "la puissance seulement",
    "la durée seulement",
    "la puissance ou la durée",
    "ni l'une ni l'autre"
   ],
   "bonne": 2,
   "expl": "puisque E = P × Δt"
  }
 ],
 "cartes": [
  {
   "type": "question",
   "recto": "L'unité de l'énergie dans le système international est ……",
   "verso": "<strong>le joule</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "L'unité de la puissance est ……",
   "verso": "<strong>le watt</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La relation entre énergie, puissance et durée s'écrit ……",
   "verso": "<strong>E = P × Δt</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "1 Wh correspond à ……",
   "verso": "<strong>3600 J</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un appareil de 2000 W fonctionnant 30 min consomme ……",
   "verso": "<strong>1 kWh</strong> — 2000 × 0,5 = 1000 Wh",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans une chaîne énergétique, un moteur électrique est ……",
   "verso": "<strong>un convertisseur</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Les pertes d'un convertisseur se font le plus souvent sous forme ……",
   "verso": "<strong>thermique</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le rendement d'un convertisseur se calcule par ……",
   "verso": "<strong>η = (E<sub>utile</sub>)/(E<sub>absorbée</sub>)</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un rendement peut valoir ……",
   "verso": "<strong>0,85</strong> — un rendement est toujours inférieur à 1, sans quoi le convertisseur créerait de l'énergie",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un moteur absorbe 900 W et fournit 720 W. Son rendement vaut ……",
   "verso": "<strong>80 %</strong> — 720/900 = 0,80",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Deux convertisseurs de rendements 0,90 et 0,80 montés en série donnent un rendement global de ……",
   "verso": "<strong>0,72</strong> — les rendements se <em>multiplient</em>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pour consommer moins d'énergie, on peut agir sur ……",
   "verso": "<strong>la puissance ou la durée</strong> — puisque E = P × Δt",
   "origine": "bilan"
  }
 ]
};
