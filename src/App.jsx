import { Suspense } from "react";
import Router from "./routes";
import Spinner from "./components/Spinner";
import AuthContextProvider from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import MovieContextProvider from "./contexts/MovieContext";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <AuthContextProvider>
        <MovieContextProvider>
          <Router />
          <ToastContainer position="bottom-right" autoClose={2000} />
        </MovieContextProvider>
      </AuthContextProvider>
    </Suspense>
  );
}

export default App;
