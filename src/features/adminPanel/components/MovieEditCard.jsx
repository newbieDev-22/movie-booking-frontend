import { useState } from "react";
import Button from "../../../components/Button";
import ConfirmDetail from "../../../components/ConfirmDetail";
import Modal from "../../../components/Modal";
import SelectGenresDetail from "./SelectGenresDetail";
import AddNewMovieDetail from "./AddNewMovieDetail";
import RadioButton from "../../../components/RadioButton";
import HighlightDetail from "./HighlightDetail";

export default function MovieEditCard({ data }) {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isMovieInfoModalOpen, setIsMovieInfoModalOpen] = useState(false);
  const [isMovieStatusModalOpen, setIsMovieStatusModalOpen] = useState(false);
  const [isHighlightModalOpen, setIsHighlightModalOpen] = useState(false);
  const [isSelectGenresOpen, setIsSelectGenresOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between gap-2">
        <div className="rounded-md shadow-md">
          <img
            src={data?.movieImagePath}
            alt="movie"
            className="object-cover aspect-[3/4] w-full"
          />
        </div>
        <div className="text-lg text-white font-bold content-center text-center py-1">
          {data.movieName}
        </div>
        <div className="px-1 gap-2">
          <div className="grid grid-cols-2 gap-2">
            <Button
              color="white"
              bg="editBtn"
              onClick={() => setIsHighlightModalOpen(true)}
            >
              HL Status
            </Button>
            <Button
              color="white"
              bg="editBtn"
              onClick={() => setIsMovieStatusModalOpen(true)}
            >
              Movie Status
            </Button>
            <Button
              color="white"
              bg="editBtn"
              onClick={() => setIsMovieInfoModalOpen(true)}
            >
              Movie Info
            </Button>
            <Button
              color="white"
              bg="deleteBtn"
              onClick={() => setIsConfirmModalOpen(true)}
            >
              Delete Movie
            </Button>
          </div>
        </div>
      </div>
      <Modal
        title="HIGHLIGHT"
        open={isHighlightModalOpen}
        onClose={() => setIsHighlightModalOpen(false)}
        width={56}
      >
        <HighlightDetail />
      </Modal>
      <Modal
        title="MOVIE STATUS"
        open={isMovieStatusModalOpen}
        onClose={() => setIsMovieStatusModalOpen(false)}
        width={30}
      >
        <div>
          <RadioButton />
        </div>
      </Modal>
      <Modal
        title="MOVIE INFO"
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
