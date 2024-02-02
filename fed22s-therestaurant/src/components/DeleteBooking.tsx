import { useContext, useEffect, useState } from 'react';
import { BookingDispatchContext } from './context/BookingDispatchContext';
import { IBooking } from '../models/IBooking';
import { ActionType } from './reducers/BookingReducer';
import axios from 'axios';
import { DELETE } from './styled/Delete';
import { Spinner } from 'react-bootstrap';

interface IDeleteBookingProps {
  booking: IBooking;
  handleDiscard: () => void;
  removeFiltered: (id: string) => void;
}

export const DeleteBooking = ({
  booking,
  handleDiscard,
  removeFiltered,
}: IDeleteBookingProps) => {
  const dispatch = useContext(BookingDispatchContext);
  const [loading, setLoading] = useState(false);

  const [approveDelete, setApprroveDelete] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [booking]);

  const removeBooking = async () => {
    let response = await axios.delete<IBooking>(
      `http://localhost:5001/api/v1/bookings/${booking._id}`
    );
    dispatch({ type: ActionType.REMOVED, payload: booking._id });
    removeFiltered(booking._id);
    handleDiscard();
    setApprroveDelete(true);
  };

  return (
    <>
      {!loading && <Spinner animation='border' variant='warning' />}
      <DELETE>
        {approveDelete ? (
          <>
            <div>Avbokning genomförd!</div>
          </>
        ) : (
          <>
            <div style={{ textAlign: 'center' }}>
              Är du säker på att du vill avboka?
            </div>
            <button onClick={removeBooking}>Bekräfta</button>
          </>
        )}
      </DELETE>
    </>
  );
};
