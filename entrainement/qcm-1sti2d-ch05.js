/* Genere par outils/construire.py — ne pas editer a la main.
   1sti2d · chapitre 05 · Puissance, énergie électriques, loi d'Ohm
   Les QCM viennent de ch05_prerequis.tex et ch05_bilan.tex,
   les cartes de cartes/cartes-1sti2d-ch05.json. */
window.CHAPITRE = {
 "filiere": "1sti2d",
 "num": "5",
 "titre": "Puissance, énergie électriques, loi d'Ohm",
 "niveau": "1re STI2D",
 "prerequis": [
  {
   "q": "L'unité de la résistance électrique est :",
   "choix": [
    "le volt",
    "l'ampère",
    "l'ohm",
    "le watt"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Dans la relation P = U × I, l'intensité s'exprime par :",
   "choix": [
    "I = P × U",
    "I = P/U",
    "I = U/P",
    "I = P - U"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Le carré de 16 vaut :",
   "choix": [
    "32",
    "64",
    "256",
    "160"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Si une grandeur est <strong>doublée</strong> et qu'elle intervient au carré, le résultat est :",
   "choix": [
    "doublé",
    "multiplié par 4",
    "divisé par 2",
    "inchangé"
   ],
   "bonne": 1,
   "expl": "(2x)² = 4x² : c'est toute la clé de l'effet Joule"
  },
  {
   "q": "Deux grandeurs sont proportionnelles si leur graphique est :",
   "choix": [
    "une droite quelconque",
    "une droite passant par l'origine",
    "une courbe",
    "une horizontale"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Le rendement d'un convertisseur se calcule par :",
   "choix": [
    "(P<sub>absorbée</sub>)/(P<sub>utile</sub>)",
    "(P<sub>utile</sub>)/(P<sub>absorbée</sub>)",
    "P<sub>utile</sub> × P<sub>absorbée</sub>",
    "P<sub>absorbée</sub> - P<sub>utile</sub>"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Convertir 2,5 mm² en mètres carrés :",
   "choix": [
    "2,5×10⁻³ m²",
    "2,5×10⁻⁶ m²",
    "2,5×10⁻² m²",
    "2,5×10⁶ m²"
   ],
   "bonne": 1,
   "expl": "1 mm vaut e-3 m, donc 1 mm² vaut e-6 m²"
  }
 ],
 "bilan": [
  {
   "q": "La loi d'Ohm s'écrit :",
   "choix": [
    "U = R × I",
    "U = R/I",
    "U = R + I",
    "U = I/R"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "La caractéristique U(I) d'un conducteur ohmique est :",
   "choix": [
    "une courbe",
    "une horizontale",
    "une droite passant par l'origine",
    "une droite quelconque"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Si l'on double la tension aux bornes d'une résistance, sa valeur R :",
   "choix": [
    "double",
    "est divisée par 2",
    "devient nulle",
    "ne change pas"
   ],
   "bonne": 3,
   "expl": "R est une caractéristique du composant"
  },
  {
   "q": "La puissance d'un dipôle quelconque vaut :",
   "choix": [
    "P = U/I",
    "P = U × I",
    "P = U + I",
    "P = R × U"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Les écritures P = R I² et P = U²/R ne sont valables que pour :",
   "choix": [
    "tous les dipôles",
    "un conducteur ohmique",
    "un moteur",
    "une pile"
   ],
   "bonne": 1,
   "expl": ""
  },
  {
   "q": "Un appareil de 2000 W sous 230 V appelle une intensité de :",
   "choix": [
    "0,115 A",
    "2000 A",
    "460 A",
    "8,7 A"
   ],
   "bonne": 3,
   "expl": "2000/230"
  },
  {
   "q": "La puissance dissipée par effet Joule vaut :",
   "choix": [
    "R × I²",
    "R × I",
    "R/I²",
    "R + I²"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "Si l'on double l'intensité dans un câble, les pertes par effet Joule sont :",
   "choix": [
    "doublées",
    "divisées par 2",
    "multipliées par 4",
    "inchangées"
   ],
   "bonne": 2,
   "expl": "l'intensité intervient au carré"
  },
  {
   "q": "Pour un câble, une section plus grande donne une résistance :",
   "choix": [
    "plus faible",
    "plus grande",
    "inchangée",
    "nulle"
   ],
   "bonne": 0,
   "expl": ""
  },
  {
   "q": "On transporte l'électricité sous haute tension pour :",
   "choix": [
    "augmenter la puissance transportée",
    "réduire la tension chez l'usager",
    "réduire l'intensité, donc les pertes",
    "éviter d'utiliser des transformateurs"
   ],
   "bonne": 2,
   "expl": ""
  },
  {
   "q": "Un moteur absorbe 1500 W et fournit 1275 W. Les pertes valent :",
   "choix": [
    "2775 W",
    "225 W",
    "1275 W",
    "85 W"
   ],
   "bonne": 1,
   "expl": "1500 - 1275"
  },
  {
   "q": "En convention récepteur, un dipôle pour lequel P = U × I < 0 :",
   "choix": [
    "reçoit de l'énergie",
    "est en court-circuit",
    "ne consomme rien",
    "fournit de l'énergie"
   ],
   "bonne": 3,
   "expl": "P < 0 signale un dipôle qui <strong>fournit</strong>"
  },
  {
   "q": "Le rôle principal d'un disjoncteur <strong>magnétothermique</strong> est de protéger :",
   "choix": [
    "l'appareil branché",
    "le câble de l'installation",
    "les personnes",
    "le compteur"
   ],
   "bonne": 1,
   "expl": "il protège le <strong>câble</strong>, d'où l'importance d'accorder son calibre à la section"
  },
  {
   "q": "Le disjoncteur <strong>différentiel</strong> protège les personnes en :",
   "choix": [
    "limitant la tension",
    "mesurant la puissance",
    "comparant l'intensité aller et retour",
    "coupant au bout d'un temps fixe"
   ],
   "bonne": 2,
   "expl": "une différence trahit une fuite de courant, seuil 30 mA"
  },
  {
   "q": "Sous 230 V, une personne à la peau mouillée (R ≈ 1000 Ω) est traversée par :",
   "choix": [
    "2,3 mA",
    "23 mA",
    "2300 mA",
    "230 mA"
   ],
   "bonne": 3,
   "expl": "230/1000 = 230 mA, très au-delà du seuil de fibrillation"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer la loi d'Ohm. Unités ?",
   "verso": "Pour un conducteur ohmique, U est <b>proportionnelle</b> à I : <b>U = R × I</b><br>U en V, R en Ω, I en A.",
   "origine": "Cours §1 La loi d'Ohm"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Si l'on double la tension aux bornes d'une résistance, que deviennent R et I ?",
   "verso": "<b>R ne change pas</b> (caractéristique du composant : matière, longueur, section). <b>I double</b>.",
   "origine": "Cours §1 La loi d'Ohm"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissance électrique reçue par un dipôle quelconque ?",
   "verso": "<b>P = U × I</b> (P en W, U en V, I en A). Valable pour <b>tout dipôle</b> : moteur, lampe, chargeur…",
   "origine": "Cours §2 La puissance électrique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelles autres écritures de P pour une résistance ? Pour quel dipôle valent-elles ?",
   "verso": "<b>P = R I²</b> et <b>P = U² / R</b>, obtenues avec la loi d'Ohm. Seulement pour un <b>conducteur ohmique</b>.",
   "origine": "Cours §2 Trois écritures, une seule puissance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dipôle fléché en convention récepteur : que signifie P = U I &gt; 0 ? P &lt; 0 ?",
   "verso": "<b>P &gt; 0</b> : le dipôle <b>reçoit</b> de l'énergie.<br><b>P &lt; 0</b> : il en <b>fournit</b>.<br>Une résistance donne toujours P &gt; 0.",
   "origine": "Cours §3 Le signe de la puissance"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissance dissipée par effet Joule ? Si l'intensité double ?",
   "verso": "<b>P<sub>J</sub> = R × I²</b>. I double → pertes × <b>4</b> (I triple → × 9).",
   "origine": "Cours §4 L'effet Joule"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>L'effet Joule est-il un défaut ou un but ? Exemples.",
   "verso": "Les deux : <b>défaut</b> dans un câble (énergie gaspillée), <b>but recherché</b> dans un radiateur, une plaque, un grille-pain, un fer à souder.",
   "origine": "Cours §4 L'effet Joule"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pertes et chute de tension dans une ligne de résistance R<sub>ligne</sub> parcourue par I ?",
   "verso": "Pertes : <b>R<sub>ligne</sub> × I²</b><br>Chute de tension : <b>R<sub>ligne</sub> × I</b> (aller + retour).",
   "origine": "Cours §5 Les pertes dans une ligne"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment la résistance d'un câble dépend-elle de sa section ?",
   "verso": "Elle est <b>inversement proportionnelle</b> à la section : section plus grande → résistance et pertes plus faibles.",
   "origine": "Cours §5 Le rôle de la section"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi transporte-t-on l'électricité sous haute tension ?",
   "verso": "À puissance fixée, augmenter U <b>diminue I</b> (I = P/U). Or les pertes varient en <b>I²</b> : elles chutent énormément.",
   "origine": "Cours §6 Pourquoi la haute tension"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quels sont les niveaux de tension, de la ligne nationale à la prise ?",
   "verso": "<b>400 kV</b> (pays) → <b>90 kV</b> (région) → <b>20 kV</b> (ville) → <b>230 V</b> (prise), avec un <b>transformateur</b> à chaque étage.",
   "origine": "Cours §6 La chaîne de distribution"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énergie consommée ? 1 kWh en joules ?",
   "verso": "<b>E = P × Δt</b> ; P en W et Δt en h → Wh ; en s → J.<br><b>1 kWh = 3,6 × 10<sup>6</sup> J</b>.",
   "origine": "Cours §7 Énergie et facture"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Seuils de danger du courant alternatif 50 Hz dans le corps ?",
   "verso": "<b>0,5 mA</b> perception ; <b>10 mA</b> tétanisation ; <b>30 mA</b> paralysie respiratoire ; <b>75 mA</b> fibrillation cardiaque.<br>Ce qui blesse : l'<b>intensité</b> et la <b>durée</b>.",
   "origine": "Cours §9 Ce qui blesse, c'est l'intensité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Résistance du corps humain, peau sèche et mouillée ? Tensions limites de sécurité ?",
   "verso": "≈ <b>5000 Ω</b> sec, ≈ <b>1000 Ω</b> mouillé.<br>Tension limite : <b>50 V</b> en local sec, <b>25 V</b> en local humide.",
   "origine": "Cours §9 Le corps humain"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que protège le disjoncteur magnétothermique ? le disjoncteur différentiel ?",
   "verso": "<b>Magnétothermique</b> : surveille l'intensité (surcharge, court-circuit) → protège le <b>câble</b>.<br><b>Différentiel</b> : compare courant aller et retour → protège les <b>personnes</b>.",
   "origine": "Cours §10 Deux protections complémentaires"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi le différentiel domestique est-il réglé à 30 mA ?",
   "verso": "C'est le <b>seuil de paralysie respiratoire</b>. Il coupe en moins de 30 ms.",
   "origine": "Cours §10 Deux protections complémentaires"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Plaque chauffante 2000 W sous 230 V. Comment trouver I puis R ?",
   "verso": "1. P et U connues → P = U I : I = P/U = 2000/230 = <b>8,7 A</b>.<br>2. R = U/I = 230/8,7 = <b>26,4 Ω</b>.<br>3. Vérifier : U²/R = 230²/26,4 ≈ 2000 W.",
   "origine": "Cours §2 Méthode 1"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Ligne de 0,48 Ω (aller-retour) parcourue par 16 A. Comment chiffrer pertes et chute de tension ?",
   "verso": "1. Pertes : P<sub>J</sub> = R I² = 0,48 × 16² = <b>122 W</b>.<br>2. Chute : R I = 0,48 × 16 = <b>7,6 V</b> → 222 V au lieu de 230 V.<br>3. Énergie perdue : E = P<sub>J</sub> × Δt, puis le coût.",
   "origine": "Cours §5 Méthode 2"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment montrer l'intérêt de la haute tension pour transporter 100 kW sur 0,50 Ω ?",
   "verso": "1. I = P/U : 435 A sous 230 V, 5,0 A sous 20 kV.<br>2. Pertes R I² : <b>94,5 kW</b> sous 230 V, <b>12,5 W</b> sous 20 kV.<br>3. Conclure : U × k → pertes ÷ k².",
   "origine": "Cours §6 Pourquoi la haute tension"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Moteur : 1500 W absorbés, 1275 W utiles. Comment faire son bilan de puissance ?",
   "verso": "1. Utile = 1275 W ; absorbée = 1500 W.<br>2. Pertes = 1500 − 1275 = <b>225 W</b> (effet Joule).<br>3. η = 1275/1500 = <b>0,85</b>.<br>4. Vérifier η &lt; 1.",
   "origine": "Cours §8 Méthode 3"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Contact avec 230 V. Comment chiffrer le risque peau sèche / peau mouillée ?",
   "verso": "1. Loi d'Ohm I = U/R.<br>2. Sèche (5000 Ω) : 230/5000 = <b>46 mA</b> &gt; 30 mA.<br>3. Mouillée (1000 Ω) : <b>230 mA</b> &gt; 75 mA (fibrillation).<br>4. Comparer aux seuils et conclure.",
   "origine": "Cours §9 Méthode 4"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
