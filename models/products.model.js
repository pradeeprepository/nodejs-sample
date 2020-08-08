const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {type: String, required: true},
  offerPercentage: {type: String, required: true},
  type: {type: String, required: true},
  size: {type: String, required: true},
  price: {type: String, required: true},
  brand: {type: String, required: true},
  // image: {type: String, required: true}
});

module.exports = mongoose.model("Products", productSchema);

