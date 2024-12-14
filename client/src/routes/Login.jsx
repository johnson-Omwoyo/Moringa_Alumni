import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import animePhoto from "../assets/17f4ec064cad10da1739a11d9b293c09-removebg-preview.png";
import { Field, Form, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
function Login() {
  const navigate = useNavigate();
  const handleLogin = (values) => {
    console.log(values);
  };
  const initialValues = {
    userName: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().min(2, "Too short").required("Field cant be empty"),
    password: Yup.string()
      .min(3, "Password too short")
      .required("Field cant be empty"),
  });

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
          <Formik
            initialValues={initialValues}
            onSubmit={handleLogin}
            validationSchema={validationSchema}
          >
            {(formik) => (
              <form
                className="form-group d-flex flex-column gap-4  rounded auth justify-content-center "
                action=""
              >
                <div>
                  <Field
                    type="text"
                    placeholder="Username/Email.."
                    className="form-control"
                    name="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    placeholder="Password.."
                    className="form-control"
                    name="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>

                <button
                  type="submit"
                  className="btn "
                
                >
                  Sign In
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="col d-flex justify-content-center">
          <img className="img-fluid" src={animePhoto} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
