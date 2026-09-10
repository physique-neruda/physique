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
    "aléatoire",
    "systématique",
    "négligeable"
   ],
   "bonne": 1,
   "expl": "moyenner ne corrige que l'aléatoire. Un zéro décalé se retrouve identique sur les mille mesures suivantes : seule la comparaison à une référence le révèle. 3pt"
  },
  {
   "q": "Une série de mesures très groupées prouve que la mesure est :",
   "choix": [
    "juste",
    "fidèle",
    "juste et fidèle"
   ],
   "bonne": 1,
   "expl": "des mesures groupées sont fidèles. Elles peuvent être parfaitement fausses : c'est le cas le plus dangereux, parce qu'il inspire confiance. 3pt"
  },
  {
   "q": "Pour une lecture unique sur un instrument de résolution d = 0,02 mm, l'incertitude-type vaut environ :",
   "choix": [
    "0,02 mm",
    "0,006 mm",
    "0,04 mm"
   ],
   "bonne": 1,
   "expl": "u = d/(2√3) = 0,02/3,46 = 5,8×10⁻³ mm. Prendre u = d surestime d'un facteur 3,5. 3pt"
  },
  {
   "q": "Pour un appareil de classe, l'incertitude dépend :",
   "choix": [
    "de la valeur lue",
    "du calibre utilisé",
    "du nombre de mesures"
   ],
   "bonne": 1,
   "expl": "u = c E/(100√3) : l'incertitude est constante sur toute l'échelle. D'où la règle : choisir le plus petit calibre compatible, pour lire dans le haut de l'échelle. 3pt"
  },
  {
   "q": "Dans une série de n mesures d'écart-type s, l'incertitude-type de répétabilité vaut :",
   "choix": [
    "s",
    "s/n",
    "s/√n"
   ],
   "bonne": 2,
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
    "95 %",
    "100 %"
   ],
   "bonne": 1,
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
    "la pesée",
    "la mesure du volume",
    "les deux également"
   ],
   "bonne": 1,
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
    "la référence est hors intervalle : erreur systématique probable",
    "il faut refaire la série avant de se prononcer"
   ],
   "bonne": 1,
   "expl": "l'intervalle est [ 4,803 ; 4,837 ] et ne contient pas 4,80. Ce n'est pas « un petit écart » : l'écart dépasse l'incertitude, donc la dispersion aléatoire ne suffit pas à l'expliquer. Un biais systématique est en cause — probablement le zéro du capteur. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Les deux natures d'erreur » ?",
   "verso": "Une erreur <strong>aléatoire</strong> change de valeur et de signe d'une mesure à l'autre : elle disperse les résultats. On la réduit en répétant les mesures et en les moyennant.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Incertitude élargie et niveau de confiance » ?",
   "verso": "L'<strong>incertitude élargie</strong> U = k u définit un intervalle dans lequel la valeur vraie se trouve avec une probabilité donnée. Avec k = 2, ce niveau de confiance est d'environ 95 %. C'est la convention retenue dans tous les sujets de BTS.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Écrire un résultat de mesure — qu'y a-t-il à retenir ?",
   "verso": "Un résultat s'écrit valeur ± incertitude, suivies de l'unité. L'incertitude porte un ou deux chiffres significatifs, arrondis vers le haut ; le dernier chiffre de la valeur est au même rang que celui de l'incertitude.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Avec k = 2, ce niveau de confiance est d'environ …….",
   "rep": "95 %",
   "verso": "<strong>95 %</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Lecture unique sur un instrument de résolution d : …….",
   "rep": "u = d2√3 ≈ 0,29 d",
   "verso": "<strong>u = d2√3 ≈ 0,29 d</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Appareil analogique de classe c sur un calibre E : …….",
   "rep": "u = c × E100√3",
   "verso": "<strong>u = c × E100√3</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Pour une <strong>somme</strong> ou une <strong>différence</strong> y = a ± b, ce sont les incertitudes <em>absolues</em> : …….",
   "rep": "u(y) = √(u(a)² + u(b)²)",
   "verso": "<strong>u(y) = √(u(a)² + u(b)²)</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Pour un <strong>produit</strong> ou un <strong>quotient</strong> y = a × b ou y = a/b, ce sont les incertitudes <em>relatives</em> qui se composent : …….",
   "rep": "u(y)/y = √((u(a)/a)² + (u(b)/b)²)",
   "verso": "<strong>u(y)/y = √((u(a)/a)² + (u(b)/b)²)</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Répéter une mesure et moyenner permet de réduire ……",
   "rep": "l'erreur aléatoire",
   "verso": "<strong>l'erreur aléatoire</strong> — moyenner ne corrige que l'aléatoire. Un zéro décalé se retrouve identique sur les mille mesures suivantes : seule la comparaison à une référence le révèle. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un manomètre dont le zéro est décalé de 0,4 bar introduit une erreur ……",
   "rep": "systématique",
   "verso": "<strong>systématique</strong> — moyenner ne corrige que l'aléatoire. Un zéro décalé se retrouve identique sur les mille mesures suivantes : seule la comparaison à une référence le révèle. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une série de mesures très groupées prouve que la mesure est ……",
   "rep": "fidèle",
   "verso": "<strong>fidèle</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pour une lecture unique sur un instrument de résolution d = 0,02 mm, l'incertitude-type vaut environ ……",
   "rep": "0,006 mm",
   "verso": "<strong>0,006 mm</strong> — u = d/(2√3) = 0,02/3,46 = 5,8×10⁻³ mm. Prendre u = d surestime d'un facteur 3,5. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pour un appareil de classe, l'incertitude dépend ……",
   "rep": "du calibre utilisé",
   "verso": "<strong>du calibre utilisé</strong> — u = c E/(100√3) : l'incertitude est constante sur toute l'échelle. D'où la règle : choisir le plus petit calibre compatible, pour lire dans le haut de l'échelle. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans une série de n mesures d'écart-type s, l'incertitude-type de répétabilité vaut ……",
   "rep": "s/√n",
   "verso": "<strong>s/√n</strong>",
   "origine": "bilan"
  }
 ]
};
