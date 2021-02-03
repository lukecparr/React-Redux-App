import React from 'react';
import Quotes from './components/Quotes'
import ron from './assets/ron-swanson.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={ron} alt="Portrait of Ron Swanson"/>
      <h1>Ron Swanson says...</h1>
      <Quotes />
    </div>
  );
}

export default App;
