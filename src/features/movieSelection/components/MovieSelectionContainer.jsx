import MovieHeader from "./MovieHeader";
import MovieContainer from "./MovieContainer";
import MovieFilter from "./MovieFilter";
import useMovie from "../../../hooks/useMovie";
import { useState, useEffect } from "react";
import { SWAP_GENRE_MAPPING } from "../../../constants";

export default function MovieSelectionContainer() {
  const { movieData, isMovieLoading } = useMovie();
  const filterDataInit = movieData ? [...movieData] : [];
  const [filterMovieData, setFilterMovieData] = useState(filterDataInit);

  useEffect(() => {
    if (movieData) {
      setFilterMovieData([...movieData]);
    }
  }, [movieData, isMovieLoading]);

  const handleFilterMovieData = (genre) => {
    const filter = movieData?.filter((el) => {
      if (
        SWAP_GENRE_MAPPING[el.genreId1] === genre ||
        SWAP_GENRE_MAPPING[el.genreId2] === genre ||
        SWAP_GENRE_MAPPING[el.genreId3] === genre
      ) {
        return el;
      }
    });
    if (filter) {
      setFilterMovieData(filter);
    }
  };

  const handleSetFilterWithRawMovieData = () => {
    setFilterMovieData(filterDataInit);
  };

  return (
    <div>
      <MovieHeader />
      <MovieFilter
        handleFilterMovieData={handleFilterMovieData}
        handleSetFilterWithRawMovieData={handleSetFilterWithRawMovieData}
      />
      <MovieContainer filterMovieData={filterMovieData} />
    </div>
  );
}
