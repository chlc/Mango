const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("./models");

const PORT = process.env.PORT || 3000;
// Initialize Express
const app = express();

// Configure middleware

// morgan logger for logging requests
app.use(logger("dev"));
// body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));



// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/Mango", {
  useMongoClient: true
});


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
