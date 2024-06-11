import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

const imagePath = "https://posterspy.com/wp-content/uploads/2023/06/Spiderverse.jpg";

export default function SelectMovieCard() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="overflow-hidden rounded-md shadow-md">
          <img src={imagePath} alt="movie" />
        </div>
        <div className="flex flex-col px-1 gap-2">
          <div className="text-left text-lg text-white font-bold">
            Spider-Man: Across the Spider-Verse
          </div>
        </div>
      </div>
    </>
  );
}
