/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · TP 1 — Notions fondamentales d'électricité
   Le bilan vient de tp01_bilan.tex, les cartes des \trou{} de
   tp01_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "1",
 "titre": "Notions fondamentales d'électricité",
 "niveau": "BTS ET",
 "prerequis": [],
 "bilan": [
  {
   "q": "Pour mesurer le courant absorbé par un moteur, l'ampèremètre se branche :",
   "choix": [
    "aux bornes du moteur",
    "en série avec le moteur",
    "entre une phase et la terre"
   ],
   "bonne": 1,
   "expl": "Le courant traverse : l'appareil doit être inséré dans la branche. Branché aux bornes, il constitue un court-circuit — c'est la seule erreur de branchement dangereuse."
  },
  {
   "q": "La tension U_AB vaut 12 V. Alors U_BA vaut :",
   "choix": [
    "12 V",
    "-12 V",
    "0 V"
   ],
   "bonne": 1,
   "expl": "U_BA = V_B - V_A = -U_AB. L'ordre des indices est une information, pas une formalité : l'inverser change le signe de toutes les conclusions qui suivent."
  },
  {
   "q": "Deux points M et N sont reliés par un simple fil. La tension U_MN vaut :",
   "choix": [
    "0 V",
    "la tension d'alimentation",
    "on ne peut pas savoir"
   ],
   "bonne": 0,
   "expl": "Un fil idéal impose le même potentiel à ses deux extrémités : V_M = V_N, donc U_MN = 0 V. C'est ce qui permet de dire que deux points reliés par un fil ne forment qu'un seul et même nœud, même s'ils sont dessinés loin l'un de l'autre."
  },
  {
   "q": "On déplace la masse d'un montage sur un autre point. Alors :",
   "choix": [
    "toutes les tensions changent",
    "tous les potentiels changent, mais pas les tensions",
    "rien ne change"
   ],
   "bonne": 1,
   "expl": "La masse est un choix de référence, pas une grandeur physique. La déplacer décale tous les potentiels du même montant ; les différences de potentiel, donc les tensions, sont inchangées. C'est pourquoi un potentiel ne se donne jamais sans préciser par rapport à quoi."
  },
  {
   "q": "En convention récepteur, on mesure U = 9 V et I = -2 A. Le dipôle :",
   "choix": [
    "reçoit 18 W",
    "fournit 18 W",
    "ne transfère aucune puissance"
   ],
   "bonne": 1,
   "expl": "P = 9×(-2) = -18 W. En convention récepteur, une puissance négative signifie que le dipôle fournit en réalité de la puissance. Ce n'est pas une erreur de calcul : c'est un résultat à interpréter."
  },
  {
   "q": "Trois branches se rejoignent en un nœud. Deux courants entrants valent 7 A et 4 A. Le courant sortant vaut :",
   "choix": [
    "3 A",
    "11 A",
    "28 A"
   ],
   "bonne": 1,
   "expl": "Loi des nœuds : 7+4 = 11 A. Un nœud n'accumule rien."
  },
  {
   "q": "Deux résistances de 100 Ω et 300 Ω sont en parallèle. La résistance équivalente vaut :",
   "choix": [
    "400 Ω",
    "200 Ω",
    "75 Ω"
   ],
   "bonne": 2,
   "expl": "(100× 300)/400 = 75 Ω. Contrôle immédiat : le résultat doit être inférieur à la plus petite des deux, ici 100 Ω. La réponse a est celle du groupement série, la réponse b n'est la moyenne de rien."
  },
  {
   "q": "La formule du diviseur de tension U₂ = U R₂/(R₁+R₂) n'est valable que si :",
   "choix": [
    "R₁ = R₂",
    "aucun courant ne sort du point milieu",
    "la tension U est continue"
   ],
   "bonne": 1,
   "expl": "Dès qu'une charge est branchée au point milieu, un courant en sort et la formule surestime la tension. Elle donne pourtant un résultat plausible, ce qui la rend particulièrement traîtresse — voir l'exercice du capteur de niveau."
  },
  {
   "q": "Une section de 4 mmeter² vaut, en meter² :",
   "choix": [
    "4×10⁻³ meter²",
    "4×10⁻⁶ meter²",
    "4×10⁻² meter²"
   ],
   "bonne": 1,
   "expl": "Une surface se convertit au carré : 1 mmeter² = (1×10⁻³)² = 1×10⁻⁶ meter². La réponse a est l'erreur la plus fréquente de toute la formation, et elle intervient dès le premier calcul de résistance de câble."
  },
  {
   "q": "À longueur et section égales, un conducteur en aluminium comparé à un conducteur en cuivre :",
   "choix": [
    "résiste moins",
    "résiste davantage",
    "résiste autant"
   ],
   "bonne": 1,
   "expl": "ρ_Al = 2,8×10⁻⁸ Ω·meter contre 1,8×10⁻⁸ Ω·meter pour le cuivre, soit environ 55 % de plus. C'est pour cela qu'une liaison aluminium demande une section supérieure à résistance égale."
  },
  {
   "q": "Les pertes par effet Joule dans un conducteur de résistance R parcouru par I valent :",
   "choix": [
    "R I",
    "R I²",
    "R² I"
   ],
   "bonne": 1,
   "expl": "P_J = R I². En remplaçant U par R I dans P = U I, on obtient bien un courant au carré."
  },
  {
   "q": "On divise par deux le courant dans une ligne. Les pertes en ligne sont :",
   "choix": [
    "divisées par 2",
    "divisées par 4",
    "inchangées"
   ],
   "bonne": 1,
   "expl": "Les pertes varient comme le carré du courant : (1/2)² = 1/4. Ce raisonnement commandera tout le chapitre sur la distribution de l'énergie, et il justifie à lui seul le transport en haute tension."
  },
  {
   "q": "Un appareil de 2 kW fonctionne 5 h. L'énergie consommée vaut :",
   "choix": [
    "10 kW",
    "10 kW·h",
    "0,4 kW·h"
   ],
   "bonne": 1,
   "expl": "W = P× t = 2× 5 = 10 kW·h. La réponse a confond puissance et énergie : le kilowatt est un débit, le kilowattheure une quantité."
  },
  {
   "q": "En monophasé, pour calculer les pertes d'une liaison, il faut tenir compte :",
   "choix": [
    "du seul conducteur aller",
    "des conducteurs aller et retour",
    "de trois conducteurs"
   ],
   "bonne": 1,
   "expl": "Le courant fait l'aller et le retour : les deux conducteurs dissipent. On écrit donc P_J = 2 R_cond I². Oublier le retour divise le résultat par deux — c'est l'erreur classique du monophasé, et elle disparaîtra en triphasé équilibré où le neutre ne conduit pas."
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Courant électrique » ?",
   "verso": "Le courant électrique est un déplacement d'ensemble de porteurs de charge. Son intensité mesure la charge qui traverse une section du conducteur par unité de temps : I = Q/t, en ampères (A).",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Potentiel et tension » ?",
   "verso": "Chaque point d'un circuit est caractérisé par son <strong>potentiel</strong> V, en volts : c'est son « niveau électrique ». La <strong>tension</strong> entre deux points A et B est la différence de leurs potentiels : U_AB = V_A - V_B. C'est une grandeur qui n'existe qu'entre <em>deux</em> points ; parler de « la tension en A » n'a aucun sens.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Les deux conventions » ?",
   "verso": "En convention <strong>récepteur</strong>, les flèches de U et de I sont opposées. En convention <strong>générateur</strong>, elles sont dans le même sens.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Maille » ?",
   "verso": "Une <strong>maille</strong> est un <strong>chemin fermé</strong> du circuit : on part d'un point, on suit des branches sans jamais emprunter deux fois la même, et on revient au point de départ. Un circuit en série n'en comporte qu'une ; dès qu'il y a une dérivation, il y en a plusieurs.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Une convention d'écriture, valable tout le chapitre — qu'y a-t-il à retenir ?",
   "verso": "Nous travaillons ici en <strong>régime continu</strong> : les grandeurs ne varient pas au cours du temps. On les note donc en <strong>lettres majuscules</strong> — U, I, P, E. Les minuscules u, i, p seront réservées, à partir du chapitre sur le régime sinusoïdal, aux <em>valeurs instantanées</em> d'une grandeur qui varie.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Le point de référence : la masse — qu'y a-t-il à retenir ?",
   "verso": "Un potentiel ne se mesure pas tout seul, pas plus qu'une altitude sans niveau de la mer. On choisit donc dans le montage un point de référence, appelé masse, dont on décide que le potentiel vaut 0 V. Tous les autres potentiels s'expriment alors par rapport à lui, et « le potentiel du point A » n'est qu'une façon abrégée de dire « la tension entre A et la masse ».",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Deux grandeurs, deux branchements — qu'y a-t-il à retenir ?",
   "verso": "Le courant <em>traverse</em> : l'ampèremètre se place en série, dans la branche à mesurer. La tension est une différence <em>entre deux points</em> : le voltmètre se place en dérivation, aux bornes du dipôle.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Son intensité mesure …… : I = Q/t, en ampères (A).",
   "verso": "<strong>la charge qui traverse une section du conducteur par unité de temps</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En convention <strong>générateur</strong>, elles sont …….",
   "verso": "<strong>dans le même sens</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En convention <strong>récepteur</strong>, les flèches de U et de I sont …….",
   "verso": "<strong>opposées</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Toute résistance parcourue par un courant dissipe …… sous forme de chaleur.",
   "verso": "<strong>P_J = R I²</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>tension</strong> entre deux points A et B est …… : U_AB = V_A - V_B.",
   "verso": "<strong>la différence de leurs potentiels</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Pour mesurer le courant absorbé par un moteur, l'ampèremètre se branche ……",
   "verso": "<strong>en série avec le moteur</strong> — Le courant traverse : l'appareil doit être inséré dans la branche. Branché aux bornes, il constitue un court-circuit — c'est la seule erreur de branchement dangereuse.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La tension U_AB vaut 12 V. Alors U_BA vaut ……",
   "verso": "<strong>-12 V</strong> — U_BA = V_B - V_A = -U_AB. L'ordre des indices est une information, pas une formalité : l'inverser change le signe de toutes les conclusions qui suivent.",
   "origine": "bilan"
  }
 ]
};
