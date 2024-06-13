import { useState } from "react";
import { GENRE_MAPPING } from "../../../constants";
import FilterBtn from "./FilterBtn";

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

  const handleBtn = (genre) => {
    return () => {
      handleFilter(genre);
      handleFilterMovieData(genre);
    };
  };

  const handleFilter = (name) => {
    setBtnState({ ...initBtnState, [name]: true });
  };
  return (
    <div className="grid grid-cols-6 gap-y-1 gap-x-8">
      <FilterBtn
        key="ALL"
        genre={"ALL"}
        btnState={btnState}
        cb={() => {
          handleFilter("ALL");
          handleSetFilterWithRawMovieData();
        }}
      />

      {Object.keys(GENRE_MAPPING).map((el) => (
        <FilterBtn key={el} genre={el} btnState={btnState} cb={handleBtn(el)} />
      ))}
    </div>
  );
}
