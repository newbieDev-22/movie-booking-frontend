import { useNavigate } from "react-router-dom";
import { TimeIcon } from "../../../icons";

export default function MovieCard({ date, movieName, duration, posterImage }) {
  const navigator = useNavigate();
  return (
    <button onClick={() => navigator("/movie-booking")} className="flex">
      <div className="hover:scale-105 active:scale-100 transition-all ">
        <div className="overflow-hidden rounded-xl shadow-md ">
          <img src={posterImage} alt="movie" className="object-cover aspect-[3/4]" />
        </div>
        <div className="flex flex-col px-1 gap-2  py-2">
          <div className="text-left text-[#DBD9DD]">{date}</div>
          <div className="text-left text-lg text-white font-bold">{movieName}</div>
          <div className="flex items-center gap-1 text-[#DBD9DD]">
            <TimeIcon className={`fill-[#DBD9DD]`} />
            <small className="text-xs ">{duration} Minutes</small>
          </div>
        </div>
      </div>
    </button>
  );
}
