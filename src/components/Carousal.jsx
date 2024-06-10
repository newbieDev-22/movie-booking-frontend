import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousal({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((current) => (current === 0 ? children.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current === children.length - 1 ? 0 : current + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="p-1 rounded-full shadow bg-white/40
         text-gray-800 hover:bg-white z-10"
          onClick={prev}
        >
          <ChevronLeft size={30} />
        </button>
        <button
          className="p-1 rounded-full shadow bg-white/40
         text-gray-800 hover:bg-white z-10"
          onClick={next}
        >
          <ChevronRight size={30} />
        </button>
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button className=" bg-transparent w-1/2 h-full" onClick={prev}></button>
        <button className=" bg-transparent w-1/2 h-full" onClick={next}></button>
      </div>

      <div className="absolute bottom-2 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {children.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full 
                ${current === i ? "p-2" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
