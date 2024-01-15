import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Main from './main'
import './style.scss';
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.querySelector("body")!).render(
  <React.StrictMode>
    <BrowserRouter>
     <Header />
     <Main />
     </BrowserRouter>
  </React.StrictMode>,
);
