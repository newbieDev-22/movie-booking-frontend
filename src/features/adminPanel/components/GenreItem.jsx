export default function GenreItem({ genre, genreState, cb }) {
  return (
    <div className="flex items-center">
      <input
        checked={genreState[genre]}
        id={genre}
        type="checkbox"
        name={genre}
        value={genreState[genre]}
        onChange={cb}
        className="disabled w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={genre}
        className="ms-2 text-sm font-medium dark:text-gray-300 text-white"
      >
        {genre}
      </label>
    </div>
  );
}
