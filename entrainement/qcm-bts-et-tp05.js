/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · TP 5 — Les transformateurs
   Le bilan vient de tp05_bilan.tex, les cartes des \trou{} de
   tp05_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "5",
 "cle": "tp05",
 "etiquette": "TP 5",
 "titre": "Les transformateurs",
 "niveau": "BTS ET",
 "prerequis": [],
 "bilan": [
  {
   "q": "Un transformateur fonctionne :",
   "choix": [
    "en continu et en alternatif",
    "uniquement en triphasé",
    "uniquement en continu",
    "uniquement en alternatif"
   ],
   "bonne": 3,
   "expl": "Il faut un flux variable."
  },
  {
   "q": "Le rapport de transformation vaut :",
   "choix": [
    "N₂/N₁",
    "U₁/U₂",
    "I₂/I₁",
    "N₁/N₂"
   ],
   "bonne": 0,
   "expl": "m = N₂/N₁ = U₂/U₁ = I₁/I₂ ; les réponses « N₁/N₂ », « U₁/U₂ » et « I₂/I₁ » sont les inverses."
  },
  {
   "q": "Un transformateur 230 V / 12 V est :",
   "choix": [
    "élévateur",
    "ni l'un ni l'autre",
    "abaisseur",
    "élévateur de courant et de tension"
   ],
   "bonne": 2,
   "expl": "m = 0,052 < 1."
  },
  {
   "q": "Dans un transformateur parfait abaisseur, le courant secondaire est :",
   "choix": [
    "plus faible que le courant primaire",
    "plus grand que le courant primaire",
    "égal au courant primaire",
    "nul"
   ],
   "bonne": 1,
   "expl": "I₂ = I₁/m : ce qu'il perd en tension, il le gagne en courant."
  },
  {
   "q": "La puissance nominale d'un transformateur s'exprime en :",
   "choix": [
    "voltampères",
    "vars",
    "ampères",
    "watts"
   ],
   "bonne": 0,
   "expl": "Il chauffe selon le courant, quel que soit le cosφ."
  },
  {
   "q": "Les pertes fer :",
   "choix": [
    "augmentent comme le carré du courant",
    "sont nulles à vide",
    "sont pratiquement constantes en service",
    "se mesurent par l'essai en court-circuit"
   ],
   "bonne": 2,
   "expl": "Elles ne dépendent que de la tension et de la fréquence."
  },
  {
   "q": "L'essai à vide permet de mesurer :",
   "choix": [
    "les pertes cuivre",
    "la résistance R_s",
    "le rendement en charge",
    "les pertes fer et le rapport m"
   ],
   "bonne": 3,
   "expl": "À vide, le courant est trop faible pour que les pertes cuivre comptent."
  },
  {
   "q": "L'essai en court-circuit se fait :",
   "choix": [
    "sous la tension nominale",
    "sous une tension très réduite",
    "secondaire ouvert",
    "en continu"
   ],
   "bonne": 1,
   "expl": "Sous tension nominale, le court-circuit détruirait le transformateur."
  },
  {
   "q": "En charge inductive, la tension secondaire :",
   "choix": [
    "augmente",
    "diminue",
    "reste égale à U₂₀",
    "s'annule"
   ],
   "bonne": 1,
   "expl": "Formule de Kapp : la chute est maximale pour une charge inductive."
  },
  {
   "q": "Le rendement d'un transformateur est maximal quand :",
   "choix": [
    "les pertes cuivre égalent les pertes fer",
    "il fonctionne à vide",
    "les pertes fer sont nulles",
    "il est surchargé"
   ],
   "bonne": 0,
   "expl": "À vide, le rendement est nul."
  },
  {
   "q": "Le circuit magnétique est feuilleté pour :",
   "choix": [
    "faciliter le refroidissement uniquement",
    "augmenter le flux",
    "réduire les courants de Foucault",
    "réduire les pertes cuivre"
   ],
   "bonne": 2,
   "expl": "Les courants de Foucault sont des pertes fer."
  },
  {
   "q": "Un transformateur de distribution Dyn a :",
   "choix": [
    "un secondaire en triangle",
    "un neutre au primaire",
    "un primaire en étoile",
    "un primaire en triangle et un secondaire en étoile avec neutre"
   ],
   "bonne": 3,
   "expl": "Triangle côté haute tension, étoile avec neutre côté basse tension."
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment est constitué un transformateur ? Comment une tension apparaît-elle au secondaire ?",
   "verso": "Deux enroulements (<b>primaire</b>, <b>secondaire</b>) sur un même <b>circuit magnétique en tôles feuilletées</b>.<br>Le primaire alimenté en alternatif crée un champ <b>variable</b> qui traverse le secondaire : une tension y est induite.",
   "origine": "Cours §1 Constitution et principe"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Un transformateur fonctionne-t-il en continu ? Quel autre rôle assure-t-il ?",
   "verso": "<b>Non</b> : en continu, le champ est constant et n'induit rien.<br>Aucun fil ne relie les deux enroulements : il assure l'<b>isolement galvanique</b>.",
   "origine": "Cours §1 Alternatif seulement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rapport de transformation d'un transformateur parfait ? Abaisseur ou élévateur ?",
   "verso": "<b>m = N<sub>2</sub>/N<sub>1</sub> = U<sub>2</sub>/U<sub>1</sub> = I<sub>1</sub>/I<sub>2</sub></b><br>m &lt; 1 : <b>abaisseur</b> ; m &gt; 1 : <b>élévateur</b>.",
   "origine": "Cours §2 Rapport de transformation"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que dit la conservation de la puissance pour un transformateur parfait ?",
   "verso": "<b>S<sub>1</sub> = S<sub>2</sub></b> : U<sub>1</sub> I<sub>1</sub> = U<sub>2</sub> I<sub>2</sub>. Ce qu'il gagne en tension, il le perd en courant.",
   "origine": "Cours §2 Le transformateur parfait"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Transformateur 230 V / 24 V débitant 4,0 A : courant primaire ?",
   "verso": "1. m = 24 / 230 = <b>0,104</b>.<br>2. I<sub>1</sub> = m × I<sub>2</sub> = 4,0 × 0,104 = <b>0,42 A</b>.",
   "origine": "Cours §2 Un transformateur de commande"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Que porte la plaque d'un transformateur ? Comment en déduire I<sub>2n</sub> ? Pourquoi en VA ?",
   "verso": "S<sub>n</sub> (VA), U<sub>1n</sub>, et U<sub>20</sub> <b>à vide</b>.<br><b>I<sub>2n</sub> = S<sub>n</sub> / U<sub>20</sub></b>.<br>En <b>VA</b> car il chauffe selon le <b>courant</b>, quel que soit le cos φ.",
   "origine": "Cours §3 Lire une plaque signalétique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelles sont les deux sortes de pertes d'un transformateur réel ? De quoi dépendent-elles ?",
   "verso": "<b>Pertes fer</b> (circuit magnétique) : fixes à tension donnée.<br><b>Pertes cuivre</b> (effet Joule dans les enroulements) : <b>P<sub>J</sub> = R<sub>s</sub> I<sub>2</sub>²</b>, croissent comme le carré du courant.",
   "origine": "Cours §4 Les deux pertes"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Essai à vide : conditions ? Que mesure-t-on ?",
   "verso": "Primaire sous <b>tension nominale</b>, secondaire <b>ouvert</b>.<br>Flux nominal, courant très faible → <b>P<sub>10</sub> ≈ P<sub>fer</sub></b>. Donne aussi <b>m = U<sub>20</sub>/U<sub>1</sub></b>.",
   "origine": "Cours §5 Essai à vide"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Essai en court-circuit : conditions ? Que mesure-t-on ?",
   "verso": "Secondaire en <b>court-circuit</b>, primaire sous tension <b>très réduite</b>, montée jusqu'à I<sub>2</sub> = I<sub>2n</sub>.<br>Courant nominal, flux négligeable → <b>P<sub>1cc</sub> ≈ P<sub>J</sub></b> au courant nominal.",
   "origine": "Cours §5 Essai en court-circuit"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi l'essai en court-circuit part-il toujours de zéro ?",
   "verso": "Sous la tension nominale, un secondaire en court-circuit <b>détruit le transformateur</b>. On monte à l'<b>alternostat</b> depuis 0 et on ne dépasse jamais quelques % de U<sub>1n</sub>.",
   "origine": "Cours §5 Sécurité de l'essai en court-circuit"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>500 VA, 230/48 V. À vide : U<sub>20</sub> = 50,0 V, P<sub>10</sub> = 18 W. CC : U<sub>1cc</sub> = 13,8 V, P<sub>1cc</sub> = 26 W à I<sub>2n</sub> = 10,4 A. Exploiter.",
   "verso": "1. m = 50,0 / 230 = 0,217.<br>2. P<sub>fer</sub> = 18 W ; P<sub>J</sub> = 26 W au nominal.<br>3. <b>R<sub>s</sub> = P<sub>1cc</sub> / I<sub>2n</sub>²</b> = 26 / 10,4² = 0,24 Ω.<br>4. <b>Z<sub>s</sub> = m U<sub>1cc</sub> / I<sub>2n</sub></b> = 0,29 Ω ; <b>X<sub>s</sub> = √(Z<sub>s</sub>² − R<sub>s</sub>²)</b> = 0,16 Ω.",
   "origine": "Cours §5 Exploiter les deux essais"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Vu du secondaire, à quoi équivaut un transformateur en charge ?",
   "verso": "À une source <b>U<sub>20</sub></b> en série avec <b>R<sub>s</sub></b> et <b>X<sub>s</sub></b>. En charge, U<sub>2</sub> &lt; U<sub>20</sub>.",
   "origine": "Cours §6 Modèle vu du secondaire"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Chute de tension en charge (formule approchée de Kapp) ? Quand est-elle forte ?",
   "verso": "<b>ΔU<sub>2</sub> = U<sub>20</sub> − U<sub>2</sub> ≈ R<sub>s</sub> I<sub>2</sub> cos φ<sub>2</sub> + X<sub>s</sub> I<sub>2</sub> sin φ<sub>2</sub></b><br>D'autant plus forte que le courant est grand et la charge <b>inductive</b>.",
   "origine": "Cours §6 Formule de Kapp"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>R<sub>s</sub> = 0,24 Ω, X<sub>s</sub> = 0,16 Ω, U<sub>20</sub> = 50,0 V, I<sub>2</sub> = 10,4 A, cos φ<sub>2</sub> = 0,80 : U<sub>2</sub> ?",
   "verso": "1. sin φ<sub>2</sub> = 0,60.<br>2. ΔU<sub>2</sub> = 0,24 × 10,4 × 0,80 + 0,16 × 10,4 × 0,60 = <b>3,0 V</b>.<br>3. U<sub>2</sub> = 50,0 − 3,0 = <b>47,0 V</b>.",
   "origine": "Cours §6 Tension en charge"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rendement d'un transformateur ? Quand est-il maximal ? À vide ?",
   "verso": "<b>η = P<sub>2</sub> / (P<sub>2</sub> + P<sub>fer</sub> + P<sub>J</sub>)</b><br>Maximal quand <b>P<sub>J</sub> = P<sub>fer</sub></b>. À vide, η = 0 : il consomme ses pertes fer sans rien fournir.",
   "origine": "Cours §7 Rendement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Couplage usuel d'un transformateur de distribution (Dyn) ? Pourquoi ?",
   "verso": "<b>Triangle au primaire</b>, <b>étoile avec neutre au secondaire</b>.<br>La HT n'a pas besoin de neutre ; la BT en fournit un pour les récepteurs monophasés. Le rapport des tensions composées n'est plus le rapport des spires.",
   "origine": "Cours §8 Transformateur triphasé de distribution"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
