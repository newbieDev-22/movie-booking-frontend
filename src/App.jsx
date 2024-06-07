import { Suspense } from "react";
import Router from "./routes";
import Spinner from "./components/Spinner";
import AuthContextProvider from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <AuthContextProvider>
        <Router />
        <ToastContainer position="bottom-right" autoClose={2000} />
      </AuthContextProvider>
    </Suspense>
  );
}

export default App;
