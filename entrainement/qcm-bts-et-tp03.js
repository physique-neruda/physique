/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · TP 3 — Régime sinusoïdal monophasé
   Le bilan vient de tp03_bilan.tex, les cartes des \trou{} de
   tp03_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "3",
 "cle": "tp03",
 "etiquette": "TP 3",
 "titre": "Régime sinusoïdal monophasé",
 "niveau": "BTS ET",
 "prerequis": [],
 "bilan": [
  {
   "q": "Une tension sinusoïdale de période 20 ms a pour fréquence :",
   "choix": [
    "50 Hz",
    "20 Hz",
    "0,05 Hz"
   ],
   "bonne": 0,
   "expl": "f = 1/T = 1/0,020 = 50 Hz."
  },
  {
   "q": "La tension du réseau, 230 V, désigne :",
   "choix": [
    "sa valeur maximale",
    "sa valeur efficace",
    "sa valeur moyenne"
   ],
   "bonne": 1,
   "expl": "Toutes les valeurs de plaque et de réseau sont efficaces. La valeur maximale vaut 325 V ; la valeur moyenne, nulle, ne caractérise rien."
  },
  {
   "q": "Un signal carré de tension maximale 10 V a pour valeur efficace :",
   "choix": [
    "7,07 V",
    "0 V",
    "10 V"
   ],
   "bonne": 2,
   "expl": "Le carré vaut ±10 V en permanence : il chauffe comme 10 V continu. La réponse « 7,07 V » applique le √ 2, réservé à la sinusoïde."
  },
  {
   "q": "Sur un oscilloscope, T = 10 ms et le courant passe par zéro 2,5 ms après la tension. Le déphasage vaut :",
   "choix": [
    "90, courant en retard",
    "25, courant en avance",
    "90, courant en avance"
   ],
   "bonne": 0,
   "expl": "φ= 360×2,5/10 = 90 ; le courant passe par zéro après la tension : il est en retard. C'est le cas d'une bobine idéale."
  },
  {
   "q": "L'impédance d'une bobine idéale de 0,10 H à 50 Hz vaut :",
   "choix": [
    "5 Ω",
    "31,4 Ω",
    "0,1 Ω"
   ],
   "bonne": 1,
   "expl": "Lω= 0,10× 314 = 31,4 Ω. La réponse « 5 Ω » oublie le 2π."
  },
  {
   "q": "Quand la fréquence double, l'impédance d'un condensateur :",
   "choix": [
    "double",
    "ne change pas",
    "est divisée par deux"
   ],
   "bonne": 2,
   "expl": "Z_C = 1/(Cω) : ω est au dénominateur. C'est ce qui fait du condensateur un court-circuit pour les parasites de haute fréquence."
  },
  {
   "q": "Dans un circuit RL série, U_R = 30 V et U_L = 40 V. La tension totale vaut :",
   "choix": [
    "70 V",
    "10 V",
    "50 V"
   ],
   "bonne": 2,
   "expl": "√(30²+40²) = 50 V. La réponse « 70 V » additionne des valeurs efficaces déphasées : c'est l'erreur la plus fréquente du chapitre."
  },
  {
   "q": "Pour construire le Fresnel d'un circuit série, on prend comme référence :",
   "choix": [
    "la tension totale",
    "le courant",
    "la tension du plus grand dipôle"
   ],
   "bonne": 1,
   "expl": "Le courant est le même dans tous les dipôles en série : c'est la seule grandeur commune, donc la référence naturelle. En parallèle, ce serait la tension."
  },
  {
   "q": "Dans un circuit capacitif :",
   "choix": [
    "le courant est en avance sur la tension",
    "le courant est en retard sur la tension",
    "courant et tension sont en phase"
   ],
   "bonne": 0,
   "expl": "Condensateur : φ= -90, le courant est en avance. Un circuit RC est capacitif, le courant y est en avance d'un angle compris entre 0 et 90."
  },
  {
   "q": "Un récepteur absorbe 2,0 kW avec cosφ= 0,80. Sa puissance apparente vaut :",
   "choix": [
    "1,6 kV·A",
    "2,0 kV·A",
    "2,5 kV·A"
   ],
   "bonne": 2,
   "expl": "S = P/cosφ= 2000/0,80 = 2500 V·A. La réponse « 1,6 kV·A » multiplie au lieu de diviser : S est toujours supérieure ou égale à P."
  },
  {
   "q": "La puissance réactive s'exprime en :",
   "choix": [
    "watts",
    "volts-ampères réactifs",
    "volts-ampères"
   ],
   "bonne": 1,
   "expl": "Le var est un volt-ampère : même dimension, nom distinct pour ne jamais confondre Q avec S."
  },
  {
   "q": "Deux récepteurs : S₁ = 3 kV·A et S₂ = 4 kV·A. La puissance apparente totale :",
   "choix": [
    "ne peut pas être calculée sans les P et les Q",
    "vaut toujours 5 kV·A",
    "vaut toujours 7 kV·A"
   ],
   "bonne": 0,
   "expl": "Les S ne s'additionnent que si les deux récepteurs ont le même cosφ. Dans le cas général, on additionne les P et les Q (Boucherot), puis on recalcule S."
  },
  {
   "q": "On ajoute un condensateur en parallèle sur une installation inductive. La puissance active :",
   "choix": [
    "diminue",
    "ne change pas",
    "augmente"
   ],
   "bonne": 1,
   "expl": "Un condensateur idéal ne consomme aucune puissance active : il n'échange que du réactif. Les machines reçoivent la même tension et fonctionnent exactement comme avant."
  },
  {
   "q": "Relever le facteur de puissance d'une installation permet surtout de :",
   "choix": [
    "diminuer la puissance consommée par les machines",
    "augmenter la tension du réseau",
    "diminuer le courant de ligne et les pertes dans les câbles"
   ],
   "bonne": 2,
   "expl": "À puissance active égale, I = P/(Ucosφ) diminue quand cosφ augmente, et les pertes R I² avec lui. La réponse « diminuer la puissance consommée par les machines » est un contresens fréquent."
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Tension sinusoïdale » ?",
   "verso": "Une tension sinusoïdale s'écrit u(t) = U_maxsin(ωt), où U_max est la <strong>tension maximale</strong> (ou amplitude) et ω la <strong>pulsation</strong>, en rad/s. Elle se répète à l'identique toutes les <strong>périodes</strong> T.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Valeur efficace » ?",
   "verso": "La valeur efficace U d'une tension variable est",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Déphasage » ?",
   "verso": "Le déphasage φ du courant par rapport à la tension est le décalage entre les deux courbes, rapporté à la période et exprimé en degrés : une période entière vaut 360.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Vecteur de Fresnel » ?",
   "verso": "À une grandeur sinusoïdale, on associe un vecteur dont",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Valeur moyenne — qu'y a-t-il à retenir ?",
   "verso": "Sur une période, les alternances positive et négative ont la même aire : la valeur moyenne d'une grandeur sinusoïdale est nulle. Un voltmètre en position continue (DC) branché sur le réseau afficherait donc zéro — ce n'est pas lui qu'il faut utiliser.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Signe du déphasage — qu'y a-t-il à retenir ?",
   "verso": "Par convention, φ est le déphasage de u par rapport à i : φ> 0 quand la tension est en avance sur le courant (circuit <strong>inductif</strong>), φ< 0 quand elle est en retard (circuit <strong>capacitif</strong>).",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Pourquoi c'est utile — qu'y a-t-il à retenir ?",
   "verso": "Additionner deux grandeurs sinusoïdales de même fréquence revient à additionner leurs vecteurs de Fresnel. C'est la seule addition autorisée : les valeurs efficaces, elles, <strong>ne s'additionnent pas</strong> dès que les grandeurs sont déphasées.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Un condensateur <em>fournit</em> du réactif : P = 0, …….",
   "rep": "Q = -I²/(Cω) < 0",
   "verso": "<strong>Q = -I²/(Cω) < 0</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Une bobine idéale ne consomme que du réactif : P = 0, …….",
   "rep": "Q = LωI² > 0",
   "verso": "<strong>Q = LωI² > 0</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "172 Tracer I horizontal : c'est la <strong>référence</strong>, car le courant est …….",
   "rep": "commun à tous les dipôles en série",
   "verso": "<strong>commun à tous les dipôles en série</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Un condensateur placé …… sur l'installation fournit sur place une partie de la puissance réactive consommée par les moteurs.",
   "rep": "en parallèle",
   "verso": "<strong>en parallèle</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Sur une période, les alternances positive et négative ont la même aire : la valeur moyenne d'une grandeur sinusoïdale est …….",
   "rep": "nulle",
   "verso": "<strong>nulle</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Une tension sinusoïdale de période 20 ms a pour fréquence ……",
   "rep": "50 Hz",
   "verso": "<strong>50 Hz</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La tension du réseau, 230 V, désigne ……",
   "rep": "sa valeur efficace",
   "verso": "<strong>sa valeur efficace</strong> — Toutes les valeurs de plaque et de réseau sont efficaces. La valeur maximale vaut 325 V ; la valeur moyenne, nulle, ne caractérise rien.",
   "origine": "bilan"
  }
 ],
 "cartes_figees": false
};
