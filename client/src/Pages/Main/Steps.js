import React from "react";
import Cards from "../../Components/Steps/Cards";
import { data } from "../../Components/Steps/Data";
import "./styles.css";

function Steps() {
  return (
    <>
      <div className="container-fluid pt-5 pb-5">
        <div className="container text-center pt-4 pb-5">
          <h3 className="step_heading">Order within 2 minutes with 3 Easy Steps</h3>
        </div>
        <div className="container steps_insider pb-5">
          <div className="row">
            {data.map((val,index) => {
              return (
                <Cards key={index} logo={val.logo} step={val.step} detail={val.detail} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Steps;
