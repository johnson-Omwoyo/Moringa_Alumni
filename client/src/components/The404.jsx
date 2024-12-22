import React from "react";
import "./the404.css";
import { Navigate } from "react-router-dom";
function The404() {
  return <Navigate to="/" />;
}

export default The404;
