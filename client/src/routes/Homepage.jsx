import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./Homepage.css";
import heroImage from "../assets/premium_photo-1661897207286-048ad6edac6c-removebg-preview.png";
import chattingImage from "../assets/ed91c6449b0e663979d00706e6dd05c6-removebg-preview.png";
function Homepage() {
  const reasons = [
    {
      reason: "Learning",
      description:
        "This is one of the most guranteed place to get a job immidietly after the graduation because of the touchy relationship we have with the job industry",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      reason: "Motivation",
      description:
        "This is one of the most guranteed place to get a job immidietly after the graduation because of the touchy relationship we have with the job industry",
      icon: "fa-solid fa-trophy",
    },
    {
      reason: "Big Network",
      description:
        "This is one of the most guranteed place to get a job immidietly after the graduation because of the touchy relationship we have with the job industry",
      icon: "fa-solid fa-star",
    },
  ];
  const numbers = [
    { number: "1000+", icon: "fa-solid fa-user", name: "Member" },
    { number: " 500+", icon: "fa-solid fa-handshake", name: "Partners" },
    { number: "300+", icon: "fa-solid fa-calendar", name: "Events" },
    { number: "200+", icon: "fa-solid fa-coins", name: "Sponsorship" },
  ];
  const opportunity = [
    {
      title: "Data analyst",
      employer: "Kilo Min",
      salary: "$500-$800",
      location: "Kenya,Nairobi",
    },
    {
      title: "Web Developer Intern",
      employer: "Kilo Min",
      salary: "$500-$800",
      location: "Kenya,Nakuru",
    },
  ];
  const news = [
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
  ];
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
                <button className="btn register-btn rounded-pill px-md-5 py-3 my-4">
                  Learn More
                </button>
              </div>
              <div className="col">
                <img
                  className="img-fluid rounded w-100 h-100 "
                  style={{ objectFit: "cover" }}
                  src={heroImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-5">
        <div className="col"></div>
        <div className="col-12 col-md-4 text-center featured-event">
          <h6 className="">FEATURED EVENTS</h6>
          <h1 className="">Annual meetup & Creative Project Pitching</h1>
          <span>
            <i class="fa-solid fa-location-dot mb-4"></i> Kenya, Nairobi, Visa
            Oshwal
          </span>
          <p>
            Dont ever remain stack in the mindset of not knowing where the great
            ideas are being made where the real tech industry connections are
            being enlarged better have an idea now get yourself a good time and
            attend one of the most imporntant and usefu eventorange
          </p>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col">
          <img
            style={{ objectFit: "cover", maxHeight: "420px" }}
            src="https://i.pinimg.com/736x/b7/0c/22/b70c22b8bb937d08db2dd0a52d9cb265.jpg"
            alt=""
            className="img-fluid w-100 mb-5"
          />
        </div>
      </div>
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-12 col-md-3 text-center career-opportunity">
          <h1>Career Opportunity</h1>
          <p>Note no favours apply to be considerd by the employer</p>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col">
          <div className="container py-5">
            <div className="row d-flex justify-content-between ">
              {opportunity.map((oppor) => (
                <div className="col-12 col-md-5 d-flex gap-5 flex-column flex-md-row py-4 px-3 pb-5 opportunity-card me-2 rounded shadow-sm">
                  <div className="employer-profile p-3 rounded-pill d-none d-md-inline-block">
                    <h1 className="fs-3">LS</h1>
                  </div>
                  <div className="d-flex flex-md-column w-100">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-md-center">
                      <div>
                        <h1 className="work-title fs-5">work-title</h1>
                        <p className="employer-name">Employer</p>
                      </div>
                      <div className="d-flex gap-2 order-2 order-md-0">
                        <button className="rounded apply-now">Apply now</button>
                        <button className="rounded bookmark">
                          <i class="fa-solid fa-bookmark"></i>
                        </button>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-md-center">
                      <div className="d-flex gap-2">
                        <i className="fa-solid fa-sack-dollar"></i>
                        <div>
                          <h5 className="m-0 ">1000-1500</h5>
                          <p className="m-0">monthly salary</p>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <i className="fa-solid fa-location-dot mb-4"></i>
                        <div>
                          <h5 className="m-0">Nairobi, Westlands</h5>
                          <p className="m-0">location</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row my-4">
              <div className="col text-center">
                <button className="btn load-more px-md-5 py-3 rounded-pill">
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col"></div>
        <div className="col-12 col-md-3 text-center career-opportunity">
          <h1>Latest News</h1>
          <p>Note no favours apply to be considerd by the employer</p>
        </div>

        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col">
          <div className="container ">
            <div className="row d-flex justify-content-around">
              {news.map((news) => (
                <div style={{ maxWidth: "420px" }} class=" card p-2 col-md-4 ">
                  <img
                    class="card-img-top"
                    src="https://i.pinimg.com/736x/f1/bc/f3/f1bcf36650f8d76222fcccd450c8de55.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title news-title">Title of the news</h5>
                    <p className="news-details">
                      By John, on Nov 23rd 2024 | 8 days ago
                    </p>
                    <p class="card-text news-brief">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="read-more">
                      Read more{" "}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div className="col text-center">
          <button className="btn load-more rounded-pill px-md-5 py-3 ">
            Load more
          </button>
        </div>
      </div>
      <div className="row my-5 px-md-5">
        <div className="col d-flex justify-content-between">
          <h1 className="upcoming-title">Upcoming events</h1>
          <button className="btn load-more rounded-pill px-md-5">
            View All
          </button>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <div className="container">
            <div className="row  d-flex justify-content-around">
              {" "}
              {news.map((news) => (
                <div
                  style={{ maxWidth: "420px" }}
                  class=" card p-0 col-md-4 pb-4"
                >
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
                    <button className="btn load-more rounded">
                      Get Ticket
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="row ">
        <div className="col"></div>
        <div className="col-12 col-md-4 text-center why-join">
          <h1>Why Join Moringa Alumni</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            unde illo nisi explicabo nesciunt! Quidem aperiam odio, vero magni
            ipsam qu
          </p>
        </div>
        <div className="col"></div>
      </div>
      <div className="row my-md-4">
        <div className="col">
          <div className="container">
            <div className="row d-flex justify-content-around">
              {reasons.map((reason) => (
                <div className="col-12 col-md-4 reasons d-flex gap-4 mb-3">
                  <div>
                    <i class={`fs-3 ${reason.icon}`}></i>
                  </div>
                  <div>
                    {" "}
                    <p className="m-0 title fs-4">{reason.reason}</p>
                    <p className="describe ">{reason.description}</p>
                  </div>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ color: "#fa5105" }} className="row numbers">
        {numbers.map((number) => (
          <div className="col-6 col-md-3 text-center">
            <i class={`fs-1 ${number.icon} icon`}></i>
            <p className="fs-2 number">{number.number}</p>
            <p className="name">{number.name}</p>
          </div>
        ))}
      </div>
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
    </div>
  );
}

export default Homepage;
