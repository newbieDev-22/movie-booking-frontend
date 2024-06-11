import { useState } from "react";
import Button from "../../../components/Button";

const initGenreState = {
  ACTION: false,
  ANIMATION: false,
  ADVENTURE: false,
  COMEDY: false,
  DRAMA: false,
  THRILLER: false,
  ROMANCE: false,
  HORROR: false,
  FANTASY: false,
  MUSICAL: false,
  CRIME: false,
};

export default function SelectGenresDetail() {
  const [genreState, setGenreState] = useState(initGenreState);

  const handleCheckBoxChange = (e) => {
    setGenreState({
      ...genreState,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="grid grid-cols-3 gap-x-6 gap-y-8 px-2 pt-10 pb-4">
      <div className="flex items-center">
        <input
          id="ACTION"
          type="checkbox"
          name="ACTION"
          value={genreState.ACTION}
          onClick={handleCheckBoxChange}
          className="disabled w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="ACTION"
          className="ms-2 text-sm font-medium dark:text-gray-300 text-white"
        >
          Action
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="ANIMATION"
          type="checkbox"
          name="ANIMATION"
          value={genreState.ANIMATION}
          onClick={handleCheckBoxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="ANIMATION"
          className="ms-2 text-sm font-medium dark:text-gray-300 text-white"
        >
          Animation
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="ADVENTURE"
          type="checkbox"
          name="ADVENTURE"
          value={genreState.ADVENTURE}
          onClick={handleCheckBoxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="ADVENTURE"
          className="ms-2 text-sm font-medium dark:text-gray-300 text-white"
        >
          Adventure
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="COMEDY"
          type="checkbox"
          name="COMEDY"
          value={genreState.COMEDY}
          onClick={handleCheckBoxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="COMEDY"
          className="ms-2 text-sm font-medium dark:text-gray-300 text-white"
        >
          Comedy
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="DRAMA"
          type="checkbox"
          name="DRAMA"
          value={genreState.DRAMA}
          onClick={handleCheckBoxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="DRAMA"
          className="ms-2 text-sm font-medium dark:text-gray-300 text-white"
        >
          Drama
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="THRILLER"
          type="checkbox"
          name="THRILLER"
          value={genreState.THRILLER}
          onClick={handleCheckBoxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="THRILLER"
          className="ms-2 text-sm font-medium dark:text-gray-300 text-white"
        >
          Thriller
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="ROMANCE"
          type="checkbox"
          name="ROMANCE"
          value={genreState.ROMANCE}
          onClick={handleCheckBoxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="ROMANCE"
          className="ms-2 text-sm font-medium dark:text-gray-300 text-white"
        >
          Romance
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="HORROR"
          type="checkbox"
          name="HORROR"
          value={genreState.HORROR}
          onClick={handleCheckBoxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="HORROR"
          className="ms-2 text-sm font-medium dark:text-gray-300 text-white"
        >
          Horror
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="FANTASY"
          type="checkbox"
          name="FANTASY"
          value={genreState.FANTASY}
          onClick={handleCheckBoxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="FANTASY"
          className="ms-2 text-sm font-medium dark:text-gray-300 text-white"
        >
          Fantasy
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="MUSICAL"
          type="checkbox"
          name="MUSICAL"
          value={genreState.MUSICAL}
          onClick={handleCheckBoxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="MUSICAL"
          className="ms-2 text-sm font-medium dark:text-gray-300 text-white"
        >
          Musical
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="CRIME"
          type="checkbox"
          name="CRIME"
          value={genreState.CRIME}
          onClick={handleCheckBoxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="CRIME"
          className="ms-2 text-sm font-medium dark:text-gray-300 text-white"
        >
          Crime
        </label>
      </div>

      <div className="col-span-3">
        <Button color="white">
          <div className="font-bold">Confirm</div>
        </Button>
      </div>
    </div>
  );
}
