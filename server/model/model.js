const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  rating: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const productModle = mongoose.model("Product", productSchema);
module.exports = productModle;
