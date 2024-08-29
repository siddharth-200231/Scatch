const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  fullname: {
    type: String,
    minlength: 5,
    trim: true,
  },
  email: String,
  products: {
    type: Array,
    default: [],
  },
  password: String,
  picture: String,
  gst: Number,
});
const ownerModel = mongoose.model("ownermodel", ownerSchema);
module.exports = ownerModel;
