import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// pastikan index.html punya elemen <div id="root"></div>
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
