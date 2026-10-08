/* Genere par outils/construire.py — ne pas editer a la main.
   1sti2d · chapitre 09 · Énergie interne et transferts thermiques
   Les QCM viennent de ch09_prerequis.tex et ch09_bilan.tex,
   les cartes de cartes/cartes-1sti2d-ch09.json. */
window.CHAPITRE = {
 "filiere": "1sti2d",
 "num": "9",
 "titre": "Énergie interne et transferts thermiques",
 "niveau": "1re STI2D",
 "prerequis": [
  {
   "q": "Quelle est l'unité de l'énergie dans le Système international ?",
   "choix": [
    "le watt (W)",
    "le joule (J)",
    "le kelvin (K)",
    "le degré Celsius (°C)"
   ],
   "bonne": 1,
   "expl": "le joule (J)"
  },
  {
   "q": "Un appareil fournit une puissance de 1500 W pendant 20 s. L'énergie mise en jeu (E = P × Δt) vaut :",
   "choix": [
    "75 J",
    "1520 J",
    "30 kJ",
    "30 MJ"
   ],
   "bonne": 2,
   "expl": "E = 1500 × 20 = 30 000 J = 30 kJ (Δt en secondes)"
  },
  {
   "q": "À combien de joules correspond 1 kWh ?",
   "choix": [
    "1000 J",
    "3600 J",
    "3,6 MJ",
    "60 kJ"
   ],
   "bonne": 2,
   "expl": "1 kWh = 1000 × 3600 = 3,6 MJ"
  },
  {
   "q": "Le transfert d'énergie thermique entre deux corps de températures différentes se fait spontanément :",
   "choix": [
    "du corps froid vers le corps chaud",
    "du corps chaud vers le corps froid",
    "dans les deux sens à la fois",
    "il n'y a pas de transfert"
   ],
   "bonne": 1,
   "expl": "du chaud vers le froid"
  },
  {
   "q": "Une grandeur y est proportionnelle à la masse m. Si l'on double la masse, y :",
   "choix": [
    "est divisée par 2",
    "ne change pas",
    "est doublée",
    "est multipliée par 4"
   ],
   "bonne": 2,
   "expl": "proportionnalité : masse × 2 ⇒ y × 2"
  },
  {
   "q": "On mesure une longueur au double décimètre : 14,2 cm. Le nombre de chiffres significatifs de cette mesure est :",
   "choix": [
    "1",
    "2",
    "3",
    "4"
   ],
   "bonne": 2,
   "expl": "trois chiffres (1, 4 et 2)"
  },
  {
   "q": "Parmi ces situations, laquelle met en jeu un <strong>transfert thermique</strong> ?",
   "choix": [
    "une casserole d'eau chauffe sur une plaque",
    "un objet posé, immobile, sur une table",
    "un ressort étiré au repos",
    "un aimant qui attire un trombone"
   ],
   "bonne": 0,
   "expl": "l'eau qui chauffe reçoit de l'énergie thermique de la plaque"
  }
 ],
 "bilan": [
  {
   "q": "La température d'un corps traduit :",
   "choix": [
    "sa masse",
    "sa couleur",
    "son volume",
    "l'agitation de ses constituants microscopiques"
   ],
   "bonne": 3,
   "expl": ""
  },
  {
   "q": "Une température de 20 °C vaut, en kelvins :",
   "choix": [
    "20 K",
    "253 K",
    "293 K",
    "2000 K"
   ],
   "bonne": 2,
   "expl": "(20+273 = 293 K)"
  },
  {
   "q": "Un écart de température de 1 °C correspond à un écart de :",
   "choix": [
    "1 K",
    "274 K",
    "273 K",
    "cela dépend de la température"
   ],
   "bonne": 0,
   "expl": "(même pas d'échelle)"
  },
  {
   "q": "L'énergie interne U d'un système regroupe :",
   "choix": [
    "uniquement l'énergie cinétique d'agitation",
    "l'énergie cinétique d'agitation et l'énergie potentielle d'interaction",
    "uniquement l'énergie potentielle",
    "l'énergie de position du système"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "L'unité de la capacité thermique massique c est :",
   "choix": [
    "J/kg/K",
    "J/kg",
    "J",
    "W"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Pour élever de 10 K la température de 1 kg d'eau, il faut environ :",
   "choix": [
    "418 J",
    "4180 MJ",
    "42 kJ",
    "10 J"
   ],
   "bonne": 2,
   "expl": "(ΔU = 1 × 4180 × 10 ≈ 42 kJ)"
  },
  {
   "q": "Pendant un palier de changement d'état, la température du corps :",
   "choix": [
    "augmente",
    "reste constante",
    "diminue",
    "oscille"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "L'énergie à fournir pour faire fondre 0,5 kg de glace à 0 °C vaut :",
   "choix": [
    "334 J",
    "0 J",
    "668 kJ",
    "167 kJ"
   ],
   "bonne": 3,
   "expl": "(Q = 0,5 × 334 = 167 kJ)"
  },
  {
   "q": "Lorsqu'on met en contact un corps chaud et un corps froid, le transfert thermique va :",
   "choix": [
    "du froid vers le chaud",
    "du plus lourd vers le plus léger",
    "dans aucun sens",
    "du chaud vers le froid"
   ],
   "bonne": 3,
   "expl": ""
  },
  {
   "q": "À l'équilibre thermique, les deux corps ont :",
   "choix": [
    "la même température",
    "la même énergie interne",
    "la même masse",
    "le même volume"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Le mode de transfert thermique qui se produit <strong>sans contact</strong>, même dans le vide, est :",
   "choix": [
    "la conduction",
    "la convection",
    "le rayonnement",
    "la dilatation"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "En physique, le mot « chaleur » désigne :",
   "choix": [
    "une grandeur contenue dans un corps chaud",
    "un transfert d'énergie thermique entre deux corps",
    "la température d'un corps",
    "la masse d'un corps chaud"
   ],
   "bonne": 1,
   "expl": ""
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que traduit la température d'un corps ?",
   "verso": "L'<b>agitation</b> de ses constituants microscopiques : plus ils bougent vite, plus la température est élevée.",
   "origine": "Cours §1 La température"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation entre T (K) et θ (°C) ? Qu'est-ce que le zéro absolu ?",
   "verso": "<b>T = θ + 273,15</b>.<br>Le zéro absolu (0 K = −273,15 °C) est la température la plus basse possible, où l'agitation cesse.",
   "origine": "Cours §1 Les deux échelles"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Un écart de 1 °C vaut combien de kelvins ?",
   "verso": "<b>1 K</b> : les deux échelles ont le même pas, elles sont seulement décalées.",
   "origine": "Cours §1 Les deux échelles"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Citer trois types de thermomètres.",
   "verso": "À <b>dilatation</b> de liquide ; à <b>résistance</b> (sonde Pt100, R augmente avec T) ; <b>infrarouge</b> (sans contact).",
   "origine": "Cours §1 Mesurer une température"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que l'énergie interne U d'un système ?",
   "verso": "La somme de l'énergie <b>cinétique d'agitation</b> et de l'énergie <b>potentielle d'interaction</b> de ses constituants microscopiques, en J.",
   "origine": "Cours §2 L'énergie interne"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la capacité thermique massique c. Unité ? Valeur pour l'eau ?",
   "verso": "L'énergie pour élever de <b>1 K</b> la température de <b>1 kg</b> du matériau, en <b>J·kg<sup>−1</sup>·K<sup>−1</sup></b>.<br>Eau : <b>4180</b> (très élevée).",
   "origine": "Cours §3 Capacité thermique massique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Variation d'énergie interne d'un corps chauffé sans changement d'état ?",
   "verso": "<b>ΔU = m c Δθ</b> avec Δθ = θ<sub>final</sub> − θ<sub>initial</sub>.<br>ΔU &gt; 0 s'il se réchauffe, &lt; 0 s'il se refroidit.",
   "origine": "Cours §3 Chauffer sans changer d'état"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir l'énergie massique de changement d'état L. Énergie pour faire changer d'état une masse m ?",
   "verso": "L'énergie pour faire changer d'état <b>1 kg</b> à <b>température constante</b>, en J/kg.<br><b>Q = m L</b>",
   "origine": "Cours §4 Changement d'état"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énergies massiques de fusion et de vaporisation de l'eau ?",
   "verso": "Fusion : <b>L<sub>f</sub> = 334 kJ/kg</b>.<br>Vaporisation : <b>L<sub>v</sub> = 2260 kJ/kg</b> (≈ 7 fois plus).",
   "origine": "Cours §4 Changement d'état"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sur une courbe de chauffe, quelle formule pour les pentes ? pour les paliers ?",
   "verso": "Pentes (la température monte) : <b>m c Δθ</b>.<br>Paliers (changement d'état, θ constante) : <b>m L</b>.<br>Problème complet : on additionne les étapes.",
   "origine": "Cours §4 Courbe de chauffe"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans quel sens se fait spontanément un transfert thermique ? Quand s'arrête-t-il ?",
   "verso": "Du <b>corps chaud vers le corps froid</b>, jusqu'à ce qu'ils aient la <b>même température</b> : l'équilibre thermique.",
   "origine": "Cours §5 L'équilibre thermique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Conduction, convection, rayonnement : définir et donner un exemple.",
   "verso": "<b>Conduction</b> : de proche en proche dans un solide (manche de casserole).<br><b>Convection</b> : mouvement d'un fluide (air chaud d'un radiateur).<br><b>Rayonnement</b> : par ondes, sans contact, même dans le vide (Soleil).",
   "origine": "Cours §6 Les trois modes de transfert"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Un corps « contient-il » de la chaleur ?",
   "verso": "Non : la <b>chaleur</b> est un <b>transfert</b> d'énergie d'un corps à un autre. Un corps possède de l'<b>énergie interne</b>.",
   "origine": "Cours §6 La chaleur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer l'énergie pour porter 200 kg d'eau de 15 °C à 60 °C ?",
   "verso": "1. m = 200 kg ; c = 4180 J·kg<sup>−1</sup>·K<sup>−1</sup>.<br>2. Δθ = 60 − 15 = 45 K.<br>3. ΔU = m c Δθ = 200 × 4180 × 45 = <b>3,76 × 10<sup>7</sup> J</b> (≈ 10,4 kWh).",
   "origine": "Cours §3 Méthode 1"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer l'énergie pour faire fondre un glaçon de 34 g à 0 °C ?",
   "verso": "1. Changement d'état : fusion, L<sub>f</sub> = 334 kJ/kg.<br>2. m = 0,034 kg.<br>3. Q = m L = 0,034 × 334 000 = <b>1,14 × 10<sup>4</sup> J</b>.<br>Pas de m c Δθ pendant le palier.",
   "origine": "Cours §4 Méthode 2"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>200 g d'eau à 80 °C versés dans 300 g d'eau à 20 °C. Comment trouver la température finale ?",
   "verso": "1. Système isolé : énergie cédée = énergie reçue.<br>2. m<sub>1</sub>c(T<sub>f</sub> − θ<sub>1</sub>) + m<sub>2</sub>c(T<sub>f</sub> − θ<sub>2</sub>) = 0.<br>3. Même c : T<sub>f</sub> = (200×80 + 300×20)/500 = <b>44 °C</b>.<br>4. Vérifier : entre 20 et 80 °C.",
   "origine": "Cours §5 Méthode 3"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer l'énergie pour transformer de la glace à −10 °C en eau à 20 °C ?",
   "verso": "1. Glace de −10 à 0 °C : m c<sub>glace</sub> Δθ.<br>2. Fusion à 0 °C : m L<sub>f</sub>.<br>3. Eau de 0 à 20 °C : m c<sub>eau</sub> Δθ.<br>4. <b>Additionner</b> les trois énergies.",
   "origine": "Cours §4 Courbe de chauffe"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
