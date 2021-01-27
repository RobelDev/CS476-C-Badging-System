
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
    unique: true,

  },
  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    default: "employee",
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = User = mongoose.model("user", userSchema);
