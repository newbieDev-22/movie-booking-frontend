import { mockData } from "../../../constants";
import MovieCard from "../../movieSelection/components/MovieCard";

export default function MovieContainer() {
  return (
    <div className="grid grid-cols-6 gap-x-6 px-6 py-8 gap-y-8">
      {mockData.map((el) => (
        <MovieCard
          key={el.id}
          movieName={el.movieName}
          posterImage={el.posterImage}
          date={el.date}
          duration={el.duration}
        />
      ))}
    </div>
  );
}
