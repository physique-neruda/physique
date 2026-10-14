/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 9 — Le transformateur
   Le bilan vient de CRSA_ch09_bilan.tex, les cartes des \trou{} de
   CRSA_ch09_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "9",
 "cle": "ch09",
 "etiquette": "Chapitre 9",
 "titre": "Le transformateur",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Calculer 24/230 avec trois chiffres significatifs :",
   "choix": [
    "0,104",
    "9,58",
    "0,0104",
    "1,04"
   ],
   "bonne": 0,
   "expl": "0,104. C'est un rapport de transformation abaisseur : inférieur à 1."
  },
  {
   "q": "Avec m = 0,060 et U₁ = 400 V, la tension U₂ vaut :",
   "choix": [
    "24 V",
    "6667 V",
    "2,4 V",
    "240 V"
   ],
   "bonne": 0,
   "expl": "U₂ = m × U₁ = 0,060 × 400 = 24 V. On multiplie par m ; diviser donnerait une tension absurde."
  },
  {
   "q": "Une charge absorbe 63 W sous 24 V. L'intensité vaut :",
   "choix": [
    "2,63 A",
    "0,381 A",
    "1512 A",
    "26,3 A"
   ],
   "bonne": 0,
   "expl": "I = P/U = 63/24 = 2,63 A. Attention au sens du quotient : c'est la puissance divisée par la tension."
  },
  {
   "q": "Une tension sinusoïdale a une valeur maximale de 34 V. Sa valeur efficace vaut :",
   "choix": [
    "24,0 V",
    "48,1 V",
    "17,0 V",
    "34,0 V"
   ],
   "bonne": 0,
   "expl": "34/√2 = 24,0 V. De la valeur maximale vers l'efficace, on DIVISE par √2."
  },
  {
   "q": "Une période vaut 20 ms. La fréquence vaut :",
   "choix": [
    "50 Hz",
    "20 Hz",
    "500 Hz",
    "0,05 Hz"
   ],
   "bonne": 0,
   "expl": "f = 1/T = 1/0,020 = 50 Hz. C'est la fréquence du réseau."
  },
  {
   "q": "Une valeur attendue de 0,0600 est mesurée à 0,0615. L'écart relatif vaut :",
   "choix": [
    "2,50 %",
    "1,50 %",
    "0,25 %",
    "2,44 %"
   ],
   "bonne": 0,
   "expl": "0,0015/0,0600 = 2,50 %. L'écart se rapporte à la valeur attendue."
  }
 ],
 "bilan": [
  {
   "q": "Un transformateur est un convertisseur :",
   "choix": [
    "continu continu",
    "alternatif continu",
    "alternatif alternatif",
    "continu alternatif"
   ],
   "bonne": 2,
   "expl": "Il entre de l'alternatif, il sort de l'alternatif. Le redressement est le travail du chapitre 10."
  },
  {
   "q": "Un transformateur alimenté sous 50 Hz délivre au secondaire une tension de fréquence :",
   "choix": [
    "25 Hz",
    "50 Hz",
    "100 Hz",
    "cela dépend de m"
   ],
   "bonne": 1,
   "expl": "Le transformateur ne touche jamais à la fréquence."
  },
  {
   "q": "Le rapport de transformation vaut :",
   "choix": [
    "N₁/N₂",
    "U₁/U₂",
    "U₂/U₁",
    "I₂/I₁"
   ],
   "bonne": 2,
   "expl": "m = U₂/U₁ = N₂/N₁ = I₁/I₂. Les réponses « N₁/N₂ » et « U₁/U₂ » sont les mêmes rapports à l'envers : c'est le piège habituel."
  },
  {
   "q": "Un transformateur 230 V / 24 V a un rapport de transformation d'environ :",
   "choix": [
    "9,58",
    "0,104",
    "206",
    "1,00"
   ],
   "bonne": 1,
   "expl": "24/230 = 0,104."
  },
  {
   "q": "Si m > 1, le transformateur est :",
   "choix": [
    "abaisseur",
    "élévateur",
    "d'isolement",
    "en court-circuit"
   ],
   "bonne": 1,
   "expl": "m > 1 signifie U₂ > U₁."
  },
  {
   "q": "Pour un transformateur parfait, les courants vérifient :",
   "choix": [
    "I₂/I₁ = m",
    "I₁/I₂ = m",
    "I₁ = I₂",
    "I₁ I₂ = m"
   ],
   "bonne": 1,
   "expl": "Les courants sont dans le rapport inverse des tensions."
  },
  {
   "q": "Un transformateur parfait conserve :",
   "choix": [
    "la tension",
    "le courant",
    "la puissance apparente",
    "le nombre de spires"
   ],
   "bonne": 2,
   "expl": "S₁ = S₂, soit U₁ I₁ = U₂ I₂."
  },
  {
   "q": "La plaque indique 24 V·A et 24 V au secondaire. L'intensité nominale au secondaire vaut :",
   "choix": [
    "0,104 A",
    "1,00 A",
    "24 A",
    "576 A"
   ],
   "bonne": 1,
   "expl": "I_2N = S/U₂ = 24/24 = 1,00 A."
  },
  {
   "q": "On branche le primaire d'un transformateur sur une batterie de 24 V continu. Au secondaire, on lit :",
   "choix": [
    "24 V",
    "230 V",
    "une tension nulle",
    "une tension alternative"
   ],
   "bonne": 2,
   "expl": "En continu le flux est constant, donc aucune tension induite. Et le primaire, réduit à sa résistance, grille rapidement."
  },
  {
   "q": "Les deux enroulements d'un transformateur sont :",
   "choix": [
    "reliés par un fil",
    "isolés électriquement, couplés magnétiquement",
    "en série",
    "en parallèle"
   ],
   "bonne": 1,
   "expl": "C'est l'isolement galvanique — une fonction recherchée en soi."
  },
  {
   "q": "Un oscilloscope montre au secondaire une sinusoïde de valeur maximale 34 V. Un voltmètre branché aux mêmes bornes afficherait :",
   "choix": [
    "34 V",
    "48 V",
    "24 V",
    "0 V"
   ],
   "bonne": 2,
   "expl": "U = U_max/√2 = 34/1,414 = 24 V. Le voltmètre affiche l'efficace, l'oscilloscope montre le maximum."
  },
  {
   "q": "Pour mesurer le rapport de transformation, le secondaire doit être :",
   "choix": [
    "ouvert",
    "en court-circuit",
    "chargé au nominal",
    "peu importe"
   ],
   "bonne": 0,
   "expl": "À vide, le courant primaire est négligeable : aucune chute de tension ne fausse la lecture. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Le transformateur redresse-t-il ? Change-t-il la fréquence ?",
   "verso": "<b>Non et non</b> : sa sortie reste <b>alternative</b>, il ne lisse rien, la fréquence reste celle du réseau (50 Hz). Il change seulement la <b>tension</b>.",
   "origine": "Cours §1 Ce que le transformateur ne fait pas"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>De quoi est fait un transformateur ? Comment l'énergie passe-t-elle du primaire au secondaire ?",
   "verso": "Un <b>circuit magnétique</b> en tôles feuilletées et deux enroulements (<b>primaire</b> N<sub>1</sub>, <b>secondaire</b> N<sub>2</sub>), jamais reliés : l'énergie passe par le <b>flux magnétique commun</b> (isolement galvanique).",
   "origine": "Cours §2 Le principe"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que se passe-t-il si l'on alimente un transformateur en continu ?",
   "verso": "Le flux est constant : <b>aucune tension au secondaire</b>, et le primaire, réduit à sa résistance, <b>grille</b>.",
   "origine": "Cours §2 Pourquoi l'alternatif"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rapport de transformation du transformateur parfait ?",
   "verso": "<b>m = U<sub>2</sub>/U<sub>1</sub> = N<sub>2</sub>/N<sub>1</sub> = I<sub>1</sub>/I<sub>2</sub></b> (sans unité). Le rapport des courants est <b>inversé</b>.",
   "origine": "Cours §3 Le transformateur parfait"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment savoir si un transformateur est abaisseur ou élévateur ?",
   "verso": "<b>m &lt; 1</b> : <b>abaisseur</b> (U<sub>2</sub> &lt; U<sub>1</sub>) ; <b>m &gt; 1</b> : <b>élévateur</b>. Toujours justifier.",
   "origine": "Cours §3 Abaisseur ou élévateur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que conserve un transformateur parfait ?",
   "verso": "La puissance apparente : <b>S<sub>1</sub> = S<sub>2</sub></b>, soit <b>U<sub>1</sub> I<sub>1</sub> = U<sub>2</sub> I<sub>2</sub></b>. Élever la tension abaisse le courant dans le même rapport.",
   "origine": "Cours §4 Conservation de la puissance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi la plaque d'un transformateur donne-t-elle S en VA et pas P en W ?",
   "verso": "L'échauffement dépend du <b>courant</b>, donc de <b>S = U I</b>. Dépasser S fait chauffer le transformateur, même si la charge consomme peu de watts.",
   "origine": "Cours §5 Des VA, pas des watts"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que montre l'oscilloscope et qu'affiche le voltmètre au secondaire ?",
   "verso": "Oscilloscope : <b>U<sub>2max</sub></b>. Voltmètre (sur AC) : <b>U<sub>2</sub> efficace = U<sub>2max</sub>/√2</b>. Valeur moyenne nulle.",
   "origine": "Cours §6 Oscilloscope et voltmètre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelles pertes dans un transformateur réel ? Rendement typique ?",
   "verso": "<b>Pertes fer</b> (circuit magnétique) et <b>pertes cuivre</b> (enroulements). <b>η = P<sub>2</sub>/P<sub>1</sub> &gt; 95 %</b>. En charge, U<sub>2</sub> chute de quelques %.",
   "origine": "Cours §7 Le transformateur réel"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Plaque « 230 V / 24 V ». Comment trouver m et conclure ?",
   "verso": "1. Primaire = côté source (230 V).<br>2. m = U<sub>2</sub>/U<sub>1</sub> = 24/230 = <b>0,104</b>.<br>3. m &lt; 1 → <b>abaisseur</b> (justifier).<br>4. Contrôle : tension ÷ 10, courant × 10.",
   "origine": "Cours §3 Méthode — Déterminer m"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Plaque « 230 V / 24 V — 24 VA ». Comment trouver les courants nominaux ?",
   "verso": "1. S = 24 VA des deux côtés.<br>2. I<sub>2N</sub> = S/U<sub>2</sub> = <b>1,00 A</b>.<br>3. I<sub>1N</sub> = S/U<sub>1</sub> = <b>0,104 A</b>.<br>4. Contrôle : I<sub>1</sub>/I<sub>2</sub> = m.",
   "origine": "Cours §5 Méthode — Courants nominaux"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>20 V/div, 5 ms/div ; amplitude 1,7 div, motif sur 4 div. Comment trouver U<sub>2max</sub>, f et U<sub>2</sub> ?",
   "verso": "1. U<sub>2max</sub> = 1,7 × 20 = <b>34 V</b>.<br>2. T = 4 × 5 = 20 ms → <b>f = 50 Hz</b>.<br>3. U<sub>2</sub> = 34/√2 = <b>24 V</b>.",
   "origine": "Cours §6 Méthode — Oscillogramme de u2"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment mesurer le rapport de transformation ?",
   "verso": "1. <b>Secondaire ouvert</b> (rien de branché).<br>2. Alimenter le primaire, mesurer U<sub>1</sub>.<br>3. Mesurer U<sub>20</sub> à vide.<br>4. <b>m = U<sub>20</sub>/U<sub>1</sub></b>, comparer à la plaque (quelques %).",
   "origine": "Cours §7 Méthode — Mesurer m"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
