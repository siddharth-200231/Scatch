const express = require("express");
const router = express.Router();
const owner=require("../models/owner-models")

// Define routes
router.get("/", (req, res) => {
  res.send("Welcome to the Owners Route");
});
// console.log(process.env)
router.post("/",(req,res)=>{
    res.send("it is working")
})

module.exports = router;
