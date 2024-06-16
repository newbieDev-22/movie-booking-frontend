import { useState } from "react";
import { MOVIESELECTION_TYPE_NAME_TO_ID, MovieSelectionStatus } from "../../../constants";

const selectedMapping = {
  true: "text-2xl font-bold text-[#DC2026] underline underline-offset-8 transition-all",
  false: "text-2xl font-bold text-white hover:scale-110 active:scale-95 transition-all",
};

export default function MovieHeader({ handleSelectionStatus }) {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <div className="flex gap-16 justify-center items-center">
      <button
        className={selectedMapping[isShowing]}
        onClick={() => {
          setIsShowing(true);
          handleSelectionStatus(MOVIESELECTION_TYPE_NAME_TO_ID.CURRENTLY);
        }}
      >
        NOW SHOWING
      </button>
      <button
        className={selectedMapping[!isShowing]}
        onClick={() => {
          setIsShowing(false);
          handleSelectionStatus(MOVIESELECTION_TYPE_NAME_TO_ID.UPCOMING);
        }}
      >
        COMING SOON
      </button>
    </div>
  );
}
