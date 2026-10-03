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
    "I = U × R",
    "ΣU = 0",
    "ΣI<sub>entrant</sub> = ΣI<sub>sortant</sub>",
    "toutes les intensités sont égales"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Un courant de 0,45 A arrive à un nœud d'où partent deux branches. L'une est parcourue par 0,30 A, l'autre par :",
   "choix": [
    "0,75 A",
    "0,30 A",
    "0,45 A",
    "0,15 A"
   ],
   "bonne": 3,
   "expl": "0,45 - 0,30"
  },
  {
   "q": "Dans un circuit en série, l'intensité :",
   "choix": [
    "est la même partout",
    "se partage",
    "diminue à chaque dipôle",
    "dépend de la position de l'ampèremètre"
   ],
   "bonne": 0,
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
    "zéro",
    "la tension du générateur",
    "la somme des tensions des récepteurs",
    "toujours 12 V"
   ],
   "bonne": 0,
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
    "aucune",
    "les deux",
    "générateur"
   ],
   "bonne": 3,
   "expl": ""
  },
  {
   "q": "Une <strong>tension</strong> se rapporte :",
   "choix": [
    "à deux points du circuit",
    "à un seul fil",
    "à l'ensemble du circuit",
    "au seul générateur"
   ],
   "bonne": 0,
   "expl": "d'où la flèche tracée à côté du dipôle"
  },
  {
   "q": "L'ampèremètre se branche :",
   "choix": [
    "en dérivation",
    "à la place du générateur",
    "en série",
    "aux bornes de la pile"
   ],
   "bonne": 2,
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
    "on ne peut pas savoir",
    "la moitié de la tension",
    "environ zéro"
   ],
   "bonne": 3,
   "expl": "U = R I avec R ≈ 0"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>L'intensité : comment la note-t-on sur un schéma ? unité ? appareil et branchement ?",
   "verso": "Une <b>flèche sur le fil</b>. En <b>ampères (A)</b>. Ampèremètre branché <b>en série</b>.",
   "origine": "Cours §1 Intensité et tension"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>La tension : comment la note-t-on sur un schéma ? unité ? appareil et branchement ?",
   "verso": "Une <b>flèche à côté du dipôle</b>. En <b>volts (V)</b>. Voltmètre branché <b>en dérivation</b>.",
   "origine": "Cours §1 Intensité et tension"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>L'intensité se rapporte à … ; la tension se rapporte à …",
   "verso": "L'intensité : à <b>un fil</b>.<br>La tension : à <b>deux points</b>.",
   "origine": "Cours §1 Le piège classique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Multimètre en voltmètre : que mesure-t-il ? Comment le brancher pour lire U<sub>AB</sub> ?",
   "verso": "Il affiche <b>V<sub>HI</sub> − V<sub>LO</sub></b>.<br>Pour U<sub>AB</sub> : <b>HI en A</b>, <b>LO (COM) en B</b>.",
   "origine": "Cours §1 Le sens de branchement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Le multimètre affiche une valeur négative. Est-ce une erreur ?",
   "verso": "Non : le fléchage choisi est <b>l'inverse du sens réel</b>. L'appareil affiche une valeur <b>signée</b>.",
   "origine": "Cours §1 Le sens de branchement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'un nœud ?",
   "verso": "Un point du circuit où <b>au moins trois fils</b> se rejoignent.",
   "origine": "Cours §2 La loi des nœuds"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer la loi des nœuds.",
   "verso": "En un nœud : <b>Σ I<sub>entrant</sub> = Σ I<sub>sortant</sub></b>. Les charges ne s'accumulent pas et ne disparaissent pas.",
   "origine": "Cours §2 La loi des nœuds"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que devient l'intensité en série ? en dérivation ?",
   "verso": "En <b>série</b> (aucun nœud) : la <b>même partout</b>.<br>En <b>dérivation</b> : le courant principal se <b>partage</b> entre les branches.",
   "origine": "Cours §2 Conséquences"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Convention récepteur : sens des flèches de U et I ? Pour quels dipôles ?",
   "verso": "Flèches de <b>sens contraires</b>. Pour les dipôles qui <b>reçoivent</b> de l'énergie : résistance, lampe, moteur.",
   "origine": "Cours §3 Les deux conventions"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Convention générateur : sens des flèches de U et I ? Pour quels dipôles ?",
   "verso": "Flèches de <b>même sens</b>. Pour les dipôles qui <b>fournissent</b> de l'énergie : pile, batterie, alternateur.",
   "origine": "Cours §3 Les deux conventions"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans quel ordre flèche-t-on un circuit ?",
   "verso": "1. On flèche d'abord <b>le courant</b> (sens au choix).<br>2. On en <b>déduit</b> le sens de chaque tension selon que le dipôle reçoit ou fournit. Jamais l'inverse.",
   "origine": "Cours §3 Méthode pratique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Une batterie de voiture se flèche-t-elle toujours en convention générateur ?",
   "verso": "Non : <b>générateur</b> quand elle démarre le moteur, <b>récepteur</b> quand l'alternateur la recharge. La convention décrit une situation, pas le composant.",
   "origine": "Cours §3 Un même dipôle peut changer de convention"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'une maille ?",
   "verso": "Un <b>chemin fermé</b> du circuit : on revient au point de départ sans emprunter deux fois la même branche.",
   "origine": "Cours §4 La loi des mailles"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Combien de mailles dans un circuit : générateur + deux branches en dérivation ?",
   "verso": "<b>Trois</b> : générateur + branche 1, générateur + branche 2, et la boucle des deux branches (sans générateur, mais c'est une maille).",
   "origine": "Cours §4 Repérer les mailles"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation entre la tension U<sub>AB</sub> et les potentiels ? Vers où pointe sa flèche ?",
   "verso": "<b>U<sub>AB</sub> = V<sub>A</sub> − V<sub>B</sub></b> : un dénivelé de potentiel. La flèche pointe <b>vers A</b>.",
   "origine": "Cours §4 Une histoire de dénivelé"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer la loi des mailles.",
   "verso": "Sur un tour complet d'une maille : <b>Σ U = 0</b>. Tension comptée <b>+</b> si sa flèche est dans le sens de parcours, <b>−</b> sinon.",
   "origine": "Cours §4 La loi des mailles"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sur une boucle simple (générateur E et récepteurs), comment se réarrange la loi des mailles ?",
   "verso": "<b>E = U<sub>1</sub> + U<sub>2</sub> + …</b> : la tension du générateur se répartit entre les récepteurs.",
   "origine": "Cours §4 La loi des mailles"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Deux dipôles en dérivation ont-ils la même tension ? Et la tension aux bornes d'un fil ?",
   "verso": "En dérivation : <b>la même tension</b>.<br>Aux bornes d'un fil de liaison : <b>environ 0 V</b> (U = R I avec R ≈ 0).",
   "origine": "Bilan"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment flécher entièrement un circuit à un générateur et deux résistances ?",
   "verso": "1. Flécher <b>le courant</b> sur chaque branche.<br>2. Générateur : flèche de U <b>dans le même sens</b> que I.<br>3. Résistances : flèche de U <b>en sens contraire</b> de I.",
   "origine": "Cours §3 Méthode pratique"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Générateur 12 V, R<sub>1</sub> et R<sub>2</sub> en série, U<sub>1</sub> = 7,2 V. Comment trouver U<sub>2</sub> ?",
   "verso": "1. Repérer la maille, flécher les tensions.<br>2. Loi des mailles : E = U<sub>1</sub> + U<sub>2</sub>.<br>3. U<sub>2</sub> = 12 − 7,2 = <b>4,8 V</b>.<br>4. Vérifier : 7,2 + 4,8 = 12.",
   "origine": "Cours §4 Méthode 1"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>I<sub>1</sub> = 0,45 A entre dans un nœud, I<sub>2</sub> = 0,30 A en sort. Comment trouver I<sub>3</sub> ?",
   "verso": "1. Repérer le nœud, flécher : I<sub>1</sub> entre, I<sub>2</sub> et I<sub>3</sub> sortent.<br>2. Loi des nœuds : I<sub>1</sub> = I<sub>2</sub> + I<sub>3</sub>.<br>3. I<sub>3</sub> = 0,45 − 0,30 = <b>0,15 A</b>.",
   "origine": "Cours §4 Méthode 1"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment brancher le multimètre pour mesurer l'intensité dans une branche ?",
   "verso": "1. Ouvrir le circuit dans la branche.<br>2. Insérer l'appareil <b>en série</b> : le courant <b>entre par 10A</b> et <b>sort par LO (COM)</b>.<br>3. Sélecteur en A continu, puis lire la valeur signée.",
   "origine": "Cours §1 Mesurer avec le multimètre"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
