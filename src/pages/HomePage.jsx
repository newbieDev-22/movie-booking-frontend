import HomeCarousal from "../features/movieSelection/components/HomeCarousal";
import MovieSelectionContainer from "../features/movieSelection/components/MovieSelectionContainer";

export default function HomePage() {
  return (
    <div className="bg-[#121212] min-h-[calc(100vh-5rem)] min-w-[1275px]">
      <div className="flex flex-col gap-8">
        <div className="flex h-[450px] w-full">
          <HomeCarousal />
        </div>
        <MovieSelectionContainer />
      </div>
    </div>
  );
}
