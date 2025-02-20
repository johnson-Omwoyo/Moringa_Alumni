import React, { useState } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import animePhoto from "../assets/17f4ec064cad10da1739a11d9b293c09-removebg-preview.png";
import { Field, Form, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const base_url = "http://192.168.8.3:5000";
  const [loggedInAlert, setLoggedInAlert] = useState(false);
  const [failedLoginAlert, setFailedLoginAlert] = useState(false);

  const handleLogin = async (values) => {
    console.log(values);
    try {
      const response = await axios.post(`${base_url}/login`, values, {
        headers: { "Content-Type": "application/json" },
      });
      setLoggedInAlert(true);

      setTimeout(() => {
        setLoggedInAlert(false);
        navigate("/")
      }, 3000);
      console.log("response", response.data);
      localStorage.setItem("access_token", response.data["access_token"]);
    } catch (error) {
      let { data, status } = error.response;
      console.log(data);
      console.log(status);
      if (status == 401) {
        setFailedLoginAlert(true);
      }
    }
  };

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().min(2, "Too short").required("Field can't be empty"),
    password: Yup.string()
      .min(3, "Password too short")
      .required("Field can't be empty"),
  });
  const [viewPassword, setViewPassword] = useState(false);
  const handleChangeViewPassword = (field, setter) => {
    setter(!field);
  };
  return (
    <div className="container">
      <div className="row my-5 rounded reg">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center py-5">
          <div className="the-title">
            <h1 className="display-5 m-0">Welcome Back</h1>
            {loggedInAlert && (
              <div
                class="alert alert-success d-flex align-items-center justify-content-around"
                role="alert"
                style={{ maxHeight: "64px" }}
              >
                <i class="fa-solid fa-circle-check"></i>
                <div>Login Success</div>
              </div>
            )}
            {failedLoginAlert && (
              <div
                class="alert alert-danger d-flex align-items-center justify-content-around"
                role="alert"
                style={{ maxHeight: "64px" }}
              >
                <i class="fa-solid fa-circle-xmark"></i>{" "}
                <div className="d-flex flex-column">
                  <p className="m-0">Invalid Details </p>
                  <p className="m-0">
                    Try again or <NavLink to={"/register"}>Register</NavLink>
                  </p>
                </div>
              </div>
            )}
            <p>
              Don't Have An Account?{" "}
              <span className="the-link" onClick={() => navigate("/register")}>
                Register
              </span>
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={handleLogin}
            validationSchema={validationSchema}
          >
            {(formik) => (
              <form
                className="form-group d-flex flex-column gap-4 rounded auth justify-content-center"
                onSubmit={formik.handleSubmit}
                onChange={() => setFailedLoginAlert(false)}
              >
                <div>
                  <Field
                    type="text"
                    placeholder="Username/Email.."
                    className="form-control"
                    name="username"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <div className="position-relative">
                    <Field
                      type={viewPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password.."
                      className="form-control"
                      onChange={formik.handleChange}
                    />{" "}
                    <div
                      onClick={() =>
                        handleChangeViewPassword(viewPassword, setViewPassword)
                      }
                      className="the-eye position-absolute  end-0 translate-middle-y px-4 "
                    >
                      {viewPassword ? (
                        <i class="fa-regular fa-eye-slash"></i>
                      ) : (
                        <i class="fa-regular fa-eye"></i>
                      )}
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>

                <button type="submit" className="btn">
                  Sign In
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="col d-none d-md-inline d-flex justify-content-center">
          <img className="img-fluid" src={animePhoto} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
