import { IUser } from "../models/IUser";
import axios from "axios";

const login = async (username: string, password: string) => {
  const user: IUser = { username: username, password: password };

  try {
    const response = await axios.post(
      "https://sushi-haket.onrender.com/api/v1/login",
      user
    );

    if (response.data.token) {
      localStorage.setItem("userToken", JSON.stringify(response.data.token));
    }

    return response.data.message;
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  localStorage.removeItem("userToken");
  localStorage.removeItem("message");
};

export default {
  login,
  logout,
};
