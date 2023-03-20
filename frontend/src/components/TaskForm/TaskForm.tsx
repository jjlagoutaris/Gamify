import React from "react";
import { Button, Form as FormTag } from "react-bootstrap";
import { Task } from "../../models/task";
import "./TaskForm.scss";
import { TaskInput } from "../../server/tasks.api";
import * as TasksApi from "../../server/tasks.api";
import { useForm } from "react-hook-form";

interface AddTaskProps {
  onTaskSaved: (task: Task) => void;
}

const TaskForm = ({ onTaskSaved }: AddTaskProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TaskInput>();

  async function onSubmit(input: TaskInput) {
    try {
      const taskResponse = await TasksApi.createTask(input);
      onTaskSaved(taskResponse);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <FormTag
      id="addTaskForm"
      className="app__flexColumn"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormTag.Group className="mb-2 w-100" controlId="formTitle">
        <FormTag.Label>Title</FormTag.Label>
        <FormTag.Control
          type="text"
          placeholder="Enter title"
          isInvalid={!!errors.title}
          {...register("title", { required: "Required" })}
        />
        <FormTag.Control.Feedback type="invalid">
          {errors.title?.message}
        </FormTag.Control.Feedback>
      </FormTag.Group>

      <FormTag.Group className="mb-2 w-100" controlId="formText">
        <FormTag.Label>Description (optional)</FormTag.Label>
        <FormTag.Control
          as="textarea"
          rows={2}
          placeholder="Description"
          {...register("text")}
        />
      </FormTag.Group>
      <FormTag.Group className="mb-2 w-100" controlId="formDate">
        <label>Due Date</label>
        <input
          id="startDate"
          className="form-control"
          type="datetime-local"
          {...register("dueDate", { required: "Required" })}
        />
      </FormTag.Group>
      <FormTag.Group className="mb-2" controlId="formBasicCheckbox">
        <FormTag.Check type="checkbox" label="Complete?" {...register("isCompleted")}/>
      </FormTag.Group>
      <Button variant="primary" type="submit" className="w-25" form="addTaskForm" disabled={isSubmitting}>
        Save
      </Button>
    </FormTag>
  );
};

export default TaskForm;
