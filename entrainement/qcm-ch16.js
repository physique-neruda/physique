/* Genere par outils/construire.py — ne pas editer a la main.
   Chapitre 16 · Notion d'onde et information
   Les QCM viennent de ch16_prerequis.tex et ch16_bilan.tex,
   les cartes de cartes/cartes-ch16.json. */
window.CHAPITRE = {
 "num": "16",
 "titre": "Notion d'onde et information",
 "niveau": "1re STI2D",
 "prerequis": [
  {
   "q": "La vitesse d'un mobile se calcule par :",
   "choix": [
    "v = d × t",
    "v = d/t",
    "v = t/d",
    "v = d + t"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Un mobile parcourt 150 m en 5,0 s. Sa vitesse vaut :",
   "choix": [
    "30 m/s",
    "750 m/s",
    "0,033 m/s",
    "145 m/s"
   ],
   "bonne": 0,
   "expl": "150/5,0 = 30 m/s"
  },
  {
   "q": "Convertir 4,0 ms en secondes :",
   "choix": [
    "4,0×10⁻³ s",
    "4,0×10⁻⁶ s",
    "4000 s",
    "0,4 s"
   ],
   "bonne": 0,
   "expl": "« milli » signifie 10⁻³"
  },
  {
   "q": "Convertir 12 km en mètres :",
   "choix": [
    "120 m",
    "1200 m",
    "12 000 m",
    "0,012 m"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Le résultat de (3,0 × 10⁸)/(1,5 × 10⁶) vaut :",
   "choix": [
    "200",
    "2000",
    "4,5×10¹⁴",
    "20"
   ],
   "bonne": 0,
   "expl": "on divise les nombres (3,0/1,5 = 2) et on soustrait les exposants (10⁸⁻⁶ = 10²), soit 2 × 10² = 200"
  },
  {
   "q": "Une grandeur A est <strong>inversement</strong> proportionnelle à B. Si B double, alors A :",
   "choix": [
    "double",
    "est divisée par deux",
    "ne change pas",
    "est multipliée par quatre"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Le <strong>vide</strong> désigne un espace :",
   "choix": [
    "rempli d'air",
    "dépourvu de matière",
    "très froid",
    "rempli d'eau"
   ],
   "bonne": 1,
   "expl": ""
  }
 ],
 "bilan": [
  {
   "q": "Une onde transporte :",
   "choix": [
    "de la matière",
    "de l'énergie, sans matière",
    "de la matière et de l'énergie",
    "ni l'une ni l'autre"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Le <strong>son</strong> est une onde :",
   "choix": [
    "électromagnétique",
    "mécanique",
    "lumineuse",
    "qui se propage dans le vide"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Quelle onde peut se propager dans le <strong>vide</strong> ?",
   "choix": [
    "une vague",
    "une onde sismique",
    "le son",
    "la lumière"
   ],
   "bonne": 3,
   "expl": ""
  },
  {
   "q": "Dans une onde <strong>longitudinale</strong>, l'oscillation est :",
   "choix": [
    "perpendiculaire à la propagation",
    "parallèle à la propagation",
    "circulaire",
    "inexistante"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "La <strong>longueur d'onde</strong> se lit sur un graphe représentant :",
   "choix": [
    "la position en fonction du temps",
    "l'amplitude en fonction du temps",
    "l'amplitude en fonction de la position",
    "la vitesse en fonction du temps"
   ],
   "bonne": 2,
   "expl": "un graphe temporel donne T, pas λ"
  },
  {
   "q": "La relation entre célérité, longueur d'onde et fréquence est :",
   "choix": [
    "v = λ/f",
    "v = λ × f",
    "v = f/λ",
    "v = λ+ f"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Quand une onde passe d'un milieu à un autre, la grandeur qui <strong>ne change pas</strong> est :",
   "choix": [
    "la célérité",
    "la longueur d'onde",
    "la fréquence",
    "l'amplitude"
   ],
   "bonne": 2,
   "expl": "la fréquence est imposée par la source"
  },
  {
   "q": "Une onde sonore de 680 Hz dans l'air a pour longueur d'onde :",
   "choix": [
    "0,50 m",
    "2,0 m",
    "2 m",
    "231 m"
   ],
   "bonne": 0,
   "expl": "λ = 340/680 = 0,50 m"
  },
  {
   "q": "À la frontière entre deux milieux, l'énergie d'une onde se répartit entre :",
   "choix": [
    "réflexion et transmission seulement",
    "transmission, réflexion et absorption",
    "absorption seulement",
    "aucune de ces possibilités"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Un sonar reçoit un écho après une durée Δt. La distance à l'obstacle vaut :",
   "choix": [
    "d = v Δt",
    "d = (v Δt)/2",
    "d = 2 v Δt",
    "d = Δt/v"
   ],
   "bonne": 1,
   "expl": "l'onde fait l'aller-retour"
  },
  {
   "q": "Dans une fibre optique, la lumière reste confinée grâce à :",
   "choix": [
    "l'absorption",
    "des réflexions totales sur la gaine",
    "un champ magnétique",
    "la gravité"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Pour qu'une information transmise par une onde soit comprise, il faut :",
   "choix": [
    "une onde de forte amplitude",
    "une onde de haute fréquence",
    "un code partagé entre émetteur et récepteur",
    "une onde mécanique"
   ],
   "bonne": 2,
   "expl": ""
  }
 ],
 "cartes": [
  {
   "recto": "Une <strong>onde</strong> est la …… dans un milieu, qui transporte de l'<strong>énergie</strong> <em>sans</em> transporter de <strong>matière</strong>.",
   "verso": "<strong>propagation d'une perturbation</strong>",
   "origine": "cours a completer"
  },
  {
   "recto": "Une onde <strong>mécanique</strong> est la déformation d'un milieu matériel : elle a …… pour se propager.",
   "verso": "<strong>besoin d'un milieu</strong>",
   "origine": "cours a completer"
  },
  {
   "recto": "Une onde …… se propage <strong>même dans le vide</strong>.",
   "verso": "<strong>électromagnétique</strong>",
   "origine": "cours a completer"
  },
  {
   "recto": "La …… λ (en mètres) est la distance qui sépare deux motifs identiques <strong>à un instant</strong> donné : c'est la « longueur d'un motif » dans l'espace.",
   "verso": "<strong>longueur d'onde</strong>",
   "origine": "cours a completer"
  },
  {
   "recto": "La <strong>longueur d'onde</strong> λ (en mètres) est la distance qui sépare deux motifs identiques …… donné : c'est la « longueur d'un motif » dans l'espace.",
   "verso": "<strong>à un instant</strong>",
   "origine": "cours a completer"
  },
  {
   "recto": "Qu'est-ce qu'une onde ?",
   "verso": "Une <strong>onde</strong> est la <strong>propagation d'une perturbation</strong> dans un milieu, qui transporte de l'<strong>énergie</strong> <em>sans</em> transporter de <strong>matière</strong>. La perturbation se déplace ; les points du milieu, eux, oscillent autour de leur position d'équilibre.",
   "origine": "cours §1"
  },
  {
   "recto": "Une onde transporte-t-elle de la matière ?",
   "verso": "Non. Une onde transporte de l'<strong>énergie</strong>, jamais de la <strong>matière</strong>. Chaque point du milieu oscille autour de sa position d'équilibre et reste sur place : une bouée monte et descend, elle ne dérive pas avec les vagues.",
   "origine": "cours §1"
  },
  {
   "recto": "« La vague transporte l'eau vers la plage. » Que répondre ?",
   "verso": "« La vague transporte l'eau vers la plage. » Non : chaque parcelle d'eau oscille sur place. Ce qui avance, c'est la <strong>forme</strong> de la perturbation et l'<strong>énergie</strong> qu'elle porte. C'est pourquoi une bouée ne dérive pas au rythme des vagues.",
   "origine": "cours §1, erreur fréquente"
  },
  {
   "recto": "Quelle différence entre une onde mécanique et une onde électromagnétique ?",
   "verso": "Une onde <strong>mécanique</strong> est la déformation d'un milieu matériel : elle a <strong>besoin d'un milieu</strong> pour se propager. C'est le cas du <strong>son</strong>, des vagues, des ondes sismiques. Une onde <strong>électromagnétique</strong> se propage <strong>même dans le vide</strong>. C'est le cas de la <strong>lumière</strong>, des ondes radio, du Wi-Fi.",
   "origine": "cours §2"
  },
  {
   "recto": "Pourquoi une explosion est-elle silencieuse dans l'espace, alors qu'on y voit les étoiles ?",
   "verso": "Le <strong>son</strong> est une onde <strong>mécanique</strong> : sans matière, il ne se propage pas. La <strong>lumière</strong> est une onde <strong>électromagnétique</strong> : elle traverse le vide. C'est aussi pourquoi une sonde spatiale peut nous envoyer des images par ondes radio.",
   "origine": "cours §2"
  },
  {
   "recto": "Onde longitudinale ou transversale : quelle est la différence, et un exemple de chaque ?",
   "verso": "<strong>Longitudinale</strong> : l'oscillation est <strong>parallèle</strong> à la propagation — c'est le cas du <strong>son</strong>.<br><strong>Transversale</strong> : l'oscillation est <strong>perpendiculaire</strong> à la propagation — c'est le cas de la corde qu'on secoue et de la lumière.",
   "origine": "cours §3"
  },
  {
   "recto": "Que valent T, f et λ, et dans quelle unité ?",
   "verso": "La <strong>période</strong> T (en secondes) est la durée d'une oscillation <strong>en un point</strong> donné. La <strong>fréquence</strong> f = 1/T (en hertz) est le nombre d'oscillations par seconde. La <strong>longueur d'onde</strong> λ (en mètres) est la distance qui sépare deux motifs identiques <strong>à un instant</strong> donné : c'est la « longueur d'un motif » dans l'espace.",
   "origine": "cours §4"
  },
  {
   "recto": "Quelle relation lie la célérité, la longueur d'onde et la fréquence ?",
   "verso": "<strong>v = λ × f</strong>, ou de façon équivalente <strong>v = λ / T</strong>.<br>v en m/s, λ en m, f en Hz, T en s.",
   "origine": "cours §4, formule clé"
  },
  {
   "recto": "Sur quel graphe lit-on T ? Sur lequel lit-on λ ?",
   "verso": "T se lit sur un graphe <strong>en fonction du temps</strong>, λ sur un graphe <strong>en fonction de la position</strong>. Les deux courbes se ressemblent, mais leurs axes horizontaux n'ont ni le même sens ni la même unité.",
   "origine": "cours §4, à ne pas confondre"
  },
  {
   "recto": "Un la de fréquence 440 Hz se propage dans l'air à 340 m/s. Quelle est sa longueur d'onde ?",
   "verso": "λ = v / f = 340 / 440 = <strong>0,77 m</strong>.<br>Quelques dizaines de centimètres : cohérent avec la taille des instruments de musique.",
   "origine": "cours §4, méthode 1"
  },
  {
   "recto": "Le même son passe de l'air dans l'eau. Qu'est-ce qui change ?",
   "verso": "La <strong>fréquence</strong> est imposée par la <strong>source</strong> : elle ne change pas quand l'onde change de milieu. La <strong>célérité</strong>, elle, dépend du <strong>milieu</strong>. Par conséquent la <strong>longueur d'onde change</strong> d'un milieu à l'autre.",
   "origine": "cours §4"
  },
  {
   "recto": "Que devient l'énergie d'une onde qui arrive à la frontière entre deux milieux ?",
   "verso": "Les trois se produisent <strong>toujours</strong> ensemble, dans des proportions qui dépendent des milieux : E<sub>incidente</sub> = E<sub>réfléchie</sub> + E<sub>transmise</sub> + E<sub>absorbée</sub>. Un bon isolant phonique est un matériau qui <strong>absorbe</strong> beaucoup et transmet peu.",
   "origine": "cours §5"
  },
  {
   "recto": "Un sonar reçoit l'écho du fond 0,80 s après l'émission, dans une eau où v = 1500 m/s. Quelle est la profondeur ?",
   "verso": "Pendant Δt, l'onde a fait l'<strong>aller-retour</strong> : elle a parcouru 2d, pas d.<br>2d = v × Δt donc <strong>d = (v Δt)/2</strong> = (1500 × 0,80)/2 = <strong>600 m</strong>.<br>Oublier la division par 2 donnerait 1200 m, soit le double.",
   "origine": "cours §5, méthode 2"
  },
  {
   "recto": "Qu'est-ce qu'un guide d'onde ? Donne l'exemple du cours.",
   "verso": "Un <strong>guide d'onde</strong> est un dispositif qui confine une onde et la conduit d'un point à un autre avec très peu de pertes. La <strong>fibre optique</strong> en est l'exemple : la lumière, piégée dans le <strong>cœur</strong> par des <strong>réflexions totales</strong> sur la <strong>gaine</strong>, ne peut s'échapper que par l'extrémité.",
   "origine": "cours §6"
  },
  {
   "recto": "Quels sont les trois maillons d'une chaîne de transmission ?",
   "verso": "Un <strong>émetteur</strong> <em>code</em> l'information en modulant une onde ; l'<strong>onde modulée</strong> la transporte ; un <strong>récepteur</strong> la <em>décode</em>. L'ensemble ne fonctionne que si émetteur et récepteur partagent le <strong>même code</strong>.",
   "origine": "cours §7"
  },
  {
   "recto": "Où est l'information dans une transmission par onde ?",
   "verso": "L'information n'est <strong>pas</strong> dans l'onde elle-même : elle est dans la <strong>façon dont on la modifie</strong>, et dans la convention partagée qui permet de l'interpréter. Sans code commun, un signal parfaitement reçu reste incompréhensible.",
   "origine": "cours §7"
  },
  {
   "recto": "L'essentiel du chapitre, en dix points",
   "verso": "• Une <strong>onde</strong> propage une perturbation : elle transporte de l'<strong>énergie</strong>, jamais de la <strong>matière</strong>.\n• <strong>Mécanique</strong> (le son) : il faut un milieu. <strong>Électromagnétique</strong> (la lumière, la radio) : se propage même dans le <strong>vide</strong>.\n• <strong>Longitudinale</strong> : oscillation parallèle à la propagation (le son). <strong>Transversale</strong> : oscillation perpendiculaire (la corde, la lumière).\n• T se lit <strong>en un point au fil du temps</strong> ; λ <strong>à un instant dans l'espace</strong>. f = 1/T.\n• <strong>Relation fondamentale</strong> : v = λ × f = λ/T. La fréquence vient de la <strong>source</strong>, la célérité du <strong>milieu</strong>.\n• À une frontière : <strong>transmission</strong>, <strong>réflexion</strong>, <strong>absorption</strong>, toujours ensemble.\n• <strong>Écho</strong> : l'onde fait l'aller-retour, donc d = (v Δt)/2.\n• Un <strong>guide d'onde</strong> (fibre optique) confine l'onde par réflexions totales.\n• Transmettre une information : <strong>émetteur</strong> → <strong>onde modulée</strong> → <strong>récepteur</strong>, avec un <strong>code partagé</strong> indispensable.",
   "origine": "cours, L'essentiel"
  }
 ]
};
