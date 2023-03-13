import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { images } from '../../constants';
import Form from '../Form/Form';
import './Tasks.scss';

const Tasks = () => {

  const [toggleForm, setToggleForm] = useState(false);

  return (
    <Container id="tasks-container" className="app__container" fluid>
      <Row className='tasks-row app__flexColumn app__container'>
        <h2 className="tasks-header app__header-text">All Tasks</h2>
        <ul className="tasks-ul">
          <li className='tasks-label'>
            <div className="tasks-task-left app__flexCenter">
              <img src={images.checkbox} alt="checkbox"  className="tasks-task-completion" />
              <p className="tasks-task-title">Task Title</p>
            </div>
            <div className="tasks-task-right app__flexCenter">
              <div className="tasks-task-due-date">Due: 05/46/23</div>
              <img src={images.star} alt="important task button" className="tasks-task-important" />
              <img src={images.edit} alt="edit task button" className='tasks-task-edit' />
            </div>
          </li>
        </ul>
        {toggleForm && (<Form/>)}
        <button className='tasks-button' onClick={() => setToggleForm(!toggleForm)}>
          <img src={images.add} alt="add task" />
        </button>
      </Row>
    </Container>
  )
}

export default Tasks