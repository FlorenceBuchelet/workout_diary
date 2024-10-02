# Workout Diary

### -- 🚧 Work in progress 🚧

Started in Ocotober 2024 as a school project, **Workout Diary** is a mobile first website used to track my personal workouts and improvments. 

I am [Florence](https://github.com/FlorenceBuchelet), an aspiring web developper.

## Stack
- **Prerequisites**:
    - **NodeJS** needs to be installed **globally**.
    - **npm**
    - **Docker**
___

- General:
    - **Typescript**
    - **Docker**
    - **Biome** : Biome is an alternative to ESLint and Prettier for ensuring code quality. It provides both linting and formatting in one tool.
- Server side:
    - **NodeJS**
    - **TypeORM**
    - **Apollo Server**
    - **TypeGraphQL**
    - **PostegreSQL**
- Client side:
    - **React** (through ViteJS)
    - **Apollo Client** (via Vite)
    - **Sass**

## Launch

### TLDR;
1. **First Launch**
    - Clone the `.env.sample` in a `.env` file, edit it.
    - Run `npm run install:all`
    - Run `npm run init:db`
    - Run `docker compose up`
2. **Any other launch**
    - Run `docker compose up`

### Explanations

First of all, copy and edit the `.env.sample` in a `.env` file. <br>
On first launch, **the variables you'll put in this file will be used to create your database** so file it up accordingly with secured informations.

Then run `npm run install:all` to run the `npm install` commands in the /root, /client and /server folders in one go. 

On first launch, create your PostgreSQL user, either inside your container (run `npm run init:db`, it works as explained in [this documentation](./_ressources/documentation/Database_initialization.md)) or through a PostgreSQL user interface such as **pgAdmin**.

You can verify if your user has been created through **adminer** (Système: PostgreSQL | Serveur: db | Utilisateur: $DBUSERNAME | Mot de passe: $DBPASS | Base de données: $DBNAME).

Run `docker compose up`.

Isolated basic commands for debugging purpose: 
- client side: `npm run dev`
- server side: `npm start`

### Folder Structure

```lua (aesthetic use, not actual lua)
WorkoutDiary/
├── _ressources/
│   ├── documentation/
|   │   └── -- documentation on specific features
│   ├── scripts/
│   └── UML/
├── client/                     -- FRONTEND
│   ├── public/
|   ├── src/
|   │   ├── assets/
|   │   ├── components/
|   │   |   ├── _atoms/
|   │   |   ├── _molecules/
|   │   |   ├── _organisms/
|   │   |   └── ComponentName/  -- TODO: sort and clean
|   |   │       ├── ComponentName.tsx
|   |   │       └── ComponentName.scss
|   │   ├── graphQL/
|   │   |   ├── mutations/
|   │   |   └── queries/
|   │   ├── helpers/
|   │   |   └── -- Utility functions
|   │   ├── layouts/
|   │   |   └── -- Footer, Header, general layout
|   │   ├── pages/
|   │   |   ├── DesignSystem/
|   |   │   |   └── DesignSystem.tsx
|   │   |   └── PageName/
|   |   │       ├── PageName.tsx
|   |   │       └── PageName.scss
|   │   ├── styles/             -- General styles
|   │   |   ├── _base.scss      -- HTML selectors
|   │   |   ├── _mixins.scss
|   │   |   ├── _reset.scss     -- normalize.css
|   │   |   ├── _variables.scss -- Colors, typography and variables naming
|   │   |   └── main.scss       -- Style imports in App.tsx
|   │   ├── types/              -- Typescript type declarations
|   │   |   └── ...
|   │   └── App.tsx
|   └── -- Other client side config files
├── server/                     -- BACKEND
|   ├── src/
|   │   ├── dataSource/
|   │   |   ├── dataSource.ts
|   │   |   └── initTestData.ts
|   │   ├── entities/
|   │   └── resolvers/
|   ├── index.ts          
|   └── -- Other server side config files
├── .env                        -- ❗ create this before first launch
├── .env.sample
├── docker-compose.yml
└── -- Other general config files
```
