# -*- coding: utf-8 -*-
"""
prerequis_crsa.py — les questionnaires de prérequis du BTS CRSA.

Écrits à la main, comme ceux du TSMA, et pour la même raison : les feuilles
de prérequis papier sont des questions ouvertes de calcul, avec un corrigé
rédigé en prose. Aucune machine ne peut en tirer des propositions fausses
mais plausibles — c'est justement le travail.

Chaque question reprend un geste de la feuille du chapitre, avec les mêmes
nombres quand c'est possible, pour que l'étudiant qui a fait la feuille
retrouve ses calculs. Les distracteurs ne sont pas décoratifs : ils sont
l'erreur qu'on voit vraiment en classe — l'inverse d'un quotient, le rang
de dix décalé, le carré oublié, le degré pris pour un radian.

    python3 outils/prerequis_crsa.py entrainement

Le chapitre 0 n'en a pas : c'est lui, le rattrapage.
"""
import json
import os
import sys

MARQUE = "window.CHAPITRE = "


def Q(q, choix, bonne, expl):
    return {"q": q, "choix": choix, "bonne": bonne, "expl": expl}


DATA = {

 "ch01": [
  Q("Parmi ces deux quotients, lequel peut être un rendement : 731/1190 ou 1190/731 ?",
    ["731/1190", "1190/731", "les deux", "aucun des deux"], 0,
    "731/1190 = 0,614. Un rendement est toujours inférieur à 1 : la puissance utile ne "
    "peut pas dépasser la puissance absorbée."),
  Q("Combien vaut 0,96 × 0,88 × 0,85 ?",
    ["0,718", "0,896", "2,69", "0,850"], 0,
    "0,718 — et le résultat est plus petit que le plus petit des trois facteurs. Trois "
    "rendements en cascade se multiplient, et la chaîne est toujours moins bonne que son "
    "maillon le plus faible."),
  Q("Convertir 1450 tr/min en rad/s :",
    ["151,8 rad/s", "24,17 rad/s", "9111 rad/s", "86,7 rad/s"], 0,
    "1450 × 2π / 60 = 151,8 rad/s. On divise par 60 pour passer aux tours par seconde, "
    "puis on multiplie par 2π."),
  Q("Une grandeur passe de 900 à 835. La diminution vaut :",
    ["7,22 %", "6,50 %", "7,78 %", "92,8 %"], 0,
    "65/900 = 7,22 %. On divise l'écart par la valeur de DÉPART, jamais par celle "
    "d'arrivée."),
  Q("Exprimer 0,417 en pourcentage :",
    ["41,7 %", "4,17 %", "0,417 %", "417 %"], 0,
    "0,417 = 41,7 %. Un rendement de 0,417 est un rendement de 41,7 %."),
  Q("Convertir 19,2 kW·h en joules, sachant que 1 kW·h = 3,6 MJ :",
    ["6,91×10⁷ J", "6,91×10⁴ J", "5,33×10⁶ J", "6,91×10¹⁰ J"], 0,
    "19,2 × 3,6×10⁶ = 6,91×10⁷ J. Le kilowattheure est une énergie, pas une puissance."),
 ],

 "ch02": [
  Q("Des volts multipliés par des ampères-heures donnent :",
    ["une énergie", "une puissance", "une charge", "une intensité"], 0,
    "V × A·h = W·h, donc une énergie. C'est ainsi qu'on lit la capacité d'une batterie "
    "12 V — 7,2 A·h : 86,4 W·h."),
  Q("Dans ½ C U², la tension passe de 12 V à 15 V. L'énergie stockée est multipliée par :",
    ["1,56", "1,25", "2,25", "1,00"], 0,
    "(15/12)² = 1,56. C'est le carré du rapport des tensions : le facteur 1,25 sur la "
    "tension devient 1,56 sur l'énergie."),
  Q("Convertir 86,4 W·h en joules :",
    ["3,11×10⁵ J", "3,11×10³ J", "2,40×10⁻² J", "3,11×10⁸ J"], 0,
    "86,4 × 3600 = 3,11×10⁵ J. Une heure vaut 3600 secondes, et 1 W·h = 3600 J."),
  Q("Le produit de deux nombres inférieurs à 1 est :",
    ["plus petit que chacun des deux", "compris entre les deux",
     "plus grand que chacun des deux", "égal à leur moyenne"], 0,
    "0,92 × 0,83 = 0,764, plus petit que 0,83. C'est pourquoi une chaîne de conversions "
    "ne peut que dégrader le rendement."),
  Q("Une grandeur passe de 7,2 à 6,0. La diminution vaut :",
    ["16,7 %", "12,0 %", "20,0 %", "83,3 %"], 0,
    "1,2/7,2 = 16,7 %. Toujours l'écart divisé par la valeur de départ."),
  Q("Un multimètre en position DC mesure :",
    ["la composante continue", "la valeur maximale",
     "la valeur efficace d'un signal alternatif", "la fréquence"], 0,
    "DC (direct current) mesure le continu. Sur un signal alternatif, il affiche la "
    "valeur moyenne — souvent zéro."),
 ],

 "ch03": [
  Q("Convertir 80 L en mètres cubes :",
    ["8,0×10⁻² m³", "8,0×10⁻³ m³", "8,0×10¹ m³", "8,0×10⁻⁵ m³"], 0,
    "1 L = 1 dm³ = 10⁻³ m³, donc 80 L = 8,0×10⁻² m³. Le pont à retenir est 1 L = 1 dm³."),
  Q("Quelle masse d'eau contient un bac de 80 L ? (ρ = 1000 kg/m³)",
    ["80 kg", "8,0 kg", "800 kg", "0,080 kg"], 0,
    "m = ρ × V = 1000 × 0,080 = 80 kg. Un litre d'eau pèse un kilogramme : c'est le "
    "repère qui évite de se tromper de rang."),
  Q("Calculer 80 × 4185 × 55 :",
    ["1,84×10⁷", "1,84×10⁵", "3,35×10⁵", "1,84×10⁴"], 0,
    "18 414 000, soit 1,84×10⁷ J. C'est l'énergie pour chauffer 80 kg d'eau de 55 °C."),
  Q("Convertir 1,84×10⁷ J en kW·h :",
    ["5,11 kW·h", "51,1 kW·h", "0,511 kW·h", "6,62 kW·h"], 0,
    "1,84×10⁷ / 3,6×10⁶ = 5,11 kW·h. Diviser par 3,6 millions, une bonne fois pour toutes."),
  Q("Un bac est à 70 °C, l'atelier à 18 °C. L'écart de température vaut :",
    ["52 °C, soit 52 K", "52 °C, soit 325 K", "88 °C", "343 K"], 0,
    "Un ÉCART de température a la même valeur en degrés Celsius et en kelvins : les deux "
    "échelles ont le même pas. C'est seulement une température qui se convertit."),
  Q("Convertir 3069 s en minutes et secondes :",
    ["51 min 9 s", "50 min 69 s", "51 min 15 s", "30 min 69 s"], 0,
    "3069/60 = 51,15 min, et 0,15 min = 9 s. Attention : 0,15 min n'est pas 15 s."),
 ],

 "ch04": [
  Q("Dans ½ m v², la vitesse passe de 1,8 à 3,6 m/s. L'énergie est multipliée par :",
    ["4", "2", "8", "16"], 0,
    "La vitesse double, l'énergie est au carré : ×4. C'est pour cela qu'un choc à 100 km/h "
    "est quatre fois plus violent qu'à 50."),
  Q("Convertir 1200 tr/min en rad/s :",
    ["125,7 rad/s", "20,00 rad/s", "7540 rad/s", "62,83 rad/s"], 0,
    "1200 × 2π / 60 = 125,7 rad/s."),
  Q("Combien vaut sin 5,0° ?",
    ["0,0872", "0,996", "−0,959", "5,00"], 0,
    "0,0872, à condition que la calculatrice soit en mode DEGRÉ. En mode radian on "
    "obtient −0,959 : c'est l'erreur numéro un de l'année."),
  Q("De d = ½ a t², on tire :",
    ["a = 2d/t²", "a = d/(2t²)", "a = 2d t²", "a = d t²/2"], 0,
    "Le ½ passe de l'autre côté en multipliant par 2, le t² descend au dénominateur."),
  Q("Une masse de 450 kg a pour poids (g = 9,81 N/kg) :",
    ["4415 N", "45,9 N", "441 N", "4,41 N"], 0,
    "P = m g = 450 × 9,81 = 4415 N. On multiplie par g, on ne divise pas."),
  Q("Calculer 4415 × 12 et donner le résultat en écriture scientifique :",
    ["5,30×10⁴", "5,30×10³", "3,68×10²", "5,30×10⁵"], 0,
    "52 980, soit 5,30×10⁴. Trois chiffres significatifs suffisent."),
 ],

 "ch05": [
  Q("Aire d'un disque de diamètre 50 mm, en m² :",
    ["1,96×10⁻³ m²", "1,96×10⁻² m²", "7,85×10⁻⁴ m²", "1,96×10³ m²"], 0,
    "S = πD²/4 avec D = 0,050 m : π × 0,0025 / 4 = 1,96×10⁻³ m². Convertir le diamètre "
    "AVANT d'élever au carré évite le rang de trop."),
  Q("Si le diamètre d'un disque est divisé par 2, son aire est :",
    ["divisée par 4", "divisée par 2", "divisée par 16", "multipliée par 2"], 0,
    "L'aire varie comme le carré du diamètre. Une conduite deux fois plus étroite offre "
    "quatre fois moins de section."),
  Q("Convertir 2,5 bar en pascals :",
    ["2,5×10⁵ Pa", "2,5×10³ Pa", "2,5×10⁶ Pa", "2,5×10² Pa"], 0,
    "1 bar = 10⁵ Pa. Le bar est commode, le pascal est l'unité de calcul."),
  Q("Convertir 40 m³/h en m³/s :",
    ["1,11×10⁻² m³/s", "1,11×10⁻³ m³/s", "6,67×10⁻¹ m³/s", "1,44×10⁵ m³/s"], 0,
    "40/3600 = 1,11×10⁻² m³/s. Le bas de la fraction est une heure : on divise par 3600."),
  Q("Sachant que √(2 × 9,81 × 1,8) = 5,94, que vaut √(2 × 9,81 × 7,2) ?",
    ["11,9", "23,8", "8,40", "5,94"], 0,
    "7,2 = 4 × 1,8, et la racine d'un quadruple est un double : 11,9. Quadrupler la "
    "hauteur ne fait que doubler la vitesse."),
  Q("Résoudre ½ × 1000 × v² = 1294 :",
    ["v = 1,61", "v = 2,59", "v = 0,80", "v = 1294"], 0,
    "v² = 2 × 1294 / 1000 = 2,588, donc v = 1,61. Ne pas oublier la racine à la fin."),
 ],

 "ch06": [
  Q("Une grandeur varie comme 1/D⁴. Si D passe de 10 à 14, elle est multipliée par :",
    ["0,260", "0,714", "3,84", "2,00"], 0,
    "(10/14)⁴ = 0,260 : elle est divisée par 3,84. Un exposant 4 amplifie énormément le "
    "moindre écart de diamètre."),
  Q("Une grandeur varie comme x². Si x est multiplié par 1,5, elle est multipliée par :",
    ["2,25", "1,50", "3,00", "4,50"], 0,
    "1,5² = 2,25. Le carré ne se contente pas de suivre : il amplifie."),
  Q("Convertir 20 L/min en m³/s :",
    ["3,33×10⁻⁴ m³/s", "3,33×10⁻² m³/s", "1,20 m³/s", "3,33×10⁻⁶ m³/s"], 0,
    "20 L = 2,0×10⁻² m³, et une minute vaut 60 s : 2,0×10⁻²/60 = 3,33×10⁻⁴ m³/s. "
    "Deux conversions, une en haut, une en bas."),
  Q("Calculer 64/230 :",
    ["0,278", "2,78", "3,59", "0,0278"], 0,
    "0,278. C'est la forme du coefficient de perte de charge en régime laminaire : 64/Re."),
  Q("Calculer (1,70 × 0,025)/(1,0×10⁻⁶) :",
    ["4,25×10⁴", "4,25×10⁻⁸", "4,25×10²", "2,35×10⁻⁵"], 0,
    "0,0425 / 10⁻⁶ = 4,25×10⁴. Diviser par 10⁻⁶ revient à multiplier par 10⁺⁶ : "
    "l'exposant change de signe en remontant du dénominateur."),
  Q("Une grandeur varie comme 1/D⁴. Pour la diviser par 3, il faut multiplier D par :",
    ["1,32", "3,00", "1,73", "0,76"], 0,
    "3^(1/4) = 1,32. Un tout petit élargissement de conduite suffit à diviser les pertes "
    "par trois."),
 ],

 "ch07": [
  Q("Combien vaut √3, à quatre décimales ?",
    ["1,7321", "1,4142", "1,7320", "3,0000"], 0,
    "1,732050… donc 1,7321 par arrondi. C'est le nombre du triphasé : il reviendra à "
    "chaque page."),
  Q("Dans un réseau où la tension composée vaut 400 V, la tension simple vaut :",
    ["231 V", "693 V", "400 V", "133 V"], 0,
    "400/√3 = 231 V. On DIVISE la composée par √3 pour obtenir la simple ; multiplier "
    "donnerait 693 V, ce qui n'existe pas sur ce réseau."),
  Q("Un angle a pour cosinus 0,80. Son sinus vaut :",
    ["0,60", "0,64", "0,75", "0,80"], 0,
    "cos² + sin² = 1, donc sin = √(1 − 0,64) = 0,60. Le triangle 3-4-5 se cache derrière."),
  Q("Calculer √3 × 400 × 8,12 :",
    ["5,63×10³", "3,25×10³", "9,74×10³", "1,88×10³"], 0,
    "5626, soit 5,63×10³. C'est la forme de la puissance apparente en triphasé."),
  Q("Une puissance active de 4500 W pour une puissance apparente de 5625 V·A donne un "
    "facteur de puissance de :",
    ["0,80", "1,25", "0,45", "0,56"], 0,
    "4500/5625 = 0,80. Le facteur de puissance est le rapport actif sur apparent, "
    "toujours entre 0 et 1."),
  Q("Trois résistances de 57,5 Ω sont soumises chacune à 230 V. La puissance totale vaut :",
    ["2760 W", "920 W", "4600 W", "1590 W"], 0,
    "I = 230/57,5 = 4,00 A, P = 230 × 4,00 = 920 W par résistance, soit 2760 W pour les "
    "trois."),
 ],

 "ch08": [
  Q("Combien vaut log(10⁶) ?",
    ["6", "10⁶", "0,6", "60"], 0,
    "Le logarithme décimal d'une puissance de dix, c'est son exposant. C'est toute la "
    "définition."),
  Q("Sachant que log 2 = 0,30, combien vaut log 20 ?",
    ["1,30", "0,60", "3,00", "0,30"], 0,
    "log 20 = log 2 + log 10 = 0,30 + 1 = 1,30. Multiplier par dix ajoute un au "
    "logarithme : c'est ce qui fait les décibels."),
  Q("Écrire 10^8,4 en notation scientifique, à deux chiffres significatifs :",
    ["2,5×10⁸", "8,4×10⁸", "2,5×10⁹", "1,4×10⁸"], 0,
    "10^0,4 = 2,5, donc 10^8,4 = 2,5×10⁸. On sépare la partie entière de l'exposant du "
    "reste."),
  Q("On résout 10 log(x) = 88 puis 10 log(x) = 91. Le rapport des deux solutions vaut :",
    ["2,0", "1,03", "3,0", "10"], 0,
    "3 décibels d'écart, c'est 10^0,3 = 2,0 : un doublement. Trois décibels de plus, "
    "deux fois plus d'énergie sonore."),
  Q("Compléter : Al → Al³⁺ + … e⁻",
    ["3", "2", "1", "6"], 0,
    "Trois électrons cédés, pour équilibrer la charge : l'aluminium passe de 0 à +3."),
  Q("Parmi −0,44 ; +0,34 ; −2,37 ; 0,00 ; −0,76, le plus petit est :",
    ["−2,37", "−0,76", "0,00", "−0,44"], 0,
    "−2,37. Chez les négatifs, plus le nombre paraît grand, plus il est petit — et c'est "
    "ce potentiel-là qui donne le métal le plus attaqué."),
 ],

 "ch09": [
  Q("Calculer 24/230 avec trois chiffres significatifs :",
    ["0,104", "9,58", "0,0104", "1,04"], 0,
    "0,104. C'est un rapport de transformation abaisseur : inférieur à 1."),
  Q("Avec m = 0,060 et U₁ = 400 V, la tension U₂ vaut :",
    ["24 V", "6667 V", "2,4 V", "240 V"], 0,
    "U₂ = m × U₁ = 0,060 × 400 = 24 V. On multiplie par m ; diviser donnerait une "
    "tension absurde."),
  Q("Une charge absorbe 63 W sous 24 V. L'intensité vaut :",
    ["2,63 A", "0,381 A", "1512 A", "26,3 A"], 0,
    "I = P/U = 63/24 = 2,63 A. Attention au sens du quotient : c'est la puissance "
    "divisée par la tension."),
  Q("Une tension sinusoïdale a une valeur maximale de 34 V. Sa valeur efficace vaut :",
    ["24,0 V", "48,1 V", "17,0 V", "34,0 V"], 0,
    "34/√2 = 24,0 V. De la valeur maximale vers l'efficace, on DIVISE par √2."),
  Q("Une période vaut 20 ms. La fréquence vaut :",
    ["50 Hz", "20 Hz", "500 Hz", "0,05 Hz"], 0,
    "f = 1/T = 1/0,020 = 50 Hz. C'est la fréquence du réseau."),
  Q("Une valeur attendue de 0,0600 est mesurée à 0,0615. L'écart relatif vaut :",
    ["2,50 %", "1,50 %", "0,25 %", "2,44 %"], 0,
    "0,0015/0,0600 = 2,50 %. L'écart se rapporte à la valeur attendue."),
 ],

 "ch10": [
  Q("Une tension sinusoïdale de 230 V efficace a pour valeur maximale :",
    ["325 V", "163 V", "460 V", "230 V"], 0,
    "230 × √2 = 325 V. De l'efficace vers le maximum, on MULTIPLIE par √2."),
  Q("Combien vaut √2 à trois chiffres significatifs ?",
    ["1,41", "1,73", "1,42", "2,00"], 0,
    "1,41421… donc 1,41. Ne pas le confondre avec √3 = 1,73, celui du triphasé."),
  Q("Un signal dont la valeur maximale est 100 V et la valeur moyenne 2/π fois cette "
    "valeur a pour valeur moyenne :",
    ["63,7 V", "70,7 V", "50,0 V", "31,8 V"], 0,
    "2/π = 0,637, donc 63,7 V. C'est la valeur moyenne d'un redressement double "
    "alternance ; 70,7 V serait la valeur efficace."),
  Q("Un signal a une période T = 2,5 ms. Sa fréquence vaut :",
    ["400 Hz", "40 Hz", "4000 Hz", "250 Hz"], 0,
    "1/0,0025 = 400 Hz. Convertir la milliseconde avant d'inverser."),
  Q("Sur un oscilloscope réglé à 10 V par division, une courbe atteint 4,8 divisions. "
    "La tension vaut :",
    ["48 V", "4,8 V", "480 V", "14,8 V"], 0,
    "4,8 × 10 = 48 V. On multiplie le nombre de divisions par le calibre."),
  Q("Une période dure 20 ms. Un retard de 2,5 ms correspond à un angle de :",
    ["45°", "90°", "30°", "12,5°"], 0,
    "2,5/20 × 360 = 45°. Une période entière vaut 360° : le reste est une "
    "proportionnalité."),
 ],

 "ch11": [
  Q("Convertir 50 µs en secondes, en notation scientifique :",
    ["5,0×10⁻⁵ s", "5,0×10⁻⁶ s", "5,0×10⁻³ s", "5,0×10⁻⁴ s"], 0,
    "micro vaut 10⁻⁶, donc 50 × 10⁻⁶ = 5,0×10⁻⁵ s. Le 50 apporte un rang de plus."),
  Q("Une période T = 50 µs correspond à une fréquence de :",
    ["20 kHz", "2,0 kHz", "200 kHz", "50 kHz"], 0,
    "1/(5,0×10⁻⁵) = 2,0×10⁴ Hz = 20 kHz. C'est l'ordre de grandeur du découpage."),
  Q("Calculer 36/48 :",
    ["0,750", "1,33", "0,720", "12"], 0,
    "0,750. C'est la forme d'un rapport cyclique : entre 0 et 1."),
  Q("Un rapport de deux durées :",
    ["n'a pas d'unité", "s'exprime en secondes", "s'exprime en hertz",
     "s'exprime en pourcentage de seconde"], 0,
    "Les secondes se simplifient : le rapport cyclique est un nombre pur, souvent donné "
    "en pourcentage."),
  Q("Calculer 0,60 × 48 V :",
    ["28,8 V", "80,0 V", "48,6 V", "24,0 V"], 0,
    "28,8 V. C'est la tension moyenne d'un hacheur série de rapport cyclique 0,60."),
  Q("Un signal vaut +200 V pendant une demi-période puis −200 V pendant l'autre. Sa "
    "valeur moyenne vaut :",
    ["0 V", "200 V", "100 V", "141 V"], 0,
    "Les deux moitiés se compensent exactement : la valeur moyenne est nulle. C'est ce "
    "qui distingue un onduleur d'un hacheur."),
 ],

 "ch12": [
  Q("Convertir 1500 tr/min en rad/s :",
    ["157 rad/s", "25,0 rad/s", "9425 rad/s", "94,2 rad/s"], 0,
    "1500 × 2π/60 = 157 rad/s. Un tour vaut 2π radians, une minute vaut 60 s."),
  Q("Convertir 157 rad/s en tours par minute :",
    ["1500 tr/min", "9425 tr/min", "2,62 tr/min", "26,2 tr/min"], 0,
    "157 × 60 / 2π = 1500 tr/min. Le chemin inverse du précédent."),
  Q("Une puissance de 520 W est transmise à un arbre tournant à 157 rad/s. Le moment du "
    "couple vaut :",
    ["3,31 N·m", "81 640 N·m", "0,302 N·m", "33,1 N·m"], 0,
    "P = T Ω donc T = 520/157 = 3,31 N·m. La vitesse angulaire doit être en rad/s, "
    "jamais en tr/min."),
  Q("Un système absorbe 576 W et en restitue 520 W. Son rendement vaut :",
    ["90,3 %", "110,8 %", "9,72 %", "56,0 %"], 0,
    "520/576 = 90,3 %. Les 56 W manquants sont partis en chaleur."),
  Q("Deux éléments se suivent, de rendements 90 % et 85 %. Le rendement de l'ensemble "
    "vaut :",
    ["76,5 %", "87,5 %", "175 %", "5,0 %"], 0,
    "0,90 × 0,85 = 0,765. Les rendements se multiplient, ils ne s'additionnent ni ne "
    "se moyennent."),
  Q("La puissance dissipée par effet Joule dans 0,25 Ω parcourue par 12 A vaut :",
    ["36 W", "3,0 W", "48 W", "72 W"], 0,
    "P = R I² = 0,25 × 144 = 36 W. C'est le carré de l'intensité, pas l'intensité."),
 ],

 "ch13": [
  Q("Convertir 1440 tr/min en rad/s :",
    ["151 rad/s", "24,0 rad/s", "9048 rad/s", "90,5 rad/s"], 0,
    "1440 × 2π/60 = 151 rad/s."),
  Q("Dans un réseau dont la tension composée vaut 690 V, la tension simple vaut :",
    ["398 V", "1195 V", "345 V", "230 V"], 0,
    "690/√3 = 398 V. Toujours diviser la composée par √3."),
  Q("Un récepteur triphasé équilibré : U = 400 V, I = 10,0 A, cos φ = 0,85. La puissance "
    "active vaut :",
    ["5,89 kW", "3,40 kW", "10,2 kW", "1,96 kW"], 0,
    "P = √3 U I cos φ = 1,732 × 400 × 10,0 × 0,85 = 5,89 kW. Le √3 ne s'oublie pas."),
  Q("Une machine reçoit 5,0 kW et en restitue 4,3 kW. Ses pertes valent :",
    ["0,70 kW", "0,86 kW", "1,16 kW", "9,3 kW"], 0,
    "5,0 − 4,3 = 0,70 kW, soit 700 W partis en chaleur. Le rendement, lui, vaut 86 %."),
  Q("Une machine de rendement 88 % doit fournir 5,5 kW. Elle absorbe :",
    ["6,25 kW", "4,84 kW", "5,50 kW", "6,60 kW"], 0,
    "5,5/0,88 = 6,25 kW. On DIVISE par le rendement pour remonter à l'absorbée ; "
    "multiplier donnerait moins que l'utile, ce qui est impossible."),
  Q("Le champ tourne à 1500 tr/min, le rotor à 1440 tr/min. Le glissement vaut :",
    ["4,0 %", "6,0 %", "96 %", "0,96 %"], 0,
    "(1500 − 1440)/1500 = 4,0 %. Un glissement de quelques pour cent est normal en "
    "charge."),
 ],

 "ch14": [
  Q("Une droite passe par les points (20 ; 4,0) et (60 ; 12,0). Sa pente vaut :",
    ["0,20", "5,0", "0,80", "2,0"], 0,
    "(12,0 − 4,0)/(60 − 20) = 0,20. La pente d'une droite d'étalonnage, c'est la "
    "sensibilité du capteur."),
  Q("Un quotient « une résistance divisée par une température » s'exprime en :",
    ["Ω/K", "K/Ω", "Ω·K", "sans unité"], 0,
    "Les unités se divisent comme les nombres. C'est l'unité d'une sensibilité de sonde "
    "résistive."),
  Q("Combien vaut 95 % de 40 ?",
    ["38", "42", "4,2", "3,8"], 0,
    "0,95 × 40 = 38. Les 95 % d'une variation, c'est le repère du temps de réponse d'un "
    "capteur."),
  Q("Une Pt100 suit R = 100 (1 + 3,85×10⁻³ θ). À 60 °C, sa résistance vaut :",
    ["123,1 Ω", "138,5 Ω", "100,4 Ω", "331 Ω"], 0,
    "100 × (1 + 0,231) = 123,1 Ω. Le nom « Pt100 » dit qu'elle vaut 100 Ω à 0 °C."),
  Q("Même sonde : quelle température donne R = 138,5 Ω ?",
    ["100 °C", "138 °C", "38,5 °C", "85 °C"], 0,
    "(1,385 − 1)/3,85×10⁻³ = 100 °C. On isole θ, on ne devine pas."),
  Q("Calculer ΔL/L₀ pour ΔL = 5,0 µm et L₀ = 10 mm :",
    ["5,0×10⁻⁴, sans unité", "5,0×10⁻⁴ m", "0,50, sans unité", "5,0×10⁻³ m"], 0,
    "5,0×10⁻⁶/1,0×10⁻² = 5,0×10⁻⁴. Deux longueurs divisées l'une par l'autre : les "
    "mètres se simplifient, il ne reste aucune unité."),
 ],

 "ch15": [
  Q("Convertir 20 ms en secondes, en écriture scientifique :",
    ["2,0×10⁻² s", "2,0×10⁻³ s", "2,0×10⁻⁵ s", "2,0×10¹ s"], 0,
    "milli vaut 10⁻³, et 20 = 2,0×10¹ : 2,0×10¹ × 10⁻³ = 2,0×10⁻² s."),
  Q("L'inverse d'une durée est :",
    ["une fréquence, en hertz", "une période, en secondes",
     "une pulsation, en rad/s", "un nombre sans unité"], 0,
    "1/s = Hz. C'est la définition même de la fréquence."),
  Q("Un rectangle a pour hauteur 24 et pour largeur 2,8. Son aire vaut :",
    ["67,2", "26,8", "8,57", "33,6"], 0,
    "24 × 2,8 = 67,2. L'aire sous un signal rectangulaire se calcule ainsi, et c'est ce "
    "qui donne la valeur moyenne."),
  Q("Comparer √0,35 à 0,35 :",
    ["√0,35 est plus grand", "√0,35 est plus petit", "les deux sont égaux",
     "la racine n'existe pas"], 0,
    "√0,35 = 0,592, plus grand que 0,35. Pour un nombre inférieur à 1, la racine "
    "remonte — le contraire de ce à quoi on s'attend."),
  Q("Calculer √(6² + 2,83²) :",
    ["6,63", "8,83", "44,0", "6,00"], 0,
    "√(36 + 8,0) = √44,0 = 6,63. Une somme quadratique n'est pas une somme : 8,83 "
    "serait 6 + 2,83."),
  Q("Une tension a pour valeur maximale 325 V. Sa valeur efficace vaut :",
    ["230 V", "460 V", "163 V", "325 V"], 0,
    "325/√2 = 230 V. C'est le réseau domestique, vu des deux côtés."),
 ],

 "ch16": [
  Q("Deux résistances R₁ et R₂ en série sous une tension E. La tension aux bornes de R₂ "
    "vaut :",
    ["E × R₂/(R₁ + R₂)", "E × R₁/(R₁ + R₂)", "E × (R₁ + R₂)/R₂", "E × R₂/R₁"], 0,
    "C'est le diviseur de tension : au numérateur, la résistance dont on cherche la "
    "tension ; au dénominateur, la somme."),
  Q("Application : E = 12 V, R₁ = 2,0 kΩ, R₂ = 4,0 kΩ. La tension aux bornes de R₂ vaut :",
    ["8,0 V", "4,0 V", "6,0 V", "12 V"], 0,
    "12 × 4,0/6,0 = 8,0 V. Les kilohms n'ont pas besoin d'être convertis : ils se "
    "simplifient dans le rapport."),
  Q("Dans ce montage, la tension aux bornes de R₂ peut-elle dépasser 12 V ?",
    ["Non, jamais", "Oui, si R₂ est très grande", "Oui, si R₁ est très petite",
     "Oui, si le courant est fort"], 0,
    "Le rapport R₂/(R₁+R₂) est toujours inférieur à 1 : un diviseur divise, il "
    "n'amplifie jamais."),
  Q("Une droite passe par (−0,20 ; +8,0) et (+0,20 ; −8,0). Sa pente vaut :",
    ["−40", "+40", "−16", "−0,025"], 0,
    "(−8,0 − 8,0)/(0,20 + 0,20) = −40. Elle est décroissante : la pente est négative."),
  Q("Une Pt100 suit R = 100 (1 + 3,85×10⁻³ θ). À 50 °C, sa résistance vaut :",
    ["119,3 Ω", "123,1 Ω", "138,5 Ω", "150 Ω"], 0,
    "100 × (1 + 0,1925) = 119,3 Ω."),
  Q("Un rapport de deux tensions :",
    ["n'a pas d'unité", "s'exprime en volts", "s'exprime en volts carrés",
     "s'exprime en ohms"], 0,
    "Les volts se simplifient. C'est pour cela qu'un gain s'exprime par un nombre, ou "
    "en décibels."),
 ],
}


def injecter(dossier, filiere, data):
    fait = []
    for ch, questions in data.items():
        chemin = os.path.join(dossier, "qcm-%s-%s.js" % (filiere, ch))
        if not os.path.exists(chemin):
            print("  %s : fichier absent, ignoré" % ch)
            continue
        brut = open(chemin, encoding="utf-8").read()
        i = brut.index(MARQUE) + len(MARQUE)
        j = brut.rindex("}") + 1
        d = json.loads(brut[i:j])
        d["prerequis"] = questions
        open(chemin, "w", encoding="utf-8").write(
            brut[:i] + json.dumps(d, ensure_ascii=False, indent=1) + brut[j:])
        fait.append((ch, len(questions)))
    return fait


if __name__ == "__main__":
    dossier = sys.argv[1] if len(sys.argv) > 1 else "entrainement"
    for ch, n in injecter(dossier, "bts-crsa", DATA):
        print("  %-6s %d questions" % (ch, n))
