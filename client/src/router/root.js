import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import Register from "../page/Register";
import Main from "../layout/Main";
import Details from "../page/Details";
import Home from "../page/Home";
import Reviews from "../page/Reviews";
import Services from "../page/Services";
import Blog from "../page/Blog";
import Error from "../page/Error";
import AddService from "../page/AddService";
import Private from "./Private";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/:id",
        element: <Details />,
        loader: async ({ params }) =>
          fetch(`https://plumboy.vercel.app/services/${params.id}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "my-reviews",
        element: (
          <Private>
            <Reviews />,
          </Private>
        ),
      },
      {
        path: "add-service",
        element: (
          <Private>
            <AddService />,
          </Private>
        ),
      },
    ],
  },
]);
