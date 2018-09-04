import { fetchStocks } from "../apis/stocks.js";

export const SET_STOCKS = "SET_STOCKS";

export const getStocks = () => dispatch => fetchStocks().then(data => {
  dispatch(setStocks(data));
});

const setStocks = stocks => ({
  type: SET_STOCKS,
  payload: {
    stocks,
  }
});
