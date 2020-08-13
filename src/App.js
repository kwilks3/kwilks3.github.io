import React, { useState } from "react";

import Navigation from "./components/Navigation";
import Routes from "./Routes";
import Footer from "./components/Footer";
import { AutoProvider } from "./AutoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/grayscale.scss";

function App() {
  const [view, setView] = useState({
    page: "about",
  });
  return (
    <AutoProvider value={[view, setView]}>
      <Navigation />
      <Routes />
      <Footer />
    </AutoProvider>
  );
}

export default App;
