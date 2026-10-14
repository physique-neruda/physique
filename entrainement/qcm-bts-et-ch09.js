/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · Chapitre 9 — Distribution et qualité de l'énergie électrique
   Le bilan vient de ch09_bilan.tex, les cartes des \trou{} de
   ch09_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "9",
 "cle": "ch09",
 "etiquette": "Chapitre 9",
 "titre": "Distribution et qualité de l'énergie électrique",
 "niveau": "BTS ET",
 "prerequis": [],
 "bilan": [
  {
   "q": "La résistance d'un conducteur de longueur L_c et de section S vaut :",
   "choix": [
    "ρS/L_c",
    "ρL_c/S",
    "ρL_c S"
   ],
   "bonne": 1,
   "expl": "R = ρL_c/S : la résistance croît avec la longueur et décroît avec la section. Attention aux unités — la section se convertit en meter², donc 95 mmeter² vaut 95×10⁻⁶ meter²."
  },
  {
   "q": "Les pertes par effet Joule dans une canalisation triphasée s'écrivent :",
   "choix": [
    "R I²",
    "√3 R I²",
    "3 R I²"
   ],
   "bonne": 2,
   "expl": "Trois conducteurs actifs, donc trois fois RI². Le facteur √3 n'intervient jamais dans les pertes ; il n'apparaît que dans S = √3 U I et dans la chute de tension."
  },
  {
   "q": "On multiplie par 10 la tension de transport d'une même puissance. Les pertes en ligne sont :",
   "choix": [
    "divisées par 100",
    "divisées par 10",
    "inchangées"
   ],
   "bonne": 0,
   "expl": "Le courant est divisé par 10, et les pertes varient comme son carré : elles sont divisées par 100. C'est toute la justification du transport en haute tension."
  },
  {
   "q": "Le facteur de puissance d'une installation est le quotient :",
   "choix": [
    "Q/S",
    "P/S",
    "P/Q"
   ],
   "bonne": 1,
   "expl": "f_p = P/S. Attention, ce n'est cosφ que si les courants sont sinusoïdaux."
  },
  {
   "q": "Deux départs alimentent le même TGBT. Pour établir le bilan, on additionne :",
   "choix": [
    "les puissances actives entre elles et les réactives entre elles",
    "les puissances apparentes",
    "les facteurs de puissance"
   ],
   "bonne": 0,
   "expl": "Les puissances actives s'ajoutent entre elles, les réactives entre elles. Les puissances apparentes, elles, ne s'additionnent pas — on les recompose à la fin par S = √(P²+Q²+D²). C'est l'erreur la plus fréquente en début de sujet E4."
  },
  {
   "q": "Une batterie de condensateurs doit fournir Q_C = P(tanφ- tanφ'). Pour P = 100 kW, tanφ= 0,90 et tanφ' = 0,40, elle vaut :",
   "choix": [
    "40 kvar",
    "90 kvar",
    "50 kvar"
   ],
   "bonne": 2,
   "expl": "Q_C = 100×(0,90-0,40) = 50 kvar. Sur un sujet, il resterait à choisir le gradin normalisé immédiatement supérieur."
  },
  {
   "q": "À puissance réactive donnée, la capacité nécessaire en couplage triangle est, par rapport au couplage étoile :",
   "choix": [
    "trois fois plus grande",
    "trois fois plus petite",
    "identique"
   ],
   "bonne": 1,
   "expl": "En triangle, chaque condensateur voit U au lieu de U/√3, et sa puissance réactive varie comme le carré de la tension : une capacité trois fois plus petite suffit. C'est le couplage systématiquement retenu."
  },
  {
   "q": "Après installation d'une batterie de condensateurs, la puissance active consommée par l'installation :",
   "choix": [
    "est inchangée",
    "diminue d'environ 20 %",
    "augmente légèrement"
   ],
   "bonne": 0,
   "expl": "Inchangée. La compensation supprime la facturation du réactif et réduit les pertes de la ligne, mais la puissance active — donc la consommation en kW·h — reste la même. Annoncer une économie d'énergie à un client est une faute professionnelle autant qu'une faute de physique."
  },
  {
   "q": "Un analyseur relève I₁ = 40 A et I₅ = 30 A. La valeur efficace du courant vaut :",
   "choix": [
    "70 A",
    "35 A",
    "50 A"
   ],
   "bonne": 2,
   "expl": "√(40²+30²) = 50 A. Les valeurs efficaces se composent quadratiquement ; la réponse « 70 A » correspond à une addition directe, qui n'a aucun sens physique."
  },
  {
   "q": "Sur un départ à variateurs, on mesure f_p = 0,75 et cosφ₁ = 0,96. L'écart entre les deux vient :",
   "choix": [
    "d'une erreur de mesure",
    "des harmoniques de courant",
    "du déséquilibre entre phases"
   ],
   "bonne": 1,
   "expl": "f_p = (I₁/I)cosφ₁ : le rapport I₁/I vaut ici 0,78, ce qui traduit la présence d'un courant harmonique important. Une batterie de condensateurs n'améliorerait que le facteur cosφ₁, déjà bon : elle serait sans effet."
  },
  {
   "q": "Un filtre passif L--C série destiné au rang 5 d'un réseau à 50 Hz est accordé sur :",
   "choix": [
    "50 Hz",
    "500 Hz",
    "250 Hz"
   ],
   "bonne": 2,
   "expl": "f_r = n f = 5× 50 = 250 Hz. En pratique on accorde légèrement en dessous, vers 215 Hz, pour que la branche reste inductive à 50 Hz."
  },
  {
   "q": "En CEM, la susceptibilité d'un appareil désigne :",
   "choix": [
    "sa sensibilité aux perturbations extérieures",
    "sa capacité à ne pas perturber les autres",
    "sa consommation en veille"
   ],
   "bonne": 0,
   "expl": "La susceptibilité est la sensibilité subie ; la compatibilité est l'aptitude à ne pas émettre. Un matériel conforme est mesuré sur les deux plans."
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Modèle d'une ligne » ?",
   "verso": "Une canalisation triphasée se modélise, <strong>pour chaque phase</strong>, par une résistance R en série avec une inductance L. On néglige la capacité entre conducteurs, sans conséquence sur les longueurs rencontrées en basse tension.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Facteur de puissance » ?",
   "verso": "Le facteur de puissance est le quotient de la puissance active par la puissance apparente : f_p = P/S. Il est toujours compris entre 0 et 1.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Charge non linéaire » ?",
   "verso": "Une charge est dite <strong>non linéaire</strong> lorsqu'elle absorbe un courant non sinusoïdal alors que la tension qui l'alimente l'est.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Filtre passif accordé » ?",
   "verso": "Une branche L--C série placée sur le jeu de barres présente une impédance quasi nulle à sa fréquence d'accord : l'harmonique correspondant s'y engouffre au lieu de remonter vers le réseau.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "L'argument décisif — qu'y a-t-il à retenir ?",
   "verso": "Si la tension est multipliée par k, le courant est divisé par k et les pertes en ligne, proportionnelles à I², sont divisées par k².",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Toujours en triangle — qu'y a-t-il à retenir ?",
   "verso": "Pour la même puissance réactive, le couplage triangle demande trois fois moins de capacité que le couplage étoile : chaque condensateur y voit U au lieu de U/√3.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "La décomposition complète de la puissance apparente — qu'y a-t-il à retenir ?",
   "verso": "S² = P² + Q² + D², où D est la <strong>puissance déformante</strong>, due aux seuls harmoniques. Le facteur de puissance s'écrit alors f_p = I₁/Icosφ₁ : une batterie de condensateurs n'agit que sur Q, jamais sur D.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Une ligne réelle produit …… et une chute de tension.",
   "rep": "des pertes par effet Joule",
   "verso": "<strong>des pertes par effet Joule</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Sa <strong>susceptibilité</strong>, c'est sa sensibilité …….",
   "rep": "aux perturbations venues des autres",
   "verso": "<strong>aux perturbations venues des autres</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "À puissance active égale, un facteur de puissance faible fait appeler …….",
   "rep": "un courant plus grand",
   "verso": "<strong>un courant plus grand</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le facteur de puissance s'écrit alors f_p = I₁/Icosφ₁ : ……, jamais sur D.",
   "rep": "une batterie de condensateurs n'agit que sur Q",
   "verso": "<strong>une batterie de condensateurs n'agit que sur Q</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Une canalisation triphasée se modélise, <strong>pour chaque phase</strong>, par …….",
   "rep": "une résistance R en série avec une inductance L",
   "verso": "<strong>une résistance R en série avec une inductance L</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "La résistance d'un conducteur de longueur L_c et de section S vaut ……",
   "rep": "ρL_c/S",
   "verso": "<strong>ρL_c/S</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Les pertes par effet Joule dans une canalisation triphasée s'écrivent ……",
   "rep": "3 R I²",
   "verso": "<strong>3 R I²</strong> — Trois conducteurs actifs, donc trois fois RI². Le facteur √3 n'intervient jamais dans les pertes ; il n'apparaît que dans S = √3 U I et dans la chute de tension.",
   "origine": "bilan"
  }
 ],
 "cartes_figees": false
};
