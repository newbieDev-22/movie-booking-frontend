import { useState } from "react";
import TimePicker from "../../../components/TimePicker";
import { CloseIcon, PlusIcon } from "../../../icons";
import Modal from "../../../components/Modal";
import ShowtimeMovieDetail from "./ShowtimeMovieDetail";

export default function ShowtimeSlot({
  index,
  handleDeleteShowtime,
  handleAddMovie,
  data,
  handleAddTime,
}) {
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);

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
          <TimePicker index={index} handleAddTime={handleAddTime} />
          <button
            className="bg-white flex justify-center items-center px-2 py-2 gap-2 rounded-xl 
       hover:scale-[105%] transition-all active:scale-100"
            onClick={() => setIsAddMovieOpen(true)}
          >
            {data?.movieName ? (
              <div className="font-bold text-xl">{data?.movieName}</div>
            ) : (
              <>
                <div className="bg-[#DC2026] rounded-full p-2">
                  <PlusIcon className={"h-4"} />
                </div>
                <div className="font-bold text-xl">ADD MOVIE</div>
              </>
            )}
          </button>
        </div>
      </div>
      <Modal
        title="SELECT MOVIE"
        open={isAddMovieOpen}
        onClose={() => setIsAddMovieOpen(false)}
        width={75}
      >
        <ShowtimeMovieDetail
          index={index}
          handleAddMovie={handleAddMovie}
          onClose={() => setIsAddMovieOpen(false)}
        />
      </Modal>
    </>
  );
}
