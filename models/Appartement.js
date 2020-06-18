/*
 * Models - Appartements
 */

const mongoose = require("mongoose");

const SchemaDateIndispo = new mongoose.Schema({
  dateDebut: String,
  dateFin: String,
});

const SchemaAppartement = new mongoose.Schema(
  {
    nomApp: String,
    descPage1App: String,
    caracApp: String,
    noteApp: String,
    imgApp: { image: String },
    descPage2App: String,
    equipApp: { equipement: String },
    prixNuit: Number,
    dateIndisp: [SchemaDateIndispo],
  },
  { collection: "appartement" }
);

module.exports = mongoose.model("Appartement", SchemaAppartement);
