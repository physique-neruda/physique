/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 6 — Viscosité et pertes de charge
   Le bilan vient de CRSA_ch06_bilan.tex, les cartes des \trou{} de
   CRSA_ch06_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "6",
 "titre": "Viscosité et pertes de charge",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Une grandeur varie comme 1/D⁴. Si D passe de 10 à 14, elle est multipliée par :",
   "choix": [
    "0,260",
    "0,714",
    "3,84",
    "2,00"
   ],
   "bonne": 0,
   "expl": "(10/14)⁴ = 0,260 : elle est divisée par 3,84. Un exposant 4 amplifie énormément le moindre écart de diamètre."
  },
  {
   "q": "Une grandeur varie comme x². Si x est multiplié par 1,5, elle est multipliée par :",
   "choix": [
    "2,25",
    "1,50",
    "3,00",
    "4,50"
   ],
   "bonne": 0,
   "expl": "1,5² = 2,25. Le carré ne se contente pas de suivre : il amplifie."
  },
  {
   "q": "Convertir 20 L/min en m³/s :",
   "choix": [
    "3,33×10⁻⁴ m³/s",
    "3,33×10⁻² m³/s",
    "1,20 m³/s",
    "3,33×10⁻⁶ m³/s"
   ],
   "bonne": 0,
   "expl": "20 L = 2,0×10⁻² m³, et une minute vaut 60 s : 2,0×10⁻²/60 = 3,33×10⁻⁴ m³/s. Deux conversions, une en haut, une en bas."
  },
  {
   "q": "Calculer 64/230 :",
   "choix": [
    "0,278",
    "2,78",
    "3,59",
    "0,0278"
   ],
   "bonne": 0,
   "expl": "0,278. C'est la forme du coefficient de perte de charge en régime laminaire : 64/Re."
  },
  {
   "q": "Calculer (1,70 × 0,025)/(1,0×10⁻⁶) :",
   "choix": [
    "4,25×10⁴",
    "4,25×10⁻⁸",
    "4,25×10²",
    "2,35×10⁻⁵"
   ],
   "bonne": 0,
   "expl": "0,0425 / 10⁻⁶ = 4,25×10⁴. Diviser par 10⁻⁶ revient à multiplier par 10⁺⁶ : l'exposant change de signe en remontant du dénominateur."
  },
  {
   "q": "Une grandeur varie comme 1/D⁴. Pour la diviser par 3, il faut multiplier D par :",
   "choix": [
    "1,32",
    "3,00",
    "1,73",
    "0,76"
   ],
   "bonne": 0,
   "expl": "3^(1/4) = 1,32. Un tout petit élargissement de conduite suffit à diviser les pertes par trois."
  }
 ],
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
   "rep": "turbulent",
   "verso": "<strong>turbulent</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Entre les deux, le régime est dit …… — instable, il n'est pas au programme.",
   "rep": "transitoire",
   "verso": "<strong>transitoire</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Si Re < 2000, l'écoulement est …… : les filets de fluide restent parallèles.",
   "rep": "laminaire",
   "verso": "<strong>laminaire</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La viscosité <strong>dynamique</strong> µ s'exprime en Pa·s ; la viscosité <strong>cinématique</strong> ν= µ/ρ s'exprime en …….",
   "rep": "meter²/s",
   "verso": "<strong>meter²/s</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "À débit imposé et en régime laminaire, la perte de charge varie comme 1/D⁴ : augmenter le diamètre de 40 % divise les pertes par …….",
   "rep": "quatre",
   "verso": "<strong>quatre</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "La viscosité cinématique ν s'exprime en ……",
   "rep": "meter²/s",
   "verso": "<strong>meter²/s</strong> — ν= µ/ρ. La réponse a est l'unité de la viscosité dynamique µ : les deux se confondent facilement.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Quand la température d'une huile diminue, sa viscosité ……",
   "rep": "augmente",
   "verso": "<strong>augmente</strong> — Une huile VG 46 est cinq fois et demie plus visqueuse à 10 qu'à 40 °C. C'est ce qui explique les difficultés au démarrage à froid.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le nombre de Reynolds s'exprime en ……",
   "rep": "sans unité",
   "verso": "<strong>sans unité</strong> — C'est un nombre pur, qui compare effets d'inertie et effets visqueux.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En régime laminaire, le coefficient de perte de charge vaut ……",
   "rep": "λ= 64/Re",
   "verso": "<strong>λ= 64/Re</strong> — Et cette relation n'est valable qu'en laminaire.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En régime turbulent, le coefficient λ ……",
   "rep": "se lit sur un abaque",
   "verso": "<strong>se lit sur un abaque</strong> — λ dépend alors aussi de la rugosité de la conduite ; l'énoncé le fournit.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Les pertes de charge régulières se produisent ……",
   "rep": "le long des conduites droites",
   "verso": "<strong>le long des conduites droites</strong> — Les coudes et les vannes relèvent des pertes singulières.",
   "origine": "bilan"
  }
 ]
};
