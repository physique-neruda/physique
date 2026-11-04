# Espace prof — outils du professeur (v62, 3 novembre 2026)

Adresse : `https://physique-neruda.github.io/physique/prof/` (lien dans l'espace enseignant, `#prive`, et dans
« Mon espace » quand on est connecté avec le compte `prof`). Rien n'y est lisible sans les deux clés.

## Les deux clés

1. **Code enseignant** (celui de l'espace enseignant) : il donne, grâce à `acces.js`, la clé de l'espace
   enseignant. Elle déchiffre sur l'appareil la liste des élèves de l'année et chiffre ou
   déchiffre tout ce que la base ne garde que pour le professeur.
2. **Compte professeur** du site (`prof`, mot de passe dans Bitwarden, revendication `admin`) : il ouvre la base
   Firestore.

Chaque clé se saisit une fois par appareil (« Garder sur cet appareil », « Rester connecté » : à décocher sur
un ordinateur partagé). « Refermer le code enseignant » et « Se déconnecter » sont sur la page d'accueil de
l'espace prof.

## Pages

| Page | Rôle |
|---|---|
| `index.html` + `accueil.js` | accès (les deux clés) et menu |
| `evaluer.html` + `evaluer.js` | évaluation U51 par compétences : reprise des applications « Évaluation U51 » du groupe 1 et d'ETA1 (tuiles photo, grille par élève ou par groupe, pointage par indicateur, binômes et trinômes, bilan, copie pour le registre Excel), avec en plus le choix de la classe, la gestion des épreuves et la publication aux élèves |
| `comportement.html` + `comportement.js` + `criteres.js` | registre de comportement : reprise de l'application « Comportement 1STI2D » (par élève avec punition facultative, par critère, journal, copie pour le classeur), avec en plus le choix de la classe, le travail donné et son échéance (« Rendu »), un bilan par période, l'import des lignes de l'ancienne application |
| `socle.js` | accès, chiffrement, liste des élèves, fenêtres communes |
| `u51.js` | grille nationale U51 (niveaux, profils, critères) et calculs ; testé par `node --test` |
| `prof.css` | charte commune |

Le SDK Firebase est chargé depuis `www.gstatic.com` (seule ressource extérieure, comme pour « Mon espace ») ;
s'il ne répond pas, les pages le disent au lieu de rester blanches.

## Ce que contient la base (règles v3)

| Document | Contenu | Qui le lit |
|---|---|---|
| `grilles/{épreuve}` | la grille (titres, profil, classe, groupe, indicateurs) ; aucune donnée d'élève | professeur |
| `grilles/{épreuve}/saisies/{opaque}` | une saisie par élève (indicateurs, niveaux fixés, commentaire pour le jury), **chiffrée** ; nom du document opaque | professeur |
| `epreuves/{épreuve}` | fiche publique de l'épreuve, écrite à la publication | élèves de la classe |
| `epreuves/{épreuve}/copies/{identifiant}` | niveaux par compétence et note sur 20 **publiés** | cet élève seul |
| `comportement/{opaque}` | une ligne du registre, **chiffrée** (ni classe, ni date, ni élève en clair ; la base voit seulement l'heure d'écriture de chaque document) | professeur |

Un document chiffré n'a que trois champs `{v, iv, d}` ; la base en voit seulement le nombre et l'heure d'écriture. Clé des données = HMAC-SHA256(clé de l'espace
enseignant, `neruda|donnees|v1`), AES-256-GCM, chemin du document en donnée authentifiée ; noms opaques =
HMAC-SHA256(clé de l'espace enseignant, `neruda|ids|v1`). Changer le code enseignant ne change pas la clé de
l'espace enseignant : les données restent lisibles.

La liste des élèves n'est **jamais** dans la base : elle est dans l'espace
enseignant, chiffrée (`prive-atelier/donnees/eleves.json` dans l'atelier → `prive/<opaque>.enc` en ligne),
comme les grilles préparées (`epreuves_u51.json`). Ces deux fichiers figurent dans la liste chiffrée de
l'espace enseignant avec le type `donnees`, que l'espace enseignant n'affiche pas.

## Ajouter ou modifier une épreuve

Dans Évaluer, bouton **Épreuves…** : *Nouvelle épreuve*, *Modifier*, *Dupliquer* (par exemple pour l'autre
classe), *Fichier .json* (exporter une grille), *Importer un fichier de grille*, *Importer les grilles
préparées*, *Supprimer* (avec ses saisies et sa publication, après avoir tapé SUPPRIMER). Une grille modifiée
après des saisies garde les observations des indicateurs conservés ; celles d'un indicateur supprimé ne
comptent plus.

Grille préparée par Claude : soit un fichier `.json` à importer (format `{"format": "neruda-grille-u51",
"grille": {…}}` ou `{"epreuves": […]}`), soit une nouvelle version de `prive-atelier/donnees/epreuves_u51.json`
publiée avec le site (puis *Importer les grilles préparées* : seules les nouvelles sont ajoutées).

**Depuis la v63** :
- **Indicateurs « sur la feuille »** (`"f": true` dans la grille, case « feuille » dans l'éditeur) : ce qui s'évalue
  sur le document réponse ramassé. Ils s'affichent en rappel sous leur compétence, ne se cochent pas et ne comptent
  pas dans le niveau proposé ; seuls les indicateurs **au poste** se cochent.
- **Compétence sans indicateur à cocher** (par exemple C2 et C17 quand tout se lit sur la feuille) : acceptée ; son
  niveau se fixe à la main après correction, et la note reste provisoire (tuile « à fixer ») tant qu'il ne l'est pas.
- **Importer un fichier dont une grille a le même code** qu'une grille présente : le site propose de la remplacer ;
  les saisies sont conservées (un indicateur retiré, ou passé « sur la feuille », ne compte plus).

## Publier aux élèves

Bilan › **Publier aux élèves…** : chaque élève dont la note est complète voit dans « Mon espace » ses
niveaux par compétence et sa note sur 20 pour l'épreuve, et l'évolution de ses niveaux d'une épreuve à
l'autre — rien d'autre. Colonne « Publié » : ✓ à jour, ✓* modifié depuis (publier à nouveau). **Retirer la
publication** efface les copies publiées ; les saisies restent.

## Fiches des copies corrigées (v64)

`fiches.html` : après la correction d'un devoir (copies scannées), **importer** le fichier de fiches, vérifier
l'**aperçu** (chaque ligne s'ouvre sur la fiche telle que l'élève la lira), puis **Publier aux élèves**. Chaque
élève lit la sienne, et elle seule, dans « Mon espace » : appréciation, points de chaque question et total, note
(brute, ramenée au barème si besoin), compétences, barème détaillé ; bouton « Imprimer ma fiche ». **Devoirs
publiés** : *Voir* (les fiches en ligne) et *Retirer de « Mon espace »* (taper RETIRER) ; le fichier reste sur
l'ordinateur et peut être republié (une nouvelle publication remplace l'ancienne).

Format du fichier (`fiches_<devoir>.json`, à garder dans NE_PAS_PUBLIER : il contient des noms) :

```json
{"format": "neruda-fiches", "version": 1,
 "epreuve": {"id": "et1a-test-adm0bis", "classe": "et1a", "titre": "Test — ADM 0 bis", "court": "Test ADM 0 bis",
             "nature": "Test écrit, 30 min", "date": "2026-11-05", "bareme": 20,
             "competences": {"C13": "Réaliser des mesures"},
             "questions": [{"q": "1", "intitule": "Choisir l'appareil", "max": 4, "competences": ["C13"],
                            "detail": "2 pt l'appareil, 2 pt le calibre justifié."}]},
 "fiches": [{"eleve": "DURAND Hugo", "points": {"1": 3.5}, "appreciation": "…", "niveaux": {"C13": "N3"}},
            {"identifiant": "lea.m", "absent": true}]}
```

- L'élève est désigné par le **nom écrit sur la copie** (« NOM Prénom », « Prénom NOM », « NOM P. ») ou par son
  identifiant ; le rapprochement se fait **sur cet appareil**, avec la liste chiffrée ; un nom non reconnu se
  choisit dans la liste. La base ne reçoit que l'identifiant.
- La note est la **somme des points** (ramenée au barème si le total des questions en diffère) ; un champ
  « note » n'est qu'un contrôle. Points hors barème, doublons, question inconnue : la fiche est écartée.
- **Tout champ PAP** (`pap`, `coef`, `note_pap`…) est écarté : ni coefficient ni note après aménagement dans la
  base ; la note officielle reste dans Pronote. Une appréciation qui contient le nom de famille de l'élève est
  signalée (à retirer : les noms ne vont pas dans la base).
- *Modèle vide pour une classe…* : un fichier à remplir avec les élèves de la classe (il contient leurs noms).

## Comptes et règles

Règles à coller dans la console : `firestore_v4.rules` des outils de comptes v5 (NE_PAS_PUBLIER). Essai réel des
règles : `python comptes_firebase.py verifier --cle …` (53 essais, comptes éphémères supprimés à la fin). Les règles
n'acceptent dans une copie publiée que les niveaux, la note, le barème, la date et, pour un devoir, l'appréciation,
les points par question et l'absence. Depuis la v64, le site est fermé : le code enseignant saisi ici ouvre aussi,
sur l'appareil, les cours de toutes les classes (pas l'espace enseignant de l'accueil, qui le redemande).

## Deux appareils

Téléphone et ordinateur voient les mêmes données, y compris hors connexion (cache de l'appareil). Une **même**
saisie modifiée sur deux appareils à la fois : la dernière écriture l'emporte. Évaluer un élève donné sur un seul
appareil à la fois ; le comportement, lui, est une ligne par événement : rien ne se perd. Les saisies ne
s'ouvrent qu'une fois lues dans la base ou le cache (« Lecture des saisies… un instant »).
