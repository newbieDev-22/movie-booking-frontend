import SeatHeader from "../features/seat/components/SeatHeader";
import SeatSelection from "../features/seat/components/SeatSelection";

export default function SeatSelectionPage() {
  return (
    <div className="bg-[#121212] min-h-[calc(100vh-5rem)] min-w-[1075px]">
      <SeatHeader />
      <SeatSelection />
    </div>
  );
}
