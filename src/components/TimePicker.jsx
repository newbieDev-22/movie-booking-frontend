import React from "react";
import TimeInput from "./TimeInput";
import { useState } from "react";
import { useEffect } from "react";

export default function TimePicker({ index, handleAddTime }) {
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("22:00");

  useEffect(() => {
    handleAddTime(index, { startTime, endTime });
    console.log(startTime, endTime);
  }, [startTime, endTime]);

  return (
    <form className="bg-white grid grid-cols-2 gap-3 text-center p-2 rounded-xl">
      <TimeInput title={"START"} time={startTime} setTime={setStartTime} />
      <TimeInput title={"END"} time={endTime} setTime={setEndTime} />
    </form>
  );
}
