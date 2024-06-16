import MovieHeader from "./MovieHeader";
import MovieContainer from "./MovieContainer";
import MovieFilter from "./MovieFilter";
import useMovie from "../../../hooks/useMovie";
import { useState, useEffect } from "react";
import { MOVIESELECTION_TYPE_NAME_TO_ID } from "../../../constants";

export default function MovieSelectionContainer() {
  const { movieSelectionData } = useMovie();
  const [selectionStatus, setSelectionStatus] = useState(
    MOVIESELECTION_TYPE_NAME_TO_ID.CURRENTLY
  );
  const [selectionMovie, setSelectionMovie] = useState(null);
  const [filterMovieData, setFilterMovieData] = useState(null);

  const handleSelectionStatus = (state) => {
    setSelectionStatus(state);
  };

  useEffect(() => {
    if (movieSelectionData) {
      const filterSelectionMovie = movieSelectionData.filter(
        (el) => el.movieSelections[0]?.movieSelectTypeId === selectionStatus
      );
      setSelectionMovie(filterSelectionMovie);
      setFilterMovieData(filterSelectionMovie);
    }
  }, [movieSelectionData, selectionStatus]);

  const handleFilterMovieData = (genre) => {
    const filter = selectionMovie?.filter((el) => {
      if (
        el.genre1?.genreType === genre ||
        el.genre2?.genreType === genre ||
        el.genre3?.genreType === genre
      ) {
        return el;
      }
    });
    if (filter) {
      setFilterMovieData(filter);
    }
  };

  const handleSetFilterWithRawMovieData = () => {
    setFilterMovieData(selectionMovie);
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
      <MovieContainer
        filterMovieData={filterMovieData}
        selectionStatus={selectionStatus}
      />
    </div>
  );
}
