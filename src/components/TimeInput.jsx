export default function TimeInput({ isBooking, title, time, setTime }) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <label htmlFor={title} className="font-bold text-black text-base">
        {title}
      </label>
      <input
        disabled={isBooking}
        type="time"
        id={title}
        className="bg-transparent border  border-gray-300 
           text-gray-900 text-sm rounded-lg w-full p-1 font-normal text-center"
        min="00:00"
        max="23:59"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
    </div>
  );
}
