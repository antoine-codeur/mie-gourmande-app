# 🍞 MieGourmandeApp

Bienvenue dans **MieGourmandeApp**, une application gourmande construite avec 💻 **Angular 19** et des outils modernes pour une expérience utilisateur fluide et performante !

---

## 🚀 Fonctionnalités

- **✨ Gestion des produits :**
  - Ajout, modification, suppression et affichage des produits.
  - Filtrage des produits par catégorie et prix.
- **📖 Gestion des catégories :**
  - Affichage des catégories disponibles avec une interface intuitive.
- **🐛 Tests unitaires et E2E :**
  - Tests intégrés pour garantir la stabilité et les performances.

---

## 📦 Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-repo/mie-gourmande-app.git
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```

---

## 💻 Serveur de Développement

Pour lancer un serveur de développement local :

```bash
npm start
```

Ensuite, ouvrez votre navigateur et accédez à [http://localhost:4200/](http://localhost:4200/). L'application se rechargera automatiquement à chaque modification des fichiers sources.

---

## 🗃️ Base de Données Statique

Nous utilisons **JSON Server** pour simuler une API et gérer une base de données statique localement. La base de données est définie dans le fichier `mie-gourmande-data.json`.

### Exemple de Contenu

```json
{
  "products": [
    {
      "id": "1",
      "name": "Baguette Tradition",
      "categoryId": "1",
      "price": 1.2,
      "description": "Baguette traditionnelle, croustillante et savoureuse.",
      "stock": 100
    },
    {
      "id": "2",
      "name": "Croissant",
      "categoryId": "1",
      "price": 1.0,
      "description": "Croissant au beurre pur.",
      "stock": 50
    }
  ],
  "categories": [
    {
      "id": "1",
      "name": "Boulangerie",
      "description": "Tous nos pains et viennoiseries fraîchement préparés."
    },
    {
      "id": "2",
      "name": "Pâtisserie",
      "description": "Desserts, gâteaux et douceurs sucrées."
    }
  ]
}
```

---

## 🛠️ Lancer le Serveur JSON

Pour démarrer le serveur JSON et utiliser la base de données statique :

1. Assurez-vous que `json-server` est installé comme dépendance (déjà inclus dans ce projet).
2. Exécutez la commande suivante :

```bash
npm run start:api
```

3. Le serveur JSON sera accessible sur [http://localhost:3001](http://localhost:3001).

---

## 🛠️ Génération de Code

L'Angular CLI propose des outils puissants de scaffolding. Pour générer un nouveau composant, exécutez :

```bash
ng generate component component-name
```

Pour une liste complète des schémas disponibles (`components`, `directives`, `pipes`, etc.) :

```bash
ng generate --help
```

---

## 🏗️ Compilation

Pour compiler le projet :

```bash
npm run build
```

Les artefacts de compilation seront stockés dans le dossier `dist/`. Par défaut, la build de production optimise l'application pour des performances et une vitesse maximales.

---

## 🚨 Tests

### Tests unitaires 🐛
Pour exécuter les tests unitaires avec le test runner [Karma](https://karma-runner.github.io) :

```bash
npm test
```

### Tests End-to-End (E2E) 🚦
Pour exécuter des tests end-to-end :

```bash
npm run e2e
```

Angular CLI ne propose pas de framework e2e par défaut. Vous pouvez en choisir un selon vos besoins, comme **Cypress** ou **Protractor**.

---

## 🗂️ Structure du Projet

```
mie-gourmande-app/
├── src/
│   ├── app/
│   │   ├── components/    # Composants Angular (UI)
│   │   ├── services/      # Services pour la logique métier
│   │   ├── models/        # Interfaces TypeScript
│   │   ├── pages/         # Pages principales
│   │   └── app.module.ts  # Module principal
│   ├── assets/            # Fichiers statiques (images, styles, etc.)
│   └── environments/      # Fichiers d'environnement
├── angular.json           # Configuration Angular CLI
├── package.json           # Dépendances et scripts
└── README.md              # Documentation du projet
```

---

## 🏷️ Versioning

Nous utilisons **Semantic Versioning (vX.Y.Z)** pour gérer les versions des releases :

- **`X` (MAJOR)** : Changements majeurs ou incompatibles avec les versions précédentes.
- **`Y` (MINOR)** : Ajout de nouvelles fonctionnalités tout en restant rétrocompatible.
- **`Z` (PATCH)** : Corrections de bugs ou améliorations mineures sans ajout de nouvelles fonctionnalités.

### 🛠️ V0

- **Première release (Livrable 1)** : `v0.1.0`
  - Cette version inclut la gestion des produits et des catégories.

---

## 📖 Ressources Additionnelles

- 🔗 [Documentation Angular CLI](https://angular.dev/tools/cli)
- 📚 [Tutoriels Angular](https://angular.dev/start)
- 🛠️ [Outils de Développement Angular](https://angular.dev/guide/devtools)

---

## ✨ Contributeurs

Merci à tous les contributeurs qui ont aidé à développer ce projet, MOI! 💖
