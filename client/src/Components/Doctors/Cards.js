import React from "react";
import "./styles.css";

function Cards({ image, text }) {
  return (
    <>
      <div className="col-md-4">
        <div className="cards">
          <div className="cards_container">
            <img src={image} alt="doctor" className=" cards_images" />
          </div>
          <div className="text-center pt-1 pb-5">
            <span className="cards_text">{text}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
