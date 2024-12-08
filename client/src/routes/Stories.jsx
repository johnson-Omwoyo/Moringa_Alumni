import { React, useState } from "react";
import "./stories.css";
import { useLocation, useNavigate } from "react-router-dom";

function Stories() {
  const [selected, setSelected] = useState("all");
  const changeSelected = (clicked) => {
    setSelected(clicked);
  };
  const news = [{}, {}, {}, {}, {}];
  const location = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row p-3 p-md-5 pb-0 pb-md-0 page-name-container">
        <div className="col">
          {" "}
          <p className="home-page-name">
            <span className="back-home" onClick={() => navigate("/")}>home</span>/alumni-stories
          </p>
          <h1 className="page-name">ALUMNI STORIES</h1>
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
              <p>All Stories</p>
            </div>
            <div
              className={
                selected == "top"
                  ? "d-flex flex-column align-items-center justify-content-center p-3  selected"
                  : "d-flex flex-column align-items-center justify-content-center page-nav p-3"
              }
              onClick={() => setSelected("top")}
            >
              <i class="fa-solid fa-scale-unbalanced-flip"></i>
              <p>Top Stories</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-4 gap-3 the-stories">
        {" "}
        {news.map((theNew) => (
          <div style={{ maxWidth: "420px" }} class=" card p-0 col-md-4 ">
            <img
              class="card-img-top"
              src="https://i.pinimg.com/736x/f1/bc/f3/f1bcf36650f8d76222fcccd450c8de55.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title news-title">Title of the story headline</h5>
              <p className="news-details">
                By John, on Nov 23rd 2024 | 8 days ago
              </p>
              <p class="card-text news-brief">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex justify-content-between">
                <a href="#" class="read-more">
                  Read more{" "}
                </a>
                <div className="d-flex gap-2 pb-0 mb-0 story-comments">
                  <i class="fa-solid fa-arrows-turn-right  "></i>
                  <p className=" ">12 comments</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
