import { Footer } from '../Footer';
import { BookingApp } from '../BookingApp';
import { Button } from '../styled/Button';
import { CreateBooking } from '../CreateBooking';
import { useState } from 'react';
import { NavbarMenu } from '../NavbarMenu';

export const AdminPage = () => {
  const [createBooking, setCreateBooking] = useState(false);

  return (
    <>
      <NavbarMenu></NavbarMenu>
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
          <BookingApp></BookingApp>{' '}
        </>
      )}

      <Footer></Footer>
    </>
  );
};
