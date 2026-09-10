/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 5 — Statique et dynamique des fluides
   Le bilan vient de CRSA_ch05_bilan.tex, les cartes des \trou{} de
   CRSA_ch05_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "5",
 "titre": "Statique et dynamique des fluides",
 "niveau": "BTS CRSA",
 "prerequis": [],
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
   "expl": "La section varie comme le carré du diamètre : S = πd²/4. La réponse a est l'erreur la plus fréquente du chapitre."
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
   "type": "definition",
   "recto": "Qu'appelle-t-on « Fluide incompressible » ?",
   "verso": "Un fluide est dit <strong>incompressible</strong> si sa masse volumique reste constante quelle que soit la pression. Tous les liquides le sont en pratique ; les gaz ne le sont pas.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Pression absolue et pression relative — qu'y a-t-il à retenir ?",
   "verso": "La pression <strong>absolue</strong> se compte à partir du vide. La pression <strong>relative</strong> — celle qu'indiquent la plupart des capteurs et manomètres d'atelier — se compte à partir de la pression atmosphérique : elle vaut donc zéro à l'air libre.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Trois termes, une constante — qu'y a-t-il à retenir ?",
   "verso": "Le long d'un écoulement permanent de fluide parfait incompressible, la somme 1/2ρv² + ρg z + p reste constante. Le premier terme est celui de la vitesse, le deuxième celui de l'altitude, le troisième celui de la pression.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "La vitesse de vidange — qu'y a-t-il à retenir ?",
   "verso": "Pour un bac ouvert se vidant par un orifice à l'air libre, les trois simplifications conduisent à v = √(2gh). La masse volumique disparaît : l'eau et l'huile sortent à la même vitesse.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "La masse volumique …… : l'eau et l'huile sortent à la même vitesse.",
   "verso": "<strong>disparaît</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un fluide est dit <strong>incompressible</strong> si …… quelle que soit la pression.",
   "verso": "<strong>sa masse volumique reste constante</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le long d'un écoulement permanent de fluide parfait incompressible, la somme 1/2ρv² + ρg z + p …….",
   "verso": "<strong>reste constante</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le premier terme est celui de la vitesse, le deuxième celui de l'altitude, le troisième celui de …….",
   "verso": "<strong>la pression</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Pour un bac ouvert se vidant par un orifice à l'air libre, les trois simplifications conduisent à …….",
   "verso": "<strong>v = √(2gh)</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un fluide incompressible est un fluide dont ……",
   "verso": "<strong>la masse volumique est constante</strong> — Son volume ne varie pas sous l'effet de la pression.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Parmi ces fluides, lequel n'est pas incompressible ?",
   "verso": "<strong>l'air comprimé</strong> — Tous les gaz sont compressibles. C'est ce qui sépare le pneumatique de l'hydraulique — et ce qui interdit d'appliquer ce chapitre à l'air comprimé.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "120 bar valent, en pascals ……",
   "verso": "<strong>1,2×10⁷ Pa</strong> — 1 bar = 1×10⁵ Pa, donc 120×10⁵ = 1,2×10⁷ Pa. Oublier cette conversion fait manquer le résultat d'un facteur 100000.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La pression au fond d'un récipient dépend ……",
   "verso": "<strong>de la hauteur de liquide</strong> — p = ρg h : ni le volume, ni la forme, ni la surface du fond n'interviennent.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un capteur de pression relative plongé dans l'air libre indique ……",
   "verso": "<strong>zéro</strong> — La pression relative se compte à partir de la pression atmosphérique.",
   "origine": "bilan"
  }
 ]
};
