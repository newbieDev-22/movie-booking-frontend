import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Spinner from "../../../components/Spinner";

export default function ProtectedRoute({ children }) {
  const { authUser, isAuthUserLoading } = useAuth();

  if (!authUser && !isAuthUserLoading) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {isAuthUserLoading && <Spinner transparent />}
      {children}
    </div>
  );
}
