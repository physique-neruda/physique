/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 11 — Hacheur série et onduleur
   Le bilan vient de CRSA_ch11_bilan.tex, les cartes des \trou{} de
   CRSA_ch11_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "11",
 "titre": "Hacheur série et onduleur",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Convertir 50 µs en secondes, en notation scientifique :",
   "choix": [
    "5,0×10⁻⁵ s",
    "5,0×10⁻⁶ s",
    "5,0×10⁻³ s",
    "5,0×10⁻⁴ s"
   ],
   "bonne": 0,
   "expl": "micro vaut 10⁻⁶, donc 50 × 10⁻⁶ = 5,0×10⁻⁵ s. Le 50 apporte un rang de plus."
  },
  {
   "q": "Une période T = 50 µs correspond à une fréquence de :",
   "choix": [
    "20 kHz",
    "2,0 kHz",
    "200 kHz",
    "50 kHz"
   ],
   "bonne": 0,
   "expl": "1/(5,0×10⁻⁵) = 2,0×10⁴ Hz = 20 kHz. C'est l'ordre de grandeur du découpage."
  },
  {
   "q": "Calculer 36/48 :",
   "choix": [
    "0,750",
    "1,33",
    "0,720",
    "12"
   ],
   "bonne": 0,
   "expl": "0,750. C'est la forme d'un rapport cyclique : entre 0 et 1."
  },
  {
   "q": "Un rapport de deux durées :",
   "choix": [
    "n'a pas d'unité",
    "s'exprime en secondes",
    "s'exprime en hertz",
    "s'exprime en pourcentage de seconde"
   ],
   "bonne": 0,
   "expl": "Les secondes se simplifient : le rapport cyclique est un nombre pur, souvent donné en pourcentage."
  },
  {
   "q": "Calculer 0,60 × 48 V :",
   "choix": [
    "28,8 V",
    "80,0 V",
    "48,6 V",
    "24,0 V"
   ],
   "bonne": 0,
   "expl": "28,8 V. C'est la tension moyenne d'un hacheur série de rapport cyclique 0,60."
  },
  {
   "q": "Un signal vaut +200 V pendant une demi-période puis −200 V pendant l'autre. Sa valeur moyenne vaut :",
   "choix": [
    "0 V",
    "200 V",
    "100 V",
    "141 V"
   ],
   "bonne": 0,
   "expl": "Les deux moitiés se compensent exactement : la valeur moyenne est nulle. C'est ce qui distingue un onduleur d'un hacheur."
  }
 ],
 "bilan": [
  {
   "q": "Un hacheur est un convertisseur :",
   "choix": [
    "alternatif continu",
    "continu continu",
    "continu alternatif",
    "alternatif alternatif"
   ],
   "bonne": 1,
   "expl": "Continu vers continu, mais réglable : c'est tout son intérêt."
  },
  {
   "q": "Un onduleur est un convertisseur :",
   "choix": [
    "alternatif continu",
    "continu continu",
    "continu alternatif",
    "alternatif alternatif"
   ],
   "bonne": 2,
   "expl": "L'onduleur fabrique de l'alternatif à partir du continu. Le a est le redresseur, le d le transformateur."
  },
  {
   "q": "Dans un variateur de vitesse pour moteur asynchrone, l'ordre des blocs est :",
   "choix": [
    "onduleur, filtre, redresseur",
    "redresseur, filtre, onduleur",
    "hacheur, filtre, redresseur",
    "transformateur, hacheur, filtre"
   ],
   "bonne": 1,
   "expl": "On redresse, on filtre, puis on ondule. C'est le schéma des sujets 2019 et 2022."
  },
  {
   "q": "Le rapport cyclique d'un hacheur :",
   "choix": [
    "s'exprime en secondes",
    "s'exprime en hertz",
    "est compris entre 0 et 1, sans unité",
    "peut dépasser 1"
   ],
   "bonne": 2,
   "expl": "C'est un rapport de deux durées : les unités se simplifient, et il ne peut pas dépasser 1 puisque la durée de fermeture ne peut excéder la période."
  },
  {
   "q": "Un hacheur série alimenté sous 48 V est réglé à α= 0,75. La tension moyenne de sortie vaut :",
   "choix": [
    "12 V",
    "24 V",
    "36 V",
    "64 V"
   ],
   "bonne": 2,
   "expl": "u_s = αU = 0,75 × 48 = 36 V. La réponse d est impossible : un hacheur série n'élève jamais la tension."
  },
  {
   "q": "Sur un chronogramme, le palier haut dure 3,0 divisions et le motif complet 5,0 divisions. Le rapport cyclique vaut :",
   "choix": [
    "0,30",
    "0,50",
    "0,60",
    "1,67"
   ],
   "bonne": 2,
   "expl": "α= 3,0/5,0 = 0,60. Inutile de convertir en secondes. La réponse d est le rapport inversé."
  },
  {
   "q": "Un hacheur série peut délivrer une tension moyenne :",
   "choix": [
    "toujours supérieure à celle de la source",
    "toujours inférieure ou égale à celle de la source",
    "toujours nulle",
    "alternative"
   ],
   "bonne": 1,
   "expl": "Puisque α 1, on a toujours αU U. Si un montage délivre davantage que sa source, ce n'est pas un hacheur série — c'était le cas du sujet 2021."
  },
  {
   "q": "Pendant que l'interrupteur d'un hacheur est ouvert, la diode de roue libre est :",
   "choix": [
    "bloquée, et le courant s'annule",
    "bloquée, et le courant décroît",
    "passante, et le courant décroît",
    "passante, et le courant croît"
   ],
   "bonne": 2,
   "expl": "La diode devient passante et offre au courant un chemin pour continuer de circuler ; il décroît sans s'annuler. C'est le régime de conduction continue."
  },
  {
   "q": "Pour diviser par deux l'ondulation du courant d'un hacheur, on peut :",
   "choix": [
    "diviser l'inductance par deux",
    "diviser la fréquence de découpage par deux",
    "doubler la fréquence de découpage",
    "doubler le rapport cyclique"
   ],
   "bonne": 2,
   "expl": "L'ondulation est inversement proportionnelle au produit L f : doubler la fréquence la divise par deux, tout comme doubler l'inductance. Les réponses a et b l'augmenteraient au contraire."
  },
  {
   "q": "Dans un onduleur en pont, fermer simultanément les deux interrupteurs d'un même bras :",
   "choix": [
    "double la tension de sortie",
    "met la source en court-circuit",
    "n'a aucun effet",
    "inverse le sens du courant"
   ],
   "bonne": 1,
   "expl": "Les deux interrupteurs d'un même bras relient les deux bornes de la source : c'est un court-circuit franc, destructeur. D'où le temps mort imposé par les commandes industrielles."
  },
  {
   "q": "Un onduleur à commande symétrique alimenté sous 200 V délivre une tension dont la valeur efficace vaut :",
   "choix": [
    "0 V",
    "141 V",
    "200 V",
    "283 V"
   ],
   "bonne": 2,
   "expl": "La tension vaut ±200 V en permanence : son carré vaut toujours 200², donc sa valeur efficace vaut 200 V. C'est le seul cas où amplitude et valeur efficace coïncident — le b serait la réponse pour une sinusoïde."
  },
  {
   "q": "Par rapport à la commande symétrique, la commande MLI :",
   "choix": [
    "supprime le fondamental",
    "double le fondamental",
    "conserve le fondamental et repousse les harmoniques vers les hautes fréquences",
    "conserve le fondamental et rapproche les harmoniques"
   ],
   "bonne": 2,
   "expl": "La MLI ne change rien au fondamental : elle déplace les harmoniques très haut en fréquence, là où l'inductance du moteur les filtre naturellement. C'est pourquoi tous les variateurs industriels l'utilisent. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Les deux convertisseurs du chapitre » ?",
   "verso": "Un <strong>hacheur</strong> convertit une tension continue en une tension continue réglable. Un <strong>onduleur</strong> convertit une tension continue en une tension alternative.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Rapport cyclique » ?",
   "verso": "Le <strong>rapport cyclique</strong> α est la fraction de la période pendant laquelle l'interrupteur est fermé. Il varie entre 0 et 1 et n'a pas d'unité.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Deux moyens, un seul effet — qu'y a-t-il à retenir ?",
   "verso": "Pour réduire l'ondulation, on peut augmenter l'inductance ou augmenter la fréquence de découpage. C'est pour cette seconde raison que les hacheurs industriels découpent à plusieurs dizaines de kilohertz : la bobine peut alors être beaucoup plus petite.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Le courant oscille de Δi autour de sa valeur moyenne, …….",
   "rep": "sans jamais s'annuler",
   "verso": "<strong>sans jamais s'annuler</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "C'en serait un si l'on voulait la même tension : mais on veut ……, et c'est le seul moyen de l'obtenir.",
   "rep": "une autre fréquence que celle du réseau",
   "verso": "<strong>une autre fréquence que celle du réseau</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Sa valeur moyenne est nulle, et sa valeur efficace vaut …… — c'est le seul cas où amplitude et valeur efficace coïncident, puisque |u_c| vaut U en permanence.",
   "rep": "exactement U",
   "verso": "<strong>exactement U</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un hacheur est un convertisseur ……",
   "rep": "continu continu",
   "verso": "<strong>continu continu</strong> — Continu vers continu, mais réglable : c'est tout son intérêt.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un onduleur est un convertisseur ……",
   "rep": "continu alternatif",
   "verso": "<strong>continu alternatif</strong> — L'onduleur fabrique de l'alternatif à partir du continu. Le a est le redresseur, le d le transformateur.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans un variateur de vitesse pour moteur asynchrone, l'ordre des blocs est ……",
   "rep": "redresseur, filtre, onduleur",
   "verso": "<strong>redresseur, filtre, onduleur</strong> — On redresse, on filtre, puis on ondule. C'est le schéma des sujets 2019 et 2022.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le rapport cyclique d'un hacheur ……",
   "rep": "est compris entre 0 et 1, sans unité",
   "verso": "<strong>est compris entre 0 et 1, sans unité</strong> — C'est un rapport de deux durées : les unités se simplifient, et il ne peut pas dépasser 1 puisque la durée de fermeture ne peut excéder la période.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un hacheur série alimenté sous 48 V est réglé à α= 0,75. La tension moyenne de sortie vaut ……",
   "rep": "36 V",
   "verso": "<strong>36 V</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Sur un chronogramme, le palier haut dure 3,0 divisions et le motif complet 5,0 divisions. Le rapport cyclique vaut ……",
   "rep": "0,60",
   "verso": "<strong>0,60</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un hacheur série peut délivrer une tension moyenne ……",
   "rep": "toujours inférieure ou égale à celle de la source",
   "verso": "<strong>toujours inférieure ou égale à celle de la source</strong> — Puisque α 1, on a toujours αU U. Si un montage délivre davantage que sa source, ce n'est pas un hacheur série — c'était le cas du sujet 2021.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pendant que l'interrupteur d'un hacheur est ouvert, la diode de roue libre est ……",
   "rep": "passante, et le courant décroît",
   "verso": "<strong>passante, et le courant décroît</strong> — La diode devient passante et offre au courant un chemin pour continuer de circuler ; il décroît sans s'annuler. C'est le régime de conduction continue.",
   "origine": "bilan"
  }
 ]
};
