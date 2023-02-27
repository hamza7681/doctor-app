import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class AreaChartOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Current Month",
          data: [
            1500, 2000, 1800, 3000, 2800, 4000, 5000, 4600, 4300, 4500, 3000,
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "day",
          categories: [
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
          ],
        },
        tooltip: {
          x: {
            format: "dd",
          },
        },
      },
    };
  }
  render() {
    return (
      <>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </>
    );
  }
}

export default AreaChartOne;
