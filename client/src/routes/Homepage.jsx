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
              <div className="col bg ">
                <img
                  className="img-fluid rounded w-100 h-100  "
                  style={{ objectFit: "cover" }}
                  src={heroImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-5 ">
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
      <div className="row p-0 ">
        <div className="col position-relative p-0">
          <img
            style={{ objectFit: "cover", maxHeight: "420px" }}
            src="https://i.ytimg.com/vi/oqJRVZdNEY8/maxresdefault.jpg"
            alt=""
            className="img-fluid w-100  p-0 m-0"
          />
      
        </div>
      </div>
      <div className="row px-4 d-flex justify-content-around even p-5 gap-3 ">
        <div className="col col-md-4 me-2 d-flex flex-column justify-content-center career-opportunity ">
          <h3 className="fs-6">The grandmaster talk</h3>
          <h1 className=" mb-4 display-4">Most treasured wisdom</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            suscipit sunt earum nisi. Molestiae expedita exercitationem facilis
            eaque ipsa, aut facere culpa quasi dolorum necessitatibus corrupti
            quae quam minima officia?
          </p>
          <p className="vc-name fs-1">Jaymson</p>
          <h5>TM. Jaymson</h5>
        </div>
        <div className="col-12 col-md-4 ">
          <img
            src="https://photos.peopleimages.com/picture/202307/2709813-black-man-business-and-selfie-with-a-smile-on-face-of-an-influencer-person-at-work.-portrait-of-an-african-guy-or-entrepreneur-with-job-satisfaction-and-pride-for-social-media-profile-picture-update-fit_400_400.jpg"
            alt=""
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
      <div className="row py-3 opps">
        <div className="col"></div>
        <div className="col-12 col-md-3 text-center career-opportunity">
          <h1>Career Opportunity</h1>
          <p>Note no favours apply to be considerd by the employer</p>
        </div>
        <div className="col"></div>
      </div>
      <div className="row opps">
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
      </div>{" "}
      <div className="row px-4 d-flex justify-content-around odd p-md-2">
        {" "}
        <div className="col col-md-4">
          <img
            src="https://media.istockphoto.com/id/1394347360/photo/confident-young-black-businesswoman-standing-at-a-window-in-an-office-alone.jpg?s=612x612&w=0&k=20&c=tOFptpFTIaBZ8LjQ1NiPrjKXku9AtERuWHOElfBMBvY="
            alt=""
            className="shadow-lg img img-fluid rounded"
          />
        </div>
        <div className="col-12 col-md-4 me-2 d-flex flex-column justify-content-center career-opportunity ">
          <h3 className="fs-6">Success Stories</h3>
          <h1 className=" mb-4 display-4">Sonia Sony</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            suscipit sunt earum nisi. Molestiae expedita exercitationem facilis
            eaque ipsa, aut facere culpa quasi dolorum necessitatibus corrupti
            quae quam minima officia?
          </p>
          <div className="d-flex justify-content-around view-story">
            <button className="btn rounded-pill ">
              View Story <i class="fa-solid fa-arrow-right"></i>
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
      </div>
      <div className="row my-3 ">
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
      <div className="row py-5 px-md-5 even">
        <div className="col d-flex justify-content-between">
          <h1 className="upcoming-title">Upcoming events</h1>
          <button className="btn load-more rounded-pill px-md-5 py-3">
            View All
          </button>
        </div>
      </div>
      <div className="row pb-5 even">
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
    </div>
  );
}

export default Homepage;
