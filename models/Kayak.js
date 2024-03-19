const mongoose = require("mongoose");

const kayakSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  reservation_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reservation",
    },
  ],
});

module.exports = mongoose.model("Kayak", kayakSchema);
