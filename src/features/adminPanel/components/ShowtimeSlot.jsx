import TimePicker from "../../../components/TimePicker";
import { PlusIcon } from "../../../icons";

export default function ShowtimeSlot() {
  return (
    <div className="bg-[#f5777b] flex flex-col px-2 py-3 gap-4 rounded-xl">
      <div className="text-white text-xl font-bold">
        <TimePicker />
      </div>
      <button
        className="bg-white w-full  text-xl font-fold flex gap-2 justify-center items-center p-2 rounded-xl 
       hover:scale-[105%] transition-all active:scale-100"
      >
        <div className="bg-[#DC2026] rounded-full p-2 ">
          <PlusIcon className={"h-4"} />
        </div>
        <div className="font-bold text-xl">ADD MOVIE</div>
      </button>
    </div>
  );
}
