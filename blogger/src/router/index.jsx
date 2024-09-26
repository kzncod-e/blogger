import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Form from "../components/Form";
import BaseLayeout from "../views/BaseLayeout";
const url = "https://h8-phase2-gc.vercel.app";
import Toastify from "toastify-js";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login url={url} />,
    loader: () => {
      if (localStorage.token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    element: <BaseLayeout />,
    loader: () => {
      if (!localStorage.token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Home url={url} />,
      },
      {
        path: "/add",
        element: <Form url={url} />,
      },
    ],
  },
]);
export default router;
