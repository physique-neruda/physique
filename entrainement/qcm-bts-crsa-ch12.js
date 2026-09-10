/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 12 — Machine à courant continu
   Le bilan vient de CRSA_ch12_bilan.tex, les cartes des \trou{} de
   CRSA_ch12_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "12",
 "titre": "Machine à courant continu",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Convertir 1500 tr/min en rad/s :",
   "choix": [
    "157 rad/s",
    "25,0 rad/s",
    "9425 rad/s",
    "94,2 rad/s"
   ],
   "bonne": 0,
   "expl": "1500 × 2π/60 = 157 rad/s. Un tour vaut 2π radians, une minute vaut 60 s."
  },
  {
   "q": "Convertir 157 rad/s en tours par minute :",
   "choix": [
    "1500 tr/min",
    "9425 tr/min",
    "2,62 tr/min",
    "26,2 tr/min"
   ],
   "bonne": 0,
   "expl": "157 × 60 / 2π = 1500 tr/min. Le chemin inverse du précédent."
  },
  {
   "q": "Une puissance de 520 W est transmise à un arbre tournant à 157 rad/s. Le moment du couple vaut :",
   "choix": [
    "3,31 N·m",
    "81 640 N·m",
    "0,302 N·m",
    "33,1 N·m"
   ],
   "bonne": 0,
   "expl": "P = T Ω donc T = 520/157 = 3,31 N·m. La vitesse angulaire doit être en rad/s, jamais en tr/min."
  },
  {
   "q": "Un système absorbe 576 W et en restitue 520 W. Son rendement vaut :",
   "choix": [
    "90,3 %",
    "110,8 %",
    "9,72 %",
    "56,0 %"
   ],
   "bonne": 0,
   "expl": "520/576 = 90,3 %. Les 56 W manquants sont partis en chaleur."
  },
  {
   "q": "Deux éléments se suivent, de rendements 90 % et 85 %. Le rendement de l'ensemble vaut :",
   "choix": [
    "76,5 %",
    "87,5 %",
    "175 %",
    "5,0 %"
   ],
   "bonne": 0,
   "expl": "0,90 × 0,85 = 0,765. Les rendements se multiplient, ils ne s'additionnent ni ne se moyennent."
  },
  {
   "q": "La puissance dissipée par effet Joule dans 0,25 Ω parcourue par 12 A vaut :",
   "choix": [
    "36 W",
    "3,0 W",
    "48 W",
    "72 W"
   ],
   "bonne": 0,
   "expl": "P = R I² = 0,25 × 144 = 36 W. C'est le carré de l'intensité, pas l'intensité."
  }
 ],
 "bilan": [
  {
   "q": "Dans un moteur à courant continu, le circuit parcouru par le courant utile s'appelle :",
   "choix": [
    "l'inducteur",
    "l'induit",
    "le collecteur",
    "la carcasse"
   ],
   "bonne": 1,
   "expl": "L'induit est le rotor, parcouru par le courant utile. L'inducteur, lui, ne sert qu'à créer le champ — et dans les sujets, c'est souvent un simple aimant permanent."
  },
  {
   "q": "Le modèle électrique de l'induit en régime permanent s'écrit :",
   "choix": [
    "U = E - RI",
    "U = E + RI",
    "U = RI",
    "E = U + RI"
   ],
   "bonne": 1,
   "expl": "C'est la loi des mailles : la tension appliquée se répartit entre la force électromotrice et la chute ohmique."
  },
  {
   "q": "La force électromotrice d'un moteur à courant continu :",
   "choix": [
    "est constante quelle que soit la vitesse",
    "est proportionnelle au courant",
    "est proportionnelle à la vitesse de rotation",
    "est nulle en marche normale"
   ],
   "bonne": 2,
   "expl": "E = kΩ. C'est ce qui explique qu'elle soit nulle à l'arrêt, et donc tout le problème du démarrage."
  },
  {
   "q": "Le moment du couple électromagnétique est proportionnel :",
   "choix": [
    "à la tension",
    "à la vitesse",
    "au courant d'induit",
    "à la puissance absorbée"
   ],
   "bonne": 2,
   "expl": "T_em = kI. Le courant est l'image directe du couple : c'est pourquoi on surveille le courant pour protéger un entraînement."
  },
  {
   "q": "Un moteur tourne à 1500 1/min. Sa vitesse angulaire vaut :",
   "choix": [
    "25 rad/s",
    "157 rad/s",
    "1500 rad/s",
    "9425 rad/s"
   ],
   "bonne": 1,
   "expl": "Ω= 2πn/60 = 2π× 1500/60 = 157 rad/s. La réponse d correspond à un oubli de la division par 60."
  },
  {
   "q": "Au démarrage, le courant d'un moteur à courant continu vaut :",
   "choix": [
    "zéro",
    "le courant nominal",
    "U/R, souvent bien plus que le nominal",
    "E/R"
   ],
   "bonne": 2,
   "expl": "À l'arrêt E = 0, il ne reste que R pour limiter le courant. Pour le moteur de référence du chapitre, cela fait 16 fois le courant nominal."
  },
  {
   "q": "Les pertes par effet Joule dans l'induit valent :",
   "choix": [
    "UI",
    "EI",
    "RI",
    "RI²"
   ],
   "bonne": 3,
   "expl": "p_J = RI². La réponse c confond puissance et tension."
  },
  {
   "q": "La puissance électromagnétique peut se calculer par :",
   "choix": [
    "UI",
    "EI",
    "RI²",
    "T_u Ω"
   ],
   "bonne": 1,
   "expl": "P_em = EI, ce qui vaut aussi T_emΩ. Le a est la puissance absorbée et le d la puissance utile — attention, T_u et non T_em."
  },
  {
   "q": "Le rendement d'un moteur à courant continu est de l'ordre de :",
   "choix": [
    "50 %",
    "70 %",
    "90 %",
    "100 %"
   ],
   "bonne": 2,
   "expl": "Environ 90 %, valeur que le document du sujet 2021 confirme."
  },
  {
   "q": "La caractéristique mécanique T = f(Ω) d'un moteur à courant continu est :",
   "choix": [
    "une droite croissante",
    "une droite descendante",
    "une horizontale",
    "une parabole"
   ],
   "bonne": 1,
   "expl": "Une droite descendante : plus on demande de couple, plus la vitesse baisse."
  },
  {
   "q": "Pour régler la vitesse d'un moteur à courant continu, on agit sur :",
   "choix": [
    "la résistance de l'induit",
    "la tension d'induit",
    "le nombre de balais",
    "la fréquence"
   ],
   "bonne": 1,
   "expl": "La vitesse suit la tension d'induit. C'est pour cela qu'un hacheur ou un redresseur commandé suffit à faire un variateur."
  },
  {
   "q": "Un moteur de rendement 90 % est suivi d'un réducteur de rendement 80 %. Le rendement de l'ensemble vaut :",
   "choix": [
    "85 %",
    "72 %",
    "170 %",
    "10 %"
   ],
   "bonne": 1,
   "expl": "Les rendements se multiplient : 0,90 × 0,80 = 0,72. La réponse a serait la moyenne, qui n'a aucun sens physique ici. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Conversion réalisée » ?",
   "verso": "Un moteur à courant continu convertit de l'énergie électrique en énergie mécanique. Ses grandeurs d'entrée sont la tension U et le courant I ; ses grandeurs de sortie sont le couple T_u et la vitesse de rotation Ω.",
   "origine": "definition du cours"
  },
  {
   "type": "trou",
   "recto": "Le point faible du moteur à courant continu, ce sont …….",
   "rep": "les balais, qui s'usent",
   "verso": "<strong>les balais, qui s'usent</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Au démarrage, Ω= 0 donc E = 0, et le courant ne vaut plus que …….",
   "rep": "I_d = U/R",
   "verso": "<strong>I_d = U/R</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Pour régler la vitesse d'un moteur à courant continu, on agit sur …….",
   "rep": "la tension d'induit",
   "verso": "<strong>la tension d'induit</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Dans un moteur à courant continu, le circuit parcouru par le courant utile s'appelle ……",
   "rep": "l'induit",
   "verso": "<strong>l'induit</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le modèle électrique de l'induit en régime permanent s'écrit ……",
   "rep": "U = E + RI",
   "verso": "<strong>U = E + RI</strong> — C'est la loi des mailles : la tension appliquée se répartit entre la force électromotrice et la chute ohmique.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La force électromotrice d'un moteur à courant continu ……",
   "rep": "est proportionnelle à la vitesse de rotation",
   "verso": "<strong>est proportionnelle à la vitesse de rotation</strong> — E = kΩ. C'est ce qui explique qu'elle soit nulle à l'arrêt, et donc tout le problème du démarrage.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le moment du couple électromagnétique est proportionnel ……",
   "rep": "au courant d'induit",
   "verso": "<strong>au courant d'induit</strong> — T_em = kI. Le courant est l'image directe du couple : c'est pourquoi on surveille le courant pour protéger un entraînement.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un moteur tourne à 1500 1/min. Sa vitesse angulaire vaut ……",
   "rep": "157 rad/s",
   "verso": "<strong>157 rad/s</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Au démarrage, le courant d'un moteur à courant continu vaut ……",
   "rep": "U/R, souvent bien plus que le nominal",
   "verso": "<strong>U/R, souvent bien plus que le nominal</strong> — À l'arrêt E = 0, il ne reste que R pour limiter le courant. Pour le moteur de référence du chapitre, cela fait 16 fois le courant nominal.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Les pertes par effet Joule dans l'induit valent ……",
   "rep": "RI²",
   "verso": "<strong>RI²</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La puissance électromagnétique peut se calculer par ……",
   "rep": "EI",
   "verso": "<strong>EI</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le rendement d'un moteur à courant continu est de l'ordre de ……",
   "rep": "90 %",
   "verso": "<strong>90 %</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La caractéristique mécanique T = f(Ω) d'un moteur à courant continu est ……",
   "rep": "une droite descendante",
   "verso": "<strong>une droite descendante</strong>",
   "origine": "bilan"
  }
 ]
};
