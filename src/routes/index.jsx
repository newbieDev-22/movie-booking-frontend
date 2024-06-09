import { lazy } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ProtectedRoute from "../features/authentication/components/ProtectedRoute";
import RedirectIfLogged from "../features/authentication/components/RedirectIfLogged";

const HomePage = lazy(() => import("../pages/HomePage"));
const ShowtimePage = lazy(() => import("../pages/ShowtimePage"));
const BookingHistortyPage = lazy(() => import("../pages/BookingHistortyPage"));
const AdminPanel = lazy(() => import("../pages/AdminPanel"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const MovieBookingPage = lazy(() => import("../pages/MovieBookingPage"));
const MainContainer = lazy(() => import("../layouts/MainContainer"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainContainer />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "showtime", element: <ShowtimePage /> },
      { path: "booking-history", element: <BookingHistortyPage /> },
      { path: "admin-panel", element: <AdminPanel /> },
      { path: "movie-booking", element: <MovieBookingPage /> },
    ],
  },
  {
    path: "/login",
    element: (
      <RedirectIfLogged>
        <LoginPage />
      </RedirectIfLogged>
    ),
  },
  { path: "*", element: <Navigate to="/" /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
