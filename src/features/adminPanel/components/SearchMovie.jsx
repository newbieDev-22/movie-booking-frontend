import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import useMovie from "../../../hooks/useMovie";
import MovieEditCard from "./MovieEditCard";
import { SWAP_GENRE_MAPPING } from "../../../constants";
import MovieFilter from "../../movieSelection/components/MovieFilter";

export default function SearchMovie() {
  const { movieData, isMovieLoading } = useMovie();
  const filterDataInit = movieData ? [...movieData] : [];
  const [searchInput, setSearchInput] = useState("");
  const [filterMovieData, setFilterMovieData] = useState(filterDataInit);

  useEffect(() => {
    if (movieData) {
      setFilterMovieData([...movieData]);
    }
  }, [movieData, isMovieLoading]);

  const getFilterMovie = (searchValue) => {
    const filterMovie = movieData.filter((el) => {
      if (el.movieName.toLowerCase().includes(searchValue.toLowerCase())) {
        return el;
      }
    });
    setFilterMovieData(filterMovie);
  };

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
    <div className="pt-2 px-8 pb-4">
      <div className="text-2xl font-bold text-white">FIND MOVIES</div>
      <div className="py-8 px-6 grid grid-cols-7 gap-x-4 gap-y-2">
        <div className="col-span-4">
          <Input
            placeholder="Fill a movie name"
            height="full"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div>
          <Button color="white" onClick={() => getFilterMovie(searchInput)}>
            <div className="font-semibold text-xl">Search</div>
          </Button>
        </div>
        <div className="col-span-7 mt-6">
          <MovieFilter
            handleFilterMovieData={handleFilterMovieData}
            handleSetFilterWithRawMovieData={handleSetFilterWithRawMovieData}
          />
        </div>
      </div>
      <div className="px-6 grid grid-cols-6 gap-6">
        {filterMovieData?.map((el) => (
          <MovieEditCard key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
}
