import { Link } from 'react-router-dom';
import './App.css';
import { Main } from './template/Main';
import axios from 'axios';
import { useEffect } from 'react';
import cv from './data/cv';

const TOKEN = 'AQUso2pzZRZQPS_Xy8d756uwgbURGrTd699Z9Bavbim_kczhueg-DLulkx5qjBUNgqRaJ4O_G5N861MGx5OvW1u0H2sIr5E4iDKCXb5uck0urTh9GgI4VrHS3ENx1NQrnPPQSBt4VJke1_sBRtpW1AmkCVQQdjeh2tlE_XknbDl3WR-EDveRHpMa8CuSF3MATHvvvfqkUj-n6OZW74dh-sWJWuunju7K-cJ60GHW7KV1c9mCHWYFEgo5ZKuOcmOiea-4eDRyt5TeRAvfEAijmXB2u0Ewt_HXZB4VWuiKkpFHTZTg7AOQgnNbfoYb_NvoU6OEs4UBC2eNlhYmoHnUrNxMYN56PA'

function App() {
  useEffect(() => {
    fetchData();
  }, []);

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

        // todo make colors like theme 

  return (
    <Main className="pt-32 pl-6 pl-16">
      <h3 className="text-6xl">Hi! I'm Gabriel </h3>
      <h3 className="text-8xl mb-2 mt-2">👨‍🎨💻</h3>
      {/* <h2 className="text-xl mt-2">I'm a senior developer - helping ideas come alive into the world wide web</h2> */}
      <h2 className="text-2xl mt-4 break-words w-1/2 whitespace-normal">{cv.description}</h2>

      {/* <h2 className="text-xl mt-2">CV and contact details:</h2> */}
      <Link to="/cv">
        <button className={`text-2xl mt-4 rounded-md p-2 border-2 border-solid px-4 py-2 text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-gray-800 hover:border-gray-800 transition-colors duration-300 `}>CV & contact details</button>
      </Link>
      {/* <h1 className="font-bold text-2xl">code from the cloud</h1> */}
    </Main>
  );
}

export default App;
