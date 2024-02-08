import { Footer } from "../Footer";
import { BookingApp } from "../BookingApp";
import { Button } from "../styled/Button";
import { CreateBooking } from "../CreateBooking";
import { useContext, useState } from "react";
import { NavbarMenu } from "../NavbarMenu";
import { BookingContext } from "../context/BookingContext";
import { DIV } from "../styled/Div";
import Login from "../Login";
import RegisterUser from "../RegisterUser";
import { IUser } from "../../models/IUser";
import axios from "axios";

export const AdminPage = () => {
  const [createBooking, setCreateBooking] = useState(false);
  const bookings = useContext(BookingContext);
  const [isRegister, setIsRegister] = useState(false);

  const handleRegister = () => {
    setIsRegister(!isRegister);
  };

  const onRegister = async (
    username: string,
    email: string,
    password: string
  ) => {
    const user: IUser = {
      username: "hej",
      email: "hej",
      password: "hej",
    };

    try {
      const res = await axios.post<IUser>(
        "http://localhost:5001/api/v1/register",
        user
      );

      console.log("user added", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavbarMenu></NavbarMenu>
      <div
        className="container"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <h1>Adminsida</h1>
        <div>
          <Button onClick={() => setCreateBooking(!createBooking)}>
            Skapa ny bokning
          </Button>
        </div>
        {createBooking ? (
          <CreateBooking />
        ) : (
          <>
            <h2>Bokningar</h2>
            {bookings ? (
              <BookingApp></BookingApp>
            ) : (
              <DIV>
                <p>Inga bookningar att visa än</p>
              </DIV>
            )}
          </>
        )}
      </div>

      {isRegister ? (
        <RegisterUser onRegister={onRegister} />
      ) : (
        <Login handleRegister={handleRegister} onLogin={() => {}} />
      )}

      <Footer></Footer>
    </>
  );
};
