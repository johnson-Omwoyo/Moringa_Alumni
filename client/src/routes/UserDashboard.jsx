import React, { useState } from "react";
import "./userdashboard.css";
import logo from "../assets/Moringa-logo.png";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import the_avatar from "../assets/avatar-user-profile.jpg";
function UserDashboard() {
  let [selected, setSelected] = useState("profile");
  const navigate = useNavigate();
  let handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  const token = localStorage.getItem("access_token");
  if (!token) {
    return <Navigate to="/" />;
  }
  const setup = 60;
  return (
    <div className="container-fluid py-3 p-md-5 ">
      <div className="row ">
        <div className="col-12 col-md-1 shadow-sm  userdash-sidebar rounded-md d-flex flex-md-column align-items-center gap-5 p-4">
          <img className="img-fluid d-none d-md-inline" src={logo} alt="" />
          <div className="d-flex flex-md-column gap-3 gap-md-5 my-md-5  ">
            <button
              className={`btn  ${
                selected == "profile" && "selected"
              } position-relative`}
              onClick={() => setSelected("profile")}
            >
              <i class="fa-solid fa-user"></i>
            </button>

            <button
              className={`btn ${selected == "stories" && "selected"}`}
              onClick={() => setSelected("stories")}
            >
              <i class="fa-solid fa-satellite-dish"></i>
            </button>

            <button
              className={`btn ${selected == "news" && "selected"}`}
              onClick={() => setSelected("news")}
            >
              <i class="fa-solid fa-newspaper"></i>{" "}
            </button>

            <button
              className={`btn ${selected == "cohorts" && "selected"}`}
              onClick={() => setSelected("cohorts")}
            >
              <i class="fa-solid fa-users-viewfinder"></i>{" "}
            </button>

            <button
              className={`btn ${selected == "events" && "selected"}`}
              onClick={() => setSelected("events")}
            >
              <i class="fa-brands fa-elementor"></i>
            </button>
          </div>
          <div>
            <button className="btn" onClick={handleLogout}>
              <i class="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        </div>
        <div className="col-12 col-md-11">
          <div className="container-fluid">
            <div className="row d-flex flex-column align-items-center ">
              <div className="p-2 dashboard-page rounded   col">
                <h1 className="m-0 page-name text-center">
                  {selected == "profile"
                    ? "Your Details"
                    : selected == "stories"
                    ? "Your Stories"
                    : selected == "news"
                    ? "Your News"
                    : selected == "events"
                    ? "Your Events"
                    : "Your Cohorts"}
                </h1>
              </div>
              <div className="col-12 my-3 dashboard-body rounded ">
                <div className="container-fluid  p-md-5">
                  {/*The profile part */}
                  {selected == "profile" && (
                    <div className="row">
                      <div className="col">
                        <div className="d-flex flex-column the-profile  p-2 align-items-center mb-md-5 ">
                          <div className="d-flex gap-3  ">
                            <img
                              className="img-fluid rounded-pill the-avatar"
                              src={the_avatar}
                              alt=""
                            />
                            <div className="d-flex flex-column justify-content-center">
                              <p className="m-0">user</p>
                              <p className="m-0 user-email">useremail.com</p>
                            </div>
                          </div>
                          <button className="btn register-btn rounded-pill px-4 w-10 ">
                            Edit
                          </button>
                        </div>
                        <div className=" account-setup p-4 rounded gap-3">
                          <p>Account setup</p>{" "}
                          <div className="progress ">
                            <div
                              class="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: `${setup}%` }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                            {setup == 100 || `${setup}%`}
                          </div>
                          <div>
                            {setup == 100 ? (
                              <i class="fa-solid fa-circle-check text-success"></i>
                            ) : (
                              <i class="fa-solid fa-triangle-exclamation text-warning"></i>
                            )}
                          </div>
                          {setup == 100 || (
                            <button className="btn rounded-pill btn-warning ">
                              Finish Setup
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {/*The stories part */}
                  {selected == "stories" && (
                    <div className="row">
                      <div className="col p-5">
                        {" "}
                        <div className="d-flex empty flex-column align-items-center">
                          <p>No Stories </p>
                          <button
                            className="btn btn-danger"
                            // onClick={() => setYourCohorts(false)}
                          >
                            Add Story{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}{" "}
                  {selected == "news" && (
                    <div className="row">
                      <div className="col p-5">
                        {" "}
                        <div className="d-flex empty flex-column align-items-center">
                          <p>No news </p>
                          <button
                            className="btn btn-danger"
                            // onClick={() => setYourCohorts(false)}
                          >
                            Add News{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}{" "}
                  {/*The cohorts part */}
                  {selected == "cohorts" && (
                    <div className="row">
                      <div className="col p-5 ">
                        {" "}
                        <div className="d-flex empty flex-column align-items-center">
                          <p>No Cohorts </p>
                          <button
                            className="btn btn-danger"
                            // onClick={() => setYourCohorts(false)}
                          >
                            Add Cohort
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                  )}
                  {/*The events part */}
                  {selected == "events" && (
                    <div className="row">
                      <div className="col p-5 ">
                        {" "}
                        <div className="d-flex empty flex-column align-items-center">
                          <p>No Events </p>
                          <button
                            className="btn btn-danger"
                            // onClick={() => setYourCohorts(false)}
                          >
                            Add Event
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {selected == "profile" || (
          <div className="position-fixed dashboard-add  py-2  rounded-pill">
            <i class="fa-solid fa-plus fs-1"></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDashboard;
