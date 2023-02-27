import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Animals } from "./Animal/animals";
import { Home } from "./Home/home";
import { Animal } from "./Animal/animal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/animal",
        element: <Animal />,
      },
      {
        path: "/animal/:id",
        element: <Animal />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
    ],
  },
]);
