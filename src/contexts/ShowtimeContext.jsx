import { useEffect, useState, createContext } from "react";
import getNext7DaysUsingToday from "../utils/get-7-next-day";
import showtimeApi from "../apis/showtime";
import formatDateForShowtime from "../utils/date-format";
import useAuth from "../hooks/useAuth";
import { THEATER_DATA } from "../constants";
import dayjs from "dayjs";

const ShowtimeContext = createContext();

export default function ShowtimeContextProvider({ children }) {
  const { authUser } = useAuth();
  const [showtimeDataForAllThearter, setShowtimeDataForAllThearter] = useState(null);
  const [showtimeData, setShowtimeData] = useState(null);
  const [isShowtimeDataLoading, setIsShowtimeDataLoading] = useState(true);
  const getNext7days = formatDateForShowtime(getNext7DaysUsingToday(), "YYYY-MM-DD");

  const getInitShowtimeSelectionData = () => {
    const showtimeAlltheater = [];
    THEATER_DATA.forEach((theater) => {
      const showtimeEachtheater = {};
      showtimeEachtheater["theaterId"] = theater.id;
      showtimeEachtheater["theaterName"] = theater.theaterName;
      getNext7days.forEach((date) => {
        const dummyShowtimeEachtheater = { ...showtimeEachtheater };
        dummyShowtimeEachtheater["date"] = date.date;
        dummyShowtimeEachtheater["showtimeData"] = showtimeData.filter((el) => {
          return (
            dayjs(el.date).format("YYYY-MM-DD") === date.date &&
            el.theaterId === theater.id
          );
        });
        showtimeAlltheater.push(dummyShowtimeEachtheater);
      });
    });
    return showtimeAlltheater;
  };

  useEffect(() => {
    if (showtimeData) {
      const showtimeAlltheater = getInitShowtimeSelectionData();
      setShowtimeDataForAllThearter(showtimeAlltheater);
    }
  }, [showtimeData]);

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

  const sharedValue = {
    isShowtimeDataLoading,
    showtimeDataForAllThearter,
    showtimeData,
    fetchShowtime,
  };

  return (
    <ShowtimeContext.Provider value={sharedValue}>{children}</ShowtimeContext.Provider>
  );
}

export { ShowtimeContext };
