import { useState, useRef } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import SelectMovieDetail from "./SelectMovieDetail";
import Spinner from "../../../components/Spinner";
import highlightApi from "../../../apis/highlight";
import { toast } from "react-toastify";
import useMovie from "../../../hooks/useMovie";
import ConfirmDetail from "../../../components/ConfirmDetail";

export default function HighlightDetail({ data, onClose }) {
  const {
    highlightData,
    fetchMovie,
    handleCreateHighlight,
    handleUpdateHighlight,
    handleDeleteHighlight,
  } = useMovie();
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const filterMovie = highlightData?.filter((el) => el.id === data.id)[0];
  const initInput =
    filterMovie?.highlights.length > 0 ? filterMovie.highlights[0].highlightWord : "";
  const [input, setInput] = useState(initInput);
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleDeleteHighlightEachMovie = async () => {
    await highlightApi.deleteHighlight(data.id);
    handleDeleteHighlight(data.id);
    onClose();
    toast.success("Delete highlight sucessfully!");
  };

  const handleSumbit = async () => {
    try {
      setIsLoading(true);
      if (!filterMovie) {
        if (file) {
          const formData = new FormData();
          formData.append("coverImagePath", file);
          formData.append("movieId", data.id);
          formData.append("highlightWord", input);

          const result = await highlightApi.createHighlight(formData);
          const dummyResult = { ...result.data.highlightData };
          delete dummyResult.id;
          handleCreateHighlight(data.id, dummyResult);
          toast.success("Add highlight sucessfully!");
          onClose();
        } else {
          toast.error("No highlight image");
          onClose();
        }
      } else {
        if (file) {
          const formData = new FormData();
          formData.append("coverImagePath", file);
          if (input.trim() !== "") {
            formData.append("highlightWord", input);
          }
          const result = await highlightApi.updateHighlight(data.id, formData);

          const dummyResult = { ...result.data.highlightData };
          delete dummyResult.id;
          handleUpdateHighlight(data.id, dummyResult);
          toast.success("Update highlight sucessfully!");
          onClose();
        } else {
          await highlightApi.updateHighlight(data.id, {
            highlightWord: input,
          });
          handleUpdateHighlight(data.id, {
            movieId: data.id,
            coverImagePath: filterMovie.highlights[0].coverImagePath,
            highlightWord: input,
          });
          toast.success("Update highlight sucessfully!");
          onClose();
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Spinner transparent />}
      <div className="grid grid-cols-2">
        <div className={file ? "p-4 content-center" : "p-4 content-center col-span-2"}>
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
          <div className="grid grid-cols-2 gap-3">
            <div className="text-white font-bold flex items-center">HIGHLIGHT IMAGE</div>
            <div className="">
              <Button bg="addMovieBtn" onClick={() => fileEl.current.click()}>
                <div className="font-bold">SELECT IMAGE</div>
              </Button>
            </div>
            <div className="text-white font-bold flex items-center">
              HIGHLIGHT CAPTION
            </div>

            <div className="">
              <Input
                placeholder="Highlight Caption"
                value={input}
                onChange={handleInputChange}
              />
            </div>

            <div className="pt-2">
              <Button
                color="white"
                bg="deleteHLBtn"
                onClick={() => setIsConfirmModalOpen(true)}
              >
                <div className="font-bold">DELETE HIGHLIGHT</div>
              </Button>
            </div>
            <div className=" pt-2">
              <Button color="white" onClick={handleSumbit}>
                <div className="font-bold">CONFIRM</div>
              </Button>
            </div>
          </div>
        </div>
        {file ? (
          <div
            role="button"
            className="p-4 content-center"
            onClick={() => fileEl.current.click()}
          >
            <img
              src={URL?.createObjectURL(file)}
              className="object-cover aspect-[16/9]"
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
      <Modal
        title="Delete Confirm?"
        open={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        width={30}
      >
        <ConfirmDetail
          msg={"Do you want to delete this highlight ?"}
          onClose={() => setIsConfirmModalOpen(false)}
          onClick={() => {
            handleDeleteHighlightEachMovie();
            setIsConfirmModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
}
