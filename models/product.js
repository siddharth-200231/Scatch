const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/Scatch");
const product = mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  bgcolor: String,
  panelcolor: String,
  textcolor: String,
});
const productModel = mongoose.model("userModel", product);
module.exports = productModel;
