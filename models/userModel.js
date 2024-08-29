const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Scatch");
const userSchema = mongoose.Schema({
  username: {
    type:String,
    required:true
  },
  email: String,
  password: String,
  isadmin: Boolean,
  cart: { type: Array, default: [] },
  orders: { type: Array, default: [] },
  contact: Number,
  picture: tString,
});
const user = mongoose.model("userModel", userSchema);
module.exports = user;
