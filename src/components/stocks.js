import { connect } from "react-redux";
import React from "react";

import { getStocks } from "../actions/stocks";

class Stocks extends React.Component {
  render () {
    console.log(this.state);
    const { stocks } = this.props;

    return (
      <div>
        {stocks === undefined ? "Loading" : JSON.stringify(stocks)}
      </div>
    );
  }

  componentDidMount () {
    this.props.dispatch(getStocks());
  }
}

const mapStateToProps = ({ stocks }) => ({ stocks });

export default connect(mapStateToProps)(Stocks);
