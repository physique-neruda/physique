/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 2 — Conversion et stockage de l'énergie
   Le bilan vient de CRSA_ch02_bilan.tex, les cartes des \trou{} de
   CRSA_ch02_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "2",
 "cle": "ch02",
 "etiquette": "Chapitre 2",
 "titre": "Conversion et stockage de l'énergie",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Des volts multipliés par des ampères-heures donnent :",
   "choix": [
    "une énergie",
    "une puissance",
    "une charge",
    "une intensité"
   ],
   "bonne": 0,
   "expl": "V × A·h = W·h, donc une énergie. C'est ainsi qu'on lit la capacité d'une batterie 12 V — 7,2 A·h : 86,4 W·h."
  },
  {
   "q": "Dans ½ C U², la tension passe de 12 V à 15 V. L'énergie stockée est multipliée par :",
   "choix": [
    "1,56",
    "1,25",
    "2,25",
    "1,00"
   ],
   "bonne": 0,
   "expl": "(15/12)² = 1,56. C'est le carré du rapport des tensions : le facteur 1,25 sur la tension devient 1,56 sur l'énergie."
  },
  {
   "q": "Convertir 86,4 W·h en joules :",
   "choix": [
    "3,11×10⁵ J",
    "3,11×10³ J",
    "2,40×10⁻² J",
    "3,11×10⁸ J"
   ],
   "bonne": 0,
   "expl": "86,4 × 3600 = 3,11×10⁵ J. Une heure vaut 3600 secondes, et 1 W·h = 3600 J."
  },
  {
   "q": "Le produit de deux nombres inférieurs à 1 est :",
   "choix": [
    "plus petit que chacun des deux",
    "compris entre les deux",
    "plus grand que chacun des deux",
    "égal à leur moyenne"
   ],
   "bonne": 0,
   "expl": "0,92 × 0,83 = 0,764, plus petit que 0,83. C'est pourquoi une chaîne de conversions ne peut que dégrader le rendement."
  },
  {
   "q": "Une grandeur passe de 7,2 à 6,0. La diminution vaut :",
   "choix": [
    "16,7 %",
    "12,0 %",
    "20,0 %",
    "83,3 %"
   ],
   "bonne": 0,
   "expl": "1,2/7,2 = 16,7 %. Toujours l'écart divisé par la valeur de départ."
  },
  {
   "q": "Un multimètre en position DC mesure :",
   "choix": [
    "la composante continue",
    "la valeur maximale",
    "la valeur efficace d'un signal alternatif",
    "la fréquence"
   ],
   "bonne": 0,
   "expl": "DC (direct current) mesure le continu. Sur un signal alternatif, il affiche la valeur moyenne — souvent zéro."
  }
 ],
 "bilan": [
  {
   "q": "Dans une centrale nucléaire comme dans une centrale à gaz, l'électricité est produite par :",
   "choix": [
    "une pile",
    "un alternateur entraîné par une turbine",
    "un panneau photovoltaïque",
    "un transformateur"
   ],
   "bonne": 1,
   "expl": "La source change, la fin de chaîne est la même : turbine puis alternateur."
  },
  {
   "q": "Parmi ces sources, laquelle est renouvelable ?",
   "choix": [
    "le gaz naturel",
    "l'uranium",
    "la géothermie",
    "le charbon"
   ],
   "bonne": 2,
   "expl": "Les trois autres sont des stocks finis. Non renouvelable ne veut pas dire polluant : le nucléaire n'émet presque pas de CO₂ et n'est pas renouvelable."
  },
  {
   "q": "Un convertisseur qui transforme de l'alternatif en continu s'appelle :",
   "choix": [
    "un onduleur",
    "un hacheur",
    "un redresseur",
    "un gradateur"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Un convertisseur qui transforme du continu en alternatif s'appelle :",
   "choix": [
    "un onduleur",
    "un hacheur",
    "un redresseur",
    "un gradateur"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Le transformateur :",
   "choix": [
    "transforme le continu en alternatif",
    "change la tension sans changer la nature du courant",
    "est un convertisseur statique continu-continu",
    "redresse la tension"
   ],
   "bonne": 1,
   "expl": "Alternatif en entrée, alternatif en sortie : il ne convertit pas, il transforme. C'est pourquoi il ne figure pas dans le tableau des quatre."
  },
  {
   "q": "Une batterie 24 V alimente un moteur asynchrone triphasé. Le convertisseur à interposer est :",
   "choix": [
    "un redresseur",
    "un hacheur",
    "un onduleur",
    "un gradateur"
   ],
   "bonne": 2,
   "expl": "Source continue, machine alternative : onduleur."
  },
  {
   "q": "Un variateur de vitesse pour moteur asynchrone alimenté par le réseau contient :",
   "choix": [
    "un seul onduleur",
    "un redresseur puis un onduleur",
    "un hacheur seul",
    "un transformateur seul"
   ],
   "bonne": 1,
   "expl": "Il redresse d'abord, puis ondule à la fréquence voulue — deux convertisseurs dans un seul boîtier."
  },
  {
   "q": "Une batterie porte l'indication 12 V — 40 A·h. L'énergie stockée vaut :",
   "choix": [
    "40 W·h",
    "480 W·h",
    "12 W·h",
    "on ne peut pas la calculer"
   ],
   "bonne": 1,
   "expl": "E = U × Q = 12 × 40 = 480 W·h. La réponse « on ne peut pas la calculer » est le piège inverse : on peut la calculer, à condition de ne pas oublier la tension."
  },
  {
   "q": "L'ampère-heure est une unité :",
   "choix": [
    "d'énergie",
    "de puissance",
    "de charge électrique",
    "de tension"
   ],
   "bonne": 2,
   "expl": "C'est une charge. Multipliée par une tension, elle donne une énergie."
  },
  {
   "q": "Un condensateur de 4,7 F chargé sous 12 V stocke une énergie de :",
   "choix": [
    "56 J",
    "338 J",
    "677 J",
    "29 J"
   ],
   "bonne": 1,
   "expl": "1/2CU² = 0,5×4,7×144 = 338 J. La réponse « 677 J », 677 J, est l'énergie fournie par la source pendant la charge : la moitié part en chaleur dans la résistance."
  },
  {
   "q": "Un stockage dont le rendement vaut 90 % à la charge et 90 % à la décharge a un rendement de cycle de :",
   "choix": [
    "90 %",
    "180 %",
    "81 %",
    "45 %"
   ],
   "bonne": 2,
   "expl": "0,90×0,90 = 0,81. Les pertes comptent deux fois."
  },
  {
   "q": "On choisit un supercondensateur plutôt qu'une batterie lorsqu'on a besoin :",
   "choix": [
    "d'une grande autonomie",
    "d'un pic de puissance très bref",
    "de stocker beaucoup d'énergie",
    "d'un encombrement réduit"
   ],
   "bonne": 1,
   "expl": "Il stocke quarante fois moins qu'une pile bâton, mais il rend son énergie en une fraction de seconde. Le stockage se choisit sur l'usage, pas sur la quantité d'énergie. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelle est la fin de chaîne commune à presque toutes les centrales ?",
   "verso": "La source fait tourner une <b>turbine</b>, qui entraîne un <b>alternateur</b> (conversion mécanique → électrique).",
   "origine": "Cours §1 Produire l'énergie électrique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quels moyens produisent l'électricité sans pièce en mouvement ?",
   "verso": "Le <b>photovoltaïque</b> et les <b>piles</b> (dont la pile à combustible).",
   "origine": "Cours §1 Produire l'énergie électrique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Conversions successives dans une éolienne, du vent au réseau ?",
   "verso": "Énergie <b>cinétique</b> du vent → énergie <b>mécanique</b> de rotation (pales, arbre) → énergie <b>électrique</b> (alternateur).",
   "origine": "Cours §1 Une éolienne"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'un convertisseur statique ?",
   "verso": "Un appareil <b>sans pièce en mouvement</b> qui met en forme l'énergie électrique à l'aide de composants commandés.",
   "origine": "Cours §2 Les convertisseurs statiques"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Nommer le convertisseur : AC → DC ; DC → AC ; DC → DC ; AC → AC.",
   "verso": "AC → DC : <b>redresseur</b><br>DC → AC : <b>onduleur</b><br>DC → DC : <b>hacheur</b><br>AC → AC : <b>gradateur</b>",
   "origine": "Cours §2 Les quatre noms"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Redresseur et gradateur partent tous deux du réseau. Qu'est-ce qui les distingue ?",
   "verso": "Redresseur : courant de <b>sens constant</b> (valeur moyenne non nulle), pour un moteur à courant continu ou une batterie.<br>Gradateur : <b>reste alternatif à 50 Hz</b>, découpe les alternances pour régler la puissance.",
   "origine": "Cours §2 Ne pas les confondre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Onduleur et gradateur fournissent de l'alternatif. Qu'est-ce qui les distingue ?",
   "verso": "Gradateur : part du réseau et garde ses <b>50 Hz</b>.<br>Onduleur : part d'une source <b>continue</b> et fabrique l'alternatif à la <b>fréquence voulue</b> (d'où son rôle dans un variateur).",
   "origine": "Cours §2 Ne pas les confondre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Hacheur : que règle le rapport cyclique α ?",
   "verso": "La valeur moyenne de la tension de sortie : <b>⟨u⟩ = α E</b>, donc la vitesse d'un moteur à courant continu.",
   "origine": "Cours §2 Le hacheur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi le transformateur n'est-il pas un convertisseur statique ?",
   "verso": "Il reçoit et rend de l'<b>alternatif</b> : il ne change pas la <b>nature</b> du courant, seulement la <b>valeur</b> de la tension.",
   "origine": "Cours §2 Le transformateur n'en fait pas partie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que contient le variateur de vitesse d'un moteur asynchrone alimenté par le réseau ?",
   "verso": "<b>Deux convertisseurs</b> : un <b>redresseur</b> puis un <b>onduleur</b>. Changer la fréquence, c'est changer la vitesse.",
   "origine": "Cours §2 Variateur de vitesse"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Citer les convertisseurs électromécaniques. Comment appelle-t-on la machine qui fonctionne dans l'autre sens ?",
   "verso": "Moteur à <b>courant continu</b>, moteur <b>asynchrone</b>, moteur <b>synchrone</b> : électrique → mécanique.<br>Mécanique → électrique : <b>alternateur</b> (ou génératrice).",
   "origine": "Cours §3 Convertisseurs électromécaniques"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sous quelles formes stocke-t-on l'énergie électrique ?",
   "verso": "On la convertit en énergie <b>chimique</b> (batterie), <b>électrostatique</b> (condensateur), <b>mécanique</b> (volant), <b>hydraulique</b> (STEP), <b>électromagnétique</b> ou <b>thermique</b>, puis on refait le chemin inverse.",
   "origine": "Cours §5 On ne stocke pas l'électricité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que représente l'indication « 40 Ah » d'une batterie ? Comment obtenir son énergie ?",
   "verso": "Une <b>charge Q</b>, pas une énergie.<br><b>E = U × Q</b> : 24 V × 40 Ah = <b>960 Wh</b>.",
   "origine": "Cours §5 L'ampère-heure n'est pas une énergie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énergie stockée par un condensateur de capacité C chargé sous U ?",
   "verso": "<b>E = ½ C U²</b> (C en F, U en V, E en J). L'énergie varie comme le <b>carré</b> de la tension.",
   "origine": "Cours §5 Stocker l'énergie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi les pertes d'un stockage « comptent deux fois » ?",
   "verso": "Il y a <b>deux conversions</b> (charge puis décharge) : les rendements se <b>multiplient</b>. 90 % dans chaque sens → 0,90 × 0,90 = <b>81 %</b> sur le cycle.",
   "origine": "Cours §6 Rendement d'un cycle de stockage"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi choisir un supercondensateur plutôt qu'une batterie, alors qu'il stocke bien moins ?",
   "verso": "Pour la <b>vitesse</b> : il rend son énergie en une fraction de seconde. On choisit un stockage sur l'<b>usage</b> — autonomie (batterie) ou <b>pic de puissance</b> (supercondensateur).",
   "origine": "Cours §6 À l'oral"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment choisir le convertisseur entre une source et une machine ?",
   "verso": "1. <b>Source</b> : continue (batterie, PV) ou alternative (réseau) ?<br>2. <b>Machine</b> : MCC → continu ; asynchrone/synchrone → alternatif.<br>3. <b>Nommer</b> le convertisseur avec le tableau des quatre.<br>4. Vérifier s'il en faut <b>deux</b> (vitesse variable depuis le réseau : redresseur + onduleur).",
   "origine": "Cours §4 Méthode — Choisir un convertisseur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Chariot : batterie 24 V et moteur asynchrone triphasé. Quel convertisseur ?",
   "verso": "Source <b>continue</b>, machine <b>alternative</b> → un <b>onduleur</b>.",
   "origine": "Cours §4 Méthode — Choisir un convertisseur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Batterie 24 V, 40 Ah, récepteur de 240 W. Comment trouver l'énergie et l'autonomie ?",
   "verso": "1. E = U × Q = 24 × 40 = <b>960 Wh</b> (× 3600 → 3,46 × 10<sup>6</sup> J).<br>2. Autonomie : Δt = E / P = 960 / 240 = <b>4,0 h</b>.",
   "origine": "Cours §5 Lire une plaque de batterie"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer l'énergie récupérée après un cycle de stockage ?",
   "verso": "1. Rendement du cycle : η<sub>cycle</sub> = η<sub>charge</sub> × η<sub>décharge</sub>.<br>2. E<sub>restituée</sub> = η<sub>cycle</sub> × E<sub>fournie à la charge</sub>.<br>3. Contrôle : E<sub>restituée</sub> &lt; E<sub>fournie</sub>.",
   "origine": "Cours §6 Rendement d'un cycle"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
