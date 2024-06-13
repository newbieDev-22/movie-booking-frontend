import { useEffect, useState, createContext } from "react";
import movieApi from "../apis/movie";
import movieSelectionApi from "../apis/movie-selection";

const MovieContext = createContext();

export default function MovieContextProvider({ children }) {
  const [movieData, setMovieData] = useState(null);
  const [isMovieLoading, setIsMovieLoading] = useState(true);
  const [movieSelectionData, setMovieSelectionData] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieResult = await movieApi.getAllMovie();
        setMovieData(movieResult.data.movieDataList);
        const movieSelectionResult = await movieSelectionApi.getAllMovieSelection();
        const dummyMovieSelection = movieSelectionResult.data.movieDataList.map(
          ({ id, ...keepAttrs }) => keepAttrs
        );
        setMovieSelectionData(dummyMovieSelection);
      } catch (err) {
        console.log(err);
      } finally {
        setIsMovieLoading(false);
      }
    };
    fetchMovie();
  }, []);

  const handleAddMovie = (newMovieObj) => {
    if (movieData) {
      setMovieData([...movieData, newMovieObj]);
    }
  };

  const handleDeleteMovie = (movieId) => {
    if (movieData) {
      const remainMovie = movieData.filter((el) => el.id !== movieId);
      setMovieData(remainMovie);
    }
  };

  const handleUpdateMovie = (movieId, data) => {
    if (movieData) {
      const founedMovieId = movieData.findIndex((el) => el.id === movieId);

      if (founedMovieId !== -1) {
        const newMovieData = [...movieData];
        newMovieData[founedMovieId] = data;
        setMovieData(newMovieData);
      }
    }
  };

  const handleCreateMovieSelection = (data) => {
    if (movieSelectionData) {
      setMovieSelectionData([...movieSelectionData, data]);
    }
  };

  const handleUpdateMovieSelection = (movieId, data) => {
    if (movieSelectionData) {
      const founedMovieId = movieSelectionData.findIndex((el) => el.movieId === movieId);

      if (founedMovieId !== -1) {
        const newMovieSelectionData = [...movieSelectionData];
        newMovieSelectionData[founedMovieId] = data;
        setMovieSelectionData(newMovieSelectionData);
      }
    }
  };

  const handleDeleteMovieSelection = (movieId) => {
    if (movieSelectionData) {
      const remainSelectionData = movieSelectionData.filter(
        (el) => el.movieId !== movieId
      );
      setMovieSelectionData(remainSelectionData);
    }
  };

  const sharedValue = {
    movieData,
    isMovieLoading,
    handleAddMovie,
    handleDeleteMovie,
    handleUpdateMovie,
    movieSelectionData,
    handleCreateMovieSelection,
    handleUpdateMovieSelection,
    handleDeleteMovieSelection,
  };

  return <MovieContext.Provider value={sharedValue}>{children}</MovieContext.Provider>;
}

export { MovieContext };
