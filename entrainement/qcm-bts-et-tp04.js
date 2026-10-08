/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · TP 4 — Le triphasé
   Le bilan vient de tp04_bilan.tex, les cartes des \trou{} de
   tp04_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "4",
 "cle": "tp04",
 "etiquette": "TP 4",
 "titre": "Le triphasé",
 "niveau": "BTS ET",
 "prerequis": [],
 "bilan": [
  {
   "q": "Sur le réseau de distribution, la tension entre une phase et le neutre vaut :",
   "choix": [
    "230 V",
    "400 V",
    "690 V",
    "127 V"
   ],
   "bonne": 0,
   "expl": "La tension simple ; 400 V est la composée."
  },
  {
   "q": "Les trois tensions simples sont décalées l'une de l'autre de :",
   "choix": [
    "90",
    "180",
    "60",
    "120"
   ],
   "bonne": 3,
   "expl": "Un tiers de période."
  },
  {
   "q": "La tension composée vaut :",
   "choix": [
    "2V",
    "V√3",
    "V√2",
    "3V"
   ],
   "bonne": 1,
   "expl": "Construction de Fresnel : 2Vcos30°. La réponse « 2V » additionne des vecteurs qui ne sont pas alignés."
  },
  {
   "q": "En couplage étoile, chaque élément du récepteur est soumis à :",
   "choix": [
    "U√3",
    "la tension composée",
    "la tension simple",
    "aucune tension"
   ],
   "bonne": 2,
   "expl": "La tension simple, par construction du couplage étoile."
  },
  {
   "q": "En couplage triangle, le courant de ligne vaut :",
   "choix": [
    "J",
    "3J",
    "J/√3",
    "J√3"
   ],
   "bonne": 3,
   "expl": "Le courant de ligne se partage entre deux éléments."
  },
  {
   "q": "Un récepteur triphasé équilibré : le courant dans le neutre est :",
   "choix": [
    "trois fois le courant de ligne",
    "égal au courant de ligne",
    "nul",
    "impossible à prévoir"
   ],
   "bonne": 2,
   "expl": "La somme de trois courants égaux décalés de 120 est nulle."
  },
  {
   "q": "Un moteur « 230 V Δ / 400 V Y » se branche sur le réseau 230/400 V en :",
   "choix": [
    "triangle",
    "étoile",
    "étoile ou triangle indifféremment",
    "il ne peut pas être branché"
   ],
   "bonne": 1,
   "expl": "Un enroulement supporte 230 V, la tension simple du réseau."
  },
  {
   "q": "Un moteur « 400 V Δ / 690 V Y » se branche sur le même réseau en :",
   "choix": [
    "triangle",
    "il ne peut pas être branché",
    "étoile",
    "étoile puis triangle obligatoirement"
   ],
   "bonne": 0,
   "expl": "Un enroulement supporte 400 V, la composée."
  },
  {
   "q": "La puissance active d'un récepteur triphasé équilibré s'écrit :",
   "choix": [
    "UIcosφ",
    "3UIcosφ",
    "√3 UIcosφ",
    "√3 UI"
   ],
   "bonne": 2,
   "expl": "La réponse « √3 UIcosφ » est la puissance apparente."
  },
  {
   "q": "Dans cette formule, φ est le déphasage entre :",
   "choix": [
    "la tension et le courant d'un même élément",
    "U et I de ligne",
    "deux tensions simples",
    "deux courants de ligne"
   ],
   "bonne": 0,
   "expl": "Le piège classique : ce n'est pas le déphasage entre U et I de ligne."
  },
  {
   "q": "Méthode des deux wattmètres : P₁ = 2000 W, P₂ = 500 W. La puissance active vaut :",
   "choix": [
    "1500 W",
    "2500 W",
    "2598 W",
    "1000 W"
   ],
   "bonne": 1,
   "expl": "P = P₁ + P₂ ; la réponse « 1500 W » confond avec le calcul de Q."
  },
  {
   "q": "Une lecture P₂ négative signifie :",
   "choix": [
    "un wattmètre mal branché",
    "un récepteur générateur",
    "un défaut d'isolement",
    "un facteur de puissance inférieur à 0,5"
   ],
   "bonne": 3,
   "expl": "Une lecture négative est normale à faible cosφ, par exemple un moteur à vide."
  }
 ],
 "cartes": [
  {
   "type": "retenir",
   "recto": "Système triphasé équilibré — qu'y a-t-il à retenir ?",
   "verso": "Les trois tensions simples ont la même valeur efficace V et la même fréquence, mais elles sont décalées l'une de l'autre d'un tiers de période, soit 120. Leur somme est nulle à chaque instant.",
   "origine": "encadre du cours"
  },
  {
   "type": "retenir",
   "recto": "Méthode des deux wattmètres (récepteur équilibré) — qu'y a-t-il à retenir ?",
   "verso": "P = P₁ + P₂ Q = √3 (P₁ - P₂) Une lecture négative n'est pas une erreur : quand cosφ< 0,5, P₂ devient négatif. Il faut alors le compter avec son signe.",
   "origine": "encadre du cours"
  },
  {
   "type": "trou",
   "recto": "Sur le réseau de distribution : V = 230 V et U = …… — d'où l'écriture « 230/400 V ».",
   "rep": "400 V",
   "verso": "<strong>400 V</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "trou",
   "recto": "Les trois tensions simples ont …… V et la même fréquence, mais elles sont décalées l'une de l'autre d'un tiers de période, soit 120.",
   "rep": "la même valeur efficace",
   "verso": "<strong>la même valeur efficace</strong>",
   "origine": "cours a completer"
  },
  {
   "type": "question",
   "recto": "Sur le réseau de distribution, la tension entre une phase et le neutre vaut ……",
   "rep": "230 V",
   "verso": "<strong>230 V</strong> — La tension simple ; 400 V est la composée.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Les trois tensions simples sont décalées l'une de l'autre de ……",
   "rep": "120",
   "verso": "<strong>120</strong> — Un tiers de période.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La tension composée vaut ……",
   "rep": "V√3",
   "verso": "<strong>V√3</strong> — Construction de Fresnel : 2Vcos30°. La réponse a additionne des vecteurs qui ne sont pas alignés.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En couplage étoile, chaque élément du récepteur est soumis à ……",
   "rep": "la tension simple",
   "verso": "<strong>la tension simple</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "En couplage triangle, le courant de ligne vaut ……",
   "rep": "J√3",
   "verso": "<strong>J√3</strong> — Le courant de ligne se partage entre deux éléments.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un récepteur triphasé équilibré : le courant dans le neutre est ……",
   "rep": "nul",
   "verso": "<strong>nul</strong>",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un moteur « 230 V Δ / 400 V Y » se branche sur le réseau 230/400 V en ……",
   "rep": "étoile",
   "verso": "<strong>étoile</strong> — Un enroulement supporte 230 V, la tension simple du réseau.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Un moteur « 400 V Δ / 690 V Y » se branche sur le même réseau en ……",
   "rep": "triangle",
   "verso": "<strong>triangle</strong> — Un enroulement supporte 400 V, la composée.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "La puissance active d'un récepteur triphasé équilibré s'écrit ……",
   "rep": "√3 UIcosφ",
   "verso": "<strong>√3 UIcosφ</strong> — La réponse c est la puissance apparente.",
   "origine": "bilan"
  },
  {
   "type": "question",
   "recto": "Dans cette formule, φ est le déphasage entre ……",
   "rep": "la tension et le courant d'un même élément",
   "verso": "<strong>la tension et le courant d'un même élément</strong> — Le piège classique : ce n'est pas le déphasage entre U et I de ligne.",
   "origine": "bilan"
  }
 ],
 "cartes_figees": false
};
