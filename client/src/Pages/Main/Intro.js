import React from "react";
import IntroButton from "../../Components/Intro/IntroButton";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import introPic from "../../Assets/pic1.png";
import "./styles.css";
import Rating from "../../Components/Intro/Rating";

function Intro() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="intro_heading">
                <span className="heading_part">Online Pharmacy</span> & medical
                consultations with trusted source
              </h1>
              <p className="intro_para">
                Enjoy the free delivery at your doorstep by post
              </p>
              <br />
              <div className="buttons">
              <IntroButton
                name="Learn More"
                icon={<MdOutlineKeyboardArrowRight />}
                className="intro_btn"
              />
              <IntroButton
                name="Shop Now"
                icon={<FaRegHeart />}
                className="intro_btn"
              />
              </div>
            </div>
            <div className="col-md-6">
              <img src={introPic} alt="intro" className="img-fluid doc_img" />
            </div>
          </div>
        </div>
        <div className="container rating_container">
            <Rating/>
        </div>
      </div>
    </>
  );
}

export default Intro;
