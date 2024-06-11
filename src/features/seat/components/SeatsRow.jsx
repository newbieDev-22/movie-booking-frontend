import React from "react";
import Chair from "../../../components/Chair";

export default function SeatsRow({ rowName, size = 9, gap = 12 }) {
  const color = ["A", "B"].includes(rowName) ? "#985EFF" : "#DC2026";
  return (
    <div>
      <div className="flex justify-center items-center ml-8">
        <div className={`flex h-${size} gap-${gap} justify-center`}>
          <Chair color={color} isBooked={true} />
          <Chair color={color} isUnavailable={true} />
          <Chair color={color} />
          <Chair color={color} />
          <Chair color={color} />
          <Chair color={color} />
          <Chair color={color} />
          <Chair color={color} />
          <div className="w-8 flex justify-center shrink-0">
            <h1 className="text-white text-2xl ">{rowName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
