/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · Cours 2 — Électromagnétisme
   Le bilan vient de c02_bilan.tex, les cartes des \trou{} de
   c02_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "2",
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
   "expl": "Le tesla (T) est l'unité du champ magnétique. Le weber est celle du flux, le henry celle de l'inductance : les trois grandeurs sont liées mais distinctes."
  },
  {
   "q": "Dans la relation B = µ₀ n I, la grandeur n désigne :",
   "choix": [
    "le nombre total de spires",
    "le nombre de spires par mètre",
    "la longueur du solénoïde"
   ],
   "bonne": 1,
   "expl": "n = N/ est une densité de spires, en spires par mètre. C'est la distinction la plus souvent manquée du chapitre."
  },
  {
   "q": "Une bobine de 600 spires mesure 20 cmeter. Le nombre de spires par mètre vaut :",
   "choix": [
    "30",
    "3000",
    "120"
   ],
   "bonne": 1,
   "expl": "n = 600/0,20 = 3000 spires par mètre. La réponse a oublie de convertir les centimètres en mètres, ce qui fausse le champ d'un facteur cent."
  },
  {
   "q": "Dans Φ= B Scosα, l'angle α est celui entre le champ et :",
   "choix": [
    "le plan de la surface",
    "la normale à la surface",
    "l'axe de la bobine, quel qu'il soit"
   ],
   "bonne": 1,
   "expl": "Toujours la normale. Une spire dont le plan fait 30 ° avec le champ a une normale à 60 ° : le facteur est cos60 ° = 0,5 et non 0,87. Dessiner la normale avant de calculer règle la question."
  },
  {
   "q": "Une spire est placée parallèlement aux lignes de champ. Le flux qui la traverse vaut :",
   "choix": [
    "B S",
    "nul",
    "B S/2"
   ],
   "bonne": 1,
   "expl": "Si la spire est parallèle aux lignes de champ, sa normale leur est perpendiculaire : cos90 ° = 0, donc Φ= 0. Aucune ligne ne traverse la surface."
  },
  {
   "q": "Un aimant est immobile à l'intérieur d'une bobine reliée à un galvanomètre. Celui-ci indique :",
   "choix": [
    "un courant constant",
    "un courant nul",
    "un courant alternatif"
   ],
   "bonne": 1,
   "expl": "Le flux ne varie plus, donc il n'y a plus de f.é.m., même si le flux reste important. Ce qui compte, c'est la variation — jamais la valeur."
  },
  {
   "q": "La loi de Lenz énonce que le courant induit :",
   "choix": [
    "renforce la variation de flux",
    "s'oppose à la variation de flux",
    "est proportionnel au flux"
   ],
   "bonne": 1,
   "expl": "L'opposition est une conséquence de la conservation de l'énergie : si le courant induit renforçait la cause, le système s'emballerait et produirait de l'énergie à partir de rien."
  },
  {
   "q": "Dans e = -N dΦ/dt, ce qui produit la f.é.m. est :",
   "choix": [
    "la valeur du flux",
    "la variation du flux",
    "le nombre de spires seul"
   ],
   "bonne": 1,
   "expl": "C'est la dérivée du flux qui apparaît dans la formule. Le nombre de spires multiplie l'effet mais ne le crée pas : sans variation, N ne sert à rien."
  },
  {
   "q": "La force de Laplace sur un conducteur parallèle au champ vaut :",
   "choix": [
    "B I",
    "nulle",
    "B I /2"
   ],
   "bonne": 1,
   "expl": "F = B I α avec α= 0 donne F = 0. Attention à ne pas confondre avec le flux, qui lui utilise un cosinus : les deux formules n'emploient ni le même angle ni la même fonction."
  },
  {
   "q": "Dans la relation d'Hopkinson N I = R Φ, la réluctance joue le rôle de :",
   "choix": [
    "la tension",
    "la résistance",
    "le courant"
   ],
   "bonne": 1,
   "expl": "L'analogie est complète : N I joue le rôle de la tension, Φ celui du courant, R celui de la résistance. Et comme pour les résistances, les réluctances en série s'ajoutent."
  },
  {
   "q": "Dans un circuit magnétique comportant un entrefer de 1 mmeter et 40 cmeter de fer, la réluctance est majoritairement due :",
   "choix": [
    "au fer",
    "à l'entrefer",
    "aux deux à parts égales"
   ],
   "bonne": 1,
   "expl": "Avec µ_r de quelques milliers, 1 mmeter d'air « résiste » plusieurs fois plus que 40 cmeter de fer. C'est toujours l'entrefer qui commande, et c'est pourquoi on le réduit au minimum que la mécanique autorise."
  },
  {
   "q": "On feuillette un circuit magnétique en tôles isolées afin de réduire :",
   "choix": [
    "les pertes par hystérésis",
    "les pertes par courants de Foucault",
    "la réluctance"
   ],
   "bonne": 1,
   "expl": "Le feuilletage réduit la section des boucles de courant induites dans la masse du métal, donc les courants de Foucault. L'hystérésis est une propriété du matériau lui-même, que la géométrie ne modifie pas."
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
   "recto": "Qu'appelle-t-on « Flux magnétique » ?",
   "verso": "Le flux du champ B à travers une surface plane S mesure ce qui traverse effectivement cette surface :",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Loi de Faraday » ?",
   "verso": "La force électromotrice induite dans un circuit est :",
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
   "recto": "Un matériau ferromagnétique placé dans un champ le …….",
   "rep": "canalise et l'amplifie considérablement",
   "verso": "<strong>canalise et l'amplifie considérablement</strong>",
   "origine": "cours a completer"
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
   "recto": "À l'intérieur d'un solénoïde long, loin des extrémités, le champ est ……, dirigé selon l'axe, et vaut :",
   "rep": "uniforme",
   "verso": "<strong>uniforme</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Lorsqu'un circuit fermé voit le flux qui le traverse varier, il y apparaît un courant induit dont les effets …….",
   "rep": "s'opposent à la cause qui lui a donné naissance",
   "verso": "<strong>s'opposent à la cause qui lui a donné naissance</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La force électromotrice induite est une tension, en volts, que l'on mesure avec …… comme n'importe quelle autre.",
   "rep": "un voltmètre",
   "verso": "<strong>un voltmètre</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Le champ magnétique s'exprime en ……",
   "rep": "teslas",
   "verso": "<strong>teslas</strong> — Le tesla (T) est l'unité du champ magnétique. Le weber est celle du flux, le henry celle de l'inductance : les trois grandeurs sont liées mais distinctes.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans la relation B = µ₀ n I, la grandeur n désigne ……",
   "rep": "le nombre de spires par mètre",
   "verso": "<strong>le nombre de spires par mètre</strong> — n = N/ est une densité de spires, en spires par mètre. C'est la distinction la plus souvent manquée du chapitre.",
   "origine": "bilan"
  }
 ]
};
