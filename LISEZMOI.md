# Questionnaires et cartes de révision — 1re STI2D

Trois pages web et un jeu de fichiers de données, à déposer à côté des
animations déjà en ligne. Aucun compte, aucune statistique, aucun appel vers
l'extérieur : tout se passe dans le navigateur de l'étudiant.

---

## 1. Ce qu'il y a dans l'archive

```
site-physique/ le site complet, prêt à être mis en ligne tel quel
  index.html          modifié : gère les types "qcm" et "cartes"
  catalogue.js        modifié : 53 entrées ajoutées pour la 1re STI2D
  LISEZMOI.md         modifié : nouveau §7 sur l'entraînement
  docs/1sti2d/ch00/ … ch18/   les 114 PDF publiables, par chapitre
  entrainement/       nouveau dossier
    qcm.html            questionnaire (prérequis ou bilan), tous chapitres
    cartes.html         cartes de révision, tous chapitres
    qcm-ch00.js …       un fichier de données par chapitre (19 fichiers)
  (le reste du site est inchangé)

outils/        la chaîne de fabrication, à garder de ton côté
  tex2html.py         conversion LaTeX → HTML (siunitx, mhchem, maths, tableaux)
  extraire_qcm.py     lit les .tex de prérequis et de bilan
  extraire_cartes.py  lit les encadrés du cours, \trou et \troubloc
  construire.py       assemble le fichier qcm-<filière>-chXX.js
  filieres.py         DESCRIPTION DES FILIÈRES — le fichier à modifier
  publier.py          dépose les PDF et réécrit le bloc de catalogue
  verifier.py         contrôle de qualité de la conversion

cartes/        les paquets de cartes, relus à la main
  cartes-1sti2d-ch16.json   le seul terminé pour l'instant

chapitres/     les titres de chapitre, un fichier par filière
  1sti2d.json         régénéré depuis les sources LaTeX
  bts-et.json         écrit à la main
```

## 2. Comment ça marche

Les adresses portent le chapitre en paramètre :

- `entrainement/qcm.html?ch=16&type=bilan`
- `entrainement/qcm.html?ch=16&type=prerequis`
- `entrainement/cartes.html?ch=16`

La page charge alors `qcm-1sti2d-ch16.js`. Ajouter un chapitre, c'est déposer un
fichier de données de plus : les trois pages ne changent jamais.

Les liens sont déjà dans `catalogue.js` : **1re STI2D → S'entraîner**.

## 3. Mettre à jour après une correction du LaTeX

Le LaTeX reste la seule source. Les questions ne sont écrites nulle part
ailleurs : elles sont relues dans les `.tex` à chaque fabrication.

```
python3 outils/construire.py <racine_collection> 16 site-physique/entrainement/ 1sti2d
```

Corrigé une faute dans `ch16_bilan.tex` ? Relancer cette commande met le site à
jour. Il n'y a pas de deuxième version des questions à maintenir.

Puis déposer les PDF et remettre le catalogue en accord avec ce qui existe :

```
python3 outils/publier.py site-physique                              # catalogue seul
python3 outils/publier.py site-physique --deposer 1sti2d collection  # + les PDF
```

La première forme ne lit que ce qui est déjà dans le site et vaut pour toutes
les filières, même celles dont les sources ne sont pas sur la machine. La
seconde y ajoute la copie des PDF depuis une collection LaTeX. Dans les deux
cas, seul le bloc de `catalogue.js` encadré par `>>> bloc genere` et
`<<< fin du bloc genere` est réécrit ; tout ce que tu écris ailleurs est
laissé intact.

Les entrées sont déduites des fichiers réellement présents : un chapitre dont
le paquet de cartes n'est pas encore relu n'obtient pas de bouton « Cartes »,
et il en obtient un dès que tu as écrit assez de rectos. Le lancer deux fois
de suite ne change rien.

**Ce qui n'est jamais publié.** Le dépôt est public. Le script travaille avec
une liste blanche — prérequis, activité, cours à compléter, cours complet,
exercices, bilan — et un second verrou refuse tout nom contenant « corrigé »
ou « test », même s'il venait à être ajouté par erreur à la liste blanche.
Sur les 190 PDF de la collection, 114 sont publiés et 76 restent de côté.

Pour toute la collection d'un coup :

```
for n in 00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18; do
  python3 outils/construire.py collection $n site-physique/entrainement/ 1sti2d
done
python3 outils/verifier.py collection cartes
python3 outils/publier.py site-physique --deposer 1sti2d collection
```

## 4. Contrôler la conversion

```
python3 outils/verifier.py <racine_collection> cartes
```

Quatre contrôles, dont trois sont nés d'erreurs réellement rencontrées.

