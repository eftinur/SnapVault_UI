import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  /* react_router config
    step 1: create routes to Navigate
    step 2: provide the routes in RouterProvider
    step 3: create a layout to display content
    */
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/sign_up",
        element: <SignUp />,
      },
      {
        path: "/sign_in",
        element: <SignIn />,
      },
    ],
  },
]);
