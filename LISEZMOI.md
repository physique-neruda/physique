# Site des animations — notice

Un site statique : rien à installer, pas de base de données, pas de compte à administrer.
Sept fichiers dans un seul dossier, tous à plat. C'est volontaire : beaucoup d'ENT et de
gestionnaires de fichiers abîment les sous-dossiers à l'envoi.

```
index.html                 la page d'accueil (recherche + filtres)
animations.js              LE CATALOGUE — le seul fichier à modifier
MODELE_animation.html      le gabarit pour créer la prochaine animation
LISEZMOI.md                ce fichier (peut rester en ligne, personne n'y va)
calorimetre.html
rayonnement.html
flux-thermique.html
```

---

## 1. Ajouter une animation

Trois gestes, dans cet ordre.

**a. Créer le fichier.** Dupliquer `MODELE_animation.html`, le renommer en minuscules, sans
accent ni espace (`transformateur.html`, `pont-diviseur.html`). Le modèle contient déjà les
couleurs, l'afficheur type multimètre, les curseurs au format tactile et le bouton *Relever* :
en n'y touchant pas, toutes les animations se ressemblent sans effort. Ce qui change
réellement d'une animation à l'autre tient dans la fonction `mesure()` et dans la fonction
`dessine()`.

**b. L'inscrire au catalogue.** Ouvrir `animations.js`, recopier un bloc entre accolades,
changer les valeurs. Attention à la virgule après l'accolade fermante, sauf pour le dernier
bloc de la liste. Les commentaires en tête du fichier décrivent chaque champ.

**c. Vérifier.** Ouvrir `index.html` par un double-clic : la nouvelle fiche doit apparaître,
au bon endroit et cliquable. Si la page devient blanche, c'est presque toujours une virgule
oubliée ou un guillemet non fermé dans `animations.js`.

Le regroupement se fait tout seul, par le texte exact des champs `filiere` puis `chapitre` :
garder la même orthographe d'une ligne à l'autre, sinon deux groupes apparaissent au lieu
d'un. Les boutons de filière ne s'affichent qu'à partir de deux filières.

---

## 2. Mettre le site en ligne

Le site n'a besoin d'aucun serveur particulier : il suffit d'un endroit qui serve des fichiers.
Trois voies, de la plus simple à la plus durable.

**L'ENT, tout de suite.** Déposer les sept fichiers dans un même espace de documents et
diffuser le lien vers `index.html`. Avantage : rien à ouvrir vers l'extérieur. Inconvénients :
l'adresse est longue et peu mémorisable, certains ENT exigent une connexion — donc pas de QR
code utilisable par un étudiant qui n'est pas encore connecté —, et d'autres refusent
d'exécuter du JavaScript dans les fichiers déposés. **À tester avec un téléphone d'étudiant
avant de lancer la première séance**, c'est le seul vrai risque du dispositif.

**GitHub Pages, gratuit et permanent.** Créer un compte, créer un dépôt public nommé par
exemple `physique`, glisser les sept fichiers dans l'interface web (aucune ligne de commande
nécessaire), puis *Settings → Pages → Source: main*. Le site est en ligne quelques minutes
plus tard à une adresse du type `https://identifiant.github.io/physique/`. Pour mettre à jour,
on reglisse le fichier modifié. Gratuit, sans publicité, sans limite de trafic pour cet usage.

**Un nom de domaine à soi.** Une dizaine d'euros par an chez n'importe quel registrar, à
brancher ensuite sur GitHub Pages ou sur un hébergement classique. Le seul intérêt est
l'adresse : quelque chose de court, à dicter à l'oral et à imprimer sur un document, du genre
`physique-neruda.fr`. À faire une fois le dispositif rodé, pas avant.

Quel que soit le choix, l'adresse retenue doit être reportée dans les sources LaTeX des
activités, sur la ligne qui suit le commentaire `ADRESSE DE L'ANIMATION`. Une recompilation
met à jour le lien **et** le QR code.

---

## 3. Ce que le site ne fait pas, volontairement

Il ne collecte rien : pas de compte, pas de statistiques, pas de traceur, aucun appel vers
l'extérieur. Tous les calculs se font dans le navigateur de l'étudiant et les mesures relevées
disparaissent à la fermeture de la page. Il n'y a donc aucune donnée personnelle en jeu, ce qui
évite toute question RGPD et permet de diffuser l'adresse librement.

Il ne stocke pas non plus le travail des étudiants d'une séance sur l'autre. Si ce besoin
apparaît, il faudra changer de dispositif — et à ce moment-là, la question des données
personnelles se posera vraiment.

---

## 4. Points d'attention en classe

Les animations qui font tourner une simulation dans le temps (le chauffage, avec sa vitesse
×60) se figent si le téléphone met la page en arrière-plan ou se met en veille. Prévenir les
étudiants : on relance, ce n'est pas grave.

Prévoir un plan B pour les binômes sans téléphone chargé : un poste de la salle, ou la version
imprimée des relevés. L'activité documentaire `c01_activite`, conservée dans le paquet du
Cours 1, joue ce rôle pour la thermique.
