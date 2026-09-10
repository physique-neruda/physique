/* Genere par outils/construire.py — ne pas editer a la main.
   1sti2d · chapitre 04 · Grandeurs périodiques
   Les QCM viennent de ch04_prerequis.tex et ch04_bilan.tex,
   les cartes de cartes/cartes-1sti2d-ch04.json. */
window.CHAPITRE = {
 "filiere": "1sti2d",
 "num": "4",
 "titre": "Grandeurs périodiques",
 "niveau": "1re STI2D",
 "prerequis": [
  {
   "q": "Convertir 20 ms en secondes :",
   "choix": [
    "20 s",
    "2,0 s",
    "0,020 s",
    "0,20 s"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "L'inverse de 0,020 vaut :",
   "choix": [
    "0,5",
    "5",
    "50",
    "500"
   ],
   "bonne": 2,
   "expl": "1/0,020 = 50, exactement le calcul qui donnera la fréquence"
  },
  {
   "q": "Un couloir de 6,0 m est carrelé avec des carreaux de 0,30 m. Le nombre de carreaux vaut :",
   "choix": [
    "2",
    "18",
    "20",
    "200"
   ],
   "bonne": 2,
   "expl": "6,0/0,30 = 20, la même division que pour compter des motifs"
  },
  {
   "q": "La valeur de √2 est environ :",
   "choix": [
    "1,41",
    "2,00",
    "0,71",
    "1,73"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Un signal monte jusqu'à +6 V et descend jusqu'à -6 V. Sa valeur maximale U<sub>max</sub> vaut :",
   "choix": [
    "12 V",
    "6 V",
    "3 V",
    "0 V"
   ],
   "bonne": 1,
   "expl": "la valeur maximale, pas l'écart entre les deux extrêmes"
  },
  {
   "q": "L'aire d'un rectangle de largeur 3 et de hauteur 8 vaut :",
   "choix": [
    "11",
    "24",
    "83",
    "5"
   ],
   "bonne": 1,
   "expl": "largeur × hauteur, comme une aire sous un signal"
  },
  {
   "q": "Le carré de -4 vaut :",
   "choix": [
    "-16",
    "-8",
    "8",
    "16"
   ],
   "bonne": 3,
   "expl": "un carré est toujours <strong>positif</strong> : ce sera essentiel pour la valeur efficace"
  }
 ],
 "bilan": [
  {
   "q": "Le courant du secteur est sinusoïdal notamment parce que :",
   "choix": [
    "c'est plus économique à produire en usine",
    "l'alternateur le produit naturellement ainsi",
    "les appareils ne fonctionnent qu'en sinusoïdal",
    "cela évite tout échauffement"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Un transformateur ne fonctionne pas en courant continu parce que :",
   "choix": [
    "la tension y est trop faible",
    "il exige une tension <strong>variable</strong>",
    "il chaufferait trop",
    "le courant continu est trop dangereux"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Le <strong>motif</strong> d'un signal périodique est :",
   "choix": [
    "sa valeur maximale",
    "le morceau de courbe qui se répète",
    "sa valeur moyenne",
    "le nombre de répétitions par seconde"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "La période T d'un signal périodique est :",
   "choix": [
    "le nombre de motifs par seconde",
    "la durée d'un seul motif",
    "la valeur maximale du signal",
    "la valeur moyenne du signal"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "La fréquence est :",
   "choix": [
    "la durée d'un motif",
    "le nombre de motifs contenus dans une seconde",
    "la hauteur du signal",
    "l'inverse de la tension"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Un signal a une période T = 20 ms. Sa fréquence vaut :",
   "choix": [
    "20 Hz",
    "0,02 Hz",
    "50 Hz",
    "500 Hz"
   ],
   "bonne": 2,
   "expl": "1/0,020 = 50"
  },
  {
   "q": "Un signal a une fréquence f = 250 Hz. Sa période vaut :",
   "choix": [
    "250 ms",
    "4,0 ms",
    "25 ms",
    "0,25 ms"
   ],
   "bonne": 1,
   "expl": "1/250 = 4,0 × 10⁻³ s"
  },
  {
   "q": "La valeur moyenne d'un signal se calcule en divisant :",
   "choix": [
    "la valeur maximale par √2",
    "l'aire algébrique d'une période par la période",
    "la période par le nombre de motifs",
    "la somme des valeurs extrêmes par deux"
   ],
   "bonne": 1,
   "expl": "aires positives au-dessus de l'axe, négatives en dessous"
  },
  {
   "q": "La valeur moyenne d'une tension sinusoïdale vaut :",
   "choix": [
    "U<sub>max</sub>",
    "U<sub>max</sub>/√2",
    "zéro",
    "U<sub>max</sub>/2"
   ],
   "bonne": 2,
   "expl": "les deux alternances se compensent"
  },
  {
   "q": "Pour obtenir la valeur efficace d'un signal quelconque, on procède ainsi :",
   "choix": [
    "moyenne, puis carré, puis racine",
    "carré, puis moyenne, puis racine",
    "racine, puis moyenne, puis carré",
    "on divise toujours par √2"
   ],
   "bonne": 1,
   "expl": "l'ordre est essentiel : moyenner <em>avant</em> d'élever au carré est l'erreur la plus fréquente"
  },
  {
   "q": "Pour une tension sinusoïdale, la valeur efficace vaut :",
   "choix": [
    "U<sub>max</sub> × √2",
    "(U<sub>max</sub>)/√2",
    "(U<sub>max</sub>)/2",
    "U<sub>max</sub>"
   ],
   "bonne": 1,
   "expl": "et pour une sinusoïde <em>seulement</em>"
  },
  {
   "q": "Devant un signal rectangulaire, un voltmètre <strong>ordinaire</strong> en position alternative :",
   "choix": [
    "donne toujours la valeur exacte",
    "se trompe, car il suppose le signal sinusoïdal",
    "affiche zéro",
    "affiche la valeur maximale"
   ],
   "bonne": 1,
   "expl": "seul un voltmètre <strong>TRUE RMS</strong> reste juste sur un signal non sinusoïdal"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "Ensuite, seul un courant <strong>variable</strong> traverse un …… : sans lui, impossible d'élever puis d'abaisser la tension.",
   "verso": "<strong>transformateur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Enfin, transporter sous …… permet une <strong>faible intensité</strong>, donc peu de pertes par échauffement dans les lignes.",
   "verso": "<strong>haute tension</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>période</strong> T est la ……, en secondes.",
   "verso": "<strong>durée d'un seul motif</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>fréquence</strong> f est le ……, en hertz (Hz).",
   "verso": "<strong>nombre de motifs contenus dans une seconde</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La …… ⟨u⟩ d'un signal périodique est le quotient de l'<strong>aire algébrique</strong> comprise entre la courbe et l'axe des temps, sur <strong>une</strong> période, par la durée de cette période.",
   "verso": "<strong>valeur moyenne</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Le courant du secteur est sinusoïdal notamment parce que ……",
   "verso": "<strong>l'alternateur le produit naturellement ainsi</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un transformateur ne fonctionne pas en courant continu parce que ……",
   "verso": "<strong>il exige une tension <strong>variable</strong></strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le <strong>motif</strong> d'un signal périodique est ……",
   "verso": "<strong>le morceau de courbe qui se répète</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La période T d'un signal périodique est ……",
   "verso": "<strong>la durée d'un seul motif</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La fréquence est ……",
   "verso": "<strong>le nombre de motifs contenus dans une seconde</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un signal a une période T = 20 ms. Sa fréquence vaut ……",
   "verso": "<strong>50 Hz</strong> — 1/0,020 = 50",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un signal a une fréquence f = 250 Hz. Sa période vaut ……",
   "verso": "<strong>4,0 ms</strong> — 1/250 = 4,0 × 10⁻³ s",
   "origine": "bilan"
  }
 ]
};
