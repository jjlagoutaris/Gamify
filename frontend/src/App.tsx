import React from 'react';
import './App.scss';
import { images } from './constants';

function App() {
  return (
    <div className="App">
      <img src={images.cookie} className="App-logo" alt="cookie" />
    </div>
  );
}

export default App;
