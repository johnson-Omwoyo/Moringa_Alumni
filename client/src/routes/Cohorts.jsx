import React from "react";
import "./cohorts.css";

function Cohorts() {
  const groups = [
    { name: "Holly" },
    { name: "Holly" },
    { name: "Holly" },
    { name: "Holly" },
    { name: "Holly" },
    { name: "Holly" },
    { name: "Holly" },
    { name: "Holly" },
    { name: "Holly" },
    { name: "Holly" },
    { name: "Holly" },
    { name: "Holly" },
    { name: "Holly" },
    { name: "Holly" },
    { name: "Holly" },
  ];
  return (
    <div className="container-fluid mb-md-5">
      <div className="row">
        <div className="col-12 col-md-3 main-col rounded m-3 p-4">
          <div className="d-flex gap-3 align-items-center mb-4">
            <div>
              <h2 className="group-prof rounded-pill p-2">JO</h2>
            </div>
            <div>
              <h3 className="account-owner fs-5 m-0">Johnson Omwoyo</h3>
              <p className="info-account m-0 ">Info Account</p>
            </div>
          </div>
          <hr />
          <div className="d-flex gap-3 groups-categories p-2 rounded-pill mb-4">
            <button className="btn rounded-pill px-md-4 active-category">
              All
            </button>
            <button className="btn rounded-pill px-md-4">Public </button>
            <button className="btn  rounded-pill px-md-4">Private</button>
          </div>

          <div className=" groups-container">
            {groups.map((group) => (
              <>
                <div className="d-flex gap-3">
                  <div>
                    <h2 className="group-prof rounded-pill p-2">LN</h2>
                  </div>
                  <div className=" gap-2 d-flex flex-column">
                    <p className="m-0 group-name fs-6">GroupName</p>

                    <div className="d-flex justify-content-around gap-2 align-items-center">
                      <span className="group-category rounded-pill px-2">
                        {" "}
                        private
                      </span>
                      <button className="btn join-group rounded-pill">
                        Request Join
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-6 main-col p-4 m-3 rounded">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-3 align-items-center ">
              <div>
                <h2 className="group-prof rounded-pill p-2">GN</h2>
              </div>
              <div>
                <h3 className="account-owner fs-5 m-0">Group Name</h3>
                <p className="info-account m-0 ">the info</p>
              </div>
            </div>
            <div>
              <button className="btn">
                <i class="fa-solid fa-video"></i>
              </button>
              <button className="btn">
                <i class="fa-solid fa-phone"></i>
              </button>
              <button className="btn">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>
          </div>
          <hr />
          <div className="groups-container"></div>
        </div>
        <div className="col main-col rounded m-3 p-4 ">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-3 align-items-center ">
              <div>
                <h3 className="account-owner fs-5 m-0">Detail Group</h3>
              </div>
            </div>
            <div>
              <button className="btn">
                <i class="fa-solid fa-x"></i>{" "}
              </button>
            </div>
          </div>
          <hr />
          <div className="d-flex flex-column align-items-center">
            <h2 className="group-prof rounded-pill p-2">GN</h2>
            <h3 className="account-owner fs-5 m-0">Group Name</h3>
          </div>
          <div className="mb-2">
            <p className=" group-name fs-6">Description</p>
            <p className="info-account m-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              asperiores omnis earum blanditiis iusto amet nihil deleniti esse
              voluptatum. Molestias nihil rerum voluptates distinctio ratione
              aperiam autem ad repellendus vitae.
            </p>
          </div>
          <div>
            <p className=" group-name fs-6">Created-By Stacy</p>
            <div className="d-flex justify-content-around">
              <p className="info-account m-0">Group-members</p>
              <p className="info-account m-0">300+</p>
            </div>
            <hr className="m-0" />
            <div className="group-members"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cohorts;
