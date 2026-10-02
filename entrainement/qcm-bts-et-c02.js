/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · Cours 2 — Électromagnétisme
   Le bilan vient de c02_bilan.tex, les cartes des \trou{} de
   c02_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "2",
 "cle": "c02",
 "etiquette": "Cours 2",
 "titre": "Électromagnétisme",
 "niveau": "BTS ET",
 "prerequis": [
  {
   "q": "Combien vaut cos 60° ?",
   "choix": [
    "0,500",
    "0,866",
    "0,577",
    "0,600"
   ],
   "bonne": 0,
   "expl": "0,500 exactement, en mode DEGRÉ. 0,866 est le cosinus de 30°, et le sinus de 60°."
  },
  {
   "q": "Surface d'un disque de diamètre 8 cm, en m² :",
   "choix": [
    "5,03×10⁻³ m²",
    "5,03×10⁻² m²",
    "2,01×10⁻² m²",
    "5,03×10¹ m²"
   ],
   "bonne": 0,
   "expl": "S = πD²/4 avec D = 0,080 m : π × 0,0064/4 = 5,03×10⁻³ m². Convertir avant d'élever au carré."
  },
  {
   "q": "Convertir 450 mT en teslas :",
   "choix": [
    "4,50×10⁻¹ T",
    "4,50×10⁻³ T",
    "4,50×10² T",
    "4,50×10⁻⁶ T"
   ],
   "bonne": 0,
   "expl": "milli vaut 10⁻³ : 450 × 10⁻³ = 0,450 T. Le 450 apporte deux rangs."
  },
  {
   "q": "Une grandeur passe de 0,40 à 0,65 en 20 ms. Son taux de variation vaut :",
   "choix": [
    "12,5 par seconde",
    "0,0125 par seconde",
    "1,25 par seconde",
    "32,5 par seconde"
   ],
   "bonne": 0,
   "expl": "0,25/0,020 = 12,5 par seconde. C'est ce quotient-là, dΦ/dt, qui fabrique la tension induite."
  },
  {
   "q": "Calculer 4π×10⁻⁷ × 500 × 2,5 :",
   "choix": [
    "1,57×10⁻³",
    "1,57×10⁻⁴",
    "3,93×10⁻⁴",
    "1,25×10⁻³"
   ],
   "bonne": 0,
   "expl": "4π×10⁻⁷ = 1,257×10⁻⁶ ; × 500 = 6,28×10⁻⁴ ; × 2,5 = 1,57×10⁻³. Le 4π fait partie du nombre, il ne s'oublie pas."
  },
  {
   "q": "Une bobine comporte 800 spires réparties sur 25 cm. Le nombre de spires par mètre vaut :",
   "choix": [
    "3200",
    "32",
    "20 000",
    "320"
   ],
   "bonne": 0,
   "expl": "800/0,25 = 3200 spires par mètre. Le dénominateur doit être en mètres : diviser par 25 donnerait des spires par centimètre."
  }
 ],
 "bilan": [
  {
   "q": "Le champ magnétique s'exprime en :",
   "choix": [
    "webers",
    "teslas",
    "henrys"
   ],
   "bonne": 1,
   "expl": "Le tesla (T) est l'unité du champ magnétique. Le weber et le henry sont les unités d'autres grandeurs, liées mais distinctes."
  },
  {
   "q": "Dans la relation B = µ₀ n I, la grandeur n désigne :",
   "choix": [
    "le nombre de spires par mètre",
    "le nombre total de spires",
    "la longueur du solénoïde"
   ],
   "bonne": 0,
   "expl": "n = N/ est une densité de spires, en spires par mètre. C'est la distinction la plus souvent manquée du chapitre."
  },
  {
   "q": "Une bobine de 600 spires mesure 20 cmeter. Le nombre de spires par mètre vaut :",
   "choix": [
    "30",
    "120",
    "3000"
   ],
   "bonne": 2,
   "expl": "n = 600/0,20 = 3000 spires par mètre. La réponse « 30 » oublie de convertir les centimètres en mètres, ce qui fausse le champ d'un facteur cent."
  },
  {
   "q": "Pour le circuit magnétique d'un transformateur, on choisit un matériau ferromagnétique :",
   "choix": [
    "dur, pour qu'il garde son aimantation",
    "doux, pour que son cycle soit étroit",
    "non magnétique, pour éviter les pertes"
   ],
   "bonne": 1,
   "expl": "Un matériau doux a un cycle étroit : il s'aimante et se désaimante facilement, et perd peu d'énergie à chaque période. Un matériau dur, au cycle large, garde son aimantation : c'est celui des aimants permanents."
  },
  {
   "q": "On rapproche un aimant d'une bobine deux fois plus vite. La f.é.m. induite :",
   "choix": [
    "ne change pas",
    "est divisée par deux",
    "est multipliée par deux"
   ],
   "bonne": 2,
   "expl": "La f.é.m. dépend de la vitesse de la variation : deux fois plus vite, deux fois plus de tension. C'est pour cela qu'un alternateur donne plus de tension quand il tourne plus vite."
  },
  {
   "q": "Un aimant est immobile à l'intérieur d'une bobine reliée à un galvanomètre. Celui-ci indique :",
   "choix": [
    "un courant nul",
    "un courant constant",
    "un courant alternatif"
   ],
   "bonne": 0,
   "expl": "Rien ne varie, donc il n'y a pas de f.é.m., même si l'aimant est puissant. Ce qui compte, c'est la variation — jamais la valeur."
  },
  {
   "q": "La loi de Lenz énonce que le courant induit :",
   "choix": [
    "renforce la variation qui lui donne naissance",
    "est toujours nul dans un circuit fermé",
    "s'oppose à la variation qui lui donne naissance"
   ],
   "bonne": 2,
   "expl": "L'opposition est une conséquence de la conservation de l'énergie : si le courant induit renforçait la cause, le système s'emballerait et produirait de l'énergie à partir de rien."
  },
  {
   "q": "Ce qui produit une f.é.m. dans une bobine, c'est :",
   "choix": [
    "la présence d'un champ magnétique",
    "la variation du champ qui la traverse",
    "le nombre de spires, à lui seul"
   ],
   "bonne": 1,
   "expl": "Sans variation, rien n'est induit. Le nombre de spires multiplie l'effet, mais ne le crée pas."
  },
  {
   "q": "La force de Laplace sur un conducteur parallèle au champ vaut :",
   "choix": [
    "B I",
    "B I /2",
    "zéro"
   ],
   "bonne": 2,
   "expl": "F = B I α avec α= 0 donne F = 0 : un conducteur couché le long des lignes de champ ne subit aucune force."
  },
  {
   "q": "Le champ magnétique rémanent d'un matériau ferromagnétique, c'est :",
   "choix": [
    "le champ qui subsiste quand on annule le courant",
    "le champ maximal, atteint à saturation",
    "le champ créé par la bobine seule, sans le fer"
   ],
   "bonne": 0,
   "expl": "Le champ rémanent est ce que le fer garde quand le courant est revenu à zéro. Pour l'effacer, il faut un courant de sens inverse : l'intensité de démagnétisation."
  },
  {
   "q": "L'air sec devient conducteur vers 3 kV/mmeter. Entre deux pièces portées à 6 kV l'une de l'autre, l'air claque si la distance est inférieure à :",
   "choix": [
    "0,5 mmeter",
    "2 mmeter",
    "18 mmeter"
   ],
   "bonne": 1,
   "expl": "d = U/E = 6 kV/(3 kV/mmeter) = 2 mmeter. En dessous, l'air claque. Les distances d'isolement réelles prennent une large marge au-dessus de cette limite."
  },
  {
   "q": "On feuillette un circuit magnétique en tôles isolées afin de réduire :",
   "choix": [
    "les pertes par hystérésis",
    "les pertes par courants de Foucault",
    "le champ rémanent"
   ],
   "bonne": 1,
   "expl": "Le feuilletage réduit la section des boucles de courant induites dans la masse du métal, donc les courants de Foucault. L'hystérésis est une propriété du matériau lui-même, que la géométrie ne modifie pas."
  },
  {
   "q": "Au moment où un contacteur s'ouvre en charge, un arc apparaît entre ses contacts parce que :",
   "choix": [
    "les contacts, encore très proches, subissent un champ électrique qui dépasse la rigidité de l'air",
    "la bobine du contacteur produit une étincelle",
    "le courant devient plus fort à l'ouverture"
   ],
   "bonne": 0,
   "expl": "Au tout début de l'ouverture, les contacts ne sont qu'à quelques centièmes de millimètre : même sous 400 V, le champ dépasse la rigidité de l'air, qui devient conducteur. D'où les chambres de coupure, qui allongent et refroidissent l'arc pour l'éteindre."
  },
  {
   "q": "On augmente le courant dans une bobine à noyau de fer. Au-delà d'une certaine valeur, le champ n'augmente presque plus : c'est :",
   "choix": [
    "l'hystérésis",
    "la rémanence",
    "la saturation"
   ],
   "bonne": 2,
   "expl": "C'est la saturation : le fer ne peut plus s'aimanter davantage. Au-delà, augmenter le courant chauffe la bobine sans renforcer le champ."
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Champ magnétique » ?",
   "verso": "Le champ magnétique est une grandeur vectorielle définie en chaque point de l'espace : une direction, un sens et une valeur. Il se note B et s'exprime en teslas (T).",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Champ d'un solénoïde » ?",
   "verso": "À l'intérieur d'un solénoïde long, loin des extrémités, le champ est uniforme, dirigé selon l'axe, et vaut :",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Force de Laplace » ?",
   "verso": "Un conducteur de longueur, parcouru par un courant I et placé dans un champ B, subit une force :",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Matériau ferromagnétique » ?",
   "verso": "Un matériau ferromagnétique canalise le champ magnétique et le renforce considérablement. Ce sont le fer, le nickel, le cobalt et leurs alliages : tôles de fer-silicium des transformateurs et des moteurs, ferrites de l'électronique de puissance.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Les lignes de champ — qu'y a-t-il à retenir ?",
   "verso": "Les lignes de champ sont les courbes tangentes en tout point au vecteur B. Elles sortent par le pôle nord de l'aimant et y entrent par le pôle sud. Elles ne se croisent jamais, puisqu'en un point donné le champ a une seule direction.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Une tension, tout simplement — qu'y a-t-il à retenir ?",
   "verso": "La force électromotrice induite est une tension, en volts, que l'on mesure avec un voltmètre comme n'importe quelle autre. Rien de nouveau ne se mesure ici.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "La spire tournante — qu'y a-t-il à retenir ?",
   "verso": "Une spire tournant à vitesse constante dans un champ uniforme voit son flux varier sinusoïdalement, donc la f.é.m. induite est sinusoïdale elle aussi.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Le champ magnétique est …… : une direction, un sens et une valeur.",
   "rep": "une grandeur vectorielle définie en chaque point de l'espace",
   "verso": "<strong>une grandeur vectorielle définie en chaque point de l'espace</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un matériau <strong>dur</strong> a un cycle …… : il garde son aimantation.",
   "rep": "large",
   "verso": "<strong>large</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Pour l'annuler, il faut un courant de ……, l'<strong>intensité de démagnétisation</strong> I_d.",
   "rep": "sens inverse",
   "verso": "<strong>sens inverse</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le champ électrique est …… qui règne entre deux conducteurs portés à des potentiels différents.",
   "rep": "une grandeur vectorielle",
   "verso": "<strong>une grandeur vectorielle</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "À l'intérieur d'un solénoïde long, loin des extrémités, le champ est ……, dirigé selon l'axe, et vaut :",
   "rep": "uniforme",
   "verso": "<strong>uniforme</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Le champ magnétique s'exprime en ……",
   "rep": "teslas",
   "verso": "<strong>teslas</strong> — Le tesla (T) est l'unité du champ magnétique. Le weber et le henry sont les unités d'autres grandeurs, liées mais distinctes.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans la relation B = µ₀ n I, la grandeur n désigne ……",
   "rep": "le nombre de spires par mètre",
   "verso": "<strong>le nombre de spires par mètre</strong> — n = N/ est une densité de spires, en spires par mètre. C'est la distinction la plus souvent manquée du chapitre.",
   "origine": "bilan"
  }
 ],
 "cartes_figees": false
};
