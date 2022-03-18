const API_URL = "https://api.coinbase.com/v2/exchange-rates";
const getSunburstData = () => {
  return fetch(API_URL, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // `data` is the parsed version of the JSON returned from the above endpoint.
      return data;
    });
};
const sunburstService = {
    getSunburstData
};
export default sunburstService;