const mongoose = require("mongoose");

const userSchema = new Mongoose.Schema({
  clientName: {
    type: String,
    required: [true, "Add your username"],
  },
  clientPhone: {
    type: String,
    required: [true, "Add your password"],
  },
  role: {
    type: String,
    enum: ["darbuotojas", "klientas"],
    default: "klientas",
  },
});

module.exports = mongoose.model("User", userSchema);
