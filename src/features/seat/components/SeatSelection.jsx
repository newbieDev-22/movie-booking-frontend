import { reverseRowName } from "../../../constants";
import { AvailableSeatIcon, BookedIcon, ChairIcon, ScreenIcon } from "../../../icons";
import SeatSelectIconComponent from "./SeatSelectIconComponent";
import SeatsRow from "./SeatsRow";

const selectionIconData = [
  {
    iconName: "Selected",
    icon: <AvailableSeatIcon className={"h-full p-1"} />,
  },
  {
    iconName: "Booked",
    icon: <BookedIcon className={"h-full p-2"} />,
  },
];

export default function SeatSelection({ handleSetChairStatus, chairStatus }) {
  return (
    <div className="flex flex-col p-4 pb-8">
      <div className="flex justify-center pt-4">
        <ScreenIcon />
      </div>
      <div className="px-4 flex flex-col gap-6">
        {reverseRowName.map((el) => {
          return (
            <SeatsRow
              key={el}
              rowName={el}
              chairStatus={chairStatus}
              handleSetChairStatus={handleSetChairStatus}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center pt-12 gap-40">
        <div className="h-12 flex justify-center gap-16 text-lg font-bold text-white">
          {selectionIconData.map((el) => (
            <SeatSelectIconComponent key={el.iconName} iconName={el.iconName}>
              {el.icon}
            </SeatSelectIconComponent>
          ))}
        </div>

        <div className="flex gap-12 text-lg font-bold text-white">
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
