import React, { useEffect, useState } from "react";
import "./styles.css";
import ShippingTable from "./ShippingTable";
import SubmitErrors from "./SubmitErrors";

const Shipping = ({
  productWeight,
  setPweight,
  length,
  setLength,
  width,
  setWidth,
  height,
  setHeight,
  shipping,
  setShipping,
  details,
  setDetails,
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
  // const [productWeight, setProductWeight] = useState();
  // const [length, setLength] = useState();
  // const [width, setWidth] = useState();
  // const [height, setHeight] = useState();
  // const [shipping, setShipping] = useState("");

  return (
    <>
      <div className="container pt-3">
        <h4 className="bread_crumbs pb-3">Shipping</h4>
        <div className="row">
          <div className="col-md-6">
            <form className="row g-2">
              <label className="labels">Weight (lbs):</label>

              <div className="col-12">
                <input
                  type="number"
                  placeholder="Enter the weight of Product (lbs)"
                  className="form-control"
                  value={productWeight}
                  onChange={(e) => setPweight(e.target.value)}
                />
                {Object.keys(weighErr).map((key, index) => {
                  return (
                    <div key={index} style={{ color: "red" }}>
                      {weighErr[key]}
                    </div>
                  );
                })}
              </div>
              <label className="labels">Dimensions (in):</label>
              <div className="col-4">
                <input
                  type="number"
                  placeholder="Length"
                  className="form-control"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
                {Object.keys(leErr).map((key, index) => {
                  return (
                    <div key={index} style={{ color: "red" }}>
                      {leErr[key]}
                    </div>
                  );
                })}
              </div>
              <div className="col-4">
                <input
                  type="number"
                  placeholder="Width"
                  className="form-control"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
                {Object.keys(widErr).map((key, index) => {
                  return (
                    <div key={index} style={{ color: "red" }}>
                      {widErr[key]}
                    </div>
                  );
                })}
              </div>
              <div className="col-4">
                <input
                  type="number"
                  placeholder="Height"
                  className="form-control"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
                {Object.keys(heiErr).map((key, index) => {
                  return (
                    <div key={index} style={{ color: "red" }}>
                      {heiErr[key]}
                    </div>
                  );
                })}
              </div>
              <div>
                <form
                  className="row g-2"
                  onChange={(e) => setShipping(e.target.value)}
                >
                  <label className="labels">Shipping Type:</label>

                  <div className="col-3">
                    <input
                      type="radio"
                      name="delivery"
                      id="free"
                      value="Free"
                    />
                    <label className="form-check-label radio_labels" for="free">
                      Free For All
                    </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="radio"
                      name="delivery"
                      id="paid"
                      value="Paid"
                    />
                    <label className="form-check-label radio_labels" for="paid">
                      Paid for Specific Regions
                    </label>
                  </div>
                  <div className="col-5">
                    <input
                      type="radio"
                      name="delivery"
                      id="freeRegions"
                      value="FreeRegions"
                    />
                    <label
                      className="form-check-label radio_labels"
                      for="freeRegions"
                    >
                      Free For Specific Regions
                    </label>
                  </div>
                  {Object.keys(shipErr).map((key, index) => {
                    return (
                      <div key={index} style={{ color: "red" }}>
                        {shipErr[key]}
                      </div>
                    );
                  })}
                </form>
              </div>
            </form>
          </div>
          <div className="col-md-6"></div>
        </div>
        <hr className="mt-4 mb-4" />
        <ShippingTable
          shipping={shipping}
          details={details}
          setDetails={setDetails}
        />

        <SubmitErrors
          SubmitProduct={SubmitProduct}
          weighErr={weighErr}
          leErr={leErr}
          widErr={widErr}
          heiErr={heiErr}
          shipErr={shipErr}
          linkErr={linkErr}
          packErr={packErr}
          descErr={descErr}
          typeErr={typeErr}
          qtyErr={qtyErr}
          errName={errName}
        />
      </div>
    </>
  );
};

export default Shipping;
