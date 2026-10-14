/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 17 · Distribution électrique et sécurité
   Le bilan vient de ch17_bilan.tex, les cartes des \trou{} de
   ch17_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "17",
 "titre": "Distribution électrique et sécurité",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Une tension composée de 400 V correspond à une tension simple de :",
   "choix": [
    "231 V",
    "400 V",
    "693 V",
    "200 V"
   ],
   "bonne": 0,
   "expl": "400/√3 = 231 V. Les deux opérations, × √3 et / √3, sont inverses l'une de l'autre."
  },
  {
   "q": "Un facteur de puissance cos φ = 0,74 correspond à un angle de :",
   "choix": [
    "21,6°",
    "42,3°",
    "47,7°",
    "74°"
   ],
   "bonne": 1,
   "expl": "φ = arccos 0,74 = 42,3°, dont la tangente vaut 0,909."
  },
  {
   "q": "Combien vaut √3 × 400 × 4,20 ?",
   "choix": [
    "1680",
    "2910",
    "970",
    "2400"
   ],
   "bonne": 1,
   "expl": "C'est la puissance apparente d'un récepteur triphasé, en voltampères."
  },
  {
   "q": "Combien vaut 2150/2903 ?",
   "choix": [
    "0,741",
    "1,35",
    "0,935",
    "0,241"
   ],
   "bonne": 0,
   "expl": "C'est un facteur de puissance : le rapport de la puissance active à la puissance apparente."
  },
  {
   "q": "Combien vaut 1100/(3 × 314 × 400²), exprimé en microfarads ?",
   "choix": [
    "0,73 µF",
    "7,3 µF",
    "73 µF",
    "7,3×10⁻⁶ µF"
   ],
   "bonne": 1,
   "expl": "1100/1,508×10⁸ = 7,3×10⁻⁶ F. C'est le calcul d'une batterie de condensateurs."
  },
  {
   "q": "Deux incertitudes relatives de 0,5 % et 1,5 % donnent une incertitude élargie de :",
   "choix": [
    "2,0 %",
    "3,2 %",
    "1,6 %",
    "4,0 %"
   ],
   "bonne": 1,
   "expl": "√(0,5² + 1,5²) = 1,58 %, donc U = 2u = 3,2 %. Le terme le plus grand domine."
  }
 ],
 "bilan": [
  {
   "q": "La tension composée se mesure :",
   "choix": [
    "entre une phase et le neutre",
    "entre deux phases",
    "entre le neutre et la terre"
   ],
   "bonne": 1,
   "expl": "la composée se mesure entre deux phases, et U = √3 × 230 = 400 V. La réponse « entre deux phases » de la question 2 vient d'une division au lieu d'une multiplication : contrôler que la composée est toujours la plus grande des deux suffit à écarter l'erreur. 3pt"
  },
  {
   "q": "Sur un réseau où V = 230 V, la tension composée vaut :",
   "choix": [
    "400 V",
    "133 V",
    "690 V"
   ],
   "bonne": 0,
   "expl": "la composée se mesure entre deux phases, et U = √3 × 230 = 400 V. La réponse « 133 V » de la question 2 vient d'une division au lieu d'une multiplication : contrôler que la composée est toujours la plus grande des deux suffit à écarter l'erreur. 3pt"
  },
  {
   "q": "En couplage étoile, chaque récepteur est soumis à :",
   "choix": [
    "la moitié de la tension composée",
    "la tension composée",
    "la tension simple"
   ],
   "bonne": 2,
   "expl": "en étoile, chaque récepteur voit la tension simple. Un moteur 230 /400 V a des enroulements prévus pour 230 V : sur un réseau 400 V entre phases, seul le couplage étoile leur donne les 231 V attendus. Le coupler en triangle triple la puissance appelée et le détruit en quelques minutes. 3pt"
  },
  {
   "q": "Un moteur 230 /400 V est branché sur un réseau 400 V entre phases. Il faut le coupler en :",
   "choix": [
    "étoile",
    "triangle",
    "peu importe"
   ],
   "bonne": 0,
   "expl": "en étoile, chaque récepteur voit la tension simple. Un moteur 230 /400 V a des enroulements prévus pour 230 V : sur un réseau 400 V entre phases, seul le couplage étoile leur donne les 231 V attendus. Le coupler en triangle triple la puissance appelée et le détruit en quelques minutes. 3pt"
  },
  {
   "q": "En triphasé équilibré, la puissance apparente vaut :",
   "choix": [
    "S = U I",
    "S = √3 U I",
    "S = 3 U I"
   ],
   "bonne": 1,
   "expl": "S = √3 U I en triphasé équilibré. Et le disjoncteur ne connaît que le courant : c'est donc la puissance apparente qu'il voit. On paie P, on dimensionne sur S — toute la question du facteur de puissance tient dans cet écart. 3pt"
  },
  {
   "q": "La puissance que « voit » le disjoncteur est :",
   "choix": [
    "la puissance active",
    "la puissance réactive",
    "la puissance apparente"
   ],
   "bonne": 2,
   "expl": "S = √3 U I en triphasé équilibré. Et le disjoncteur ne connaît que le courant : c'est donc la puissance apparente qu'il voit. On paie P, on dimensionne sur S — toute la question du facteur de puissance tient dans cet écart. 3pt"
  },
  {
   "q": "On relève le facteur de puissance d'une installation de 0,74 à 0,93. La puissance active :",
   "choix": [
    "ne change pas",
    "diminue",
    "augmente"
   ],
   "bonne": 0,
   "expl": "et c'est le cœur du chapitre. Relever le facteur de puissance ne change rien à la puissance active : le moteur fournit le même travail et la facture d'énergie active ne bouge pas. Ce qui baisse, c'est le courant — et comme les pertes varient en I², une baisse de 20 % du courant en fait une de 36 % sur les pertes. Le bénéfice est réel, mais il n'est pas là où on l'attend. 3pt"
  },
  {
   "q": "Ce relèvement fait baisser le courant de ligne de 20 %. Les pertes en ligne baissent alors de :",
   "choix": [
    "20 %",
    "36 %",
    "40 %"
   ],
   "bonne": 1,
   "expl": "et c'est le cœur du chapitre. Relever le facteur de puissance ne change rien à la puissance active : le moteur fournit le même travail et la facture d'énergie active ne bouge pas. Ce qui baisse, c'est le courant — et comme les pertes varient en I², une baisse de 20 % du courant en fait une de 36 % sur les pertes. Le bénéfice est réel, mais il n'est pas là où on l'attend. 3pt"
  },
  {
   "q": "Ce qui rend un contact électrique mortel, c'est :",
   "choix": [
    "la tension",
    "la puissance de l'installation",
    "le courant qui traverse le corps"
   ],
   "bonne": 2,
   "expl": "ce n'est pas la tension qui tue, c'est le courant, et quelques dizaines de milliampères suffisent. C'est précisément pourquoi la « basse tension » est le domaine le plus meurtrier : elle est partout, et on s'en méfie moins. 3pt"
  },
  {
   "q": "Un dispositif différentiel déclenche quand :",
   "choix": [
    "le courant aller et le courant retour diffèrent",
    "le courant dépasse son calibre",
    "la tension chute"
   ],
   "bonne": 0,
   "expl": "le différentiel ne mesure aucune intensité en valeur absolue : il compare l'aller et le retour, et coupe si du courant s'échappe. Le disjoncteur, lui, coupe sur surintensité et protège les câbles, donc les biens. Les deux ne se remplacent pas, et sans prise de terre le différentiel ne voit presque rien. 3pt"
  },
  {
   "q": "Le disjoncteur protège avant tout :",
   "choix": [
    "les personnes",
    "le fournisseur d'électricité",
    "les biens"
   ],
   "bonne": 2,
   "expl": "le différentiel ne mesure aucune intensité en valeur absolue : il compare l'aller et le retour, et coupe si du courant s'échappe. Le disjoncteur, lui, coupe sur surintensité et protège les câbles, donc les biens. Les deux ne se remplacent pas, et sans prise de terre le différentiel ne voit presque rien. 3pt"
  },
  {
   "q": "Dans la consignation, la vérification d'absence de tension :",
   "choix": [
    "peut se faire au début, avant de condamner",
    "se fait sur place, juste avant de toucher",
    "est facultative si l'on a cadenassé"
   ],
   "bonne": 1,
   "expl": "et c'est la question la plus importante de la feuille. La vérification d'absence de tension est la dernière étape, elle se fait sur place, juste avant de toucher. Une vérification faite cinq minutes plus tôt ne prouve rien : entre-temps, quelqu'un a pu réalimenter. C'est le seul chapitre de l'année où une erreur de méthode ne se rattrape pas. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Tension simple et tension composée : entre quels conducteurs ? Relation ? Valeurs en France ?",
   "verso": "<b>V</b> : phase-neutre ; <b>U</b> : entre deux phases.<br><b>U = √3 V</b> : 230 V et 400 V.",
   "origine": "Cours §1 Le réseau triphasé"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelle tension voit chaque récepteur en étoile ? en triangle ?",
   "verso": "<b>Étoile</b> : la tension simple <b>V</b>.<br><b>Triangle</b> : la tension composée <b>U</b> (√3 fois plus).",
   "origine": "Cours §2 Étoile ou triangle"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que signifie une plaque moteur 230/400 V ?",
   "verso": "<b>Triangle sous 230 V</b> entre phases, <b>étoile sous 400 V</b>. Une erreur triple la puissance ou laisse le moteur sans force : vérifier <b>avant</b> la mise sous tension.",
   "origine": "Cours §2 Lire la plaque"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissances active, réactive, apparente : unités, rôles, formules ?",
   "verso": "<b>P</b> (W) : travaille, payée. <b>Q</b> (var) : allers-retours. <b>S</b> (VA) : vue par câbles et disjoncteur.<br><b>S = √3 U I</b> ; P = S cos φ ; Q = S sin φ.",
   "origine": "Cours §3 Les trois puissances"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que représente cos φ ? Valeurs typiques ?",
   "verso": "<b>cos φ = P/S</b> : fraction du courant qui travaille. Radiateur : <b>1</b> ; moteur asynchrone en charge : ≈ <b>0,75</b>, bien moins à vide.",
   "origine": "Cours §3 Facteur de puissance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi un mauvais facteur de puissance coûte-t-il cher ?",
   "verso": "On <b>paie P</b>, mais disjoncteur, câbles et échauffement dépendent du courant donc de <b>S</b> : il coûte en <b>installation</b>.",
   "origine": "Cours §3 On paie P, on dimensionne sur S"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qui est dangereux, la tension ou le courant ? Ordre des effets ?",
   "verso": "Le <b>courant</b> (quelques dizaines de mA suffisent).<br>Perception → contraction → <b>tétanisation</b> → <b>fibrillation cardiaque</b>.",
   "origine": "Cours §5 Le courant et le corps humain"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que compare un dispositif différentiel ? Calibre usuel ?",
   "verso": "Le <b>courant aller et le courant retour</b>. Si la différence dépasse <b>30 mA</b>, du courant s'échappe vers la terre : il coupe.",
   "origine": "Cours §6.1 Le différentiel"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rôles du disjoncteur, du différentiel et de la mise à la terre ?",
   "verso": "<b>Disjoncteur</b> : protège les <b>biens</b> (surintensité, incendie).<br><b>Différentiel</b> : protège les <b>personnes</b>.<br><b>Terre</b> : chemin du courant de défaut, <b>pour que le différentiel le voie</b>.",
   "origine": "Cours §6.2 Trois appareils, trois rôles"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelles sont les étapes de la consignation, dans l'ordre ?",
   "verso": "<b>Séparer</b>, <b>condamner</b>, <b>identifier</b>, <b>vérifier</b> l'absence de tension (VAT, sur place, juste avant de toucher).",
   "origine": "Cours §6.3 Consignation"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment dimensionner une batterie de condensateurs pour relever cos φ ?",
   "verso": "1. <b>Q<sub>1</sub> = P tan φ<sub>1</sub></b> (actuel).<br>2. <b>Q<sub>2</sub> = P tan φ<sub>2</sub></b> (visé).<br>3. <b>Q<sub>C</sub> = Q<sub>1</sub> − Q<sub>2</sub></b>.<br>4. Triangle : <b>C = Q<sub>C</sub> / (3 ω U²)</b>.<br>5. Contrôler : P inchangée.",
   "origine": "Cours §4 Méthode — Batterie de condensateurs"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Moteur : P = 7,5 kW, cos φ = 0,75, réseau 400 V. Comment trouver S et I ?",
   "verso": "1. S = P / cos φ = 7500/0,75 = <b>10 000 VA</b>.<br>2. I = S / (√3 U) = 10 000/693 ≈ <b>14,4 A</b>.",
   "origine": "Cours §3 Les trois puissances"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Moteur 230/400 V à brancher sur un réseau 230/400 V : quel couplage ?",
   "verso": "1. Enroulement = <b>230 V</b>.<br>2. Réseau : U = 400 V entre phases.<br>3. L'enroulement doit voir 230 V = V → <b>étoile</b>.",
   "origine": "Cours §2 Lire la plaque"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
