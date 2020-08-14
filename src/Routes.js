import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import history from "./history";

export default function Routes() {
  return (
    // switch routes based on path provided by the nav bar
    <Router forceRefresh history={history}>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/" exact component={About} />
      </Switch>
    </Router>
  );
}
