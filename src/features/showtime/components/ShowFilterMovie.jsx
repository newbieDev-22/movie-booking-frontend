import { mockData } from "../../../constants";
import MovieCard from "../../movieSelection/components/MovieCard";

export default function ShowFilterMovie() {
  return (
    <div className="grid grid-cols-6 gap-6 py-6 px-8">
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
