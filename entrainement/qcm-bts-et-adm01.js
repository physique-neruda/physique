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
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-contact-no.png\">",
   "verso": "<b>Contact à fermeture — NO (Normally Open)</b><br><br>C'est le contact qui <b>autorise</b> : bouton marche, contact d'automaintien, commande d'un voyant.<br><br>Dessiné <b>ouvert</b> au repos. Il se <b>ferme</b> quand l'appareil auquel il appartient est actionné. Bornes en 3-4, 13-14, 23-24…<br><img src=\"media/adm01/adm01-photo-contacteur.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-contact-nf.png\">",
   "verso": "<b>Contact à ouverture — NF ou NC (Normally Closed)</b><br><br>C'est le contact des <b>sécurités</b> : arrêt, arrêt d'urgence, défaut thermique, verrouillage. Un fil cassé l'ouvre, donc arrête la machine : c'est la sécurité positive.<br><br>Dessiné <b>fermé</b> au repos. Il s'<b>ouvre</b> quand l'appareil est actionné. Bornes en 1-2, 21-22, 95-96…<br><img src=\"media/adm01/adm01-photo-contacteur.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-pole-contacteur.png\">",
   "verso": "<b>Pôle de puissance d'un contacteur</b><br><br>C'est lui qui porte le courant du moteur. Trait épais : quelques dizaines d'ampères, avec un dispositif de coupure de l'arc.<br><br>Ouvert au repos, il se ferme quand la bobine est alimentée. Bornes à un seul chiffre : 1-2, 3-4, 5-6 (impair en entrée, pair en sortie).<br><img src=\"media/adm01/adm01-photo-contacteur.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-aux-no.png\">",
   "verso": "<b>Contact auxiliaire NO de contacteur (13-14)</b><br><br>Sert à l'<b>automaintien</b> (en parallèle sur le bouton marche), à la signalisation et aux conditions de marche d'autres contacteurs.<br><br>Trait fin : quelques ampères au plus. Il se ferme en même temps que les pôles, puisque tous les contacts sont portés par la même armature.<br><img src=\"media/adm01/adm01-photo-contacteur.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-aux-nf.png\">",
   "verso": "<b>Contact auxiliaire NF de contacteur (21-22)</b><br><br>Sert au <b>verrouillage électrique</b> : placé dans la branche d'un autre contacteur, il interdit que les deux collent ensemble (étoile et triangle, deux sens de marche).<br><br>Fermé au repos, il s'ouvre dès que la bobine de son contacteur est alimentée.<br><img src=\"media/adm01/adm01-photo-contacteur.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-interrupteur.png\">",
   "verso": "<b>Interrupteur (pôle)</b><br><br>Établir et couper un courant <b>à la main</b>, sur place.<br><br>Le petit rond marque le pouvoir de coupure : contrairement au sectionneur, il peut être manœuvré en charge. Il n'assure ni protection ni condamnation.<br><img src=\"media/adm01/adm01-photo-interrupteur-sectionneur.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-disjoncteur.png\">",
   "verso": "<b>Disjoncteur (pôle magnétothermique)</b><br><br>Protéger à la fois contre les <b>surcharges</b> et contre les <b>courts-circuits</b>, et se réarmer sans rien remplacer.<br><br>La croix marque les deux déclencheurs : le <b>thermique</b> (bilame, lent, surcharge) et le <b>magnétique</b> (bobine, quelques ms, court-circuit).<br><img src=\"media/adm01/adm01-photo-disjoncteur-moteur.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-sectionneur.png\">",
   "verso": "<b>Sectionneur (pôle)</b><br><br><b>Isoler</b> la partie aval pour intervenir en sécurité, et permettre la <b>condamnation</b> par cadenas (consignation).<br><br>La barre marque l'absence de pouvoir de coupure : <b>ne jamais manœuvrer en charge</b>. D'où le contact de précoupure, qui coupe la commande avant la puissance.<br><img src=\"media/adm01/adm01-photo-sectionneur-portefusibles.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-sect-inter.png\">",
   "verso": "<b>Interrupteur-sectionneur (pôle)</b><br><br>Réunit les deux fonctions : couper en charge <i>et</i> isoler avec condamnation.<br><br>Barre du sectionneur + rond de l'interrupteur : le symbole est la somme des deux fonctions.<br><img src=\"media/adm01/adm01-photo-interrupteur-sectionneur.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-bp-no.png\">",
   "verso": "<b>Bouton poussoir à contact NO — bouton « marche »</b><br><br>Démarrer par une <b>impulsion</b>. Associé à un automaintien, il évite tout redémarrage intempestif après une coupure de réseau.<br><br>Revient tout seul au repos quand on le lâche (ressort). Repère S, tête verte, bornes 3-4.<br><img src=\"media/adm01/adm01-photo-bp-marche.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-bp-nf.png\">",
   "verso": "<b>Bouton poussoir à contact NF — bouton « arrêt »</b><br><br>Arrêter la machine. Placé <b>en série</b> dans la branche, il rend l'arrêt <b>prioritaire</b> sur la marche.<br><br>Fermé au repos, il s'ouvre tant qu'on appuie et se referme au relâchement. Tête rouge, bornes 1-2.<br><img src=\"media/adm01/adm01-photo-bp-arret.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-commutateur.png\">",
   "verso": "<b>Commutateur (interrupteur de commande)</b><br><br>Choisir un mode ou maintenir un ordre sans garder le doigt dessus.<br><br><b>Reste dans la position où on le laisse.</b> Danger : après une coupure de réseau, il est toujours fermé et la machine repart toute seule à la remise sous tension.<br><img src=\"media/adm01/adm01-photo-commutateur.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-arret-urgence.png\">",
   "verso": "<b>Arrêt d'urgence (bouton coup de poing à accrochage)</b><br><br>Mettre la machine en sécurité immédiatement, en cas de danger pour une personne.<br><br>Contact <b>NF</b>, tête champignon rouge sur fond jaune, <b>à accrochage</b> : il reste enfoncé jusqu'à un déverrouillage volontaire (rotation ou clé). Placé en tête de la branche de commande.<br><img src=\"media/adm01/adm01-photo-arret-urgence.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-fin-course.png\">",
   "verso": "<b>Interrupteur de position (fin de course)</b><br><br>Informer la commande de la position d'une partie mobile : chariot en butée, capot ouvert, portail fermé.<br><br>Actionné par la <b>machine elle-même</b>, pas par l'opérateur. Le triangle représente le galet.",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-thermique-nf.png\">",
   "verso": "<b>Contact NF du relais thermique (95-96)</b><br><br>C'est lui qui <b>arrête réellement le moteur</b> en cas de surcharge : le relais thermique n'a pas de pôles de puissance, il ne fait que mesurer.<br><br>Placé en série dans la branche de commande : il ouvre le circuit de la bobine, le contacteur retombe, et c'est le contacteur qui coupe la puissance.<br><img src=\"media/adm01/adm01-photo-relais-thermique.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-thermique-no.png\">",
   "verso": "<b>Contact NO du relais thermique (97-98)</b><br><br><b>Signaler</b> le défaut : voyant orange, entrée d'automate, report d'alarme.<br><br>Il informe, il n'agit pas. 95-96 coupe, 97-98 renseigne — c'est ce couple qui permet de diagnostiquer une surcharge sans ouvrir l'armoire.<br><img src=\"media/adm01/adm01-photo-relais-thermique.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-tempo-no-travail.png\">",
   "verso": "<b>Contact NO temporisé au travail (67-68)</b><br><br>Retarder une action : passage en triangle, démarrage décalé de plusieurs moteurs, minuterie.<br><br>Se ferme <b>t secondes après</b> l'alimentation de la bobine, et se rouvre <b>immédiatement</b> à la coupure. Règle du parachute : la coupole ne freine que dans le sens où elle s'ouvre.<br><img src=\"media/adm01/adm01-photo-bloc-temporise.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-tempo-nf-travail.png\">",
   "verso": "<b>Contact NF temporisé au travail (55-56)</b><br><br>Couper une fonction au bout d'un temps donné : c'est lui qui fait retomber le contacteur étoile à la fin de la temporisation.<br><br>Fermé au repos, il s'ouvre <b>t secondes après</b> l'alimentation de la bobine et se referme immédiatement à la coupure.<br><img src=\"media/adm01/adm01-photo-bloc-temporise.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-tempo-repos.png\">",
   "verso": "<b>Contact temporisé au repos</b><br><br>Prolonger une action après la coupure : ventilation qui continue après l'arrêt d'un moteur, éclairage qui s'éteint avec retard.<br><br>Agit <b>immédiatement</b> à l'alimentation, mais revient au repos avec un <b>retard</b>. La coupole est tournée dans l'autre sens que la temporisation au travail.<br><img src=\"media/adm01/adm01-photo-bloc-temporise.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-bobine.png\">",
   "verso": "<b>Bobine de contacteur (A1-A2)</b><br><br>C'est l'organe <b>commandé</b> : quelques dizaines de milliampères sous 24 V pilotent des dizaines d'ampères sous 400 V, à distance et sans danger.<br><br>Alimentée, elle devient un électro-aimant qui attire l'armature : tous les contacts basculent ensemble. Coupée, un ressort ramène tout au repos. Bornes toujours A1-A2.<br><img src=\"media/adm01/adm01-photo-bobine-dessin.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-bobine-tempo.png\">",
   "verso": "<b>Bobine avec bloc de contacts temporisés</b><br><br>Ajouter un retard réglable à un contacteur ordinaire, sans autre appareil : c'est ce qui permet un démarrage étoile-triangle automatique.<br><br>Le carré barré représente le bloc additif clipsé sur le contacteur. Ses contacts (55-56, 67-68) sont manœuvrés en même temps que lui, mais avec le retard réglé.<br><img src=\"media/adm01/adm01-photo-bloc-temporise.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-voyant.png\">",
   "verso": "<b>Voyant de signalisation (X1-X2)</b><br><br>Il ne commande rien : il <b>informe</b>. C'est le premier outil de diagnostic, avant toute mesure. Blanc = sous tension, vert = marche, orange = défaut.<br><br>Branché entre les deux rails de la commande, seul ou derrière un contact auxiliaire. L'état des voyants suffit souvent à écarter la moitié des causes possibles.<br><img src=\"media/adm01/adm01-photo-voyant.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-fusible.png\">",
   "verso": "<b>Fusible (cartouche)</b><br><br>Protéger contre les <b>courts-circuits</b>, et contre les surcharges pour le type gG.<br><br>Il fond et doit être remplacé. <b>gG</b> : usage général. <b>aM</b> : accompagnement Moteur, il supporte la surintensité de démarrage (5 à 7 fois In pendant quelques secondes).<br><img src=\"media/adm01/adm01-photo-fusibles.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-moteur.png\">",
   "verso": "<b>Moteur asynchrone triphasé</b><br><br>L'actionneur : il transforme l'énergie électrique en énergie mécanique. C'est lui que tout le reste du schéma sert à alimenter et à protéger.<br><br>Six bornes sur la plaque : U1 V1 W1 et W2 U2 V2, dont le couplage (étoile ou triangle) dépend de la plaque signalétique et du réseau. Absorbe 5 à 7 fois In au démarrage.<br><img src=\"media/adm01/adm01-photo-moteur.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-transfo.png\">",
   "verso": "<b>Transformateur de commande 400 V / 24 V</b><br><br>Abaisser la tension du circuit de commande sous le seuil dangereux : en dessous de 25 V alternatif, la tension n'est pas mortelle, même en milieu humide.<br><br>Deux enroulements sans liaison électrique entre eux. Protégé par un fusible <b>aM</b> au primaire et <b>gG</b> au secondaire ; son secondaire est relié à la terre.<br><img src=\"media/adm01/adm01-photo-transformateur.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-rt-puissance.png\">",
   "verso": "<b>Relais thermique — partie puissance</b><br><br>Protéger le <b>moteur</b> contre les <b>surcharges</b> : courant un peu trop grand pendant longtemps, parce que le moteur peine (cause mécanique).<br><br>Trois bilames chauffés par le courant se déforment et basculent un petit contact. <b>Il ne coupe pas la puissance</b> : c'est son contact 95-96 qui ouvre la commande. Se règle sur le courant de la plaque moteur.<br><img src=\"media/adm01/adm01-photo-relais-thermiques-photos.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-contacteur-3p.png\">",
   "verso": "<b>Contacteur moteur (trois pôles)</b><br><br>Établir et interrompre un courant important en agissant sur un faible courant, à distance et sous tension réduite. C'est l'appareil central du départ-moteur.<br><br>Le trait tireté est une <b>liaison mécanique</b>, pas un fil : il dit que les trois pôles basculent ensemble, entraînés par la même armature.<br><img src=\"media/adm01/adm01-photo-contacteurs-famille.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-sect-pf-3p.png\">",
   "verso": "<b>Sectionneur porte-fusibles (trois pôles)</b><br><br>Deux fonctions d'un coup : le <b>sectionnement</b> avec condamnation, et la protection contre les <b>courts-circuits</b> par ses cartouches.<br><br>Placé en tête d'installation. Ne se manœuvre jamais en charge ; son contact de précoupure (23-24) coupe la commande avant l'ouverture des pôles.<br><img src=\"media/adm01/adm01-photo-sectionneur-portefusibles.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-disj-3p.png\">",
   "verso": "<b>Disjoncteur magnétothermique (trois pôles)</b><br><br>Remplacer sectionneur + fusibles + protection de surcharge par un seul appareil réarmable.<br><br>Courbe B (3 à 5 In), C (5 à 10 In, la plus courante), D (10 à 20 In) ou MA (12 à 14 In, pour moteurs) : la courbe fixe le seuil du déclencheur magnétique.<br><img src=\"media/adm01/adm01-photo-disjoncteur-moteur.png\">",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-croisement.png\">",
   "verso": "<b>Croisement de conducteurs (sans point)</b><br><br>Savoir lire ce symbole évite le contresens le plus fréquent sur un schéma.<br><br>Quatre branches, aucun point : les fils se <b>croisent sans se toucher</b>. <b>Pas de point = pas de connexion.</b>",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-connexion.png\">",
   "verso": "<b>Connexion non évidente (avec point)</b><br><br>Le point est ce qui distingue une jonction d'un simple croisement.<br><br>Quatre branches qui se rejoignent : le point est <b>obligatoire</b>. Pour trois branches (jonction en T), la connexion est évidente et le point est inutile.",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "<span class=\"sujet\">Quel est cet appareil ?</span><img src=\"media/adm01/adm01-terre.png\">",
   "verso": "<b>Liaison à la terre (conducteur de protection PE)</b><br><br>Sans elle, le dispositif différentiel ne sert à rien : le courant de défaut n'a nulle part où s'écouler et n'est donc pas détecté.<br><br>Relie les masses métalliques à la prise de terre. Associée à un DDR de 30 mA, elle protège les personnes contre les <b>contacts indirects</b>.",
   "origine": "BTS ET::ADM 1 — Symboles des appareillages"
  },
  {
   "type": "anki",
   "recto": "Bornes 13-14 : quel type de contact, et quel usage typique ?<br><img src=\"media/adm01/adm01-fig-t1.png\">",
   "verso": "Unité 3-4 → contact <b>NO</b> (à fermeture) ; dizaine 1 → premier contact auxiliaire de l'appareil. Usage typique : l'<b>automaintien</b>, en parallèle sur le bouton marche.<br><img src=\"media/adm01/adm01-mont-t1.png\">",
   "origine": "BTS ET::ADM 1 — Repérage et numérotation"
  },
  {
   "type": "anki",
   "recto": "Bornes 21-22 : quel type de contact ?<br><img src=\"media/adm01/adm01-fig-t2.png\">",
   "verso": "Unité 1-2 → contact <b>NF</b> (à ouverture) ; dizaine 2 → deuxième contact auxiliaire. Usage typique : le <b>verrouillage électrique</b> entre deux contacteurs.<br><img src=\"media/adm01/adm01-mont-t2.png\">",
   "origine": "BTS ET::ADM 1 — Repérage et numérotation"
  },
  {
   "type": "anki",
   "recto": "Bornes 95-96 et 97-98 : à qui appartiennent-elles, et à quoi servent-elles ?<br><img src=\"media/adm01/adm01-fig-t3.png\">",
   "verso": "Au <b>relais thermique</b>. <b>95-96</b> est un NF : il coupe le circuit de commande, c'est lui qui arrête le moteur. <b>97-98</b> est un NO : il signale le défaut (voyant, automate).<br><img src=\"media/adm01/adm01-mont-t3.png\">",
   "origine": "BTS ET::ADM 1 — Repérage et numérotation"
  },
  {
   "type": "anki",
   "recto": "Comment lit-on un numéro de borne de commande à deux chiffres ?<br><img src=\"media/adm01/adm01-fig-t4.png\">",
   "verso": "La <b>dizaine</b> est le numéro d'ordre du contact sur l'appareil (elle ne dit rien de sa fonction). L'<b>unité</b> donne la fonction : 1-2 = NF, 3-4 = NO, 5-6 et 7-8 = contacts spéciaux (temporisés, relais thermique).<br><img src=\"media/adm01/adm01-mont-t4.png\">",
   "origine": "BTS ET::ADM 1 — Repérage et numérotation"
  },
  {
   "type": "anki",
   "recto": "Que signifie « A1-A2 » et pourquoi ces bornes sont-elles particulières ?<br><img src=\"media/adm01/adm01-fig-t5.png\">",
   "verso": "Ce sont les bornes de la <b>bobine</b> d'un contacteur ou d'un relais. Elles échappent à la règle des chiffres parce qu'elles ne sont pas un contact : c'est l'entrée de l'organe de commande, en 24 V alternatif en général.<br><img src=\"media/adm01/adm01-mont-t5.png\">",
   "origine": "BTS ET::ADM 1 — Repérage et numérotation"
  },
  {
   "type": "anki",
   "recto": "Que signifie l'indication « P(01-J) » écrite sous une bobine ?<br><img src=\"media/adm01/adm01-fig-t6.png\">",
   "verso": "C'est une <b>référence croisée</b> : les <b>pôles de puissance</b> (P) de cet appareil sont dessinés au <b>folio 01</b>, <b>colonne J</b>. Elle permet de retrouver instantanément où l'appareil agit dans un dossier de plusieurs pages.<br><img src=\"media/adm01/adm01-mont-t6.png\">",
   "origine": "BTS ET::ADM 1 — Repérage et numérotation"
  },
  {
   "type": "anki",
   "recto": "Qu'est-ce que le repérage équipotentiel des fils ?<br><img src=\"media/adm01/adm01-fig-t7.png\">",
   "verso": "Tous les conducteurs <b>reliés entre eux</b>, donc au même potentiel, portent le <b>même repère</b>. Le repère change dès qu'on traverse un appareil. C'est ce qui permet de mesurer « repère par repère » et de savoir où le 24 V disparaît.<br><img src=\"media/adm01/adm01-mont-t7.png\">",
   "origine": "BTS ET::ADM 1 — Repérage et numérotation"
  },
  {
   "type": "anki",
   "recto": "En série ou en parallèle : quelle différence de sens sur un schéma de commande ?<br><img src=\"media/adm01/adm01-fig-t8.png\">",
   "verso": "<b>En série = condition obligatoire</b> (toutes doivent être vraies en même temps) : sécurités, bouton d'arrêt. <b>En parallèle = chemin possible</b> (il suffit d'un) : bouton marche et automaintien. C'est pour cela que l'arrêt est prioritaire sur la marche.",
   "origine": "BTS ET::ADM 1 — Repérage et numérotation"
  },
  {
   "type": "anki",
   "recto": "Contacteur ou sectionneur : lequel coupe le courant du moteur ?<br><img src=\"media/adm01/adm01-fig-c1.png\">",
   "verso": "Le <b>contacteur</b>. C'est le seul des deux à avoir un <b>pouvoir de coupure</b> : il est fait pour établir et interrompre des courants importants, des dizaines de fois par jour.<br><br>Le <b>sectionneur</b> n'a <b>aucun pouvoir de coupure</b> : ouvert en charge, il tire un arc qui le détruit et brûle l'opérateur. Il ne sert qu'à <b>isoler</b> une partie hors tension, une fois le courant déjà coupé — et à la <b>condamner</b> par cadenas.<br><img src=\"media/adm01/adm01-mont-c1.png\">",
   "origine": "BTS ET::ADM 1 — Ne pas confondre les appareils"
  },
  {
   "type": "anki",
   "recto": "Sectionneur ou interrupteur : quelle différence ?<br><img src=\"media/adm01/adm01-fig-c2.png\">",
   "verso": "L'<b>interrupteur</b> a un pouvoir de coupure : il peut être manœuvré <b>en charge</b>. Mais il n'assure pas de coupure sûre : rien ne garantit qu'il ne se refermera pas.<br><br>Le <b>sectionneur</b> assure une <b>coupure sûre</b> (distance d'isolement garantie, poignée extérieure, cadenassable) mais <b>pas de coupure en charge</b>.<br><br>L'<b>interrupteur-sectionneur</b> réunit les deux : son symbole porte le rond de l'interrupteur <i>et</i> la barre du sectionneur.<br><img src=\"media/adm01/adm01-mont-c2.png\">",
   "origine": "BTS ET::ADM 1 — Ne pas confondre les appareils"
  },
  {
   "type": "anki",
   "recto": "Disjoncteur ou fusible : que choisir, et pourquoi ?<br><img src=\"media/adm01/adm01-fig-c3.png\">",
   "verso": "Tous deux protègent contre les <b>courts-circuits</b>.<br><br>Le <b>fusible</b> est simple et peu cher, mais il <b>fond</b> : il faut le remplacer, et sur du triphasé on risque de ne remplacer qu'une phase (marche en monophasé, moteur détruit).<br><br>Le <b>disjoncteur</b> se <b>réarme</b>, coupe les trois phases ensemble et protège aussi des <b>surcharges</b> grâce à son déclencheur thermique. Il coûte plus cher et remplace à lui seul sectionneur + fusibles.<br><img src=\"media/adm01/adm01-mont-c3.png\">",
   "origine": "BTS ET::ADM 1 — Ne pas confondre les appareils"
  },
  {
   "type": "anki",
   "recto": "Disjoncteur ou relais thermique : ne protègent-ils pas la même chose ?<br><img src=\"media/adm01/adm01-fig-c4.png\">",
   "verso": "Non. Le <b>disjoncteur</b> protège la <b>ligne</b> et l'installation : il est calibré sur la section des câbles et coupe lui-même la puissance.<br><br>Le <b>relais thermique</b> protège le <b>moteur</b> : il se règle sur le courant de la plaque signalétique, donc bien plus finement, et tolère la pointe de démarrage. Il ne coupe pas la puissance : il ouvre son contact <b>95-96</b> dans la commande, et c'est le contacteur qui coupe.<br><img src=\"media/adm01/adm01-mont-c4.png\">",
   "origine": "BTS ET::ADM 1 — Ne pas confondre les appareils"
  },
  {
   "type": "anki",
   "recto": "Contacteur ou relais (contacteur auxiliaire) ?<br><img src=\"media/adm01/adm01-fig-c5.png\">",
   "verso": "Exactement le même appareil — bobine, armature, ressort, contacts — à une différence près : le <b>relais n'a pas de pôles de puissance</b>.<br><br>Le <b>contacteur</b> alimente un actionneur (moteur, résistance). Le <b>relais KA</b> ne sert qu'à la <b>logique</b> : quand on a besoin de beaucoup de contacts, de dupliquer une information, ou d'adapter une tension de commande.<br><img src=\"media/adm01/adm01-mont-c5.png\">",
   "origine": "BTS ET::ADM 1 — Ne pas confondre les appareils"
  },
  {
   "type": "anki",
   "recto": "Fusible gG ou fusible aM : lequel devant un moteur ?<br><img src=\"media/adm01/adm01-fig-c6.png\">",
   "verso": "Le <b>aM</b> (<i>accompagnement Moteur</i>). Un moteur asynchrone absorbe <b>5 à 7 fois</b> son courant nominal pendant quelques secondes au démarrage : un gG fondrait à chaque mise en route.<br><br>À 60 A sur un calibre 10 A, on lit sur les courbes : gG ≈ <b>0,12 s</b>, aM ≈ <b>15 s</b> — un rapport de plus de cent. Mais sur un vrai court-circuit, l'aM coupe aussi vite que le gG. Le <b>gG</b> reste pour les circuits sans pointe : éclairage, prises, commande.<br><img src=\"media/adm01/adm01-mont-c6.png\">",
   "origine": "BTS ET::ADM 1 — Ne pas confondre les appareils"
  },
  {
   "type": "anki",
   "recto": "Différentiel ou disjoncteur magnétothermique : qui protège qui ?<br><img src=\"media/adm01/adm01-fig-c7.png\">",
   "verso": "Le <b>disjoncteur magnétothermique</b> protège les <b>biens</b> : les câbles, les appareils, le bâtiment contre l'incendie. Il réagit à un courant <b>trop grand</b>.<br><br>Le <b>différentiel (DDR)</b> protège les <b>personnes</b> : il réagit à un courant qui <b>s'échappe vers la terre</b> (30 mA), même tout petit. Il ne voit pas une surcharge, et le magnétothermique ne voit pas une électrisation. Les deux sont nécessaires.<br><img src=\"media/adm01/adm01-mont-c7.png\">",
   "origine": "BTS ET::ADM 1 — Ne pas confondre les appareils"
  },
  {
   "type": "anki",
   "recto": "Qui assure chaque fonction d'un départ-moteur ?<br><img src=\"media/adm01/adm01-fig-c8.png\">",
   "verso": "<b>Protéger les personnes</b> : différentiel + liaison des masses à la terre, et arrêt d'urgence.<br><b>Sectionner et condamner</b> : sectionneur.<br><b>Protéger des courts-circuits</b> : fusible aM ou déclencheur magnétique.<br><b>Protéger des surcharges de ligne</b> : fusible ou déclencheur thermique.<br><b>Protéger le moteur</b> : relais thermique.<br><b>Commander la puissance</b> : contacteur + boutons poussoirs.<br><b>Informer</b> : voyants.<br><img src=\"media/adm01/adm01-mont-c8.png\">",
   "origine": "BTS ET::ADM 1 — Ne pas confondre les appareils"
  },
  {
   "type": "anki",
   "recto": "Qui a un pouvoir de coupure, et qui n'en a pas ?<br><img src=\"media/adm01/adm01-fig-c9.png\">",
   "verso": "<b>Ont un pouvoir de coupure</b> : le contacteur (usage courant, des milliers de manœuvres), l'interrupteur (manuel), le disjoncteur (y compris sur court-circuit).<br><br><b>N'en ont pas</b> : le <b>sectionneur</b> — d'où son contact de <b>précoupure</b>, qui coupe la commande avant que ses pôles ne s'ouvrent, pour qu'il n'ouvre jamais qu'à vide — et le <b>relais thermique</b>, qui ne fait que mesurer.<br><img src=\"media/adm01/adm01-mont-c9.png\">",
   "origine": "BTS ET::ADM 1 — Ne pas confondre les appareils"
  },
  {
   "type": "anki",
   "recto": "Relais thermique : pourquoi deux contacts, 95-96 et 97-98 ?<br><img src=\"media/adm01/adm01-fig-c10.png\">",
   "verso": "<b>95-96</b> est un <b>NF</b> : placé en série dans la branche de commande, il <b>agit</b> — il coupe l'alimentation de la bobine, le contacteur retombe, le moteur s'arrête.<br><br><b>97-98</b> est un <b>NO</b> : il <b>informe</b> — voyant orange, entrée d'automate, report d'alarme. Sans le 95-96 câblé, le relais thermique ne sert à rien ; sans le 97-98, on ne sait pas pourquoi la machine s'est arrêtée.<br><img src=\"media/adm01/adm01-mont-c10.png\">",
   "origine": "BTS ET::ADM 1 — Ne pas confondre les appareils"
  },
  {
   "type": "anki",
   "recto": "Pourquoi un contacteur plutôt qu'un simple interrupteur sur le moteur ?<br><img src=\"media/adm01/adm01-fig-c11.png\">",
   "verso": "Trois raisons.<br><b>Sécurité</b> : l'opérateur manœuvre du 24 V sur un pupitre, le 400 V ne sort jamais de l'armoire.<br><b>Distance</b> : la commande peut être à vingt mètres, ou dupliquée en plusieurs points.<br><b>Logique</b> : c'est le seul moyen d'insérer des conditions — automaintien, arrêt d'urgence, défaut thermique, temporisation. Et toute coupure d'alimentation fait retomber le contacteur : la machine ne repart pas seule.<br><img src=\"media/adm01/adm01-mont-c11.png\">",
   "origine": "BTS ET::ADM 1 — Ne pas confondre les appareils"
  }
 ],
 "cartes_figees": true,
 "anki_paquet": "../docs/bts-et/adm01/symboles-anki.apkg"
};
