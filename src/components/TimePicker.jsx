import TimeInput from "./TimeInput";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function TimePicker({
  index,
  handleAddTime,
  startMovieTime,
  endMovieTime,
  isBooking,
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
    // handleAddTime(index, {
    //   startTime: startTime,
    //   endTime: endTime,
    // });
    setStartTime(
      startMovieTime !== ""
        ? dayjs(startMovieTime).utc().utcOffset(0).format("HH:mm")
        : "09:00"
    );
    setEndTime(
      endMovieTime !== ""
        ? dayjs(endMovieTime).utc().utcOffset(0).format("HH:mm")
        : "22:00"
    );
  }, [startMovieTime, endMovieTime]);

  return (
    <form className="bg-white grid grid-cols-2 gap-3 text-center p-2 rounded-xl">
      <TimeInput
        isBooking={isBooking}
        title={"START"}
        time={startTime}
        setTime={setStartTime}
      />
      <TimeInput
        isBooking={isBooking}
        title={"END"}
        time={endTime}
        setTime={setEndTime}
      />
    </form>
  );
}
