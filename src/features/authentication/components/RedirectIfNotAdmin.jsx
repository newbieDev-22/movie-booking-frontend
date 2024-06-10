import { Navigate } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import useAuth from "../../../hooks/useAuth";

export default function RedirectIfNotAdmin({ children }) {
  const { authUser, isAuthUserLoading } = useAuth();

  if (authUser?.isAdmin !== true) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isAuthUserLoading && <Spinner />}
      {children}
    </>
  );
}
