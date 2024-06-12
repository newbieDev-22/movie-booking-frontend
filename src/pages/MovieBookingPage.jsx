import React from "react";
import MovieDetail from "../features/booking/components/MovieDetail";
import SelectDate from "../features/booking/components/SelectDate";
import TheaterAccordion from "../components/TheaterAccordion";
import { THEATER_DATA } from "../constants";

const timeMock = ["10:30", "12:30", "14:30", "18:30", "20:30"];

export default function MovieBookingPage() {
  return (
    <div className="bg-[#121212] min-h-[calc(100vh-5rem)] min-w-[1275px]">
      <div className="flex flex-col pb-8">
        <MovieDetail />
        <div className="px-8">
          <SelectDate />
          <div className="flex flex-col gap-6 px-4">
            {THEATER_DATA.map((el) => (
              <TheaterAccordion
                key={el.id}
                theaterName={el.theaterName}
                timeSlots={timeMock}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
