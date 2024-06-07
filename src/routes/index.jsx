import { lazy } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const UpcomingPage = lazy(() => import("../pages/UpcomingPage"));
const ShowtimePage = lazy(() => import("../pages/ShowtimePage"));
const BookingHistortyPage = lazy(() => import("../pages/BookingHistortyPage"));
const EditMoviePage = lazy(() => import("../pages/EditMoviePage"));
const EditShowtimePage = lazy(() => import("../pages/EditShowtimePage"));
const MainContainer = lazy(() => import("../layouts/MainContainer"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "upcoming", element: <UpcomingPage /> },
      { path: "showtime", element: <ShowtimePage /> },
      { path: "booking-history", element: <BookingHistortyPage /> },
      { path: "edit-movie", element: <EditMoviePage /> },
      { path: "edit-showtime", element: <EditShowtimePage /> },
    ],
  },
  {
    path: "/landing",
    element: <MainContainer />,
    children: [{ path: "/landing", element: <LandingPage /> }],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "*", element: <Navigate to="/" /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
