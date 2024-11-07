import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CarsPage from "./pages/CarsPage.tsx";
import AnimalPage from "./pages/AnimalPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CarDetailsPage from "./pages/CarDetailsPage.tsx";
import NewPage from "./pages/NewPage.tsx";
import SimpleLayout from "./layouts/SimpleLayout.tsx";
import ConditionalRendering from "./pages/ConditionalRendering.tsx";
import Users from "./pages/Users.tsx";
import PropDrilling from "./pages/concepts/PropDrilling.tsx";
import GlobalState from "./pages/concepts/GlobalState.tsx";

const router = createBrowserRouter([
  {
    element: <SimpleLayout />,
    children: [
      {
        path: "/",
        element: <NewPage />,
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
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/concepts/prop-drilling",
        element: <PropDrilling />,
      },
      {
        path: "/concepts/global-state",
        element: <GlobalState />,
      },
    ],
  },
  {
    path: "/conditional-rendering",
    element: <ConditionalRendering />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
