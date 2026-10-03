/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · TP 2 — Dipôles passifs et actifs
   Le bilan vient de tp02_bilan.tex, les cartes des \trou{} de
   tp02_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "2",
 "cle": "tp02",
 "etiquette": "TP 2",
 "titre": "Dipôles passifs et actifs",
 "niveau": "BTS ET",
 "prerequis": [
  {
   "q": "Un générateur de 12 V alimente R₁ = 150 Ω et R₂ = 250 Ω en série. Le courant vaut :",
   "choix": [
    "30 mA",
    "80 mA",
    "48 mA",
    "3,0 mA"
   ],
   "bonne": 0,
   "expl": "En série les résistances s'ajoutent : 400 Ω, et I = 12/400 = 0,030 A = 30 mA."
  },
  {
   "q": "Dans ce même circuit, la tension aux bornes de R₂ vaut :",
   "choix": [
    "7,5 V",
    "4,5 V",
    "12 V",
    "6,0 V"
   ],
   "bonne": 0,
   "expl": "250 × 0,030 = 7,5 V. Et 7,5 + 4,5 = 12 V : la loi des mailles sert de vérification."
  },
  {
   "q": "La résistance équivalente de 120 Ω et 180 Ω en parallèle vaut :",
   "choix": [
    "72 Ω",
    "300 Ω",
    "150 Ω",
    "216 Ω"
   ],
   "bonne": 0,
   "expl": "(120 × 180)/(120 + 180) = 72 Ω. En parallèle, le résultat est toujours plus petit que la plus petite des deux : 150 Ω ou 300 Ω sont impossibles."
  },
  {
   "q": "Une résistance de 47 Ω est parcourue par 0,35 A. La puissance dissipée vaut :",
   "choix": [
    "5,76 W",
    "16,5 W",
    "4,79 W",
    "0,38 W"
   ],
   "bonne": 0,
   "expl": "P = R I² = 47 × 0,1225 = 5,76 W. C'est le carré de l'intensité ; 16,5 V est la tension, pas la puissance."
  },
  {
   "q": "Convertir 470 µF en farads :",
   "choix": [
    "4,70×10⁻⁴ F",
    "4,70×10⁻⁶ F",
    "4,70×10⁻³ F",
    "4,70×10² F"
   ],
   "bonne": 0,
   "expl": "micro vaut 10⁻⁶ : 470 × 10⁻⁶ = 4,70×10⁻⁴ F. Le 470 apporte deux rangs."
  },
  {
   "q": "Une droite passe par (0 ; 9) et (3 ; 0). Son équation est :",
   "choix": [
    "y = −3x + 9",
    "y = 3x + 9",
    "y = −x/3 + 9",
    "y = −3x − 9"
   ],
   "bonne": 0,
   "expl": "L'ordonnée à l'origine vaut 9, et la pente (0 − 9)/(3 − 0) = −3. C'est la caractéristique d'un générateur : une pente négative."
  }
 ],
 "bilan": [
  {
   "q": "Un dipôle dont la caractéristique passe par l'origine est :",
   "choix": [
    "actif",
    "forcément ohmique",
    "passif"
   ],
   "bonne": 2,
   "expl": "Passer par l'origine signifie qu'à tension nulle le courant est nul : sans générateur, il ne se passe rien. La réponse « forcément ohmique » est trop forte — une diode et une lampe passent par l'origine sans être ohmiques."
  },
  {
   "q": "Sur la caractéristique I(U) d'un conducteur ohmique, la pente vaut :",
   "choix": [
    "R",
    "1/R",
    "R²"
   ],
   "bonne": 1,
   "expl": "I = U/R : la pente de I(U) vaut 1/R. Une caractéristique raide correspond donc à une faible résistance. Attention à l'axe choisi : sur un tracé U(I), la pente vaut bien R."
  },
  {
   "q": "Une lampe à filament, quand le courant augmente :",
   "choix": [
    "voit sa résistance augmenter",
    "voit sa résistance diminuer",
    "garde une résistance constante"
   ],
   "bonne": 0,
   "expl": "Le courant échauffe le filament, et la résistivité d'un métal croît avec la température. C'est ce qui explique la pointe de courant à l'allumage, quand le filament est encore froid."
  },
  {
   "q": "La charge stockée par un condensateur de 100 µF sous 50 V vaut :",
   "choix": [
    "0,5 C",
    "2 µC",
    "5 mC"
   ],
   "bonne": 2,
   "expl": "q = C u = 100×10⁻⁶× 50 = 5×10⁻³ C."
  },
  {
   "q": "En régime continu établi, un condensateur se comporte comme :",
   "choix": [
    "un interrupteur ouvert",
    "un fil",
    "une résistance égale à 1/C"
   ],
   "bonne": 0,
   "expl": "En régime établi, plus rien ne varie : du/dt = 0, donc i = C du/dt = 0. Aucun courant ne passe : c'est un interrupteur ouvert."
  },
  {
   "q": "En régime continu établi, une bobine idéale se comporte comme :",
   "choix": [
    "un interrupteur ouvert",
    "un fil",
    "un générateur"
   ],
   "bonne": 1,
   "expl": "Symétriquement, di/dt = 0 donne u = 0 : la bobine idéale ne présente aucune tension, c'est un fil. Une bobine réelle conserve toutefois la résistance de son fil."
  },
  {
   "q": "L'énergie stockée dans une bobine de 0,20 H parcourue par 4,0 A vaut :",
   "choix": [
    "1,6 J",
    "0,80 J",
    "3,2 J"
   ],
   "bonne": 0,
   "expl": "W = 1/2L i² = 1/2×0,20× 16 = 1,6 J. La réponse « 0,80 J » oublie le facteur 1/2, la réponse « 3,2 J » oublie de mettre le courant au carré."
  },
  {
   "q": "Dans le modèle U = E - r I, la grandeur E correspond à :",
   "choix": [
    "la tension en charge",
    "la tension de court-circuit",
    "la tension à vide"
   ],
   "bonne": 2,
   "expl": "E est la tension obtenue pour I = 0, donc à vide. C'est l'ordonnée à l'origine de la caractéristique."
  },
  {
   "q": "Une source de E = 24 V et r = 0,5 Ω débite 8 A. La tension à ses bornes vaut :",
   "choix": [
    "28 V",
    "20 V",
    "24 V"
   ],
   "bonne": 1,
   "expl": "U = 24 - 0,5× 8 = 20 V. La réponse « 28 V » se trompe de signe : une source réelle délivre moins que sa f.é.m. dès qu'elle débite."
  },
  {
   "q": "Le point de fonctionnement d'un circuit générateur-récepteur est :",
   "choix": [
    "le maximum de la caractéristique du générateur",
    "le point où la puissance est nulle",
    "l'intersection des deux caractéristiques"
   ],
   "bonne": 2,
   "expl": "Les deux dipôles sont branchés l'un sur l'autre : ils ont nécessairement la même tension et le même courant. Le seul couple qui satisfasse les deux caractéristiques est leur intersection."
  },
  {
   "q": "Le rendement d'une source réelle vaut :",
   "choix": [
    "E/U",
    "U/E",
    "r/R"
   ],
   "bonne": 1,
   "expl": "η= (U I)/(E I) = U/E, toujours inférieur à 1 puisque U < E dès qu'un courant circule. Le rendement se lit donc sur deux tensions, sans mesurer le courant."
  },
  {
   "q": "Deux batteries de 12 V affichent la même tension à vide, mais l'une a une résistance interne trois fois plus grande. Un contrôle au voltmètre, batteries déconnectées :",
   "choix": [
    "ne distingue pas les deux",
    "distingue les deux",
    "affiche une tension plus basse pour la mauvaise"
   ],
   "bonne": 0,
   "expl": "Un contrôle à vide ne mesure que E, identique dans les deux cas. Il ne dit rien de r, qui est pourtant ce qui distingue une batterie saine d'une batterie fatiguée. Seule la mesure en charge révèle l'état réel — c'est tout l'objet de la situation d'évaluation de ce chapitre."
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que la caractéristique d'un dipôle ? De quoi dépend-elle ?",
   "verso": "La courbe du <b>courant en fonction de la tension</b> (ou l'inverse). Elle ne dépend <b>que du dipôle</b>, jamais du circuit.",
   "origine": "Cours §1 La caractéristique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment reconnaître sur sa caractéristique un dipôle passif ? actif ?",
   "verso": "<b>Passif</b> : la caractéristique <b>passe par l'origine</b>.<br><b>Actif</b> : elle <b>ne passe pas par l'origine</b> (tension imposée à courant nul).",
   "origine": "Cours §1 Passif ou actif"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Un dipôle actif fournit-il toujours de la puissance ?",
   "verso": "Non : une batterie en charge est active mais <b>reçoit</b>. C'est le <b>signe de U I</b> dans la convention choisie qui dit le sens du transfert.",
   "origine": "Cours §1 Actif ne veut pas dire générateur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quand un dipôle est-il ohmique ? Relations utiles ?",
   "verso": "Caractéristique = <b>droite passant par l'origine</b>.<br><b>U = R I</b> ; <b>P = U I = R I² = U² / R</b>",
   "origine": "Cours §2 Dipôle ohmique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Comment déterminer R à partir d'une caractéristique I(U) relevée ?",
   "verso": "Par la <b>pente</b> (elle vaut <b>1/R</b>), et non par un seul point : cela moyenne les erreurs de mesure.",
   "origine": "Cours §2 Dipôle ohmique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelles sont les deux valeurs qui caractérisent une résistance ?",
   "verso": "Sa <b>valeur ohmique</b> et sa <b>puissance admissible</b>. Ex. : 47 Ω sous 12 V dissipe 3,1 W, trop pour une 0,25 W ou 2 W.",
   "origine": "Cours §2 Une résistance porte deux valeurs"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Diode, lampe à filament, varistance : comportement de chacune ?",
   "verso": "<b>Diode</b> : conduit dans <b>un seul sens</b>, au-delà de ~0,6 V (silicium).<br><b>Lampe</b> : R <b>augmente avec la température</b>.<br><b>Varistance</b> : isolante puis brutalement conductrice — <b>limiteur de surtension</b>.",
   "origine": "Cours §3 Les dipôles non linéaires"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi « la résistance d'une lampe » n'a-t-il pas de sens sans précision ?",
   "verso": "R = U/I <b>change d'un point à l'autre</b> : à froid, une lampe a environ <b>1/10</b> de sa résistance à chaud — d'où la pointe de courant à l'allumage.",
   "origine": "Cours §3 U/I n'a plus de sens global"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relations du condensateur (convention récepteur) ?",
   "verso": "<b>q = C u</b> ; <b>i = C du/dt</b> ; énergie <b>W = ½ C u²</b><br>C en farads (F).",
   "origine": "Cours §4 Le condensateur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelle grandeur ne peut pas varier brutalement aux bornes d'un condensateur ? Pourquoi ?",
   "verso": "La <b>tension</b> : une variation brutale demanderait un courant infini (i = C du/dt).",
   "origine": "Cours §4 Le condensateur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi attendre avant d'intervenir sur un variateur coupé ?",
   "verso": "Les condensateurs du bus continu gardent <b>½ C u²</b> et plusieurs centaines de volts pendant des minutes. On attend le temps de décharge, puis on <b>vérifie l'absence de tension</b>.",
   "origine": "Cours §4 Un condensateur chargé reste dangereux"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Relations de la bobine (convention récepteur) ? Quelle grandeur ne peut pas varier brutalement ?",
   "verso": "<b>u = L di/dt</b> ; énergie <b>W = ½ L i²</b> (L en henrys).<br>C'est le <b>courant</b> qui ne peut pas varier brutalement.",
   "origine": "Cours §5 La bobine"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi place-t-on une diode de roue libre aux bornes d'une bobine commandée en continu ?",
   "verso": "Couper brutalement le courant crée une <b>très forte tension</b> (u = L di/dt) : l'arc du contacteur. La diode de roue libre l'évite.",
   "origine": "Cours §5 La surtension d'ouverture"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>En régime continu établi, comment se comportent un condensateur et une bobine ?",
   "verso": "Condensateur : <b>interrupteur ouvert</b> (i = 0).<br>Bobine : <b>fil</b> (u = 0).",
   "origine": "Cours §5 Régime continu établi"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Modèle d'une source réelle ? Équation de sa caractéristique ?",
   "verso": "Une f.é.m. <b>E</b> en série avec une résistance interne <b>r</b> :<br><b>U = E − r I</b>",
   "origine": "Cours §6 Modèle de Thévenin"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Sur la caractéristique U(I) d'une source, où lit-on E et r ?",
   "verso": "<b>E</b> : la tension <b>à vide</b> (I = 0), ordonnée à l'origine.<br><b>r</b> : la <b>pente</b> de la droite, au signe près.",
   "origine": "Cours §6 Modèle de Thévenin"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que le point de fonctionnement d'un circuit source + récepteur ?",
   "verso": "Les deux dipôles ont <b>la même tension et le même courant</b> : c'est l'<b>intersection de leurs deux caractéristiques</b>.",
   "origine": "Cours §7 Point de fonctionnement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi le point de fonctionnement d'un module photovoltaïque ne se trouve-t-il que graphiquement ?",
   "verso": "Sa caractéristique <b>n'est pas une droite</b> : courant presque constant (≈ I<sub>cc</sub>) puis effondrement près de la tension à vide. Le court-circuit y est sans danger.",
   "origine": "Cours §7 Le module photovoltaïque"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Rendement d'une source de Thévenin ? Où passent les pertes ?",
   "verso": "<b>η = U / E</b>. Elle génère E I, fournit U I et dissipe <b>r I²</b> en interne. Le rendement <b>baisse</b> quand le courant augmente.",
   "origine": "Cours §7 Rendement d'une source"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment déterminer R d'un dipôle à partir d'un relevé de caractéristique ?",
   "verso": "1. Relever plusieurs couples (U ; I).<br>2. Tracer <b>I en fonction de U</b>.<br>3. Vérifier : droite <b>passant par l'origine</b> → ohmique.<br>4. Pente sur deux points éloignés = <b>1/R</b>, d'où R.",
   "origine": "Cours §2 Partie A du TP"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Batterie : 12,6 V à vide, 11,4 V sous 30 A. Comment trouver E et r ?",
   "verso": "1. <b>E = 12,6 V</b> (mesure à courant nul).<br>2. Chute : E − U = 1,2 V.<br>3. <b>r = 1,2 / 30 = 40 mΩ</b>.<br>4. Interpréter : 5 à 10 mΩ pour une batterie neuve → vieillissement.",
   "origine": "Cours §6 Méthode — Déterminer E et r"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>E = 24 V, r = 0,8 Ω alimente R = 5,2 Ω. Comment trouver le point de fonctionnement ?",
   "verso": "<b>Algébrique</b> : maille E = r I + R I → I = 24 / 6,0 = <b>4,0 A</b> ; U = 5,2 × 4,0 = <b>20,8 V</b>.<br><b>Graphique</b> : intersection de U = 24 − 0,8 I et U = 5,2 I (seule voie si le récepteur n'est pas linéaire).",
   "origine": "Cours §7 Méthode — Deux voies vers le même point"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Comment calculer le rendement d'une source et ses pertes internes ?",
   "verso": "1. Mesurer E (à vide) et U (en charge).<br>2. <b>η = U / E</b>.<br>3. Pertes internes : <b>r I²</b> (ou (E − U) × I).",
   "origine": "Cours §7 Rendement d'une source"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
