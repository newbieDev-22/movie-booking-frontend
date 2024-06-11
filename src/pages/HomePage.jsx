import HomeCarousal from "../features/movieSelection/components/HomeCarousal";
import MovieSelectionContainer from "../features/movieSelection/components/MovieSelectionContainer";

export default function HomePage() {
  return (
    <div className="bg-[#121212] min-h-[calc(100vh-5rem)] min-w-[1275px]">
      <div className="flex flex-col w-full">
        <div className=" w-full h-[450px] flex flex-col">
          <div className="flex justify-evenly h-full">
            <HomeCarousal />
          </div>
        </div>
        <div className="mt-8">
          <MovieSelectionContainer />
        </div>
      </div>
    </div>
  );
}
