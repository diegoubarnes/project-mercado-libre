const BASE_URL = 'http://localhost:3001/api';

const delay = ms => new Promise (resolve => setTimeout (resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor (Math.random () * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay (randomNumber (min, max));

async function callApi (endpoint) {
  await simulateNetworkLatency ();

  const optionsHeaders = {
    'Access-Control-Allow-Origin': 'http://localhost:3001',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch (url, {mode: 'cors', headers: optionsHeaders});
  const data = await response.json ();

  return data;
}

const api = {
  Search: {
    searchItems(Query) {
      return callApi(`/search?q=${Query}`);
    },
    searchItemDescription(SearchId) {
      return callApi(`/items/${SearchId}`);
    },
  },
};


export default api;