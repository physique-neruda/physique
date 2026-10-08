/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · TP 6 — Le redressement
   Le bilan vient de tp06_bilan.tex, les cartes des \trou{} de
   tp06_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "6",
 "cle": "tp06",
 "etiquette": "TP 6",
 "titre": "Le redressement",
 "niveau": "BTS ET",
 "prerequis": [],
 "bilan": [
  {
   "q": "Une diode laisse passer le courant :",
   "choix": [
    "de la cathode vers l'anode",
    "dans les deux sens",
    "de l'anode vers la cathode",
    "jamais"
   ],
   "bonne": 2,
   "expl": "Sens anode vers cathode."
  },
  {
   "q": "La tension de seuil d'une diode au silicium vaut environ :",
   "choix": [
    "0,07 V",
    "1,4 V",
    "7 V",
    "0,7 V"
   ],
   "bonne": 3,
   "expl": "1,4 V est la chute dans un pont (deux diodes)."
  },
  {
   "q": "En simple alternance, la valeur moyenne vaut :",
   "choix": [
    "2U_max/π",
    "U_max/π",
    "U_max/√2",
    "U_max"
   ],
   "bonne": 1,
   "expl": "Une alternance sur deux est perdue."
  },
  {
   "q": "Derrière un pont de Graëtz, la fréquence d'ondulation vaut :",
   "choix": [
    "100 Hz",
    "50 Hz",
    "200 Hz",
    "25 Hz"
   ],
   "bonne": 0,
   "expl": "Deux bosses par période du réseau."
  },
  {
   "q": "Dans un pont, à chaque instant, le nombre de diodes passantes est :",
   "choix": [
    "deux",
    "une",
    "trois",
    "quatre"
   ],
   "bonne": 0,
   "expl": "Deux diodes opposées par alternance."
  },
  {
   "q": "Un pont alimenté sous 12 V (diodes idéales) donne une valeur moyenne de :",
   "choix": [
    "5,4 V",
    "12 V",
    "17 V",
    "10,8 V"
   ],
   "bonne": 3,
   "expl": "2×17,0/π."
  },
  {
   "q": "Un voltmètre en position DC sur une tension redressée affiche :",
   "choix": [
    "sa valeur efficace",
    "sa valeur maximale",
    "sa valeur moyenne",
    "sa fréquence"
   ],
   "bonne": 2,
   "expl": "C'est la mesure à retenir pour u."
  },
  {
   "q": "L'ondulation derrière un condensateur de filtrage :",
   "choix": [
    "augmente avec C",
    "diminue quand C augmente",
    "ne dépend pas du courant",
    "diminue quand le courant augmente"
   ],
   "bonne": 1,
   "expl": "ΔU ≈ I/(fC)."
  },
  {
   "q": "Un condensateur chimique branché à l'envers :",
   "choix": [
    "fonctionne normalement",
    "ne se charge pas, sans danger",
    "lisse mieux",
    "chauffe et peut exploser"
   ],
   "bonne": 3,
   "expl": "Il est polarisé."
  },
  {
   "q": "Le courant absorbé au réseau par un redresseur avec condensateur est :",
   "choix": [
    "sinusoïdal",
    "formé de brèves pointes",
    "nul",
    "continu"
   ],
   "bonne": 1,
   "expl": "Le condensateur ne se recharge qu'aux sommets."
  },
  {
   "q": "Pour observer une tension redressée à l'oscilloscope, on utilise :",
   "choix": [
    "le couplage AC sans précaution",
    "un ampèremètre",
    "un module d'isolement",
    "une résistance de 1 Ω"
   ],
   "bonne": 2,
   "expl": "Jamais de branchement direct."
  },
  {
   "q": "Un pont de diodes est :",
   "choix": [
    "non réversible",
    "réversible",
    "un transformateur",
    "un filtre"
   ],
   "bonne": 0,
   "expl": "L'énergie ne va que du réseau vers la charge."
  }
 ],
 "cartes": [
  {
   "type": "retenir",
   "recto": "Ondulation résiduelle — qu'y a-t-il à retenir ?",
   "verso": "\\[ ΔU ≈ If_ond C \\] I : courant de la charge ; f_ond : fréquence d'ondulation (100 Hz derrière un pont). Pour réduire l'ondulation, on augmente C ; elle augmente avec le courant débité.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Une diode ne laisse passer le courant que dans un sens, …….",
   "rep": "de l'anode vers la cathode",
   "verso": "<strong>de l'anode vers la cathode</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "À chaque instant, …… conduisent : on perd environ 1,4 V de seuil.",
   "rep": "deux diodes",
   "verso": "<strong>deux diodes</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Pour réduire l'ondulation, on augmente C ; elle augmente avec …….",
   "rep": "le courant débité",
   "verso": "<strong>le courant débité</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un voltmètre en position <strong>continu</strong> (DC) affiche la …….",
   "rep": "valeur moyenne",
   "verso": "<strong>valeur moyenne</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Passante, elle présente une petite tension de seuil, environ 0,7 V pour une diode au silicium ; bloquée, elle ne laisse passer …….",
   "rep": "aucun courant",
   "verso": "<strong>aucun courant</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "La tension de seuil d'une diode au silicium vaut environ ……",
   "rep": "0,7 V",
   "verso": "<strong>0,7 V</strong> — 1,4 V est la chute dans un pont (deux diodes).",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En simple alternance, la valeur moyenne vaut ……",
   "rep": "U_max/π",
   "verso": "<strong>U_max/π</strong> — Une alternance sur deux est perdue.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Derrière un pont de Graëtz, la fréquence d'ondulation vaut ……",
   "rep": "100 Hz",
   "verso": "<strong>100 Hz</strong> — Deux bosses par période du réseau.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans un pont, à chaque instant, le nombre de diodes passantes est ……",
   "rep": "deux",
   "verso": "<strong>deux</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un pont alimenté sous 12 V (diodes idéales) donne une valeur moyenne de ……",
   "rep": "10,8 V",
   "verso": "<strong>10,8 V</strong> — 2×17,0/π.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un voltmètre en position DC sur une tension redressée affiche ……",
   "rep": "sa valeur moyenne",
   "verso": "<strong>sa valeur moyenne</strong> — C'est la mesure à retenir pour u.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "L'ondulation derrière un condensateur de filtrage ……",
   "rep": "diminue quand C augmente",
   "verso": "<strong>diminue quand C augmente</strong> — ΔU ≈ I/(fC).",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un condensateur chimique branché à l'envers ……",
   "rep": "chauffe et peut exploser",
   "verso": "<strong>chauffe et peut exploser</strong> — Il est polarisé.",
   "origine": "bilan"
  }
 ],
 "cartes_figees": false
};
