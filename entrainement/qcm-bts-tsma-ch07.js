/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 07 · Combustions et carburants
   Le bilan vient de ch07_bilan.tex, les cartes des \trou{} de
   ch07_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "7",
 "titre": "Combustions et carburants",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "La masse molaire de C₈H₁₈ (C : 12,0 ; H : 1,0 g/mol) vaut :",
   "choix": [
    "96,0 g/mol",
    "114,0 g/mol",
    "130,0 g/mol",
    "226,0 g/mol"
   ],
   "bonne": 1,
   "expl": "8 × 12,0 + 18 × 1,0 = 114,0 g/mol."
  },
  {
   "q": "Dans C₃H₈ + … O₂ → 3 CO₂ + 4 H₂O, le coefficient du dioxygène est :",
   "choix": [
    "3",
    "4",
    "5",
    "7"
   ],
   "bonne": 2,
   "expl": "3 CO₂ et 4 H₂O demandent 6 + 4 = 10 atomes d'oxygène, soit 5 O₂. Le carbone d'abord, l'hydrogène ensuite, l'oxygène en dernier."
  },
  {
   "q": "Un liquide a pour masse volumique 0,840 kg/L. La masse de 80,0 L vaut :",
   "choix": [
    "67,2 kg",
    "95,2 kg",
    "80,8 kg",
    "0,0105 kg"
   ],
   "bonne": 0,
   "expl": "80,0 × 0,840 = 67,2 kg. Vérifier le sens : un litre pesant moins d'un kilo, la masse doit être inférieure au volume en litres."
  },
  {
   "q": "Convertir 2,87×10⁹ J en kilowattheures (1 kW·h = 3,6 MJ) :",
   "choix": [
    "797 kW·h",
    "2870 kW·h",
    "1,03×10¹⁶ kW·h",
    "80 kW·h"
   ],
   "bonne": 0,
   "expl": "2,87×10⁹/3,6×10⁶ = 797 kW·h."
  },
  {
   "q": "Combien vaut 0,2000 × 4185 × 26,5 ?",
   "choix": [
    "2,22×10³",
    "2,22×10⁴",
    "2,22×10⁵",
    "8,37×10²"
   ],
   "bonne": 1,
   "expl": "≈ 22,2 kJ. C'est un calcul de Q = mcΔθ."
  },
  {
   "q": "Une température passe de 18,5 °C à 45,0 °C. L'écart Δθ vaut :",
   "choix": [
    "26,5 °C",
    "26,5 K, soit un autre nombre qu'en °C",
    "63,5 °C",
    "299,5 K"
   ],
   "bonne": 0,
   "expl": "Δθ = 26,5. Le nombre est le MÊME en kelvins et en degrés Celsius : les deux échelles ont la même graduation."
  }
 ],
 "bilan": [
  {
   "q": "Dans un moteur thermique, le comburant est :",
   "choix": [
    "le gazole",
    "le dioxyde de carbone",
    "le dioxygène de l'air"
   ],
   "bonne": 2,
   "expl": "le carburant est le combustible, l'air apporte le comburant. Le troisième côté du triangle est l'énergie d'activation : étincelle en essence, compression en diesel. Supprimer un seul côté éteint le feu. 3pt"
  },
  {
   "q": "Les trois éléments du triangle du feu sont :",
   "choix": [
    "combustible, comburant, énergie d'activation",
    "carbone, hydrogène, oxygène",
    "chaleur, pression, étincelle"
   ],
   "bonne": 0,
   "expl": "le carburant est le combustible, l'air apporte le comburant. Le troisième côté du triangle est l'énergie d'activation : étincelle en essence, compression en diesel. Supprimer un seul côté éteint le feu. 3pt"
  },
  {
   "q": "Une combustion complète d'hydrocarbure produit :",
   "choix": [
    "CO et H₂O",
    "CO₂ et H₂O",
    "CO₂ et O₂"
   ],
   "bonne": 1,
   "expl": "une combustion complète ne produit que CO₂ et H₂O. Pour l'octane, on compte 16 C et 36 H dans deux molécules, donc 16 CO₂ et 18 H₂O, soit 32 + 18 = 50 atomes d'oxygène à droite : 25 O₂. 3pt"
  },
  {
   "q": "L'équation ajustée de la combustion de l'octane est :",
   "choix": [
    "2 C₈H₁₈ + 25 O₂ → 16 CO₂ + 18 H₂O",
    "C₈H₁₈ + 12 O₂ → 8 CO₂ + 9 H₂O",
    "C₈H₁₈ + 8 O₂ → 8 CO₂ + 9 H₂O"
   ],
   "bonne": 0,
   "expl": "une combustion complète ne produit que CO₂ et H₂O. Pour l'octane, on compte 16 C et 36 H dans deux molécules, donc 16 CO₂ et 18 H₂O, soit 32 + 18 = 50 atomes d'oxygène à droite : 25 O₂. 3pt"
  },
  {
   "q": "Une combustion incomplète se produit quand :",
   "choix": [
    "le dioxygène est en excès",
    "la température est trop élevée",
    "le dioxygène est en défaut"
   ],
   "bonne": 2,
   "expl": "le défaut de dioxygène empêche l'oxydation complète du carbone. CO est inodore, incolore et mortel : c'est lui qui tue quand un moteur tourne dans un local fermé. Il faut aussi savoir qu'une combustion incomplète libère moins d'énergie. 3pt"
  },
  {
   "q": "Le monoxyde de carbone est dangereux parce qu'il est :",
   "choix": [
    "très odorant, donc irritant",
    "inodore et incolore, et se fixe sur l'hémoglobine",
    "explosif au contact de l'air"
   ],
   "bonne": 1,
   "expl": "le défaut de dioxygène empêche l'oxydation complète du carbone. CO est inodore, incolore et mortel : c'est lui qui tue quand un moteur tourne dans un local fermé. Il faut aussi savoir qu'une combustion incomplète libère moins d'énergie. 3pt"
  },
  {
   "q": "Le PCI d'un combustible s'exprime en :",
   "choix": [
    "MJ",
    "MJ/kg",
    "kg/MJ"
   ],
   "bonne": 1,
   "expl": "le PCI est une énergie par kilogramme. Le gaz naturel (50 MJ/kg) devance l'essence (44) et le gazole (42,7) ; le bioéthanol ferme la marche à 26,8. 3pt"
  },
  {
   "q": "Parmi ces carburants, celui qui a le PCI massique le plus élevé est :",
   "choix": [
    "le bioéthanol",
    "le gazole",
    "le gaz naturel"
   ],
   "bonne": 2,
   "expl": "le PCI est une énergie par kilogramme. Le gaz naturel (50 MJ/kg) devance l'essence (44) et le gazole (42,7) ; le bioéthanol ferme la marche à 26,8. 3pt"
  },
  {
   "q": "Un litre de gazole rejette environ :",
   "choix": [
    "2,6 kg de CO₂",
    "0,84 kg de CO₂",
    "44 kg de CO₂"
   ],
   "bonne": 0,
   "expl": "2,6 kg, soit plus de trois fois la masse du litre de gazole lui-même. L'oxygène du CO₂ provient de l'air, pas du carburant : c'est ce qui surprend, et c'est ce que le bilan de matière permet d'établir. 3pt"
  },
  {
   "q": "Pour comparer équitablement les rejets de CO₂ de deux carburants, on les rapporte à :",
   "choix": [
    "un litre",
    "un mégajoule d'énergie libérée",
    "une heure de fonctionnement"
   ],
   "bonne": 1,
   "expl": "rapporter au litre avantagerait mécaniquement les carburants peu énergétiques, dont il faut consommer davantage. Seule la comparaison à énergie égale a un sens. 3pt"
  },
  {
   "q": "Un indice de cétane élevé signifie que le gazole :",
   "choix": [
    "résiste bien à l'auto-inflammation",
    "contient beaucoup de soufre",
    "s'enflamme facilement par compression"
   ],
   "bonne": 2,
   "expl": "l'indice de cétane mesure l'aptitude à s'enflammer, l'indice d'octane la résistance à l'auto-inflammation. Les deux vont en sens contraire : un excellent gazole serait un très mauvais carburant essence. 3pt"
  },
  {
   "q": "Chauffer de l'eau avec un brûleur et calculer Q/Δm donne :",
   "choix": [
    "le produit η× PCI, plus petit que le PCI",
    "exactement le PCI du combustible",
    "le rendement du montage"
   ],
   "bonne": 0,
   "expl": "Q n'est que la part de l'énergie parvenue à l'eau ; le reste part par rayonnement et par les gaz chauds. On mesure donc un « PCI apparent » η× PCI. Pour s'affranchir de η, on fait le rapport de deux essais menés dans des conditions identiques. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'une combustion ? Combustible et comburant dans un moteur ?",
   "verso": "Une réaction entre un <b>combustible</b> et un <b>comburant</b> qui libère de l'énergie thermique. Moteur : le <b>carburant</b> et le <b>dioxygène de l'air</b>.",
   "origine": "Cours §1 Combustion"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment éteindre un feu ? Pourquoi jamais d'eau sur un feu d'hydrocarbure ou électrique ?",
   "verso": "Supprimer <b>un côté</b> du triangle (carburant, O<sub>2</sub>, chaleur). L'eau <b>projette le combustible</b> enflammé et <b>conduit le courant</b>.",
   "origine": "Cours §1 Le triangle du feu"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Produits de la combustion complète d'un hydrocarbure ?",
   "verso": "<b>CO<sub>2</sub> et H<sub>2</sub>O</b>, rien d'autre.",
   "origine": "Cours §2.1 Combustion complète"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quand une combustion est-elle incomplète ? Que produit-elle ? Effet sur l'énergie ?",
   "verso": "Quand le <b>dioxygène est en défaut</b>. Elle produit en plus du <b>CO</b> et des <b>suies</b>, et libère <b>moins d'énergie</b>.",
   "origine": "Cours §2.2 Combustion incomplète"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi le CO est-il si dangereux ? Règle à l'atelier ?",
   "verso": "<b>Inodore, incolore</b>, il se fixe sur l'hémoglobine. <b>Jamais de moteur qui tourne en local fermé</b> : extraction ou ventilation.",
   "origine": "Cours §2.2 Le monoxyde de carbone"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir le PCI. Énergie libérée par une masse m ?",
   "verso": "L'énergie libérée par la combustion complète de <b>1 kg</b> (eau formée en vapeur), en MJ/kg.<br><b>E = m × PCI</b>.",
   "origine": "Cours §3.1 Pouvoir calorifique inférieur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment passer du PCI massique au PCI volumique ?",
   "verso": "<b>PCI<sub>vol</sub> = PCI × ρ</b> (gazole : 35,9 MJ/L).",
   "origine": "Cours §3.1 Massique ou volumique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>PCI du gazole, de l'essence, du GNV, du B100, du bioéthanol ?",
   "verso": "Gazole <b>42,7</b> ; essence <b>44,0</b> ; GNV <b>50,0</b> ; B100 <b>37,2</b> ; bioéthanol <b>26,8</b> MJ/kg.",
   "origine": "Cours §3.1 Valeurs de PCI"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que mesure-t-on en faisant chauffer de l'eau par une combustion ? Comment comparer deux combustibles ?",
   "verso": "<b>Q = m c Δθ</b> = η × PCI (une partie de l'énergie se perd). Pour comparer : faire le <b>rapport</b> de deux essais identiques (η s'élimine).",
   "origine": "Cours §3.2 Ce montage ne donne pas le PCI"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Combien de CO<sub>2</sub> rejette un litre de gazole ? Pourquoi plus que sa masse ?",
   "verso": "<b>≈ 2,6 kg</b>, plus de trois fois sa masse : l'<b>oxygène vient de l'air</b>.",
   "origine": "Cours §4.1 Les rejets de CO2"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment comparer les rejets de CO<sub>2</sub> de deux carburants ?",
   "verso": "<b>À énergie égale</b> (g de CO<sub>2</sub> par MJ), pas par litre.",
   "origine": "Cours §4.1 Comparer les carburants"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quels sont les trois critères de choix d'un carburant alternatif ?",
   "verso": "Le <b>pouvoir calorifique</b>, l'<b>indice de cétane ou d'octane</b>, les <b>rejets de CO<sub>2</sub></b> à énergie égale sur le cycle complet.",
   "origine": "Cours §4.2 Les critères de choix"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que mesurent l'indice d'octane et l'indice de cétane ?",
   "verso": "<b>Octane</b> : résistance à l'auto-inflammation (essence).<br><b>Cétane</b> : aptitude à s'enflammer (diesel). En sens contraire.",
   "origine": "Cours §4.3 Octane et cétane"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quels sont les quatre polluants d'un moteur thermique ?",
   "verso": "<b>CO</b> (combustion incomplète), <b>particules</b>, <b>NO<sub>x</sub></b> (haute température), <b>hydrocarbures imbrûlés</b>. Le CO<sub>2</sub> est un gaz à effet de serre.",
   "origine": "Cours §5 Polluants"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rôle du FAP, de la SCR et de l'EGR ?",
   "verso": "<b>FAP</b> : retient puis brûle les suies.<br><b>SCR</b> (AdBlue) : NO<sub>x</sub> → N<sub>2</sub> + H<sub>2</sub>O.<br><b>EGR</b> : abaisse la température de combustion → moins de NO<sub>x</sub>.",
   "origine": "Cours §5 Dépollution d'un diesel"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment ajuster l'équation de combustion complète d'un carburant ?",
   "verso": "1. <b>C</b> : coefficient de CO<sub>2</sub> = nombre de C.<br>2. <b>H</b> : coefficient de H<sub>2</sub>O = H/2.<br>3. <b>O en dernier</b> : O à droite ÷ 2 (retirer l'O du carburant si alcool).<br>4. Demi-entier → <b>doubler</b> tout.",
   "origine": "Cours §2.1 Méthode — Ajuster une combustion"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>1,42 g d'éthanol chauffent 200,0 g d'eau de 26,5 K. Comment estimer l'énergie par gramme et le rendement du montage ?",
   "verso": "1. Q = 0,2000 × 4185 × 26,5 = <b>2,22 × 10<sup>4</sup> J</b>.<br>2. Par gramme : 2,22 × 10<sup>4</sup>/1,42 = 1,56 × 10<sup>4</sup> J/g.<br>3. η = 1,56/2,68 ≈ <b>58 %</b>.",
   "origine": "Cours §3.2 Un ordre de grandeur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer la masse de CO<sub>2</sub> rejetée par un carburant ?",
   "verso": "1. Équation ajustée de la combustion complète.<br>2. n(carburant) = m / M.<br>3. × rapport stœchiométrique → n(CO<sub>2</sub>).<br>4. m(CO<sub>2</sub>) = n × 44,0 g/mol.",
   "origine": "Cours §4.1 Méthode — Rejets de CO2"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
