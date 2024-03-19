const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: [true, "Enter client's name"],
  },
  clientPhone: {
    type: String,
    required: [true, "Enter client's phone number"],
  },
  reservations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservation",
    },
  ],
});

module.exports = mongoose.model("Client", clientSchema);
