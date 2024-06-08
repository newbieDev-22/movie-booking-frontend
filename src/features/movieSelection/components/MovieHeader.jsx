import { useState } from "react";

const selectedMapping = {
  true: "text-2xl font-bold text-[#DC2026] underline underline-offset-8 transition-all",
  false:
    "text-2xl font-bold text-white hover:text-red-300 active:scale-95 transition-all",
};

export default function MovieHeader() {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <div className="flex gap-16 justify-center items-center">
      <button className={selectedMapping[isShowing]} onClick={() => setIsShowing(true)}>
        NOW SHOWING
      </button>
      <button className={selectedMapping[!isShowing]} onClick={() => setIsShowing(false)}>
        COMING SOON
      </button>
    </div>
  );
}
