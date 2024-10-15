import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CarsPage from "./pages/CarsPage.tsx";
import App from "./App.tsx";
import AnimalPage from "./pages/AnimalPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cars",
    element: <CarsPage />,
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
