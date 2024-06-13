import { useEffect, useState, createContext } from "react";
import movieApi from "../apis/movie";

const MovieContext = createContext();

export default function MovieContextProvider({ children }) {
  const [movieData, setMovieData] = useState(null);
  const [isMovieLoading, setIsMovieLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await movieApi.getAllMovie();
        setMovieData(res.data.movieDataList);
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

  const sharedValue = { movieData, isMovieLoading, handleAddMovie };

  return <MovieContext.Provider value={sharedValue}>{children}</MovieContext.Provider>;
}

export { MovieContext };
