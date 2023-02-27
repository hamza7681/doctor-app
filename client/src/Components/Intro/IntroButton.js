import React from "react";
import "./styles.css";

function IntroButton({ name, icon, className }) {
  return (
    <>
      <button className={className}>
        <span>{name}</span> <span className="intro_btn_icon">{icon}</span>
      </button>
    </>
  );
}

export default IntroButton;
