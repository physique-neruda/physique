/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 09 · Transferts thermiques et calorimétrie
   Le bilan vient de ch09_bilan.tex, les cartes des \trou{} de
   ch09_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "9",
 "titre": "Transferts thermiques et calorimétrie",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Convertir 25,0 mm en mètres :",
   "choix": [
    "0,250 m",
    "0,0250 m",
    "2,50 m",
    "2,50×10⁻⁴ m"
   ],
   "bonne": 1,
   "expl": "Toutes les formules de transfert thermique exigent des mètres."
  },
  {
   "q": "L'aire d'une plaque carrée de 200 mm de côté vaut :",
   "choix": [
    "0,0400 m²",
    "0,400 m²",
    "4,00 m²",
    "40 000 m²"
   ],
   "bonne": 0,
   "expl": "0,200 × 0,200 = 0,0400 m². Convertir avant d'élever au carré."
  },
  {
   "q": "Dans φ = ΔT/R, la résistance thermique s'écrit :",
   "choix": [
    "R = φ × ΔT",
    "R = ΔT/φ",
    "R = φ/ΔT",
    "R = ΔT − φ"
   ],
   "bonne": 1,
   "expl": "C'est l'analogue de la loi d'Ohm : R = ΔT/φ."
  },
  {
   "q": "Dans R = e/(λS), la conductivité s'écrit :",
   "choix": [
    "λ = R e/S",
    "λ = e/(R S)",
    "λ = e S/R",
    "λ = R S/e"
   ],
   "bonne": 1,
   "expl": "λ = e/(RS), en W/m/K."
  },
  {
   "q": "Une puissance de 176 W fonctionne 8,0 h. L'énergie vaut :",
   "choix": [
    "1,41×10³ J",
    "5,07×10⁶ J",
    "1408 kW·h",
    "2,11×10⁵ J"
   ],
   "bonne": 1,
   "expl": "176 × 28 800 = 5,07×10⁶ J, soit 1,4 kW·h. Oublier de convertir les heures en secondes est l'erreur classique."
  },
  {
   "q": "Deux incertitudes relatives valent 2,5 % et 0,7 %. Leur composition donne :",
   "choix": [
    "3,2 %",
    "2,6 %",
    "1,8 %",
    "1,6 %"
   ],
   "bonne": 1,
   "expl": "√(2,5² + 0,7²) = 2,6 % : les incertitudes ne s'additionnent pas, elles se composent en quadrature. C'est 2,5 % qui domine."
  }
 ],
 "bilan": [
  {
   "q": "Le flux thermique φ s'exprime en :",
   "choix": [
    "joules",
    "W/m²",
    "watts"
   ],
   "bonne": 2,
   "expl": "le flux est une puissance, donc des watts. La réponse « joules » confond flux et énergie ; la réponse « watts » est la densité de flux, qui rapporte le flux à la surface. Les trois grandeurs sont différentes et les trois unités le disent. 3pt"
  },
  {
   "q": "Un transfert thermique s'effectue spontanément :",
   "choix": [
    "du chaud vers le froid",
    "du froid vers le chaud",
    "dans les deux sens selon le matériau"
   ],
   "bonne": 0,
   "expl": "le sens du transfert ne dépend jamais du matériau, seulement des températures. Et parmi les trois modes, seul le rayonnement se passe de support : c'est pourquoi l'énergie du Soleil traverse l'espace vide alors qu'aucun son n'y circule. 3pt"
  },
  {
   "q": "Le seul mode de transfert qui fonctionne dans le vide est :",
   "choix": [
    "la conduction",
    "le rayonnement",
    "la convection"
   ],
   "bonne": 1,
   "expl": "le sens du transfert ne dépend jamais du matériau, seulement des températures. Et parmi les trois modes, seul le rayonnement se passe de support : c'est pourquoi l'énergie du Soleil traverse l'espace vide alors qu'aucun son n'y circule. 3pt"
  },
  {
   "q": "L'air soufflé par un ventilateur sur les ailettes d'un radiateur relève de :",
   "choix": [
    "la convection naturelle",
    "la conduction",
    "la convection forcée"
   ],
   "bonne": 2,
   "expl": "le mot « forcée » désigne le fait qu'un ventilateur ou une pompe impose la circulation. Sans lui, l'air se déplacerait quand même, mais bien plus lentement : c'est la convection naturelle, avec un h cinq fois plus petit. 3pt"
  },
  {
   "q": "La résistance thermique d'une paroi plane vaut :",
   "choix": [
    "R_th = (λS)/e",
    "R_th = e/(λS)",
    "R_th = (e S)/λ"
   ],
   "bonne": 1,
   "expl": "dans R_th = e/(λS), l'épaisseur est au numérateur (plus c'est épais, plus ça résiste) et la conductivité au dénominateur (mieux ça conduit, moins ça résiste). D'où : un bon isolant a un petit λ. Le polystyrène (0,040) devance largement le verre (1,0) et l'acier (50). 3pt"
  },
  {
   "q": "Un matériau isole d'autant mieux que sa conductivité λ est :",
   "choix": [
    "petite",
    "grande",
    "sans rapport avec le pouvoir isolant"
   ],
   "bonne": 0,
   "expl": "dans R_th = e/(λS), l'épaisseur est au numérateur (plus c'est épais, plus ça résiste) et la conductivité au dénominateur (mieux ça conduit, moins ça résiste). D'où : un bon isolant a un petit λ. Le polystyrène (0,040) devance largement le verre (1,0) et l'acier (50). 3pt"
  },
  {
   "q": "Parmi ces matériaux, le plus isolant est :",
   "choix": [
    "le polystyrène",
    "le verre",
    "l'acier"
   ],
   "bonne": 0,
   "expl": "dans R_th = e/(λS), l'épaisseur est au numérateur (plus c'est épais, plus ça résiste) et la conductivité au dénominateur (mieux ça conduit, moins ça résiste). D'où : un bon isolant a un petit λ. Le polystyrène (0,040) devance largement le verre (1,0) et l'acier (50). 3pt"
  },
  {
   "q": "Trois couches successives sont traversées par le même flux. Leurs résistances thermiques :",
   "choix": [
    "se multiplient",
    "s'ajoutent",
    "sont remplacées par la plus petite"
   ],
   "bonne": 1,
   "expl": "même flux à travers des couches successives, écarts de température qui s'ajoutent : c'est la définition d'un montage en série, et les résistances s'additionnent. La conséquence pratique est la question 9 : c'est la plus grande résistance qui commande. Épaissir une tôle qui pèse trois millièmes de pour cent ne changerait rigoureusement rien. 3pt"
  },
  {
   "q": "Dans une paroi de cabine, la tôle apporte 0,003 % de la résistance et l'isolant 97,6 %. Pour réduire les pertes, il faut agir sur :",
   "choix": [
    "l'épaisseur de tôle",
    "indifféremment l'une ou l'autre",
    "l'épaisseur d'isolant"
   ],
   "bonne": 2,
   "expl": "même flux à travers des couches successives, écarts de température qui s'ajoutent : c'est la définition d'un montage en série, et les résistances s'additionnent. La conséquence pratique est la question 9 : c'est la plus grande résistance qui commande. Épaissir une tôle qui pèse trois millièmes de pour cent ne changerait rigoureusement rien. 3pt"
  },
  {
   "q": "Les relations de ce chapitre supposent que l'on se place :",
   "choix": [
    "en régime permanent",
    "en régime variable",
    "juste après la mise en chauffe"
   ],
   "bonne": 0,
   "expl": "en régime variable, une partie du flux sert encore à échauffer la paroi elle-même. Mesurer trop tôt sous-estime l'écart de température, et donc la résistance : l'erreur est systématique, elle va toujours dans le même sens, et la répéter ne la corrige pas. 3pt"
  },
  {
   "q": "Un fluide de débit massique q_m voit sa température varier de ΔT. La puissance thermique qu'il emporte vaut :",
   "choix": [
    "φ= m c ΔT",
    "φ= q_m c ΔT",
    "φ= h S ΔT"
   ],
   "bonne": 1,
   "expl": "q_m c ΔT est la relation m c Δθ du chapitre 8 écrite par seconde : on ne suit plus une masse fixe mais une masse qui défile. La réponse « φ= m c ΔT » donnerait une énergie, pas une puissance ; la réponse « φ= h S ΔT » concerne l'échange entre un fluide et une paroi, pas ce que le fluide emporte. 3pt"
  },
  {
   "q": "Dans un échangeur, on mesure φ_chaud = 1,76 kW et φ_froid = 1,67 kW. Cet écart :",
   "choix": [
    "prouve une erreur de manipulation",
    "est impossible physiquement",
    "est du signe attendu si l'appareil perd vers l'ambiance"
   ],
   "bonne": 2,
   "expl": "le circuit chaud cède toujours un peu plus que le froid ne reçoit, la différence partant vers l'ambiance. Un écart de ce signe est donc normal ; c'est l'écart inverse qui serait suspect. Attention toutefois : sur un seul essai, un écart de 4,8 % reste dans les incertitudes et ne prouve rien. Ce qui l'établit, c'est de le retrouver toujours dans le même sens d'un binôme à l'autre. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir le flux thermique. Unité ? Lien avec l'énergie Q ?",
   "verso": "L'énergie transférée <b>par unité de temps</b> : <b>φ = Q / Δt</b>. C'est une <b>puissance</b>, en <b>W</b>. Q = φ Δt.",
   "origine": "Cours §1.1 Le flux thermique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que la densité de flux ? Unité ?",
   "verso": "Le flux rapporté à la surface : <b>φ / S</b>, en <b>W/m²</b>.",
   "origine": "Cours §1.2 Densité de flux"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans quel sens se fait spontanément un transfert thermique ? Quand cesse-t-il ?",
   "verso": "Toujours du <b>plus chaud vers le plus froid</b> ; il cesse quand les <b>températures sont égales</b>.",
   "origine": "Cours §1.3 Le sens du transfert"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment savoir que le régime permanent est établi ?",
   "verso": "Par un critère <b>chiffré</b> : les températures relevées (toutes les 2 min) ne varient plus de plus que la <b>résolution des sondes</b>.",
   "origine": "Cours §1.4 Régime permanent"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Conduction, convection, rayonnement : définir et donner un exemple sur un engin.",
   "verso": "<b>Conduction</b> : de proche en proche dans la matière immobile (le carter).<br><b>Convection</b> : par un fluide en mouvement (liquide de refroidissement).<br><b>Rayonnement</b> : par ondes, sans support (l'échappement chauffe le capot).",
   "origine": "Cours §2 Les trois modes"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Flux de conduction à travers une paroi ? Unités ?",
   "verso": "<b>φ = λ S (T<sub>1</sub> − T<sub>2</sub>) / e</b> : λ en W·m<sup>−1</sup>·K<sup>−1</sup>, S en m², e en m, écart en K.",
   "origine": "Cours §3.1 Loi de Fourier"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'un bon isolant ? Pourquoi laine de verre, polystyrène et liège se ressemblent-ils ?",
   "verso": "Un λ <b>petit</b> (≈ 0,04 W·m<sup>−1</sup>·K<sup>−1</sup>, 10 000 fois moins que le cuivre). Tous emprisonnent de l'<b>air immobile</b> : tassé ou mouillé, l'isolant perd son pouvoir.",
   "origine": "Cours §3.2 Isolant ou conducteur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Résistance thermique d'une paroi plane ? Expression du flux ?",
   "verso": "<b>R<sub>th</sub> = e / (λ S)</b> en K/W ; <b>φ = ΔT / R<sub>th</sub></b>.",
   "origine": "Cours §4.1 Résistance thermique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment se combinent les résistances de couches successives ? Laquelle commande ?",
   "verso": "Elles <b>s'ajoutent</b> (en série). La <b>plus grande</b> (l'isolant) impose le résultat.",
   "origine": "Cours §4.2 Parois multicouches"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Flux de convection ? Convection naturelle et forcée ?",
   "verso": "<b>φ = h S ΔT</b>, h coefficient de convection (W·m<sup>−2</sup>·K<sup>−1</sup>), qui dépend surtout de la vitesse du fluide.<br><b>Naturelle</b> : mouvement né de l'échauffement ; <b>forcée</b> : ventilateur, pompe.",
   "origine": "Cours §5.1 Convection"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Résistance thermique d'un film de fluide ? Pourquoi l'oublier donne des résultats absurdes ?",
   "verso": "<b>R<sub>th</sub> = 1 / (h S)</b>, en série avec les couches. Sur un vitrage, les films d'air portent <b>97 %</b> de la résistance.",
   "origine": "Cours §5.2 Résistance de surface"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Puissance emportée par un fluide qui traverse un appareil ?",
   "verso": "<b>φ = q<sub>m</sub> c ΔT</b> (q<sub>m</sub> en kg/s).",
   "origine": "Cours §6.1 Fluide en écoulement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans un échangeur, comparer le flux cédé par le chaud et le flux reçu par le froid.",
   "verso": "Flux cédé <b>≥</b> flux reçu ; la différence = <b>pertes vers l'extérieur</b>.",
   "origine": "Cours §6.2 Bilan d'un échangeur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer le flux traversant une paroi multicouche ?",
   "verso": "1. Convertir épaisseurs (m) et surfaces (m²).<br>2. <b>R<sub>th</sub> = e/(λS)</b> pour chaque couche (contrôler l'ordre de grandeur).<br>3. Ajouter les films : 1/(hS).<br>4. <b>R<sub>tot</sub></b> = somme.<br>5. <b>φ = ΔT / R<sub>tot</sub></b>.",
   "origine": "Cours §4.1 Méthode — Flux à travers une paroi"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment faire le bilan d'un échangeur liquide-liquide ?",
   "verso": "1. Pour chaque circuit : φ = q<sub>m</sub> c ΔT.<br>2. Comparer : l'écart = pertes.<br>3. Retenir une valeur, calculer ΔT<sub>moy</sub> entre fluides.<br>4. <b>K = φ / (S ΔT<sub>moy</sub>)</b> en W·m<sup>−2</sup>·K<sup>−1</sup>.",
   "origine": "Cours §6.2 Méthode — Bilan d'un échangeur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment mesurer la résistance thermique globale d'une cabine sans la démonter ?",
   "verso": "1. Régime permanent : puissance de chauffage = flux perdu.<br>2. Mesurer P<sub>chauffage</sub> et ΔT intérieur/extérieur.<br>3. <b>R<sub>th</sub> = ΔT / P</b>.",
   "origine": "Cours §6.2 Bilan d'une enceinte"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
