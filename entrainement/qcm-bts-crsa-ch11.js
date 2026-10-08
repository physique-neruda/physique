/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 11 — Hacheur série et onduleur
   Le bilan vient de CRSA_ch11_bilan.tex, les cartes des \trou{} de
   CRSA_ch11_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "11",
 "cle": "ch11",
 "etiquette": "Chapitre 11",
 "titre": "Hacheur série et onduleur",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Convertir 50 µs en secondes, en notation scientifique :",
   "choix": [
    "5,0×10⁻⁵ s",
    "5,0×10⁻⁶ s",
    "5,0×10⁻³ s",
    "5,0×10⁻⁴ s"
   ],
   "bonne": 0,
   "expl": "micro vaut 10⁻⁶, donc 50 × 10⁻⁶ = 5,0×10⁻⁵ s. Le 50 apporte un rang de plus."
  },
  {
   "q": "Une période T = 50 µs correspond à une fréquence de :",
   "choix": [
    "20 kHz",
    "2,0 kHz",
    "200 kHz",
    "50 kHz"
   ],
   "bonne": 0,
   "expl": "1/(5,0×10⁻⁵) = 2,0×10⁴ Hz = 20 kHz. C'est l'ordre de grandeur du découpage."
  },
  {
   "q": "Calculer 36/48 :",
   "choix": [
    "0,750",
    "1,33",
    "0,720",
    "12"
   ],
   "bonne": 0,
   "expl": "0,750. C'est la forme d'un rapport cyclique : entre 0 et 1."
  },
  {
   "q": "Un rapport de deux durées :",
   "choix": [
    "n'a pas d'unité",
    "s'exprime en secondes",
    "s'exprime en hertz",
    "s'exprime en pourcentage de seconde"
   ],
   "bonne": 0,
   "expl": "Les secondes se simplifient : le rapport cyclique est un nombre pur, souvent donné en pourcentage."
  },
  {
   "q": "Calculer 0,60 × 48 V :",
   "choix": [
    "28,8 V",
    "80,0 V",
    "48,6 V",
    "24,0 V"
   ],
   "bonne": 0,
   "expl": "28,8 V. C'est la tension moyenne d'un hacheur série de rapport cyclique 0,60."
  },
  {
   "q": "Un signal vaut +200 V pendant une demi-période puis −200 V pendant l'autre. Sa valeur moyenne vaut :",
   "choix": [
    "0 V",
    "200 V",
    "100 V",
    "141 V"
   ],
   "bonne": 0,
   "expl": "Les deux moitiés se compensent exactement : la valeur moyenne est nulle. C'est ce qui distingue un onduleur d'un hacheur."
  }
 ],
 "bilan": [
  {
   "q": "Un hacheur est un convertisseur :",
   "choix": [
    "alternatif continu",
    "continu continu",
    "continu alternatif",
    "alternatif alternatif"
   ],
   "bonne": 1,
   "expl": "Continu vers continu, mais réglable : c'est tout son intérêt."
  },
  {
   "q": "Un onduleur est un convertisseur :",
   "choix": [
    "alternatif continu",
    "continu continu",
    "alternatif alternatif",
    "continu alternatif"
   ],
   "bonne": 3,
   "expl": "L'onduleur fabrique de l'alternatif à partir du continu. Le a est le redresseur, le d le transformateur."
  },
  {
   "q": "Dans un variateur de vitesse pour moteur asynchrone, l'ordre des blocs est :",
   "choix": [
    "redresseur, filtre, onduleur",
    "onduleur, filtre, redresseur",
    "hacheur, filtre, redresseur",
    "transformateur, hacheur, filtre"
   ],
   "bonne": 0,
   "expl": "On redresse, on filtre, puis on ondule. C'est le schéma des sujets 2019 et 2022."
  },
  {
   "q": "Le rapport cyclique d'un hacheur :",
   "choix": [
    "s'exprime en secondes",
    "s'exprime en hertz",
    "est compris entre 0 et 1, sans unité",
    "peut dépasser 1"
   ],
   "bonne": 2,
   "expl": "C'est un rapport de deux durées : les unités se simplifient, et il ne peut pas dépasser 1 puisque la durée de fermeture ne peut excéder la période."
  },
  {
   "q": "Un hacheur série alimenté sous 48 V est réglé à α= 0,75. La tension moyenne de sortie vaut :",
   "choix": [
    "12 V",
    "24 V",
    "36 V",
    "64 V"
   ],
   "bonne": 2,
   "expl": "u_s = αU = 0,75 × 48 = 36 V. La réponse « 64 V » est impossible : un hacheur série n'élève jamais la tension."
  },
  {
   "q": "Sur un chronogramme, le palier haut dure 3,0 divisions et le motif complet 5,0 divisions. Le rapport cyclique vaut :",
   "choix": [
    "0,30",
    "0,50",
    "1,67",
    "0,60"
   ],
   "bonne": 3,
   "expl": "α= 3,0/5,0 = 0,60. Inutile de convertir en secondes. La réponse « 0,60 » est le rapport inversé."
  },
  {
   "q": "Un hacheur série peut délivrer une tension moyenne :",
   "choix": [
    "toujours supérieure à celle de la source",
    "toujours inférieure ou égale à celle de la source",
    "toujours nulle",
    "alternative"
   ],
   "bonne": 1,
   "expl": "Puisque α 1, on a toujours αU U. Si un montage délivre davantage que sa source, ce n'est pas un hacheur série — c'était le cas du sujet 2021."
  },
  {
   "q": "Pendant que l'interrupteur d'un hacheur est ouvert, la diode de roue libre est :",
   "choix": [
    "passante, et le courant décroît",
    "bloquée, et le courant décroît",
    "bloquée, et le courant s'annule",
    "passante, et le courant croît"
   ],
   "bonne": 0,
   "expl": "La diode devient passante et offre au courant un chemin pour continuer de circuler ; il décroît sans s'annuler. C'est le régime de conduction continue."
  },
  {
   "q": "Pour diviser par deux l'ondulation du courant d'un hacheur, on peut :",
   "choix": [
    "diviser l'inductance par deux",
    "diviser la fréquence de découpage par deux",
    "doubler la fréquence de découpage",
    "doubler le rapport cyclique"
   ],
   "bonne": 2,
   "expl": "L'ondulation est inversement proportionnelle au produit L f : doubler la fréquence la divise par deux, tout comme doubler l'inductance. Les réponses « diviser l'inductance par deux » et « diviser la fréquence de découpage par deux » l'augmenteraient au contraire."
  },
  {
   "q": "Dans un onduleur en pont, fermer simultanément les deux interrupteurs d'un même bras :",
   "choix": [
    "met la source en court-circuit",
    "double la tension de sortie",
    "n'a aucun effet",
    "inverse le sens du courant"
   ],
   "bonne": 0,
   "expl": "Les deux interrupteurs d'un même bras relient les deux bornes de la source : c'est un court-circuit franc, destructeur. D'où le temps mort imposé par les commandes industrielles."
  },
  {
   "q": "Un onduleur à commande symétrique alimenté sous 200 V délivre une tension dont la valeur efficace vaut :",
   "choix": [
    "0 V",
    "141 V",
    "283 V",
    "200 V"
   ],
   "bonne": 3,
   "expl": "La tension vaut ±200 V en permanence : son carré vaut toujours 200², donc sa valeur efficace vaut 200 V. C'est le seul cas où amplitude et valeur efficace coïncident — le b serait la réponse pour une sinusoïde."
  },
  {
   "q": "Par rapport à la commande symétrique, la commande MLI :",
   "choix": [
    "supprime le fondamental",
    "conserve le fondamental et repousse les harmoniques vers les hautes fréquences",
    "double le fondamental",
    "conserve le fondamental et rapproche les harmoniques"
   ],
   "bonne": 1,
   "expl": "La MLI ne change rien au fondamental : elle déplace les harmoniques très haut en fréquence, là où l'inductance du moteur les filtre naturellement. C'est pourquoi tous les variateurs industriels l'utilisent. enumerate"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que convertissent un hacheur et un onduleur ?",
   "verso": "<b>Hacheur</b> : continu → <b>continu réglable</b>.<br><b>Onduleur</b> : continu → <b>alternatif</b>.",
   "origine": "Cours §1 Les deux convertisseurs"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi un variateur redresse-t-il puis ondule-t-il la tension du réseau ?",
   "verso": "Pour obtenir une <b>autre fréquence que 50 Hz</b> : c'est le seul moyen de faire varier la vitesse d'un moteur alternatif.",
   "origine": "Cours §1 Le variateur de vitesse"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment se comporte un transistor utilisé en commutation ?",
   "verso": "Deux états seulement : <b>passant</b> = fil ; <b>bloqué</b> = interrupteur ouvert.",
   "origine": "Cours §2 L'interrupteur commandé"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rôle de la diode de roue libre d'un hacheur ? Peut-elle conduire en même temps que l'interrupteur ?",
   "verso": "Elle <b>entretient le courant</b> de la bobine quand l'interrupteur s'ouvre (évite la surtension). <b>Jamais en même temps</b> : sinon court-circuit de la source.",
   "origine": "Cours §3 La diode de roue libre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir le rapport cyclique α. Valeur moyenne en sortie d'un hacheur série ?",
   "verso": "La <b>fraction de la période</b> pendant laquelle l'interrupteur est fermé (0 ≤ α ≤ 1, sans unité).<br><b>⟨u<sub>s</sub>⟩ = α U</b> : la tension est toujours <b>abaissée</b>.",
   "origine": "Cours §3 Le rapport cyclique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que la conduction continue ? Comment réduire l'ondulation Δi ?",
   "verso": "Le courant oscille autour de sa moyenne <b>sans s'annuler</b>.<br>Réduire Δi : <b>augmenter L</b> ou <b>augmenter la fréquence de découpage</b>.",
   "origine": "Cours §4 L'ondulation du courant"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelle règle absolue pour les interrupteurs d'un bras d'onduleur ?",
   "verso": "<b>Jamais les deux interrupteurs d'un même bras fermés ensemble</b> (court-circuit de la source) : temps mort entre les deux.",
   "origine": "Cours §5 L'onduleur en pont"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Onduleur en commande symétrique : forme, valeur moyenne, valeur efficace de la sortie ?",
   "verso": "Un <b>créneau ±U</b> ; valeur moyenne <b>nulle</b> ; valeur efficace <b>exactement U</b>.",
   "origine": "Cours §5 Commande symétrique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'apporte la commande MLI par rapport à la commande symétrique ?",
   "verso": "Même fondamental, mais les <b>harmoniques sont repoussés vers la fréquence de découpage</b>, où l'inductance du moteur les filtre.",
   "origine": "Cours §6 La MLI"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment savoir sur des chronogrammes si le pont fonctionne en onduleur ou en redresseur ?",
   "verso": "u et i de <b>même signe</b> : p &gt; 0, énergie vers la charge → <b>onduleur</b>.<br>De <b>signes opposés</b> : p &lt; 0, énergie vers la source → <b>redresseur</b> (freinage par récupération).",
   "origine": "Cours §7 Le sens du transfert"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>10 V/div, 10 µs/div : palier haut 4,8 div, durée 3,0 div, motif 5,0 div. Comment trouver U, f, α et ⟨u<sub>s</sub>⟩ ?",
   "verso": "1. U = 4,8 × 10 = <b>48 V</b>.<br>2. T = 50 µs → <b>f = 20 kHz</b>.<br>3. α = 3,0/5,0 = <b>0,60</b> (en divisions).<br>4. ⟨u<sub>s</sub>⟩ = 0,60 × 48 = <b>28,8 V</b>.",
   "origine": "Cours §3 Méthode — Chronogramme de hacheur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer l'ondulation du courant d'un hacheur avec la relation fournie ?",
   "verso": "1. Relever α, U, L, f (en unités SI).<br>2. Δi = α(1 − α) U / (L f).<br>3. Ex. : 0,60 × 0,40 × 48 / (2,0 × 10<sup>−3</sup> × 20 × 10<sup>3</sup>) = <b>0,29 A</b>.<br>4. Comparer au courant moyen.",
   "origine": "Cours §4 L'ondulation du courant"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment tracer la tension de sortie d'un onduleur en pont ?",
   "verso": "1. K<sub>1</sub>, K<sub>3</sub> fermés : charge reliée au + à gauche → <b>u<sub>c</sub> = +U</b>.<br>2. K<sub>2</sub>, K<sub>4</sub> fermés : liaisons inversées → <b>u<sub>c</sub> = −U</b>.<br>3. Tracer le créneau.<br>4. Vérifier : changement de signe, alternances égales.",
   "origine": "Cours §5 Méthode — Tracer la sortie d'un onduleur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment lire le sens du transfert d'énergie sur des chronogrammes u et i ?",
   "verso": "1. Superposer u<sub>c</sub> et i.<br>2. Repérer les intervalles de <b>même signe</b> (onduleur).<br>3. Repérer ceux de <b>signes opposés</b> (redresseur).<br>4. Conclure sur le fonctionnement dominant (durées).",
   "origine": "Cours §7 Méthode — Sens du transfert"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
