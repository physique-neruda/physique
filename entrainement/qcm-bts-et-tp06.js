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
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans quel sens une diode conduit-elle ? Tension de seuil ? Modèle idéal ?",
   "verso": "De l'<b>anode vers la cathode</b> uniquement. Passante : seuil ≈ <b>0,7 V</b> (silicium) ; bloquée : <b>aucun courant</b>.<br>Idéale : un fil quand elle conduit, un interrupteur ouvert sinon.",
   "origine": "Cours §1 La diode"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Redressement simple alternance : valeur moyenne ? Fréquence d'ondulation ? Limite ?",
   "verso": "<b>⟨u⟩ = U<sub>max</sub> / π</b> avec U<sub>max</sub> = U√2.<br>Ondulation à <b>50 Hz</b> (une bosse par période).<br>La moitié de l'énergie est perdue : petites puissances seulement.",
   "origine": "Cours §2 Redressement simple alternance"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Secondaire de 12 V, simple alternance, diode idéale : valeur moyenne ?",
   "verso": "1. U<sub>max</sub> = 12√2 = <b>17,0 V</b>.<br>2. ⟨u⟩ = 17,0 / π = <b>5,4 V</b>.",
   "origine": "Cours §2 Simple alternance sous 12 V"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment suivre le trajet du courant dans un pont de diodes ?",
   "verso": "1. Repérer la borne du secondaire au potentiel <b>le plus haut</b>.<br>2. En partir : une seule diode s'ouvre (anode → cathode) vers le haut de la charge.<br>3. Traverser la charge de haut en bas, revenir à l'autre borne par la seule diode qui l'accepte.<br>4. Alternance suivante : les <b>deux autres diodes</b>, et la charge est traversée <b>dans le même sens</b>.",
   "origine": "Cours §3 Suivre le courant dans le pont de Graëtz"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pont de Graëtz : valeur moyenne ? Fréquence d'ondulation ? Combien de diodes conduisent ?",
   "verso": "<b>⟨u⟩ = 2 U<sub>max</sub> / π</b>.<br>Ondulation à <b>100 Hz</b> (deux fois le réseau).<br><b>Deux diodes</b> conduisent à chaque instant : ≈ 1,4 V de seuil perdus.",
   "origine": "Cours §3 Pont de Graëtz"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Même secondaire de 12 V, pont de Graëtz : valeur moyenne ?",
   "verso": "⟨u⟩ = 2 × 17,0 / π = <b>10,8 V</b> (diodes idéales), ≈ <b>9,9 V</b> en retirant les 1,4 V de seuil.",
   "origine": "Cours §3 Graëtz sous 12 V"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Un pont de diodes peut-il renvoyer de l'énergie au réseau ?",
   "verso": "<b>Non</b> : l'énergie ne va que du réseau vers la charge. Pour freiner en renvoyant l'énergie, il faut des <b>thyristors</b> (année 2).",
   "origine": "Cours §3 Le pont n'est pas réversible"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que lit un voltmètre en DC sur une tension redressée ? en AC ? Comment observer la forme ?",
   "verso": "DC : la <b>valeur moyenne</b>.<br>AC : l'efficace de la seule partie alternative (sauf <b>TRMS AC+DC</b>).<br>Forme : oscilloscope en <b>couplage DC</b>, via un <b>module d'isolement</b> ou une sonde différentielle.",
   "origine": "Cours §4 Mesurer une tension redressée"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rôle du condensateur en parallèle sur la charge ? Ondulation résiduelle ?",
   "verso": "Il se charge à chaque sommet puis fournit le courant quand la tension redescend : sortie presque continue, proche de U<sub>max</sub>.<br><b>ΔU ≈ I / (f<sub>ond</sub> C)</b> : diminue si C augmente, augmente avec le courant.",
   "origine": "Cours §5 Le filtrage capacitif"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Derrière un pont (12 V), une carte absorbe 0,50 A ; ondulation ≤ 1,5 V. Capacité ?",
   "verso": "1. f<sub>ond</sub> = <b>100 Hz</b> (pont).<br>2. <b>C ≥ I / (f<sub>ond</sub> ΔU)</b> = 0,50 / (100 × 1,5) = 3,3 × 10<sup>−3</sup> F = 3300 µF.<br>3. Valeur normalisée <b>supérieure</b> : 4700 µF → ΔU ≈ 1,1 V.",
   "origine": "Cours §5 Dimensionner un condensateur de filtrage"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Deux précautions pour un condensateur chimique de filtrage ?",
   "verso": "Il est <b>polarisé</b> : à l'envers, il chauffe et peut exploser.<br>Sa <b>tension de service</b> doit dépasser U<sub>max</sub>.",
   "origine": "Cours §5 Le condensateur chimique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Constitution d'une alimentation continue classique ? Conséquence côté réseau ?",
   "verso": "<b>Transformateur → pont de diodes → condensateur</b>.<br>Le condensateur ne se recharge qu'aux sommets : le réseau fournit le courant par <b>brèves pointes</b>, <b>non sinusoïdal</b>.",
   "origine": "Cours §6 La chaîne de conversion"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
