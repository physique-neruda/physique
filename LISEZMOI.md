# Site de physique appliquée — notice

Un site statique : rien à installer, pas de base de données, pas de compte à administrer.
Une seule page HTML fait tout le travail, pilotée par un fichier de catalogue.

**Adresse : `https://physique-neruda.github.io/physique/`**

---

## 1. Ce qu'il y a dans le dossier

```
index.html                 toute l'interface : accueil, filières, rubriques, recherche
catalogue.js               LE CATALOGUE — le seul fichier à modifier au quotidien
MODELE_animation.html      le gabarit pour créer une nouvelle animation
LISEZMOI.md                ce fichier
animations/                les animations (.html)
entrainement/              les questionnaires et les cartes de révision
   qcm.html                le questionnaire, valable pour tous les chapitres
   cartes.html             les cartes, valables pour tous les chapitres
   qcm-<filière>-chXX.js   un fichier de données par chapitre et par filière
outils/                    les scripts qui fabriquent ces fichiers de données
calorimetre.html           \
rayonnement.html            > redirections de compatibilité, à laisser
flux-thermique.html        /
docs/
   bts-et/c01/ c02/ tp01/ tp02/    un sous-dossier par chapitre
   bts-crsa/               (à créer quand il y aura des documents)
   bts-tsma/ch00/ … ch17/
   1sti2d/ch00/ … ch18/
```

**Toutes les filières rangent leurs PDF par chapitre** : `docs/<filière>/<chapitre>/<type>.pdf`,
par exemple `docs/1sti2d/ch16/cours.pdf` ou `docs/bts-et/c01/prerequis.pdf`. Le nom du fichier
ne répète plus le chapitre, il est déjà dans le chemin. La clé de chapitre est celle de la
collection LaTeX : `chXX` en STI2D, `cXX` et `tpXX` en BTS ET.

**Il n'y a jamais de nouvelle page HTML à créer.** Une filière, une rubrique, un chapitre : tout
sort de `catalogue.js`. `index.html` se charge de l'affichage, du rangement et de la recherche.

L'adresse d'une filière s'obtient en ajoutant son identifiant après un dièse :
`…/physique/#bts-crsa`. C'est cette adresse-là qu'on donne à une classe.

Un **chapitre** a lui aussi son adresse, obtenue en ajoutant une barre oblique et le nom du
chapitre sans accent : `…/physique/#1sti2d/chapitre-16-notion-d-onde-et-information`. Pratique
pour envoyer une classe droit sur le chapitre du jour, sans lui faire traverser la liste.

Un chapitre n'apparaît qu'une fois, même s'il porte des documents dans plusieurs rubriques : la
page de chapitre les range alors sous des sous-titres « Cours », « TP », « S'entraîner ».

---

## 2. La structure

Trois niveaux : la filière, puis le chapitre, puis les documents.

**Les filières** sont déclarées dans `FILIERES`, en haut de `catalogue.js`. L'ordre de la liste
est l'ordre d'affichage sur la page d'accueil. Chacune a :

- un `id` : minuscules, sans accent ni espace. Il sert dans l'adresse **et** comme nom de
  dossier dans `docs/`. Une fois diffusé, ne plus le changer : cela casserait les liens.
- un `nom` et un `sous_titre` affichés ;
- une liste de `rubriques`, qui deviennent les boutons en haut de la page de la filière.
  Le BTS ET en a trois (Cours, TP, ADM), les autres deux. Rien n'empêche d'en ajouter.

**Les chapitres** ne se déclarent nulle part : ils naissent du champ `chapitre` des documents.
Deux documents portant exactement le même texte se retrouvent groupés sous le même titre.
D'où la seule règle à respecter : **copier-coller le texte du chapitre d'un document à
l'autre**, sinon on obtient deux groupes au lieu d'un.

**L'ordre à l'intérieur d'un chapitre est celui de `catalogue.js`.** C'est voulu : on range les
documents dans l'ordre où on veut que l'étudiant les rencontre. Dans le Cours 1, l'animation
« Le chauffage » est placée avant le document « Activité 1 » qui l'accompagne, et le cours à
compléter avant le cours complet.

---

## 3. Ajouter un document

1. **Déposer le fichier.** Un PDF va dans `docs/<id de la filière>/`, une animation dans
   `animations/`. Noms de fichiers en minuscules, sans accent ni espace.
2. **Recopier un bloc dans `DOCUMENTS`**, dans `catalogue.js`, et changer les valeurs. Ne pas
   oublier la virgule après l'accolade fermante, sauf sur le tout dernier bloc.
3. C'est tout.

Le champ `type` vaut `"pdf"` ou `"animation"`. Il décide de la pastille affichée, de la couleur
du liseré, et du fait que le lien s'ouvre dans un nouvel onglet ou non. Le champ `trouve` ne sert
qu'aux animations : c'est la loi qu'elle fait découvrir, affichée en orange.

**Page blanche après modification** : c'est presque toujours une virgule oubliée ou un
guillemet non fermé dans `catalogue.js`. Ouvrir `index.html` par un double-clic avant de mettre
en ligne permet de s'en apercevoir tout de suite.

---

## 4. Ajouter une filière

Un bloc dans `FILIERES`, un dossier du même nom dans `docs/`, et les documents suivent. La
filière apparaît sur la page d'accueil même vide, avec la mention « rien pour l'instant » :
c'est utile pour montrer aux classes concernées que la place est faite.

---

## 5. Mettre à jour le site en ligne

Le site vit dans le dépôt GitHub public `physique`, du compte `physique-neruda`. Pour publier
une modification, sans aucune ligne de commande :

**Ajouter des fichiers.** Sur la page du dépôt, bouton *Add file → Upload files*, puis glisser
les fichiers ou le dossier. Descendre en bas et cliquer *Commit changes*. On peut glisser un
dossier entier, GitHub recrée l'arborescence.

**Modifier `catalogue.js`.** Cliquer sur le fichier dans le dépôt, puis sur l'icône crayon en
haut à droite, éditer directement dans la page, et valider par *Commit changes*.

Dans les deux cas, le site est à jour une à deux minutes plus tard. Si l'ancienne version
s'affiche encore, c'est le cache du navigateur : recharger en navigation privée pour vérifier.

---

## 6. Ce qu'il ne faut pas déposer

**Le dépôt est public**, c'est ce qui rend l'hébergement gratuit. Tout ce qui y est déposé est
visible et téléchargeable par n'importe qui, et indexable par les moteurs de recherche. Une
adresse compliquée ne protège rien : il n'existe pas de « lien secret » sur GitHub Pages.

**Depuis le 2 octobre 2026 (v42), les documents des quatre classes sont chiffrés** : seul le
fichier `.enc` est publié, et il ne s'ouvre qu'avec le mot de passe de la classe (voir la mise à
jour v42 en fin de notice). Le reste — catalogue, animations, questionnaires, outils — reste
public. La règle ci-dessous tient toujours : un mot de passe partagé par une classe finit par
circuler, il ne protège pas un sujet d'examen.

Ne pas y mettre :

- les **corrigés**, quels qu'ils soient. Le site ne contient que les versions élève, et le pied
  de page le dit explicitement ;
- les **sujets d'évaluation à venir**, y compris les sujets type E4 non encore donnés ;
- toute **copie, note, liste d'étudiants** ou document nominatif.

Pour distribuer un corrigé après la séance, l'ENT reste le bon canal.

Si l'on préfère que le site ne remonte pas dans une recherche au nom de l'établissement, ajouter
cette ligne dans le `<head>` de `index.html` : `<meta name="robots" content="noindex">`. Le site
reste accessible à qui a le lien, mais n'est plus référencé.

---

## 7. Déposer les PDF d'un chapitre

Le placement des fichiers et l'écriture du catalogue sont faits par un script de l'archive de
travail :

```
python3 outils/publier.py site-physique                              # catalogue seul
python3 outils/publier.py site-physique --deposer 1sti2d collection  # + les PDF
```

La seconde forme copie les PDF de `collection/chXX/pdf/` vers `docs/1sti2d/chXX/`. La première
se contente de relire ce qui existe déjà dans le site — PDF déposés, animations déclarées,
fichiers d'entraînement — et de réécrire le bloc de catalogue encadré par `>>> bloc genere`.
Elle vaut donc pour **toutes les filières**, y compris celles dont les sources LaTeX ne sont pas
sur la machine : il suffit d'avoir mis les PDF au bon endroit. Le catalogue ne peut jamais
annoncer un fichier absent, puisqu'il est déduit des fichiers présents.

Ce qui est publiable est décrit filière par filière dans `outils/filieres.py`, sous forme de
**liste blanche** : un type de document absent de cette liste n'est jamais copié ni inscrit. Un
second verrou refuse tout nom contenant « corrigé » ou « test ». Sur les 190 PDF que produit la
collection STI2D, 114 sont publiés et 76 restent volontairement de côté.

Les **titres de chapitre** vivent dans `chapitres/<filière>.json`, trois lignes par chapitre.
C'est le seul endroit où un chapitre est nommé.

Le **bilan** est publié : c'est une feuille d'auto-évaluation dont les réponses figurent au bas
de la page, prévue pour l'élève. Le **test** ne sort pas : c'est un support d'évaluation.

À la main, sans le script, la démarche reste celle du §3 : déposer le fichier dans
`docs/<filière>/`, puis recopier un bloc dans `catalogue.js` — mais en dehors des repères
`>>> bloc genere`, sinon le prochain passage du script l'effacera.

---

## 8. Les questionnaires et les cartes de révision

Le dossier `entrainement/` ne contient que **deux pages** : `qcm.html` et `cartes.html`. Elles
servent tous les chapitres de toutes les filières, et n'ont pas à être modifiées quand on en
ajoute un. Le chapitre est passé dans l'adresse :

