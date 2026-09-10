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
    "capte des électrons",
    "cède des électrons",
    "ne réagit pas"
   ],
   "bonne": 1,
   "expl": "le réducteur réduit l'autre espèce, donc il lui cède ses électrons ; l'oxydant fait l'inverse. Dans la notation d'un couple, l'oxydant est toujours écrit en premier : c'est une convention, mais elle évite bien des confusions en évaluation. 3pt"
  },
  {
   "q": "Dans le couple Cu^2+/Cu, l'oxydant est :",
   "choix": [
    "Cu^2+",
    "Cu",
    "les deux"
   ],
   "bonne": 0,
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
   "expl": "l'argent n'échange qu'un électron, le cuivre deux : il faut donc deux ions argent pour un atome de cuivre. La réponse a ne s'équilibre pas en charges, la c laisse un électron dans le bilan — une équation bilan n'en contient jamais. 3pt"
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
    "un dépôt de zinc",
    "un dépôt de cuivre",
    "rien du tout"
   ],
   "bonne": 2,
   "expl": "le zinc a le potentiel le plus bas (-0,76), c'est donc le meilleur réducteur. Et pour la question 5, il faudrait que Zn^2+ oxyde le cuivre : la règle du gamma s'écrirait à l'envers, donc il ne se passe rien. Un godet où rien n'apparaît est une information, pas un échec de manipulation. 3pt"
  },
  {
   "q": "Dans une pile, l'anode est le siège :",
   "choix": [
    "de l'oxydation, et c'est le pôle -",
    "de la réduction, et c'est le pôle -",
    "de l'oxydation, et c'est le pôle +"
   ],
   "bonne": 0,
   "expl": "l'anode est par définition le siège de l'oxydation, et dans une pile c'est le pôle négatif puisque les électrons en partent. La f.é.m. vaut 0,34 - (-0,76) = 1,10 V : la réponse a vient d'une soustraction dans le mauvais sens, la c d'un oubli du double signe. Une f.é.m. de pile est toujours positive — si le calcul donne un nombre négatif, les électrodes ont été interverties. 3pt"
  },
  {
   "q": "La f.é.m. standard de la pile Zn/Cu vaut :",
   "choix": [
    "0,42 V",
    "1,10 V",
    "-1,10 V"
   ],
   "bonne": 1,
   "expl": "l'anode est par définition le siège de l'oxydation, et dans une pile c'est le pôle négatif puisque les électrons en partent. La f.é.m. vaut 0,34 - (-0,76) = 1,10 V : la réponse a vient d'une soustraction dans le mauvais sens, la c d'un oubli du double signe. Une f.é.m. de pile est toujours positive — si le calcul donne un nombre négatif, les électrodes ont été interverties. 3pt"
  },
  {
   "q": "Le pont salin sert à :",
   "choix": [
    "faire circuler les électrons d'un bécher à l'autre",
    "fermer le circuit et maintenir la neutralité des solutions",
    "mélanger lentement les deux solutions"
   ],
   "bonne": 1,
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
    "la transformation de l'accumulateur est réversible",
    "l'accumulateur ne contient pas d'électrolyte"
   ],
   "bonne": 1,
   "expl": "la tension d'un accumulateur au plomb n'a rien d'exceptionnel, et il contient bien un électrolyte. Ce qui le distingue, c'est que la transformation s'inverse sous un courant imposé : c'est la charge. 3pt"
  },
  {
   "q": "On boulonne un bloc de cuivre sur un châssis en acier, en milieu humide. Alors :",
   "choix": [
    "l'acier est protégé",
    "l'acier se corrode plus vite",
    "rien ne change"
   ],
   "bonne": 1,
   "expl": "et c'est la question la plus utile de la feuille. Le cuivre est moins réducteur que le fer : l'acier devient donc l'anode et se corrode plus vite qu'en l'absence de tout bloc. Le métal à choisir n'est pas celui qui résiste le mieux, c'est celui que l'on accepte de sacrifier — et c'est pourquoi on met du zinc. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Oxydant et réducteur » ?",
   "verso": "Un <strong>oxydant</strong> est une espèce capable de capter un ou plusieurs électrons ; un <strong>réducteur</strong> est une espèce capable d'en céder. L'oxydant se réduit, le réducteur s'oxyde.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Anode et cathode » ?",
   "verso": "L'<strong>anode</strong> est l'électrode où se produit l'oxydation ; la <strong>cathode</strong> celle où se produit la réduction. Dans une pile, l'anode est le pôle négatif, car c'est d'elle que partent les électrons.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Couple oxydant/réducteur — qu'y a-t-il à retenir ?",
   "verso": "Un oxydant et son réducteur associé forment un <strong>couple</strong>, noté ox/réd — <strong>l'oxydant en premier</strong>. Le passage de l'un à l'autre s'écrit sous forme d'une demi-équation électronique : Cu^2+ + 2 e⁻ <=> Cu.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Prévoir une réaction — qu'y a-t-il à retenir ?",
   "verso": "La réaction spontanée met en présence l'oxydant du couple le plus haut et le réducteur du couple le plus bas. Dans l'autre sens, il ne se passe rien.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Trois façons d'alimenter la même chimie — qu'y a-t-il à retenir ?",
   "verso": "Dans une <strong>pile</strong>, les réactifs sont enfermés et la transformation n'est pas réversible. Dans un <strong>accumulateur</strong>, elle l'est : un courant imposé en sens inverse régénère les réactifs, c'est la charge.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Dans une pile, l'anode est le pôle négatif, car c'est d'elle que …….",
   "rep": "partent les électrons",
   "verso": "<strong>partent les électrons</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le passage de l'un à l'autre s'écrit sous forme d'une …… : Cu^2+ + 2 e⁻ <=> Cu.",
   "rep": "demi-équation électronique",
   "verso": "<strong>demi-équation électronique</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Dans une <strong>pile à combustible</strong>, les réactifs sont …… de l'extérieur.",
   "rep": "apportés en continu",
   "verso": "<strong>apportés en continu</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Dans une <strong>pile</strong>, les réactifs sont enfermés et la transformation …….",
   "rep": "n'est pas réversible",
   "verso": "<strong>n'est pas réversible</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Plus E° est grand, plus l'oxydant du couple est fort ; plus E° est ……, plus le réducteur est fort.",
   "rep": "petit",
   "verso": "<strong>petit</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un réducteur est une espèce qui ……",
   "rep": "cède des électrons",
   "verso": "<strong>cède des électrons</strong> — le réducteur réduit l'autre espèce, donc il lui cède ses électrons ; l'oxydant fait l'inverse. Dans la notation d'un couple, l'oxydant est toujours écrit en premier : c'est une convention.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans le couple Cu^2+/Cu, l'oxydant est ……",
   "rep": "Cu^2+",
   "verso": "<strong>Cu^2+</strong> — le réducteur réduit l'autre espèce, donc il lui cède ses électrons ; l'oxydant fait l'inverse. Dans la notation d'un couple, l'oxydant est toujours écrit en premier : c'est une convention, mais elle évite bien des confusions en évaluation. 3pt",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "L'équation bilan correcte entre Ag+ et Cu est ……",
   "rep": "2 Ag+ + Cu -> 2 Ag + Cu^2+",
   "verso": "<strong>2 Ag+ + Cu -> 2 Ag + Cu^2+</strong> — l'argent n'échange qu'un électron, le cuivre deux : il faut donc deux ions argent pour un atome de cuivre. La réponse a ne s'équilibre pas en charges.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Parmi ces quatre métaux, le meilleur réducteur est ……",
   "rep": "le zinc",
   "verso": "<strong>le zinc</strong>",
   "origine": "bilan"
  }
 ]
};
