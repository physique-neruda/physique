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
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Différence entre boucle ouverte et boucle fermée ?",
   "verso": "<b>Ouverte</b> : commande fixée d'avance, aucune correction des perturbations.<br><b>Fermée</b> : un capteur mesure la sortie, on la compare à la consigne, l'<b>écart fixe la commande</b>.",
   "origine": "Cours §1 Boucle ouverte, boucle fermée"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Intérêt et prix d'un système bouclé ?",
   "verso": "Intérêt : <b>compenser les perturbations</b> et <b>suivre la consigne</b>. Prix : un capteur et un <b>risque d'instabilité</b>.",
   "origine": "Cours §1 Intérêt de la boucle fermée"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Éléments d'un schéma blocs de régulation ? Que calcule le comparateur ?",
   "verso": "<b>Consigne</b> w ; <b>comparateur</b> : erreur <b>ε = w − m</b> ; <b>chaîne directe</b> (correcteur, actionneur, procédé) → sortie y ; <b>chaîne de retour</b> (capteur) → mesure m.",
   "origine": "Cours §2 Le schéma blocs"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quels sont les critères de performance d'une boucle ?",
   "verso": "<b>Stabilité</b>, <b>précision</b> (erreur statique ε<sub>∞</sub> = consigne − sortie en régime permanent), <b>rapidité</b> (t<sub>5%</sub>), <b>dépassement</b>.",
   "origine": "Cours §3 Critères de performance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que se passe-t-il pour un système instable ?",
   "verso": "Ses <b>oscillations grandissent</b> jusqu'à une butée, une protection ou une casse : le défaut le plus grave.",
   "origine": "Cours §3 Instabilité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Correcteur PI : rôle de l'action proportionnelle ? de l'action intégrale ?",
   "verso": "<b>Proportionnelle</b> (K<sub>p</sub>) : la <b>rapidité</b>.<br><b>Intégrale</b> (T<sub>i</sub>) : <b>annule l'erreur statique</b>.<br>Forcer l'une ou l'autre → instabilité : réglage = compromis.",
   "origine": "Cours §4 Le correcteur PI"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Régulation TOR avec hystérésis : comportement ? Effet d'une hystérésis plus large ?",
   "verso": "La grandeur <b>oscille en permanence</b> entre seuil bas et seuil haut. Hystérésis plus large : oscillations <b>plus amples</b> mais <b>moins de commutations</b> (moins d'usure).",
   "origine": "Cours §5 Régulation tout ou rien"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Régulation de niveau d'une cuve (capteur de pression, automate, pompe, soutirage). Comment identifier les blocs ?",
   "verso": "1. <b>Sortie</b> : le niveau ; <b>consigne</b> : le niveau demandé.<br>2. <b>Retour</b> : capteur de pression.<br>3. <b>Comparateur, correcteur</b> : automate.<br>4. <b>Actionneur</b> : pompe + variateur ; <b>procédé</b> : la cuve.<br>5. <b>Perturbation</b> : le soutirage.",
   "origine": "Cours §2 Méthode — Identifier les blocs"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Consigne 1500 tr/min ; max 1650, finale 1440, dans ± 5 % à 2,5 s. Comment lire les performances ?",
   "verso": "1. Se stabilise → <b>stable</b>.<br>2. ε<sub>∞</sub> = 1500 − 1440 = <b>60 tr/min</b> (4 %).<br>3. D = (1650 − 1440)/1440 = <b>15 %</b>.<br>4. <b>t<sub>5%</sub> = 2,5 s</b>.",
   "origine": "Cours §3 Méthode — Performances d'une boucle"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Consigne 60 °C, hystérésis 4 °C, montée 2 °C/min, descente 1 °C/min. Comment prévoir le fonctionnement ?",
   "verso": "1. Seuils : arrêt à <b>62 °C</b>, reprise à <b>58 °C</b>.<br>2. Chauffe 4/2 = 2 min ; arrêt 4/1 = 4 min → cycle de <b>6 min</b>.<br>3. 10 cycles/h → <b>20 manœuvres</b>.<br>4. Hystérésis doublée : 2 fois moins de manœuvres.",
   "origine": "Cours §5 Méthode — Thermostat"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