```
entrainement/qcm.html?f=1sti2d&ch=16&type=prerequis
entrainement/qcm.html?f=1sti2d&ch=16&type=bilan
entrainement/cartes.html?f=1sti2d&ch=16
```

La page va alors lire `entrainement/qcm-1sti2d-ch16.js`, qui contient les questions, les bonnes
réponses, les explications et les cartes. **La filière fait partie du nom** : sans elle, le
chapitre 1 de la 1re STI2D et le cours 1 du BTS ET, tous deux numérotés 01, se recouvriraient.
La progression enregistrée dans le navigateur est séparée de la même façon. **Ajouter un chapitre, c'est déposer un fichier de données de plus** ;
les deux pages ne changent jamais.

Ces fichiers ne s'écrivent pas à la main : ils sont **fabriqués à partir des sources LaTeX** par les
scripts du dossier `outils/` de l'archive de travail (voir son propre LISEZMOI). Les questions
n'existent donc qu'à un seul endroit, le `.tex`. Corriger une faute dans `ch16_bilan.tex` et
relancer la fabrication met le site à jour ; il n'y a pas de deuxième version à maintenir.

Comme pour un PDF ou une animation, l'entrée se recopie dans `catalogue.js`, avec `type: "qcm"` ou
`type: "cartes"` et le chemin complet, paramètre compris :

```js
{
  filiere: "1sti2d", rubrique: "S'entraîner",
  chapitre: "Chapitre 16 — Notion d'onde et information",
  type: "qcm", titre: "Bilan — se tester après",
  fichier: "entrainement/qcm.html?f=1sti2d&ch=16&type=bilan",
  description: "12 questions sur tout le chapitre."
},
```

Rien n'est enregistré ni envoyé : les réponses restent dans le navigateur de l'étudiant. Il n'y a
donc aucun moyen de savoir qui a travaillé — c'est le prix du dispositif sans compte, et la raison
pour laquelle il ne pose aucune question de données personnelles.

---

### Ajouter une filière au dispositif

Trois choses, dans cet ordre :

1. dans `catalogue.js`, ajouter `"S'entraîner"` aux `rubriques` de la filière — c'est déjà fait
   pour les quatre ;
2. dans `outils/filieres.py`, décrire la filière : ses rubriques, la liste blanche de ses types
   de documents, ses animations ;
3. dans `chapitres/<filière>.json`, nommer les chapitres.

Ensuite, une commande par chapitre pour fabriquer les questionnaires, puis `publier.py`. Les
pages `qcm.html` et `cartes.html` ne changent jamais : elles servent déjà toutes les filières.

---

## 9. Créer une animation

Dupliquer `MODELE_animation.html`, le renommer, le déposer dans `animations/`, puis l'inscrire
dans `catalogue.js` comme n'importe quel document, avec `type: "animation"`.

Le modèle contient déjà les couleurs, l'afficheur type multimètre, les curseurs au format
tactile, le bouton *Relever* et le tableau de mesures. Ce qui change réellement d'une animation
à l'autre tient dans deux fonctions : `mesure()` pour la physique, `dessine()` pour le schéma.
Ne pas retoucher le reste : c'est ce qui fait que toutes les animations se ressemblent sans
effort.

Contraintes à respecter, elles sont tenues par les trois animations existantes :

- **un seul fichier autonome**, sans bibliothèque ni appel réseau — le wifi d'un établissement
  peut être filtré, et une animation doit marcher depuis une clé USB ;
- **mobile d'abord** : colonne unique, cibles tactiles d'au moins 40 px, pas de survol ;
- **aucun stockage** : ni cookie, ni `localStorage`. Les mesures vivent en mémoire et
  disparaissent à la fermeture. Conséquence utile : aucune donnée personnelle en jeu, donc
  aucune question RGPD, et l'adresse se diffuse librement.

---

## 10. Points d'attention

**Les noms de fichiers sont sensibles à la casse** sur GitHub Pages. `Cours.pdf` et `cours.pdf`
sont deux fichiers différents, alors qu'ils sont identiques pour Windows. C'est la cause
numéro un des liens morts. Tout en minuscules, toujours.

**Les trois fichiers de redirection à la racine ne doivent pas être supprimés.** Les QR codes
imprimés sur les activités du Cours 1 pointent vers l'ancienne adresse à plat
(`…/physique/calorimetre.html`) ; ces trois fichiers renvoient vers `animations/`. Toute
nouvelle activité doit en revanche pointer directement vers `animations/…`.

**Ne pas renommer un `id` de filière ni un fichier déjà diffusé.** Les liens donnés aux classes
et les QR codes imprimés sur les documents pointent vers l'ancien nom.

**Les animations qui font tourner une simulation dans le temps** se figent si le téléphone se
met en veille ou passe la page en arrière-plan. On relance, ce n'est pas grave, mais mieux vaut
l'avoir dit aux étudiants.


---

## Mise à jour du 6 septembre 2026

**Le BTS TSMA entre sur le site.** Les dix-huit chapitres (ch.0 à ch.17) sont publiés :
prérequis, cours à compléter, cours complet, exercices, bilan sous *Cours* ; activité, situation
type CCF et sujet d'oral sous *TP*. **142 PDF**, rangés comme partout ailleurs en
`docs/bts-tsma/chXX/<type>.pdf`. Aucun corrigé n'est en ligne, ici comme dans les autres
filières : le dépôt est public.

**Deux animations nouvelles pour le TSMA**, appelées depuis la rubrique *TP* du chapitre
concerné :

- `animations/pied-a-coulisse.html` — un pied à coulisse au 1/50 refermé sur un axe de piston.
  L'étudiant lit lui-même le vernier, à la loupe, sur six axes numérotés dont deux sont hors
  cote de façon certaine. Sert l'activité `ch01/activite_anim.pdf`.
- `animations/treuil.html` — un treuil 24 V qui lève une masse réglable, avec chronomètre
  manuel. Sert l'activité `ch02/activite_anim.pdf`.

Ces deux activités portent un **QR code** qui pointe directement sur l'animation : les étudiants
n'ont pas à traverser le site.

**BTS Électrotechnique : le Cours 2 et le TP 2 sont ajoutés.** Cours 2 « Électromagnétisme »
avec ses trois animations (`flux-magnetique.html`, `induction.html`, `reluctance.html`) et les
trois activités qui vont avec ; TP 2 « Dipôles passifs et actifs ». **23 PDF** de plus.

**Les QR codes des documents BTS ET ont été repointés** vers `…/physique/animations/xxx.html`,
l'adresse canonique, au lieu de `…/physique/xxx.html`. Les trois redirections à la racine
(`calorimetre.html`, `rayonnement.html`, `flux-thermique.html`) **restent en place** : les
feuilles déjà distribuées continuent de fonctionner. Ne pas les supprimer.

**Ce qui manque encore.** Le BTS TSMA n'a pas de rubrique *S'entraîner* : les questionnaires
(`entrainement/qcm-btstsma-chXX.js`) et les cartes de révision restent à produire, chapitre par
chapitre, à partir des prérequis et des bilans — c'est le même mécanisme qu'en 1re STI2D, il n'y
a aucune page à créer, seulement les fichiers de données à déposer et une entrée
`type: "qcm"` à ajouter au catalogue.


---

## Mise à jour du 6 septembre 2026 (suite) — l'entraînement du BTS TSMA

Les dix-huit chapitres ont maintenant leur rubrique **S'entraîner** : un questionnaire de
prérequis, un questionnaire de bilan et un jeu de cartes de révision par chapitre, soit
**102 questions de prérequis, 216 questions de bilan et 158 cartes**. Rien de nouveau côté
interface : `qcm.html` et `cartes.html` servent déjà toutes les filières, seuls les fichiers de
données ont été déposés, sous le nom `entrainement/qcm-bts-tsma-chXX.js`.

Le chapitre 0 n'a pas de questionnaire de prérequis, et c'est voulu : il **est** le prérequis de
tous les autres. Son entrée « Prérequis — se tester avant » n'existe donc pas au catalogue.

### D'où viennent ces questions

Elles ne sont pas inventées : elles sortent des documents de la collection LaTeX.

- Le **bilan** de chaque chapitre est déjà un QCM à trois propositions avec corrigé commenté :
  `outils/construire_tsma.py` le lit dans `chXX_bilan.tex`, en extrait la bonne réponse et le
  commentaire, et convertit le LaTeX en texte lisible (unités siunitx, fractions, exposants,
  lettres grecques).
- Les **cartes** sont fabriquées à partir des `\trou{}` du cours à compléter : la phrase du
  cours devient le recto, avec le passage remplacé par « …… », et le contenu du trou devient le
  verso. C'est exactement ce que les étudiants ont à écrire en séance.
- Les **prérequis** papier étant des questions *ouvertes* (calculer, convertir, isoler), ils ne
  peuvent pas être convertis automatiquement. Ils ont été rédigés en QCM à la main, dans
  `outils/prerequis_tsma.py`, à partir des mêmes énoncés et des mêmes corrigés — avec des
  distracteurs choisis parmi les erreurs réellement commises : oubli d'une conversion, racine
  prise pour une division, somme au lieu d'une composition quadratique.

### Régénérer après une modification du cours

```sh
cd outils
python3 construire_tsma.py <chemin>/BTS_TSMA_LaTeX/collection ../entrainement
```

Le script réécrit les dix-huit fichiers de données. Ne jamais éditer un `qcm-bts-tsma-chXX.js`
à la main : la prochaine exécution l'écraserait. Pour changer une question de bilan, corriger
`chXX_bilan.tex` dans la collection ; pour changer un prérequis, corriger
`outils/prerequis_tsma.py`.

---

## Mise à jour du 10 septembre 2026

