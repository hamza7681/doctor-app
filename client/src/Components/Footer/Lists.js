import React from "react";

function Lists() {
  return (
    <>
      <div className="row">
        <div className="col-md-4 list_one">
          <h6 className="lists_heading">Useful Links</h6>
          <ul className="main_list">
            <li>Delivery Info</li>
            <li>FAQs</li>
            <li>Reviews</li>
            <li>Complaints</li>
            <li>About Us</li>
            <li>Returns</li>
          </ul>
        </div>
        <div className="col-md-4 list_two">
        <h6 className="lists_heading">Popular Treatments</h6>
          <ul className="main_list">
            <li>Erectile Dysfunction</li>
            <li>Weight Loss</li>
            <li>Migraines</li>
            <li>Period Delay</li>
            <li>Asthma</li>
            <li>Sexual Health</li>
            <li>Stop Smoking</li>
          </ul>
        </div>
        <div className="col-md-4 list_three">
        <h6 className="lists_heading">Learn More</h6>
          <ul className="main_list">
            <li>How it Works</li>
            <li>Health Centre Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Lists;
