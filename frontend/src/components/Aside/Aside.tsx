import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { images } from '../../constants';
import ProjectForm from '../ProjectForm/ProjectForm';
import './Aside.scss';

const Aside = () => {

  const [toggleForm, setToggleForm] = useState(false);

  return (
    <Container id="aside-container" className="app__flexColumn app__container">
      <Row className="aside-tasks">
        <h4 className="app__header-text aside-header">Tasks</h4>
        <ul className="aside-tasks-categories">
          <li className="aside-label-top"><img src={images.allTasks} alt="Important Tasks Icon" />All Tasks</li>
          <li className="aside-label-top"><img src={images.today} alt="Today Tasks Icon" />Today</li>
          <li className="aside-label-top"><img src={images.week} alt="Week Tasks Icon" />The Week Ahead</li>
          <li className="aside-label-top"><img src={images.star} alt="Important Tasks Icon" />Important</li>
        </ul>
      </Row>
      <Row className="aside-projects">        
        <h4 className="app__header-text aside-header">Projects</h4>
        <ul className="aside-projects-categories">
          <li className="aside-label-bottom">
            <div className='aside-label-left'>
              <img src={images.project} alt="Project Icon" />Example Project
            </div>
            <div className='aside-label-right'>
              <img src={images.edit} alt="Edit Task" />
            </div>
          </li>
        </ul>
        {/* toggles form component when button is clicked by checking if toggleForm and <Form /> are both true */}
        {toggleForm && <ProjectForm />}
        <button className='aside-button' onClick={() => setToggleForm(!toggleForm)}>
          <img src={images.add} alt="add" />
        </button>
      </Row>
    </Container>
  )
}

export default Aside