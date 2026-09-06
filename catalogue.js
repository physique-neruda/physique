/* ======================================================================
   catalogue.js — LE CATALOGUE DU SITE

   C'est le seul fichier à modifier pour faire vivre le site. Il contient
   deux listes : les filières (avec leurs rubriques), puis les documents.

   ---------------------------------------------------------------------
   AJOUTER UN DOCUMENT OU UNE ANIMATION
   ---------------------------------------------------------------------
   1. déposer le fichier :
        un PDF        -> docs/<identifiant de filière>/mon-fichier.pdf
        une animation -> animations/mon-animation.html
   2. recopier un bloc dans DOCUMENTS ci-dessous, changer les valeurs,
      sans oublier la virgule après l'accolade fermante ;
   3. c'est tout : la page d'accueil se range toute seule.

   Champs d'un document :
     filiere      doit être un "id" présent dans FILIERES
     rubrique     doit être une des "rubriques" de cette filière
     chapitre     sert de sous-titre de groupe ; garder l'orthographe
                  identique d'un document à l'autre du même chapitre
     type         "pdf" ou "animation"
     titre        le nom affiché
     fichier      le chemin depuis la racine du site
     description  une phrase ; facultatif
     trouve       pour une animation : la loi qu'elle fait découvrir ;
                  laisser "" ou l'omettre pour un PDF
     motscles     liste de mots pour la recherche ; facultatif

   ---------------------------------------------------------------------
   AJOUTER UNE FILIÈRE OU UNE RUBRIQUE
   ---------------------------------------------------------------------
   Ajouter un bloc dans FILIERES. L'ordre de la liste est l'ordre
   d'affichage. L'"id" sert dans l'adresse (index.html#bts-et) et comme
   nom de dossier dans docs/ : minuscules, sans accent ni espace.

   ---------------------------------------------------------------------
   ATTENTION : TOUT CE QUI EST DÉPOSÉ ICI EST PUBLIC
   ---------------------------------------------------------------------
   Le dépôt GitHub est public, c'est ce qui rend l'hébergement gratuit.
   N'y mettre aucun corrigé, aucun sujet d'évaluation à venir, aucune
   copie ni note d'étudiant. Une adresse compliquée ne protège rien.
   ====================================================================== */


const FILIERES = [

  {
    id: "bts-et",
    nom: "BTS Électrotechnique",
    sous_titre: "Physique appliquée",
    rubriques: ["Cours", "TP", "ADM", "S'entraîner"]
  },

  {
    id: "bts-crsa",
    nom: "BTS CRSA",
    sous_titre: "Conception et Réalisation de Systèmes Automatiques",
    rubriques: ["Cours", "TP", "S'entraîner"]
  },

  {
    id: "bts-tsma",
    nom: "BTS TSMA",
    sous_titre: "Techniques et Services en Matériels Agricoles",
    rubriques: ["Cours", "TP", "S'entraîner"]
  },

  {
    id: "1sti2d",
    nom: "1re STI2D",
    sous_titre: "Physique-chimie et mathématiques",
    rubriques: ["Cours", "TP", "S'entraîner"]
  }

];


