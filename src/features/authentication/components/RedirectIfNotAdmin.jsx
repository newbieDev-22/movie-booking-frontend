import { Navigate } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import useAuth from "../../../hooks/useAuth";

export default function RedirectIfNotAdmin({ children }) {
  const { authUser, isAuthUserLoading } = useAuth();

  if (!(authUser?.user?.isAdmin === 1)) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {isAuthUserLoading && <Spinner />}
      {children}
    </>
  );
}