**Le BTS CRSA entre sur le site.** Les dix-sept chapitres (ch.0 à ch.16) sont publiés :
prérequis, cours à compléter, cours complet, exercices, bilan sous *Cours* ; activités,
situation type CCF, devoir type E32 et sujet d'oral sous *TP*. **149 PDF**, plus l'animation
`animations/mcc-banc-essai.html` rattachée à l'activité 1 du chapitre 1. Le questionnaire
diagnostique du chapitre 0 n'est **pas** publié : c'est un support de positionnement, passé en
première séance.

**Le BTS ET est à jour et complété.** Les 46 PDF déjà en ligne ont été remplacés — toute la
collection a été recompilée avec le gabarit v0.4 — et le **chapitre 0, « Outils
mathématiques »**, s'y ajoute. Le chapitre 9 n'est pas publié. Les chapitres portent désormais
le nom qu'ils portent sur les documents eux-mêmes : *Chapitre 0*, *Cours 1*, *Cours 2*,
*TP 1*, *TP 2*.

**Une filière « Outils », transversale.** Elle ne dépend d'aucune classe et rassemble ce qui
sert partout. Deux animations pour commencer :

- `animations/conversion-unites.html` — **convertir avec les puissances de dix**, et rien
  d'autre : aucune virgule ne se déplace, aucune échelle à descendre. Sous chaque unité est
  écrit son **rang**, et c'est toujours celui du préfixe **seul** — jamais élevé au carré ni au
  cube. Le raisonnement : chercher la puissance de dix normale de chaque préfixe, compter
  l'écart entre les deux rangs *sans signe*, et seulement **ensuite**, s'il s'agit d'une aire ou
  d'un volume, élever au carré ou au cube la puissance de dix ainsi trouvée — une fois, pas
  deux. Le signe arrive en dernier, donné par la taille des unités.
  Trois cas particuliers y sont traités :
  - **aires et volumes** : `2 rangs → 10²`, puis `(10²)² = 10⁴` ;
  - **capacités** : le pont `1 L = 1 dm³` n'est pas un décor, c'est la **route**. Un schéma
    en trois cases montre le chemin — `cL → L = dm³ → mm³` — et chaque unité est située par
    rapport au pont, jamais par rapport au mètre cube, qui n'apparaît que s'il est lui-même
    demandé. Quand les deux unités sont de la même famille, le schéma le dit et on ne
    traverse pas ;
  - **unités composées** (m/s, L/min, g/cm³) : **trois étapes, pas une de plus**. Mettre sous
    forme de fraction — « 72 km pour 1 h, une seule » ; convertir le haut et le bas, une ligne
    chacun ; diviser. Quand les deux conversions sont des puissances de dix, la dernière étape
    est une simple soustraction d'exposants : `10⁻³ ÷ 10⁻⁶ = 10³`. Sinon, la puissance de dix
    s'applique d'abord, le facteur ensuite (`30 × 10⁻³ = 3 × 10⁻²`, puis `÷ 60`) — jamais de
    décimal intermédiaire à rallonge. Les conversions qui ont leur propre onglet ne sont
    **pas** redémontrées : `1 cm³ = 10⁻⁶ m³` est donné tel quel, avec un renvoi vers
    *Capacités* ; `1 h = 3600 s` est simplement rappelé.

  - **durées** : un onglet à part, parce qu'il le faut. Le préambule le dit sans détour —
    *au-dessus de la seconde, on n'est plus dans le système décimal* : plus de rang, plus de
    puissance de dix. On écrit alors l'équivalence entre **les deux unités demandées**
    (`1 h = 60 min`, `1 j = 24 h`, `1 min = 60 000 ms`) et on conclut par un **tableau de
    proportionnalité** à quatre cases. La seconde n'est plus un passage obligé : on n'y passe
    que si on la demande. Sous la seconde, la méthode des rangs reprend ses droits et
    l'animation le dit. Le piège du
    `51,15 min` y a son étape à lui : on lit 51,15, on écrit *51 min 15 s*, c'est faux —
    `0,15 min × 60 = 9 s`, donc **51 min 9 s**. L'afficheur montre les deux écritures du même
    instant côte à côte, et l'entraînement redonne la forme h-min-s à la correction.

  Les gammes sont étendues : `GW MW kW W mW µW nW`, `MV kV V mV µV nV`, `MA kA A mA µA nA`,
  `km … mm µm nm`, `kg … mg µg ng`, et un onglet **Condensateurs** `F mF µF nF pF` — le seul
  endroit où le pico serve. Il s'appelle ainsi, et non « Capacité », pour ne pas être confondu
  avec l'onglet des litres et des mètres cubes. Résultats en écriture scientifique, saisie acceptant
  `2,5 × 10^3` comme `2,5e3`, et dix conversions au hasard pour s'entraîner.
- `animations/transformer-formule.html` — douze relations du programme, une lettre à isoler,
  et **deux colonnes côte à côte** : la méthode « équation » (multiplier ou diviser les deux
  côtés, avec les simplifications barrées) et la méthode « produit en croix » (chaque lettre
  traverse en diagonale). Les deux tombent sur le même résultat, ce qui est l'argument.
  Application numérique, puis série d'entraînement. La méthode « prendre des valeurs simples »
  de la fiche collège-lycée n'y figure pas, volontairement.

Pour en ajouter une : la déposer dans `animations/`, l'inscrire dans `ANIMATIONS["outils"]`
de `outils/filieres.py`, ajouter son chapitre dans `chapitres/outils.json`, relancer
`publier.py`. Aucune page HTML à créer.

### Les cartes de révision ont été refaites

L'ancienne fabrique ne tirait que des textes à trous : plusieurs chapitres n'en avaient
aucune, et certaines cartes étaient des fragments incompréhensibles hors de leur page, ou deux
variantes de la même phrase. `outils/cartes.py` les fabrique maintenant à partir de **quatre
sources**, dans cet ordre : les **définitions** du cours, les encadrés **à retenir**, les
**textes à trous** (une carte par phrase au plus, jamais deux), et les **questions du bilan**,
bien posées par construction. Un recto qui ne se comprend pas seul est écarté : amorce
allusive (« Ni… », « Ce qui… »), renvoi à une figure, trou en tête de phrase.

Deux défauts ont été corrigés en septembre. Des cartes **trop longues** — l'énoncé tenait cinq
lignes : le recto est plafonné à 165 caractères, le verso à 260, coupé à la fin d'une phrase.
Et surtout des cartes qui **donnaient la réponse dans la question** : « En ……, les flèches sont
de sens contraires, alors qu'en convention générateur… » ne teste plus rien. Le filtre compare
la réponse attendue au texte de l'énoncé et écarte la carte si elle y figure. Le test ne porte
que sur ce qu'il faut trouver, jamais sur l'explication qui suit — celle-là reprend forcément
des mots de la question, c'est sa raison d'être. Deux cartes qui attendent la même réponse ne
sont gardées qu'une fois.

**Les 826 cartes du site — toutes filières, tous chapitres — passent ce filtre**, et aucun
chapitre n'en a moins de douze. Pour repasser l'ensemble après une modification :

```sh
python3 outils/refaire_cartes.py entrainement
```

Les filières dont les sources LaTeX sont sur la machine se régénèrent entièrement par
`construire.py` ; les autres gardent ce qui tient debout et se complètent avec les questions de
leur bilan puis de leurs prérequis.

### Export Anki

Chaque jeu de cartes porte un bouton **« Télécharger pour Anki »**. Il fabrique dans le
navigateur un fichier texte tabulé qu'Anki lit tel quel (*Fichier › Importer*) : les en-têtes
`#separator`, `#html`, `#deck` et `#tags` lui disent où ranger les cartes et sous quelles
étiquettes. Le paquet s'appelle `Physique::BTS CRSA::Chapitre 5 …`, les étiquettes reprennent
la filière et le chapitre. Rien n'est envoyé nulle part, rien n'est installé : le fichier se
fabrique dans le téléphone, comme le reste du site.

Il n'y a **pas** de `.apkg` : ce format est une base de données compressée, qu'une page
statique ne peut pas produire. Le texte tabulé donne le même résultat à l'import, et il a
l'avantage de rester lisible et corrigeable.

### Régénérer après une modification du cours

```sh
python3 outils/construire.py bts-crsa <...>/BTS_CRSA_LaTeX/collection entrainement
python3 outils/construire.py bts-et   <...>/BTS_ET_LaTeX               entrainement
python3 outils/publier.py .
```

### Les prérequis du CRSA et du BTS ET

Ils sont écrits, à la main, dans `outils/prerequis_crsa.py` (chapitres 1 à 16, six questions
chacun) et `outils/prerequis_et.py` (Cours 1, Cours 2, TP 1, TP 2). Ils reprennent les gestes
de la feuille papier du chapitre, avec les mêmes nombres, pour que l'étudiant qui a fait la
feuille retrouve ses calculs. Les distracteurs ne sont pas décoratifs : ce sont les erreurs
qu'on voit vraiment — le quotient à l'envers, le rang de dix décalé, le carré oublié, la
calculatrice restée en radians.

Les 120 réponses numériques ont été recalculées une à une avant livraison. Les chapitres 0 des
trois BTS n'en ont pas, et n'en auront pas : c'est eux, le rattrapage.

```sh
python3 outils/prerequis_crsa.py entrainement
python3 outils/prerequis_et.py   entrainement
```

`construire.py` ne les écrase plus : il relit les prérequis du fichier existant avant de
réécrire le reste.

### Une erreur corrigée au passage

Le corrigé du bilan du chapitre 0 du CRSA est écrit dans un troisième format (`\textbf{1 b}
et \textbf{2 b}`, numéro et lettre dans la même accolade) que le lecteur ne connaissait pas.
Faute de le reconnaître, il faisait tomber **les douze réponses sur la première proposition**.
Le questionnaire était donc entièrement faux en ligne. `construire.py` lit maintenant les trois
formats, et refuse de publier un questionnaire dont il n'a su lire aucune réponse. Deux
propositions identiques dans le bilan du chapitre 4 (`ω` et `ω̇`, que la conversion en texte
confondait) sont également distinctes à présent.

