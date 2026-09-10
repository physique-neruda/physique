/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 12 — Machine à courant continu
   Le bilan vient de CRSA_ch12_bilan.tex, les cartes des \trou{} de
   CRSA_ch12_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "12",
 "titre": "Machine à courant continu",
 "niveau": "BTS CRSA",
 "prerequis": [],
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
   "verso": "<strong>les balais, qui s'usent</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Au démarrage, Ω= 0 donc E = 0, et le courant ne vaut plus que …….",
   "verso": "<strong>I_d = U/R</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Pour régler la vitesse d'un moteur à courant continu, on agit sur …….",
   "verso": "<strong>la tension d'induit</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Dans un moteur à courant continu, le circuit parcouru par le courant utile s'appelle ……",
   "verso": "<strong>l'induit</strong> — L'induit est le rotor, parcouru par le courant utile. L'inducteur, lui, ne sert qu'à créer le champ — et dans les sujets, c'est souvent un simple aimant permanent.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le modèle électrique de l'induit en régime permanent s'écrit ……",
   "verso": "<strong>U = E + RI</strong> — C'est la loi des mailles : la tension appliquée se répartit entre la force électromotrice et la chute ohmique.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La force électromotrice d'un moteur à courant continu ……",
   "verso": "<strong>est proportionnelle à la vitesse de rotation</strong> — E = kΩ. C'est ce qui explique qu'elle soit nulle à l'arrêt, et donc tout le problème du démarrage.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le moment du couple électromagnétique est proportionnel ……",
   "verso": "<strong>au courant d'induit</strong> — T_em = kI. Le courant est l'image directe du couple : c'est pourquoi on surveille le courant pour protéger un entraînement.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un moteur tourne à 1500 1/min. Sa vitesse angulaire vaut ……",
   "verso": "<strong>157 rad/s</strong> — Ω= 2πn/60 = 2π× 1500/60 = 157 rad/s. La réponse d correspond à un oubli de la division par 60.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Au démarrage, le courant d'un moteur à courant continu vaut ……",
   "verso": "<strong>U/R, souvent bien plus que le nominal</strong> — À l'arrêt E = 0, il ne reste que R pour limiter le courant. Pour le moteur de référence du chapitre, cela fait 16 fois le courant nominal.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Les pertes par effet Joule dans l'induit valent ……",
   "verso": "<strong>RI²</strong> — p_J = RI². La réponse c confond puissance et tension.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La puissance électromagnétique peut se calculer par ……",
   "verso": "<strong>EI</strong> — P_em = EI, ce qui vaut aussi T_emΩ. Le a est la puissance absorbée et le d la puissance utile — attention, T_u et non T_em.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le rendement d'un moteur à courant continu est de l'ordre de ……",
   "verso": "<strong>90 %</strong> — Environ 90 %, valeur que le document du sujet 2021 confirme.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La caractéristique mécanique T = f(Ω) d'un moteur à courant continu est ……",
   "verso": "<strong>une droite descendante</strong> — Une droite descendante : plus on demande de couple, plus la vitesse baisse.",
   "origine": "bilan"
  }
 ]
};
