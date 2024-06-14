import axios from "../config/axios";

const showtimeApi = {};

showtimeApi.createShowtime = (body) => axios.post("/showtimes", body);

export default showtimeApi;