### Cartes de définitions pour les quatre filières

Les collections LaTeX de la 1re STI2D et du BTS TSMA sont maintenant sur la machine :
`enrichir_cartes.py` va y chercher les **définitions**, les encadrés **à retenir** et les
textes à trous, sans toucher aux questionnaires déjà en place.

```sh
python3 outils/enrichir_cartes.py 1sti2d   <...>/collection entrainement
python3 outils/enrichir_cartes.py bts-tsma <...>/collection entrainement
```

Sur les 826 cartes du site : 154 définitions, 102 encadrés à retenir, 212 textes à trous,
358 questions.


---

## Correctif du 10 septembre 2026 — animations sans niveau

Trois animations portaient le nom d'une filière dans leur titre et leur sous-titre :
`pied-a-coulisse.html` et `treuil.html` annonçaient « BTS TSMA · chapitre 1 » ou « chapitre 2 »,
`mcc-banc-essai.html` annonçait « Lycée Pablo Neruda — BTS CRSA — chapitre 1 ». Un élève de
1re STI2D à qui on donne le pied à coulisse voyait donc s'afficher BTS TSMA.

Les trois sont maintenant **neutres** : le titre décrit l'instrument et la notion, jamais la
classe. Le lien de retour « Toutes les animations » y a été ajouté, comme sur les autres — il
pointe vers `../index.html` sans ancre de filière, pour la même raison.

C'est la règle à tenir pour toute nouvelle animation : **aucune mention de niveau, de filière
ni de numéro de chapitre à l'intérieur du fichier.** Le rattachement à un chapitre se fait dans
`ANIMATIONS` de `outils/filieres.py`, et là seulement — une même animation peut ainsi servir à
plusieurs classes sans être dupliquée.

Le pied à coulisse est d'ailleurs désormais déclaré **deux fois** : au chapitre 1 du BTS TSMA
et au chapitre 1 de la 1re STI2D, dont l'activité refondue s'appuie dessus pour sa partie B.
Un seul fichier, deux rattachements.

L'activité `docs/1sti2d/ch01/activite.pdf` a été remplacée par sa nouvelle version (les cinq
parties A à E, la comparaison 1/10 contre 1/50, la décision de conformité). Le corrigé n'est
pas publié, conformément à la liste blanche.


---

## Mise à jour du 16 septembre 2026

**BTS TSMA, collection v3.** Les 18 chapitres redéposés (146 PDF). Quatre documents nouveaux :
les **activités sur banc** des chapitres 3, 4 et 5, adossées au matériel Jeulin et Eurosmart,
et une seconde activité sur animation au chapitre 5. Le type `activite_banc` est entré dans la
liste blanche de `outils/filieres.py`, avec son propre libellé — il ne remplace pas
`activite`, les deux coexistent. Nouvelle animation : `viscosimetre.html`, rattachée au
chapitre 5, qui remplace le banc capillaire et ses bains thermostatés.

**BTS ET, collection v2.** Redéposée, plus l'animation `caracteristiques.html` rattachée à
l'activité du TP 2 — un montage unique où l'on remplace le dipôle, et un tableau de points
(U ; I) qu'on remplit soi-même.

**Le fil ADM entre sur le site.** Le chapitre *ADM 1 — Schémas électriques et appareillage de
commande* est publié dans sa rubrique **ADM**, distincte de *Cours* et de *TP* : sept PDF
(prérequis, cours et cours à compléter, activité, exercices, bilan, situation U51) et trois
animations — `contacteur.html`, `demarrage-direct.html`, `etoile-triangle.html` — placées
respectivement avant l'activité, avant les exercices et avant la situation U51. Pas de sujet
type E4 : l'ADM est une épreuve pratique, la situation U51 en tient lieu. Son questionnaire de
prérequis (six questions) est dans `outils/prerequis_et.py` avec les autres ; son bilan et ses
quatorze cartes sortent de la collection comme partout ailleurs.

Les cinq animations livrées avec ces archives portaient de nouveau un niveau dans leur titre
(« BTS TSMA ch.5 », « TP 2 (BTS Électrotechnique) »). Elles ont été neutralisées et ont reçu
leur lien « Toutes les animations », conformément à la règle posée le 10 septembre.

**Le site** : 660 entrées au catalogue, 466 PDF, 16 animations, 1101 questions, 840 cartes.


### Les cartes de l'ADM viennent du paquet, pas du cours

Le chapitre ADM 1 est livré avec un paquet Anki de **51 cartes écrites à la main** : un symbole
normalisé au recto, le nom de l'appareil, son intérêt, son fonctionnement et une photo du
matériel réel au verso. Les refabriquer depuis le cours donnerait autre chose. `cartes_anki.py`
lit donc le `.apkg` — une archive zip contenant une base SQLite et ses médias numérotés — et
recopie les cartes telles quelles, images comprises :

```sh
python3 outils/cartes_anki.py <paquet.apkg> bts-et adm01 entrainement \
        ../docs/bts-et/adm01/symboles-anki.apkg
```

Les 86 images sont déposées dans `entrainement/media/adm01/`. Le fichier de données reçoit
`cartes_figees: true` : `construire.py` et `refaire_cartes.py` respectent ce drapeau et ne
reconstruisent plus les cartes de ce chapitre. Et le bouton de la page cartes ne fabrique plus
un texte tabulé — il donne **le paquet lui-même**, qui seul emporte les images.

Ce sont donc exactement les mêmes cartes des deux côtés : sur le site pour réviser au doigt,
dans Anki pour la répétition espacée.

### Une panne silencieuse corrigée

Les liens de la rubrique *S'entraîner* étaient construits sur le **numéro** du chapitre. Au
CRSA et en STI2D, numéro et clé coïncident ; au BTS ET, `Cours 1` et `TP 1` portent tous deux
le numéro 1, et l'adresse cherchait `qcm-bts-et-ch01.js`, qui n'existe pas. **Toute la rubrique
S'entraîner du BTS ET était morte**, sans message d'erreur visible dans le catalogue.

`publier.py` passe désormais la **clé** du chapitre (`ch=c01`, `ch=adm01`), et `qcm.html` comme
`cartes.html` l'acceptent — les anciennes adresses numérotées restent valides. Les fichiers de
données portent en plus une `etiquette` (« Cours 1 », « ADM 1 ») affichée en en-tête à la place
de « Chapitre 1 ».


---

## Mise à jour du 17 septembre 2026 — ADM 1 en version 15

Le chapitre *ADM 1 — Schémas électriques et appareillage de commande* est redéposé dans sa
version 15 : les sept PDF publiés (les trois corrigés et le corrigé U51 restent hors ligne),
les trois animations, et le paquet Anki de 51 cartes. Tous les fichiers ont changé — la
collection a été recompilée de bout en bout.

Le questionnaire de bilan (16 questions) est relu depuis la nouvelle source. Les prérequis
restent ceux de `outils/prerequis_et.py`, que `construire.py` ne touche pas. Les cartes du
chapitre sont réinjectées depuis le `.apkg` de la v15, avec ses 86 images.

Les trois animations arrivaient sans mention de niveau — la règle du 10 septembre est passée
dans la chaîne amont. Il n'y restait qu'à poser le lien « Toutes les animations ».

**Le site** : 661 entrées, 466 PDF, 16 animations, 1101 questions, 877 cartes.


---

## Mise à jour du 20 septembre 2026 — 1re STI2D en version 5

Les 19 chapitres redéposés (114 PDF). L'activité du **chapitre 2** est refondue : partie A
construite sur une facture d'électricité et sur la nouvelle animation, partie B refaite sur la
chaîne de la lampe — transformateur puis ampoule, deux maillons réellement consécutifs, au lieu
du sèche-cheveux dont le moteur et la résistance sont en parallèle. Six figures de rappel ont
quitté la feuille d'exercices, où elles donnaient la réponse avant l'énoncé, et le prix du kWh
est unifié à 0,28 € partout.

Nouvelle animation : `wattmetre-de-prise.html`, rattachée au chapitre 2 juste avant l'activité.
Dix appareils d'élève, la puissance réellement appelée, une durée d'usage quotidien, et
l'énergie qui s'en déduit. Elle arrivait sans mention de niveau — il n'y restait qu'à poser le
lien « Toutes les animations ».

**Le site** : 662 entrées, 466 PDF, 17 animations, 1101 questions, 877 cartes.


---

## Mise à jour du 21 septembre 2026

**Un troisième outil transversal : le tableur.** `animations/tableur.html` — *Calculer, tracer
et modéliser avec un tableur* — est un tutoriel pas à pas sur Excel : saisir un tableau de
mesures, écrire une formule et la recopier, tracer un nuage de points, ajouter une courbe de
tendance et lire son équation. Il ouvre la rubrique **Mesure** de la filière Outils, restée
vide jusqu'ici, sous un chapitre `ou03` « Utiliser un tableur ».

**BTS ET, collection v5.** Seul le **TP 2** a changé : ses dix documents publiés sont
remplacés. Son bilan est relu depuis la nouvelle source ; la feuille de prérequis a gardé les
mêmes questions, le questionnaire en ligne reste donc aligné. Les animations du fil Cours sont
identiques à celles du site au lien de retour près — les versions du site, qui pointent vers
la racine, sont conservées.

**ADM 1, v16.** Seule l'animation `etoile-triangle.html` a changé ; elle est remplacée. PDF et
paquet Anki identiques à la v15, les 51 cartes figées restent en place.

**1re STI2D.** L'animation `wattmetre-de-prise.html` du chapitre 2 passe en v5.

