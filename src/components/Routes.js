import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "./Homepage";
import Library from "./Library/Library";
import LibraryItem from "./Library/LibraryItem";

const Routes = () => {
  const routeHandler = (params) => {
    console.log(params);
  };

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/contact">
        contact
      </Route>
      <Route exact path="/library">
        <Library />
      </Route>
      <Route exact path="/:type/:name" onEnter={routeHandler}>
        <LibraryItem />
      </Route>
      <Route exact path="nowPlaying">
        now Playing
      </Route>
    </Switch>
  );
};

export default Routes;
