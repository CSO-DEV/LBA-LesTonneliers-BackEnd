/*
 * Controlleur Connexion
 * A faire relier avec le front + les modals
 */

//Import
const Clients = require("../models/Clients");

const controllerConnexion = {
  // Connexion : Recherche dans collection Clients si mail + mdp existant GET //
  dataConnexion: (req, res) => {
    let mail = req.body.email; //récupérer la variable depuis le front
    let mdp = req.body.mdp;
    Clients.findOne({ email: mail, mdp: mdp }, "_id email", (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      res.json("Connexion client OK");
    });
  },

  // Connexion : Enregistre le formulaire message dans la collection Client POST //
  dataConnexionForm: (req, res) => {
    let donneeRecu = req.body; //Récupération du body
    console.log(donneeRecu);
    Clients.insertMany(donneeRecu, (err, res) => {
      if (err) {
        res.status(500).json({});
        return;
      }
    });
    res.json("Le massage a été enregisté");
  },

  // Connexion : Enregistre le formulaire d'inscription dans la collection Client POST //
  dataInscription: (req, res) => {
    let formulaireInscription = req.query.body; //récupérer les données du formilaire
    Clients.insertMany(formulaireInscription, (err, res) => {
      if (err) {
        res.status(500).json({});
        return;
      }
    });
    res.json("Votre inscription a été enregisté");
  },

  // Connexion : Modification du mot de passe dans la collection Client PUT //
  dataMdp: (req, res) => {
    let mail = req.query.email; //récupérer la variable depuis le front
    let mdp = req.query.mdp;
    Clients.updateOne({ email: mail }, { mdp: mdp }, (err) => {
      if (err) {
        res.status(500).json({});
        return;
      }
    });
    res.json("Votre mot de passe a été enregisté");
  },
};

module.exports = controllerConnexion;
