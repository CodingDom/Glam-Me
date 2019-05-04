const User = require("../models/User");

module.exports = function(app, passport) {
  // Allowing users to update their profile information
  app.put("/api/users/:id", function(req, res) {
    // Making sure the user is the account owner
    if (req.params.id != req.user.id) {
      return res.status(500).end();
    }
    // Limiting amount of information that may be changed
    const updatedInfo = {};
    if (req.body.displayName) {
      updatedInfo.displayName = req.body.displayName;
    }
    if (req.body.blurb) {
      updatedInfo.blurb = req.body.blurb;
    }
    User.update(updatedInfo, { where: { id: req.params.id } })
      .then(function() {
        res.status(200).end();
      })
      .catch(function(err) {
        console.log(err);
        res.status(500).end();
      });
  });

  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    const userInfo = {
      name: `${req.body.firstName} ${req.body.lastName}`,
      email: req.body.email,
      password: req.body.password,
      // specialties: req.body.specialties,
      // location: req.body.location
    };
    const user = new User(userInfo);
    user.save()
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log("Authentication Error Occurred: " + err);
        res.json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      console.log(req.user);
      res.json({
        email: req.user.email,
        id: req.user._id,
        name: req.user.name
      });
    }
  });
};
