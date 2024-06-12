import dayjs from "dayjs";
import MovieCard from "../../movieSelection/components/MovieCard";
import { useNavigate } from "react-router-dom";

export default function MovieContainer({ filterMovieData }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-6 gap-x-6 px-6 py-4 gap-y-4 content-start">
      {filterMovieData?.map((el) => (
        <div
          role="button"
          key={el.id}
          onClick={() => navigate(`/movie-booking/${el.id}`)}
        >
          <MovieCard
            movieName={el.movieName}
            posterImage={el.movieImagePath}
            date={dayjs(el.createdAt).format("DD-MMM-YYYY")}
            duration={el.durationInMin}
          />
        </div>
      ))}
    </div>
  );
}
