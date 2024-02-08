const express = require("express");

const router = express.Router();

const {
  createBooking,
  updateBooking,
  getAllBookings,
  getBookingById,
  deleteBooking,
} = require("../controllers/bookingControllers");

router.post("/", createBooking);
router.put("/:bookingId", updateBooking);
router.get("/", getAllBookings);
router.get("/:bookingId", getBookingById);
router.delete("/:bookingId", deleteBooking);

module.exports = router;
