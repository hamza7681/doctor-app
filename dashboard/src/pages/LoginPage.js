import React, { useState } from "react";
import "./styles.css";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../assests/logo.png";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPasswordOne, setShowPasswordOne] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validateOnChange(value, name));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    dispatch({
      type: "LOGIN",
      payload: { email: formValues.email, password: formValues.password },
    });
    setIsSubmit(true);
  };

  const validateOnChange = (values, field = null) => {
    const errors = formErrors;

    if (field === "email") {
      if (values.email === values.email) {
        errors.email = "";
      }
    }

    if (field === "password") {
      if (values.password === values.password) {
        errors.password = "";
      }
    }

    return errors;
  };

  // on click
  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.email) {
      errors.email = "Your email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format!";
    }
    if (!values.password) {
      errors.password = "Your password is required!";
    }
    return errors;
  };

  const PasswordToggleOne = () => {
    setShowPasswordOne(!showPasswordOne);
  };

  return (
    <>
      <div className="container-fluid login_wrapper">
        <div className=" logo_wrapper text-center">
          <img src={logo} className="login_image" />
        </div>
        <div className="container signup_content">
          <div>
            <div className="text-center">
              <h5 className="signup_heading">Admin Panel</h5>
            </div>

            <div className="text-center">
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <FaUserAlt />
                  </span>
                  <input
                    type="email"
                    className="form-control input_field_area"
                    placeholder="email"
                    value={formValues.email}
                    onChange={handleChange}
                    name="email"
                    noValidate
                  />
                </div>

                <div className="error_message">{formErrors.email}</div>
                <br />
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <FaLock />
                  </span>
                  <input
                    type={showPasswordOne ? "text" : "password"}
                    className="form-control input_field_area"
                    placeholder="password"
                    value={formValues.password}
                    onChange={handleChange}
                    name="password"
                  />
                  <span
                    className="input-group-text"
                    onClick={PasswordToggleOne}
                  >
                    {showPasswordOne ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                </div>

                <div className="error_message">{formErrors.password}</div>

                <button className="signup_button">LOGIN</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
