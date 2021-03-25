import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "./Homepage";
import Search from "./Search";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/contact">
        contact
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="nowPlaying">
        now Playing
      </Route>
    </Switch>
  );
};

export default Routes;
