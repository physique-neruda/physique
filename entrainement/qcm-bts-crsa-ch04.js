/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 4 — Mécanique du solide
   Le bilan vient de CRSA_ch04_bilan.tex, les cartes des \trou{} de
   CRSA_ch04_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "4",
 "titre": "Mécanique du solide",
 "niveau": "BTS CRSA",
 "prerequis": [],
 "bilan": [
  {
   "q": "Un chariot avance à vitesse constante sur un sol horizontal. La somme des forces qui lui sont appliquées est :",
   "choix": [
    "dirigée vers l'avant",
    "nulle",
    "dirigée vers l'arrière",
    "égale à son poids"
   ],
   "bonne": 1,
   "expl": "Vitesse constante accélération nulle somme des forces nulle. La réponse a est le contresens central du chapitre."
  },
  {
   "q": "Le principe fondamental de la dynamique impose :",
   "choix": [
    "la vitesse du solide",
    "son accélération",
    "sa position",
    "son énergie"
   ],
   "bonne": 1,
   "expl": "Il relie les forces à l'accélération, pas à la vitesse."
  },
  {
   "q": "Une force perpendiculaire au déplacement a un travail :",
   "choix": [
    "positif",
    "négatif",
    "nul",
    "égal à F× d"
   ],
   "bonne": 2,
   "expl": "cos90 = 0. C'est le cas de la réaction du support sur un déplacement horizontal : une force de moins à compter dans le bilan."
  },
  {
   "q": "En rotation, la grandeur qui joue le rôle de la masse est :",
   "choix": [
    "le couple",
    "le moment d'inertie",
    "la vitesse angulaire",
    "le rayon"
   ],
   "bonne": 1,
   "expl": "Le moment d'inertie J, en kg·meter²."
  },
  {
   "q": "Le principe fondamental appliqué à un solide en rotation s'écrit :",
   "choix": [
    "M = J ω",
    "M = J ω",
    "F = J ω",
    "M = m a"
   ],
   "bonne": 1,
   "expl": "Avec ω l'accélération angulaire. La réponse a confondrait vitesse et accélération."
  },
  {
   "q": "Une vitesse de 1200 1/min vaut, en rad/s, environ :",
   "choix": [
    "20",
    "126",
    "1200",
    "7200"
   ],
   "bonne": 1,
   "expl": "1200 × 2π/60 = 125,7."
  },
  {
   "q": "L'énergie cinétique d'un solide en rotation vaut :",
   "choix": [
    "1/2Jω",
    "1/2Jω²",
    "Jω²",
    "1/2mv²"
   ],
   "bonne": 1,
   "expl": "Exactement transposée de 1/2mv²."
  },
  {
   "q": "Le théorème de l'énergie cinétique fait intervenir :",
   "choix": [
    "la durée du trajet",
    "la forme du trajet",
    "le travail des forces",
    "l'accélération"
   ],
   "bonne": 2,
   "expl": "Ni la durée, ni la forme du trajet n'interviennent — c'est ce qui le rend plus rapide que le principe fondamental pour ce type de question."
  },
  {
   "q": "Un chariot de 800 kg roule à 1,8 meter/s. Son énergie cinétique vaut :",
   "choix": [
    "720 J",
    "1296 J",
    "1440 J",
    "2592 J"
   ],
   "bonne": 1,
   "expl": "0,5×800×1,8² = 1296. La réponse c oublie le carré, la a oublie le facteur 1/2 et le carré."
  },
  {
   "q": "Si la vitesse d'un chariot double, sa distance d'arrêt, à force de freinage constante :",
   "choix": [
    "double",
    "est quadruplée",
    "ne change pas",
    "est divisée par deux"
   ],
   "bonne": 1,
   "expl": "L'énergie cinétique varie comme le carré de la vitesse. C'est la raison des vitesses très basses imposées aux chariots en atelier."
  },
  {
   "q": "Le travail des forces de freinage d'un véhicule qui s'arrête est :",
   "choix": [
    "positif",
    "négatif",
    "nul",
    "égal à son énergie potentielle"
   ],
   "bonne": 1,
   "expl": "Ces forces s'opposent au déplacement : leur travail est résistant, donc négatif. Le signe fait partie de la réponse."
  },
  {
   "q": "On cherche la distance d'arrêt d'un chariot connaissant sa vitesse et la force de freinage. L'outil le plus direct est :",
   "choix": [
    "le principe fondamental",
    "le théorème de l'énergie cinétique",
    "la conservation de l'énergie mécanique",
    "le moment d'inertie"
   ],
   "bonne": 1,
   "expl": "La conservation de l'énergie mécanique est inutilisable ici : il y a des frottements, et l'énergie mécanique ne se conserve donc pas. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "retenir",
   "recto": "Le cas le plus utile — qu'y a-t-il à retenir ?",
   "verso": "Si le solide est <strong>immobile</strong> ou s'il se déplace à <strong>vitesse constante</strong>, alors a = 0 et donc F = 0. Ces deux situations conduisent à la même équation.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Tout se transpose — qu'y a-t-il à retenir ?",
   "verso": "En rotation, la masse devient le moment d'inertie J, l'accélération devient l'accélération angulaire ω, et la force devient le moment M = F× d. Le principe s'écrit alors M = J ω.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Le signe du travail — qu'y a-t-il à retenir ?",
   "verso": "Une force dans le sens du mouvement a un travail positif : elle est <em>motrice</em>. Une force opposée au mouvement a un travail négatif : elle est <em>résistante</em>. Une force perpendiculaire au déplacement a un travail nul.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "S'il y a des frottements, elle diminue, et la perte est exactement …….",
   "verso": "<strong>le travail des frottements</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Une force opposée au mouvement a un travail …… : elle est <em>résistante</em>.",
   "verso": "<strong>négatif</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Une force dans le sens du mouvement a un travail …… : elle est <em>motrice</em>.",
   "verso": "<strong>positif</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En rotation, la masse devient le moment d'inertie J, l'accélération devient ……, et la force devient le moment M = F× d.",
   "verso": "<strong>l'accélération angulaire ω</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En l'<strong>absence de frottement</strong>, l'énergie mécanique …… : ce que l'on perd en hauteur, on le gagne en vitesse.",
   "verso": "<strong>se conserve</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un chariot avance à vitesse constante sur un sol horizontal. La somme des forces qui lui sont appliquées est ……",
   "verso": "<strong>nulle</strong> — Vitesse constante accélération nulle somme des forces nulle. La réponse a est le contresens central du chapitre.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le principe fondamental de la dynamique impose ……",
   "verso": "<strong>son accélération</strong> — Il relie les forces à l'accélération, pas à la vitesse.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une force perpendiculaire au déplacement a un travail ……",
   "verso": "<strong>nul</strong> — cos90 = 0. C'est le cas de la réaction du support sur un déplacement horizontal : une force de moins à compter dans le bilan.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En rotation, la grandeur qui joue le rôle de la masse est ……",
   "verso": "<strong>le moment d'inertie</strong> — Le moment d'inertie J, en kg·meter².",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le principe fondamental appliqué à un solide en rotation s'écrit ……",
   "verso": "<strong>M = J ω</strong> — Avec ω l'accélération angulaire. La réponse a confondrait vitesse et accélération.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Une vitesse de 1200 1/min vaut, en rad/s, environ ……",
   "verso": "<strong>126</strong> — 1200 × 2π/60 = 125,7.",
   "origine": "bilan"
  }
 ]
};
