/*
 * Controlleur Appartement
 */

//Import
const Appartement = require("../models/Appartement");

//
const controllerAppartement = {
  // Page 1 : Récupération infos collection Appartement  (sans filtre) - GET //
  dataAppartement: (req, res) => {
    Appartement.find(
      {},
      "nomApp descPage1App caracApp noteApp imgApp",
      (err, data) => {
        if (err) {
          res.status(500).json({});
          return;
        }
        res.json(data);
      }
    );
  },

  // Page 2 : Récupération info  collection Appartement (avec filtre de recherche sur l'Id) - GET //
  dataAppartementDetails: (req, res) => {
    let idApp = req.query.id;
    Appartement.findOne({ _id: idApp }, (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      res.json(data);
    });
  },

  // Page 2 : Récupération info  collection Appartement NomApp/img (sans filtre) - GET //
  dataAppartementAutres: (req, res) => {
    Appartement.find({}, "_id nomApp imgApp", (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      res.json(data);
    });
  },
};
module.exports = controllerAppartement;
