import { Suspense } from "react";
import Router from "./routes";
import Spinner from "./components/Spinner";
import AuthContextProvider from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import MovieContextProvider from "./contexts/MovieContext";
import ShowtimeContextProvider from "./contexts/ShowtimeContext";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <AuthContextProvider>
        <MovieContextProvider>
          <ShowtimeContextProvider>
            <Router />
            <ToastContainer position="bottom-right" autoClose={2000} />
          </ShowtimeContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </Suspense>
  );
}

export default App;
