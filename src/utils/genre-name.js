import { GENRE_KEYS, SWAP_GENRE_MAPPING } from "../constants";

export default function getGenreNameBtn(input) {
  let genreList = [];
  for (let key of GENRE_KEYS) {
    if (input[key]) {
      genreList.push(SWAP_GENRE_MAPPING[input[key]]);
    }
  }
  return genreList.join(", ");
}
