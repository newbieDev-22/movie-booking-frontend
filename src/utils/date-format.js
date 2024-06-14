import dayjs from "dayjs";

export default function formatDateForShowtime(dateList, format) {
  const formatData = dateList.map((el) => {
    const dateDict = {};
    dateDict.date = dayjs(el).format(format);
    return dateDict;
  });
  return formatData;
}
