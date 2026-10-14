/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 8 — Corrosion, risques chimiques et acoustiques
   Le bilan vient de CRSA_ch08_bilan.tex, les cartes des \trou{} de
   CRSA_ch08_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "8",
 "cle": "ch08",
 "etiquette": "Chapitre 8",
 "titre": "Corrosion, risques chimiques et acoustiques",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Combien vaut log(10⁶) ?",
   "choix": [
    "6",
    "10⁶",
    "0,6",
    "60"
   ],
   "bonne": 0,
   "expl": "Le logarithme décimal d'une puissance de dix, c'est son exposant. C'est toute la définition."
  },
  {
   "q": "Sachant que log 2 = 0,30, combien vaut log 20 ?",
   "choix": [
    "1,30",
    "0,60",
    "3,00",
    "0,30"
   ],
   "bonne": 0,
   "expl": "log 20 = log 2 + log 10 = 0,30 + 1 = 1,30. Multiplier par dix ajoute un au logarithme : c'est ce qui fait les décibels."
  },
  {
   "q": "Écrire 10^8,4 en notation scientifique, à deux chiffres significatifs :",
   "choix": [
    "2,5×10⁸",
    "8,4×10⁸",
    "2,5×10⁹",
    "1,4×10⁸"
   ],
   "bonne": 0,
   "expl": "10^0,4 = 2,5, donc 10^8,4 = 2,5×10⁸. On sépare la partie entière de l'exposant du reste."
  },
  {
   "q": "On résout 10 log(x) = 88 puis 10 log(x) = 91. Le rapport des deux solutions vaut :",
   "choix": [
    "2,0",
    "1,03",
    "3,0",
    "10"
   ],
   "bonne": 0,
   "expl": "3 décibels d'écart, c'est 10^0,3 = 2,0 : un doublement. Trois décibels de plus, deux fois plus d'énergie sonore."
  },
  {
   "q": "Compléter : Al → Al³⁺ + … e⁻",
   "choix": [
    "3",
    "2",
    "1",
    "6"
   ],
   "bonne": 0,
   "expl": "Trois électrons cédés, pour équilibrer la charge : l'aluminium passe de 0 à +3."
  },
  {
   "q": "Parmi −0,44 ; +0,34 ; −2,37 ; 0,00 ; −0,76, le plus petit est :",
   "choix": [
    "−2,37",
    "−0,76",
    "0,00",
    "−0,44"
   ],
   "bonne": 0,
   "expl": "−2,37. Chez les négatifs, plus le nombre paraît grand, plus il est petit — et c'est ce potentiel-là qui donne le métal le plus attaqué."
  }
 ],
 "bilan": [
  {
   "q": "Un réducteur est une espèce qui :",
   "choix": [
    "capte des électrons",
    "cède des électrons",
    "capte des protons",
    "ne réagit pas"
   ],
   "bonne": 1,
   "expl": "Il réduit l'autre espèce en lui cédant ses électrons. Le nom dit ce qu'il fait à l'autre, pas ce qu'il subit."
  },
  {
   "q": "Un métal qui se corrode subit :",
   "choix": [
    "une réduction",
    "une oxydation",
    "une dilution",
    "une fusion"
   ],
   "bonne": 1,
   "expl": "Il perd des électrons : c'est bien une oxydation. L'inversion oxydation / réduction est la faute la plus coûteuse du chapitre."
  },
  {
   "q": "Entre les couples Cu²+/Cu (+0,34) et Fe²+/Fe (-0,44), l'oxydant de la réaction est :",
   "choix": [
    "Fe",
    "Fe²+",
    "Cu²+",
    "Cu"
   ],
   "bonne": 2,
   "expl": "Le potentiel le plus élevé fournit l'oxydant : +0,34 > -0,44."
  },
  {
   "q": "Pour que la corrosion du fer se produise, il faut simultanément :",
   "choix": [
    "le fer et l'eau",
    "le fer et le dioxygène",
    "le fer, l'eau et le dioxygène",
    "le fer seul suffit"
   ],
   "bonne": 2,
   "expl": "Les trois sont nécessaires — et c'est pourquoi toute protection consiste à en supprimer un."
  },
  {
   "q": "Dans la demi-équation O2 + 2 H2O + 4 e- -> 4 OH-, le dioxygène :",
   "choix": [
    "est oxydé",
    "est réduit",
    "joue le rôle de réducteur",
    "ne change pas"
   ],
   "bonne": 1,
   "expl": "Il gagne quatre électrons : c'est une réduction, et O2 est l'oxydant."
  },
  {
   "q": "Pour protéger une cuve en acier (-0,44), on dispose d'argent (+0,80), de cuivre (+0,34) et de magnésium (-2,37). L'anode sacrificielle doit être en :",
   "choix": [
    "argent",
    "cuivre",
    "magnésium",
    "n'importe lequel des trois"
   ],
   "bonne": 2,
   "expl": "Seul le magnésium a un potentiel inférieur à celui du fer. Argent et cuivre, plus oxydants, aggraveraient la corrosion de la cuve."
  },
  {
   "q": "La galvanisation est une protection :",
   "choix": [
    "passive, car elle recouvre",
    "active, car le zinc s'oxyde à la place du fer",
    "active, car elle isole",
    "ni l'une ni l'autre"
   ],
   "bonne": 1,
   "expl": "Le zinc ne se contente pas de recouvrir : son potentiel étant plus bas, il s'oxyde à la place de l'acier même si le revêtement est rayé."
  },
  {
   "q": "Une solution de pH 12,5 est :",
   "choix": [
    "acide",
    "neutre",
    "basique",
    "sans danger"
   ],
   "bonne": 2,
   "expl": "12,5 > 7. Et elle est aussi dangereuse qu'un acide fort : une base concentrée est corrosive."
  },
  {
   "q": "Entre une solution de pH 2 et une solution de pH 4, l'acidité est multipliée par :",
   "choix": [
    "2",
    "10",
    "100",
    "1000"
   ],
   "bonne": 2,
   "expl": "Deux unités de pH d'écart, sur une échelle logarithmique, font un facteur 10² = 100. Répondre 2 est le piège de l'énoncé."
  },
  {
   "q": "L'appareil qui mesure un niveau d'intensité sonore s'appelle :",
   "choix": [
    "un oscilloscope",
    "un sonomètre",
    "un audiomètre",
    "un pH-mètre"
   ],
   "bonne": 1,
   "expl": "Le sonomètre. L'audiomètre, lui, teste l'audition d'une personne : c'est l'appareil du suivi médical, pas celui du poste de travail."
  },
  {
   "q": "Deux machines identiques de 85 dB fonctionnent côte à côte. Le sonomètre indique environ :",
   "choix": [
    "85 dB",
    "88 dB",
    "170 dB",
    "95 dB"
   ],
   "bonne": 1,
   "expl": "Doubler l'intensité ajoute 3 dB. Les niveaux en décibels ne s'additionnent jamais directement."
  },
  {
   "q": "À un poste où le niveau d'exposition ramené à 8 h vaut 86 dB(A), le port de protecteurs auditifs est :",
   "choix": [
    "facultatif",
    "obligatoire",
    "interdit",
    "à la discrétion du salarié"
   ],
   "bonne": 1,
   "expl": "Au-delà de 85 dB(A), le port devient obligatoire, le local doit être signalé et un suivi audiométrique organisé. Entre 80 et 85 , les protections sont seulement mises à disposition. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir un oxydant et un réducteur. Qui subit l'oxydation ?",
   "verso": "<b>Oxydant</b> : capte des électrons (il subit une réduction).<br><b>Réducteur</b> : cède des électrons (il subit une <b>oxydation</b>).",
   "origine": "Cours §1 Oxydant, réducteur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'un couple oxydant/réducteur ? Exemple de demi-équation.",
   "verso": "Un oxydant et le réducteur qu'il devient après avoir capté des électrons, noté <b>Ox/Red</b>.<br>Fe<sup>2+</sup> + 2 e<sup>−</sup> ⇌ Fe pour le couple Fe<sup>2+</sup>/Fe.",
   "origine": "Cours §1 Couple et demi-équation"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment lire l'échelle des potentiels standard E° ? Entre qui se fait la réaction spontanée ?",
   "verso": "Potentiel <b>élevé</b> → oxydant <b>fort</b> ; potentiel <b>bas</b> → réducteur <b>fort</b>.<br>Réaction entre l'<b>oxydant du couple haut</b> et le <b>réducteur du couple bas</b>.",
   "origine": "Cours §2 L'échelle des potentiels"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir la corrosion. Quels sont les trois ingrédients de la corrosion du fer ?",
   "verso": "La dégradation d'un métal par <b>oxydation</b> au contact de son environnement.<br>Il faut <b>le métal, l'eau et le dioxygène</b> : en supprimer un l'arrête.",
   "origine": "Cours §3 La corrosion"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Protection passive et protection active : principe et exemples ?",
   "verso": "<b>Passive</b> : <b>isole</b> le métal (revêtement, passivation, anodisation) ; inefficace si percée.<br><b>Active</b> : <b>sacrifie un métal plus réducteur</b> (galvanisation, anode sacrificielle) ; protège même après rayure.",
   "origine": "Cours §4 Protéger le métal"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Solution acide, neutre, basique : quel pH ? Quand est-elle la plus corrosive ?",
   "verso": "pH &lt; 7 <b>acide</b> ; = 7 <b>neutre</b> ; &gt; 7 <b>basique</b> (à 25 °C). Plus le pH <b>s'éloigne de 7</b>, plus elle est corrosive.",
   "origine": "Cours §5 Acides, bases et pH"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Un bain à pH 1 est-il un peu ou beaucoup plus acide qu'un bain à pH 2 ?",
   "verso": "<b>10 fois plus</b> : l'échelle de pH est <b>logarithmique</b>.",
   "origine": "Cours §5 Une échelle qui trompe"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Papier pH ou pH-mètre : lequel choisir ?",
   "verso": "<b>Papier pH</b> (± 1 unité) : pour trier. <b>pH-mètre étalonné</b> (± 0,05) : quand la décision se joue près d'une limite.",
   "origine": "Cours §5 Choisir l'instrument"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que dit le pictogramme ? Que dit la fiche de données de sécurité (FDS) ?",
   "verso": "<b>Pictogramme</b> : <b>quel danger</b> existe.<br><b>FDS</b> : <b>quoi faire</b> (précautions, stockage, secours, EPI). Une réponse complète cite les deux.",
   "origine": "Cours §6 FDS et pictogrammes"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formule du niveau d'intensité sonore ? Valeur de I<sub>0</sub> ? Appareil de mesure ?",
   "verso": "<b>L = 10 log(I / I<sub>0</sub>)</b> en dB, <b>I<sub>0</sub> = 1,0 × 10<sup>−12</sup> W/m²</b>. Mesuré au <b>sonomètre</b>.",
   "origine": "Cours §7 Niveau d'intensité sonore"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Deux machines de 85 dB côte à côte donnent… ? Doubler la distance en champ libre ?",
   "verso": "<b>88 dB</b> (doubler l'intensité ajoute 3 dB ; × 10 ajoute 10 dB).<br>Doubler la distance : <b>−6 dB</b>.",
   "origine": "Cours §7 Les décibels ne s'additionnent pas"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>De quoi dépend le risque sonore ? Quels sont les trois seuils réglementaires ?",
   "verso": "Du <b>niveau</b>, de la <b>durée</b> et de la <b>fréquence</b>.<br><b>80</b> dB(A) : protections mises à disposition ; <b>85</b> : port obligatoire ; <b>87</b> : valeur limite.",
   "origine": "Cours §7 Le risque acoustique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans quel ordre agir contre le bruit ?",
   "verso": "1. <b>À la source</b> (machine).<br>2. Sur la <b>propagation</b> (local).<br>3. Seulement ensuite sur l'<b>individu</b> (bouchons, casque).",
   "origine": "Cours §7 La protection individuelle vient en dernier"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Pluie acide (H<sup>+</sup>/H<sub>2</sub> : 0,00 V) sur du fer (Fe<sup>2+</sup>/Fe : −0,44 V). Comment savoir si le fer est attaqué ?",
   "verso": "1. Relever les deux potentiels.<br>2. Couple haut → oxydant (<b>H<sup>+</sup></b>) ; couple bas → réducteur (<b>Fe</b>).<br>3. Justifier : 0,00 &gt; −0,44, le fer est <b>attaqué</b>.",
   "origine": "Cours §2 Méthode — Identifier oxydant et réducteur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment écrire l'équation d'une réaction d'oxydoréduction ?",
   "verso": "1. Identifier les deux couples (potentiels).<br>2. Écrire l'oxydation et la réduction.<br>3. <b>Égaliser les électrons</b> (multiplier).<br>4. Additionner : les électrons disparaissent.<br>5. Contrôler éléments et charges.",
   "origine": "Cours §3 Méthode — Écrire une équation d'oxydoréduction"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment choisir le métal d'une anode sacrificielle pour protéger de l'acier ?",
   "verso": "1. Potentiel du fer : −0,44 V.<br>2. Ne garder que les métaux de potentiel <b>inférieur</b> (meilleurs réducteurs).<br>3. Choisir le praticable (<b>zinc, magnésium</b>).<br>4. Justifier en comparant au moins deux métaux.",
   "origine": "Cours §4 Méthode — Anode sacrificielle"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment évaluer le risque sonore à un poste de travail ?",
   "verso": "1. <b>Mesurer</b> L au sonomètre au poste.<br>2. Ajouter <b>+3 dB</b> par source identique.<br>3. Ramener à 8 h : <b>L<sub>ex</sub> = L + 10 log(T / 8 h)</b>.<br>4. Comparer aux seuils 80/85/87 dB(A) et énoncer l'obligation.",
   "origine": "Cours §7 Méthode — Évaluer un risque sonore"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
