import { useState } from "react";
import {
  AvailableSeatIcon,
  BookedIcon,
  ChairIcon,
  UnavailableSeatIcon,
} from "../../../icons";
import SeatsRow from "../../seat/components/SeatsRow";
import Button from "../../../components/Button";

const rowName = ["A", "B", "C", "D", "E", "F", "G", "H"];
const reverseRowName = [...rowName].reverse();

export default function SeatSettingDetail() {
  const [normalPrice, setNormalPrice] = useState(200);
  const [premiumPrice, setPremiumPrice] = useState(500);
  return (
    <div className="flex justify-between px-4 py-12">
      <div className="flex flex-col gap-6">
        {reverseRowName.map((el) => {
          return <SeatsRow key={el} rowName={el} size={6} gap={8} />;
        })}
      </div>

      <div className="flex flex-col justify-center gap-8">
        <div className="h-12 flex justify-between gap-6 text-lg font-bold text-white">
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
        <div className="flex gap-12 font-bold text-white justify-center">
          <div className="flex flex-col items-center gap-4">
            <ChairIcon className={"h-12"} />
            <div className="text-xl">Normal</div>
            <div className="flex flex-col justify-center items-center gap-2 border border-white px-4 py-2 rounded-md">
              <div>Price Change</div>
              <input
                type="number"
                placeholder="Fill Price"
                className="w-32 indent-2 text-black text-center p-2 rounded-md outline-none"
                value={normalPrice}
                onChange={(e) => setNormalPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <ChairIcon className={"h-12"} fill="#985EFF" />
            <div className="text-xl">Premium</div>
            <div className="flex flex-col justify-center items-center gap-2 border border-white px-4 py-2 rounded-md">
              <div>Price Change</div>
              <input
                type="number"
                placeholder="Fill Price"
                className="w-32 indent-2 text-black text-center p-2 rounded-md outline-none"
                value={premiumPrice}
                onChange={(e) => setPremiumPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <Button color="white">
            <div className="font-bold py-1 px-4 text-xl">CONFIRM</div>
          </Button>
        </div>
      </div>
    </div>
  );
}
