import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import './style.scss';

ReactDOM.createRoot(document.querySelector("body")!).render(
  <React.StrictMode>
     <Header />
  </React.StrictMode>,
);
