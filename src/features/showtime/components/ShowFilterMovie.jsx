import MovieCard from "../../movieSelection/components/MovieCard";

export default function ShowFilterMovie() {
  return (
    <div className="px-8">
      <div>
        <div className="text-2xl font-bold text-white">Sorted Movie</div>
      </div>
      <div className="py-4">
        <div className="grid grid-cols-6 gap-6">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
