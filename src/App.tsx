import './App.css';
import { Main } from './template/Main';

function App() {
  return (
    <Main className="pt-32 pl-6">
      <h3 className="text-4xl">Hi! I'm Gabriel</h3>
      <h3 className="text-lg">from Etheric Code 👨‍💻</h3>
      <h2 className="text-xl mt-2">I'm a developer - helping ideas come alive into the world wide web</h2>
      <h2 className="text-lg mt-1">Got an exciting project opportunity? Let's talk!</h2>
      <a href="/cv">
        <button className={`text-lg mt-4 rounded-md p-2 border-2`}>Go to curriculum</button>
      </a>
      {/* <h1 className="font-bold text-2xl">code from the cloud</h1> */}
    </Main>
  );
}

export default App;
