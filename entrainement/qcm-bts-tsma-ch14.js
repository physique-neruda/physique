/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 14 · Ondes acoustiques et protection
   Le bilan vient de ch14_bilan.tex, les cartes des \trou{} de
   ch14_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "14",
 "titre": "Ondes acoustiques et protection",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Combien vaut log(10⁹) ?",
   "choix": [
    "9",
    "90",
    "10⁹",
    "0,9"
   ],
   "bonne": 0,
   "expl": "Le logarithme décimal d'une puissance de 10 est son exposant."
  },
  {
   "q": "Combien vaut 10 × log(2), arrondi à l'unité ?",
   "choix": [
    "2 dB",
    "3 dB",
    "6 dB",
    "10 dB"
   ],
   "bonne": 1,
   "expl": "log 2 = 0,30, donc 3 dB. Doubler l'intensité ajoute 3 dB : c'est le repère à connaître par cœur."
  },
  {
   "q": "Combien vaut 10^8,5, en écriture scientifique ?",
   "choix": [
    "8,5×10⁸",
    "3,16×10⁸",
    "1,00×10⁸",
    "7,94×10⁷"
   ],
   "bonne": 1,
   "expl": "10^0,5 = 3,16, donc 10^8,5 = 3,16×10⁸."
  },
  {
   "q": "Une grandeur varie en 1/r². Si la distance double, elle est divisée par :",
   "choix": [
    "2",
    "4",
    "8",
    "√2"
   ],
   "bonne": 1,
   "expl": "La puissance se répartit sur une sphère dont la surface varie comme r²."
  },
  {
   "q": "Toujours en 1/r² : si la distance est multipliée par 4, la grandeur est divisée par :",
   "choix": [
    "4",
    "8",
    "16",
    "32"
   ],
   "bonne": 2,
   "expl": "Multiplier la distance par 4, c'est doubler deux fois : on divise deux fois par 4."
  },
  {
   "q": "Combien vaut log(4,0×10⁹) ?",
   "choix": [
    "9,0",
    "9,6",
    "36",
    "4,6"
   ],
   "bonne": 1,
   "expl": "log(4,0) + 9 = 0,60 + 9 = 9,6. C'est un calcul de niveau sonore."
  }
 ],
 "bilan": [
  {
   "q": "Dans une onde acoustique, ce qui se déplace est :",
   "choix": [
    "l'air, d'un point à un autre",
    "la perturbation de pression",
    "la source"
   ],
   "bonne": 1,
   "expl": "chaque tranche d'air ne fait qu'aller et venir sur place : c'est la perturbation qui voyage, pas la matière. Un son n'est pas un courant d'air. Et lors d'un changement de milieu, c'est la célérité qui change ; la fréquence, elle, est imposée par la source et ne change jamais — d'où une longueur d'onde qui suit. 3pt"
  },
  {
   "q": "Un son de 500 Hz passe de l'air à l'acier. Ce qui ne change pas est :",
   "choix": [
    "la célérité",
    "la longueur d'onde",
    "la fréquence"
   ],
   "bonne": 2,
   "expl": "chaque tranche d'air ne fait qu'aller et venir sur place : c'est la perturbation qui voyage, pas la matière. Un son n'est pas un courant d'air. Et lors d'un changement de milieu, c'est la célérité qui change ; la fréquence, elle, est imposée par la source et ne change jamais — d'où une longueur d'onde qui suit. 3pt"
  },
  {
   "q": "En champ direct, l'intensité acoustique à la distance r d'une source de puissance P vaut :",
   "choix": [
    "I = P/(4πr²)",
    "I = P/r",
    "I = P r²"
   ],
   "bonne": 0,
   "expl": "la puissance de la source se répartit sur la sphère de rayon r, dont la surface vaut 4πr². Retenir que la puissance caractérise la source seule, alors que l'intensité dépend aussi d'où l'on se place. 3pt"
  },
  {
   "q": "Ajouter 10 dB à un niveau, c'est multiplier l'intensité par :",
   "choix": [
    "10",
    "2",
    "100"
   ],
   "bonne": 0,
   "expl": "les deux seuls repères à connaître : +10 dB → × 10 et +3 dB → × 2, puisque 10log(2) = 3,0. Tout le reste s'en déduit. 3pt"
  },
  {
   "q": "Doubler l'intensité acoustique ajoute :",
   "choix": [
    "2 dB",
    "6 dB",
    "3 dB"
   ],
   "bonne": 2,
   "expl": "les deux seuls repères à connaître : +10 dB → × 10 et +3 dB → × 2, puisque 10log(2) = 3,0. Tout le reste s'en déduit. 3pt"
  },
  {
   "q": "Deux machines produisent chacune 85 dB(A) au même poste. Ensemble, elles produisent :",
   "choix": [
    "170 dB(A)",
    "88 dB(A)",
    "85 dB(A)"
   ],
   "bonne": 1,
   "expl": "deux sources identiques ajoutent trois décibels, jamais le double. La réponse « 170 dB(A) » additionne des logarithmes comme s'il s'agissait de nombres ordinaires : c'est l'erreur de fond du chapitre. 3pt"
  },
  {
   "q": "Une source A donne 88 dB et une source B 82 dB. Supprimer B fait gagner environ :",
   "choix": [
    "82 dB",
    "6 dB",
    "1 dB"
   ],
   "bonne": 2,
   "expl": "l'ensemble vaut 89,0 dB ; sans B il reste 88 dB, soit un décibel gagné, imperceptible. Sans A il resterait 82 dB, soit sept. On traite toujours la source dominante — et l'ordre des travaux en découle. 3pt"
  },
  {
   "q": "En champ direct, doubler la distance à la source fait perdre :",
   "choix": [
    "3 dB",
    "6 dB",
    "la moitié du niveau"
   ],
   "bonne": 1,
   "expl": "chaque doublement de distance retire 6 dB ; ce qui compte est le rapport des distances, jamais leur différence. De 8 à 9 m, le rapport ne vaut que 1,125, soit 1 dB à peine. Le même geste, très efficace près de la source, presque inutile loin d'elle. 3pt"
  },
  {
   "q": "Un opérateur est à 8 m d'une source. Reculer d'un mètre lui fait gagner :",
   "choix": [
    "environ 1 dB",
    "6 dB",
    "rien du tout"
   ],
   "bonne": 0,
   "expl": "chaque doublement de distance retire 6 dB ; ce qui compte est le rapport des distances, jamais leur différence. De 8 à 9 m, le rapport ne vaut que 1,125, soit 1 dB à peine. Le même geste, très efficace près de la source, presque inutile loin d'elle. 3pt"
  },
  {
   "q": "La pondération A sert à :",
   "choix": [
    "amplifier les mesures",
    "tenir compte de la sensibilité de l'oreille selon la fréquence",
    "convertir les watts en décibels"
   ],
   "bonne": 1,
   "expl": "le dB(A) mesure la même énergie que le décibel, corrigée de ce que l'oreille en perçoit : celle-ci est peu sensible aux graves. Toute la réglementation du bruit au travail est écrite en dB(A), jamais en décibels bruts. 3pt"
  },
  {
   "q": "Au poste de conduite, le sonomètre indique 92 dB(A). Avec un casque de SNR 34, le niveau perçu serait de 58 dB(A). Ce choix est :",
   "choix": [
    "discutable : l'opérateur n'entendrait plus les signaux d'alerte",
    "le meilleur, car c'est le plus atténuant",
    "interdit par la réglementation"
   ],
   "bonne": 0,
   "expl": "et c'est la question la plus utile de la feuille. Les trois protections « fonctionnent » au sens où elles ramènent sous 85 dB(A) ; le casque lourd descend pourtant beaucoup trop bas. À 58 dB(A), l'opérateur n'entend plus l'alarme de recul, ni le bruit anormal de sa machine, ni ses collègues : la surprotection crée un autre risque. On vise entre 70 et 80 dB(A) sous protection. 3pt"
  },
  {
   "q": "Dans la hiérarchie des actions contre le bruit, l'EPI vient :",
   "choix": [
    "en premier, car c'est le plus rapide",
    "à égalité avec les autres",
    "en dernier, après l'action à la source et sur le trajet"
   ],
   "bonne": 2,
   "expl": "la hiérarchie réglementaire est : à la source d'abord (silencieux, capotage, liaisons souples), sur le trajet ensuite (cabine isolée, écrans), et seulement en dernier recours sur l'opérateur. Un EPI ne protège que celui qui le porte, et seulement s'il le porte correctement — c'est la protection la moins fiable de toutes. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'une onde acoustique ? Quelle grandeur mesure-t-on ?",
   "verso": "La propagation d'une suite de <b>compressions et dilatations</b> dans un milieu matériel. On mesure la <b>surpression</b> (écart à la pression atmosphérique).",
   "origine": "Cours §1 Onde acoustique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Un son transporte-t-il de la matière ?",
   "verso": "<b>Non</b> : chaque tranche d'air va et vient sur place ; c'est la <b>perturbation</b> qui se déplace.",
   "origine": "Cours §1 Ce qui voyage"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation entre λ, c et f ? Que devient chacune quand le son change de milieu ?",
   "verso": "<b>λ = c / f</b>. <b>f ne change pas</b> (imposée par la source) ; <b>c change</b> (dépend du milieu), donc λ aussi.",
   "origine": "Cours §1 Longueur d'onde"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Célérité du son dans l'air, l'eau, l'acier ?",
   "verso": "Air <b>340 m/s</b> ; eau <b>1500 m/s</b> ; acier <b>5000 m/s</b> (plus le milieu est rigide, plus c'est rapide).",
   "origine": "Cours §1 Célérités"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissance et intensité acoustiques : différence ? Intensité en champ direct ?",
   "verso": "<b>P</b> (W) caractérise la <b>source</b> ; <b>I</b> (W/m²) dépend aussi de la <b>distance</b>.<br><b>I = P / (4π r²)</b>.",
   "origine": "Cours §2 Puissance et intensité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formule du niveau sonore ? Valeur de I<sub>0</sub> ?",
   "verso": "<b>L = 10 log(I / I<sub>0</sub>)</b> en dB ; <b>I<sub>0</sub> = 1,0 × 10<sup>−12</sup> W/m²</b> (seuil d'audition).",
   "origine": "Cours §3 Le niveau en décibels"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>+10 dB et +3 dB : que devient l'intensité ?",
   "verso": "<b>+10 dB</b> → intensité <b>× 10</b> ; <b>+3 dB</b> → <b>× 2</b>. Doubler les décibels ne double rien.",
   "origine": "Cours §3 Échelle logarithmique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Deux sources identiques fonctionnant ensemble : quel niveau ?",
   "verso": "<b>+3 dB</b>, jamais le double. Formule : L = 10 log(10<sup>L<sub>1</sub>/10</sup> + 10<sup>L<sub>2</sub>/10</sup>).",
   "origine": "Cours §4.1 Deux sources"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>En champ direct, que fait perdre le doublement de la distance ?",
   "verso": "<b>6 dB</b>. C'est le <b>rapport</b> des distances qui compte, pas leur différence.",
   "origine": "Cours §4.2 La règle des 6 dB"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que le dB(A) ? Pourquoi l'utilise-t-on ?",
   "verso": "Le niveau corrigé de la <b>sensibilité de l'oreille selon la fréquence</b> (les graves sont moins perçus). C'est celui de la <b>réglementation</b>.",
   "origine": "Cours §5 Décibel pondéré A"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que devient l'énergie d'une onde devant une paroi ? Différence entre isoler et absorber ?",
   "verso": "<b>Réfléchie</b>, <b>absorbée</b> (échauffe), <b>transmise</b>.<br>Isoler : réduire ce qui <b>passe</b> ; absorber : réduire ce qui <b>revient</b>.",
   "origine": "Cours §6 Isoler, absorber"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Seuils réglementaires d'exposition au bruit ?",
   "verso": "<b>80 dB(A)</b> : information, protections mises à disposition.<br><b>85 dB(A)</b> : valeur d'action, port obligatoire.<br><b>87 dB(A)</b> : valeur limite, sous protection.",
   "origine": "Cours §6 Seuils réglementaires"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans quel ordre agir contre le bruit ?",
   "verso": "1. <b>Source</b> (silencieux, capotage).<br>2. <b>Trajet</b> (cabine, écrans).<br>3. <b>Opérateur</b> (EPI).",
   "origine": "Cours §6 L'EPI en dernier"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment additionner deux niveaux sonores ?",
   "verso": "1. Revenir aux intensités : <b>10<sup>L/10</sup></b> (en I<sub>0</sub>).<br>2. <b>Additionner</b>.<br>3. Reprendre <b>10 log</b>.<br>4. Contrôle : deux sources identiques → +3 dB.",
   "origine": "Cours §4.1 Méthode — Additionner deux niveaux"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment choisir une protection auditive ?",
   "verso": "1. Mesurer au poste en <b>dB(A)</b>.<br>2. Niveau sous protection : <b>L − SNR</b>.<br>3. Vérifier <b>&lt; 85 dB(A)</b>.<br>4. Mais <b>&gt; 70 dB(A)</b> pour entendre alarmes et collègues.",
   "origine": "Cours §6 Méthode — Choisir une protection"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Sonomètre : 96 dB en linéaire, 88 dB(A). Que conclure ?",
   "verso": "Écart de 8 dB : bruit <b>riche en graves</b> (moteur diesel), énergétiquement fort mais moins perçu par l'oreille.",
   "origine": "Cours §5 Ce qu'un écart révèle"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
