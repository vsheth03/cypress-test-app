import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showText, setshowText] = useState(false);

  function toggleText() {
    return setshowText(prev => !prev);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <button style={{"width": 100, "height": 20}} onClick={toggleText}>Click me 😊</button>
        {showText ? <h1>I'm a piece of text.</h1> : null}
      </header>
    </div>
  );
}

export default App;
