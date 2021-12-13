const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  // categoryId = { type: Number, required: true }, //join atılacak
  name: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  unitsInStock: { type: Number, required: true },
});

module.exports = mongoose.model("products", ProductSchema);