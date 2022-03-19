import NavBar from "./NavBar";
import React from "react";
import { useState, useEffect } from "react";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import sunburstService from "./services/API";

const App = () => {
  const [Data, setData] = useState({ currency: "", rates: {} });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sunburstService.getSunburstData();
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const xrpValue = 1 / Data.rates.XRP;
  const dogeValue = 1 / Data.rates.DOGE;
  const adaValue = 1 / Data.rates.ADA;
  const xtzValue = 1 / Data.rates.XTZ;
  const usdcValue = 1 / Data.rates.USDC;

  let dataForBar = [usdcValue, xrpValue, dogeValue, adaValue, xtzValue];
  let dataForPie = [usdcValue, xrpValue, dogeValue, adaValue, xtzValue];

  console.log(`USDC price is ${usdcValue} \nXRP price is ${xrpValue} \nDOGE price is ${dogeValue} \nADA price is ${adaValue} \nXTZ price is ${xtzValue}
  `);

  const graphs = [
    {
      name: "This is my Bar Chart",
      chart: <BarChart data={dataForBar} />,
    },
    {
      name: "This is my Pizza Chart",
      chart: <PieChart data={dataForPie} />,
    },
  ];

  return (
    <div>
      <NavBar />
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900 justify-center">
          Welcome to Taiwan Coinbase, Apearmy!
        </h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {graphs.map((item) => (
            <div
              key={item.name}
              className="px-4 py-5 shadow-card bg-blue-900 shadow rounded-lg overflow-hidden sm:p-6"
            >
              <dt className="text-sm font-medium text-yellow-500 truncate">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 ">
                {item.chart}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default App;
