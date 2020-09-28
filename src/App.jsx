import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/scss/app.scss';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => setCount(count + 1)} className="class1">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React [{count}]
        </a>
      </header>
    </div>
  );
}

export default App;
