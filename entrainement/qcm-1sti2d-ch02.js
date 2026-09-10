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
   "type": "definition",
   "recto": "Qu'appelle-t-on « Énergie » ?",
   "verso": "L'<strong>énergie</strong> est la grandeur qui mesure la capacité d'un système à provoquer un changement : mettre en mouvement, chauffer, éclairer, déformer. Elle se mesure en <strong>joules</strong> (J), quelle que soit sa forme.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Puissance » ?",
   "verso": "La <strong>puissance</strong> P est l'énergie transférée par unité de temps : [2]\\[ P = E/(Δt), P en, E en, Δt en. \\] Un watt correspond à un joule par seconde.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Rendement » ?",
   "verso": "Le <strong>rendement</strong> η d'un convertisseur est le rapport de l'énergie utile à l'énergie absorbée : [2]\\[ η= E_utileE_absorbée = P_utileP_absorbée. \\] C'est un nombre <strong>sans unité</strong>, compris entre 0 et 1, souvent exprimé en pourcentage.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "La formule à connaître par cœur — qu'y a-t-il à retenir ?",
   "verso": "La définition ci-dessus se lit simplement : « un watt, c'est un joule par seconde », [2]\\[ 1 = 1. \\] En multipliant les deux membres par une seconde, on obtient l'écriture qui sert en pratique : \\[ 1 = 1 × 1 'est-à-dire E = P × Δt.",
   "origine": "encadre du cours"
  },
  {
   "type": "question",
   "recto": "L'unité de l'énergie dans le système international est ……",
   "rep": "le joule",
   "verso": "<strong>le joule</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "L'unité de la puissance est ……",
   "rep": "le watt",
   "verso": "<strong>le watt</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La relation entre énergie, puissance et durée s'écrit ……",
   "rep": "E = P × Δt",
   "verso": "<strong>E = P × Δt</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "1 Wh correspond à ……",
   "rep": "3600 J",
   "verso": "<strong>3600 J</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un appareil de 2000 W fonctionnant 30 min consomme ……",
   "rep": "1 kWh",
   "verso": "<strong>1 kWh</strong> — 2000 × 0,5 = 1000 Wh",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans une chaîne énergétique, un moteur électrique est ……",
   "rep": "un convertisseur",
   "verso": "<strong>un convertisseur</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Les pertes d'un convertisseur se font le plus souvent sous forme ……",
   "rep": "thermique",
   "verso": "<strong>thermique</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le rendement d'un convertisseur se calcule par ……",
   "rep": "η = (E<sub>utile</sub>)/(E<sub>absorbée</sub>)",
   "verso": "<strong>η = (E<sub>utile</sub>)/(E<sub>absorbée</sub>)</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un rendement peut valoir ……",
   "rep": "0,85",
   "verso": "<strong>0,85</strong> — un rendement est toujours inférieur à 1, sans quoi le convertisseur créerait de l'énergie",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un moteur absorbe 900 W et fournit 720 W. Son rendement vaut ……",
   "rep": "80 %",
   "verso": "<strong>80 %</strong>",
   "origine": "bilan"
  }
 ]
};
