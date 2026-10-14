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
    "le kilowattheure",
    "le joule",
    "le newton"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "L'unité de la puissance est :",
   "choix": [
    "le watt",
    "le joule",
    "le wattheure",
    "le kelvin"
   ],
   "bonne": 0,
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
    "3,6×10⁶ J",
    "3600 J"
   ],
   "bonne": 3,
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
    "un transfert",
    "un convertisseur",
    "une perte"
   ],
   "bonne": 2,
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
    "η = E<sub>absorbée</sub> - E<sub>utile</sub>",
    "η = E<sub>utile</sub> × E<sub>absorbée</sub>",
    "η = (E<sub>utile</sub>)/(E<sub>absorbée</sub>)"
   ],
   "bonne": 3,
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
    "80 %",
    "125 %",
    "20 %",
    "180 %"
   ],
   "bonne": 0,
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
    "ni l'une ni l'autre",
    "la puissance ou la durée"
   ],
   "bonne": 3,
   "expl": "puisque E = P × Δt"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que l'énergie ? Quelle est son unité ?",
   "verso": "La grandeur qui mesure la capacité d'un système à <b>provoquer un changement</b> (mettre en mouvement, chauffer, éclairer…). Unité : le <b>joule (J)</b>, quelle que soit la forme.",
   "origine": "Cours §1 L'énergie change de forme"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer le principe de conservation de l'énergie.",
   "verso": "L'énergie <b>ne se crée pas et ne disparaît pas</b> : elle se <b>convertit</b> d'une forme à une autre et se <b>transfère</b> d'un système à un autre.",
   "origine": "Cours §1 Conservation de l'énergie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sous quelle forme est l'énergie d'une batterie chargée ? d'un volant lancé ? d'une masse en hauteur ? du rayonnement solaire ?",
   "verso": "Batterie : <b>chimique</b> ; volant : <b>cinétique</b> ; masse en hauteur : <b>potentielle</b> ; Soleil : <b>rayonnante</b>.",
   "origine": "Cours §1 Les formes de l'énergie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la puissance. Unités ?",
   "verso": "L'énergie transférée <b>par unité de temps</b> : <b>P = E / Δt</b><br>P en watts (W), E en joules (J), Δt en secondes (s). 1 W = 1 J/s.",
   "origine": "Cours §2 La puissance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation entre énergie, puissance et durée (la forme qui sert à calculer) ?",
   "verso": "<b>E = P × Δt</b>",
   "origine": "Cours §2 La formule à connaître par cœur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qui figure sur la plaque d'un appareil ? sur la facture ?",
   "verso": "Plaque : la <b>puissance</b> (indépendante de la durée d'usage).<br>Facture : l'<b>énergie</b>, qui dépend de la puissance <b>et</b> de la durée.",
   "origine": "Cours §2 Ne pas confondre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que valent 1 Wh et 1 kWh en joules ?",
   "verso": "1 Wh = 1 W × 3600 s = <b>3600 J</b><br>1 kWh = <b>3,6 × 10<sup>6</sup> J</b><br>Autant de joules dans un Wh que de secondes dans une heure.",
   "origine": "Cours §3 Joule, wattheure, kilowattheure"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Avec P en W et Δt en heures, dans quelle unité sort E = P × Δt ?",
   "verso": "En <b>wattheures (Wh)</b>. Avec P en kW : en kWh.",
   "origine": "Cours §3 Joule, wattheure, kilowattheure"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans une chaîne énergétique, que représentent la batterie, le moteur et les flèches ?",
   "verso": "Batterie (ou réseau) : <b>réservoir</b> ; moteur : <b>convertisseur</b> ; flèches : <b>transferts</b>, avec la forme d'énergie écrite dessus.",
   "origine": "Cours §4 La chaîne énergétique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sous quelle forme se font presque toujours les pertes ? Comment les représente-t-on ?",
   "verso": "Sous forme <b>thermique</b> (frottements, échauffement des bobinages). Par une <b>flèche qui sort vers le bas</b> de chaque convertisseur.",
   "origine": "Cours §4 La chaîne énergétique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définition du rendement η ? Unité ?",
   "verso": "<b>η = E<sub>utile</sub> / E<sub>absorbée</sub> = P<sub>utile</sub> / P<sub>absorbée</sub></b><br><b>Sans unité</b>, entre 0 et 1, souvent en %.",
   "origine": "Cours §5 Le rendement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>On trouve un rendement de 1,25. Qu'en conclure ?",
   "verso": "C'est <b>forcément une erreur</b> (ou utile et absorbé inversés) : le convertisseur créerait de l'énergie, contraire à la conservation.",
   "origine": "Cours §5 Le rendement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment obtient-on le rendement global d'une chaîne de convertisseurs ?",
   "verso": "On <b>multiplie</b> les rendements : <b>η<sub>global</sub> = η<sub>1</sub> × η<sub>2</sub> × … × η<sub>n</sub></b>",
   "origine": "Cours §6 Rendement d'une chaîne"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans une chaîne, quel convertisseur faut-il améliorer en premier ? Pourquoi ?",
   "verso": "Le <b>plus mauvais</b>. Le rendement global est toujours <b>plus petit que le plus faible des maillons</b>.",
   "origine": "Cours §6 Le maillon faible"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sur quels leviers agir pour consommer moins d'énergie ?",
   "verso": "Puisque E = P × Δt : réduire la <b>puissance</b> (appareil de meilleur rendement, LED) ou la <b>durée</b> (éteindre, temporiser, automatiser).",
   "origine": "Cours §7 Économiser l'énergie"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Une LED de 9,0 W reste allumée 3,0 h. Comment calculer l'énergie en Wh, kWh et J ?",
   "verso": "1. P en W et Δt en h → E en Wh.<br>2. E = 9,0 × 3,0 = <b>27 Wh</b>.<br>3. En kWh : <b>0,027 kWh</b>.<br>4. En J : 27 × 3600 = <b>9,7 × 10<sup>4</sup> J</b>.",
   "origine": "Cours §3 Méthode 1"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment construire la chaîne énergétique d'un appareil ?",
   "verso": "1. Identifier le <b>réservoir</b> de départ.<br>2. Placer les <b>convertisseurs</b> dans l'ordre.<br>3. Nommer la forme d'énergie sur chaque <b>flèche de transfert</b>.<br>4. Ajouter les <b>pertes</b> (flèche vers le bas) sous chaque convertisseur.",
   "origine": "Cours §4 Méthode 2"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Un moteur absorbe 1500 W et fournit 1275 W. Comment trouver son rendement et ses pertes ?",
   "verso": "1. Utile = 1275 W (ce qu'on veut) ; absorbé = 1500 W (ce qu'on paie).<br>2. η = 1275 / 1500 = <b>0,85</b> (85 %).<br>3. Pertes = 1500 − 1275 = <b>225 W</b>.<br>4. Vérifier η &lt; 1.",
   "origine": "Cours §5 Méthode 3"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Moteur η<sub>1</sub> = 0,88 puis compresseur η<sub>2</sub> = 0,65, 6,6 kWh consommés. Comment trouver l'énergie utile ?",
   "verso": "1. η = 0,88 × 0,65 = <b>0,57</b>.<br>2. E<sub>utile</sub> = η × E<sub>absorbée</sub> = 0,57 × 6,6 = <b>3,8 kWh</b>.<br>3. Pertes : 6,6 − 3,8 = 2,8 kWh.",
   "origine": "Cours §6 Rendements d'une chaîne"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
