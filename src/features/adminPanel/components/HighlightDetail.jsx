import { useState, useRef } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import SelectMovieDetail from "./SelectMovieDetail";

export default function HighlightDetail() {
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const [input, setInput] = useState("");
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSumbit = () => {
    console.log("submit");
  };

  return (
    <>
      <div className="flex justify-between items-center gap-5 py-3">
        <div className="w-1/2">
          <input
            type="file"
            placeholder="highlight image"
            hidden
            ref={fileEl}
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          ></input>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-white font-bold flex items-center">MOVIE</div>
            <div className="col-span-2">
              <Button bg="addMovieBtn" onClick={() => setIsAddMovieOpen(true)}>
                <div className="font-bold">Selete Movie</div>
              </Button>
            </div>
            <div className="text-white font-bold flex items-center">HIGHLIGHT IMAGE</div>
            <div className="col-span-2">
              <Button bg="addMovieBtn" onClick={() => fileEl.current.click()}>
                <div className="font-bold">Selete Image</div>
              </Button>
            </div>
            <div className="text-white font-bold flex items-center">
              HIGHLIGHT CAPTION
            </div>
            <div className="col-span-2">
              <Input
                placeholder="Highlight Caption"
                value={input}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-span-3 pt-2">
              <Button color="white" onClick={handleSumbit}>
                <div className="font-bold">CONFIRM</div>
              </Button>
            </div>
          </div>
        </div>
        {file ? (
          <div
            role="button"
            className="flex flex-col p-4 w-1/2"
            onClick={() => fileEl.current.click()}
          >
            <img
              src={URL?.createObjectURL(file)}
              className="h-full aspect-auto rounded-xl"
              alt="preview"
            />
          </div>
        ) : null}
      </div>
      <Modal
        title="SELECT MOVIE"
        open={isAddMovieOpen}
        onClose={() => setIsAddMovieOpen(false)}
        width={75}
      >
        <SelectMovieDetail />
      </Modal>
    </>
  );
}
