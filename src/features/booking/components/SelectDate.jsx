import Button from "../../../components/Button";
import DateItem from "../../../components/DateItem";

export default function SelectDate({
  setDateIsSelect,
  firstDateSeletion,
  dateList,
  dateIsSelect,
  handleDateSelection,
}) {
  return (
    <div>
      <div className="text-2xl font-bold text-white px-4">Showtime</div>
      <div className="flex py-6 items-center gap-16 px-12">
        <div>
          <Button color="white" onClick={() => setDateIsSelect(firstDateSeletion)}>
            TODAY
          </Button>
        </div>

        <div className="flex gap-10">
          {dateIsSelect?.map((el, index) => {
            return (
              <DateItem
                key={index}
                dateState={el.isSelected}
                onClick={() => handleDateSelection(el.date, index)}
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="text-[#ABABAF]">{dateList[index].dateName}</div>
                  <div className="text-white text-2xl font-semibold">
                    {dateList[index].dateNum}
                  </div>
                </div>
              </DateItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}
