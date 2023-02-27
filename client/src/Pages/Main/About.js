import React from "react";
import "./styles.css";
import logo2 from '../../Assets/logo2.png'

function About() {
  return (
    <>
      <div className="container-fluid pt-5 pb-5" >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="container pt-3">
                <span className="about_heading">About Us</span>
                <div className="bar"></div>
                <p className="pt-4 about_para">
                  We will help you access the treatment you need when and where
                  it is convenient for you. Private prescriptions can be written
                  online by our doctors without the need to see them in person.
                  We ship your medicines in plain packaging to your chosen
                  address in the UK
                  <br />
                  <br /> In addition to respecting your privacy and
                  understanding the importance of your health, you can count us
                  for a safe, reliable and confidential service at all times.
                  The trust of our patients is a source of pride for us. As a
                  health care providers, we are always happy to hear from our
                  patients. Get in touch with us via phone, email, or social
                  media to share your feedback or if you need any assistance.
                </p>
              </div>
              </div>
              <div className="col-md-6">
                <img src={logo2} className="img-fluid about_pic" alt='about'/>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default About;
