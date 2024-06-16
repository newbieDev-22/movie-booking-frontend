import { GENRE_KEYS, GENRE_ID_TO_NAME_MAPPING } from "../constants";

export default function getGenreNameBtn(input) {
  let genreList = [];
  for (let key of GENRE_KEYS) {
    if (input[key]) {
      genreList.push(GENRE_ID_TO_NAME_MAPPING[input[key]]);
    }
  }
  return genreList.join(", ");
}
