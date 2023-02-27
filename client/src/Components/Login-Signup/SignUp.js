import React, { useState, useEffect } from "react";
import "./styles.css";
import Pic from "../../Assets/pic2.png";
import { FaEnvelope } from "react-icons/fa";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsArrowRight, BsFillPhoneFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { FaMale, FaFemale } from "react-icons/fa";
import { http } from "../../axios/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPass: "",
    gender: "male",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validateOnChange(value, name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    dispatch({
      type: "REGISTER",
      payload: {
        usernameReg: formValues.username,
        passwordReg: formValues.password,
        nameReg: formValues.name,
        emailReg: formValues.email,
      },
    });
    navigate("/login");
  };

  const validateOnChange = (values, field = null) => {
    const errors = formErrors;
    if (field === "name") {
      if (values.name === values.name) {
        errors.name = "";
      }
    }
    if (field === "email") {
      if (values.email === values.email) {
        errors.email = "";
      }
    }
    if (field === "username") {
      if (values.username === values.username) {
        errors.username = "";
      }
    }

    if (field === "password") {
      if (values.password === values.password) {
        errors.password = "";
      }
    }
    if (field === "confirmPass") {
      if (values.password === values.confirmPass) {
        errors.confirmPass = "";
      }
    }
    return errors;
  };

  // on click
  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.name) {
      errors.name = "Your name is required!";
    }
    if (!values.username) {
      errors.username = "Your username is required!";
    }
    if (!values.email) {
      errors.email = "Your email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format!";
    }
    if (!values.password) {
      errors.password = "Your password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Minimum 6 characters required!";
    } else if (values.password.length > 15) {
      errors.password = "Password cannot exceed more than 15 characters!";
    }
    if (values.confirmPass !== values.password) {
      errors.confirmPass = "Password doesn't match!";
    }

    return errors;
  };

  const PasswordToggleOne = () => {
    setShowPasswordOne(!showPasswordOne);
  };
  const PasswordToggleTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  };

  return (
    <>
      <div className="container-fluid login_wrapper">
        <div className="container signup_content">
          <div className="row">
            <div className="col-md-5 login_pic_wrapper">
              <img src={Pic} alt="login" className="img-fluid signup_img" />
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <h5 className="signup_heading">Memeber Registeration</h5>
              </div>
              <div className="text-center">
                <form onSubmit={handleSubmit}>
                  <div className="input_field1">
                    <span className="input_icon">
                      <FaUserAlt />
                    </span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input_field_area"
                      value={formValues.name}
                      name="name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="error_message">{formErrors.name}</div>
                  <div className="input_field1">
                    <span className="input_icon">
                      <FaUserAlt />
                    </span>
                    <input
                      type="text"
                      placeholder="Your username"
                      className="input_field_area"
                      value={formValues.username}
                      name="username"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="error_message">{formErrors.username}</div>
                  <div className="input_field1">
                    <span className="input_icon">
                      <FaEnvelope />
                    </span>
                    <input
                      type="text"
                      placeholder="Email"
                      className="input_field_area"
                      value={formValues.email}
                      onChange={handleChange}
                      name="email"
                      novalidate
                    />
                  </div>
                  <div className="error_message">{formErrors.email}</div>

                  <div>
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                      className="mt-2"
                    >
                      <Button
                        className={`group_btn_main1 ${
                          formValues.gender === "male" ? "bg__color" : ""
                        }`}
                        onClick={() =>
                          setFormValues({
                            ...formValues,
                            gender: "male",
                          })
                        }
                      >
                        <span className="gender_icon">
                          <FaMale />
                        </span>
                        <span className="group_btn1">Male</span>
                      </Button>
                      <Button
                        className={`group_btn_main2 ${
                          formValues.gender === "female" ? "bg__color" : ""
                        }`}
                        onClick={() =>
                          setFormValues({
                            ...formValues,
                            gender: "female",
                          })
                        }
                      >
                        <span className="gender_icon">
                          <FaFemale />
                        </span>
                        <span className="group_btn2">Female</span>
                      </Button>
                    </ButtonGroup>
                  </div>
                  <div className="input_field">
                    <span className="input_icon1">
                      <FaLock />
                    </span>
                    <input
                      type={showPasswordOne ? "text" : "password"}
                      placeholder="Password"
                      className="input_field_area"
                      value={formValues.password}
                      onChange={handleChange}
                      name="password"
                    />
                    <span className="eye_icon" onClick={PasswordToggleOne}>
                      {showPasswordOne ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </span>
                  </div>
                  <div className="error_message">{formErrors.password}</div>
                  <div className="input_field">
                    <span className="input_icon1">
                      <FaLock />
                    </span>
                    <input
                      type={showPasswordTwo ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="input_field_area"
                      value={formValues.confirmPass}
                      onChange={handleChange}
                      name="confirmPass"
                    />

                    <span className="eye_icon" onClick={PasswordToggleTwo}>
                      {showPasswordTwo ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </span>
                  </div>
                  <div className="error_message">{formErrors.confirmPass}</div>
                  <button className="signup_button">REGISTER</button>
                </form>
              </div>
              <div className="text-center signin_link">
                <Link to="/login" className="link_to_signin">
                  Already have an Account? <BsArrowRight />
                </Link>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
