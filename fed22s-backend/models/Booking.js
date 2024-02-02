const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  amountOfGuests: {
    type: Number,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  guest: {
    name: String,
    email: String,
    phoneNumber: String,
  },
});

module.exports = mongoose.model('Booking', BookingSchema);
