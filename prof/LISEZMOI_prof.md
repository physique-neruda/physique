# Espace prof — outils du professeur (v62, 3 novembre 2026 ; v64.2 : codes des corrigés)

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
| `codes.html` + `codes.js` (v64.2) | codes des corrigés à débloquer : pour une classe et un chapitre, le code de la classe de chaque corrigé (exercice, activité, partie d'activité, activité entière), le message à coller dans Pronote avec le lien qui débloque, et le code nominatif de chaque élève (il ne marche qu'une fois les enveloppes déposées par `comptes_firebase.py cles`) ; recalculés sur l'appareil avec le **code enseignant seul** (rien n'est lu ni écrit dans la base ; « Garder sur cet appareil » décoché par défaut, bouton pour le refermer ; les codes nominatifs ne s'impriment pas) |
| `aides.html` + `aides.js` + `aides_codes.js` (v65.4) | codes du jour des **aides aux branchements** de l'ADM série 01 : pour un jour, le code de niveau 2 (indice) et de niveau 3 (solution) de chacun des quatre postes ; Kc = la clé des codes des corrigés de l'année, code = 6 signes de HMAC-SHA256(Kc, `aide|<poste>|<niveau>|<AAAA-MM-JJ>`) ; recalculés avec le code enseignant seul, rien dans la base ; test `entrainement/tests/aides_codes.test.mjs` |
| `socle.js` | accès (`garde`, et `gardeCode` : code enseignant seul), chiffrement, clé des codes des corrigés (`cleCodes`), liste des élèves, fenêtres communes |
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

## v65 (6 novembre 2026) : tableau de bord, corrigés partagés

**Tableau de bord** (`tableau.html`, les deux clés) : l'activité des élèves, par classe et par élève, lue dans la base
(cartes, questionnaires, animations, corrigés débloqués) avec la liste chiffrée pour les noms. Période 7, 30 ou
70 jours ; chiffres clés, élèves actifs par jour, chapitres travaillés (élèves × chapitres : cartes apprises ou
meilleur score), animations, tableau des élèves ; un clic sur un nom donne le détail chapitre par chapitre. Chaque
graphique a son tableau (« Voir le tableau »). Les titres des chapitres et le texte des questions viennent des
données du site : ouvrir le code enseignant sur l'accueil du site s'ils manquent.

**Mesures d'activité** : coupées tant qu'on ne les active pas (bandeau du tableau de bord). Avant : diffuser aux
élèves et aux familles le texte d'information (bouton « Copier le texte », annexe B de la fiche de traitement v3).
Activées : temps de travail ACTIF par jour et par sorte de page (une page oubliée ouverte ne compte pas),
animations ouvertes et temps passé, documents ouverts, réussite question par question (« Questions les plus
ratées »). Jamais pour le compte professeur, le compte collègue ni l'invité. « Couper » : les appareils arrêtent
et effacent ce qu'ils avaient noté ; « Effacer les mesures déjà envoyées » vide la base. Un élève qui s'y oppose :
sa fiche › « L'exclure des mesures » (la base refuse alors ses envois), puis « Effacer ses mesures ».

**Corrigés partagés** (`partages.html`, les deux clés) : pour une classe ou pour un élève, chaque corrigé de
« Codes des corrigés » a sa case. Cochée : ouvert sans code. Décochée : FERMÉ, codes compris (code de la classe et
codes nominatifs refusés ; ce qui avait été débloqué par code se referme à la visite suivante). « Par code » (ou
« Comme la classe » pour un élève) : la décision est retirée, les codes remarchent. Entre la classe et l'élève, la
décision la plus récente l'emporte. Récapitulatif : par chapitre (ouverts, fermés, débloqués par code, exceptions)
et par élève. Partages de départ : les « corrigés des séances » de la v64.2 deviennent des cases cochées (sept
classes) et les énoncés d'approfondissement de BTS CRSA s'ouvrent à l'élève qui les a demandés — faits une fois
par `comptes_firebase.py cles` (outils v7), sinon par le bouton du bandeau.

Règles : `firestore_v6.rules` (outils de comptes v7), essai réel : `verifier` (101 essais).


## v65.5 (17 novembre 2026) : activités guidées

**Page `seance.html` + `seance.js`** (les deux clés), pensée pour le téléphone du professeur pendant une activité faite
sur le site par les élèves (première activité : TP 3 du BTS ET, « Régime sinusoïdal », page élève
`../activites/guidee.html?a=bts-et.regime-sinusoidal`).

