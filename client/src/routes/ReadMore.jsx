import React from "react";
import "./read-more.css";

function ReadMore() {
  return (
    <div className="container mt-3 alumni-news-blog">
      <div className="row">
        <div className="col-12">
          <p className="top-title">Moringa Alumni News Blog</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-9 ">
          <h2>This is the title representing the title of the news</h2>
          <p className="news-details">
            {" "}
            by johnson Omwoyo | <span>12 Nov</span> | share
          </p>
          <div className="container px-md-5 d-flex flex-column align-items-center">
            <img
              style={{ maxHeight: "480px" }}
              className="img-fluid  "
              src="https://images.unsplash.com/photo-1732480509153-b895ce4c1b64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
              alt=""
            />
            <p className="mt-4 news-brief">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              vitae incidunt, temporibus rerum dolore laudantium reiciendis ut
              omnis doloribus numquam eum debitis tenetur animi provident,
              dolores necessitatibus eaque ea facere? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sequi vitae incidunt, temporibus
              rerum dolore laudantium reiciendis ut omnis doloribus numquam eum
              debitis tenetur animi provident, dolores necessitatibus eaque ea
              facere? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sequi vitae incidunt, temporibus rerum dolore laudantium
              reiciendis ut omnis doloribus numquam eum debitis tenetur animi
              provident, dolores necessitatibus eaque ea facere? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sequi vitae incidunt,
              temporibus rerum dolore laudantium reiciendis ut omnis doloribus
              numquam eum debitis tenetur animi provident, dolores
              necessitatibus eaque ea facere? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sequi vitae incidunt, temporibus
              rerum dolore laudantium reiciendis ut omnis doloribus numquam eum
              debitis tenetur animi provident, dolores necessitatibus eaque ea
              facere? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sequi vitae incidunt, temporibus rerum dolore laudantium
              reiciendis ut omnis doloribus numquam eum debitis tenetur animi
              provident, dolores necessitatibus eaque ea facere? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sequi vitae incidunt,
              temporibus rerum dolore laudantium reiciendis ut omnis doloribus
              numquam eum debitis tenetur animi provident, dolores
              necessitatibus eaque ea facere? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sequi vitae incidunt, temporibus
              rerum dolore laudantium reiciendis ut omnis doloribus numquam eum
              debitis tenetur animi provident, dolores necessitatibus eaque ea
              facere?
            </p>
          </div>
        </div>
        <div className="col-12 col-md-3 related-div rounded px-4">
          <p
            className="top-title text-center"
            style={{ textDecoration: "underline" }}
          >
            Related News
          </p>

          <p className="top-title related-story">Billy taking over the west</p>
          <p className="top-title related-story ">Related News</p>
          <p className="top-title related-story">Related News</p>
          <p className="top-title related-story">Related News</p>
          <p className="top-title related-story">Related News</p>
        </div>
      </div>
    </div>
  );
}

export default ReadMore;
