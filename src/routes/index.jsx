import { lazy } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ProtectedRoute from "../features/authentication/components/ProtectedRoute";
import RedirectIfLogged from "../features/authentication/components/RedirectIfLogged";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ShowtimePage = lazy(() => import("../pages/ShowtimePage"));
const BookingHistortyPage = lazy(() => import("../pages/BookingHistortyPage"));
const AdminPanel = lazy(() => import("../pages/AdminPanel"));
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
      { path: "/admin-panel", element: <AdminPanel /> },
    ],
  },
  {
    path: "/landing",
    element: (
      <RedirectIfLogged>
        <MainContainer />
      </RedirectIfLogged>
    ),
    children: [{ path: "/landing", element: <LandingPage /> }],
  },
  { path: "*", element: <Navigate to="/" /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
