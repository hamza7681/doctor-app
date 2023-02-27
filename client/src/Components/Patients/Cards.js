import React from "react";

function Cards({tag, name, desc}) {
  return (
    <>
      <div className="col-md-3 ">
        <div className="pat_cards text-center">
          <span className="pat_tag">{tag}</span>
          <h4 className="patient_heading">{name}</h4>
          <p className="pat_para">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default Cards;
