import { useState } from "react";
import Button from "../../../components/Button";
import ShowtimeSlot from "./ShowtimeSlot";
import Datepicker from "react-tailwindcss-datepicker";
import Modal from "../../../components/Modal";
import SeatSettingDetail from "./SeatSettingDetail";
import { DropdownAccordionIcon } from "../../../icons";
import dayjs from "dayjs";
import getNext7DaysUsingToday from "../../../utils/get-7-next-day";

const initShowtimeData = { startTime: "", endTime: "", movieName: "" };

function formatDateForShowtime(dataList) {
  const formatData = dataList.map((el) => {
    const dateDict = {};
    dateDict.dateName = dayjs(el).format("ddd DD MMM YYYY");
    return dateDict;
  });
  return formatData;
}

export default function TheaterCard({ theaterName }) {
  const [isSeatSettingOpen, setIsSeatSettingOpen] = useState(false);
  const [isOpenCard, setIsOpenCard] = useState(false);
  const [showtimeData, setShowtimeData] = useState([]);
  const handleAccodionOpen = () => setIsOpenCard(!isOpenCard);
  const getNext7days = formatDateForShowtime(getNext7DaysUsingToday());
  console.log(getNext7days);

  const handleAddShowtime = () => {
    setShowtimeData((prev) => [...prev, initShowtimeData]);
  };

  const handleDeleteShowtime = (index) => {
    const dummyShowtimeData = [...showtimeData];
    dummyShowtimeData.splice(index, 1);
    setShowtimeData(dummyShowtimeData);
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
                <select className="w-full rounded-lg text-center">
                  <option disabled>Choose a date</option>
                  {getNext7days.map((el, index) => (
                    <option key={index}>{el.dateName}</option>
                  ))}
                </select>

                <Button color="white" onClick={handleAddShowtime}>
                  ADD SHOWTIME
                </Button>
                <Button color="white" onClick={() => setIsSeatSettingOpen(true)}>
                  SEAT SETTING
                </Button>
                <Button color="white">CONFIRM</Button>
              </div>
              <div className="grid grid-cols-6 gap-6 py-4">
                {showtimeData.map((el, index) => (
                  <ShowtimeSlot
                    key={index}
                    index={index}
                    handleDeleteShowtime={handleDeleteShowtime}
                  />
                ))}
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
