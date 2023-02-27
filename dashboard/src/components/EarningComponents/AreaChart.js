import React, { Component } from "react";
import AreaChartOne from "./AreaChartOne";
import AreaChartTwo from "./AreaChartTwo";
import "./styles.css";

const AreaChart = () => {
  return (
    <>
    <div className="container mt-5">
    <h4 className="main_heading">Earning Comparison</h4>
    </div>
      <div className="container mb-5 main_wrapper">
       
        <div className="row">
          <div className="col-md-6 pt-4  chartone_wrapper">
            <div className="container">
              <span className="chartone_heading"> Last 30 Days </span>
            </div>
            <AreaChartOne />
          </div>
          <div className="col-md-6 pt-4 charttwo_wrapper">
          <div className="container">
              <span className="charttwo_heading"> Last 2 Months </span>
            </div>
            <AreaChartTwo />
          </div>
        </div>
      </div>
    </>
  );
};

export default AreaChart;
