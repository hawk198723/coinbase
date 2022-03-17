import NavBar from "./NavBar";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

Highcharts.setOptions({
  colors: ["#058DC7", "#50B432", "#ED561B", "#DDDF00", "#24CBE5"],
});

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

const App = () => (
  <>
    <NavBar />
    <div className="h-full grid-cols-3 gap-4 content-start px-6 pt-6 bg-black rounded-lg shadow-card flex flex-wrap">
      <div className="pt-6 h-full justify-center px-2 py-2 bg-white rounded-lg shadow-card sm:px-6">
        <HighchartsReact
          highcharts={Highcharts}
          options={barOptions}
          containerProps={{ style: { height: "50%", weight: "50%" } }}
        />
      </div>

      <div className="px-2 pt-6 h-xl justify-center  bg-white rounded-lg shadow-card sm:px-6">
        <HighchartsReact
          highcharts={Highcharts}
          options={donutOptions}
          containerProps={{ style: { height: "50%", weight: "50%" } }}
        />
      </div>
    </div>
  </>
);

export default App;
