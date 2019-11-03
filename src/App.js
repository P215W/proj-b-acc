import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const x = (a) => {
    return a + a; // 6 or 8
  }
  const y = 5;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { x( (y === 4 && 3) || 4 ) } 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and Marc auf Branch2. Hier ist Master.
        </a>
        <p>Der yweite Paragraph *das Feature* ist neu dazugeommen in branch2.</p>
      </header>
    </div>
  );
}

export default App;
