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
     "rubriques": ["Cours", "TP", "ADM", "TP systèmes", "S'entraîner", "Corrigés"]},
    {"id": "bts-crsa", "nom": "BTS CRSA",
     "sous_titre": "Conception et Réalisation de Systèmes Automatiques",
     "rubriques": ["Cours", "TP", "S'entraîner", "Corrigés"]},
    {"id": "bts-tsma", "nom": "BTS TSMA",
     "sous_titre": "Techniques et Services en Matériels Agricoles",
     "rubriques": ["Cours", "TP", "S'entraîner", "Corrigés"]},
    {"id": "1sti2d", "nom": "1re STI2D",
     "sous_titre": "Physique-chimie et mathématiques",
     "rubriques": ["Cours", "TP", "S'entraîner", "Corrigés"]},
]

# --------------------------------------------------------- listes blanches
# Décision du 3 octobre 2026 : côté élèves, seulement prérequis, cours (complet et à
# compléter), exercices, bilan, activités et corrigés des séances. Les énoncés de CCF,
# devoirs E32, oraux, sujets E4 et situations U51 ne sortent plus : ils sont rangés,
# avec tous les corrigés, dans l'espace enseignant caché (outils/preparer_prive.py).
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
        ("corrige_seances",   "Corrigés", "Corrigé des séances",
         "Les corrections des exercices et des parties d'activité déjà traités en classe."),
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
        # CACHÉ (espace enseignant) : ("ccf",               "TP",    "Situation type CCF",
        #   "Un sujet d'entraînement au format de l'évaluation en cours de formation."),
        # CACHÉ (espace enseignant) : ("oral",              "TP",    "Oral — sujet d'entraînement",
        #   "Le format de l'épreuve orale, à préparer en autonomie."),
        ("corrige_seances",   "Corrigés", "Corrigé des séances",
         "Les corrections des exercices et des parties d'activité déjà traités en classe."),
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
        # CACHÉ (espace enseignant) : ("ccf",               "TP",    "Situation type CCF",
        #   "Un sujet d'entraînement au format de l'évaluation en cours de formation."),
        # CACHÉ (espace enseignant) : ("devoir",            "TP",    "Devoir type E32",
        #   "Un devoir écrit au format de l'épreuve E32, pour s'entraîner."),
        # CACHÉ (espace enseignant) : ("oral",              "TP",    "Oral — sujet d'entraînement",
        #   "Le format de l'épreuve orale, à préparer en autonomie."),
        ("corrige_seances",   "Corrigés", "Corrigé des séances",
         "Les corrections des exercices et des parties d'activité déjà traités en classe."),
    ],

    "bts-et": [
        ("tp_four",           "TP",    "TP — Le four industriel",
         "Le sujet de TP sur le four du laboratoire : lecture du schéma, mesures, gradateur à train d'ondes."),
        ("tp_banc",           "TP",    "TP — Le banc départ-moteur",
         "Le sujet de TP sur le banc : plaque, schéma, câblage, mesures, démarrage direct, protections, diagnostic."),
        ("tp_piscine",        "TP",    "TP — La centrale de pompage",
         "Le sujet de TP sur la centrale de piscine DMS : armoire, lignage des vannes, mesures, pompes."),
        ("tp_levage",         "TP",    "TP — Le système de levage",
         "Le sujet de TP sur le levage : énergie, lecture des sept folios du schéma, mise en service."),
        ("tp_ermalux",        "TP",    "TP — L'éclairage scénique Ermalux",
         "Le sujet de TP sur l'éclairage scénique : schéma, variateurs, mise en service."),
        ("tp_harmocem",       "TP",    "TP — Pollution harmonique et filtrage (Harmocem)",
         "Le sujet de TP sur le banc Harmocem : mesures d'harmoniques et solutions de filtrage."),
        ("prerequis",         "Cours", "Prérequis",
         "À faire avant d'ouvrir le chapitre : ce qu'il faut savoir manipuler."),
        ("a1_chauffage",      "Cours", "Activité 1 — Chauffer un corps",
         "Le document à remplir pendant l'animation."),
        ("a1_flux",           "Cours", "Activité 1 — Le flux magnétique",
         "Le document à remplir pendant l'animation."),
        ("a2_flux",           "Cours", "Activité 2 — Le flux à travers une paroi",
         "Le document à remplir pendant l'animation."),
        ("a3_rayonnement",    "Cours", "Activité 3 — Le rayonnement",
         "Le document à remplir pendant l'animation."),
        ("a2_induction",      "Cours", "Activité 2 — L'induction",
         "Le document à remplir pendant l'animation."),
        ("a3_circuit",        "Cours", "Activité 3 — Le circuit magnétique",
         "Le document à remplir pendant l'animation."),
        ("a1_equation",       "Cours", "Activité 1 — L'équation de combustion",
         "Le document à remplir pendant l'animation."),
        ("a2_energie",        "Cours", "Activité 2 — L'énergie d'un combustible",
         "Le document à remplir pendant l'animation."),
        ("a3_groupe",         "Cours", "Activité 3 — Le groupe électrogène",
         "Le document à remplir pendant l'animation."),
        ("a1_pression",       "Cours", "Activité au simulateur — La pression au fond d'un liquide",
         "Le document à remplir pendant l'animation."),
        ("a1_chariot",        "Cours", "Activité 1 — Le chariot filoguidé",
         "Le document à remplir pendant l'animation."),
        ("a2_treuil",         "Cours", "Activité 2 — Le treuil",
         "Le document à remplir pendant l'animation."),
        ("a1_corps",          "Cours", "Activité 1 — Corps chaud, couleur et photon",
         "Le document à remplir pendant l'animation."),
        ("a2_eclairage",      "Cours", "Activité 2 — L'éclairage d'un atelier",
         "Le document à remplir pendant l'animation."),
        ("cours_a_completer", "Cours", "Cours à compléter",
         "La version distribuée en séance, avec les passages à écrire."),
        ("cours",             "Cours", "Cours complet",
         "La même chose, tout écrit. À relire après la séance."),
        ("activite",          "Cours", "Activité documentaire",
         "Exploitation de documents techniques, après le cours."),
        ("exercices",         "Cours", "Exercices",
         "Les exercices du chapitre, sans les corrigés."),
        # CACHÉ (espace enseignant) : ("u51",               "Cours", "Situation U51",
        #   "Une situation d'évaluation type U51, pour s'entraîner."),
        # CACHÉ (espace enseignant) : ("e4_sujet",          "Cours", "Sujet type E4 — sujet",
        #   "Le questionnement, au format de l'épreuve."),
        # CACHÉ (espace enseignant) : ("e4_dres",           "Cours", "Sujet type E4 — dossier ressources",
        #   "Les documents techniques à exploiter."),
        # CACHÉ (espace enseignant) : ("e4_drep",           "Cours", "Sujet type E4 — documents réponses",
        #   "Les pages à rendre."),
        ("bilan",             "Cours", "Bilan de fin de chapitre",
         "Des questions pour se tester, réponses en bas de page."),
        ("corrige_seances",   "Corrigés", "Corrigé des séances",
         "Les corrections des exercices et des parties d'activité déjà traités en classe."),
    ],
}

