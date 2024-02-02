import { Footer } from '../Footer';
import { CreateBooking } from '../CreateBooking';
import { NavbarMenu } from '../NavbarMenu';

export const BookingPage = () => {
  return (
    <>
      <NavbarMenu></NavbarMenu>
      <h1>Boka bord här</h1>
      <CreateBooking></CreateBooking>
      <Footer></Footer>
    </>
  );
};
