import { useState, useRef } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const initialInput = {
  movieName: "",
  movieSynopsis: "",
  genreId1: "",
  genreId2: "",
  genreId3: "",
  movieImagePath: "",
  movieTrailerPath: "",
  durationInMin: "",
};

const initialInputError = {
  movieName: "",
  movieSynopsis: "",
  genreId1: "",
  genreId2: "",
  genreId3: "",
  movieImagePath: "",
  movieTrailerPath: "",
  durationInMin: "",
};

export default function AddNewMovieDetail({ onOpenSelectGenres }) {
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const handleInputChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSumbitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-3">
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
      <form onSubmit={handleSumbitForm} className="col-span-2 p-4 content-center">
        <div className="grid grid-cols-2 gap-3">
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

          <label className="form-control w-full">
            <div className="label">
              <span className={`label-text text-[#DBD9DD]`}>Movie Synopsis</span>
            </div>
            <textarea
              placeholder="Movie Synopsis"
              name="movieSynopsis"
              value={input.movieSynopsis}
              onChange={handleInputChange}
              className="rounded-lg p-2 indent-2"
            ></textarea>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className={`label-text text-[#DBD9DD]`}>Poster Image file</span>
            </div>

            <button
              className="bg-white w-full rounded-md text-lg p-2"
              onClick={() => fileEl.current.click()}
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
              onClick={onOpenSelectGenres}
            >
              Genres
            </button>
          </label>

          <div className="col-span-2 pt-2">
            <Button color="white">
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
    </div>
  );
}
