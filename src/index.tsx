import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import CurriculumVitaeComponent from "./view/CVComponent";
import { Helmet } from "react-helmet";

const dom = (
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Calin Gabriel - Etheric Code</title>
      <link rel="canonical" href="http://etheric.codes" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/> 
      <link rel="preconnect" href="https://fonts.gstatic.com"/> 
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
    </Helmet>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/cv" element={<CurriculumVitaeComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(dom, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
