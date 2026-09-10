# -*- coding: utf-8 -*-
"""
filieres.py — ce qui est publiable, filière par filière.

Trois choses ici, et rien d'autre :

  * FILIERES     l'ordre d'affichage, le nom, les rubriques ;
  * DOCUMENTS    la LISTE BLANCHE des documents publiables, dans l'ordre où on
                 veut que l'étudiant les rencontre. Un type absent de cette
                 liste n'est jamais copié ni inscrit au catalogue ;
  * ANIMATIONS   les animations, rattachées à un chapitre.

Les titres des chapitres, eux, vivent dans chapitres/<filière>.json.

Un document se décrit par quatre valeurs :
    (nom de fichier sans .pdf, rubrique, titre affiché, description)

Pour retirer un document du site : commenter sa ligne, relancer publier.py.
Pour en ajouter un : ajouter sa ligne au bon endroit de la liste.
"""

# ----------------------------------------------------------------- filières
FILIERES = [
    {"id": "outils", "nom": "Outils",
     "sous_titre": "Transversal — les mêmes pour toutes les classes",
     "rubriques": ["Calcul", "Mesure"]},
    {"id": "bts-et", "nom": "BTS Électrotechnique",
     "sous_titre": "Physique appliquée",
     "rubriques": ["Cours", "TP", "ADM", "S'entraîner"]},
    {"id": "bts-crsa", "nom": "BTS CRSA",
     "sous_titre": "Conception et Réalisation de Systèmes Automatiques",
     "rubriques": ["Cours", "TP", "S'entraîner"]},
    {"id": "bts-tsma", "nom": "BTS TSMA",
     "sous_titre": "Techniques et Services en Matériels Agricoles",
     "rubriques": ["Cours", "TP", "S'entraîner"]},
    {"id": "1sti2d", "nom": "1re STI2D",
     "sous_titre": "Physique-chimie et mathématiques",
     "rubriques": ["Cours", "TP", "S'entraîner"]},
]

# --------------------------------------------------------- listes blanches
# Ce qui NE sort JAMAIS, dans aucune filière : tout ce qui porte « corrige »
# ou « test » dans son nom (second verrou, dans publier.py), et tout ce qui
# n'est pas nommé ci-dessous. Les diagnostics de début d'année n'y sont pas :
# ce sont des supports de positionnement, passés en séance.

