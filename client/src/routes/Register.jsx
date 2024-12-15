import React, { useState } from "react";
import "./register.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import animePhoto from "../assets/17f4ec064cad10da1739a11d9b293c09-removebg-preview.png";

function Register() {
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);

  const handleChangeViewPassword = (field, setter) => {
    setter(!field);
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name so short")
      .max(50, "Name so long")
      .required("The name is required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    username: Yup.string()
      .min(3, "Username too short")
      .required("Username required"),
    profession: Yup.string().min(3, "Too short"),

    password: Yup.string().min(3, "Too short").required("Password required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });
  const handleRegister = (values) => {
    console.log("The user details:", values);
  };
  const initialValues = {
    name: "",
    profession: "",
    email: "",
    username: "",
    password: "",
  };
  return (
    <div className="container">
      <div className="row   my-5 rounded reg ">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center py-5 ">
          <div className="the-title ">
            <h1 className="display-5 m-0">Get Started </h1>
            <p>
              Already Have An Account?{" "}
              <span className="the-link" onClick={() => navigate("/login")}>
                Login
              </span>
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            {(formik) => (
              <form
                className="form-group d-flex flex-column gap-4  rounded auth justify-content-center "
                action=""
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <Field
                    type="text"
                    placeholder="Name.."
                    name="name"
                    className="form-control"
                    onChange={formik.handleChange}
                  />{" "}
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div>
                  <Field
                    type="text"
                    placeholder="Email.."
                    name="email"
                    className="form-control"
                    onChange={formik.handleChange}
                  />{" "}
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Username.."
                    className="form-control"
                    onChange={formik.handleChange}
                  />{" "}
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
                <div>
                <div className="position-relative">
                  <Field
                    type={viewConfirmPassword ? "text" : "password"}
                    name="confirmpassword"
                    placeholder="Confirm Password.."
                    className="form-control"
                    onChange={formik.handleChange}
                  />{" "}
                  <div
                    className="the-eye position-absolute  end-0 translate-middle-y px-4 "
                    onClick={() =>
                      handleChangeViewPassword(
                        viewConfirmPassword,
                        setViewConfirmPassword
                      )
                    }
                  >
                    {viewConfirmPassword ? (
                      <i class="fa-regular fa-eye-slash"></i>
                    ) : (
                      <i class="fa-regular fa-eye"></i>
                    )}
                  </div></div>
                  <ErrorMessage
                    name="confirmpassword"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    name="profession"
                    placeholder="Profession.."
                    className="form-control"
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage
                    name="profession"
                    component="div"
                    className="error"
                  />
                </div>
                <button type="submit" className="btn ">
                  Sign Up
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="col d-none d-md-inline">
          <img className="img-fluid" src={animePhoto} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;
