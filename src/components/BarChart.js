import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BarChart = ({ data }) => {
  const dataObject = {
    values: data,
    labels: ["USDC", "XRP", "DOGE", "ADA", "XTZ", "BTC"],
  };
  const barOptions = {
    chart: {
      type: "areaspline",
      height: 400,
    },
    title: {
      text: "Crypto Bar Chart",
    },
    xAxis: {
      categories: dataObject.labels,
    },
    yAxis: {
      title: {
        text: "Coin Price",
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        type: "bar",
        name: "Taiwan Coinbase",
        data: data,
      },
    ],
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={barOptions}
      containerProps={{ style: { height: "100%", weight: "100%" } }}
    />
  );
};

export default BarChart;
