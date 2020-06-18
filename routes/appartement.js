const express = require("express");
const routerAppartement = express.Router();
const controllerAppartement = require("../controllers/appartement");

routerAppartement.get("/", controllerAppartement.dataAppartement);

routerAppartement.get(
  "/detailsappartement",
  controllerAppartement.dataAppartementDetails
);

routerAppartement.get(
  "/autresAppartement",
  controllerAppartement.dataAppartementAutres
);

module.exports = routerAppartement;
