import { useContext, useEffect, useState } from "react";
import { BookingContext } from "./context/BookingContext";
import { FilterData } from "./DisplayBookings";

import { Spinner } from "react-bootstrap";

export const Bookings = () => {
  const bookings = useContext(BookingContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {!loading ? (
        <Spinner animation="border" variant="warning" />
      ) : (
        <div>
          <FilterData bookings={bookings}></FilterData>
        </div>
      )}
    </>
  );
};
