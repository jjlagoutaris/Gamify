import React from 'react'
import { images } from '../../constants'
import { Task as TaskModel } from '../../models/task'
import { formatDate } from '../../utilities/formatDate'

interface TaskProps{
  task: TaskModel,
}

const Task = ({ task }: TaskProps) => {

  return (
    <li className="tasks-label">
    <div className="tasks-task-left app__flexCenter">
      <img
        src={task.isCompleted ? images.checked : images.unchecked}
        alt="checkbox"
        className="tasks-task-completion"
      />
      <p className="tasks-task-title">{task.title}</p>
    </div>
    <div className="tasks-task-right app__flexCenter">
      <div className="tasks-task-due-date">Due: {formatDate(task.dueDate)}</div>
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
  )
}

export default Task