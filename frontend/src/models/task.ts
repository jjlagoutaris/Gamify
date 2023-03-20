export interface Task {
  _id: string;
  title: string;
  text?: string;
  isCompleted: boolean;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}
