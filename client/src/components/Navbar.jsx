import React from "react";
import Beforenav from "./Beforenav";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  console.log(location);

  const accessToken = localStorage.getItem("access_token");
  return (
    <div>
      <Beforenav />
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid px-md-5">
          <div className=" logo">
            <h1 className=" m-0 p-0 gap-5 ">Moringa</h1>
            <p className="text-center">alumni | center</p>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-around "
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav gap-md-5 mx-md-5">
              <li
                class="nav-item"
                onClick={() => navigate("/")}
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
              >
                <a class="nav-link active" href="">
                  Home
                </a>
              </li>{" "}
              <li
                class="nav-item"
                onClick={() => {
                  navigate("/cohorts");
                }}
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
              >
                <a class="nav-link" href="">
                  Cohorts
                </a>
              </li>
              <li
                class="nav-item "
                onClick={() => navigate("/events")}
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
              >
                <a class="nav-link" href="">
                  Events
                </a>
              </li>
              <li
                class="nav-item"
                onClick={() => navigate("/news")}
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
              >
                <a class="nav-link" href="">
                  News
                </a>
              </li>
              <li
                class="nav-item"
                onClick={() => navigate("/alumni-stories")}
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
              >
                <a class="nav-link" href="">
                  Alumni Story
                </a>
              </li>
            </ul>
            <div
              className=""
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
            >
              {accessToken ? (
                <button
                  className="btn register-btn"
                  onClick={() => navigate("/user-dashboard")}
                >
                  <i class="fa-solid fa-user"></i>
                </button>
              ) : (
                location == "/register" || (
                  <button
                    className="btn register-btn rounded-pill "
                    onClick={() => navigate("/register")}
                  >
                    Join Us <i class="fa-solid fa-right-from-bracket"></i>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
      <hr className="m-0" />
    </div>
  );
}

export default Navbar;
