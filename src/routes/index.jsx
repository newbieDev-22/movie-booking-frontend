import { lazy } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ProtectedRoute from "../features/authentication/components/ProtectedRoute";
import RedirectIfLogged from "../features/authentication/components/RedirectIfLogged";
import RedirectIfNotAdmin from "../features/authentication/components/RedirectIfNotAdmin";
import RedirectIfNotUser from "../features/authentication/components/RedirectIfNotUser";

const HomePage = lazy(() => import("../pages/HomePage"));
const ShowtimePage = lazy(() => import("../pages/ShowtimePage"));
const BookingHistortyPage = lazy(() => import("../pages/BookingHistortyPage"));
const AdminPanel = lazy(() => import("../pages/AdminPanel"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const MovieBookingPage = lazy(() => import("../pages/MovieBookingPage"));
const SeatSelectionPage = lazy(() => import("../pages/SeatSelectionPage"));

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
      {
        path: "booking-history",
        element: (
          <RedirectIfNotUser>
            <BookingHistortyPage />
          </RedirectIfNotUser>
        ),
      },
      {
        path: "admin-panel",
        element: (
          <RedirectIfNotAdmin>
            <AdminPanel />
          </RedirectIfNotAdmin>
        ),
      },
      {
        path: "movie-booking",
        element: <MovieBookingPage />,
      },
      {
        path: "seat-selection",
        element: <SeatSelectionPage />,
      },
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
