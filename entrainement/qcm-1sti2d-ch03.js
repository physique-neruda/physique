/* Genere par outils/construire.py — ne pas editer a la main.
   1sti2d · chapitre 03 · Courant continu
   Les QCM viennent de ch03_prerequis.tex et ch03_bilan.tex,
   les cartes de cartes/cartes-1sti2d-ch03.json. */
window.CHAPITRE = {
 "filiere": "1sti2d",
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
   "type": "definition",
   "recto": "Qu'appelle-t-on « Intensité et tension » ?",
   "verso": "L'<strong>intensité</strong> I mesure le débit de charges qui traversent une section du circuit ; elle se note par une <strong>flèche sur le fil</strong> et se mesure en <strong>ampères</strong> (A) avec un ampèremètre placé <strong>en série</strong>.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Loi des nœuds » ?",
   "verso": "En un nœud, la somme des intensités des courants qui <strong>entrent</strong> est égale à la somme des intensités des courants qui <strong>sortent</strong> : [2]\\[ I_entrant = I_sortant. \\]",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Les deux conventions » ?",
   "verso": "En <strong>convention récepteur</strong>, les flèches de U et de I sont de <strong>sens contraires</strong> ; on l'emploie pour tout dipôle qui <strong>reçoit</strong> de l'énergie : résistance, lampe, moteur.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Maille » ?",
   "verso": "Une <strong>maille</strong> est un <strong>chemin fermé</strong> du circuit : on part d'un point, on suit des branches sans jamais emprunter deux fois la même, et on revient au point de départ.",
   "origine": "definition du cours"
  },
  {
   "type": "question",
   "recto": "En un nœud, la loi des nœuds s'écrit ……",
   "rep": "ΣI<sub>entrant</sub> = ΣI<sub>sortant</sub>",
   "verso": "<strong>ΣI<sub>entrant</sub> = ΣI<sub>sortant</sub></strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un courant de 0,45 A arrive à un nœud d'où partent deux branches. L'une est parcourue par 0,30 A, l'autre par ……",
   "rep": "0,15 A",
   "verso": "<strong>0,15 A</strong> — 0,45 - 0,30",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans un circuit en série, l'intensité ……",
   "rep": "est la même partout",
   "verso": "<strong>est la même partout</strong> — il n'y a aucun nœud en série",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une <strong>maille</strong> est ……",
   "rep": "un chemin fermé du circuit",
   "verso": "<strong>un chemin fermé du circuit</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En parcourant une maille entière et en revenant au point de départ, la somme des tensions rencontrées vaut ……",
   "rep": "zéro",
   "verso": "<strong>zéro</strong> — on revient au même potentiel, donc au même point",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Sur une maille comportant un générateur de 12 V et deux résistances, si U₁ = 7,2 V alors U₂ vaut ……",
   "rep": "4,8 V",
   "verso": "<strong>4,8 V</strong> — 12 - 7,2",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En <strong>convention récepteur</strong>, les flèches de U et de I sont ……",
   "rep": "de sens contraires",
   "verso": "<strong>de sens contraires</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une pile qui débite dans un circuit se flèche en convention ……",
   "rep": "générateur",
   "verso": "<strong>générateur</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une <strong>tension</strong> se rapporte ……",
   "rep": "à deux points du circuit",
   "verso": "<strong>à deux points du circuit</strong> — d'où la flèche tracée à côté du dipôle",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "L'ampèremètre se branche ……",
   "rep": "en série",
   "verso": "<strong>en série</strong> — il doit être traversé par le courant",
   "origine": "bilan"
  }
 ]
};
