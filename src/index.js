// exterior libraries
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

// react components
import App from "./components/app";

// redux reducers/middleware
import middleware from "./middleware";
import reducers from "./reducers";

// styles
import "./styles/main.scss";

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
