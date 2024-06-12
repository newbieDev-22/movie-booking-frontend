import React from "react";
import Chair from "../../../components/Chair";

const sizeMapping = {
  9: "h-9",
  6: "h-6",
};

const gapMapping = {
  12: "gap-12",
  8: "gap-8",
};

const seatStatusData = [
  { id: 1, isBooked: true, isUnavailable: false },
  { id: 2, isBooked: false, isUnavailable: true },
  { id: 3, isBooked: false, isUnavailable: false },
  { id: 4, isBooked: false, isUnavailable: false },
  { id: 5, isBooked: false, isUnavailable: false },
  { id: 6, isBooked: false, isUnavailable: false },
  { id: 7, isBooked: false, isUnavailable: false },
  { id: 8, isBooked: false, isUnavailable: false },
];

export default function SeatsRow({ rowName, size = 9, gap = 12 }) {
  const color = ["A", "B"].includes(rowName) ? "#985EFF" : "#DC2026";
  return (
    <div>
      <div className="flex justify-center items-center ml-8">
        <div className="text-white"></div>
        <div className={`flex ${sizeMapping[size]} ${gapMapping[gap]} justify-center`}>
          {seatStatusData.map((el) => (
            <Chair
              key={el.id}
              color={color}
              isBooked={el.isBooked}
              isUnavailable={el.isUnavailable}
            />
          ))}
          <div className="w-8 flex justify-center shrink-0">
            <h1 className="text-white text-2xl ">{rowName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
