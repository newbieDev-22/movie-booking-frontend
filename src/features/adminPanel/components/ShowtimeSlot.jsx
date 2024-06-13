import { useState } from "react";
import TimePicker from "../../../components/TimePicker";
import { CloseIcon, PlusIcon } from "../../../icons";
import Modal from "../../../components/Modal";
import SelectMovieDetail from "./SelectMovieDetail";
import getNext7DaysUsingToday from "../../../utils/get-7-next-day";

export default function ShowtimeSlot({ index, handleDeleteShowtime }) {
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);

  const dateList = getNext7DaysUsingToday();
  console.log(dateList);

  return (
    <>
      <div className="bg-[#0D0E11] flex flex-col pb-4 rounded-xl">
        <div
          className="flex justify-end pt-1"
          onClick={() => handleDeleteShowtime(index)}
        >
          <CloseIcon color="white" className={"h-10"} />
        </div>
        <div className="flex flex-col px-4 gap-4 pb-2">
          <TimePicker />
          <button
            className="bg-white flex gap-2 justify-center items-center py-2 rounded-xl 
       hover:scale-[105%] transition-all active:scale-100"
            onClick={() => setIsAddMovieOpen(true)}
          >
            <div className="bg-[#DC2026] rounded-full p-2">
              <PlusIcon className={"h-4"} />
            </div>
            <div className="font-bold text-xl">ADD MOVIE</div>
          </button>
        </div>
      </div>
      <Modal
        title="SELECT MOVIE"
        open={isAddMovieOpen}
        onClose={() => setIsAddMovieOpen(false)}
        width={75}
      >
        <SelectMovieDetail />
      </Modal>
    </>
  );
}
