import ReactPlayer from "react-player";
import Spinner from "../../../components/Spinner";

const imagePath =
  "https://posterspy.com/wp-content/uploads/2023/06/Spiderverse.jpg" || null;

const Wrapper = ({ children }) => (
  <div className="w-full aspect-[16/9] p-8">{children}</div>
);

export default function MovieDetail() {
  return (
    <div className="w-full flex px-6">
      <div className="flex flex-col w-3/5 m-auto">
        <div className="flex h-full justify-between p-2">
          <div className="px-6 py-8 flex items-center">
            <img src={imagePath} alt="poster" className="rounded-xl aspect-[3/4]" />
          </div>

          <div className="flex flex-col justify-center px-4 gap-1">
            <div className="text-3xl text-white font-bold">
              Spider-Man: Across the Spider-Verse
            </div>

            <div className="flex flex-col gap-1 pt-6">
              <div className="flex items-center">
                <div className="text-[#ABABAF]">Genres :</div>
                <div className="pl-1 text-white font-bold">Action</div>
                <div className="pl-1 text-white font-bold">Animation</div>
              </div>

              <div className="flex items-center">
                <div className="text-[#ABABAF]">Duration : </div>
                <div className="pl-1 text-white font-bold">105 Min</div>
              </div>
            </div>

            <div className="pt-6">
              <div className="text-[#ABABAF] ">Synopsis</div>
              <p className="text-white pt-2 text-justify indent-12">
                {`In the film, Miles goes on an adventure with Gwen Stacy / Spider-Woman
      (Steinfeld) across the multiverse, where he meets a team of Spider-People
      led by Miguel O'Hara / Spider-Man 2099 (Isaac) known as the
      Spider-Society, but comes into conflict with them over handling a new
      threat in the form of the Spot (Schwartzman).`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-2/5 max-w-[800px]">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=shW9i6k8cB0`}
          fallback={<Spinner />}
          wrapper={Wrapper}
        />
      </div>
    </div>
  );
}
