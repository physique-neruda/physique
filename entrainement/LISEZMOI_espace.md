# Mon espace, répétition espacée et compte élève — notice (v61, 3 novembre 2026)

## Ce que ça change pour l'élève

- **Cartes de révision** (`cartes.html`) : chaque carte a maintenant une échéance. Après le
  retournement, trois réponses : « Je ne savais pas » (la carte revient demain), « Presque »
  (intervalle × 1,2), « Je savais » (1 jour, puis 3 jours, puis intervalle × facilité ; la
  facilité part de 2,5, monte de 0,1 à chaque « je savais », baisse de 0,2 à chaque « je ne savais
  pas », plancher 1,3). L'accueil du chapitre dit combien de cartes sont à revoir aujourd'hui
  (échéance atteinte + un paquet de 10 nouvelles), combien sont apprises (intervalle ≥ 7 jours),
  et la série de jours de révision. « Tout revoir depuis le début » passe toutes les cartes ; les
  réponses comptent de la même façon. Les cartes ratées repassent une fois en fin de séance, sans
  changer leur échéance. Export Anki inchangé.
- **Questionnaires** (`qcm.html`) : le résultat garde le meilleur score, le dernier, le nombre
  d'essais et les questions ratées ; la fin affiche « Essai n° k », « Meilleur score » ou « Nouveau
  meilleur score ».
