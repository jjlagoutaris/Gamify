import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { images } from "../../constants";
import { Task } from "../../models/task";
import Form from "../Form/Form";
import "./Tasks.scss";

const Tasks = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await fetch("/api/tasks", { method: "GET"});
        const tasks = await response.json();
        setTasks(tasks);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadTasks();
  }, []);

  const tasksData = tasks.map(task => 
    <li key={task._id} className="tasks-label">
      <div className="tasks-task-left app__flexCenter">
        <img
          src={task.isCompleted ? images.checkboxFilled : images.unchecked}
          alt="checkbox"
          className="tasks-task-completion"
        />
        <p className="tasks-task-title">{task.title}</p>
      </div>
      <div className="tasks-task-right app__flexCenter">
        <div className="tasks-task-due-date">{task.createdAt}</div>
        <img
          src={images.star}
          alt="important task button"
          className="tasks-task-important"
        />
        <img
          src={images.edit}
          alt="edit task button"
          className="tasks-task-edit"
        />
      </div>
    </li>
  );

  return (
    <Container id="tasks-container" className="app__container" fluid>
      <Row className="tasks-row app__flexColumn app__container">
        <h2 className="tasks-header app__header-text">All Tasks</h2>


        <ul className="tasks-ul">
          {tasksData}
        </ul>
        {/* toggles form component when button is clicked by checking if toggleForm and <Form /> are both true */}
        {toggleForm && <Form />}
        <button
          className="tasks-button"
          onClick={() => setToggleForm(!toggleForm)}
        >
          <img src={images.add} alt="add task" />
        </button>
      </Row>
    </Container>
  );
};

export default Tasks;
