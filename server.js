const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Définir le dossier contenant les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routage pour servir index.html pour toutes les routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
