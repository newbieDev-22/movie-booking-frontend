export default function SeatHeader({ movie, theater, date, startTime, endTime }) {
  return (
    <div className=" flex justify-between items-center px-8 py-1">
      <div className="flex gap-4 text-xl">
        <div className="flex flex-col gap-1 text-[#DBD9DD]">
          <div>Movie</div>
          <div>Theater</div>
        </div>
        <div className="flex flex-col gap-1 text-[#DBD9DD]">
          <div>:</div>
          <div>:</div>
        </div>
        <div className="flex flex-col gap-1 text-white font-semibold">
          <div>{movie}</div>
          <div>{theater}</div>
        </div>
      </div>

      <div className="flex gap-2 focus:outline-none appearance-none">
        <div className=" bg-[#0D0E11] px-12 py-4 rounded-lg text-white flex flex-col items-center">
          <div className="p-1 text-lg">Date</div>
          <div className="outline-none bg-[#0D0E11] py-2 text-xl font-bold">{date}</div>
        </div>
        <div className=" bg-[#0D0E11] px-12 py-4 rounded-lg text-white flex flex-col items-center">
          <div className="p-1 text-lg">Time</div>
          <div className="outline-none bg-[#0D0E11] py-2 text-xl font-bold">{`${startTime} - ${endTime} `}</div>
        </div>
      </div>
    </div>
  );
}
