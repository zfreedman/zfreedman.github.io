"use strict";
import React from "react";
import ReactDOM from "react-dom";

require("./index.css");
import "font-awesome/css/font-awesome.min.css";

import BottomBar from "./components/bottomBar";
import Centerpiece from "./components/centerpiece";

// import Centerpiece from "./components/centerpiece";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Centerpiece />
        <BottomBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
