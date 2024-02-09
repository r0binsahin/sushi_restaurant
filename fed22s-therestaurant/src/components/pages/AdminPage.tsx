import { BookingApp } from "../BookingApp";
import { Button } from "../styled/Button";
import { CreateBooking } from "../CreateBooking";
import { useContext, useState } from "react";
import { NavbarMenu } from "../NavbarMenu";
import { BookingContext } from "../context/BookingContext";
import { DIV } from "../styled/Div";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router";

export const AdminPage = () => {
  const [createBooking, setCreateBooking] = useState(false);
  const bookings = useContext(BookingContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
    window.location.reload();
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

        <div>
          <Button onClick={handleLogout}>Logga ut</Button>
        </div>
      </div>
    </>
  );
};
