/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · Chapitre 0 — Outils mathématiques
   Le bilan vient de ch00_bilan.tex, les cartes des \trou{} de
   ch00_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "0",
 "titre": "Outils mathématiques",
 "niveau": "BTS ET",
 "prerequis": [],
 "bilan": [
  {
   "q": "Dans l'aide-mémoire des unités dérivées, 1 Ω correspond à :",
   "choix": [
    "V×A",
    "V/A",
    "A/V"
   ],
   "bonne": 1,
   "expl": "On lit cette équivalence dans l'aide-mémoire, on ne la devine pas : U = R I donne R = U/I, donc des volts par ampère. La réponse a est le watt."
  },
  {
   "q": "On convertit des ohms en milliohms. Le nombre :",
   "choix": [
    "augmente",
    "diminue",
    "ne change pas"
   ],
   "bonne": 0,
   "expl": "Le milliohm est un découpage mille fois plus fin : il en faut mille fois plus. C'est la seule règle à retenir, et elle donne le signe de tous les exposants du chapitre."
  },
  {
   "q": "45000 W s'écrit, en écriture scientifique :",
   "choix": [
    "45×10³ W",
    "4,5×10⁴ W",
    "0,45×10⁵ W"
   ],
   "bonne": 1,
   "expl": "La mantisse doit être comprise entre 1 et 10 : 45 et 0,45 ne conviennent pas, même si les trois écritures valent la même chose."
  },
  {
   "q": "Le nombre 0,0284 comporte :",
   "choix": [
    "deux chiffres significatifs",
    "trois",
    "cinq"
   ],
   "bonne": 1,
   "expl": "Les zéros de tête ne comptent pas ; seuls 2, 8 et 4 sont significatifs."
  },
  {
   "q": "Le nombre 1200, écrit tel quel, comporte :",
   "choix": [
    "deux chiffres significatifs",
    "quatre",
    "c'est ambigu : l'écriture ne permet pas de trancher"
   ],
   "bonne": 2,
   "expl": "Rien ne dit si les deux zéros sont mesurés ou s'ils placent seulement la virgule. C'est précisément pour lever ce doute qu'on écrit 1,2×10³, 1,20×10³ ou 1,200×10³ selon la précision réelle."
  },
  {
   "q": "330 µF valent, en farads :",
   "choix": [
    "3,30×10⁻⁴",
    "3,30×10⁻³",
    "3,30×10⁻⁶"
   ],
   "bonne": 0,
   "expl": "Le préfixe µ vaut 10⁻⁶, donc 330× 10⁻⁶ = 3,30×10⁻⁴. La réponse c confond le préfixe avec le nombre lui-même."
  },
  {
   "q": "95 mmeter² valent, en meter² :",
   "choix": [
    "0,095",
    "9,5×10⁻⁵",
    "9,5×10⁻²"
   ],
   "bonne": 1,
   "expl": "Une surface se convertit au carré : le facteur e-3 devient e-6. La réponse a est l'erreur la plus fréquente de toute la formation, et elle se paie dès le premier calcul de résistance."
  },
  {
   "q": "1 kWh vaut :",
   "choix": [
    "1000 J",
    "3,6×10⁶ J",
    "3600 J"
   ],
   "bonne": 1,
   "expl": "1 kWh = 1000 W×3600 s = 3,6×10⁶ J. La réponse c est l'énergie d'un appareil de 1 W pendant une heure."
  },
  {
   "q": "Un moteur tourne à 1500 tr/min. En rad/s :",
   "choix": [
    "25",
    "157",
    "9425"
   ],
   "bonne": 1,
   "expl": "1500×2π/60 = 157. La réponse a divise par 60 sans le 2π, la c multiplie par 2π sans diviser par 60."
  },
  {
   "q": "La règle de trois s'applique :",
   "choix": [
    "à toute droite",
    "aux seules droites passant par l'origine",
    "à toute courbe croissante"
   ],
   "bonne": 1,
   "expl": "Une droite décalée, du type U = E-rI, met la règle de trois en défaut — et le résultat obtenu reste plausible, ce qui rend l'erreur invisible."
  },
  {
   "q": "Le courant est divisé par deux. Les pertes 3RI² sont :",
   "choix": [
    "divisées par deux",
    "divisées par quatre",
    "inchangées"
   ],
   "bonne": 1,
   "expl": "La relation est quadratique : diviser le courant par deux divise les pertes par quatre. C'est la même erreur qu'en question 10, appliquée cette fois à un carré."
  },
  {
   "q": "Sur un graphique où l'axe vertical est en volts et l'axe horizontal en ampères, la pente s'exprime en :",
   "choix": [
    "volts",
    "ohms",
    "watts"
   ],
   "bonne": 1,
   "expl": "La pente porte l'unité du quotient des deux axes : V/A = Ω. Elle vaut donc ici la résistance du dipôle."
  },
  {
   "q": "Pour lire une pente le plus précisément possible, on prend :",
   "choix": [
    "deux points de mesure voisins",
    "les deux points les plus éloignés de la droite tracée",
    "le premier et le deuxième point du tableau"
   ],
   "bonne": 1,
   "expl": "Sur un grand triangle, une même erreur de lecture pèse beaucoup moins. Deux points voisins peuvent donner une pente fausse de plus de 10 %."
  },
  {
   "q": "De U = E - r I, on tire :",
   "choix": [
    "r = E/I - U",
    "r = (E-U)/I",
    "r = (U-E)/I"
   ],
   "bonne": 1,
   "expl": "On déplace le terme entier avant de diviser. La réponse a divise un seul terme de la différence : elle donnerait ici une résistance négative, donc impossible."
  },
  {
   "q": "Dans le triangle des puissances, tanφ vaut :",
   "choix": [
    "P/S",
    "Q/P",
    "Q/S"
   ],
   "bonne": 1,
   "expl": "tanφ= Q/P, comme la tangente est le quotient du côté opposé par le côté adjacent. La réponse a est cosφ, la c est sinφ."
  },
  {
   "q": "On prévoit 1587 W et on mesure 1585 W. La conclusion attendue est :",
   "choix": [
    "la mesure est fausse, elle ne vaut pas la prévision",
    "l'écart de 0,13 % est compatible : la prévision est confirmée",
    "il faut refaire la mesure jusqu'à trouver 1587 W"
   ],
   "bonne": 1,
   "expl": "Un écart n'est jamais nul, et ce n'est pas un défaut. Ce qu'on attend est un écart chiffré et une phrase de conclusion — c'est ce que la compétence Valider évalue."
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Grandeurs proportionnelles » ?",
   "verso": "Deux grandeurs sont <strong>proportionnelles</strong> si l'on passe de l'une à l'autre en multipliant <em>toujours</em> par le même nombre.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Le principe de l'égalité » ?",
   "verso": "Une égalité reste vraie si l'on effectue <strong>la même opération sur ses deux membres</strong> : additionner, soustraire, multiplier ou diviser par un même nombre non nul. C'est le seul outil nécessaire — tout le reste n'en est qu'un raccourci.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "L'aide-mémoire des unités dérivées — qu'y a-t-il à retenir ?",
   "verso": "Le tableau vert ci-dessus est une <strong>ressource</strong>, pas une leçon : on ne le retient pas, on le consulte. Il sert à une seule chose — vérifier qu'un résultat sort dans la bonne unité.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "La règle qui donne le signe — qu'y a-t-il à retenir ?",
   "verso": "C'est de cette seule idée que découle tout le reste du chapitre : · unité d'arrivée <strong>plus petite</strong> il en faut <strong>davantage</strong> le nombre <strong>augmente</strong>.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "C'est la même question que pour les conversions — qu'y a-t-il à retenir ?",
   "verso": "Agrandir exposant positif, rapetisser exposant négatif. On ne retient donc <strong>aucune règle sur le sens de déplacement de la virgule</strong> : on se demande seulement si le nombre doit grandir ou rétrécir, exactement comme pour un changement d'unité.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "C'est faux : il faut <strong>aussi</strong> que …….",
   "rep": "la droite passe par l'origine",
   "verso": "<strong>la droite passe par l'origine</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "On trace d'abord la droite qui passe ……, pas de point en point.",
   "rep": "au mieux entre les points",
   "verso": "<strong>au mieux entre les points</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Avant d'écrire un résultat, se demander …… pour l'objet dont on parle.",
   "rep": "s'il est plausible",
   "verso": "<strong>s'il est plausible</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Si l'axe vertical est en volts et l'axe horizontal en ampères, la pente est en …….",
   "rep": "V/A, c'est-à-dire en ohms",
   "verso": "<strong>V/A, c'est-à-dire en ohms</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Tout ce qui vaut pour l'un vaut pour l'autre — y compris le théorème de Pythagore, qui donne …….",
   "rep": "S² = P²+Q²",
   "verso": "<strong>S² = P²+Q²</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Dans l'aide-mémoire des unités dérivées, 1 Ω correspond à ……",
   "rep": "V/A",
   "verso": "<strong>V/A</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "On convertit des ohms en milliohms. Le nombre ……",
   "rep": "augmente",
   "verso": "<strong>augmente</strong> — Le milliohm est un découpage mille fois plus fin : il en faut mille fois plus. C'est la seule règle à retenir, et elle donne le signe de tous les exposants du chapitre.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "45000 W s'écrit, en écriture scientifique ……",
   "rep": "4,5×10⁴ W",
   "verso": "<strong>4,5×10⁴ W</strong> — La mantisse doit être comprise entre 1 et 10 : 45 et 0,45 ne conviennent pas, même si les trois écritures valent la même chose.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le nombre 0,0284 comporte ……",
   "rep": "trois",
   "verso": "<strong>trois</strong> — Les zéros de tête ne comptent pas ; seuls 2, 8 et 4 sont significatifs.",
   "origine": "bilan"
  }
 ]
};
