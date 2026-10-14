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
    "l'alternateur le produit naturellement ainsi",
    "c'est plus économique à produire en usine",
    "les appareils ne fonctionnent qu'en sinusoïdal",
    "cela évite tout échauffement"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Un transformateur ne fonctionne pas en courant continu parce que :",
   "choix": [
    "la tension y est trop faible",
    "le courant continu est trop dangereux",
    "il chaufferait trop",
    "il exige une tension <strong>variable</strong>"
   ],
   "bonne": 3,
   "expl": ""
  },
  {
   "q": "Le <strong>motif</strong> d'un signal périodique est :",
   "choix": [
    "sa valeur maximale",
    "sa valeur moyenne",
    "le morceau de courbe qui se répète",
    "le nombre de répétitions par seconde"
   ],
   "bonne": 2,
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
    "l'inverse de la tension",
    "la hauteur du signal",
    "le nombre de motifs contenus dans une seconde"
   ],
   "bonne": 3,
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
    "4,0 ms",
    "250 ms",
    "25 ms",
    "0,25 ms"
   ],
   "bonne": 0,
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
    "zéro",
    "U<sub>max</sub>/√2",
    "U<sub>max</sub>",
    "U<sub>max</sub>/2"
   ],
   "bonne": 0,
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
    "(U<sub>max</sub>)/2",
    "(U<sub>max</sub>)/√2",
    "U<sub>max</sub>"
   ],
   "bonne": 2,
   "expl": "et pour une sinusoïde <em>seulement</em>"
  },
  {
   "q": "Devant un signal rectangulaire, un voltmètre <strong>ordinaire</strong> en position alternative :",
   "choix": [
    "donne toujours la valeur exacte",
    "affiche la valeur maximale",
    "affiche zéro",
    "se trompe, car il suppose le signal sinusoïdal"
   ],
   "bonne": 3,
   "expl": "seul un voltmètre <strong>TRUE RMS</strong> reste juste sur un signal non sinusoïdal"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Donner trois raisons pour lesquelles le courant du secteur est sinusoïdal.",
   "verso": "1. Un <b>alternateur</b> (bobine qui tourne dans un champ) produit naturellement une tension sinusoïdale.<br>2. Seul un courant <b>variable</b> traverse un <b>transformateur</b>.<br>3. Transporter sous <b>haute tension</b> donne une faible intensité, donc peu de pertes.",
   "origine": "Cours §1 Pourquoi le secteur est sinusoïdal"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la période T et la fréquence f d'un signal périodique.",
   "verso": "<b>T</b> : la <b>durée d'un seul motif</b>, en secondes.<br><b>f</b> : le <b>nombre de motifs par seconde</b>, en hertz (Hz).",
   "origine": "Cours §2 Période et fréquence"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation entre f et T ? Unités ?",
   "verso": "<b>f = 1 / T</b> — f en Hz, T en s.",
   "origine": "Cours §2 Période et fréquence"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Période et fréquence du secteur européen ?",
   "verso": "<b>f = 50 Hz</b>, <b>T = 20 ms</b>.",
   "origine": "Cours §2 Période et fréquence"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment définit-on la valeur moyenne ⟨u⟩ d'un signal périodique ?",
   "verso": "C'est l'<b>aire algébrique</b> entre la courbe et l'axe des temps sur <b>une période</b>, divisée par la période. Aires au-dessus : +, au-dessous : −.",
   "origine": "Cours §3 La valeur moyenne"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que vaut la valeur moyenne d'une sinusoïde ? Que montre un voltmètre en position continue sur une prise ?",
   "verso": "<b>Zéro</b> : les deux alternances ont des aires opposées. Le voltmètre en continu (qui mesure la valeur moyenne) affiche <b>0</b>.",
   "origine": "Cours §3 La valeur moyenne"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la valeur efficace d'une tension périodique.",
   "verso": "La valeur de la tension <b>continue</b> qui produirait dans la même résistance <b>le même échauffement</b>.<br>Calcul : <b>carré → moyenne → racine</b>.",
   "origine": "Cours §4 La valeur efficace"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation entre valeur efficace et valeur maximale ? Pour quel signal ?",
   "verso": "<b>U<sub>eff</sub> = U<sub>max</sub> / √2</b> — pour une <b>sinusoïde seulement</b>.",
   "origine": "Cours §4 La valeur efficace"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quel voltmètre donne la bonne valeur efficace d'un signal non sinusoïdal (variateur, découpage) ?",
   "verso": "Seul un voltmètre <b>TRUE RMS</b>, qui fait réellement « carré, moyenne, racine ». Un voltmètre ordinaire suppose le signal sinusoïdal et se trompe.",
   "origine": "Cours §4 Quel voltmètre affiche quoi ?"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Entre quelles valeurs se situe toujours la valeur efficace ?",
   "verso": "Elle est <b>positive</b>, comprise entre la <b>valeur moyenne</b> et la <b>valeur maximale</b>.",
   "origine": "Cours §4 Contrôle"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment déterminer T et f sur un oscillogramme ?",
   "verso": "1. Repérer un <b>motif complet</b> : deux points identiques consécutifs (deux maximums).<br>2. Lire sa durée : c'est <b>T</b> (convertir en s).<br>3. <b>f = 1/T</b> (ex. 20 ms → 50 Hz).<br>4. Contrôler l'ordre de grandeur.",
   "origine": "Cours §2 Méthode 1"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Signal : 8 V pendant 3 ms puis −4 V pendant 2 ms. Comment trouver sa valeur moyenne ?",
   "verso": "1. T = 3 + 2 = 5 ms.<br>2. Aires algébriques : ⟨u⟩ = (8 × 3 + (−4) × 2) / 5.<br>3. ⟨u⟩ = 16 / 5 = <b>3,2 V</b>.",
   "origine": "Cours §4 Méthode 2"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Même signal (8 V pendant 3 ms, −4 V pendant 2 ms). Comment trouver sa valeur efficace ?",
   "verso": "1. <b>Carré</b> : 64 pendant 3 ms, 16 pendant 2 ms.<br>2. <b>Moyenne</b> du carré : (64 × 3 + 16 × 2) / 5 = 44,8 V².<br>3. <b>Racine</b> : U<sub>eff</sub> = √44,8 = <b>6,7 V</b>.<br>4. Contrôle : entre 3,2 V et 8 V.",
   "origine": "Cours §4 Méthode 2"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Le secteur a une valeur efficace de 230 V. Comment trouver sa valeur maximale ?",
   "verso": "1. Signal sinusoïdal → U<sub>eff</sub> = U<sub>max</sub>/√2.<br>2. Isoler : U<sub>max</sub> = U<sub>eff</sub> × √2.<br>3. U<sub>max</sub> = 230 × 1,414 = <b>325 V</b>.",
   "origine": "Cours §4 Valeur efficace d'une sinusoïde"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
