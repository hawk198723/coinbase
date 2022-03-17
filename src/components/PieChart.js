import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const dataObject = {
    values: [1.1, 0.8, 0.12, 0.9, 3],
    labels: ["FTM", "XRP", "DOGE", "ADA", "XTZ"],
  };  
const donutOptions = {
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
        name: "Month",
        colorByPoint: true,
        data: [
          {
            name: dataObject.labels[0],
            y: dataObject.values[0],
            sliced: true,
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

const PieChart = () => {
  return (
    <HighchartsReact
            highcharts={Highcharts}
            options={donutOptions}
            containerProps={{ style: { height: "100%", weight: "100%" } }}
          />
  )
}

export default PieChart