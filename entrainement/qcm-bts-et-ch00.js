/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · Chapitre 0 — Outils mathématiques
   Le bilan vient de ch00_bilan.tex, les cartes des \trou{} de
   ch00_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "0",
 "cle": "ch00",
 "etiquette": "Chapitre 0",
 "titre": "Outils mathématiques",
 "niveau": "BTS ET",
 "prerequis": [],
 "bilan": [
  {
   "q": "Dans l'aide-mémoire des unités dérivées, 1 Ω correspond à :",
   "choix": [
    "V×A",
    "V/A",
    "A/V"
   ],
   "bonne": 1,
   "expl": "On lit cette équivalence dans l'aide-mémoire, on ne la devine pas : U = R I donne R = U/I, donc des volts par ampère. La réponse « V×A » est le watt."
  },
  {
   "q": "On convertit des ohms en milliohms. Le nombre :",
   "choix": [
    "augmente",
    "diminue",
    "ne change pas"
   ],
   "bonne": 0,
   "expl": "Le milliohm est un découpage mille fois plus fin : il en faut mille fois plus. C'est la seule règle à retenir, et elle donne le signe de tous les exposants du chapitre."
  },
  {
   "q": "45000 W s'écrit, en écriture scientifique :",
   "choix": [
    "45×10³ W",
    "0,45×10⁵ W",
    "4,5×10⁴ W"
   ],
   "bonne": 2,
   "expl": "La mantisse doit être comprise entre 1 et 10 : 45 et 0,45 ne conviennent pas, même si les trois écritures valent la même chose."
  },
  {
   "q": "Le nombre 0,0284 comporte :",
   "choix": [
    "trois",
    "deux chiffres significatifs",
    "cinq"
   ],
   "bonne": 0,
   "expl": "Les zéros de tête ne comptent pas ; seuls 2, 8 et 4 sont significatifs."
  },
  {
   "q": "Le nombre 1200, écrit tel quel, comporte :",
   "choix": [
    "deux chiffres significatifs",
    "c'est ambigu : l'écriture ne permet pas de trancher",
    "quatre"
   ],
   "bonne": 1,
   "expl": "Rien ne dit si les deux zéros sont mesurés ou s'ils placent seulement la virgule. C'est précisément pour lever ce doute qu'on écrit 1,2×10³, 1,20×10³ ou 1,200×10³ selon la précision réelle."
  },
  {
   "q": "330 µF valent, en farads :",
   "choix": [
    "3,30×10⁻⁶",
    "3,30×10⁻³",
    "3,30×10⁻⁴"
   ],
   "bonne": 2,
   "expl": "Le préfixe µ vaut 10⁻⁶, donc 330× 10⁻⁶ = 3,30×10⁻⁴. La réponse « 3,30×10⁻⁴ » confond le préfixe avec le nombre lui-même."
  },
  {
   "q": "95 mmeter² valent, en meter² :",
   "choix": [
    "0,095",
    "9,5×10⁻⁵",
    "9,5×10⁻²"
   ],
   "bonne": 1,
   "expl": "Une surface se convertit au carré : le facteur e-3 devient e-6. La réponse « 0,095 » est l'erreur la plus fréquente de toute la formation, et elle se paie dès le premier calcul de résistance."
  },
  {
   "q": "1 kWh vaut :",
   "choix": [
    "1000 J",
    "3600 J",
    "3,6×10⁶ J"
   ],
   "bonne": 2,
   "expl": "1 kWh = 1000 W×3600 s = 3,6×10⁶ J. La réponse « 3,6×10⁶ J » est l'énergie d'un appareil de 1 W pendant une heure."
  },
  {
   "q": "Un moteur tourne à 1500 tr/min. En rad/s :",
   "choix": [
    "157",
    "25",
    "9425"
   ],
   "bonne": 0,
   "expl": "1500×2π/60 = 157. La réponse « 157 » divise par 60 sans le 2π, la réponse « 9425 » multiplie par 2π sans diviser par 60."
  },
  {
   "q": "La règle de trois s'applique :",
   "choix": [
    "à toute droite",
    "aux seules droites passant par l'origine",
    "à toute courbe croissante"
   ],
   "bonne": 1,
   "expl": "Une droite décalée, du type U = E-rI, met la règle de trois en défaut — et le résultat obtenu reste plausible, ce qui rend l'erreur invisible."
  },
  {
   "q": "Le courant est divisé par deux. Les pertes 3RI² sont :",
   "choix": [
    "divisées par quatre",
    "divisées par deux",
    "inchangées"
   ],
   "bonne": 0,
   "expl": "La relation est quadratique : diviser le courant par deux divise les pertes par quatre. C'est la même erreur qu'en question 10, appliquée cette fois à un carré."
  },
  {
   "q": "Sur un graphique où l'axe vertical est en volts et l'axe horizontal en ampères, la pente s'exprime en :",
   "choix": [
    "volts",
    "watts",
    "ohms"
   ],
   "bonne": 2,
   "expl": "La pente porte l'unité du quotient des deux axes : V/A = Ω. Elle vaut donc ici la résistance du dipôle."
  },
  {
   "q": "Pour lire une pente le plus précisément possible, on prend :",
   "choix": [
    "les deux points les plus éloignés de la droite tracée",
    "deux points de mesure voisins",
    "le premier et le deuxième point du tableau"
   ],
   "bonne": 0,
   "expl": "Sur un grand triangle, une même erreur de lecture pèse beaucoup moins. Deux points voisins peuvent donner une pente fausse de plus de 10 %."
  },
  {
   "q": "De U = E - r I, on tire :",
   "choix": [
    "r = E/I - U",
    "r = (E-U)/I",
    "r = (U-E)/I"
   ],
   "bonne": 1,
   "expl": "On déplace le terme entier avant de diviser. La réponse « r = E/I - U » divise un seul terme de la différence : elle donnerait ici une résistance négative, donc impossible."
  },
  {
   "q": "Dans le triangle des puissances, tanφ vaut :",
   "choix": [
    "P/S",
    "Q/S",
    "Q/P"
   ],
   "bonne": 2,
   "expl": "tanφ= Q/P, comme la tangente est le quotient du côté opposé par le côté adjacent. La réponse « P/S » est cosφ, la réponse « Q/P » est sinφ."
  },
  {
   "q": "On prévoit 1587 W et on mesure 1585 W. La conclusion attendue est :",
   "choix": [
    "la mesure est fausse, elle ne vaut pas la prévision",
    "l'écart de 0,13 % est compatible : la prévision est confirmée",
    "il faut refaire la mesure jusqu'à trouver 1587 W"
   ],
   "bonne": 1,
   "expl": "Un écart n'est jamais nul, et ce n'est pas un défaut. Ce qu'on attend est un écart chiffré et une phrase de conclusion — c'est ce que la compétence Valider évalue."
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>On passe d'une unité à une unité plus petite : le nombre augmente ou diminue ? Pourquoi ?",
   "verso": "Il <b>augmente</b> : un découpage plus fin demande davantage de morceaux.<br>Unité plus grande → il en faut moins → le nombre diminue. C'est ce qui donne le <b>signe de l'exposant</b>.",
   "origine": "Cours §1 L'unité est un découpage"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sur quelle unité s'appliquent les préfixes de masse ?",
   "verso": "Sur le <b>gramme</b>, jamais sur le kilogramme (pas de « kilokilogramme »). C'est la seule unité de base dont le nom porte déjà un préfixe.",
   "origine": "Cours §1 Le piège du kilogramme"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Forme de l'écriture scientifique ? Que signifie un exposant négatif ?",
   "verso": "<b>N = a × 10<sup>n</sup></b> avec <b>1 ≤ a &lt; 10</b>.<br>Exposant négatif = nombre <b>plus petit que 1</b> (pas un nombre négatif) : 10<sup>−3</sup> = 0,001.",
   "origine": "Cours §2 Écriture scientifique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>10<sup>a</sup> × 10<sup>b</sup> = ? et 10<sup>a</sup> / 10<sup>b</sup> = ?",
   "verso": "10<sup>a</sup> × 10<sup>b</sup> = <b>10<sup>a+b</sup></b><br>10<sup>a</sup> / 10<sup>b</sup> = <b>10<sup>a−b</sup></b>",
   "origine": "Cours §2 Calculer avec les puissances de dix"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Écrire 45 000 W puis 0,000 33 F en écriture scientifique : la démarche ?",
   "verso": "1. Écrire le nombre entre 1 et 10 : 4,5 et 3,3.<br>2. Compter les rangs pour retomber sur le nombre de départ : 4 rangs dans les deux cas.<br>3. A-t-on <b>agrandi</b> (exposant +) ou <b>rapetissé</b> (exposant −) ?<br>→ <b>4,5 × 10<sup>4</sup> W</b> et <b>3,3 × 10<sup>−4</sup> F</b>. Contrôle avec la touche EXP.",
   "origine": "Cours §2 Méthode 1 — Écriture scientifique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que l'ordre de grandeur d'un nombre ? À quoi sert-il ?",
   "verso": "La <b>puissance de dix la plus proche</b>. Il sert au contrôle rapide : un câble d'atelier fait ~10<sup>−2</sup> Ω ; une calculatrice qui annonce 41 Ω signale une erreur de trois rangs.",
   "origine": "Cours §2 L'ordre de grandeur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Combien de chiffres significatifs garder pour un produit/quotient ? Pour une somme/différence ?",
   "verso": "Produit ou quotient : autant que la <b>donnée la moins précise</b>.<br>Somme ou différence : c'est le <b>nombre de décimales</b> qui commande.",
   "origine": "Cours §3 La règle du plus faible"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Combien de chiffres significatifs a « 1200 » ? Comment lever le doute ?",
   "verso": "2, 3 ou 4 — on ne peut pas savoir. Seule l'<b>écriture scientifique</b> tranche : 1,2×10<sup>3</sup> (2 c.s.), 1,20×10<sup>3</sup> (3), 1,200×10<sup>3</sup> (4).",
   "origine": "Cours §3 Pourquoi 1200 est ambigu"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Faut-il compter les chiffres significatifs de 230 V, 400 V, 50 Hz, 25 mm² ?",
   "verso": "<b>Non</b> : ce sont des valeurs <b>nominales</b>, des noms de catégories, pas des mesures. La question ne se pose que pour des valeurs mesurées ou calculées.",
   "origine": "Cours §3 Valeurs nominales"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>U = 231 V, I = 12,6 A : donner S = U I correctement. La démarche ?",
   "verso": "1. Calculer <b>sans arrondir</b> : 2910,6.<br>2. Compter les c.s. des données : 3 et 3.<br>3. Arrondir au plus faible : <b>S = 2,91 × 10<sup>3</sup> VA</b>.<br>4. Contrôler : ~3 kVA, un départ de prises. Plausible.<br>On garde tous les chiffres jusqu'au bout ; recopier la calculatrice est une faute.",
   "origine": "Cours §3 Méthode 2 — Arrondir un résultat"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que vaut un cran sur la réglette des préfixes ? Quelles deux questions pose une conversion ?",
   "verso": "Un cran = un <b>facteur 10</b> (de k à m un par un ; au-delà, M, G, T et µ, n, p vont de 3 en 3).<br>1. <b>Combien de crans ?</b> → le chiffre de l'exposant.<br>2. <b>Découpage plus fin ou plus gros ?</b> → le signe.",
   "origine": "Cours §4 Convertir : compter les crans"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que faire avant tout calcul numérique ?",
   "verso": "Convertir <b>toutes</b> les grandeurs en <b>unités SI</b> (m, m², s, F…). Le résultat sort alors directement dans l'unité SI.",
   "origine": "Cours §4 La règle d'or"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>1 mm² = ? m². Et 95 mm² ?",
   "verso": "<b>1 mm² = 10<sup>−6</sup> m²</b> (chaque cran compte deux fois : un millionième, pas un millième).<br>95 mm² = <b>9,5 × 10<sup>−5</sup> m²</b>.",
   "origine": "Cours §5 Le piège des unités composées"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Résistance d'un câble cuivre de 125 m et 35 mm² (ρ = 1,8×10<sup>−8</sup> Ω·m) : la démarche ?",
   "verso": "1. Tout en SI : S = 35×10<sup>−6</sup> = 3,5×10<sup>−5</sup> m².<br>2. R = ρ L / S = 1,8×10<sup>−8</sup> × 125 / 3,5×10<sup>−5</sup> = 6,43×10<sup>−2</sup> Ω.<br>3. ρ a 2 c.s. → <b>R = 64 mΩ</b>.<br>4. Contrôle : quelques dizaines de mΩ pour un câble d'atelier.",
   "origine": "Cours §5 Méthode 3 — Conversion puis calcul"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que vaut 1,5 h ? et 2,25 h ?",
   "verso": "La partie décimale est une <b>fraction d'heure</b> : 0,5 h = 30 min.<br>1,5 h = <b>1 h 30 min</b> (pas 1 h 50) ; 2,25 h = <b>2 h 15 min</b>.",
   "origine": "Cours §6 Les durées se comptent par 60"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>1 kWh = combien de joules ? Pourquoi ?",
   "verso": "<b>1 kWh = 1000 W × 3600 s = 3,6 × 10<sup>6</sup> J = 3,6 MJ</b>.<br>Unité du compteur et de la facture ; le joule est celle des formules.",
   "origine": "Cours §6 Le kilowattheure"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Moteur : N = 1450 tr/min, C = 141 N·m. Puissance mécanique ? La démarche ?",
   "verso": "1. Convertir : <b>ω = N × 2π/60</b> = 151,8 rad/s.<br>2. P = C ω = 141 × 151,8 ≈ 21 400 W → <b>P = 21,4 kW</b>.<br>3. Contrôle : moteur normalisé de 22 kW, cohérent.<br>Oublier la conversion donne un résultat 60/2π ≈ 9,55 fois trop grand.",
   "origine": "Cours §6 Méthode 4 — D'un régime à une puissance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quand deux grandeurs sont-elles proportionnelles ? Comment le vérifier ?",
   "verso": "Quand on passe de l'une à l'autre en multipliant <b>toujours par le même nombre</b> : leur <b>quotient est constant</b>.<br>Graphiquement : une <b>droite passant par l'origine</b>.",
   "origine": "Cours §7 Grandeurs proportionnelles"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>« C'est une droite, donc c'est proportionnel » : vrai ou faux ? Exemples ?",
   "verso": "<b>Faux</b> : il faut aussi passer par l'<b>origine</b>.<br>Proportionnels : U = R I, Φ = B S. Non proportionnels : U = E − r I, diode, pompe.<br>P<sub>J</sub> = 3 R I² est proportionnel à <b>I²</b> : doubler I multiplie les pertes par 4.",
   "origine": "Cours §7 Une droite ne suffit pas"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>6,0 m de câble font 54 mΩ. Combien pour 14 m ? La démarche ?",
   "verso": "1. Vérifier la proportionnalité : R = ρL/S passe par l'origine.<br>2. <b>Passer à l'unité</b> : 1,0 m → 54 / 6,0 = 9,0 mΩ.<br>3. Multiplier : 14 × 9,0 = 126 mΩ → <b>1,3 × 10<sup>2</sup> mΩ</b> (2 c.s.).<br>4. Contrôler : un peu plus du double des deux côtés.",
   "origine": "Cours §8 Méthode 5 — Quatrième proportionnelle"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment lire correctement la pente d'une droite expérimentale ?",
   "verso": "1. Tracer la droite qui passe <b>au mieux entre les points</b>.<br>2. Prendre <b>deux points éloignés sur la droite</b> (pas deux mesures voisines).<br>3. a = Δy / Δx, avec <b>l'unité du quotient des axes</b> : V/A = Ω.",
   "origine": "Cours §9 Lire une pente"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Une droite a une ordonnée à l'origine non nulle : défaut de tracé ? Que lit-on sur U = E − r I ?",
   "verso": "Non, c'est une <b>information</b> (f.é.m., décalage, tare) — et la règle de trois devient interdite.<br>Sur U = E − r I : ordonnée à l'origine = <b>E</b>, pente = <b>−r</b>.",
   "origine": "Cours §9 L'ordonnée à l'origine"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quel est le seul principe pour isoler une grandeur ? Les deux gestes qui en découlent ?",
   "verso": "Faire <b>la même opération sur les deux membres</b>.<br>Ce qui multiplie d'un côté <b>divise</b> de l'autre ; ce qui s'ajoute d'un côté <b>se retranche</b> de l'autre.",
   "origine": "Cours §10 Transformer une formule"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>De Q<sub>C</sub> = 3 C ω U², tirer C et le calculer pour 25,6 kvar sous 400 V, 50 Hz.",
   "verso": "1. C est multiplié par 3, ω, U² → <b>C = Q<sub>C</sub> / (3 ω U²)</b>.<br>2. SI : Q<sub>C</sub> = 2,56×10<sup>4</sup> var ; ω = 2π×50 = 314 rad/s.<br>3. C = 2,56×10<sup>4</sup> / (3×314×400²) = <b>170 µF</b>.<br>4. Contrôle : dizaines à centaines de µF par phase, plausible.",
   "origine": "Cours §10 Méthode 6 — Isoler une grandeur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment extraire U de Q<sub>C</sub> = 3CωU² ? Et r de U = E − r I ?",
   "verso": "Un carré s'enlève par une <b>racine</b> : U = √(Q<sub>C</sub> / 3Cω).<br>Avec une somme, déplacer d'abord le terme entier : r I = E − U, puis <b>r = (E − U) / I</b>.",
   "origine": "Cours §10 Deux pièges en isolant"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans le triangle des puissances, qui est l'adjacent, l'opposé, l'hypoténuse ? Relations ?",
   "verso": "P adjacent, Q opposé, S hypoténuse.<br><b>cos φ = P/S</b>, <b>tan φ = Q/P</b>, <b>S² = P² + Q²</b>.",
   "origine": "Cours §11 Le triangle des puissances"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>cos φ = 0,72 : obtenir tan φ. La démarche et le piège ?",
   "verso": "1. φ = arccos(0,72) = 43,9°.<br>2. tan φ = <b>0,964</b>.<br>3. Contrôle : cos médiocre → tan proche de 1 ou plus.<br>Piège : calculatrice en <b>DEG</b>, sinon on obtient 0,766 rad sans s'en rendre compte.",
   "origine": "Cours §11 Méthode 7 — Du cosinus à la tangente"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment comparer une mesure à une prévision ?",
   "verso": "1. Calculer la valeur <b>prévue</b>.<br>2. Relever la valeur <b>mesurée</b> avec son unité.<br>3. Écart relatif = |mesure − prévision| / prévision × 100.<br>4. <b>Conclure par une phrase</b> : en dessous de <b>5 %</b>, compatible.<br>Ex. 1585 W pour 1587 W prévus → 0,13 %.",
   "origine": "Cours §12 Méthode 8 — Conclure sur une mesure"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>La mesure tombe exactement sur la prévision : bonne nouvelle ?",
   "verso": "Plutôt un signal d'alerte : en général on a <b>recopié le calcul</b> au lieu de lire l'appareil. Quelques dixièmes de pourcent signent une mesure réelle.",
   "origine": "Cours §12 Un écart nul doit inquiéter"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi le contrôle d'ordre de grandeur est-il indispensable ?",
   "verso": "Une erreur de <b>conversion</b> donne un résultat de la bonne forme, décalé d'un facteur 1000 ou 10<sup>6</sup> : rien ne l'indique. Seul le contrôle de plausibilité l'attrape (câble ≠ 41 Ω, rendement &lt; 1…).",
   "origine": "Cours §13 Contrôler l'ordre de grandeur"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
