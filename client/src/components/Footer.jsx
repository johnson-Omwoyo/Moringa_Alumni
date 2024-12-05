import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid footer ">
      <div className="row py-5 news-letter px-md-5 d-flex align-items-center">
        <div className="col-12 col-md-5 ">
          <h1 className="dont-miss">
            Dont miss Our weekly updates about Moringa's alumni Story
          </h1>
          <a
            href="https://johnson-omwoyo.vercel.app"
            target="blank"
            className=""
          >
            @TheDeveloper
          </a>
        </div>
        <div className="col-12 col-md-5 d-flex justify-content-end ">
          <form className="email-sub p-3 rounded-pill d-flex">
            <input
              className="form-control"
              type="email"
              placeholder="Enter the email..."
            />
            <button className="btn subscribe mx-2" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="row py-5 d-flex justify-content-around gap-3 px-md-5">
        <div className="col-12 col-md-3">
          <div className="logo">
            {" "}
            <h1 className=" m-0 p-0  ">Moringa</h1>
            <p className="text-center">alumni | center</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rerum
            odio, fugit magni odit vero autem adipisci tenetur? Tempora ratione
            odit ab. Eos pariatur natus obcaecati optio qui ratione eveniet.
          </p>
          <p>Follow Us</p>
          <div className="d-flex justify-content-around view-story">
            <button className="btn rounded-pill ">
              <i class="fa-brands fa-youtube"></i>{" "}
            </button>
            <button className="btn rounded-pill">
              <i class="fa-brands fa-facebook"></i>
            </button>{" "}
            <button className="btn rounded-pill">
              <i class="fa-brands fa-x-twitter"></i>{" "}
            </button>{" "}
            <button className="btn rounded-pill">
              <i class="fa-brands fa-linkedin"></i>{" "}
            </button>
          </div>
        </div>
        <div className="col-12 col-md-2 text-center">
          <h3 className="fs-5">Why Moringa</h3>
          <p>About Moringa</p>
          <p>About Moringa</p>
          <p>About Moringa</p>
          <p>About Moringa</p>
        </div>
        <div className="col-12 col-md-2 text-center">
          <h3 className="fs-5">Resources</h3>
          <p>About Moringa</p>
          <p>About Moringa</p>
          <p>About Moringa</p>
          <p>About Moringa</p>
        </div>
        <div className="col-12 col-md-2 text-center">
          <h3 className="fs-5">Community</h3>
          <p>About Moringa</p>
          <p>About Moringa</p>
          <p>About Moringa</p>
          <p>About Moringa</p>
        </div>
        <div className="col-12 col-md-2 text-center">
          <h3 className="fs-5">Get In Touch With Us</h3>
          <p>About Moringa</p>
          <p>About Moringa</p>
          <p>About Moringa</p>
          <p>About Moringa</p>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-between">
          <p>Moringa School Alumni ` 2024 all rights reserved</p>
          <p>Made with love by Jonson</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
