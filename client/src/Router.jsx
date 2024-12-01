import Homepage from "./routes/Homepage";
import App from "./App";

const routee = [
  {
    path: "/",
    element: <App />,
    errorElement: "Error Page",
    children: [{ path: "/", element: <Homepage /> }],
  },
];

export default routee;
