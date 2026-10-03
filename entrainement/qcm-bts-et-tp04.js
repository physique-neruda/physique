/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · TP 4 — Le triphasé
   Le bilan vient de tp04_bilan.tex, les cartes des \trou{} de
   tp04_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "4",
 "cle": "tp04",
 "etiquette": "TP 4",
 "titre": "Le triphasé",
 "niveau": "BTS ET",
 "prerequis": [],
 "bilan": [
  {
   "q": "Sur le réseau de distribution, la tension entre une phase et le neutre vaut :",
   "choix": [
    "230 V",
    "400 V",
    "690 V",
    "127 V"
   ],
   "bonne": 0,
   "expl": "La tension simple ; 400 V est la composée."
  },
  {
   "q": "Les trois tensions simples sont décalées l'une de l'autre de :",
   "choix": [
    "90",
    "180",
    "60",
    "120"
   ],
   "bonne": 3,
   "expl": "Un tiers de période."
  },
  {
   "q": "La tension composée vaut :",
   "choix": [
    "2V",
    "V√3",
    "V√2",
    "3V"
   ],
   "bonne": 1,
   "expl": "Construction de Fresnel : 2Vcos30°. La réponse « 2V » additionne des vecteurs qui ne sont pas alignés."
  },
  {
   "q": "En couplage étoile, chaque élément du récepteur est soumis à :",
   "choix": [
    "U√3",
    "la tension composée",
    "la tension simple",
    "aucune tension"
   ],
   "bonne": 2,
   "expl": "La tension simple, par construction du couplage étoile."
  },
  {
   "q": "En couplage triangle, le courant de ligne vaut :",
   "choix": [
    "J",
    "3J",
    "J/√3",
    "J√3"
   ],
   "bonne": 3,
   "expl": "Le courant de ligne se partage entre deux éléments."
  },
  {
   "q": "Un récepteur triphasé équilibré : le courant dans le neutre est :",
   "choix": [
    "trois fois le courant de ligne",
    "égal au courant de ligne",
    "nul",
    "impossible à prévoir"
   ],
   "bonne": 2,
   "expl": "La somme de trois courants égaux décalés de 120 est nulle."
  },
  {
   "q": "Un moteur « 230 V Δ / 400 V Y » se branche sur le réseau 230/400 V en :",
   "choix": [
    "triangle",
    "étoile",
    "étoile ou triangle indifféremment",
    "il ne peut pas être branché"
   ],
   "bonne": 1,
   "expl": "Un enroulement supporte 230 V, la tension simple du réseau."
  },
  {
   "q": "Un moteur « 400 V Δ / 690 V Y » se branche sur le même réseau en :",
   "choix": [
    "triangle",
    "il ne peut pas être branché",
    "étoile",
    "étoile puis triangle obligatoirement"
   ],
   "bonne": 0,
   "expl": "Un enroulement supporte 400 V, la composée."
  },
  {
   "q": "La puissance active d'un récepteur triphasé équilibré s'écrit :",
   "choix": [
    "UIcosφ",
    "3UIcosφ",
    "√3 UIcosφ",
    "√3 UI"
   ],
   "bonne": 2,
   "expl": "La réponse « √3 UIcosφ » est la puissance apparente."
  },
  {
   "q": "Dans cette formule, φ est le déphasage entre :",
   "choix": [
    "la tension et le courant d'un même élément",
    "U et I de ligne",
    "deux tensions simples",
    "deux courants de ligne"
   ],
   "bonne": 0,
   "expl": "Le piège classique : ce n'est pas le déphasage entre U et I de ligne."
  },
  {
   "q": "Méthode des deux wattmètres : P₁ = 2000 W, P₂ = 500 W. La puissance active vaut :",
   "choix": [
    "1500 W",
    "2500 W",
    "2598 W",
    "1000 W"
   ],
   "bonne": 1,
   "expl": "P = P₁ + P₂ ; la réponse « 1500 W » confond avec le calcul de Q."
  },
  {
   "q": "Une lecture P₂ négative signifie :",
   "choix": [
    "un wattmètre mal branché",
    "un récepteur générateur",
    "un défaut d'isolement",
    "un facteur de puissance inférieur à 0,5"
   ],
   "bonne": 3,
   "expl": "Une lecture négative est normale à faible cosφ, par exemple un moteur à vide."
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que distribue un réseau triphasé ? Qu'est-ce qu'une tension simple ?",
   "verso": "Trois phases <b>L1, L2, L3</b> et souvent un <b>neutre N</b>.<br>Tension simple : entre <b>une phase et le neutre</b> (v<sub>1</sub>, v<sub>2</sub>, v<sub>3</sub>).",
   "origine": "Cours §1 Le réseau triphasé"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Caractéristiques d'un système triphasé équilibré de tensions ?",
   "verso": "Même <b>valeur efficace V</b>, même fréquence, décalées d'<b>un tiers de période (120°)</b>. Leur somme est <b>nulle</b> à chaque instant.",
   "origine": "Cours §1 Système triphasé équilibré"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'une tension composée ? Relation avec la tension simple ? Valeurs du réseau ?",
   "verso": "Tension <b>entre deux phases</b> : u<sub>12</sub> = v<sub>1</sub> − v<sub>2</sub>.<br><b>U = V√3</b> : V = 230 V, <b>U = 400 V</b> (réseau « 230/400 V »).",
   "origine": "Cours §2 Tension composée"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi u<sub>12</sub> ne vaut-il pas 230 − 230 = 0 V ?",
   "verso": "Les tensions simples <b>ne sont pas en phase</b> (120°) : la différence se construit avec <b>Fresnel</b>. U = V√3 relie des valeurs efficaces.",
   "origine": "Cours §2 Le piège de la soustraction"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Couplage étoile / triangle : tension aux bornes d'un élément ? Relation entre I (ligne) et J (élément) ?",
   "verso": "<b>Étoile</b> : chaque élément sous <b>V</b>, <b>I = J</b>.<br><b>Triangle</b> : chaque élément sous <b>U</b>, <b>I = J√3</b>.",
   "origine": "Cours §3 Étoile et triangle"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Trois résistances de 100 Ω sur le 230/400 V : courants en étoile et en triangle ?",
   "verso": "Étoile : J = I = 230/100 = <b>2,3 A</b>.<br>Triangle : J = 400/100 = 4,0 A, I = 4,0√3 = <b>6,9 A</b>.<br>Le triangle absorbe <b>3 fois plus</b> de puissance (√3 fois plus de tension par élément).",
   "origine": "Cours §3 Trois résistances en étoile puis en triangle"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Récepteur équilibré : quel courant circule dans le neutre ? Pourquoi ?",
   "verso": "<b>Aucun</b> : les trois courants de ligne ont même valeur, sont décalés de 120°, et leur somme est nulle.",
   "origine": "Cours §3 Le neutre"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment choisir le couplage d'un moteur à partir de sa plaque ?",
   "verso": "1. La <b>plus petite</b> tension de la plaque est celle que supporte <b>un enroulement</b>.<br>2. Lire la tension composée U du réseau.<br>3. Enroulement prévu pour U → <b>triangle</b> ; pour U/√3 → <b>étoile</b>.<br>Ex. « 400 V Δ / 690 V Y » sur 400 V → triangle ; « 230/400 V » sur 400 V → étoile.",
   "origine": "Cours §4 Choisir le couplage d'un moteur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que se passe-t-il si un moteur « 230/400 V » est couplé en triangle sur le 400 V ?",
   "verso": "Chaque enroulement reçoit <b>√3 fois</b> sa tension nominale : il chauffe et <b>grille</b> en quelques minutes.",
   "origine": "Cours §4 L'erreur de couplage"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>P, Q, S d'un récepteur triphasé équilibré (grandeurs de ligne) ?",
   "verso": "<b>P = √3 U I cos φ</b> ; <b>Q = √3 U I sin φ</b> ; <b>S = √3 U I</b>.<br>Valables dans les deux couplages ; Boucherot s'applique.",
   "origine": "Cours §5 Puissances en triphasé"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans P = √3 U I cos φ, entre quelles grandeurs est mesuré φ ?",
   "verso": "Entre la <b>tension et le courant d'un même élément</b>, pas entre U et I de ligne.",
   "origine": "Cours §5 Quel déphasage φ ?"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Moteur sur 400 V : I = 8,2 A, cos φ = 0,82. P, S, Q ?",
   "verso": "P = √3 × 400 × 8,2 × 0,82 = <b>4,66 kW</b><br>S = √3 × 400 × 8,2 = <b>5,68 kVA</b><br>Q = √(S² − P²) = <b>3,25 kvar</b>",
   "origine": "Cours §5 Un moteur sur le 400 V"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Méthode des deux wattmètres : P et Q à partir des lectures P<sub>1</sub> et P<sub>2</sub> ?",
   "verso": "<b>P = P<sub>1</sub> + P<sub>2</sub></b><br><b>Q = √3 (P<sub>1</sub> − P<sub>2</sub>)</b><br>Lectures prises <b>avec leur signe</b> (sans neutre, récepteur équilibré).",
   "origine": "Cours §6 La méthode des deux wattmètres"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Un des deux wattmètres affiche une valeur négative : erreur ?",
   "verso": "Non : quand <b>cos φ &lt; 0,5</b>, P<sub>2</sub> devient négatif. On le compte <b>avec son signe</b>.",
   "origine": "Cours §6 Une lecture négative"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>P<sub>1</sub> = 3200 W et P<sub>2</sub> = 1400 W : P, Q, cos φ ?",
   "verso": "1. P = 3200 + 1400 = <b>4600 W</b>.<br>2. Q = √3 × (3200 − 1400) = <b>3118 var</b>.<br>3. tan φ = Q/P = 0,678 → <b>cos φ = 0,83</b>.",
   "origine": "Cours §6 Exploiter les deux lectures"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
