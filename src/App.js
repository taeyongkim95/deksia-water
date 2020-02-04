import React from 'react';
import logo from './img/logo.png';
import { Date } from './Date.js';
import './css/App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <img className="deksia-logo" src={logo}></img>
        <h1>WATER LOG</h1>
      </header>

      <Date date="02.03"/>
      <Date date="02.05"/>
      <Date date="02.07"/>
    </div>
  );
}

export default App;