DOCUMENTS = {

    # La filière Outils ne porte pour l'instant que des animations : aucun PDF
    # n'y est déclaré, mais la liste doit exister.
    "outils": [],

    "1sti2d": [
        ("prerequis",         "Cours", "Prérequis",
         "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler."),
        ("activite",          "Cours", "Activité",
         "L'activité de découverte, à faire en classe."),
        ("cours_a_completer", "Cours", "Cours à compléter",
         "La version distribuée en classe, avec les passages à écrire."),
        ("cours",             "Cours", "Cours complet",
         "La même chose, tout écrit. À relire après la séance."),
        ("exercices",         "Cours", "Exercices",
         "Les exercices du chapitre, sans les corrigés."),
        ("bilan",             "Cours", "Bilan de fin de chapitre",
         "Douze questions pour se tester, réponses en bas de page."),
    ],

    "bts-tsma": [
        ("prerequis",         "Cours", "Prérequis",
         "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler."),
        ("cours_a_completer", "Cours", "Cours à compléter",
         "La version distribuée en séance, avec les passages à écrire."),
        ("cours",             "Cours", "Cours complet",
         "La même chose, tout écrit. À relire après la séance."),
        ("exercices",         "Cours", "Exercices",
         "Les exercices du chapitre, sans les corrigés."),
        ("bilan",             "Cours", "Bilan de fin de chapitre",
         "Des questions pour se tester, réponses en bas de page."),
        ("activite",          "TP",    "Activité expérimentale",
         "L'activité de découverte, à faire en salle de TP."),
        ("activite_anim",     "TP",    "Activité sur animation",
         "La même étude, menée sur une animation : aucun matériel nécessaire."),
        ("ccf",               "TP",    "Situation type CCF",
         "Un sujet d'entraînement au format de l'évaluation en cours de formation."),
        ("oral",              "TP",    "Oral — sujet d'entraînement",
         "Le format de l'épreuve orale, à préparer en autonomie."),
    ],

    "bts-crsa": [
        ("prerequis",         "Cours", "Prérequis",
         "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler."),
        ("cours_a_completer", "Cours", "Cours à compléter",
         "La version distribuée en séance, avec les passages à écrire."),
        ("cours",             "Cours", "Cours complet",
         "La même chose, tout écrit. À relire après la séance."),
        ("exercices",         "Cours", "Exercices",
         "Les exercices du chapitre, sans les corrigés."),
        ("bilan",             "Cours", "Bilan de fin de chapitre",
         "Douze questions pour se tester, réponses en bas de page."),
        ("activite",          "TP",    "Activité expérimentale",
         "L'activité de découverte, à faire en salle de TP."),
        ("activite2",         "TP",    "Activité 2",
         "La seconde activité du chapitre."),
        ("ccf",               "TP",    "Situation type CCF",
         "Un sujet d'entraînement au format de l'évaluation en cours de formation."),
        ("devoir",            "TP",    "Devoir type E32",
         "Un devoir écrit au format de l'épreuve E32, pour s'entraîner."),
        ("oral",              "TP",    "Oral — sujet d'entraînement",
         "Le format de l'épreuve orale, à préparer en autonomie."),
    ],

    "bts-et": [
        ("prerequis",         "Cours", "Prérequis",
         "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler."),
        ("a1_chauffage",      "Cours", "Activité 1 — Chauffer un corps",
         "Le document à remplir pendant l'animation."),
        ("a1_flux",           "Cours", "Activité 1 — Le flux magnétique",
         "Le document à remplir pendant l'animation."),
        ("a2_rayonnement",    "Cours", "Activité 2 — Le rayonnement",
         "Le document à remplir pendant l'animation."),
        ("a2_induction",      "Cours", "Activité 2 — L'induction",
         "Le document à remplir pendant l'animation."),
        ("a3_flux",           "Cours", "Activité 3 — Le flux à travers une paroi",
         "Le document à remplir pendant l'animation."),
        ("a3_circuit",        "Cours", "Activité 3 — Le circuit magnétique",
         "Le document à remplir pendant l'animation."),
        ("cours_a_completer", "Cours", "Cours à compléter",
         "La version distribuée en séance, avec les passages à écrire."),
        ("cours",             "Cours", "Cours complet",
         "La même chose, tout écrit. À relire après la séance."),
        ("activite",          "Cours", "Activité documentaire",
         "Exploitation de documents techniques, après le cours."),
        ("exercices",         "Cours", "Exercices",
         "Les exercices du chapitre, sans les corrigés."),
        ("u51",               "Cours", "Situation U51",
         "Une situation d'évaluation type U51, pour s'entraîner."),
        ("e4_sujet",          "Cours", "Sujet type E4 — sujet",
         "Le questionnement, au format de l'épreuve."),
        ("e4_dres",           "Cours", "Sujet type E4 — dossier ressources",
         "Les documents techniques à exploiter."),
        ("e4_drep",           "Cours", "Sujet type E4 — documents réponses",
         "Les pages à rendre."),
        ("bilan",             "Cours", "Bilan de fin de chapitre",
         "Des questions pour se tester, réponses en bas de page."),
    ],
}

# Chapitres dont TOUS les documents basculent dans une autre rubrique que
# celle déclarée ci-dessus. Le fil « TP élec » du BTS ET est un fil complet
# de chapitres : ses documents sont les mêmes, la rubrique change.
RUBRIQUE_DU_CHAPITRE = {
    "bts-et": {"tp01": "TP", "tp02": "TP", "ch09": "TP"},
}

# Titre affiché différent pour un document précis d'un chapitre précis.
TITRES_PARTICULIERS = {
    ("bts-crsa", "ch01", "activite"):
        ("Activité 1 — Rendement d'un moteur à courant continu",
         "Menée sur l'animation du banc d'essai : aucun matériel nécessaire."),
    ("bts-crsa", "ch01", "activite2"):
        ("Activité 2 — Rendement d'un panneau photovoltaïque",
         "L'activité expérimentale, avec le panneau et le luxmètre du laboratoire."),
}

