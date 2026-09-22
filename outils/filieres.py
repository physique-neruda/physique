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
        ("activite_banc",     "TP",    "Activité sur banc",
         "La même étude menée sur le banc du laboratoire, avec le matériel réel."),
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

# Le fil ADM n'a pas de sujet type E4 : l'ADM est une épreuve pratique, et la
# situation U51 en tient lieu. Ses documents sont les mêmes, la rubrique change.

# Chapitres dont TOUS les documents basculent dans une autre rubrique que
# celle déclarée ci-dessus. Le fil « TP élec » du BTS ET est un fil complet
# de chapitres : ses documents sont les mêmes, la rubrique change.
RUBRIQUE_DU_CHAPITRE = {
    "bts-et": {"tp01": "TP", "tp02": "TP", "ch09": "TP", "adm01": "ADM"},
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
        {"chapitre": "tp02", "rubrique": "TP", "avant": "activite",
         "titre": "Le relevé de caractéristiques",
         "fichier": "animations/caracteristiques.html",
         "description": "Le montage ne change jamais, c'est le dipôle qu'on remplace : "
                        "résistance, lampe à filament, diode, pile réelle. Le curseur déplace "
                        "le point de fonctionnement, les appareils affichent le couple (U ; I), "
                        "et un bouton range chaque point dans un tableau. La diode peut être "
                        "inversée.",
         "trouve": "Une caractéristique n'est droite que pour un conducteur ohmique.",
         "motscles": ["dipole", "caracteristique", "resistance", "lampe", "diode", "pile",
                      "point de fonctionnement", "ohm"]},
        {"chapitre": "adm01", "rubrique": "ADM", "avant": "activite",
         "titre": "Le contacteur", "fichier": "animations/contacteur.html",
         "description": "Une coupe animée du contacteur : bobine, armature mobile, trois pôles "
                        "de puissance et deux contacts auxiliaires. Tension de bobine réglable ; "
                        "tous les contacts basculent ensemble et le ressort ramène tout au repos.",
         "trouve": "Le fonctionnement tout ou rien, et la différence pôles / contacts auxiliaires.",
         "motscles": ["contacteur", "bobine", "electro-aimant", "armature", "ressort",
                      "contact auxiliaire", "pole", "tout ou rien"]},
        {"chapitre": "adm01", "rubrique": "ADM", "avant": "exercices",
         "titre": "Le démarrage direct", "fichier": "animations/demarrage-direct.html",
         "description": "Les huit solutions du départ-moteur, de l'interrupteur nu au schéma "
                        "complet. On appuie sur marche et arrêt, on coupe le réseau, on frappe "
                        "l'arrêt d'urgence, on provoque une surcharge : les conducteurs sous "
                        "tension s'allument en rouge.",
         "trouve": "L'automaintien, la priorité à l'arrêt, et ce que disent les voyants.",
         "motscles": ["demarrage direct", "automaintien", "bouton poussoir", "arret d'urgence",
                      "relais thermique", "sectionneur", "voyant", "schema de commande"]},
        {"chapitre": "adm01", "rubrique": "ADM", "avant": "u51",
         "titre": "Le démarrage étoile-triangle", "fichier": "animations/etoile-triangle.html",
         "description": "Les trois contacteurs, la temporisation réglable et le temps mort. La "
                        "courbe trace le courant absorbé ; on peut supprimer le verrouillage "
                        "pour voir ce qui se passe quand étoile et triangle se ferment ensemble.",
         "trouve": "Pourquoi le courant de démarrage est divisé par trois, et à quoi sert le "
                   "verrouillage.",
         "motscles": ["etoile triangle", "couplage", "temporisation", "verrouillage",
                      "temps mort", "courant de demarrage", "moteur asynchrone"]},
        {"chapitre": "adm01", "rubrique": "ADM", "avant": None, "type": "anki",
         "titre": "Les symboles — paquet Anki",
         "fichier": "docs/bts-et/adm01/symboles-anki.apkg",
         "description": "Quarante cartes à installer dans Anki : au recto le symbole "
                        "normalisé, au verso le nom de l'appareil, son rôle, son "
                        "fonctionnement et une photo du matériel réel. Fichier à ouvrir "
                        "avec Anki, qui l'importe tout seul.",
         "trouve": "Un symbole se reconnaît d'un coup d'œil, ou il ne sert à rien.",
         "motscles": ["symbole", "anki", "cartes", "appareillage", "contacteur",
                      "sectionneur", "relais thermique", "bouton poussoir"]},
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
        {"chapitre": "ch05", "rubrique": "TP", "avant": "activite_anim",
         "titre": "Viscosimètre capillaire virtuel",
         "fichier": "animations/viscosimetre.html",
         "description": "Une huile inconnue, un tube capillaire, un bain thermostaté : on "
                        "chronomètre l'écoulement, on remonte à la viscosité cinématique, et "
                        "on identifie le grade ISO VG du bidon. Ni banc, ni solvant, ni "
                        "nettoyage.",
         "trouve": "La viscosité chute vite avec la température : un grade ne se lit qu'à 40 °C.",
         "motscles": ["viscosite", "viscosimetre", "capillaire", "iso vg", "huile",
                      "temperature", "ecoulement"]},
        {"chapitre": "ch02", "rubrique": "TP", "avant": None,
         "titre": "Treuil virtuel 24 V", "fichier": "animations/treuil.html",
         "description": "Un treuil lève une masse réglable : voltmètre, ampèremètre et "
                        "chronomètre à déclencher soi-même. Cinq chronométrages du même essai "
                        "suffisent à voir d'où vient l'incertitude.",
         "trouve": "η = E utile / E absorbée, et le rendement dépend de la charge.",
         "motscles": ["treuil", "rendement", "energie", "puissance", "chronometre",
                      "incertitude"]},
    ],

    "1sti2d": [
        {"chapitre": "ch02", "rubrique": "TP", "avant": "activite",
         "titre": "Le wattmètre de prise",
         "fichier": "animations/wattmetre-de-prise.html",
         "description": "L'appareil qui se glisse entre la prise murale et l'appareil : on "
                        "branche l'un des dix appareils proposés, on lit la puissance "
                        "réellement appelée, on choisit une durée d'usage quotidien et "
                        "l'énergie se déduit. C'est la partie A de l'activité.",
         "trouve": "La puissance d'une plaque de la facture n'est pas celle du chargeur.",
         "motscles": ["wattmetre", "puissance", "energie", "kwh", "facture",
                      "consommation", "veille", "prise"]},
        {"chapitre": "ch01", "rubrique": "TP", "avant": "activite",
         "titre": "Pied à coulisse virtuel", "fichier": "animations/pied-a-coulisse.html",
         "description": "Un pied à coulisse au 1/50 (résolution 0,02 mm) avec une loupe "
                        "déplaçable le long du vernier : on lit soi-même, sur six axes "
                        "numérotés. L'animation donne la moyenne et l'écart-type, pas la "
                        "conclusion. C'est la partie B de l'activité.",
         "trouve": "Une mesure ne se conclut qu'en comparant un intervalle à une tolérance.",
         "motscles": ["pied a coulisse", "vernier", "mesure", "incertitude", "tolerance",
                      "dispersion", "resolution"]},
    ],

    "outils": [
        {"chapitre": "ou03", "rubrique": "Mesure", "avant": None,
         "titre": "Calculer, tracer et modéliser avec un tableur",
         "fichier": "animations/tableur.html",
         "description": "Un tutoriel pas à pas sur Excel : saisir un tableau de mesures, "
                        "écrire une formule et la recopier, tracer un nuage de points, puis "
                        "ajouter une courbe de tendance et lire son équation. Chaque étape se "
                        "rejoue autant qu'il faut : le mieux est de la reproduire en même "
                        "temps sur son propre ordinateur.",
         "trouve": "Une modélisation, c'est une courbe de tendance qu'on sait lire, pas "
                   "qu'on sait afficher.",
         "motscles": ["tableur", "excel", "formule", "recopier", "graphique",
                      "nuage de points", "courbe de tendance", "modeliser"]},
        {"chapitre": "ou01", "rubrique": "Calcul", "avant": None,
         "titre": "Convertir avec les puissances de dix",
         "fichier": "animations/conversion-unites.html",
         "description": "Aucune virgule ne se déplace : chaque unité porte son rang, on compte "
                        "l'écart entre les deux rangs, et c'est la taille des unités qui donne "
                        "le signe. Douze onglets, du nanomètre au gigawatt : les aires et les "
                        "volumes élèvent la puissance de dix au carré ou au cube, les capacités "
                        "passent par 1 L = 1 dm3, les unités composées (m/s, L/min, g/cm3) "
                        "s'écrivent en fraction, et les durées quittent le decimal au-dessus de "
                        "la seconde. Dix conversions au hasard pour s'entraîner.",
         "trouve": "L'écart des rangs donne le nombre, le sens donne le signe.",
         "motscles": ["unites", "conversion", "prefixes", "puissances de dix", "kilo",
                      "milli", "aire", "volume", "ordre de grandeur"]},
        {"chapitre": "ou02", "rubrique": "Calcul", "avant": None,
         "titre": "Transformer une formule", "fichier": "animations/transformer-formule.html",
         "description": "Douze relations du programme, une lettre à isoler, et les deux "
                        "méthodes côte à côte : l'équation qu'on multiplie ou divise des deux "
                        "côtés, et le produit en croix où chaque lettre traverse en diagonale. "
                        "Application numérique et série d'entraînement.",
         "trouve": "Deux chemins, un seul résultat : c'est la meilleure des vérifications.",
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
               "tp01": "TP1", "tp02": "TP2", "adm01": "ADM1"}
