/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · ADM 1 — Schémas électriques et appareillage de commande
   Le bilan vient de adm01_bilan.tex, les cartes des \trou{} de
   adm01_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "101",
 "cle": "adm01",
 "etiquette": "ADM 1",
 "titre": "Schémas électriques et appareillage de commande",
 "niveau": "BTS ET",
 "prerequis": [
  {
   "q": "Deux interrupteurs en série alimentent une lampe. Combien doivent être fermés pour qu'elle s'allume ?",
   "choix": [
    "les deux",
    "un seul suffit",
    "aucun",
    "cela dépend de l'ordre"
   ],
   "bonne": 0,
   "expl": "En série, le courant n'a qu'un chemin : il faut que tous les contacts soient fermés. C'est exactement le principe de la chaîne de sécurité d'un circuit de commande."
  },
  {
   "q": "Les deux mêmes interrupteurs sont maintenant en parallèle. Combien suffit-il d'en fermer ?",
   "choix": [
    "un seul",
    "les deux",
    "aucun",
    "cela dépend de leur calibre"
   ],
   "bonne": 0,
   "expl": "En parallèle, chaque contact ouvre un chemin à lui seul. C'est ce qui permet à un contact auxiliaire de doubler un bouton poussoir — l'automaintien."
  },
  {
   "q": "Un fil est coupé au milieu d'une branche alimentée en 24 V, le reste étant intact. La tension aux bornes de la coupure vaut :",
   "choix": [
    "24 V",
    "0 V",
    "12 V",
    "cela dépend du courant"
   ],
   "bonne": 0,
   "expl": "Aucun courant ne circule, donc aucune chute de tension ailleurs : toute la tension du générateur se retrouve aux bornes de la coupure. C'est pour cela qu'un contact ouvert reste dangereux."
  },
  {
   "q": "Un appareil de résistance quasi nulle est traversé par un courant. La tension à ses bornes vaut :",
   "choix": [
    "environ 0 V",
    "la tension du réseau",
    "la moitié de la tension du réseau",
    "cela dépend de sa longueur"
   ],
   "bonne": 0,
   "expl": "U = R I avec R proche de zéro donne une tension presque nulle. Ouvert, c'est l'inverse : il prend toute la tension. Un contact est donc soit sous tension, soit parcouru par le courant, jamais les deux."
  },
  {
   "q": "Un moteur porte sur sa plaque : 400 V, 12 A, 5,5 kW. Que représente le 12 A ?",
   "choix": [
    "le courant nominal, à ne pas dépasser en régime établi",
    "le courant de démarrage",
    "le courant maximal admissible en permanence par le câble",
    "le calibre du disjoncteur à installer"
   ],
   "bonne": 0,
   "expl": "C'est le courant absorbé à pleine charge. Le dépasser durablement échauffe les enroulements : c'est précisément ce que surveille le relais thermique."
  },
  {
   "q": "Dans un réseau 400 V entre phases et 230 V entre phase et neutre, le nombre qui relie ces deux valeurs est :",
   "choix": [
    "√3 ≈ 1,73",
    "2",
    "√2 ≈ 1,41",
    "1,60"
   ],
   "bonne": 0,
   "expl": "400/230 = 1,74, soit √3. C'est le nombre du triphasé — il reviendra à chaque calcul de puissance et au couplage étoile-triangle."
  }
 ],
 "bilan": [
  {
   "q": "Sur un schéma, un trait épais désigne :",
   "choix": [
    "un fil du circuit de commande",
    "un fil du circuit de puissance",
    "un fil de terre"
   ],
   "bonne": 1,
   "expl": "Épais = puissance. L'épaisseur du trait est une information, pas une décoration."
  },
  {
   "q": "La commande est en 24 V alternatif parce que :",
   "choix": [
    "les bobines ne supportent pas le 400 V",
    "cette tension n'est pas dangereuse pour les personnes",
    "cela consomme moins d'énergie"
   ],
   "bonne": 1,
   "expl": "En dessous de 25 V alternatif, la tension n'est pas mortelle même en milieu humide. Les bobines existent aussi en 230 V et en 400 V : ce n'est donc pas une contrainte de l'appareil, c'est un choix de sécurité."
  },
  {
   "q": "Quatre conducteurs se croisent en un point sans qu'aucun point ne soit dessiné. Cela signifie :",
   "choix": [
    "qu'ils sont reliés",
    "qu'ils ne sont pas reliés",
    "que le dessinateur a oublié le point"
   ],
   "bonne": 1,
   "expl": "Pas de point = pas de connexion. Un croisement à quatre branches sans point est un simple croisement."
  },
  {
   "q": "Un schéma se lit toujours :",
   "choix": [
    "machine en marche",
    "au repos, hors tension",
    "dans l'état où on l'a trouvée"
   ],
   "bonne": 1,
   "expl": "Le schéma représente l'état de repos : hors tension, ressorts détendus, personne n'agit. C'est la convention qui rend les schémas comparables entre eux."
  },
  {
   "q": "Le contact 21-22 d'un contacteur est :",
   "choix": [
    "un NO",
    "un NF",
    "un pôle de puissance"
   ],
   "bonne": 1,
   "expl": "Unité 1-2 = contact à ouverture. La dizaine (2) n'est que le numéro d'ordre du contact."
  },
  {
   "q": "Ce qui ouvre les pôles d'un contacteur, c'est :",
   "choix": [
    "l'inversion du courant dans la bobine",
    "un ressort de rappel, dès que la bobine n'est plus alimentée",
    "le relais thermique"
   ],
   "bonne": 1,
   "expl": "Rien n'ouvre activement : c'est l'absence de courant dans la bobine qui laisse le ressort agir. D'où le fait qu'une coupure d'alimentation arrête toujours la machine."
  },
  {
   "q": "Le trait tireté entre la bobine et les contacts représente :",
   "choix": [
    "un fil de faible section",
    "une liaison mécanique",
    "une liaison à la terre"
   ],
   "bonne": 1,
   "expl": "Aucun courant n'y circule. Ce trait dit « ces contacts appartiennent à cet appareil »."
  },
  {
   "q": "Un relais (contacteur auxiliaire) se distingue d'un contacteur moteur parce qu'il :",
   "choix": [
    "n'a pas de bobine",
    "n'a pas de pôles de puissance",
    "fonctionne en continu seulement"
   ],
   "bonne": 1,
   "expl": "Même appareil, mêmes contacts auxiliaires, mais rien pour couper un fort courant."
  },
  {
   "q": "Le relais thermique arrête le moteur :",
   "choix": [
    "en ouvrant lui-même le circuit de puissance",
    "en ouvrant son contact 95-96 dans le circuit de commande",
    "en faisant fondre un fusible"
   ],
   "bonne": 1,
   "expl": "Erreur très fréquente. Ses bilames ne font que mesurer : c'est le contacteur qui coupe. Un 95-96 non câblé rend le relais thermique inutile."
  },
  {
   "q": "Un fusible aM est utilisé devant un moteur parce qu'il :",
   "choix": [
    "coupe plus vite qu'un gG",
    "supporte la surintensité temporaire du démarrage",
    "protège les personnes"
   ],
   "bonne": 1,
   "expl": "Un moteur absorbe 5 à 7 fois son courant nominal au démarrage. Un gG fondrait à chaque mise en route."
  },
  {
   "q": "Le contact de précoupure d'un sectionneur s'ouvre :",
   "choix": [
    "en même temps que les pôles",
    "avant les pôles",
    "après les pôles"
   ],
   "bonne": 1,
   "expl": "Il coupe d'abord la commande, le contacteur retombe, le courant devient nul — et le sectionneur ouvre alors à vide."
  },
  {
   "q": "L'automaintien est réalisé par :",
   "choix": [
    "un contact NF en série avec la bobine",
    "un contact NO du contacteur, en parallèle sur le bouton marche",
    "un contact temporisé"
   ],
   "bonne": 1,
   "expl": "En parallèle : il offre un second chemin au courant quand on relâche le bouton marche."
  },
  {
   "q": "Si l'on appuie en même temps sur marche et sur arrêt, le moteur :",
   "choix": [
    "démarre",
    "ne démarre pas",
    "démarre puis s'arrête"
   ],
   "bonne": 1,
   "expl": "L'arrêt est en série : il coupe le chemin quoi qu'il arrive. En série = condition obligatoire ; en parallèle = chemin possible."
  },
  {
   "q": "Un bouton d'arrêt d'urgence est câblé en NF parce que :",
   "choix": [
    "c'est moins cher",
    "un fil coupé arrête alors la machine de lui-même",
    "il consomme moins"
   ],
   "bonne": 1,
   "expl": "Sécurité positive : toute défaillance doit conduire à l'état sûr. Un NO cassé ne se signale pas."
  },
  {
   "q": "Pendant la phase étoile, chaque enroulement reçoit :",
   "choix": [
    "U",
    "U/√3",
    "U√3"
   ],
   "bonne": 1,
   "expl": "400/√3 ≈ 230 V, d'où un courant de démarrage divisé par 3."
  },
  {
   "q": "Le voyant « sous tension » est allumé, le voyant de surcharge est éteint, et le moteur ne démarre pas. On peut déjà affirmer que :",
   "choix": [
    "le 24 V est présent et le thermique n'a pas déclenché",
    "la bobine est coupée",
    "le sectionneur est ouvert"
   ],
   "bonne": 0,
   "expl": "Les voyants sont le premier outil de diagnostic : ils écartent d'emblée toute la famille « alimentation de la commande » et toute la famille « surcharge ». La bobine reste une hypothèse parmi d'autres, à vérifier ensuite."
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Schéma de puissance » ?",
   "verso": "C'est le circuit qui amène l'énergie à l'actionneur : moteur, résistance chauffante, éclairage. Il est en 400 V triphasé, câblé en fils noirs de section supérieure ou égale à 1,5 mmeter², et dessiné en <strong>traits épais</strong>.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Schéma de commande » ?",
   "verso": "C'est le circuit qui porte la logique de fonctionnement : ce qui décide quand l'actionneur est alimenté. Il est en 24 V alternatif, câblé en fils fins (≈ 1 mmeter²), et dessiné en <strong>traits fins</strong>.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Repérage équipotentiel » ?",
   "verso": "Tous les conducteurs reliés entre eux, donc au même potentiel, portent le même repère. Un repère change dès qu'on traverse un appareil.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Contacteur » ?",
   "verso": "Appareil capable d'établir et d'interrompre des courants importants, commandé par une bobine parcourue par un faible courant sous tension réduite. Il fonctionne en tout ou rien : il est collé, ou il est retombé.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Pourquoi deux tensions ? — qu'y a-t-il à retenir ?",
   "verso": "Parce qu'on ne veut pas que l'opérateur ait les doigts près du 400 V pour démarrer sa machine. La commande est abaissée à 24 V par un transformateur : en dessous de 25 V alternatif, la tension n'est pas mortelle, même en milieu humide.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "La règle du point — qu'y a-t-il à retenir ?",
   "verso": "Trois branches qui se rejoignent forment un <strong>T</strong> : la connexion est évidente, le point est inutile. Quatre branches qui se croisent sont ambiguës : soit les fils se touchent, soit ils se croisent sans se toucher.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Références croisées — qu'y a-t-il à retenir ?",
   "verso": "Un schéma tient sur plusieurs pages, appelées <strong>folios</strong>, découpées en <strong>colonnes</strong> repérées par des lettres.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Quand on relâche S1, le courant a déjà …… : il passe par 13-14.",
   "rep": "un autre chemin",
   "verso": "<strong>un autre chemin</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "C'est le circuit qui …… : moteur, résistance chauffante, éclairage.",
   "rep": "amène l'énergie à l'actionneur",
   "verso": "<strong>amène l'énergie à l'actionneur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "<strong>97-98</strong> est un NO : il …… (voyant, entrée d'automate).",
   "rep": "signale le défaut",
   "verso": "<strong>signale le défaut</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Tous les conducteurs ……, donc au même potentiel, portent le même repère.",
   "rep": "reliés entre eux",
   "verso": "<strong>reliés entre eux</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "C'est le circuit qui porte …… : ce qui décide quand l'actionneur est alimenté.",
   "rep": "la logique de fonctionnement",
   "verso": "<strong>la logique de fonctionnement</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Sur un schéma, un trait épais désigne ……",
   "rep": "un fil du circuit de puissance",
   "verso": "<strong>un fil du circuit de puissance</strong> — Épais = puissance. L'épaisseur du trait est une information, pas une décoration.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La commande est en 24 V alternatif parce que ……",
   "rep": "cette tension n'est pas dangereuse pour les personnes",
   "verso": "<strong>cette tension n'est pas dangereuse pour les personnes</strong> — En dessous de 25 V alternatif, la tension n'est pas mortelle même en milieu humide. Les bobines existent aussi en 230 V et en 400 V : ce n'est donc pas une contrainte de l'appareil.",
   "origine": "bilan"
  }
 ]
};
