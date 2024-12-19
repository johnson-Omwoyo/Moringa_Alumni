import Homepage from "./routes/Homepage";
import App from "./App";
import Cohorts from "./routes/Cohorts";
import Events from "./routes/Events";
import Stories from "./routes/Stories";
import News from "./routes/News";
import Login from "./routes/Login";
import Register from "./routes/Register";
import The404 from "./components/The404";
import ReadMore from "./routes/ReadMore";
import UserDashboard from "./routes/UserDashboard";

const routee = [
  {
    path: "/",
    element: <App />,
    errorElement: <The404 />,
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/read-more",
        element: <ReadMore />,
      },
      {
        path: "/user-dashboard",
        element: <UserDashboard />,
      },
    ],
  },
];

export default routee;
