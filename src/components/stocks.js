import { connect } from "react-redux";
import React from "react";

import { getStocks } from "../actions/stocks";

class Stocks extends React.Component {
  render () {
    console.log(this.state);
    const { stocks } = this.props;

    return (
      <div>
        {stocks === undefined ? "Loading" : this.getStockOutput(stocks)}
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
