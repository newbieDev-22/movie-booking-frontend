import { useState } from "react";
import Button from "../../../components/Button";
import ShowtimeSlot from "./ShowtimeSlot";
import Datepicker from "react-tailwindcss-datepicker";

export default function TheaterCard() {
  const [date, setDate] = useState({
    startDate: null,
  });

  const handleValueChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <div className="bg-[#282828] rounded-lg">
        <div className="flex flex-col p-6">
          <div className="grid grid-cols-8 py-2">
            <div className="font-bold text-white text-4xl flex items-center px-2">
              THEATER A
            </div>
            <div className="flex gap-2 text-xl font-bold col-span-7 pl-56">
              <Datepicker
                inputClassName="w-full h-full border border-[#ABABAF] rounded-lg placeholder:text-black px-6 text-lg font-bold focus:outline-none"
                toggleClassName="absolute bg-[#DC2026] rounded-r-lg text-white right-0 h-full px-5 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                placeholder={"Select date"}
                popoverDirection="down"
                useRange={false}
                asSingle={true}
                value={date}
                displayFormat={"ddd DD MMMM YYYY"}
                onChange={handleValueChange}
              />
              <Button color="white">Add Showtime</Button>
              <Button color="white">Seat Setting</Button>
              <Button color="white">Confirm</Button>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-5 py-4 px-2 ">
            <ShowtimeSlot />
            <ShowtimeSlot />
            <ShowtimeSlot />
            <ShowtimeSlot />
            <ShowtimeSlot />
            <ShowtimeSlot />
            <ShowtimeSlot />
          </div>
        </div>
      </div>
    </div>
  );
}
