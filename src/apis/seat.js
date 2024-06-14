import axios from "../config/axios";

const seatApi = {};

seatApi.getSeatId = (theaterId, row, column) =>
  axios.get(`/seats/seatId/theaterId/${theaterId}/row/${row}/column/${column}`);

export default seatApi;
