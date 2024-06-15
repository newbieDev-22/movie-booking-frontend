import { useEffect, useState, createContext, useMemo } from "react";
import movieApi from "../apis/movie";
import movieSelectionApi from "../apis/movie-selection";
import highlightApi from "../apis/highlight";
import useAuth from "../hooks/useAuth";

const MovieContext = createContext();

export default function MovieContextProvider({ children }) {
  const { authUser } = useAuth();
  const [movieData, setMovieData] = useState(null);
  const [isMovieLoading, setIsMovieLoading] = useState(true);
  const [movieSelectionData, setMovieSelectionData] = useState(null);
  const [highlightData, setHighlightData] = useState([]);

  const fetchMovie = async () => {
    try {
      const movieResult = await movieApi.getAllMovie();
      setMovieData(movieResult.data.movieDataList);
      const movieSelectionResult = await movieSelectionApi.getAllMovieSelection();
      const dummyMovieSelection = movieSelectionResult.data.movieDataList.map(
        ({ id, ...keepAttrs }) => keepAttrs
      );
      setMovieSelectionData(dummyMovieSelection);
      const highlightResult = await highlightApi.getHighlight();
      if (highlightResult.data.highlightList.length !== 0) {
        const dummyHighlight = highlightResult.data.highlightList.map(
          ({ id, ...keepAttrs }) => keepAttrs
        );
        setHighlightData(dummyHighlight);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsMovieLoading(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      fetchMovie();
    }
  }, [authUser]);

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

  const handleCreateHighlight = (data) => {
    if (highlightData) {
      setHighlightData([...highlightData, data]);
    }
  };

  const handleUpdateHighlight = (movieId, data) => {
    if (highlightData) {
      const founedMovieId = highlightData.findIndex((el) => el.movieId === movieId);

      if (founedMovieId !== -1) {
        const newMovieHighlightData = [...highlightData];
        newMovieHighlightData[founedMovieId] = data;
        setHighlightData(newMovieHighlightData);
      }
    }
  };

  const handleDeleteHighlight = (movieId) => {
    if (highlightData) {
      const remainHighlightData = highlightData.filter((el) => el.movieId !== movieId);
      setHighlightData(remainHighlightData);
    }
  };

  const sharedValue = useMemo(
    () => ({
      movieData,
      isMovieLoading,
      fetchMovie,
      handleAddMovie,
      handleDeleteMovie,
      handleUpdateMovie,
      movieSelectionData,
      handleCreateMovieSelection,
      handleUpdateMovieSelection,
      handleDeleteMovieSelection,
      highlightData,
      handleCreateHighlight,
      handleUpdateHighlight,
      handleDeleteHighlight,
    }),
    [movieData, isMovieLoading, movieSelectionData, highlightData]
  );

  return <MovieContext.Provider value={sharedValue}>{children}</MovieContext.Provider>;
}

export { MovieContext };
