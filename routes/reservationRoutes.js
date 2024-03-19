const express = require("express");
const router = express.Router();
const {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
} = require("../controllers/reservationController");

router.get("/", getAllReservations);
router.get("/:reservationId", getReservationById);
router.post("/", createReservation);
router.put("/:reservationId", updateReservation);
router.delete("/:reservationId", deleteReservation);

module.exports = router;
