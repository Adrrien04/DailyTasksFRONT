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
git clone https://github.com/Adrrien04/DailyTasksFRONT
cd DailyTasksFRONT
```
 
#### Backend
 
```bash
git clone https://github.com/Adrrien04/DailyTasksBACK
cd DailyTasksBACK
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

Modifiez également le fichier .env à la racine du dossier pour qu'il puisse contenir l'url de votre API que vous aurez préalablement lancé.
```bash
REACT_APP_API=http://localhost:8000
```
 
Le frontend sera accessible sur [http://localhost:3000]
![](https://i.ibb.co/xgJTPbB/Capture-d-cran-2025-01-17-214620.png)
![](https://i.ibb.co/pWpfSrT/Capture-d-cran-2025-01-17-214951.png)


