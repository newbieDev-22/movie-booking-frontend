import { createContext } from "react";

const ShowtimeContext = createContext();

const sharedValue = {};

export default function ShowtimeContextProvider({ children }) {
  return (
    <ShowtimeContext.Provider value={sharedValue}>{children}</ShowtimeContext.Provider>
  );
}

export { ShowtimeContext };
