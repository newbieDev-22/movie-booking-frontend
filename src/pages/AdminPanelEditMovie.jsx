import AddMovie from "../features/adminPanel/components/AddMovie";
import SearchMovie from "../features/adminPanel/components/SearchMovie";

export default function AdminPanelEditMovie() {
  return (
    <div className="bg-[#121212] min-h-[calc(100vh-5rem)] min-w-[1275px]">
      <AddMovie />
      <SearchMovie />
    </div>
  );
}
