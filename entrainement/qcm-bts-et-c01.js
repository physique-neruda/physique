/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · Cours 1 — Énergie interne et transferts thermiques
   Le bilan vient de c01_bilan.tex, les cartes des \trou{} de
   c01_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "1",
 "cle": "c01",
 "etiquette": "Cours 1",
 "titre": "Énergie interne et transferts thermiques",
 "niveau": "BTS ET",
 "prerequis": [
  {
   "q": "Convertir 2,5 kg en grammes :",
   "choix": [
    "2,5×10³ g",
    "2,5×10⁶ g",
    "2,5×10⁻³ g",
    "25 g"
   ],
   "bonne": 0,
   "expl": "kilo vaut 10³ : 2,5 kg = 2500 g = 2,5×10³ g."
  },
  {
   "q": "Un appareil de 1500 W fonctionne pendant 40 min. L'énergie consommée vaut :",
   "choix": [
    "1,0 kW·h",
    "60 kW·h",
    "0,60 kW·h",
    "3,6 kW·h"
   ],
   "bonne": 0,
   "expl": "1,5 kW × (40/60) h = 1,0 kW·h, soit 3,6×10⁶ J. Le temps doit être en heures pour sortir des kilowattheures."
  },
  {
   "q": "Calculer 2,5 × 4185 × (60 − 15) :",
   "choix": [
    "4,71×10⁵",
    "4,71×10⁴",
    "1,05×10⁴",
    "4,71×10⁶"
   ],
   "bonne": 0,
   "expl": "470 813, soit 4,71×10⁵ J. C'est l'énergie pour chauffer 2,5 kg d'eau de 45 °C."
  },
  {
   "q": "Une grandeur y est proportionnelle à x. Quand x passe de 20 à 50, y passe de 140 à :",
   "choix": [
    "350",
    "170",
    "56",
    "280"
   ],
   "bonne": 0,
   "expl": "y est multipliée par 50/20 = 2,5 : 140 × 2,5 = 350. On applique le rapport, on n'ajoute pas l'écart."
  },
  {
   "q": "Le rapport 600⁴/300⁴ vaut :",
   "choix": [
    "16",
    "4",
    "8",
    "2"
   ],
   "bonne": 0,
   "expl": "(600/300)⁴ = 2⁴ = 16. Un exposant 4 transforme un doublement en facteur seize — c'est le rayonnement thermique."
  },
  {
   "q": "Un écart de température de 85 °C vaut, en kelvins :",
   "choix": [
    "85 K",
    "358 K",
    "188 K",
    "0,85 K"
   ],
   "bonne": 0,
   "expl": "Un ÉCART se transporte tel quel : les deux échelles ont le même pas. C'est une température, elle, qui devient 358 K."
  }
 ],
 "bilan": [
  {
   "q": "Une température de 27 °C vaut, en kelvins :",
   "choix": [
    "27 K",
    "246 K",
    "300 K"
   ],
   "bonne": 2,
   "expl": "T = 27+273 = 300 K."
  },
  {
   "q": "Un écart de température de 35 °C vaut, en kelvins :",
   "choix": [
    "308 K",
    "35 K",
    "on ne peut pas convertir un écart"
   ],
   "bonne": 1,
   "expl": "Un écart est le même dans les deux échelles : le décalage de 273 disparaît dans la soustraction. C'est pour cela que Q = m c Δθ accepte indifféremment les degrés Celsius et les kelvins."
  },
  {
   "q": "Le capteur le plus adapté à une régulation précise autour de 80 °C est :",
   "choix": [
    "la Pt100",
    "le thermocouple",
    "la CTN"
   ],
   "bonne": 0,
   "expl": "La Pt100 est linéaire, stable et normalisée. Le thermocouple est fait pour les hautes températures et demande une électronique soignée ; la CTN est très sensible mais fortement non linéaire, ce qui la réserve aux seuils."
  },
  {
   "q": "L'énergie nécessaire pour élever de 30 °C la température de 4 kg d'eau vaut :",
   "choix": [
    "125 kJ",
    "502 kJ",
    "16,7 kJ"
   ],
   "bonne": 1,
   "expl": "Q = 4× 4185× 30 = 502200 J, soit 502 kJ. La réponse « 125 kJ » oublie un facteur, la réponse « 16,7 kJ » divise au lieu de multiplier."
  },
  {
   "q": "Pendant un changement d'état à pression constante, la température :",
   "choix": [
    "reste constante",
    "augmente plus vite",
    "diminue"
   ],
   "bonne": 0,
   "expl": "L'énergie apportée sert à défaire les liaisons entre les particules, pas à augmenter leur agitation. C'est le palier de la courbe de chauffe."
  },
  {
   "q": "Le refroidissement d'une armoire par ventilateur relève principalement de :",
   "choix": [
    "la conduction",
    "le rayonnement",
    "la convection"
   ],
   "bonne": 2,
   "expl": "Convection : c'est le déplacement de l'air qui emporte l'énergie. Appeler cela « conduction » est l'erreur la plus fréquente sur cette question."
  },
  {
   "q": "Le flux à travers une paroi plane vaut :",
   "choix": [
    "λS Δθe",
    "(λS Δθ)/e",
    "(e Δθ)/(λS)"
   ],
   "bonne": 1,
   "expl": "Φ= (λS Δθ)/e. Contrôle de bon sens : plus la paroi est épaisse, moins il passe de flux, donc e est bien au dénominateur."
  },
  {
   "q": "Deux couches de matériaux différents sont superposées. Leurs résistances thermiques :",
   "choix": [
    "s'ajoutent",
    "s'ajoutent en inverse, comme des résistances en parallèle",
    "se multiplient"
   ],
   "bonne": 0,
   "expl": "Les résistances thermiques s'ajoutent, comme des résistances électriques en série, car le flux est commun à toutes les couches et les écarts de température s'additionnent."
  },
  {
   "q": "Dans une paroi composite, la couche qui commande le flux est celle qui a :",
   "choix": [
    "la plus grande épaisseur",
    "la plus grande surface",
    "le plus faible λ"
   ],
   "bonne": 2,
   "expl": "C'est le matériau de plus faible conductivité qui impose presque toute la résistance. Dans une armoire tôle + isolant, l'isolant représente plus de 99 % de la résistance totale : la tôle ne compte pas."
  },
  {
   "q": "Dans la loi de Stefan P = εσS T⁴, la température doit être exprimée :",
   "choix": [
    "en °C",
    "indifféremment",
    "en K"
   ],
   "bonne": 2,
   "expl": "En kelvins, obligatoirement. C'est la seule formule du chapitre dans ce cas. Utiliser 60 °C au lieu de 333 K fausse le résultat d'un facteur 950, sans que rien dans le nombre obtenu ne le signale."
  },
  {
   "q": "Une caméra thermique visant du cuivre nu et brillant, réglée sur une émissivité de 0,95 :",
   "choix": [
    "surestime fortement la température",
    "sous-estime fortement la température",
    "donne la valeur exacte"
   ],
   "bonne": 1,
   "expl": "Le cuivre nu a une émissivité voisine de 0,05 : il rayonne bien moins qu'une surface mate à la même température. La caméra, qui attend le rayonnement d'une surface à ε= 0,95, en déduit une température très inférieure à la réalité. D'où l'usage de pastilles mates pour la thermographie sur jeux de barres."
  },
  {
   "q": "Un convertisseur de rendement 95 % absorbe 80 kW. La puissance qu'il faut évacuer du local sous forme de chaleur vaut :",
   "choix": [
    "4 kW",
    "76 kW",
    "0 kW"
   ],
   "bonne": 0,
   "expl": "P_pertes = 80×(1-0,95) = 4 kW. Ces 4 kW ne disparaissent pas : ils échauffent le local et doivent être évacués. La réponse « 76 kW » confond puissance utile et pertes."
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation entre température absolue T et température Celsius θ ? Que représente 0 K ?",
   "verso": "<b>T (K) = θ (°C) + 273</b><br>0 K = −273 °C : le <b>zéro absolu</b>, arrêt de l'agitation microscopique (inatteignable).",
   "origine": "Cours §1 Les deux échelles"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Un écart de 40 °C vaut combien de kelvins ? Quelle formule du chapitre exige T en kelvins ?",
   "verso": "<b>40 K</b> : le décalage de 273 disparaît dans la soustraction.<br>Seule la <b>loi de Stefan</b> exige la température absolue en K.",
   "origine": "Cours §1 Un écart n'est pas une température"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pt100, thermocouple, CTN : principe et usage de chacun ?",
   "verso": "<b>Pt100</b> : résistance du platine qui varie — linéaire, précise (régulation).<br><b>Thermocouple</b> : tension au contact de deux métaux — jusqu'à 1300 °C.<br><b>CTN</b> : résistance qui chute quand θ monte — non linéaire, pour les seuils.",
   "origine": "Cours §1 Trois capteurs industriels"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que l'énergie interne U d'un système ? Que traduit la température ?",
   "verso": "La <b>somme des énergies de ses constituants microscopiques</b>. La température en est la traduction macroscopique (agitation des particules).",
   "origine": "Cours §2 Énergie interne"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sous quelles formes un système échange-t-il de l'énergie avec l'extérieur ?",
   "verso": "Uniquement par <b>travail</b> ou par <b>chaleur</b>. Il n'y a pas de troisième voie.",
   "origine": "Cours §2 Les deux façons de transférer de l'énergie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énergie consommée par un appareil de puissance P pendant t ? Unités ?",
   "verso": "<b>E = P × t</b> : E en J, P en W, t en <b>s</b>.<br>(P en kW et t en h → kWh ; 1 kWh = 3,6 MJ.) On ne mélange jamais les deux systèmes.",
   "origine": "Cours §3 E = P × t"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi note-t-on Q l'énergie reçue par un corps chauffé ?",
   "verso": "Q est une <b>énergie, en joules</b>, comme E. La lettre indique seulement le chemin : un <b>transfert thermique</b> (chaleur), pas un travail.",
   "origine": "Cours §3 Q et E sont la même grandeur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la capacité thermique massique c. Unité ?",
   "verso": "L'énergie nécessaire pour élever de <b>1 degré</b> la température de <b>1 kg</b> du corps. En <b>J·kg<sup>−1</sup>·K<sup>−1</sup></b>.",
   "origine": "Cours §4 Capacité thermique massique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énergie pour échauffer une masse m de θ<sub>i</sub> à θ<sub>f</sub> ? Valeur de c pour l'eau ?",
   "verso": "<b>Q = m c Δθ = m c (θ<sub>f</sub> − θ<sub>i</sub>)</b><br>Eau : <b>c ≈ 4185 J·kg<sup>−1</sup>·K<sup>−1</sup></b>.",
   "origine": "Cours §4 Échauffer un corps"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que signifie Q &lt; 0 dans Q = m c Δθ ?",
   "verso": "Le corps a <b>cédé</b> de l'énergie (il s'est refroidi). On ne corrige pas le signe, on le lit.",
   "origine": "Cours §4 Le signe porte l'information"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la chaleur latente L. Énergie pour changer d'état une masse m ?",
   "verso": "L'énergie pour faire changer d'état <b>1 kg</b> de corps, <b>à température constante</b>, en J/kg.<br><b>Q = m L</b>",
   "origine": "Cours §5 Chaleur latente"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sur une courbe de chauffe θ(t), que représentent les pentes et les paliers ?",
   "verso": "<b>Pentes</b> : la température monte, Q = m c Δθ.<br><b>Paliers</b> : changement d'état, Q = m L, la température ne bouge pas.",
   "origine": "Cours §5 Lire une courbe de chauffe"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Conduction, convection, rayonnement : définition et exemple sur une armoire ?",
   "verso": "<b>Conduction</b> : de proche en proche dans la matière (la tôle chauffe).<br><b>Convection</b> : par déplacement d'un fluide (le ventilateur).<br><b>Rayonnement</b> : sans support, par ondes électromagnétiques (caméra thermique).",
   "origine": "Cours §6 Les trois modes de transfert"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Flux thermique à travers une paroi plane : formule et unités ?",
   "verso": "<b>Φ = λ S (θ<sub>1</sub> − θ<sub>2</sub>) / e = Δθ / R<sub>th</sub></b><br>Φ en W, λ en W·m<sup>−1</sup>·K<sup>−1</sup>, S en m², e en m.",
   "origine": "Cours §7 Flux thermique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Résistance thermique d'une paroi ? Comment se combinent plusieurs couches ?",
   "verso": "<b>R<sub>th</sub> = e / (λ S)</b>, en K/W.<br>Couches superposées : les résistances <b>s'ajoutent en série</b>, le flux est le même dans toutes.",
   "origine": "Cours §7 Résistance thermique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans l'analogie thermique/électrique, à quoi correspondent le flux et l'écart de température ?",
   "verso": "Flux Φ ↔ <b>courant</b> ; écart Δθ ↔ <b>tension</b> ; R<sub>th</sub> ↔ résistance.",
   "origine": "Cours §7 L'analogie électrique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Faut-il isoler une armoire électrique dont les équipements chauffent ?",
   "verso": "<b>Non</b> : l'isolant empêche aussi la chaleur de <b>sortir</b>. Avec une source interne, isoler aggrave l'échauffement.",
   "origine": "Cours §7 Isoler une armoire qui chauffe"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissance rayonnée (émise) par une surface : formule ?",
   "verso": "<b>P = ε σ S T<sup>4</sup></b>, σ = 5,67 × 10<sup>−8</sup> W·m<sup>−2</sup>·K<sup>−4</sup>, ε émissivité (0 à 1), <b>T en kelvins</b>.<br>Doubler T multiplie P par 16.",
   "origine": "Cours §8 Loi de Stefan"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'un corps noir ?",
   "verso": "La surface idéale qui <b>absorbe tout</b> ce qu'elle reçoit. C'est aussi le <b>meilleur émetteur</b> à température égale : <b>ε = 1</b>.",
   "origine": "Cours §8 Le corps noir"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que mesure réellement une caméra thermique ? Que faut-il lui fournir ?",
   "verso": "Un <b>rayonnement</b>, pas une température. Il faut lui donner l'<b>émissivité</b> de la surface (cuivre brillant ε ≈ 0,05 : pastille mate).",
   "origine": "Cours §8 Ce que mesure une caméra thermique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Bilan énergétique d'un convertisseur ? Sous quelle forme se retrouvent les pertes ?",
   "verso": "<b>W<sub>a</sub> = W<sub>u</sub> + W<sub>p</sub></b>, <b>η = W<sub>u</sub> / W<sub>a</sub></b>. Les pertes sont <b>intégralement thermiques</b> (95 % sur 100 kW → 5 kW à évacuer).",
   "origine": "Cours §8 Bilan et rendement"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment trouver la puissance pour chauffer 200 L d'eau de 12 à 60 °C en 2 h ?",
   "verso": "1. Masse : 200 L d'eau → <b>200 kg</b>.<br>2. Q = m c Δθ = 200 × 4185 × 48 = <b>4,02 × 10<sup>7</sup> J</b>.<br>3. P = Q / t = 4,02 × 10<sup>7</sup> / 7200 = <b>5580 W</b>.<br>4. Choisir 6 kW normalisé, vérifier I = 6000/230 = 26 A.",
   "origine": "Cours §4 Méthode — Dimensionner un préparateur d'eau chaude"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer l'énergie pour chauffer puis vaporiser une masse d'eau ?",
   "verso": "1. Chauffage jusqu'à 100 °C : Q<sub>1</sub> = m c (100 − θ<sub>i</sub>).<br>2. Palier : Q<sub>2</sub> = m L<sub>v</sub> (L<sub>v</sub> = 2257 kJ/kg).<br>3. Q = Q<sub>1</sub> + Q<sub>2</sub>, en joules.",
   "origine": "Cours §5 Courbe de chauffe"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer le flux perdu à travers une paroi tôle + isolant ?",
   "verso": "1. R<sub>1</sub> = e<sub>1</sub> / (λ<sub>1</sub> S) pour la tôle.<br>2. R<sub>2</sub> = e<sub>2</sub> / (λ<sub>2</sub> S) pour l'isolant.<br>3. <b>R<sub>th</sub> = R<sub>1</sub> + R<sub>2</sub></b> (série).<br>4. <b>Φ = Δθ / R<sub>th</sub></b>.<br>5. Comparer à la puissance dissipée → ventilation nécessaire ?",
   "origine": "Cours §7 Méthode — Chiffrer la déperdition d'une armoire"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer la puissance rayonnée par une surface à 60 °C ?",
   "verso": "1. Convertir en kelvins : T = 60 + 273 = <b>333 K</b>.<br>2. Relever ε et S (en m²).<br>3. P = ε σ S T<sup>4</sup>.<br>Laisser T en °C fausse le résultat d'un facteur ~950.",
   "origine": "Cours §8 Loi de Stefan"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment mesurer correctement un point chaud à la caméra thermique ?",
   "verso": "1. <b>Régler l'émissivité</b> de la surface (pastille mate si métal brillant).<br>2. Comparer le point suspect à une <b>référence sur la même surface</b>.<br>3. Conclure sur l'<b>écart</b> plutôt que sur une valeur absolue.",
   "origine": "Cours §8 Thermographie"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
