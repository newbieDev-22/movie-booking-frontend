import { ChairIcon } from "../../../icons";

export default function SeatHeader() {
  return (
    <div className=" flex justify-between items-center px-10">
      <div className="flex gap-4 text-lg">
        <div className="flex flex-col text-[#DBD9DD]">
          <div>Movie</div>
          <div>Theater</div>
        </div>
        <div className="flex flex-col text-[#DBD9DD]">
          <div>-</div>
          <div>-</div>
        </div>
        <div className="flex flex-col text-white font-semibold">
          <div>Spider-Man: Across the Spider-Verse</div>
          <div>Theater A</div>
        </div>
      </div>
      <div className=" text-white">
        <div className="flex gap-6 justify-center items-center">
          <ChairIcon className={"h-14"} />
          <div className="flex flex-col gap-1">
            <div className="text-2xl font-bold">200 Baht</div>
            <div>Normal</div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className=" bg-[#0D0E11] px-8 py-4 rounded-lg text-white">
          <div className="p-1">Date</div>
          <select className="outline-none bg-[#0D0E11] pr-4 py-2.5">
            <option>Sun 21 Oct, 2023</option>
            <option>Sun 21 Oct, 2023</option>
            <option>Sun 21 Oct, 2023</option>
            <option>Sun 21 Oct, 2023</option>
            <option>Sun 21 Oct, 2023</option>
            <option>Sun 21 Oct, 2023</option>
            <option>Sun 21 Oct, 2023</option>
          </select>
        </div>
        <div className=" bg-[#0D0E11] px-8 py-4 rounded-lg text-white">
          <div className="p-1">Time</div>
          <select className="outline-none bg-[#0D0E11] pr-4 py-1">
            <option>10:00 - 12:00</option>
            <option>10:00 - 12:00</option>
            <option>10:00 - 12:00</option>
            <option>10:00 - 12:00</option>
          </select>
        </div>
      </div>
    </div>
  );
}
