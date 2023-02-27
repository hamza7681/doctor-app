import React, { useState, useEffect } from "react";
import "./styles.css";
import Pic from "../../Assets/pic2.png";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
 


  const SubmitForm = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN",
      payload: {
        email,
        password,
      },
    });
  };

  const PasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container-fluid login_wrapper">
        <div className="container login_content">
          <div className="row">
            <div className="col-md-5 login_pic_wrapper">
              <img src={Pic} alt="login" className="img-fluid login_img" />
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <h5 className="login_heading">Memeber Login</h5>
              </div>
              <div className="text-center">
                <form>
                  <div className="input_field1">
                    <span className="input_icon">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input_field_area"
                      value={email}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input_field">
                    <span className="input_icon1">
                      <FaLock />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="input_field_area"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="eye_icon" onClick={PasswordToggle}>
                      {showPassword ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </span>
                  </div>
                  <button className="login_button" onClick={SubmitForm}>
                    LOGIN
                  </button>
                </form>
              </div>
              <div className="text-center signup_link">
                <Link to="/signup" className="link_to_signup">
                  Create your Account <BsArrowRight />
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

export default Login;
