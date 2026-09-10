/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 6 — Viscosité et pertes de charge
   Le bilan vient de CRSA_ch06_bilan.tex, les cartes des \trou{} de
   CRSA_ch06_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "6",
 "titre": "Viscosité et pertes de charge",
 "niveau": "BTS CRSA",
 "prerequis": [],
 "bilan": [
  {
   "q": "La viscosité cinématique ν s'exprime en :",
   "choix": [
    "Pa·s",
    "meter²/s",
    "kg/meter³",
    "sans unité"
   ],
   "bonne": 1,
   "expl": "ν= µ/ρ. La réponse a est l'unité de la viscosité dynamique µ : les deux se confondent facilement."
  },
  {
   "q": "Quand la température d'une huile diminue, sa viscosité :",
   "choix": [
    "diminue",
    "augmente",
    "ne change pas",
    "s'annule"
   ],
   "bonne": 1,
   "expl": "Une huile VG 46 est cinq fois et demie plus visqueuse à 10 qu'à 40 °C. C'est ce qui explique les difficultés au démarrage à froid."
  },
  {
   "q": "Le nombre de Reynolds s'exprime en :",
   "choix": [
    "meter/s",
    "Pa",
    "sans unité",
    "meter²/s"
   ],
   "bonne": 2,
   "expl": "C'est un nombre pur, qui compare effets d'inertie et effets visqueux."
  },
  {
   "q": "Un écoulement pour lequel Re = 350 est :",
   "choix": [
    "laminaire",
    "turbulent",
    "transitoire",
    "impossible"
   ],
   "bonne": 0,
   "expl": "Re < 2000."
  },
  {
   "q": "En régime laminaire, le coefficient de perte de charge vaut :",
   "choix": [
    "λ= 64 Re",
    "λ= 64/Re",
    "λ= Re/64",
    "il se lit sur un abaque"
   ],
   "bonne": 1,
   "expl": "Et cette relation n'est valable qu'en laminaire."
  },
  {
   "q": "En régime turbulent, le coefficient λ :",
   "choix": [
    "vaut 64/Re",
    "se lit sur un abaque",
    "est nul",
    "vaut 1"
   ],
   "bonne": 1,
   "expl": "λ dépend alors aussi de la rugosité de la conduite ; l'énoncé le fournit."
  },
  {
   "q": "Les pertes de charge régulières se produisent :",
   "choix": [
    "dans les coudes",
    "dans les vannes",
    "le long des conduites droites",
    "dans la pompe"
   ],
   "bonne": 2,
   "expl": "Les coudes et les vannes relèvent des pertes singulières."
  },
  {
   "q": "Les coefficients K des pertes singulières :",
   "choix": [
    "se multiplient",
    "s'additionnent",
    "se moyennent",
    "s'annulent"
   ],
   "bonne": 1,
   "expl": "Δp_sing = ( K) 1/2ρv²."
  },
  {
   "q": "Dans l'équation de Bernoulli corrigée, le terme de pertes :",
   "choix": [
    "peut être négatif",
    "est toujours positif",
    "est nul en pratique",
    "se place du côté du départ"
   ],
   "bonne": 1,
   "expl": "Le fluide perd de l'énergie en chemin, il n'en gagne jamais. Le terme se place du côté de l'arrivée."
  },
  {
   "q": "À débit imposé et en régime laminaire, la perte de charge varie comme :",
   "choix": [
    "D",
    "1/D",
    "1/D²",
    "1/D⁴"
   ],
   "bonne": 3,
   "expl": "C'est le résultat le plus utile du chapitre : augmenter le diamètre de 40 % divise les pertes par quatre."
  },
  {
   "q": "En régime laminaire, la perte de charge est proportionnelle :",
   "choix": [
    "au débit",
    "au carré du débit",
    "à la racine du débit",
    "elle ne dépend pas du débit"
   ],
   "bonne": 0,
   "expl": "Parce que λ= 64/Re décroît comme 1/v, ce qui « mange » un des deux facteurs v de 1/2ρv². En turbulent, c'est le carré du débit."
  },
  {
   "q": "Régler un débit en fermant à demi une vanne revient à :",
   "choix": [
    "économiser de l'énergie",
    "dissiper volontairement de la puissance",
    "augmenter le rendement de la pompe",
    "réduire la viscosité"
   ],
   "bonne": 1,
   "expl": "On crée volontairement une perte de charge, donc de la chaleur. Il vaut toujours mieux agir sur la vitesse de la pompe. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Viscosité » ?",
   "verso": "La viscosité mesure la résistance du fluide à l'écoulement. La viscosité <strong>dynamique</strong> µ s'exprime en Pa·s ; la viscosité <strong>cinématique</strong> ν= µ/ρ s'exprime en meter²/s.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Où se place le terme de pertes — qu'y a-t-il à retenir ?",
   "verso": "Δp_pertes est toujours positif et se place du côté de l'arrivée. Le fluide perd de l'énergie en chemin, il n'en gagne jamais — sauf si une pompe lui en apporte.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Deux dépendances à connaître — qu'y a-t-il à retenir ?",
   "verso": "À débit imposé et en régime laminaire, la perte de charge varie comme 1/D⁴ : augmenter le diamètre de 40 % divise les pertes par quatre. Elle varie aussi comme L, donc raccourcir la conduite de moitié ne divise les pertes que par deux.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Si Re > 4000, il est …… : les filets s'enchevêtrent en tourbillons.",
   "verso": "<strong>turbulent</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Entre les deux, le régime est dit …… — instable, il n'est pas au programme.",
   "verso": "<strong>transitoire</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Si Re < 2000, l'écoulement est …… : les filets de fluide restent parallèles.",
   "verso": "<strong>laminaire</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La viscosité <strong>dynamique</strong> µ s'exprime en Pa·s ; la viscosité <strong>cinématique</strong> ν= µ/ρ s'exprime en …….",
   "verso": "<strong>meter²/s</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "À débit imposé et en régime laminaire, la perte de charge varie comme 1/D⁴ : augmenter le diamètre de 40 % divise les pertes par …….",
   "verso": "<strong>quatre</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "La viscosité cinématique ν s'exprime en ……",
   "verso": "<strong>meter²/s</strong> — ν= µ/ρ. La réponse a est l'unité de la viscosité dynamique µ : les deux se confondent facilement.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Quand la température d'une huile diminue, sa viscosité ……",
   "verso": "<strong>augmente</strong> — Une huile VG 46 est cinq fois et demie plus visqueuse à 10 qu'à 40 °C. C'est ce qui explique les difficultés au démarrage à froid.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le nombre de Reynolds s'exprime en ……",
   "verso": "<strong>sans unité</strong> — C'est un nombre pur, qui compare effets d'inertie et effets visqueux.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un écoulement pour lequel Re = 350 est ?",
   "verso": "<strong>laminaire</strong> — Re < 2000.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En régime laminaire, le coefficient de perte de charge vaut ……",
   "verso": "<strong>λ= 64/Re</strong> — Et cette relation n'est valable qu'en laminaire.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En régime turbulent, le coefficient λ ……",
   "verso": "<strong>se lit sur un abaque</strong> — λ dépend alors aussi de la rugosité de la conduite ; l'énoncé le fournit.",
   "origine": "bilan"
  }
 ]
};
