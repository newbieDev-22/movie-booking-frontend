import Carousal from "../../../components/Carousal";
import { homeMockData } from "../../../constants";

export default function HomeCarousal() {
  return (
    <Carousal autoSlide={true} autoSlideInterval={4000}>
      {homeMockData.map((el) => {
        return (
          <div key={el.id} className="min-w-full relative">
            <div className="grid grid-cols-6">
              <div className="col-span-2 bg-black">
                <div className="flex flex-col text-white justify-evenly h-[450px]  pl-16 z-20 ">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      {el.genres.map((genre) => (
                        <span key={genre} className="text-[#DBD9DD] text-lg font-bold">
                          {genre.toUpperCase()}
                        </span>
                      ))}
                    </div>
                    <h1 className="text-white text-3xl font-bold">{el.movieName}</h1>
                  </div>

                  <p className="text-white text-sm text-justify indent-8">
                    {el.movieSynopsis}
                  </p>

                  <p className="text-[#DBD9DD] text-xl font-semibold text-justify">
                    {el.highlightWord}
                  </p>
                </div>
              </div>
              <div className="col-span-4">
                <div className="bg-gradient-to-r from-black from-0% via-[#030303] via-10% to-transparent w-1/5 h-[450px] absolute z-10"></div>
                <img
                  src={el.imagePath}
                  alt="landing"
                  className="object-cover aspect-[16/9]"
                />
              </div>
            </div>
          </div>
        );
      })}
    </Carousal>
  );
}
