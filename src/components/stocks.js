import { connect } from "react-redux";
import React from "react";

import { getStocks } from "../actions/stocks";
import StocksControl from "./stocksControl";

class Stocks extends React.Component {
  render () {
    const { stocks } = this.props;

    return (
      <div>
        <div className="title">Stocks</div>
        <StocksControl maxDate={10} minDate={0} />
        {/* {stocks === undefined ? "Loading" : this.getStockOutput(stocks)} */}
      </div>
    );
  }

  componentDidMount () {
    this.props.dispatch(getStocks());
  }

  getStockOutput = stocks => Object.keys(stocks).map(ticker => {
    return (
      <div>
        <h2>{ticker}</h2>
        <ul>
        {
          stocks[ticker].map(stats => (
            <li>
              <b>{stats.date}</b>: {stats.close}
            </li>
          ))
        }
        </ul>
      </div>
    );
  });
}

const mapStateToProps = ({ stocks }) => ({ stocks });

export default connect(mapStateToProps)(Stocks);
