import React from 'react'
import "./Footer.scss";
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Container className="app__footer app__flexColumn app__normal-text app__container" fluid>
        <p className="app__footer-top">
        © Copyright John Lagoutaris. All Rights Reserved.
        </p>
        <p className="app__footer-bottom">
          Website by <a href="https://johnlagoutaris.netlify.app/" target="_blank" rel="noreferrer" className='app__footer-name'>John Lagoutaris</a>
        </p>
      </Container>
    </>
  )
}

export default Footer