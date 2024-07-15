import { useEffect, useState, createContext, useMemo } from "react";
import movieApi from "../apis/movie";
import useAuth from "../hooks/useAuth";

const MovieContext = createContext();

export default function MovieContextProvider({ children }) {
  const { authUser } = useAuth();
  const [movieData, setMovieData] = useState(null);
  const [isMovieLoading, setIsMovieLoading] = useState(true);
  const [movieSelectionData, setMovieSelectionData] = useState(null);
  const [highlightData, setHighlightData] = useState(null);

  const fetchMovie = async () => {
    try {
      const movieResult = await movieApi.getAllMovie();
      setMovieData(movieResult.data.movieDataList);
    } catch (err) {
      console.log(err);
    } finally {
      setIsMovieLoading(false);
    }
  };

  useEffect(() => {
    if (movieData) {
      const movieSelectionResult = movieData.filter((el) => {
        if (el.movieSelections) {
          return el.movieSelections.length > 0;
        }
      });
      setMovieSelectionData(movieSelectionResult);
      const highlightResult = movieData.filter((el) => {
        if (el.highlights) {
          return el.highlights.length > 0;
        }
      });
      setHighlightData(highlightResult);
    }
  }, [movieData]);

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

  const handleCreateMovieSelection = (movieId, data) => {
    if (movieData) {
      const foundedIndex = movieData.findIndex((el) => el.id === movieId);
      if (foundedIndex !== -1) {
        const newMovieSelectionData = [...movieData];
        newMovieSelectionData[foundedIndex]["movieSelections"] = [data];
        setMovieSelectionData(newMovieSelectionData);
      }
    }
  };

  const handleUpdateMovieSelection = (movieId, data) => {
    if (movieSelectionData) {
      const foundedIndex = movieSelectionData.findIndex((el) => el.id === movieId);

      if (foundedIndex !== -1) {
        const newMovieSelectionData = [...movieSelectionData];
        newMovieSelectionData[foundedIndex]["movieSelections"] = [data];
        setMovieSelectionData(newMovieSelectionData);
      }
    }
  };

  const handleDeleteMovieSelection = (movieId) => {
    if (movieSelectionData) {
      const foundedIndex = movieSelectionData.findIndex((el) => el.id === movieId);

      if (foundedIndex !== -1) {
        const newMovieSelectionData = [...movieSelectionData];
        newMovieSelectionData[foundedIndex]["movieSelections"] = [];
        setMovieSelectionData(newMovieSelectionData);
      }
    }
  };

  const handleCreateHighlight = (movieId, data) => {
    if (movieData) {
      const foundedIndex = movieData.findIndex((el) => el.id === movieId);
      if (foundedIndex !== -1) {
        const newMovieHighlightData = [...movieData];
        newMovieHighlightData[foundedIndex]["highlights"] = [data];
        const filterHighlight = newMovieHighlightData.filter((el) => {
          if (el.highlights) {
            return el.highlights.length > 0;
          }
        });
        setHighlightData(filterHighlight);
      }
    }
  };

  const handleUpdateHighlight = (movieId, data) => {
    if (highlightData) {
      const founedMovieId = highlightData.findIndex((el) => el.id === movieId);

      if (founedMovieId !== -1) {
        const newMovieHighlightData = [...highlightData];
        newMovieHighlightData[founedMovieId]["highlights"] = [data];
        setHighlightData(newMovieHighlightData);
      }
    }
  };

  const handleDeleteHighlight = (movieId) => {
    if (highlightData) {
      const remainHighlightData = highlightData.filter((el) => el.id !== movieId);
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
