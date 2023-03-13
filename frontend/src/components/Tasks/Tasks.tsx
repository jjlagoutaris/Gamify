import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { images } from '../../constants';
import './Tasks.scss';

const Tasks = () => {
  return (
    <Container id="tasks-container" className="app__container" fluid>
      <Row className='tasks-row app__flexColumn app__container'>
        <h2 className="tasks-header app__header-text">All Tasks</h2>
        <ul className="tasks-ul">
          <li className='tasks-label'>
            <div className="tasks-task-left">
              <div className="tasks-task-completion"></div>
              <p className="tasks-task-title">Task Title</p>
            </div>
            <div className="tasks-task-right">
              <div className="tasks-task-due-date">Due: 05/46/23</div>
              <img src={images.star} alt="important task button" className="tasks-task-important" />
              <img src={images.edit} alt="edit task button" className='tasks-task-edit' />
            </div>
          </li>
        </ul>
        <button className='tasks-button'>
          <img src={images.add} alt="add task" />
        </button>
      </Row>
    </Container>
  )
}

export default Tasks