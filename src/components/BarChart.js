import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BarChart = ({usdc, xrp, doge, ada, xtz}) => {
  const dataObject = {
    values: [usdc, xrp, doge, ada, xtz],
    labels: ["USDC", "XRP", "DOGE", "ADA", "XTZ"],
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
        data: [
          { y: dataObject.values[0], color: "#058DC7" },
          { y: dataObject.values[1], color: "#50B432" },
          { y: dataObject.values[2], color: "#ED561B" },
          { y: dataObject.values[3], color: "#DDDF00" },
          { y: dataObject.values[4], color: "#24CBE5" },
        ],
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
