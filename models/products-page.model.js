const mongoose = require("mongoose");

const productPageSchema = mongoose.Schema({
  carousel: [{
    _id: mongoose.Schema.Types.ObjectId,
    image: String,
    sloganTitle: String,
    subSloganTitle: String,
  }],
  firstLayer: [{
    _id: mongoose.Schema.Types.ObjectId,
    image: String,
    title: String,
    content: String,
    buttonText: String
  }],
  secondLayer: [{
    _id: mongoose.Schema.Types.ObjectId,
    image: String,
    title: String,
    content: String,
    buttonText: String
  }],
  thridLayer: [{
    _id: mongoose.Schema.Types.ObjectId,
    image: String,
    title: String,
    content: String,
    buttonText: String
  }]
});
module.exports = mongoose.model("ProductsPage", productPageSchema);