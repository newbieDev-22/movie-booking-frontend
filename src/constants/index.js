export const RIGHT_MENU_ITEM = {
  GUEST: "GUEST",
  USER: "USER",
};

export const GENRE_KEYS = ["genreId1", "genreId2", "genreId3"];

export const GENRE_MAPPING = {
  ACTION: 1,
  ANIMATION: 2,
  ADVENTURE: 3,
  COMEDY: 4,
  DRAMA: 5,
  THRILLER: 6,
  ROMANCE: 7,
  HORROR: 8,
  FANTASY: 9,
  MUSICAL: 10,
  CRIME: 11,
};

export const GENRE_ID_TO_NAME_MAPPING = {
  1: "ACTION",
  2: "ANIMATION",
  3: "ADVENTURE",
  4: "COMEDY",
  5: "DRAMA",
  6: "THRILLER",
  7: "ROMANCE",
  8: "HORROR",
  9: "FANTASY",
  10: "MUSICAL",
  11: "CRIME",
};

export const FILTER_BTN_COLOR_MAP = {
  true: "isActiveBtn",
  false: "isNonActiveBtn",
};

export const MovieSelectionStatus = {
  "NOT SELECTED": 0,
  CURRENTLY: 1,
  UPCOMING: 2,
};

export const MOVIE_SELECTTION_NAME = {
  NOTSELECTED: "NOT SELECTED",
  CURRENTLY: "CURRENTLY",
  UPCOMING: "UPCOMING",
};

export const MOVIESELECTION_TYPE_NAME_TO_ID = {
  "NOT SELECTED": 0,
  CURRENTLY: 1,
  UPCOMING: 2,
};

export const MOVIESELECTION_TYPE_ID_TO_NAME = {
  0: "NOT SELECTED",
  1: "CURRENTLY",
  2: "UPCOMING",
};

export const MOVIESELECTION_NAME = {
  NOTSELECTED: "NOT SELECTED",
  CURRENTLY: "CURRENTLY",
  UPCOMING: "UPCOMING",
};

export const PAYMENT_TYPE_ID_MAP = {
  PENDING: 1,
  SUCCESS: 2,
};

export const rowName = ["A", "B", "C", "D", "E", "F", "G", "H"];
export const reverseRowName = [...rowName].reverse();

export const seatStatusData = [
  { id: 1, isBooked: false, isSelect: false },
  { id: 2, isBooked: false, isSelect: false },
  { id: 3, isBooked: false, isSelect: false },
  { id: 4, isBooked: false, isSelect: false },
  { id: 5, isBooked: false, isSelect: false },
  { id: 6, isBooked: false, isSelect: false },
  { id: 7, isBooked: false, isSelect: false },
  { id: 8, isBooked: false, isSelect: false },
];

export const seatPrice = {
  NORMAL: 200,
  PREMIUM: 500,
};

export const THEATER_DATA = [
  { id: 1, theaterName: "Theater A" },
  { id: 2, theaterName: "Theater B" },
  { id: 3, theaterName: "Theater C" },
  { id: 4, theaterName: "Theater D" },
  { id: 5, theaterName: "Theater E" },
];
