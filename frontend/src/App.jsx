import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";

const App = () => {
  const { authUser } = useAuthContext();
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: authUser ? <Home /> : <Navigate to={"/login"} />,
    },
    {
      path: "/login",
      element: authUser ? <Navigate to={"/"} /> : <Login />,
    },
    {
      path: "/signup",
      element: authUser ? <Navigate to={"/"} /> : <Signup />,
    },
  ]);

  return <RouterProvider router={appRoutes}></RouterProvider>;
};

export default App;
