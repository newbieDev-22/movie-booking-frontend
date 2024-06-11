import React from "react";
import TimeInput from "./TimeInput";

export default function TimePicker() {
  return (
    <form className="bg-white grid grid-cols-2 gap-3 text-center p-2 rounded-xl">
      <TimeInput title={"START"} />
      <TimeInput title={"END"} />
    </form>
  );
}
