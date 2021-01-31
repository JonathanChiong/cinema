const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 80;
const { MONGO_URI } = require("./config/keys");
const connection = mongoose.connection;

app.use(express.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.once("open", () => {
  console.log("Connected to database successfully.");
});
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const movie = require("./route/movie");
app.use("/api/movie", movie);
