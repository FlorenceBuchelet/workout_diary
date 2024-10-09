# Conception de projet 

Feuille de route.

- 🔴 A faire
- 🟢 Fait 

## I. Idéation
- 🟢 Brainstorming (Idée principale, source d'inspiration première.).

      => J'ai un excel de suivi de mes performances sportives qui commence à être très lourd et difficile à maintenir et j'aimerais le transformer en une appli mobile plus agile. Je veux pouvoir soumettre un exercice et la performance associée et je veux qu'un nombre de points soit calculé en fonction. Je veux pouvoir battre mes PBs régulièrement pour rester motivée. 
      Je veux également que ce projet corresponde au cahier des charge du titre CDA pour pouvoir l'utiliser lors de la présentation si besoin.

- 🟢 Lister trois objectifs.

   1. Ajouter des performances.
   2. Consulter mes PBs (records).
   3. Titre CDA.
   
   Bonus : Exploiter au maximum les fonctionnalités de GitHub pour la gestion de projet.

- 🟢 Définir le public cible.

      => Moi, pas vraiment de plan pour que ce soit utilisable pour d'autres mais mes performances restent personnelles. 

- 🟢 Identifier les fonctionnalités principales.

    - Gestion de l'utilisateur
    - Ajouter des performances : soumettre un nouvel exercice et les poids/reps de cette instance de l'exercice, choisir un exercice existant et soumettre une nouvelle performance.
    - Calcul des points : penser un système de notation qui permettrait de comparer des exercices très différents entre eux (sans passer par les calories ou un autre indice de poids).
    - Statistiques
- 🟢 Nommer le projet (nom de travail ou **nom définitif**) : **Workout Diary** (initiales WOD comme *Workout of the Day*, un concept de cross-fit)

**✨ Livrable ✨** : Une présentation du projet clairement formulée en quelques lignes.

      Workout Diary est une application web de suivi de performances sportives qui vise à pousser son utilisateur à se dépasser en battant ses propres records. 

## II. Recherches et analyse des besoins
- 🔴 Dossier d'inspiration : Trouver d'autres sites similaires, s'inspirer et tout rassembler sous forme de dossier de screenshots.
- 🔴 Besoins fonctionnels (si nécessaire) : 
   - *Hébergement* : 
      - Frontend : **Vercel**
      - Backend : **Render** (sleep mode écolo, peut héberger une BDD Postgre)
      - BDD : **Render** (voire ElephantSQL (limité plan gratuit))
   - *Méthode d'authentification* : **Json Web Token**.
   - *Sécurité* : HTTPS (caddy), DVNA (?) (en attente cours)
   - *Back-ups* : **Render**, fonctionnalité d'export des données utilisateur (CSV ou Json).
   - *Méthode de gestion des fichiers médias* : 
      - Stockage d'images : **ImgBB** (https://api.imgbb.com/) (ou Cloudinary mais IA)
- 🟢 Contraintes eventuelles (délai, matériel) :

    - Deadline Juin 2025.
    - Faire les dossiers en parallèle (dossier projet, Résumé du cahier des charges, dossier professionnel) : https://drive.google.com/drive/u/1/folders/14widlHnPZkhp0SMmnuHwwlOD74t7hDd6
    - Projet solo.
    - Utiliser les technos imposées par l'école (et donc attendre de les avoir).
    - Le temps qui y sera consacré est très incertain (dépend de la charge de travail pro)

**✨ Livrable ✨** : Dossier de screenshots et liste de besoins.

## III. Spécifications du projet
- 🟢 Outil US (Notion, GH Issues, tableur) : **GH Issues**
- 🟢 User stories : https://github.com/FlorenceBuchelet/workout_diary/issues
- 🔴 UML :
    - 🔴 Outil : **[Draw.io integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)** (extension VSCode)
    - 🔴 *Class* : _ressources/UML_diagrams/class.dio
    - 🔴 *Use case* : _ressources/UML_diagrams/use_case.dio
    - 🔴 *Séquence* : _ressources/UML_diagrams/sequence.dio

- 🟢 Organisation du projet (outils, équipe)
   - *Ticketing* (Trello, Jira, GH Issues) : **[GH Issues](https://github.com/FlorenceBuchelet/workout_diary/issues)** et **[GH Projects](https://github.com/users/FlorenceBuchelet/projects/1/views/1)**<br>
   Système de priorités : 
      - P0 : Critique, urgent et immédiat.
      - P1 : Prioritaire.
      - P2 : Non-prioritaire.
   - *Backlog* (Trello, Jira, tableur) : **[GH Projects](https://github.com/users/FlorenceBuchelet/projects/1/views/1)**
   - *Organisation de branches et méthode de nommage* : feat - fix - chore/numéro de US et numéro du ticket-sujet de la branche<br/>
      ex. **feat/0112-manger-des-chips** (feature pour l'US01 ticket 12, manger des chips)<br>
      - Branche *develop* : On part de cette branche pour tout nouveau développement.
      - Branche *main* : Déployée. Une fois les features complètement terminées et testées, elles peuvent être merge sur Main et déployées.

**✨ Livrable ✨** : Liste de user stories, au moins trois diagrammes et une organisation bien définie.

## IV. Choix des technos
- 🟢 Choix des technos
   - 🟢 **General** : Docker, Typescript, Biome
   - 🟢 **BDD** (SQL/NoSQL, SGBD, ORM) : TypeORM, TypeGraphQL, PostegreSQL
   - 🟢 **Frontend** : React, Apollo Client, Sass
   - 🟢 **Backend** (API) : NodeJS, Apollo Server

**✨ Livrable ✨** : Liste de technos.

## V. Wireframe
- 🟢 Charte graphique
```scss
// Main colors
$primary-dark: #131212;
$primary-light: #FFDEE6;

$secondary-dark: #D61D4E;
$secondary-light: #FF0B55;

$accent-color: #FFF078;
```
- 🔴 Outil (Excalidraw, Figma) : **_**
- 🔴 Liste des wireframes des pages principales : 
   - 🔴 Homepage
   - 🔴 User profile
   - 🔴 Page de Login
   - 🔴 Page Register

**✨ Livrable ✨** : Wireframes principaux validés.

## VI. Maquettage et initialisation
- 🔴 Maquettage des wireframes :
   - 🔴 Homepage
   - 🔴 User profile
   - 🔴 Page de Login
   - 🔴 Page Register
- 🔴 Initialisation du repo.
- 🔴 Mise en place du **Readme**.
- 🔴 Architecture projet (schéma)
- 🔴 Modélisation de la BDD : 
   - 🔴 *Modèle Conceptuel* (entités, verbes, relations, cardinalités, aucune donnée technique)
   - 🔴 *Modèle Logique* (clefs étrangères, tables de jointures)
   - 🔴 *Modèle Physique* (types de valeurs)
- 🔴 Design System

**✨ Livrable ✨** : Repo sur GitHub avec schéma d'architecture projet, screenshots des maquettes et des modèles de la BDD et page de Design System.

## VII. Tests de déploiement

Une fois le repo initialisé, effectuer un déploiement précoce qui permettra de faire régulièrement des tests d'intégration.
- 🔴 BDD
- 🔴 Frontend 
- 🔴 Backend

**✨ Livrable ✨** : Adresses des trois parties du projet déployés.

- BDD : 
- Frontend : 
- Backend : 

## VIII. Développement
- 🔴 BDD
   - 🔴 Création des tables/classes
   - 🔴 Seed ?
   - 🔴 Migrations ?
- 🔴 Frontend
- 🔴 Backend (API)

**✨ Livrable ✨** : Projet complet.

## IX. Tests
- 🔴 Outils de tests : Jest (TU), React Testing Library (composant), Playwright (end-to-end) ?
    - 🔴 *Test unitaire* :
    - 🔴 *Test de composant* :
    - 🔴 *Test end-to-end* :

**✨ Livrable ✨** : Dossier de tests sur le repo.

## X. Déploiement
- 🔴 Outils : **_**
- 🔴 Configurer l'hébergement 
- 🔴 Déploiement

**✨ Livrable ✨** : Projet accessible en ligne.

## XI. Suivi
- 🔴 Axes d'amélioration : 

    - 
    - 
    - 
- 🔴 Rechercher les feedbacks utilisateurs
- 🔴 Outils d'analyse si nécessaires (GTM, analytics) : 

**✨ Livrable ✨** : Amélioration et suivi continu.