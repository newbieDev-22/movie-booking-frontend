import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import { PlusIcon } from "../../../icons";
import AddNewMovieDetail from "./AddNewMovieDetail";

export default function AddMovie() {
  const [isAddNewMovieOpen, setIsAddNewMovieOpen] = useState(false);

  return (
    <div className="pt-8 px-8 pb-4">
      <div className="text-2xl font-bold text-white">MOVIE SETTING</div>
      <div className="py-4 px-16">
        <Button color="white" bg="addMovieBtn" onClick={() => setIsAddNewMovieOpen(true)}>
          <div className="h-20 flex justify-center items-center gap-6">
            <PlusIcon className={"h-8"} color="#6A6A6A" />
            <div className="text-3xl text-[#6A6A6A] font-bold">ADD NEW MOVIE</div>
          </div>
        </Button>
      </div>
      <Modal
        title="ADD NEW MOVIE"
        open={isAddNewMovieOpen}
        onClose={() => setIsAddNewMovieOpen(false)}
        width={64}
      >
        <AddNewMovieDetail onClose={() => setIsAddNewMovieOpen(false)} />
      </Modal>
    </div>
  );
}
