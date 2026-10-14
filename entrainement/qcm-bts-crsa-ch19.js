/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 19 — Réponse des systèmes linéaires et résonance
   Le bilan vient de CRSA_ch19_bilan.tex, les cartes des \trou{} de
   CRSA_ch19_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "19",
 "cle": "ch19",
 "etiquette": "Chapitre 19",
 "titre": "Réponse des systèmes linéaires et résonance",
 "niveau": "BTS CRSA",
 "prerequis": [],
 "bilan": [
  {
   "q": "La réponse indicielle d'un système est sa réponse :",
   "choix": [
    "à une sinusoïde",
    "en régime permanent seulement",
    "à une impulsion",
    "à un échelon"
   ],
   "bonne": 3,
   "expl": "L'échelon est l'entrée de référence de tout le chapitre."
  },
  {
   "q": "Un moteur passe de 0 à 3000 1/min sous un échelon de 0 à 24 V. Sa transmittance statique vaut :",
   "choix": [
    "125, sans unité",
    "125 1/min/V",
    "0,008 V/1/min",
    "3000 1/min"
   ],
   "bonne": 1,
   "expl": "3000/24 = 125, avec son unité ; la réponse « 125 1/min/V » oublie l'unité."
  },
  {
   "q": "Pour un premier ordre, la sortie atteint 63 % de sa variation à :",
   "choix": [
    "t = τ",
    "t = τ/2",
    "t = 3τ",
    "t = 5τ"
   ],
   "bonne": 0,
   "expl": "Définition de τ."
  },
  {
   "q": "Le temps de réponse à 5 % d'un premier ordre vaut :",
   "choix": [
    "τ",
    "2τ",
    "3τ",
    "5τ"
   ],
   "bonne": 2,
   "expl": "À 3τ, 95 % de la variation est faite."
  },
  {
   "q": "La réponse d'un premier ordre à un échelon :",
   "choix": [
    "ne dépasse jamais sa valeur finale",
    "oscille",
    "dépasse toujours sa valeur finale",
    "est instantanée"
   ],
   "bonne": 0,
   "expl": "Un premier ordre monte sans dépasser."
  },
  {
   "q": "Pour un second ordre, diminuer le coefficient d'amortissement m :",
   "choix": [
    "supprime le dépassement",
    "ne change rien",
    "augmente le dépassement",
    "rend le système du premier ordre"
   ],
   "bonne": 2,
   "expl": "Moins d'amortissement, plus d'oscillations."
  },
  {
   "q": "Le compromis rapidité-dépassement d'un second ordre est obtenu pour :",
   "choix": [
    "m ≈ 0,1",
    "m = 0",
    "m ≈ 2",
    "m ≈ 0,7"
   ],
   "bonne": 3,
   "expl": "Un léger dépassement, la réponse la plus rapide."
  },
  {
   "q": "Valeur initiale 0, maximum 130, valeur finale 100 : le dépassement vaut :",
   "choix": [
    "130 %",
    "30 %",
    "23 %",
    "70 %"
   ],
   "bonne": 1,
   "expl": "(130 - 100)/(100 - 0) = 0,30. La réponse « 30 % » divise par le maximum."
  },
  {
   "q": "La fréquence de coupure d'un premier ordre correspond à un gain diminué de :",
   "choix": [
    "20 dB",
    "3 dB",
    "50 %",
    "63 %"
   ],
   "bonne": 1,
   "expl": "Soit une tension multipliée par 0,71."
  },
  {
   "q": "Un système de constante de temps 1 ms a une fréquence de coupure d'environ :",
   "choix": [
    "1 kHz",
    "6,3 kHz",
    "16 Hz",
    "160 Hz"
   ],
   "bonne": 3,
   "expl": "1/(2π×10⁻³) = 159 Hz."
  },
  {
   "q": "La résonance d'un second ordre est d'autant plus marquée que :",
   "choix": [
    "son amortissement est faible",
    "son amortissement est fort",
    "sa constante de temps est grande",
    "il est du premier ordre"
   ],
   "bonne": 0,
   "expl": "Faible amortissement : pic haut et étroit."
  },
  {
   "q": "Pour protéger une machine d'une résonance dangereuse, on peut :",
   "choix": [
    "l'exciter exactement à sa fréquence propre",
    "supprimer les amortisseurs",
    "éloigner la fréquence d'excitation de sa fréquence propre",
    "rigidifier le capteur de vitesse"
   ],
   "bonne": 2,
   "expl": "On peut aussi amortir, ou traverser vite la zone critique. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que la réponse indicielle d'un système ? Quels sont ses deux régimes ?",
   "verso": "La réponse de la sortie à un <b>échelon</b> d'entrée. Un <b>régime transitoire</b> (la sortie évolue) puis un <b>régime permanent</b> (elle ne varie plus).",
   "origine": "Cours §1 Réponse indicielle"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la transmittance statique K. Unité ?",
   "verso": "<b>K = Δs / Δe</b> en régime permanent. Unité : celle de la sortie / celle de l'entrée.",
   "origine": "Cours §1 Transmittance statique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Premier ordre : que vaut la sortie à t = τ ? Temps de réponse à 5 % ? Dépassement ?",
   "verso": "À t = τ : <b>63 %</b> de la variation. <b>t<sub>5%</sub> = 3τ</b>. <b>Aucun dépassement</b>.<br>Ex. : four, charge d'un condensateur, montée en vitesse d'un moteur.",
   "origine": "Cours §2 Le premier ordre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Second ordre : rôle du coefficient d'amortissement m ? Meilleur compromis ?",
   "verso": "Plus m est <b>petit</b>, plus la réponse <b>oscille et dépasse</b>. m ≥ 1 : apériodique mais lente. Compromis : <b>m ≈ 0,7</b>.",
   "origine": "Cours §3 Le second ordre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formule du dépassement D ? Où lire le temps de réponse à 5 % ?",
   "verso": "<b>D = (s<sub>max</sub> − s<sub>∞</sub>) / (s<sub>∞</sub> − s<sub>0</sub>)</b>.<br>t<sub>5%</sub> : au <b>dernier</b> passage dans la bande ± 5 %.",
   "origine": "Cours §3 Dépassement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Fréquence de coupure d'un premier ordre ? Lien avec τ ?",
   "verso": "Gain baissé de <b>3 dB</b> ; <b>f<sub>c</sub> = 1 / (2π τ)</b>. Système rapide (petit τ) → f<sub>c</sub> élevée.",
   "origine": "Cours §4 Réponse en fréquence du 1er ordre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que la résonance d'un second ordre peu amorti ? Effet de m ?",
   "verso": "Le gain passe par un <b>maximum</b> près de la fréquence propre f<sub>0</sub>. Plus m est petit, plus le pic est <b>haut et étroit</b>.",
   "origine": "Cours §5 La résonance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Fréquence propre d'un système masse-ressort ? d'un circuit LC ?",
   "verso": "Masse-ressort : <b>f<sub>0</sub> = (1/2π) √(k/m)</b>.<br>LC : <b>f<sub>0</sub> = 1 / (2π √(LC))</b>.",
   "origine": "Cours §5 Fréquences propres"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quels sont les trois leviers contre une résonance dangereuse ?",
   "verso": "<b>Éloigner</b> la fréquence d'excitation de f<sub>0</sub> (vitesse, raideur, masse) ; <b>amortir</b> ; <b>traverser vite</b> la zone critique au démarrage.",
   "origine": "Cours §6 Se protéger d'une résonance"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Four : échelon 0 → 3,0 kW, température 20 → 80 °C, 57,8 °C à 12 min. Comment trouver K, τ, t<sub>5%</sub> ?",
   "verso": "1. K = 60/3,0 = <b>20 °C/kW</b>.<br>2. 63 % de la variation : 20 + 0,63 × 60 = 57,8 °C → <b>τ = 12 min</b>.<br>3. <b>t<sub>5%</sub> = 3τ = 36 min</b>.",
   "origine": "Cours §2 Méthode — Premier ordre"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Consigne 0 → 5 V, position 0 → 200 mm, maximum 236 mm. Comment trouver K et D ?",
   "verso": "1. K = 200/5 = <b>40 mm/V</b>.<br>2. D = (236 − 200)/(200 − 0) = <b>18 %</b>.<br>3. t<sub>5%</sub> : dernier passage dans [190 ; 210] mm.",
   "origine": "Cours §3 Méthode — Second ordre"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Moteur de 40 kg sur plots (k = 1,6 × 10<sup>6</sup> N/m), 1900 tr/min. Comment repérer un risque de résonance ?",
   "verso": "1. f<sub>0</sub> = (1/2π) √(k/m) = <b>31,8 Hz</b>.<br>2. Excitation : 1900/60 = <b>31,7 Hz</b>.<br>3. Égales → <b>résonance</b> : changer les plots ou la vitesse.",
   "origine": "Cours §5 Méthode — Risque de résonance"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
