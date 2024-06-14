export default function timeCompareBetweenShowtime(
  showtimeAStartTime,
  showtimeAEndTime,
  showtimeBStartTime
) {
  return (
    showtimeAStartTime <= showtimeBStartTime && showtimeAEndTime > showtimeBStartTime
  );
}
