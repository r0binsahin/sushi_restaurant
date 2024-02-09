const express = require("express");

const router = express.Router();
const authenticate = require("../middleware/authentication");

const {
  createBooking,
  updateBooking,
  getAllBookings,
  getBookingById,
  deleteBooking,
} = require("../controllers/bookingControllers");

router.post("/", createBooking);
router.put("/:bookingId", authenticate, updateBooking);
router.get("/", authenticate, getAllBookings);
router.get("/:bookingId", authenticate, getBookingById);
router.delete("/:bookingId", authenticate, deleteBooking);

module.exports = router;