Les trois animations remplacées arrivaient sans mention de niveau ; le lien « Toutes les
animations » y a été posé.

**Le site** : 663 entrées, 466 PDF, 18 animations, 1101 questions, 877 cartes.


---

## Mise à jour du 24 septembre 2026 — BTS ET v10, CRSA ch.17, ch.0 des trois BTS

- **BTS ET** : trois chapitres entrent sur le site — **Cours 3 (Les combustions)**, **TP 3
  (Régime sinusoïdal monophasé)** et **ch.9 (Distribution et qualité de l'énergie électrique)**,
  ce dernier rangé dans la rubrique TP. Le Cours 3 arrive avec ses trois animations
  (`combustion.html`, `pouvoir-calorifique.html`, `groupe-electrogene.html`), placées devant
  les feuilles d'activité correspondantes (`a1_equation`, `a2_energie`, `a3_groupe`, ajoutées
  à la liste blanche). Déclarations : `chapitres/bts-et.json`, `DOSSIERS_ET`,
  `RUBRIQUE_DU_CHAPITRE` et `ANIMATIONS` dans `outils/filieres.py`. L'ADM 1 est redéposé depuis
  sa version 16.
- **BTS CRSA** : le **ch.17 (Filtrage et conversion)** est ajouté (`chapitres/bts-crsa.json`).
- **Ch.0 des trois BTS** redéposés : la phrase mnémotechnique après milli devient « Mille
  Microbes Nagent Profondément », et les feuilles d'exercices TSMA et ET n'ont plus de figure
  qui donne la réponse.
- Questionnaires et cartes régénérés par `construire.py` pour le BTS ET et le CRSA : les
  prérequis écrits à la main et les 51 cartes figées de l'ADM 1 sont conservés. **Les nouveaux
  chapitres (Cours 3, TP 3, ch.9, CRSA ch.17) n'ont pas encore de prérequis en ligne** : ils
  s'écrivent à la main dans `prerequis_et.py` et `prerequis_crsa.py`.
- Aucun corrigé n'est en ligne (vérifié).

**Le site** : 716 entrées, 508 PDF, 21 animations, 1151 questions, 933 cartes.


---

## Mise à jour du 25 septembre 2026 (v19)

- **Outils** : nouvelle animation `animations/latispro.html` (tutoriel LatisPro : acquérir,
  calculer, tracer, modéliser), déclarée comme `ou04` dans `chapitres/outils.json` et dans
  `ANIMATIONS["outils"]`, rubrique Mesure. Elle ne mentionne ni classe ni chapitre et sert donc
  à toutes les filières.
- **BTS ET, Cours 2** : PDF redéposés (flux signalé hors programme, ferromagnétisme et champ
  électrique ajoutés), bilan de 14 questions régénéré.
- **`construire.py`** : nouvelle fonction `sans_hors_programme()` — ce qui est dans un encadré
  `horsprogramme`, dans une méthode étiquetée `\horsprog` ou dans un paragraphe titré
  « (hors programme) » ne produit plus aucune carte de révision.
- **BTS CRSA, ch.3** : activité redéposée, avec les photos du calorimètre du labo.

## Mise à jour du 25 septembre 2026, suite (v20)

- Bilans redéposés et questionnaires en ligne régénérés pour le BTS ET (ch.0, TP 1, TP 2,
  Cours 1, Cours 3, ch.9), l'ADM 1 et le CRSA (ch.1, 4, 16, 17) : les bonnes réponses ne sont
  plus presque toutes en « b ».
- CRSA ch.3 : activité redéposée avec l'identification du calorimètre (Sordalab CALORIM2).

## Mise à jour du 25 septembre 2026, fin (v21)

- **Bilans 1re STI2D et BTS TSMA** : propositions remises dans l'ordre du papier (dont les lettres
  ont été redistribuées), PDF redéposés.
- **Explications sans lettres** : le site mélange les propositions à chaque tirage, donc une
  explication disant « la réponse a » ne voulait rien dire en ligne. Toutes les lettres des
  explications (bilans et prérequis, toutes filières) sont remplacées par le texte de la
  proposition : « la réponse « m²/s » est celle de la viscosité cinématique ». Nouveau module
  `outils/renvois.py`, appelé par `construire.py` et `construire_tsma.py` à chaque écriture.
