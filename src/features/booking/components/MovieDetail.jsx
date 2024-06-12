import ReactPlayer from "react-player";
import Spinner from "../../../components/Spinner";
import { useEffect } from "react";
import getGenreNameBtn from "../../../utils/genre-name";

const Wrapper = ({ children }) => (
  <div className="object-cover aspect-[16/9] p-8 ">{children}</div>
);

export default function MovieDetail({ selectedMovie }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getAllGenre = getGenreNameBtn({
    genreId1: selectedMovie?.genreId1,
    genreId2: selectedMovie?.genreId2,
    genreId3: selectedMovie?.genreId3,
  });
  return (
    <div className="grid grid-cols-5 gap-2 px-6">
      <div className="py-6 px-6 content-center">
        <img
          src={selectedMovie?.movieImagePath}
          alt="poster"
          className="object-cover aspect-auto"
        />
        c
      </div>
      <div className="flex flex-col justify-center gap-4 p-8 col-span-2">
        <div className="text-3xl text-white font-bold">{selectedMovie?.movieName}</div>
        <div className="grid grid-cols-4 text-left py-8 gap-y-2">
          <div className="text-[#ABABAF]">Genres :</div>
          <div className="text-white font-bold text-left col-span-3">{getAllGenre}</div>
          <div className="text-[#ABABAF]">Duration : </div>
          <div className="text-white font-bold col-span-3">
            {selectedMovie?.durationInMin} Min
          </div>
        </div>
        <div>
          <div className="text-[#ABABAF]">Synopsis :</div>
          <p className="text-white pt-2 pr-4 text-justify indent-12">
            {selectedMovie?.movieSynopsis}
          </p>
        </div>
      </div>

      <div className="content-center col-span-2">
        <ReactPlayer
          url={`${selectedMovie?.movieTrailerPath}`}
          fallback={<Spinner />}
          wrapper={Wrapper}
        />
      </div>
    </div>
  );
}
