import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routee from "./Router";

import { HashRouter } from "react-router-dom";

const route = createBrowserRouter(routee);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <RouterProvider router={route} />
  </HashRouter>
);
