import React from "react";
import "./news.css";

function News() {
  const news = [{}, {}, {}];
  return (
    <div className="container">
      {news.map(theNew=>(<div className="row py-3 news-container">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-end ">
          <img
            className="news-photo img-fluid"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="col  d-flex flex-column justify-content-center ">
          {" "}
          <div>

          <p className="news-details">posted by Clinton</p>
          </div>
          <h3 className="news-title">This will be the presentation of the news title</h3>
          <p className="news-brief">
            This will now be the presentation of the text that will have some
            part of the news then im going to add some link below it named
            readmore for simpl reading more
          </p>
          <p className="read-more">Read More</p>
        </div>
      </div>))}
    </div>
  );
}

export default News;
