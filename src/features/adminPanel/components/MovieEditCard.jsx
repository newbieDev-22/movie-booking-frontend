import { useState } from "react";
import Button from "../../../components/Button";
import ConfirmDetail from "../../../components/ConfirmDetail";
import Modal from "../../../components/Modal";
import SelectGenresDetail from "./SelectGenresDetail";
import AddNewMovieDetail from "./AddNewMovieDetail";
import RadioButton from "../../../components/RadioButton";
import HighlightDetail from "./HighlightDetail";

const imagePath = "https://posterspy.com/wp-content/uploads/2023/06/Spiderverse.jpg";

export default function MovieEditCard() {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isMovieInfoModalOpen, setIsMovieInfoModalOpen] = useState(false);
  const [isMovieStatusModalOpen, setIsMovieStatusModalOpen] = useState(false);
  const [isHighlightModalOpen, setIsHighlightModalOpen] = useState(false);
  const [isSelectGenresOpen, setIsSelectGenresOpen] = useState(false);

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
            <Button
              color="white"
              bg="editBtn"
              onClick={() => setIsHighlightModalOpen(true)}
            >
              <div className="font-bold flex justify-center items-center ">Highlight</div>
            </Button>
            <Button
              color="white"
              bg="editBtn"
              onClick={() => setIsMovieStatusModalOpen(true)}
            >
              <div className="font-bold flex justify-center items-center">
                Movie Status
              </div>
            </Button>
            <Button
              color="white"
              bg="editBtn"
              onClick={() => setIsMovieInfoModalOpen(true)}
            >
              <div className="font-bold flex justify-center items-center">Movie Info</div>
            </Button>
            <Button
              color="white"
              bg="deleteBtn"
              onClick={() => setIsConfirmModalOpen(true)}
            >
              <div className="font-bold flex justify-center items-center">
                Delete Movie
              </div>
            </Button>
          </div>
        </div>
      </div>
      <Modal
        title="Movie Status"
        open={isHighlightModalOpen}
        onClose={() => setIsHighlightModalOpen(false)}
        width={56}
      >
        <HighlightDetail />
      </Modal>
      <Modal
        title="Movie Status"
        open={isMovieStatusModalOpen}
        onClose={() => setIsMovieStatusModalOpen(false)}
        width={30}
      >
        <div>
          <RadioButton />
        </div>
      </Modal>
      <Modal
        title="Movie Info"
        open={isMovieInfoModalOpen}
        onClose={() => setIsMovieInfoModalOpen(false)}
        width={64}
      >
        <AddNewMovieDetail onOpenSelectGenres={() => setIsSelectGenresOpen(true)} />
      </Modal>
      <Modal
        title="Delete Confirm?"
        open={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        width={30}
      >
        <ConfirmDetail
          msg={"Do you want to delete this movie ?"}
          onClose={() => setIsConfirmModalOpen(false)}
        />
      </Modal>
      <Modal
        title="SELECT GENRES"
        open={isSelectGenresOpen}
        onClose={() => setIsSelectGenresOpen(false)}
      >
        <SelectGenresDetail />
      </Modal>
    </>
  );
}
