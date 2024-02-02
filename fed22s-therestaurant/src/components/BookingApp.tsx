import { useReducer } from 'react';
import { BookingReducer } from './reducers/BookingReducer';
import { BookingContext } from './context/BookingContext';
import { BookingDispatchContext } from './context/BookingDispatchContext';
import { Bookings } from './Bookings';
import { DeleteBooking } from './DeleteBooking';

export const BookingApp = () => {
  const [bookings, dispatch] = useReducer(BookingReducer, []);

  return (
    <BookingContext.Provider value={bookings}>
      <BookingDispatchContext.Provider value={dispatch}>
        <Bookings></Bookings>
      </BookingDispatchContext.Provider>
    </BookingContext.Provider>
  );
};
