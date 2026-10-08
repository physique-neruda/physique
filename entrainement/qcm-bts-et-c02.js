/* Engendré par outils/construire.py — ne pas éditer à la main.
   BTS ET · Cours 2 — Électromagnétisme
   Le bilan vient de c02_bilan.tex, les cartes des \trou{} de
   c02_cours.tex. */
window.CHAPITRE = {
 "filiere": "bts-et",
 "num": "2",
 "cle": "c02",
 "etiquette": "Cours 2",
 "titre": "Électromagnétisme",
 "niveau": "BTS ET",
 "prerequis": [
  {
   "q": "Combien vaut cos 60° ?",
   "choix": [
    "0,500",
    "0,866",
    "0,577",
    "0,600"
   ],
   "bonne": 0,
   "expl": "0,500 exactement, en mode DEGRÉ. 0,866 est le cosinus de 30°, et le sinus de 60°."
  },
  {
   "q": "Surface d'un disque de diamètre 8 cm, en m² :",
   "choix": [
    "5,03×10⁻³ m²",
    "5,03×10⁻² m²",
    "2,01×10⁻² m²",
    "5,03×10¹ m²"
   ],
   "bonne": 0,
   "expl": "S = πD²/4 avec D = 0,080 m : π × 0,0064/4 = 5,03×10⁻³ m². Convertir avant d'élever au carré."
  },
  {
   "q": "Convertir 450 mT en teslas :",
   "choix": [
    "4,50×10⁻¹ T",
    "4,50×10⁻³ T",
    "4,50×10² T",
    "4,50×10⁻⁶ T"
   ],
   "bonne": 0,
   "expl": "milli vaut 10⁻³ : 450 × 10⁻³ = 0,450 T. Le 450 apporte deux rangs."
  },
  {
   "q": "Une grandeur passe de 0,40 à 0,65 en 20 ms. Son taux de variation vaut :",
   "choix": [
    "12,5 par seconde",
    "0,0125 par seconde",
    "1,25 par seconde",
    "32,5 par seconde"
   ],
   "bonne": 0,
   "expl": "0,25/0,020 = 12,5 par seconde. C'est ce quotient-là, dΦ/dt, qui fabrique la tension induite."
  },
  {
   "q": "Calculer 4π×10⁻⁷ × 500 × 2,5 :",
   "choix": [
    "1,57×10⁻³",
    "1,57×10⁻⁴",
    "3,93×10⁻⁴",
    "1,25×10⁻³"
   ],
   "bonne": 0,
   "expl": "4π×10⁻⁷ = 1,257×10⁻⁶ ; × 500 = 6,28×10⁻⁴ ; × 2,5 = 1,57×10⁻³. Le 4π fait partie du nombre, il ne s'oublie pas."
  },
  {
   "q": "Une bobine comporte 800 spires réparties sur 25 cm. Le nombre de spires par mètre vaut :",
   "choix": [
    "3200",
    "32",
    "20 000",
    "320"
   ],
   "bonne": 0,
   "expl": "800/0,25 = 3200 spires par mètre. Le dénominateur doit être en mètres : diviser par 25 donnerait des spires par centimètre."
  }
 ],
 "bilan": [
  {
   "q": "Le champ magnétique s'exprime en :",
   "choix": [
    "webers",
    "teslas",
    "henrys"
   ],
   "bonne": 1,
   "expl": "Le tesla (T) est l'unité du champ magnétique. Le weber et le henry sont les unités d'autres grandeurs, liées mais distinctes."
  },
  {
   "q": "Dans la relation B = µ₀ n I, la grandeur n désigne :",
   "choix": [
    "le nombre de spires par mètre",
    "le nombre total de spires",
    "la longueur du solénoïde"
   ],
   "bonne": 0,
   "expl": "n = N/ est une densité de spires, en spires par mètre. C'est la distinction la plus souvent manquée du chapitre."
  },
  {
   "q": "Une bobine de 600 spires mesure 20 cmeter. Le nombre de spires par mètre vaut :",
   "choix": [
    "30",
    "120",
    "3000"
   ],
   "bonne": 2,
   "expl": "n = 600/0,20 = 3000 spires par mètre. La réponse « 30 » oublie de convertir les centimètres en mètres, ce qui fausse le champ d'un facteur cent."
  },
  {
   "q": "Pour le circuit magnétique d'un transformateur, on choisit un matériau ferromagnétique :",
   "choix": [
    "dur, pour qu'il garde son aimantation",
    "doux, pour que son cycle soit étroit",
    "non magnétique, pour éviter les pertes"
   ],
   "bonne": 1,
   "expl": "Un matériau doux a un cycle étroit : il s'aimante et se désaimante facilement, et perd peu d'énergie à chaque période. Un matériau dur, au cycle large, garde son aimantation : c'est celui des aimants permanents."
  },
  {
   "q": "On rapproche un aimant d'une bobine deux fois plus vite. La f.é.m. induite :",
   "choix": [
    "ne change pas",
    "est divisée par deux",
    "est multipliée par deux"
   ],
   "bonne": 2,
   "expl": "La f.é.m. dépend de la vitesse de la variation : deux fois plus vite, deux fois plus de tension. C'est pour cela qu'un alternateur donne plus de tension quand il tourne plus vite."
  },
  {
   "q": "Un aimant est immobile à l'intérieur d'une bobine reliée à un galvanomètre. Celui-ci indique :",
   "choix": [
    "un courant nul",
    "un courant constant",
    "un courant alternatif"
   ],
   "bonne": 0,
   "expl": "Rien ne varie, donc il n'y a pas de f.é.m., même si l'aimant est puissant. Ce qui compte, c'est la variation — jamais la valeur."
  },
  {
   "q": "La loi de Lenz énonce que le courant induit :",
   "choix": [
    "renforce la variation qui lui donne naissance",
    "est toujours nul dans un circuit fermé",
    "s'oppose à la variation qui lui donne naissance"
   ],
   "bonne": 2,
   "expl": "L'opposition est une conséquence de la conservation de l'énergie : si le courant induit renforçait la cause, le système s'emballerait et produirait de l'énergie à partir de rien."
  },
  {
   "q": "Ce qui produit une f.é.m. dans une bobine, c'est :",
   "choix": [
    "la présence d'un champ magnétique",
    "la variation du champ qui la traverse",
    "le nombre de spires, à lui seul"
   ],
   "bonne": 1,
   "expl": "Sans variation, rien n'est induit. Le nombre de spires multiplie l'effet, mais ne le crée pas."
  },
  {
   "q": "La force de Laplace sur un conducteur parallèle au champ vaut :",
   "choix": [
    "B I",
    "B I /2",
    "zéro"
   ],
   "bonne": 2,
   "expl": "F = B I α avec α= 0 donne F = 0 : un conducteur couché le long des lignes de champ ne subit aucune force."
  },
  {
   "q": "Le champ magnétique rémanent d'un matériau ferromagnétique, c'est :",
   "choix": [
    "le champ qui subsiste quand on annule le courant",
    "le champ maximal, atteint à saturation",
    "le champ créé par la bobine seule, sans le fer"
   ],
   "bonne": 0,
   "expl": "Le champ rémanent est ce que le fer garde quand le courant est revenu à zéro. Pour l'effacer, il faut un courant de sens inverse : l'intensité de démagnétisation."
  },
  {
   "q": "L'air sec devient conducteur vers 3 kV/mmeter. Entre deux pièces portées à 6 kV l'une de l'autre, l'air claque si la distance est inférieure à :",
   "choix": [
    "0,5 mmeter",
    "2 mmeter",
    "18 mmeter"
   ],
   "bonne": 1,
   "expl": "d = U/E = 6 kV/(3 kV/mmeter) = 2 mmeter. En dessous, l'air claque. Les distances d'isolement réelles prennent une large marge au-dessus de cette limite."
  },
  {
   "q": "On feuillette un circuit magnétique en tôles isolées afin de réduire :",
   "choix": [
    "les pertes par hystérésis",
    "les pertes par courants de Foucault",
    "le champ rémanent"
   ],
   "bonne": 1,
   "expl": "Le feuilletage réduit la section des boucles de courant induites dans la masse du métal, donc les courants de Foucault. L'hystérésis est une propriété du matériau lui-même, que la géométrie ne modifie pas."
  },
  {
   "q": "Au moment où un contacteur s'ouvre en charge, un arc apparaît entre ses contacts parce que :",
   "choix": [
    "les contacts, encore très proches, subissent un champ électrique qui dépasse la rigidité de l'air",
    "la bobine du contacteur produit une étincelle",
    "le courant devient plus fort à l'ouverture"
   ],
   "bonne": 0,
   "expl": "Au tout début de l'ouverture, les contacts ne sont qu'à quelques centièmes de millimètre : même sous 400 V, le champ dépasse la rigidité de l'air, qui devient conducteur. D'où les chambres de coupure, qui allongent et refroidissent l'arc pour l'éteindre."
  },
  {
   "q": "On augmente le courant dans une bobine à noyau de fer. Au-delà d'une certaine valeur, le champ n'augmente presque plus : c'est :",
   "choix": [
    "l'hystérésis",
    "la rémanence",
    "la saturation"
   ],
   "bonne": 2,
   "expl": "C'est la saturation : le fer ne peut plus s'aimanter davantage. Au-delà, augmenter le courant chauffe la bobine sans renforcer le champ."
  }
 ],
 "cartes": [
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que le champ magnétique B ? Unité ?",
   "verso": "Une grandeur <b>vectorielle</b> définie en chaque point : direction, sens, valeur. En <b>teslas (T)</b>.",
   "origine": "Cours §1 Le champ magnétique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'une ligne de champ ? Par où sort-elle d'un aimant ? Peut-elle en croiser une autre ?",
   "verso": "Une courbe <b>tangente en tout point à B</b>. Elle sort par le pôle <b>nord</b> et rentre par le pôle <b>sud</b>.<br>Deux lignes <b>ne se croisent jamais</b> : en un point, le champ n'a qu'une direction.",
   "origine": "Cours §1 Les lignes de champ"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Ordres de grandeur du champ : Terre, haut-parleur, entrefer de machine, IRM ?",
   "verso": "Terre <b>50 µT</b> ; haut-parleur <b>0,1 T</b> ; entrefer de machine <b>0,8 à 1 T</b> ; IRM <b>3 T</b>.",
   "origine": "Cours §1 Ordres de grandeur"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Champ à l'intérieur d'un solénoïde long ? De quoi dépend-il ?",
   "verso": "<b>B = µ<sub>0</sub> n I = µ<sub>0</sub> (N/ℓ) I</b>, uniforme et selon l'axe.<br>µ<sub>0</sub> = 4π×10<sup>−7</sup> H/m ; n en spires <b>par mètre</b>.<br>Dépend seulement de la densité de spires et du courant (ni du diamètre, ni de la section du fil).",
   "origine": "Cours §2 Champ d'un solénoïde"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Calculer B pour 1200 spires sur 30 cm, I = 4,0 A. Le piège ?",
   "verso": "1. <b>n = N/ℓ</b> avec ℓ en m : n = 1200 / 0,30 = 4000 spires/m.<br>2. B = 1,257×10<sup>−6</sup> × 4000 × 4,0 = <b>20 mT</b>.<br>Piège : diviser par 30 au lieu de 0,30 → erreur d'un facteur 100.<br>(20 mT c'est peu : il faudra un noyau de fer.)",
   "origine": "Cours §2 N n'est pas n"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Le flux magnétique est-il exigible au BTS ET ? Que faut-il en retenir ?",
   "verso": "<b>Non</b>, hors programme. À retenir : plus le champ est fort, la surface grande et bien face au champ, plus il y a de lignes qui la traversent — et c'est la <b>variation</b> de ce nombre de lignes qui produit une tension.",
   "origine": "Cours §3 Le flux (hors programme)"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Énoncer la loi de Lenz.",
   "verso": "Le courant induit a des effets qui <b>s'opposent à la cause qui lui a donné naissance</b>.<br>Approcher un aimant : le courant induit crée un champ qui s'oppose à l'augmentation ; l'éloigner : il s'inverse.",
   "origine": "Cours §4 Loi de Lenz"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi la loi de Lenz n'est-elle pas une simple convention ?",
   "verso": "Si le courant induit renforçait la cause, le moindre mouvement s'amplifierait et fournirait de l'énergie indéfiniment : c'est une conséquence de la <b>conservation de l'énergie</b>.",
   "origine": "Cours §4 Pourquoi la loi de Lenz"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Principe du ralentisseur électromagnétique des poids lourds ?",
   "verso": "Un disque métallique tourne devant un aimant : des <b>courants induits</b> apparaissent dans sa masse et, par Lenz, s'opposent au mouvement. Freinage <b>sans contact ni usure</b>, uniquement en mouvement.",
   "origine": "Cours §4 Freinage par courants de Foucault"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>De quoi dépend la f.é.m. induite dans une bobine ?",
   "verso": "Il faut que le champ <b>varie</b>. Elle est d'autant plus grande que :<br>• la variation est <b>rapide</b> ;<br>• les spires sont <b>nombreuses</b> ;<br>• le champ est <b>fort</b> ;<br>• la <b>surface</b> des spires est grande ;<br>• un <b>noyau de fer</b> canalise le champ.<br>Champ constant → aucune tension.",
   "origine": "Cours §5 Ce qui fait grandir la tension induite (exigible)"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'une f.é.m. induite ? Comment la mesure-t-on ?",
   "verso": "Une <b>tension</b>, en <b>volts</b>, mesurée au <b>voltmètre</b>. La lettre e indique seulement qu'elle vient d'un dispositif qui la produit. I = e/R et P = e I s'appliquent sans changement.",
   "origine": "Cours §5 Une tension, tout simplement"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Spire tournant à vitesse constante dans un champ uniforme : forme de la f.é.m. ? Quand est-elle maximale ?",
   "verso": "<b>Sinusoïdale</b>. Maximale quand le flux varie le plus vite (spire <b>dans le plan du champ</b>), <b>nulle quand le flux est maximal</b>.",
   "origine": "Cours §5 La spire tournante"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Force sur un conducteur de longueur ℓ parcouru par I dans un champ B ? Quand est-elle maximale ?",
   "verso": "<b>F = B I ℓ sin α</b>, α angle entre conducteur et champ.<br>Maximale si perpendiculaires, nulle si parallèles. Direction ⟂ au conducteur et au champ ; sens par la règle des trois doigts de la main droite.",
   "origine": "Cours §6 Force de Laplace"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelle conversion assure la force de Laplace ? et la f.é.m. induite ?",
   "verso": "Laplace : électrique → <b>mécanique</b> (moteur).<br>F.é.m. induite : mécanique → <b>électrique</b> (génératrice).<br>La <b>même machine</b> assure les deux sens.",
   "origine": "Cours §6 Les deux sens de conversion"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce qu'un matériau ferromagnétique ? Exemples ? Effet dans une bobine ?",
   "verso": "Il <b>canalise et renforce</b> le champ : fer, nickel, cobalt et alliages (tôles Fe-Si, ferrites, NdFeB).<br>Dans une bobine : <b>B = µ<sub>r</sub> µ<sub>0</sub> n I</b>, µ<sub>r</sub> de plusieurs milliers.",
   "origine": "Cours §7 Matériau ferromagnétique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Définir saturation, champ rémanent B<sub>r</sub> et intensité de démagnétisation I<sub>d</sub>.",
   "verso": "<b>Saturation</b> : B plafonne (1,5 à 2 T pour les tôles).<br><b>B<sub>r</sub></b> : champ qui reste quand le courant revient à zéro.<br><b>I<sub>d</sub></b> : courant de <b>sens inverse</b> qui annule ce champ.",
   "origine": "Cours §7 Saturation, rémanence, démagnétisation"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Matériau doux / matériau dur : forme du cycle et usages ?",
   "verso": "<b>Doux</b> : cycle <b>étroit</b>, s'aimante et se désaimante facilement, peu de pertes → transformateurs, moteurs, électroaimants.<br><b>Dur</b> : cycle <b>large</b>, garde l'aimantation → aimants permanents.",
   "origine": "Cours §7 Doux ou dur"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Sur un cycle B(I), où lire B<sub>r</sub>, I<sub>d</sub> et la saturation ? Comment conclure doux/dur ?",
   "verso": "• B<sub>r</sub> : ordonnée du cycle pour <b>I = 0</b>.<br>• I<sub>d</sub> : abscisse où le cycle coupe <b>B = 0</b> (courant négatif).<br>• Saturation : zone où B ne croît presque plus.<br>Cycle étroit (I<sub>d</sub> faible) → doux ; cycle large → dur.",
   "origine": "Cours §7 Exploiter un cycle B(I)"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Quelles sont les deux pertes fer ? Comment les limite-t-on ?",
   "verso": "<b>Hystérésis</b> : énergie perdue par cycle ∝ <b>aire du cycle</b> (∝ f) → matériau doux.<br><b>Courants de Foucault</b> : courants induits dans la masse (∝ f²) → <b>feuilleter</b> le circuit en tôles isolées.",
   "origine": "Cours §7 Les pertes fer"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Champ électrique entre deux plaques parallèles ? Unité ? Exemple 230 V sur 1 mm ?",
   "verso": "<b>E = U / d</b>, uniforme, en <b>V/m</b>.<br>230 V sur 1 mm → <b>230 kV/m</b> : plus les conducteurs sont proches, plus le champ est fort.",
   "origine": "Cours §8 Champ électrique"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Qu'est-ce que la rigidité diélectrique ? Valeur pour l'air sec ?",
   "verso": "Le <b>champ maximal</b> au-delà duquel l'isolant cesse d'isoler : c'est le <b>claquage</b> (champ disruptif).<br>Air sec : <b>3 kV/mm</b> (3 MV/m) ; huile et isolants de câbles : dizaines de kV/mm. L'air humide claque plus tôt.",
   "origine": "Cours §8 Rigidité diélectrique"
  },
  {
   "type": "methode",
   "recto": "<span class=\"sujet\">Méthode</span>Deux jeux de barres à 20 kV l'un de l'autre, dans l'air sec : distance minimale ?",
   "verso": "1. E<sub>d</sub> = 3 kV/mm (unités cohérentes avec U en kV).<br>2. <b>d = U / E<sub>d</sub></b> = 20 / 3 = <b>6,7 mm</b>.<br>3. Conclure : en dessous, l'air claque ; les distances réelles prennent une large marge.",
   "origine": "Cours §8 Distance minimale avant claquage"
  },
  {
   "type": "notion",
   "recto": "<span class=\"sujet\">Notion</span>Pourquoi un arc apparaît-il quand un contacteur s'ouvre en charge ? Comment l'éteint-on ?",
   "verso": "Les contacts ne sont d'abord séparés que de quelques centièmes de mm : même sous 400 V, <b>E = U/d dépasse la rigidité de l'air</b>, qui devient conducteur.<br>Les chambres de coupure <b>allongent et refroidissent</b> l'arc.",
   "origine": "Cours §8 L'arc à l'ouverture"
  }
 ],
 "cartes_figees": true,
 "cartes_source": "outils/cartes_manuelles"
};
