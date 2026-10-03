/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 13 — Machines alternatives
   Le bilan vient de CRSA_ch13_bilan.tex, les cartes des \trou{} de
   CRSA_ch13_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "13",
 "cle": "ch13",
 "etiquette": "Chapitre 13",
 "titre": "Machines alternatives",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Convertir 1440 tr/min en rad/s :",
   "choix": [
    "151 rad/s",
    "24,0 rad/s",
    "9048 rad/s",
    "90,5 rad/s"
   ],
   "bonne": 0,
   "expl": "1440 × 2π/60 = 151 rad/s."
  },
  {
   "q": "Dans un réseau dont la tension composée vaut 690 V, la tension simple vaut :",
   "choix": [
    "398 V",
    "1195 V",
    "345 V",
    "230 V"
   ],
   "bonne": 0,
   "expl": "690/√3 = 398 V. Toujours diviser la composée par √3."
  },
  {
   "q": "Un récepteur triphasé équilibré : U = 400 V, I = 10,0 A, cos φ = 0,85. La puissance active vaut :",
   "choix": [
    "5,89 kW",
    "3,40 kW",
    "10,2 kW",
    "1,96 kW"
   ],
   "bonne": 0,
   "expl": "P = √3 U I cos φ = 1,732 × 400 × 10,0 × 0,85 = 5,89 kW. Le √3 ne s'oublie pas."
  },
  {
   "q": "Une machine reçoit 5,0 kW et en restitue 4,3 kW. Ses pertes valent :",
   "choix": [
    "0,70 kW",
    "0,86 kW",
    "1,16 kW",
    "9,3 kW"
   ],
   "bonne": 0,
   "expl": "5,0 − 4,3 = 0,70 kW, soit 700 W partis en chaleur. Le rendement, lui, vaut 86 %."
  },
  {
   "q": "Une machine de rendement 88 % doit fournir 5,5 kW. Elle absorbe :",
   "choix": [
    "6,25 kW",
    "4,84 kW",
    "5,50 kW",
    "6,60 kW"
   ],
   "bonne": 0,
   "expl": "5,5/0,88 = 6,25 kW. On DIVISE par le rendement pour remonter à l'absorbée ; multiplier donnerait moins que l'utile, ce qui est impossible."
  },
  {
   "q": "Le champ tourne à 1500 tr/min, le rotor à 1440 tr/min. Le glissement vaut :",
   "choix": [
    "4,0 %",
    "6,0 %",
    "96 %",
    "0,96 %"
   ],
   "bonne": 0,
   "expl": "(1500 − 1440)/1500 = 4,0 %. Un glissement de quelques pour cent est normal en charge."
  }
 ],
 "bilan": [
  {
   "q": "Trois bobines décalées de 120 ° et alimentées en triphasé créent :",
   "choix": [
    "trois champs magnétiques indépendants",
    "un champ magnétique fixe",
    "un champ magnétique tournant",
    "un champ magnétique nul"
   ],
   "bonne": 2,
   "expl": "C'est le point de départ de tout le chapitre : le triphasé produit un champ tournant, et c'est lui qui entraîne le rotor sans aucun contact mécanique."
  },
  {
   "q": "La vitesse de synchronisme d'une machine alimentée en 50 Hz et possédant 3 paires de pôles vaut :",
   "choix": [
    "3000 1/min",
    "1500 1/min",
    "1000 1/min",
    "750 1/min"
   ],
   "bonne": 2,
   "expl": "n_s = 60 × 50 / 3 = 1000 1/min."
  },
  {
   "q": "Un moteur porte la mention « 4 pôles ». Le nombre p à utiliser dans n_s = 60f/p vaut :",
   "choix": [
    "p = 4",
    "p = 2",
    "p = 8",
    "p = 1"
   ],
   "bonne": 1,
   "expl": "p est le nombre de paires de pôles : 4 pôles font 2 paires. C'est l'erreur la plus fréquente du chapitre — elle fait trouver 750 1/min au lieu de 1500 1/min."
  },
  {
   "q": "Une machine est dite asynchrone lorsque :",
   "choix": [
    "son rotor tourne exactement à la vitesse du champ",
    "son rotor tourne moins vite que le champ",
    "son rotor tourne plus vite que le champ",
    "son rotor est à l'arrêt"
   ],
   "bonne": 1,
   "expl": "« Asynchrone » signifie littéralement « qui n'est pas synchronisé » : le rotor reste en retard sur le champ. Un rotor plus rapide que le champ correspondrait à un fonctionnement en génératrice, hors programme ici."
  },
  {
   "q": "Le glissement d'un moteur asynchrone en charge nominale vaut typiquement :",
   "choix": [
    "0 %",
    "quelques pour cent",
    "environ 50 %",
    "plus de 90 %"
   ],
   "bonne": 1,
   "expl": "Un glissement nominal se compte en unités de pour cent — 3 %, 4 %, 5 %. Trouver 30 % dans un calcul doit faire reprendre la copie."
  },
  {
   "q": "Si le glissement d'une machine asynchrone devenait nul, alors :",
   "choix": [
    "le rendement serait maximal",
    "le couple serait maximal",
    "aucun couple ne serait produit",
    "la machine s'emballerait"
   ],
   "bonne": 2,
   "expl": "Sans glissement, le rotor verrait un champ immobile par rapport à lui : plus de variation de flux, donc plus de courant induit, donc plus de couple. Le glissement n'est pas un défaut, il est la condition du fonctionnement."
  },
  {
   "q": "Une plaque indique 400 V / 690 V. Sur un réseau 230 V / 400 V, le couplage à réaliser est :",
   "choix": [
    "étoile",
    "triangle",
    "indifférent",
    "étoile avec neutre"
   ],
   "bonne": 1,
   "expl": "Un enroulement supporte 400 V, qui est ici la tension composée du réseau : c'est le couplage triangle qui applique la tension composée à chaque enroulement."
  },
  {
   "q": "La puissance absorbée par un moteur asynchrone triphasé s'écrit :",
   "choix": [
    "P_a = U I cosφ",
    "P_a = 3 U I cosφ",
    "P_a = √3 U I cosφ",
    "P_a = U I"
   ],
   "bonne": 2,
   "expl": "Le √3 vaut pour un système triphasé équilibré, avec U la tension composée et I le courant en ligne. L'oublier fausse tout le bilan et donne un rendement aberrant — ce qui, heureusement, se repère."
  },
  {
   "q": "Pour calculer le couple utile à partir de la puissance utile, la vitesse doit être exprimée en :",
   "choix": [
    "tours par minute",
    "tours par seconde",
    "radians par seconde",
    "hertz"
   ],
   "bonne": 2,
   "expl": "P = TΩ exige des rad/s : Ω= 2πn/60. Utiliser directement les tr/min donne un couple environ 9,55 fois trop petit."
  },
  {
   "q": "Dans sa zone d'utilisation, la caractéristique mécanique T_u = f(n) d'une machine asynchrone est :",
   "choix": [
    "une droite très raide",
    "une droite de faible pente",
    "une parabole",
    "une horizontale"
   ],
   "bonne": 0,
   "expl": "Entre le vide et la charge nominale, la vitesse ne perd que quelques dizaines de tours par minute. C'est pourquoi la machine tourne presque à vitesse constante — et pourquoi on ne peut pas régler sa vitesse en jouant sur la charge."
  },
  {
   "q": "Un variateur commande un moteur asynchrone à U/f constant. Les caractéristiques mécaniques obtenues aux différentes fréquences sont :",
   "choix": [
    "de pentes différentes",
    "des droites parallèles",
    "confondues",
    "des courbes de plus en plus plates"
   ],
   "bonne": 1,
   "expl": "Maintenir U/f constant conserve le flux, donc le couple disponible : les droites se translatent sans changer de pente. C'est la signature à reconnaître sur un document-réponse."
  },
  {
   "q": "Un moteur synchrone branché directement sur le réseau :",
   "choix": [
    "démarre normalement",
    "ne démarre pas seul",
    "démarre puis s'emballe",
    "démarre en tournant à l'envers"
   ],
   "bonne": 1,
   "expl": "À l'arrêt, le champ tourne déjà à pleine vitesse et le rotor n'a pas le temps de s'y accrocher. Il faut un variateur qui monte la fréquence progressivement depuis zéro. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que créent trois bobines à 120° alimentées en triphasé ?",
   "verso": "Un <b>champ magnétique unique qui tourne</b>, qui entraîne le rotor sans contact.",
   "origine": "Cours §1 Le champ tournant"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Vitesse de synchronisme ? De quoi dépend-elle ?",
   "verso": "<b>n<sub>s</sub> = 60 f / p</b> (tr/min), p = nombre de <b>paires</b> de pôles. Elle ne dépend que de f et p.<br>À 50 Hz : 3000, 1500, 1000… tr/min.",
   "origine": "Cours §1 Vitesse de synchronisme"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Moteur « 4 pôles » sur 50 Hz : que vaut p ? n<sub>s</sub> ?",
   "verso": "<b>p = 2</b> (paires de pôles) ; n<sub>s</sub> = 60 × 50/2 = <b>1500 tr/min</b>.",
   "origine": "Cours §1 Deux pièges"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir le glissement. Valeur pour une machine synchrone ? asynchrone ?",
   "verso": "<b>g = (n<sub>s</sub> − n) / n<sub>s</sub></b>.<br>Synchrone : <b>g = 0</b> (rotor accroché).<br>Asynchrone : <b>quelques %</b>.",
   "origine": "Cours §2 Le glissement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi une machine asynchrone doit-elle glisser ?",
   "verso": "Sans retard sur le champ, <b>aucun courant n'est induit</b> au rotor, donc <b>aucun couple</b>.",
   "origine": "Cours §2 Pourquoi le glissement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Plaque 230/400 V : quelle tension supporte un enroulement ? Couplage sur réseau 400 V ? Plaque 400/690 V ?",
   "verso": "La plus petite : <b>230 V</b> → sur réseau 400 V, <b>étoile</b>.<br>Plaque 400/690 V : enroulement 400 V → <b>triangle</b>.",
   "origine": "Cours §3 Couplage du stator"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissance absorbée et puissance utile d'un moteur asynchrone ? Rendement typique ?",
   "verso": "<b>P<sub>a</sub> = √3 U I cos φ</b> ; <b>P<sub>u</sub> = T<sub>u</sub> Ω</b> (Ω en rad/s).<br>η = P<sub>u</sub>/P<sub>a</sub>, entre <b>80 et 95 %</b>.",
   "origine": "Cours §4 Bilan des puissances"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelles sont les trois vitesses d'un exercice sur machine asynchrone ?",
   "verso": "<b>n<sub>s</sub></b> : champ (tr/min) ; <b>n</b> : rotor (tr/min) ; <b>Ω</b> : rotor (rad/s). Le couple se calcule avec <b>Ω</b>.",
   "origine": "Cours §4 Les trois vitesses"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Forme de la caractéristique mécanique d'une machine asynchrone ? Conséquence ?",
   "verso": "Une <b>droite très raide</b>, presque verticale : sur le réseau 50 Hz, elle tourne à vitesse <b>pratiquement constante</b>.",
   "origine": "Cours §5 Caractéristique mécanique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment régler la vitesse d'un moteur asynchrone ? Pourquoi garder U/f constant ?",
   "verso": "En changeant la <b>fréquence</b> (variateur) donc n<sub>s</sub>. U/f constant conserve le <b>flux</b>, donc le <b>couple</b>. Les caractéristiques sont des <b>droites parallèles</b>.",
   "origine": "Cours §6 U/f constant"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>La machine synchrone est-elle réversible ? Peut-elle démarrer seule sur le réseau ?",
   "verso": "<b>Réversible</b> : alternateur si on l'entraîne, moteur si on l'alimente (n = n<sub>s</sub>).<br><b>Ne démarre pas seule</b> : il faut un variateur qui monte la fréquence depuis zéro.",
   "origine": "Cours §7 La machine synchrone"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Plaque : 1440 tr/min, 50 Hz. Comment justifier que la machine est asynchrone ?",
   "verso": "1. Lire n = 1440 tr/min.<br>2. Vitesses de synchronisme possibles : 3000, 1500, 1000…<br>3. 1440 est <b>légèrement inférieure</b> à 1500.<br>4. Conclure : <b>asynchrone</b>, g = (1500 − 1440)/1500 = 4 %.",
   "origine": "Cours §2 Méthode — Synchrone ou asynchrone"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment déterminer le couplage d'un moteur sur un réseau ?",
   "verso": "1. Plus petite tension de la plaque = tension d'un <b>enroulement</b>.<br>2. Tension composée du réseau.<br>3. Enroulement = V → <b>étoile</b> ; = U → <b>triangle</b>.<br>4. <b>Justifier</b>.",
   "origine": "Cours §3 Méthode — Couplage"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Moteur 4 kW, η = 87 %, cos φ = 0,82, 400 V, 1440 tr/min. Comment trouver I et T<sub>u</sub> ?",
   "verso": "1. P<sub>a</sub> = 4000/0,87 = 4,60 kW.<br>2. I = P<sub>a</sub> / (√3 × 400 × 0,82) = <b>8,1 A</b>.<br>3. Ω = 2π × 1440/60 = 150,8 rad/s.<br>4. T<sub>u</sub> = 4000/150,8 = <b>26,5 N·m</b>.",
   "origine": "Cours §4 Méthode — Bilan et rendement"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment tracer la caractéristique d'un moteur asynchrone et trouver le point de fonctionnement ?",
   "verso": "1. Deux points : <b>(n<sub>s</sub> ; 0)</b> et le <b>point nominal</b>.<br>2. Tracer la charge sur le même graphe.<br>3. Lire l'<b>intersection</b>.<br>4. En déduire ce qui est demandé (vitesse de translation…).",
   "origine": "Cours §5 Méthode — Point de fonctionnement"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
