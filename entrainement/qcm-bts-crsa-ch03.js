/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 3 — Énergie thermique
   Le bilan vient de CRSA_ch03_bilan.tex, les cartes des \trou{} de
   CRSA_ch03_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "3",
 "titre": "Énergie thermique",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Convertir 80 L en mètres cubes :",
   "choix": [
    "8,0×10⁻² m³",
    "8,0×10⁻³ m³",
    "8,0×10¹ m³",
    "8,0×10⁻⁵ m³"
   ],
   "bonne": 0,
   "expl": "1 L = 1 dm³ = 10⁻³ m³, donc 80 L = 8,0×10⁻² m³. Le pont à retenir est 1 L = 1 dm³."
  },
  {
   "q": "Quelle masse d'eau contient un bac de 80 L ? (ρ = 1000 kg/m³)",
   "choix": [
    "80 kg",
    "8,0 kg",
    "800 kg",
    "0,080 kg"
   ],
   "bonne": 0,
   "expl": "m = ρ × V = 1000 × 0,080 = 80 kg. Un litre d'eau pèse un kilogramme : c'est le repère qui évite de se tromper de rang."
  },
  {
   "q": "Calculer 80 × 4185 × 55 :",
   "choix": [
    "1,84×10⁷",
    "1,84×10⁵",
    "3,35×10⁵",
    "1,84×10⁴"
   ],
   "bonne": 0,
   "expl": "18 414 000, soit 1,84×10⁷ J. C'est l'énergie pour chauffer 80 kg d'eau de 55 °C."
  },
  {
   "q": "Convertir 1,84×10⁷ J en kW·h :",
   "choix": [
    "5,11 kW·h",
    "51,1 kW·h",
    "0,511 kW·h",
    "6,62 kW·h"
   ],
   "bonne": 0,
   "expl": "1,84×10⁷ / 3,6×10⁶ = 5,11 kW·h. Diviser par 3,6 millions, une bonne fois pour toutes."
  },
  {
   "q": "Un bac est à 70 °C, l'atelier à 18 °C. L'écart de température vaut :",
   "choix": [
    "52 °C, soit 52 K",
    "52 °C, soit 325 K",
    "88 °C",
    "343 K"
   ],
   "bonne": 0,
   "expl": "Un ÉCART de température a la même valeur en degrés Celsius et en kelvins : les deux échelles ont le même pas. C'est seulement une température qui se convertit."
  },
  {
   "q": "Convertir 3069 s en minutes et secondes :",
   "choix": [
    "51 min 9 s",
    "50 min 69 s",
    "51 min 15 s",
    "30 min 69 s"
   ],
   "bonne": 0,
   "expl": "3069/60 = 51,15 min, et 0,15 min = 9 s. Attention : 0,15 min n'est pas 15 s."
  }
 ],
 "bilan": [
  {
   "q": "Le seul mode de transfert thermique qui ne nécessite aucun support matériel est :",
   "choix": [
    "la conduction",
    "la convection",
    "le rayonnement",
    "aucun des trois"
   ],
   "bonne": 2,
   "expl": "C'est pourquoi l'énergie du Soleil nous parvient à travers le vide."
  },
  {
   "q": "Un ventilateur qui refroidit une armoire électrique agit principalement par :",
   "choix": [
    "conduction",
    "convection",
    "rayonnement",
    "changement d'état"
   ],
   "bonne": 1,
   "expl": "C'est l'air en mouvement qui emporte la chaleur."
  },
  {
   "q": "Dans la relation φ= S Δθ/R, la grandeur φ est :",
   "choix": [
    "une énergie en joules",
    "une puissance en watts",
    "une température",
    "une résistance"
   ],
   "bonne": 1,
   "expl": "Un flux thermique est une puissance. Pour obtenir une énergie, il faut le multiplier par une durée."
  },
  {
   "q": "Un écart de température de 40 °C vaut, en kelvins :",
   "choix": [
    "40 K",
    "313 K",
    "233 K",
    "on ne peut pas le savoir"
   ],
   "bonne": 0,
   "expl": "Un écart de température vaut autant en kelvins qu'en degrés Celsius : les deux échelles ont le même pas. La réponse b confond écart et température."
  },
  {
   "q": "Pour une paroi de trois couches de résistances 0,20, 4,00 et 0,30, la résistance totale vaut :",
   "choix": [
    "4,50",
    "1,50",
    "0,24",
    "4,00"
   ],
   "bonne": 0,
   "expl": "0,20+4,00+0,30 = 4,50 : les résistances surfaciques s'additionnent."
  },
  {
   "q": "Plus la résistance thermique d'une paroi est grande :",
   "choix": [
    "plus la chaleur passe",
    "moins la chaleur passe",
    "cela ne change rien",
    "la paroi chauffe"
   ],
   "bonne": 1,
   "expl": "Un bon isolant est celui dont la résistance est grande — c'est l'inverse de l'intuition électrique."
  },
  {
   "q": "L'énergie nécessaire pour chauffer 2 kg d'eau de 10 °C se calcule par :",
   "choix": [
    "Q = mL",
    "Q = mcΔθ",
    "Q = SΔθ/R",
    "Q = PΔt"
   ],
   "bonne": 1,
   "expl": "Il n'y a pas de changement d'état : c'est Q = mcΔθ."
  },
  {
   "q": "Pendant un changement d'état, la température :",
   "choix": [
    "augmente régulièrement",
    "reste constante",
    "diminue",
    "oscille"
   ],
   "bonne": 1,
   "expl": "C'est le palier. L'énergie fournie sert à changer l'état, non à élever la température — d'où l'inapplicabilité de Q = mcΔθ."
  },
  {
   "q": "Faire fondre 1 kg de glace à 0 °C coûte environ :",
   "choix": [
    "4185 J",
    "3,34×10⁵ J",
    "2,26×10⁶ J",
    "rien, la température ne change pas"
   ],
   "bonne": 1,
   "expl": "L_f = 3,34×10⁵ J/kg. La réponse d est le piège : l'énergie est bien réelle, même si la température ne bouge pas."
  },
  {
   "q": "Vaporiser de l'eau coûte, par rapport à la faire fondre, environ :",
   "choix": [
    "deux fois moins",
    "autant",
    "sept fois plus",
    "cent fois plus"
   ],
   "bonne": 2,
   "expl": "2,26×10⁶/3,34×10⁵ ≈ 6,8."
  },
  {
   "q": "Dans un calorimètre, le bilan des échanges s'écrit :",
   "choix": [
    "Q_i = 0",
    "Q_i > 0",
    "Q₁ = Q₂",
    "Q_i = mcΔθ"
   ],
   "bonne": 0,
   "expl": "Ce que l'un cède, l'autre le reçoit : la somme algébrique est nulle. Écrire ainsi évite les erreurs de signe."
  },
  {
   "q": "Une machine prélève de la chaleur dans l'air extérieur pour chauffer un atelier. C'est :",
   "choix": [
    "un moteur thermique",
    "une machine frigorifique",
    "une pompe à chaleur",
    "un calorimètre"
   ],
   "bonne": 2,
   "expl": "On cherche à chauffer la source chaude. Le même appareil, s'il servait à refroidir un local, s'appellerait machine frigorifique. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "retenir",
   "recto": "Reconnaître le mode — qu'y a-t-il à retenir ?",
   "verso": "La <strong>conduction</strong> se fait de proche en proche dans la matière, sans déplacement. La <strong>convection</strong> se fait par déplacement d'un fluide.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Les couches s'additionnent — qu'y a-t-il à retenir ?",
   "verso": "Pour une paroi multicouche : R_tot = R₁ + R₂ + R₃. Et contrairement à l'intuition électrique, <strong>plus R est grand</strong>, moins la chaleur passe.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Le bilan d'un calorimètre — qu'y a-t-il à retenir ?",
   "verso": "Dans une enceinte isolée, ce que l'un des corps cède, l'autre le reçoit : Q_i = 0. Écrire la somme nulle plutôt que « ce qui est cédé égale ce qui est reçu » évite les erreurs de signe.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Un point situé <em>sur</em> une courbe signifie que …….",
   "rep": "les deux états coexistent",
   "verso": "<strong>les deux états coexistent</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Si l'on cherche du <strong>travail</strong>, c'est un …….",
   "rep": "moteur thermique",
   "verso": "<strong>moteur thermique</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>conduction</strong> se fait ……, sans déplacement.",
   "rep": "de proche en proche dans la matière",
   "verso": "<strong>de proche en proche dans la matière</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Si l'on cherche à <strong>chauffer</strong> la source chaude, c'est une …….",
   "rep": "pompe à chaleur",
   "verso": "<strong>pompe à chaleur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Si l'on cherche à <strong>refroidir</strong> la source froide, c'est une …….",
   "rep": "machine frigorifique",
   "verso": "<strong>machine frigorifique</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Le seul mode de transfert thermique qui ne nécessite aucun support matériel est ……",
   "rep": "le rayonnement",
   "verso": "<strong>le rayonnement</strong> — C'est pourquoi l'énergie du Soleil nous parvient à travers le vide.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un ventilateur qui refroidit une armoire électrique agit principalement par ……",
   "rep": "convection",
   "verso": "<strong>convection</strong> — C'est l'air en mouvement qui emporte la chaleur.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans la relation φ= S Δθ/R, la grandeur φ est ……",
   "rep": "une puissance en watts",
   "verso": "<strong>une puissance en watts</strong> — Un flux thermique est une puissance. Pour obtenir une énergie, il faut le multiplier par une durée.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un écart de température de 40 °C vaut, en kelvins ……",
   "rep": "40 K",
   "verso": "<strong>40 K</strong> — Un écart de température vaut autant en kelvins qu'en degrés Celsius : les deux échelles ont le même pas. La réponse b confond écart et température.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Pour une paroi de trois couches de résistances 0,20, 4,00 et 0,30, la résistance totale vaut ……",
   "rep": "4,50",
   "verso": "<strong>4,50</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Plus la résistance thermique d'une paroi est grande ……",
   "rep": "moins la chaleur passe",
   "verso": "<strong>moins la chaleur passe</strong> — Un bon isolant est celui dont la résistance est grande — c'est l'inverse de l'intuition électrique.",
   "origine": "bilan"
  }
 ]
};
