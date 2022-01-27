import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CurriculumVitaeComponent from './view/CVComponent';
import {Helmet} from "react-helmet";


ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Calin Gabriel - Etheric Code</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/cv" element={<CurriculumVitaeComponent />}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
