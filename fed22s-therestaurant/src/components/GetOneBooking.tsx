import { useState } from "react";
import { IBooking } from "../models/IBooking";
import { BOOKINGBUTTON } from "./styled/BookingButton";
import { UpdateBooking } from "./UpdateBooking";
import { DeleteBooking } from "./DeleteBooking";

interface IBookingDisplayProp {
  booking: IBooking;
  remove: (id: string) => void;
}

export const GetOneBooking = ({ booking, remove }: IBookingDisplayProp) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  return (
    <>
      <BOOKINGBUTTON>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <button onClick={() => setUpdateMode(!updateMode)}>Uppdatera</button>
          <button onClick={() => setDeleteMode(!deleteMode)}>Avboka</button>
          {}
        </div>
      </BOOKINGBUTTON>

      {updateMode ? <UpdateBooking booking={booking}></UpdateBooking> : " "}
      {deleteMode ? (
        <DeleteBooking
          handleDiscard={() => null}
          booking={booking}
          removeFiltered={remove}
        ></DeleteBooking>
      ) : (
        " "
      )}
    </>
  );
};
