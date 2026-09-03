/* ====================================================================
   animations.js — LE CATALOGUE

   C'est le SEUL fichier à modifier pour ajouter une animation au site.
   Pour en ajouter une :
     1. déposer le fichier .html dans le même dossier que celui-ci ;
     2. recopier un bloc ci-dessous entre deux accolades { } ;
     3. changer les valeurs, sans oublier la virgule après l'accolade
        fermante.
   Rien d'autre. La page d'accueil se met à jour toute seule.

   Champs :
     fichier     nom exact du fichier .html, avec l'extension
     titre       le nom court, celui qui s'affiche en gros
     filiere     "BTS Électrotechnique", "1re STI2D", "BTS CRSA",
                 "BTS TSMA", "SNT" — l'orthographe sert de regroupement,
                 donc la garder identique d'une ligne à l'autre
     chapitre    "Cours 1 — ..." ou "TP 3 — ..." : sert de sous-titre
     activite    "Activité 2", "TP", "Démonstration"... ou "" si aucun
     description une ou deux phrases : ce que l'étudiant manipule
     trouve      ce que l'animation fait découvrir ; "" si ce n'est pas
                 une activité de découverte
     motscles    liste de mots pour la recherche (accents inutiles)
   ==================================================================== */

const ANIMATIONS = [

  {
    fichier: "calorimetre.html",
    titre: "Le chauffage",
    filiere: "BTS Électrotechnique",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    activite: "Activité 1",
    description: "Une résistance de puissance connue plonge dans un récipient. " +
      "Masse, matière, puissance et température de départ réglables ; la courbe " +
      "trace la température en fonction de l'énergie reçue, paliers de fusion et " +
      "de vaporisation compris.",
    trouve: "Q = m·c·Δθ et Q = m·L",
    motscles: ["calorimetre", "chaleur", "capacite thermique", "chaleur latente",
               "changement d'etat", "palier", "fusion", "vaporisation", "energie",
               "puissance", "thermique"]
  },

  {
    fichier: "rayonnement.html",
    titre: "Le rayonnement",
    filiere: "BTS Électrotechnique",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    activite: "Activité 2",
    description: "Une plaque chaude face à un capteur, sans aucun contact. " +
      "Température, surface et état de surface réglables. Une colonne d'essai " +
      "permet de chercher soi-même la puissance de T qui rend le rapport constant.",
    trouve: "P = ε·σ·S·T⁴ (loi de Stefan)",
    motscles: ["rayonnement", "stefan", "emissivite", "camera thermique",
               "thermographie", "kelvin", "infrarouge", "thermique"]
  },

  {
    fichier: "flux-thermique.html",
    titre: "Le flux à travers une paroi",
    filiere: "BTS Électrotechnique",
    chapitre: "Cours 1 — Énergie interne et transferts thermiques",
    activite: "Activité 3",
    description: "Une ou deux couches entre un local chauffé et l'extérieur. " +
      "Matériau, épaisseur, surface et températures réglables ; la température " +
      "à la jonction des deux couches est affichée.",
    trouve: "Φ = λ·S·Δθ / e, puis la résistance thermique",
    motscles: ["flux", "conduction", "fourier", "isolation", "resistance thermique",
               "paroi", "lambda", "conductivite", "armoire", "thermique"]
  }

];
