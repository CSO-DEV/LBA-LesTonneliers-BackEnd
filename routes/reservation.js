const express = require("express");
const routerReservation = express.Router();
const controllerReservation = require("../controllers/reservation");

routerReservation.get("/", controllerReservation.dataReservationApp);

routerReservation.get("/frais", controllerReservation.dataReservationFrais);

routerReservation.put("/", controllerReservation.dataReservationClients);

routerReservation.get(
  "/confirmation",
  controllerReservation.dataConfirmationClients
);

module.exports = routerReservation;
