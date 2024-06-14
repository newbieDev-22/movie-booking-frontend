import { useState, useEffect } from "react";
import Table from "../../../components/Table";
import bookingApi from "../../../apis/booking";
import dayjs from "dayjs";

export default function HistoriesTable() {
  const [historyDataList, setHistoryDataList] = useState([]);

  const fetchHistory = async () => {
    try {
      const res = await bookingApi.getBookingListByUserId();
      const bookingDataList = res.data.bookingDataList;
      const historyList = [];

      bookingDataList.forEach((el) => {
        const newData = {};
        newData.id = el.id;
        newData.movieName = el.showtime.movie.movieName;
        newData.theaterName = el.showtime.theater.theaterName;
        const date = dayjs(el.showtime.date).format("DD MMM");
        const startTime = dayjs(el.showtime.startMovieTime).format("HH:mm");
        const endTime = dayjs(el.showtime.endMovieTime).format("HH:mm");
        newData.showtime = `${date} | ${startTime}-${endTime}`;
        const seat1 = el.bookingSeatsDetail.seat1
          ? `${el.bookingSeatsDetail.seat1.row}${el.bookingSeatsDetail.seat1.column}`
          : null;
        const seat2 = el.bookingSeatsDetail.seat2
          ? `${el.bookingSeatsDetail.seat2.row}${el.bookingSeatsDetail.seat2.column}`
          : null;
        const seat3 = el.bookingSeatsDetail.seat3
          ? `${el.bookingSeatsDetail.seat3.row}${el.bookingSeatsDetail.seat3.column}`
          : null;
        const seats = [seat1, seat2, seat3].filter((n) => n);
        newData.seats = seats.join(", ");
        newData.paymentStatus = el.paymentType.paymentStatus;
        newData.qrCodeImage = el.qrCodeImagePath;
        historyList.push(newData);
      });
      setHistoryDataList(historyList);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-right rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-lg text-center">
            <th scope="col" className="px-6 py-3">
              Booking Id
            </th>
            <th scope="col" className="px-6 py-3">
              Movie Name
            </th>
            <th scope="col" className="px-6 py-3">
              Theater
            </th>
            <th scope="col" className="px-6 py-3">
              Showtime
            </th>
            <th scope="col" className="px-6 py-3">
              Seats
            </th>
            <th scope="col" className="px-6 py-3">
              Payment Status
            </th>
            <th scope="col" className="px-6 py-3">
              QRCode
            </th>
          </tr>
        </thead>
        <tbody className="text-lg text-center">
          {historyDataList.map((el, index) => (
            <Table key={index} data={el} fetchHistory={fetchHistory} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
