/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 7 — Distribution triphasée
   Le bilan vient de CRSA_ch07_bilan.tex, les cartes des \trou{} de
   CRSA_ch07_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "7",
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
    "entre une phase et le neutre",
    "entre le neutre et la terre",
    "aux bornes du disjoncteur"
   ],
   "bonne": 1,
   "expl": "Un réseau se nomme « simple / composée », dans cet ordre."
  },
  {
   "q": "La relation entre tension composée et tension simple est :",
   "choix": [
    "U = 3 V",
    "U = V/√3",
    "U = √3 V",
    "U = V√2"
   ],
   "bonne": 2,
   "expl": "√3 est le côté du triangle équilatéral des trois tensions simples."
  },
  {
   "q": "En couplage étoile, chaque récepteur est soumis à :",
   "choix": [
    "la tension composée U",
    "la tension simple V",
    "U/3",
    "V√3"
   ],
   "bonne": 1,
   "expl": "En étoile, un récepteur est branché entre une phase et le point neutre : il voit V."
  },
  {
   "q": "Trois résistances de tension nominale 400 V sont branchées sur un réseau 230 /400 V. Le couplage à réaliser est :",
   "choix": [
    "étoile",
    "triangle",
    "indifférent",
    "étoile avec neutre"
   ],
   "bonne": 1,
   "expl": "400 V est ici la tension composée : seul le triangle l'applique à chaque récepteur."
  },
  {
   "q": "Passer du couplage étoile au couplage triangle, sur le même réseau, multiplie la puissance absorbée par :",
   "choix": [
    "√3",
    "3",
    "9",
    "1 : elle ne change pas"
   ],
   "bonne": 1,
   "expl": "La tension est multipliée par √3 et la puissance varie comme son carré : (√3)² = 3. C'est le facteur qui détruit un moteur mal couplé."
  },
  {
   "q": "La puissance que l'on paie au fournisseur est :",
   "choix": [
    "la puissance apparente S",
    "la puissance réactive Q",
    "la puissance active P",
    "la somme P+Q"
   ],
   "bonne": 2,
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
    "ne change pas",
    "augmente",
    "devient nulle"
   ],
   "bonne": 1,
   "expl": "Un condensateur n'absorbe aucune puissance active. Ce qui diminue, c'est le courant, donc les pertes en ligne et le calibre nécessaire — pas la facture d'énergie active."
  },
  {
   "q": "Le courant en ligne d'une installation passe de 40 à 28 A. Les pertes par effet Joule dans le câble d'alimentation sont divisées par environ :",
   "choix": [
    "1,4",
    "2",
    "2,9",
    "4"
   ],
   "bonne": 1,
   "expl": "Les pertes varient en I² : (40/28)² = 2,04, soit environ 2. Le piège consiste à répondre 1,4, qui est le rapport des courants et non celui des pertes. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Tension simple, tension composée » ?",
   "verso": "La <strong>tension simple</strong> V se mesure entre une phase et le neutre. La <strong>tension composée</strong> U se mesure entre deux phases.",
   "origine": "definition du cours"
  },
  {
   "type": "trou",
   "recto": "La <strong>tension simple</strong> V se mesure …….",
   "rep": "entre une phase et le neutre",
   "verso": "<strong>entre une phase et le neutre</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>tension composée</strong> U se mesure …….",
   "rep": "entre deux phases",
   "verso": "<strong>entre deux phases</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La puissance <strong>active</strong> P, en watts, est …….",
   "rep": "celle qui travaille et que l'on paie",
   "verso": "<strong>celle qui travaille et que l'on paie</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La puissance <strong>réactive</strong> Q, en var, est …….",
   "rep": "celle qui fait des allers-retours sans travailler",
   "verso": "<strong>celle qui fait des allers-retours sans travailler</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La puissance <strong>apparente</strong> S, en V·A, est …….",
   "rep": "celle que voient les câbles et le disjoncteur",
   "verso": "<strong>celle que voient les câbles et le disjoncteur</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "La relation entre tension composée et tension simple est ……",
   "rep": "U = √3 V",
   "verso": "<strong>U = √3 V</strong> — √3 est le côté du triangle équilatéral des trois tensions simples.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En couplage étoile, chaque récepteur est soumis à ……",
   "rep": "la tension simple V",
   "verso": "<strong>la tension simple V</strong> — En étoile, un récepteur est branché entre une phase et le point neutre : il voit V.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Trois résistances de tension nominale 400 V sont branchées sur un réseau 230 /400 V. Le couplage à réaliser est ……",
   "rep": "triangle",
   "verso": "<strong>triangle</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Passer du couplage étoile au couplage triangle, sur le même réseau, multiplie la puissance absorbée par ……",
   "rep": "3",
   "verso": "<strong>3</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le facteur de puissance d'une installation vaut ……",
   "rep": "P/S",
   "verso": "<strong>P/S</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans un bilan de puissances portant sur plusieurs récepteurs ……",
   "rep": "seules P et Q s'additionnent",
   "verso": "<strong>seules P et Q s'additionnent</strong> — S se recalcule à la fin par S = √(P²+Q²) : les courants des récepteurs ne sont pas en phase entre eux.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Sur une charge triphasée équilibrée sans neutre, la méthode des deux wattmètres donne la puissance active par ……",
   "rep": "P = W₁ + W₂",
   "verso": "<strong>P = W₁ + W₂</strong> — Seule la somme des deux wattmètres a un sens ; leur différence donne tanφ.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Après installation d'une batterie de condensateurs correctement dimensionnée, la puissance active absorbée par l'installation ……",
   "rep": "ne change pas",
   "verso": "<strong>ne change pas</strong> — Un condensateur n'absorbe aucune puissance active. Ce qui diminue, c'est le courant, donc les pertes en ligne et le calibre nécessaire — pas la facture d'énergie active.",
   "origine": "bilan"
  }
 ]
};
