import { useState } from "react";
import Button from "../../../components/Button";
import { GENRE_MAPPING } from "../../../constants";

const initBtnState = {
  ALL: false,
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

const btnBgColorMapping = {
  true: "isActiveBtn",
  false: "isNonActiveBtn",
};

const genreName = Object.keys(GENRE_MAPPING);

export default function MovieFilter({
  handleFilterMovieData,
  handleSetFilterWithRawMovieData,
}) {
  const [btnState, setBtnState] = useState({
    ALL: true,
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
  });

  function FilterBtn(genre) {
    return (
      <Button
        key={genre}
        color="white"
        bg={btnBgColorMapping[btnState[genre]]}
        onClick={() => {
          handleFilter(genre);
          handleFilterMovieData(genre);
        }}
      >
        {genre}
      </Button>
    );
  }

  const handleFilter = (name) => {
    setBtnState({ ...initBtnState, [name]: true });
  };
  return (
    <div className="px-8 pt-8">
      <div className="grid grid-cols-6 gap-y-1 gap-x-8">
        <Button
          color="white"
          bg={btnBgColorMapping[btnState.ALL]}
          onClick={() => {
            handleFilter("ALL");
            handleSetFilterWithRawMovieData();
          }}
        >
          ALL
        </Button>
        {genreName.map((el) => FilterBtn(el))}
      </div>
    </div>
  );
}
