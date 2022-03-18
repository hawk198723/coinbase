import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";



const PieChart = ({ data }) => {
  const dataObject = {
    values: data,
    labels: ["USDC", "XRP", "DOGE", "ADA", "XTZ"],
  };
  const donutOptions = {
    colors: ["#058DC7", "#50B432", "#ED561B", "#DDDF00", "#24CBE5"],
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Crypto Pie Chart",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Percentage",
        // colorByPoint: true,
        data: [
          {
            name: dataObject.labels[0],
            y: dataObject.values[0],
            sliced: false,
            selected: true,
          },
          {
            name: dataObject.labels[1],
            y: dataObject.values[1],
          },
          {
            name: dataObject.labels[2],
            y: dataObject.values[2],
          },
          {
            name: dataObject.labels[3],
            y: dataObject.values[3],
          },
          {
            name: dataObject.labels[4],
            y: dataObject.values[4],
          },
        ],
      },
    ],
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={donutOptions}
      containerProps={{ style: { height: "100%", weight: "100%" } }}
    />
  );
};

export default PieChart;
