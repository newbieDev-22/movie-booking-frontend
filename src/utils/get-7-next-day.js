export default function getNext7DaysUsingToday() {
  const dateList = [];
  const today = new Date();
  const dummyDate = new Date();
  for (let i = 0; i < 7; i++) {
    const updateDate = new Date(dummyDate.setDate(today.getDate() + i));
    dateList.push(updateDate);
  }
  return dateList;
}
