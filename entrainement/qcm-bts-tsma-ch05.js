/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 05 · Viscosité et pertes de charge
   Le bilan vient de ch05_bilan.tex, les cartes des \trou{} de
   ch05_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "5",
 "titre": "Viscosité et pertes de charge",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Convertir 46 mm²/s en m²/s :",
   "choix": [
    "4,6×10⁻²",
    "4,6×10⁻⁵",
    "4,6×10⁻⁶",
    "46×10⁻³"
   ],
   "bonne": 1,
   "expl": "1 mm² = 10⁻⁶ m² : 46 mm²/s = 4,6×10⁻⁵ m²/s. C'est la viscosité d'une ISO VG 46."
  },
  {
   "q": "Si le diamètre D est multiplié par 2, la grandeur D⁴ est multipliée par :",
   "choix": [
    "4",
    "8",
    "16",
    "32"
   ],
   "bonne": 2,
   "expl": "2⁴ = 16. C'est le cœur du chapitre : un exposant 4 amplifie énormément le moindre écart de diamètre."
  },
  {
   "q": "Combien vaut 0,90⁴ ?",
   "choix": [
    "0,36",
    "0,656",
    "0,81",
    "0,90"
   ],
   "bonne": 1,
   "expl": "0,656 : dix pour cent de diamètre en moins font chuter la grandeur de 34 %."
  },
  {
   "q": "Combien vaut (3,00×10⁻³)⁴ ?",
   "choix": [
    "8,10×10⁻¹¹",
    "1,20×10⁻¹¹",
    "8,10×10⁻¹²",
    "9,00×10⁻⁶"
   ],
   "bonne": 0,
   "expl": "3⁴ = 81 et (10⁻³)⁴ = 10⁻¹², d'où 81×10⁻¹² = 8,10×10⁻¹¹."
  },
  {
   "q": "Une grandeur y est proportionnelle à x^1,75. Si x est multiplié par 2, y est multiplié par :",
   "choix": [
    "1,75",
    "2",
    "3,36",
    "3,50"
   ],
   "bonne": 2,
   "expl": "2^1,75 = 3,36. Un exposant supérieur à 1 fait croître le résultat plus vite que la variable."
  },
  {
   "q": "Le nombre de Reynolds Re = ρvD/η s'exprime :",
   "choix": [
    "en m/s",
    "en pascals",
    "sans unité",
    "en Pa·s"
   ],
   "bonne": 2,
   "expl": "Toutes les unités se simplifient : Re est un nombre pur, c'est ce qui lui permet de comparer des écoulements de tailles différentes."
  }
 ],
 "bilan": [
  {
   "q": "La viscosité dynamique η s'exprime en :",
   "choix": [
    "Pa·s",
    "m²/s",
    "Pa"
   ],
   "bonne": 0,
   "expl": "η en Pa·s. La réponse « m²/s » est celle de la viscosité cinématique ν= η/ρ : les deux se distinguent par la masse volumique. 3pt"
  },
  {
   "q": "La désignation « ISO VG 46 » signifie que la viscosité cinématique vaut 46 mm²/s :",
   "choix": [
    "à toute température",
    "à 100 °C",
    "à 40 °C"
   ],
   "bonne": 2,
   "expl": "le nombre du grade ISO VG est la viscosité cinématique à 40 °C, température de référence normalisée. Une huile n'a pas « une » viscosité : elle en a une par température, et le facteur atteint 90 entre 0 °C et 100 °C. 3pt"
  },
  {
   "q": "Quand la température d'une huile augmente, sa viscosité :",
   "choix": [
    "augmente",
    "diminue fortement",
    "ne change pas"
   ],
   "bonne": 1,
   "expl": "le nombre du grade ISO VG est la viscosité cinématique à 40 °C, température de référence normalisée. Une huile n'a pas « une » viscosité : elle en a une par température, et le facteur atteint 90 entre 0 °C et 100 °C. 3pt"
  },
  {
   "q": "Le nombre de Reynolds s'exprime en :",
   "choix": [
    "m/s",
    "Pa",
    "il est sans unité"
   ],
   "bonne": 2,
   "expl": "Re est sans dimension : si le calcul lui donne une unité, une conversion manque. Sous 2000 l'écoulement est laminaire, au-dessus de 3000 turbulent. 3pt"
  },
  {
   "q": "Un écoulement pour lequel Re = 500 est :",
   "choix": [
    "laminaire",
    "turbulent",
    "impossible"
   ],
   "bonne": 0,
   "expl": "Re est sans dimension : si le calcul lui donne une unité, une conversion manque. Sous 2000 l'écoulement est laminaire, au-dessus de 3000 turbulent. 3pt"
  },
  {
   "q": "Une perte de charge due à un coude est dite :",
   "choix": [
    "régulière",
    "singulière",
    "négligeable"
   ],
   "bonne": 1,
   "expl": "un coude est une singularité : la perte y est concentrée en un point, alors que les pertes régulières se répartissent sur les longueurs droites. Dans les deux cas l'énergie part en chaleur et n'est jamais récupérable. 3pt"
  },
  {
   "q": "L'énergie perdue par pertes de charge se retrouve sous forme :",
   "choix": [
    "de pression en aval",
    "d'énergie cinétique",
    "de chaleur"
   ],
   "bonne": 2,
   "expl": "un coude est une singularité : la perte y est concentrée en un point, alors que les pertes régulières se répartissent sur les longueurs droites. Dans les deux cas l'énergie part en chaleur et n'est jamais récupérable. 3pt"
  },
  {
   "q": "La loi de Poiseuille n'est valable que si l'écoulement est :",
   "choix": [
    "laminaire",
    "turbulent",
    "de n'importe quel régime"
   ],
   "bonne": 0,
   "expl": "Poiseuille suppose un régime laminaire. Calculer Re avant d'appliquer la formule : employée à tort sur un écoulement turbulent, elle sous-estime les pertes d'un facteur 3 ou davantage, et conduit à dimensionner une pompe très insuffisante. 3pt"
  },
  {
   "q": "Dans la loi de Poiseuille, le débit est proportionnel à :",
   "choix": [
    "D",
    "D⁴",
    "D²"
   ],
   "bonne": 1,
   "expl": "le débit varie comme D⁴, donc doubler le diamètre le multiplie par 16. C'est le levier le plus efficace d'un circuit : passer au calibre supérieur coûte peu et rapporte bien davantage qu'une pompe plus puissante. 3pt"
  },
  {
   "q": "Doubler le diamètre d'une conduite, à Δp et L fixés, multiplie le débit par :",
   "choix": [
    "2",
    "8",
    "16"
   ],
   "bonne": 2,
   "expl": "le débit varie comme D⁴, donc doubler le diamètre le multiplie par 16. C'est le levier le plus efficace d'un circuit : passer au calibre supérieur coûte peu et rapporte bien davantage qu'une pompe plus puissante. 3pt"
  },
  {
   "q": "En régime laminaire, le tracé de Δp en fonction de Q_v est :",
   "choix": [
    "une courbe s'incurvant vers le haut",
    "une droite passant par l'origine",
    "une horizontale"
   ],
   "bonne": 1,
   "expl": "en laminaire, Δp Q_v : le tracé est une droite par l'origine, et c'est un diagnostic visuel indépendant du calcul de Re. En turbulent, Δp Q_v^1,75, donc doubler le débit multiplie les pertes par 2^1,75 = 3,4. Les pertes croissent plus vite que le débit : c'est ce qui interdit d'augmenter un débit sans revoir la conduite. tcolorbox"
  },
  {
   "q": "En régime turbulent, doubler le débit multiplie les pertes de charge par environ :",
   "choix": [
    "3,4",
    "2",
    "16"
   ],
   "bonne": 0,
   "expl": "en laminaire, Δp Q_v : le tracé est une droite par l'origine, et c'est un diagnostic visuel indépendant du calcul de Re. En turbulent, Δp Q_v^1,75, donc doubler le débit multiplie les pertes par 2^1,75 = 3,4. Les pertes croissent plus vite que le débit : c'est ce qui interdit d'augmenter un débit sans revoir la conduite. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que mesure la viscosité dynamique ? Symbole et unité ?",
   "verso": "La <b>résistance au glissement</b> des couches de fluide les unes sur les autres. Symbole <b>η</b>, en <b>Pa·s</b>.",
   "origine": "Cours §1.1 Viscosité dynamique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Viscosité cinématique : formule et unités ?",
   "verso": "<b>ν = η / ρ</b> en m²/s, en pratique en mm²/s : <b>1 mm²/s = 10<sup>−6</sup> m²/s</b>.",
   "origine": "Cours §1.1 Viscosité cinématique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que signifie « ISO VG 46 » ?",
   "verso": "Viscosité cinématique de <b>46 mm²/s à 40 °C</b>.",
   "origine": "Cours §1.1 Désignation d'une huile"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment varie la viscosité d'une huile avec la température ? Conséquence ?",
   "verso": "Elle <b>s'effondre quand la température monte</b> (÷ 90 entre 0 et 100 °C pour une VG 46). Tout calcul ou relevé doit <b>préciser la température</b>.",
   "origine": "Cours §1.2 Viscosité et température"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Régime laminaire et régime turbulent : description ?",
   "verso": "<b>Laminaire</b> : filets qui glissent sans se mélanger, profil parabolique.<br><b>Turbulent</b> : écoulement chaotique, tourbillons, profil aplati.",
   "origine": "Cours §2.1 Les deux régimes"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formule du nombre de Reynolds ? Seuils (TSMA) ?",
   "verso": "<b>Re = ρ v D / η = v D / ν</b>, sans unité.<br><b>Re &lt; 2000</b> : laminaire ; <b>Re &gt; 3000</b> : turbulent ; entre les deux : transition.",
   "origine": "Cours §2.2 Nombre de Reynolds"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'une perte de charge ? Où part l'énergie ?",
   "verso": "La <b>chute de pression</b> du fluide entre deux points d'un circuit. L'énergie est <b>dissipée en chaleur</b>, irrécupérable.",
   "origine": "Cours §3.1 Pertes de charge"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formules des pertes régulières et singulières ?",
   "verso": "Régulières (longueurs droites) : <b>Δp = λ (L/D) ½ ρ v²</b>.<br>Singulières (coude, vanne, raccord, filtre) : <b>Δp = K ½ ρ v²</b>.",
   "origine": "Cours §3.1 Régulières et singulières"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sur un engin agricole, quelles pertes de charge dominent souvent ?",
   "verso": "Les <b>singulières</b> : conduites courtes mais accessoires nombreux. Un raccord mal choisi peut coûter autant que 10 m de flexible.",
   "origine": "Cours §3.1 Sur un engin"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment évolue la charge le long d'un circuit ?",
   "verso": "Elle <b>ne fait que décroître</b> dans le sens de l'écoulement ; seule une <b>pompe</b> la fait remonter.",
   "origine": "Cours §3.2 La ligne de charge"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Loi de Poiseuille ? Condition d'application ?",
   "verso": "<b>Q<sub>v</sub> = π Δp D<sup>4</sup> / (128 η L)</b>, soit Δp = 128 η L Q<sub>v</sub> / (π D<sup>4</sup>).<br>Seulement en régime <b>laminaire</b>, conduite cylindrique droite : calculer Re d'abord.",
   "origine": "Cours §4.1 Loi de Poiseuille"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>À Δp et L fixés, comment le débit dépend-il du diamètre ?",
   "verso": "Comme <b>D<sup>4</sup></b> : doubler D multiplie le débit par <b>16</b> ; D − 10 % → débit − 34 %.",
   "origine": "Cours §4.2 La puissance quatrième"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment les pertes croissent-elles avec le débit en laminaire ? en turbulent ?",
   "verso": "Laminaire : <b>Δp ∝ Q<sub>v</sub></b> (droite par l'origine).<br>Turbulent : <b>Δp ∝ Q<sub>v</sub><sup>1,75</sup></b> environ (débit × 2 → pertes × 3,4).",
   "origine": "Cours §4.3 Laminaire et turbulent"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Huile ISO VG 46, ρ = 870 kg/m³. Comment calculer sa viscosité dynamique à 40 °C ?",
   "verso": "1. ν = 46 mm²/s = <b>4,6 × 10<sup>−5</sup> m²/s</b>.<br>2. η = ν × ρ = 4,6 × 10<sup>−5</sup> × 870 = <b>4,0 × 10<sup>−2</sup> Pa·s</b>.",
   "origine": "Cours §1.1 Lire une désignation d'huile"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment déterminer le régime d'écoulement dans une conduite ?",
   "verso": "1. Convertir D en m, v en m/s, ν en m²/s.<br>2. <b>Re = v D / ν</b>.<br>3. Vérifier que Re est sans unité.<br>4. &lt; 2000 laminaire ; &gt; 3000 turbulent.",
   "origine": "Cours §2.2 Le fluide décide"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Pertes de 3,1 bar dans un flexible de 10 mm. Que deviennent-elles en 16 mm (même débit, laminaire) ?",
   "verso": "1. Δp ∝ 1/D<sup>4</sup>.<br>2. Rapport (16/10)<sup>4</sup> = <b>6,6</b>.<br>3. Δp = 3,1/6,6 ≈ <b>0,47 bar</b>.<br>Passer au calibre supérieur rapporte plus qu'une pompe plus puissante.",
   "origine": "Cours §4.2 Choisir un flexible"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
