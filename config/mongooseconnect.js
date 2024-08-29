const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");

// MongoDB connection URI, preferably stored in environment variables
const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/scatch";

// Connection options to handle deprecation warnings and ensure compatibility

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    dbgr("Mongoose successfully connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

module.exports = mongoose.connection;
