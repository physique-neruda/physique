# -*- coding: utf-8 -*-
"""
Description des filieres : c'est LE fichier a modifier pour en ajouter une.

Trois choses par filiere :

  rubriques   les onglets, dans l'ordre d'affichage. Doivent correspondre
              a ceux declares dans FILIERES, en haut de catalogue.js.

  documents   la LISTE BLANCHE des types de PDF publiables, dans l'ordre de
              la seance. Un type absent de cette liste n'est jamais copie ni
              inscrit au catalogue. C'est ici, et nulle part ailleurs, qu'on
              decide ce qui sort sur un depot public.

  animations  les pages HTML interactives, rangees par chapitre.

Le TITRE d'un chapitre ne vit pas ici mais dans chapitres/<filiere>.json :
il change plus souvent que la structure, et pour la 1re STI2D il se lit
directement dans les sources LaTeX.

POURQUOI UNE LISTE BLANCHE ET NON UNE LISTE NOIRE
-------------------------------------------------
Le depot GitHub est public. Avec une liste noire, tout nouveau type de
document est publie par defaut et il faut penser a l'exclure ; avec une
liste blanche, il reste invisible jusqu'a ce qu'on l'ajoute sciemment.
L'oubli va dans le bon sens.
"""

# Un nom de fichier contenant l'un de ces mots n'est jamais publie, meme
# s'il figurait par erreur dans une liste blanche. Second verrou.
INTERDIT = r'corrig|test'

