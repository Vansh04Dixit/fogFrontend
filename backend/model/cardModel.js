const mongoose = require("mongoose");
const cardSchema = require("../Schema/CardSchema");

const cardModel = mongoose.model('Card', cardSchema)

module.exports = cardModel;