/*
 * Models - frais
 */

const mongoose = require("mongoose");

const SchemaFrais = mongoose.Schema(
  {
    fraisMenage: Number,
    fraisService: Number,
    taxeSejour: Number,
  },
  { collection: "tarifs" }
);

module.exports = mongoose.model("Tarifs", SchemaFrais);
