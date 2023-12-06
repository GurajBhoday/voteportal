const mongoose = require("mongoose");

const userProfileSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  company: String
  // Add more fields as needed
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
