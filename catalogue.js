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
    rubriques: ["Cours", "TP", "ADM"]
  },

  {
    id: "bts-crsa",
    nom: "BTS CRSA",
    sous_titre: "Conception et Réalisation de Systèmes Automatiques",
    rubriques: ["Cours", "TP"]
  },

  {
    id: "bts-tsma",
    nom: "BTS TSMA",
    sous_titre: "Techniques et Services en Matériels Agricoles",
    rubriques: ["Cours", "TP"]
  },

  {
    id: "1sti2d",
    nom: "1re STI2D",
    sous_titre: "Physique-chimie et mathématiques",
    rubriques: ["Cours", "TP", "S'entraîner"]
  }

];


const DOCUMENTS = [

  /* ---------------- BTS ET · Cours 1 ---------------- */

  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-et/c01_prerequis.pdf",
    description: "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler."
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "animation", titre: "Le chauffage",
    fichier: "animations/calorimetre.html",
    description: "Une résistance de puissance connue dans un récipient. Masse, matière, " +
      "puissance et température de départ réglables ; la courbe trace la température en " +
      "fonction de l'énergie reçue, paliers compris.",
    trouve: "Q = m·c·Δθ et Q = m·L",
    motscles: ["calorimetre", "chaleur", "capacite thermique", "chaleur latente",
               "changement d'etat", "palier", "fusion", "vaporisation", "energie"]
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Activité 1 — Chauffer un corps",
    fichier: "docs/bts-et/c01_a1_chauffage.pdf",
    description: "Le document à remplir pendant l'animation « Le chauffage »."
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "animation", titre: "Le rayonnement",
    fichier: "animations/rayonnement.html",
    description: "Une plaque chaude face à un capteur, sans aucun contact. Température, " +
      "surface et état de surface réglables, avec une colonne d'essai pour chercher la loi.",
    trouve: "P = ε·σ·S·T⁴",
    motscles: ["rayonnement", "stefan", "emissivite", "camera thermique", "thermographie",
               "kelvin", "infrarouge"]
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Activité 2 — Le rayonnement",
    fichier: "docs/bts-et/c01_a2_rayonnement.pdf",
    description: "Le document à remplir pendant l'animation « Le rayonnement »."
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "animation", titre: "Le flux à travers une paroi",
    fichier: "animations/flux-thermique.html",
    description: "Une ou deux couches entre un local chauffé et l'extérieur. Matériau, " +
      "épaisseur, surface et températures réglables ; température d'interface affichée.",
    trouve: "Φ = λ·S·Δθ / e, puis la résistance thermique",
    motscles: ["flux", "conduction", "fourier", "isolation", "resistance thermique",
               "paroi", "lambda", "conductivite", "armoire"]
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Activité 3 — Le flux à travers une paroi",
    fichier: "docs/bts-et/c01_a3_flux.pdf",
    description: "Le document à remplir pendant l'animation « Le flux à travers une paroi »."
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-et/c01_cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire."
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-et/c01_cours.pdf",
    description: "La même chose, tout écrit. À relire après la séance."
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Activité documentaire",
    fichier: "docs/bts-et/c01_activite.pdf",
    description: "Exploitation de documents techniques, après le cours."
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-et/c01_exercices.pdf"
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Situation U51",
    fichier: "docs/bts-et/c01_u51.pdf"
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Sujet type E4 — sujet",
    fichier: "docs/bts-et/c01_e4_sujet.pdf"
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Sujet type E4 — dossier ressources",
    fichier: "docs/bts-et/c01_e4_dres.pdf"
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Sujet type E4 — documents réponses",
    fichier: "docs/bts-et/c01_e4_drep.pdf"
  },
  {
    filiere: "bts-et", rubrique: "Cours",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-et/c01_bilan.pdf"
  },

  /* ---------------- BTS ET · TP 1 ---------------- */

  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Prérequis",
    fichier: "docs/bts-et/tp01_prerequis.pdf"
  },
  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Cours à compléter",
    fichier: "docs/bts-et/tp01_cours_a_completer.pdf",
    description: "La version distribuée en classe, avec les passages à écrire."
  },
  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Cours complet",
    fichier: "docs/bts-et/tp01_cours.pdf"
  },
  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Activité",
    fichier: "docs/bts-et/tp01_activite.pdf"
  },
  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Exercices",
    fichier: "docs/bts-et/tp01_exercices.pdf"
  },
  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Situation U51",
    fichier: "docs/bts-et/tp01_u51.pdf"
  },
  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Sujet type E4 — sujet",
    fichier: "docs/bts-et/tp01_e4_sujet.pdf"
  },
  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Sujet type E4 — dossier ressources",
    fichier: "docs/bts-et/tp01_e4_dres.pdf"
  },
  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Sujet type E4 — documents réponses",
    fichier: "docs/bts-et/tp01_e4_drep.pdf"
  },
  {
    filiere: "bts-et", rubrique: "TP",
    chapitre: "TP 1 — Notions fondamentales d'électricité",
    type: "pdf", titre: "Bilan de fin de chapitre",
    fichier: "docs/bts-et/tp01_bilan.pdf"
  },

  /* ---------------- 1re STI2D · S'entraîner ----------------
     Trois pages seulement (entrainement/qcm.html, entrainement/cartes.html)
     servent tous les chapitres : le chapitre est passé dans l'adresse.
     Ajouter un chapitre = déposer entrainement/qcm-chXX.js et recopier
     les blocs ci-dessous en changeant le numéro. */

  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 0 — Outils de base en physique-chimie",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=0&type=prerequis",
    description: "10 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["outils", "base", "physique", "chimie"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 0 — Outils de base en physique-chimie",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=0&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["outils", "base", "physique", "chimie"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 0 — Outils de base en physique-chimie",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=0",
    description: "13 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["outils", "base", "physique", "chimie"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 1 — Mesure et incertitudes",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=1&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["mesure", "incertitudes"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 1 — Mesure et incertitudes",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=1&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["mesure", "incertitudes"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 1 — Mesure et incertitudes",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=1",
    description: "7 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["mesure", "incertitudes"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 2 — Énergie, puissance, chaînes",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=2&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["energie", "puissance", "chaines"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 2 — Énergie, puissance, chaînes",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=2&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["energie", "puissance", "chaines"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 3 — Courant continu",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=3&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["courant", "continu"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 3 — Courant continu",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=3&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["courant", "continu"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 3 — Courant continu",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=3",
    description: "8 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["courant", "continu"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 4 — Grandeurs périodiques",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=4&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["grandeurs", "periodiques"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 4 — Grandeurs périodiques",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=4&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["grandeurs", "periodiques"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 4 — Grandeurs périodiques",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=4",
    description: "5 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["grandeurs", "periodiques"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 5 — Puissance, énergie électriques, loi d'Ohm",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=5&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["puissance", "energie", "electriques"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 5 — Puissance, énergie électriques, loi d'Ohm",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=5&type=bilan",
    description: "15 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["puissance", "energie", "electriques"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 5 — Puissance, énergie électriques, loi d'Ohm",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=5",
    description: "7 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["puissance", "energie", "electriques"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 6 — Cinématique",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=6&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["cinematique"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 6 — Cinématique",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=6&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["cinematique"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 6 — Cinématique",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=6",
    description: "6 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["cinematique"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 7 — Forces et principe d'inertie",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=7&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["forces", "principe", "inertie"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 7 — Forces et principe d'inertie",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=7&type=bilan",
    description: "14 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["forces", "principe", "inertie"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 7 — Forces et principe d'inertie",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=7",
    description: "13 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["forces", "principe", "inertie"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 8 — Travail et énergies mécaniques",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=8&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["travail", "energies", "mecaniques"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 8 — Travail et énergies mécaniques",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=8&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["travail", "energies", "mecaniques"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 9 — Énergie interne et transferts thermiques",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=9&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["energie", "interne", "transferts", "thermiques"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 9 — Énergie interne et transferts thermiques",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=9&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["energie", "interne", "transferts", "thermiques"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 10 — Énergie chimique",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=10&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["energie", "chimique"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 10 — Énergie chimique",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=10&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["energie", "chimique"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 10 — Énergie chimique",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=10",
    description: "5 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["energie", "chimique"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 11 — Énergie transportée par la lumière",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=11&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["energie", "transportee", "lumiere"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 11 — Énergie transportée par la lumière",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=11&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["energie", "transportee", "lumiere"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 12 — Matériaux et organisation de la matière",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=12&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["materiaux", "organisation", "matiere"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 12 — Matériaux et organisation de la matière",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=12&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["materiaux", "organisation", "matiere"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 12 — Matériaux et organisation de la matière",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=12",
    description: "5 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["materiaux", "organisation", "matiere"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 13 — Combustions et carburants",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=13&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["combustions", "carburants"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 13 — Combustions et carburants",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=13&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["combustions", "carburants"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 13 — Combustions et carburants",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=13",
    description: "5 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["combustions", "carburants"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 14 — Solutions aqueuses",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=14&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["solutions", "aqueuses"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 14 — Solutions aqueuses",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=14&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["solutions", "aqueuses"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 14 — Solutions aqueuses",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=14",
    description: "5 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["solutions", "aqueuses"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 15 — Oxydoréduction, corrosion et piles",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=15&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["oxydoreduction", "corrosion", "piles"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 15 — Oxydoréduction, corrosion et piles",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=15&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["oxydoreduction", "corrosion", "piles"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 15 — Oxydoréduction, corrosion et piles",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=15",
    description: "5 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["oxydoreduction", "corrosion", "piles"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 16 — Notion d'onde et information",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=16&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["notion", "onde", "information"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 16 — Notion d'onde et information",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=16&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["notion", "onde", "information"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 16 — Notion d'onde et information",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=16",
    description: "22 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["notion", "onde", "information"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 17 — Ondes sonores",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=17&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["ondes", "sonores"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 17 — Ondes sonores",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=17&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["ondes", "sonores"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 17 — Ondes sonores",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=17",
    description: "5 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["ondes", "sonores"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 18 — Ondes électromagnétiques",
    type: "qcm", titre: "Prérequis — se tester avant",
    fichier: "entrainement/qcm.html?ch=18&type=prerequis",
    description: "7 questions sur ce qu'il faut déjà savoir manipuler. Correction et explication après chaque réponse.",
    motscles: ["ondes", "electromagnetiques"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 18 — Ondes électromagnétiques",
    type: "qcm", titre: "Bilan — se tester après",
    fichier: "entrainement/qcm.html?ch=18&type=bilan",
    description: "12 questions sur tout le chapitre. L'ordre change à chaque essai, on peut recommencer autant qu'on veut.",
    motscles: ["ondes", "electromagnetiques"]
  },
  {
    filiere: "1sti2d", rubrique: "S'entraîner",
    chapitre: "Chapitre 18 — Ondes électromagnétiques",
    type: "cartes", titre: "Cartes de révision",
    fichier: "entrainement/cartes.html?ch=18",
    description: "6 cartes recto-verso. Une question, on répond dans sa tête, on retourne.",
    motscles: ["ondes", "electromagnetiques"]
  },

];
