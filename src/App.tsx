import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import { Main } from './template/Main';

import React, { useEffect } from "react";

type AppProps = {

}

export const App : React.FC<AppProps> = ({}) => {
    return (
      <Main className="pt-32 pl-6">
      <h3 className="text-4xl">Hi! I'm Gabriel</h3>
      <h2 className="text-xl mt-2">I'm a developer - helping ideas come alive into the world wide web</h2>
      <h2 className="text-lg mt-1">Got an exciting project opportunity? Let's talk!</h2>
      <Link to="/cv">
        <button className={`text-lg mt-4 rounded-md p-2 border-2`}>Go to curriculum</button>
      </Link>
      <Link to="/CalinGabriel.pdf" target="_blank" download>
        <button className={`ml-3 text-lg mt-4 rounded-md p-2 border-2`}>PDF</button>
      </Link>
    </Main>
  );
}

export default App;