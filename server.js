const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require("path");
const session = require("express-session");
const formData = require('express-form-data');
// Requiring passport as we've configured it
const passport = require("./config/passport");
const PORT = process.env.PORT || 3002;
const app = express();
require('dotenv').config();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(formData.parse());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("./config/middleware/isAuthenticated");
app.use(isAuthenticated);

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Glam-me';
mongoose
.connect(mongoURI, {useNewUrlParser: true})
.then(() => console.log("MongoDB connect"))
.catch(err => console.log(err))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
require("./routes/apiRoutes")(app, passport);

app.post("/api/test", function(req, res) {
  console.log(req.body);
  res.status(200);
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  console.log(process.env.IMGUR_CLIENT_ID);
});
