import logo from './logo.svg';
import './App.css';

import { LambdaDemo } from "./components/lambda-demo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
        
        <LambdaDemo />

      </header>
    </div>
  );
}

export {App}; // export default App;