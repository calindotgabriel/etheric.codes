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

import axios from 'axios';

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

const TOKEN = 'AQUso2pzZRZQPS_Xy8d756uwgbURGrTd699Z9Bavbim_kczhueg-DLulkx5qjBUNgqRaJ4O_G5N861MGx5OvW1u0H2sIr5E4iDKCXb5uck0urTh9GgI4VrHS3ENx1NQrnPPQSBt4VJke1_sBRtpW1AmkCVQQdjeh2tlE_XknbDl3WR-EDveRHpMa8CuSF3MATHvvvfqkUj-n6OZW74dh-sWJWuunju7K-cJ60GHW7KV1c9mCHWYFEgo5ZKuOcmOiea-4eDRyt5TeRAvfEAijmXB2u0Ewt_HXZB4VWuiKkpFHTZTg7AOQgnNbfoYb_NvoU6OEs4UBC2eNlhYmoHnUrNxMYN56PA'

const fetchData = async () => {
  try {
    const response = await axios.get('https://api.linkedin.com/v2/me', {
      headers: {
        Authorization: 'Bearer ' + TOKEN,
        'Content-Type': 'application/json',
      },
    });

    // Process the response data as per your requirements
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchData()



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
