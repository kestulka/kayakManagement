const Reservation = require("../models/Reservation");
const Kayak = require("../models/Kayak");
const Client = require("../models/Client");

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
    const { kayak_id, client_id, date, time } = req.body; // Updated to match the keys in the request body
    const reservation = new Reservation({
      kayak_id: kayak_id, // Updated to use kayak_id from the request body
      client_id: client_id, // Updated to use client_id from the request body
      date: new Date(date),
      time: time,
    });

    await reservation.save();

    // Update kayak availability to false and add reservation to kayak's reservation_id array
    await Kayak.findByIdAndUpdate(kayak_id, {
      $set: { availability: false },
      $push: { reservation_id: reservation._id },
    });

    // Add reservation to client's reservations array
    await Client.findByIdAndUpdate(client_id, {
      $push: { reservations: reservation._id },
    });

    res
      .status(201)
      .json({ success: true, message: "Reservation created successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}

async function updateReservation(req, res) {
  try {
    const { reservationId } = req.params;

    // Find the existing reservation
    const existingReservation = await Reservation.findById(reservationId);
    if (!existingReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    // Update the reservation
    const updatedReservation = await Reservation.findByIdAndUpdate(
      reservationId,
      req.body,
      { new: true },
    );

    // If the kayak ID or client ID is modified, update the kayak's availability and client's reservations array
    if (
      req.body.kayak_id !== existingReservation.kayak_id ||
      req.body.client_id !== existingReservation.client_id
    ) {
      // Update kayak availability
      await Kayak.findByIdAndUpdate(existingReservation.kayak_id, {
        $pull: { reservation_id: reservationId },
      });
      await Kayak.findByIdAndUpdate(req.body.kayak_id, {
        $push: { reservation_id: reservationId },
      });

      // Update client's reservations array
      await Client.findByIdAndUpdate(existingReservation.client_id, {
        $pull: { reservations: reservationId },
      });
      await Client.findByIdAndUpdate(req.body.client_id, {
        $push: { reservations: reservationId },
      });
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
