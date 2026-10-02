/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 20 — Systèmes asservis
   Le bilan vient de CRSA_ch20_bilan.tex, les cartes des \trou{} de
   CRSA_ch20_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "20",
 "cle": "ch20",
 "etiquette": "Chapitre 20",
 "titre": "Systèmes asservis",
 "niveau": "BTS CRSA",
 "prerequis": [],
 "bilan": [
  {
   "q": "L'intérêt principal d'un système bouclé est de :",
   "choix": [
    "compenser les perturbations",
    "supprimer le capteur",
    "supprimer l'actionneur",
    "rendre la commande constante"
   ],
   "bonne": 0,
   "expl": "Et suivre la consigne sans intervention."
  },
  {
   "q": "Le comparateur calcule :",
   "choix": [
    "la somme de la consigne et de la mesure",
    "la commande de l'actionneur",
    "l'erreur ε= w - m",
    "la perturbation"
   ],
   "bonne": 2,
   "expl": "Consigne moins mesure."
  },
  {
   "q": "Dans une régulation de température, le capteur appartient à :",
   "choix": [
    "la chaîne directe",
    "la chaîne de retour",
    "la consigne",
    "la perturbation"
   ],
   "bonne": 1,
   "expl": "Il ramène la mesure au comparateur."
  },
  {
   "q": "Le procédé, dans une régulation de niveau de cuve, c'est :",
   "choix": [
    "la pompe",
    "l'automate",
    "le capteur de pression",
    "la cuve"
   ],
   "bonne": 3,
   "expl": "La pompe est l'actionneur, le capteur la chaîne de retour."
  },
  {
   "q": "L'erreur statique est l'écart, en régime permanent, entre :",
   "choix": [
    "deux mesures successives",
    "la sortie et sa valeur maximale",
    "la consigne et la sortie",
    "la commande et la sortie"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Un système est instable si :",
   "choix": [
    "ses oscillations grandissent",
    "il met longtemps à répondre",
    "il dépasse sa consigne",
    "son erreur statique n'est pas nulle"
   ],
   "bonne": 0,
   "expl": "Un dépassement n'est pas une instabilité, à condition que la sortie se stabilise."
  },
  {
   "q": "Augmenter le gain K_p d'un correcteur proportionnel :",
   "choix": [
    "annule l'erreur statique",
    "n'a aucun effet",
    "rend toujours le système plus stable",
    "diminue l'erreur mais augmente le dépassement"
   ],
   "bonne": 3,
   "expl": "Le correcteur P seul garde toujours une erreur."
  },
  {
   "q": "L'action intégrale d'un correcteur PI permet de :",
   "choix": [
    "supprimer tout dépassement",
    "annuler l'erreur statique",
    "se passer du capteur",
    "supprimer les perturbations"
   ],
   "bonne": 1,
   "expl": "Elle agit tant qu'une erreur subsiste."
  },
  {
   "q": "Diminuer fortement le temps d'intégration T_i :",
   "choix": [
    "peut rendre le système oscillant, voire instable",
    "rend le système plus lent et plus stable",
    "augmente l'erreur statique",
    "ne change rien"
   ],
   "bonne": 0,
   "expl": "Trop d'action intégrale fait osciller."
  },
  {
   "q": "En régulation tout ou rien, la grandeur réglée :",
   "choix": [
    "atteint exactement la consigne",
    "ne dépend pas de l'hystérésis",
    "reste toujours sous la consigne",
    "oscille autour de la consigne"
   ],
   "bonne": 3,
   "expl": "Elle oscille entre les deux seuils."
  },
  {
   "q": "Augmenter l'hystérésis d'un thermostat :",
   "choix": [
    "réduit l'amplitude des oscillations",
    "augmente le nombre de manœuvres du contacteur",
    "réduit le nombre de manœuvres mais augmente l'amplitude",
    "annule l'erreur statique"
   ],
   "bonne": 2,
   "expl": "Moins d'usure du contacteur, mais une température moins régulière."
  },
  {
   "q": "Régulation de vitesse : consigne 1000 1/min, vitesse stabilisée à 960 1/min. L'erreur statique vaut :",
   "choix": [
    "96 %",
    "4 %",
    "960 1/min",
    "0"
   ],
   "bonne": 1,
   "expl": "40/1000 ; la réponse « 960 1/min » est la valeur finale, pas l'erreur. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "trou",
   "recto": "<strong>Comparateur</strong> : calcule l'<strong>erreur</strong> …….",
   "rep": "ε= w - m",
   "verso": "<strong>ε= w - m</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le prix à payer : un capteur, et un risque d'…… si la boucle est mal réglée.",
   "rep": "instabilité",
   "verso": "<strong>instabilité</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "En régulation TOR, la grandeur réglée …… entre le seuil bas et le seuil haut.",
   "rep": "oscille en permanence",
   "verso": "<strong>oscille en permanence</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "<strong>Chaîne de retour</strong> : le ……, qui ramène la mesure m au comparateur.",
   "rep": "capteur",
   "verso": "<strong>capteur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "L'intérêt d'un système bouclé : …… et suivre la consigne sans intervention humaine.",
   "rep": "compenser automatiquement les perturbations",
   "verso": "<strong>compenser automatiquement les perturbations</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "L'intérêt principal d'un système bouclé est de ……",
   "rep": "compenser les perturbations",
   "verso": "<strong>compenser les perturbations</strong> — Et suivre la consigne sans intervention.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le comparateur calcule ……",
   "rep": "l'erreur ε= w - m",
   "verso": "<strong>l'erreur ε= w - m</strong> — Consigne moins mesure.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans une régulation de température, le capteur appartient à ……",
   "rep": "la chaîne de retour",
   "verso": "<strong>la chaîne de retour</strong> — Il ramène la mesure au comparateur.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "L'erreur statique est l'écart, en régime permanent, entre ……",
   "rep": "la consigne et la sortie",
   "verso": "<strong>la consigne et la sortie</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un système est instable si ……",
   "rep": "ses oscillations grandissent",
   "verso": "<strong>ses oscillations grandissent</strong> — Un dépassement n'est pas une instabilité, à condition que la sortie se stabilise.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "L'action intégrale d'un correcteur PI permet de ……",
   "rep": "annuler l'erreur statique",
   "verso": "<strong>annuler l'erreur statique</strong> — Elle agit tant qu'une erreur subsiste.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Diminuer fortement le temps d'intégration T_i ……",
   "rep": "peut rendre le système oscillant, voire instable",
   "verso": "<strong>peut rendre le système oscillant, voire instable</strong> — Trop d'action intégrale fait osciller.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En régulation tout ou rien, la grandeur réglée ……",
   "rep": "oscille autour de la consigne",
   "verso": "<strong>oscille autour de la consigne</strong> — Elle oscille entre les deux seuils.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Régulation de vitesse : consigne 1000 1/min, vitesse stabilisée à 960 1/min. L'erreur statique vaut ……",
   "rep": "4 %",
   "verso": "<strong>4 %</strong>",
   "origine": "bilan"
  }
 ],
 "cartes_figees": false
};
