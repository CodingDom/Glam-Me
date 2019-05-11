const User = require("../models/User");
const axios = require("axios");
const fs = require('fs');
const imgurUploader = require('imgur-uploader');

module.exports = function(app, passport) {
  //Api used for searching database for artists
  app.get("/api/search", function(req, res) {
    if (req.query.name && req.query.name.trim() != "") {
      const {name, service, location} = req.query;
      const query = {
        $text: {
          $search: name
        },
        artist: true
      };
      if (service) {
        query.specialties = service.split(",");
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
              profileImage: user.profileImage,
              id: user._id
            }
            return structure;
          });
          res.json(users);
        });
      });
    } else {
      const {service, location} = req.query;
      const query = {
        artist: true
      };
      if (service) {
        query.specialties = service.split(",");
      };
      if (location) {
        query.location = location;
      };
      console.log(service);
      User.find(query).then(function(resp) {
        const users = resp.map(user => {
          const structure = {
            name: user.name,
            specialties: user.specialties,
            location: user.location,
            rating: user.rating,
            profileImage: user.profileImage,
            id: user._id
          }
          return structure;
        });
        res.json(users);
      });
    }
  });

  app.get("/api/appointments", function(req, res) {
    if (!req.user || !req.user.appointments) {
      return res.status(404).end();
    }
    res.json(req.user.appointments);
  });

  app.post("/api/appointments", function(req, res) {
    // Making sure the user is logged in
    // if (!req.user || !req.user._id) {
    //   return res.status(500).end();
    // }
    const appointmentInfo = {
      examples: [],
      service: req.body.service,
      date: req.body.date
    };
    if (req.body.specifications) {
      appointmentInfo.specification = req.body.specifications;
    }
    if (req.body.style) {
      appointmentInfo.style = req.body.style;
    }

    function updateAppointments() {
      console.log("Updating appointments");
        User.findById(req.body.technician)
        .then(user => {
          console.log(user);
          const upsert = { $push: { appointments: { ...appointmentInfo, technician: user.name, technicianId: user._id } }};
          console.log(upsert);
          User.updateOne({ _id: req.user._id },  upsert)
          .then(resp => {
            // res.json(data.link);
            console.log("Updated Client Info!", resp);
            res.status(200);
          });
        });
        
        User.updateOne({ _id: req.body.technician }, { $push: { appointments: { ...appointmentInfo, client: req.user.name, clientId: req.user._id } } })
        .then(resp => {
          console.log("Updated Technician Info!", resp);
        });
    }

    if (req.files.image) {
      imgurUploader(fs.readFileSync(req.files.image.path),{title: "ExampleImage"}, "Client-Id " + process.env.IMGUR_CLIENT_ID).then(data => {
        appointmentInfo.examples.push(data.link);
        updateAppointments();
      }).catch(err => {
        console.log(err);
        res.status(500).end();
      });
    } else {
        updateAppointments();
    }
  });

  app.get("/api/users/:id", function(req, res) {
    User.findById(req.params.id)
    .then(user => {
      const userInfo = {
        name: user.name,
        specialties: user.specialties,
        blurb: user.blurb,
        location: "Orlando, FL",
        profileImage: user.profileImage,
        rating: user.rating ? user.rating : 0,
        isMyProfile: req.user ? (req.params.id === req.user._id) : false
      }
      res.json(userInfo);
    });
  });

  // Allowing users to update their profile information
  app.put("/api/user", function(req, res) {
    // Making sure the user is the an artist account
    if (!req.user.artist) {
      return res.status(500).end();
    }
    console.log("Editing artist page!");
    // Limiting amount of information that may be changed
    const updatedInfo = {};
    if (req.body.name) {
      updatedInfo.name = req.body.name;
    }
    if (req.body.blurb) {
      updatedInfo.blurb = req.body.blurb;
    }
    console.log(updatedInfo, req.user._id);
    User.updateOne({ _id: req.user._id }, updatedInfo)
      .then(function(resp) {
        res.status(200).end();
        console.log(resp);
        console.log("Successfully Updated!");
      })
      .catch(function(err) {
        console.log(err);
        res.status(500).end();
      });
  });

  app.post("/api/upload", function(req, res) {
    imgurUploader(fs.readFileSync(req.files.image.path),{title: "UserImage"}, "Client-Id " + process.env.IMGUR_CLIENT_ID).then(data => {
      const updatedInfo = {
        profileImage: data.link
      };
      if (req.body.name) {
        updatedInfo.name = req.body.name;
      }
      if (req.body.blurb) {
        updatedInfo.blurb = req.body.blurb;
      }
      User.updateOne({ _id: req.user._id }, updatedInfo)
      .then(resp => {
        res.json(data.link);
      });
    }).catch(err => {
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
