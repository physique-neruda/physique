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
  - **capacités** : le passage L ↔ m³ par le seul pont à retenir, `1 L = 1 dm³`, le cube de
    10 cm de côté ;
  - **unités composées** (m/s, L/min, g/cm³) : l'unité se lit à voix haute — « nombre de
    mètres pour **une seule** seconde » — s'écrit en fraction, et on convertit le haut, puis
    le bas, en rappelant qu'une puissance de dix qui remonte du dénominateur change de signe.

  Résultats en écriture scientifique, saisie acceptant `2,5 × 10^3` comme `2,5e3`, et dix
  conversions au hasard pour s'entraîner.
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
