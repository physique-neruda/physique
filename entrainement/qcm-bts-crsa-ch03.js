/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 3 — Énergie thermique
   Le bilan vient de CRSA_ch03_bilan.tex, les cartes des \trou{} de
   CRSA_ch03_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "3",
 "cle": "ch03",
 "etiquette": "Chapitre 3",
 "titre": "Énergie thermique",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Convertir 80 L en mètres cubes :",
   "choix": [
    "8,0×10⁻² m³",
    "8,0×10⁻³ m³",
    "8,0×10¹ m³",
    "8,0×10⁻⁵ m³"
   ],
   "bonne": 0,
   "expl": "1 L = 1 dm³ = 10⁻³ m³, donc 80 L = 8,0×10⁻² m³. Le pont à retenir est 1 L = 1 dm³."
  },
  {
   "q": "Quelle masse d'eau contient un bac de 80 L ? (ρ = 1000 kg/m³)",
   "choix": [
    "80 kg",
    "8,0 kg",
    "800 kg",
    "0,080 kg"
   ],
   "bonne": 0,
   "expl": "m = ρ × V = 1000 × 0,080 = 80 kg. Un litre d'eau pèse un kilogramme : c'est le repère qui évite de se tromper de rang."
  },
  {
   "q": "Calculer 80 × 4185 × 55 :",
   "choix": [
    "1,84×10⁷",
    "1,84×10⁵",
    "3,35×10⁵",
    "1,84×10⁴"
   ],
   "bonne": 0,
   "expl": "18 414 000, soit 1,84×10⁷ J. C'est l'énergie pour chauffer 80 kg d'eau de 55 °C."
  },
  {
   "q": "Convertir 1,84×10⁷ J en kW·h :",
   "choix": [
    "5,11 kW·h",
    "51,1 kW·h",
    "0,511 kW·h",
    "6,62 kW·h"
   ],
   "bonne": 0,
   "expl": "1,84×10⁷ / 3,6×10⁶ = 5,11 kW·h. Diviser par 3,6 millions, une bonne fois pour toutes."
  },
  {
   "q": "Un bac est à 70 °C, l'atelier à 18 °C. L'écart de température vaut :",
   "choix": [
    "52 °C, soit 52 K",
    "52 °C, soit 325 K",
    "88 °C",
    "343 K"
   ],
   "bonne": 0,
   "expl": "Un ÉCART de température a la même valeur en degrés Celsius et en kelvins : les deux échelles ont le même pas. C'est seulement une température qui se convertit."
  },
  {
   "q": "Convertir 3069 s en minutes et secondes :",
   "choix": [
    "51 min 9 s",
    "50 min 69 s",
    "51 min 15 s",
    "30 min 69 s"
   ],
   "bonne": 0,
   "expl": "3069/60 = 51,15 min, et 0,15 min = 9 s. Attention : 0,15 min n'est pas 15 s."
  }
 ],
 "bilan": [
  {
   "q": "Le seul mode de transfert thermique qui ne nécessite aucun support matériel est :",
   "choix": [
    "la conduction",
    "la convection",
    "le rayonnement",
    "aucun des trois"
   ],
   "bonne": 2,
   "expl": "C'est pourquoi l'énergie du Soleil nous parvient à travers le vide."
  },
  {
   "q": "Un ventilateur qui refroidit une armoire électrique agit principalement par :",
   "choix": [
    "conduction",
    "convection",
    "rayonnement",
    "changement d'état"
   ],
   "bonne": 1,
   "expl": "C'est l'air en mouvement qui emporte la chaleur."
  },
  {
   "q": "Dans la relation φ= S Δθ/R, la grandeur φ est :",
   "choix": [
    "une énergie en joules",
    "une puissance en watts",
    "une température",
    "une résistance"
   ],
   "bonne": 1,
   "expl": "Un flux thermique est une puissance. Pour obtenir une énergie, il faut le multiplier par une durée."
  },
  {
   "q": "Un écart de température de 40 °C vaut, en kelvins :",
   "choix": [
    "40 K",
    "313 K",
    "233 K",
    "on ne peut pas le savoir"
   ],
   "bonne": 0,
   "expl": "Un écart de température vaut autant en kelvins qu'en degrés Celsius : les deux échelles ont le même pas. La réponse « 313 K » confond écart et température."
  },
  {
   "q": "Pour une paroi de trois couches de résistances 0,20, 4,00 et 0,30, la résistance totale vaut :",
   "choix": [
    "4,50",
    "1,50",
    "0,24",
    "4,00"
   ],
   "bonne": 0,
   "expl": "0,20+4,00+0,30 = 4,50 : les résistances surfaciques s'additionnent."
  },
  {
   "q": "Plus la résistance thermique d'une paroi est grande :",
   "choix": [
    "plus la chaleur passe",
    "moins la chaleur passe",
    "cela ne change rien",
    "la paroi chauffe"
   ],
   "bonne": 1,
   "expl": "Un bon isolant est celui dont la résistance est grande — comme en électricité, où une grande résistance laisse passer peu de courant."
  },
  {
   "q": "L'énergie nécessaire pour chauffer 2 kg d'eau de 10 °C se calcule par :",
   "choix": [
    "Q = mL",
    "Q = mcΔθ",
    "Q = SΔθ/R",
    "Q = PΔt"
   ],
   "bonne": 1,
   "expl": "Il n'y a pas de changement d'état : c'est Q = mcΔθ."
  },
  {
   "q": "Pendant un changement d'état, la température :",
   "choix": [
    "augmente régulièrement",
    "reste constante",
    "diminue",
    "oscille"
   ],
   "bonne": 1,
   "expl": "C'est le palier. L'énergie fournie sert à changer l'état, non à élever la température — d'où l'inapplicabilité de Q = mcΔθ."
  },
  {
   "q": "Faire fondre 1 kg de glace à 0 °C coûte environ :",
   "choix": [
    "4185 J",
    "3,34×10⁵ J",
    "2,26×10⁶ J",
    "rien, la température ne change pas"
   ],
   "bonne": 1,
   "expl": "L_f = 3,34×10⁵ J/kg. La réponse « rien, la température ne change pas » est le piège : l'énergie est bien réelle, même si la température ne bouge pas."
  },
  {
   "q": "Vaporiser de l'eau coûte, par rapport à la faire fondre, environ :",
   "choix": [
    "deux fois moins",
    "autant",
    "sept fois plus",
    "cent fois plus"
   ],
   "bonne": 2,
   "expl": "2,26×10⁶/3,34×10⁵ ≈ 6,8."
  },
  {
   "q": "Dans un calorimètre, le bilan des échanges s'écrit :",
   "choix": [
    "Q_i = 0",
    "Q_i > 0",
    "Q₁ = Q₂",
    "Q_i = mcΔθ"
   ],
   "bonne": 0,
   "expl": "Ce que l'un cède, l'autre le reçoit : la somme algébrique est nulle. Écrire ainsi évite les erreurs de signe."
  },
  {
   "q": "Une machine prélève de la chaleur dans l'air extérieur pour chauffer un atelier. C'est :",
   "choix": [
    "un moteur thermique",
    "une machine frigorifique",
    "une pompe à chaleur",
    "un calorimètre"
   ],
   "bonne": 2,
   "expl": "On cherche à chauffer la source chaude. Le même appareil, s'il servait à refroidir un local, s'appellerait machine frigorifique. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énergie pour échauffer une masse m sans changement d'état ? Que représente c ?",
   "verso": "<b>Q = m c Δθ</b>. c, capacité thermique massique : énergie pour élever de 1 degré 1 kg du corps.<br>Eau : <b>c = 4185 J·kg<sup>−1</sup>·K<sup>−1</sup></b>.",
   "origine": "Cours §1 Chauffer sans changer d'état"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment écrire le bilan thermique dans une enceinte isolée ?",
   "verso": "<b>Σ Q<sub>i</sub> = 0</b> (ce que l'un cède, l'autre le reçoit). La somme nulle évite les erreurs de signe.",
   "origine": "Cours §1 Le bilan d'un calorimètre"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énergie d'un changement d'état ? Chaleurs latentes de l'eau ?",
   "verso": "<b>Q = m L</b> (L en J/kg).<br>Fusion : <b>3,34 × 10<sup>5</sup> J/kg</b> ; vaporisation : <b>2,26 × 10<sup>6</sup> J/kg</b> (7 fois plus).",
   "origine": "Cours §2 Les changements d'état"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi ne peut-on pas utiliser m c Δθ pendant un changement d'état ?",
   "verso": "La <b>température ne bouge pas</b> (Δθ = 0) : c'est <b>Q = m L</b> qui s'applique. Glace → eau chaude : deux étapes séparées.",
   "origine": "Cours §2 Jamais les deux formules sur le même palier"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment lit-on le diagramme de phases de l'eau ? Que signifie un point sur une courbe ?",
   "verso": "Température en <b>abscisse</b>, pression en <b>ordonnée</b> : on lit le domaine. Sur une courbe, <b>deux états coexistent</b>.",
   "origine": "Cours §3 Le diagramme de phases"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>L'eau bout-elle toujours à 100 °C ?",
   "verso": "Non : seulement à la pression atmosphérique au niveau de la mer. <b>En altitude</b> (pression plus basse) elle bout <b>plus tôt</b> ; dans une chaudière sous pression, <b>plus tard</b>.",
   "origine": "Cours §3 100 °C n'est pas universel"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Conduction, convection, rayonnement : comment les reconnaître ?",
   "verso": "<b>Conduction</b> : de proche en proche dans la matière.<br><b>Convection</b> : par déplacement d'un fluide.<br><b>Rayonnement</b> : par ondes, sans support (traverse le vide).",
   "origine": "Cours §4 Les trois modes de transfert"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Flux thermique à travers une paroi de résistance surfacique R ? Nature du résultat ?",
   "verso": "<b>φ = S × Δθ / R</b> (R en m²·K/W). φ est une <b>puissance</b> en W ; × durée → énergie.",
   "origine": "Cours §5 Le flux à travers une paroi"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Paroi multicouche : comment combiner les résistances ? Effet d'une grande résistance ?",
   "verso": "<b>R<sub>tot</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub></b>. Plus R est grande, <b>moins la chaleur passe</b>.",
   "origine": "Cours §5 Les couches s'additionnent"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Faut-il ajouter 273 à un écart de température ?",
   "verso": "<b>Non</b> : un écart vaut autant en K qu'en °C. Seule une température se convertit (T = θ + 273).",
   "origine": "Cours §5 Un écart ne se convertit pas"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Moteur thermique, machine frigorifique, pompe à chaleur : qu'est-ce qui les distingue ?",
   "verso": "<b>Ce qu'on cherche</b> : du travail (moteur), refroidir la source froide (frigo), chauffer la source chaude (PAC). Frigo et PAC sont <b>la même machine</b>.",
   "origine": "Cours §6 Les machines thermiques"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Machine qui prend 4,5 kW à la source froide et absorbe 1,8 kW. Chaleur rejetée et efficacité de chauffage ?",
   "verso": "Q<sub>chaud</sub> = 4,5 + 1,8 = <b>6,3 kW</b>.<br>e = 6,3/1,8 = <b>3,5</b> (&gt; 1 car la machine déplace de la chaleur).",
   "origine": "Cours §6 La conservation décide de tout"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer l'énergie pour transformer 2,0 kg de glace à 0 °C en eau à 40 °C ?",
   "verso": "1. Fusion : Q<sub>1</sub> = m L<sub>f</sub> = 2,0 × 3,34 × 10<sup>5</sup> = 6,68 × 10<sup>5</sup> J.<br>2. Échauffement : Q<sub>2</sub> = m c Δθ = 2,0 × 4185 × 40 = 3,35 × 10<sup>5</sup> J.<br>3. Q = Q<sub>1</sub> + Q<sub>2</sub> ≈ <b>1,0 × 10<sup>6</sup> J</b>.",
   "origine": "Cours §2 Deux étapes, deux formules"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment trouver la température finale de deux corps mis en contact dans un calorimètre ?",
   "verso": "1. Écrire Q<sub>i</sub> = m<sub>i</sub> c<sub>i</sub> (θ<sub>f</sub> − θ<sub>i</sub>) pour chaque corps.<br>2. Poser <b>Σ Q<sub>i</sub> = 0</b>.<br>3. Isoler θ<sub>f</sub>.<br>4. Vérifier : θ<sub>f</sub> entre les températures de départ.",
   "origine": "Cours §1 Le bilan d'un calorimètre"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Bac à 70 °C, atelier à 18 °C, S = 12 m², couches 0,02 + 2,40 + 0,08 m²·K/W. Comment trouver la perte sur 8 h ?",
   "verso": "1. R = 0,02 + 2,40 + 0,08 = <b>2,50</b> m²·K/W.<br>2. Δθ = 52 K (sans convertir).<br>3. φ = S Δθ / R = 12 × 52/2,50 = <b>250 W</b>.<br>4. Sur 8 h : 0,250 × 8 = <b>2,0 kWh</b>.",
   "origine": "Cours §5 Méthode — Calculer une perte thermique"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
