import axios from "../config/axios";

const bookingApi = {};

bookingApi.getBookingByShowtimeId = (showtimeId) =>
  axios.get(`/bookings/showtime/${showtimeId}`);

bookingApi.createBooking = (data) => axios.post("/bookings", data);

bookingApi.getBookingListByUserId = () => axios.get("/bookings");
bookingApi.successUpdate = (bookingId) => axios.patch(`/bookings/success/${bookingId}`);

export default bookingApi;
