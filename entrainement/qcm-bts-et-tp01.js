/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · TP 1 — Notions fondamentales d'électricité
   Le bilan vient de tp01_bilan.tex, les cartes des \trou{} de
   tp01_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "1",
 "cle": "tp01",
 "etiquette": "TP 1",
 "titre": "Notions fondamentales d'électricité",
 "niveau": "BTS ET",
 "prerequis": [
  {
   "q": "Écrire 0,000047 en notation scientifique :",
   "choix": [
    "4,7×10⁻⁵",
    "4,7×10⁻⁴",
    "47×10⁻⁶",
    "4,7×10⁵"
   ],
   "bonne": 0,
   "expl": "4,7×10⁻⁵. La notation scientifique demande un seul chiffre avant la virgule : 47×10⁻⁶ est juste numériquement mais mal écrit."
  },
  {
   "q": "Convertir 2,5 mA en ampères :",
   "choix": [
    "2,5×10⁻³ A",
    "2,5×10³ A",
    "2,5×10⁻⁶ A",
    "2,5×10⁻² A"
   ],
   "bonne": 0,
   "expl": "milli vaut 10⁻³. C'est la conversion la plus fréquente de l'année."
  },
  {
   "q": "Convertir 16 mm² en m² :",
   "choix": [
    "1,6×10⁻⁵ m²",
    "1,6×10⁻³ m²",
    "1,6×10⁻⁶ m²",
    "1,6×10⁻² m²"
   ],
   "bonne": 0,
   "expl": "1 mm = 10⁻³ m, donc 1 mm² = (10⁻³)² = 10⁻⁶ m² : 16 mm² = 1,6×10⁻⁵ m². Le rang du préfixe s'élève au carré, une seule fois."
  },
  {
   "q": "Calculer (1,8×10⁻⁸ × 40)/(4×10⁻⁶) :",
   "choix": [
    "0,18",
    "1,8",
    "0,018",
    "18"
   ],
   "bonne": 0,
   "expl": "7,2×10⁻⁷ / 4×10⁻⁶ = 0,18 Ω. Diviser par 10⁻⁶ revient à multiplier par 10⁺⁶ : l'exposant change de signe en remontant."
  },
  {
   "q": "De P = U I, on tire :",
   "choix": [
    "I = P/U",
    "I = U/P",
    "I = P U",
    "I = U − P"
   ],
   "bonne": 0,
   "expl": "Le U qui multipliait à droite passe au dénominateur à gauche. Ce qui multiplie d'un côté divise de l'autre."
  },
  {
   "q": "Une grandeur y varie comme x². Si x est divisée par 2, y est divisée par :",
   "choix": [
    "4",
    "2",
    "8",
    "16"
   ],
   "bonne": 0,
   "expl": "(1/2)² = 1/4. Le carré double l'effet de toute variation."
  }
 ],
 "bilan": [
  {
   "q": "Pour mesurer le courant absorbé par un moteur, l'ampèremètre se branche :",
   "choix": [
    "en série avec le moteur",
    "aux bornes du moteur",
    "entre une phase et la terre"
   ],
   "bonne": 0,
   "expl": "Le courant traverse : l'appareil doit être inséré dans la branche. Branché aux bornes, il constitue un court-circuit — c'est la seule erreur de branchement dangereuse."
  },
  {
   "q": "La tension U_AB vaut 12 V. Alors U_BA vaut :",
   "choix": [
    "12 V",
    "-12 V",
    "0 V"
   ],
   "bonne": 1,
   "expl": "U_BA = V_B - V_A = -U_AB. L'ordre des indices est une information, pas une formalité : l'inverser change le signe de toutes les conclusions qui suivent."
  },
  {
   "q": "Deux points M et N sont reliés par un simple fil. La tension U_MN vaut :",
   "choix": [
    "on ne peut pas savoir",
    "la tension d'alimentation",
    "0 V"
   ],
   "bonne": 2,
   "expl": "Un fil idéal impose le même potentiel à ses deux extrémités : V_M = V_N, donc U_MN = 0 V. C'est ce qui permet de dire que deux points reliés par un fil ne forment qu'un seul et même nœud, même s'ils sont dessinés loin l'un de l'autre."
  },
  {
   "q": "On déplace la masse d'un montage sur un autre point. Alors :",
   "choix": [
    "toutes les tensions changent",
    "tous les potentiels changent, mais pas les tensions",
    "rien ne change"
   ],
   "bonne": 1,
   "expl": "La masse est un choix de référence, pas une grandeur physique. La déplacer décale tous les potentiels du même montant ; les différences de potentiel, donc les tensions, sont inchangées. C'est pourquoi un potentiel ne se donne jamais sans préciser par rapport à quoi."
  },
  {
   "q": "En convention récepteur, on mesure U = 9 V et I = -2 A. Le dipôle :",
   "choix": [
    "reçoit 18 W",
    "ne transfère aucune puissance",
    "fournit 18 W"
   ],
   "bonne": 2,
   "expl": "P = 9×(-2) = -18 W. En convention récepteur, une puissance négative signifie que le dipôle fournit en réalité de la puissance. Ce n'est pas une erreur de calcul : c'est un résultat à interpréter."
  },
  {
   "q": "Trois branches se rejoignent en un nœud. Deux courants entrants valent 7 A et 4 A. Le courant sortant vaut :",
   "choix": [
    "11 A",
    "3 A",
    "28 A"
   ],
   "bonne": 0,
   "expl": "Loi des nœuds : 7+4 = 11 A. Un nœud n'accumule rien."
  },
  {
   "q": "Deux résistances de 100 Ω et 300 Ω sont en parallèle. La résistance équivalente vaut :",
   "choix": [
    "75 Ω",
    "200 Ω",
    "400 Ω"
   ],
   "bonne": 0,
   "expl": "(100× 300)/400 = 75 Ω. Contrôle immédiat : le résultat doit être inférieur à la plus petite des deux, ici 100 Ω. La réponse « 400 Ω » est celle du groupement série, la réponse « 200 Ω » n'est la moyenne de rien."
  },
  {
   "q": "La formule du diviseur de tension U₂ = U R₂/(R₁+R₂) n'est valable que si :",
   "choix": [
    "R₁ = R₂",
    "la tension U est continue",
    "aucun courant ne sort du point milieu"
   ],
   "bonne": 2,
   "expl": "Dès qu'une charge est branchée au point milieu, un courant en sort et la formule surestime la tension. Elle donne pourtant un résultat plausible, ce qui la rend particulièrement traîtresse — voir l'exercice du capteur de niveau."
  },
  {
   "q": "Une section de 4 mmeter² vaut, en meter² :",
   "choix": [
    "4×10⁻³ meter²",
    "4×10⁻⁶ meter²",
    "4×10⁻² meter²"
   ],
   "bonne": 1,
   "expl": "Une surface se convertit au carré : 1 mmeter² = (1×10⁻³)² = 1×10⁻⁶ meter². La réponse « 4×10⁻³ meter² » est l'erreur la plus fréquente de toute la formation, et elle intervient dès le premier calcul de résistance de câble."
  },
  {
   "q": "À longueur et section égales, un conducteur en aluminium comparé à un conducteur en cuivre :",
   "choix": [
    "résiste moins",
    "résiste davantage",
    "résiste autant"
   ],
   "bonne": 1,
   "expl": "ρ_Al = 2,8×10⁻⁸ Ω·meter contre 1,8×10⁻⁸ Ω·meter pour le cuivre, soit environ 55 % de plus. C'est pour cela qu'une liaison aluminium demande une section supérieure à résistance égale."
  },
  {
   "q": "Les pertes par effet Joule dans un conducteur de résistance R parcouru par I valent :",
   "choix": [
    "R I²",
    "R I",
    "R² I"
   ],
   "bonne": 0,
   "expl": "P_J = R I². En remplaçant U par R I dans P = U I, on obtient bien un courant au carré."
  },
  {
   "q": "On divise par deux le courant dans une ligne. Les pertes en ligne sont :",
   "choix": [
    "divisées par 2",
    "inchangées",
    "divisées par 4"
   ],
   "bonne": 2,
   "expl": "Les pertes varient comme le carré du courant : (1/2)² = 1/4. Ce raisonnement commandera tout le chapitre sur la distribution de l'énergie, et il justifie à lui seul le transport en haute tension."
  },
  {
   "q": "Un appareil de 2 kW fonctionne 5 h. L'énergie consommée vaut :",
   "choix": [
    "10 kW",
    "0,4 kW·h",
    "10 kW·h"
   ],
   "bonne": 2,
   "expl": "W = P× t = 2× 5 = 10 kW·h. La réponse « 10 kW » confond puissance et énergie : le kilowatt est un débit, le kilowattheure une quantité."
  },
  {
   "q": "En monophasé, pour calculer les pertes d'une liaison, il faut tenir compte :",
   "choix": [
    "du seul conducteur aller",
    "des conducteurs aller et retour",
    "de trois conducteurs"
   ],
   "bonne": 1,
   "expl": "Le courant fait l'aller et le retour : les deux conducteurs dissipent. On écrit donc P_J = 2 R_cond I². Oublier le retour divise le résultat par deux — c'est l'erreur classique du monophasé, et elle disparaîtra en triphasé équilibré où le neutre ne conduit pas."
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi note-t-on U, I, P en majuscules dans ce chapitre ?",
   "verso": "On est en <b>régime continu</b> : les grandeurs ne varient pas. Les minuscules u, i, p sont réservées aux <b>valeurs instantanées</b> d'une grandeur variable.",
   "origine": "Cours §0 Convention d'écriture"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que le courant électrique ? Que mesure son intensité ?",
   "verso": "Un <b>déplacement d'ensemble de porteurs de charge</b>. L'intensité est la charge qui traverse une section par unité de temps : <b>I = Q / t</b>, en A.",
   "origine": "Cours §1 Courant électrique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation entre la tension U<sub>AB</sub> et les potentiels ? Qu'est-ce que la masse ?",
   "verso": "<b>U<sub>AB</sub> = V<sub>A</sub> − V<sub>B</sub></b>.<br>La <b>masse</b> est le point de référence dont on fixe le potentiel à <b>0 V</b>.",
   "origine": "Cours §1 Potentiel et tension"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi utiliser une sonde différentielle avec l'oscilloscope ?",
   "verso": "Les masses des appareils sont reliées par la <b>terre</b> : deux voies sur deux « bas » différents créent un <b>court-circuit</b>. La sonde différentielle mesure entre deux points quelconques.",
   "origine": "Cours §1 Pourquoi cela compte dès le premier TP"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment se branchent l'ampèremètre et le voltmètre ?",
   "verso": "Ampèremètre : <b>en série</b> (le courant traverse).<br>Voltmètre : <b>en dérivation</b>, aux bornes du dipôle.",
   "origine": "Cours §1 Deux grandeurs, deux branchements"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Où place-t-on la flèche d'un courant ? d'une tension ? Vers où pointe celle de U<sub>AB</sub> ?",
   "verso": "Courant : <b>sur le fil</b>. Tension : <b>à côté du dipôle</b>.<br>U<sub>AB</sub> pointe vers <b>A</b> (sa première lettre).",
   "origine": "Cours §2 Deux règles de fléchage"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Conventions récepteur et générateur : sens des flèches de U et I ?",
   "verso": "<b>Récepteur</b> : flèches <b>opposées</b>.<br><b>Générateur</b> : flèches <b>dans le même sens</b>.",
   "origine": "Cours §2 Les deux conventions"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>En convention récepteur, que signifie P = U I &gt; 0 ? et P &lt; 0 ?",
   "verso": "P &gt; 0 : le dipôle <b>reçoit</b> de la puissance.<br>P &lt; 0 : il en <b>fournit</b> (ex. moteur qui freine en génératrice).<br>En convention générateur, c'est l'inverse.",
   "origine": "Cours §2 P = U I"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>On trouve I = −2,5 A. Que faire ?",
   "verso": "Rien à corriger : le courant circule <b>en sens inverse de la flèche</b> choisie. On garde la valeur et on l'interprète.",
   "origine": "Cours §2 Ce que révèle un signe négatif"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer la loi des nœuds.",
   "verso": "En un nœud, la <b>somme des courants qui entrent = somme des courants qui sortent</b>. La charge se conserve.",
   "origine": "Cours §3 Loi des nœuds"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relation de Chasles pour les tensions ? Tension entre deux points reliés par un fil ?",
   "verso": "<b>U<sub>AC</sub> = U<sub>AB</sub> + U<sub>BC</sub></b><br>Deux points reliés par un fil sont au <b>même potentiel</b> : tension nulle.",
   "origine": "Cours §3 Relation de Chasles"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer la loi des mailles et la règle des signes.",
   "verso": "Sur un tour complet : <b>Σ U = 0</b>.<br>Tension <b>+</b> si sa flèche est dans le sens de parcours, <b>−</b> sinon.<br>Sur une boucle simple : E = U<sub>1</sub> + U<sub>2</sub> + …",
   "origine": "Cours §3 Loi des mailles"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quand deux dipôles sont-ils en série ? en parallèle ?",
   "verso": "En <b>série</b> : traversés par <b>le même courant</b>.<br>En <b>parallèle</b> : soumis à <b>la même tension</b>.",
   "origine": "Cours §4 Série et parallèle"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Résistance équivalente en série ? en parallèle ?",
   "verso": "Série : <b>R<sub>eq</sub> = R<sub>1</sub> + R<sub>2</sub></b><br>Parallèle : <b>1/R<sub>eq</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub></b> (deux résistances : R<sub>1</sub>R<sub>2</sub>/(R<sub>1</sub>+R<sub>2</sub>)), toujours plus petite que la plus petite.",
   "origine": "Cours §4 Associer des dipôles"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formule du diviseur de tension ? À quelle condition est-elle valable ?",
   "verso": "<b>U<sub>2</sub> = U × R<sub>2</sub> / (R<sub>1</sub> + R<sub>2</sub>)</b><br>Seulement si <b>aucun courant ne sort du point milieu</b> (diviseur à vide).",
   "origine": "Cours §5 Le diviseur de tension"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rhéostat câblé sur 2 bornes ou sur 3 bornes : quel usage ?",
   "verso": "<b>2 bornes</b> (extrémité + curseur) : <b>résistance réglable</b> (rhéostat), règle un courant.<br><b>3 bornes</b> : <b>diviseur de tension réglable</b> (potentiomètre), règle une tension : U<sub>S</sub> = U<sub>E</sub> × R<sub>CB</sub>/R<sub>AB</sub>.",
   "origine": "Cours §5 Le rhéostat"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Résistance d'un conducteur de longueur ℓ et de section S ? Résistivité du cuivre ?",
   "verso": "<b>R = ρ ℓ / S</b> (ρ en Ω·m, ℓ en m, S en m²).<br>Cuivre : <b>1,8 × 10<sup>−8</sup> Ω·m</b> ; aluminium : 2,8 × 10<sup>−8</sup> Ω·m.",
   "origine": "Cours §6 Résistance d'un conducteur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>1 mm² = ? m²",
   "verso": "<b>1 mm² = 10<sup>−6</sup> m²</b> (et non 10<sup>−3</sup>) : une surface se convertit au carré.",
   "origine": "Cours §6 La conversion qui coûte le plus de points"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissance d'un dipôle en continu ? Énergie sur une durée t ?",
   "verso": "<b>P = U I</b> (débit d'énergie, en W).<br><b>W = P × t</b> (quantité transférée, en J). Le compteur facture des kWh : 1 kWh = 3,6 MJ.",
   "origine": "Cours §7 Puissance et énergie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissance dissipée par effet Joule ? Que se passe-t-il si l'on divise le courant par 2 ?",
   "verso": "<b>P<sub>J</sub> = R I²</b> (chaleur).<br>Les pertes varient comme le <b>carré du courant</b> : I / 2 → pertes / <b>4</b>.",
   "origine": "Cours §7 L'effet Joule"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelles sont les trois vérifications sur le multimètre avant la mise sous tension ?",
   "verso": "1. La <b>fonction</b> (tension/courant, continu/alternatif).<br>2. Les <b>bornes</b> (celle du courant est distincte).<br>3. Le <b>calibre</b>, au-dessus de la valeur attendue puis resserré.",
   "origine": "Cours §8 Les trois vérifications"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que se passe-t-il si l'on branche un ampèremètre en dérivation sur une source ?",
   "verso": "Sa résistance est quasi nulle : c'est un <b>court-circuit franc</b> (fusible, appareil, opérateur exposés). C'est la seule erreur de branchement dangereuse.",
   "origine": "Cours §8 L'erreur qui détruit le matériel"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Boîte à décades réglée sur 100 Ω : quel courant admissible commande ?",
   "verso": "Celui de la <b>décade la plus contraignante parmi celles affichées</b> (décades en série) : ici ×100 → <b>70 mA</b>. On calcule le courant <b>avant</b> la mise sous tension.",
   "origine": "Cours §8 Boîtes à décades"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la valeur efficace d'un courant périodique. Que signifie TRMS ?",
   "verso": "La valeur du <b>courant continu</b> qui dissiperait <b>la même puissance</b> dans la même résistance.<br>Un appareil <b>TRMS</b> la mesure quelle que soit la forme d'onde.",
   "origine": "Cours §8 Valeur efficace vraie"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment écrire une loi des mailles sans erreur de signe ?",
   "verso": "1. Choisir un <b>point de départ</b> et un <b>sens de parcours</b>, les dessiner.<br>2. Avancer dipôle après dipôle : <b>+U</b> si la flèche est dans le sens de parcours, <b>−U</b> sinon.<br>3. Revenu au départ : somme = 0.",
   "origine": "Cours §3 Méthode — Écrire une loi des mailles"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>E = 24 V alimente R<sub>1</sub> = 100 Ω et R<sub>2</sub> = 200 Ω en série. Comment trouver I, U<sub>1</sub>, U<sub>2</sub> ?",
   "verso": "1. Orienter I, flécher U<sub>1</sub>, U<sub>2</sub> en convention récepteur.<br>2. Maille : E = (R<sub>1</sub> + R<sub>2</sub>) I.<br>3. I = 24 / 300 = <b>80 mA</b>.<br>4. U<sub>1</sub> = <b>8 V</b>, U<sub>2</sub> = <b>16 V</b>.<br>5. Vérifier : 8 + 16 = 24.",
   "origine": "Cours §3 Méthode — Résoudre un circuit à une maille"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Rhéostat 33 Ω sous 15 V, curseur à 40 % de la piste depuis B. Comment trouver U<sub>S</sub> et vérifier le matériel ?",
   "verso": "1. R<sub>CB</sub> = 0,40 × 33 = 13,2 Ω.<br>2. U<sub>S</sub> = 15 × 13,2/33 = <b>6,0 V</b>.<br>3. Courant dans la piste : 15/33 = 0,45 A &lt; courant admissible de la plaque.<br>4. Valable seulement sans charge sur le curseur.",
   "origine": "Cours §5 Méthode — Régler une tension au rhéostat"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Câble cuivre 60 m, 10 mm², 25 A, 2000 h/an. Comment chiffrer les pertes annuelles ?",
   "verso": "1. R = ρ ℓ / S = 1,8 × 10<sup>−8</sup> × 60 / 10 × 10<sup>−6</sup> = <b>0,108 Ω</b>.<br>2. P<sub>J</sub> = R I² = 0,108 × 25² = <b>67,5 W</b>.<br>3. W = 0,0675 kW × 2000 h = <b>135 kWh</b>.<br>4. Coût = W × prix du kWh.",
   "origine": "Cours §7 Méthode — Ce que coûte une canalisation"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment passer d'une mesure de tension à une mesure de courant au multimètre TRG803 ?",
   "verso": "1. Couper l'alimentation.<br>2. Tourner le commutateur sur <b>A</b>.<br>3. <b>Déplacer le cordon</b> de V vers µA mA ou 10 A MAX.<br>4. Insérer l'appareil <b>en série</b>, calibre au-dessus de la valeur attendue.",
   "origine": "Cours §8 Mesurer sans casser"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
