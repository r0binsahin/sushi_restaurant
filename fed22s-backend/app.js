require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookingRoutes = require("./routes/bookingRoutes");
const authRoutes = require("./routes/bookingRoutes");
const cors = require("cors");
const app = express();

const { errorMiddleware } = require("./middleware/errorMiddleware");
const { notFoundMiddleware } = require("./middleware/notFoundMiddleware");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(`Processing ${req.method} request to ${req.path}`);
  next();
});

app.use("/helloWorld", (req, res) => {
  return res.send("hello World!");
});
app.use("/api/v1/bookings", bookingRoutes);
app.use("/api/v1", authRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5002;

const run = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await await mongoose.connect(process.env.MONGO_DB);

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();
