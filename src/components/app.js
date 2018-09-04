import React from "react";

import Header from "./header";
import Stocks from "./stocks";

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Header />
        <Stocks />
      </div>
    );
  }
}

export default App;
