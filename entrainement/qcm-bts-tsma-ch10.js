/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 10 · Machines thermiques
   Le bilan vient de ch10_bilan.tex, les cartes des \trou{} de
   ch10_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "10",
 "titre": "Machines thermiques",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Convertir 527 °C en kelvins :",
   "choix": [
    "254 K",
    "800 K",
    "527 K",
    "827 K"
   ],
   "bonne": 1,
   "expl": "527 + 273 = 800 K. Tout ce chapitre repose sur des températures absolues."
  },
  {
   "q": "Combien vaut 1 − 320/800, en pourcentage ?",
   "choix": [
    "40,0 %",
    "60,0 %",
    "62,5 %",
    "2,5 %"
   ],
   "bonne": 1,
   "expl": "1 − 0,400 = 0,600. C'est la forme du rendement de Carnot."
  },
  {
   "q": "Un système reçoit 800 J et cède 520 J. Le bilan algébrique vaut :",
   "choix": [
    "+1320 J",
    "+280 J",
    "−280 J",
    "+800 J"
   ],
   "bonne": 1,
   "expl": "Reçu +800, cédé −520 : la convention du banquier, ce que le système reçoit est positif."
  },
  {
   "q": "Une puissance de 620 W fonctionne 15,0 min. L'énergie vaut :",
   "choix": [
    "9,30×10³ J",
    "5,58×10⁵ J",
    "5,58×10⁴ J",
    "0,155 J"
   ],
   "bonne": 1,
   "expl": "Δt = 900 s, donc W = 5,58×10⁵ J, soit 0,155 kW·h."
  },
  {
   "q": "2,00 kg d'eau passent de 20,0 °C à 8,0 °C (c = 4185 J/kg/K). L'énergie cédée vaut :",
   "choix": [
    "1,00×10⁵ J",
    "1,67×10⁵ J",
    "8,37×10³ J",
    "2,34×10⁵ J"
   ],
   "bonne": 0,
   "expl": "Q = mcΔθ = 2,00 × 4185 × 12,0 = 1,00×10⁵ J."
  },
  {
   "q": "Deux incertitudes relatives de 2,0 % et 3,6 % se composent en :",
   "choix": [
    "5,6 %",
    "4,1 %",
    "2,8 %",
    "1,6 %"
   ],
   "bonne": 1,
   "expl": "√(2,0² + 3,6²) = 4,1 %. Le terme le plus grand domine."
  }
 ],
 "bilan": [
  {
   "q": "Le second principe de la thermodynamique :",
   "choix": [
    "interdit de créer de l'énergie",
    "indique dans quel sens les transformations se produisent",
    "remplace le premier principe"
   ],
   "bonne": 1,
   "expl": "c'est le premier principe qui interdit de créer de l'énergie ; le second dit dans quel sens les choses se produisent. Les deux coexistent, aucun ne remplace l'autre : devant une machine impossible, il faut savoir dire lequel des deux est violé. 3pt"
  },
  {
   "q": "Parmi ces phénomènes, lequel n'est pas une cause d'irréversibilité ?",
   "choix": [
    "les frottements",
    "un transfert thermique sous un écart de 200 K",
    "une compression infiniment lente dans un cylindre à température constante"
   ],
   "bonne": 2,
   "expl": "les trois causes d'irréversibilité sont les frottements, les transferts sous écart fini, les détentes brusques. Une compression infiniment lente à température constante est au contraire le seul cas réversible — et c'est précisément ce que fait le cycle de Carnot. 3pt"
  },
  {
   "q": "Un système reçoit 600 J d'un thermostat à 300 K. Sa variation d'entropie vaut :",
   "choix": [
    "+2,00 J/K",
    "-2,00 J/K",
    "+180000 J/K"
   ],
   "bonne": 0,
   "expl": "ΔS = Q/T = 600/300 = +2,00 J/K, le signe étant celui de Q. La réponse c vient d'une multiplication au lieu d'une division. Et pour l'ensemble système + entourage, ΔS_total ≥ 0 toujours : aucune conception, aussi soignée soit-elle, ne fait diminuer l'entropie totale. 3pt"
  },
  {
   "q": "Pour un système et tout ce qui l'entoure, la variation d'entropie totale :",
   "choix": [
    "est toujours nulle",
    "ne peut jamais être négative",
    "peut être négative si la machine est bien conçue"
   ],
   "bonne": 1,
   "expl": "ΔS = Q/T = 600/300 = +2,00 J/K, le signe étant celui de Q. La réponse c vient d'une multiplication au lieu d'une division. Et pour l'ensemble système + entourage, ΔS_total ≥ 0 toujours : aucune conception, aussi soignée soit-elle, ne fait diminuer l'entropie totale. 3pt"
  },
  {
   "q": "Sur un cycle complet d'une machine ditherme :",
   "choix": [
    "ΔU = W + Q_c + Q_f",
    "W + Q_c + Q_f = 0",
    "W = Q_c + Q_f"
   ],
   "bonne": 1,
   "expl": "sur un cycle, le fluide revient à son état de départ donc ΔU = 0, ce qui donne W + Q_c + Q_f = 0. La réponse a est le premier principe hors cycle ; la c oublie un signe. 3pt"
  },
  {
   "q": "Dans un moteur, la chaleur cédée à la source froide :",
   "choix": [
    "pourrait être annulée avec de meilleurs réglages",
    "est imposée par le second principe",
    "est nulle si le moteur est adiabatique"
   ],
   "bonne": 1,
   "expl": "c'est le point le plus important du chapitre. Q_f n'est pas une perte accidentelle : un moteur qui ne céderait rien à la source froide aurait un rendement de 100 %, ce que le second principe interdit. Aucun réglage ne supprimera jamais le radiateur d'un moteur. 3pt"
  },
  {
   "q": "Un climatiseur d'efficacité 2,6 :",
   "choix": [
    "viole le premier principe",
    "viole le second principe",
    "ne viole rien du tout"
   ],
   "bonne": 2,
   "expl": "une efficacité supérieure à 1 ne crée aucune énergie : la machine en déplace. Les joules retirés de la cabine existaient déjà. Et comme le condenseur rejette à la fois ce qui a été pris et le travail payé, Q_c = Q_f + |W|, d'où e_c = e_f + 1 — une pompe à chaleur « livre » toujours une unité de plus qu'un climatiseur ne « prend ». 3pt"
  },
  {
   "q": "Entre une pompe à chaleur et un climatiseur, la relation entre les performances est :",
   "choix": [
    "e_c = e_f",
    "e_c = e_f + 1",
    "e_c = 1 - e_f"
   ],
   "bonne": 1,
   "expl": "une efficacité supérieure à 1 ne crée aucune énergie : la machine en déplace. Les joules retirés de la cabine existaient déjà. Et comme le condenseur rejette à la fois ce qui a été pris et le travail payé, Q_c = Q_f + |W|, d'où e_c = e_f + 1 — une pompe à chaleur « livre » toujours une unité de plus qu'un climatiseur ne « prend ». 3pt"
  },
  {
   "q": "Un moteur fonctionne entre 800 K et 320 K. Son rendement de Carnot vaut :",
   "choix": [
    "40 %",
    "60 %",
    "250 %"
   ],
   "bonne": 1,
   "expl": "η_C = 1 - 320/800 = 0,60. La réponse a correspond à l'oubli du « 1 moins », la c à un rapport inversé. Et ce nombre est un plafond : il dit ce qu'aucune machine ne dépassera entre ces températures, jamais ce qu'une machine donnée fera. Le moteur Stirling du TP en atteint 2 %, un bon diesel plus de la moitié. 3pt"
  },
  {
   "q": "Le rendement de Carnot est :",
   "choix": [
    "le rendement que la machine atteindra",
    "une limite que la machine ne peut pas dépasser",
    "une valeur moyenne des machines du commerce"
   ],
   "bonne": 1,
   "expl": "η_C = 1 - 320/800 = 0,60. La réponse a correspond à l'oubli du « 1 moins », la c à un rapport inversé. Et ce nombre est un plafond : il dit ce qu'aucune machine ne dépassera entre ces températures, jamais ce qu'une machine donnée fera. Le moteur Stirling du TP en atteint 2 %, un bon diesel plus de la moitié. 3pt"
  },
  {
   "q": "Dans un diagramme entropique (T,S), l'aire enfermée par un cycle représente :",
   "choix": [
    "la chaleur reçue de la source chaude",
    "le travail utile",
    "la variation d'énergie interne"
   ],
   "bonne": 1,
   "expl": "dans le plan (T,S), une chaleur échangée à température constante vaut T ΔS, soit l'aire d'un rectangle. La chaleur reçue est l'aire sous l'isotherme chaude ; le travail utile est l'aire enfermée par le cycle. Quant à ΔU, elle est nulle sur un cycle. 3pt"
  },
  {
   "q": "Un binôme mesure une efficacité de 12 sur une machine dont l'efficacité de Carnot vaut 10. On peut affirmer :",
   "choix": [
    "que la machine est excellente",
    "qu'il y a une erreur, sans refaire le calcul",
    "qu'il faut refaire la mesure avant de se prononcer"
   ],
   "bonne": 1,
   "expl": "et c'est la question la plus utile de la feuille. Une performance mesurée supérieure à celle de Carnot est impossible : le second principe permet d'invalider le résultat sans rien recalculer. C'est le seul endroit de l'année où un principe physique sert directement d'outil de contrôle. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Réversible, irréversible » ?",
   "verso": "Une transformation est <strong>réversible</strong> si l'on peut la parcourir en sens inverse : Elle est <strong>irréversible</strong> dans le cas contraire — c'est-à-dire dans tous les cas réels.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Entropie échangée » ?",
   "verso": "Lorsqu'un système échange une chaleur Q avec un thermostat à la température T, sa variation d'entropie vaut ΔS = Q/T, en J/K. Le signe de ΔS est celui de Q.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Machine ditherme » ?",
   "verso": "Une <strong>machine ditherme</strong> est une machine qui, <strong>en fonctionnant par cycles</strong>, échange de la chaleur avec deux sources de températures différentes et du travail avec le milieu extérieur.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Second principe, énoncé de l'évolution — qu'y a-t-il à retenir ?",
   "verso": "Un transfert thermique ne peut pas s'effectuer spontanément d'un corps froid vers un corps chaud. Plus généralement, le second principe est un <strong>principe d'évolution</strong> : il indique dans quel sens une transformation se produit.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Le second principe, écrit avec l'entropie — qu'y a-t-il à retenir ?",
   "verso": "Pour un système et tout ce qui l'entoure, ΔS_total ≥ 0. L'égalité ne vaut que pour une transformation réversible ; toute transformation réelle donne ΔS_total > 0.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Rendement, efficacité, coefficient de performance — qu'y a-t-il à retenir ?",
   "verso": "Moteur : η= |W| / Q_c, toujours inférieur à 1. Machine frigorifique : e_f = Q_f / |W|. Pompe à chaleur : e_c = Q_c / |W|. Ces deux dernières sont souvent supérieures à 1.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Un transfert thermique ne peut pas s'effectuer spontanément …….",
   "rep": "d'un corps froid vers un corps chaud",
   "verso": "<strong>d'un corps froid vers un corps chaud</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Chacune de ces trois irréversibilités …… par rapport à celle de Carnot.",
   "rep": "dégrade la performance",
   "verso": "<strong>dégrade la performance</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "L'égalité ne vaut que pour une transformation réversible ; toute transformation réelle donne …….",
   "rep": "ΔS_total > 0",
   "verso": "<strong>ΔS_total > 0</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Dans un diagramme (T,S), la chaleur échangée à température constante vaut Q = T × ΔS, c'est-à-dire …….",
   "rep": "l'aire du rectangle correspondant",
   "verso": "<strong>l'aire du rectangle correspondant</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Dans une machine réelle, les échanges se font ……, le fluide subit des frottements, et les détentes sont brutales.",
   "rep": "sous des écarts finis de température",
   "verso": "<strong>sous des écarts finis de température</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Le second principe de la thermodynamique ……",
   "rep": "indique dans quel sens les transformations se produisent",
   "verso": "<strong>indique dans quel sens les transformations se produisent</strong> — c'est le premier principe qui interdit de créer de l'énergie ; le second dit dans quel sens les choses se produisent.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Parmi ces phénomènes, lequel n'est pas une cause d'irréversibilité ?",
   "rep": "une compression infiniment lente dans un cylindre à température constante",
   "verso": "<strong>une compression infiniment lente dans un cylindre à température constante</strong> — les trois causes d'irréversibilité sont les frottements, les transferts sous écart fini, les détentes brusques.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un système reçoit 600 J d'un thermostat à 300 K. Sa variation d'entropie vaut ……",
   "rep": "+2,00 J/K",
   "verso": "<strong>+2,00 J/K</strong>",
   "origine": "bilan"
  }
 ]
};
