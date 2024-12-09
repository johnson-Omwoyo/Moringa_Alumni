import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import animePhoto from "../assets/17f4ec064cad10da1739a11d9b293c09-removebg-preview.png";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row   my-5 rounded reg ">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center py-5 ">
          <div className="the-title ">
            <h1 className="display-5 m-0">Welcome Back </h1>
            <p>
              Don't Have An Account?{" "}
              <span className="the-link" onClick={() => navigate("/register")}>
                Register
              </span>
            </p>
          </div>
          <form
            className="form-group d-flex flex-column gap-4  rounded auth justify-content-center "
            action=""
          >
            <input
              type="text"
              placeholder="Username/Email.."
              className="form-control"
            />

            <input
              type="text"
              placeholder="Password.."
              className="form-control"
            />

            <button type="submit" className="btn ">
              Sign In
            </button>
          </form>
        </div>
        <div className="col d-flex justify-content-center">
          <img className="img-fluid" src={animePhoto} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
