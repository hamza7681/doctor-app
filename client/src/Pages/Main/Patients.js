import React from "react";
import Cards from "../../Components/Patients/Cards";
import { data } from "../../Components/Patients/Data";
import { ImStarFull } from "react-icons/im";

function Patients() {
  return (
    <>
      <div className="container-fluid patient_main pb-5 pt-5 pb-5">
        <div className="container text-center pb-5">
          <h3 className="pat_heading">Words from our patients</h3>
        </div>

        <div className="row">
          {data.map((val,index) => {
            return <Cards key={index} tag={val.tag} name={val.name} desc={val.desc} />;
          })}
        </div>

        <div className="container text-center">
          <span>
            <b> See all reviews on </b>
            <span className="star">
              <ImStarFull />
            </span>
            <span className="rating"> Trustpilot </span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Patients;
