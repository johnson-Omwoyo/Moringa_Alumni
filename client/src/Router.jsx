import Homepage from "./routes/Homepage";
import App from "./App";
import Cohorts from "./routes/Cohorts";

const routee = [
  {
    path: "/",
    element: <App />,
    errorElement: "Error Page",
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/cohorts", element: <Cohorts /> },
    ],
  },
];

export default routee;
