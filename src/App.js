import React from "react";

import Navigation from "./components/Navigation";
import Routes from "./Routes";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/grayscale.scss";

function App() {
  return (
    <>
      <Navigation />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