- **Mon espace** (`espace.html`, lien en tête et en pied de l'accueil) : tout ce que l'appareil
  a gardé — cartes par chapitre (à revoir / apprises / total), questionnaires, simulations (défis,
  étoiles, badges) — plus un **code de sauvegarde** pour changer d'appareil sans compte, et, avec
  un compte, la synchronisation entre appareils et « Mes compétences » (les évaluations publiées
  par le professeur).
- **Sans compte et sans réseau, tout marche comme avant** : le `localStorage` reste la source de
  vérité, rien n'est envoyé. Le compte est une couche en plus.

## Les clés de stockage (localStorage)

| Clé | Contenu (v2) |
|---|---|
| `neruda.cartes.<filière>.<chapitre>` | `{"v":2,"maj":ms,"cartes":{"<indice>":{"e":2.5,"i":jours,"d":"AAAA-MM-JJ","n":réponses,"l":"AAAA-MM-JJ","maj":ms}}}` — `e` facilité, `i` intervalle (0 = nouvelle), `d` échéance, `n` réponses données, `l` dernière révision |
| `neruda.qcm.<filière>.<chapitre>.<type>` | `{"v":2,"meilleur":n,"dernier":n,"total":N,"tentatives":k,"rates":[indices],"date":"AAAA-MM-JJ","maj":ms}` |
| `neruda.serie` | `{"dernier":"AAAA-MM-JJ","jours":n,"maj":ms}` — un jour compte dès qu'une carte est répondue |
| `instr-<nom>`, `multimetre-sdm3055-essentiel` | données des simulations, écrites par les simulations elles-mêmes (`GAME.save()`), seulement lues ici |

Anciens formats, convertis au premier passage : le tableau des indices « sus » (une carte sue →
intervalle 7 jours, échéance dans 7 jours) et la chaîne du nombre de bonnes réponses.

Les dates sont locales (`AAAA-MM-JJ` du téléphone) ; les horodatages `maj` sont en millisecondes.

## La fusion (deux appareils, ou local et compte)

Élément par élément, **le `maj` le plus récent gagne** : carte par carte, questionnaire par
questionnaire (le meilleur score et le nombre d'essais sont pris au maximum des deux côtés), série
de jours (la plus avancée), simulation par simulation (l'objet entier). Elle est idempotente :
fusionner deux fois ne change rien. Tout est dans `srs.js` (`NerudaSRS.fusionner`), testé en Node.

## Le code de sauvegarde

`NRD1z.` + base64url(deflate-raw(JSON)) quand le navigateur sait compresser, sinon `NRD1r.` +
base64url(JSON). Le JSON est `{"v":1,"date":…,"cles":{<clé>:<objet v2>}}` avec toutes les clés
ci-dessus. Restaurer = fusionner (même règle). Un code compressé ne se lit pas sur un très vieux
navigateur (sans `DecompressionStream`) : le message le dit.

## Le compte (`compte.js`)

Module ES chargé en plus par `espace.html`, `cartes.html` et `qcm.html`
(`<script type="module">import("./compte.js")…`) : s'il ne charge pas (pas de réseau, SDK bloqué,
navigateur sans modules), les pages ne le voient même pas ; `espace.html` affiche « Connexion
indisponible pour l'instant » au bout de 8 s.

**Seule ressource extérieure du site** : le SDK Firebase 10.12.2, servi par
`https://www.gstatic.com/firebasejs/10.12.2/` (`firebase-app.js`, `firebase-auth.js`,
`firebase-firestore.js`). Configuration publique dans `firebase-config.js` (projet
`physique-neruda-4a8f8`) ; ce sont les règles de sécurité de la base qui protègent les données.

`window.NerudaCompte` :

| Membre | Rôle |
|---|---|
| `pret` | promesse : l'état de connexion est connu (et la première synchronisation faite) |
| `etat()` | `{connecte, uid, prenom, classe, classeLibelle, groupe, identifiant, invite, prof, derniereSync}` (v62 : `identifiant` et `prof`) |
| `connecter(identifiant, motDePasse, rester)` | `identifiant` → minuscules + `@physique-neruda.site` ; `rester` → persistance locale, sinon session ; rejette avec un message en français |
| `deconnecter()` | envoie ce qui attend, puis déconnecte |
| `toucher(usage)` | `cartes`, `qcm` ou `simulations` : envoi groupé 3 s plus tard, et au `pagehide` |
| `synchroniser(usages)` | tout de suite ; rend les clés locales modifiées |
| `surChangement(fn)` | `fn({type:'etat'})`, `fn({type:'donnees', cles})`, `fn({type:'sync'})` |
| `competences()` | les épreuves de la classe et la copie de l'élève si elle est publiée — v62 : copie rangée sous son **identifiant** (`epreuves/{id}/copies/{identifiant}`), écrite par la page Évaluer de l'espace prof (`../prof/`) ; titres des compétences dans le champ `competences` de l'épreuve |

À la connexion, le module lit `eleves/{uid}` ; fiche absente ou `actif === false` → « Ce compte
n'est rattaché à aucune classe » et déconnexion. Un compte `invite: true` lit mais n'écrit jamais.
Le compte `prof` (fiche de classe `prof`) voit dans « Mon espace » un lien vers l'espace prof, pas de
« Mes compétences ».

**« Mes compétences » (v62)** : pour chaque épreuve publiée, la note sur 20 et les niveaux N1 à N4 par
compétence ; à partir de deux épreuves, **« Évolution par compétence »** (C2 N3 → N4…), de la plus
ancienne à la plus récente. Ni les indicateurs observés ni le commentaire pour le jury ne sont publiés.

### Ce qui part dans Firestore

Trois documents par élève, `cartes/{uid}`, `qcm/{uid}`, `simulations/{uid}`, chacun
`{"v":2,"maj":ms,"cles":{"<clé locale>":<objet v2>}}` (`neruda.serie` voyage avec les cartes).
Écriture `setDoc(…, {merge:true})`, jamais plus d'une par usage et par rafale, refusée au-dessus de
150 ko (message dans la console seulement). Cache Firestore persistant : hors ligne, les lectures
viennent du cache et les écritures partent plus tard.

### Ce qui n'y va jamais

Le **nom** tapé dans une simulation pour le code de fin (retiré avant l'envoi, gardé en local), les
mots de passe des filières, les documents du site, les clés de l'espace enseignant, le nom de
famille de l'élève (la fiche `eleves` ne porte que « Prénom I. », la classe et le groupe).

## Tester

```
node --test entrainement/tests/srs.test.mjs        # planification, migration, fusion, code (10 tests)
```
Les tests Chromium (Playwright, réseau extérieur coupé, puis avec un faux SDK servi à la place de
gstatic.com) sont dans l'archive des outils (`tests/navigateur.js`, `tests/compte.test.js`) :
servir l'atelier avec `python3 -m http.server 8765` puis `node tests/navigateur.js <atelier> 8765
<dossier des captures>`. Le chemin « vrai SDK, vraie base » ne peut se tester que depuis un
navigateur ayant accès à Google : à faire depuis le site publié, avec le compte `invite` puis un
compte élève.

## v64 (4 novembre 2026) : site fermé

- **Connexion obligatoire** : sans clé sur l'appareil, l'accueil, « Mon espace », les cartes, les questionnaires
  et les animations montrent la carte « Se connecter » (`commun/connexion.js`). À la connexion, `compte.js` lit
  dans la base `cles/commune` et `cles/<filière de la classe>` (le compte prof : toutes ; l'invité : la commune)
  et les confie à `commun/cles.js` (onglet ; appareil seulement avec « Rester connecté »). Sans base : l'**accès
  de secours** (mot de passe de la classe, ou code enseignant). « Se déconnecter » efface les clés.
- Les données des chapitres sont **chiffrées** (`qcm-<filière>-<chapitre>.js.enc`, clé de la filière) et lues
  par `commun/donnees.js` ; dans l'atelier (sans `acces.js`), tout reste en clair, sans connexion.
- **Cartes** : chaque carte a un identifiant stable (`id`), et l'avancement est rangé par identifiant
  (`SRS.idsCartes`, `SRS.bilan(etat, ids)`) ; au départ, l'identifiant est le rang : rien ne bouge.
  `cartes.html?f=<filière>&jour=1` : les cartes dues de toute la classe.
- **Journal** `neruda.journal` : `{v:1, jours:{"AAAA-MM-JJ":{"<appareil>":n}}, maj}`, le nombre de réponses
  aux cartes par jour et par appareil (`neruda.appareil`, tiré au hasard), gardé 70 jours, fusionné par
  maximum appareil par appareil (deux appareils ne comptent pas double) ; il voyage avec les cartes
  (`cartes/{uid}`). L'accueil de l'élève en tire l'écran des 14 derniers jours.
- **Mes évaluations** : en plus des niveaux U51, les **fiches des devoirs corrigés** (épreuve de type
  « devoir » : appréciation, points par question, note brute, compétences, barème détaillé ;
  `commun/fiche.js`), avec « Imprimer ma fiche ».
- Tests : `node --test entrainement/tests/srs.test.mjs` (13) et `entrainement/tests/fiche.test.mjs` (4) ;
  tests Chromium du site fermé : `site_v64.test.js` (archive de la v64).
