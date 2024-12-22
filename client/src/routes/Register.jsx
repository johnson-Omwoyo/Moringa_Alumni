import React, { useState } from "react";
import "./register.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import animePhoto from "../assets/17f4ec064cad10da1739a11d9b293c09-removebg-preview.png";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [createdAccountAlert, setcreatedAccountAlert] = useState(false);
  const [accountCreationFailedAlert, setAccountCreationFailed] =
    useState(false);
  const base_url = "http://192.168.8.3:5000";

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
    course: Yup.string().required("Please select the course"),

    password: Yup.string().min(3, "Too short").required("Password required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please Confirm your password"),
    year_of_graduation: Yup.string().required(
      "Please select the year you graduated"
    ),
  });
  const handleRegister = async (values) => {
    try {
      const response = await axios.post(`${base_url}/add_user`, values, {
        headers: { "Content-Type": "application/json" },
      });
      setcreatedAccountAlert(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);

      console.log("Response:", response.data);
    } catch (error) {
      if (error.response) {
        let { data, status } = error.response;
        console.log(data);
        if (status == 400) {
          setAccountCreationFailed(true);
        }
      } else {
        console.log(error);
      }
    }
  };
  const initialValues = {
    name: "",
    email: "",
    username: "",
    password: "",
    course: "",
    year_of_graduation: "",
    phone: "",
    gender: "",
  };
  return (
    <div className="container">
      <div className="row   my-5 rounded reg ">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center py-5 ">
          <div className="the-title ">
            <h1 className="display-5 m-0">Get Started </h1>
            {createdAccountAlert && (
              <div
                class="alert alert-success d-flex align-items-center justify-content-around"
                role="alert"
                style={{ maxHeight: "64px" }}
              >
                <i class="fa-solid fa-circle-check"></i>
                <div>Registration Success</div>
              </div>
            )}
            {accountCreationFailedAlert && (
              <div
                class="alert alert-danger d-flex align-items-center justify-content-around"
                role="alert"
                style={{ maxHeight: "64px" }}
              >
                <i class="fa-solid fa-circle-exclamation"></i>{" "}
                <div className="d-flex flex-column">
                  <p className="m-0">User Already Exist </p>
                </div>{" "}
              </div>
            )}
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
                onChange={() => setAccountCreationFailed(false)}
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
                    </div>
                  </div>
                  <ErrorMessage
                    name="confirmpassword"
                    component="div"
                    className="error"
                  />
                </div>
                {/* The Select for the courses */}
                <div>
                  <Field
                    as="select"
                    name="course"
                    className="form-control"
                    onChange={formik.handleChange}
                  >
                    <option value="" label="Select Course..." disabled />
                    <option value="SE" label="Software Engineering" />
                    <option value="DS" label="Data Science" />
                    <option value="CS" label="Cyber Security" />
                    <option value="TL" label="Team Lead" />
                  </Field>

                  <ErrorMessage
                    name="course"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Field
                    as="select"
                    name="year_of_graduation"
                    className="form-control"
                    onChange={formik.handleChange}
                  >
                    <option value="" label="Year of graduation.." disabled />
                    <option value="2014" label="2014" />
                    <option value="2015" label="2015" />
                    <option value="2016" label="2016" />
                    <option value="2017" label="2017" />{" "}
                    <option value="2024" label="2024" />
                    <option value="2018" label="20218" />
                    <option value="2019" label="2019" />
                    <option value="2020" label="2020" />
                    <option value="2021" label="2021" />
                    <option value="2022" label="2022" />
                    <option value="2023" label="2023" />
                    <option value="2024" label="2024" />
                  </Field>

                  <ErrorMessage
                    name="year_of_graduation"
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
