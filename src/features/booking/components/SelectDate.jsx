import { useState } from "react";
import Button from "../../../components/Button";
import DateItem from "../../../components/DateItem";
import dayjs from "dayjs";
import getNext7DaysUsingToday from "../../../utils/get-7-next-day";

const initialDateSelection = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
};

const firstDateSeletion = {
  0: true,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
};

function formatDateForMovieBooking(dataList) {
  const formatData = dataList.map((el) => {
    const dateDict = {};
    dateDict.dateName = dayjs(el).format("ddd").toUpperCase();
    dateDict.dateNum = dayjs(el).format("DD");
    return dateDict;
  });
  return formatData;
}

export default function SelectDate() {
  const dateList = formatDateForMovieBooking(getNext7DaysUsingToday());
  const [dateIsSelect, SetDateIsSelect] = useState(firstDateSeletion);
  console.log(dateList);
  const handleDateSelection = (selectDate) => {
    SetDateIsSelect({ ...initialDateSelection, [selectDate]: true });
  };

  return (
    <div>
      <div className="text-2xl font-bold text-white px-4">Showtime</div>
      <div className="flex py-6 items-center gap-16 px-12">
        <div>
          <Button color="white" onClick={() => SetDateIsSelect(firstDateSeletion)}>
            TODAY
          </Button>
        </div>

        <div className="flex gap-10">
          {dateList.map((el, index) => {
            return (
              <DateItem
                key={index}
                dateState={dateIsSelect[index]}
                onClick={() => handleDateSelection(index)}
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="text-[#ABABAF]">{el.dateName}</div>
                  <div className="text-white text-2xl font-semibold">{el.dateNum}</div>
                </div>
              </DateItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}
