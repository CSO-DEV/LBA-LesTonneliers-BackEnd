const express = require("express");
const routerConnexion = express.Router();
const controllerConnexion = require("../controllers/connexion");
const auth = require("../middlewares/auth"); //Middlware d'authentification

// Envoie mail+mdp pour connexion
routerConnexion.get("/", auth, controllerConnexion.dataConnexion);
// Envoie formulaire de message
routerConnexion.post("/formulaire", controllerConnexion.dataConnexionForm);
// Envoie formulaire d'inscription
routerConnexion.post("/inscription", controllerConnexion.dataInscription);
// Envoie formulaire de changement de mot de passe
routerConnexion.put("/mdp", controllerConnexion.dataMdp);

module.exports = routerConnexion;