FILIERES = {

    '1sti2d': {
        'nom': '1re STI2D',
        'rubriques': ['Cours', 'TP', "S'entraîner"],
        # Les chapitres sont nommes chXX et viennent de la collection LaTeX.
        'source_chapitres': r'ch(\d+)',
        'rubrique_par_defaut': 'Cours',
        'documents': [
            ('prerequis', 'Prérequis',
             "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler."),
            ('activite', 'Activité',
             "L'activité de découverte, à faire en classe."),
            ('cours_a_completer', 'Cours à compléter',
             "La version distribuée en classe, avec les passages à écrire."),
            ('cours', 'Cours complet',
             "La même chose, tout écrit. À relire après la séance."),
            ('exercices', 'Exercices',
             "Les exercices du chapitre, sans les corrigés."),
            ('bilan', 'Bilan de fin de chapitre',
             "Douze questions pour se tester, réponses en bas de page."),
        ],
        'animations': [],
    },

    'bts-et': {
        'nom': 'BTS Électrotechnique',
        'rubriques': ['Cours', 'TP', 'ADM', "S'entraîner"],
        # Deux familles de chapitres : c01, c02… pour le cours, tp01… pour les TP.
        'source_chapitres': r'(c|tp)(\d+)',
        'rubrique_par_defaut': 'Cours',
        'documents': [
            ('prerequis', 'Prérequis',
             "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler."),
            ('a1_.*', 'Activité 1', "Le document à remplir pendant l'animation."),
            ('a2_.*', 'Activité 2', "Le document à remplir pendant l'animation."),
            ('a3_.*', 'Activité 3', "Le document à remplir pendant l'animation."),
            ('cours_a_completer', 'Cours à compléter',
             "La version distribuée en classe, avec les passages à écrire."),
            ('cours', 'Cours complet',
             "La même chose, tout écrit. À relire après la séance."),
            ('activite', 'Activité documentaire',
             "Exploitation de documents techniques, après le cours."),
            ('exercices', 'Exercices', "Les exercices du chapitre."),
            ('u51', 'Situation U51',
             "Une situation d'évaluation type U51, pour s'entraîner."),
            ('e4_sujet', 'Sujet type E4 — sujet', "Le questionnement."),
            ('e4_dres', 'Sujet type E4 — dossier ressources',
             "Les documents techniques à exploiter."),
            ('e4_drep', 'Sujet type E4 — documents réponses',
             "Les pages à rendre."),
            ('bilan', 'Bilan de fin de chapitre',
             "Des questions pour se tester, réponses en bas de page."),
        ],
        # Les fichiers d'animation NE SONT PAS deplaces : leur adresse est
        # gravee dans les QR codes des activites deja imprimees. On les
        # rattache a un chapitre sans les bouger.
        # Les fichiers d'animation NE SONT PAS deplaces : leur adresse est
        # gravee dans les QR codes des activites deja imprimees. On les
        # rattache a un chapitre sans les bouger. « avant » indique le
        # document qu'elles introduisent, pour l'ordre d'affichage.
        'animations': [
            {'chapitre': 'c01', 'avant': 'a1_.*',
             'fichier': 'animations/calorimetre.html', 'titre': 'Le chauffage',
             'description':
                 "Une résistance de puissance connue dans un récipient. Masse, "
                 "matière, puissance et température de départ réglables ; la "
                 "courbe trace la température en fonction de l'énergie reçue, "
                 "paliers compris.",
             'formule': "Q = m·c·Δθ et Q = m·L",
             'motscles': ['calorimetre', 'chaleur', 'capacite thermique',
                          'chaleur latente', "changement d'etat", 'palier',
                          'fusion', 'vaporisation', 'energie']},
            {'chapitre': 'c01', 'avant': 'a2_.*',
             'fichier': 'animations/rayonnement.html', 'titre': 'Le rayonnement',
             'description':
                 "Une plaque chaude face à un capteur, sans aucun contact. "
                 "Température, surface et état de surface réglables, avec une "
                 "colonne d'essai pour chercher la loi.",
             'formule': "P = ε·σ·S·T⁴",
             'motscles': ['rayonnement', 'stefan', 'emissivite',
                          'camera thermique', 'thermographie', 'kelvin',
                          'infrarouge']},
            {'chapitre': 'c01', 'avant': 'a3_.*',
             'fichier': 'animations/flux-thermique.html',
             'titre': 'Le flux à travers une paroi',
             'description':
                 "Une ou deux couches entre un local chauffé et l'extérieur. "
                 "Matériau, épaisseur, surface et températures réglables ; "
                 "température d'interface affichée.",
             'formule': "Φ = λ·S·Δθ / e, puis la résistance thermique",
             'motscles': ['flux', 'conduction', 'fourier', 'isolation',
                          'resistance thermique', 'paroi', 'lambda',
                          'conductivite', 'armoire']},
        ],
    },

    'bts-crsa': {
        'nom': 'BTS CRSA',
        'rubriques': ['Cours', 'TP', "S'entraîner"],
        'source_chapitres': r'ch(\d+)',
        'rubrique_par_defaut': 'Cours',
        'documents': [
            ('prerequis', 'Prérequis',
             "À faire avant d'ouvrir le chapitre."),
            ('cours_a_completer', 'Cours à compléter',
             "La version distribuée en classe, avec les passages à écrire."),
            ('cours', 'Cours complet', "La même chose, tout écrit."),
            ('activite', 'Activité', "L'activité de découverte."),
            ('exercices', 'Exercices', "Les exercices du chapitre."),
            ('bilan', 'Bilan de fin de chapitre',
             "Des questions pour se tester, réponses en bas de page."),
        ],
        'animations': [],
    },

    'bts-tsma': {
        'nom': 'BTS TSMA',
        'rubriques': ['Cours', 'TP', "S'entraîner"],
        'source_chapitres': r'ch(\d+)',
        'rubrique_par_defaut': 'Cours',
        'documents': [
            ('prerequis', 'Prérequis',
             "À faire avant d'ouvrir le chapitre."),
            ('cours_a_completer', 'Cours à compléter',
             "La version distribuée en classe, avec les passages à écrire."),
            ('cours', 'Cours complet', "La même chose, tout écrit."),
            ('activite', 'Activité', "L'activité de découverte."),
            ('exercices', 'Exercices', "Les exercices du chapitre."),
            ('bilan', 'Bilan de fin de chapitre',
             "Des questions pour se tester, réponses en bas de page."),
        ],
        'animations': [],
    },
}

# Les trois entrees d'entrainement, communes a toutes les filieres.
ENTRAINEMENTS = [
    ('prerequis', 'qcm', 'Prérequis — se tester avant',
     'entrainement/qcm.html?f=%s&ch=%s&type=prerequis',
     "%d questions sur ce qu'il faut déjà savoir manipuler. "
     "Correction et explication après chaque réponse."),
    ('bilan', 'qcm', 'Bilan — se tester après',
     'entrainement/qcm.html?f=%s&ch=%s&type=bilan',
     "%d questions sur tout le chapitre. L'ordre change à chaque essai, "
     "on peut recommencer autant qu'on veut."),
    ('cartes', 'cartes', 'Cartes de révision',
     'entrainement/cartes.html?f=%s&ch=%s',
     "%d cartes recto-verso. Une question, on répond dans sa tête, "
     "on retourne."),
]
