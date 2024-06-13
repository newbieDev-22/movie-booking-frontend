export default function SelectMovieCard({ movieName, movieImagePage }) {
  return (
    <div className="flex flex-col gap-2 hover:scale-110 transition-all active:scale-100">
      <div className="overflow-hidden rounded-md shadow-md">
        <img src={movieImagePage} alt="movie" className="object-cover aspect-[3/4]" />
      </div>
      <div className="flex flex-col px-1 gap-2">
        <div className="text-center text-white font-semibold">{movieName}</div>
      </div>
    </div>
  );
}
