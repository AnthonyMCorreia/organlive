import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Homepage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/contact">contact</Route>
      <Route path="/search">search</Route>
    </Switch>
  );
};

export default Routes;
