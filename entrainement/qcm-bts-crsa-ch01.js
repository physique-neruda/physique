/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 1 — Énergie, puissance, rendement
   Le bilan vient de CRSA_ch01_bilan.tex, les cartes des \trou{} de
   CRSA_ch01_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "1",
 "titre": "Énergie, puissance, rendement",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Parmi ces deux quotients, lequel peut être un rendement : 731/1190 ou 1190/731 ?",
   "choix": [
    "731/1190",
    "1190/731",
    "les deux",
    "aucun des deux"
   ],
   "bonne": 0,
   "expl": "731/1190 = 0,614. Un rendement est toujours inférieur à 1 : la puissance utile ne peut pas dépasser la puissance absorbée."
  },
  {
   "q": "Combien vaut 0,96 × 0,88 × 0,85 ?",
   "choix": [
    "0,718",
    "0,896",
    "2,69",
    "0,850"
   ],
   "bonne": 0,
   "expl": "0,718 — et le résultat est plus petit que le plus petit des trois facteurs. Trois rendements en cascade se multiplient, et la chaîne est toujours moins bonne que son maillon le plus faible."
  },
  {
   "q": "Convertir 1450 tr/min en rad/s :",
   "choix": [
    "151,8 rad/s",
    "24,17 rad/s",
    "9111 rad/s",
    "86,7 rad/s"
   ],
   "bonne": 0,
   "expl": "1450 × 2π / 60 = 151,8 rad/s. On divise par 60 pour passer aux tours par seconde, puis on multiplie par 2π."
  },
  {
   "q": "Une grandeur passe de 900 à 835. La diminution vaut :",
   "choix": [
    "7,22 %",
    "6,50 %",
    "7,78 %",
    "92,8 %"
   ],
   "bonne": 0,
   "expl": "65/900 = 7,22 %. On divise l'écart par la valeur de DÉPART, jamais par celle d'arrivée."
  },
  {
   "q": "Exprimer 0,417 en pourcentage :",
   "choix": [
    "41,7 %",
    "4,17 %",
    "0,417 %",
    "417 %"
   ],
   "bonne": 0,
   "expl": "0,417 = 41,7 %. Un rendement de 0,417 est un rendement de 41,7 %."
  },
  {
   "q": "Convertir 19,2 kW·h en joules, sachant que 1 kW·h = 3,6 MJ :",
   "choix": [
    "6,91×10⁷ J",
    "6,91×10⁴ J",
    "5,33×10⁶ J",
    "6,91×10¹⁰ J"
   ],
   "bonne": 0,
   "expl": "19,2 × 3,6×10⁶ = 6,91×10⁷ J. Le kilowattheure est une énergie, pas une puissance."
  }
 ],
 "bilan": [
  {
   "q": "L'unité de la puissance est :",
   "choix": [
    "le joule",
    "le watt",
    "le kilowattheure",
    "le newton-mètre"
   ],
   "bonne": 1,
   "expl": "Le joule est l'unité d'énergie, le newton-mètre celle d'un couple."
  },
  {
   "q": "Le kilowattheure est une unité :",
   "choix": [
    "de puissance",
    "d'énergie",
    "de rendement",
    "de couple"
   ],
   "bonne": 1,
   "expl": "Malgré son nom, c'est le produit d'une puissance par une durée."
  },
  {
   "q": "Un appareil de 2 kW fonctionne 3 h. L'énergie consommée vaut :",
   "choix": [
    "0,67 kW·h",
    "6 kW·h",
    "6 kW",
    "6 J"
   ],
   "bonne": 1,
   "expl": "E = P Δt = 2×3 = 6 kW·h. La réponse c est un piège d'unité : le résultat est une énergie, pas une puissance."
  },
  {
   "q": "1 kW·h vaut :",
   "choix": [
    "1000 J",
    "3600 J",
    "3,6 MJ",
    "3,6 kJ"
   ],
   "bonne": 2,
   "expl": "1000 × 3600 = 3,6×10⁶ J."
  },
  {
   "q": "Le principe de conservation de l'énergie appliqué à une machine s'écrit :",
   "choix": [
    "P_a = P_u",
    "P_a = P_u + P_p",
    "P_u = P_a + P_p",
    "P_p = P_a × P_u"
   ],
   "bonne": 1,
   "expl": "Tout ce qui entre ressort : en partie utile, en partie perdu."
  },
  {
   "q": "Les « pertes » d'un moteur correspondent à de l'énergie :",
   "choix": [
    "qui disparaît",
    "transférée en chaleur",
    "stockée dans le moteur",
    "qui n'a jamais été absorbée"
   ],
   "bonne": 1,
   "expl": "Rien ne disparaît. C'est de l'énergie bien réelle, simplement transférée sous une forme dont on n'a que faire."
  },
  {
   "q": "Le rendement d'une machine se calcule par :",
   "choix": [
    "P_a/P_u",
    "P_u/P_a",
    "P_u × P_a",
    "P_a - P_u"
   ],
   "bonne": 1,
   "expl": "L'utile sur l'absorbé — jamais l'inverse."
  },
  {
   "q": "Un rendement calculé vaut 1,25. On peut affirmer :",
   "choix": [
    "que la machine est très performante",
    "qu'il y a une erreur de calcul",
    "que c'est une pompe à chaleur",
    "que les pertes sont négatives"
   ],
   "bonne": 1,
   "expl": "Un rendement ne dépasse jamais 1. La réponse c est le piège : une pompe à chaleur a une efficacité supérieure à 1, pas un rendement."
  },
  {
   "q": "Une chaîne comporte trois éléments de rendements 0,95, 0,90 et 0,80. Le rendement total vaut :",
   "choix": [
    "2,65",
    "0,88",
    "0,684",
    "0,80"
   ],
   "bonne": 2,
   "expl": "0,95×0,90×0,80 = 0,684. La réponse a additionne, la b fait une moyenne : ni l'une ni l'autre n'a de sens."
  },
  {
   "q": "Pour calculer la puissance absorbée à partir de la puissance utile et du rendement, il faut :",
   "choix": [
    "multiplier P_u par η",
    "diviser P_u par η",
    "ajouter η à P_u",
    "diviser η par P_u"
   ],
   "bonne": 1,
   "expl": "On divise, et le contrôle est immédiat : P_a doit être supérieure à P_u."
  },
  {
   "q": "Une pompe à chaleur d'efficacité 4 restitue 4 kW·h pour 1 kW·h consommé. Les 3 kW·h supplémentaires :",
   "choix": [
    "sont créés par la machine",
    "proviennent de l'environnement extérieur",
    "sont une erreur du constructeur",
    "viennent du réseau électrique"
   ],
   "bonne": 1,
   "expl": "Elle les prélève dehors et les transporte dedans. La conservation de l'énergie est respectée."
  },
  {
   "q": "Un réfrigérateur absorbe 100 W et extrait 200 W de son enceinte. La puissance rejetée dans la pièce vaut :",
   "choix": [
    "100 W",
    "200 W",
    "300 W",
    "0 W"
   ],
   "bonne": 2,
   "expl": "Tout ce qui entre ressort : 100 + 200 = 300 W. Un réfrigérateur réchauffe la pièce — il lui rend davantage qu'il ne lui prend."
  },
  {
   "q": "Pour une même machine frigorifique, l'efficacité en mode chauffage et l'efficacité en mode froid sont liées par :",
   "choix": [
    "e_chaud = e_froid",
    "e_chaud = e_froid + 1",
    "e_chaud = 2 e_froid",
    "elles sont indépendantes"
   ],
   "bonne": 1,
   "expl": "L'électricité du compresseur se retrouve elle aussi du côté chaud : le numérateur du mode chauffage vaut celui du mode froid plus la puissance électrique."
  },
  {
   "q": "Dans une cellule, le four consomme 19 kW·h par jour et le convoyeur 10 kW·h. Pour réduire la facture, il faut agir en priorité :",
   "choix": [
    "sur le convoyeur, plus facile d'accès",
    "sur le four",
    "indifféremment sur l'un ou l'autre",
    "sur les deux à parts égales"
   ],
   "bonne": 1,
   "expl": "Le four pèse les deux tiers de la consommation. On optimise d'abord le poste dominant, pas le plus accessible — c'est le réflexe que l'épreuve attend. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Puissance et énergie » ?",
   "verso": "La <strong>puissance</strong> P est l'énergie transférée par unité de temps ; elle s'exprime en <strong>watts</strong>. L'<strong>énergie</strong> E est la quantité totale transférée ; elle s'exprime en <strong>joules</strong>.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Rendement » ?",
   "verso": "Le <strong>rendement</strong> d'une machine est le quotient η= P_u/P_a. Il est sans unité et toujours inférieur à 1.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Efficacité » ?",
   "verso": "L'<strong>efficacité</strong> d'une machine est le quotient e = P_utile/P_fournie, où P_fournie ne compte que l'énergie que l'on apporte, et que l'on paie.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Le critère du renouvelable — qu'y a-t-il à retenir ?",
   "verso": "Une ressource est dite <strong>renouvelable</strong> si elle se reconstitue à l'échelle d'une vie humaine. Ce critère ne dit rien de son caractère polluant, ni de son coût, ni de sa disponibilité au moment où on en a besoin.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Rien ne se perd — qu'y a-t-il à retenir ?",
   "verso": "Toute l'énergie qui entre dans une machine en ressort : P_a = P_u + P_p. Ce que l'on appelle « pertes » n'est pas de l'énergie disparue, mais de l'énergie transférée sous une forme dont on n'a que faire — presque toujours de la chaleur.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Les rendements se multiplient — qu'y a-t-il à retenir ?",
   "verso": "Pour une chaîne de plusieurs éléments : η_total = η₁ × η₂ × η₃. Le rendement d'ensemble est donc inférieur au plus faible des rendements pris isolément.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Les 3 kW·h manquants ne sont pas créés : ils sont …….",
   "rep": "prélevés dans l'environnement extérieur",
   "verso": "<strong>prélevés dans l'environnement extérieur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Toute l'énergie qui entre dans une machine en ressort : …….",
   "rep": "P_a = P_u + P_p",
   "verso": "<strong>P_a = P_u + P_p</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le <strong>rendement</strong> d'une machine est le quotient …….",
   "rep": "η= P_u/P_a",
   "verso": "<strong>η= P_u/P_a</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Une ressource est dite <strong>renouvelable</strong> si elle …….",
   "rep": "se reconstitue à l'échelle d'une vie humaine",
   "verso": "<strong>se reconstitue à l'échelle d'une vie humaine</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le bilan complet reste équilibré, et le principe de conservation …….",
   "rep": "n'est pas violé",
   "verso": "<strong>n'est pas violé</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "L'unité de la puissance est ……",
   "rep": "le watt",
   "verso": "<strong>le watt</strong> — Le joule est l'unité d'énergie, le newton-mètre celle d'un couple.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le kilowattheure est une unité ……",
   "rep": "d'énergie",
   "verso": "<strong>d'énergie</strong> — Malgré son nom, c'est le produit d'une puissance par une durée.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un appareil de 2 kW fonctionne 3 h. L'énergie consommée vaut ……",
   "rep": "6 kW·h",
   "verso": "<strong>6 kW·h</strong>",
   "origine": "bilan"
  }
 ]
};
