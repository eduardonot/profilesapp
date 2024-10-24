import { createBrowserRouter } from "react-router-dom";
import {
  CharacterPage,
  FightPage,
  HomePage,
  InventoryPage,
  LoginPage,
  NotFoundPage,
  StorePage,
} from "../pages/index";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/inventory",
    element: <InventoryPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/store",
    element: <StorePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/character",
    element: <CharacterPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/fight",
    element: <FightPage />,
    errorElement: <NotFoundPage />,
  },
  {
    element: <NotFoundPage />,
  },
]);
