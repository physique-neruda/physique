/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 5 — Statique et dynamique des fluides
   Le bilan vient de CRSA_ch05_bilan.tex, les cartes des \trou{} de
   CRSA_ch05_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "5",
 "cle": "ch05",
 "etiquette": "Chapitre 5",
 "titre": "Statique et dynamique des fluides",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Aire d'un disque de diamètre 50 mm, en m² :",
   "choix": [
    "1,96×10⁻³ m²",
    "1,96×10⁻² m²",
    "7,85×10⁻⁴ m²",
    "1,96×10³ m²"
   ],
   "bonne": 0,
   "expl": "S = πD²/4 avec D = 0,050 m : π × 0,0025 / 4 = 1,96×10⁻³ m². Convertir le diamètre AVANT d'élever au carré évite le rang de trop."
  },
  {
   "q": "Si le diamètre d'un disque est divisé par 2, son aire est :",
   "choix": [
    "divisée par 4",
    "divisée par 2",
    "divisée par 16",
    "multipliée par 2"
   ],
   "bonne": 0,
   "expl": "L'aire varie comme le carré du diamètre. Une conduite deux fois plus étroite offre quatre fois moins de section."
  },
  {
   "q": "Convertir 2,5 bar en pascals :",
   "choix": [
    "2,5×10⁵ Pa",
    "2,5×10³ Pa",
    "2,5×10⁶ Pa",
    "2,5×10² Pa"
   ],
   "bonne": 0,
   "expl": "1 bar = 10⁵ Pa. Le bar est commode, le pascal est l'unité de calcul."
  },
  {
   "q": "Convertir 40 m³/h en m³/s :",
   "choix": [
    "1,11×10⁻² m³/s",
    "1,11×10⁻³ m³/s",
    "6,67×10⁻¹ m³/s",
    "1,44×10⁵ m³/s"
   ],
   "bonne": 0,
   "expl": "40/3600 = 1,11×10⁻² m³/s. Le bas de la fraction est une heure : on divise par 3600."
  },
  {
   "q": "Sachant que √(2 × 9,81 × 1,8) = 5,94, que vaut √(2 × 9,81 × 7,2) ?",
   "choix": [
    "11,9",
    "23,8",
    "8,40",
    "5,94"
   ],
   "bonne": 0,
   "expl": "7,2 = 4 × 1,8, et la racine d'un quadruple est un double : 11,9. Quadrupler la hauteur ne fait que doubler la vitesse."
  },
  {
   "q": "Résoudre ½ × 1000 × v² = 1294 :",
   "choix": [
    "v = 1,61",
    "v = 2,59",
    "v = 0,80",
    "v = 1294"
   ],
   "bonne": 0,
   "expl": "v² = 2 × 1294 / 1000 = 2,588, donc v = 1,61. Ne pas oublier la racine à la fin."
  }
 ],
 "bilan": [
  {
   "q": "Un fluide incompressible est un fluide dont :",
   "choix": [
    "la pression est constante",
    "la masse volumique est constante",
    "la vitesse est constante",
    "le débit est constant"
   ],
   "bonne": 1,
   "expl": "Son volume ne varie pas sous l'effet de la pression."
  },
  {
   "q": "Parmi ces fluides, lequel n'est pas incompressible ?",
   "choix": [
    "l'eau",
    "l'huile hydraulique",
    "l'air comprimé",
    "le gazole"
   ],
   "bonne": 2,
   "expl": "Tous les gaz sont compressibles. C'est ce qui sépare le pneumatique de l'hydraulique — et ce qui interdit d'appliquer ce chapitre à l'air comprimé."
  },
  {
   "q": "120 bar valent, en pascals :",
   "choix": [
    "120 Pa",
    "1,2×10⁵ Pa",
    "1,2×10⁷ Pa",
    "1,2×10³ Pa"
   ],
   "bonne": 2,
   "expl": "1 bar = 1×10⁵ Pa, donc 120×10⁵ = 1,2×10⁷ Pa. Oublier cette conversion fait manquer le résultat d'un facteur 100000."
  },
  {
   "q": "La pression au fond d'un récipient dépend :",
   "choix": [
    "du volume de liquide",
    "de la forme du récipient",
    "de la hauteur de liquide",
    "de la surface du fond"
   ],
   "bonne": 2,
   "expl": "p = ρg h : ni le volume, ni la forme, ni la surface du fond n'interviennent."
  },
  {
   "q": "Un capteur de pression relative plongé dans l'air libre indique :",
   "choix": [
    "zéro",
    "la pression atmosphérique",
    "une valeur négative",
    "1 bar"
   ],
   "bonne": 0,
   "expl": "La pression relative se compte à partir de la pression atmosphérique."
  },
  {
   "q": "Un débit de 40 meter³/h vaut, en meter³/s :",
   "choix": [
    "40",
    "0,67",
    "1,11×10⁻²",
    "1,44×10⁵"
   ],
   "bonne": 2,
   "expl": "40/3600 = 1,11×10⁻²."
  },
  {
   "q": "Le débit massique se calcule par :",
   "choix": [
    "Q_m = S v",
    "Q_m = ρQ_v",
    "Q_m = Q_v/ρ",
    "Q_m = ρS"
   ],
   "bonne": 1,
   "expl": "La masse volumique multiplie le débit volumique."
  },
  {
   "q": "Dans une conduite, le diamètre est divisé par deux. La vitesse est :",
   "choix": [
    "doublée",
    "quadruplée",
    "divisée par deux",
    "inchangée"
   ],
   "bonne": 1,
   "expl": "La section varie comme le carré du diamètre : S = πd²/4. La réponse « doublée » est l'erreur la plus fréquente du chapitre."
  },
  {
   "q": "Dans un rétrécissement de conduite horizontale, la pression :",
   "choix": [
    "augmente",
    "diminue",
    "reste constante",
    "s'annule"
   ],
   "bonne": 1,
   "expl": "Le fluide accélère, donc il gagne de l'énergie cinétique — qu'il ne peut prendre qu'au terme de pression. C'est le principe du tube de Venturi."
  },
  {
   "q": "La vitesse de sortie d'un bac ouvert se vidant par un orifice à l'air libre vaut :",
   "choix": [
    "v = 2gh",
    "v = √(2gh)",
    "v = ρgh",
    "v = √(2gh/ρ)"
   ],
   "bonne": 1,
   "expl": "Formule de Torricelli, obtenue en simplifiant Bernoulli."
  },
  {
   "q": "Si l'on remplace l'eau d'un bac par de l'huile, la vitesse de vidange :",
   "choix": [
    "augmente",
    "diminue",
    "ne change pas",
    "devient nulle"
   ],
   "bonne": 2,
   "expl": "La masse volumique se simplifie dans la démonstration : v = √(2gh) n'en dépend pas. Contre-intuitif, mais exact en fluide parfait."
  },
  {
   "q": "Pour estimer la durée de vidange d'un bac, diviser le volume par le débit initial donne un résultat :",
   "choix": [
    "exact",
    "trop grand",
    "trop petit",
    "sans rapport"
   ],
   "bonne": 2,
   "expl": "Le débit initial est le débit maximal : il diminue à mesure que h baisse. L'estimation naïve donne un résultat deux fois trop petit. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'un fluide incompressible ? Exemples ?",
   "verso": "Un fluide dont la <b>masse volumique reste constante</b> quelle que soit la pression : tous les <b>liquides</b> en pratique ; <b>pas les gaz</b> (ni l'air comprimé).",
   "origine": "Cours §1 Compressible ou incompressible"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définition de la pression ? Unités ? 1 bar en Pa ?",
   "verso": "<b>p = F / S</b> (Pa = N/m²).<br><b>1 bar = 10<sup>5</sup> Pa</b> ≈ 10 m d'eau.",
   "origine": "Cours §2 La pression"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Différence entre pression absolue et pression relative ?",
   "verso": "<b>Absolue</b> : comptée depuis le vide.<br><b>Relative</b> : comptée depuis la pression atmosphérique (0 à l'air libre) — celle des manomètres d'atelier.",
   "origine": "Cours §2 Pression absolue et relative"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer le principe fondamental de l'hydrostatique.",
   "verso": "<b>p<sub>B</sub> − p<sub>A</sub> = ρ g h</b>, h différence d'altitude (B plus bas que A), résultat en Pa.",
   "origine": "Cours §3 Principe fondamental de l'hydrostatique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>La pression au fond d'un récipient dépend-elle de sa forme ou du volume de liquide ?",
   "verso": "<b>Non</b> : seule compte la <b>hauteur</b> de liquide.",
   "origine": "Cours §3 Ce qui n'intervient pas"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Débit volumique et débit massique : formules et unités ?",
   "verso": "<b>Q<sub>v</sub> = S × v</b> en m³/s.<br><b>Q<sub>m</sub> = ρ × Q<sub>v</sub></b> en kg/s.<br>1 m³/h = 2,78 × 10<sup>−4</sup> m³/s.",
   "origine": "Cours §4 Les débits"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer l'équation de continuité. Si la section diminue ?",
   "verso": "<b>S<sub>1</sub> v<sub>1</sub> = S<sub>2</sub> v<sub>2</sub></b> (le débit se conserve). Section plus petite → vitesse <b>plus grande</b>.",
   "origine": "Cours §5 L'équation de continuité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Si le diamètre d'une conduite est divisé par 2, que devient la vitesse ?",
   "verso": "Elle est <b>multipliée par 4</b> : S = π d²/4 varie comme le carré du diamètre.",
   "origine": "Cours §5 Le piège du diamètre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer le théorème de Bernoulli. Conditions ?",
   "verso": "<b>½ ρ v² + ρ g z + p = constante</b> le long d'un écoulement <b>permanent</b> de fluide <b>parfait incompressible</b>.<br>Termes de vitesse, d'altitude, de pression.",
   "origine": "Cours §6 Le théorème de Bernoulli"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Vitesse de vidange d'un bac ouvert par un orifice à l'air libre ? Dépend-elle du liquide ?",
   "verso": "<b>v = √(2 g h)</b>, <b>indépendante de ρ</b>. Le débit diminue quand h baisse : le débit initial est le maximum.",
   "origine": "Cours §7 La vidange"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quel outil pour un fluide au repos ? Pour une vitesse en écoulement ? Pour une pression en écoulement ?",
   "verso": "Au repos : <b>hydrostatique</b>.<br>Vitesse : <b>continuité</b>.<br>Pression : <b>Bernoulli</b>.",
   "origine": "Cours §8 Choisir le bon outil"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Vérin de 63 mm de diamètre sous 120 bar. Comment calculer la force ?",
   "verso": "1. S = π d²/4 = π × 0,063²/4 = 3,12 × 10<sup>−3</sup> m².<br>2. p = 120 × 10<sup>5</sup> Pa.<br>3. F = p S ≈ <b>37 kN</b>.<br>Oublier la conversion bar → Pa : facteur 100 000.",
   "origine": "Cours §2 L'erreur la plus coûteuse"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer la pression relative puis absolue sous 2,5 m d'eau ?",
   "verso": "1. p<sub>rel</sub> = ρ g h = 1000 × 9,81 × 2,5 = <b>2,45 × 10<sup>4</sup> Pa</b> (0,25 bar).<br>2. p<sub>abs</sub> = p<sub>atm</sub> + p<sub>rel</sub> = 1,013 × 10<sup>5</sup> + 2,45 × 10<sup>4</sup> = <b>1,26 × 10<sup>5</sup> Pa</b>.",
   "origine": "Cours §3 Un bassin de traitement"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment appliquer le théorème de Bernoulli ?",
   "verso": "1. <b>Choisir deux points</b> (le plus connu, celui de l'inconnue).<br>2. Écrire les <b>six termes</b>.<br>3. <b>Simplifier</b> : horizontal → ρgz disparaît ; air libre → p s'élimine ; grand bac → v ≈ 0.<br>4. Isoler l'inconnue.",
   "origine": "Cours §6 Méthode — Appliquer Bernoulli"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Débit de 3,6 m³/h dans une conduite de 25 mm puis de 12,5 mm. Comment trouver les vitesses ?",
   "verso": "1. Q<sub>v</sub> = 3,6/3600 = 1,0 × 10<sup>−3</sup> m³/s.<br>2. v<sub>1</sub> = Q<sub>v</sub>/S<sub>1</sub> avec S = π d²/4.<br>3. Diamètre ÷ 2 → <b>v<sub>2</sub> = 4 v<sub>1</sub></b>.",
   "origine": "Cours §5 L'équation de continuité"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
