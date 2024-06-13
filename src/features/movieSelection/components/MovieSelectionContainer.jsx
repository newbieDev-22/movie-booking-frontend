import MovieHeader from "./MovieHeader";
import MovieContainer from "./MovieContainer";
import MovieFilter from "./MovieFilter";
import useMovie from "../../../hooks/useMovie";
import { useState, useEffect } from "react";
import { MovieSelectionStatus, SWAP_GENRE_MAPPING } from "../../../constants";

export default function MovieSelectionContainer() {
  const { movieData, isMovieLoading, movieSelectionData } = useMovie();
  const [selectionStatus, setSelectionStatus] = useState(MovieSelectionStatus.CURRENTLY);
  const [selectionMovie, setSelectionMovie] = useState([]);
  const filterDataInit = selectionMovie ? [...selectionMovie] : [];
  const [filterMovieData, setFilterMovieData] = useState(filterDataInit);

  const handleSelectionStatus = (state) => {
    setSelectionStatus(state);
  };

  useEffect(() => {
    const getAllMovieId = movieSelectionData
      ?.filter((el) => el.movieSelectTypeId === selectionStatus)
      .map((el) => el.movieId);

    const selectionMovieBySelection = movieData?.filter((el) =>
      getAllMovieId.includes(el.id)
    );
    setSelectionMovie(selectionMovieBySelection);
  }, [selectionStatus, movieData, movieSelectionData]);

  useEffect(() => {
    if (selectionMovie) {
      setFilterMovieData([...selectionMovie]);
    }
  }, [selectionMovie, isMovieLoading]);

  const handleFilterMovieData = (genre) => {
    const filter = selectionMovie?.filter((el) => {
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
      <MovieHeader handleSelectionStatus={handleSelectionStatus} />
      <div className="px-8 pt-8">
        <MovieFilter
          handleFilterMovieData={handleFilterMovieData}
          handleSetFilterWithRawMovieData={handleSetFilterWithRawMovieData}
        />
      </div>
      <MovieContainer filterMovieData={filterMovieData} />
    </div>
  );
}
