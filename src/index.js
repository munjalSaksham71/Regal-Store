import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import CombineContext from "./context/combine-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CombineContext>
        <App />
      </CombineContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
