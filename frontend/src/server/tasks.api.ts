import { Task } from "../models/task";

// wrapper function to catch errors and throw them back up
async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMesage = errorBody.error();
    throw Error(errorMesage);
  }
}

export async function fetchTasks(): Promise<Task[]> {
  const response = await fetchData("/api/tasks/", { method: "GET" });
  return response.json();
}

export interface TaskInput {
  title: string;
  text?: string;
  dueDate: string;
  isCompleted: boolean;
}

export async function createTask(task: TaskInput): Promise<Task> {
  const response = await fetchData("/api/tasks/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
}

export async function updateTask(
  taskId: string,
  task: TaskInput
): Promise<Task> {
  const response = await fetchData(`api/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
}

export async function deleteTask(taskId: string) {
  await fetchData("/api/tasks/" + taskId, { method: "DELETE" });
}
