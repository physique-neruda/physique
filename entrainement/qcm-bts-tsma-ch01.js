/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 01 · Mesures, erreurs et incertitudes
   Le bilan vient de ch01_bilan.tex, les cartes des \trou{} de
   ch01_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "1",
 "titre": "Mesures, erreurs et incertitudes",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Moyenne de la série 12,4 ; 12,7 ; 12,5 ; 12,8 ; 12,6 ; 12,6 :",
   "choix": [
    "12,55",
    "12,60",
    "12,65",
    "75,6"
   ],
   "bonne": 1,
   "expl": "Somme = 75,6, divisée par 6. On garde le même nombre de décimales que les données."
  },
  {
   "q": "La valeur de 2√3, à trois chiffres significatifs :",
   "choix": [
    "1,73",
    "2,45",
    "3,46",
    "3,16"
   ],
   "bonne": 2,
   "expl": "√3 = 1,732, donc 2√3 = 3,46. C'est le dénominateur de u = d/(2√3) : il reviendra à chaque exercice."
  },
  {
   "q": "Une grandeur vaut 215,80 et son incertitude 0,0041. L'incertitude relative vaut :",
   "choix": [
    "1,9×10⁻⁵",
    "0,0041",
    "1,9×10⁻³",
    "4,1×10⁻³"
   ],
   "bonne": 0,
   "expl": "0,0041/215,80 = 1,9×10⁻⁵, soit 0,0019 %. Une incertitude relative est un nombre sans unité."
  },
  {
   "q": "Combien vaut √((4,6×10⁻⁵)² + (6,0×10⁻³)²) ?",
   "choix": [
    "6,0×10⁻³",
    "1,06×10⁻²",
    "6,05×10⁻³",
    "4,6×10⁻⁵"
   ],
   "bonne": 0,
   "expl": "Le premier terme est invisible devant le second : c'est toute la logique de la composition quadratique, la plus petite contribution disparaît."
  },
  {
   "q": "Une mesure vaut 1079 avec une incertitude de 13. La valeur 1058 est-elle dans l'intervalle ?",
   "choix": [
    "oui",
    "non",
    "on ne peut pas savoir"
   ],
   "bonne": 1,
   "expl": "L'intervalle est [1066 ; 1092] : 1058 en est exclu, 1092 en fait partie (c'est la borne)."
  },
  {
   "q": "Arrondir l'incertitude 12,94 à deux chiffres significatifs donne :",
   "choix": [
    "12",
    "12,9",
    "13",
    "10"
   ],
   "bonne": 2,
   "expl": "Une incertitude s'arrondit toujours vers le haut : mieux vaut en annoncer un peu plus que pas assez."
  }
 ],
 "bilan": [
  {
   "q": "Répéter une mesure et moyenner permet de réduire :",
   "choix": [
    "l'erreur systématique",
    "l'erreur aléatoire",
    "les deux"
   ],
   "bonne": 1,
   "expl": "moyenner ne corrige que l'aléatoire. Un zéro décalé se retrouve identique sur les mille mesures suivantes : seule la comparaison à une référence le révèle. 3pt"
  },
  {
   "q": "Un manomètre dont le zéro est décalé de 0,4 bar introduit une erreur :",
   "choix": [
    "systématique",
    "aléatoire",
    "négligeable"
   ],
   "bonne": 0,
   "expl": "moyenner ne corrige que l'aléatoire. Un zéro décalé se retrouve identique sur les mille mesures suivantes : seule la comparaison à une référence le révèle. 3pt"
  },
  {
   "q": "Une série de mesures très groupées prouve que la mesure est :",
   "choix": [
    "juste",
    "juste et fidèle",
    "fidèle"
   ],
   "bonne": 2,
   "expl": "des mesures groupées sont fidèles. Elles peuvent être parfaitement fausses : c'est le cas le plus dangereux, parce qu'il inspire confiance. 3pt"
  },
  {
   "q": "Pour une lecture unique sur un instrument de résolution d = 0,02 mm, l'incertitude-type vaut environ :",
   "choix": [
    "0,006 mm",
    "0,02 mm",
    "0,04 mm"
   ],
   "bonne": 0,
   "expl": "u = d/(2√3) = 0,02/3,46 = 5,8×10⁻³ mm. Prendre u = d surestime d'un facteur 3,5. 3pt"
  },
  {
   "q": "Pour un appareil de classe, l'incertitude dépend :",
   "choix": [
    "de la valeur lue",
    "du nombre de mesures",
    "du calibre utilisé"
   ],
   "bonne": 2,
   "expl": "u = c E/(100√3) : l'incertitude est constante sur toute l'échelle. D'où la règle : choisir le plus petit calibre compatible, pour lire dans le haut de l'échelle. 3pt"
  },
  {
   "q": "Dans une série de n mesures d'écart-type s, l'incertitude-type de répétabilité vaut :",
   "choix": [
    "s",
    "s/√n",
    "s/n"
   ],
   "bonne": 1,
   "expl": "u = s/√n, donc quadrupler n divise u par 2 seulement. Le rendement est décroissant : au-delà d'une dizaine de mesures, il vaut mieux chercher d'où vient la dispersion. 3pt"
  },
  {
   "q": "Multiplier par 4 le nombre de mesures divise l'incertitude-type par :",
   "choix": [
    "2",
    "4",
    "16"
   ],
   "bonne": 0,
   "expl": "u = s/√n, donc quadrupler n divise u par 2 seulement. Le rendement est décroissant : au-delà d'une dizaine de mesures, il vaut mieux chercher d'où vient la dispersion. 3pt"
  },
  {
   "q": "L'incertitude élargie U = 2u correspond à un niveau de confiance d'environ :",
   "choix": [
    "68 %",
    "100 %",
    "95 %"
   ],
   "bonne": 2,
   "expl": "k = 2 correspond à environ 95 % de confiance. C'est la convention de tous les sujets de BTS ; k est toujours précisé dans l'énoncé. 3pt"
  },
  {
   "q": "Pour ρ= m/V, avec u(m)/m = 0,002 % et u(V)/V = 0,60 %, l'incertitude relative sur ρ vaut :",
   "choix": [
    "0,602 %",
    "0,60 %",
    "0,30 %"
   ],
   "bonne": 1,
   "expl": "√(0,00002² + 0,0060²) = 0,0060 : la contribution de la pesée est invisible. Améliorer la balance ne changerait rien ; tout se joue sur le volume. C'est le raisonnement que le référentiel désigne par « comparer le poids des différentes sources d'erreurs ». 3pt"
  },
  {
   "q": "Dans la situation précédente, pour améliorer le résultat il faut d'abord agir sur :",
   "choix": [
    "la mesure du volume",
    "la pesée",
    "les deux également"
   ],
   "bonne": 0,
   "expl": "√(0,00002² + 0,0060²) = 0,0060 : la contribution de la pesée est invisible. Améliorer la balance ne changerait rien ; tout se joue sur le volume. C'est le raisonnement que le référentiel désigne par « comparer le poids des différentes sources d'erreurs ». 3pt"
  },
  {
   "q": "Le tableur affiche x = 1078,9 et U = 12,94. Le résultat s'écrit :",
   "choix": [
    "1078,9 ± 12,94",
    "1079 ± 13",
    "1080 ± 10"
   ],
   "bonne": 1,
   "expl": "l'incertitude s'arrondit d'abord, vers le haut, à deux chiffres ; la valeur s'aligne ensuite sur le même rang. 3pt"
  },
  {
   "q": "Une mesure donne (4,820 ± 0,017) kPa et la référence vaut 4,80 kPa. On conclut :",
   "choix": [
    "l'écart est faible, la mesure est correcte",
    "il faut refaire la série avant de se prononcer",
    "la référence est hors intervalle : erreur systématique probable"
   ],
   "bonne": 2,
   "expl": "l'intervalle est [ 4,803 ; 4,837 ] et ne contient pas 4,80. Ce n'est pas « un petit écart » : l'écart dépasse l'incertitude, donc la dispersion aléatoire ne suffit pas à l'expliquer. Un biais systématique est en cause — probablement le zéro du capteur. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Erreur aléatoire : comment se manifeste-t-elle ? Comment la réduire ?",
   "verso": "Elle change de valeur et de signe d'une mesure à l'autre : elle <b>disperse</b> les résultats. On la réduit <b>en répétant les mesures et en les moyennant</b>.",
   "origine": "Cours §1.1 Les deux natures d'erreur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Erreur systématique : comment se manifeste-t-elle ? La répétition la corrige-t-elle ?",
   "verso": "Elle se répète à l'identique et <b>décale</b> toutes les mesures dans le même sens. Répéter <b>ne la corrige jamais</b>.",
   "origine": "Cours §1.1 Les deux natures d'erreur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment révéler une erreur systématique ?",
   "verso": "Uniquement en <b>comparant à une valeur de référence</b>. Des mesures très groupées prouvent seulement que l'erreur aléatoire est faible.",
   "origine": "Cours §1.1 La conséquence pratique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelles sont les trois occasions de s'écarter de la valeur vraie lors d'une mesure ?",
   "verso": "L'<b>instrument</b>, l'<b>opérateur</b> et l'<b>environnement</b>.",
   "origine": "Cours §1.2 D'où viennent les erreurs"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelle différence entre erreur et incertitude ?",
   "verso": "L'<b>erreur</b> est inconnue par nature. L'<b>incertitude u</b> est ce que l'on sait de son ampleur ; elle s'exprime dans l'unité de la grandeur.",
   "origine": "Cours §2 Évaluer l'incertitude"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Incertitude-type d'une lecture unique sur un instrument de résolution d ?",
   "verso": "<b>u = d / (2√3) ≈ 0,29 d</b>",
   "origine": "Cours §2.1 Une mesure unique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Incertitude-type d'un appareil analogique de classe c sur le calibre E ?",
   "verso": "<b>u = c × E / (100 √3)</b>",
   "origine": "Cours §2.1 Une mesure unique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Appareil de classe : de quoi dépend l'incertitude ? Quel calibre choisir ?",
   "verso": "Du <b>calibre</b>, pas de la valeur lue. Choisir toujours le <b>plus petit calibre compatible</b> avec la valeur attendue.",
   "origine": "Cours §2.1 Le piège du calibre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Série de n mesures : incertitude-type sur la moyenne ?",
   "verso": "<b>u = s / √n</b> (s : écart-type expérimental). s mesure la dispersion des mesures, u l'incertitude sur la moyenne.",
   "origine": "Cours §2.2 Une série de mesures"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Augmenter le nombre n de mesures réduit-il s ? et u ?",
   "verso": "<b>s ne diminue pas</b>. u diminue, mais en 1/√n : il faut <b>quadrupler</b> n pour diviser u par 2.",
   "origine": "Cours §2.2 Une série de mesures"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Incertitude élargie : formule, valeur de k, niveau de confiance ?",
   "verso": "<b>U = k u</b> avec <b>k = 2</b> : niveau de confiance d'environ <b>95 %</b> (convention des sujets de BTS).",
   "origine": "Cours §2.2 Incertitude élargie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment se composent les incertitudes pour un produit ou un quotient ?",
   "verso": "Les incertitudes <b>relatives</b> en quadrature :<br><b>u(y)/y = √[ (u(a)/a)² + (u(b)/b)² ]</b>",
   "origine": "Cours §2.3 Composer"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment se composent les incertitudes pour une somme ou une différence ?",
   "verso": "Les incertitudes <b>absolues</b> en quadrature :<br><b>u(y) = √[ u(a)² + u(b)² ]</b>",
   "origine": "Cours §2.3 Composer"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pour améliorer une mesure, sur quelle source d'erreur faut-il agir ?",
   "verso": "Sur la <b>source dominante</b> : en quadrature, la plus grande contribution écrase les autres. Améliorer une source négligeable ne change rien.",
   "origine": "Cours §2.3 La source dominante"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Règles d'écriture d'un résultat de mesure (TSMA) ?",
   "verso": "<b>valeur ± incertitude, unité</b>.<br>Incertitude à <b>1 ou 2 chiffres significatifs</b>, arrondie <b>vers le haut</b>.<br>Dernier chiffre de la valeur <b>au même rang</b>.",
   "origine": "Cours §3.1 Écrire un résultat"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Combien de chiffres significatifs dans 0,00250 et dans 25,0 ?",
   "verso": "<b>3</b> dans les deux cas : on compte à partir du premier chiffre non nul.",
   "origine": "Cours §3.1 Chiffres significatifs"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que la précision relative ? À quoi sert-elle ?",
   "verso": "<b>U / x</b>, sans unité, souvent en %. Elle permet de <b>comparer la qualité</b> de mesures portant sur des grandeurs différentes.",
   "origine": "Cours §3.2 Précision relative"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>« L'écart à la référence est de 4 kg/m³, c'est faible. » Pourquoi n'est-ce pas une conclusion ?",
   "verso": "Faible <b>par rapport à quoi ?</b> Seule la comparaison de l'écart à l'<b>incertitude U</b> permet de trancher.",
   "origine": "Cours §3.3 Ce qui ne vaut pas conclusion"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment traiter une série de mesures répétées ?",
   "verso": "1. Écarter les valeurs aberrantes selon le <b>critère de l'énoncé</b>.<br>2. Calculer la moyenne x̄.<br>3. Relever s, calculer <b>u = s/√n</b> (n = valeurs conservées).<br>4. <b>U = 2u</b>.",
   "origine": "Cours §2.2 Méthode — Traiter une série de mesures"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Pied à coulisse de résolution 0,02 mm, une seule lecture. Comment obtenir u et U ?",
   "verso": "1. u = d / (2√3) = 0,02 / 3,46 = <b>0,0058 mm</b>.<br>2. U = 2u = <b>0,012 mm</b>, arrondi vers le haut.",
   "origine": "Cours §2.1 L'incertitude d'une mesure unique"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Tableur : ρ = 1078,9 et U = 12,94 (kg/m³). Comment écrire le résultat ?",
   "verso": "1. Arrondir U <b>vers le haut</b> à 2 chiffres : <b>13</b>.<br>2. Aligner la valeur au même rang (unités) : <b>1079</b>.<br>3. ρ = <b>(1079 ± 13) kg/m³</b>.",
   "origine": "Cours §3.1 Du tableur à la copie"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>y = a × b. Comment obtenir l'incertitude sur y ?",
   "verso": "1. Calculer les incertitudes <b>relatives</b> u(a)/a et u(b)/b.<br>2. Les composer : u(y)/y = √[(u(a)/a)² + (u(b)/b)²].<br>3. Multiplier par y pour avoir u(y).<br>4. Repérer la source dominante.",
   "origine": "Cours §2.3 Composer deux incertitudes"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment conclure sur la compatibilité avec une valeur de référence ?",
   "verso": "1. Construire l'intervalle <b>[x − U ; x + U]</b>.<br>2. Dire si la référence y <b>appartient</b>.<br>3. Rédiger : oui → <b>compatible</b> ; non → erreur systématique probable, <b>citer une cause</b>.",
   "origine": "Cours §3.3 Méthode — Conclure en trois temps"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment proposer une amélioration de la mesure ?",
   "verso": "Viser la <b>source dominante</b> :<br>1. l'<b>instrument</b> (calibre, classe, verrerie jaugée) ;<br>2. le <b>protocole</b> (répéter, élargir l'étendue) ;<br>3. le <b>systématique</b> (zéro, étalonnage, température).",
   "origine": "Cours §3.4 Améliorer la démarche"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
