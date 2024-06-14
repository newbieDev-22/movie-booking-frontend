import { useState } from "react";
import Button from "../../../components/Button";
import ShowtimeSlot from "./ShowtimeSlot";
import Modal from "../../../components/Modal";
import SeatSettingDetail from "./SeatSettingDetail";
import { DropdownAccordionIcon } from "../../../icons";
import dayjs from "dayjs";
import getNext7DaysUsingToday from "../../../utils/get-7-next-day";
import { toast } from "react-toastify";
import timeCompareBetweenShowtime from "../../../utils/time-overlap-check";
import showtimeApi from "../../../apis/showtime";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const initShowtimeData = {
  id: "",
  date: "",
  startTime: "09:00",
  endTime: "22:00",
  movieId: "",
  movieName: "",
  theaterId: "",
};

function formatDateForShowtime(dataList) {
  const formatData = dataList.map((el) => {
    const dateDict = {};
    dateDict.date = dayjs(el).format("ddd DD MMM YYYY");
    return dateDict;
  });
  return formatData;
}

export default function TheaterCard({ theaterName }) {
  initShowtimeData.theaterId = theaterName;
  const getNext7days = formatDateForShowtime(getNext7DaysUsingToday());
  getNext7days.shift();

  const [isSeatSettingOpen, setIsSeatSettingOpen] = useState(false);
  const [isOpenCard, setIsOpenCard] = useState(false);
  const [showtimeData, setShowtimeData] = useState([]);
  const [selectDate, setSelectDate] = useState(getNext7days[0]);
  const handleAccodionOpen = () => setIsOpenCard(!isOpenCard);

  const handleAddShowtime = () => {
    if (showtimeData.length < 12) {
      setShowtimeData((prev) => [...prev, { ...initShowtimeData }]);
    } else {
      toast.error("Showtime should not exceed 12 rounds per day per theater");
    }
  };

  const handleDeleteShowtime = (index) => {
    const dummyShowtimeData = [...showtimeData];
    dummyShowtimeData.splice(index, 1);
    setShowtimeData(dummyShowtimeData);
  };

  const handleAddMovie = (index, updateData) => {
    const tmp = [...showtimeData];
    console.log(index, updateData);
    console.log(tmp);
    console.log(tmp[2]);
    console.log(tmp[2]);
    tmp[index].movieId = updateData.movieId;
    tmp[index].movieName = updateData.movieName;

    setShowtimeData(tmp);
  };

  const handleAddTime = (index, updateData) => {
    const tmp = [...showtimeData];
    tmp[index].startTime = updateData.startTime;
    tmp[index].endTime = updateData.endTime;

    setShowtimeData(tmp);
  };

  const handleSumbit = async () => {
    try {
      for (let i = 0; i < showtimeData.length; i++) {
        if (!showtimeData[i].movieName || !showtimeData[i].movieId) {
          toast.error("Miss Movie in some showtime");
          return;
        } else if (showtimeData[i].startTime > showtimeData[i].endTime) {
          toast.error("End time > start Time in some showtime");
          return;
        }

        const dummyShowtimeData = [...showtimeData];
        dummyShowtimeData.splice(i, 1);

        dummyShowtimeData.forEach((subEl) => {
          const isOverlapStartTime = timeCompareBetweenShowtime(
            subEl.startTime,
            subEl.endTime,
            showtimeData[i].startTime
          );
          const isOverlapEndTime = timeCompareBetweenShowtime(
            subEl.startTime,
            subEl.endTime,
            showtimeData[i].endTime
          );
          if (isOverlapStartTime || isOverlapEndTime) {
            toast.error("Miss some showtime is overlap");
            return;
          }
        });

        const date = new Date(selectDate.date);
        console.log(date);
        console.log(dayjs(date).format("YYYY-MM-DD"));
        showtimeData[i].date = dayjs(date).format("YYYY-MM-DD");

        console.log(showtimeData[i].startTime);
        console.log("ssss", `${selectDate.date} ${showtimeData[i].startTime}`);
        const startDateTime = new Date(`${selectDate.date} ${showtimeData[i].startTime}`);
        console.log("startDateTime", startDateTime);
        console.log(dayjs(startDateTime).utc().format("HH:mm"));
        showtimeData[i].startMovieTime = dayjs(startDateTime).utc().format("HH:mm");

        console.log(showtimeData[i].endTime);
        const endDateTime = new Date(`${selectDate.date} ${showtimeData[i].endTime}`);
        console.log("endDateTime", endDateTime);
        console.log(dayjs(endDateTime).utc().format("HH:mm"));
        showtimeData[i].endMovieTime = dayjs(endDateTime).utc().format("HH:mm");

        console.log("data", showtimeData[i]);
        showtimeData[i].theaterId = 1;
        delete showtimeData[i].endTime;
        delete showtimeData[i].startTime;
        delete showtimeData[i].movieName;
        delete showtimeData[i].id;

        await showtimeApi.createShowtime(showtimeData[i]);
      }

      toast.success("Update successfully");
    } catch (err) {
      console.log(err);
    }
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
              <div className="grid grid-cols-4 gap-x-4 text-xl">
                <select
                  className="w-full rounded-lg text-center "
                  onChange={(e) => setSelectDate(e.target.value)}
                >
                  <option disabled>Choose a date</option>
                  {getNext7days.map((el, index) => (
                    <option key={index} value={el.date}>
                      {el.date}
                    </option>
                  ))}
                </select>
                <div className="col-start-3">
                  <Button color="white" onClick={handleAddShowtime}>
                    ADD SHOWTIME
                  </Button>
                </div>

                <Button color="white" onClick={handleSumbit}>
                  CONFIRM
                </Button>
              </div>
              <div className="grid grid-cols-6 gap-6 py-4">
                {showtimeData.map((el, index) => (
                  <ShowtimeSlot
                    key={index}
                    index={index}
                    handleDeleteShowtime={handleDeleteShowtime}
                    handleAddMovie={handleAddMovie}
                    handleAddTime={handleAddTime}
                    data={el}
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
