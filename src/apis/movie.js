import axios from "../config/axios";

const movieApi = {};

movieApi.createMovie = (body) => axios.post("/movies", body);
movieApi.updateMovieByMovieId = (movieId, body) =>
  axios.patch(`/movies/${movieId}`, body);
movieApi.deleteMovieByMovieId = (movieId) => axios.delete(`/movies/${movieId}`);
movieApi.getMovieByMiovie = (movieId) => axios.get(`/movie/${movieId}`);
movieApi.getAllMovie = () => axios.get("/movies");

export default movieApi;
