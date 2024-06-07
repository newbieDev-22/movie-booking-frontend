import { Suspense } from "react";
import Router from "./routes";
import Spinner from "./components/Spinner";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </Suspense>
  );
}

export default App;
