import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import useMovie from "../../../hooks/useMovie";
import SelectMovieCard from "./SelectMovieCard";
import { MovieSelectionStatus } from "../../../constants";

export default function ShowtimeMovieDetail({ index, handleAddMovie, onClose }) {
  const { movieData } = useMovie();
  const [filterSelection, setFilterSelection] = useState([]);
  const [input, setInput] = useState("");
  const [filterMovie, setFilterMovie] = useState(null);

  const handleSearch = () => {
    const filter = movieData?.filter((el) =>
      el.movieName.toLowerCase().includes(input.toLowerCase())
    );
    setFilterMovie(filter);
  };

  useEffect(() => {
    const filterSelectionMovie = movieData?.filter((el) => {
      if (el.movieSelections.length > 0) {
        if (el.movieSelections[0].movieSelectTypeId === MovieSelectionStatus.CURRENTLY) {
          return el;
        }
      }
    });
    setFilterSelection(filterSelectionMovie);
  }, [movieData]);

  useEffect(() => {
    setFilterMovie(filterSelection);
  }, [filterSelection]);

  return (
    <div>
      <div className="pt-1 px-8 pb-4">
        <div className="py-1 px-6 grid grid-cols-7 gap-x-4">
          <div className="col-span-4">
            <Input
              placeholder="Fill a movie name"
              height="full"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div>
            <Button color="white" onClick={handleSearch}>
              <div className="font-semibold text-xl">Search</div>
            </Button>
          </div>
        </div>
        <div className="py-8 px-6 grid grid-cols-7 gap-6 ">
          {filterMovie?.map((el) => (
            <SelectMovieCard
              key={el.id}
              movieName={el.movieName}
              movieImagePage={el.movieImagePath}
              onClick={() => {
                handleAddMovie(index, {
                  movieId: el.id,
                  movieName: el.movieName,
                });
                onClose();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