# Le fil ADM n'a pas de sujet type E4 : l'ADM est une épreuve pratique, et la
# situation U51 en tient lieu. Ses documents sont les mêmes, la rubrique change.

# Chapitres dont TOUS les documents basculent dans une autre rubrique que
# celle déclarée ci-dessus. Le fil « TP élec » du BTS ET est un fil complet
# de chapitres : ses documents sont les mêmes, la rubrique change.
RUBRIQUE_DU_CHAPITRE = {
    "bts-et": {"tp01": "TP", "tp02": "TP", "tp03": "TP", "tp04": "TP", "tp05": "TP", "tp06": "TP", "tp07": "TP", "ch09": "TP", "adm01": "ADM",
               "adm02": "TP systèmes", "adm03": "TP systèmes",
               "adm04": "TP systèmes", "adm05": "TP systèmes", "adm06": "TP systèmes",
               "adm07": "TP systèmes"},
}

# Chapitres retirés du site élèves (décision du 3 octobre 2026) : ni leurs PDF,
# ni leurs animations, ni leurs QCM n'apparaissent dans le catalogue. Leurs
# documents sont rangés dans l'espace enseignant (prive-atelier/<filière>/<ch>/).
#   adm02 à adm07 : TP systèmes, réservés à l'enseignant (décision du 8 octobre 2026) ;
#   c04, c05, c06 : cours assurés par le collègue (c06 ajouté le 8 octobre 2026) (statique des fluides, mécanique
#              en translation) ;  ch09 : distribution et qualité de l'énergie.
CHAPITRES_CACHES = {
    "bts-et": ["c04", "c05", "c06", "ch09", "adm02", "adm03", "adm04", "adm05", "adm06", "adm07"],
}

