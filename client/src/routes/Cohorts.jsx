import React, { useEffect, useState } from "react";
import "./cohorts.css";
import { use } from "react";

function Cohorts() {
  let theGroupCategory = localStorage.getItem("cohortGroupCategory") || "all";
  const [groupCategory, setGroupCategory] = useState(theGroupCategory);

  useEffect(() => {
    localStorage.setItem("cohortGroupCategory", groupCategory);
  }, [groupCategory]);

  const groupDetail = localStorage.getItem("groupDetail") || false;
  const [groupDetails, setGroupDetails] = useState(groupDetail);
  console.log(groupDetails);
  useEffect(() => {
    localStorage.setItem("groupDetail", groupDetails);
  }, [groupDetails]);

  const your_cohorts = localStorage.getItem("your_cohorts")||false;
  const [yourCohorts, setYourCohorts] = useState(your_cohorts);
  useEffect(() => {
    localStorage.setItem("your_cohorts", yourCohorts);
  }, [yourCohorts]);

  const [whatCohortsSelector, setWhatCohortsSelector] = useState(false);
  const [text, setText] = useState("");

  const thePage = localStorage.getItem("selectedPage") || "cohorts";
  const [selectedPage, setSelectedPage] = useState(thePage);
  useEffect(() => {
    localStorage.setItem("selectedPage", selectedPage);
  }, [selectedPage]);

  const handleGroupCategory = (clickedSection) => {
    setWhatCohortsSelector(false);
    setGroupCategory(clickedSection);
  };
  const handleWhatYourCohortSelector = (clicked) => {
    setYourCohorts(clicked);
    setTimeout(() => {
      setWhatCohortsSelector(false);
    }, 500);
  };
  const messagess = [
    {
      text: "this is the text in the message",
      time: "12:23",
      yours: false,
      sender: "Sayid",
    },
    {
      text: "this is the text in the message",
      time: "12:28",
      yours: true,
      sender: "sender name",
    },
    {
      text: "this is the text in the message",
      time: "12:29",
      yours: true,
      sender: "sender name",
    },
    {
      text: "this is the text in the message",
      time: "12:30",
      yours: false,
      sender: "Trevor",
    },
    {
      text: "this is the text in the message",
      time: "12:30",
      yours: false,
      sender: "Trevor",
    },
    {
      text: "this is the text in the message",
      time: "12:30",
      yours: false,
      sender: "Trevor",
    },
    {
      text: "this is the text in the message",
      time: "12:30",
      yours: false,
      sender: "Trevor",
    },
  ];
  const [messages, setMessage] = useState(messagess);

  const groups = [
    { category: "private", name: "Front ends" },
    { category: "public", name: "clean codes" },
    { category: "private", name: "The titans" },
    { category: "private", name: "Super Codes" },
    { category: "public", name: "tinop" },
    { category: "private", name: "Web nit" },
    { category: "public", name: "Design Juniors" },
    { category: "private", name: "Back ends" },
    { category: "private", name: "Learn freelancing" },
  ];
  const yourGroups = [
    // { category: "private", name: "Web nit" },
    // { category: "public", name: "Design Juniors" },
    // { category: "private", name: "Back ends" },
    // { category: "private", name: "Learn freelancing" },
  ];
  //   const whichGroups=(groups,youGroups)=>{
  // if
  //   }
  const filterdGroups = (groups) => {
    if (groupCategory == "private") {
      return groups.filter((group) => group.category == "private");
    } else if (groupCategory == "public") {
      return groups.filter((group) => group.category === "public");
    } else {
      return groups;
    }
  };
  const groupsToDisplay = filterdGroups(yourCohorts ? yourGroups : groups);
  const noGroups = (yourCohorts, yourGroups) => {
    console.log(yourCohorts && yourGroups.length);
    return yourCohorts && yourGroups.length == 0;
  };
  const onSend = (e, text) => {
    e.preventDefault();
    const newMessage = {
      text: text,
      time: new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      yours: true,
      sender: "Johnson",
    };
    setMessage((messages) => [...messages, newMessage]);
    setText("");

    console.log(messages);
    setTimeout(() => {
      const chatContainer = document.getElementById("chatContainer");
      if (chatContainer) {
        console.log("jermain");
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 1500);
  };
  const namesAbbrev = (groupName) => {
    const names = groupName.split(" ");
    console.log(names);
    if (names.length == 1) {
      return names[0].slice(0, 2).toUpperCase();
    } else if (names.length > 1) {
      return names[0].slice(0, 1).concat(names[1].slice(0, 1)).toUpperCase();
    }
  };
  const handleJoinCohort = () => {
    setSelectedPage("chat-box");
  };
  return (
    <div className="container-fluid mb-md-5">
      <div className="row">
        <div
          className={`col-12 col-md-3 main-col rounded m-md-3 p-4 position-relative d-md-inline ${
            selectedPage == "cohorts" ? "d-block" : "d-none"
          }`}
        >
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-3 align-items-center mb-4">
              <div>
                <h3 className="account-owner fs-5 m-o">Discussions</h3>
              </div>
            </div>
            <button
              className="btn"
              onClick={() => setWhatCohortsSelector(true)}
            >
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
          {whatCohortsSelector && (
            <div
              style={{ top: "10%", right: "1%" }}
              className="position-absolute end-1 p-3 list-types rounded"
            >
              <p
                className={yourCohorts ? "p-2 selected rounded" : "p-2 "}
                onClick={() => handleWhatYourCohortSelector(true)}
              >
                Your cohorts
              </p>
              <hr className="m-0 p-0" />
              <p
                className={yourCohorts ? "p-2 " : "p-2 selected  rounded "}
                onClick={() => handleWhatYourCohortSelector(false)}
              >
                Explore cohorts
              </p>
            </div>
          )}
          <hr />
          <div className="d-flex gap-3 groups-categories p-2 rounded-pill mb-4">
            <button
              className={
                groupCategory == "all"
                  ? "btn  rounded-pill px-md-4 selected"
                  : "btn  rounded-pill px-md-4"
              }
              onClick={() => handleGroupCategory("all")}
            >
              All
            </button>
            <button
              className={
                groupCategory == "public"
                  ? "btn  rounded-pill px-md-4 selected"
                  : "btn  rounded-pill px-md-4"
              }
              onClick={() => handleGroupCategory("public")}
            >
              Public{" "}
            </button>
            <button
              className={
                groupCategory == "private"
                  ? "btn  rounded-pill px-md-4 selected"
                  : "btn  rounded-pill px-md-4"
              }
              onClick={() => handleGroupCategory("private")}
            >
              Private
            </button>
          </div>

          <div className=" groups-container">
            {groupsToDisplay.length ? (
              groupsToDisplay.map((group) => (
                <>
                  {" "}
                  <div
                    className={`d-flex gap-3 ${
                      group.category == "private" &&
                      !yourCohorts &&
                      "private-cohort"
                    }`}
                  >
                    <div>
                      <h2 className="group-prof rounded-pill p-2">
                        {namesAbbrev(group.name)}
                      </h2>
                    </div>
                    <div className=" gap-2 d-flex flex-column">
                      <p className="m-0 group-name fs-6">{group.name}</p>

                      {!yourCohorts ? (
                        <div className="d-flex justify-content-between gap-2 align-items-center">
                          <span className="group-category rounded-pill px-2">
                            {" "}
                            {group.category}
                          </span>
                          <button
                            className="btn join-group rounded-pill"
                            onClick={handleJoinCohort}
                          >
                            {group.category == "private"
                              ? " Request Join"
                              : "Join Now"}
                          </button>
                        </div>
                      ) : (
                        <div>Last message</div>
                      )}
                    </div>
                  </div>
                  <hr />
                </>
              ))
            ) : (
              <div className="d-flex flex-column align-items-center">
                <p>No Cohorts </p>
                <button
                  className="btn btn-danger"
                  onClick={() => setYourCohorts(false)}
                >
                  Explore Cohorts
                </button>
              </div>
            )}
          </div>
        </div>
        <div
          className={`col-12 col-md-6 main-col p-4 m-md-3 rounded position-relative d-md-inline ${
            selectedPage == "chat-box" ? "d-block" : "d-none"
          }`}
        >
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-3 align-items-center ">
              <div
                className="back-cohorts p-2 rounded text-center d-flex align-items-center d-md-none"
                onClick={() => setSelectedPage("cohorts")}
              >
                <i class="fa-solid fa-angle-left"></i>
              </div>
              <div
                onClick={() => {
                  setGroupDetails(true);
                  setSelectedPage("");
                }}
                className="d-flex gap-3 align-items-center "
              >
                <div>
                  <h2 className="group-prof rounded-pill p-2">
                    {namesAbbrev("clean codes")}
                  </h2>
                </div>
                <div>
                  <h3 className="account-owner fs-5 m-0">Discussion Name</h3>
                  <p className="info-account m-0 ">the info</p>
                </div>
              </div>
            </div>
            <div className=" position-relative">
              <button className="btn">
                <i class="fa-solid fa-video"></i>
              </button>
              <button className="btn">
                <i class="fa-solid fa-phone"></i>
              </button>
              <button className="btn">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>
              {whatCohortsSelector && (
                <div
                  style={{ top: "10%", right: "1%" }}
                  className="position-absolute end-1 p-3 list-types rounded"
                >
                  <p
                    className={yourCohorts ? "p-2 selected rounded" : "p-2 "}
                    onClick={() => handleWhatYourCohortSelector(true)}
                  >
                    Share Discussion{" "}
                  </p>
                  <p
                    className={yourCohorts ? "p-2 selected rounded" : "p-2 "}
                    onClick={() => handleWhatYourCohortSelector(true)}
                  >
                    Leave Disussion{" "}
                  </p>
                  <hr className="m-0 p-0" />
                  <p
                    className={yourCohorts ? "p-2 " : "p-2 selected  rounded "}
                    onClick={() => handleWhatYourCohortSelector(false)}
                  >
                    Report Discussion{" "}
                  </p>
                </div>
              )}
            </div>
          </div>
          <hr />
          <div className="groups-container " id="chatContainer">
            <div className="d-flex flex-column  gap-2 mb-5 mb-md-0">
              {messages.map((message) => (
                <div
                  className={`message-container d-block  px-3 py-1  rounded ${
                    message.yours && "ms-auto your-message "
                  }`}
                >
                  <div className="d-flex justify-content-between mx-2">
                    <p className="m-0 me-4">
                      {message.yours ? "You" : message.sender}
                    </p>
                    <p className="m-0">{message.time}</p>
                  </div>
                  <hr className="m-0" />
                  <p className="m-0 fs-6"> {message.text}</p>
                  {message.yours && (
                    <>
                      <div className="d-flex justify-content-end">
                        <i class="fa-solid fa-check"></i>{" "}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="position-relative position-absolute bottom-0 text-center text-input end-0 ">
              <form
                className="d-flex gap-3 position-relative my-3 me-md-5"
                onSubmit={(e) => onSend(e, text)}
              >
                <input
                  className="form-control pe-5"
                  type="text"
                  placeholder="Type your message..."
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                />
                <button
                  type="submit"
                  className={`btn send-msg rounded-pill position-absolute top-50 end-0 translate-middle-y px-4 ${
                    text === "" && "disabled"
                  }`}
                >
                  <i class="fa-regular fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        {groupDetails == true && (
          <div className="col main-col rounded m-3 p-4 ">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-3 align-items-center ">
                <div>
                  <h3 className="account-owner fs-5 m-0">Detail Group</h3>
                </div>
              </div>
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setGroupDetails(false);
                    setSelectedPage("chat-box");
                  }}
                >
                  <i class="fa-solid fa-x"></i>{" "}
                </button>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-column align-items-center">
              <h2 className="group-prof rounded-pill p-2">GN</h2>
              <h3 className="account-owner fs-5 m-0">Discussion Name</h3>
            </div>
            <div className="mb-2">
              <p className=" group-name fs-6">Description</p>
              <p className="info-account m-0 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt asperiores omnis earum blanditiis iusto amet nihil
                deleniti esse voluptatum. Molestias nihil rerum voluptates
                distinctio ratione aperiam autem ad repellendus vitae.
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
        )}
      </div>
    </div>
  );
}

export default Cohorts;
