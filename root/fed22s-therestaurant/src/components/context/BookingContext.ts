import { createContext } from 'react';
import { IBooking } from '../../models/IBooking';

export const BookingContext = createContext<IBooking[]>([]);
