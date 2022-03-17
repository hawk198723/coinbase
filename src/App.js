import NavBar from "./NavBar";
import React from "react";
import {useState} from 'react';
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";

// Highcharts.setOptions({
//   colors: ["#058DC7", "#50B432", "#ED561B", "#DDDF00", "#24CBE5"],
// });

const dataObject = {
  values: [1.1, 0.8, 0.12, 0.9, 3],
  labels: ["FTM", "XRP", "DOGE", "ADA", "XTZ"],
};



const App = () => {
  const [Data, setData] = useState(null);

  return( 
    <>
      <NavBar />
      <div className="flex w-full m-2 border-2 h-screen border-x-cyan-900">
        <div className="w-1/2 m-2 border-2 h-screen border-cyan-500">
          <BarChart/>
        </div>
        <div className="w-1/2 m-2 border-2 h-screen border-cyan-500">
          <PieChart/>
        </div>
      </div>
      {/* <Contacts /> */}
    </>
  );
};

export default App;
