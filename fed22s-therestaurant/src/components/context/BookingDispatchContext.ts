import { Dispatch, createContext } from 'react';
import { IAction } from '../reducers/BookingReducer';

export const BookingDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
