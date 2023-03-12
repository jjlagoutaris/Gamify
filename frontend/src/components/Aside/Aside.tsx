import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { images } from '../../constants';
import './Aside.scss';

const Aside = () => {
  return (
    <Container id="aside-container" className="app__flexColumn app__container">
      <Row className="aside-tasks">
        <h4 className="app__header-text aside-header">Tasks</h4>
        <ul className="aside-tasks-categories">
          <li className="aside-label">All T@sks</li>
          <li className="aside-label">T0day</li>
          <li className="aside-label">Next 7 Day$</li>
          <li className="aside-label">!mportant</li>
        </ul>
      </Row>
      <Row className="aside-projects">        
        <h4 className="app__header-text aside-header">Projects</h4>
        {/* <ul className="aside-projects-categories">
          <li className="aside-label">Project</li>
        </ul> */}
        <Button className='aside-button aside-label'>
          Add Project
        </Button>

      </Row>
      <Row className='app__flexColumn'>

      </Row>
    </Container>
  )
}

export default Aside