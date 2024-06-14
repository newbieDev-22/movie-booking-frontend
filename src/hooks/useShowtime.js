import { useContext } from "react";
import { ShowtimeContext } from "../contexts/ShowtimeContext";

export default function useShowtime() {
  return useContext(ShowtimeContext);
}
