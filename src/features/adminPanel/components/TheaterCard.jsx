import { useState, useEffect } from "react";
import Button from "../../../components/Button";
import ShowtimeSlot from "./ShowtimeSlot";
import { DropdownAccordionIcon } from "../../../icons";
import dayjs from "dayjs";
import getNext7DaysUsingToday from "../../../utils/get-7-next-day";
import { toast } from "react-toastify";
import timeCompareBetweenShowtime from "../../../utils/time-overlap-check";
import showtimeApi from "../../../apis/showtime";
import utc from "dayjs/plugin/utc";
import useShowtime from "../../../hooks/useShowtime";
import formatDateForShowtime from "../../../utils/date-format";
import Spinner from "../../../components/Spinner";

dayjs.extend(utc);

export default function TheaterCard({ theaterName, theaterId }) {
  const { showtimeData } = useShowtime();
  const getNext7days = formatDateForShowtime(getNext7DaysUsingToday(), "YYYY-MM-DD");
  getNext7days.shift();
  const [selectDate, setSelectDate] = useState(new Date(getNext7days[0].date));
  const initShowtimeData = {
    date: selectDate,
    startMovieTime: "",
    endMovieTime: "",
    theaterId: theaterId,
    movieId: "",
    movieName: "",
  };

  const [isOpenCard, setIsOpenCard] = useState(false);
  const [showtime, setShowtime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const mapShowtimeData = showtimeData?.map((el) => {
      const mapData = {};
      mapData.date = el.date;
      mapData.startMovieTime = el.startMovieTime;
      mapData.endMovieTime = el.endMovieTime;
      mapData.theaterId = el.theaterId;
      mapData.movieId = el.movieId;
      mapData.movieName = el.movie.movieName;
      return mapData;
    });
    const filterTheaterData = mapShowtimeData?.filter((el) => el.theaterId === theaterId);
    const filterDateData = filterTheaterData?.filter(
      (el) =>
        dayjs(el.date).format("YYYY-MM-DD") === dayjs(selectDate).format("YYYY-MM-DD")
    );

    setShowtime(filterDateData);
  }, [showtimeData, selectDate]);

  const handleAccordionOpen = () => setIsOpenCard(!isOpenCard);

  const handleAddShowtime = () => {
    if (showtime.length < 6) {
      setShowtime((prev) => [...prev, { ...initShowtimeData }]);
    } else {
      toast.error("Showtime should not exceed 6 rounds per day per theater");
    }
  };

  const handleDeleteShowtime = (index) => {
    const dummyShowtimeData = [...showtime];
    dummyShowtimeData.splice(index, 1);
    setShowtime(dummyShowtimeData);
  };

  const handleAddMovie = (index, updateData) => {
    const tmp = [...showtime];
    tmp[index].movieId = updateData.movieId;
    tmp[index].movieName = updateData.movieName;
    setShowtime(tmp);
  };

  const handleAddTime = (index, updateData) => {
    const tmp = [...showtime];
    tmp[index].startMovieTime = updateData.startTime;
    tmp[index].endMovieTime = updateData.endTime;
    setShowtime(tmp);
  };

  const prepareShowtimeData = (input, index) => {
    if (!input.movieId) {
      throw new Error("Miss Movie in some showtime");
    } else if (input.startMovieTime > input.endMovieTime) {
      throw new Error("End time > start Time in some showtime");
    }

    const dummyShowtimeData = [...showtime];
    dummyShowtimeData.splice(index, 1);

    dummyShowtimeData.forEach((subEl) => {
      const isOverlapStartTime = timeCompareBetweenShowtime(
        subEl.startMovieTime,
        subEl.endMovieTime,
        input.startMovieTime
      );
      const isOverlapEndTime = timeCompareBetweenShowtime(
        subEl.startMovieTime,
        subEl.endMovieTime,
        input.endMovieTime
      );
      if (isOverlapStartTime || isOverlapEndTime) {
        throw new Error("Miss some showtime is overlap");
      }
    });

    const date = new Date(selectDate);
    input.date = dayjs(date).utc().format("YYYY-MM-DD");

    const dummyInput = { ...input };
    delete dummyInput.movieName;
    return dummyInput;
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const prepareInputList = [];
      for (let i = 0; i < showtime.length; i++) {
        const dummyInput = prepareShowtimeData(showtime[i], i);
        prepareInputList.push(dummyInput);
      }

      if (prepareInputList.length === showtime.length) {
        const date = dayjs(new Date(selectDate)).utc().format("YYYY-MM-DD");
        await showtimeApi.deleteByDateAndTheater(date, theaterId);

        const createShowtimePromises = prepareInputList.map((el) =>
          showtimeApi.createShowtime(el)
        );
        await Promise.all(createShowtimePromises);
        toast.success("Update successfully");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#282828] rounded-lg">
      {isLoading && <Spinner transparent />}
      <div className="flex flex-col px-8 py-3">
        <div className="flex justify-between py-6">
          <button className="text-2xl font-bold text-white" onClick={handleAccordionOpen}>
            {theaterName}
          </button>
          <button
            className={isOpenCard ? "" : "-rotate-90"}
            onClick={handleAccordionOpen}
          >
            <DropdownAccordionIcon className={"fill-white"} />
          </button>
        </div>
        {isOpenCard ? (
          <>
            <div className="grid grid-cols-4 gap-x-4 text-xl">
              <select
                className="w-full rounded-lg text-center "
                onChange={(e) => {
                  setSelectDate(new Date(e.target.value));
                }}
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

              <Button color="white" onClick={handleSubmit}>
                CONFIRM
              </Button>
            </div>
            <div className="grid grid-cols-6 gap-6 py-4">
              {showtime?.map((el, index) => (
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
  );
}
