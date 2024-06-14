import { useState, useEffect } from "react";
import SeatHeader from "../features/seat/components/SeatHeader";
import SeatSelection from "../features/seat/components/SeatSelection";
import SeatSummary from "../features/seat/components/SeatSummary";
import { useParams, useNavigate } from "react-router-dom";
import showtimeApi from "../apis/showtime";
import { AxiosError } from "axios";
import dayjs from "dayjs";
import { rowName, seatPrice } from "../constants";
import bookingApi from "../apis/booking";
import { toast } from "react-toastify";
import seatApi from "../apis/seat";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner";

const seatStatusData = [
  { id: 1, isBooked: false, isSelect: false },
  { id: 2, isBooked: false, isSelect: false },
  { id: 3, isBooked: false, isSelect: false },
  { id: 4, isBooked: false, isSelect: false },
  { id: 5, isBooked: false, isSelect: false },
  { id: 6, isBooked: false, isSelect: false },
  { id: 7, isBooked: false, isSelect: false },
  { id: 8, isBooked: false, isSelect: false },
];

const initChairStatus = rowName.map((el) => {
  return { rowName: el, rowData: seatStatusData.map((el) => ({ ...el })) };
});

export default function SeatSelectionPage() {
  const { authUser } = useAuth();
  const [showtime, setShowtime] = useState([]);
  const [booking, setBooking] = useState([]);
  const [chairStatus, setChairStatus] = useState(initChairStatus);
  const [normalCount, setNormalCount] = useState(0);
  const [premiumCount, setPremiumCount] = useState(0);
  const [selectSeatRowCol, setSelectSeatRowCol] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { showtimeId } = useParams();
  const navigate = useNavigate();

  const fetchShowtime = async () => {
    try {
      const showtime = await showtimeApi.getShowtimeById(+showtimeId);
      const bookingData = await bookingApi.getBookingByShowtimeId(+showtimeId);
      setShowtime(showtime.data.showtimeData);
      setBooking(bookingData.data.bookingDataList);
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        if (err.response.status === 400) {
          navigate("/");
        }
      }
    }
  };

  const handleSetChairStatus = (rowName, rowDate) => {
    const dummyChairStatus = [...chairStatus];
    const mapData = dummyChairStatus.map((el) => {
      if (el.rowName === rowName) {
        el.rowData = rowDate;
        return el;
      } else {
        return el;
      }
    });
    setChairStatus(mapData);
  };

  useEffect(() => {
    setNormalCount(0);
    setPremiumCount(0);
    setSelectSeatRowCol([]);
    setChairStatus([]);
    fetchShowtime();
  }, []);

  useEffect(() => {
    setNormalCount(0);
    setPremiumCount(0);
    setSelectSeatRowCol([]);
    setChairStatus([]);
    const bookedSeat = booking.map((el) => {
      const newData = [];
      const seatData = el.bookingSeatsDetail;

      if (seatData.seat1) {
        newData.push({ row: seatData.seat1.row, col: +seatData.seat1.column });
      }
      if (seatData.seat2) {
        newData.push({ row: seatData.seat2.row, col: +seatData.seat2.column });
      }
      if (seatData.seat3) {
        newData.push({ row: seatData.seat3.row, col: +seatData.seat3.column });
      }
      return newData;
    });
    const dummyInitChairStatus = [...initChairStatus];
    bookedSeat.forEach((person) => {
      person.forEach((el) => {
        const foundedRowIndex = dummyInitChairStatus?.findIndex(
          (subEl) => subEl.rowName === el.row
        );
        if (foundedRowIndex !== -1) {
          const foundedColIndex = dummyInitChairStatus[
            foundedRowIndex
          ].rowData?.findIndex((subEl) => subEl.id === el.col);

          if (foundedRowIndex !== -1 && foundedColIndex !== -1) {
            dummyInitChairStatus[foundedRowIndex].rowData[foundedColIndex][
              "isBooked"
            ] = true;
          }
        }
      });
    });

    setChairStatus(dummyInitChairStatus);
  }, [booking]);

  const getSeatIdList = async (selectSeatRowCol, theaterId) => {
    const seatIdPromises = selectSeatRowCol.map((el) => {
      return seatApi.getSeatId(theaterId, el.row, el.col);
    });

    try {
      const results = await Promise.all(seatIdPromises);
      const seatIdList = results.map((result) => result.data.seatDetail.id);
      return seatIdList;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  useEffect(() => {
    let normalChairCount = 0;
    let premiumChairCount = 0;
    const seatRowColList = [];
    chairStatus.forEach((row) => {
      row.rowData.forEach((col) => {
        if (col.isSelect) {
          if (row.rowName === "A" || row.rowName === "B") {
            premiumChairCount += 1;
          } else {
            normalChairCount += 1;
          }
          seatRowColList.push({ row: row.rowName, col: col.id });
        }
      });
    });
    setNormalCount(normalChairCount);
    setPremiumCount(premiumChairCount);
    setSelectSeatRowCol(seatRowColList);
  }, [chairStatus]);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      if (normalCount + premiumCount > 3) {
        throw Error("Limit seat only 3 seats per round");
      }
      if (normalCount + premiumCount === 0) {
        throw Error("Please select your seat");
      }
      console.log("selectSeatRowCol", selectSeatRowCol);

      const seatIdList = await getSeatIdList(selectSeatRowCol, showtime?.theaterId);

      const data = {
        showtimeId: +showtimeId,
        userId: authUser.id,
        totalPrice: normalCount * seatPrice.NORMAL + premiumCount * seatPrice.PREMIUM,
        paymentPath: "http://localhost:5173/payment",
        seatQuery: seatIdList,
      };

      const res = await bookingApi.createBooking(data);
      console.log("res", res);
      toast.success("Booking successfully");
      return true;
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
      fetchShowtime();
    }
  };

  return (
    <>
      {isLoading && <Spinner transparent />}
      <div className="bg-[#121212] min-h-[calc(100vh-5rem)] min-w-[1275px] py-4 px-4">
        <SeatHeader
          movie={showtime?.movie?.movieName}
          theater={showtime?.theater?.theaterName}
          date={dayjs(showtime?.date).format("ddd DD/MM/YYYY")}
          startTime={dayjs(showtime?.startMovieTime).format("HH:mm")}
          endTime={dayjs(showtime?.endMovieTime).format("HH:mm")}
        />
        <SeatSummary
          movie={showtime?.movie?.movieName}
          date={dayjs(showtime?.date).format("DD MMM YYYY")}
          time={dayjs(showtime?.startMovieTime).format("HH:mm")}
          normalCount={normalCount}
          premiumCount={premiumCount}
          handleSubmit={handleSubmit}
        />
        <SeatSelection
          handleSetChairStatus={handleSetChairStatus}
          chairStatus={chairStatus}
        />
      </div>
    </>
  );
}
