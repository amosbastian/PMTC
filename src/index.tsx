import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import CssBaseline from "@material-ui/core/CssBaseline";

import "typeface-roboto";
import Providers from "./Providers";

ReactDOM.render(
  <Providers>
    <CssBaseline />
    <App />
  </Providers>,
  document.getElementById("root"),
);
