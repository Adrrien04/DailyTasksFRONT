# DailyQuests

DailyQuests est une application composée de deux parties : un frontend développé en React et un backend développé en Symfony. Chaque partie est gérée dans son propre dépôt.

## Répertoires

- **dailyquestsFRONT** : Dépôt pour le frontend React.
- **dailyquestsBACK** : Dépôt pour l'API Symfony.

## Prérequis

- **Node.js** (version recommandée : 16 ou supérieure)
- **Composer** (pour gérer les dépendances Symfony)
- **PHP** (version 8.1 ou supérieure)
- **Base de données** : MySQL ou MariaDB

## Guide de lancement

### 1. Clonez les deux dépôts

#### Frontend

```bash
git clone https://url-vers-le-repo-frontend dailyquestsFRONT
cd dailyquestsFRONT
```

#### Backend

```bash
git clone https://url-vers-le-repo-backend dailyquestsBACK
cd dailyquestsBACK
```

### 2. Lancer le frontend

Depuis le répertoire **dailyquestsFRONT** :

Installez les dépendances :

```bash
npm install
```

Démarrez le serveur de développement :

```bash
npm start
```

Le frontend sera accessible sur [http://localhost:3000](http://localhost:3000).
