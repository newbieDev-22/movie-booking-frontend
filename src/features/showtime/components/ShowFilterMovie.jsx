import dayjs from "dayjs";
import useMovie from "../../../hooks/useMovie";
import MovieCard from "../../movieSelection/components/MovieCard";

export default function ShowFilterMovie() {
  const { movieData } = useMovie();

  return (
    <div className="grid grid-cols-6 gap-6 py-6 px-8">
      {movieData?.map((el) => (
        <MovieCard
          key={el.id}
          movieName={el.movieName}
          posterImage={el.movieImagePath}
          date={dayjs(el.createdAt).format("DD-MMM-YYYY")}
          duration={el.durationInMin}
        />
      ))}
    </div>
  );
}
