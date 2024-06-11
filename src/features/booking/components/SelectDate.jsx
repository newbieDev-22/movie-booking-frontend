import { useState } from "react";
import Button from "../../../components/Button";
import DateItem from "../../../components/DateItem";

const getNext7DaysUsingToday = () => {
  const today = new Date();
  const dateList = [];
  const dummyDate = new Date();
  for (let i = 0; i < 7; i++) {
    const updateDate = new Date(dummyDate.setDate(today.getDate() + i));
    const dateSplit = String(updateDate).split(" ");
    const dateName = dateSplit[0];
    const dateNum = dateSplit[2];
    const dateObj = { dateName, dateNum };
    dateList.push(dateObj);
  }
  return dateList;
};

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

export default function SelectDate() {
  const dateList = getNext7DaysUsingToday();
  const [dateIsSelect, SetDateIsSelect] = useState(firstDateSeletion);

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
