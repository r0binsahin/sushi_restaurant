import axios from "axios";
import { IBooking } from "../models/IBooking";
import { authHeader } from "./auth-header";

export const getAllBookings = async () => {
  try {
    const response = await axios.get<IBooking[]>(
      "http://localhost:5001/api/v1/bookings",
      { headers: authHeader() }
      /*   'https://sushi-haket.onrender.com/api/v1/bookings' */
    );

    if (response.data.length === 0) {
      return [];
    } else {
      return response.data;
    }
  } catch {
    console.error();
  }
};
