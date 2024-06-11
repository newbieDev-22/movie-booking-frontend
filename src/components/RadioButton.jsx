import { useState } from "react";
import Button from "./Button";

export default function RadioButton() {
  const [radioValue, setRadioValue] = useState("currently");

  return (
    <div className="flex items-center px-2 py-4 gap-8">
      <div className="flex items-center">
        <input
          id="currently"
          type="radio"
          value="currently"
          name="currently"
          checked={radioValue === "currently"}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={(e) => setRadioValue(e.target.value)}
        />
        <label
          htmlFor="currently"
          className="ms-2 text-sm font-medium text-white dark:text-gray-300 "
        >
          Currently
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="upcoming"
          type="radio"
          value="upcoming"
          name="upcoming"
          checked={radioValue === "upcoming"}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={(e) => setRadioValue(e.target.value)}
        />
        <label
          htmlFor="upcoming"
          className="ms-2 text-sm font-medium text-white dark:text-gray-300"
        >
          Upcoming
        </label>
      </div>
      <Button color="white">CONFIRM</Button>
    </div>
  );
}
