import axios from "../config/axios";

const showtimeApi = {};

showtimeApi.createShowtime = (body) => axios.post("/showtimes", body);
showtimeApi.getShowtimeByStartEndDate = (startDate, endDate) =>
  axios.get(`/showtimes/startDate/${startDate}/endDate/${endDate}`);
showtimeApi.deleteByDateAndTheater = (date, therterId) =>
  axios.delete(`/showtimes/date/${date}/theater/${therterId}`);

export default showtimeApi;
