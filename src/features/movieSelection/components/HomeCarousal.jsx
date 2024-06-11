import Carousal from "../../../components/Carousal";
import { homeMockData } from "../../../constants";

export default function HomeCarousal() {
  return (
    <Carousal autoSlide={false}>
      {homeMockData.map((el) => {
        return (
          <div key={el.id} className="min-w-full relative">
            <div className="absolute bg-gradient-to-r from-black from-10% via-[#030303] via-40% to-transparent w-1/2 h-full pl-24 pt-10 pr-48 min-w-[800px]">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    {el.genres.map((genre) => (
                      <span key={genre} className="text-[#DBD9DD] text-lg font-bold">
                        {genre.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-white text-3xl font-bold">{el.movieName}</h1>
                </div>
                <p className="text-white text-sm  text-justify">{el.movieSynopsis}</p>
                <p className="text-[#DBD9DD] text-xl font-semibold text-justify">
                  {el.highlightWord}
                </p>
              </div>
            </div>
            <img src={el.imagePath} alt="landing" className="object-bottom" />
          </div>
        );
      })}
    </Carousal>
  );
}
