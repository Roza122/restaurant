import * as actionTypes from "./actionTypes";
import axios from "axios";

const bookingTable = (bookingInfo) => {
  return async (dispatch) => {
    dispatch(BookingTableReq());
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: `PRO ${token}`,
        },
      };
      console.log(bookingInfo);
      await axios.post(`/book-table`, bookingInfo, config);
      dispatch(BookingSuccess());
      setTimeout(() => {
        dispatch(ResetBooking());
      }, 3000);
    } catch (err) {
      console.log(err);
      dispatch(BookingFail(err.response.data.message));
    }
  };
};

const BookingTableReq = () => {
  return {
    type: actionTypes.BOOKING_TABLE_REQ,
  };
};

const BookingSuccess = () => {
  return {
    type: actionTypes.BOOKING_TABLE_SUCCESS,
  };
};

const BookingFail = (error) => {
  return {
    type: actionTypes.BOOKING_TABLE_FAIL,
    error,
  };
};

const ResetBooking = () => {
  return {
    type: actionTypes.BOOKING_TABLE_RESET,
  };
};

export { bookingTable };
