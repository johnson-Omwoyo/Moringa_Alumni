import Homepage from "./routes/Homepage";
import App from "./App";
import Cohorts from "./routes/Cohorts";
import Events from "./routes/Events";
import Stories from "./routes/Stories";
import Discussions from "./routes/Discussions";

const routee = [
  {
    path: "/",
    element: <App />,
    errorElement: "Error Page",
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/cohorts", element: <Cohorts /> },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/alumni-stories",
        element: <Stories />,
      },
      {
        path: "/discussions",
        element: <Discussions />,
      },
    ],
  },
];

export default routee;
