/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 10 — Les redresseurs
   Le bilan vient de CRSA_ch10_bilan.tex, les cartes des \trou{} de
   CRSA_ch10_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "10",
 "cle": "ch10",
 "etiquette": "Chapitre 10",
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
   "expl": "Attention au piège : 24 V est une valeur efficace. Il faut d'abord U_max = 24√2 = 34 V, puis u_s = 2 × 34/π= 21,6 V. La réponse « 34,0 V » est l'erreur classique consistant à s'arrêter à U_max."
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
   "expl": "C'est le principal avantage du montage triphasé : les harmoniques de rang 3 sont ceux qui s'additionnent dans le conducteur neutre au lieu de s'y compenser. Le PD3 en produit toujours d'autres (rangs 5, 7, 11, 13), d'où le rejet de la réponse « ne produit aucun harmonique ». enumerate"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que signifie « redresser » une tension ? Redressé veut-il dire constant ?",
   "verso": "Transformer une tension alternative en une tension qui <b>garde toujours le même signe</b>. <b>Non</b> : elle ondule encore (arches) ; il faut ensuite la lisser.",
   "origine": "Cours §1 Redresser"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment se comporte une diode parfaite passante ? bloquée ? Qui décide de son état ?",
   "verso": "Courant dans <b>un seul sens</b>. Passante : un <b>fil</b> ; bloquée : un <b>interrupteur ouvert</b>. C'est le <b>circuit</b> qui décide.",
   "origine": "Cours §2 La diode"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment conduisent les diodes d'un pont de Graetz (PD2) ? Conséquence sur u<sub>s</sub> ?",
   "verso": "<b>Deux par deux, en diagonale</b>. Le courant entre toujours par la même borne de la charge : <b>u<sub>s</sub> ne change jamais de signe</b>.",
   "origine": "Cours §3 Le pont de Graetz"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Fréquence de la tension redressée double alternance ?",
   "verso": "<b>f<sub>s</sub> = 2 f<sub>e</sub></b> : 100 Hz pour un réseau à 50 Hz.",
   "origine": "Cours §4 Fréquence de sortie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Valeur moyenne en sortie d'un pont de diodes ? Piège ?",
   "verso": "<b>⟨u<sub>s</sub>⟩ = 2 U<sub>max</sub> / π ≈ 0,637 U<sub>max</sub></b>.<br>Piège : une tension de transformateur donnée est <b>efficace</b> → U<sub>max</sub> = U √2.",
   "origine": "Cours §4 La valeur moyenne"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sur quelle position mesurer la valeur moyenne d'une tension redressée ?",
   "verso": "Sur <b>DC</b>. En AC, l'appareil retire la composante continue et ne mesure que l'ondulation.",
   "origine": "Cours §4 Mesurer"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Lissage : comment monte-t-on le condensateur ? la bobine ? Que lisse chacun ?",
   "verso": "<b>Condensateur en parallèle</b> sur la charge : lisse la <b>tension</b>.<br><b>Bobine en série</b> : lisse le <b>courant</b>.<br>Plus C ou L est grand, plus l'ondulation est faible.",
   "origine": "Cours §5 Lisser"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que le retard à l'amorçage α d'un thyristor ? Comment le lire ?",
   "verso": "L'angle entre le début théorique de conduction et l'impulsion de gâchette.<br><b>α = 360° × Δt / T</b>.",
   "origine": "Cours §6 Retard à l'amorçage"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Valeur moyenne d'un pont mixte et d'un pont tout thyristor ? Hypothèse ?",
   "verso": "Mixte : <b>(U<sub>max</sub>/π)(1 + cos α)</b>.<br>Tout thyristor : <b>(2 U<sub>max</sub>/π) cos α</b>.<br>Hypothèse : courant <b>parfaitement lissé</b> (bobine en série).",
   "origine": "Cours §6 Ponts commandés"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sur le spectre d'une tension redressée, que représente la raie à 0 Hz ?",
   "verso": "La <b>valeur moyenne</b>. Les autres raies (surtout 100 Hz) décrivent l'ondulation.",
   "origine": "Cours §7 Le spectre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi un redresseur pollue-t-il le réseau ? Particularité du pont triphasé PD3 ?",
   "verso": "Il appelle un courant <b>non sinusoïdal</b> (à-coups) → <b>harmoniques</b>. Le PD3 ne produit <b>aucun harmonique de rang 3</b> (ceux qui chauffent le neutre).",
   "origine": "Cours §7 Côté réseau"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Transformateur 230 V/24 V suivi d'un pont de Graetz. Comment trouver ⟨u<sub>s</sub>⟩ ?",
   "verso": "1. 24 V est une valeur <b>efficace</b>.<br>2. U<sub>max</sub> = 24 √2 = <b>34 V</b>.<br>3. ⟨u<sub>s</sub>⟩ = 2 × 34/π = <b>21,6 V</b>.<br>4. Contrôle : ≈ 64 % de U<sub>max</sub>, inférieur à 24 V.",
   "origine": "Cours §4 Méthode — Valeur moyenne d'un pont"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Pont tout thyristor, U<sub>max</sub> = 34 V, 50 Hz, conduction 3,33 ms après le zéro. Comment trouver ⟨u<sub>s</sub>⟩ ?",
   "verso": "1. α = 360 × 3,33/20 = <b>60°</b>.<br>2. Identifier le pont (4 thyristors).<br>3. ⟨u<sub>s</sub>⟩ = (2 × 34/π) cos 60° = <b>10,8 V</b>.<br>4. Vérifier : α plus grand → tension plus faible.",
   "origine": "Cours §6 Méthode — Pont commandé"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Tension lissée entre 40 V et 44 V. Comment trouver l'ondulation et le taux d'ondulation ?",
   "verso": "1. <b>Δu = 44 − 40 = 4 V</b>.<br>2. Valeur moyenne ≈ 42 V.<br>3. Taux = Δu / ⟨u⟩ = 4/42 ≈ <b>9,5 %</b>.",
   "origine": "Cours §5 Lisser"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment obtenir la valeur moyenne d'un signal à partir de son spectre ?",
   "verso": "1. Relever l'amplitude de la <b>raie à 0 Hz</b> : c'est ⟨u⟩.<br>2. Pour vérifier : recalculer 2U<sub>max</sub>/π.<br>3. Comparer par un <b>écart relatif</b> et conclure.",
   "origine": "Cours §7 Lire une valeur moyenne sur un spectre"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
