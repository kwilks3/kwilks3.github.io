import React, { useState } from "react";

import Navigation from "./components/Navigation";
import Routes from "./Routes";

import { AutoProvider } from "./AutoContext";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [view, setView] = useState({
    page: "about",
  });
  return (
    <AutoProvider value={[view, setView]}>
      <Navigation />
      <Routes />
    </AutoProvider>
  );
}

export default App;
