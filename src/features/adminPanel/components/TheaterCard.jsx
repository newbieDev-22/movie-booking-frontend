import { useState } from "react";
import Button from "../../../components/Button";
import ShowtimeSlot from "./ShowtimeSlot";
import Datepicker from "react-tailwindcss-datepicker";
import Modal from "../../../components/Modal";
import SeatSettingDetail from "./SeatSettingDetail";
import { DropdownAccordionIcon } from "../../../icons";

export default function TheaterCard({ theaterName }) {
  const [isSeatSettingOpen, setIsSeatSettingOpen] = useState(false);
  const [isOpenCard, setIsOpenCard] = useState(false);
  const handleAccodionOpen = () => setIsOpenCard(!isOpenCard);

  const [date, setDate] = useState({
    startDate: null,
  });

  const handleValueChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <div className="bg-[#282828] rounded-lg">
        <div className="flex flex-col px-8 py-3">
          <div className="flex justify-between py-6">
            <button
              className="text-2xl font-bold text-white"
              onClick={handleAccodionOpen}
            >
              {theaterName}
            </button>
            <button
              className={isOpenCard ? "" : "-rotate-90"}
              onClick={handleAccodionOpen}
            >
              <DropdownAccordionIcon className={"fill-white"} />
            </button>
          </div>
          {isOpenCard ? (
            <>
              <div className="flex gap-6 text-xl">
                <Datepicker
                  inputClassName="w-full h-full border border-[#ABABAF] rounded-lg placeholder:text-black px-6 text-lg focus:outline-none"
                  toggleClassName="absolute bg-[#DC2026] rounded-r-lg text-white right-0 h-full px-5 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                  placeholder={"Select date"}
                  useRange={false}
                  asSingle={true}
                  value={date}
                  displayFormat={"ddd DD MMMM YYYY"}
                  onChange={handleValueChange}
                />
                <Button color="white">ADD SHOWTIME</Button>
                <Button color="white" onClick={() => setIsSeatSettingOpen(true)}>
                  SEAT SETTING
                </Button>
                <Button color="white">CONFIRM</Button>
              </div>
              <div className="grid grid-cols-6 gap-6 py-4">
                <ShowtimeSlot />
                <ShowtimeSlot />
                <ShowtimeSlot />
                <ShowtimeSlot />
                <ShowtimeSlot />
                <ShowtimeSlot />
              </div>
            </>
          ) : null}
        </div>
      </div>
      <Modal
        title="SEAT SETTING"
        open={isSeatSettingOpen}
        onClose={() => setIsSeatSettingOpen(false)}
        width={80}
      >
        <SeatSettingDetail />
      </Modal>
    </div>
  );
}
