const express = require("express");

const app = express();

app.use(express.static("public"));

// Routes

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/public/views/works.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/public/views/gallery.html");
});

// Route not found (404)
app.use(function (req, res) {
  res.status(404).send(req.url + " not found.");
});

// Run server

app.listen(3000, () => {
  console.log("Server is running!!!");
});

// nodemon app.js
// localhost:3000
