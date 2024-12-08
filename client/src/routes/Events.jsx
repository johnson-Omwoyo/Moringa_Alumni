import React, { useState } from "react";
import "./events.css";
import { useNavigate } from "react-router-dom";

function Events() {
  const [selected, setSelected] = useState("all");
  const changeSelected = (clicked) => {
    setSelected(clicked);
  };
  const navigate = useNavigate();
  const events = [
    {
      title: "The news title",
      posted_on: "nov 23rd 2024",
      description:
        "Some small description of what the news is about because the readers need to know what is fully in there",
    },
    {
      title: "The news title",
      posted_on: "nov 23rd 2024",
      description:
        "Some small description of what the news is about because the readers need to know what is fully in there",
    },
    {
      title: "The news title",
      posted_on: "nov 23rd 2024",
      description:
        "Some small description of what the news is about because the readers need to know what is fully in there",
    },
    {},
    {},
  ];

  return (
    <div className="container">
      <div className="row m-0">
        {" "}
        <div className="row p-3 p-md-5 pb-0 pb-md-0 page-name-container">
          <div className="col">
            {" "}
            <p className="home-page-name">
              <span className="back-home" onClick={() => navigate("/")}>
                home
              </span>
              /events
            </p>
            <h1 className="page-name">EVENTS</h1>
              <div className="d-flex justify-content-between">
            <div className="d-flex gap-1">
                <div
                  className={
                    selected == "all"
                      ? "d-flex flex-column align-items-center justify-content-center p-3 selected"
                      : "d-flex flex-column align-items-center justify-content-center page-nav p-3"
                  }
                  onClick={() => changeSelected("all")}
                >
                  <i class="fa-solid fa-globe"></i>
                  <p>All Events</p>
                </div>
                <div
                  className={
                    selected == "top"
                      ? "d-flex flex-column align-items-center justify-content-center p-3  selected"
                      : "d-flex flex-column align-items-center justify-content-center page-nav p-3"
                  }
                  onClick={() => setSelected("top")}
                >
                  <i class="fa-solid fa-calendar-day"></i> <p>Top Events</p>
                </div>
              </div>
              <input
                className="form-control w-50 rounded search-event"
                type="text"
                placeholder=" Name,Location,Keyword..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row py-3">
        <div className="col "></div>
      </div>
      <div className="row events-container p-3  p-md-5 gap-4 d-flex justify-content-center the-stories rounded h-100">
        {/* <div className="col">No Events found</div> */}
        {events.map((event) => (
          <div className="col-5 col-md-4 event-container card p-0">
            {" "}
            <img
              class="card-img-top rounded"
              src="https://i.pinimg.com/736x/f1/bc/f3/f1bcf36650f8d76222fcccd450c8de55.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title news-title">Events name</h5>
              <p className="news-details">
                By John, on Nov 23rd 2024 | 8 days ago
              </p>
              <p class="card-text">location date and time</p>
              <button className="btn load-more rounded">Get Ticket</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
