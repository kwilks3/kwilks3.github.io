import React, { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { AutoProvider } from "./AutoContext";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [view, setView] = useState({
    page: "about",
  });
  return (
    <AutoProvider value={[view, setView]}>
      {view.page === "about" ? (
        <About />
      ) : view.page === "Projects" ? (
        <Projects />
      ) : (
        <Contact />
      )}
    </AutoProvider>
  );
}

export default App;