- **ATTENTION `construire_tsma.py`** : il refabrique les cartes à partir du cours à compléter
  (9 cartes par chapitre) et écrase les 14 cartes enrichies. Après l'avoir lancé, remettre les
  cartes de la version précédente (c'est ce qui a été fait ici), ou relancer la chaîne
  d'enrichissement des cartes.

## Mise à jour du 25 septembre 2026 (v22) — CRSA ch.3

- Nouvelle activité 2 (transferts thermiques) et deux animations reprises du BTS ET, placées
  devant elle : `flux-thermique.html` et `rayonnement.html` (déclarées dans
  `ANIMATIONS["bts-crsa"]`, titres dans `TITRES_PARTICULIERS`). Cours, exercices, bilan
  redéposés ; questionnaire et cartes du chapitre régénérés.

## Mise à jour du 26 septembre 2026 (v23)

- 1re STI2D ch.3 et ch.5, BTS ET Cours 1 et TP 1, ADM 1, BTS CRSA ch.2 et ch.11 redéposés.
- BTS ET Cours 1 : activités renommées `a2_flux` et `a3_rayonnement` (liste blanche et
  animations de `filieres.py` suivent ; les anciens PDF `a2_rayonnement` et `a3_flux` sont retirés).


## Mise à jour du 27 septembre 2026 (v24)

- ADM 1 : nouveau symbole du disjoncteur magnétothermique — cours redéposé, paquet Anki
  (`docs/bts-et/adm01/symboles-anki.apkg`) et image de la carte en ligne
  (`entrainement/media/adm01/adm01-disj-3p.png`) remplacés.

## Mise à jour du 29 septembre 2026 (v25)

- **Tutoriel LatisPro** (`animations/latispro.html`) : nouvelle partie 5 « Capteur de pression »,
  cinq étapes — brancher le capteur et passer en mode **Pas à pas** avec **Entrée clavier** (nom h,
  unité m) ; acquérir point par point (F10, une profondeur tapée par point, Fin) ; tracer P = f(h)
  en style Points ; modéliser par une **droite affine** ; exploiter la pente (ρ = a/g ≈ 997 kg/m³)
  et l'ordonnée à l'origine (Patm). Bilan complété. Testé dans un navigateur : 18 étapes, aucune
  erreur de script.

## Mise à jour du 29 septembre 2026, suite (v26)

- **Outils** : nouvelle animation `calculatrice-puissances.html` (ou05, rubrique Calcul) — quatre
  calculatrices photographiées, cinq exercices joués touche par touche sur un écran simulé
  (notation scientifique, produit, piège de la division, puissances, affichage SCI), encadré
  « À retenir » propre à chaque modèle.
- **BTS TSMA ch.3** : deux animations placées devant les activités —
  `maquette-pression.html` (poste 2 de l'activité sur banc : trois pistons, valeurs des mesures
  réelles, saturation du capteur, presse hydraulique) et `eprouvette-pression.html` (partie huile
  de l'activité expérimentale). Activités redéposées.

## Mise à jour du 29 septembre 2026, fin (v27)

- **Tableur** (`animations/tableur.html`) : le tracé part désormais d'une **cellule vide** —
  graphique en nuage de points vide, clic droit, **Sélectionner des données**, **Ajouter**, puis
  la fenêtre « Modifier la série » remplie à la souris (nom : C1 ; valeurs X : B2:B9 ; valeurs Y :
  effacer « ={1} », puis C2:C9). 13 étapes au lieu de 11, testé sans erreur.
- **Calculatrices** : écrans aux couleurs de chaque modèle (blanc pour la TI-83 Premium CE,
  cristaux liquides gris-vert pour les trois autres) au lieu d'un écran noir.

## Mise à jour du 30 septembre 2026 (v28)

- **BTS ET — nouvelle rubrique « TP systèmes »**, à part de l'ADM 1 : ADM 2 (four industriel) et
  ADM 3 (banc départ-moteur). Chapitres `adm02` et `adm03` dans `chapitres/bts-et.json`, rubrique
  dans `FILIERES` et `RUBRIQUE_DU_CHAPITRE`, dossiers dans `DOSSIERS_ET` (`racine_site/ADM2`,
  `racine_site/ADM3`), sujets `tp_four` et `tp_banc` dans la liste blanche (les corrigés restent
  hors ligne), animations `four-industriel.html` et `banc-depart-moteur.html`.
- **Calculatrices** : la touche à presser est entourée sur la photo du clavier, à chaque étape
  (positions relevées pour les quatre modèles).

## Mise à jour du 30 septembre 2026, suite (v29)

- 1re STI2D : feuilles d'exercices redéposées (quinze exercices renouvelés dans onze chapitres).

## Mise à jour du 30 septembre 2026, fin (v30)

- **LatisPro** : deux tutoriels nettement séparés — boutons « Tutoriel 1 / Tutoriel 2 » au-dessus
  de la scène, liste des étapes en deux blocs titrés, numérotation et bilan propres à chacun
  (13 et 6 étapes), nom du fichier dans la barre de titre (TP_condensateur.ltp / TP_pression.ltp).
- **Calculatrices** : bouton « Touche précédente » et flèches ← → du clavier.
- **BTS CRSA ch.3** : animation « Le chauffage » ajoutée devant l'activité 1 ; titres des deux
  activités mis à jour ; PDF redéposés.

## Mise à jour du 1er octobre 2026 (v31)

- Quatre collections redéposées après l'audit : exercices renouvelés (CRSA, BTS ET, TSMA), QR codes
  dans les activités sur animation, renvois activités/exercices dans les cours, ch.9 STI2D au
  calorimètre Sordalab.

## Mise à jour du 1er octobre 2026, suite (v32)

- BTS TSMA : activités des ch.4, 5, 9, 10, 16 et 17 adaptées au matériel de Rostand, redéposées.

## Mise à jour du 1er octobre 2026, fin (v33)

- BTS CRSA : chapitre 18 « Transmission du signal » ajouté (documents, questionnaire et cartes de révision).

## Mise à jour du 2 octobre 2026 (v34)

- BTS ET : TP 4 « Le triphasé » ajouté (documents, questionnaire et cartes de révision).

## Mise à jour du 2 octobre 2026, suite (v35)

- BTS CRSA : chapitre 19 « Réponse des systèmes linéaires et résonance » ajouté (documents, questionnaire, cartes).

## Mise à jour du 2 octobre 2026, fin (v36)

- BTS CRSA : chapitre 20 « Systèmes asservis » et nouvelle animation `regulation.html` (correcteur PI, thermostat TOR).

## Mise à jour du 2 octobre 2026, fin (v37)

- BTS ET : TP 5 « Les transformateurs » ajouté (documents, questionnaire, cartes).

## Mise à jour du 2 octobre 2026, fin (v38)

- BTS ET : TP 6 « Le redressement » ajouté (documents, questionnaire, cartes).

## Mise à jour du 2 octobre 2026, fin (v39)

- BTS ET : TP 7 « Le régime non sinusoïdal » ajouté ; fil TP de 1re année complet.

## Mise à jour du 2 octobre 2026, nuit (v40)

- BTS ET : Cours 4 « Statique des fluides » (fil du collègue) ajouté, avec l animation de l éprouvette.
- Correctif des QR codes des activités au simulateur (BTS ET, TSMA) : PDF redéposés.

## Mise à jour du 2 octobre 2026, nuit (v41)

- BTS ET : Cours 5 « Mécanique en translation » (fil du collègue) et nouvelle animation `chariot-filoguide.html`.


---

## Mise à jour du 2 octobre 2026 (v42) — documents réservés aux élèves

**Ce qui change pour les élèves.** Sur la page d'une classe, un bandeau dit que les documents sont
réservés. Au premier document touché, le site demande le mot de passe de la classe ; il le vérifie
dans le navigateur, puis le document s'ouvre (dans un nouvel onglet ; téléchargé sur Android).
« Se souvenir sur cet appareil » évite de le retaper ; à décocher sur un ordinateur du lycée. Le
bouton *Fermer l'accès* efface la mémorisation. Les **animations, questionnaires, cartes et
outils restent libres**, sans mot de passe : ils servent à plusieurs classes et ne contiennent
rien de nominatif.

**Comment c'est protégé.** Ce n'est pas un simple masquage : chaque PDF (et le paquet Anki) est
chiffré en AES-256 avant d'être déposé. Le dépôt ne contient plus que des fichiers `.enc`
illisibles ; quelqu'un qui trouve l'adresse d'un document ou parcourt le dépôt GitHub n'obtient
rien sans le mot de passe. La clé est dérivée du mot de passe dans le navigateur de l'élève
(PBKDF2, 300 000 tours) ; le mot de passe n'est écrit nulle part dans le site. Aucun compte,
aucune adresse mail, rien d'envoyé : toujours aucune question RGPD.

**Limite à connaître.** C'est un mot de passe par classe. Un élève peut le donner à quelqu'un, et
on ne peut pas retirer l'accès d'un seul élève : on change le mot de passe de toute la classe
(une commande, voir plus bas). Chaque rentrée, en changer pour toutes les classes.

### Deux dossiers désormais

```
site-physique/          L'ATELIER. PDF en clair, scripts, catalogue. On y travaille,
                        on ne le publie plus.
site-en-ligne/          CE QUI PART SUR GITHUB. Fabriqué par outils/chiffrer.py.
NE_PAS_PUBLIER/
   mots_de_passe.json   les mots de passe, les sels et la clé de l'espace enseignant — SECRET
prive-atelier/          les documents de l'espace enseignant, EN CLAIR — jamais sur GitHub
```

`index.html` est le même dans les deux : dans l'atelier (pas de fichier `acces.js`), les PDF
s'ouvrent directement comme avant ; dans `site-en-ligne/`, `acces.js` active le verrou.

### Fabriquer la version en ligne

Après toute modification de l'atelier (nouveaux PDF, `publier.py`, etc.) :

```sh
python3 site-physique/outils/chiffrer.py site-physique site-en-ligne --cles NE_PAS_PUBLIER/mots_de_passe.json --prive prive-atelier
```

Un PDF inchangé redonne exactement le même `.enc` : GitHub Desktop ne montre comme modifiés que
les documents qui ont réellement changé. Le script s'arrête en erreur s'il reste un seul PDF en
clair dans une filière protégée.

### Changer un mot de passe

```sh
python3 site-physique/outils/chiffrer.py site-physique site-en-ligne --cles NE_PAS_PUBLIER/mots_de_passe.json --nouveau 1sti2d
python3 site-physique/outils/chiffrer.py ... --nouveau 1sti2d --mot "mon-choix-perso"
python3 site-physique/outils/chiffrer.py ... --nouveau 1sti2d bts-crsa bts-et bts-tsma   # rentrée
```

Tous les documents de la filière sont rechiffrés (tout est à renvoyer sur GitHub), l'ancien mot de
passe ne marche plus, et les téléphones qui l'avaient mémorisé le redemandent.

Rendre une filière publique : supprimer son bloc dans `mots_de_passe.json` et refabriquer.
Les BTS ET scolaires et apprentis partagent le mot de passe `bts-et` ; les deux années de CRSA et
de TSMA aussi.

### Une fois pour toutes : effacer l'historique GitHub

Jusqu'à la v41, les PDF ont été publiés **en clair**. Ils restent dans l'**historique** du dépôt :
n'importe qui peut remonter un ancien commit et les télécharger. Déposer les `.enc` par-dessus ne
suffit pas ; il faut repartir d'un dépôt neuf, à la même adresse (les QR codes continuent de
marcher) :

1. github.com → dépôt `physique` → **Settings** → tout en bas, **Delete this repository**.
2. Sur le PC, dans GitHub Desktop : *Repository → Remove* sur `physique`, puis renommer le dossier
   `Documents\GitHub\physique` en `physique-ancien` (à supprimer plus tard).
3. Créer un dossier vide `Documents\GitHub\physique` et y copier **le contenu** de
   `site-en-ligne/` (pas le dossier lui-même : `index.html` doit être à la racine).
4. GitHub Desktop : *File → Add local repository* → ce dossier → *create a repository* →
   *Create repository*, puis **Publish repository** sur le compte `physique-neruda`, en
   **décochant « Keep this code private »** (GitHub Pages gratuit exige un dépôt public).
5. github.com → nouveau dépôt `physique` → **Settings → Pages** → *Deploy from a branch*,
   `main`, `/ (root)` → *Save*. Le site revient à la même adresse en une ou deux minutes.

Ce qui a déjà été téléchargé ou archivé par des tiers avant aujourd'hui ne peut évidemment pas
être rappelé.

### Ensuite, à chaque mise à jour

Copier le contenu de `site-en-ligne/` dans `Documents\GitHub\physique` (remplacer les fichiers),
puis dans GitHub Desktop *Commit to main* et *Push origin*. Ne jamais y copier `site-physique/`
ni `NE_PAS_PUBLIER/`.

**Au passage** : dans la liste des documents, le titre et la description d'un document
s'affichaient collés sur une seule ligne (« PrérequisÀ faire avant… ») ; ils sont de nouveau
sur deux lignes.


### Le code enseignant

Un **code enseignant** ouvre d'un coup les documents des quatre classes. Il se tape dans la même
fenêtre que le mot de passe de classe, sur n'importe quelle page de classe ; le site essaie
d'abord le mot de passe de la classe, puis le code enseignant. Il est rangé dans
`NE_PAS_PUBLIER/mots_de_passe.json` (bloc `_prof`) et n'est écrit nulle part dans le site :
`acces.js` ne contient que les clés des classes, chiffrées avec lui.

Changer de code : `chiffrer.py … --nouveau prof` (ou `--nouveau prof --mot "…"`). Changer le mot
de passe d'une classe ne change pas le code enseignant, qui continue d'ouvrir cette classe.

À ne saisir que sur ses propres appareils, ou en décochant « Se souvenir sur cet appareil » :
un poste du lycée qui l'a mémorisé reste ouvert sur toutes les classes jusqu'à *Fermer l'accès*
(à faire classe par classe).


### Les corrigés des séances

Une rubrique **Corrigés** apparaît dans chaque classe. Elle porte, chapitre par chapitre, un
**corrigé des séances** : la correction des seuls exercices et parties d'activité déjà traités en
classe, d'après le classeur de pointage (cahier de textes v16 du 1er octobre). Ce qui est pointé
« à finir », ou donné pour une échéance pas encore passée, n'y figure pas.

C'est la seule exception au verrou « corrige » de `publier.py` (`AUTORISES`), et elle ne tient que
parce que les documents des classes sont chiffrés : `chiffrer.py` s'arrête net s'il trouve un
corrigé en clair dans une filière non protégée. Les corrigés complets, eux, ne sortent toujours pas.

Les numéros d'exercices sont ceux de la feuille élève (un corrigé qui saute de l'exercice 4 au 6
est normal). Le document est l'union des classes d'une même filière (CRSA 1re et 2e année
ensemble, scolaires et apprentis ensemble en BTS ET) ; les versions par classe sont livrées à part.
À refaire au fil de l'avancement, à partir du classeur à jour.


### L'espace enseignant caché

Une page **invisible** : `…/physique/#prive`. Aucun lien n'y mène depuis l'accueil pour un élève ;
une carte « Espace enseignant » n'apparaît que sur l'appareil où le code enseignant a été saisi.

