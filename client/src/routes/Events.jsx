import React from "react";
import "./events.css";

function Events() {
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
      <div className="row py-3">
        <div className="col-12 col-md-6 d-flex justify-content-between">
          <h1 className="available-events">Available Events</h1>
        </div>
        <div className="col ">
          <input
            className="form-control w-50 rounded"
            type="text"
            placeholder=" Name,Location,Keyword..."
          />
        </div>
      </div>
      <div className="row events-container p-3  p-md-5 gap-4 d-flex  rounded">
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
