import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './Tasks.scss';

const Tasks = () => {
  return (
    <Container id="tasks-container" className="app__container" fluid>
      <Row className='tasks-row app__flexColumn app__container'>
        <h2 className="tasks-header app__header-text">All Tasks</h2>
        <ul className="tasks-ul">
          <li className='tasks-label'>Example Task</li>
        </ul>
        <button className='tasks-button'>
          --- Add Task ---
        </button>
      </Row>
    </Container>
  )
}

export default Tasks