import axios from "../config/axios";

const movieSelectionApi = {};

movieSelectionApi.createMovieSelection = (body) =>
  axios.post("/movie-selection-types", body);
movieSelectionApi.updateMovieSelectionByMovieId = (movieId, body) =>
  axios.patch(`/movie-selection-types/update/${movieId}`, body);
movieSelectionApi.deleteMovieSelectionByMovieId = (movieId) =>
  axios.delete(`/movie-selection-types/delete/${movieId}`);
movieSelectionApi.getMovieSelectionBySelectionType = (selectionType) =>
  axios.get(`/movie-selection-types/${selectionType}`);
movieSelectionApi.getAllMovieSelection = () => axios.get(`/movie-selection-types/`);
movieSelectionApi.getMovieSelectionByMovieId = (movieId) =>
  axios.get(`/movie-selection-types/${movieId}`);

export default movieSelectionApi;
