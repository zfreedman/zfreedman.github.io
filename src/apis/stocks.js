import axios from "axios";

const url = "https://api.iextrading.com/1.0/stock/market/batch?symbols="
  + "aapl,fb,tsla&types=quote,news,chart&range=1m&last=5";
// const url = "https://api.iextrading.com/1.0/stock/market/batch?symbols="
//   + "tsla&types=quote,news,chart&range=1m&last=5";

export const fetchStocks = () => {
  return axios.get(url).then(({ data }) => {
    const result = {};

    for (let k in data) {
      result[k] = data[k].chart;
    }

    return result;
  });
};
