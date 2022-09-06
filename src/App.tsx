import { Link } from 'react-router-dom';
import './App.css';
import { Main } from './template/Main';

function App() {
  return (
    <Main className="pt-32 pl-6">
      <h3 className="text-4xl">Hi! I'm Gabriel 👨‍🎨💻</h3>
      {/* <h2 className="text-xl mt-2">I'm a senior developer - helping ideas come alive into the world wide web</h2> */}
      <h2 className="text-xl mt-2">I help companies around the world design and implement software solutions</h2>

      <h2 className="text-xl mt-2">CV and contact details:</h2>
      <Link to="/cv">
        <button className={`text-lg mt-4 rounded-md p-2 border-2`}>Page</button>
        <button className={`ml-3 text-lg mt-4 rounded-md p-2 border-2`}>PDF</button>
      </Link>
      {/* <h1 className="font-bold text-2xl">code from the cloud</h1> */}
    </Main>
  );
}

export default App;
