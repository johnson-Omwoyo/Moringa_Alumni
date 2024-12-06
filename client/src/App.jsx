import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation().pathname;
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* {location == "/" && <Footer />} */}
    </div>
  );
}

export default App;
