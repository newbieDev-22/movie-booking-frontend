export default function RadioBtnItem({ radioValue, selectionStatus, setRadioValue }) {
  return (
    <div className="flex items-center">
      <input
        id={selectionStatus}
        type="radio"
        value={selectionStatus}
        name={selectionStatus}
        checked={radioValue === selectionStatus}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={(e) => setRadioValue(e.target.value)}
      />
      <label
        htmlFor={selectionStatus}
        className="ms-2 text-sm font-medium text-white dark:text-gray-300 "
      >
        {selectionStatus}
      </label>
    </div>
  );
}
