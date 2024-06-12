import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { mockData } from "../../../constants";

export default function FilterContainer() {
  const [date, setDate] = useState({
    startDate: null,
  });

  const handleValueChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="grid grid-cols-2 py-6 px-8 gap-8">
      <Datepicker
        inputClassName="w-full h-12 rounded-lg indent-4 placeholder:text-black text-center text-lg font-bold focus:outline-none"
        toggleClassName="absolute bg-[#DC2026] rounded-r-lg text-white right-0 h-full px-5 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
        placeholder={"Select date"}
        popoverDirection="down"
        useRange={false}
        asSingle={true}
        value={date}
        displayFormat={"ddd DD MMMM YYYY"}
        onChange={handleValueChange}
      />

      <select className="w-full h-full text-center text-lg font-bold rounded-lg focus:outline-none appearance-none">
        <option defaultValue>Choose a Movie</option>
        {mockData.map((el) => (
          <option key={el.id} value={el.movieName}>
            {el.movieName}
          </option>
        ))}
      </select>
    </div>
  );
}
