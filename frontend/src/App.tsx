import React from 'react';
import './App.scss';
import { images } from './constants';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className='app__hi'>
      <img src={images.cookie} className="App-logo" alt="cookie" />
    </Container>
  );
}

export default App;
