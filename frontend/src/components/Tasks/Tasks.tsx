import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { images } from "../../constants";
import { Task as TaskModel } from "../../models/task";
import Form from "../Form/Form";
import Task from "../Task/Task";
import "./Tasks.scss";

const Tasks = () => {

  const [tasks, setTasks] = useState<TaskModel[]>([]);
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

  return (
    <Container id="tasks-container" className="app__container" fluid>
      <Row className="tasks-row app__flexColumn app__container">
        <h2 className="tasks-header app__header-text">All Tasks</h2>


        <ul className="tasks-ul">
        {tasks.map(task => 
          <Task task={task} key={task._id} />
        )}
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
