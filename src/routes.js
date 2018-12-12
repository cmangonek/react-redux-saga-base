import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import Main from "./components/Main";
import LandingContainer from "./containers/LandingContainer";

export default (
  <Route component={App}>
    <Route component={Main} name="app" path="/">
      <IndexRoute component={LandingContainer} />
    </Route>
  </Route>
);