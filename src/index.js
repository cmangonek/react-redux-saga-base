import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import routes from "./routes";
import { Router } from "react-router";
import { history, store } from "./store";
import "./styles/index.scss";
import "./styles/style.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router
      onUpdate={() => window.scrollTo(0, 0)}
      children={routes}
      history={history}
    />
  </Provider>,
  document.querySelector("#root")
);