**Les résidus** : du LaTeX arrivé tel quel sous les yeux d'un étudiant.

**Les effacements silencieux**, de loin le plus important. Le filet de
sécurité de la conversion supprime toute commande qu'il ne sait pas rendre,
sans laisser la moindre trace. C'est ainsi que `\cos`, `\sin` et `\tan` ont
disparu d'un QCM du chapitre 8, où trois propositions devenaient du coup
strictement identiques, et que le `\sqrt` de « racine de 44,8 » s'est évaporé
en laissant « 44,8 ». Le script liste ce qui a été effacé ; tout nom inattendu
est à examiner.

**Les propositions identiques** : deux réponses au choix qui, une fois
converties, s'écrivent pareil. La casse compte, `m/M` et `M/m` sont bien deux
propositions différentes.

**Les cartes non relues** : aucun recto ne doit rester marqué `A RELIRE`.

À lancer après chaque fabrication, et surtout après toute modification de
`tex2html.py`.

---

## 5. Les cartes : ce qui est automatique et ce qui ne l'est pas

Le script lit les encadrés du cours — `definition`, `aretenir`, `attention`,
`essentiel`, `\formulecle` — et les commandes `\trou{}`.

- Les cartes issues de `\trou{}` sortent **finies**. Le trou marque déjà ce
  que tu as choisi de faire retrouver dans le cours à compléter : c'est
  exactement une carte recto-verso.
- Pour les autres encadrés, le **verso** est extrait automatiquement mais le
  **recto** est seulement proposé sous la forme `A RELIRE : <titre>`.
  « Définition : Onde » n'est pas encore une question de carte.

À la première fabrication d'un chapitre, le script dépose un squelette dans
`cartes/cartes-<filière>-chXX.json`. Tu réécris les rectos, tu supprimes ce qui ne mérite
pas une carte, et tu relances : le fichier relu est alors utilisé tel quel et ne
sera plus jamais écrasé.

**Une carte dont le recto porte encore `A RELIRE` n'est pas publiée.** Un
chapitre de moins de cinq cartes prêtes ne l'est pas non plus — son bouton
n'apparaît simplement pas dans le catalogue. Rien d'inachevé ne peut arriver sous
les yeux d'un étudiant par distraction.

## 6. Mise en ligne

Le dossier `site-physique/` est le site entier, à jour. Trois fichiers ont
changé — `index.html`, `catalogue.js`, `LISEZMOI.md` — et un dossier est
nouveau, `entrainement/`. Sur GitHub : *Add file → Upload files*, on dépose ces
quatre éléments, puis *Commit changes*. Les fichiers de même nom sont remplacés,
le reste du site n'est pas touché.

Avant d'envoyer, on peut tout essayer en local : ouvrir `site-physique/index.html`
dans un navigateur, aller dans **1re STI2D → S'entraîner**.

## 7. Ce qui a été modifié dans le site

- `index.html` : la fonction `carteItem` reposait sur un test à deux valeurs
  (animation ou PDF). Elle utilise maintenant une petite table `TYPES`, ce qui
  permet d'ajouter un type sans retoucher le rendu. Un type inconnu retombe sur
  « pdf » : une faute de frappe dans le catalogue ne peut pas casser la page.
  Le compte affiché sur l'accueil distingue documents, animations et
  entraînements.
- `catalogue.js` : la filière `1sti2d` gagne une rubrique « S'entraîner », et
  53 entrées sont ajoutées à la fin de `DOCUMENTS`. Rien n'a été retiré.

## 8. Ajouter une filière

Le dispositif est le même partout. Pour brancher un BTS :

1. décrire la filière dans `outils/filieres.py` — ses rubriques, la liste
   blanche de ses types de documents, ses animations éventuelles ;
2. nommer ses chapitres dans `chapitres/<filière>.json` ;
3. fabriquer les questionnaires chapitre par chapitre avec `construire.py`,
   en passant l'identifiant de filière en quatrième argument ;
4. lancer `publier.py`.

Les pages `qcm.html` et `cartes.html` ne changent pas : elles servent déjà
toutes les filières. Le BTS ET est déjà décrit et ses documents rangés par
chapitre ; il ne lui manque que ses questionnaires.

---

## 9. Ce qui reste à faire

- Écrire les rectos des cartes des 18 autres chapitres.
- Ajouter un renvoi au cours sur les explications des QCM : le champ `renvoi`
  est déjà géré par la page, mais les corrigés LaTeX ne portent aucun numéro de
  paragraphe, donc rien ne peut être déduit automatiquement.
- Fabriquer les questionnaires des trois BTS : il faut leurs sources LaTeX.
- Compléter `chapitres/bts-et.json` au fil des chapitres écrits.
