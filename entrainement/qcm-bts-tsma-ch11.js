/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 11 · Oxydoréduction, piles et corrosion
   Le bilan vient de ch11_bilan.tex, les cartes des \trou{} de
   ch11_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "11",
 "titre": "Oxydoréduction, piles et corrosion",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "La charge de l'ion cuivre(II) est :",
   "choix": [
    "+",
    "2+",
    "2−",
    "3+"
   ],
   "bonne": 1,
   "expl": "Le chiffre romain donne directement la charge : cuivre(II) → Cu²⁺."
  },
  {
   "q": "Dans Cu²⁺ + … e⁻ → Cu, le nombre d'électrons est :",
   "choix": [
    "1",
    "2",
    "3",
    "0"
   ],
   "bonne": 1,
   "expl": "Le nombre d'électrons est exactement ce qu'il faut pour équilibrer les charges."
  },
  {
   "q": "Combien vaut log(10⁻²) ?",
   "choix": [
    "0,01",
    "−2",
    "2",
    "−0,2"
   ],
   "bonne": 1,
   "expl": "Le logarithme décimal d'une puissance de 10 est son exposant. Diviser par 10 retranche 1."
  },
  {
   "q": "Une droite passe par (−4 ; 0,962) et (0 ; 1,082). Sa pente vaut :",
   "choix": [
    "0,0300",
    "0,120",
    "−0,0300",
    "0,241"
   ],
   "bonne": 0,
   "expl": "(1,082 − 0,962)/(0 − (−4)) = 0,120/4. L'ordonnée à l'origine se lit directement : 1,082."
  },
  {
   "q": "Combien vaut 0,34 − (−0,76) ?",
   "choix": [
    "−0,42",
    "0,42",
    "1,10",
    "−1,10"
   ],
   "bonne": 2,
   "expl": "Soustraire un nombre négatif revient à l'ajouter. C'est le calcul d'une force électromotrice."
  },
  {
   "q": "Une intensité de 95 A circule pendant 1 h. La quantité d'électricité vaut :",
   "choix": [
    "95 C",
    "5,7×10³ C",
    "3,42×10⁵ C",
    "3,42×10³ C"
   ],
   "bonne": 2,
   "expl": "Q = IΔt avec Δt = 3600 s."
  }
 ],
 "bilan": [
  {
   "q": "Un réducteur est une espèce qui :",
   "choix": [
    "cède des électrons",
    "capte des électrons",
    "ne réagit pas"
   ],
   "bonne": 0,
   "expl": "le réducteur réduit l'autre espèce, donc il lui cède ses électrons ; l'oxydant fait l'inverse. Dans la notation d'un couple, l'oxydant est toujours écrit en premier : c'est une convention, mais elle évite bien des confusions en évaluation. 3pt"
  },
  {
   "q": "Dans le couple Cu^2+/Cu, l'oxydant est :",
   "choix": [
    "les deux",
    "Cu",
    "Cu^2+"
   ],
   "bonne": 2,
   "expl": "le réducteur réduit l'autre espèce, donc il lui cède ses électrons ; l'oxydant fait l'inverse. Dans la notation d'un couple, l'oxydant est toujours écrit en premier : c'est une convention, mais elle évite bien des confusions en évaluation. 3pt"
  },
  {
   "q": "L'équation bilan correcte entre Ag+ et Cu est :",
   "choix": [
    "Ag+ + Cu -> Ag + Cu^2+",
    "2 Ag+ + Cu -> 2 Ag + Cu^2+",
    "Ag+ + Cu + e⁻ -> Ag + Cu^2+"
   ],
   "bonne": 1,
   "expl": "l'argent n'échange qu'un électron, le cuivre deux : il faut donc deux ions argent pour un atome de cuivre. La réponse « Ag+ + Cu -> Ag + Cu^2+ » ne s'équilibre pas en charges, la réponse « Ag+ + Cu + e⁻ -> Ag + Cu^2+ » laisse un électron dans le bilan — une équation bilan n'en contient jamais. 3pt"
  },
  {
   "q": "Parmi ces quatre métaux, le meilleur réducteur est :",
   "choix": [
    "l'argent",
    "le cuivre",
    "le zinc"
   ],
   "bonne": 2,
   "expl": "le zinc a le potentiel le plus bas (-0,76), c'est donc le meilleur réducteur. Et pour la question 5, il faudrait que Zn^2+ oxyde le cuivre : la règle du gamma s'écrirait à l'envers, donc il ne se passe rien. Un godet où rien n'apparaît est une information, pas un échec de manipulation. 3pt"
  },
  {
   "q": "On plonge une lame de cuivre dans une solution de sulfate de zinc. Il se produit :",
   "choix": [
    "rien du tout",
    "un dépôt de cuivre",
    "un dépôt de zinc"
   ],
   "bonne": 0,
   "expl": "le zinc a le potentiel le plus bas (-0,76), c'est donc le meilleur réducteur. Et pour la question 5, il faudrait que Zn^2+ oxyde le cuivre : la règle du gamma s'écrirait à l'envers, donc il ne se passe rien. Un godet où rien n'apparaît est une information, pas un échec de manipulation. 3pt"
  },
  {
   "q": "Dans une pile, l'anode est le siège :",
   "choix": [
    "de la réduction, et c'est le pôle -",
    "de l'oxydation, et c'est le pôle -",
    "de l'oxydation, et c'est le pôle +"
   ],
   "bonne": 1,
   "expl": "l'anode est par définition le siège de l'oxydation, et dans une pile c'est le pôle négatif puisque les électrons en partent. La f.é.m. vaut 0,34 - (-0,76) = 1,10 V : la réponse « de la réduction, et c'est le pôle - » vient d'une soustraction dans le mauvais sens, la réponse « de l'oxydation, et c'est le pôle + » d'un oubli du double signe. Une f.é.m. de pile est toujours positive — si le calcul donne un nombre négatif, les électrodes ont été interverties. 3pt"
  },
  {
   "q": "La f.é.m. standard de la pile Zn/Cu vaut :",
   "choix": [
    "0,42 V",
    "-1,10 V",
    "1,10 V"
   ],
   "bonne": 2,
   "expl": "l'anode est par définition le siège de l'oxydation, et dans une pile c'est le pôle négatif puisque les électrons en partent. La f.é.m. vaut 0,34 - (-0,76) = 1,10 V : la réponse « 0,42 V » vient d'une soustraction dans le mauvais sens, la réponse « 1,10 V » d'un oubli du double signe. Une f.é.m. de pile est toujours positive — si le calcul donne un nombre négatif, les électrodes ont été interverties. 3pt"
  },
  {
   "q": "Le pont salin sert à :",
   "choix": [
    "fermer le circuit et maintenir la neutralité des solutions",
    "faire circuler les électrons d'un bécher à l'autre",
    "mélanger lentement les deux solutions"
   ],
   "bonne": 0,
   "expl": "le pont salin laisse passer les ions, jamais les électrons : ceux-ci passent exclusivement par le fil, et c'est bien pour cela qu'on obtient un courant utilisable. Sans pont salin, un déséquilibre de charge apparaît en une fraction de seconde et la pile cesse de débiter. 3pt"
  },
  {
   "q": "On divise par 10 la concentration en oxydant d'une pile où n = 2. La f.é.m. :",
   "choix": [
    "augmente de 30 mV",
    "diminue de 30 mV",
    "ne change pas"
   ],
   "bonne": 1,
   "expl": "chaque dilution au dixième retranche 0,059/n, soit 30 mV pour n = 2 : c'est la pente de la droite, et c'est elle qui teste la loi de Nernst. L'ordonnée à l'origine, elle, est déplacée par tout ce qui s'ajoute au montage — tension de jonction, électrode mal décapée. Deux paramètres, deux questions différentes, et c'est tout l'objet du CCF. 3pt"
  },
  {
   "q": "Sur le graphique E = f(log c), l'ordonnée à l'origine renseigne surtout sur :",
   "choix": [
    "la validité de la loi de Nernst",
    "le montage utilisé",
    "le nombre d'électrons échangés"
   ],
   "bonne": 1,
   "expl": "chaque dilution au dixième retranche 0,059/n, soit 30 mV pour n = 2 : c'est la pente de la droite, et c'est elle qui teste la loi de Nernst. L'ordonnée à l'origine, elle, est déplacée par tout ce qui s'ajoute au montage — tension de jonction, électrode mal décapée. Deux paramètres, deux questions différentes, et c'est tout l'objet du CCF. 3pt"
  },
  {
   "q": "La différence entre une pile et un accumulateur est que :",
   "choix": [
    "l'accumulateur délivre une tension plus élevée",
    "l'accumulateur ne contient pas d'électrolyte",
    "la transformation de l'accumulateur est réversible"
   ],
   "bonne": 2,
   "expl": "la tension d'un accumulateur au plomb n'a rien d'exceptionnel, et il contient bien un électrolyte. Ce qui le distingue, c'est que la transformation s'inverse sous un courant imposé : c'est la charge. 3pt"
  },
  {
   "q": "On boulonne un bloc de cuivre sur un châssis en acier, en milieu humide. Alors :",
   "choix": [
    "l'acier se corrode plus vite",
    "l'acier est protégé",
    "rien ne change"
   ],
   "bonne": 0,
   "expl": "et c'est la question la plus utile de la feuille. Le cuivre est moins réducteur que le fer : l'acier devient donc l'anode et se corrode plus vite qu'en l'absence de tout bloc. Le métal à choisir n'est pas celui qui résiste le mieux, c'est celui que l'on accepte de sacrifier — et c'est pourquoi on met du zinc. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir un oxydant et un réducteur. Qui se réduit, qui s'oxyde ?",
   "verso": "<b>Oxydant</b> : capte des électrons, il <b>se réduit</b>.<br><b>Réducteur</b> : cède des électrons, il <b>s'oxyde</b>.",
   "origine": "Cours §1.1 Oxydant et réducteur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Une oxydation peut-elle se produire seule ? Que contient une équation bilan ?",
   "verso": "<b>Non</b> : toujours une réduction en face. L'équation bilan ne contient <b>plus aucun électron</b>.",
   "origine": "Cours §1.1 Les électrons ne se promènent jamais seuls"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment note-t-on un couple oxydant/réducteur ? Exemple de demi-équation.",
   "verso": "<b>ox/réd</b>, l'oxydant en premier.<br>Cu<sup>2+</sup> + 2 e<sup>−</sup> ⇌ Cu.",
   "origine": "Cours §1.2 Couple"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que mesure le potentiel standard E° ?",
   "verso": "Il classe les couples : E° <b>grand</b> → oxydant <b>fort</b> ; E° <b>petit</b> → réducteur <b>fort</b> (métal qui se corrode).",
   "origine": "Cours §3.1 Potentiel standard"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer la règle du gamma.",
   "verso": "La réaction spontanée met en présence l'<b>oxydant du couple le plus haut</b> et le <b>réducteur du couple le plus bas</b>. Dans l'autre sens : rien.",
   "origine": "Cours §3.2 Règle du gamma"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans une pile : anode et cathode, quelle réaction, quel pôle ?",
   "verso": "<b>Anode</b> : <b>oxydation</b>, pôle <b>−</b> (les électrons en partent).<br><b>Cathode</b> : <b>réduction</b>, pôle <b>+</b>.",
   "origine": "Cours §4.1 Anode et cathode"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>F.é.m. standard d'une pile ? Signe ?",
   "verso": "<b>E°<sub>pile</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub></b>, toujours <b>positive</b> (sinon électrodes inversées).",
   "origine": "Cours §4.1 Force électromotrice"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rôle du pont salin ?",
   "verso": "Il <b>ferme le circuit</b> par les ions et maintient la <b>neutralité électrique</b>. Sans lui, le courant s'arrête.",
   "origine": "Cours §4.1 Le pont salin"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer la loi de Nernst.",
   "verso": "<b>E = E° + (0,059 / n) log([ox]/[réd])</b>, n électrons échangés. [ox] ÷ 10 → E baisse de 0,059/n V.",
   "origine": "Cours §4.2 Loi de Nernst"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Différence entre pile, accumulateur et pile à combustible ?",
   "verso": "<b>Pile</b> : réactifs enfermés, non réversible.<br><b>Accumulateur</b> : réversible, se recharge (batterie au plomb).<br><b>Pile à combustible</b> : réactifs apportés en continu (H<sub>2</sub>, seul rejet : l'eau).",
   "origine": "Cours §5 Pile, accumulateur, pile à combustible"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Deux métaux en contact en milieu humide : lequel se corrode ? Principe de l'anode sacrificielle ?",
   "verso": "Le <b>plus réducteur</b> (E° le plus petit). On accole à l'acier un métal <b>encore plus réducteur</b> (zinc) qui est <b>consommé à sa place</b>.",
   "origine": "Cours §6.1 Anode sacrificielle"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Citer des méthodes de protection contre la corrosion.",
   "verso": "<b>Peinture</b>, <b>galvanisation</b>, <b>chromage</b>, <b>anodisation</b>, <b>anode sacrificielle</b>, <b>courant imposé</b>.",
   "origine": "Cours §6.2 Méthodes de protection"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment passer de deux couples à l'équation bilan d'oxydoréduction ?",
   "verso": "1. Deux demi-équations équilibrées en charges.<br>2. Repérer le sens : réduction / oxydation.<br>3. <b>Multiplier</b> pour égaliser les électrons.<br>4. Additionner, vérifier : <b>aucun électron</b>, charges équilibrées.",
   "origine": "Cours §2 Méthode — Équation bilan"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Ag<sup>+</sup>/Ag (1 e<sup>−</sup>) et Cu<sup>2+</sup>/Cu (2 e<sup>−</sup>) : comment écrire le bilan ?",
   "verso": "1. Ag<sup>+</sup> + e<sup>−</sup> → Ag (× 2) ; Cu → Cu<sup>2+</sup> + 2 e<sup>−</sup>.<br>2. <b>2 Ag<sup>+</sup> + Cu → 2 Ag + Cu<sup>2+</sup></b>.<br>3. Vérifier les charges : +2 = +2.",
   "origine": "Cours §2 L'erreur qui coûte le plus"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment vérifier expérimentalement la loi de Nernst ?",
   "verso": "1. Ne faire varier <b>qu'une</b> concentration.<br>2. Tracer <b>E = f(log c)</b> : une droite.<br>3. <b>Pente</b> comparée à 0,059/n (teste le modèle).<br>4. <b>Ordonnée à l'origine</b> comparée à E° (teste le montage).",
   "origine": "Cours §4.2 Méthode — Vérifier la loi de Nernst"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Raccord en cuivre sur un tuyau en acier en milieu humide : comment prévoir quel métal est attaqué ?",
   "verso": "1. Placer les couples : Cu<sup>2+</sup>/Cu au-dessus de Fe<sup>2+</sup>/Fe.<br>2. Gamma : oxydant du haut (Cu<sup>2+</sup>) + réducteur du bas (<b>Fe</b>).<br>3. C'est l'<b>acier qui est attaqué</b>.",
   "origine": "Cours §3.2 Un raccord mal choisi"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
