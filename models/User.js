const bcrypt = require("bcrypt-nodejs");

const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    validate: {
      len: [8]
    },
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be at least 6 characters long"
    ],
    required: true
  },
  appointments: [{
    date: Date,
    clientId: String,
    client: String,
    technicianId: String,
    technician: String,
    examples: Array,
    service: String,
    style: String
  }],
  artist: Boolean,
  profileImage: {
    type: String,
    default: "https://srpc.ukzn.ac.za/wp-content/uploads/2018/05/profile-placeholder.png"
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: false
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  specialties: {
    type: Array,
    required: false
  },
  rating: Number,
  blurb: {
    type: String,
    maxLength: 300,
    required: false
  }
});

UserSchema.pre("save", function(next) {
  if(!this.isModified("password")) {
      return next();
  }
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
  next();
});

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// Used for search query
const index = { name: 'text' };
UserSchema.index(index);

// eslint-disable-next-line no-undef
module.exports = User = mongoose.model('users', UserSchema)