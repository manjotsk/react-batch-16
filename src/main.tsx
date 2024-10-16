import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CarsPage from "./pages/CarsPage.tsx";
import App from "./App.tsx";
import AnimalPage from "./pages/AnimalPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CarDetailsPage from "./pages/CarDetailsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cars",
    element: <CarsPage />,
  },
  // car details page
  {
    path: "/cars/:carId",
    element: <CarDetailsPage />,
  },
  {
    path: "/animals",
    element: <AnimalPage />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
