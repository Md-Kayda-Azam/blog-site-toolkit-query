import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

// create route

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
