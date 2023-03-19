export interface Task{
  _id: string,
  title: string,
  text?: string,
  isCompleted: boolean,
  createdAt: string,
  updatedAt: string,
}