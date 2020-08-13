import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
// const options = {
//   position: positions.BOTTOM_CENTER,
//   timeout: 5000,
//   offset: "30px",
//   transition: transitions.SCALE,
// };
ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
