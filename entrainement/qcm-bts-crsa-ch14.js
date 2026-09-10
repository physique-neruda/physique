/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 14 — Les capteurs
   Le bilan vient de CRSA_ch14_bilan.tex, les cartes des \trou{} de
   CRSA_ch14_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "14",
 "titre": "Les capteurs",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Une droite passe par les points (20 ; 4,0) et (60 ; 12,0). Sa pente vaut :",
   "choix": [
    "0,20",
    "5,0",
    "0,80",
    "2,0"
   ],
   "bonne": 0,
   "expl": "(12,0 − 4,0)/(60 − 20) = 0,20. La pente d'une droite d'étalonnage, c'est la sensibilité du capteur."
  },
  {
   "q": "Un quotient « une résistance divisée par une température » s'exprime en :",
   "choix": [
    "Ω/K",
    "K/Ω",
    "Ω·K",
    "sans unité"
   ],
   "bonne": 0,
   "expl": "Les unités se divisent comme les nombres. C'est l'unité d'une sensibilité de sonde résistive."
  },
  {
   "q": "Combien vaut 95 % de 40 ?",
   "choix": [
    "38",
    "42",
    "4,2",
    "3,8"
   ],
   "bonne": 0,
   "expl": "0,95 × 40 = 38. Les 95 % d'une variation, c'est le repère du temps de réponse d'un capteur."
  },
  {
   "q": "Une Pt100 suit R = 100 (1 + 3,85×10⁻³ θ). À 60 °C, sa résistance vaut :",
   "choix": [
    "123,1 Ω",
    "138,5 Ω",
    "100,4 Ω",
    "331 Ω"
   ],
   "bonne": 0,
   "expl": "100 × (1 + 0,231) = 123,1 Ω. Le nom « Pt100 » dit qu'elle vaut 100 Ω à 0 °C."
  },
  {
   "q": "Même sonde : quelle température donne R = 138,5 Ω ?",
   "choix": [
    "100 °C",
    "138 °C",
    "38,5 °C",
    "85 °C"
   ],
   "bonne": 0,
   "expl": "(1,385 − 1)/3,85×10⁻³ = 100 °C. On isole θ, on ne devine pas."
  },
  {
   "q": "Calculer ΔL/L₀ pour ΔL = 5,0 µm et L₀ = 10 mm :",
   "choix": [
    "5,0×10⁻⁴, sans unité",
    "5,0×10⁻⁴ m",
    "0,50, sans unité",
    "5,0×10⁻³ m"
   ],
   "bonne": 0,
   "expl": "5,0×10⁻⁶/1,0×10⁻² = 5,0×10⁻⁴. Deux longueurs divisées l'une par l'autre : les mètres se simplifient, il ne reste aucune unité."
  }
 ],
 "bilan": [
  {
   "q": "La grandeur de sortie d'un capteur est :",
   "choix": [
    "toujours une grandeur physique",
    "toujours une grandeur électrique",
    "toujours une tension",
    "toujours une résistance"
   ],
   "bonne": 1,
   "expl": "C'est la définition même d'un capteur : il traduit une grandeur physique en grandeur électrique. Laquelle — résistance, tension, courant, charge — dépend du capteur ; c'est justement ce qui distingue les passifs des actifs."
  },
  {
   "q": "Une sonde Pt100 mesure la température d'un bain. Sa grandeur d'entrée est :",
   "choix": [
    "une résistance",
    "une tension",
    "une température",
    "un courant"
   ],
   "bonne": 2,
   "expl": "L'entrée est la grandeur physique que l'on veut connaître, ici la température. La résistance, elle, est la sortie. Inverser les deux est l'erreur la plus coûteuse du chapitre, car la question tombe dans quatre sujets sur dix."
  },
  {
   "q": "Un capteur est dit passif lorsque :",
   "choix": [
    "il ne consomme aucune énergie",
    "sa sortie est une impédance",
    "il délivre lui-même une tension",
    "il ne nécessite aucune alimentation"
   ],
   "bonne": 1,
   "expl": "Sa sortie est une impédance — résistance, capacité ou inductance. Attention au piège des réponses a et d : c'est le capteur passif qui a besoin d'une alimentation extérieure, pas l'actif. Le vocabulaire dit exactement le contraire de l'intuition."
  },
  {
   "q": "Parmi ces capteurs, lequel est actif ?",
   "choix": [
    "la photorésistance",
    "la jauge d'extensométrie",
    "le thermocouple",
    "la sonde Pt1000"
   ],
   "bonne": 2,
   "expl": "Le thermocouple délivre directement une tension par effet Seebeck : il se comporte en générateur. Les trois autres ont une résistance pour grandeur de sortie."
  },
  {
   "q": "Que signifie le « 100 » de la sonde Pt100 ?",
   "choix": [
    "sa résistance à 100 °C",
    "sa résistance à 0 °C",
    "sa température maximale",
    "son nombre de spires"
   ],
   "bonne": 1,
   "expl": "100 Ω à 0 °C — question posée telle quelle en 2023. Le « Pt » est le symbole chimique du platine."
  },
  {
   "q": "La sensibilité d'un capteur est :",
   "choix": [
    "la valeur de sa sortie au repos",
    "la pente de sa caractéristique statique",
    "son étendue de mesure",
    "son temps de réponse"
   ],
   "bonne": 1,
   "expl": "s = ΔS/ΔE : c'est la pente. Elle est constante si, et seulement si, la caractéristique est une droite."
  },
  {
   "q": "L'unité de la sensibilité d'une sonde Pt100 est :",
   "choix": [
    "le Ω",
    "le °C",
    "le Ω/°C",
    "elle n'a pas d'unité"
   ],
   "bonne": 2,
   "expl": "L'unité se déduit du quotient : une résistance divisée par une température, soit des Ω/°C. Ne jamais donner une sensibilité sans son unité."
  },
  {
   "q": "Une caractéristique statique est une droite. On en déduit que le capteur est :",
   "choix": [
    "actif",
    "numérique",
    "linéaire",
    "rapide"
   ],
   "bonne": 2,
   "expl": "Une caractéristique rectiligne signifie que la sensibilité ne dépend pas du point de fonctionnement : le capteur est linéaire. Cela ne dit rien de sa rapidité ni de sa nature active ou passive — ce sont des classements indépendants."
  },
  {
   "q": "Un capteur passe de 15 °C à 75 °C. Le seuil servant à déterminer t_r(5 %) vaut :",
   "choix": [
    "71,25 °C",
    "72 °C",
    "57 °C",
    "75 °C"
   ],
   "bonne": 1,
   "expl": "La variation vaut 75 - 15 = 60, dont 95 % font 57, à ajouter à la valeur initiale : 15 + 57 = 72 °C. La réponse a (71,25 °C) est le piège : elle prend 95 % de la valeur finale. La réponse c oublie d'ajouter la valeur de départ."
  },
  {
   "q": "La sortie d'un détecteur de fin de course est un signal :",
   "choix": [
    "analogique",
    "logique",
    "numérique",
    "continu"
   ],
   "bonne": 1,
   "expl": "Deux états seulement, ouvert ou fermé : c'est un signal logique, ou tout ou rien."
  },
  {
   "q": "Une thermistance CTN voit sa résistance :",
   "choix": [
    "augmenter avec la température",
    "diminuer avec la température",
    "rester constante",
    "s'annuler à 0 °C"
   ],
   "bonne": 1,
   "expl": "CTN signifie « coefficient de température négatif » : la résistance diminue quand la température monte — l'inverse d'une Pt100. Le signe négatif de sa sensibilité n'est donc pas une anomalie."
  },
  {
   "q": "Pour justifier le choix d'un capteur, on doit :",
   "choix": [
    "retenir le plus sensible",
    "retenir le plus rapide",
    "confronter la documentation au cahier des charges",
    "retenir le moins cher"
   ],
   "bonne": 2,
   "expl": "Aucun critère pris isolément ne suffit. Un capteur très sensible mais dont l'étendue de mesure ne couvre pas le besoin est inutilisable. Justifier un choix, c'est confronter des chiffres — étendue, sensibilité, linéarité, temps de réponse — à l'exigence réelle. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Grandeurs d'entrée et de sortie » ?",
   "verso": "La grandeur d'<strong>entrée</strong> d'un capteur est la grandeur physique que l'on veut connaître : température, force, éclairement, débit, pH Sa grandeur de <strong>sortie</strong> est toujours une grandeur électrique : résistance, tension, courant, charge.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Capteur passif, capteur actif » ?",
   "verso": "Un capteur est <strong>passif</strong> lorsque sa grandeur de sortie est une impédance — le plus souvent une résistance. Il est <strong>actif</strong> lorsqu'il délivre lui-même une tension, un courant ou une charge, en se comportant comme un générateur.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Sensibilité » ?",
   "verso": "La sensibilité d'un capteur est la pente de sa caractéristique statique : elle indique de combien varie la sortie lorsque l'entrée varie d'une unité.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Temps de réponse à 5 % » ?",
   "verso": "Le temps de réponse à 5 %, noté t_r(5 %), est le temps que met le capteur pour atteindre 95 % de sa variation finale après un échelon appliqué à son entrée.",
   "origine": "definition du cours"
  },
  {
   "type": "trou",
   "recto": "Un capteur <strong>traduit</strong> une grandeur physique en une grandeur ……, exploitable par un circuit.",
   "rep": "électrique",
   "verso": "<strong>électrique</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un capteur est <strong>passif</strong> lorsque sa grandeur de sortie est …… — le plus souvent une résistance.",
   "rep": "une impédance",
   "verso": "<strong>une impédance</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La sensibilité d'un capteur est …… : elle indique de combien varie la sortie lorsque l'entrée varie d'une unité.",
   "rep": "la pente de sa caractéristique statique",
   "verso": "<strong>la pente de sa caractéristique statique</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le temps de réponse à 5 %, noté t_r(5 %), est le temps que met le capteur pour atteindre …… après un échelon appliqué à son entrée.",
   "rep": "95 % de sa variation finale",
   "verso": "<strong>95 % de sa variation finale</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>linéarité</strong> est acquise quand la caractéristique est …… : la sensibilité est alors constante, ce qui simplifie tout.",
   "rep": "une droite",
   "verso": "<strong>une droite</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un capteur est dit passif lorsque ……",
   "rep": "sa sortie est une impédance",
   "verso": "<strong>sa sortie est une impédance</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Parmi ces capteurs, lequel est actif ?",
   "rep": "le thermocouple",
   "verso": "<strong>le thermocouple</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Que signifie le « 100 » de la sonde Pt100 ?",
   "rep": "sa résistance à 0 °C",
   "verso": "<strong>sa résistance à 0 °C</strong> — 100 Ω à 0 °C — question posée telle quelle en 2023. Le « Pt » est le symbole chimique du platine.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "L'unité de la sensibilité d'une sonde Pt100 est ……",
   "rep": "le Ω/°C",
   "verso": "<strong>le Ω/°C</strong> — L'unité se déduit du quotient : une résistance divisée par une température, soit des Ω/°C. Ne jamais donner une sensibilité sans son unité.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une caractéristique statique est une droite. On en déduit que le capteur est ……",
   "rep": "linéaire",
   "verso": "<strong>linéaire</strong>",
   "origine": "bilan"
  }
 ]
};
