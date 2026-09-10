/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 13 — Machines alternatives
   Le bilan vient de CRSA_ch13_bilan.tex, les cartes des \trou{} de
   CRSA_ch13_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "13",
 "titre": "Machines alternatives",
 "niveau": "BTS CRSA",
 "prerequis": [],
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
   "type": "definition",
   "recto": "Qu'appelle-t-on « Vitesse de synchronisme » ?",
   "verso": "La vitesse de rotation du champ magnétique créé par le stator s'appelle la vitesse de synchronisme. Elle ne dépend que de deux choses : la fréquence du réseau et le nombre de paires de pôles.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Glissement » ?",
   "verso": "Le glissement mesure le retard relatif du rotor sur le champ tournant : c'est l'écart des deux vitesses, rapporté à la vitesse de synchronisme.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Commande à U/f constant » ?",
   "verso": "Le variateur fait varier la fréquence <em>et</em> la tension, en gardant leur rapport constant. On conserve ainsi le flux, donc le couple disponible à toutes les vitesses.",
   "origine": "definition du cours"
  },
  {
   "type": "trou",
   "recto": "Le glissement mesure le retard relatif du rotor sur le champ tournant : …….",
   "verso": "<strong>c'est l'écart des deux vitesses, rapporté à la vitesse de synchronisme</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La vitesse de rotation du champ magnétique créé par le stator s'appelle la …….",
   "verso": "<strong>vitesse de synchronisme</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Dans les deux cas ……, si bien que la fréquence et la vitesse sont liées l'une à l'autre.",
   "verso": "<strong>n = n_s</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Dans sa zone d'utilisation, la caractéristique mécanique d'une machine asynchrone est …….",
   "verso": "<strong>une droite très raide, presque verticale</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La machine <strong>asynchrone</strong> a un glissement …… : sans ce retard, aucun courant ne serait induit dans son rotor, donc aucun couple.",
   "verso": "<strong>non nul, de quelques pour cent</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Trois bobines décalées de 120 ° et alimentées en triphasé créent ……",
   "verso": "<strong>un champ magnétique tournant</strong> — C'est le point de départ de tout le chapitre : le triphasé produit un champ tournant, et c'est lui qui entraîne le rotor sans aucun contact mécanique.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La vitesse de synchronisme d'une machine alimentée en 50 Hz et possédant 3 paires de pôles vaut ……",
   "verso": "<strong>1000 1/min</strong> — n_s = 60 × 50 / 3 = 1000 1/min.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un moteur porte la mention « 4 pôles ». Le nombre p à utiliser dans n_s = 60f/p vaut ……",
   "verso": "<strong>p = 2</strong> — p est le nombre de paires de pôles : 4 pôles font 2 paires. C'est l'erreur la plus fréquente du chapitre — elle fait trouver 750 1/min au lieu de 1500 1/min.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une machine est dite asynchrone lorsque ……",
   "verso": "<strong>son rotor tourne moins vite que le champ</strong> — « Asynchrone » signifie littéralement « qui n'est pas synchronisé » : le rotor reste en retard sur le champ. Un rotor plus rapide que le champ correspondrait à un fonctionnement en génératrice, hors programme ici.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le glissement d'un moteur asynchrone en charge nominale vaut typiquement ……",
   "verso": "<strong>quelques pour cent</strong> — Un glissement nominal se compte en unités de pour cent — 3 %, 4 %, 5 %. Trouver 30 % dans un calcul doit faire reprendre la copie.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Si le glissement d'une machine asynchrone devenait nul, alors ……",
   "verso": "<strong>aucun couple ne serait produit</strong> — Sans glissement, le rotor verrait un champ immobile par rapport à lui : plus de variation de flux, donc plus de courant induit, donc plus de couple. Le glissement n'est pas un défaut, il est la condition du fonctionnement.",
   "origine": "bilan"
  }
 ]
};
