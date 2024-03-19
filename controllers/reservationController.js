const Reservation = require("../models/Reservation");

module.exports = {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
};

async function getAllReservations(req, res) {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getReservationById(req, res) {
  try {
    const { reservationId } = req.params;
    const reservation = await Reservation.findById(reservationId);
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createReservation(req, res) {
  try {
    const reservation = await Reservation.create(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateReservation(req, res) {
  try {
    const { reservationId } = req.params;
    const updatedReservation = await Reservation.findByIdAndUpdate(
      reservationId,
      req.body,
      { new: true },
    );
    if (!updatedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json(updatedReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteReservation(req, res) {
  try {
    const { reservationId } = req.params;
    const deletedReservation = await Reservation.findByIdAndDelete(
      reservationId,
    );
    if (!deletedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json({ message: "Reservation deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
