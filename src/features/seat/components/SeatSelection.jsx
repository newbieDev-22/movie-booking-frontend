import {
  AvailableSeatIcon,
  BookedIcon,
  ChairIcon,
  ScreenIcon,
  UnavailableSeatIcon,
} from "../../../icons";
import SeatsRow from "./SeatsRow";

const rowName = ["A", "B", "C", "D", "E", "F", "G", "H"];
const reverseRowName = [...rowName].reverse();

export default function SeatSelection() {
  return (
    <div className="flex flex-col p-4 pb-8">
      <div className="flex justify-center pt-4">
        <ScreenIcon />
      </div>
      <div className="px-4 flex flex-col gap-6 -mt-12">
        {reverseRowName.map((el) => {
          return <SeatsRow key={el} rowName={el} />;
        })}
      </div>
      <div className="flex justify-center items-center mt-12 gap-56">
        <div className="h-12 flex justify-center gap-24 text-lg font-bold text-white">
          <div className="flex justify-center items-center gap-3 p-1">
            <div className="h-full rounded-full  bg-white">
              <AvailableSeatIcon className={"h-full p-1"} />
            </div>
            <div>Selected</div>
          </div>
          <div className="flex justify-center items-center gap-3 p-1">
            <div className="h-full rounded-full  bg-white">
              <BookedIcon className={"h-full p-2"} />
            </div>
            <div>Booked</div>
          </div>
          <div className="flex justify-center items-center gap-3 p-1">
            <div className="h-full rounded-full bg-white">
              <UnavailableSeatIcon className={"h-full p-1"} />
            </div>
            <div>Unavailable</div>
          </div>
        </div>
        <div className="flex gap-4 text-lg font-bold text-white">
          <div className="flex items-center gap-4">
            <ChairIcon className={"h-12"} />
            <div>Normal</div>
          </div>
          <div className="flex items-center gap-4">
            <ChairIcon className={"h-12"} fill="#985EFF" />
            <div>Premium</div>
          </div>
        </div>
      </div>
    </div>
  );
}
