import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { IBooking } from '../models/IBooking';
import { BookingDispatchContext } from './context/BookingDispatchContext';
import axios from 'axios';
import { ActionType } from './reducers/BookingReducer';
import { Form } from 'react-router-dom';
import { DIV } from './styled/Div';
import { Button } from './styled/Button';
import { Input } from './styled/Input';
import { Spinner } from 'react-bootstrap';
import { UPDATE } from './styled/Update';

interface IUpdateBookingProps {
  booking: IBooking;
}

export const UpdateBooking = ({ booking }: IUpdateBookingProps) => {
  const dispatch = useContext(BookingDispatchContext);
  const [updatedBooking, setUpdatedbooking] = useState<IBooking>(booking);
  const [isUpdated, setIsUpdated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [booking]);

  const handleSubmit = async () => {
    try {
      await axios.put<IBooking>(
        `http://localhost:5001/api/v1/bookings/${booking._id}`,
        updatedBooking
      );
    } catch (error) {
      console.log(error);
    }

    dispatch({ type: ActionType.UPDATED, payload: updatedBooking });
    setIsUpdated(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    setUpdatedbooking((oldBooking) => ({
      ...oldBooking,
      [name]: e.target.value,
    }));
  };

  const handleGuestChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setUpdatedbooking((oldBooking) => ({
      ...oldBooking,
      guest: { ...oldBooking.guest, [name]: e.target.value },
    }));
  };
  return (
    <>
      {isUpdated ? (
        <DIV style={{ textAlign: 'center' }}>
          <h4>Uppdatering genomfört!</h4>
        </DIV>
      ) : (
        <Form onSubmit={handleSubmit}>
          {!loading && <Spinner animation='border' variant='warning' />}
          <UPDATE>
            <label>Namn</label>
            <Input
              name='name'
              type='text'
              defaultValue={booking.guest.name}
              onChange={handleGuestChange}
            />
            <label>Telefonnummer</label>
            <input
              name='phoneNumber'
              type='text'
              defaultValue={booking.guest.phoneNumber}
              onChange={handleGuestChange}
            />
            <label>E-post</label>
            <Input
              name='email'
              type='text'
              defaultValue={booking.guest.email}
              onChange={handleGuestChange}
            />
            <label>Antal gäster</label>
            <input
              name='amountOfGuests'
              type='number'
              defaultValue={booking.amountOfGuests}
              onChange={handleChange}
            />
            <label>Datum</label>
            <Input
              name='date'
              type='text'
              defaultValue={updatedBooking.date}
              onChange={handleChange}
            />

            <label>Tid</label>
            <Input
              name='time'
              type='text'
              defaultValue={booking.time}
              onChange={handleChange}
            />

            <Button>Uppdatera bokningen</Button>
          </UPDATE>
        </Form>
      )}
    </>
  );
};
