/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 12 — Machine à courant continu
   Le bilan vient de CRSA_ch12_bilan.tex, les cartes des \trou{} de
   CRSA_ch12_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "12",
 "cle": "ch12",
 "etiquette": "Chapitre 12",
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
   "expl": "Ω= 2πn/60 = 2π× 1500/60 = 157 rad/s. La réponse « 9425 rad/s » correspond à un oubli de la division par 60."
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
   "expl": "p_J = RI². La réponse « RI » confond puissance et tension."
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
   "expl": "Les rendements se multiplient : 0,90 × 0,80 = 0,72. La réponse « 85 % » serait la moyenne, qui n'a aucun sens physique ici. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que convertit un moteur à courant continu ? Grandeurs d'entrée et de sortie ?",
   "verso": "Énergie <b>électrique → mécanique</b>. Entrée : U et I. Sortie : couple <b>T<sub>u</sub></b> et vitesse <b>Ω</b>.",
   "origine": "Cours §1 Conversion réalisée"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rôle de l'inducteur et de l'induit ?",
   "verso": "<b>Inducteur</b> : crée le champ magnétique (souvent des aimants permanents).<br><b>Induit</b> : porte le courant utile.",
   "origine": "Cours §1 Inducteur et induit"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Modèle électrique de l'induit ? Que vaut E à l'arrêt ?",
   "verso": "<b>U = E + R I</b> (E force électromotrice). À l'arrêt, <b>E = 0</b>.",
   "origine": "Cours §2 Modèle de l'induit"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Les deux relations de couplage du moteur à courant continu ?",
   "verso": "<b>E = k Ω</b> et <b>T<sub>em</sub> = k I</b>, avec le même k. D'où <b>E I = T<sub>em</sub> Ω</b>.<br>Ω en rad/s : Ω = 2π n / 60.",
   "origine": "Cours §3 Relations de couplage"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Courant de démarrage d'un moteur à courant continu ? Comment l'éviter ?",
   "verso": "E = 0, donc <b>I<sub>d</sub> = U / R</b> (souvent &gt; 10 fois le nominal). On monte la tension <b>progressivement</b> (hacheur, α croissant).",
   "origine": "Cours §4 Le démarrage"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comparer le couple utile T<sub>u</sub> et le couple électromagnétique T<sub>em</sub>.",
   "verso": "<b>T<sub>u</sub> &lt; T<sub>em</sub></b> : une partie du couple sert à vaincre les frottements. T<sub>u</sub> = P<sub>u</sub>/Ω.",
   "origine": "Cours §5 Couple utile et électromagnétique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rendement typique d'un moteur à courant continu ?",
   "verso": "Autour de <b>90 %</b>. Une valeur très différente doit faire relire le calcul.",
   "origine": "Cours §5 Rendement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Forme de la caractéristique mécanique T(Ω) ? Qu'est-ce que le point de fonctionnement ?",
   "verso": "Une <b>droite descendante</b>. Le point de fonctionnement est l'<b>intersection</b> avec la caractéristique de la charge.",
   "origine": "Cours §6 Caractéristique mécanique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment régler la vitesse d'un moteur à courant continu ? l'inverser ?",
   "verso": "Régler : agir sur la <b>tension d'induit</b> (le courant est fixé par la charge).<br>Inverser : <b>permuter les bornes</b> de l'induit.",
   "origine": "Cours §6 Régler la vitesse"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Moteur à 90 % suivi d'un réducteur à 85 % : rendement global ?",
   "verso": "Les rendements se <b>multiplient</b> : 0,90 × 0,85 = <b>77 %</b>.",
   "origine": "Cours §7 Le réducteur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Points faibles du moteur à courant continu ?",
   "verso": "L'<b>usure des balais</b> et des <b>pertes au rotor</b> difficiles à évacuer. On lui préfère les machines alternatives.",
   "origine": "Cours §7 Ses limites"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>U = 48 V, I = 12 A, R = 0,25 Ω, n = 1500 tr/min. Comment trouver E, k et T<sub>em</sub> ?",
   "verso": "1. E = U − R I = 48 − 3 = <b>45 V</b>.<br>2. Ω = 2π × 1500/60 = <b>157 rad/s</b>.<br>3. k = E/Ω = <b>0,286 V·s/rad</b>.<br>4. T<sub>em</sub> = k I = <b>3,44 N·m</b>.",
   "origine": "Cours §3 Exemple de référence"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment établir le bilan des puissances d'un moteur à courant continu ?",
   "verso": "1. <b>P<sub>a</sub> = U I</b>.<br>2. Retirer <b>p<sub>J</sub> = R I²</b> → P<sub>em</sub>.<br>3. Contrôler <b>P<sub>em</sub> = E I</b>.<br>4. Retirer pertes fer et mécaniques → <b>P<sub>u</sub></b>.<br>5. <b>η = P<sub>u</sub>/P<sub>a</sub></b> ; T<sub>u</sub> = P<sub>u</sub>/Ω.",
   "origine": "Cours §5 Méthode — Bilan des puissances"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment déterminer le point de fonctionnement moteur + charge ?",
   "verso": "1. Tracer la caractéristique du <b>moteur</b> T(Ω).<br>2. Tracer celle de la <b>charge</b> sur le même graphe.<br>3. Lire l'<b>intersection</b>.<br>4. Convertir : n = 60 Ω/2π.",
   "origine": "Cours §6 Méthode — Point de fonctionnement"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
