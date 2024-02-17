/* eslint-disable no-case-declarations */
import { Booking, Delete } from "./actionTypes";

const initialState = {
  data: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case Booking:
      const newdata = [...state.data];
      //   newdata.push(action.payload);
      newdata.push(action.payload.data);

      return { data: newdata };
    case Delete:
      //   const filterData = state.data.filter((d) => d.id !== action.payload);
      const filterData = state.data.filter(
        (booking) => booking.id !== action.payload.id
      );

      return { data: filterData };

    default:
      return state;
  }
};
export default bookingReducer;
