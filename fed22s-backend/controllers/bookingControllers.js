const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const {
      amountOfGuests,
      date,
      time,
      guest: { name, email, phoneNumber },
    } = req.body;

    const newbooking = await Booking.create({
      amountOfGuests: amountOfGuests,
      date: date,
      time: time,
      guest: { name: name, email: email, phoneNumber: phoneNumber },
    });

    return res.json(newbooking);
  } catch (error) {
    console.log(error);
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;

    const { amountOfGuests, date, time, guest } = req.body;

    const bookingToUpdate = await Booking.findById(bookingId);
    if (!bookingToUpdate) return res.sendStatus(404);

    if (amountOfGuests) bookingToUpdate.amountOfGuests = amountOfGuests;
    if (date) bookingToUpdate.date = date;
    if (time) bookingToUpdate.time = time;
    if (guest) bookingToUpdate.guest = guest;

    const response = await bookingToUpdate.save();
    console.log(response);

    return res.json(bookingToUpdate);
  } catch (error) {
    console.log(error);
    return res.statusCode(500).json(error);
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    if (bookings.length === 0) {
      return res.json({ message: 'Inga bookningar att visa' });
    } else {
      return res.json(bookings);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const bookingToDelete = await Booking.findById(bookingId);

    if (!bookingToDelete) {
      return res.json({ message: 'Denna bokning finns inte' });
    } else {
      await bookingToDelete.deleteOne();
      return res.sendStatus(204, res.json({ message: 'Bokning borttagen' }));
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;

    const bookings = await Booking.findById(bookingId);

    if (!bookings) throw new Error('That booking does not exist');

    return res.json(bookings);
  } catch (error) {
    return res.status(error.statusCode || 500).json(error.message);
  }
};
