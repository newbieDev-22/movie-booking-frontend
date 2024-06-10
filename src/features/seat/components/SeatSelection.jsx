import { ScreenIcon } from "../../../icons";
import SeatsRow from "./SeatsRow";

const rowName = ["A", "B", "C", "D", "E", "F", "G", "H"];
const reverseRowName = [...rowName].reverse();

export default function SeatSelection() {
  return (
    <div className="flex flex-col p-4 pb-8">
      <div className="flex justify-center pt-4">
        <ScreenIcon />
      </div>
      <div className="px-4 flex flex-col gap-6 -mt-8">
        {reverseRowName.map((el) => {
          const color = ["A", "B"].includes(el) ? "#985EFF" : "#DC2026";
          return <SeatsRow key={el} rowName={el} color={color} />;
        })}
      </div>
      <div className="bg-red-900 mt-12 flex justify-center gap-24 text-lg font-bold text-white">
        <div>
          <div className></div>
          <div>Available</div>
        </div>
        <div>Booked</div>
        <div>Unavailable</div>
      </div>
    </div>
  );
}
