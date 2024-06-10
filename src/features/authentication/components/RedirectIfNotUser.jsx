import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../../components/Spinner";

export default function RedirectIfNotUser({ children }) {
  const { authUser, isAuthUserLoading } = useAuth();

  if (authUser?.isAdmin !== false) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isAuthUserLoading && <Spinner />}
      {children}
    </>
  );
}
