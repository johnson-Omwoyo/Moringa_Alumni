import React from "react";
import Beforenav from "./Beforenav";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
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
              <li class="nav-item" onClick={() => navigate("/")}>
                <a class="nav-link active" href="">
                  Home
                </a>
              </li>{" "}
              <li
                class="nav-item"
                onClick={() => {
                  navigate("/cohorts");
                }}
              >
                <a class="nav-link" href="">
                  Cohorts
                </a>
              </li>
              <li class="nav-item " onClick={() => navigate("/events")}>
                <a class="nav-link" href="">
                  Events
                </a>
              </li>
              <li class="nav-item" onClick={()=>navigate("/news")}>
                <a class="nav-link" href="">
                  News
                </a>
              </li>
              <li class="nav-item" onClick={()=>navigate("/alumni-stories")}>
                <a class="nav-link" href="">
                  Alumni Story
                </a>
              </li>
            </ul>
            <div className="">
              <button className="btn register-btn rounded-pill">
                Join Us <i class="fa-solid fa-right-from-bracket"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <hr className="m-0" />
    </div>
  );
}

export default Navbar;
