import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routee from "./Router";

const route = createBrowserRouter(routee);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
