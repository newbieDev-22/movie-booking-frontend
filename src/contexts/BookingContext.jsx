import { useEffect, useState, createContext, useMemo } from "react";
import useShowtime from "../hooks/useShowtime";
import { rowName, seatStatusData } from "../constants";
import bookingApi from "../apis/booking";

const BookingContext = createContext();

export default function BookingContextProvider({ children }) {
  const { showtimeData } = useShowtime();
  const initShowtime = showtimeData?.map((el) => el.id);
  const [showtimeIdList, setShowtimeIdList] = useState(initShowtime);
  const [isSeatSelectionLoading, setIsSeatSelectionLoading] = useState(false);
  const [chairStatusList, setChairStatusList] = useState([]);

  const setBookedSeat = (booking) => {
    const dummyInitChairStatus = rowName.map((el) => ({
      rowName: el,
      rowData: seatStatusData.map((el) => ({ ...el })),
    }));
    booking.forEach((el) => {
      const foundedRowIndex = dummyInitChairStatus?.findIndex((subEl) => {
        return subEl.rowName === el.row;
      });
      if (foundedRowIndex !== -1) {
        const foundedColIndex = dummyInitChairStatus[foundedRowIndex].rowData?.findIndex(
          (subEl) => subEl.id === +el.column
        );
        if (foundedRowIndex !== -1 && foundedColIndex !== -1) {
          dummyInitChairStatus[foundedRowIndex].rowData[foundedColIndex][
            "isBooked"
          ] = true;
        }
      }
    });

    return dummyInitChairStatus;
  };

  const fetchBooking = async () => {
    try {
      setIsSeatSelectionLoading(true);
      const bookingSeatCheckPromise = showtimeIdList.map((el) =>
        bookingApi.bookedSeat(el)
      );
      const getBookedSeat = await Promise.all(bookingSeatCheckPromise);
      const bookedSeatEachShowtimeList = [];
      for (let i = 0; i < showtimeIdList.length; i++) {
        const bookedSeat = setBookedSeat(getBookedSeat[i].data.bookedSeats);
        bookedSeatEachShowtimeList.push({
          showtimeId: showtimeIdList[i],
          bookedSeat: bookedSeat,
          theaterId: getBookedSeat[0]?.data?.bookedSeats[0]?.theaterId,
        });
      }
      setChairStatusList([...bookedSeatEachShowtimeList]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsSeatSelectionLoading(false);
    }
  };

  useEffect(() => {
    if (showtimeIdList) {
      fetchBooking();
    }
  }, [showtimeData, showtimeIdList]);

  useEffect(() => {
    setShowtimeIdList(showtimeData?.map((el) => el.id));
  }, [showtimeData]);

  const sharedValue = useMemo(
    () => ({
      isSeatSelectionLoading,
      chairStatusList,
      fetchBooking,
    }),
    [isSeatSelectionLoading, chairStatusList]
  );

  return (
    <BookingContext.Provider value={sharedValue}>{children}</BookingContext.Provider>
  );
}

export { BookingContext };
