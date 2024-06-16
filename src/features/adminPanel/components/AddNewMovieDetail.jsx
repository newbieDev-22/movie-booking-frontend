import { useState, useRef } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import movieApi from "../../../apis/movie";
import { toast } from "react-toastify";
import Modal from "../../../components/Modal";
import SelectGenresDetail from "./SelectGenresDetail";
import { GENRE_ID_TO_NAME_MAPPING } from "../../../constants";
import Spinner from "../../../components/Spinner";
import getGenreNameBtn from "../../../utils/genre-name";
import useMovie from "../../../hooks/useMovie";
import validateMovie from "../validator/validator-movie";

const initialInput = {
  movieName: "",
  movieSynopsis: "",
  genreId1: null,
  genreId2: null,
  genreId3: null,
  movieTrailerPath: "",
  durationInMin: 0,
};

const initialInputError = {
  movieName: "",
  movieSynopsis: "",
  genreId1: "",
  genreId2: "",
  genreId3: "",
  movieTrailerPath: "",
  durationInMin: "",
};

export default function AddNewMovieDetail({ onClose }) {
  const { handleAddMovie } = useMovie();
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const [input, setInput] = useState({ ...initialInput });
  const [inputError, setInputError] = useState({ ...initialInputError });
  const [isSelectGenresOpen, setIsSelectGenresOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleGenresChange = (data) => setInput({ ...input, ...data });

  const handleSumbitForm = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const error = validateMovie(input);
      if (error) {
        return setInputError(error);
      }

      setInputError(initialInputError);
      if (file) {
        const formData = new FormData();
        formData.append("movieImagePath", file);

        for (const [key, value] of Object.entries(input)) {
          if (value) {
            formData.append(key, value);
          }
        }

        const result = await movieApi.createMovie(formData);
        handleAddMovie(result.data.movieData);
      } else {
        const result = await movieApi.createMovie(input);
        handleAddMovie(result.data.movieData);
      }
      toast.success("Add Movie sucessfully!");
      onClose();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-3">
      {isLoading && <Spinner transparent />}
      <input
        type="file"
        placeholder="Poster image"
        hidden
        ref={fileEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      ></input>
      <form
        onSubmit={handleSumbitForm}
        className={
          file ? "col-span-2 p-4 content-center" : "col-span-3 p-4 content-center"
        }
      >
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          <label className="form-control w-full">
            <div className="label">
              <span className={`label-text text-[#DBD9DD]`}>Movie Name</span>
            </div>
            <Input
              placeholder="Movie name"
              name="movieName"
              value={input.movieName}
              onChange={handleInputChange}
              error={inputError.movieName}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className={`label-text text-[#DBD9DD]`}>Duration</span>
            </div>
            <Input
              placeholder="duration"
              name="durationInMin"
              type="number"
              value={input.durationInMin}
              onChange={handleInputChange}
              error={inputError.durationInMin}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className={`label-text text-[#DBD9DD]`}>Youtube URL</span>
            </div>
            <Input
              placeholder="Youtube URL"
              name="movieTrailerPath"
              value={input.movieTrailerPath}
              onChange={handleInputChange}
              error={inputError.movieTrailerPath}
            />
          </label>

          <label className="form-control w-full ">
            <div className="label">
              <span className={`label-text text-[#DBD9DD]`}>Movie Synopsis</span>
            </div>
            <textarea
              placeholder="Movie Synopsis"
              name="movieSynopsis"
              value={input.movieSynopsis}
              onChange={handleInputChange}
              className="rounded-lg p-2 indent-2 w-full"
            ></textarea>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className={`label-text text-[#DBD9DD]`}>Poster Image file</span>
            </div>

            <button
              className="bg-white w-full rounded-md text-lg p-2"
              onClick={() => fileEl.current.click()}
              type="button"
            >
              Choose Image File
            </button>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className={`label-text text-[#DBD9DD]`}>Genres</span>
            </div>
            <button
              className="bg-white w-full rounded-md text-lg p-2"
              onClick={() => setIsSelectGenresOpen(true)}
              type="button"
            >
              {GENRE_ID_TO_NAME_MAPPING[input.genreId1] ||
              GENRE_ID_TO_NAME_MAPPING[input.genreId2] ||
              GENRE_ID_TO_NAME_MAPPING[input.genreId3]
                ? getGenreNameBtn(input)
                : "Genres"}
            </button>
          </label>

          <div className="col-span-2 pt-2">
            <Button color="white" type="submit">
              <div className="text-xl font-bold">CONFIRM</div>
            </Button>
          </div>
        </div>
      </form>

      {file ? (
        <div className="">
          <div className="text-xl font-bold text-[#DBD9DD] text-center">
            Image Preview
          </div>
          <div
            className="flex flex-col justify-center items-center px-2 py-6"
            onClick={() => fileEl.current.click()}
          >
            <img
              src={URL?.createObjectURL(file)}
              className="object-cover aspect-[3/4]"
              alt="preview"
            />
          </div>
        </div>
      ) : null}
      <Modal
        title="SELECT GENRES"
        open={isSelectGenresOpen}
        onClose={() => setIsSelectGenresOpen(false)}
      >
        <SelectGenresDetail
          handleGenresChange={handleGenresChange}
          onClose={() => setIsSelectGenresOpen(false)}
          input={input}
        />
      </Modal>
    </div>
  );
}
