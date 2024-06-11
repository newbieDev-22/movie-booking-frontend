import { useState } from "react";

const TimeMapping = { START: "09:00", END: "22:00" };

export default function TimeInput({ title }) {
  let initial = "09:00";
  if (TimeMapping[title]) {
    initial = TimeMapping[title];
  }

  const [time, setTime] = useState(initial);

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <label htmlFor={title} className="font-bold text-black text-base">
        {title}
      </label>
      <input
        type="time"
        id={title}
        className="bg-transparent border  border-gray-300 
           text-gray-900 text-sm rounded-lg w-full p-1 font-normal text-center"
        min="00:00"
        max="23:59"
        value={time}
        onChange={handleTime}
        required
      />
    </div>
  );
}
