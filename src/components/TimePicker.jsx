import React from "react";
import TimeInput from "./TimeInput";
import { useState } from "react";
import { useEffect } from "react";
import dayjs from "dayjs";

export default function TimePicker({
  index,
  handleAddTime,
  startMovieTime,
  endMovieTime,
}) {
  const [startTime, setStartTime] = useState(
    startMovieTime !== ""
      ? dayjs(startMovieTime).utc().utcOffset(0).format("HH:mm")
      : "09:00"
  );
  const [endTime, setEndTime] = useState(
    endMovieTime !== "" ? dayjs(endMovieTime).utc().utcOffset(0).format("HH:mm") : "22:00"
  );

  useEffect(() => {
    handleAddTime(index, {
      startTime: startTime,
      endTime: endTime,
    });
  }, [startTime, endTime]);

  return (
    <form className="bg-white grid grid-cols-2 gap-3 text-center p-2 rounded-xl">
      <TimeInput title={"START"} time={startTime} setTime={setStartTime} />
      <TimeInput title={"END"} time={endTime} setTime={setEndTime} />
    </form>
  );
}
