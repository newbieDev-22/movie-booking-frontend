import { useState } from "react";
import Button from "../../../components/Button";
import {
  MovieSelectionName,
  MovieSelectionStatus,
  SwapMovieSelectionStatus,
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

  const filterSelection = movieSelectionData.filter((el) => el?.movieId === data.id);
  const initRadioValue =
    filterSelection.length > 0
      ? SwapMovieSelectionStatus[filterSelection[0].movieSelectTypeId]
      : MovieSelectionName["NOTSELECTED"];
  const [radioValue, setRadioValue] = useState(initRadioValue);

  const handleMovieSelectionStatus = async () => {
    try {
      if (filterSelection.length > 0) {
        if (radioValue !== MovieSelectionName["NOTSELECTED"]) {
          if (MovieSelectionStatus[radioValue] === filterSelection[0].movieSelectTypeId) {
            onClose();
          } else {
            const radioData = {
              movieSelectTypeId: MovieSelectionStatus[radioValue],
            };
            await movieSelectionApi.updateMovieSelectionByMovieId(data.id, radioData);
            handleUpdateMovieSelection(data.id, {
              movieId: data.id,
              movieSelectTypeId: MovieSelectionStatus[radioValue],
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
        if (radioValue !== MovieSelectionName["NOTSELECTED"]) {
          const radioData = {
            movieId: data.id,
            movieSelectTypeId: MovieSelectionStatus[radioValue],
          };
          await movieSelectionApi.createMovieSelection(radioData);
          handleCreateMovieSelection(radioData);
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
      {Object.values(MovieSelectionName).map((el) => (
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
