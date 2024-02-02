import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { IBooking } from '../models/IBooking';
import { DISPLAYSTYLED } from './styled/DisplayStyled';
import { FILTER } from './styled/Filter';
import { GetOneBooking } from './GetOneBooking';
import { DIV } from './styled/Div';
import { BookingDispatchContext } from './context/BookingDispatchContext';
import { ActionType } from './reducers/BookingReducer';
import { getAllBookings } from '../services/bookingServices';

interface IDisplayBookingProps {
  bookings: IBooking[];
}

export const FilterData = ({ bookings }: IDisplayBookingProps) => {
  const [data, setData] = useState<IBooking[]>(bookings);
  const [filteredBooking, setBookings] = useState<IBooking[]>(data);

  useEffect(() => {
    const allBookings = async () => {
      try {
        const data = (await getAllBookings()) || [];
        setData(data);
        setBookings(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (bookings.length === 0) allBookings();
  }, [bookings]);

  const removeFilteredBooking = (id: string) => {
    setBookings(filteredBooking.filter((booking) => booking._id !== id));
  };

  const Filter = (e: ChangeEvent<HTMLInputElement>) => {
    setBookings(
      data.filter(
        (d) =>
          d.guest.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          d.date.includes(e.target.value)
      )
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <DIV
        style={{
          width: '100%',
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3>Filtrera</h3>

        <FILTER>
          <label>Namn</label>
          <input
            style={{ border: 'none', borderRadius: '10px', padding: 5 }}
            placeholder='t.ex: Calle'
            type='text'
            onChange={Filter}
          ></input>

          <label>Datum</label>
          <input
            style={{ border: 'none', borderRadius: '10px', padding: 5 }}
            placeholder='ÅÅÅÅ-MM-DD'
            type='text'
            onChange={Filter}
          ></input>
        </FILTER>
      </DIV>

      <DISPLAYSTYLED
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {filteredBooking.map((booking) => (
          <div key={booking._id} className='booking'>
            <p>
              <span>Namn: </span>
              {booking.guest.name.toLowerCase()}
            </p>
            <p>
              <span>Telefonnummer:</span> {booking.guest.phoneNumber}
            </p>
            <p>
              <span>E-post:</span> {booking.guest.email}
            </p>
            <p>
              {' '}
              <span>Antal gäster:</span> {booking.amountOfGuests}
            </p>
            <p>
              {' '}
              <span>Datum: </span>
              {booking.date}
            </p>
            <p>
              <span> Tid:</span> {booking.time}
            </p>
            <p>
              <span> Boknings-id:</span> {booking._id}
            </p>
            <GetOneBooking booking={booking} remove={removeFilteredBooking} />
          </div>
        ))}
      </DISPLAYSTYLED>
    </div>
  );
};
