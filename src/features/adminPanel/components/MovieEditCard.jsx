import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

const imagePath = "https://posterspy.com/wp-content/uploads/2023/06/Spiderverse.jpg";

export default function MovieEditCard() {
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
          <div className="grid grid-cols-2 gap-2">
            <Button color="white" bg="editBtn">
              <div className="font-bold">Highlight</div>
            </Button>
            <Button color="white" bg="editBtn">
              <div className="font-bold">Movie Status</div>
            </Button>
            <Button color="white" bg="editBtn">
              <div className="font-bold">Movie Info</div>
            </Button>
            <Button color="white" bg="deleteBtn">
              <div className="font-bold">Delete Movie</div>
            </Button>
          </div>
        </div>
      </div>
      <Modal></Modal>
      <Modal></Modal>
      <Modal></Modal>
      <Modal></Modal>
    </>
  );
}
