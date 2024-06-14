import MovieDetail from "../features/booking/components/MovieDetail";
import SelectDate from "../features/booking/components/SelectDate";
import TheaterAccordion from "../components/TheaterAccordion";
import { THEATER_DATA } from "../constants";
import useMovie from "../hooks/useMovie";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import showtimeApi from "../apis/showtime";
import formatDateForShowtime from "../utils/date-format";
import getNext7DaysUsingToday from "../utils/get-7-next-day";
import dayjs from "dayjs";

const getNext7days = formatDateForShowtime(getNext7DaysUsingToday(), "YYYY-MM-DD");

const initialDateSelection = getNext7days.map((el) => ({
  date: el.date,
  isSelected: false,
}));

const firstDateSeletion = [...initialDateSelection];
firstDateSeletion[0] = { date: getNext7days[0].date, isSelected: true };

function formatDateForMovieBooking(dataList) {
  const formatData = dataList.map((el) => {
    const dateDict = {};
    dateDict.dateName = dayjs(el).format("ddd").toUpperCase();
    dateDict.dateNum = dayjs(el).format("DD");
    return dateDict;
  });
  return formatData;
}

export default function MovieBookingPage() {
  const { movieData } = useMovie();
  const { movieId } = useParams();

  const dateList = formatDateForMovieBooking(getNext7DaysUsingToday());
  const [dateIsSelect, setDateIsSelect] = useState(firstDateSeletion);
  const handleDateSelection = (selectDate, index) => {
    const newDataCollection = [...initialDateSelection];
    newDataCollection[index] = { date: selectDate, isSelected: true };
    setDateIsSelect(newDataCollection);
  };
  const selectedMovie = movieData?.filter((el) => el.id === +movieId)[0];
  const [showtimeRound, setShowtimeRound] = useState([]);

  useEffect(() => {
    const fetchShowtime = async () => {
      try {
        const res = await showtimeApi.getShowtimeByMovieStartEndDate(
          +movieId,
          getNext7days[0].date,
          getNext7days[getNext7days.length - 1].date
        );
        setShowtimeRound(res.data.showtimeData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchShowtime();
  }, []);

  const [filterDateData, setFilterDateData] = useState([]);
  useEffect(() => {
    const filter = showtimeRound?.filter(
      (el) =>
        dayjs(el.date).format("YYYY-MM-DD") ===
        dateIsSelect.filter((el) => el.isSelected === true)[0].date
    );
    setFilterDateData(filter);
  }, [showtimeRound, dateIsSelect]);

  return (
    <div className="bg-[#121212] min-h-[calc(100vh-5rem)] min-w-[1275px]">
      <div className="flex flex-col pb-8">
        <MovieDetail selectedMovie={selectedMovie} />
        <div className="px-8">
          <SelectDate
            firstDateSeletion={firstDateSeletion}
            handleDateSelection={handleDateSelection}
            dateIsSelect={dateIsSelect}
            setDateIsSelect={setDateIsSelect}
            dateList={dateList}
          />
          <div className="flex flex-col gap-6 px-4">
            {THEATER_DATA.map((el) => (
              <TheaterAccordion
                key={el.id}
                theaterName={el.theaterName}
                data={filterDateData.filter((subEl) => el.id === subEl.theaterId)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
