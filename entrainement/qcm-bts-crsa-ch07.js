/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 7 — Distribution triphasée
   Le bilan vient de CRSA_ch07_bilan.tex, les cartes des \trou{} de
   CRSA_ch07_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "7",
 "cle": "ch07",
 "etiquette": "Chapitre 7",
 "titre": "Distribution triphasée",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Combien vaut √3, à quatre décimales ?",
   "choix": [
    "1,7321",
    "1,4142",
    "1,7320",
    "3,0000"
   ],
   "bonne": 0,
   "expl": "1,732050… donc 1,7321 par arrondi. C'est le nombre du triphasé : il reviendra à chaque page."
  },
  {
   "q": "Dans un réseau où la tension composée vaut 400 V, la tension simple vaut :",
   "choix": [
    "231 V",
    "693 V",
    "400 V",
    "133 V"
   ],
   "bonne": 0,
   "expl": "400/√3 = 231 V. On DIVISE la composée par √3 pour obtenir la simple ; multiplier donnerait 693 V, ce qui n'existe pas sur ce réseau."
  },
  {
   "q": "Un angle a pour cosinus 0,80. Son sinus vaut :",
   "choix": [
    "0,60",
    "0,64",
    "0,75",
    "0,80"
   ],
   "bonne": 0,
   "expl": "cos² + sin² = 1, donc sin = √(1 − 0,64) = 0,60. Le triangle 3-4-5 se cache derrière."
  },
  {
   "q": "Calculer √3 × 400 × 8,12 :",
   "choix": [
    "5,63×10³",
    "3,25×10³",
    "9,74×10³",
    "1,88×10³"
   ],
   "bonne": 0,
   "expl": "5626, soit 5,63×10³. C'est la forme de la puissance apparente en triphasé."
  },
  {
   "q": "Une puissance active de 4500 W pour une puissance apparente de 5625 V·A donne un facteur de puissance de :",
   "choix": [
    "0,80",
    "1,25",
    "0,45",
    "0,56"
   ],
   "bonne": 0,
   "expl": "4500/5625 = 0,80. Le facteur de puissance est le rapport actif sur apparent, toujours entre 0 et 1."
  },
  {
   "q": "Trois résistances de 57,5 Ω sont soumises chacune à 230 V. La puissance totale vaut :",
   "choix": [
    "2760 W",
    "920 W",
    "4600 W",
    "1590 W"
   ],
   "bonne": 0,
   "expl": "I = 230/57,5 = 4,00 A, P = 230 × 4,00 = 920 W par résistance, soit 2760 W pour les trois."
  }
 ],
 "bilan": [
  {
   "q": "Sur un réseau 230 /400 V, la tension de 230 V est mesurée :",
   "choix": [
    "entre deux phases",
    "aux bornes du disjoncteur",
    "entre le neutre et la terre",
    "entre une phase et le neutre"
   ],
   "bonne": 3,
   "expl": "Un réseau se nomme « simple / composée », dans cet ordre."
  },
  {
   "q": "La relation entre tension composée et tension simple est :",
   "choix": [
    "U = 3 V",
    "U = √3 V",
    "U = V/√3",
    "U = V√2"
   ],
   "bonne": 1,
   "expl": "√3 est le côté du triangle équilatéral des trois tensions simples."
  },
  {
   "q": "En couplage étoile, chaque récepteur est soumis à :",
   "choix": [
    "la tension composée U",
    "U/3",
    "la tension simple V",
    "V√3"
   ],
   "bonne": 2,
   "expl": "En étoile, un récepteur est branché entre une phase et le point neutre : il voit V."
  },
  {
   "q": "Trois résistances de tension nominale 400 V sont branchées sur un réseau 230 /400 V. Le couplage à réaliser est :",
   "choix": [
    "triangle",
    "étoile",
    "indifférent",
    "étoile avec neutre"
   ],
   "bonne": 0,
   "expl": "400 V est ici la tension composée : seul le triangle l'applique à chaque récepteur."
  },
  {
   "q": "Passer du couplage étoile au couplage triangle, sur le même réseau, multiplie la puissance absorbée par :",
   "choix": [
    "3",
    "√3",
    "9",
    "1 : elle ne change pas"
   ],
   "bonne": 0,
   "expl": "La tension est multipliée par √3 et la puissance varie comme son carré : (√3)² = 3. C'est le facteur qui détruit un moteur mal couplé."
  },
  {
   "q": "La puissance que l'on paie au fournisseur est :",
   "choix": [
    "la puissance apparente S",
    "la puissance réactive Q",
    "la somme P+Q",
    "la puissance active P"
   ],
   "bonne": 3,
   "expl": "Le fournisseur facture l'énergie active. La puissance apparente, elle, ne sert qu'au dimensionnement."
  },
  {
   "q": "Le facteur de puissance d'une installation vaut :",
   "choix": [
    "P/Q",
    "Q/S",
    "P/S",
    "S/P"
   ],
   "bonne": 2,
   "expl": "cosφ= P/S : la fraction du courant appelé qui travaille réellement."
  },
  {
   "q": "Dans un bilan de puissances portant sur plusieurs récepteurs :",
   "choix": [
    "P, Q et S s'additionnent",
    "seules P et Q s'additionnent",
    "seule P s'additionne",
    "seule S s'additionne"
   ],
   "bonne": 1,
   "expl": "S se recalcule à la fin par S = √(P²+Q²) : les courants des récepteurs ne sont pas en phase entre eux."
  },
  {
   "q": "Sur une charge triphasée équilibrée sans neutre, la méthode des deux wattmètres donne la puissance active par :",
   "choix": [
    "P = W₁ - W₂",
    "P = W₁ + W₂",
    "P = √3 (W₁+W₂)",
    "P = 3 W₁"
   ],
   "bonne": 1,
   "expl": "Seule la somme des deux wattmètres a un sens ; leur différence donne tanφ."
  },
  {
   "q": "Les deux wattmètres indiquent exactement la même valeur. On en déduit que la charge est :",
   "choix": [
    "purement inductive",
    "déséquilibrée",
    "purement résistive",
    "mal câblée"
   ],
   "bonne": 2,
   "expl": "W₁ = W₂ entraîne tanφ= 0, donc cosφ= 1. C'est un contrôle du montage qui ne demande aucun calcul."
  },
  {
   "q": "Après installation d'une batterie de condensateurs correctement dimensionnée, la puissance active absorbée par l'installation :",
   "choix": [
    "diminue de 30 % environ",
    "devient nulle",
    "augmente",
    "ne change pas"
   ],
   "bonne": 3,
   "expl": "Un condensateur n'absorbe aucune puissance active. Ce qui diminue, c'est le courant, donc les pertes en ligne et le calibre nécessaire — pas la facture d'énergie active."
  },
  {
   "q": "Le courant en ligne d'une installation passe de 40 à 28 A. Les pertes par effet Joule dans le câble d'alimentation sont divisées par environ :",
   "choix": [
    "2",
    "1,4",
    "2,9",
    "4"
   ],
   "bonne": 0,
   "expl": "Les pertes varient en I² : (40/28)² = 2,04, soit environ 2. Le piège consiste à répondre 1,4, qui est le rapport des courants et non celui des pertes. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Tension simple V et tension composée U : entre quels conducteurs ? Relation ?",
   "verso": "<b>V</b> : entre une <b>phase et le neutre</b>.<br><b>U</b> : entre <b>deux phases</b>.<br><b>U = √3 V</b> (réseau 230/400 V).",
   "origine": "Cours §1 Tension simple, tension composée"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment lire l'indication « 230/400 V » d'un réseau ?",
   "verso": "<b>Simple / composée</b> : V = 230 V, U = 400 V.",
   "origine": "Cours §1 Un réseau se nomme par ses deux tensions"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelle tension voit un récepteur couplé en étoile ? en triangle ?",
   "verso": "<b>Étoile</b> : la tension simple <b>V</b> (et J = I).<br><b>Triangle</b> : la tension composée <b>U</b> (et J = I/√3).",
   "origine": "Cours §2 Étoile ou triangle"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Différence entre courant de ligne I et courant de phase J ?",
   "verso": "<b>I</b> circule dans le <b>câble d'alimentation</b> ; <b>J</b> dans le <b>récepteur</b>. Étoile : J = I ; triangle : J = I/√3.",
   "origine": "Cours §2 Courants"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que se passe-t-il si un récepteur prévu en étoile est couplé en triangle ?",
   "verso": "Sa tension est × √3, sa puissance × <b>3</b> : il grille. Le couplage se vérifie <b>avant</b> la mise sous tension.",
   "origine": "Cours §2 L'erreur de couplage"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissances active, réactive, apparente : unités et rôle ?",
   "verso": "<b>P</b> (W) : celle qui <b>travaille</b> et qu'on paie.<br><b>Q</b> (var) : allers-retours sans travailler.<br><b>S</b> (VA) : celle que voient <b>câbles et disjoncteur</b>.",
   "origine": "Cours §3 Les trois puissances"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formules des puissances en triphasé équilibré ?",
   "verso": "<b>S = √3 U I</b> ; <b>P = S cos φ</b> ; <b>Q = S sin φ</b> ; Q = P tan φ.",
   "origine": "Cours §3 Les trois puissances"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que représente cos φ ? Valeurs typiques ?",
   "verso": "<b>cos φ = P / S</b> : la fraction du courant qui travaille. <b>1</b> pour un résistif, ≈ <b>0,8</b> pour un moteur asynchrone en charge.",
   "origine": "Cours §3 Facteur de puissance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi un mauvais facteur de puissance coûte-t-il cher ?",
   "verso": "On <b>paie P</b>, mais câbles et disjoncteurs se <b>dimensionnent sur S</b> (le courant). Mauvais cos φ → plus de courant → installation plus chère.",
   "origine": "Cours §3 On paie P, on dimensionne sur S"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Bilan de plusieurs récepteurs : qu'est-ce qui s'additionne ?",
   "verso": "<b>P</b> et <b>Q</b> s'additionnent ; <b>S ne s'additionne pas</b> : S = √(P² + Q²).",
   "origine": "Cours §4 Le bilan de puissances"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Méthode des deux wattmètres : puissance active et déphasage ?",
   "verso": "<b>P = W<sub>1</sub> + W<sub>2</sub></b>.<br><b>tan φ = √3 (W<sub>1</sub> − W<sub>2</sub>)/(W<sub>1</sub> + W<sub>2</sub>)</b>. W<sub>1</sub> = W<sub>2</sub> → charge résistive.",
   "origine": "Cours §5 Méthode des deux wattmètres"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sur quelle position mettre le multimètre pour mesurer une tension du réseau ?",
   "verso": "Sur <b>AC</b> : la tension est alternative de valeur moyenne nulle (en DC, ≈ 0).",
   "origine": "Cours §5 Mesurer"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment relève-t-on le facteur de puissance d'un atelier ? Que deviennent P et I ?",
   "verso": "Par une <b>batterie de condensateurs en dérivation</b>. <b>P ne change pas</b>, I baisse (et les pertes en I²).",
   "origine": "Cours §6 Relever le facteur de puissance"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment choisir le couplage d'un récepteur triphasé ?",
   "verso": "1. Lire la <b>tension nominale d'un enroulement</b>.<br>2. Lire les <b>deux tensions du réseau</b>.<br>3. Choisir le couplage qui lui applique sa tension : <b>étoile si V</b>, <b>triangle si U</b>.<br>4. Rédiger la justification.",
   "origine": "Cours §2 Méthode — Déterminer le couplage"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Plaque moteur « 230/400 V » sur un réseau 230/400 V : quel couplage ?",
   "verso": "Enroulement = 230 V. Le réseau a <b>U = 400 V</b> entre phases → <b>étoile</b> (chaque enroulement voit V = 230 V).",
   "origine": "Cours §2 Plaque moteur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Moteur : P = 4,50 kW, cos φ = 0,80, U = 400 V. Comment trouver I ?",
   "verso": "1. S = P / cos φ = 4500/0,80 = <b>5625 VA</b>.<br>2. I = S / (√3 U) = 5625/693 = <b>8,12 A</b>.<br>3. Contrôle : ≈ 1,4 A par kVA sous 400 V.",
   "origine": "Cours §3 Méthode — De la puissance à l'intensité"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment dimensionner une batterie de condensateurs pour relever cos φ ?",
   "verso": "1. <b>Q<sub>1</sub> = P tan φ<sub>1</sub></b> (actuel).<br>2. <b>Q<sub>2</sub> = P tan φ<sub>2</sub></b> (visé).<br>3. <b>Q<sub>C</sub> = Q<sub>1</sub> − Q<sub>2</sub></b>.<br>4. Triangle : <b>C = Q<sub>C</sub> / (3 ω U²)</b>.<br>5. Vérifier que P n'a pas changé.",
   "origine": "Cours §6 Méthode — Batterie de condensateurs"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
