"use strict";
import React from "react";
import ReactDOM from "react-dom";
require("./index.css");

// import Centerpiece from "./components/centerpiece";

class App extends React.Component {
  render() {
    return (
      <div className="centerpiece">
        Zach Freedman
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
