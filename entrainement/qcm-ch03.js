/* Genere par outils/construire.py — ne pas editer a la main.
   Chapitre 03 · Courant continu
   Les QCM viennent de ch03_prerequis.tex et ch03_bilan.tex,
   les cartes de cartes/cartes-ch03.json. */
window.CHAPITRE = {
 "num": "3",
 "titre": "Courant continu",
 "niveau": "1re STI2D",
 "prerequis": [
  {
   "q": "L'intensité d'un courant électrique se mesure avec :",
   "choix": [
    "un voltmètre en dérivation",
    "un ampèremètre en série",
    "un ohmmètre",
    "un wattmètre"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "La tension se mesure avec un voltmètre branché :",
   "choix": [
    "en série",
    "en dérivation",
    "à la place du générateur",
    "n'importe comment"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Dans un circuit <strong>en série</strong>, l'intensité :",
   "choix": [
    "se partage entre les dipôles",
    "est la même partout",
    "augmente à chaque dipôle",
    "est nulle"
   ],
   "bonne": 1,
   "expl": "il n'y a aucun nœud dans un circuit en série"
  },
  {
   "q": "L'unité de l'intensité est :",
   "choix": [
    "le volt",
    "l'ohm",
    "l'ampère",
    "le watt"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Une <strong>tension</strong> se rapporte :",
   "choix": [
    "à un seul fil",
    "à deux points du circuit",
    "à un nœud",
    "au générateur seulement"
   ],
   "bonne": 1,
   "expl": "d'où la flèche tracée <em>à côté</em> du dipôle, jamais sur un fil"
  },
  {
   "q": "Dans un circuit comportant une dérivation, le courant principal, en arrivant au nœud :",
   "choix": [
    "disparaît",
    "se partage entre les branches",
    "double",
    "reste dans une seule branche"
   ],
   "bonne": 1,
   "expl": "c'est la loi des nœuds"
  },
  {
   "q": "Un courant de 0,45 A arrive à un nœud ; une branche en emporte 0,30 A. L'autre branche est parcourue par :",
   "choix": [
    "0,75 A",
    "0,15 A",
    "0,45 A",
    "0,30 A"
   ],
   "bonne": 1,
   "expl": "0,45 - 0,30 = 0,15, exactement le calcul de la loi des nœuds que l'on retrouvera dans le cours"
  }
 ],
 "bilan": [
  {
   "q": "En un nœud, la loi des nœuds s'écrit :",
   "choix": [
    "ΣI<sub>entrant</sub> = ΣI<sub>sortant</sub>",
    "ΣU = 0",
    "I = U × R",
    "toutes les intensités sont égales"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Un courant de 0,45 A arrive à un nœud d'où partent deux branches. L'une est parcourue par 0,30 A, l'autre par :",
   "choix": [
    "0,75 A",
    "0,15 A",
    "0,45 A",
    "0,30 A"
   ],
   "bonne": 1,
   "expl": "0,45 - 0,30"
  },
  {
   "q": "Dans un circuit en série, l'intensité :",
   "choix": [
    "se partage",
    "est la même partout",
    "diminue à chaque dipôle",
    "dépend de la position de l'ampèremètre"
   ],
   "bonne": 1,
   "expl": "il n'y a aucun nœud en série"
  },
  {
   "q": "Une <strong>maille</strong> est :",
   "choix": [
    "un point où se rejoignent trois fils",
    "un chemin fermé du circuit",
    "un dipôle particulier",
    "la borne d'un générateur"
   ],
   "bonne": 1,
   "expl": "un chemin fermé"
  },
  {
   "q": "En parcourant une maille entière et en revenant au point de départ, la somme des tensions rencontrées vaut :",
   "choix": [
    "la tension du générateur",
    "zéro",
    "la somme des tensions des récepteurs",
    "toujours 12 V"
   ],
   "bonne": 1,
   "expl": "on revient au même potentiel, donc au même point"
  },
  {
   "q": "Sur une maille comportant un générateur de 12 V et deux résistances, si U₁ = 7,2 V alors U₂ vaut :",
   "choix": [
    "19,2 V",
    "12 V",
    "4,8 V",
    "7,2 V"
   ],
   "bonne": 2,
   "expl": "12 - 7,2"
  },
  {
   "q": "En <strong>convention récepteur</strong>, les flèches de U et de I sont :",
   "choix": [
    "de même sens",
    "de sens contraires",
    "perpendiculaires",
    "indifférentes"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Une pile qui débite dans un circuit se flèche en convention :",
   "choix": [
    "récepteur",
    "générateur",
    "les deux",
    "aucune"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Une <strong>tension</strong> se rapporte :",
   "choix": [
    "à un seul fil",
    "à deux points du circuit",
    "à l'ensemble du circuit",
    "au seul générateur"
   ],
   "bonne": 1,
   "expl": "d'où la flèche tracée à côté du dipôle"
  },
  {
   "q": "L'ampèremètre se branche :",
   "choix": [
    "en dérivation",
    "en série",
    "à la place du générateur",
    "aux bornes de la pile"
   ],
   "bonne": 1,
   "expl": "il doit être traversé par le courant"
  },
  {
   "q": "Deux dipôles branchés <strong>en dérivation</strong> ont à leurs bornes :",
   "choix": [
    "des tensions toujours différentes",
    "la même tension",
    "une tension nulle",
    "la moitié de la tension du générateur"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Aux bornes d'un simple fil de liaison (résistance négligeable), la tension vaut :",
   "choix": [
    "la tension du générateur",
    "environ zéro",
    "la moitié de la tension",
    "on ne peut pas savoir"
   ],
   "bonne": 1,
   "expl": "U = R I avec R ≈ 0"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "L'<strong>intensité</strong> I mesure le débit de charges qui traversent une section du circuit ; elle se note par une …… et se mesure en <strong>ampères</strong> (A) avec un ampèremètre placé <strong>en série</strong>.",
   "verso": "<strong>flèche sur le fil</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>tension</strong> U mesure une différence d'état électrique <em>entre deux points</em> ; elle se note par une …… et se mesure en <strong>volts</strong> (V) avec un voltmètre placé <strong>en dérivation</strong>.",
   "verso": "<strong>flèche à côté du dipôle</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Conséquences à connaître : <strong>en série</strong>, il n'y a aucun nœud, donc …… ; <strong>en dérivation</strong>, l'intensité du courant principal se <strong>partage</strong> entre les branches. C'est pourquoi brancher un appareil de plus en dérivation augmente l'intensité totale appelée — et peut faire disjoncter l'installation.",
   "verso": "<strong>l'intensité est la même partout</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Conséquences à connaître : <strong>en série</strong>, il n'y a aucun nœud, donc <strong>l'intensité est la même partout</strong> ; ……, l'intensité du courant principal se <strong>partage</strong> entre les branches. C'est pourquoi brancher un appareil de plus en dérivation augmente l'intensité totale appelée — et peut faire disjoncter l'installation.",
   "verso": "<strong>en dérivation</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En ……, les flèches de U et de I sont de <strong>sens contraires</strong> ; on l'emploie pour tout dipôle qui <strong>reçoit</strong> de l'énergie : résistance, lampe, moteur. En <strong>convention générateur</strong>, elles sont de <strong>même sens</strong> ; on l'emploie pour tout dipôle qu",
   "verso": "<strong>convention récepteur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En un nœud, la somme des intensités des courants qui <strong>entrent</strong> est égale à la somme des intensités des courants qui <strong>sortent</strong> :\n……",
   "verso": "ΣI<sub>entrant</sub> = ΣI<sub>sortant</sub>.",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Si l'on part d'un point d'une maille et qu'on la parcourt entièrement pour revenir à ce même point, la <strong>somme des tensions rencontrées est nulle</strong> :\n……",
   "verso": "Σ<sub>maille</sub> U = 0.",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En partant de A dans le circuit ci-dessus, on obtient -U₁ - U₂ + E = 0, c'est-à-dire :\n……",
   "verso": "E = U₁ + U₂ + …",
   "origine": "cours a completer"
  }
 ]
};
