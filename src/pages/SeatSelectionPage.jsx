import { useState, useEffect } from "react";
import SeatHeader from "../features/seat/components/SeatHeader";
import SeatSelection from "../features/seat/components/SeatSelection";
import SeatSummary from "../features/seat/components/SeatSummary";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { seatPrice } from "../constants";
import bookingApi from "../apis/booking";
import { toast } from "react-toastify";
import seatApi from "../apis/seat";
import Spinner from "../components/Spinner";
import useShowtime from "../hooks/useShowtime";
import useBooking from "../hooks/useBooking";

export default function SeatSelectionPage() {
  const { showtimeData } = useShowtime();
  const { chairStatusList, isSeatSelectionLoading } = useBooking();
  const { showtimeId } = useParams();
  const [showtime, setShowtime] = useState(null);
  const [chairStatus, setChairStatus] = useState(
    chairStatusList.filter((el) => el.showtimeId === +showtimeId)[0]?.bookedSeat
  );
  const [normalCount, setNormalCount] = useState(0);
  const [premiumCount, setPremiumCount] = useState(0);
  const [selectSeatRowCol, setSelectSeatRowCol] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const filterShowtime = showtimeData.filter((el) => el.id === +showtimeId);
    setShowtime(filterShowtime[0]);
  }, [showtimeData]);

  useEffect(() => {
    const filterChair = chairStatusList.filter((el) => el.showtimeId === +showtimeId);
    setChairStatus(filterChair[0].bookedSeat);
  }, []);

  const handleSetChairStatus = (rowName, rowDate) => {
    const mapData = chairStatus.map((el) => {
      if (el.rowName === rowName) {
        el.rowData = rowDate;
        return el;
      } else {
        return el;
      }
    });
    setChairStatus(mapData);
  };

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

  console.log("chairStatus", chairStatus);
  const changeSelectToBookedSeat = () => {
    chairStatus.forEach((row) => {
      row.rowData.forEach((col) => {
        if (col.isSelect === true) {
          col.isBooked = true;
          col.isSelect = false;
        }
      });
    });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      if (normalCount + premiumCount > 3) {
        throw Error("Limit seat only 3 seats per round");
      }
      if (normalCount + premiumCount === 0) {
        throw Error("Please select your seat");
      }
      const seatIdList = await getSeatIdList(selectSeatRowCol, showtime?.theaterId);

      const data = {
        showtimeId: +showtimeId,
        totalPrice: normalCount * seatPrice.NORMAL + premiumCount * seatPrice.PREMIUM,
        seatQuery: seatIdList,
      };

      const res = await bookingApi.createBooking(data);
      const bookingResult = res.data.booking;
      changeSelectToBookedSeat();
      toast.success("Booking successfully");
      return bookingResult;
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
      setNormalCount(0);
      setPremiumCount(0);
    }
  };

  return (
    <>
      {(isSeatSelectionLoading || isLoading) && <Spinner transparent />}
      <div className="bg-[#121212] min-h-[calc(100vh-72px)] min-w-[1275px] py-4 px-4">
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
