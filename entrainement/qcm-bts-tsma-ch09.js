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
    "watts",
    "W/m²"
   ],
   "bonne": 1,
   "expl": "le flux est une puissance, donc des watts. La réponse a confond flux et énergie ; la c est la densité de flux, qui rapporte le flux à la surface. Les trois grandeurs sont différentes et les trois unités le disent. 3pt"
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
    "la convection",
    "le rayonnement"
   ],
   "bonne": 2,
   "expl": "le sens du transfert ne dépend jamais du matériau, seulement des températures. Et parmi les trois modes, seul le rayonnement se passe de support : c'est pourquoi l'énergie du Soleil traverse l'espace vide alors qu'aucun son n'y circule. 3pt"
  },
  {
   "q": "L'air soufflé par un ventilateur sur les ailettes d'un radiateur relève de :",
   "choix": [
    "la convection naturelle",
    "la convection forcée",
    "la conduction"
   ],
   "bonne": 1,
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
    "grande",
    "petite",
    "sans rapport avec le pouvoir isolant"
   ],
   "bonne": 1,
   "expl": "dans R_th = e/(λS), l'épaisseur est au numérateur (plus c'est épais, plus ça résiste) et la conductivité au dénominateur (mieux ça conduit, moins ça résiste). D'où : un bon isolant a un petit λ. Le polystyrène (0,040) devance largement le verre (1,0) et l'acier (50). 3pt"
  },
  {
   "q": "Parmi ces matériaux, le plus isolant est :",
   "choix": [
    "l'acier",
    "le verre",
    "le polystyrène"
   ],
   "bonne": 2,
   "expl": "dans R_th = e/(λS), l'épaisseur est au numérateur (plus c'est épais, plus ça résiste) et la conductivité au dénominateur (mieux ça conduit, moins ça résiste). D'où : un bon isolant a un petit λ. Le polystyrène (0,040) devance largement le verre (1,0) et l'acier (50). 3pt"
  },
  {
   "q": "Trois couches successives sont traversées par le même flux. Leurs résistances thermiques :",
   "choix": [
    "s'ajoutent",
    "se multiplient",
    "sont remplacées par la plus petite"
   ],
   "bonne": 0,
   "expl": "même flux à travers des couches successives, écarts de température qui s'ajoutent : c'est la définition d'un montage en série, et les résistances s'additionnent. La conséquence pratique est la question 9 : c'est la plus grande résistance qui commande. Épaissir une tôle qui pèse trois millièmes de pour cent ne changerait rigoureusement rien. 3pt"
  },
  {
   "q": "Dans une paroi de cabine, la tôle apporte 0,003 % de la résistance et l'isolant 97,6 %. Pour réduire les pertes, il faut agir sur :",
   "choix": [
    "l'épaisseur de tôle",
    "l'épaisseur d'isolant",
    "indifféremment l'une ou l'autre"
   ],
   "bonne": 1,
   "expl": "même flux à travers des couches successives, écarts de température qui s'ajoutent : c'est la définition d'un montage en série, et les résistances s'additionnent. La conséquence pratique est la question 9 : c'est la plus grande résistance qui commande. Épaissir une tôle qui pèse trois millièmes de pour cent ne changerait rigoureusement rien. 3pt"
  },
  {
   "q": "Les relations de ce chapitre supposent que l'on se place :",
   "choix": [
    "en régime variable",
    "en régime permanent",
    "juste après la mise en chauffe"
   ],
   "bonne": 1,
   "expl": "en régime variable, une partie du flux sert encore à échauffer la paroi elle-même. Mesurer trop tôt sous-estime l'écart de température, et donc la résistance : l'erreur est systématique, elle va toujours dans le même sens, et la répéter ne la corrige pas. 3pt"
  },
  {
   "q": "Un fluide de débit massique q_m voit sa température varier de ΔT. La puissance thermique qu'il emporte vaut :",
   "choix": [
    "φ= q_m c ΔT",
    "φ= m c ΔT",
    "φ= h S ΔT"
   ],
   "bonne": 0,
   "expl": "q_m c ΔT est la relation m c Δθ du chapitre 8 écrite par seconde : on ne suit plus une masse fixe mais une masse qui défile. La réponse b donnerait une énergie, pas une puissance ; la c concerne l'échange entre un fluide et une paroi, pas ce que le fluide emporte. 3pt"
  },
  {
   "q": "Dans un échangeur, on mesure φ_chaud = 1,76 kW et φ_froid = 1,67 kW. Cet écart :",
   "choix": [
    "prouve une erreur de manipulation",
    "est du signe attendu si l'appareil perd vers l'ambiance",
    "est impossible physiquement"
   ],
   "bonne": 1,
   "expl": "le circuit chaud cède toujours un peu plus que le froid ne reçoit, la différence partant vers l'ambiance. Un écart de ce signe est donc normal ; c'est l'écart inverse qui serait suspect. Attention toutefois : sur un seul essai, un écart de 4,8 % reste dans les incertitudes et ne prouve rien. Ce qui l'établit, c'est de le retrouver toujours dans le même sens d'un binôme à l'autre. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Flux thermique » ?",
   "verso": "Le <strong>flux thermique</strong> φ est l'énergie transférée par unité de temps. C'est donc une puissance, exprimée en watts.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Densité de flux » ?",
   "verso": "La <strong>densité de flux</strong> est le flux rapporté à l'unité de surface : φ= φ/ S, en W/m².",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Résistance thermique » ?",
   "verso": "La <strong>résistance thermique</strong> d'une paroi plane se calcule par R_th = e / (λS) et s'exprime en K/W. Le flux s'écrit alors φ= ΔT / R_th.",
   "origine": "definition du cours"
  },
  {
   "type": "definition",
   "recto": "Qu'appelle-t-on « Convection » ?",
   "verso": "La <strong>convection</strong> est le transfert thermique assuré par le mouvement d'un fluide. Elle est dite naturelle lorsque ce mouvement naît du seul échauffement du fluide, et forcée lorsqu'un ventilateur ou une pompe l'impose.",
   "origine": "definition du cours"
  },
  {
   "type": "retenir",
   "recto": "Un sens unique — qu'y a-t-il à retenir ?",
   "verso": "Un transfert thermique s'effectue toujours spontanément du corps le plus chaud vers le corps le plus froid, et il cesse lorsque les deux températures sont égales.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Trois mécanismes, trois exigences — qu'y a-t-il à retenir ?",
   "verso": "Conduction : de proche en proche dans la matière immobile. Convection : transport par un fluide en mouvement. Rayonnement : à distance, par ondes, sans aucun support matériel.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Isolant ou conducteur — qu'y a-t-il à retenir ?",
   "verso": "Un matériau isole d'autant mieux que sa conductivité λ est petite. Les bons isolants du métier — laine de verre, polystyrène, liège — se situent tous autour de 0,04 W/m/K, soit dix mille fois moins que le cuivre.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Un matériau isole d'autant mieux que sa conductivité λ est …….",
   "rep": "petite",
   "verso": "<strong>petite</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>convection</strong> est le transfert thermique assuré par …….",
   "rep": "le mouvement d'un fluide",
   "verso": "<strong>le mouvement d'un fluide</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>densité de flux</strong> est le flux rapporté à l'unité de surface : ……, en W/m².",
   "rep": "φ= φ/ S",
   "verso": "<strong>φ= φ/ S</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>densité de flux</strong> est le flux rapporté à l'unité de surface : φ= φ/ S, en …….",
   "rep": "W/m²",
   "verso": "<strong>W/m²</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La <strong>résistance thermique</strong> d'une paroi plane se calcule par …… et s'exprime en K/W.",
   "rep": "R_th = e / (λS)",
   "verso": "<strong>R_th = e / (λS)</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Le flux thermique φ s'exprime en ……",
   "rep": "watts",
   "verso": "<strong>watts</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le seul mode de transfert qui fonctionne dans le vide est ……",
   "rep": "le rayonnement",
   "verso": "<strong>le rayonnement</strong>",
   "origine": "bilan"
  }
 ]
};
