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
import UseRefHook from "./pages/concepts/UseRefHook.tsx";
import AudioPlayer from "./components/AudioPlayer.tsx";
import UseRefHook1 from "./pages/concepts/UseRefHook1.tsx";
import App from "./App.tsx";
import UseEffect from "./pages/concepts/UseEffect.tsx";
import NotFound from "./pages/404.tsx";
import AudioPage from "./pages/AudioPage.tsx";
import DragAndDrop from "./pages/concepts/DragAndDrop.tsx";

const router = createBrowserRouter([
  {
    element: <SimpleLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <NewPage />,
      },
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/cars",
        element: <CarsPage />,
      },
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
      {
        path: "/concepts/use-effect",
        element: <UseEffect />,
      },
      {
        path: "/concepts/use-ref",
        element: <UseRefHook />,
      },
      {
        path: "/concepts/use-ref-1",
        element: <UseRefHook1 />,
      },
      {
        path: "/concepts/drag-n-drop",
        element: <DragAndDrop />,
      },
      {
        path: "/audio-page",
        element: <AudioPage />,
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
