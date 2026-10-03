/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 02 · Énergie, puissance, rendement
   Le bilan vient de ch02_bilan.tex, les cartes des \trou{} de
   ch02_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "2",
 "titre": "Énergie, puissance, rendement",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Convertir 45 min en secondes :",
   "choix": [
    "450 s",
    "2700 s",
    "4500 s",
    "0,75 s"
   ],
   "bonne": 1,
   "expl": "45 × 60 = 2700 s. Toute énergie en joules exige des secondes, jamais des minutes."
  },
  {
   "q": "Un débit de 45 L/min vaut, en m³/s :",
   "choix": [
    "7,5×10⁻⁴",
    "4,5×10⁻²",
    "7,5×10⁻²",
    "2,7"
   ],
   "bonne": 0,
   "expl": "1 L = 10⁻³ m³ et 1 min = 60 s : on divise par 60 000."
  },
  {
   "q": "Un arbre tourne à 540 tr/min. Sa vitesse angulaire ω = 2πN/60 vaut :",
   "choix": [
    "9,0 rad/s",
    "56,5 rad/s",
    "540 rad/s",
    "3393 rad/s"
   ],
   "bonne": 1,
   "expl": "2π × 540/60 = 56,5 rad/s. C'est le régime de la prise de force normalisée."
  },
  {
   "q": "Le produit 0,38 × 0,88 × 0,75 vaut :",
   "choix": [
    "0,251",
    "0,670",
    "2,01",
    "1,04"
   ],
   "bonne": 0,
   "expl": "Le résultat est plus petit que chacun des facteurs : multiplier des nombres inférieurs à 1 fait toujours décroître. C'est pourquoi une chaîne de conversions a un mauvais rendement global."
  },
  {
   "q": "Une grandeur passe de 0,251 à 0,277. La variation relative vaut :",
   "choix": [
    "2,6 %",
    "9,4 %",
    "10,4 %",
    "26 %"
   ],
   "bonne": 2,
   "expl": "(0,277 − 0,251)/0,251 = 0,104. Une variation relative se rapporte toujours à la valeur de départ."
  },
  {
   "q": "Dans η = P_u/P_a, la puissance absorbée s'écrit :",
   "choix": [
    "P_a = η × P_u",
    "P_a = P_u/η",
    "P_a = P_u − η",
    "P_a = η/P_u"
   ],
   "bonne": 1,
   "expl": "Diviser la puissance utile par le rendement donne bien un nombre plus grand : c'est le contrôle de bon sens."
  }
 ],
 "bilan": [
  {
   "q": "L'unité de l'énergie dans le Système international est :",
   "choix": [
    "le watt",
    "le kilowattheure",
    "le joule"
   ],
   "bonne": 2,
   "expl": "le joule est l'unité légale, le kilowattheure celle des factures : 1 kW·h = 1000 × 3600 = 3,6×10⁶ J. 3pt"
  },
  {
   "q": "1 kW·h vaut :",
   "choix": [
    "3,6 MJ",
    "3600 J",
    "1000 J"
   ],
   "bonne": 0,
   "expl": "le joule est l'unité légale, le kilowattheure celle des factures : 1 kW·h = 1000 × 3600 = 3,6×10⁶ J. 3pt"
  },
  {
   "q": "Un arbre tourne à 540 1/min. Sa vitesse angulaire vaut :",
   "choix": [
    "540 rad/s",
    "56,5 rad/s",
    "9 rad/s"
   ],
   "bonne": 1,
   "expl": "ω= 2πN/60 = 56,5 rad/s. Employer N directement dans P = Cω fausse le résultat d'un facteur 9,55 : c'est l'erreur la plus fréquente du chapitre. 3pt"
  },
  {
   "q": "La puissance transmise par un arbre en rotation s'écrit :",
   "choix": [
    "P = C × ω",
    "P = C × N",
    "P = C / ω"
   ],
   "bonne": 0,
   "expl": "ω= 2πN/60 = 56,5 rad/s. Employer N directement dans P = Cω fausse le résultat d'un facteur 9,55 : c'est l'erreur la plus fréquente du chapitre. 3pt"
  },
  {
   "q": "Une pompe débite 45 L/min sous 180 bar. Sa puissance hydraulique vaut environ :",
   "choix": [
    "8,1 kW",
    "13,5 kW",
    "135 kW"
   ],
   "bonne": 1,
   "expl": "Q_v = 45/60 000 = 7,5×10⁻⁴ m³/s et p = 1,8×10⁷ Pa, d'où P = 1,35×10⁴ W. La réponse « 8,1 kW » correspond à un oubli de conversion de la pression, la réponse « 135 kW » à un oubli sur le débit. 3pt"
  },
  {
   "q": "Un rendement peut valoir :",
   "choix": [
    "1,25",
    "72 W",
    "0,72"
   ],
   "bonne": 2,
   "expl": "un rendement est sans unité et toujours inférieur à 1. Trouver 1,25, c'est avoir inversé entrée et sortie ; l'exprimer en watts, c'est confondre rendement et puissance. 3pt"
  },
  {
   "q": "Un moteur absorbe 60,0 W et restitue 43,6 W. La puissance perdue vaut :",
   "choix": [
    "103,6 W",
    "16,4 W",
    "0,73 W"
   ],
   "bonne": 1,
   "expl": "la puissance perdue est la différence P_a - P_u, et elle part en chaleur : effet Joule, pertes fer, frottements. L'énergie se conserve toujours ; c'est sa qualité qui se dégrade. 3pt"
  },
  {
   "q": "Cette puissance perdue se manifeste principalement sous forme :",
   "choix": [
    "de chaleur",
    "de bruit",
    "de lumière"
   ],
   "bonne": 0,
   "expl": "la puissance perdue est la différence P_a - P_u, et elle part en chaleur : effet Joule, pertes fer, frottements. L'énergie se conserve toujours ; c'est sa qualité qui se dégrade. 3pt"
  },
  {
   "q": "Trois étages de rendements 0,38, 0,88 et 0,75 donnent un rendement global de :",
   "choix": [
    "0,67",
    "2,01",
    "0,25"
   ],
   "bonne": 2,
   "expl": "les rendements en série se multiplient, ils ne s'additionnent ni ne se moyennent. Et le bon étage à améliorer se détermine par le calcul : faire passer les pneus de 0,75 à 0,85 rapporte plus que faire passer le moteur de 0,38 à 0,42 — pour un coût sans commune mesure. 3pt"
  },
  {
   "q": "Pour améliorer une chaîne de rendements, il faut en priorité :",
   "choix": [
    "agir au hasard, tous les étages se valent",
    "comparer par le calcul les gains possibles sur chaque étage",
    "toujours changer le moteur"
   ],
   "bonne": 1,
   "expl": "les rendements en série se multiplient, ils ne s'additionnent ni ne se moyennent. Et le bon étage à améliorer se détermine par le calcul : faire passer les pneus de 0,75 à 0,85 rapporte plus que faire passer le moteur de 0,38 à 0,42 — pour un coût sans commune mesure. 3pt"
  },
  {
   "q": "La consommation spécifique d'un moteur s'exprime en :",
   "choix": [
    "L/h",
    "kW",
    "g/kW·h"
   ],
   "bonne": 2,
   "expl": "la consommation spécifique rapporte la masse de carburant à l'énergie mécanique produite. Contrairement à la consommation horaire, elle ne dépend pas de la charge : c'est le seul indicateur qui permette de comparer deux moteurs. 3pt"
  },
  {
   "q": "Le rendement d'un motoréducteur mesuré au banc est :",
   "choix": [
    "faible à vide, maximal près de la charge nominale",
    "maximal à faible charge",
    "constant quelle que soit la charge"
   ],
   "bonne": 0,
   "expl": "à vide, les pertes fixes (frottements, pertes fer) représentent une fraction énorme de la puissance absorbée. Conséquence pratique : surdimensionner un entraînement dégrade son rendement. On dimensionne au plus près du besoin. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la puissance. Relation avec l'énergie ? Unités ?",
   "verso": "Le quotient de l'énergie échangée par la durée : <b>P = E / t</b>, soit <b>E = P × t</b>.<br>E en J, t en s, P en W (1 W = 1 J/s).",
   "origine": "Cours §1.1 Puissance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>1 kWh en J ? 1 ch en W ? Énergie d'un litre de gazole ?",
   "verso": "<b>1 kWh = 3,6 × 10<sup>6</sup> J = 3,6 MJ</b> ; <b>1 ch = 736 W</b> ; 1 L de gazole ≈ <b>36 MJ</b>.",
   "origine": "Cours §1.2 Les unités du terrain"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissance en rotation ? Conversion de N (tr/min) en ω ? Couple ?",
   "verso": "<b>P = C × ω</b>, <b>ω = 2π N / 60</b> (rad/s) ; couple <b>C = F × r</b>.<br>Oublier la conversion : erreur d'un facteur 9,55.",
   "origine": "Cours §2.1 Rotation"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissance hydraulique ? Puissance électrique en continu ?",
   "verso": "Hydraulique : <b>P = p × Q<sub>v</sub></b> (Pa, m³/s).<br>Électrique : <b>P = U × I</b>.",
   "origine": "Cours §2.2 Hydraulique et électricité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment convertir un débit en L/min et une pression en bar pour calculer une puissance ?",
   "verso": "L/min → m³/s : <b>÷ 60 000</b>.<br>bar → Pa : <b>× 10<sup>5</sup></b>.",
   "origine": "Cours §2.2 Les conversions qui tuent"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissance en translation ?",
   "verso": "<b>P = F × v</b> (N, m/s).",
   "origine": "Cours §2 Translation"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir le rendement d'un convertisseur. Valeurs possibles ?",
   "verso": "<b>η = P<sub>utile</sub> / P<sub>absorbée</sub></b>, sans unité, <b>entre 0 et 1</b>. η &gt; 1 : erreur de calcul.",
   "origine": "Cours §3.2 Le rendement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que vaut la puissance perdue ? Sous quelle forme part-elle ?",
   "verso": "<b>P<sub>perdue</sub> = P<sub>absorbée</sub> − P<sub>utile</sub></b>, dissipée en <b>chaleur</b> (effet Joule, frottements, échappement). L'énergie se conserve, sa qualité se dégrade.",
   "origine": "Cours §3.2 Ce qui manque n'est pas perdu"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rendement global de plusieurs convertisseurs en série ?",
   "verso": "Les rendements se <b>multiplient</b> : η<sub>global</sub> = η<sub>1</sub> × η<sub>2</sub> × … Le plus bas offre la plus grande marge de progrès.",
   "origine": "Cours §3.3 Rendements en cascade"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la consommation spécifique d'un moteur. Unité ? Valeur d'un diesel moderne ?",
   "verso": "La <b>masse de carburant par unité d'énergie mécanique</b> produite, en <b>g/kWh</b>. Diesel moderne : <b>200 à 260 g/kWh</b>.",
   "origine": "Cours §4.1 Consommation spécifique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi la consommation horaire (L/h) ne permet-elle pas de comparer deux moteurs ?",
   "verso": "Elle dépend de la <b>charge</b>. Seule la <b>consommation spécifique</b> rapporte la dépense au travail réellement fourni.",
   "origine": "Cours §4.1 Ne pas juger sur la consommation horaire"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Prise de force à 540 tr/min, couple 950 N·m. Comment calculer la puissance ?",
   "verso": "1. ω = 2π × 540/60 = <b>56,5 rad/s</b>.<br>2. P = C ω = 950 × 56,5 = <b>53,7 kW</b>.<br>3. En ch : 53 700/736 ≈ <b>73 ch</b>.",
   "origine": "Cours §2.1 La prise de force"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment construire une chaîne d'énergie ?",
   "verso": "1. <b>Source</b> et nature de son énergie.<br>2. <b>Convertisseurs</b> dans l'ordre, nommés.<br>3. <b>Nature de l'énergie</b> entre chaque bloc.<br>4. <b>Pertes</b> : flèche descendante sous chaque bloc (chaleur).",
   "origine": "Cours §3.1 Méthode — Chaîne d'énergie"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Moteur : 12,0 L/h de gazole (ρ = 0,84 kg/L), 42 kW utiles. Comment calculer la consommation spécifique ?",
   "verso": "1. Masse : 12,0 × 0,84 = 10,08 kg/h.<br>2. CS = 10,08 / 42 = 0,240 kg/kWh = <b>240 g/kWh</b>.<br>3. Comparer : entre 200 et 260 → dans la norme.",
   "origine": "Cours §4.1 Un moteur de tracteur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment déterminer un rendement au banc ?",
   "verso": "1. Établir la charge, attendre la <b>stabilisation</b>.<br>2. Relever <b>simultanément</b> entrée et sortie.<br>3. Calculer les deux puissances (conversions !).<br>4. η et incertitude relative composée.<br>5. Comparer à la valeur constructeur (intervalle).",
   "origine": "Cours §4.2 Méthode — Rendement au banc"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
