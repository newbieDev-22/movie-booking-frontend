import { useEffect, useState, createContext } from "react";
import getNext7DaysUsingToday from "../utils/get-7-next-day";
import showtimeApi from "../apis/showtime";
import formatDateForShowtime from "../utils/date-format";

const ShowtimeContext = createContext();

export default function ShowtimeContextProvider({ children }) {
  const [showtimeData, setShowtimeData] = useState(null);
  const [isShowtimeData, setIsShowtimeData] = useState(true);
  const getNext7days = formatDateForShowtime(getNext7DaysUsingToday(), "YYYY-MM-DD");

  const fetchShowtime = async () => {
    try {
      setIsShowtimeData(true);
      const showtimeResult = await showtimeApi.getShowtimeByStartEndDate(
        getNext7days[0].date,
        getNext7days[getNext7days.length - 1].date
      );
      console.log("showtimeResult", showtimeResult);
      setShowtimeData(showtimeResult.data.showtimeData);
    } catch (err) {
      console.log(err);
    } finally {
      setIsShowtimeData(false);
    }
  };

  useEffect(() => {
    fetchShowtime();
  }, []);

  console.log(showtimeData);
  const sharedValue = { isShowtimeData, showtimeData, fetchShowtime };
  return (
    <ShowtimeContext.Provider value={sharedValue}>{children}</ShowtimeContext.Provider>
  );
}

export { ShowtimeContext };
