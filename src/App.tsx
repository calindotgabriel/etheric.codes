import { Link } from 'react-router-dom';
import './App.css';
import { Main } from './template/Main';

function App() {
  return (
    <Main className="pt-32 pl-6 pl-16">
      <h3 className="text-6xl">Hi! I'm Gabriel </h3>
      <h3 className="text-8xl mb-2 mt-2">👨‍🎨💻</h3>
      {/* <h2 className="text-xl mt-2">I'm a senior developer - helping ideas come alive into the world wide web</h2> */}
      <h2 className="text-2xl mt-4">I help companies around the world design and implement <br /> clean and scalable software solutions</h2>

      {/* <h2 className="text-xl mt-2">CV and contact details:</h2> */}
      <Link to="/cv">
        <button className={`text-2xl mt-4 rounded-md p-2 border-2`}>CV & contact details</button>
      </Link>
      {/* <h1 className="font-bold text-2xl">code from the cloud</h1> */}
    </Main>
  );
}

export default App;