Elle contient ce qui ne doit jamais tomber entre les mains des étudiants, rangé par filière et
par chapitre : **corrigés complets** (exercices, activités, CCF, devoirs E32, oraux, sujets E4,
situations U51, diagnostics), **tests et leurs corrigés** (STI2D), et les **quatre livres du
professeur**. Les sources sont dans `prive-atelier/`, à côté du site et pas dedans :

```
prive-atelier/<filière>/<chapitre>/<document>.pdf     exemple : 1sti2d/ch02/test_corrige.pdf
prive-atelier/livres/Livre_professeur_<classe>.pdf
```

Protection : clé aléatoire à part (bloc `_prive` de `mots_de_passe.json`), que seul le code
enseignant déverrouille — un mot de passe de classe n'y donne jamais accès. Dans le dépôt, tout est
dans `prive/` sous des **noms opaques** (`3fa9c1….enc`), et la liste des documents (`index.enc`)
est chiffrée elle aussi : quelqu'un qui parcourt le dépôt ne voit ni les titres, ni les chapitres.

Le dossier se reconstruit à partir des collections et des livres du professeur avec
`outils/preparer_prive.py` (voir son en-tête). Mettre à jour : remplacer ou ajouter des PDF
dans `prive-atelier/`, puis relancer `chiffrer.py`
avec `--prive prive-atelier`. Un document inchangé garde le même fichier chiffré.

Rien n'empêche de mettre un sujet d'examen ici, mais le plus sûr pour une épreuve à venir reste
de ne pas le mettre en ligne du tout.

### Ce que voient les élèves (décision du 3 octobre 2026)

Avec le mot de passe de la classe : **prérequis, cours complet, cours à compléter, exercices,
bilan, activités** (expérimentales, documentaires, sur animation, TP) et **corrigés des séances**.
Sans mot de passe, comme avant : **animations, questionnaires et cartes de révision**.

Ne sont plus publiés côté élèves : les énoncés de **situation type CCF, devoir type E32, oral,
sujet type E4** (sujet, dossier ressources, documents réponses) et **situation U51**. Ils sont
commentés dans `outils/filieres.py` (« CACHÉ ») et rangés dans l'espace enseignant, à côté de
leurs corrigés. `preparer_prive.py` les y met automatiquement.

