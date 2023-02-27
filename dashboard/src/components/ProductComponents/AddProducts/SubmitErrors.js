import React from "react";
import './styles.css'

const SubmitErrors = ({
  SubmitProduct,
  weighErr,
  leErr,
  widErr,
  heiErr,
  shipErr,
  linkErr,
  packErr,
  descErr,
  typeErr,
  qtyErr,
  errName,
}) => {
  return (
    <>
      <div className="main_error_div">
        {Object.keys(weighErr).map((key, index) => {
          return (
            <div className="error_div mt-2 pt-2 pb-2 pl-5" key={index}>
              <span className="error_span"> Error is in Shipping Tab: </span>
              <span>{weighErr[key]}</span>
            </div>
          );
        })}
        {Object.keys(leErr).map((key, index) => {
          return (
            <div className="error_div mt-2 pt-2 pb-2 pl-5" key={index}>
              <span className="error_span"> Error is in Shipping Tab: </span>
              <span>{leErr[key]}</span>
            </div>
          );
        })}
        {Object.keys(widErr).map((key, index) => {
          return (
            <div className="error_div mt-2 pt-2 pb-2 pl-5" key={index}>
              <span className="error_span"> Error is in Shipping Tab: </span>
              <span>{widErr[key]}</span>
            </div>
          );
        })}
        {Object.keys(heiErr).map((key, index) => {
          return (
            <div className="error_div mt-2 pt-2 pb-2 pl-5" key={index}>
              <span className="error_span"> Error is in Shipping Tab: </span>
              <span>{heiErr[key]}</span>
            </div>
          );
        })}
        {Object.keys(shipErr).map((key, index) => {
          return (
            <div className="error_div mt-2 pt-2 pb-2 pl-5" key={index}>
              <span className="error_span"> Error is in Shipping Tab: </span>
              <span>{shipErr[key]}</span>
            </div>
          );
        })}
        {Object.keys(linkErr).map((key, index) => {
          return (
            <div className="error_div mt-2 pt-2 pb-2 pl-5" key={index}>
              <span className="error_span">
                Error is in Linked Product Tab:
              </span>
              <span>{linkErr[key]}</span>
            </div>
          );
        })}
       
        {Object.keys(descErr).map((key, index) => {
          return (
            <div className="error_div mt-2 pt-2 pb-2 pl-5" key={index}>
              <span className="error_span"> Error is in Information Tab: </span>
              <span>{descErr[key]}</span>
            </div>
          );
        })}
        {Object.keys(typeErr).map((key, index) => {
          return (
            <div className="error_div mt-2 pt-2 pb-2 pl-5" key={index}>
              <span className="error_span"> Error is in Information Tab: </span>
              <span>{typeErr[key]}</span>
            </div>
          );
        })}
       
        {Object.keys(errName).map((key, index) => {
          return (
            <div className="error_div mt-2 pt-2 pb-2 pl-5" key={index}>
              <span className="error_span"> Error is in Information Tab: </span>
              <span>{errName[key]}</span>
            </div>
          );
        })}
      </div>

      <button onClick={SubmitProduct} className="final_submit">
        Add Product
      </button>
    </>
  );
};

export default SubmitErrors;
