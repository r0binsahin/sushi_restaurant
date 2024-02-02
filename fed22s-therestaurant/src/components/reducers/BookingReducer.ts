import axios from 'axios';
import { IBooking } from '../../models/IBooking';

export enum ActionType {
  UPDATED,
  REMOVED,
  DISPLAYED,
}

export interface IAction {
  type: ActionType;
  payload: any;
}

export const BookingReducer = (bookings: IBooking[], action: IAction) => {
  switch (action.type) {
    case ActionType.UPDATED: {
      const updatedBooking = action.payload;

      return bookings.map((booking) =>
        booking._id === updatedBooking._id ? updatedBooking : booking
      );
    }

    case ActionType.REMOVED: {
      return bookings.filter((booking) => booking._id.toString());
    }

    case ActionType.DISPLAYED: {
      return action.payload;
    }

    default:
      break;
  }

  return bookings;
};
