import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const dataObject = {
    values: [1.1, 0.8, 0.12, 0.9, 3],
    labels: ["FTM", "XRP", "DOGE", "ADA", "XTZ"],
  };  
const barOptions = {
    chart: {
      type: "areaspline",
      height: 720,
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

  const BarChart = () => {
    return (
        <HighchartsReact
  highcharts={Highcharts}
  options={barOptions}
  containerProps={{ style: { height: "100%", weight: "100%" } }}
/>
    )
  }

  export default BarChart