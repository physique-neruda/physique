/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · Cours 4 — Statique des fluides
   Le bilan vient de c04_bilan.tex, les cartes des \trou{} de
   c04_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "4",
 "cle": "c04",
 "etiquette": "Cours 4",
 "titre": "Statique des fluides",
 "niveau": "BTS ET",
 "prerequis": [],
 "bilan": [
  {
   "q": "L'unité légale de pression est :",
   "choix": [
    "le bar",
    "le newton",
    "le pascal",
    "l'atmosphère"
   ],
   "bonne": 2,
   "expl": "Le bar est une unité usuelle : 1 = 1×10⁵ Pa."
  },
  {
   "q": "La pression p = F/S :",
   "choix": [
    "augmente quand la surface augmente",
    "diminue quand la surface augmente",
    "ne dépend pas de la surface",
    "s'exprime en newtons"
   ],
   "bonne": 1,
   "expl": "À force égale, une grande surface répartit la force."
  },
  {
   "q": "Un manomètre d'atelier indique :",
   "choix": [
    "la pression relative",
    "la pression absolue",
    "la pression atmosphérique",
    "le vide"
   ],
   "bonne": 0,
   "expl": "Il affiche zéro à l'air libre."
  },
  {
   "q": "Dans l'eau, la pression augmente d'environ 1 tous les :",
   "choix": [
    "1 m",
    "100 m",
    "10 cm",
    "10 m"
   ],
   "bonne": 3,
   "expl": "1000×9,81×10 ≈ 10⁵ Pa."
  },
  {
   "q": "La pression au fond d'un réservoir dépend :",
   "choix": [
    "de la hauteur de liquide",
    "de la forme du réservoir",
    "du volume de liquide",
    "de la surface du fond"
   ],
   "bonne": 0,
   "expl": "C'est le paradoxe hydrostatique."
  },
  {
   "q": "Un capteur de pression au fond d'une cuve permet de connaître :",
   "choix": [
    "la température",
    "le débit",
    "le niveau, si l'on connaît ρ",
    "la viscosité"
   ],
   "bonne": 2,
   "expl": "h = Δp/(ρg)."
  },
  {
   "q": "La poussée d'Archimède dépend :",
   "choix": [
    "de la masse volumique du corps",
    "de la forme du corps seulement",
    "de la profondeur",
    "de la masse volumique du fluide et du volume immergé"
   ],
   "bonne": 3,
   "expl": "F_A = ρ_fluide V_immergé g."
  },
  {
   "q": "Un corps coule si :",
   "choix": [
    "la poussée est supérieure à son poids",
    "son poids est supérieur à la poussée",
    "il est creux",
    "il est petit"
   ],
   "bonne": 1,
   "expl": "Le poids l'emporte."
  },
  {
   "q": "Le débit volumique dans une conduite vaut :",
   "choix": [
    "S/v",
    "ρS v",
    "v/S",
    "S v"
   ],
   "bonne": 3,
   "expl": "Section fois vitesse."
  },
  {
   "q": "La puissance hydraulique vaut :",
   "choix": [
    "Δp × Q_v",
    "Δp / Q_v",
    "ρg h",
    "Q_v / Δp"
   ],
   "bonne": 0,
   "expl": "En watts si Δp en Pa et Q_v en m³/s."
  },
  {
   "q": "36 m³/h valent :",
   "choix": [
    "10 m³/s",
    "0,6 m³/s",
    "0,01 m³/s",
    "36 m³/s"
   ],
   "bonne": 2,
   "expl": "36/3600."
  },
  {
   "q": "Le moteur d'une pompe doit fournir :",
   "choix": [
    "la puissance hydraulique",
    "plus que la puissance hydraulique",
    "moins que la puissance hydraulique",
    "une puissance nulle"
   ],
   "bonne": 1,
   "expl": "À cause du rendement de la pompe."
  }
 ],
 "cartes": [
  {
   "type": "retenir",
   "recto": "Masse volumique — qu'y a-t-il à retenir ?",
   "verso": "ρ= m/V, en kg/m³. Eau : 1000 kg/m³ ; huile : environ 870 ; air : environ 1,2 kg/m³. Un liquide est pratiquement <strong>incompressible</strong> ; un gaz ne l'est pas.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "La pression au fond ne dépend …… de liquide, pas de la forme ni du volume du récipient.",
   "rep": "que de la hauteur",
   "verso": "<strong>que de la hauteur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La pompe fournit P_hydraulique ; son moteur électrique doit fournir davantage, à cause du …… de la pompe.",
   "rep": "rendement",
   "verso": "<strong>rendement</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "L'unité légale de pression est ……",
   "rep": "le pascal",
   "verso": "<strong>le pascal</strong> — Le bar est une unité usuelle : 1 = 1×10⁵ Pa.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La pression p = F/S ……",
   "rep": "diminue quand la surface augmente",
   "verso": "<strong>diminue quand la surface augmente</strong> — À force égale, une grande surface répartit la force.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un manomètre d'atelier indique ……",
   "rep": "la pression relative",
   "verso": "<strong>la pression relative</strong> — Il affiche zéro à l'air libre.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans l'eau, la pression augmente d'environ 1 tous les ……",
   "rep": "10 m",
   "verso": "<strong>10 m</strong> — 1000×9,81×10 ≈ 10⁵ Pa.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La pression au fond d'un réservoir dépend ……",
   "rep": "de la hauteur de liquide",
   "verso": "<strong>de la hauteur de liquide</strong> — C'est le paradoxe hydrostatique.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La poussée d'Archimède dépend ……",
   "rep": "de la masse volumique du fluide et du volume immergé",
   "verso": "<strong>de la masse volumique du fluide et du volume immergé</strong> — F_A = ρ_fluide V_immergé g.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un corps coule si ……",
   "rep": "son poids est supérieur à la poussée",
   "verso": "<strong>son poids est supérieur à la poussée</strong> — Le poids l'emporte.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le débit volumique dans une conduite vaut ……",
   "rep": "S v",
   "verso": "<strong>S v</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La puissance hydraulique vaut ……",
   "rep": "Δp × Q_v",
   "verso": "<strong>Δp × Q_v</strong> — En watts si Δp en Pa et Q_v en m³/s.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "36 m³/h valent ……",
   "rep": "0,01 m³/s",
   "verso": "<strong>0,01 m³/s</strong> — 36/3600.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le moteur d'une pompe doit fournir ……",
   "rep": "plus que la puissance hydraulique",
   "verso": "<strong>plus que la puissance hydraulique</strong> — À cause du rendement de la pompe.",
   "origine": "bilan"
  }
 ],
 "cartes_figees": false
};
