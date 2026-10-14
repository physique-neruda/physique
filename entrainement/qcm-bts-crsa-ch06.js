/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS CRSA · Chapitre 6 — Viscosité et pertes de charge
   Le bilan vient de CRSA_ch06_bilan.tex, les cartes des \trou{} de
   CRSA_ch06_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-crsa",
 "num": "6",
 "cle": "ch06",
 "etiquette": "Chapitre 6",
 "titre": "Viscosité et pertes de charge",
 "niveau": "BTS CRSA",
 "prerequis": [
  {
   "q": "Une grandeur varie comme 1/D⁴. Si D passe de 10 à 14, elle est multipliée par :",
   "choix": [
    "0,260",
    "0,714",
    "3,84",
    "2,00"
   ],
   "bonne": 0,
   "expl": "(10/14)⁴ = 0,260 : elle est divisée par 3,84. Un exposant 4 amplifie énormément le moindre écart de diamètre."
  },
  {
   "q": "Une grandeur varie comme x². Si x est multiplié par 1,5, elle est multipliée par :",
   "choix": [
    "2,25",
    "1,50",
    "3,00",
    "4,50"
   ],
   "bonne": 0,
   "expl": "1,5² = 2,25. Le carré ne se contente pas de suivre : il amplifie."
  },
  {
   "q": "Convertir 20 L/min en m³/s :",
   "choix": [
    "3,33×10⁻⁴ m³/s",
    "3,33×10⁻² m³/s",
    "1,20 m³/s",
    "3,33×10⁻⁶ m³/s"
   ],
   "bonne": 0,
   "expl": "20 L = 2,0×10⁻² m³, et une minute vaut 60 s : 2,0×10⁻²/60 = 3,33×10⁻⁴ m³/s. Deux conversions, une en haut, une en bas."
  },
  {
   "q": "Calculer 64/230 :",
   "choix": [
    "0,278",
    "2,78",
    "3,59",
    "0,0278"
   ],
   "bonne": 0,
   "expl": "0,278. C'est la forme du coefficient de perte de charge en régime laminaire : 64/Re."
  },
  {
   "q": "Calculer (1,70 × 0,025)/(1,0×10⁻⁶) :",
   "choix": [
    "4,25×10⁴",
    "4,25×10⁻⁸",
    "4,25×10²",
    "2,35×10⁻⁵"
   ],
   "bonne": 0,
   "expl": "0,0425 / 10⁻⁶ = 4,25×10⁴. Diviser par 10⁻⁶ revient à multiplier par 10⁺⁶ : l'exposant change de signe en remontant du dénominateur."
  },
  {
   "q": "Une grandeur varie comme 1/D⁴. Pour la diviser par 3, il faut multiplier D par :",
   "choix": [
    "1,32",
    "3,00",
    "1,73",
    "0,76"
   ],
   "bonne": 0,
   "expl": "3^(1/4) = 1,32. Un tout petit élargissement de conduite suffit à diviser les pertes par trois."
  }
 ],
 "bilan": [
  {
   "q": "La viscosité cinématique ν s'exprime en :",
   "choix": [
    "Pa·s",
    "meter²/s",
    "kg/meter³",
    "sans unité"
   ],
   "bonne": 1,
   "expl": "ν= µ/ρ. La réponse « Pa·s » est l'unité de la viscosité dynamique µ : les deux se confondent facilement."
  },
  {
   "q": "Quand la température d'une huile diminue, sa viscosité :",
   "choix": [
    "diminue",
    "augmente",
    "ne change pas",
    "s'annule"
   ],
   "bonne": 1,
   "expl": "Une huile VG 46 est cinq fois et demie plus visqueuse à 10 qu'à 40 °C. C'est ce qui explique les difficultés au démarrage à froid."
  },
  {
   "q": "Le nombre de Reynolds s'exprime en :",
   "choix": [
    "meter/s",
    "Pa",
    "sans unité",
    "meter²/s"
   ],
   "bonne": 2,
   "expl": "C'est un nombre pur, qui compare effets d'inertie et effets visqueux."
  },
  {
   "q": "Un écoulement pour lequel Re = 350 est :",
   "choix": [
    "laminaire",
    "turbulent",
    "transitoire",
    "impossible"
   ],
   "bonne": 0,
   "expl": "Re < 2000."
  },
  {
   "q": "En régime laminaire, le coefficient de perte de charge vaut :",
   "choix": [
    "λ= 64 Re",
    "λ= 64/Re",
    "λ= Re/64",
    "il se lit sur un abaque"
   ],
   "bonne": 1,
   "expl": "Et cette relation n'est valable qu'en laminaire."
  },
  {
   "q": "En régime turbulent, le coefficient λ :",
   "choix": [
    "vaut 64/Re",
    "se lit sur un abaque",
    "est nul",
    "vaut 1"
   ],
   "bonne": 1,
   "expl": "λ dépend alors aussi de la rugosité de la conduite ; l'énoncé le fournit."
  },
  {
   "q": "Les pertes de charge régulières se produisent :",
   "choix": [
    "dans les coudes",
    "dans les vannes",
    "le long des conduites droites",
    "dans la pompe"
   ],
   "bonne": 2,
   "expl": "Les coudes et les vannes relèvent des pertes singulières."
  },
  {
   "q": "Les coefficients K des pertes singulières :",
   "choix": [
    "se multiplient",
    "s'additionnent",
    "se moyennent",
    "s'annulent"
   ],
   "bonne": 1,
   "expl": "Δp_sing = ( K) 1/2ρv²."
  },
  {
   "q": "Dans l'équation de Bernoulli corrigée, le terme de pertes :",
   "choix": [
    "peut être négatif",
    "est toujours positif",
    "est nul en pratique",
    "se place du côté du départ"
   ],
   "bonne": 1,
   "expl": "Le fluide perd de l'énergie en chemin, il n'en gagne jamais. Le terme se place du côté de l'arrivée."
  },
  {
   "q": "À débit imposé et en régime laminaire, la perte de charge varie comme :",
   "choix": [
    "D",
    "1/D",
    "1/D²",
    "1/D⁴"
   ],
   "bonne": 3,
   "expl": "C'est le résultat le plus utile du chapitre : augmenter le diamètre de 40 % divise les pertes par quatre."
  },
  {
   "q": "En régime laminaire, la perte de charge est proportionnelle :",
   "choix": [
    "au débit",
    "au carré du débit",
    "à la racine du débit",
    "elle ne dépend pas du débit"
   ],
   "bonne": 0,
   "expl": "Parce que λ= 64/Re décroît comme 1/v, ce qui « mange » un des deux facteurs v de 1/2ρv². En turbulent, c'est le carré du débit."
  },
  {
   "q": "Régler un débit en fermant à demi une vanne revient à :",
   "choix": [
    "économiser de l'énergie",
    "dissiper volontairement de la puissance",
    "augmenter le rendement de la pompe",
    "réduire la viscosité"
   ],
   "bonne": 1,
   "expl": "On crée volontairement une perte de charge, donc de la chaleur. Il vaut toujours mieux agir sur la vitesse de la pompe. enumerate tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que mesure la viscosité ? Viscosité dynamique et cinématique : symboles et unités ?",
   "verso": "La <b>résistance du fluide à l'écoulement</b>.<br>Dynamique <b>μ</b> en Pa·s ; cinématique <b>ν = μ/ρ</b> en <b>m²/s</b>.",
   "origine": "Cours §1 La viscosité"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment la viscosité d'une huile varie-t-elle avec la température ? Conséquence ?",
   "verso": "Elle <b>augmente fortement à froid</b> (VG 46 : 5,5 fois plus visqueuse à 10 °C qu'à 40 °C). Un circuit hydraulique peine au démarrage : on préchauffe l'huile.",
   "origine": "Cours §1 Viscosité et température"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formule du nombre de Reynolds ? Unité ?",
   "verso": "<b>Re = v d / ν</b>, <b>sans unité</b>.",
   "origine": "Cours §2 Le nombre de Reynolds"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quel régime pour Re &lt; 2000 ? Re &gt; 4000 ?",
   "verso": "Re &lt; 2000 : <b>laminaire</b> (filets parallèles).<br>Re &gt; 4000 : <b>turbulent</b> (tourbillons).",
   "origine": "Cours §2 Les deux régimes"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Où place-t-on le terme de pertes de charge dans Bernoulli ? Quel est son signe ?",
   "verso": "Δp<sub>pertes</sub> est <b>toujours positif</b> et se place <b>du côté de l'arrivée</b> : le fluide perd de l'énergie en chemin.",
   "origine": "Cours §3 Bernoulli corrigé"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pertes régulières et pertes singulières : différence ?",
   "verso": "<b>Régulières</b> : le long des conduites droites (frottement sur les parois).<br><b>Singulières</b> : aux accidents (coude, vanne, rétrécissement, té). Elles s'additionnent.",
   "origine": "Cours §3 Deux familles de pertes"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formule des pertes de charge régulières ? Que vaut λ en laminaire ?",
   "verso": "<b>Δp = λ (L/D) ½ ρ v²</b>, λ sans unité.<br>Laminaire : <b>λ = 64 / Re</b> ; turbulent : abaque (donné).",
   "origine": "Cours §4 Les pertes régulières"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Formule des pertes de charge singulières ?",
   "verso": "<b>Δp = (Σ K) ½ ρ v²</b>, coefficients K sans unité, donnés, qui <b>s'additionnent</b>.",
   "origine": "Cours §5 Les pertes singulières"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>À débit imposé, en laminaire, comment la perte de charge dépend-elle de D et de L ?",
   "verso": "Comme <b>1/D<sup>4</sup></b> et comme <b>L</b>. Le <b>diamètre</b> est le levier le plus efficace (+40 % de D → pertes ÷ 4).",
   "origine": "Cours §6 Le diamètre, levier principal"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment les pertes de charge suivent-elles le débit en laminaire ? en turbulent ?",
   "verso": "Laminaire : comme le <b>débit</b>. Turbulent : comme son <b>carré</b>.",
   "origine": "Cours §6 Débit et pertes"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que doit fournir une pompe ? Puissance hydraulique ?",
   "verso": "La somme : <b>dénivelé + pertes régulières + pertes singulières</b>.<br><b>P<sub>hyd</sub> = Δp × Q<sub>v</sub></b> ; puissance absorbée = P<sub>hyd</sub> / η.",
   "origine": "Cours §7 La pompe"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer une perte de charge régulière ?",
   "verso": "1. <b>Vitesse</b> : v = Q<sub>v</sub>/S (débit en m³/s).<br>2. <b>Reynolds</b> et <b>nommer le régime</b> (jamais facultatif).<br>3. <b>λ</b> : 64/Re en laminaire, abaque en turbulent.<br>4. Appliquer Δp = λ (L/D) ½ρv², convertir en bar.",
   "origine": "Cours §4 Méthode — Perte de charge régulière"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Huile (ν = 46 × 10<sup>−6</sup> m²/s) à 0,85 m/s dans 12 mm. Comment trouver le régime ?",
   "verso": "1. Convertir d = 0,012 m.<br>2. Re = v d / ν = 0,85 × 0,012 / 46 × 10<sup>−6</sup> ≈ <b>222</b>.<br>3. Re &lt; 2000 → <b>laminaire</b>.",
   "origine": "Cours §2 Deux fluides, deux régimes"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment dimensionner une pompe ?",
   "verso": "1. <b>Additionner</b> dénivelé (ρgh), pertes régulières, pertes singulières → Δp<sub>pompe</sub>.<br>2. <b>P<sub>hyd</sub> = Δp × Q<sub>v</sub></b>.<br>3. Diviser par le <b>rendement</b>.<br>4. <b>Comparer les postes</b> pour savoir où agir.",
   "origine": "Cours §7 Méthode — Dimensionner une pompe"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
