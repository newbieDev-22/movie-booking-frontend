import Button from "../../../components/Button";
import Input from "../../../components/Input";
import SelectMovieCard from "./SelectMovieCard";

export default function SelectMovieDetail() {
  return (
    <div>
      <div className="pt-2 px-8 pb-4">
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
        <div className="py-8 px-6 grid grid-cols-7 gap-6 ">
          <SelectMovieCard />
          <SelectMovieCard />
          <SelectMovieCard />
          <SelectMovieCard />
          <SelectMovieCard />
          <SelectMovieCard />
          <SelectMovieCard />
        </div>
      </div>
    </div>
  );
}
