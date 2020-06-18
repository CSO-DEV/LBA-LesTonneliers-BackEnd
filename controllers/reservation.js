/*
 * Controlleur de réservation
 * A faire relier avec le front + le modal de récapitulatif de la réservation
 */

const Appartement = require("../models/Appartement");
const Clients = require("../models/Clients");
const Frais = require("../models/Frais");

/***** Controlleur Reservation *****/
const controllerReservation = {
  /*** Recherche les données de l'appartement en cours dans collection appartement /GET ***/
  dataReservationApp: (req, res) => {
    let idApp = req.query.id;
    Appartement.findOne(
      { _id: idApp },
      "nomApp prixNuit dateIndisp",
      (err, data) => {
        if (err) {
          res.status(500).json({});
          return;
        }
        res.json(data);
      }
    );
  },

  /*** Recherche les données des frais dans la collection frais /GET ***/
  dataReservationFrais: (req, res) => {
    Frais.findOne({}, (err, data) => {
      if (err) {
        res.status(500).json({});
        return;
      }
      res.json(data);
    });
  },

  /*** Enregistre la demande de Réservation clients /PUT/ ***/
  dataReservationClients: (req, res) => {
    let donneeResa = req.body; //récupérer les données de réservation
    let idClient = req.query.id; //récupérer l'id du client'
    console.log("test");
    Clients.updateOne(
      { _id: idClient },
      { $push: { reservation: donneeResa } },
      (err) => {
        if (err) {
          res.status(500).json({});
          return;
        }
      }
    );
    res.json("Enregistrement Effectué");
  },

  /*A finir avec la modale*/
  /*** Recherche les données de l'appartement choisi /GET ***/
  dataConfirmationClients: (req, res) => {
    let idClient = req.query.id; //récupérer l'id du client'
    Clients.findOne({ _id: idClient }, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json("Erreur récapitulatif");
        return;
      }
      res.json(data);
    });
  },
};

module.exports = controllerReservation;
