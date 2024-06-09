import { useNavigate } from "react-router-dom";
import { TimeIcon } from "../../../icons";

const imagePath = "https://posterspy.com/wp-content/uploads/2023/06/Spiderverse.jpg";

export default function MovieCard() {
  const navigator = useNavigate();
  return (
    <button onClick={() => navigator("/movie-booking")}>
      <div className="flex flex-col gap-2 hover:scale-105 active:scale-100 transition-all">
        <div className="overflow-hidden rounded-md shadow-md">
          <img src={imagePath} alt="movie" />
        </div>
        <div className="flex flex-col px-1 gap-2">
          <div className="text-left text-[#DBD9DD]">08 Jun 2024</div>
          <div className="text-left text-lg text-white font-bold">
            Spider-Man: Across the Spider-Verse
          </div>
          <div className="flex items-center gap-1 text-[#DBD9DD]">
            <TimeIcon className={`fill-[#DBD9DD]`} />
            <small className="text-xs ">105 Minutes</small>
          </div>
        </div>
      </div>
    </button>
  );
}
