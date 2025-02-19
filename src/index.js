import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Render aplikasi ke dalam root element di index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
