import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import history from "./history";

export default function Routes() {
  return (
    // switch routes based on path provided by the nav bar
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
      </Switch>
    </Router>
  );
}
