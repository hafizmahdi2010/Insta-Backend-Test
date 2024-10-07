const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mahdifarooqui78:dG5cEnZOyzZSLoGA@instafromstest.u90yu.mongodb.net/?retryWrites=true&w=majority&appName=InstaFromsTest");

const userScheme = new mongoose.Schema({
  firstField: String,
  password: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const userModel = mongoose.model("User", userScheme);

module.exports = userModel;

// Ip : 106.222.213.117
// dG5cEnZOyzZSLoGA
// mahdifarooqui78