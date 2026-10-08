/* Genere par outils/construire.py — ne pas editer a la main.
   1sti2d · chapitre 01 · Mesure et incertitudes
   Les QCM viennent de ch01_prerequis.tex et ch01_bilan.tex,
   les cartes de cartes/cartes-1sti2d-ch01.json. */
window.CHAPITRE = {
 "filiere": "1sti2d",
 "num": "1",
 "titre": "Mesure et incertitudes",
 "niveau": "1re STI2D",
 "prerequis": [
  {
   "q": "La moyenne des trois valeurs 12,4, 12,6 et 12,5 vaut :",
   "choix": [
    "12,4",
    "12,5",
    "12,6",
    "37,5"
   ],
   "bonne": 1,
   "expl": "(12,4+12,6+12,5)/3 = 12,5"
  },
  {
   "q": "Convertir 45,6 mm en centimètres :",
   "choix": [
    "456 cm",
    "4,56 cm",
    "0,456 cm",
    "45,6 cm"
   ],
   "bonne": 1,
   "expl": "on divise par 10"
  },
  {
   "q": "Le nombre 2,5 × 10⁻³ s'écrit aussi :",
   "choix": [
    "0,25",
    "0,025",
    "0,0025",
    "2500"
   ],
   "bonne": 2,
   "expl": "l'exposant -3 décale la virgule de trois rangs"
  },
  {
   "q": "Arrondir 3,472 à deux chiffres après la virgule donne :",
   "choix": [
    "3,4",
    "3,47",
    "3,48",
    "3,5"
   ],
   "bonne": 1,
   "expl": "le chiffre suivant est un 2, on arrondit vers le bas"
  },
  {
   "q": "La racine carrée de 16 vaut :",
   "choix": [
    "2",
    "4",
    "8",
    "256"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Une valeur passe de 200 à 206. L'écart relatif vaut :",
   "choix": [
    "6 %",
    "3 %",
    "0,03 %",
    "60 %"
   ],
   "bonne": 1,
   "expl": "6/200 = 0,03, soit 3 %"
  },
  {
   "q": "Sur une règle graduée en millimètres, la plus petite division lisible est :",
   "choix": [
    "1 cm",
    "1 mm",
    "0,1 mm",
    "1 µm"
   ],
   "bonne": 1,
   "expl": "c'est la <em>résolution</em> de l'instrument"
  }
 ],
 "bilan": [
  {
   "q": "Un résultat de mesure complet comporte :",
   "choix": [
    "une valeur seule",
    "une valeur et une unité",
    "une valeur et une incertitude",
    "une valeur, une incertitude et une unité"
   ],
   "bonne": 3,
   "expl": ""
  },
  {
   "q": "Un instrument mal réglé au zéro provoque une erreur :",
   "choix": [
    "aléatoire",
    "systématique",
    "négligeable",
    "impossible à déceler"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Répéter les mesures et faire la moyenne permet de réduire :",
   "choix": [
    "les erreurs aléatoires",
    "les erreurs systématiques",
    "les deux à la fois",
    "aucune des deux"
   ],
   "bonne": 0,
   "expl": "la moyenne compense les écarts aléatoires, jamais un décalage systématique"
  },
  {
   "q": "Des mesures très groupées mais toutes décalées de la valeur vraie sont :",
   "choix": [
    "justes et fidèles",
    "justes mais pas fidèles",
    "fidèles mais pas justes",
    "ni justes ni fidèles"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Le nombre 0,0250 comporte :",
   "choix": [
    "2 chiffres significatifs",
    "3 chiffres significatifs",
    "4 chiffres significatifs",
    "5 chiffres significatifs"
   ],
   "bonne": 1,
   "expl": "les zéros de tête ne comptent pas, celui de fin oui"
  },
  {
   "q": "Le produit 12,4 × 3,0 doit s'écrire :",
   "choix": [
    "37,2",
    "40",
    "37,20",
    "37"
   ],
   "bonne": 3,
   "expl": "le facteur 3,0 n'a que 2 chiffres significatifs"
  },
  {
   "q": "Dans une série de mesures, l'écart-type s mesure :",
   "choix": [
    "la valeur moyenne",
    "le nombre de mesures",
    "la dispersion des valeurs",
    "l'erreur systématique"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "L'incertitude-type sur la moyenne se calcule par :",
   "choix": [
    "u = s/√n",
    "u = s√n",
    "u = s",
    "u = s/n"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "On effectue <strong>une seule</strong> mesure avec un instrument dont la notice indique ± 0,02 mm. L'incertitude-type vaut :",
   "choix": [
    "0,012 mm",
    "0,02 mm",
    "0,035 mm",
    "on ne peut pas la calculer"
   ],
   "bonne": 0,
   "expl": "mesure unique, donc type B : 0,02/√3 = 0,012 mm"
  },
  {
   "q": "Pour diviser l'incertitude-type par 2, il faut multiplier le nombre de mesures par :",
   "choix": [
    "2",
    "16",
    "8",
    "4"
   ],
   "bonne": 3,
   "expl": "u varie en 1/√n"
  },
  {
   "q": "L'incertitude doit être arrondie à :",
   "choix": [
    "deux chiffres significatifs",
    "un chiffre significatif",
    "trois décimales",
    "autant de chiffres que la calculatrice en affiche"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Deux résultats sont déclarés compatibles lorsque l'écart normalisé E<sub>n</sub> vérifie :",
   "choix": [
    "E<sub>n</sub> > 2",
    "E<sub>n</sub> = 0 exactement",
    "E<sub>n</sub> < 2",
    "E<sub>n</sub> > 1"
   ],
   "bonne": 2,
   "expl": ""
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quels sont les trois éléments d'un résultat de mesure ?",
   "verso": "Une <b>valeur</b>, une <b>incertitude</b> et une <b>unité</b> :<br>d = (25,020 ± 0,008) mm.",
   "origine": "Cours §1 Mesurer, c'est comparer"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Citer les sept unités de base du SI.",
   "verso": "<b>mètre</b> (m), <b>kilogramme</b> (kg), <b>seconde</b> (s), <b>ampère</b> (A), <b>kelvin</b> (K), <b>mole</b> (mol), <b>candela</b> (cd). Les autres unités (N, V, J…) en dérivent.",
   "origine": "Cours §1 Le système international"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que la justesse d'une série de mesures ? Quel type d'erreur la dégrade ?",
   "verso": "L'écart entre la <b>moyenne</b> des mesures et la <b>valeur vraie</b>. Elle est dégradée par une <b>erreur systématique</b> (zéro décalé, appareil mal réglé).",
   "origine": "Cours §2 Justesse et fidélité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que la fidélité d'une série de mesures ? Quel type d'erreur la dégrade ?",
   "verso": "Le <b>regroupement</b> des mesures entre elles. Elle est dégradée par les <b>erreurs aléatoires</b> (lecture, vibrations, opérateur).",
   "origine": "Cours §2 Justesse et fidélité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Répéter les mesures corrige-t-il un défaut de justesse ?",
   "verso": "<b>Non, jamais.</b> Répéter et moyenner réduit les erreurs <b>aléatoires</b> (fidélité). Un défaut de justesse se corrige en <b>réglant ou étalonnant</b> l'instrument.",
   "origine": "Cours §2 Deux remèdes différents"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Des mesures très groupées mais toutes décalées de la valeur vraie sont…",
   "verso": "<b>fidèles mais pas justes</b>.",
   "origine": "Cours §2 Justesse et fidélité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quels zéros comptent comme chiffres significatifs ? Combien en a 0,0250 ?",
   "verso": "Les zéros <b>de tête</b> ne comptent pas, les zéros <b>à droite</b> comptent.<br>0,0250 a <b>3</b> chiffres significatifs.",
   "origine": "Cours §3 Les chiffres significatifs"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Combien de chiffres garde-t-on au résultat d'un produit ou d'un quotient ? d'une somme ?",
   "verso": "Produit, quotient : le <b>plus petit nombre de chiffres significatifs</b> des données.<br>Somme, différence : le <b>plus petit nombre de décimales</b>.",
   "origine": "Cours §3 Les chiffres significatifs"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi l'histogramme d'une série de mesures a-t-il une forme de cloche ?",
   "verso": "C'est la signature des <b>erreurs aléatoires</b> : elles jouent autant dans un sens que dans l'autre. C'est pour cela que la <b>moyenne</b> les compense.",
   "origine": "Cours §4 Une série de mesures se disperse"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que mesure l'écart-type s ? et l'incertitude-type u ?",
   "verso": "<b>s</b> : la dispersion <b>des mesures</b>.<br><b>u</b> : le doute qui reste <b>sur la moyenne</b>.",
   "origine": "Cours §5 De la dispersion à l'incertitude"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Incertitude-type sur la moyenne de n mesures : formule ?",
   "verso": "<b>u = s / √n</b><br>s : écart-type, n : nombre de mesures (évaluation de type A).",
   "origine": "Cours §5 Incertitude de type A"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Par combien multiplier le nombre de mesures pour diviser l'incertitude-type par 2 ?",
   "verso": "Par <b>4</b>, car u varie en 1/√n.",
   "origine": "Cours §5 Multiplier les mesures"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Incertitude-type d'une mesure unique : formule ? Que vaut a ?",
   "verso": "<b>u = a / √3</b> (type B), a = demi-largeur de l'intervalle.<br>Précision annoncée ± a → on prend a.<br>Instrument gradué de pas d → a = d / 2.",
   "origine": "Cours §6 Une seule mesure"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quand utilise-t-on u = s/√n et quand u = a/√3 ?",
   "verso": "<b>Plusieurs mesures</b> → on exploite leur dispersion : u = s/√n (type A).<br><b>Une seule mesure</b> → on exploite l'instrument : u = a/√3 (type B).",
   "origine": "Cours §6 Type A ou type B"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelles sont les deux règles d'écriture d'un résultat, dans l'ordre ?",
   "verso": "1. Arrondir l'incertitude à <b>un seul chiffre significatif</b>.<br>2. Arrondir la valeur à la <b>même décimale</b>.",
   "origine": "Cours §7 Écrire le résultat"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Écart normalisé E<sub>n</sub> : formule et critère ?",
   "verso": "<b>E<sub>n</sub> = |m − m<sub>ref</sub>| / √(u² + u<sub>ref</sub>²)</b><br>Si E<sub>n</sub> &lt; 2 : résultats <b>compatibles</b>.",
   "origine": "Cours §8 Comparer un résultat"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quand un modèle tracé sur des points expérimentaux est-il validé ?",
   "verso": "Quand il passe par <b>toutes les barres d'incertitude</b> — inutile qu'il passe exactement par les points.",
   "origine": "Cours §8 Représenter des mesures"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Une plaque mesure 12,4 cm sur 3,0 cm. Comment écrire son aire ?",
   "verso": "1. Chiffres significatifs des données : 12,4 → 3 ; 3,0 → 2.<br>2. Calculer sans arrondir : 37,2.<br>3. Produit : on garde le plus petit, <b>2</b>.<br>4. S = <b>37 cm²</b>.",
   "origine": "Cours §3 Méthode 1"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment exploiter une série de n mesures pour donner le résultat ?",
   "verso": "1. Calculer la <b>moyenne</b> m et l'<b>écart-type</b> s (calculatrice).<br>2. Calculer <b>u = s / √n</b>.<br>3. Arrondir u à 1 chiffre significatif, puis m à la même décimale.<br>4. Écrire x = (m ± u) unité.",
   "origine": "Cours §5 Méthode 2"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Thermomètre : on lit 37,2 °C, notice ± 0,5 °C. Comment écrire le résultat ?",
   "verso": "1. Mesure unique → type B ; a = 0,5 °C.<br>2. u = a / √3 = 0,5 / 1,732 = 0,29 °C.<br>3. Arrondir u à 1 chiffre : 0,3.<br>4. θ = <b>(37,2 ± 0,3) °C</b>.",
   "origine": "Cours §6 Méthode 4"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Calcul : m = 25,0200 mm et u = 0,00816 mm. Comment écrire le résultat ?",
   "verso": "1. u à un chiffre significatif : 0,00816 → <b>0,008</b>.<br>2. m à la même décimale : 25,0200 → <b>25,020</b>.<br>3. d = (25,020 ± 0,008) mm.",
   "origine": "Cours §7 Écrire le résultat"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment décider si une mesure est compatible avec une valeur de référence ?",
   "verso": "1. Calculer l'<b>écart</b> |m − m<sub>ref</sub>|.<br>2. Calculer l'incertitude de l'écart √(u² + u<sub>ref</sub>²).<br>3. Former <b>E<sub>n</sub></b> = écart / incertitude.<br>4. E<sub>n</sub> &lt; 2 → compatibles (les intervalles se recouvrent).",
   "origine": "Cours §8 Méthode 3"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
