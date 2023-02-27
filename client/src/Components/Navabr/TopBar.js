import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { ImMobile } from "react-icons/im";
import "./styles.css";

function TopBar() {
  return (
    <div>
      <div className="container-fluid top_bar">
        <div className="row">
          <div className="col-7"></div>
          <div className="col-3">
            <span>
              <BiEnvelope className="mail_icon" />
            </span>
            <span className="mail_text">support@care&carepharmacy.com</span>
          </div>
          <div className="col-2">
            <span>
              <ImMobile className="mobile_icon" />
            </span>
            <span className="mobile_text">123-456-789</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