# ------------------------------------------------------------- animations
# « avant » : le document devant lequel l'animation se place dans le
# chapitre. None => à la fin de la rubrique.
ANIMATIONS = {
    "bts-et": [
        {"chapitre": "c01", "rubrique": "Cours", "avant": "a1_chauffage",
         "titre": "Le chauffage", "fichier": "animations/calorimetre.html",
         "description": "Une résistance de puissance connue dans un récipient. Masse, matière, "
                        "puissance et température de départ réglables ; la courbe trace la "
                        "température en fonction de l'énergie reçue, paliers compris. "
                        "Q = m·c·Δθ et Q = m·L.",
         "motscles": ["calorimetre", "chaleur", "capacite thermique", "chaleur latente",
                      "changement d'etat", "palier", "fusion", "vaporisation", "energie"]},
        {"chapitre": "c01", "rubrique": "Cours", "avant": "a2_rayonnement",
         "titre": "Le rayonnement", "fichier": "animations/rayonnement.html",
         "description": "Une plaque chaude face à un capteur, sans aucun contact. Température, "
                        "surface et état de surface réglables, avec une colonne d'essai pour "
                        "chercher la loi. P = ε·σ·S·T⁴.",
         "motscles": ["rayonnement", "stefan", "emissivite", "camera thermique",
                      "thermographie", "kelvin", "infrarouge"]},
        {"chapitre": "c01", "rubrique": "Cours", "avant": "a3_flux",
         "titre": "Le flux à travers une paroi", "fichier": "animations/flux-thermique.html",
         "description": "Une ou deux couches entre un local chauffé et l'extérieur. Matériau, "
                        "épaisseur, surface et températures réglables ; température d'interface "
                        "affichée. Φ = λ·S·Δθ / e, puis la résistance thermique.",
         "motscles": ["flux", "conduction", "fourier", "isolation", "resistance thermique",
                      "paroi", "lambda", "conductivite", "armoire"]},
        {"chapitre": "c02", "rubrique": "Cours", "avant": "a1_flux",
         "titre": "Le flux magnétique", "fichier": "animations/flux-magnetique.html",
         "description": "Un aimant, une bobine, une surface orientable : on fait varier l'aire "
                        "et l'angle et on lit le flux. Φ = B·S·cos α.",
         "trouve": "Φ = B·S·cos α",
         "motscles": ["electromagnetisme", "flux magnetique", "induction", "reluctance",
                      "circuit magnetique"]},
        {"chapitre": "c02", "rubrique": "Cours", "avant": "a2_induction",
         "titre": "L'induction", "fichier": "animations/induction.html",
         "description": "On fait varier le flux à travers une bobine et on relève la tension "
                        "induite : c'est la vitesse de variation qui compte, pas la valeur du "
                        "flux. e = −N·dΦ/dt.",
         "trouve": "e = −N·dΦ/dt",
         "motscles": ["electromagnetisme", "flux magnetique", "induction", "reluctance",
                      "circuit magnetique"]},
        {"chapitre": "c02", "rubrique": "Cours", "avant": "a3_circuit",
         "titre": "Le circuit magnétique", "fichier": "animations/reluctance.html",
         "description": "Un circuit ferromagnétique avec entrefer réglable : on voit la "
                        "réluctance dominer dès que l'entrefer s'ouvre. ℛ = ℓ/(µ·S).",
         "trouve": "ℛ = ℓ/(µ·S) et la loi d'Hopkinson",
         "motscles": ["electromagnetisme", "flux magnetique", "induction", "reluctance",
                      "circuit magnetique"]},
    ],

    "bts-crsa": [
        {"chapitre": "ch01", "rubrique": "TP", "avant": "activite",
         "titre": "Banc d'essai d'un moteur à courant continu",
         "fichier": "animations/mcc-banc-essai.html",
         "description": "Un moteur 24 V chargé par un frein réglable : tension, courant, "
                        "vitesse et couple se lisent sur les appareils, la puissance utile et "
                        "la puissance absorbée se calculent. Le rendement varie avec la charge.",
         "trouve": "η = P utile / P absorbée, maximal à charge partielle.",
         "motscles": ["moteur", "courant continu", "mcc", "rendement", "couple", "puissance"]},
    ],

    "bts-tsma": [
        {"chapitre": "ch01", "rubrique": "TP", "avant": None,
         "titre": "Pied à coulisse virtuel", "fichier": "animations/pied-a-coulisse.html",
         "description": "Un pied à coulisse au 1/50 refermé sur un axe de piston : on lit "
                        "soi-même le vernier, à la loupe, sur six axes numérotés. L'animation "
                        "donne la moyenne et l'écart-type, pas la conclusion.",
         "trouve": "Une mesure ne se conclut qu'en comparant un intervalle à une tolérance.",
         "motscles": ["pied a coulisse", "vernier", "mesure", "incertitude", "tolerance",
                      "dispersion"]},
        {"chapitre": "ch02", "rubrique": "TP", "avant": None,
         "titre": "Treuil virtuel 24 V", "fichier": "animations/treuil.html",
         "description": "Un treuil lève une masse réglable : voltmètre, ampèremètre et "
                        "chronomètre à déclencher soi-même. Cinq chronométrages du même essai "
                        "suffisent à voir d'où vient l'incertitude.",
         "trouve": "η = E utile / E absorbée, et le rendement dépend de la charge.",
         "motscles": ["treuil", "rendement", "energie", "puissance", "chronometre",
                      "incertitude"]},
    ],

    "1sti2d": [],

    "outils": [
        {"chapitre": "ou01", "rubrique": "Calcul", "avant": None,
         "titre": "L'échelle des unités", "fichier": "animations/conversion-unites.html",
         "description": "On choisit la grandeur, l'unité de départ et l'unité d'arrivée, et "
                        "l'outil déroule le raisonnement : le nombre doit-il augmenter ou "
                        "diminuer, de combien de rangs, et pourquoi une aire change de deux "
                        "rangs à chaque cran. Dix conversions au hasard pour s'entraîner.",
         "trouve": "Convertir, c'est répondre à une seule question : plus grand ou plus petit ?",
         "motscles": ["unites", "conversion", "prefixes", "puissances de dix", "kilo",
                      "milli", "aire", "volume", "ordre de grandeur"]},
        {"chapitre": "ou02", "rubrique": "Calcul", "avant": None,
         "titre": "Transformer une formule", "fichier": "animations/transformer-formule.html",
         "description": "Douze relations du programme, une lettre à isoler : l'outil montre "
                        "le chemin étape par étape, puis fait l'application numérique. Une "
                        "série d'entraînement tire les relations au hasard.",
         "trouve": "Ce qui multiplie d'un côté divise de l'autre.",
         "motscles": ["formule", "isoler", "calcul litteral", "loi d'ohm", "rendement",
                      "pression", "debit"]},
    ],
}

# ------------------------------------------------ où trouver les PDF source
# Pour --deposer : comment la collection LaTeX range ses PDF et comment elle
# les nomme. {ch} = clé du chapitre, {doc} = nom du document.
SOURCES = {
    "1sti2d":   {"dossier": "collection/{ch}/pdf", "motif": "1STI2D_{ch}_{doc}.pdf"},
    "bts-tsma": {"dossier": "collection/{ch}/pdf", "motif": "TSMA_{ch}_{doc}.pdf"},
    "bts-crsa": {"dossier": "collection/{ch}/pdf", "motif": "CRSA_{ch}_{doc}.pdf"},
    # la collection ET range ses chapitres dans des dossiers en capitales
    # (C1, TP1) alors que la clé du site est en minuscules (c01, tp01)
    "bts-et":   {"dossier": "{CH}/pdf", "motif": "ET1_{ch}_{doc}.pdf"},
}

# Correspondance clé du site -> dossier dans la collection ET.
DOSSIERS_ET = {"ch00": "ch00", "ch09": "ch09", "c01": "C1", "c02": "C2",
               "tp01": "TP1", "tp02": "TP2"}
