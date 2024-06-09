import MovieHeader from "./MovieHeader";
import MovieContainer from "./MovieContainer";
import MovieFilter from "./MovieFilter";

export default function MovieSelectionContainer() {
  return (
    <div>
      <MovieHeader />
      <MovieFilter />
      <MovieContainer />
    </div>
  );
}
