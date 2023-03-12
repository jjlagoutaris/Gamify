import React from 'react'
import { Container } from 'react-bootstrap'
import { Tasks, Aside } from '../components'
import './Main.scss';

const Main = () => {
  return (
    <Container fluid className='app__flexCenter' id="main-container">
      <Aside />
      <Tasks />
    </Container>
  )
}

export default Main