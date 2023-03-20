import React from "react";
import { Button, Form as FormTag, Modal } from "react-bootstrap";
import { Task } from "../../models/task";
import "./TaskForm.scss";
import { TaskInput } from "../../server/tasks.api";
import * as TasksApi from "../../server/tasks.api";
import { useForm } from "react-hook-form";

interface AddTaskProps {
  taskToEdit?: Task,
  onDismiss: () => void,
  onTaskSaved: (task: Task) => void;
}

const TaskForm = ({ taskToEdit, onDismiss, onTaskSaved }: AddTaskProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TaskInput>({
    defaultValues: {
      title: taskToEdit?.title || "",
      text: taskToEdit?.text || "",
      isCompleted: taskToEdit?.isCompleted || false,
      dueDate: taskToEdit?.dueDate || undefined,
    }
  });

  async function onSubmit(input: TaskInput) {
    try {
      let taskResponse: Task;
      if(taskToEdit){
        taskResponse = await TasksApi.updateTask(taskToEdit._id, input);
      } else{
        taskResponse = await TasksApi.createTask(input);
      }
      onTaskSaved(taskResponse);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <Modal show onHide={onDismiss} centered size="lg" className="modal">
      <Modal.Header closeButton>
          <Modal.Title>
              {taskToEdit ? "Edit task" : "Add task"}
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
              className="form-control"
              type="datetime-local"
              {...register("dueDate", { required: "Required" })}
            />
          </FormTag.Group>
          <FormTag.Group className="mb-2" controlId="formBasicCheckbox">
            <FormTag.Check type="checkbox" label="Complete?" {...register("isCompleted")}/>
          </FormTag.Group>
        </FormTag>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" className="w-25 mx-auto" form="addTaskForm" disabled={isSubmitting}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>

  );
};

export default TaskForm;
