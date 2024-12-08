import React, { useState } from "react";
import "./news.css";
import { useNavigate } from "react-router-dom";

function News() {
  const [selected, setSelected] = useState("all");
  const changeSelected = (clicked) => {
    setSelected(clicked);
  };
  const navigate = useNavigate();
  const news = [{}, {}, {}, {}, {}];
  return (
    <div className="container">
      {" "}
      <div className="row p-3 p-md-5 pb-0 pb-md-0 page-name-container">
        <div className="col">
          {" "}
          <p className="home-page-name">
            <span className="back-home" onClick={() => navigate("/")}>
              home
            </span>
            /news
          </p>
          <h1 className="page-name">NEWS</h1>
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
              <p>All News</p>
            </div>
            <div
              className={
                selected == "top"
                  ? "d-flex flex-column align-items-center justify-content-center p-3  selected"
                  : "d-flex flex-column align-items-center justify-content-center page-nav p-3"
              }
              onClick={() => setSelected("top")}
            >
              <i class="fa-solid fa-calendar-day"></i> <p>Recent News</p>
            </div>
          </div>
        </div>
      </div>
      <div className="the-stories">
        {news.map((theNew) => (
          <div className="row py-3 news-container d-flex justify-content-center">
            <div className="col-12 col-md-3 ">
              <img
                className="img-fluid news-photo"
                src="https://i.pinimg.com/736x/07/55/0f/07550fbe8d55a7208b91a04872d31a65.jpg"
                alt=""
              />
            </div>
            <div className="col-md-6  d-flex flex-column justify-content-center ">
              {" "}
              <div>
                <p className="news-details"> 12 Nov</p>
              </div>
              <h3 className="news-title">
                This will be the presentation of the news title
              </h3>
              <p className="news-brief">
                This will now be the presentation of the text that will have
                some part of the news then im going to add some link below it
                named readmore for simpl reading more
              </p>
              <p className="read-more">Read More</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
