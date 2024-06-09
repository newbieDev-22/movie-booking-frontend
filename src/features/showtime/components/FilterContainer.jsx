import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function FilterContainer() {
  const [value, setValue] = useState({
    startDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div className=" grid grid-cols-2 py-6 px-8 gap-8">
      <div>
        <Datepicker
          inputClassName="w-full h-12 rounded-lg indent-4 placeholder:text-black text-center text-xl font-bold focus:outline-none"
          toggleClassName="absolute bg-[#DC2026] rounded-r-lg text-white right-0 h-full px-5 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
          placeholder={"Select date"}
          popoverDirection="down"
          useRange={false}
          asSingle={true}
          value={value}
          displayFormat={"ddd DD/MMM/YYYY"}
          onChange={handleValueChange}
        />
      </div>
      <div className="flex first:text-black/42">
        <select className="w-full h-full text-center text-xl font-bold rounded-lg focus:outline-none appearance-none">
          <option selected>Choose a Movie</option>
          <option>Spider-Man: Across the Spider-Verse</option>
          <option>Spider-Man: Across the Spider-Verse</option>
          <option>Spider-Man: Across the Spider-Verse</option>
          <option>Spider-Man: Across the Spider-Verse</option>
          <option>Spider-Man: Across the Spider-Verse</option>
        </select>
      </div>
    </div>
  );
}