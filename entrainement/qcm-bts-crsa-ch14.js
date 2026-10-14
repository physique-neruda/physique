/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 14 — Les capteurs
   Le bilan vient de CRSA_ch14_bilan.tex, les cartes des \trou{} de
   CRSA_ch14_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "14",
 "cle": "ch14",
 "etiquette": "Chapitre 14",
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
   "expl": "0,95 × 40 = 38. Les 95 % d'une variation, c'est le repère du temps de réponse « 3,8 »'un capteur."
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
   "expl": "Sa sortie est une impédance — résistance, capacité ou inductance. Attention au piège des réponses « il ne consomme aucune énergie » et « il ne nécessite aucune alimentation » : c'est le capteur passif qui a besoin d'une alimentation extérieure, pas l'actif. Le vocabulaire dit exactement le contraire de l'intuition."
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
   "expl": "La variation vaut 75 - 15 = 60, dont 95 % font 57, à ajouter à la valeur initiale : 15 + 57 = 72 °C. La réponse « 71,25 °C » (71,25 °C) est le piège : elle prend 95 % de la valeur finale. La réponse « 57 °C » oublie d'ajouter la valeur de départ."
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
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que fait un capteur ?",
   "verso": "Il <b>traduit</b> une grandeur physique en une grandeur <b>électrique</b>. Il ne mesure pas : il convertit. C'est le premier maillon de la chaîne de mesure.",
   "origine": "Introduction"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Grandeur d'entrée et grandeur de sortie d'un capteur : de quelle nature ?",
   "verso": "<b>Entrée</b> : la grandeur <b>physique</b> mesurée (température, force…).<br><b>Sortie</b> : <b>toujours électrique</b> (résistance, tension, courant, charge).",
   "origine": "Cours §1 Grandeurs d'entrée et de sortie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quand un capteur est-il passif ? actif ?",
   "verso": "<b>Passif</b> : la sortie est une <b>impédance</b> (résistance…) ; il faut une alimentation extérieure.<br><b>Actif</b> : il délivre une <b>tension, un courant ou une charge</b> (générateur).",
   "origine": "Cours §2 Capteur passif, capteur actif"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quels sont les trois types de signal de sortie ? Ce classement dépend-il d'actif/passif ?",
   "verso": "<b>Analogique</b>, <b>logique</b> (deux états), <b>numérique</b> (nombre codé). Classement <b>indépendant</b> d'actif/passif (Pt100 : passive et analogique).",
   "origine": "Cours §3 Nature du signal"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la sensibilité d'un capteur. Son unité ?",
   "verso": "La <b>pente</b> de la caractéristique statique : <b>s = ΔS / ΔE</b>. Unité <b>déduite du quotient</b> (Ω/°C pour une Pt100).",
   "origine": "Cours §4 Sensibilité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que l'étendue de mesure ? Quand un capteur est-il linéaire ?",
   "verso": "<b>Étendue</b> : l'intervalle sur lequel le capteur est garanti.<br><b>Linéaire</b> : caractéristique = <b>droite</b>, sensibilité constante.",
   "origine": "Cours §4 Étendue et linéarité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Loi de la sonde Pt100 ? Sensibilité ?",
   "verso": "<b>R = R<sub>0</sub>(1 + α θ)</b>, R<sub>0</sub> = 100 Ω à 0 °C, α = 3,85 × 10<sup>−3</sup> °C<sup>−1</sup>.<br>s = R<sub>0</sub> α = <b>0,385 Ω/°C</b>. Passive, analogique.",
   "origine": "Cours §4 La Pt100"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir le temps de réponse à 5 % d'un capteur. Piège ?",
   "verso": "Le temps pour atteindre <b>95 % de la variation</b> finale après un échelon. Piège : 95 % de la variation, <b>pas de la valeur finale</b>.",
   "origine": "Cours §5 Temps de réponse à 5 %"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Jauge d'extensométrie : loi ? Thermocouple et piézoélectrique : actifs ou passifs ?",
   "verso": "Jauge : <b>ΔR/R<sub>0</sub> = k ΔL/L<sub>0</sub></b>, passive.<br>Thermocouple, piézoélectrique : <b>actifs</b>.",
   "origine": "Cours §6 Quelques capteurs"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment préciser les grandeurs d'entrée et de sortie d'un capteur ?",
   "verso": "1. Ce que le capteur <b>surveille</b> → entrée (physique).<br>2. Ce qu'il <b>délivre</b> → sortie (électrique).<br>3. Donner les <b>unités</b>.<br>4. Ne pas confondre avec la sortie du conditionneur.",
   "origine": "Cours §1 Méthode — Entrée et sortie"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment justifier qu'un capteur est actif ou passif ?",
   "verso": "Regarder la <b>nature de la sortie</b> :<br>• résistance, capacité, inductance → <b>passif</b> (rien sans alimentation) ;<br>• tension, courant, charge → <b>actif</b> (générateur).",
   "origine": "Cours §2 Méthode — Actif ou passif"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment déterminer graphiquement t<sub>r</sub>(5 %) ?",
   "verso": "1. Valeur <b>initiale</b> et <b>finale</b>.<br>2. Variation Δ = finale − initiale.<br>3. Seuil = initiale + <b>0,95 Δ</b>.<br>4. Horizontale au seuil → intersection → lire t. <b>Laisser les traits de construction.</b>",
   "origine": "Cours §5 Méthode — Temps de réponse"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment justifier le choix d'un capteur à partir d'une documentation ?",
   "verso": "1. Relever l'<b>exigence</b> de l'énoncé.<br>2. Relever la <b>caractéristique</b> correspondante.<br>3. <b>Comparer chiffres à l'appui</b> (étendue, sensibilité, linéarité, temps de réponse).<br>4. <b>Conclure</b> : convient / ne convient pas car…",
   "origine": "Cours §7 Méthode — Justifier un choix de capteur"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
