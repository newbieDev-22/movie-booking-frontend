import ReactPlayer from "react-player";
import Spinner from "../../../components/Spinner";
import { mockData } from "../../../constants";

const Wrapper = ({ children }) => (
  <div className="object-cover aspect-[16/9] p-8 ">{children}</div>
);

const dummyData = mockData[0];
const dummyGenres = ["Action", "Animation"];
const dummySynopsis =
  "In his second year of fighting crime, Batman uncovers corruption in Gotham City linked to his own family while facing the serial killer known as the Riddler.";

export default function MovieDetail() {
  return (
    <div className="grid grid-cols-5 gap-2 px-6">
      <div className="py-6 px-6 content-center">
        <img src={dummyData?.posterImage} alt="poster" className="aspect-[3/4]" />
      </div>
      <div className="flex flex-col justify-center gap-4 p-8 col-span-2">
        <div className="text-3xl text-white font-bold">{dummyData?.movieName}</div>
        <div className="grid grid-cols-4 text-left py-8 gap-y-2">
          <div className="text-[#ABABAF]">Genres :</div>
          <div className="text-white font-bold text-left col-span-3">
            {dummyGenres.join(", ")}
          </div>
          <div className="text-[#ABABAF]">Duration : </div>
          <div className="text-white font-bold col-span-3">{dummyData?.duration} Min</div>
        </div>
        <div>
          <div className="text-[#ABABAF]">Synopsis :</div>
          <p className="text-white pt-2 pr-4 text-justify indent-12">{dummySynopsis}</p>
        </div>
      </div>

      <div className="content-center col-span-2">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=shW9i6k8cB0`}
          fallback={<Spinner />}
          wrapper={Wrapper}
        />
      </div>
    </div>
  );
}