- **Visas** : chaque demande d'un poste arrive en tête de liste (la plus ancienne d'abord, en rouge au-delà de 5 min).
  Une demande s'ouvre sur les **photos du poste** (élèves ayant demandé, et ceux du même poste arrêtés au même visa ;
  toucher une photo pour retirer ou ajouter), le **schéma attendu**, la liste de ce qu'on vérifie et, si une épreuve
  d'Évaluer est liée à la séance, ses **critères « au poste »** (A / P / N, écrits dans les saisies chiffrées d'Évaluer,
  exactement comme depuis la page Évaluer). On accorde en **glissant** la poignée verte jusqu'au bout (un simple toucher
  ne suffit pas) ; ou « À reprendre » avec un motif (puces + précision), que l'élève lit aussitôt.
- **Suivi** : par poste, chaque élève avec son étape, le temps passé, les aides et les essais ; ✋ visa demandé, ⏱ même
  étape depuis plus de N minutes (réglable), 🛟 aide 3 ouverte, ⚑ mesure maintenue malgré l'alerte de cohérence, 💤 plus de
  nouvelles depuis 6 min. Toucher un élève : toutes ses étapes et ses réponses ; « Débloquer cette étape » (elle compte
  comme faite), « Accorder le visa », changer de poste.
- **Étapes** : pour chaque étape, faits / élèves au travail, élèves arrêtés dessus, temps médian, aides, essais moyens ;
  toucher une ligne : les réponses de toute la classe (répartition des choix, prévisions, conclusions rédigées).
- **Réglages** : ouvrir / fermer la séance (fermée : les élèves relisent sans avancer), parties ouvertes, aides
  **formatif** (gratuites, mais visibles) ou **évalué** (aide 2 : 0,5 point ; aide 3 : 1 point, par étape), montrer la
  réponse attendue après celle de l'élève, **tout ouvrir** (panne, fin de séance : toutes les étapes, sans visa), seuil de
  l'alerte « bloqué », **épreuve d'Évaluer liée**, **codes de secours du jour** (un par visa, valables ce jour et pour cette
  classe : l'élève sans réseau le tape sous « Pas de réseau ? »), QR code et adresse de l'activité, effacer la séance.

**Base (règles v7)** : `seances/{classe}--{activité}` (réglages, écrits par le professeur, lus par les élèves de la
classe ; empreintes PBKDF2 des codes de secours, jamais les codes), `seances/{…}/eleves/{uid}` (avancement : étapes,
essais, aides, réponses, demande de visa ; écrit par l'élève seulement quand la séance est ouverte et que c'est celle de sa
classe), `seances/{…}/visas/{uid}` (visas, refus, déblocages, poste imposé ; écrits par le professeur, lus par l'élève).
Le contenu de l'activité (étapes, schémas des visas) est lu dans `../activites/<filière>.<activité>.js.enc`, chiffré
avec la clé de la filière : rien de l'énoncé n'est en clair dans la page du professeur.

**Codes de secours** : code = 6 signes de `ALPHABET_CODES` tirés de HMAC-SHA256(clé des noms, `guidee|secours|<séance>|<visa>|<AAAA-MM-JJ>`)
(`idOpaque`), recalculés sur l'appareil ; la séance garde seulement `{date, sel, tours: 60000, h: {visa: PBKDF2(code, sel|visa)}}`.

## v65.7 (18 novembre 2026) : plusieurs activités guidées en même temps (ADM série 01)

- **Une classe, plusieurs séances** : la page suit toutes les activités guidées de la classe choisie. L'onglet
  **Visas** reçoit les demandes de toutes les séances ouvertes, dans une seule file (la plus ancienne en tête), avec le
  nom du système (« Four · Léa M., Hugo D. »). **Suivi** montre une section par activité ouverte. **Étapes** et
  **Réglages** portent sur l'activité choisie dans la liste (● = séance ouverte).
- **Réglages › Créer et ouvrir toutes les séances de la série** (ADM série 01) : les quatre séances d'un coup, toutes
  les parties ouvertes, aides en formatif, et l'épreuve d'Évaluer du système liée si elle existe pour la classe
  (s01four, s01banc, s01harmocem, s01comp).
- **Feuille du visa** : la liste de ce qu'on vérifie, le **schéma corrigé** et les **photos annotées** du poste, les
  **critères** du visa (indicateurs de la grille, dans l'ordre utile) et des **motifs** propres au système viennent de
  `donnees/visas_guidees.json` (espace enseignant chiffré) ; pour le TP 3, ils restent ceux de l'activité.
- **Groupes** : dans une activité « groupe unique » (un trinôme par système), pas de numéro de poste ; la demande
  porte les prénoms du groupe.
- **Alerte « bloqué »** : au-delà du seuil réglé ou, s'il est plus long, de la durée prévue de l'étape (simulations).
- Le **QR code** de chaque activité est imprimé en tête de sa feuille, avec l'adresse et le chemin sur le site : plus
  besoin de le projeter (il reste dans Réglages).

