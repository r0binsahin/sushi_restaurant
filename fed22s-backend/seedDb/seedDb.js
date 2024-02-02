require("dotenv").config();
const mongoose = require("mongoose");
const Booking = require("../models/Booking");

const { BookingMockData } = require("./BookingMockData");

const seedRestaurantsDb = async (connectionString) => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(connectionString);

    console.log(`MongoDB connected: ${conn.connection.host}`);
    await Booking.deleteMany();

    await Booking.create(BookingMockData);

    console.log("Database successfully populated with test data");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

seedRestaurantsDb(process.env.MONGODB);
