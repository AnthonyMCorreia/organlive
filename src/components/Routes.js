import React from "react";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home">Home</Route>
      <Route path="/contact">contact</Route>
      <Route path="/search">search</Route>
    </Switch>
  );
};

export default Routes;
