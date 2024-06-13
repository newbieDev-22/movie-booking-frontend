import Button from "../../../components/Button";
import Input from "../../../components/Input";
import useMovie from "../../../hooks/useMovie";
import MovieEditCard from "./MovieEditCard";

export default function SearchMovie() {
  const { movieData } = useMovie();
  console.log("movieData sssssssssssssssss", movieData);
  return (
    <div className="pt-2 px-8 pb-4">
      <div className="text-2xl font-bold text-white">FIND MOVIES</div>
      <div className="py-8 px-6 grid grid-cols-7 gap-4">
        <div className="col-span-4">
          <Input placeholder="Fill a movie name or genres" height="full" />
        </div>
        <div>
          <Button color="white">
            <div className="font-semibold text-xl">Search</div>
          </Button>
        </div>
      </div>
      <div className="p-6 grid grid-cols-6 gap-6 ">
        {movieData?.map((el) => (
          <MovieEditCard key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
}
