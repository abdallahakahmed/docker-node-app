const express = require("express");
const mongoose = require("mongoose");
const os = require("os");

// Connect DB
const DB_USER = "root";
const DB_PASSWORD = "example";
const DB_PORT = 27017;
const DB_HOST = "mongo";

const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
  .connect(URL)
  .then(() => console.log("connet to DB..."))
  .catch((err) => console.log("failed to connect to db", err));

const PORT = 4000;
const app = express();
app.get("/", (req, res) => {
  console.log(`traffic from ${os.hostname}`);
  res.send("<h1> Hello Docker!</h1>");
});

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
