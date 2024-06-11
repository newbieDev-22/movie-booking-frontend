import { mockData } from "../../../constants";
import MovieCard from "../../movieSelection/components/MovieCard";

export default function ShowFilterMovie() {
  return (
    <div className="px-8">
      <div className="text-2xl font-bold text-white">Sorted Movie</div>
      <div className="grid grid-cols-6 gap-6 py-6">
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
    </div>
  );
}
