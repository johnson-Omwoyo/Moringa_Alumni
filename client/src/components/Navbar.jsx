import React from "react";
import Beforenav from "./Beforenav";
import "./Navbar.css";

function Navbar() {
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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>{" "}
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Connect
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Events
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Cohorts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Alumni story
                </a>
              </li>
            </ul>
            <div className="">
              <button className="btn login-btn me-4 rounded-pill px-4">
                login
              </button>
              <button className="btn register-btn rounded-pill">
                Join Now
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
