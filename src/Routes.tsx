import React from "react";
import { Switch, Route } from "react-router-dom";
import Events from "./pages/Events";
import Teams from "./pages/Teams";
import Schedule from "./pages/Schedule";
import ThreadCreator from "./pages/ThreadCreator";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/events">
        <Events />
      </Route>
      <Route path="/teams">
        <Teams />
      </Route>
      <Route path="/schedule">
        <Schedule />
      </Route>
      <Route path="/">
        <ThreadCreator />
      </Route>
    </Switch>
  );
};

export default Routes;
