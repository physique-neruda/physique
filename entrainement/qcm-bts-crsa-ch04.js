/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 4 — Mécanique du solide
   Le bilan vient de CRSA_ch04_bilan.tex, les cartes des \trou{} de
   CRSA_ch04_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "4",
 "cle": "ch04",
 "etiquette": "Chapitre 4",
 "titre": "Mécanique du solide",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Dans ½ m v², la vitesse passe de 1,8 à 3,6 m/s. L'énergie est multipliée par :",
   "choix": [
    "4",
    "2",
    "8",
    "16"
   ],
   "bonne": 0,
   "expl": "La vitesse double, l'énergie est au carré : ×4. C'est pour cela qu'un choc à 100 km/h est quatre fois plus violent qu'à 50."
  },
  {
   "q": "Convertir 1200 tr/min en rad/s :",
   "choix": [
    "125,7 rad/s",
    "20,00 rad/s",
    "7540 rad/s",
    "62,83 rad/s"
   ],
   "bonne": 0,
   "expl": "1200 × 2π / 60 = 125,7 rad/s."
  },
  {
   "q": "Combien vaut sin 5,0° ?",
   "choix": [
    "0,0872",
    "0,996",
    "−0,959",
    "5,00"
   ],
   "bonne": 0,
   "expl": "0,0872, à condition que la calculatrice soit en mode DEGRÉ. En mode radian on obtient −0,959 : c'est l'erreur numéro un de l'année."
  },
  {
   "q": "De d = ½ a t², on tire :",
   "choix": [
    "a = 2d/t²",
    "a = d/(2t²)",
    "a = 2d t²",
    "a = d t²/2"
   ],
   "bonne": 0,
   "expl": "Le ½ passe de l'autre côté en multipliant par 2, le t² descend au dénominateur."
  },
  {
   "q": "Une masse de 450 kg a pour poids (g = 9,81 N/kg) :",
   "choix": [
    "4415 N",
    "45,9 N",
    "441 N",
    "4,41 N"
   ],
   "bonne": 0,
   "expl": "P = m g = 450 × 9,81 = 4415 N. On multiplie par g, on ne divise pas."
  },
  {
   "q": "Calculer 4415 × 12 et donner le résultat en écriture scientifique :",
   "choix": [
    "5,30×10⁴",
    "5,30×10³",
    "3,68×10²",
    "5,30×10⁵"
   ],
   "bonne": 0,
   "expl": "52 980, soit 5,30×10⁴. Trois chiffres significatifs suffisent."
  }
 ],
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
   "expl": "Vitesse constante accélération nulle somme des forces nulle. La réponse « dirigée vers l'avant » est le contresens central du chapitre."
  },
  {
   "q": "Le principe fondamental de la dynamique impose :",
   "choix": [
    "la vitesse du solide",
    "son énergie",
    "sa position",
    "son accélération"
   ],
   "bonne": 3,
   "expl": "Il relie les forces à l'accélération, pas à la vitesse."
  },
  {
   "q": "Une force perpendiculaire au déplacement a un travail :",
   "choix": [
    "nul",
    "négatif",
    "positif",
    "égal à F× d"
   ],
   "bonne": 0,
   "expl": "cos90 = 0. C'est le cas de la réaction du support sur un déplacement horizontal : une force de moins à compter dans le bilan."
  },
  {
   "q": "En rotation, la grandeur qui joue le rôle de la masse est :",
   "choix": [
    "le couple",
    "la vitesse angulaire",
    "le moment d'inertie",
    "le rayon"
   ],
   "bonne": 2,
   "expl": "Le moment d'inertie J, en kg·meter²."
  },
  {
   "q": "Le principe fondamental appliqué à un solide en rotation s'écrit :",
   "choix": [
    "M = J ω",
    "M = m a",
    "F = J domega/dt",
    "M = J domega/dt"
   ],
   "bonne": 3,
   "expl": "Avec ω l'accélération angulaire. La réponse « M = J ω » confondrait vitesse et accélération."
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
    "1/2Jω²",
    "1/2Jω",
    "Jω²",
    "1/2mv²"
   ],
   "bonne": 0,
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
    "1440 J",
    "1296 J",
    "2592 J"
   ],
   "bonne": 2,
   "expl": "0,5×800×1,8² = 1296. La réponse « 1440 J » oublie le carré, la réponse « 720 J » oublie le facteur 1/2 et le carré."
  },
  {
   "q": "Si la vitesse d'un chariot double, sa distance d'arrêt, à force de freinage constante :",
   "choix": [
    "double",
    "est divisée par deux",
    "ne change pas",
    "est quadruplée"
   ],
   "bonne": 3,
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
    "le théorème de l'énergie cinétique",
    "le principe fondamental",
    "la conservation de l'énergie mécanique",
    "le moment d'inertie"
   ],
   "bonne": 0,
   "expl": "La conservation de l'énergie mécanique est inutilisable ici : il y a des frottements, et l'énergie mécanique ne se conserve donc pas. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Par quoi commence tout calcul de mécanique ? Comment savoir si une force existe ?",
   "verso": "Par le <b>bilan des forces</b>. Une force est toujours <b>exercée par un corps identifiable</b> ; « force d'inertie » ou « d'élan » n'existent pas.",
   "origine": "Cours §1 Le bilan des forces"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer le PFD. Que fixe la somme des forces ?",
   "verso": "<b>Σ F⃗ = m a⃗</b>. La somme des forces impose l'<b>accélération</b>, pas la vitesse.",
   "origine": "Cours §2 Principe fondamental de la dynamique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Solide immobile ou à vitesse constante : que vaut la somme des forces ?",
   "verso": "a = 0, donc <b>Σ F⃗ = 0⃗</b> : la <b>même équation</b> dans les deux cas.",
   "origine": "Cours §2 Le cas le plus utile"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi est-ce le démarrage qui dimensionne le moteur d'un chariot ?",
   "verso": "Au démarrage il faut <b>F = m a + f</b> (accélérer + vaincre les frottements) ; lancé, seulement f.",
   "origine": "Cours §2 Démarrer coûte plus cher"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>PFD en rotation ? Que deviennent masse, accélération et force ?",
   "verso": "<b>Σ M = J ω̇</b>. Masse → moment d'inertie <b>J</b> (toujours donné) ; accélération → <b>ω̇</b> ; force → moment <b>M = F × d</b>.",
   "origine": "Cours §3 Le cas de la rotation"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans quelle unité doit être ω ? Conversion depuis N (tr/min) ?",
   "verso": "En <b>rad/s</b> : <b>ω = N × 2π / 60</b>.",
   "origine": "Cours §3 Le cas de la rotation"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Travail d'une force : formule et signe ?",
   "verso": "<b>W = F d cos α</b>.<br>Positif : <b>moteur</b> ; négatif : <b>résistant</b> ; nul : force <b>perpendiculaire</b> au déplacement.",
   "origine": "Cours §4 Le travail"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Trois écritures de la puissance mécanique ?",
   "verso": "<b>P = W / Δt = F v = C ω</b>",
   "origine": "Cours §4 La puissance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer le théorème de l'énergie cinétique. Énergie cinétique en translation et en rotation ?",
   "verso": "<b>E<sub>c2</sub> − E<sub>c1</sub> = Σ W</b> (ignore la durée et la forme du trajet).<br>Translation : <b>½ m v²</b> ; rotation : <b>½ J ω²</b>.",
   "origine": "Cours §5 Théorème de l'énergie cinétique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Doubler la vitesse d'un chariot : effet sur la distance d'arrêt ?",
   "verso": "Elle est <b>multipliée par 4</b> (E<sub>c</sub> en v²).",
   "origine": "Cours §5 Le carré de la vitesse"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quand l'énergie mécanique se conserve-t-elle ? Sinon, que vaut sa perte ?",
   "verso": "<b>E<sub>m</sub> = E<sub>c</sub> + E<sub>p</sub></b> se conserve <b>sans frottement</b>. Sinon elle diminue, et la perte égale le <b>travail des frottements</b>.",
   "origine": "Cours §6 L'énergie mécanique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quel outil pour une accélération ? une distance ou une force ? Quand utiliser la conservation ?",
   "verso": "Accélération : <b>PFD</b>.<br>Distance ou force : <b>théorème de l'énergie cinétique</b>.<br>Conservation de E<sub>m</sub> : seulement <b>sans frottement</b>.",
   "origine": "Cours §7 Choisir le bon outil"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Chariot de 600 kg, frottements 180 N, accélération 0,40 m/s². Comment trouver la force de traction ?",
   "verso": "1. Bilan des forces, axe du mouvement.<br>2. PFD : F − f = m a.<br>3. F = m a + f = 600 × 0,40 + 180 = <b>420 N</b>.<br>4. Une fois lancé : F = f = 180 N.",
   "origine": "Cours §2 Démarrer coûte plus cher que rouler"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Chariot de 800 kg à 1,8 m/s freiné par 650 N. Comment trouver la distance d'arrêt ?",
   "verso": "1. E<sub>c</sub> départ = ½ × 800 × 1,8² = 1296 J ; arrivée : 0.<br>2. Théorème : 0 − 1296 = W.<br>3. W = −F d.<br>4. d = 1296/650 = <b>2,0 m</b>.",
   "origine": "Cours §5 Méthode — Distance de freinage"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment déterminer une force de frottement à partir d'une perte d'énergie mécanique ?",
   "verso": "1. Calculer E<sub>m</sub> au départ (m g h) et à l'arrivée (½ m v² mesurée).<br>2. Perte ΔE<sub>m</sub> = travail des frottements.<br>3. <b>f = |ΔE<sub>m</sub>| / d</b> (d = distance parcourue).",
   "origine": "Cours §6 Mesurer un frottement"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
