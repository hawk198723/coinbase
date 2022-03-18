import NavBar from "./NavBar";
import React from "react";
import {useState,useEffect} from 'react';
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import sunburstService from "./services/API";

// Highcharts.setOptions({
//   colors: ["#058DC7", "#50B432", "#ED561B", "#DDDF00", "#24CBE5"],
// });

const App = () => {
  const [Data, setData] = useState(null);

  const graphs = [
    { name: 'Bar', chart:  <BarChart/> },
    { name: 'Pie', chart:  <PieChart/> },
  ]
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sunburstService.getSunburstData();
        setData(response.data);
        // setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  console.log(sunburstService.getSunburstData());
  
  return( 
    <>
      <NavBar />
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 justify-center">Crypto Charts</h3>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {graphs.map((item) => (
              <div key={item.name} className="px-4 py-5 shadow-card bg-red-700 shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-sm font-medium text-yellow-500 truncate">{item.name}</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.chart}</dd>
              </div>
            ))}
          </dl>
        </div>
      {/* <Contacts /> */}
    </>
  );
};

export default App;
