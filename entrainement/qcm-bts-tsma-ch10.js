/* Engendré par outils/construire_tsma.py — ne pas éditer à la main.
   BTS TSMA · chapitre 10 · Machines thermiques
   Le bilan vient de ch10_bilan.tex, les cartes des \trou{} de
   ch10_cours.tex, les prérequis de outils/prerequis_tsma.py. */
window.CHAPITRE = {
 "filiere": "bts-tsma",
 "num": "10",
 "titre": "Machines thermiques",
 "niveau": "BTS TSMA",
 "prerequis": [
  {
   "q": "Convertir 527 °C en kelvins :",
   "choix": [
    "254 K",
    "800 K",
    "527 K",
    "827 K"
   ],
   "bonne": 1,
   "expl": "527 + 273 = 800 K. Tout ce chapitre repose sur des températures absolues."
  },
  {
   "q": "Combien vaut 1 − 320/800, en pourcentage ?",
   "choix": [
    "40,0 %",
    "60,0 %",
    "62,5 %",
    "2,5 %"
   ],
   "bonne": 1,
   "expl": "1 − 0,400 = 0,600. C'est la forme du rendement de Carnot."
  },
  {
   "q": "Un système reçoit 800 J et cède 520 J. Le bilan algébrique vaut :",
   "choix": [
    "+1320 J",
    "+280 J",
    "−280 J",
    "+800 J"
   ],
   "bonne": 1,
   "expl": "Reçu +800, cédé −520 : la convention du banquier, ce que le système reçoit est positif."
  },
  {
   "q": "Une puissance de 620 W fonctionne 15,0 min. L'énergie vaut :",
   "choix": [
    "9,30×10³ J",
    "5,58×10⁵ J",
    "5,58×10⁴ J",
    "0,155 J"
   ],
   "bonne": 1,
   "expl": "Δt = 900 s, donc W = 5,58×10⁵ J, soit 0,155 kW·h."
  },
  {
   "q": "2,00 kg d'eau passent de 20,0 °C à 8,0 °C (c = 4185 J/kg/K). L'énergie cédée vaut :",
   "choix": [
    "1,00×10⁵ J",
    "1,67×10⁵ J",
    "8,37×10³ J",
    "2,34×10⁵ J"
   ],
   "bonne": 0,
   "expl": "Q = mcΔθ = 2,00 × 4185 × 12,0 = 1,00×10⁵ J."
  },
  {
   "q": "Deux incertitudes relatives de 2,0 % et 3,6 % se composent en :",
   "choix": [
    "5,6 %",
    "4,1 %",
    "2,8 %",
    "1,6 %"
   ],
   "bonne": 1,
   "expl": "√(2,0² + 3,6²) = 4,1 %. Le terme le plus grand domine."
  }
 ],
 "bilan": [
  {
   "q": "Le second principe de la thermodynamique :",
   "choix": [
    "interdit de créer de l'énergie",
    "remplace le premier principe",
    "indique dans quel sens les transformations se produisent"
   ],
   "bonne": 2,
   "expl": "c'est le premier principe qui interdit de créer de l'énergie ; le second dit dans quel sens les choses se produisent. Les deux coexistent, aucun ne remplace l'autre : devant une machine impossible, il faut savoir dire lequel des deux est violé. 3pt"
  },
  {
   "q": "Parmi ces phénomènes, lequel n'est pas une cause d'irréversibilité ?",
   "choix": [
    "une compression infiniment lente dans un cylindre à température constante",
    "un transfert thermique sous un écart de 200 K",
    "les frottements"
   ],
   "bonne": 0,
   "expl": "les trois causes d'irréversibilité sont les frottements, les transferts sous écart fini, les détentes brusques. Une compression infiniment lente à température constante est au contraire le seul cas réversible — et c'est précisément ce que fait le cycle de Carnot. 3pt"
  },
  {
   "q": "Un système reçoit 600 J d'un thermostat à 300 K. Sa variation d'entropie vaut :",
   "choix": [
    "-2,00 J/K",
    "+2,00 J/K",
    "+180000 J/K"
   ],
   "bonne": 1,
   "expl": "ΔS = Q/T = 600/300 = +2,00 J/K, le signe étant celui de Q. La réponse « +2,00 J/K » vient d'une multiplication au lieu d'une division. Et pour l'ensemble système + entourage, ΔS_total ≥ 0 toujours : aucune conception, aussi soignée soit-elle, ne fait diminuer l'entropie totale. 3pt"
  },
  {
   "q": "Pour un système et tout ce qui l'entoure, la variation d'entropie totale :",
   "choix": [
    "est toujours nulle",
    "peut être négative si la machine est bien conçue",
    "ne peut jamais être négative"
   ],
   "bonne": 2,
   "expl": "ΔS = Q/T = 600/300 = +2,00 J/K, le signe étant celui de Q. La réponse « peut être négative si la machine est bien conçue » vient d'une multiplication au lieu d'une division. Et pour l'ensemble système + entourage, ΔS_total ≥ 0 toujours : aucune conception, aussi soignée soit-elle, ne fait diminuer l'entropie totale. 3pt"
  },
  {
   "q": "Sur un cycle complet d'une machine ditherme :",
   "choix": [
    "W + Q_c + Q_f = 0",
    "ΔU = W + Q_c + Q_f",
    "W = Q_c + Q_f"
   ],
   "bonne": 0,
   "expl": "sur un cycle, le fluide revient à son état de départ donc ΔU = 0, ce qui donne W + Q_c + Q_f = 0. La réponse « ΔU = W + Q_c + Q_f » est le premier principe hors cycle ; la réponse « W = Q_c + Q_f » oublie un signe. 3pt"
  },
  {
   "q": "Dans un moteur, la chaleur cédée à la source froide :",
   "choix": [
    "pourrait être annulée avec de meilleurs réglages",
    "est imposée par le second principe",
    "est nulle si le moteur est adiabatique"
   ],
   "bonne": 1,
   "expl": "c'est le point le plus important du chapitre. Q_f n'est pas une perte accidentelle : un moteur qui ne céderait rien à la source froide aurait un rendement de 100 %, ce que le second principe interdit. Aucun réglage ne supprimera jamais le radiateur d'un moteur. 3pt"
  },
  {
   "q": "Un climatiseur d'efficacité 2,6 :",
   "choix": [
    "ne viole rien du tout",
    "viole le second principe",
    "viole le premier principe"
   ],
   "bonne": 0,
   "expl": "une efficacité supérieure à 1 ne crée aucune énergie : la machine en déplace. Les joules retirés de la cabine existaient déjà. Et comme le condenseur rejette à la fois ce qui a été pris et le travail payé, Q_c = Q_f + |W|, d'où e_c = e_f + 1 — une pompe à chaleur « livre » toujours une unité de plus qu'un climatiseur ne « prend ». 3pt"
  },
  {
   "q": "Entre une pompe à chaleur et un climatiseur, la relation entre les performances est :",
   "choix": [
    "e_c = e_f",
    "e_c = e_f + 1",
    "e_c = 1 - e_f"
   ],
   "bonne": 1,
   "expl": "une efficacité supérieure à 1 ne crée aucune énergie : la machine en déplace. Les joules retirés de la cabine existaient déjà. Et comme le condenseur rejette à la fois ce qui a été pris et le travail payé, Q_c = Q_f + |W|, d'où e_c = e_f + 1 — une pompe à chaleur « livre » toujours une unité de plus qu'un climatiseur ne « prend ». 3pt"
  },
  {
   "q": "Un moteur fonctionne entre 800 K et 320 K. Son rendement de Carnot vaut :",
   "choix": [
    "40 %",
    "250 %",
    "60 %"
   ],
   "bonne": 2,
   "expl": "η_C = 1 - 320/800 = 0,60. La réponse « 250 % » correspond à l'oubli du « 1 moins », la réponse « 60 % » à un rapport inversé. Et ce nombre est un plafond : il dit ce qu'aucune machine ne dépassera entre ces températures, jamais ce qu'une machine donnée fera. Le moteur Stirling du TP en atteint 2 %, un bon diesel plus de la moitié. 3pt"
  },
  {
   "q": "Le rendement de Carnot est :",
   "choix": [
    "une limite que la machine ne peut pas dépasser",
    "le rendement que la machine atteindra",
    "une valeur moyenne des machines du commerce"
   ],
   "bonne": 0,
   "expl": "η_C = 1 - 320/800 = 0,60. La réponse « le rendement que la machine atteindra » correspond à l'oubli du « 1 moins », la réponse « une valeur moyenne des machines du commerce » à un rapport inversé. Et ce nombre est un plafond : il dit ce qu'aucune machine ne dépassera entre ces températures, jamais ce qu'une machine donnée fera. Le moteur Stirling du TP en atteint 2 %, un bon diesel plus de la moitié. 3pt"
  },
  {
   "q": "Dans un diagramme entropique (T,S), l'aire enfermée par un cycle représente :",
   "choix": [
    "la chaleur reçue de la source chaude",
    "le travail utile",
    "la variation d'énergie interne"
   ],
   "bonne": 1,
   "expl": "dans le plan (T,S), une chaleur échangée à température constante vaut T ΔS, soit l'aire d'un rectangle. La chaleur reçue est l'aire sous l'isotherme chaude ; le travail utile est l'aire enfermée par le cycle. Quant à ΔU, elle est nulle sur un cycle. 3pt"
  },
  {
   "q": "Un binôme mesure une efficacité de 12 sur une machine dont l'efficacité de Carnot vaut 10. On peut affirmer :",
   "choix": [
    "que la machine est excellente",
    "qu'il faut refaire la mesure avant de se prononcer",
    "qu'il y a une erreur, sans refaire le calcul"
   ],
   "bonne": 2,
   "expl": "et c'est la question la plus utile de la feuille. Une performance mesurée supérieure à celle de Carnot est impossible : le second principe permet d'invalider le résultat sans rien recalculer. C'est le seul endroit de l'année où un principe physique sert directement d'outil de contrôle. tcolorbox"
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer le second principe (forme évolution). Différence avec le premier principe ?",
   "verso": "Un transfert thermique ne se fait <b>jamais spontanément du froid vers le chaud</b>.<br>Le premier <b>compte</b> l'énergie ; le second dit <b>dans quel sens</b> les choses se produisent.",
   "origine": "Cours §1.1 Le second principe"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'une transformation réversible ? Les trois causes d'irréversibilité ?",
   "verso": "Parcourable en sens inverse par les mêmes états, <b>sans trace</b> dans l'extérieur (idéal).<br>Causes : <b>frottements</b>, transferts sous <b>écart fini de température</b>, <b>détentes brusques</b>.",
   "origine": "Cours §1.2 Réversible, irréversible"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Variation d'entropie lors d'un échange Q avec un thermostat à T ? Unité ? Signe ?",
   "verso": "<b>ΔS = Q / T</b> (T en K), en <b>J/K</b>, du <b>signe de Q</b>.",
   "origine": "Cours §2.1 Entropie échangée"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Second principe écrit avec l'entropie ?",
   "verso": "<b>ΔS<sub>total</sub> ≥ 0</b> ; égalité seulement si tout est réversible, <b>&gt; 0</b> pour toute transformation réelle.",
   "origine": "Cours §2.1 Second principe et entropie"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'une machine ditherme ? Premier principe sur un cycle ?",
   "verso": "Une machine qui, par <b>cycles</b>, échange de la chaleur avec <b>deux sources</b> et du travail avec l'extérieur.<br><b>W + Q<sub>c</sub> + Q<sub>f</sub> = 0</b> (ΔU = 0 sur un cycle).",
   "origine": "Cours §3.1 Machine ditherme"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rendement d'un moteur ? Efficacités d'une machine frigorifique et d'une PAC ?",
   "verso": "Moteur : <b>η = |W| / Q<sub>c</sub> &lt; 1</b>.<br>Frigo : <b>e<sub>f</sub> = Q<sub>f</sub> / |W|</b>.<br>PAC : <b>e<sub>c</sub> = Q<sub>c</sub> / |W|</b> ; <b>e<sub>c</sub> = e<sub>f</sub> + 1</b>.",
   "origine": "Cours §3.2 Rendement et efficacités"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Un climatiseur d'efficacité 2,6 viole-t-il la conservation de l'énergie ?",
   "verso": "<b>Non</b> : il <b>déplace</b> de la chaleur du froid vers le chaud, il n'en crée pas. Le froid ne se fabrique pas, il se déplace.",
   "origine": "Cours §3.2 Une efficacité &gt; 1"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rendement de Carnot d'un moteur ? Efficacités de Carnot (frigo, PAC) ?",
   "verso": "<b>η<sub>C</sub> = 1 − T<sub>f</sub>/T<sub>c</sub></b> ; <b>e<sub>f,C</sub> = T<sub>f</sub>/(T<sub>c</sub> − T<sub>f</sub>)</b> ; <b>e<sub>c,C</sub> = T<sub>c</sub>/(T<sub>c</sub> − T<sub>f</sub>)</b>.<br>T en <b>kelvins</b> ; ce sont des <b>plafonds</b>.",
   "origine": "Cours §4.1 Limite de Carnot"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Dans un diagramme (T, S), comment lit-on la chaleur échangée et le travail d'un cycle ?",
   "verso": "<b>Q = T ΔS</b> : aire du rectangle. Le <b>travail</b> du cycle : <b>aire enfermée</b>.",
   "origine": "Cours §4.2 Diagramme entropique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer l'inégalité de Clausius-Carnot.",
   "verso": "<b>Q<sub>c</sub>/T<sub>c</sub> + Q<sub>f</sub>/T<sub>f</sub> ≤ 0</b> ; égalité dans le cas réversible (le plus performant).",
   "origine": "Cours §4.3 Inégalité de Clausius-Carnot"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi une climatisation consomme-t-elle plus quand il fait très chaud dehors ?",
   "verso": "e<sub>f,C</sub> = T<sub>f</sub>/(T<sub>c</sub> − T<sub>f</sub>) <b>diminue</b> quand l'écart de température augmente : c'est le second principe.",
   "origine": "Cours §5.2 Climatisation d'une cabine"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer une variation d'entropie et faire un bilan ?",
   "verso": "1. Thermostat : <b>ΔS = Q/T</b> (T en K, Q signé).<br>2. Changement d'état : <b>ΔS = m L / T</b>.<br>3. <b>Additionner</b> pour tous les corps.<br>4. Le total doit être <b>≥ 0</b> (sinon erreur de signe).",
   "origine": "Cours §2.2 Méthode — Variation d'entropie"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment reconnaître le type d'une machine thermique ?",
   "verso": "1. Elle <b>fournit</b> du travail → <b>moteur</b> ; elle en <b>consomme</b> → récepteur.<br>2. Récepteur : on veut le <b>froid</b> (frigo) ou la <b>chaleur</b> (PAC).<br>3. Flèches signées (reçu = +).<br>4. Vérifier W + Q<sub>c</sub> + Q<sub>f</sub> = 0.",
   "origine": "Cours §3.1 Méthode — Reconnaître une machine"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment situer une machine réelle par rapport à la limite de Carnot ?",
   "verso": "1. Températures des sources en <b>K</b>.<br>2. Performance de <b>Carnot</b> du bon type.<br>3. Performance <b>réelle</b> mesurée.<br>4. <b>Rapport réel/Carnot &lt; 1</b> (sinon erreur).",
   "origine": "Cours §4.1 Méthode — Situer une machine réelle"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
