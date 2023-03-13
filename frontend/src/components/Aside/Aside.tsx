import React from 'react'
import { Container, Row } from 'react-bootstrap';
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
        <ul className="aside-tasks-categories">
          <li className="aside-label">All T@sks</li>
          <li className="aside-label">T0day</li>
          <li className="aside-label">Next 7 Day$</li>
          <li className="aside-label">!mportant</li>
        </ul>
        <button className='aside-button'>
          Add Task
        </button>
      </Row>
    </Container>
  )
}

export default Aside