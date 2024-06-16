import { useState } from "react";
import Button from "../../../components/Button";
import { GENRE_KEYS, GENRE_MAPPING, GENRE_ID_TO_NAME_MAPPING } from "../../../constants";
import { toast } from "react-toastify";
import GenreItem from "./GenreItem";

const initGenreState = {
  ACTION: false,
  ANIMATION: false,
  ADVENTURE: false,
  COMEDY: false,
  DRAMA: false,
  THRILLER: false,
  ROMANCE: false,
  HORROR: false,
  FANTASY: false,
  MUSICAL: false,
  CRIME: false,
};

const resetGenreId = {
  genreId1: null,
  genreId2: null,
  genreId3: null,
};

const getInitGenreState = (input) => {
  let genreInitState = { ...initGenreState };
  for (let key of GENRE_KEYS) {
    if (input[key]) {
      genreInitState = {
        ...genreInitState,
        [GENRE_ID_TO_NAME_MAPPING[input[key]]]: true,
      };
    }
  }

  return genreInitState;
};

const genreName = Object.keys(GENRE_MAPPING);

export default function SelectGenresDetail({ handleGenresChange, onClose, input }) {
  const [genreState, setGenreState] = useState(getInitGenreState(input));

  const handleCheckBoxChange = (e) => {
    setGenreState({
      ...genreState,
      [e.target.name]: e.target.checked,
    });
  };

  const handleGenreSumbit = () => {
    const values = Object.values(genreState);
    const sumValues = values.reduce((acc, item) => {
      return acc + item;
    }, 0);

    if (sumValues <= 3) {
      const genreData = {};
      let count = 0;
      for (const [key, value] of Object.entries(genreState)) {
        if (value) {
          genreData[GENRE_KEYS[count]] = GENRE_MAPPING[key];
          count++;
        }
        handleGenresChange({ ...resetGenreId, ...genreData });
        onClose();
      }
    } else {
      toast.error("Please select only 3 genres");
    }
  };

  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-8 px-2 pt-10 pb-4">
      {genreName.map((el) => (
        <GenreItem
          key={el}
          genre={el}
          genreState={genreState}
          cb={handleCheckBoxChange}
        />
      ))}

      <div className="col-span-3">
        <Button color="white" onClick={handleGenreSumbit}>
          <div className="font-bold">CONFIRM</div>
        </Button>
      </div>
    </div>
  );
}
