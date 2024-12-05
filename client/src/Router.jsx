import Homepage from "./routes/Homepage";
import App from "./App";
import Connect from "./routes/Connect";

const routee = [
  {
    path: "/",
    element: <App />,
    errorElement: "Error Page",
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/connect", element: <Connect /> },
    ],
  },
];

export default routee;
