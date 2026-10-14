/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 00 · Outils de base
   Le bilan vient de ch00_bilan.tex, les cartes des \trou{} de
   ch00_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "0",
 "titre": "Outils de base",
 "niveau": "BTS TSMA",
 "prerequis": [],
 "bilan": [
  {
   "q": "L'unité SI de la masse est :",
   "choix": [
    "le gramme",
    "la tonne",
    "le kilogramme"
   ],
   "bonne": 2,
   "expl": "le kilogramme est l'unité de base, et c'est la seule dont le nom porte déjà un préfixe : il n'existe pas de « kilokilogramme ». Et « kilo » vaut toujours 1000, jamais 100. 3pt"
  },
  {
   "q": "2,5 kW valent :",
   "choix": [
    "250 W",
    "2500 W",
    "25000 W"
   ],
   "bonne": 1,
   "expl": "le kilogramme est l'unité de base, et c'est la seule dont le nom porte déjà un préfixe : il n'existe pas de « kilokilogramme ». Et « kilo » vaut toujours 1000, jamais 100. 3pt"
  },
  {
   "q": "Le nombre 0,00450 comporte :",
   "choix": [
    "3 chiffres significatifs",
    "2 chiffres significatifs",
    "5 chiffres significatifs"
   ],
   "bonne": 0,
   "expl": "dans 0,00450, les zéros de gauche ne comptent pas, celui de droite si : trois chiffres significatifs. Et le quotient garde le nombre de chiffres de la donnée la moins précise, ici deux. Recopier les huit décimales de la calculatrice est sanctionné au titre de Communiquer. 3pt"
  },
  {
   "q": "On calcule 12,3 / 4,0. Le résultat s'écrit :",
   "choix": [
    "3,1",
    "3,075",
    "3"
   ],
   "bonne": 0,
   "expl": "dans 0,00450, les zéros de gauche ne comptent pas, celui de droite si : trois chiffres significatifs. Et le quotient garde le nombre de chiffres de la donnée la moins précise, ici deux. Recopier les huit décimales de la calculatrice est sanctionné au titre de Communiquer. 3pt"
  },
  {
   "q": "2,5 m² valent :",
   "choix": [
    "250 cm²",
    "25000 cm²",
    "2500000 cm²"
   ],
   "bonne": 1,
   "expl": "pour une surface, le facteur est 100² = 10000, et non 100. C'est l'erreur de conversion la plus fréquente de toute la collection. 3pt"
  },
  {
   "q": "72 km/h valent :",
   "choix": [
    "259 m/s",
    "26 m/s",
    "20 m/s"
   ],
   "bonne": 2,
   "expl": "on divise par 3,6. Contrôle : 72 km/h, c'est un peu plus de 1 km par minute, donc une vingtaine de mètres par seconde. 3pt"
  },
  {
   "q": "Une droite passe par les points (2,0 ; 5,4) et (8,0 ; 15,0). Sa pente vaut :",
   "choix": [
    "9,6",
    "2,7",
    "1,6"
   ],
   "bonne": 2,
   "expl": "a = (15,0-5,4)/(8,0-2,0) = 1,6 ; la réponse « 1,6 » oublie de diviser par l'écart des abscisses. Et comme l'ordonnée à l'origine vaut 2,2, la droite ne passe pas par l'origine : la règle de trois donnerait un résultat faux, et plausible — c'est ce qui la rend dangereuse. 3pt"
  },
  {
   "q": "Pour cette même droite, la règle de trois est :",
   "choix": [
    "invalide : elle ne passe pas par l'origine",
    "valable, c'est une droite",
    "valable si x est petit"
   ],
   "bonne": 0,
   "expl": "a = (15,0-5,4)/(8,0-2,0) = 1,6 ; la réponse « valable si x est petit » oublie de diviser par l'écart des abscisses. Et comme l'ordonnée à l'origine vaut 2,2, la droite ne passe pas par l'origine : la règle de trois donnerait un résultat faux, et plausible — c'est ce qui la rend dangereuse. 3pt"
  },
  {
   "q": "cosφ= 0,80. Alors tanφ vaut :",
   "choix": [
    "0,60",
    "0,75",
    "1,25"
   ],
   "bonne": 1,
   "expl": "φ= (0,80) = 36,9 °, donc tanφ= 0,75. La réponse « 0,60 » est le sinus, la réponse « 1,25 » l'inverse du cosinus. 3pt"
  },
  {
   "q": "Le nombre 1200, écrit tel quel, comporte :",
   "choix": [
    "deux chiffres significatifs",
    "c'est ambigu : l'écriture ne permet pas de trancher",
    "quatre chiffres significatifs"
   ],
   "bonne": 1,
   "expl": "rien ne dit si les deux zéros sont mesurés ou s'ils placent seulement la virgule. C'est précisément pour lever ce doute qu'on écrit 1,2×10³, 1,20×10³ ou 1,200×10³ selon la précision réelle : l'écriture scientifique est la seule qui dise à la fois la valeur et la précision. 3pt"
  },
  {
   "q": "Un moteur de 100 kW consommerait 0,5 L de gazole par heure. Ce résultat est :",
   "choix": [
    "aberrant, d'un facteur voisin de 50",
    "plausible",
    "impossible à juger"
   ],
   "bonne": 0,
   "expl": "un moteur de 100 kW consomme plutôt 25 L/h : le résultat proposé est cinquante fois trop faible. Le contrôle d'ordre de grandeur ne remplace jamais le calcul — il attrape les erreurs que le calcul, lui, ne signale pas, parce qu'une calculatrice ne se trompe jamais sur une donnée fausse. tcolorbox"
  },
  {
   "q": "Le contrôle d'ordre de grandeur sert à :",
   "choix": [
    "remplacer le calcul",
    "gagner du temps",
    "attraper les erreurs que le calcul ne signale pas"
   ],
   "bonne": 2,
   "expl": "un moteur de 100 kW consomme plutôt 25 L/h : le résultat proposé est cinquante fois trop faible. Le contrôle d'ordre de grandeur ne remplace jamais le calcul — il attrape les erreurs que le calcul, lui, ne signale pas, parce qu'une calculatrice ne se trompe jamais sur une donnée fausse. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>À quelle condition un résultat sort-il automatiquement dans la bonne unité ?",
   "verso": "Avoir converti <b>toutes les données en unités SI avant de calculer</b>.",
   "origine": "Cours §1 Grandeur, valeur et unité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>On convertit vers une unité plus <b>petite</b>. Le nombre augmente ou diminue ? Et l'exposant ?",
   "verso": "Le découpage est plus fin, il en faut <b>davantage</b> : le nombre <b>augmente</b>, exposant <b>positif</b>.<br>Vers une unité plus grande : le nombre diminue, exposant négatif.",
   "origine": "Cours §1 La règle qui donne le signe"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sur quelle unité s'appliquent les préfixes pour une masse ?",
   "verso": "Sur le <b>gramme</b>, jamais sur le kilogramme (pas de « kilokilogramme »). Le kg est la seule unité de base qui porte déjà un préfixe.",
   "origine": "Cours §1 Le piège du kilogramme"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que valent 10<sup>a</sup> × 10<sup>b</sup> et 10<sup>a</sup> / 10<sup>b</sup> ?",
   "verso": "10<sup>a</sup> × 10<sup>b</sup> = <b>10<sup>a+b</sup></b><br>10<sup>a</sup> / 10<sup>b</sup> = <b>10<sup>a−b</sup></b>",
   "origine": "Cours §2 Les puissances de dix"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelle est la forme d'une écriture scientifique ?",
   "verso": "<b>N = a × 10<sup>n</sup></b> avec <b>1 ≤ a &lt; 10</b>.<br>45 × 10<sup>5</sup> ou 0,45 × 10<sup>7</sup> ne sont <b>pas</b> des écritures scientifiques.",
   "origine": "Cours §2 L'écriture scientifique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Écriture scientifique : comment choisir le signe de l'exposant ?",
   "verso": "On se demande si le nombre doit <b>grandir</b> (exposant <b>positif</b>) ou <b>rapetisser</b> (exposant <b>négatif</b>) pour revenir au nombre de départ. Aucune règle de déplacement de virgule.",
   "origine": "Cours §2 C'est la même question que pour les conversions"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Combien de chiffres significatifs pour un produit ou un quotient ? pour une somme ?",
   "verso": "Produit, quotient : autant que la <b>donnée la moins précise</b>.<br>Somme, différence : c'est le <b>nombre de décimales</b> qui commande.<br>On n'arrondit <b>qu'à la fin</b>.",
   "origine": "Cours §3 La règle du plus faible"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Combien de chiffres significatifs a 1200 ? Comment lever le doute ?",
   "verso": "On ne sait pas : <b>2, 3 ou 4</b>. Seule l'<b>écriture scientifique</b> le dit : 1,2 × 10<sup>3</sup> (2 c.s.), 1,20 × 10<sup>3</sup> (3), 1,200 × 10<sup>3</sup> (4).",
   "origine": "Cours §3 Pourquoi 1200 est ambigu"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Compte-t-on les chiffres significatifs de « batterie 12 V » ou « réseau d'air à 6 bar » ?",
   "verso": "Non : ce sont des valeurs <b>nominales</b> (des noms de catégorie), pas des mesures.",
   "origine": "Cours §3 Toutes les valeurs ne sont pas des mesures"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Préfixes de kilo à milli, puis au-delà ? Que vaut un cran ?",
   "verso": "Un cran = <b>un facteur 10</b>.<br>k, h, da, unité, d, c, m.<br>Puis par <b>3 crans</b> : M, G, T d'un côté ; µ, n, p de l'autre (« Mille Microbes Nagent Profondément »).",
   "origine": "Cours §4 Convertir : compter les crans"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que valent 1 cm² en m², et 1 L en m³ ?",
   "verso": "<b>1 cm² = 10<sup>−4</sup> m²</b><br><b>1 L = 1 dm³ = 10<sup>−3</sup> m³</b><br>Aire : la puissance de 10 s'élève au carré ; volume : au cube.",
   "origine": "Cours §5 Le piège des unités composées"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>1 bar en Pa ? 1 tr/min en rad/s ? T (K) en fonction de θ (°C) ?",
   "verso": "<b>1 bar = 10<sup>5</sup> Pa</b><br><b>1 tr/min = 2π/60 rad/s</b><br><b>T = θ + 273</b>",
   "origine": "Cours §5 Conversions du métier"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Une pompe débite 60 L/min. Combien en m³/s, L/s et m³/h ?",
   "verso": "60 × 10<sup>−3</sup> / 60 = <b>1,0 × 10<sup>−3</sup> m³/s</b> = <b>1,0 L/s</b> = <b>3,6 m³/h</b>.<br>Seule l'écriture en m³/s entre dans les formules.",
   "origine": "Cours §5 Un débit, trois écritures"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Combien valent 1,5 h et 2,25 h ? Comment passe-t-on des km/h aux m/s ?",
   "verso": "1,5 h = <b>1 h 30 min</b> ; 2,25 h = <b>2 h 15 min</b> (partie décimale × 60).<br>km/h → m/s : <b>diviser par 3,6</b>.",
   "origine": "Cours §6 Durées"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Deux grandeurs sont proportionnelles si… ? Et sur un graphique ?",
   "verso": "Leur <b>quotient est constant</b>.<br>Graphique : une <b>droite passant par l'origine</b> — les deux conditions sont nécessaires.",
   "origine": "Cours §7 Proportionnalité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formule de la pente d'une droite ? Avec quelle unité ? Quels points choisir ?",
   "verso": "<b>a = (y<sub>2</sub> − y<sub>1</sub>) / (x<sub>2</sub> − x<sub>1</sub>)</b><br>Unité : celle de y divisée par celle de x.<br>Deux points <b>éloignés</b> de la droite.",
   "origine": "Cours §9 Lire une droite"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quand a-t-on le droit d'utiliser une règle de trois sur une droite ?",
   "verso": "Seulement si la droite <b>passe par l'origine</b>. Avec une ordonnée à l'origine (décalage de capteur, tare), doubler x ne double pas y.",
   "origine": "Cours §9 La règle de trois n'est pas toujours valable"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sur quel principe repose la transformation d'une formule ?",
   "verso": "Faire <b>la même opération sur les deux membres</b> de l'égalité. C'est la seule méthode qui marche aussi avec une somme.",
   "origine": "Cours §10 Transformer une formule"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans un triangle rectangle, que valent cos α, sin α et tan α ?",
   "verso": "<b>cos α = adjacent / hypoténuse</b><br><b>sin α = opposé / hypoténuse</b><br><b>tan α = opposé / adjacent</b><br>Vérifier le mode <b>degrés</b> de la calculatrice.",
   "origine": "Cours §11 Trigonométrie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que fait-on toujours avant d'écrire un résultat ?",
   "verso": "On vérifie qu'il est <b>plausible</b> (ordre de grandeur). Repérer une erreur est évalué en CCF dans la compétence <b>Valider</b>.",
   "origine": "Cours §12 Contrôler un ordre de grandeur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment écrire 4 500 000 Pa et 0,000072 m en écriture scientifique ?",
   "verso": "1. Écrire le nombre entre 1 et 10 : 4,5 et 7,2.<br>2. Compter les rangs pour revenir au nombre : 6 rangs en <b>agrandissant</b> ; 5 rangs en <b>rapetissant</b>.<br>3. p = <b>4,5 × 10<sup>6</sup> Pa</b> ; e = <b>7,2 × 10<sup>−5</sup> m</b>.",
   "origine": "Cours §2 Méthode 1"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Vérin : S = 38,5 cm², p = 125 bar. Comment calculer F = p S au bon nombre de chiffres ?",
   "verso": "1. SI : S = 38,5 × 10<sup>−4</sup> m² ; p = 1,25 × 10<sup>7</sup> Pa.<br>2. Calculer sans arrondir : 48 125 N.<br>3. Données à 3 c.s. → <b>F = 4,81 × 10<sup>4</sup> N</b>.<br>4. Contrôler : ~4,9 t, plausible.",
   "origine": "Cours §3 Méthode 2"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment convertir une section de 2,5 cm² en m² ?",
   "verso": "1. Crans de cm à m : <b>2</b>, vers une unité plus grosse → 10<sup>−2</sup>.<br>2. Aire : élever <b>une fois</b> au carré → 10<sup>−4</sup>.<br>3. S = <b>2,5 × 10<sup>−4</sup> m²</b>.",
   "origine": "Cours §5 Unités composées"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Prise de force : 540 tr/min, couple 380 N·m. Comment calculer la puissance ?",
   "verso": "1. Convertir : ω = 540 × 2π/60 = <b>56,5 rad/s</b>.<br>2. P = C ω = 380 × 56,5 = 21 470 W.<br>3. Arrondir : <b>P = 21,5 kW</b>.<br>Oublier la conversion donne 9,55 fois trop.",
   "origine": "Cours §6 Méthode 3"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>6,0 m de flexible pèsent 5,4 kg. Comment trouver la masse de 14 m ?",
   "verso": "1. Vérifier la proportionnalité (flexible homogène).<br>2. <b>Passer à l'unité</b> : 1 m pèse 5,4 / 6,0 = 0,90 kg.<br>3. Multiplier : 14 × 0,90 = <b>12,6 kg</b>.<br>4. Contrôler : un peu plus du double.",
   "origine": "Cours §8 Méthode 4"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment isoler Δθ dans Q = m c Δθ ?",
   "verso": "1. Δθ est multiplié par m et c.<br>2. <b>Diviser les deux membres</b> par m c.<br>3. <b>Δθ = Q / (m c)</b>.<br>4. Contrôler l'unité : J / (kg × J·kg<sup>−1</sup>·K<sup>−1</sup>) = K.",
   "origine": "Cours §10 Méthode 5"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment isoler h dans p<sub>A</sub> = p<sub>B</sub> + ρ g h ?",
   "verso": "1. <b>Déplacer le terme entier</b> : p<sub>A</sub> − p<sub>B</sub> = ρ g h.<br>2. <b>Diviser</b> par ρ g : <b>h = (p<sub>A</sub> − p<sub>B</sub>) / (ρ g)</b>.",
   "origine": "Cours §10 Quand la formule contient une somme"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
