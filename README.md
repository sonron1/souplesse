# Souplesse Fitness 💪

**STABILITÉ - PROGRÈS - RÉUSSITE**

Une application web moderne de gestion de salle de sport développée avec Nuxt.js 4.3, permettant la gestion des abonnements, des cours, du coaching personnalisé et bien plus encore.


## ⚠️ Avertissement - Droits d'auteur

**🚨 ATTENTION : Ce projet est protégé par des droits d'auteur**

Ce code source est la propriété exclusive de **Souplesse Fitness** et de ses développeurs.

### ❌ Interdictions strictes :
- **Duplication** ou copie non autorisée du code
- **Redistribution** sous quelque forme que ce soit
- **Utilisation commerciale** sans permission écrite
- **Modification** et redistribution sans autorisation
- **Reverse engineering** à des fins commerciales

### ✅ Utilisation autorisée :
- **Consultation** du code à des fins éducatives uniquement
- **Contribution** au projet via des Pull Requests approuvées
- **Fork** pour contribution personnelle (non commerciale)

### 📧 Demande d'autorisation :
Pour toute utilisation commerciale ou duplication, contactez-nous à : **souplessefitness@hotmail.fr**

**Toute violation de ces droits sera poursuivie conformément à la législation en vigueur.**

---

## 🎯 À propos

Souplesse Fitness est une salle de sport moderne située au Bénin (Face Clôture Iita, Cotonou). Cette application web permet de gérer l'ensemble des activités de la salle : inscriptions, abonnements, réservations de cours, coaching personnalisé, boutique et administration.

## ✨ Fonctionnalités

### 👥 Gestion des utilisateurs
- **Clients** : Inscription, gestion du profil, abonnements, réservations
- **Coachs** : Planning personnel, gestion des clients, séances de coaching
- **Administrateurs** : Gestion complète de la salle et des utilisateurs

### 🏋️ Services proposés
- **Abonnements** : Différentes formules d'abonnement
- **Cours collectifs** : Fit Dance, Taekwondo, Boxe, etc.
- **Coaching personnalisé** : Séances individuelles avec nos coachs
- **Boutique** : Vente d'articles de sport et compléments
- **Contact** : Formulaire de contact intégré

### 📱 Interface moderne
- Design responsive avec Bootstrap 5
- Interface utilisateur intuitive
- Système de notifications flash
- Navigation adaptée selon le rôle utilisateur

## 🛠️ Technologies utilisées

### Frontend & Backend
- **Nuxt.js 4.3.1** (Vue.js 3.5)
- **Vue Router 4.6**
- **Node.js** pour le serveur
- **TypeScript** pour le typage

### Base de données (à venir)
- **MongoDB** / **PostgreSQL** / **MySQL**
- **Prisma** / **Drizzle** pour l'ORM

### Frontend
- **Bootstrap 5.3.7** (à intégrer)
- **Bootstrap Icons 1.13.1**
- **Animate.css 4.1.1**

### Outils de développement
- **Docker** avec compose
- **Vite** pour le bundling et compilation
- **npm** pour la gestion des packages

## 📋 Prérequis

- Node.js 18.x ou supérieur
- npm ou pnpm ou yarn
- Docker (optionnel mais recommandé)

## 🚀 Installation

### 1. Cloner le projet
```bash
git clone https://github.com/votre-username/souplesseFitness.git
cd souplesseFitness
```

### 2. Installation des dépendances
```bash
npm install
```

### 3. Configuration de l'environnement
```bash
cp .env.example .env
```
Modifiez le fichier `.env` avec vos paramètres de base de données et autres configurations.

### 4. Lancement du serveur de développement
```bash
npm run dev
```

Le serveur sera accessible sur `http://localhost:3000`

## 🐳 Installation avec Docker

```bash
# Démarrer les services
docker-compose up -d

# Installer les dépendances
docker-compose exec app npm install

# Configurer la base de données
docker-compose exec app npm run db:migrate
docker-compose exec app npm run db:seed
```

## 📁 Structure du projet

```
souplesseFitness/
├── app/                   # Code source de l'application
│   ├── components/        # Composants Vue réutilisables
│   ├── composables/       # Composables Vue
│   ├── layouts/          # Layouts Nuxt
│   ├── pages/            # Pages/Routes de l'application
│   ├── plugins/          # Plugins Nuxt
│   ├── middleware/       # Middleware de routing
│   └── utils/            # Fonctions utilitaires
├── assets/               # Assets (CSS, images, fonts)
├── public/              # Fichiers statiques
├── server/              # API et logique serveur
│   ├── api/            # Routes API
│   ├── middleware/     # Middleware serveur
│   └── utils/          # Utilitaires serveur
├── nuxt.config.ts      # Configuration Nuxt
└── package.json        # Dépendances npm
```

## 🎭 Rôles utilisateurs

### 👑 Administrateur
- Tableau de bord complet
- Gestion des utilisateurs
- Configuration de la salle
- Statistiques

### 💪 Coach
- Planning personnel
- Gestion des clients assignés
- Séances de coaching
- Suivi des performances

### 🏃 Client
- Profil personnel
- Abonnements actifs
- Réservation de cours
- Historique des activités

## 🧪 Tests
Lancer les tests (à configurer) :
```bash
npm run test
```

## 📦 Déploiement

### Production

```bash
# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Ou générer un site statique
npm run generate
```

Pour plus d'informations sur le déploiement, consultez la [documentation Nuxt](https://nuxt.com/docs/getting-started/deployment).

## 📞 Contact & Informations pratiques

**Souplesse Fitness**
- 📍 Face Clôture Iita au bord des pavés, Cotonou, Bénin
- 📞 +229 01 96 11 61 36 / +229 01 96 77 35 09
- 📧 souplessefitness@hotmail.fr

### 🕒 Horaires d'ouverture
- **Lundi au Vendredi** : 7h - 22h
- **Samedi** : 7h - 20h
- **Dimanche & Jours fériés** : 7h - 14h

### 👕 Dress Code
- ✅ Tenue de sport obligatoire
- ✅ Chaussures de sport
- ✅ Serviette obligatoire

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commiter vos changements (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`)
4. Pousser vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créer une Pull Request

## 📄 Licence

Ce projet est sous licence [MIT](LICENSE).

## 🙏 Remerciements

- L'équipe de Souplesse Fitness
- La communauté Nuxt.js et Vue.js
- Tous les contributeurs du projet

---

**Développé pour Souplesse Fitness**
_STABILITÉ - PROGRÈS - RÉUSSITE_
