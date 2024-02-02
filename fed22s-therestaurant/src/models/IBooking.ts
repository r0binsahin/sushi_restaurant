export interface IBooking {
  amountOfGuests: number;
  date: string;
  time: string;
  _id: string;
  guest: {
    name: string;
    email: string;
    phoneNumber: string;
  };
}
