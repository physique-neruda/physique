/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · Cours 1 — Énergie interne et transferts thermiques
   Le bilan vient de c01_bilan.tex, les cartes des \trou{} de
   c01_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "1",
 "titre": "Énergie interne et transferts thermiques",
 "niveau": "BTS ET",
 "prerequis": [],
 "bilan": [
  {
   "q": "Une température de 27 °C vaut, en kelvins :",
   "choix": [
    "27 K",
    "300 K",
    "246 K"
   ],
   "bonne": 1,
   "expl": "T = 27+273 = 300 K."
  },
  {
   "q": "Un écart de température de 35 °C vaut, en kelvins :",
   "choix": [
    "35 K",
    "308 K",
    "on ne peut pas convertir un écart"
   ],
   "bonne": 0,
   "expl": "Un écart est le même dans les deux échelles : le décalage de 273 disparaît dans la soustraction. C'est pour cela que Q = m c Δθ accepte indifféremment les degrés Celsius et les kelvins."
  },
  {
   "q": "Le capteur le plus adapté à une régulation précise autour de 80 °C est :",
   "choix": [
    "le thermocouple",
    "la Pt100",
    "la CTN"
   ],
   "bonne": 1,
   "expl": "La Pt100 est linéaire, stable et normalisée. Le thermocouple est fait pour les hautes températures et demande une électronique soignée ; la CTN est très sensible mais fortement non linéaire, ce qui la réserve aux seuils."
  },
  {
   "q": "L'énergie nécessaire pour élever de 30 °C la température de 4 kg d'eau vaut :",
   "choix": [
    "502 kJ",
    "125 kJ",
    "16,7 kJ"
   ],
   "bonne": 0,
   "expl": "Q = 4× 4185× 30 = 502200 J, soit 502 kJ. La réponse b oublie un facteur, la réponse c divise au lieu de multiplier."
  },
  {
   "q": "Pendant un changement d'état à pression constante, la température :",
   "choix": [
    "augmente plus vite",
    "reste constante",
    "diminue"
   ],
   "bonne": 1,
   "expl": "L'énergie apportée sert à défaire les liaisons entre les particules, pas à augmenter leur agitation. C'est le palier de la courbe de chauffe."
  },
  {
   "q": "Le refroidissement d'une armoire par ventilateur relève principalement de :",
   "choix": [
    "la conduction",
    "la convection",
    "le rayonnement"
   ],
   "bonne": 1,
   "expl": "Convection : c'est le déplacement de l'air qui emporte l'énergie. Appeler cela « conduction » est l'erreur la plus fréquente sur cette question."
  },
  {
   "q": "Le flux à travers une paroi plane vaut :",
   "choix": [
    "λS Δθe",
    "(λS Δθ)/e",
    "(e Δθ)/(λS)"
   ],
   "bonne": 1,
   "expl": "Φ= (λS Δθ)/e. Contrôle de bon sens : plus la paroi est épaisse, moins il passe de flux, donc e est bien au dénominateur."
  },
  {
   "q": "Deux couches de matériaux différents sont superposées. Leurs résistances thermiques :",
   "choix": [
    "s'ajoutent",
    "s'ajoutent en inverse, comme des résistances en parallèle",
    "se multiplient"
   ],
   "bonne": 0,
   "expl": "Les résistances thermiques s'ajoutent, comme des résistances électriques en série, car le flux est commun à toutes les couches et les écarts de température s'additionnent."
  },
  {
   "q": "Dans une paroi composite, la couche qui commande le flux est celle qui a :",
   "choix": [
    "la plus grande épaisseur",
    "le plus faible λ",
    "la plus grande surface"
   ],
   "bonne": 1,
   "expl": "C'est le matériau de plus faible conductivité qui impose presque toute la résistance. Dans une armoire tôle + isolant, l'isolant représente plus de 99 % de la résistance totale : la tôle ne compte pas."
  },
  {
   "q": "Dans la loi de Stefan P = εσS T⁴, la température doit être exprimée :",
   "choix": [
    "en °C",
    "en K",
    "indifféremment"
   ],
   "bonne": 1,
   "expl": "En kelvins, obligatoirement. C'est la seule formule du chapitre dans ce cas. Utiliser 60 °C au lieu de 333 K fausse le résultat d'un facteur 950, sans que rien dans le nombre obtenu ne le signale."
  },
  {
   "q": "Une caméra thermique visant du cuivre nu et brillant, réglée sur une émissivité de 0,95 :",
   "choix": [
    "surestime fortement la température",
    "sous-estime fortement la température",
    "donne la valeur exacte"
   ],
   "bonne": 1,
   "expl": "Le cuivre nu a une émissivité voisine de 0,05 : il rayonne bien moins qu'une surface mate à la même température. La caméra, qui attend le rayonnement d'une surface à ε= 0,95, en déduit une température très inférieure à la réalité. D'où l'usage de pastilles mates pour la thermographie sur jeux de barres."
  },
  {
   "q": "Un convertisseur de rendement 95 % absorbe 80 kW. La puissance qu'il faut évacuer du local sous forme de chaleur vaut :",
   "choix": [
    "76 kW",
    "4 kW",
    "0 kW"
   ],
   "bonne": 1,
   "expl": "P_pertes = 80×(1-0,95) = 4 kW. Ces 4 kW ne disparaissent pas : ils échauffent le local et doivent être évacués. La réponse a confond puissance utile et pertes."
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Les deux échelles » ?",
   "verso": "La température Celsius θ s'exprime en °C ; la température absolue T s'exprime en K et vaut T = θ+ 273. Le zéro absolu correspond à -273 °C : c'est l'arrêt de l'agitation microscopique, une limite inatteignable.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Énergie interne » ?",
   "verso": "L'énergie interne U d'un système est : La température en est la traduction macroscopique : plus les particules s'agitent, plus la température est élevée.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Capacité thermique massique » ?",
   "verso": "La capacité thermique massique c d'un corps est : Elle s'exprime en J/kg/K.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Chaleur latente » ?",
   "verso": "La chaleur latente L d'un changement d'état est : Elle s'exprime en J/kg.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Q et E sont la même grandeur — qu'y a-t-il à retenir ?",
   "verso": "Quand une résistance chauffante délivre son énergie à un corps, ce que le corps reçoit est exactement ce que la résistance a dépensé. On le note Q au lieu de E, et on l'appelle chaleur, ou quantité de chaleur. Ce n'est pas une autre grandeur : c'est une énergie, en joules. La lettre change seulement pour dire <em>par quel chemin</em> l'énergie est passée — par transfert thermique, et non par un travail mécanique.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Lire une courbe de chauffe — qu'y a-t-il à retenir ?",
   "verso": "Les <strong>pentes</strong> correspondent à Q = m c Δθ : la température monte. Les <strong>paliers</strong> correspondent à Q = m L : on continue de chauffer et la température ne bouge plus, car l'énergie sert à défaire les liaisons entre les particules.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Conduction, convection, rayonnement — qu'y a-t-il à retenir ?",
   "verso": "La <strong>conduction</strong> propage l'énergie de proche en proche dans la matière : c'est ce qui chauffe la tôle d'une armoire. La <strong>convection</strong> transporte l'énergie par le déplacement d'un fluide : c'est le ventilateur d'armoire. Le <strong>rayonnement</strong> transporte l'énergie sans aucun support matériel, par ondes électromagnétiques : c'est ce que capte une caméra thermique.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Pour en déduire une température, il faut lui fournir …….",
   "verso": "<strong>l'émissivité de la surface visée</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le flux joue le rôle du courant, l'écart de température celui …….",
   "verso": "<strong>de la tension</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Une caméra thermique ne mesure pas une température : elle mesure …….",
   "verso": "<strong>un rayonnement</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "On le note Q au lieu de E, et on l'appelle ……, ou quantité de chaleur.",
   "verso": "<strong>chaleur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Les <strong>pentes</strong> correspondent à …… : la température monte.",
   "verso": "<strong>Q = m c Δθ</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Une température de 27 °C vaut, en kelvins ……",
   "verso": "<strong>300 K</strong> — T = 27+273 = 300 K.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un écart de température de 35 °C vaut, en kelvins ……",
   "verso": "<strong>35 K</strong> — Un écart est le même dans les deux échelles : le décalage de 273 disparaît dans la soustraction. C'est pour cela que Q = m c Δθ accepte indifféremment les degrés Celsius et les kelvins.",
   "origine": "bilan"
  }
 ]
};
