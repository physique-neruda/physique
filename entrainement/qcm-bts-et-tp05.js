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
   "type": "retenir",
   "recto": "Rapport de transformation — qu'y a-t-il à retenir ?",
   "verso": "\\[ m = N₂/N₁ = U₂/U₁ = I₁/I₂ \\] Si m < 1, le transformateur est abaisseur de tension ; si m > 1, il est élévateur. Un transformateur parfait ne perd rien : S₁ = S₂, soit U₁ I₁ = U₂ I₂. Ce qu'il gagne en tension, il le perd en courant.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Essai à vide — qu'y a-t-il à retenir ?",
   "verso": "Primaire sous sa <strong>tension nominale</strong>, secondaire <strong>ouvert</strong>. Le flux est nominal, donc les pertes fer aussi ; le courant primaire est très faible, donc les pertes cuivre sont négligeables : P₁₀ ≈ P_fer.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Essai en court-circuit — qu'y a-t-il à retenir ?",
   "verso": "Secondaire en court-circuit, primaire sous une tension <strong>très réduite</strong>, montée progressivement jusqu'à I₂ = I_2n. Le courant est nominal, donc les pertes cuivre aussi.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Un transformateur parfait ne perd rien : ……, soit U₁ I₁ = U₂ I₂.",
   "rep": "S₁ = S₂",
   "verso": "<strong>S₁ = S₂</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le transformateur ne fonctionne …… : une tension continue crée un flux constant, qui n'induit rien au secondaire.",
   "rep": "qu'en alternatif",
   "verso": "<strong>qu'en alternatif</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le flux est nominal, donc les pertes fer aussi ; le courant primaire est très faible, donc les pertes cuivre sont négligeables : …….",
   "rep": "P₁₀ ≈ P_fer",
   "verso": "<strong>P₁₀ ≈ P_fer</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "La plaque indique la <strong>puissance apparente nominale</strong> S_n (en V·A), la tension primaire U_1n et la tension secondaire …… U₂₀.",
   "rep": "à vide",
   "verso": "<strong>à vide</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Le courant est nominal, donc les pertes cuivre aussi ; la tension est si faible que le flux et les pertes fer sont négligeables : …… au courant nominal.",
   "rep": "P_1cc ≈ P_J",
   "verso": "<strong>P_1cc ≈ P_J</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Un transformateur fonctionne ……",
   "rep": "uniquement en alternatif",
   "verso": "<strong>uniquement en alternatif</strong> — Il faut un flux variable.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Le rapport de transformation vaut ……",
   "rep": "N₂/N₁",
   "verso": "<strong>N₂/N₁</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un transformateur 230 V / 12 V est ……",
   "rep": "abaisseur",
   "verso": "<strong>abaisseur</strong> — m = 0,052 < 1.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La puissance nominale d'un transformateur s'exprime en ……",
   "rep": "voltampères",
   "verso": "<strong>voltampères</strong> — Il chauffe selon le courant, quel que soit le cosφ.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Les pertes fer ……",
   "rep": "sont pratiquement constantes en service",
   "verso": "<strong>sont pratiquement constantes en service</strong> — Elles ne dépendent que de la tension et de la fréquence.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "L'essai à vide permet de mesurer ……",
   "rep": "les pertes fer et le rapport m",
   "verso": "<strong>les pertes fer et le rapport m</strong> — À vide, le courant est trop faible pour que les pertes cuivre comptent.",
   "origine": "bilan"
  }
 ],
 "cartes_figees": false
};
