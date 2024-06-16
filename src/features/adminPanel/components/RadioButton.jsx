import { useState } from "react";
import Button from "../../../components/Button";
import {
  MOVIESELECTION_NAME,
  MOVIESELECTION_TYPE_ID_TO_NAME,
  MOVIESELECTION_TYPE_NAME_TO_ID,
  MOVIE_SELECTTION_NAME,
} from "../../../constants";
import RadioBtnItem from "./RadioBtnItem";
import movieSelectionApi from "../../../apis/movie-selection";
import { toast } from "react-toastify";
import useMovie from "../../../hooks/useMovie";

export default function RadioButton({ data, onClose }) {
  const {
    movieSelectionData,
    handleCreateMovieSelection,
    handleUpdateMovieSelection,
    handleDeleteMovieSelection,
  } = useMovie();
  const filterSelection = movieSelectionData?.filter((el) => el.id === data.id)[0];

  const initRadioValue =
    filterSelection?.movieSelections.length > 0
      ? MOVIESELECTION_TYPE_ID_TO_NAME[
          filterSelection.movieSelections[0].movieSelectTypeId
        ]
      : MOVIESELECTION_NAME["NOTSELECTED"];
  const [radioValue, setRadioValue] = useState(initRadioValue);

  const handleMovieSelectionStatus = async () => {
    try {
      if (filterSelection?.movieSelections?.length > 0) {
        if (radioValue !== MOVIESELECTION_NAME["NOTSELECTED"]) {
          if (
            MOVIESELECTION_TYPE_NAME_TO_ID[radioValue] ===
            filterSelection.movieSelections[0].movieSelectTypeId
          ) {
            onClose();
          } else {
            const radioData = {
              movieSelectTypeId: MOVIESELECTION_TYPE_NAME_TO_ID[radioValue],
            };
            await movieSelectionApi.updateMovieSelectionByMovieId(data.id, radioData);
            handleUpdateMovieSelection(data.id, {
              movieId: data.id,
              movieSelectTypeId: MOVIESELECTION_TYPE_NAME_TO_ID[radioValue],
            });
            toast.success("Update movie selection type sucessfully!");
            onClose();
          }
        } else {
          await movieSelectionApi.deleteMovieSelectionByMovieId(data.id);
          handleDeleteMovieSelection(data.id);
          toast.success("Remove movie selection type sucessfully!");
          onClose();
        }
      } else {
        if (radioValue !== MOVIESELECTION_NAME["NOTSELECTED"]) {
          const radioData = {
            movieId: data.id,
            movieSelectTypeId: MOVIESELECTION_TYPE_NAME_TO_ID[radioValue],
          };
          await movieSelectionApi.createMovieSelection(radioData);
          handleCreateMovieSelection(data.id, radioData);
          toast.success("Add movie selection type sucessfully!");
          onClose();
        } else {
          onClose();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-4 py-4">
      {Object.values(MOVIE_SELECTTION_NAME).map((el) => (
        <RadioBtnItem
          key={el}
          radioValue={radioValue}
          selectionStatus={el}
          setRadioValue={setRadioValue}
        />
      ))}
      <Button color="white" onClick={handleMovieSelectionStatus}>
        CONFIRM
      </Button>
    </div>
  );
}
