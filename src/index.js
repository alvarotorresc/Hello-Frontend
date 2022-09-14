import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
