const express = require("express");

const router = express.Router();
const { registerUser } = require("../controllers/authController");
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
router.post("/register", registerUser);

module.exports = router;
