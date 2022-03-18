import NavBar from "./NavBar";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./App.css";

Highcharts.setOptions({
  colors: ["2563eb", "#4f46e5", "#0891b2", "#67e8f9", "#5eead4"],
});

const dataObject = {
  values: [1.1, 0.8, 0.12, 0.9, 3],
  labels: ["FTM", "XRP", "DOGE", "ADA", "XTZ"],
};

const barOptions = {
  chart: {
    backgroundColor: "black",
    borderRadius: 20,
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
    series: {
      borderRadius: 5,
    },
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
        { y: dataObject.values[0], color: "#2563eb" },
        { y: dataObject.values[1], color: "#4f46e5" },
        { y: dataObject.values[2], color: "#0891b2" },
        { y: dataObject.values[3], color: "#67e8f9" },
        { y: dataObject.values[4], color: "#5eead4" },
      ],
    },
  ],
};

const donutOptions = {
  chart: {
    backgroundColor: "black",
    borderRadius: 20,
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

const graphs = [
  {
    name: "Bar",
    chart: (
      <HighchartsReact
        highcharts={Highcharts}
        options={barOptions}
        containerProps={{ style: { height: "50%", weight: "50%" } }}
      />
    ),
  },
  {
    name: "Pie",
    chart: (
      <HighchartsReact
        highcharts={Highcharts}
        options={donutOptions}
        containerProps={{ style: { height: "50%", weight: "50%" } }}
      />
    ),
  },
];

const App = () => (
  <>
    <NavBar />
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900 justify-center">
        <h1 className="text-center">Crypto Charts</h1>
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {graphs.map((item) => (
          <div
            key={item.name}
            className="px-4 py-5 shadow-card bg-sky-700 shadow-lg rounded-lg overflow-hidden sm:p-6"
          >
            <div className="rounded-lg bg-white p-2">
              <dt className="text-center font-medium text-decoration-line: overline text-xl text-gray-900 truncate">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {item.chart}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
    {/* <div className="h-full grid-cols-3 gap-4 content-start px-6 pt-6 bg-black rounded-lg shadow-card flex flex-wrap">
      <div className="pt-6 h-full justify-center px-2 py-2 bg-white rounded-lg shadow-card sm:px-6">
        <HighchartsReact
          highcharts={Highcharts}
          options={barOptions}
          containerProps={{ style: { height: "100%", weight: "50%" } }}
        />
      </div>

      <div className="px-2 pt-6 h-xl justify-center  bg-white rounded-lg shadow-card sm:px-6">
        <HighchartsReact
          highcharts={Highcharts}
          options={donutOptions}
          containerProps={{ style: { height: "100%", weight: "50%" } }}
        />
      </div>
    </div> */}
  </>
);

export default App;
