import React from "react";
import MovieDetail from "../features/booking/components/MovieDetail";
import SelectDate from "../features/booking/components/SelectDate";
import TheaterAccordion from "../components/TheaterAccordion";
export default function MovieBookingPage() {
  return (
    <div className="bg-[#121212] min-h-[calc(100vh-5rem)] min-w-[1275px]">
      <div className="flex flex-col pb-">
        <MovieDetail />
        <div className="px-8">
          <SelectDate />
          <div className="flex flex-col gap-8 px-4">
            <TheaterAccordion />
            <TheaterAccordion />
            <TheaterAccordion />
            <TheaterAccordion />
            <TheaterAccordion />
          </div>
        </div>
      </div>
    </div>
  );
}
