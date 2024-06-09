import FilterContainer from "../features/showtime/components/FilterContainer";
import ShowFilterMovie from "../features/showtime/components/ShowFilterMovie";

export default function ShowtimePage() {
  return (
    <div className="bg-[#121212] min-h-[calc(100vh-5rem)] min-w-[1075px]">
      <FilterContainer />
      <ShowFilterMovie />
    </div>
  );
}
