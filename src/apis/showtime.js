import axios from "../config/axios";

const showtimeApi = {};

showtimeApi.createShowtime = (body) => axios.post("/showtimes", body);
showtimeApi.getShowtimeByStartEndDate = (startDate, endDate) =>
  axios.get(`/showtimes/startDate/${startDate}/endDate/${endDate}`);
showtimeApi.deleteByDateAndTheater = (date, therterId) =>
  axios.delete(`/showtimes/date/${date}/theater/${therterId}`);

showtimeApi.getShowtimeByMovieStartEndDate = (movieId, startDate, endDate) =>
  axios.get(`showtimes/movie/${movieId}/startDate/${startDate}/endDate/${endDate}`);

showtimeApi.getShowtimeById = (showtimeId) => axios.get(`showtimes/${showtimeId}/`);

export default showtimeApi;