**Dans le dossier du dépôt**, supprimer les anciens fichiers de ces énoncés s'ils y sont encore :
dans l'Explorateur, rechercher `ccf.pdf.enc`, `devoir.pdf.enc`, `oral.pdf.enc`, `u51.pdf.enc`,
`e4_*.pdf.enc` dans `docs\` et les supprimer. (Ils ont été vidés, donc illisibles, mais autant
qu'ils disparaissent du dépôt.)

## Mise à jour du 3 octobre 2026 (v43) — BTS ET : chapitres cachés et ADM 4 à 7

### Chapitres retirés du site élèves

`outils/filieres.py` porte désormais une liste `CHAPITRES_CACHES`. Un chapitre qui y
figure disparaît entièrement du catalogue (PDF, animations, QCM, cartes) et
`publier.py --deposer` ne le redépose plus. Pour le BTS ET :

- `c04` Statique des fluides et `c05` Mécanique en translation : cours assurés par le collègue ;
- `ch09` Distribution et qualité de l'énergie électrique.

Leurs PDF sont rangés dans l'espace enseignant (`prive-atelier/bts-et/<ch>/`), où ils
restent accessibles avec le code enseignant. Pour en remettre un en ligne : le retirer
de la liste, remettre ses PDF dans `docs/bts-et/<ch>/`, relancer `publier.py` puis
`chiffrer.py`. Les animations de ces chapitres restent dans `animations/` (elles servent
aussi en CRSA ou en TSMA) mais ne sont plus listées en BTS ET.

### ADM 4 à 7 ajoutés (rubrique « TP systèmes »)

| Chapitre | Sujet (mot de passe de la classe) | Animation (libre) |
|---|---|---|
| adm04 Centrale de pompage | `tp_piscine.pdf` (archive v2) | `animations/centrale-pompage.html` |
| adm05 Système de levage | `tp_levage.pdf` (v1) | `animations/systeme-levage.html` |
| adm06 Éclairage scénique Ermalux | `tp_ermalux.pdf` (v1) | **non publiée** : autorisation de diffusion du schéma ERM à vérifier |
| adm07 Harmocem | `tp_harmocem.pdf` (v1) | `animations/harmocem.html` |

Les corrigés des sept TP ADM (ADM 1 : activité, exercices, situation U51 et son
corrigé ; ADM 2 à 7 : corrigé du TP) sont dans l'espace enseignant.
Les PDF de l'ADM 1 déjà en ligne (compilés le 1er octobre) sont plus récents que
l'archive v21 : ils n'ont pas été remplacés.

### Les cartes de révision sont écrites à la main (octobre 2026)

Les cartes fabriquées par `outils/cartes.py` restaient trop automatiques : titres d'encadrés
transformés en questions (« Qu'appelle-t-on « Deux protections complémentaires » ? »), trous
pris au hasard dans le cours, questions du bilan recopiées sans leurs choix, formules tronquées.
Elles ne collaient pas aux attendus du chapitre.

Elles sont désormais **écrites à la main**, chapitre par chapitre, dans
`outils/cartes_manuelles/` (un fichier par filière : `sti2d.py`, `crsa.py`, `tsma.py`, `et.py`).
Chaque carte est rattachée au paragraphe du cours dont elle vient, et elle est de l'un des deux
types :

- **Notion** : une définition, une formule avec ses unités, un ordre de grandeur, une
  distinction à ne pas confondre ;
- **Méthode** : un savoir-faire, les étapes dans l'ordre, sur l'exemple du cours.

Tous les chapitres sont couverts (3 octobre 2026) : 1re STI2D ch. 0 à 18 (305 cartes),
BTS CRSA ch. 0 à 20 (324), BTS TSMA ch. 0 à 17 (284), BTS ET ch. 0, cours 1 à 3 et TP 1 à 7
(236) — **1149 cartes**. Restent hors de ce dispositif, côté BTS ET : les cours 4 et 5 (cours
du collègue, masqués sur le site), le chapitre 9 (masqué) et ADM 1 (paquet Anki déjà écrit à
la main, voir plus haut).

```
python3 outils/injecter_cartes_manuelles.py entrainement
```

recopie ces cartes dans les fichiers de données et pose `cartes_figees: true`.
`construire.py`, `construire_tsma.py`, `enrichir_cartes.py`, `completer_cartes.py` et
`refaire_cartes.py` ne touchent plus à un chapitre dont les cartes sont écrites à la main.
Un chapitre ajouté plus tard garde ses cartes automatiques tant qu'on ne lui a pas écrit
ses cartes dans `outils/cartes_manuelles/`.

## Mise à jour du 7 octobre 2026 (v44) — calculatrice refaite

- **Calculatrices** (`animations/calculatrice-puissances.html`) : animation refaite sur le modèle des
  émulateurs en ligne. Les photos sont remplacées par quatre claviers **redessinés et cliquables**
  (TI-83 Premium CE, Casio Graph 35+E II, Casio fx-92+ Spéciale Collège et **NumWorks**, qui remplace
  la TI-83 Plus). L'écran calcule vraiment : affichage naturel (cases d'exposant, fractions, racines,
  ×10ˣ de la fx-92), priorités, résultat précédent, erreurs propres à chaque modèle, fractions
  exactes et S⇔D des Casio, fraction ≈ décimal de la NumWorks, réglages NORMAL/SCI, Norm 1/2, Sci,
  degrés/radians atteints par les **vrais menus** (mode, SET UP, CONFIG, Paramètres).
- Deux modes : **Exercices guidés** (l'élève appuie lui-même ; touche refusée si ce n'est pas la
  bonne, touche attendue entourée, consigne pas à pas, « Tout jouer », bilan d'erreurs) et
  **Calculatrice libre** (journal des touches pressées). Clavier de l'ordinateur accepté.
- Six exercices : 4,5 × 10⁻³ ; produit ; piège de la division (saisie fautive puis bonne) ;
  puissances ; affichage scientifique ; **nouveau** : degrés ou radians (sin 30°).
- Fichier passé de 200 ko (photos) à environ 70 ko. Testé dans Chromium : les six exercices
  aboutissent sur les quatre modèles, aucune erreur de script, pas de défilement horizontal
  sur téléphone. Fiche du catalogue mise à jour.

## Mise à jour du 7 octobre 2026, suite (v45) — calculatrice : zoom et statistiques

- **Écran agrandi** : bouton « Agrandir l'écran » sous la calculatrice (ou clic sur l'écran). Une
  copie agrandie de l'écran, tenue à jour en direct, s'affiche au-dessus des exercices ; sur
  téléphone, elle reste collée en haut pendant qu'on fait défiler le clavier, avec la consigne
  de l'étape en dessous.
- **Statistiques à une variable** simulées sur les quatre modèles, par les vrais chemins :
  TI-83 Premium CE ([stats] 1:Modifier…, éditeur L1-L3, puis CALC 1:Stats 1-Var, Calculer) ;
  Graph 35+E II ([MENU] 2 STAT, List 1-4, [F2] CALC, [F1] 1-VAR) ; fx-92+ Spéciale Collège
  ([MENU] 2 Statistiques, 1 1-Variable, colonne x, [OPTN] 2 Calcul 1-variable) ; NumWorks
  (application Statistiques, colonne V1, onglet Stats). Résultats : moyenne, sommes, σ et s,
  n, min, quartiles, médiane, max (Q1/Q3 par demi-séries sur TI et Casio, définition française
  sur NumWorks). Histogrammes et boîtes non simulés.
- **Exercice guidé 7** : cinq mesures d'une résistance (98, 102, 100, 101, 99 Ω) → x̄ = 100 Ω,
  σ ≈ 1,41 Ω, s ≈ 1,58 Ω ; l'explication rappelle que l'incertitude-type se calcule avec
  l'écart-type expérimental s (u = s/√n).
- Testé dans Chromium : les sept exercices aboutissent sur les quatre modèles, aucune erreur de
  script, pas de défilement horizontal sur téléphone. Fiche du catalogue mise à jour.

## Mise à jour du 7 octobre 2026, fin (v46) — LatisPro : trois tutoriels de plus

`animations/latispro.html` passe de deux à **cinq tutoriels**, construits d'après les vidéos et les
notices rangées dans `2026-2027\latispro` :

- **Tutoriel 1** : menu clic droit du graphe complété d'après les captures (Loupe, Repère orthonormé,
  Créer Flèche / Droite / Commentaire, Copie Graphique, Méthode des tangentes…) ; nouvelle étape
  « Annoter le graphe » (commentaire τ = … ms) ; la courbe modèle reste affichée après fermeture
  de la modélisation ; menu Traitements ▸ Calculs spécifiques ▸ Dérivée.
- **Tutoriel 3 — Signal périodique (GBF)**, 8 étapes : premier essai avec les réglages par défaut
  (200 points sur 20 ms, sinusoïde méconnaissable), réglage de la durée et du nombre de points,
  case Périodique, mode permanent qui « saute » puis déclenchement (EA1, montant, 0 V), arrêt par
  Échap, période au réticule sur trois périodes (T = 0,952 ms, f ≈ 1 050 Hz), commentaire.
- **Tutoriel 4 — Tableau saisi à la main**, 8 étapes : Variables ▸ Nouvelle (V en mL, P en hPa),
  saisie, tracé P = f(V) par glisser-déposer, linéarisation `=1/V`, P = f(1/V), modèle linéaire
  (P × V constant, loi de Mariotte), équation affichée en commentaire.
- **Tutoriel 5 — Pointage vidéo**, 9 étapes : module AVI, ouverture du film, origine, étalon d'un
  mètre, sens des axes, pointage manuel de 23 images avec zoom, transfert vers Mouvement X / Y et
  renommage, trajectoire y = f(x), dérivées (vx constante, vy de pente ≈ −9,8 m/s²), feuille de
  calcul (v, Ec, Epp, Em quasi constante), modèle parabole et retour à g et à l'angle de tir.
- Testé dans Chromium : les 45 étapes se jouent sans erreur de script. Fiche du catalogue mise à jour.

## Mise à jour du 8 octobre 2026 (v47) — LatisPro : graphismes d'après les captures

- **Habillage** refait d'après les captures d'écran et les photos de LatisPro / Sysam-SP5 : barres
  de titre et bandeaux gris-bleu, boutons arrondis en relief (enfoncés quand ils sont actifs),
  boutons « Courbes » et « Acquisition » de la boîte de paramètres, onglets Temporelle / Pas à pas /
  XY, cases rondes pour Périodique et Mode permanent, barre d'outils à boutons carrés.
- **Entrées nommées EA0 à EA7** partout (tutoriels 1, 2 et 3).
- **Tutoriel 1, déclenchement** : la section « Entrées Analogiques » est repliée par son bouton ⌃
  pour faire apparaître Seuil et Pré-Trig, qui étaient cachés en bas de la boîte (même geste dans
  le tutoriel 3). Modèle de charge affiché sous son vrai nom A*(1-exp(-(X-Δ)/τ))+V0, avec Δ et V0.
- **Tutoriel 2 refait** dans la vraie présentation du mode pas à pas : capteur reconnu sur EA0
  (bouton « Pression »), onglet Pas à pas avec Abscisse Clavier / Titrage / Abscisse Instrumentée /
  Ordonnée Clavier, unité choisie dans la liste (Mètre (m)), fenêtre **Acquisition pas à pas**
  (mesure en direct, Point Acquis, Trier par abscisse croissante, bouton Acquérir), boîte
  Propriétés avec la liste des styles (Trait, Croix, Histogramme…), modélisation affine développée.
- Testé dans Chromium : les 45 étapes se jouent sans erreur de script.

## Mise à jour du 8 octobre 2026, suite (v48) — LatisPro : générateur intégré et barre d'outils

- **Troisième bouton de la boîte de paramètres rétabli** (coche verte, paramétrage de l'émission),
  dans tous les tutoriels.
- **Tutoriel 6 — Générateur intégré (Sysam-SP5)**, 6 étapes : ouvrir le paramétrage de l'émission,
  Sortie 1 (SA1) / Sortie 2 (SA2), Sortie active, forme d'onde (Sinus, Rampe, Triangle, Constante,
  Carré, Courbes), Minimum / Maximum / Fréquence, Mode GBF (émission permanente) ou émission
  synchronisée à l'acquisition (bouton Emettre) ; câblage SA1 → EA0 sur la face avant ;
  visualisation de la sinusoïde ; arrêt en décochant Sortie active. Rappel : la Sysam-Campus du
  lycée Rostand n'a pas de sortie, on y utilise un GBF séparé (tutoriel 3).
- **Barre d'outils de la version actuelle** : le bouton Acquisition est le bouton « lecteur » bleu ▶,
  suivi du haut-parleur ; icônes redessinées dans l'ordre Nouveau, Ouvrir, Enregistrer, Imprimer,
  AVI, Tableur, Modélisation, Mesures auto, Acquisition, Son, Afficheurs, Notes, Mosaïque, Aide,
  avec leur infobulle.
- **Boîte de paramètres** redessinée d'après la capture de la version actuelle : bandeaux clairs,
  boutons EA0… rectangulaires (bleu clair une fois activés), cases à cocher carrées pour
  Périodique et Mode permanent.
- Testé dans Chromium : les 51 étapes se jouent sans erreur de script.

## Mise à jour du 8 octobre 2026, fin (v49) — calculatrices redessinées d'après les photos

`animations/calculatrice-puissances.html` : les quatre calculatrices sont redessinées d'après les
photos rangées dans `2026-2027\calculatrice`.

- **TI-83 Premium CE Edition Python** : tête noire autour de l'écran, corps blanc, chiffres gris
  foncé, touche 2nde bleue, alpha verte, rangée f(x) / fenêtre / zoom / trace / graphe, pavé
  rond, inscription « TEXAS INSTRUMENTS ». Touches **trig** (menu sin, cos, tan et réciproques),
  **résol** et **n/d** à leur vraie place ; x⁻¹ = 2nde matrice, π = 2nde trig.
- **Casio Graph 35+E** (et non plus « 35+E II ») : corps blanc bordé de bleu-vert, touches F1…F6
  en goutte, pavé REPLAY ovale, SHIFT jaune, ALPHA orange, EXE violette, DEL / AC gris, touche
  **F↔D** pour passer d'une fraction à son écriture décimale.
- **Casio fx-92 Collège** (et non plus « fx-92+ Spéciale Collège ») : corps vert d'eau, touches
  rondes blanches, SECONDE bleue, bloc ACCUEIL / CONFIG / retour / OK / VARIABLE / FONCTION /
  CATALOG / OUTILS, touches Rép et **FORMAT**. Valeur décimale : SECONDE puis EXE (≈), ou
  FORMAT ▸ Décimal ; nombre négatif : SECONDE puis − ; statistiques par ACCUEIL puis OUTILS.
- **NumWorks** : touches blanches arrondies avec leurs fonctions secondes écrites dedans, touche
  maison orange, OK et retour ronds, touche **Ans**.
- Les exercices guidés suivent les nouvelles touches (textes « À retenir » mis à jour).
- Testé dans Chromium : les 28 exercices se jouent sans erreur sur les quatre modèles ; pas de
  défilement horizontal sur un téléphone (375 px).


## Fusion du 8 octobre 2026 (v50) — deux versions du site réunies

Deux sessions de travail avaient fait évoluer le site en parallèle depuis le 2 octobre (v41) :
l'une avec le chiffrement, l'espace enseignant, les ADM 4 à 7, les cartes écrites à la main, la
calculatrice et LatisPro (v42 à v49 ci-dessus) ; l'autre avec le Cours 6 du BTS ET, les renvois
complétés, les corrections du ch.2 CRSA et le nouveau devoir E32 du ch.1 CRSA. Le 8 octobre, la
seconde a été envoyée sur GitHub par erreur, en clair, par-dessus la première. Cette v50 repart de
la version chiffrée du 3 octobre et y réunit tout, **en gardant pour chaque document la version la
plus récente** (date de compilation du PDF) :

- 221 documents mis à jour ou ajoutés : CRSA ch.1 (devoir et corrigé), ch.2 (cours, exercices,
  activité, devoir, CCF, oral et corrigés), ch.20 ; BTS ET TP 4 à 7, ADM 1, Cours 4 et 5 ; tests et
  corrigés de 1re STI2D recompilés le 1er octobre. Aucun document de cette version n'était plus
  ancien que celui en ligne.
- BTS ET Cours 6 « Énergie, rayonnement, photométrie » : comme les Cours 4 et 5 (cours du collègue),
  il est rangé dans l'espace enseignant et ajouté à `CHAPITRES_CACHES`. Ses deux animations
  (`corps-chaud.html`, `eclairage-atelier.html`) sont dans `animations/`, non listées.
- Calculatrice (v49, claviers redessinés d'après les photos) et LatisPro (v48, six tutoriels).
- Livre du professeur BTS ET : version v11.
- Le nombre de cartes affiché dans le catalogue est désormais le vrai nombre de cartes écrites à la
  main (il restait à 14 partout).
- Sujets d'évaluation (CCF, devoirs E32, oraux, E4, U51) et corrigés : toujours dans l'espace
  enseignant chiffré uniquement.
