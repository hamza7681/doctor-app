import React from "react";
import "./styles.css";

const ToggleSwitch = ({ isOn, handleToggle,name }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        name={name}
      />
      <label
        style={{ background: isOn && "#038c73" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default ToggleSwitch;
