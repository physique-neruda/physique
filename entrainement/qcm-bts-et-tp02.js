/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · TP 2 — Dipôles passifs et actifs
   Le bilan vient de tp02_bilan.tex, les cartes des \trou{} de
   tp02_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "2",
 "titre": "Dipôles passifs et actifs",
 "niveau": "BTS ET",
 "prerequis": [
  {
   "q": "Un générateur de 12 V alimente R₁ = 150 Ω et R₂ = 250 Ω en série. Le courant vaut :",
   "choix": [
    "30 mA",
    "80 mA",
    "48 mA",
    "3,0 mA"
   ],
   "bonne": 0,
   "expl": "En série les résistances s'ajoutent : 400 Ω, et I = 12/400 = 0,030 A = 30 mA."
  },
  {
   "q": "Dans ce même circuit, la tension aux bornes de R₂ vaut :",
   "choix": [
    "7,5 V",
    "4,5 V",
    "12 V",
    "6,0 V"
   ],
   "bonne": 0,
   "expl": "250 × 0,030 = 7,5 V. Et 7,5 + 4,5 = 12 V : la loi des mailles sert de vérification."
  },
  {
   "q": "La résistance équivalente de 120 Ω et 180 Ω en parallèle vaut :",
   "choix": [
    "72 Ω",
    "300 Ω",
    "150 Ω",
    "216 Ω"
   ],
   "bonne": 0,
   "expl": "(120 × 180)/(120 + 180) = 72 Ω. En parallèle, le résultat est toujours plus petit que la plus petite des deux : 150 Ω ou 300 Ω sont impossibles."
  },
  {
   "q": "Une résistance de 47 Ω est parcourue par 0,35 A. La puissance dissipée vaut :",
   "choix": [
    "5,76 W",
    "16,5 W",
    "4,79 W",
    "0,38 W"
   ],
   "bonne": 0,
   "expl": "P = R I² = 47 × 0,1225 = 5,76 W. C'est le carré de l'intensité ; 16,5 V est la tension, pas la puissance."
  },
  {
   "q": "Convertir 470 µF en farads :",
   "choix": [
    "4,70×10⁻⁴ F",
    "4,70×10⁻⁶ F",
    "4,70×10⁻³ F",
    "4,70×10² F"
   ],
   "bonne": 0,
   "expl": "micro vaut 10⁻⁶ : 470 × 10⁻⁶ = 4,70×10⁻⁴ F. Le 470 apporte deux rangs."
  },
  {
   "q": "Une droite passe par (0 ; 9) et (3 ; 0). Son équation est :",
   "choix": [
    "y = −3x + 9",
    "y = 3x + 9",
    "y = −x/3 + 9",
    "y = −3x − 9"
   ],
   "bonne": 0,
   "expl": "L'ordonnée à l'origine vaut 9, et la pente (0 − 9)/(3 − 0) = −3. C'est la caractéristique d'un générateur : une pente négative."
  }
 ],
 "bilan": [
  {
   "q": "Un dipôle dont la caractéristique passe par l'origine est :",
   "choix": [
    "actif",
    "passif",
    "forcément ohmique"
   ],
   "bonne": 1,
   "expl": "Passer par l'origine signifie qu'à tension nulle le courant est nul : sans générateur, il ne se passe rien. La réponse c est trop forte — une diode et une lampe passent par l'origine sans être ohmiques."
  },
  {
   "q": "Sur la caractéristique I(U) d'un conducteur ohmique, la pente vaut :",
   "choix": [
    "R",
    "1/R",
    "R²"
   ],
   "bonne": 1,
   "expl": "I = U/R : la pente de I(U) vaut 1/R. Une caractéristique raide correspond donc à une faible résistance. Attention à l'axe choisi : sur un tracé U(I), la pente vaut bien R."
  },
  {
   "q": "Une lampe à filament, quand le courant augmente :",
   "choix": [
    "voit sa résistance augmenter",
    "voit sa résistance diminuer",
    "garde une résistance constante"
   ],
   "bonne": 0,
   "expl": "Le courant échauffe le filament, et la résistivité d'un métal croît avec la température. C'est ce qui explique la pointe de courant à l'allumage, quand le filament est encore froid."
  },
  {
   "q": "La charge stockée par un condensateur de 100 µF sous 50 V vaut :",
   "choix": [
    "5 mC",
    "2 µC",
    "0,5 C"
   ],
   "bonne": 0,
   "expl": "q = C u = 100×10⁻⁶× 50 = 5×10⁻³ C."
  },
  {
   "q": "En régime continu établi, un condensateur se comporte comme :",
   "choix": [
    "un fil",
    "un interrupteur ouvert",
    "une résistance égale à 1/C"
   ],
   "bonne": 1,
   "expl": "En régime établi, plus rien ne varie : du/dt = 0, donc i = C du/dt = 0. Aucun courant ne passe : c'est un interrupteur ouvert."
  },
  {
   "q": "En régime continu établi, une bobine idéale se comporte comme :",
   "choix": [
    "un fil",
    "un interrupteur ouvert",
    "un générateur"
   ],
   "bonne": 0,
   "expl": "Symétriquement, di/dt = 0 donne u = 0 : la bobine idéale ne présente aucune tension, c'est un fil. Une bobine réelle conserve toutefois la résistance de son fil."
  },
  {
   "q": "L'énergie stockée dans une bobine de 0,20 H parcourue par 4,0 A vaut :",
   "choix": [
    "0,80 J",
    "1,6 J",
    "3,2 J"
   ],
   "bonne": 1,
   "expl": "W = 1/2L i² = 1/2×0,20× 16 = 1,6 J. La réponse a oublie le facteur 1/2, la réponse c oublie de mettre le courant au carré."
  },
  {
   "q": "Dans le modèle U = E - r I, la grandeur E correspond à :",
   "choix": [
    "la tension en charge",
    "la tension à vide",
    "la tension de court-circuit"
   ],
   "bonne": 1,
   "expl": "E est la tension obtenue pour I = 0, donc à vide. C'est l'ordonnée à l'origine de la caractéristique."
  },
  {
   "q": "Une source de E = 24 V et r = 0,5 Ω débite 8 A. La tension à ses bornes vaut :",
   "choix": [
    "28 V",
    "20 V",
    "24 V"
   ],
   "bonne": 1,
   "expl": "U = 24 - 0,5× 8 = 20 V. La réponse a se trompe de signe : une source réelle délivre moins que sa f.é.m. dès qu'elle débite."
  },
  {
   "q": "Le point de fonctionnement d'un circuit générateur-récepteur est :",
   "choix": [
    "le maximum de la caractéristique du générateur",
    "l'intersection des deux caractéristiques",
    "le point où la puissance est nulle"
   ],
   "bonne": 1,
   "expl": "Les deux dipôles sont branchés l'un sur l'autre : ils ont nécessairement la même tension et le même courant. Le seul couple qui satisfasse les deux caractéristiques est leur intersection."
  },
  {
   "q": "Le rendement d'une source réelle vaut :",
   "choix": [
    "E/U",
    "U/E",
    "r/R"
   ],
   "bonne": 1,
   "expl": "η= (U I)/(E I) = U/E, toujours inférieur à 1 puisque U < E dès qu'un courant circule. Le rendement se lit donc sur deux tensions, sans mesurer le courant."
  },
  {
   "q": "Deux batteries de 12 V affichent la même tension à vide, mais l'une a une résistance interne trois fois plus grande. Un contrôle au voltmètre, batteries déconnectées :",
   "choix": [
    "distingue les deux",
    "ne distingue pas les deux",
    "affiche une tension plus basse pour la mauvaise"
   ],
   "bonne": 1,
   "expl": "Un contrôle à vide ne mesure que E, identique dans les deux cas. Il ne dit rien de r, qui est pourtant ce qui distingue une batterie saine d'une batterie fatiguée. Seule la mesure en charge révèle l'état réel — c'est tout l'objet de la situation d'évaluation de ce chapitre."
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Caractéristique » ?",
   "verso": "La caractéristique d'un dipôle est : Elle ne dépend que du dipôle, jamais du circuit dans lequel on le place.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Dipôle ohmique » ?",
   "verso": "Un dipôle est ohmique lorsque sa caractéristique est une droite passant par l'origine. Sa résistance R est alors constante, et U = R I.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Capacité » ?",
   "verso": "Un condensateur stocke une charge q proportionnelle à la tension à ses bornes : q = C u, où C est la capacité, en farads (F).",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Inductance » ?",
   "verso": "Une bobine s'oppose aux variations du courant qui la traverse. La tension à ses bornes vaut u = L di/dt, où L est l'inductance, en henrys (H).",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Passif ou actif — qu'y a-t-il à retenir ?",
   "verso": "Un dipôle est <strong>passif</strong> lorsque sa caractéristique passe par l'origine : sans générateur, il ne se passe rien. Il est <strong>actif</strong> lorsqu'elle ne passe pas par l'origine : il impose une tension même à courant nul.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Trois dipôles dont la résistance n'est pas constante — qu'y a-t-il à retenir ?",
   "verso": "La <strong>diode</strong> ne conduit que dans un sens, et seulement au-delà d'une tension de seuil de l'ordre de 0,6 V pour le silicium. La <strong>lampe à filament</strong> voit sa résistance augmenter avec la température, donc avec le courant.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Le réflexe du régime continu établi — qu'y a-t-il à retenir ?",
   "verso": "Une fois le régime établi en continu, plus rien ne varie. Le condensateur se comporte alors comme un interrupteur ouvert (i = 0) et la bobine comme un fil (u = 0).",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Un dipôle est ohmique lorsque sa caractéristique est …….",
   "rep": "une droite passant par l'origine",
   "verso": "<strong>une droite passant par l'origine</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Deux dipôles branchés l'un sur l'autre ont forcément …….",
   "rep": "la même tension et le même courant",
   "verso": "<strong>la même tension et le même courant</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La tension à ses bornes vaut ……, où L est l'inductance, en henrys (H).",
   "rep": "u = L di/dt",
   "verso": "<strong>u = L di/dt</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La source génère E I, en fournit U I à l'extérieur, et dissipe …… en interne.",
   "rep": "r I²",
   "verso": "<strong>r I²</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>lampe à filament</strong> voit sa résistance ……, donc avec le courant.",
   "rep": "augmenter avec la température",
   "verso": "<strong>augmenter avec la température</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un dipôle dont la caractéristique passe par l'origine est ……",
   "rep": "passif",
   "verso": "<strong>passif</strong> — Passer par l'origine signifie qu'à tension nulle le courant est nul : sans générateur, il ne se passe rien. La réponse c est trop forte — une diode et une lampe passent par l'origine sans être ohmiques.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Sur la caractéristique I(U) d'un conducteur ohmique, la pente vaut ……",
   "rep": "1/R",
   "verso": "<strong>1/R</strong>",
   "origine": "bilan"
  }
 ]
};
