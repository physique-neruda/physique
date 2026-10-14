/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 1 — Énergie, puissance, rendement
   Le bilan vient de CRSA_ch01_bilan.tex, les cartes des \trou{} de
   CRSA_ch01_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "1",
 "cle": "ch01",
 "etiquette": "Chapitre 1",
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
    "le watt",
    "le joule",
    "le kilowattheure",
    "le newton-mètre"
   ],
   "bonne": 0,
   "expl": "Le joule est l'unité d'énergie, le newton-mètre celle d'un couple."
  },
  {
   "q": "Le kilowattheure est une unité :",
   "choix": [
    "de puissance",
    "de couple",
    "de rendement",
    "d'énergie"
   ],
   "bonne": 3,
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
   "expl": "E = P Δt = 2×3 = 6 kW·h. La réponse « 6 kW » est un piège d'unité : le résultat est une énergie, pas une puissance."
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
    "P_a = P_u + P_p",
    "P_a = P_u",
    "P_u = P_a + P_p",
    "P_p = P_a × P_u"
   ],
   "bonne": 0,
   "expl": "Tout ce qui entre ressort : en partie utile, en partie perdu."
  },
  {
   "q": "Les « pertes » d'un moteur correspondent à de l'énergie :",
   "choix": [
    "qui disparaît",
    "stockée dans le moteur",
    "transférée en chaleur",
    "qui n'a jamais été absorbée"
   ],
   "bonne": 2,
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
    "que les pertes sont négatives",
    "que c'est une pompe à chaleur",
    "qu'il y a une erreur de calcul"
   ],
   "bonne": 3,
   "expl": "Un rendement ne dépasse jamais 1. La réponse « que c'est une pompe à chaleur » est le piège : une pompe à chaleur a une efficacité supérieure à 1, pas un rendement."
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
   "expl": "0,95×0,90×0,80 = 0,684. La réponse « 2,65 » additionne, la réponse « 0,88 » fait une moyenne : ni l'une ni l'autre n'a de sens."
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
    "proviennent de l'environnement extérieur",
    "sont créés par la machine",
    "sont une erreur du constructeur",
    "viennent du réseau électrique"
   ],
   "bonne": 0,
   "expl": "Elle les prélève dehors et les transporte dedans. La conservation de l'énergie est respectée."
  },
  {
   "q": "Un réfrigérateur absorbe 100 W et extrait 200 W de son enceinte. La puissance rejetée dans la pièce vaut :",
   "choix": [
    "100 W",
    "200 W",
    "0 W",
    "300 W"
   ],
   "bonne": 3,
   "expl": "Tout ce qui entre ressort : 100 + 200 = 300 W. Un réfrigérateur réchauffe la pièce — il lui rend davantage qu'il ne lui prend."
  },
  {
   "q": "Pour une même machine frigorifique, l'efficacité en mode chauffage et l'efficacité en mode froid sont liées par :",
   "choix": [
    "e_chaud = e_froid",
    "elles sont indépendantes",
    "e_chaud = 2 e_froid",
    "e_chaud = e_froid + 1"
   ],
   "bonne": 3,
   "expl": "L'électricité du compresseur se retrouve elle aussi du côté chaud : le numérateur du mode chauffage vaut celui du mode froid plus la puissance électrique."
  },
  {
   "q": "Dans une cellule, le four consomme 19 kW·h par jour et le convoyeur 10 kW·h. Pour réduire la facture, il faut agir en priorité :",
   "choix": [
    "sur le convoyeur, plus facile d'accès",
    "indifféremment sur l'un ou l'autre",
    "sur le four",
    "sur les deux à parts égales"
   ],
   "bonne": 2,
   "expl": "Le four pèse les deux tiers de la consommation. On optimise d'abord le poste dominant, pas le plus accessible — c'est le réflexe que l'épreuve attend. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissance et énergie : définitions et unités ?",
   "verso": "<b>Puissance P</b> : énergie transférée <b>par unité de temps</b>, en <b>watts</b>.<br><b>Énergie E</b> : quantité totale transférée, en <b>joules</b>.",
   "origine": "Cours §1 Énergie et puissance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation entre E, P et Δt ? Quelles sont les deux combinaisons d'unités cohérentes ?",
   "verso": "<b>E = P × Δt</b><br>P en W et Δt en <b>s</b> → E en <b>J</b>.<br>P en kW et Δt en <b>h</b> → E en <b>kWh</b>.",
   "origine": "Cours §1 Énergie et puissance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Le kWh est-il une puissance ? Que vaut-il en joules ?",
   "verso": "Non, c'est une <b>énergie</b> (puissance × durée). La plaque affiche des kW, la facture des kWh.<br><b>1 kWh = 3,6 MJ</b> = 3,6 × 10<sup>6</sup> J.",
   "origine": "Cours §1 Le kilowattheure est une énergie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Ordres de grandeur : capteur inductif, éclairage d'une travée, moteur de convoyeur, ligne de production, tranche nucléaire ?",
   "verso": "Capteur : <b>~2 W</b> ; éclairage : <b>~150 W</b> ; convoyeur : <b>quelques kW</b> ; ligne : <b>~250 kW</b> ; tranche nucléaire : <b>~900 MW</b>.<br>Ils servent à juger un résultat.",
   "origine": "Cours §2 Ordres de grandeur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quand une ressource énergétique est-elle dite renouvelable ? Exemples ?",
   "verso": "Quand elle <b>se reconstitue à l'échelle d'une vie humaine</b>.<br>Renouvelables : vent, soleil, eau. Non renouvelables : gaz, pétrole, charbon, uranium.<br>Le critère ne dit rien de la pollution ni du coût.",
   "origine": "Cours §3 Le critère du renouvelable"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Bilan de puissance d'une machine (conservation de l'énergie) ?",
   "verso": "<b>P<sub>a</sub> = P<sub>u</sub> + P<sub>p</sub></b><br>Tout ce qui entre ressort, en partie utile, en partie perdu.",
   "origine": "Cours §4 Conservation de l'énergie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que sont réellement les « pertes » d'une machine ?",
   "verso": "De l'énergie <b>bien réelle</b>, transférée sous une forme inutile — presque toujours de la <b>chaleur</b> (bobinages, circuit magnétique, roulements).",
   "origine": "Cours §4 Conservation de l'énergie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelles sont les quatre fonctions de la chaîne d'énergie d'un système automatisé ?",
   "verso": "<b>Alimenter</b> → <b>distribuer</b> → <b>convertir</b> → <b>transmettre</b>. Chacune correspond à un composant réel et a ses pertes.",
   "origine": "Cours §5 La chaîne d'énergie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rendement d'une machine : formule, unité, valeur possible ?",
   "verso": "<b>η = P<sub>u</sub> / P<sub>a</sub></b><br><b>Sans unité</b>, <b>toujours inférieur à 1</b>.",
   "origine": "Cours §6 Le rendement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Un rendement calculé dépasse 1. Quelles erreurs chercher ?",
   "verso": "P<sub>u</sub> et P<sub>a</sub> <b>inversés</b> ; une <b>puissance confondue avec une énergie</b> ; une <b>conversion</b> oubliée.",
   "origine": "Cours §6 Le contrôle qui sauve la copie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rendement total d'une chaîne de trois éléments ?",
   "verso": "<b>η<sub>total</sub> = η<sub>1</sub> × η<sub>2</sub> × η<sub>3</sub></b>, toujours <b>inférieur au plus faible</b> des rendements.",
   "origine": "Cours §6 Les rendements se multiplient"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>On connaît P<sub>u</sub> et η. Comment obtenir P<sub>a</sub> ?",
   "verso": "On <b>divise</b> : <b>P<sub>a</sub> = P<sub>u</sub> / η</b>. Contrôle : P<sub>a</sub> doit être <b>plus grande</b> que P<sub>u</sub>.",
   "origine": "Cours §6 Remonter une chaîne"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir l'efficacité e d'une machine. Qu'est-ce qui change par rapport au rendement ?",
   "verso": "<b>e = P<sub>utile</sub> / P<sub>fournie</sub></b>. Au dénominateur, seulement l'énergie <b>apportée et payée</b> ; l'énergie prise gratuitement à l'environnement n'y figure pas.",
   "origine": "Cours §7 Efficacité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Une PAC d'efficacité 4 rend 4 kWh pour 1 kWh d'électricité. D'où viennent les 3 kWh ?",
   "verso": "Ils sont <b>prélevés dans l'environnement extérieur</b> et transportés dedans. Rien n'est créé : la conservation <b>n'est pas violée</b>.",
   "origine": "Cours §7 Pourquoi une efficacité peut dépasser 1"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Bilan d'une machine frigorifique (PAC, réfrigérateur) ?",
   "verso": "<b>P<sub>chaud</sub> = P<sub>élec</sub> + P<sub>froid</sub></b><br>Ex. : 100 W absorbés, 200 W extraits → <b>300 W</b> rejetés dans la pièce.",
   "origine": "Cours §7 Le réfrigérateur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation entre efficacité en mode chaud et en mode froid ? Pourquoi ?",
   "verso": "<b>e<sub>chaud</sub> = e<sub>froid</sub> + 1</b>, car l'électricité du compresseur se retrouve aussi du côté chaud.",
   "origine": "Cours §7 Deux efficacités pour une machine"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que désignent COP, EER, SCOP, SEER ?",
   "verso": "Des <b>efficacités</b> : COP (chauffage), EER (froid), SCOP et SEER (moyennes saisonnières). Sans unité, elles peuvent dépasser 1.",
   "origine": "Cours §7 Vocabulaire constructeur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>De quoi dépend l'efficacité d'une pompe à chaleur ?",
   "verso": "De l'<b>écart de température</b> entre sources froide et chaude : plus il est grand, plus <b>l'efficacité diminue</b>. Une valeur n'a de sens qu'avec ses deux températures.",
   "origine": "Cours §7 Une efficacité n'est pas une constante"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Un appareil de 2 kW fonctionne 3 h. Comment donner l'énergie en kWh puis en J ?",
   "verso": "1. kW et h → kWh : E = 2 × 3 = <b>6 kWh</b>.<br>2. En J : 6 × 3,6 × 10<sup>6</sup> = <b>2,16 × 10<sup>7</sup> J</b>.<br>3. Vérifier que le résultat est bien une énergie (pas des kW).",
   "origine": "Cours §1 Du kilowatt au kilowattheure"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Moteur : 1190 W absorbés, 731 W utiles. Comment trouver pertes et rendement ?",
   "verso": "1. Pertes : P<sub>p</sub> = P<sub>a</sub> − P<sub>u</sub> = 1190 − 731 = <b>459 W</b>.<br>2. η = P<sub>u</sub> / P<sub>a</sub> = 731 / 1190 = <b>0,61</b>.<br>3. Vérifier η &lt; 1.",
   "origine": "Cours §6 Calculer un rendement"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment remonter une chaîne d'énergie de la sortie jusqu'au réseau ?",
   "verso": "1. <b>Partir de la sortie</b> (P<sub>u</sub>).<br>2. Remonter étage par étage en <b>divisant</b> : P<sub>entrée</sub> = P<sub>sortie</sub> / η.<br>3. Contrôler que la puissance <b>augmente</b> en remontant.<br>4. Recouper : P<sub>u</sub>/P<sub>réseau</sub> = produit des η.",
   "origine": "Cours §6 Méthode — Remonter une chaîne"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Convoyeur 860 W ; réducteur 0,85, moteur 0,88, variateur 0,96. Puissance au réseau ?",
   "verso": "860 / 0,85 = 1012 W → 1012 / 0,88 = 1150 W → 1150 / 0,96 = <b>1198 W</b>.<br>Contrôle : 860/1198 = 0,718 = 0,96 × 0,88 × 0,85.",
   "origine": "Cours §6 Méthode — Remonter une chaîne"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>PAC : 12,0 kW à fournir, e = 3,8. Comment trouver la puissance électrique et la part prise dehors ?",
   "verso": "1. Effet utile (chauffer) au numérateur, électricité au dénominateur.<br>2. P<sub>élec</sub> = P<sub>utile</sub> / e = 12,0 / 3,8 = <b>3,16 kW</b>.<br>3. Part prélevée dehors : 12,0 − 3,16 = <b>8,84 kW</b>.<br>4. Fermer le bilan : 3,16 + 8,84 = 12,0.",
   "origine": "Cours §7 Méthode — Exploiter une efficacité"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