const DOCUMENTS = [

/* >>> bloc genere par outils/publier.py
   Ne rien ecrire entre les deux reperes : tout y est reecrit a chaque passage.
   Les entrees a la main se placent en dehors. */

  /* ---------------- 1re STI2D ---------------- */
  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 0 — Outils de base en physique-chimie",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch00/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["base", "chimie", "outils", "physique"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 0 — Outils de base en physique-chimie",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch00/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["base", "chimie", "outils", "physique"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 0 — Outils de base en physique-chimie",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch00/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["base", "chimie", "outils", "physique"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 0 — Outils de base en physique-chimie",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch00/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["base", "chimie", "outils", "physique"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 0 — Outils de base en physique-chimie",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch00/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["base", "chimie", "outils", "physique"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 0 — Outils de base en physique-chimie",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch00/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["base", "chimie", "outils", "physique"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 0 — Outils de base en physique-chimie",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=0&type=prerequis",
    description: "10 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["base", "chimie", "outils", "physique"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 0 — Outils de base en physique-chimie",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=0&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["base", "chimie", "outils", "physique"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 0 — Outils de base en physique-chimie",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=1sti2d&ch=0",
    description: "13 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["base", "chimie", "outils", "physique"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 1 — Mesure et incertitudes",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch01/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["incertitudes", "mesure"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 1 — Mesure et incertitudes",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch01/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["incertitudes", "mesure"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 1 — Mesure et incertitudes",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch01/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["incertitudes", "mesure"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 1 — Mesure et incertitudes",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch01/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["incertitudes", "mesure"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 1 — Mesure et incertitudes",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch01/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["incertitudes", "mesure"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 1 — Mesure et incertitudes",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch01/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["incertitudes", "mesure"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 1 — Mesure et incertitudes",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=1&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["incertitudes", "mesure"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 1 — Mesure et incertitudes",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=1&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["incertitudes", "mesure"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 1 — Mesure et incertitudes",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=1sti2d&ch=1",
    description: "7 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["incertitudes", "mesure"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 2 — Énergie, puissance, chaînes",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch02/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["chaines", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 2 — Énergie, puissance, chaînes",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch02/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["chaines", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 2 — Énergie, puissance, chaînes",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch02/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["chaines", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 2 — Énergie, puissance, chaînes",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch02/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["chaines", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 2 — Énergie, puissance, chaînes",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch02/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["chaines", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 2 — Énergie, puissance, chaînes",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch02/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["chaines", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 2 — Énergie, puissance, chaînes",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=2&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["chaines", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 2 — Énergie, puissance, chaînes",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=2&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["chaines", "energie", "puissance"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 3 — Courant continu",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch03/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["continu", "courant"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 3 — Courant continu",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch03/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["continu", "courant"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 3 — Courant continu",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch03/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["continu", "courant"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 3 — Courant continu",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch03/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["continu", "courant"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 3 — Courant continu",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch03/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["continu", "courant"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 3 — Courant continu",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch03/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["continu", "courant"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 3 — Courant continu",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=3&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["continu", "courant"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 3 — Courant continu",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=3&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["continu", "courant"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 3 — Courant continu",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=1sti2d&ch=3",
    description: "8 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["continu", "courant"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 4 — Grandeurs périodiques",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch04/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["grandeurs", "periodiques"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 4 — Grandeurs périodiques",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch04/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["grandeurs", "periodiques"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 4 — Grandeurs périodiques",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch04/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["grandeurs", "periodiques"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 4 — Grandeurs périodiques",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch04/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["grandeurs", "periodiques"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 4 — Grandeurs périodiques",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch04/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["grandeurs", "periodiques"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 4 — Grandeurs périodiques",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch04/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["grandeurs", "periodiques"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 4 — Grandeurs périodiques",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=4&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["grandeurs", "periodiques"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 4 — Grandeurs périodiques",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=4&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["grandeurs", "periodiques"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 4 — Grandeurs périodiques",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=1sti2d&ch=4",
    description: "5 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["grandeurs", "periodiques"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 5 — Puissance, énergie électriques, loi d'Ohm",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch05/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["electriques", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 5 — Puissance, énergie électriques, loi d'Ohm",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch05/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["electriques", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 5 — Puissance, énergie électriques, loi d'Ohm",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch05/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["electriques", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 5 — Puissance, énergie électriques, loi d'Ohm",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch05/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["electriques", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 5 — Puissance, énergie électriques, loi d'Ohm",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch05/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["electriques", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 5 — Puissance, énergie électriques, loi d'Ohm",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch05/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["electriques", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 5 — Puissance, énergie électriques, loi d'Ohm",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=5&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["electriques", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 5 — Puissance, énergie électriques, loi d'Ohm",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=5&type=bilan",
    description: "15 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["electriques", "energie", "puissance"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 5 — Puissance, énergie électriques, loi d'Ohm",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=1sti2d&ch=5",
    description: "7 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["electriques", "energie", "puissance"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 6 — Cinématique",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch06/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["cinematique"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 6 — Cinématique",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch06/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["cinematique"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 6 — Cinématique",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch06/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["cinematique"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 6 — Cinématique",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch06/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["cinematique"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 6 — Cinématique",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch06/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["cinematique"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 6 — Cinématique",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch06/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["cinematique"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 6 — Cinématique",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=6&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["cinematique"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 6 — Cinématique",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=6&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["cinematique"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 6 — Cinématique",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=1sti2d&ch=6",
    description: "6 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["cinematique"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 7 — Forces et principe d'inertie",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch07/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["forces", "inertie", "principe"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 7 — Forces et principe d'inertie",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch07/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["forces", "inertie", "principe"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 7 — Forces et principe d'inertie",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch07/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["forces", "inertie", "principe"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 7 — Forces et principe d'inertie",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch07/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["forces", "inertie", "principe"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 7 — Forces et principe d'inertie",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch07/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["forces", "inertie", "principe"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 7 — Forces et principe d'inertie",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch07/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["forces", "inertie", "principe"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 7 — Forces et principe d'inertie",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=7&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["forces", "inertie", "principe"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 7 — Forces et principe d'inertie",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=7&type=bilan",
    description: "14 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["forces", "inertie", "principe"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 7 — Forces et principe d'inertie",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=1sti2d&ch=7",
    description: "13 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["forces", "inertie", "principe"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 8 — Travail et énergies mécaniques",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch08/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["energies", "mecaniques", "travail"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 8 — Travail et énergies mécaniques",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch08/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["energies", "mecaniques", "travail"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 8 — Travail et énergies mécaniques",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch08/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["energies", "mecaniques", "travail"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 8 — Travail et énergies mécaniques",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch08/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["energies", "mecaniques", "travail"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 8 — Travail et énergies mécaniques",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch08/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["energies", "mecaniques", "travail"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 8 — Travail et énergies mécaniques",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch08/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["energies", "mecaniques", "travail"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 8 — Travail et énergies mécaniques",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=8&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["energies", "mecaniques", "travail"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 8 — Travail et énergies mécaniques",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=8&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["energies", "mecaniques", "travail"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 9 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch09/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 9 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch09/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 9 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch09/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 9 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch09/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 9 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch09/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 9 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch09/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 9 — Énergie interne et transferts thermiques",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=9&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 9 — Énergie interne et transferts thermiques",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=9&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 10 — Énergie chimique",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch10/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["chimique", "energie"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 10 — Énergie chimique",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch10/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["chimique", "energie"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 10 — Énergie chimique",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch10/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["chimique", "energie"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 10 — Énergie chimique",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch10/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["chimique", "energie"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 10 — Énergie chimique",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch10/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["chimique", "energie"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 10 — Énergie chimique",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch10/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["chimique", "energie"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 10 — Énergie chimique",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=10&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["chimique", "energie"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 10 — Énergie chimique",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=10&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["chimique", "energie"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 10 — Énergie chimique",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=1sti2d&ch=10",
    description: "5 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["chimique", "energie"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 11 — Énergie transportée par la lumière",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch11/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["energie", "lumiere", "transportee"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 11 — Énergie transportée par la lumière",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch11/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["energie", "lumiere", "transportee"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 11 — Énergie transportée par la lumière",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch11/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["energie", "lumiere", "transportee"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 11 — Énergie transportée par la lumière",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch11/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["energie", "lumiere", "transportee"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 11 — Énergie transportée par la lumière",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch11/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["energie", "lumiere", "transportee"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 11 — Énergie transportée par la lumière",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch11/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["energie", "lumiere", "transportee"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 11 — Énergie transportée par la lumière",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=11&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["energie", "lumiere", "transportee"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 11 — Énergie transportée par la lumière",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=11&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["energie", "lumiere", "transportee"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 12 — Matériaux et organisation de la matière",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch12/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["materiaux", "matiere", "organisation"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 12 — Matériaux et organisation de la matière",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch12/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["materiaux", "matiere", "organisation"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 12 — Matériaux et organisation de la matière",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch12/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["materiaux", "matiere", "organisation"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 12 — Matériaux et organisation de la matière",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch12/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["materiaux", "matiere", "organisation"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 12 — Matériaux et organisation de la matière",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch12/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["materiaux", "matiere", "organisation"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 12 — Matériaux et organisation de la matière",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch12/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["materiaux", "matiere", "organisation"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 12 — Matériaux et organisation de la matière",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=12&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["materiaux", "matiere", "organisation"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 12 — Matériaux et organisation de la matière",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=12&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["materiaux", "matiere", "organisation"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 13 — Combustions et carburants",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch13/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["carburants", "combustions"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 13 — Combustions et carburants",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch13/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["carburants", "combustions"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 13 — Combustions et carburants",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch13/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["carburants", "combustions"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 13 — Combustions et carburants",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch13/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["carburants", "combustions"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 13 — Combustions et carburants",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch13/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["carburants", "combustions"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 13 — Combustions et carburants",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch13/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["carburants", "combustions"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 13 — Combustions et carburants",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=13&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["carburants", "combustions"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 13 — Combustions et carburants",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=13&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["carburants", "combustions"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 13 — Combustions et carburants",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=1sti2d&ch=13",
    description: "5 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["carburants", "combustions"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 14 — Solutions aqueuses",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch14/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["aqueuses", "solutions"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 14 — Solutions aqueuses",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch14/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["aqueuses", "solutions"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 14 — Solutions aqueuses",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch14/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["aqueuses", "solutions"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 14 — Solutions aqueuses",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch14/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["aqueuses", "solutions"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 14 — Solutions aqueuses",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch14/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["aqueuses", "solutions"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 14 — Solutions aqueuses",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch14/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["aqueuses", "solutions"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 14 — Solutions aqueuses",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=14&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["aqueuses", "solutions"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 14 — Solutions aqueuses",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=14&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["aqueuses", "solutions"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 15 — Oxydoréduction, corrosion et piles",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch15/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["corrosion", "oxydoreduction", "piles"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 15 — Oxydoréduction, corrosion et piles",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch15/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["corrosion", "oxydoreduction", "piles"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 15 — Oxydoréduction, corrosion et piles",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch15/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["corrosion", "oxydoreduction", "piles"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 15 — Oxydoréduction, corrosion et piles",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch15/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["corrosion", "oxydoreduction", "piles"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 15 — Oxydoréduction, corrosion et piles",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch15/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["corrosion", "oxydoreduction", "piles"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 15 — Oxydoréduction, corrosion et piles",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch15/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["corrosion", "oxydoreduction", "piles"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 15 — Oxydoréduction, corrosion et piles",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=15&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["corrosion", "oxydoreduction", "piles"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 15 — Oxydoréduction, corrosion et piles",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=15&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["corrosion", "oxydoreduction", "piles"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 15 — Oxydoréduction, corrosion et piles",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=1sti2d&ch=15",
    description: "5 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["corrosion", "oxydoreduction", "piles"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 16 — Notion d'onde et information",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch16/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["information", "notion", "onde"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 16 — Notion d'onde et information",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch16/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["information", "notion", "onde"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 16 — Notion d'onde et information",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch16/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["information", "notion", "onde"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 16 — Notion d'onde et information",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch16/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["information", "notion", "onde"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 16 — Notion d'onde et information",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch16/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["information", "notion", "onde"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 16 — Notion d'onde et information",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch16/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["information", "notion", "onde"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 16 — Notion d'onde et information",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=16&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["information", "notion", "onde"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 16 — Notion d'onde et information",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=16&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["information", "notion", "onde"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 16 — Notion d'onde et information",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=1sti2d&ch=16",
    description: "22 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["information", "notion", "onde"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 17 — Ondes sonores",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch17/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["ondes", "sonores"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 17 — Ondes sonores",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch17/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["ondes", "sonores"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 17 — Ondes sonores",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch17/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["ondes", "sonores"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 17 — Ondes sonores",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch17/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["ondes", "sonores"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 17 — Ondes sonores",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch17/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["ondes", "sonores"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 17 — Ondes sonores",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch17/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["ondes", "sonores"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 17 — Ondes sonores",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=17&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["ondes", "sonores"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 17 — Ondes sonores",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=17&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["ondes", "sonores"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 17 — Ondes sonores",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=1sti2d&ch=17",
    description: "5 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["ondes", "sonores"]
  },


  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 18 — Ondes électromagnétiques",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/1sti2d/ch18/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["electromagnetiques", "ondes"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 18 — Ondes électromagnétiques",
    type: "pdf", titre: "Activité",
    fichier: "docs/1sti2d/ch18/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["electromagnetiques", "ondes"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 18 — Ondes électromagnétiques",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/1sti2d/ch18/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["electromagnetiques", "ondes"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 18 — Ondes électromagnétiques",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/1sti2d/ch18/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["electromagnetiques", "ondes"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 18 — Ondes électromagnétiques",
    type: "pdf", titre: "Exercices",
    fichier: "docs/1sti2d/ch18/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["electromagnetiques", "ondes"]
  },

  {
    filiere: "1sti2d", rubrique: "Cours",
    chapitre: "Chapitre 18 — Ondes électromagnétiques",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/1sti2d/ch18/bilan.pdf",
    description: "Douze questions pour se tester, réponses en bas de page.",
    motscles: ["electromagnetiques", "ondes"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 18 — Ondes électromagnétiques",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=18&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["electromagnetiques", "ondes"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 18 — Ondes électromagnétiques",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=1sti2d&ch=18&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["electromagnetiques", "ondes"]
  },

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 18 — Ondes électromagnétiques",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=1sti2d&ch=18",
    description: "6 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["electromagnetiques", "ondes"]
  },


  /* ---------------- BTS Électrotechnique ---------------- */
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-et/c01/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "animation", titre: "Le chauffage",
    fichier: "animations/calorimetre.html",
    description: "Une résistance de puissance connue dans un récipient. Masse, matière, puissance et température de départ réglables ; la courbe trace la température en fonction de l'énergie reçue, paliers compris. Q = m·c·Δθ et Q = m·L.",
    motscles: ["calorimetre", "chaleur", "capacite thermique", "chaleur latente", "changement d'etat", "palier", "fusion", "vaporisation", "energie"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Activité 1 — Chauffer un corps",
    fichier: "docs/bts-et/c01/a1_chauffage.pdf",
    description: "Le document à remplir pendant l'animation.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "animation", titre: "Le rayonnement",
    fichier: "animations/rayonnement.html",
    description: "Une plaque chaude face à un capteur, sans aucun contact. Température, surface et état de surface réglables, avec une colonne d'essai pour chercher la loi. P = ε·σ·S·T⁴.",
    motscles: ["rayonnement", "stefan", "emissivite", "camera thermique", "thermographie", "kelvin", "infrarouge"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Activité 2 — Le rayonnement",
    fichier: "docs/bts-et/c01/a2_rayonnement.pdf",
    description: "Le document à remplir pendant l'animation.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "animation", titre: "Le flux à travers une paroi",
    fichier: "animations/flux-thermique.html",
    description: "Une ou deux couches entre un local chauffé et l'extérieur. Matériau, épaisseur, surface et températures réglables ; température d'interface affichée. Φ = λ·S·Δθ / e, puis la résistance thermique.",
    motscles: ["flux", "conduction", "fourier", "isolation", "resistance thermique", "paroi", "lambda", "conductivite", "armoire"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Activité 3 — Le flux à travers une paroi",
    fichier: "docs/bts-et/c01/a3_flux.pdf",
    description: "Le document à remplir pendant l'animation.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-et/c01/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-et/c01/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Activité documentaire",
    fichier: "docs/bts-et/c01/activite.pdf",
    description: "Exploitation de documents techniques, après le cours.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-et/c01/exercices.pdf",
    description: "Les exercices du chapitre.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Situation U51",
    fichier: "docs/bts-et/c01/u51.pdf",
    description: "Une situation d'évaluation type U51, pour s'entraîner.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Sujet type E4 — sujet",
    fichier: "docs/bts-et/c01/e4_sujet.pdf",
    description: "Le questionnement.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Sujet type E4 — dossier ressources",
    fichier: "docs/bts-et/c01/e4_dres.pdf",
    description: "Les documents techniques à exploiter.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Sujet type E4 — documents réponses",
    fichier: "docs/bts-et/c01/e4_drep.pdf",
    description: "Les pages à rendre.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-et/c01/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["energie", "interne", "thermiques", "transferts"]
  },


  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-et/tp01/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["electricite", "fondamentales", "notions"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-et/tp01/cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire.",
    motscles: ["electricite", "fondamentales", "notions"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-et/tp01/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["electricite", "fondamentales", "notions"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Activité documentaire",
    fichier: "docs/bts-et/tp01/activite.pdf",
    description: "Exploitation de documents techniques, après le cours.",
    motscles: ["electricite", "fondamentales", "notions"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-et/tp01/exercices.pdf",
    description: "Les exercices du chapitre.",
    motscles: ["electricite", "fondamentales", "notions"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Situation U51",
    fichier: "docs/bts-et/tp01/u51.pdf",
    description: "Une situation d'évaluation type U51, pour s'entraîner.",
    motscles: ["electricite", "fondamentales", "notions"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Sujet type E4 — sujet",
    fichier: "docs/bts-et/tp01/e4_sujet.pdf",
    description: "Le questionnement.",
    motscles: ["electricite", "fondamentales", "notions"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Sujet type E4 — dossier ressources",
    fichier: "docs/bts-et/tp01/e4_dres.pdf",
    description: "Les documents techniques à exploiter.",
    motscles: ["electricite", "fondamentales", "notions"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Sujet type E4 — documents réponses",
    fichier: "docs/bts-et/tp01/e4_drep.pdf",
    description: "Les pages à rendre.",
    motscles: ["electricite", "fondamentales", "notions"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-et/tp01/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["electricite", "fondamentales", "notions"]
  },


/* <<< fin du bloc genere */


  /* ================= BTS TSMA — les 18 chapitres ================= */

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 0 — Outils de base",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch00/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["outils", "puissances de dix", "unites", "proportionnalite"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 0 — Outils de base",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch00/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["outils", "puissances de dix", "unites", "proportionnalite"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 0 — Outils de base",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch00/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["outils", "puissances de dix", "unites", "proportionnalite"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 0 — Outils de base",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch00/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["outils", "puissances de dix", "unites", "proportionnalite"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 1 — Mesures, erreurs et incertitudes",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch01/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["mesure", "incertitude", "dispersion", "tolerance", "pied a coulisse"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 1 — Mesures, erreurs et incertitudes",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch01/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["mesure", "incertitude", "dispersion", "tolerance", "pied a coulisse"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 1 — Mesures, erreurs et incertitudes",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch01/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["mesure", "incertitude", "dispersion", "tolerance", "pied a coulisse"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 1 — Mesures, erreurs et incertitudes",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch01/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["mesure", "incertitude", "dispersion", "tolerance", "pied a coulisse"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 1 — Mesures, erreurs et incertitudes",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch01/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["mesure", "incertitude", "dispersion", "tolerance", "pied a coulisse"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 1 — Mesures, erreurs et incertitudes",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch01/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["mesure", "incertitude", "dispersion", "tolerance", "pied a coulisse"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 1 — Mesures, erreurs et incertitudes",
    type: "pdf", titre: "Activité sur animation",
    fichier: "docs/bts-tsma/ch01/activite_anim.pdf",
    description: "La même étude, menée sur une animation : aucun matériel nécessaire.",
    motscles: ["mesure", "incertitude", "dispersion", "tolerance", "pied a coulisse"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 1 — Mesures, erreurs et incertitudes",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch01/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["mesure", "incertitude", "dispersion", "tolerance", "pied a coulisse"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 1 — Mesures, erreurs et incertitudes",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch01/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["mesure", "incertitude", "dispersion", "tolerance", "pied a coulisse"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 1 — Mesures, erreurs et incertitudes",
    type: "animation", titre: "Pied à coulisse virtuel",
    fichier: "animations/pied-a-coulisse.html",
    description: "Un pied à coulisse au 1/50 refermé sur un axe de piston : on lit soi-même le vernier, à la loupe, sur six axes numérotés. L'animation donne la moyenne et l'écart-type, pas la conclusion.",
    trouve: "Une mesure ne se conclut qu'en comparant un intervalle à une tolérance.",
    motscles: ["pied a coulisse", "vernier", "mesure", "incertitude", "tolerance", "dispersion"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 2 — Énergie, puissance, rendement",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch02/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["energie", "puissance", "rendement", "joule", "watt", "treuil"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 2 — Énergie, puissance, rendement",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch02/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["energie", "puissance", "rendement", "joule", "watt", "treuil"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 2 — Énergie, puissance, rendement",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch02/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["energie", "puissance", "rendement", "joule", "watt", "treuil"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 2 — Énergie, puissance, rendement",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch02/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["energie", "puissance", "rendement", "joule", "watt", "treuil"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 2 — Énergie, puissance, rendement",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch02/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["energie", "puissance", "rendement", "joule", "watt", "treuil"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 2 — Énergie, puissance, rendement",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch02/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["energie", "puissance", "rendement", "joule", "watt", "treuil"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 2 — Énergie, puissance, rendement",
    type: "pdf", titre: "Activité sur animation",
    fichier: "docs/bts-tsma/ch02/activite_anim.pdf",
    description: "La même étude, menée sur une animation : aucun matériel nécessaire.",
    motscles: ["energie", "puissance", "rendement", "joule", "watt", "treuil"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 2 — Énergie, puissance, rendement",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch02/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["energie", "puissance", "rendement", "joule", "watt", "treuil"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 2 — Énergie, puissance, rendement",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch02/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["energie", "puissance", "rendement", "joule", "watt", "treuil"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 2 — Énergie, puissance, rendement",
    type: "animation", titre: "Treuil virtuel 24 V",
    fichier: "animations/treuil.html",
    description: "Un treuil lève une masse réglable : voltmètre, ampèremètre et chronomètre à déclencher soi-même. Cinq chronométrages du même essai suffisent à voir d'où vient l'incertitude.",
    trouve: "η = E utile / E absorbée, et le rendement dépend de la charge.",
    motscles: ["treuil", "rendement", "energie", "puissance", "chronometre", "incertitude"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 3 — Statique des fluides",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch03/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["fluide", "pression", "statique", "hydrostatique", "verin"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 3 — Statique des fluides",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch03/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["fluide", "pression", "statique", "hydrostatique", "verin"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 3 — Statique des fluides",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch03/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["fluide", "pression", "statique", "hydrostatique", "verin"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 3 — Statique des fluides",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch03/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["fluide", "pression", "statique", "hydrostatique", "verin"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 3 — Statique des fluides",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch03/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["fluide", "pression", "statique", "hydrostatique", "verin"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 3 — Statique des fluides",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch03/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["fluide", "pression", "statique", "hydrostatique", "verin"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 3 — Statique des fluides",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch03/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["fluide", "pression", "statique", "hydrostatique", "verin"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 3 — Statique des fluides",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch03/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["fluide", "pression", "statique", "hydrostatique", "verin"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 4 — Dynamique des fluides",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch04/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["debit", "bernoulli", "conservation", "dynamique des fluides"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 4 — Dynamique des fluides",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch04/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["debit", "bernoulli", "conservation", "dynamique des fluides"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 4 — Dynamique des fluides",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch04/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["debit", "bernoulli", "conservation", "dynamique des fluides"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 4 — Dynamique des fluides",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch04/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["debit", "bernoulli", "conservation", "dynamique des fluides"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 4 — Dynamique des fluides",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch04/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["debit", "bernoulli", "conservation", "dynamique des fluides"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 4 — Dynamique des fluides",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch04/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["debit", "bernoulli", "conservation", "dynamique des fluides"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 4 — Dynamique des fluides",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch04/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["debit", "bernoulli", "conservation", "dynamique des fluides"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 4 — Dynamique des fluides",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch04/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["debit", "bernoulli", "conservation", "dynamique des fluides"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 5 — Viscosité et pertes de charge",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch05/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["viscosite", "pertes de charge", "reynolds", "conduite"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 5 — Viscosité et pertes de charge",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch05/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["viscosite", "pertes de charge", "reynolds", "conduite"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 5 — Viscosité et pertes de charge",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch05/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["viscosite", "pertes de charge", "reynolds", "conduite"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 5 — Viscosité et pertes de charge",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch05/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["viscosite", "pertes de charge", "reynolds", "conduite"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 5 — Viscosité et pertes de charge",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch05/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["viscosite", "pertes de charge", "reynolds", "conduite"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 5 — Viscosité et pertes de charge",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch05/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["viscosite", "pertes de charge", "reynolds", "conduite"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 5 — Viscosité et pertes de charge",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch05/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["viscosite", "pertes de charge", "reynolds", "conduite"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 5 — Viscosité et pertes de charge",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch05/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["viscosite", "pertes de charge", "reynolds", "conduite"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 6 — La réaction chimique",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch06/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["reaction chimique", "equation", "mole", "masse molaire"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 6 — La réaction chimique",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch06/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["reaction chimique", "equation", "mole", "masse molaire"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 6 — La réaction chimique",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch06/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["reaction chimique", "equation", "mole", "masse molaire"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 6 — La réaction chimique",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch06/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["reaction chimique", "equation", "mole", "masse molaire"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 6 — La réaction chimique",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch06/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["reaction chimique", "equation", "mole", "masse molaire"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 6 — La réaction chimique",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch06/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["reaction chimique", "equation", "mole", "masse molaire"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 6 — La réaction chimique",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch06/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["reaction chimique", "equation", "mole", "masse molaire"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 6 — La réaction chimique",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch06/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["reaction chimique", "equation", "mole", "masse molaire"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 7 — Combustions et carburants",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch07/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["combustion", "carburant", "gazole", "pouvoir calorifique"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 7 — Combustions et carburants",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch07/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["combustion", "carburant", "gazole", "pouvoir calorifique"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 7 — Combustions et carburants",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch07/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["combustion", "carburant", "gazole", "pouvoir calorifique"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 7 — Combustions et carburants",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch07/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["combustion", "carburant", "gazole", "pouvoir calorifique"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 7 — Combustions et carburants",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch07/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["combustion", "carburant", "gazole", "pouvoir calorifique"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 7 — Combustions et carburants",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch07/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["combustion", "carburant", "gazole", "pouvoir calorifique"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 7 — Combustions et carburants",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch07/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["combustion", "carburant", "gazole", "pouvoir calorifique"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 7 — Combustions et carburants",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch07/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["combustion", "carburant", "gazole", "pouvoir calorifique"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 8 — Gaz parfaits et premier principe",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch08/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["gaz parfait", "premier principe", "travail", "chaleur"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 8 — Gaz parfaits et premier principe",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch08/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["gaz parfait", "premier principe", "travail", "chaleur"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 8 — Gaz parfaits et premier principe",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch08/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["gaz parfait", "premier principe", "travail", "chaleur"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 8 — Gaz parfaits et premier principe",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch08/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["gaz parfait", "premier principe", "travail", "chaleur"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 8 — Gaz parfaits et premier principe",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch08/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["gaz parfait", "premier principe", "travail", "chaleur"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 8 — Gaz parfaits et premier principe",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch08/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["gaz parfait", "premier principe", "travail", "chaleur"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 8 — Gaz parfaits et premier principe",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch08/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["gaz parfait", "premier principe", "travail", "chaleur"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 8 — Gaz parfaits et premier principe",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch08/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["gaz parfait", "premier principe", "travail", "chaleur"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 9 — Transferts thermiques et calorimétrie",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch09/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["transfert thermique", "calorimetrie", "conduction", "convection"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 9 — Transferts thermiques et calorimétrie",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch09/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["transfert thermique", "calorimetrie", "conduction", "convection"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 9 — Transferts thermiques et calorimétrie",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch09/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["transfert thermique", "calorimetrie", "conduction", "convection"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 9 — Transferts thermiques et calorimétrie",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch09/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["transfert thermique", "calorimetrie", "conduction", "convection"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 9 — Transferts thermiques et calorimétrie",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch09/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["transfert thermique", "calorimetrie", "conduction", "convection"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 9 — Transferts thermiques et calorimétrie",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch09/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["transfert thermique", "calorimetrie", "conduction", "convection"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 9 — Transferts thermiques et calorimétrie",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch09/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["transfert thermique", "calorimetrie", "conduction", "convection"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 9 — Transferts thermiques et calorimétrie",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch09/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["transfert thermique", "calorimetrie", "conduction", "convection"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 10 — Machines thermiques",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch10/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["machine thermique", "moteur", "cycle", "rendement"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 10 — Machines thermiques",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch10/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["machine thermique", "moteur", "cycle", "rendement"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 10 — Machines thermiques",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch10/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["machine thermique", "moteur", "cycle", "rendement"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 10 — Machines thermiques",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch10/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["machine thermique", "moteur", "cycle", "rendement"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 10 — Machines thermiques",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch10/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["machine thermique", "moteur", "cycle", "rendement"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 10 — Machines thermiques",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch10/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["machine thermique", "moteur", "cycle", "rendement"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 10 — Machines thermiques",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch10/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["machine thermique", "moteur", "cycle", "rendement"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 10 — Machines thermiques",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch10/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["machine thermique", "moteur", "cycle", "rendement"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 11 — Oxydoréduction, piles et corrosion",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch11/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["oxydoreduction", "pile", "corrosion", "batterie"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 11 — Oxydoréduction, piles et corrosion",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch11/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["oxydoreduction", "pile", "corrosion", "batterie"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 11 — Oxydoréduction, piles et corrosion",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch11/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["oxydoreduction", "pile", "corrosion", "batterie"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 11 — Oxydoréduction, piles et corrosion",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch11/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["oxydoreduction", "pile", "corrosion", "batterie"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 11 — Oxydoréduction, piles et corrosion",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch11/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["oxydoreduction", "pile", "corrosion", "batterie"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 11 — Oxydoréduction, piles et corrosion",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch11/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["oxydoreduction", "pile", "corrosion", "batterie"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 11 — Oxydoréduction, piles et corrosion",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch11/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["oxydoreduction", "pile", "corrosion", "batterie"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 11 — Oxydoréduction, piles et corrosion",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch11/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["oxydoreduction", "pile", "corrosion", "batterie"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 12 — Analyse du signal",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch12/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["signal", "frequence", "spectre", "periode"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 12 — Analyse du signal",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch12/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["signal", "frequence", "spectre", "periode"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 12 — Analyse du signal",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch12/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["signal", "frequence", "spectre", "periode"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 12 — Analyse du signal",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch12/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["signal", "frequence", "spectre", "periode"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 12 — Analyse du signal",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch12/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["signal", "frequence", "spectre", "periode"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 12 — Analyse du signal",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch12/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["signal", "frequence", "spectre", "periode"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 12 — Analyse du signal",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch12/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["signal", "frequence", "spectre", "periode"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 12 — Analyse du signal",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch12/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["signal", "frequence", "spectre", "periode"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 13 — Oscillations et résonance",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch13/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["oscillation", "resonance", "vibration", "amortissement"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 13 — Oscillations et résonance",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch13/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["oscillation", "resonance", "vibration", "amortissement"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 13 — Oscillations et résonance",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch13/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["oscillation", "resonance", "vibration", "amortissement"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 13 — Oscillations et résonance",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch13/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["oscillation", "resonance", "vibration", "amortissement"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 13 — Oscillations et résonance",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch13/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["oscillation", "resonance", "vibration", "amortissement"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 13 — Oscillations et résonance",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch13/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["oscillation", "resonance", "vibration", "amortissement"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 13 — Oscillations et résonance",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch13/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["oscillation", "resonance", "vibration", "amortissement"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 13 — Oscillations et résonance",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch13/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["oscillation", "resonance", "vibration", "amortissement"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 14 — Ondes acoustiques et protection",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch14/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["acoustique", "bruit", "decibel", "protection auditive"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 14 — Ondes acoustiques et protection",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch14/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["acoustique", "bruit", "decibel", "protection auditive"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 14 — Ondes acoustiques et protection",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch14/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["acoustique", "bruit", "decibel", "protection auditive"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 14 — Ondes acoustiques et protection",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch14/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["acoustique", "bruit", "decibel", "protection auditive"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 14 — Ondes acoustiques et protection",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch14/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["acoustique", "bruit", "decibel", "protection auditive"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 14 — Ondes acoustiques et protection",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch14/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["acoustique", "bruit", "decibel", "protection auditive"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 14 — Ondes acoustiques et protection",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch14/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["acoustique", "bruit", "decibel", "protection auditive"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 14 — Ondes acoustiques et protection",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch14/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["acoustique", "bruit", "decibel", "protection auditive"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 15 — Systèmes linéaires et asservissement",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch15/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["asservissement", "systeme lineaire", "boucle", "regulation"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 15 — Systèmes linéaires et asservissement",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch15/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["asservissement", "systeme lineaire", "boucle", "regulation"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 15 — Systèmes linéaires et asservissement",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch15/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["asservissement", "systeme lineaire", "boucle", "regulation"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 15 — Systèmes linéaires et asservissement",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch15/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["asservissement", "systeme lineaire", "boucle", "regulation"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 15 — Systèmes linéaires et asservissement",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch15/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["asservissement", "systeme lineaire", "boucle", "regulation"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 15 — Systèmes linéaires et asservissement",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch15/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["asservissement", "systeme lineaire", "boucle", "regulation"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 15 — Systèmes linéaires et asservissement",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch15/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["asservissement", "systeme lineaire", "boucle", "regulation"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 15 — Systèmes linéaires et asservissement",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch15/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["asservissement", "systeme lineaire", "boucle", "regulation"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 16 — Capteurs, conditionnement et conversion",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch16/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["capteur", "conditionnement", "conversion", "analogique", "numerique"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 16 — Capteurs, conditionnement et conversion",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch16/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["capteur", "conditionnement", "conversion", "analogique", "numerique"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 16 — Capteurs, conditionnement et conversion",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch16/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["capteur", "conditionnement", "conversion", "analogique", "numerique"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 16 — Capteurs, conditionnement et conversion",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch16/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["capteur", "conditionnement", "conversion", "analogique", "numerique"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 16 — Capteurs, conditionnement et conversion",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch16/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["capteur", "conditionnement", "conversion", "analogique", "numerique"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 16 — Capteurs, conditionnement et conversion",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch16/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["capteur", "conditionnement", "conversion", "analogique", "numerique"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 16 — Capteurs, conditionnement et conversion",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch16/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["capteur", "conditionnement", "conversion", "analogique", "numerique"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 16 — Capteurs, conditionnement et conversion",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch16/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["capteur", "conditionnement", "conversion", "analogique", "numerique"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 17 — Distribution électrique et sécurité",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-tsma/ch17/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["distribution electrique", "securite", "habilitation", "courant"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 17 — Distribution électrique et sécurité",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-tsma/ch17/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["distribution electrique", "securite", "habilitation", "courant"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 17 — Distribution électrique et sécurité",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-tsma/ch17/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["distribution electrique", "securite", "habilitation", "courant"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 17 — Distribution électrique et sécurité",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-tsma/ch17/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["distribution electrique", "securite", "habilitation", "courant"]
  },

  {
    filiere: "bts-tsma", rubrique: "Cours",
    chapitre: "Chapitre 17 — Distribution électrique et sécurité",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-tsma/ch17/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["distribution electrique", "securite", "habilitation", "courant"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 17 — Distribution électrique et sécurité",
    type: "pdf", titre: "Activité expérimentale",
    fichier: "docs/bts-tsma/ch17/activite.pdf",
    description: "L'activité de découverte, à faire en salle de TP.",
    motscles: ["distribution electrique", "securite", "habilitation", "courant"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 17 — Distribution électrique et sécurité",
    type: "pdf", titre: "Situation type CCF",
    fichier: "docs/bts-tsma/ch17/ccf.pdf",
    description: "Un sujet d'entraînement au format de l'évaluation en cours de formation.",
    motscles: ["distribution electrique", "securite", "habilitation", "courant"]
  },

  {
    filiere: "bts-tsma", rubrique: "TP",
    chapitre: "Chapitre 17 — Distribution électrique et sécurité",
    type: "pdf", titre: "Oral — sujet d'entraînement",
    fichier: "docs/bts-tsma/ch17/oral.pdf",
    description: "Le format de l'épreuve orale, à préparer en autonomie.",
    motscles: ["distribution electrique", "securite", "habilitation", "courant"]
  },


  /* ======== BTS Électrotechnique — Cours 2 et TP 2 ======== */

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-et/c02/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-et/c02/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-et/c02/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-et/c02/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-et/c02/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "pdf", titre: "Activité documentaire",
    fichier: "docs/bts-et/c02/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "pdf", titre: "Sujet type U51",
    fichier: "docs/bts-et/c02/u51.pdf",
    description: "Un sujet d'entraînement au format de l'épreuve U51.",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "pdf", titre: "Épreuve E4 — sujet",
    fichier: "docs/bts-et/c02/e4_sujet.pdf",
    description: "Le sujet, au format de l'épreuve.",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "pdf", titre: "Épreuve E4 — DRES",
    fichier: "docs/bts-et/c02/e4_dres.pdf",
    description: "Le document réponse à rendre.",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "pdf", titre: "Épreuve E4 — DREP",
    fichier: "docs/bts-et/c02/e4_drep.pdf",
    description: "Le document réponse complémentaire.",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "animation", titre: "Le flux magnétique",
    fichier: "animations/flux-magnetique.html",
    description: "Un aimant, une bobine, une surface orientable : on fait varier l'aire et l'angle et on lit le flux. Φ = B·S·cos α.",
    trouve: "Φ = B·S·cos α",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "pdf", titre: "Activité 1 — Le flux magnétique",
    fichier: "docs/bts-et/c02/a1_flux.pdf",
    description: "Le document à remplir pendant l'animation.",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "animation", titre: "L'induction",
    fichier: "animations/induction.html",
    description: "On fait varier le flux à travers une bobine et on relève la tension induite : c'est la vitesse de variation qui compte, pas la valeur du flux. e = −N·dΦ/dt.",
    trouve: "e = −N·dΦ/dt",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "pdf", titre: "Activité 2 — L'induction",
    fichier: "docs/bts-et/c02/a2_induction.pdf",
    description: "Le document à remplir pendant l'animation.",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "animation", titre: "Le circuit magnétique",
    fichier: "animations/reluctance.html",
    description: "Un circuit ferromagnétique avec entrefer réglable : on voit la réluctance dominer dès que l'entrefer s'ouvre. ℛ = ℓ/(µ·S).",
    trouve: "ℛ = ℓ/(µ·S) et la loi d'Hopkinson",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Chapitre 2 — Électromagnétisme",
    type: "pdf", titre: "Activité 3 — Le circuit magnétique",
    fichier: "docs/bts-et/c02/a3_circuit.pdf",
    description: "Le document à remplir pendant l'animation.",
    motscles: ["electromagnetisme", "flux magnetique", "induction", "reluctance", "circuit magnetique"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 2 — Dipôles passifs et actifs",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-et/tp02/prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler.",
    motscles: ["dipole", "resistance", "condensateur", "bobine", "source", "caracteristique"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 2 — Dipôles passifs et actifs",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-et/tp02/cours_a_completer.pdf",
    description: "La version distribuée en séance, avec les passages à écrire.",
    motscles: ["dipole", "resistance", "condensateur", "bobine", "source", "caracteristique"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 2 — Dipôles passifs et actifs",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-et/tp02/cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance.",
    motscles: ["dipole", "resistance", "condensateur", "bobine", "source", "caracteristique"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 2 — Dipôles passifs et actifs",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-et/tp02/exercices.pdf",
    description: "Les exercices du chapitre, sans les corrigés.",
    motscles: ["dipole", "resistance", "condensateur", "bobine", "source", "caracteristique"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 2 — Dipôles passifs et actifs",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-et/tp02/bilan.pdf",
    description: "Des questions pour se tester, réponses en bas de page.",
    motscles: ["dipole", "resistance", "condensateur", "bobine", "source", "caracteristique"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 2 — Dipôles passifs et actifs",
    type: "pdf", titre: "Activité documentaire",
    fichier: "docs/bts-et/tp02/activite.pdf",
    description: "L'activité de découverte, à faire en classe.",
    motscles: ["dipole", "resistance", "condensateur", "bobine", "source", "caracteristique"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 2 — Dipôles passifs et actifs",
    type: "pdf", titre: "Sujet type U51",
    fichier: "docs/bts-et/tp02/u51.pdf",
    description: "Un sujet d'entraînement au format de l'épreuve U51.",
    motscles: ["dipole", "resistance", "condensateur", "bobine", "source", "caracteristique"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 2 — Dipôles passifs et actifs",
    type: "pdf", titre: "Épreuve E4 — sujet",
    fichier: "docs/bts-et/tp02/e4_sujet.pdf",
    description: "Le sujet, au format de l'épreuve.",
    motscles: ["dipole", "resistance", "condensateur", "bobine", "source", "caracteristique"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 2 — Dipôles passifs et actifs",
    type: "pdf", titre: "Épreuve E4 — DRES",
    fichier: "docs/bts-et/tp02/e4_dres.pdf",
    description: "Le document réponse à rendre.",
    motscles: ["dipole", "resistance", "condensateur", "bobine", "source", "caracteristique"]
  },

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 2 — Dipôles passifs et actifs",
    type: "pdf", titre: "Épreuve E4 — DREP",
    fichier: "docs/bts-et/tp02/e4_drep.pdf",
    description: "Le document réponse complémentaire.",
    motscles: ["dipole", "resistance", "condensateur", "bobine", "source", "caracteristique"]
  },


  /* ========== BTS TSMA — s'entraîner (questionnaires et cartes) ========== */

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 0 — Outils de base",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=0&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["outils", "puissances de dix", "unites", "proportionnalite"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 0 — Outils de base",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=0",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["outils", "puissances de dix", "unites", "proportionnalite"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 1 — Mesures, erreurs et incertitudes",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=1&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["mesure", "incertitude", "dispersion", "tolerance"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 1 — Mesures, erreurs et incertitudes",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=1&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["mesure", "incertitude", "dispersion", "tolerance"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 1 — Mesures, erreurs et incertitudes",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=1",
    description: "8 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["mesure", "incertitude", "dispersion", "tolerance"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 2 — Énergie, puissance, rendement",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=2&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["energie", "puissance", "rendement", "joule", "watt"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 2 — Énergie, puissance, rendement",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=2&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["energie", "puissance", "rendement", "joule", "watt"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 2 — Énergie, puissance, rendement",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=2",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["energie", "puissance", "rendement", "joule", "watt"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 3 — Statique des fluides",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=3&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["fluide", "pression", "statique", "verin"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 3 — Statique des fluides",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=3&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["fluide", "pression", "statique", "verin"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 3 — Statique des fluides",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=3",
    description: "6 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["fluide", "pression", "statique", "verin"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 4 — Dynamique des fluides",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=4&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["debit", "bernoulli", "conservation"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 4 — Dynamique des fluides",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=4&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["debit", "bernoulli", "conservation"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 4 — Dynamique des fluides",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=4",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["debit", "bernoulli", "conservation"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 5 — Viscosité et pertes de charge",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=5&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["viscosite", "pertes de charge", "reynolds"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 5 — Viscosité et pertes de charge",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=5&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["viscosite", "pertes de charge", "reynolds"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 5 — Viscosité et pertes de charge",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=5",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["viscosite", "pertes de charge", "reynolds"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 6 — La réaction chimique",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=6&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["reaction chimique", "mole", "masse molaire"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 6 — La réaction chimique",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=6&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["reaction chimique", "mole", "masse molaire"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 6 — La réaction chimique",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=6",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["reaction chimique", "mole", "masse molaire"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 7 — Combustions et carburants",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=7&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["combustion", "carburant", "pouvoir calorifique"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 7 — Combustions et carburants",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=7&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["combustion", "carburant", "pouvoir calorifique"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 7 — Combustions et carburants",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=7",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["combustion", "carburant", "pouvoir calorifique"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 8 — Gaz parfaits et premier principe",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=8&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["gaz parfait", "premier principe", "travail"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 8 — Gaz parfaits et premier principe",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=8&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["gaz parfait", "premier principe", "travail"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 8 — Gaz parfaits et premier principe",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=8",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["gaz parfait", "premier principe", "travail"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 9 — Transferts thermiques et calorimétrie",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=9&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["transfert thermique", "calorimetrie", "conduction"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 9 — Transferts thermiques et calorimétrie",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=9&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["transfert thermique", "calorimetrie", "conduction"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 9 — Transferts thermiques et calorimétrie",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=9",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["transfert thermique", "calorimetrie", "conduction"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 10 — Machines thermiques",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=10&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["machine thermique", "moteur", "cycle", "carnot"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 10 — Machines thermiques",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=10&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["machine thermique", "moteur", "cycle", "carnot"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 10 — Machines thermiques",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=10",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["machine thermique", "moteur", "cycle", "carnot"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 11 — Oxydoréduction, piles et corrosion",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=11&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["oxydoreduction", "pile", "corrosion"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 11 — Oxydoréduction, piles et corrosion",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=11&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["oxydoreduction", "pile", "corrosion"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 11 — Oxydoréduction, piles et corrosion",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=11",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["oxydoreduction", "pile", "corrosion"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 12 — Analyse du signal",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=12&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["signal", "frequence", "valeur efficace"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 12 — Analyse du signal",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=12&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["signal", "frequence", "valeur efficace"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 12 — Analyse du signal",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=12",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["signal", "frequence", "valeur efficace"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 13 — Oscillations et résonance",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=13&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["oscillation", "resonance", "amortissement"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 13 — Oscillations et résonance",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=13&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["oscillation", "resonance", "amortissement"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 13 — Oscillations et résonance",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=13",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["oscillation", "resonance", "amortissement"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 14 — Ondes acoustiques et protection",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=14&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["acoustique", "bruit", "decibel"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 14 — Ondes acoustiques et protection",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=14&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["acoustique", "bruit", "decibel"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 14 — Ondes acoustiques et protection",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=14",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["acoustique", "bruit", "decibel"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 15 — Systèmes linéaires et asservissement",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=15&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["asservissement", "boucle", "regulation"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 15 — Systèmes linéaires et asservissement",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=15&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["asservissement", "boucle", "regulation"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 15 — Systèmes linéaires et asservissement",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=15",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["asservissement", "boucle", "regulation"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 16 — Capteurs, conditionnement et conversion",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=16&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["capteur", "conditionnement", "conversion"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 16 — Capteurs, conditionnement et conversion",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=16&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["capteur", "conditionnement", "conversion"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 16 — Capteurs, conditionnement et conversion",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=16",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["capteur", "conditionnement", "conversion"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 17 — Distribution électrique et sécurité",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=17&type=prerequis",
    description: "6 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["distribution electrique", "securite", "triphase"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 17 — Distribution électrique et sécurité",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?f=bts-tsma&ch=17&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["distribution electrique", "securite", "triphase"]
  },

  {
    filiere: "bts-tsma", rubrique: "S'entraîner",
    chapitre: "Chapitre 17 — Distribution électrique et sécurité",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?f=bts-tsma&ch=17",
    description: "9 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["distribution electrique", "securite", "triphase"]
  },

];
