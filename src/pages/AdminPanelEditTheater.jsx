import { THEATER_DATA } from "../constants";
import TheaterCard from "../features/adminPanel/components/TheaterCard";

export default function AdminPanelEditTheater() {
  return (
    <div className="bg-[#121212] min-h-[calc(100vh-5rem)] min-w-[1275px]">
      <div className="pt-8 px-8 pb-4">
        <div className="text-2xl font-bold text-white">THEATER SETTNG</div>
        <div className="flex flex-col gap-8 py-6">
          {THEATER_DATA.map((el) => (
            <TheaterCard key={el.id} theaterName={el.theaterName} theaterId={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
