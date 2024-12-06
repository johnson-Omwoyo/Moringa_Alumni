import Homepage from "./routes/Homepage";
import App from "./App";
import Cohorts from "./routes/Cohorts";
import Events from "./routes/Events";
import Stories from "./routes/Stories";
import News from "./routes/News";

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
        path: "/News",
        element: <News />,
      },
    ],
  },
];

export default routee;
