import React from 'react';
import './App.scss';
import { images } from './constants';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer/Footer';

function App() {
  return(
    <Footer />
  )
    // <Container fluid className='app__flexColumn'>
    //   <img src={images.cookie} className="app__logo" alt="cookie" />
    // </Container>
}

export default App;
