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
   qcm-chXX.js             un fichier de données par chapitre
calorimetre.html           \
rayonnement.html            > redirections de compatibilité, à laisser
flux-thermique.html        /
docs/
   bts-et/                 les PDF du BTS Électrotechnique
   bts-crsa/               (à créer quand il y aura des documents)
   bts-tsma/
   1sti2d/
```

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

## 7. Les questionnaires et les cartes de révision

Le dossier `entrainement/` ne contient que **deux pages** : `qcm.html` et `cartes.html`. Elles
servent tous les chapitres, de toutes les filières. Le chapitre est passé dans l'adresse :

```
entrainement/qcm.html?ch=16&type=prerequis
entrainement/qcm.html?ch=16&type=bilan
entrainement/cartes.html?ch=16
```

La page va alors lire `entrainement/qcm-ch16.js`, qui contient les questions, les bonnes réponses,
les explications et les cartes. **Ajouter un chapitre, c'est déposer un fichier de données de plus** ;
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
  fichier: "entrainement/qcm.html?ch=16&type=bilan",
  description: "12 questions sur tout le chapitre."
},
```

Rien n'est enregistré ni envoyé : les réponses restent dans le navigateur de l'étudiant. Il n'y a
donc aucun moyen de savoir qui a travaillé — c'est le prix du dispositif sans compte, et la raison
pour laquelle il ne pose aucune question de données personnelles.

---

## 8. Créer une animation

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

## 9. Points d'attention

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
