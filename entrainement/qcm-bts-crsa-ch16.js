/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 16 — Conditionnement du signal
   Le bilan vient de CRSA_ch16_bilan.tex, les cartes des \trou{} de
   CRSA_ch16_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "16",
 "cle": "ch16",
 "etiquette": "Chapitre 16",
 "titre": "Conditionnement du signal",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Deux résistances R₁ et R₂ en série sous une tension E. La tension aux bornes de R₂ vaut :",
   "choix": [
    "E × R₂/(R₁ + R₂)",
    "E × R₁/(R₁ + R₂)",
    "E × (R₁ + R₂)/R₂",
    "E × R₂/R₁"
   ],
   "bonne": 0,
   "expl": "C'est le diviseur de tension : au numérateur, la résistance dont on cherche la tension ; au dénominateur, la somme."
  },
  {
   "q": "Application : E = 12 V, R₁ = 2,0 kΩ, R₂ = 4,0 kΩ. La tension aux bornes de R₂ vaut :",
   "choix": [
    "8,0 V",
    "4,0 V",
    "6,0 V",
    "12 V"
   ],
   "bonne": 0,
   "expl": "12 × 4,0/6,0 = 8,0 V. Les kilohms n'ont pas besoin d'être convertis : ils se simplifient dans le rapport."
  },
  {
   "q": "Dans ce montage, la tension aux bornes de R₂ peut-elle dépasser 12 V ?",
   "choix": [
    "Non, jamais",
    "Oui, si R₂ est très grande",
    "Oui, si R₁ est très petite",
    "Oui, si le courant est fort"
   ],
   "bonne": 0,
   "expl": "Le rapport R₂/(R₁+R₂) est toujours inférieur à 1 : un diviseur divise, il n'amplifie jamais."
  },
  {
   "q": "Une droite passe par (−0,20 ; +8,0) et (+0,20 ; −8,0). Sa pente vaut :",
   "choix": [
    "−40",
    "+40",
    "−16",
    "−0,025"
   ],
   "bonne": 0,
   "expl": "(−8,0 − 8,0)/(0,20 + 0,20) = −40. Elle est décroissante : la pente est négative."
  },
  {
   "q": "Une Pt100 suit R = 100 (1 + 3,85×10⁻³ θ). À 50 °C, sa résistance vaut :",
   "choix": [
    "119,3 Ω",
    "123,1 Ω",
    "138,5 Ω",
    "150 Ω"
   ],
   "bonne": 0,
   "expl": "100 × (1 + 0,1925) = 119,3 Ω."
  },
  {
   "q": "Un rapport de deux tensions :",
   "choix": [
    "n'a pas d'unité",
    "s'exprime en volts",
    "s'exprime en volts carrés",
    "s'exprime en ohms"
   ],
   "bonne": 0,
   "expl": "Les volts se simplifient. C'est pour cela qu'un gain s'exprime par un nombre, ou en décibels."
  }
 ],
 "bilan": [
  {
   "q": "Un capteur passif délivre une résistance. Le rôle du diviseur de tension est de :",
   "choix": [
    "la transformer en tension",
    "l'amplifier",
    "la comparer à un seuil",
    "la filtrer"
   ],
   "bonne": 0,
   "expl": "C'est la fonction même du conditionnement : tout ce qui suit le capteur — amplificateur, convertisseur, automate — travaille sur des tensions."
  },
  {
   "q": "Dans un diviseur R₁--R₂ alimenté sous E, la tension aux bornes de R₂ vaut :",
   "choix": [
    "E R₁/(R₁+R₂)",
    "E R₂/R₁",
    "E (R₁+R₂)/R₂",
    "E R₂/(R₁+R₂)"
   ],
   "bonne": 3,
   "expl": "La tension prélevée est proportionnelle à la résistance à ses bornes, divisée par la résistance totale. La réponse « E R₁/(R₁+R₂) » est le piège : elle inverse le numérateur."
  },
  {
   "q": "Cette tension peut-elle dépasser E ?",
   "choix": [
    "oui, si R₂ > R₁",
    "non, jamais",
    "oui, si R₁ est très petite",
    "oui, à la mise sous tension"
   ],
   "bonne": 1,
   "expl": "Jamais. La fraction R₂/(R₁+R₂) est toujours inférieure à 1 : la tension prélevée est une part de E. C'est le contrôle de vraisemblance à faire systématiquement."
  },
  {
   "q": "Un pont de Wheatstone est essentiellement :",
   "choix": [
    "un amplificateur à quatre entrées",
    "un filtre passe-bas",
    "la différence de deux diviseurs de tension",
    "un comparateur à deux seuils"
   ],
   "bonne": 2,
   "expl": "Deux diviseurs côte à côte dont on mesure la différence des points milieux. C'est de là que vient tout son intérêt : les deux branches produisent le même décalage, qui disparaît dans la différence."
  },
  {
   "q": "Un pont est dit équilibré lorsque :",
   "choix": [
    "ses quatre résistances sont égales",
    "son courant d'alimentation est nul",
    "sa tension de sortie est nulle",
    "sa sensibilité est maximale"
   ],
   "bonne": 2,
   "expl": "Sa tension de sortie est nulle. La réponse « ses quatre résistances sont égales » décrit un cas particulier d'équilibre, pas sa définition — un pont peut être équilibré avec des résistances différentes, pourvu que les deux rapports soient égaux."
  },
  {
   "q": "On choisit un pont plutôt qu'un diviseur lorsque :",
   "choix": [
    "la variation du capteur est très faible",
    "le capteur est actif",
    "la tension d'alimentation est élevée",
    "le signal est alternatif"
   ],
   "bonne": 0,
   "expl": "Quand la variation est minuscule — une jauge varie d'un millième — le décalage d'un diviseur écraserait le signal. Le pont part de zéro, et toute la dynamique sert à la seule variation utile."
  },
  {
   "q": "Le coefficient d'amplification se lit sur la caractéristique de transfert comme :",
   "choix": [
    "l'ordonnée à l'origine",
    "la pente de la partie linéaire",
    "la largeur des paliers",
    "la valeur de saturation"
   ],
   "bonne": 1,
   "expl": "A = Δu_s / Δu_e : c'est la pente, et elle ne se lit que sur la partie linéaire, jamais sur les paliers."
  },
  {
   "q": "L'unité du coefficient d'amplification est :",
   "choix": [
    "le volt",
    "le volt par volt",
    "l'ohm",
    "il n'en a pas"
   ],
   "bonne": 3,
   "expl": "Il n'en a pas : c'est un rapport de deux tensions, les volts se simplifient. La réponse « le volt par volt » est le piège de la fausse unité."
  },
  {
   "q": "Une caractéristique de transfert décroissante correspond à un amplificateur :",
   "choix": [
    "inverseur",
    "saturé",
    "non inverseur",
    "défectueux"
   ],
   "bonne": 0,
   "expl": "Quand l'entrée augmente, la sortie diminue : l'amplificateur est inverseur et son coefficient est négatif. C'est le cas du sujet 2019, avec A_v = -40."
  },
  {
   "q": "Un amplificateur saturé :",
   "choix": [
    "amplifie davantage",
    "consomme moins",
    "inverse le signe",
    "ne suit plus les variations de l'entrée"
   ],
   "bonne": 3,
   "expl": "Sa sortie reste bloquée quoi qu'il arrive en entrée : il ne mesure plus rien. C'est pourquoi un coefficient trop grand rend l'appareil aveugle en haut de l'étendue de mesure."
  },
  {
   "q": "La sortie d'un comparateur est un signal :",
   "choix": [
    "analogique",
    "numérique sur 8 bits",
    "logique",
    "sinusoïdal"
   ],
   "bonne": 2,
   "expl": "Deux valeurs seulement, sans état intermédiaire : c'est un signal logique, au sens du chapitre 15. Le comparateur ne mesure plus, il décide."
  },
  {
   "q": "Le comparateur à hystérésis se distingue du comparateur simple parce qu'il :",
   "choix": [
    "est plus rapide",
    "possède deux seuils de basculement",
    "amplifie le signal",
    "fonctionne sans alimentation"
   ],
   "bonne": 1,
   "expl": "Deux seuils : un pour basculer en montant, un autre pour retomber en descendant. Entre les deux, la sortie garde son état — ce qui supprime le battement quand le signal traîne au voisinage du seuil. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que le conditionnement ? Quels sont les trois problèmes qu'il règle ?",
   "verso": "L'ensemble des étages qui rendent exploitable la sortie brute d'un capteur. La sortie n'est <b>pas une tension</b> ; elle est <b>trop faible</b> ; il faut en tirer une <b>décision</b>. Un étage par problème.",
   "origine": "Introduction"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formule du diviseur de tension avec un capteur résistif R(θ) en série avec R<sub>1</sub> ?",
   "verso": "<b>u = E × R(θ) / (R<sub>1</sub> + R(θ))</b> (tension prise aux bornes du capteur). Contrôle : u &lt; E.",
   "origine": "Cours §1 Le diviseur de tension"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'un pont de Wheatstone ? Quand est-il équilibré ?",
   "verso": "La <b>différence de deux diviseurs de tension</b> : le décalage disparaît. <b>Équilibré</b> quand la tension de sortie est <b>nulle</b>.",
   "origine": "Cours §2 Le pont de Wheatstone"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quand choisir un pont plutôt qu'un diviseur ?",
   "verso": "Quand la variation est <b>minuscule</b> devant la valeur au repos (jauge, ≈ 1/1000) → <b>pont</b>. Variation de quelques dizaines de % (Pt100) → <b>diviseur</b>.",
   "origine": "Cours §2 Diviseur ou pont"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir le coefficient d'amplification A. Unité ? Signe pour un inverseur ?",
   "verso": "<b>A = Δu<sub>s</sub> / Δu<sub>e</sub></b>, pente de la partie linéaire, <b>sans unité</b>. Pente descendante → <b>inverseur</b>, A &lt; 0.",
   "origine": "Cours §3 L'amplification"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que la saturation d'un amplificateur ? Conséquence sur le choix de A ?",
   "verso": "Sa sortie reste <b>bloquée</b> quelle que soit l'entrée : il ne mesure plus rien. On choisit A pour que la pleine échelle du capteur arrive <b>juste avant</b> la saturation.",
   "origine": "Cours §3 La saturation"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que fait un comparateur simple ? Nature de sa sortie ?",
   "verso": "Il compare la tension d'entrée à un <b>seuil</b> et bascule. Sortie à <b>deux valeurs</b> : signal <b>logique</b>.",
   "origine": "Cours §4 Le comparateur simple"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'un comparateur à hystérésis (trigger de Schmitt) ?",
   "verso": "Un comparateur à <b>deux seuils</b> distincts (montée et descente). Entre les deux, la sortie <b>conserve son état</b>.",
   "origine": "Cours §5 Le comparateur à hystérésis"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelle est la chaîne de conditionnement type ?",
   "verso": "Capteur → <b>diviseur</b> → <b>soustracteur</b> → <b>amplificateur</b> → <b>comparateur</b>.",
   "origine": "Cours §6 La chaîne type"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment exploiter un diviseur de tension avec un capteur ?",
   "verso": "1. Repérer les deux résistances en série, identifier le <b>capteur</b>.<br>2. u = E × R<sub>capteur</sub> / R<sub>totale</sub>.<br>3. Calculer R du capteur à la valeur demandée (loi du capteur).<br>4. Vérifier <b>0 &lt; u &lt; E</b>.",
   "origine": "Cours §1 Méthode — Diviseur de tension"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment exploiter la caractéristique de transfert d'un amplificateur ?",
   "verso": "1. Repérer la <b>partie linéaire</b> et les <b>paliers de saturation</b>.<br>2. Pente sur deux points éloignés → A.<br>3. <b>Signe</b> : montante = non inverseur, descendante = inverseur.<br>4. Lire le <b>domaine d'utilisation</b> en entrée.",
   "origine": "Cours §3 Méthode — Caractéristique de transfert"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment justifier le choix d'un comparateur à hystérésis ?",
   "verso": "1. <b>Défaut</b> du simple : près du seuil, le bruit fait basculer plusieurs fois.<br>2. <b>Conséquence</b> : relais qui claque, usure, clignotement.<br>3. <b>Remède</b> : deux seuils, zone insensible au bruit.<br>4. <b>Compromis</b> : plus de seuil unique.",
   "origine": "Cours §5 Méthode — Justifier l'hystérésis"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
