import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "./pages/Events";
import Schedule from "./pages/Schedule";
import Teams from "./pages/Teams";
import Layout from "./components/Layout";
import ThreadCreator from "./pages/ThreadCreator";

function App() {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  );
}

export default App;
