/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 16 — Conditionnement du signal
   Le bilan vient de CRSA_ch16_bilan.tex, les cartes des \trou{} de
   CRSA_ch16_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "16",
 "titre": "Conditionnement du signal",
 "niveau": "BTS CRSA",
 "prerequis": [],
 "bilan": [
  {
   "q": "Un capteur passif délivre une résistance. Le rôle du diviseur de tension est de :",
   "choix": [
    "l'amplifier",
    "la transformer en tension",
    "la comparer à un seuil",
    "la filtrer"
   ],
   "bonne": 1,
   "expl": "C'est la fonction même du conditionnement : tout ce qui suit le capteur — amplificateur, convertisseur, automate — travaille sur des tensions."
  },
  {
   "q": "Dans un diviseur R₁--R₂ alimenté sous E, la tension aux bornes de R₂ vaut :",
   "choix": [
    "E R₁/(R₁+R₂)",
    "E R₂/(R₁+R₂)",
    "E (R₁+R₂)/R₂",
    "E R₂/R₁"
   ],
   "bonne": 1,
   "expl": "La tension prélevée est proportionnelle à la résistance à ses bornes, divisée par la résistance totale. La réponse a est le piège : elle inverse le numérateur."
  },
  {
   "q": "Cette tension peut-elle dépasser E ?",
   "choix": [
    "oui, si R₂ > R₁",
    "oui, si R₁ est très petite",
    "non, jamais",
    "oui, à la mise sous tension"
   ],
   "bonne": 2,
   "expl": "Jamais. La fraction R₂/(R₁+R₂) est toujours inférieure à 1 : la tension prélevée est une part de E. C'est le contrôle de vraisemblance à faire systématiquement."
  },
  {
   "q": "Un pont de Wheatstone est essentiellement :",
   "choix": [
    "un amplificateur à quatre entrées",
    "la différence de deux diviseurs de tension",
    "un filtre passe-bas",
    "un comparateur à deux seuils"
   ],
   "bonne": 1,
   "expl": "Deux diviseurs côte à côte dont on mesure la différence des points milieux. C'est de là que vient tout son intérêt : les deux branches produisent le même décalage, qui disparaît dans la différence."
  },
  {
   "q": "Un pont est dit équilibré lorsque :",
   "choix": [
    "ses quatre résistances sont égales",
    "sa tension de sortie est nulle",
    "son courant d'alimentation est nul",
    "sa sensibilité est maximale"
   ],
   "bonne": 1,
   "expl": "Sa tension de sortie est nulle. La réponse a décrit un cas particulier d'équilibre, pas sa définition — un pont peut être équilibré avec des résistances différentes, pourvu que les deux rapports soient égaux."
  },
  {
   "q": "On choisit un pont plutôt qu'un diviseur lorsque :",
   "choix": [
    "la variation du capteur est très faible",
    "le capteur est actif",
    "la tension d'alimentation est élevée",
    "le signal est alternatif"
   ],
   "bonne": 0,
   "expl": "Quand la variation est minuscule — une jauge varie d'un millième — le décalage d'un diviseur écraserait le signal. Le pont part de zéro, et toute la dynamique sert à la seule variation utile."
  },
  {
   "q": "Le coefficient d'amplification se lit sur la caractéristique de transfert comme :",
   "choix": [
    "l'ordonnée à l'origine",
    "la pente de la partie linéaire",
    "la largeur des paliers",
    "la valeur de saturation"
   ],
   "bonne": 1,
   "expl": "A = Δu_s / Δu_e : c'est la pente, et elle ne se lit que sur la partie linéaire, jamais sur les paliers."
  },
  {
   "q": "L'unité du coefficient d'amplification est :",
   "choix": [
    "le volt",
    "le volt par volt",
    "il n'en a pas",
    "l'ohm"
   ],
   "bonne": 2,
   "expl": "Il n'en a pas : c'est un rapport de deux tensions, les volts se simplifient. La réponse b est le piège de la fausse unité."
  },
  {
   "q": "Une caractéristique de transfert décroissante correspond à un amplificateur :",
   "choix": [
    "saturé",
    "inverseur",
    "non inverseur",
    "défectueux"
   ],
   "bonne": 1,
   "expl": "Quand l'entrée augmente, la sortie diminue : l'amplificateur est inverseur et son coefficient est négatif. C'est le cas du sujet 2019, avec A_v = -40."
  },
  {
   "q": "Un amplificateur saturé :",
   "choix": [
    "amplifie davantage",
    "ne suit plus les variations de l'entrée",
    "inverse le signe",
    "consomme moins"
   ],
   "bonne": 1,
   "expl": "Sa sortie reste bloquée quoi qu'il arrive en entrée : il ne mesure plus rien. C'est pourquoi un coefficient trop grand rend l'appareil aveugle en haut de l'étendue de mesure."
  },
  {
   "q": "La sortie d'un comparateur est un signal :",
   "choix": [
    "analogique",
    "logique",
    "numérique sur 8 bits",
    "sinusoïdal"
   ],
   "bonne": 1,
   "expl": "Deux valeurs seulement, sans état intermédiaire : c'est un signal logique, au sens du chapitre 15. Le comparateur ne mesure plus, il décide."
  },
  {
   "q": "Le comparateur à hystérésis se distingue du comparateur simple parce qu'il :",
   "choix": [
    "est plus rapide",
    "possède deux seuils de basculement",
    "amplifie le signal",
    "fonctionne sans alimentation"
   ],
   "bonne": 1,
   "expl": "Deux seuils : un pour basculer en montant, un autre pour retomber en descendant. Entre les deux, la sortie garde son état — ce qui supprime le battement quand le signal traîne au voisinage du seuil. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Coefficient d'amplification » ?",
   "verso": "Le coefficient d'amplification A est la pente de la partie linéaire de la caractéristique de transfert. Il est sans unité, puisqu'il rapporte une tension à une tension.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Comparateur à hystérésis » ?",
   "verso": "Un comparateur à hystérésis possède deux seuils distincts : l'un pour basculer en montant, l'autre pour retomber en descendant. Entre les deux, la sortie conserve son état. On l'appelle aussi <strong>trigger de Schmitt</strong>.",
   "origine": "definition du cours"
  },
  {
   "type": "trou",
   "recto": "Comme les deux branches produisent le même décalage, celui-ci …….",
   "verso": "<strong>disparaît dans la différence</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le coefficient d'amplification A est …… de la caractéristique de transfert.",
   "verso": "<strong>la pente de la partie linéaire</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le pont est dit <strong>équilibré</strong> quand sa tension de sortie est …….",
   "verso": "<strong>nulle</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Sa sortie ne prend plus que …… : c'est un signal logique, au sens du chapitre 15.",
   "verso": "<strong>deux valeurs</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un comparateur à hystérésis possède …… : l'un pour basculer en montant, l'autre pour retomber en descendant.",
   "verso": "<strong>deux seuils distincts</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un capteur passif délivre une résistance. Le rôle du diviseur de tension est de ……",
   "verso": "<strong>la transformer en tension</strong> — C'est la fonction même du conditionnement : tout ce qui suit le capteur — amplificateur, convertisseur, automate — travaille sur des tensions.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans un diviseur R₁--R₂ alimenté sous E, la tension aux bornes de R₂ vaut ……",
   "verso": "<strong>E R₂/(R₁+R₂)</strong> — La tension prélevée est proportionnelle à la résistance à ses bornes, divisée par la résistance totale. La réponse a est le piège : elle inverse le numérateur.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Cette tension peut-elle dépasser E ?",
   "verso": "<strong>non, jamais</strong> — Jamais. La fraction R₂/(R₁+R₂) est toujours inférieure à 1 : la tension prélevée est une part de E. C'est le contrôle de vraisemblance à faire systématiquement.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un pont de Wheatstone est essentiellement ……",
   "verso": "<strong>la différence de deux diviseurs de tension</strong> — Deux diviseurs côte à côte dont on mesure la différence des points milieux. C'est de là que vient tout son intérêt : les deux branches produisent le même décalage, qui disparaît dans la différence.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un pont est dit équilibré lorsque ……",
   "verso": "<strong>sa tension de sortie est nulle</strong> — Sa tension de sortie est nulle. La réponse a décrit un cas particulier d'équilibre, pas sa définition — un pont peut être équilibré avec des résistances différentes, pourvu que les deux rapports soient égaux.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "On choisit un pont plutôt qu'un diviseur lorsque ……",
   "verso": "<strong>la variation du capteur est très faible</strong> — Quand la variation est minuscule — une jauge varie d'un millième — le décalage d'un diviseur écraserait le signal. Le pont part de zéro, et toute la dynamique sert à la seule variation utile.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le coefficient d'amplification se lit sur la caractéristique de transfert comme ……",
   "verso": "<strong>la pente de la partie linéaire</strong> — A = Δu_s / Δu_e : c'est la pente, et elle ne se lit que sur la partie linéaire, jamais sur les paliers.",
   "origine": "bilan"
  }
 ]
};
