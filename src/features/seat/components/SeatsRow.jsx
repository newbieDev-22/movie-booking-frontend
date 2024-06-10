import React from "react";
import { ChairIcon } from "../../../icons";

export default function SeatsRow({ rowName, color }) {
  return (
    <div className="relative">
      <div className="flex justify-center items-center flex-1">
        <div className="flex h-9 gap-16 justify-center">
          <ChairIcon fill={color} />
          <ChairIcon fill={color} />
          <ChairIcon fill={color} />
          <ChairIcon fill={color} />
          <ChairIcon fill={color} />
          <ChairIcon fill={color} />
          <ChairIcon fill={color} />
          <ChairIcon fill={color} />
          <h1 className="text-white text-2xl ">{rowName}</h1>
        </div>
      </div>
    </div>
  );
}
