import React from "react";
import "./styles.css";
import proPic from "../../Assets/pro.png";
import { ImMobile } from "react-icons/im";
import IntroButton from "../../Components/Intro/IntroButton";
import { AiOutlineFileText } from "react-icons/ai";

function Professionals() {
  return (
    <>
      <div className="container-fluid pro_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <img src={proPic} alt="professionals" className="pro_pic" />
            </div>
            <div className="col-md-5">
              <div className="container inside_wrapper">
                <h3 className="pro_heading">Lets Talk</h3>
                <p className="pro_para">
                  We are providing best customer support in UK
                </p>
                <span className="pro_icon_wrapper">
                  <ImMobile className="pro_icon" />
                </span>
                <span className="pro_num">123-456-789</span>
                <br />
                <br />
                <IntroButton
                  name="Leave a Message"
                  icon={<AiOutlineFileText />}
                  className="pro_btn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Professionals;
