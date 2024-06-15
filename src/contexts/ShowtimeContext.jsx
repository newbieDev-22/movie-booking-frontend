import { useEffect, useState, createContext } from "react";
import getNext7DaysUsingToday from "../utils/get-7-next-day";
import showtimeApi from "../apis/showtime";
import formatDateForShowtime from "../utils/date-format";
import useAuth from "../hooks/useAuth";

const ShowtimeContext = createContext();

export default function ShowtimeContextProvider({ children }) {
  const { authUser } = useAuth();
  const [showtimeData, setShowtimeData] = useState(null);
  const [isShowtimeDataLoading, setIsShowtimeDataLoading] = useState(true);
  const getNext7days = formatDateForShowtime(getNext7DaysUsingToday(), "YYYY-MM-DD");

  const fetchShowtime = async () => {
    try {
      setIsShowtimeDataLoading(true);
      const showtimeResult = await showtimeApi.getShowtimeByStartEndDate(
        getNext7days[0].date,
        getNext7days[getNext7days.length - 1].date
      );
      setShowtimeData(showtimeResult.data.showtimeData);
    } catch (err) {
      console.log(err);
    } finally {
      setIsShowtimeDataLoading(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      fetchShowtime();
    }
  }, [authUser]);

  const sharedValue = { isShowtimeDataLoading, showtimeData, fetchShowtime };
  return (
    <ShowtimeContext.Provider value={sharedValue}>{children}</ShowtimeContext.Provider>
  );
}

export { ShowtimeContext };
