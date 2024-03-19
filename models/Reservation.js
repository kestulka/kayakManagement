const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  kayak_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Kayak",
    required: true,
  },
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const pattern = /^(0[8-9]|1[0-9]|20):[0-5][0-9]$/; // Regex pattern for time validation
        return pattern.test(value);
      },
      message: "Plaukimo laikas turi būti nuo 08:00 iki 20:00",
    },
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
