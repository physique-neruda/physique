/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 10 — Les redresseurs
   Le bilan vient de CRSA_ch10_bilan.tex, les cartes des \trou{} de
   CRSA_ch10_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "10",
 "titre": "Les redresseurs",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Une tension sinusoïdale de 230 V efficace a pour valeur maximale :",
   "choix": [
    "325 V",
    "163 V",
    "460 V",
    "230 V"
   ],
   "bonne": 0,
   "expl": "230 × √2 = 325 V. De l'efficace vers le maximum, on MULTIPLIE par √2."
  },
  {
   "q": "Combien vaut √2 à trois chiffres significatifs ?",
   "choix": [
    "1,41",
    "1,73",
    "1,42",
    "2,00"
   ],
   "bonne": 0,
   "expl": "1,41421… donc 1,41. Ne pas le confondre avec √3 = 1,73, celui du triphasé."
  },
  {
   "q": "Un signal dont la valeur maximale est 100 V et la valeur moyenne 2/π fois cette valeur a pour valeur moyenne :",
   "choix": [
    "63,7 V",
    "70,7 V",
    "50,0 V",
    "31,8 V"
   ],
   "bonne": 0,
   "expl": "2/π = 0,637, donc 63,7 V. C'est la valeur moyenne d'un redressement double alternance ; 70,7 V serait la valeur efficace."
  },
  {
   "q": "Un signal a une période T = 2,5 ms. Sa fréquence vaut :",
   "choix": [
    "400 Hz",
    "40 Hz",
    "4000 Hz",
    "250 Hz"
   ],
   "bonne": 0,
   "expl": "1/0,0025 = 400 Hz. Convertir la milliseconde avant d'inverser."
  },
  {
   "q": "Sur un oscilloscope réglé à 10 V par division, une courbe atteint 4,8 divisions. La tension vaut :",
   "choix": [
    "48 V",
    "4,8 V",
    "480 V",
    "14,8 V"
   ],
   "bonne": 0,
   "expl": "4,8 × 10 = 48 V. On multiplie le nombre de divisions par le calibre."
  },
  {
   "q": "Une période dure 20 ms. Un retard de 2,5 ms correspond à un angle de :",
   "choix": [
    "45°",
    "90°",
    "30°",
    "12,5°"
   ],
   "bonne": 0,
   "expl": "2,5/20 × 360 = 45°. Une période entière vaut 360° : le reste est une proportionnalité."
  }
 ],
 "bilan": [
  {
   "q": "Un redresseur est un convertisseur :",
   "choix": [
    "alternatif alternatif",
    "alternatif continu",
    "continu continu",
    "continu alternatif"
   ],
   "bonne": 1,
   "expl": "C'est la définition même du redressement. Le a est le transformateur, le c le hacheur, le d l'onduleur."
  },
  {
   "q": "Un pont de Graetz comporte :",
   "choix": [
    "deux diodes",
    "trois diodes",
    "quatre diodes",
    "six diodes"
   ],
   "bonne": 2,
   "expl": "Quatre diodes, montées en deux branches."
  },
  {
   "q": "Dans un pont de diodes alimenté en sinusoïdal, à un instant donné :",
   "choix": [
    "une seule diode conduit",
    "deux diodes conduisent, du même côté",
    "deux diodes conduisent, en diagonale",
    "les quatre diodes conduisent"
   ],
   "bonne": 2,
   "expl": "Elles conduisent deux par deux, en diagonale : une diode du haut avec la diode du bas de l'autre branche. C'est ce qui fait que le courant traverse toujours la charge dans le même sens."
  },
  {
   "q": "Dans un schéma équivalent, une diode bloquée est remplacée par :",
   "choix": [
    "un fil",
    "un interrupteur ouvert",
    "une résistance",
    "une source de tension"
   ],
   "bonne": 1,
   "expl": "Une diode bloquée ne laisse passer aucun courant : c'est un interrupteur ouvert. Une diode passante, elle, se remplace par un fil."
  },
  {
   "q": "Le réseau est à 50 Hz. La fréquence de la tension en sortie d'un pont de Graetz vaut :",
   "choix": [
    "25 Hz",
    "50 Hz",
    "100 Hz",
    "150 Hz"
   ],
   "bonne": 2,
   "expl": "Le redressement est double alternance : l'alternance négative est retournée, donc le motif se répète deux fois par période. f_s = 2 f_e."
  },
  {
   "q": "Le secondaire d'un transformateur délivre 24 V efficaces. La valeur moyenne en sortie du pont de diodes vaut :",
   "choix": [
    "15,3 V",
    "21,6 V",
    "24,0 V",
    "34,0 V"
   ],
   "bonne": 1,
   "expl": "Attention au piège : 24 V est une valeur efficace. Il faut d'abord U_max = 24√2 = 34 V, puis u_s = 2 × 34/π= 21,6 V. La réponse d est l'erreur classique consistant à s'arrêter à U_max."
  },
  {
   "q": "Pour mesurer la valeur moyenne d'une tension redressée, le commutateur du voltmètre se place sur :",
   "choix": [
    "AC",
    "DC",
    "AC+DC",
    "peu importe"
   ],
   "bonne": 1,
   "expl": "La position DC affiche la valeur moyenne. En AC, l'appareil retire justement la composante continue."
  },
  {
   "q": "Pour lisser la tension aux bornes d'une charge, on ajoute :",
   "choix": [
    "un condensateur en série",
    "un condensateur en parallèle",
    "une bobine en série",
    "une bobine en parallèle"
   ],
   "bonne": 1,
   "expl": "Le condensateur se monte en parallèle sur la charge : il se charge à la crête et comble les creux de tension."
  },
  {
   "q": "Pour lisser le courant dans une charge, on ajoute :",
   "choix": [
    "un condensateur en série",
    "un condensateur en parallèle",
    "une bobine en série",
    "une bobine en parallèle"
   ],
   "bonne": 2,
   "expl": "La bobine se monte en série : elle s'oppose aux variations du courant. Retenir la paire : C en parallèle pour la tension, L en série pour le courant."
  },
  {
   "q": "Ce qui distingue un thyristor d'une diode, c'est :",
   "choix": [
    "il supporte une tension plus élevée",
    "il conduit dans les deux sens",
    "on choisit l'instant où il devient passant",
    "il ne chauffe pas"
   ],
   "bonne": 2,
   "expl": "Le thyristor n'est passant que si on lui envoie une impulsion sur sa gâchette. C'est cette commande qui permet de régler la valeur moyenne par le retard à l'amorçage."
  },
  {
   "q": "Sur un spectre en amplitude, la raie située à f = 0 Hz représente :",
   "choix": [
    "la valeur efficace",
    "la valeur maximale",
    "la valeur moyenne",
    "l'ondulation"
   ],
   "bonne": 2,
   "expl": "La raie à fréquence nulle est la valeur moyenne. C'est le moyen le plus rapide de la relever quand un sujet fournit un spectre."
  },
  {
   "q": "Par rapport à un pont monophasé PD2, un pont triphasé PD3 :",
   "choix": [
    "produit davantage d'harmoniques de rang 3",
    "produit autant d'harmoniques de rang 3",
    "ne produit aucun harmonique de rang 3",
    "ne produit aucun harmonique"
   ],
   "bonne": 2,
   "expl": "C'est le principal avantage du montage triphasé : les harmoniques de rang 3 sont ceux qui s'additionnent dans le conducteur neutre au lieu de s'y compenser. Le PD3 en produit toujours d'autres (rangs 5, 7, 11, 13), d'où le rejet de la réponse d. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Redresser » ?",
   "verso": "<strong>Redresser</strong>, c'est : Le convertisseur qui réalise cette opération s'appelle un <strong>redresseur</strong>.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Retard à l'amorçage » ?",
   "verso": "Le <strong>retard à l'amorçage</strong> α est : On le lit sur un chronogramme en mesurant le retard Δt, puis : \\[ α= 360° × (Δt)/T. \\]",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "La règle à retenir — qu'y a-t-il à retenir ?",
   "verso": "Les diodes d'un pont conduisent deux par deux, en diagonale. Dans les deux cas, le courant entre par la <strong>même</strong> borne de la charge : c'est pourquoi u_s ne change jamais de signe.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Ne pas les confondre — qu'y a-t-il à retenir ?",
   "verso": "[2]Le condensateur se monte <em>en parallèle</em> sur la charge et lisse la tension. La bobine se monte <em>en série</em> avec la charge et lisse le courant.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Sur un spectre en amplitude, la raie située à f = 0 Hz …….",
   "rep": "est la valeur moyenne du signal",
   "verso": "<strong>est la valeur moyenne du signal</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Dans les deux cas, le courant entre par la <strong>même</strong> borne de la charge : c'est pourquoi …….",
   "rep": "u_s ne change jamais de signe",
   "verso": "<strong>u_s ne change jamais de signe</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un redresseur est un convertisseur ……",
   "rep": "alternatif continu",
   "verso": "<strong>alternatif continu</strong> — C'est la définition même du redressement. Le a est le transformateur, le c le hacheur, le d l'onduleur.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un pont de Graetz comporte ……",
   "rep": "quatre diodes",
   "verso": "<strong>quatre diodes</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans un schéma équivalent, une diode bloquée est remplacée par ……",
   "rep": "un interrupteur ouvert",
   "verso": "<strong>un interrupteur ouvert</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le réseau est à 50 Hz. La fréquence de la tension en sortie d'un pont de Graetz vaut ……",
   "rep": "100 Hz",
   "verso": "<strong>100 Hz</strong> — Le redressement est double alternance : l'alternance négative est retournée, donc le motif se répète deux fois par période. f_s = 2 f_e.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le secondaire d'un transformateur délivre 24 V efficaces. La valeur moyenne en sortie du pont de diodes vaut ……",
   "rep": "21,6 V",
   "verso": "<strong>21,6 V</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pour mesurer la valeur moyenne d'une tension redressée, le commutateur du voltmètre se place sur ……",
   "rep": "DC",
   "verso": "<strong>DC</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pour lisser la tension aux bornes d'une charge, on ajoute ……",
   "rep": "un condensateur en parallèle",
   "verso": "<strong>un condensateur en parallèle</strong> — Le condensateur se monte en parallèle sur la charge : il se charge à la crête et comble les creux de tension.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pour lisser le courant dans une charge, on ajoute ……",
   "rep": "une bobine en série",
   "verso": "<strong>une bobine en série</strong> — La bobine se monte en série : elle s'oppose aux variations du courant. Retenir la paire : C en parallèle pour la tension, L en série pour le courant.",
   "origine": "bilan"
  }
 ]
};
