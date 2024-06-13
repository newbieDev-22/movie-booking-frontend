import axios from "../config/axios";

const highlightApi = {};

highlightApi.createHighlight = (body) => axios.post("/highlights", body);
highlightApi.updateHighlight = (movieId, body) =>
  axios.patch(`/highlights/${movieId}`, body);
highlightApi.deleteHighlight = (movieId) => axios.delete(`/highlights/${movieId}`);
highlightApi.getHighlight = () => axios.get(`/highlights/`);

export default highlightApi;
