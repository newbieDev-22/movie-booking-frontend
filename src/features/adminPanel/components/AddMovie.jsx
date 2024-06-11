import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import { PlusIcon } from "../../../icons";
import AddNewMovieDetail from "./AddNewMovieDetail";
import SelectGenresDetail from "./SelectGenresDetail";

export default function AddMovie() {
  const [isAddNewMovieOpen, setIsAddNewMovieOpen] = useState(false);
  const [isSelectGenresOpen, setIsSelectGenresOpen] = useState(false);

  return (
    <div className="pt-8 px-8 pb-4">
      <div className="text-2xl font-bold text-white">MOVIE SETTING</div>
      <div className="py-8 px-16">
        <Button color="white" onClick={() => setIsAddNewMovieOpen(true)}>
          <div className="h-20 flex justify-center items-center gap-6">
            <PlusIcon className={"h-8"} />
            <div className="text-3xl font-bold">ADD NEW MOVIE</div>
          </div>
        </Button>
      </div>
      <Modal
        title="ADD NEW MOVIE"
        open={isAddNewMovieOpen}
        onClose={() => setIsAddNewMovieOpen(false)}
        width={60}
      >
        <AddNewMovieDetail onOpenSelectGenres={() => setIsSelectGenresOpen(true)} />
      </Modal>
      <Modal
        title="SELECT GENRES"
        open={isSelectGenresOpen}
        onClose={() => setIsSelectGenresOpen(false)}
      >
        <SelectGenresDetail />
      </Modal>
    </div>
  );
}
