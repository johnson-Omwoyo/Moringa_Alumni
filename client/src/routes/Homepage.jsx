import React from "react";
import "./Homepage.css";
import heroImage from "../assets/premium_photo-1661897207286-048ad6edac6c-removebg-preview.png";
import "bootstrap/dist/css/bootstrap.css";
function Homepage() {
  return (
    <div className="container-fluid">
      <div className="row py-5 hero-part">
        <div className="col">
          <div className="container">
            <div className="row py-md-5  gap-5 align-items-center">
              <div className="col-md-6 hero-texts  ">
                <p>BEST PLACE FOR ALUMNI</p>
                <h1 className="py-md-4 display-4 ">
                  " Keep current connection breathing and build new ones Moringa
                  alumni "
                </h1>
                <p>
                  This is a platform built by a moringa school alumni with an
                  aim of keeping the great techies that have gone through the
                  moringa curriclum together
                </p>
                <button className="btn register-btn rounded-pill px-4 my-4">
                  Learn More
                </button>
              </div>
              <div className="col">
                <img className="img-fluid rounded " src={heroImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-5">
        <div className="col"></div>
        <div className="col-12 col-md-4 text-center">
          <p>FEATURED EVENTS</p>
          <h1>Annual meetup & Creative Project Pitching</h1>
          <p>
            <i class="fa-solid fa-location-dot"></i> Kenya, Nairobi, Visa Oshwal
          </p>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Homepage;
