const User = require("../models/User");

module.exports = function(app, passport) {
  //Api used for searching database for artists
  app.get("/api/search", function(req, res) {
    if (req.query.name && req.query.name.trim() != "") {
      const {name, specialties, location} = req.query;
      const query = {
        $text: {
          $search: name
        },
        artist: true
      };
      if (specialties) {
        query.specialties = specialties.split(",");
      };
      if (location) {
        query.location = location;
      };
      console.log(query);
      User.createIndexes( { "name": "text" } ).then(function() {
        User.find(query).then(function(resp) {
          const users = resp.map(user => {
            console.log(user);
            const structure = {
              name: user.name,
              specialties: user.specialties,
              location: user.location,
              rating: user.rating,
              rating: user.rating,
              id: user._id
            }
            return structure;
          });
          res.json(users);
        });
      });
    } else {
      User.find({artist: true}).then(function(resp) {
        const users = resp.map(user => {
          console.log(user);
          const structure = {
            name: user.name,
            specialties: user.specialties,
            location: user.location,
            rating: user.rating,
            id: user._id
          }
          return structure;
        });
        res.json(users);
      });
    }
  });

  app.get("/api/users/:id", function(req, res) {
    // Making sure the user is the account owner
    console.log(req.params.id);
    User.findById(req.params.id)
    .then(user => {
      const userInfo = {
        name: user.name,
        specialties: user.specialties,
        blurb: user.blurb,
        location: "Orlando, FL",
        rating: user.rating,
        isMyProfile: req.user ? (req.params.id === req.user._id) : false
      }
      res.json(userInfo);
    });
  });

  // Allowing users to update their profile information
  app.put("/api/user", function(req, res) {
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
    let userInfo = {
      name: `${req.body.firstName} ${req.body.lastName}`,
      email: req.body.email,
      password: req.body.password
    };
    if (req.body.artist) {
      userInfo = {
        ...userInfo,
        artist: true,
        specialties: req.body.specialties.split(",")
      }
    }
    console.log(userInfo);
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
    res.json("/");
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
        name: req.user.name,
        artist: req.user.artist
      });
    }
  });
};
