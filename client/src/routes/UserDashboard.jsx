import React, { useState } from "react";
import "./userdashboard.css";
import logo from "../assets/Moringa-logo.png";
function UserDashboard() {
  let [selected, setSelected] = useState("profile");
  return (
    <div className="container-fluid py-3 p-md-5 ">
      <div className="row ">
        <div className="col-12 col-md-1 shadow-sm  userdash-sidebar rounded d-flex flex-md-column align-items-center gap-5 p-4">
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
          </div>
          <div>
            <button className="btn">
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
                    : "Your Groups"}
                </h1>
              </div>
              <div className="col-12 my-3 dashboard-body rounded">
                <div className="container-fluid">
                  {selected == "profile" && (
                    <div className="row">
                      <div className="col">this is the profile</div>
                    </div>
                  )}
                  {selected == "stories" && (
                    <div className="row">
                      <div className="col">this is the stories</div>
                    </div>
                  )}{" "}
                  {selected == "news" && (
                    <div className="row">
                      <div className="col">this is the news</div>
                    </div>
                  )}{" "}
                  {selected == "cohorts" && (
                    <div className="row">
                      <div className="col">this is the cohorts</div>
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
