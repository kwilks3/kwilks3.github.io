import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import history from "./history";

import Navigation from "./components/Navigation";
import { Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/grayscale.scss";

function App() {
  return (
    <>
      <Navigation />
      <Router forceRefresh history={history}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/" exact component={About} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