# Titre affiché différent pour un document précis d'un chapitre précis.
TITRES_PARTICULIERS = {
    ("bts-crsa", "ch01", "activite"):
        ("Activité 1 — Rendement d'un moteur à courant continu",
         "Menée sur l'animation du banc d'essai : aucun matériel nécessaire."),
    ("bts-crsa", "ch01", "activite2"):
        ("Activité 2 — Rendement d'un panneau photovoltaïque",
         "L'activité expérimentale, avec le panneau et le luxmètre du laboratoire."),
    ("bts-crsa", "ch03", "activite"):
        ("Activité 1 — Chauffer : la courbe, les deux formules, la chaleur latente",
         "Sur l'animation « Le chauffage » (courbe de chauffe, Q = mcΔθ, Q = mL), puis au calorimètre du laboratoire."),
    ("bts-crsa", "ch03", "activite2"):
        ("Activité 2 — La conduction à travers une paroi",
         "Menée sur l'animation « Le flux à travers une paroi » ; le rayonnement en partie facultative."),
}

# ------------------------------------------------------------- animations
# « avant » : le document devant lequel l'animation se place dans le
# chapitre. None => à la fin de la rubrique.
ANIMATIONS = {
    "bts-et": [
        {"chapitre": "c06", "rubrique": "Cours", "avant": "a1_corps",
         "titre": "Corps chaud, couleur et photon",
         "fichier": "animations/corps-chaud.html",
         "description": "La température d'un corps chaud règle son spectre : longueur d'onde du "
                        "maximum, teinte perçue, part visible ; et l'énergie du photon pour une "
                        "longueur d'onde choisie.",
         "trouve": "λmax × T = 2,90 × 10⁻³ m·K (loi de Wien) ; E = hc/λ.",
         "motscles": ["wien", "temperature de couleur", "photon", "spectre"]},
        {"chapitre": "c06", "rubrique": "Cours", "avant": "a2_eclairage",
         "titre": "L'éclairage d'un atelier",
         "fichier": "animations/eclairage-atelier.html",
         "description": "Local, type et nombre de luminaires : éclairement moyen comparé aux valeurs "
                        "recommandées, puissance installée, énergie et coût annuels.",
         "trouve": "E = N·Φ·U·M/S ; les LED divisent la consommation par deux face aux tubes.",
         "motscles": ["eclairement", "lux", "lumen", "led", "efficacite lumineuse"]},
        {"chapitre": "c05", "rubrique": "Cours", "avant": "a1_chariot",
         "titre": "Le chariot filoguidé",
         "fichier": "animations/chariot-filoguide.html",
         "description": "Un chariot automatique démarre sous une force motrice constante, freiné par "
                        "les frottements, à plat ou en rampe : courbes v(t) et x(t), accélération, "
                        "énergie cinétique, puissance.",
         "trouve": "F − f = m·a ; en croisière, la force motrice ne compense plus que les frottements.",
         "motscles": ["pfd", "acceleration", "chariot", "plan incline", "puissance"]},
        {"chapitre": "c05", "rubrique": "Cours", "avant": "a2_treuil",
         "titre": "Treuil virtuel 24 V", "fichier": "animations/treuil.html",
         "description": "Un treuil lève une masse réglable : voltmètre, ampèremètre et chronomètre "
                        "à déclencher soi-même.",
         "trouve": "Énergie potentielle gagnée, énergie électrique absorbée, rendement.",
         "motscles": ["treuil", "energie potentielle", "puissance", "rendement"]},
        {"chapitre": "c04", "rubrique": "Cours", "avant": "a1_pression",
         "titre": "Pression au fond d'une éprouvette",
         "fichier": "animations/eprouvette-pression.html",
         "description": "Une éprouvette d'eau ou d'huile et un capteur de pression absolue au fond : "
                        "on relève la pression pour plusieurs hauteurs et on retrouve Δp = ρgh.",
         "trouve": "La pente de p = f(h) vaut ρg : elle donne la masse volumique du liquide.",
         "motscles": ["pression", "rho g h", "capteur", "masse volumique"]},
        {"chapitre": "adm02", "rubrique": "TP systèmes", "avant": "tp_four",
         "titre": "Le four industriel : lecture du schéma pas à pas",
         "fichier": "animations/four-industriel.html",
         "description": "Le schéma du four du laboratoire parcouru pas à pas, appareil par appareil, "
                        "avec la photo de l'armoire : alimentation, protections, commande, "
                        "gradateurs à train d'ondes et résistances chauffantes.",
         "trouve": "Relier chaque symbole du schéma à l'appareil réel et à son rôle.",
         "motscles": ["four", "schema", "gradateur", "train d'ondes", "armoire", "lecture de schema"]},
        {"chapitre": "adm03", "rubrique": "TP systèmes", "avant": "tp_banc",
         "titre": "Le banc départ-moteur : plans, câblage et fonctionnement",
         "fichier": "animations/banc-depart-moteur.html",
         "description": "Quarante étapes sur la face du banc et les cinq folios de son schéma : "
                        "repérer les appareils, suivre le câblage, comprendre la mise en marche, "
                        "l'arrêt et les protections du départ-moteur.",
         "trouve": "Passer du plan au câblage réel, et d'un symptôme à l'appareil en cause.",
         "motscles": ["depart moteur", "folio", "cablage", "contacteur", "relais thermique", "banc"]},
        {"chapitre": "adm03", "rubrique": "TP systèmes", "avant": "tp_banc",
         "titre": "Le banc départ-moteur : photo et folio pas à pas",
         "fichier": "animations/banc-depart-moteur-photo.html",
         "description": "Dix-sept étapes : la photo de la face manuelle du banc et le folio du "
                        "démarrage direct animés côte à côte (version de l'ADM 3, archive v3).",
         "trouve": "Relier chaque appareil de la face du banc à son symbole sur le folio.",
         "motscles": ["depart moteur", "folio", "photo", "demarrage direct", "banc"]},
        {"chapitre": "c01", "rubrique": "Cours", "avant": "a1_chauffage",
         "titre": "Le chauffage", "fichier": "animations/calorimetre.html",
         "description": "Une résistance de puissance connue dans un récipient. Masse, matière, "
                        "puissance et température de départ réglables ; la courbe trace la "
                        "température en fonction de l'énergie reçue, paliers compris. "
                        "Q = m·c·Δθ et Q = m·L.",
         "motscles": ["calorimetre", "chaleur", "capacite thermique", "chaleur latente",
                      "changement d'etat", "palier", "fusion", "vaporisation", "energie"]},
        {"chapitre": "c01", "rubrique": "Cours", "avant": "a3_rayonnement",
         "titre": "Le rayonnement", "fichier": "animations/rayonnement.html",
         "description": "Une plaque chaude face à un capteur, sans aucun contact. Température, "
                        "surface et état de surface réglables, avec une colonne d'essai pour "
                        "chercher la loi. P = ε·σ·S·T⁴.",
         "motscles": ["rayonnement", "stefan", "emissivite", "camera thermique",
                      "thermographie", "kelvin", "infrarouge"]},
        {"chapitre": "c01", "rubrique": "Cours", "avant": "a2_flux",
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
        {"chapitre": "c03", "rubrique": "Cours", "avant": "a1_equation",
         "titre": "L'équation de combustion", "fichier": "animations/combustion.html",
         "description": "On place dans le brûleur des molécules de combustible et de dioxygène ; "
                        "la flamme réarrange les atomes. Les atomes sont comptés avant et après, "
                        "et un manque d'air fait apparaître le monoxyde de carbone.",
         "trouve": "Les nombres de l'équation de combustion et la conservation des atomes.",
         "motscles": ["combustion", "equation", "equilibrer", "atome", "molecule", "methane",
                      "propane", "butane", "monoxyde de carbone", "dioxyde de carbone"]},
        {"chapitre": "c03", "rubrique": "Cours", "avant": "a2_energie",
         "titre": "L'énergie d'un combustible", "fichier": "animations/pouvoir-calorifique.html",
         "description": "On brûle une petite masse de combustible sous un récipient d'eau et on "
                        "mesure l'énergie reçue par l'eau. Une colonne d'essai permet de chercher "
                        "le rapport constant.",
         "trouve": "E = m·PCI et les ordres de grandeur des pouvoirs calorifiques.",
         "motscles": ["pouvoir calorifique", "pci", "energie", "combustible", "gazole",
                      "hydrogene", "calorimetre", "combustion"]},
        {"chapitre": "c03", "rubrique": "Cours", "avant": "a3_groupe",
         "titre": "Le groupe électrogène", "fichier": "animations/groupe-electrogene.html",
         "description": "Un groupe diesel de 100 kW alimente une charge. Puissance demandée et "
                        "durée réglables ; gazole consommé, énergie électrique fournie et CO₂ "
                        "rejeté s'affichent.",
         "trouve": "Le rendement d'un groupe, qui chute en sous-charge, et le CO₂ proportionnel "
                   "au gazole brûlé.",
         "motscles": ["groupe electrogene", "diesel", "rendement", "gazole", "co2",
                      "sous-charge", "combustion"]},
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
        {"chapitre": "adm04", "rubrique": "TP systèmes", "avant": "tp_piscine",
         "titre": "La centrale de pompage : comprendre et ligner pas à pas",
         "fichier": "animations/centrale-pompage.html",
         "description": "Vingt-quatre étapes sur la centrale de piscine DMS : le circuit d'eau, "
                        "les vannes à positionner pour chaque lignage, puis l'armoire sur les "
                        "folios du schéma constructeur.",
         "trouve": "Quelles vannes ouvrir pour chaque fonction, et ce que commande l'armoire.",
         "motscles": ["pompage", "piscine", "vanne", "lignage", "pompe", "armoire", "schema"]},
        {"chapitre": "adm05", "rubrique": "TP systèmes", "avant": "tp_levage",
         "titre": "Le système de levage : lecture du schéma pas à pas",
         "fichier": "animations/systeme-levage.html",
         "description": "Dix-huit étapes sur les sept folios du schéma du levage : puissance, "
                        "variateur, commande, fins de course et sécurités.",
         "trouve": "Suivre un ordre de montée du bouton jusqu'au moteur.",
         "motscles": ["levage", "schema", "variateur", "fin de course", "folio", "moteur"]},
        {"chapitre": "adm07", "rubrique": "TP systèmes", "avant": "tp_harmocem",
         "titre": "Harmocem : la pollution harmonique pas à pas",
         "fichier": "animations/harmocem.html",
         "description": "Les points de mesure du banc, puis chaque solution de filtrage avec les "
                        "relevés de l'analyseur : forme du courant, spectre, THD.",
         "trouve": "Ce que chaque solution de filtrage retire du spectre.",
         "motscles": ["harmonique", "thd", "filtrage", "spectre", "analyseur", "harmocem"]},
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
        {"chapitre": "ch20", "rubrique": "TP", "avant": "activite",
         "titre": "Régler une boucle de régulation",
         "fichier": "animations/regulation.html",
         "description": "Une étuve, sa sonde et son régulateur simulés : échelon de consigne, "
                        "réglage du gain et du temps d'intégration d'un correcteur PI, ouverture "
                        "de porte, puis comparaison avec un thermostat tout ou rien à hystérésis.",
         "trouve": "L'action proportionnelle donne la rapidité, l'action intégrale annule "
                   "l'erreur ; forcer l'une ou l'autre mène à l'instabilité.",
         "motscles": ["regulation", "correcteur pi", "hysteresis", "thermostat", "stabilite"]},
        {"chapitre": "ch01", "rubrique": "TP", "avant": "activite",
         "titre": "Banc d'essai d'un moteur à courant continu",
         "fichier": "animations/mcc-banc-essai.html",
         "description": "Un moteur 24 V chargé par un frein réglable : tension, courant, "
                        "vitesse et couple se lisent sur les appareils, la puissance utile et "
                        "la puissance absorbée se calculent. Le rendement varie avec la charge.",
         "trouve": "η = P utile / P absorbée, maximal à charge partielle.",
         "motscles": ["moteur", "courant continu", "mcc", "rendement", "couple", "puissance"]},
        {"chapitre": "ch03", "rubrique": "TP", "avant": "activite",
         "titre": "Le chauffage", "fichier": "animations/calorimetre.html",
         "description": "Une résistance chauffante de puissance réglable plonge dans un récipient "
                        "(eau, huile, aluminium, cuivre) : la courbe de chauffe se trace, glace "
                        "comprise, en durée ou en énergie reçue. C'est la partie A de l'activité 1.",
         "trouve": "Q = m c Δθ hors changement d'état ; Q = m L pendant un palier.",
         "motscles": ["chauffage", "capacite thermique", "chaleur latente", "palier", "courbe de chauffe"]},
        {"chapitre": "ch03", "rubrique": "TP", "avant": "activite2",
         "titre": "Le flux à travers une paroi", "fichier": "animations/flux-thermique.html",
         "description": "Un fluxmètre posé sur une paroi : matériau, épaisseur, surface et "
                        "températures se règlent, une deuxième couche s'ajoute. On change une "
                        "seule chose à la fois.",
         "trouve": "φ = S·Δθ/R, avec R = e/λ ; les résistances des couches s'additionnent.",
         "motscles": ["flux thermique", "paroi", "isolant", "resistance thermique", "conduction"]},
        {"chapitre": "ch03", "rubrique": "TP", "avant": "activite2",
         "titre": "Le rayonnement", "fichier": "animations/rayonnement.html",
         "description": "Une plaque chaude devant un capteur : sa température, sa surface et son "
                        "état de surface se règlent. Rien ne la touche, aucun air ne circule.",
         "trouve": "La puissance rayonnée croît très vite avec la température et dépend de "
                   "l'état de surface.",
         "motscles": ["rayonnement", "transfert thermique", "four", "surface", "temperature"]},
    ],

    "bts-tsma": [
        {"chapitre": "ch03", "rubrique": "TP", "avant": "activite",
         "titre": "Pression au fond d'une éprouvette",
         "fichier": "animations/eprouvette-pression.html",
         "description": "Un tuyau souple relié à un capteur de pression absolue plonge dans une "
                        "éprouvette d'eau ou d'huile ; on règle la profondeur et on relève la "
                        "pression. C'est la partie « huile » de l'activité expérimentale.",
         "trouve": "La pente de p = f(h) vaut ρ g ; l'ordonnée à l'origine, la pression "
                   "atmosphérique.",
         "motscles": ["pression", "profondeur", "masse volumique", "huile", "eprouvette", "capteur"]},
        {"chapitre": "ch03", "rubrique": "TP", "avant": "activite_banc",
         "titre": "La maquette pression-surface",
         "fichier": "animations/maquette-pression.html",
         "description": "La maquette du laboratoire en version simulée : trois pistons, des masses à "
                        "poser, un capteur de pression absolue. Les valeurs reproduisent les mesures "
                        "réelles, défauts compris ; un second onglet fait fonctionner une presse "
                        "hydraulique. C'est le poste 2 de l'activité sur banc.",
         "trouve": "La pente de p = f(m) donne la section du piston ; l'ordonnée à l'origine "
                   "contrôle le montage.",
         "motscles": ["pression", "piston", "seringue", "section", "presse hydraulique", "maquette"]},
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
        {"chapitre": "ou05", "rubrique": "Calcul", "avant": None,
         "titre": "La calculatrice et les puissances de dix",
         "fichier": "animations/calculatrice-puissances.html",
         "description": "Une calculatrice à l'écran, à manipuler comme la vraie (TI-83 Premium CE, Casio Graph 35+E, Casio fx-92 Collège, NumWorks), avec des claviers dessinés d'après les vraies calculatrices. Sept exercices guidés touche par touche : écrire un nombre en notation scientifique, calculer avec, le piège de la division, les puissances, l'affichage scientifique, degrés ou radians, statistiques à une variable (moyenne, écart-type) — un mode libre qui calcule vraiment et un écran agrandi.",
         "trouve": "« × 10 puissance » s'écrit avec la touche EE ou ×10ˣ, jamais avec × 10 ^ ; l'exposant négatif se tape avec la touche de négation.",
         "motscles": ["calculatrice", "notation scientifique", "puissance de dix", "exposant", "ti", "casio", "numworks", "radians", "degrés", "émulateur", "statistiques", "moyenne", "écart-type"]},
        {"chapitre": "ou04", "rubrique": "Mesure", "avant": None,
         "titre": "Acquérir, calculer et modéliser avec LatisPro",
         "fichier": "animations/latispro.html",
         "description": "Six tutoriels pas à pas sur LatisPro, le logiciel des centrales Sysam : (1) acquisition temporelle de la charge d'un condensateur, feuille de calcul, tableur, modélisation et commentaire sur le graphe ; (2) mesure point par point au capteur de pression ; (3) signal périodique d'un GBF — durée et nombre de points, case Périodique, déclenchement, mode permanent, période au réticule ; (4) tableau de mesures saisi à la main, tracé et linéarisation (loi de Mariotte) ; (5) pointage vidéo d'un lancer, dérivée, vitesses, énergies et modèle parabolique ; (6) générateur intégré de la Sysam-SP5 (sorties SA1 et SA2, mode GBF).",
         "trouve": "Un modèle se choisit avant d'être calculé : on regarde la courbe, puis on demande au logiciel les paramètres.",
         "motscles": ["latispro", "latis pro", "sysam", "acquisition", "feuille de calcul", "pas a pas", "capteur de pression", "entree clavier", "courbe", "modelisation", "regression", "parametres", "gbf", "declenchement", "mode permanent", "reticule", "tableur", "linearisation", "pointage video", "derivee", "energie", "emission", "sortie analogique", "sa1", "generateur integre", "sysam-sp5"]},
        {"chapitre": "ou03", "rubrique": "Mesure", "avant": None,
         "titre": "Calculer, tracer et modéliser avec un tableur",
         "fichier": "animations/tableur.html",
         "description": "Un tutoriel pas à pas sur Excel : saisir un tableau de mesures, "
                        "écrire une formule et la recopier, tracer un nuage de points en partant "
                        "d'un graphique vide (Sélectionner des données, puis Ajouter la série : "
                        "nom, valeurs X, valeurs Y), puis "
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
               "tp01": "TP1", "tp02": "TP2", "tp04": "TP4", "tp05": "TP5", "tp06": "TP6", "tp07": "TP7", "adm01": "ADM1", "adm02": "ADM2", "adm03": "ADM3",
               "adm04": "ADM4", "adm05": "ADM5", "adm06": "ADM6", "adm07": "ADM7",
               "c03": "C3", "c04": "C4", "c05": "C5", "c06": "C6", "tp03": "TP3"}
