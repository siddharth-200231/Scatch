const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

const db=require("./config/mongooseconnect")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(8000, () => {
  console.log(`The Server is Running at Port 8000`);
});
