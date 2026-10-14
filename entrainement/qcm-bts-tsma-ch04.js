/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 04 · Dynamique des fluides
   Le bilan vient de ch04_bilan.tex, les cartes des \trou{} de
   ch04_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "4",
 "titre": "Dynamique des fluides",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Un débit de 60 L/min vaut, en m³/s :",
   "choix": [
    "1,0×10⁻³",
    "6,0×10⁻²",
    "1,0×10⁻²",
    "3,6"
   ],
   "bonne": 0,
   "expl": "60/60 000 = 1,0×10⁻³ m³/s."
  },
  {
   "q": "Si le diamètre d'une conduite est divisé par 2, la section est divisée par :",
   "choix": [
    "2",
    "4",
    "8",
    "√2"
   ],
   "bonne": 1,
   "expl": "La section varie comme le CARRÉ du diamètre. C'est le résultat le plus utile du chapitre."
  },
  {
   "q": "L'aire d'un disque de diamètre 25 mm vaut, en m² :",
   "choix": [
    "4,91×10⁻⁴",
    "1,96×10⁻³",
    "4,91×10⁻²",
    "6,25×10⁻⁴"
   ],
   "bonne": 0,
   "expl": "S = π × 0,025²/4 = 4,91×10⁻⁴ m²."
  },
  {
   "q": "Dans S₁v₁ = S₂v₂, la vitesse v₂ s'écrit :",
   "choix": [
    "v₂ = S₂/(S₁v₁)",
    "v₂ = S₁v₁/S₂",
    "v₂ = S₂v₁/S₁",
    "v₂ = v₁ − S₁/S₂"
   ],
   "bonne": 1,
   "expl": "L'équation de conservation se réarrange comme une proportion : ce qui est en face passe au dénominateur."
  },
  {
   "q": "Une grandeur y est proportionnelle à x². Si x augmente de 10 %, y augmente de :",
   "choix": [
    "10 %",
    "20 %",
    "21 %",
    "100 %"
   ],
   "bonne": 2,
   "expl": "1,10² = 1,21. Un carré n'ajoute pas deux fois le pourcentage : il le compose."
  },
  {
   "q": "Combien vaut 2,04² − 0,80² ?",
   "choix": [
    "1,24",
    "1,54",
    "3,52",
    "1,54²"
   ],
   "bonne": 2,
   "expl": "4,16 − 0,64 = 3,52. Ne jamais écrire (2,04 − 0,80)² : le carré d'une différence n'est pas la différence des carrés."
  }
 ],
 "bilan": [
  {
   "q": "Le débit volumique s'exprime, dans le Système international, en :",
   "choix": [
    "m³/s",
    "L/min",
    "kg/s"
   ],
   "bonne": 0,
   "expl": "le débitmètre affiche des L/min, le calcul exige des m³/s : diviser par 60000. La réponse « m³/s » de la question 2 correspond à un oubli du facteur 60. 3pt"
  },
  {
   "q": "60 L/min valent :",
   "choix": [
    "60×10⁻³ m³/s",
    "1,0×10⁻³ m³/s",
    "1,0 m³/s"
   ],
   "bonne": 1,
   "expl": "le débitmètre affiche des L/min, le calcul exige des m³/s : diviser par 60000. La réponse « 60×10⁻³ m³/s » de la question 2 correspond à un oubli du facteur 60. 3pt"
  },
  {
   "q": "Le débit massique se calcule par :",
   "choix": [
    "Q_m = Q_v / ρ",
    "Q_m = ρ/ Q_v",
    "Q_m = ρQ_v"
   ],
   "bonne": 2,
   "expl": "Q_m = ρQ_v : une masse volumique multipliée par un volume par seconde donne bien des kg/s. Vérifier par les unités en cas de doute. 3pt"
  },
  {
   "q": "L'équation de continuité traduit la conservation :",
   "choix": [
    "de l'énergie",
    "de la masse",
    "de la pression"
   ],
   "bonne": 1,
   "expl": "la continuité découle de la conservation de la masse (rien ne s'accumule), pas de l'énergie : c'est Bernoulli qui traduit l'énergie. Et comme S D², diviser le diamètre par deux divise la section par quatre, donc multiplie la vitesse par quatre. 3pt"
  },
  {
   "q": "Une conduite passe de 40 mm à 20 mm de diamètre. La vitesse est multipliée par :",
   "choix": [
    "2",
    "16",
    "4"
   ],
   "bonne": 2,
   "expl": "la continuité découle de la conservation de la masse (rien ne s'accumule), pas de l'énergie : c'est Bernoulli qui traduit l'énergie. Et comme S D², diviser le diamètre par deux divise la section par quatre, donc multiplie la vitesse par quatre. 3pt"
  },
  {
   "q": "Dans le théorème de Bernoulli, le terme 1/2ρv² représente :",
   "choix": [
    "la pression dynamique",
    "la pression statique",
    "la pression de pesanteur"
   ],
   "bonne": 0,
   "expl": "les trois termes de Bernoulli sont la pression statique p, la pression dynamique 1/2ρv² et la pression de pesanteur ρg z. Les hypothèses ne sont pas décoratives : « parfait » veut dire sans viscosité, donc sans pertes de charge. Dans un circuit horizontal, z₁ = z₂ et les termes ρg z s'éliminent de part et d'autre. 3pt"
  },
  {
   "q": "Le théorème de Bernoulli suppose que le fluide est :",
   "choix": [
    "visqueux et compressible",
    "parfait, incompressible, en écoulement permanent",
    "au repos"
   ],
   "bonne": 1,
   "expl": "les trois termes de Bernoulli sont la pression statique p, la pression dynamique 1/2ρv² et la pression de pesanteur ρg z. Les hypothèses ne sont pas décoratives : « parfait » veut dire sans viscosité, donc sans pertes de charge. Dans un circuit horizontal, z₁ = z₂ et les termes ρg z s'éliminent de part et d'autre. 3pt"
  },
  {
   "q": "Dans un circuit horizontal, quel terme de Bernoulli disparaît ?",
   "choix": [
    "ρg z",
    "1/2ρv²",
    "p"
   ],
   "bonne": 0,
   "expl": "les trois termes de Bernoulli sont la pression statique p, la pression dynamique 1/2ρv² et la pression de pesanteur ρg z. Les hypothèses ne sont pas décoratives : « parfait » veut dire sans viscosité, donc sans pertes de charge. Dans un circuit horizontal, z₁ = z₂ et les termes ρg z s'éliminent de part et d'autre. 3pt"
  },
  {
   "q": "Au col d'un venturi, par rapport à l'amont :",
   "choix": [
    "la vitesse diminue et la pression augmente",
    "la vitesse et la pression augmentent",
    "la vitesse augmente et la pression diminue"
   ],
   "bonne": 2,
   "expl": "c'est l'effet Venturi. La continuité impose l'accélération ; la conservation de la somme impose alors la chute de pression statique. C'est aussi ce qui peut faire caviter une pompe dont la conduite d'aspiration est trop étroite. 3pt"
  },
  {
   "q": "La vitesse de sortie par l'orifice d'une cuve ouverte, situé à la profondeur h, vaut :",
   "choix": [
    "√(2gh)",
    "2gh",
    "ρg h"
   ],
   "bonne": 0,
   "expl": "v = √(2gh), indépendante de la masse volumique : de l'eau et du gazole sortent à la même vitesse sous la même hauteur. La réponse « ρg h » est une pression, pas une vitesse — le contrôle des unités suffit à l'écarter. 3pt"
  },
  {
   "q": "Dans un circuit de relevage à 185 bar avec 1,4 m de dénivelé, le terme ρg z représente :",
   "choix": [
    "environ 50 % du total",
    "moins de 0,1 % du total",
    "environ 6 % du total"
   ],
   "bonne": 1,
   "expl": "870×9,81×1,4 = 1,19×10⁴ Pa face à 1,85×10⁷ Pa, soit 0,064 %. En haute pression, le dénivelé et la vitesse ne comptent pas ; ils redeviennent déterminants en aspiration et sur les cuves. 3pt"
  },
  {
   "q": "Comparé au débit réel, un venturi exploité par la formule du fluide parfait donne un débit :",
   "choix": [
    "très largement sous-estimé",
    "exact",
    "légèrement surestimé"
   ],
   "bonne": 2,
   "expl": "la formule ignore la viscosité et la contraction du jet au col. Le venturi annonce donc un peu plus que la réalité, typiquement 25. On corrige par un coefficient de débit C_d voisin de 0,95, obtenu en comparant à un empotage. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir le débit volumique et le débit massique. Formules et unités ?",
   "verso": "<b>Q<sub>v</sub> = V / t = S × v</b> (m³/s) : volume traversant une section par seconde.<br><b>Q<sub>m</sub> = ρ × Q<sub>v</sub></b> (kg/s).",
   "origine": "Cours §1.1 Débits"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment convertir des L/min en m³/s ? Section d'une conduite de diamètre D ?",
   "verso": "L/min → m³/s : <b>÷ 60 000</b>.<br><b>S = π D² / 4</b>, D converti en m <b>avant</b> d'élever au carré.",
   "origine": "Cours §1.1 Les deux conversions"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer l'équation de continuité.",
   "verso": "En écoulement permanent incompressible, le débit est le même dans toute section : <b>Q<sub>v</sub> = S<sub>1</sub> v<sub>1</sub> = S<sub>2</sub> v<sub>2</sub></b>.",
   "origine": "Cours §2.1 Équation de continuité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Où le fluide accélère-t-il ? Si le diamètre est divisé par 2 ?",
   "verso": "Il <b>accélère dans les rétrécissements</b>, ralentit dans les élargissements. Diamètre ÷ 2 → vitesse <b>× 4</b>.",
   "origine": "Cours §2.1 La conséquence à retenir"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer le théorème de Bernoulli et ses conditions.",
   "verso": "<b>p + ½ ρ v² + ρ g z = constante</b> le long d'une ligne de courant, pour un fluide <b>parfait</b> (sans viscosité), <b>incompressible</b>, en écoulement <b>permanent</b>.",
   "origine": "Cours §3.1 Théorème de Bernoulli"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Nommer les trois termes de Bernoulli.",
   "verso": "<b>p</b> : pression statique (manomètre) ; <b>½ρv²</b> : pression dynamique ; <b>ρgz</b> : pression de pesanteur. Tous en Pa.",
   "origine": "Cours §3.1 Les trois termes"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que l'effet Venturi ? Relation en circuit horizontal ?",
   "verso": "Là où le fluide va <b>plus vite</b>, la pression statique est <b>plus faible</b>.<br><b>p<sub>1</sub> − p<sub>2</sub> = ½ ρ (v<sub>2</sub>² − v<sub>1</sub>²)</b>.",
   "origine": "Cours §3.3 L'effet Venturi"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Vitesse de vidange par un orifice à une profondeur h ?",
   "verso": "<b>v = √(2 g h)</b>, indépendante du liquide. Le débit diminue quand le niveau baisse.",
   "origine": "Cours §3.4 Vidange d'un réservoir"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Bernoulli généralisé : où placer le terme de la pompe et celui des pertes ?",
   "verso": "Δp<sub>pompe</sub> <b>du côté où se trouve la pompe</b> ; Δp<sub>pertes</sub> <b>du côté de l'arrivée</b>.",
   "origine": "Cours §4 Bernoulli en circuit réel"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans un circuit haute pression (185 bar), quels termes de Bernoulli sont négligeables ?",
   "verso": "Les termes <b>dynamique</b> et de <b>pesanteur</b> (&lt; 0,1 %). Ils comptent seulement en basse pression (aspiration, cuves, irrigation).",
   "origine": "Cours §4 Haute pression"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>60 L/min dans une conduite de 40 mm puis 25 mm. Comment trouver les deux vitesses ?",
   "verso": "1. Q<sub>v</sub> = 60/60 000 = <b>1,0 × 10<sup>−3</sup> m³/s</b>.<br>2. S<sub>1</sub> = π × 0,040²/4 = 1,257 × 10<sup>−3</sup> m² → v<sub>1</sub> = <b>0,80 m/s</b>.<br>3. S<sub>2</sub> = 4,91 × 10<sup>−4</sup> m² → v<sub>2</sub> = <b>2,04 m/s</b>.",
   "origine": "Cours §2.1 Circuit de refroidissement"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment appliquer Bernoulli entre deux points ?",
   "verso": "1. Deux points <b>sur la même ligne de courant</b>, les plus connus.<br>2. Fixer <b>z = 0</b> (souvent le plus bas).<br>3. Écrire l'égalité, <b>barrer</b> : horizontal (z égaux), grand réservoir (v ≈ 0), air libre (p = 0 relatif).<br>4. Isoler, vérifier l'unité.",
   "origine": "Cours §3.2 Méthode — Appliquer Bernoulli"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Orifice de 15 mm à 1,80 m sous la surface. Comment trouver la vitesse et le débit de sortie ?",
   "verso": "1. v = √(2 × 9,81 × 1,80) = <b>5,94 m/s</b>.<br>2. S = π × 0,015²/4 = 1,77 × 10<sup>−4</sup> m².<br>3. Q<sub>v</sub> = S v ≈ <b>63 L/min</b> (au début seulement).",
   "origine": "Cours §3.4 Une cuve de gazole"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
