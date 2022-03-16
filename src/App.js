// import './App.css';
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'


// const dataObject = {
//   values: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//   previousValues: [21.5, 171.5, 156.4, 29.2, 44.0, 96.0, 112.6, 156.5, 106.4, 124.1, 105.6, 84.4],
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] 
// }

// const options = {
//   chart: {
//     type: "areaspline",
//     height: 0,
//     spacingLeft: 100,
//     spacingRight: 100,
//     backgroundColor: "transparent"
//   },
//   title: {
//     text: 'Sales Data',
//     style: {
//       color: 'Orange',
//       fontWeight: 'bold',
//       fontSize:'30px'
//     }
//   },
//   subtitle: {
//     text: '- Only 2021 -'
// },
//   series: [{
    
//     data: dataObject.values
//     }, {
//         data: dataObject.previousValues
//   }],
//   xAxis: {
//     type: "category",
//     categories: dataObject.labels,
//     labels: {
//       align: "center"
//     }
//   },
//   yAxis: {
//     offset: -10,
    
//     labels: {
//       align: "center"
//     },
//     title: {
//       text: undefined
//     }
//   },
//   tooltip: {
//     backgroundColor: "lightgreen",
//     borderRadius: 15,
//     borderWidth: 0,
//     style: {
//       fontSize: "60px"
//     }
//   },
// }

// const App = () => <div>
//   <HighchartsReact
//     highcharts={Highcharts}
//     options={options}
//   />
// </div>

// export default App;
import "./App.css";

import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

Highcharts.setOptions({
  colors: ["#058DC7", "#50B432", "#ED561B", "#DDDF00", "#24CBE5"],
});

const dataObject = {
    values: [1.1, 0.8, 0.12, 0.9, 3],
    labels: ['FTM', 'XRP', 'DOGE', 'ADA', 'XTZ'] 
  }

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
      type: 'bar',
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
        }
      ],
    },
  ],
};

const App = () => (
  <div className="flex w-full m-2 border-2 h-screen border-x-cyan-900">
    <div className="w-1/2 m-2 border-2 h-screen border-cyan-500">
      <HighchartsReact
        highcharts={Highcharts}
        options={barOptions}
        containerProps={{ style: { height: "100%", weight: "100%" } }}
      />
    </div>
    <div className="w-1/2 m-2 border-2 h-screen border-cyan-500">
      <HighchartsReact
        highcharts={Highcharts}
        options={donutOptions}
        containerProps={{ style: { height: "100%", weight: "100%" } }}
      />
    </div>
  </div>
);

export default App;