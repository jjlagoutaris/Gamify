import React from 'react'
import { Container } from 'react-bootstrap'
import { Tasks, Aside } from '../components'

const Main = () => {
  return (
    <Container fluid className='app__flexCenter'>
      <Aside />
      <Tasks />
    </Container>
  )
}

export default Main