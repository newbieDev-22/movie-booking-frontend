import { useState, useEffect } from "react";
import Carousal from "../../../components/Carousal";
import useMovie from "../../../hooks/useMovie";
import { GENRE_ID_TO_NAME_MAPPING } from "../../../constants";

export default function HomeCarousal() {
  const { highlightData } = useMovie();
  const [showHighlightData, setShowHighlightData] = useState([]);
  useEffect(() => {
    const combineHighlightData = highlightData?.map((el) => {
      const newData = {};
      newData.id = el.id;
      newData.movieName = el.movieName;
      newData.movieSynopsis = el.movieSynopsis;
      const genres = [];
      if (el.genreId1) {
        genres.push(GENRE_ID_TO_NAME_MAPPING[el.genreId1]);
      }
      if (el.genreId2) {
        genres.push(GENRE_ID_TO_NAME_MAPPING[el.genreId2]);
      }
      if (el.genreId3) {
        genres.push(GENRE_ID_TO_NAME_MAPPING[el.genreId3]);
      }
      newData.genres = genres;
      newData.coverImagePath = el.highlights[0]?.coverImagePath;
      newData.highlightWord = el.highlights[0]?.highlightWord;
      return newData;
    });
    setShowHighlightData(combineHighlightData);
  }, [highlightData]);

  return (
    <Carousal autoSlide={true} autoSlideInterval={4000}>
      {showHighlightData?.map((el) => {
        return (
          <div key={el.id} className="min-w-full relative">
            <div className="grid grid-cols-6">
              <div className="col-span-2 bg-black">
                <div className="flex flex-col text-white justify-evenly h-[450px]  pl-16 z-20 ">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      {el.genres.map((genre) => (
                        <span key={genre} className="text-[#DBD9DD] text-lg font-bold">
                          {genre}
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
                  src={el.coverImagePath}
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
