import { IUser } from "../models/IUser";
import axios from "axios";

const login = async (username: string, password: string) => {
  const user: IUser = { username: username, password: password };

  try {
    await axios
      .post("https://sushi-haket.onrender.com/api/v1/login", user)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem(
            "userToken",
            JSON.stringify(response.data.token)
          );
        }
        console.log(response.data.message);

        if (response.data.message) return response.data.message;
        else return response.data;
      });
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  localStorage.removeItem("userToken");
};

export default {
  login,
  logout,
};
