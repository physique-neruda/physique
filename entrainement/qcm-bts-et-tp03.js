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
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que désignent u(t) en minuscule et U en majuscule ? « u = 230 V » est-il correct ?",
   "verso": "Minuscule : valeur <b>instantanée</b>, qui change à chaque instant. Majuscule : <b>valeur efficace</b>, un nombre fixe.<br>« u = 230 V » est une faute : c'est <b>U</b> qui vaut 230 V.",
   "origine": "Convention d'écriture"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Écriture d'une tension sinusoïdale ? Relations entre T, f et ω ?",
   "verso": "<b>u(t) = U<sub>max</sub> sin(ωt)</b><br><b>f = 1/T</b> et <b>ω = 2πf</b> (rad/s).",
   "origine": "Cours §1 Grandeur sinusoïdale"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Réseau à 50 Hz : période ? pulsation ?",
   "verso": "<b>T = 20 ms</b>, <b>ω = 2π × 50 = 314 rad/s</b>. La tension passe par zéro 100 fois par seconde.",
   "origine": "Cours §1 Le réseau"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Valeur moyenne d'une grandeur sinusoïdale ? Conséquence pour le voltmètre ?",
   "verso": "<b>Nulle</b> : les deux alternances ont la même aire. Un voltmètre en position <b>DC</b> afficherait zéro sur le réseau : il faut la position <b>AC</b>.",
   "origine": "Cours §1 Valeur moyenne"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définition de la valeur efficace ? Relation avec U<sub>max</sub> ?",
   "verso": "La valeur de la <b>tension continue qui produirait le même échauffement</b> dans la même résistance.<br><b>U = U<sub>max</sub> / √2</b> — en sinusoïdal <b>uniquement</b>.",
   "origine": "Cours §2 Valeur efficace"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Valeur efficace d'un carré ? d'un triangle ? Quel appareil pour un signal quelconque ?",
   "verso": "Carré : U = U<sub>max</sub> ; triangle : U = U<sub>max</sub>/√3.<br>Signal quelconque (variateur, découpage) : seul un appareil <b>TRMS</b> mesure la vraie valeur efficace ; un non-TRMS se trompe souvent de plus de 10 %.",
   "origine": "Cours §2 Le facteur √2 n'est pas universel"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que lit-on à l'oscilloscope ? au multimètre en AC ? Que sont 230 V et 16 A sur une plaque ?",
   "verso": "Oscilloscope : la forme et <b>U<sub>max</sub></b>.<br>Multimètre AC : la <b>valeur efficace U</b>.<br>Les valeurs de plaque sont des <b>valeurs efficaces</b>.",
   "origine": "Cours §2 Ce que mesure chaque appareil"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définition et formule du déphasage ?",
   "verso": "Le décalage entre deux sinusoïdes de même fréquence, rapporté à la période (une période = 360°).<br><b>φ = 360° × Δt / T</b>",
   "origine": "Cours §3 Le déphasage"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment mesurer un déphasage sur un oscillogramme ?",
   "verso": "1. Repérer un passage par zéro <b>dans le même sens</b> sur chaque courbe.<br>2. Mesurer Δt entre les deux et la période T.<br>3. φ = 360 Δt / T.<br>4. Est <b>en avance celle qui passe par zéro la première</b>.<br>Ex. T = 20 ms, i 2 ms après u → φ = 36°, courant en retard.",
   "origine": "Cours §3 Mesurer un déphasage à l'oscilloscope"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que signifie φ &gt; 0 ? φ &lt; 0 ?",
   "verso": "φ est le déphasage de u par rapport à i.<br><b>φ &gt; 0</b> : tension en avance sur le courant → circuit <b>inductif</b>.<br><b>φ &lt; 0</b> : tension en retard → circuit <b>capacitif</b>.",
   "origine": "Cours §3 Signe du déphasage"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'associe-t-on à une grandeur sinusoïdale dans la représentation de Fresnel ?",
   "verso": "Un vecteur dont la <b>longueur est la valeur efficace</b> et dont l'<b>angle</b> avec la référence est le <b>déphasage</b>.",
   "origine": "Cours §4 Vecteur de Fresnel"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Peut-on additionner les valeurs efficaces de deux tensions déphasées ?",
   "verso": "<b>Non</b>. On additionne leurs <b>vecteurs de Fresnel</b> : c'est la seule addition autorisée.",
   "origine": "Cours §4 Pourquoi Fresnel"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définition de l'impédance ? Impédance et déphasage de R, L, C ?",
   "verso": "<b>Z = U / I</b> (valeurs efficaces), en Ω.<br>Résistance : <b>R</b>, 0°.<br>Bobine : <b>Lω</b>, +90°.<br>Condensateur : <b>1/(Cω)</b>, −90°.",
   "origine": "Cours §5 Impédance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment modélise-t-on une bobine réelle ? Que se passe-t-il si on l'alimente en continu ?",
   "verso": "<b>r en série avec L</b> : Z &gt; r et déphasage entre 0° et 90°.<br>En continu, seule r limite le courant : une bobine prévue pour 24 V alternatif <b>grille</b> sous 24 V continu.",
   "origine": "Cours §5 La bobine réelle"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Circuit série R, L, C : comment construire le diagramme de Fresnel ?",
   "verso": "1. <b>I horizontal</b> en référence (commun à tous les dipôles en série).<br>2. Bout à bout : U<sub>R</sub> en phase, U<sub>L</sub> à +90°, U<sub>C</sub> à −90°.<br>3. U joint l'origine à l'extrémité du dernier vecteur.<br>4. <b>U = √(U<sub>R</sub>² + (U<sub>L</sub> − U<sub>C</sub>)²)</b>, <b>tan φ = (U<sub>L</sub> − U<sub>C</sub>)/U<sub>R</sub></b>.",
   "origine": "Cours §6 Construire un Fresnel série"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Impédance d'un circuit R–L série ? Exemple R = 40 Ω, Lω = 30 Ω ?",
   "verso": "<b>Z = √(R² + X²)</b>, X = Lω (bobine) ou −1/(Cω) (condensateur).<br>40 et 30 Ω → <b>Z = 50 Ω</b>, φ = 36,9°.",
   "origine": "Cours §6 Triangle des impédances"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Expressions de P, Q, S en monophasé sinusoïdal ? Relation entre elles ?",
   "verso": "<b>P = U I cos φ</b> (W), <b>Q = U I sin φ</b> (var), <b>S = U I</b> (VA).<br><b>S² = P² + Q²</b>",
   "origine": "Cours §7 Les trois puissances"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que le facteur de puissance ? Que vaut-il en sinusoïdal ?",
   "verso": "<b>k = P / S</b>, la part de la puissance transportée réellement utilisée. En sinusoïdal : <b>cos φ</b>.",
   "origine": "Cours §7 Facteur de puissance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>P et Q pour une résistance, une bobine idéale, un condensateur ?",
   "verso": "Résistance : P = R I², <b>Q = 0</b>.<br>Bobine : <b>P = 0</b>, Q = Lω I² <b>&gt; 0</b> (consomme du réactif).<br>Condensateur : <b>P = 0</b>, Q = −I²/(Cω) <b>&lt; 0</b> (fournit du réactif).",
   "origine": "Cours §7 La puissance de chaque dipôle"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Moteur 1,5 kW sous 230 V, cos φ = 0,80 : S, I, Q ?",
   "verso": "S = P / cos φ = <b>1875 VA</b> ; I = S / U = <b>8,15 A</b> ; Q = √(S² − P²) = <b>1125 var</b>.<br>Un radiateur de même puissance ne tirerait que 6,52 A.",
   "origine": "Cours §7 Un moteur monophasé"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qui s'additionne dans une installation ? Qu'est-ce qui ne s'additionne pas ?",
   "verso": "Les puissances <b>actives</b> s'additionnent, les puissances <b>réactives</b> aussi (avec leur signe).<br>Les puissances <b>apparentes</b> et les <b>courants</b> ne s'additionnent pas.",
   "origine": "Cours §8 Théorème de Boucherot"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment faire le bilan de puissance d'une installation ?",
   "verso": "1. Pour chaque récepteur : P absorbée (P<sub>u</sub>/η pour un moteur), puis <b>Q = P tan φ</b>.<br>2. Additionner les P, puis les Q.<br>3. <b>S = √(P² + Q²)</b>, cos φ = P/S, I = S/U.<br>Présenter un tableau, une ligne par récepteur (forme attendue à l'E4).",
   "origine": "Cours §8 Faire un bilan de puissance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi un mauvais facteur de puissance coûte-t-il ? Quel est le principe du relèvement ?",
   "verso": "Courant plus grand que nécessaire : câbles qui chauffent, abonnement en kVA plus élevé, réactif facturé.<br>Un <b>condensateur en parallèle</b> fournit sur place une partie du réactif : P inchangée, Q, S et I diminuent.",
   "origine": "Cours §9 Pourquoi relever le facteur de puissance"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>5,0 kW sous 230 V, cos φ = 0,70 à relever à 0,95 : capacité ?",
   "verso": "1. tan φ = 1,020 ; tan φ' = 0,329.<br>2. <b>Q<sub>C</sub> = P (tan φ − tan φ')</b> = 5000 × 0,691 = 3456 var.<br>3. <b>C = Q<sub>C</sub> / (U² ω)</b> = 3456 / (230² × 314) = <b>208 µF</b>.<br>4. Contrôle : I passe de 31,1 A à 22,9 A.",
   "origine": "Cours §9 Dimensionner le condensateur"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
