# -*- coding: utf-8 -*-
"""
prerequis_et.py — les questionnaires de prérequis du BTS Électrotechnique.

Même principe que prerequis_crsa.py : écrits à la main d'après les feuilles
papier, avec leurs nombres, et des distracteurs qui sont l'erreur qu'on voit
vraiment — l'exposant décalé d'un rang, le carré oublié, le quotient à
l'envers, la calculatrice restée en radians.

    python3 outils/prerequis_et.py entrainement

Le chapitre 0 n'en a pas : c'est lui, le rattrapage.
"""
import sys
import os

ICI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, ICI)
from prerequis_crsa import Q, injecter   # noqa: E402

DATA = {

 "c01": [
  Q("Convertir 2,5 kg en grammes :",
    ["2,5×10³ g", "2,5×10⁶ g", "2,5×10⁻³ g", "25 g"], 0,
    "kilo vaut 10³ : 2,5 kg = 2500 g = 2,5×10³ g."),
  Q("Un appareil de 1500 W fonctionne pendant 40 min. L'énergie consommée vaut :",
    ["1,0 kW·h", "60 kW·h", "0,60 kW·h", "3,6 kW·h"], 0,
    "1,5 kW × (40/60) h = 1,0 kW·h, soit 3,6×10⁶ J. Le temps doit être en heures pour "
    "sortir des kilowattheures."),
  Q("Calculer 2,5 × 4185 × (60 − 15) :",
    ["4,71×10⁵", "4,71×10⁴", "1,05×10⁴", "4,71×10⁶"], 0,
    "470 813, soit 4,71×10⁵ J. C'est l'énergie pour chauffer 2,5 kg d'eau de 45 °C."),
  Q("Une grandeur y est proportionnelle à x. Quand x passe de 20 à 50, y passe de 140 à :",
    ["350", "170", "56", "280"], 0,
    "y est multipliée par 50/20 = 2,5 : 140 × 2,5 = 350. On applique le rapport, on "
    "n'ajoute pas l'écart."),
  Q("Le rapport 600⁴/300⁴ vaut :",
    ["16", "4", "8", "2"], 0,
    "(600/300)⁴ = 2⁴ = 16. Un exposant 4 transforme un doublement en facteur seize — "
    "c'est le rayonnement thermique."),
  Q("Un écart de température de 85 °C vaut, en kelvins :",
    ["85 K", "358 K", "188 K", "0,85 K"], 0,
    "Un ÉCART se transporte tel quel : les deux échelles ont le même pas. C'est une "
    "température, elle, qui devient 358 K."),
 ],

 "c02": [
  Q("Combien vaut cos 60° ?",
    ["0,500", "0,866", "0,577", "0,600"], 0,
    "0,500 exactement, en mode DEGRÉ. 0,866 est le cosinus de 30°, et le sinus de 60°."),
  Q("Surface d'un disque de diamètre 8 cm, en m² :",
    ["5,03×10⁻³ m²", "5,03×10⁻² m²", "2,01×10⁻² m²", "5,03×10¹ m²"], 0,
    "S = πD²/4 avec D = 0,080 m : π × 0,0064/4 = 5,03×10⁻³ m². Convertir avant "
    "d'élever au carré."),
  Q("Convertir 450 mT en teslas :",
    ["4,50×10⁻¹ T", "4,50×10⁻³ T", "4,50×10² T", "4,50×10⁻⁶ T"], 0,
    "milli vaut 10⁻³ : 450 × 10⁻³ = 0,450 T. Le 450 apporte deux rangs."),
  Q("Une grandeur passe de 0,40 à 0,65 en 20 ms. Son taux de variation vaut :",
    ["12,5 par seconde", "0,0125 par seconde", "1,25 par seconde", "32,5 par seconde"], 0,
    "0,25/0,020 = 12,5 par seconde. C'est ce quotient-là, dΦ/dt, qui fabrique la "
    "tension induite."),
  Q("Calculer 4π×10⁻⁷ × 500 × 2,5 :",
    ["1,57×10⁻³", "1,57×10⁻⁴", "3,93×10⁻⁴", "1,25×10⁻³"], 0,
    "4π×10⁻⁷ = 1,257×10⁻⁶ ; × 500 = 6,28×10⁻⁴ ; × 2,5 = 1,57×10⁻³. Le 4π fait partie "
    "du nombre, il ne s'oublie pas."),
  Q("Une bobine comporte 800 spires réparties sur 25 cm. Le nombre de spires par mètre "
    "vaut :",
    ["3200", "32", "20 000", "320"], 0,
    "800/0,25 = 3200 spires par mètre. Le dénominateur doit être en mètres : diviser "
    "par 25 donnerait des spires par centimètre."),
 ],

 "tp01": [
  Q("Écrire 0,000047 en notation scientifique :",
    ["4,7×10⁻⁵", "4,7×10⁻⁴", "47×10⁻⁶", "4,7×10⁵"], 0,
    "4,7×10⁻⁵. La notation scientifique demande un seul chiffre avant la virgule : "
    "47×10⁻⁶ est juste numériquement mais mal écrit."),
  Q("Convertir 2,5 mA en ampères :",
    ["2,5×10⁻³ A", "2,5×10³ A", "2,5×10⁻⁶ A", "2,5×10⁻² A"], 0,
    "milli vaut 10⁻³. C'est la conversion la plus fréquente de l'année."),
  Q("Convertir 16 mm² en m² :",
    ["1,6×10⁻⁵ m²", "1,6×10⁻³ m²", "1,6×10⁻⁶ m²", "1,6×10⁻² m²"], 0,
    "1 mm = 10⁻³ m, donc 1 mm² = (10⁻³)² = 10⁻⁶ m² : 16 mm² = 1,6×10⁻⁵ m². Le rang du "
    "préfixe s'élève au carré, une seule fois."),
  Q("Calculer (1,8×10⁻⁸ × 40)/(4×10⁻⁶) :",
    ["0,18", "1,8", "0,018", "18"], 0,
    "7,2×10⁻⁷ / 4×10⁻⁶ = 0,18 Ω. Diviser par 10⁻⁶ revient à multiplier par 10⁺⁶ : "
    "l'exposant change de signe en remontant."),
  Q("De P = U I, on tire :",
    ["I = P/U", "I = U/P", "I = P U", "I = U − P"], 0,
    "Le U qui multipliait à droite passe au dénominateur à gauche. Ce qui multiplie "
    "d'un côté divise de l'autre."),
  Q("Une grandeur y varie comme x². Si x est divisée par 2, y est divisée par :",
    ["4", "2", "8", "16"], 0,
    "(1/2)² = 1/4. Le carré double l'effet de toute variation."),
 ],

 "tp02": [
  Q("Un générateur de 12 V alimente R₁ = 150 Ω et R₂ = 250 Ω en série. Le courant vaut :",
    ["30 mA", "80 mA", "48 mA", "3,0 mA"], 0,
    "En série les résistances s'ajoutent : 400 Ω, et I = 12/400 = 0,030 A = 30 mA."),
  Q("Dans ce même circuit, la tension aux bornes de R₂ vaut :",
    ["7,5 V", "4,5 V", "12 V", "6,0 V"], 0,
    "250 × 0,030 = 7,5 V. Et 7,5 + 4,5 = 12 V : la loi des mailles sert de "
    "vérification."),
  Q("La résistance équivalente de 120 Ω et 180 Ω en parallèle vaut :",
    ["72 Ω", "300 Ω", "150 Ω", "216 Ω"], 0,
    "(120 × 180)/(120 + 180) = 72 Ω. En parallèle, le résultat est toujours plus petit "
    "que la plus petite des deux : 150 Ω ou 300 Ω sont impossibles."),
  Q("Une résistance de 47 Ω est parcourue par 0,35 A. La puissance dissipée vaut :",
    ["5,76 W", "16,5 W", "4,79 W", "0,38 W"], 0,
    "P = R I² = 47 × 0,1225 = 5,76 W. C'est le carré de l'intensité ; 16,5 V est la "
    "tension, pas la puissance."),
  Q("Convertir 470 µF en farads :",
    ["4,70×10⁻⁴ F", "4,70×10⁻⁶ F", "4,70×10⁻³ F", "4,70×10² F"], 0,
    "micro vaut 10⁻⁶ : 470 × 10⁻⁶ = 4,70×10⁻⁴ F. Le 470 apporte deux rangs."),
  Q("Une droite passe par (0 ; 9) et (3 ; 0). Son équation est :",
    ["y = −3x + 9", "y = 3x + 9", "y = −x/3 + 9", "y = −3x − 9"], 0,
    "L'ordonnée à l'origine vaut 9, et la pente (0 − 9)/(3 − 0) = −3. C'est la "
    "caractéristique d'un générateur : une pente négative."),
 ],
}


if __name__ == "__main__":
    dossier = sys.argv[1] if len(sys.argv) > 1 else "entrainement"
    for ch, n in injecter(dossier, "bts-et", DATA):
        print("  %-6s %d questions" % (ch, n))
