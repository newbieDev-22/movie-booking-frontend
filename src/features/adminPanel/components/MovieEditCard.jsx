import { useState } from "react";
import Button from "../../../components/Button";
import ConfirmDetail from "../../../components/ConfirmDetail";
import Modal from "../../../components/Modal";
import RadioButton from "./RadioButton";
import HighlightDetail from "./HighlightDetail";
import movieApi from "../../../apis/movie";
import { toast } from "react-toastify";
import useMovie from "../../../hooks/useMovie";
import EditMovieInfo from "./EditMovieInfo";

export default function MovieEditCard({ data }) {
  const { handleDeleteMovie } = useMovie();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isMovieInfoModalOpen, setIsMovieInfoModalOpen] = useState(false);
  const [isMovieStatusModalOpen, setIsMovieStatusModalOpen] = useState(false);
  const [isHighlightModalOpen, setIsHighlightModalOpen] = useState(false);

  const handleDeleteMovieEachMovie = async () => {
    await movieApi.deleteMovieByMovieId(data.id);
    handleDeleteMovie(data.id);
    toast.success("Delete Movie sucessfully!");
  };

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
        width={45}
      >
        <RadioButton data={data} onClose={() => setIsMovieStatusModalOpen(false)} />
      </Modal>
      <Modal
        title="MOVIE INFO"
        open={isMovieInfoModalOpen}
        onClose={() => setIsMovieInfoModalOpen(false)}
        width={64}
      >
        <EditMovieInfo data={data} onClose={() => setIsMovieInfoModalOpen(false)} />
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
          onClick={() => {
            handleDeleteMovieEachMovie();
            setIsConfirmModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
}
