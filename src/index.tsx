import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Main from './main'
import './style.scss';

ReactDOM.createRoot(document.querySelector("body")!).render(
  <React.StrictMode>
     <Header />
     <Main />
  </React.StrictMode>,
);
