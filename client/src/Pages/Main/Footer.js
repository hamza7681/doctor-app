import React from "react";
import Logo from "../../Components/Footer/Logo";
import Lists from "../../Components/Footer/Lists";
import SocialLogos from "../../Components/Footer/SocialLogos";

function Footer() {
  return (
    <>
      <div className="container-fluid pt-5 pb-5 main_footer">
        <div className="row">
          <div className="col-md-2">
            <Logo />
          </div>
          <div className="col-md-6">
            <Lists />
          </div>
          <div className="col-md-4">
            <SocialLogos />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
