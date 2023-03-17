import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import TaskModel from './models/task';

const app = express();

app.get("/", async (req, res, next) => {
  try {
    const tasks = await TaskModel.find().exec();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }

});

// forward to error handler if endpoint is not found
app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});

// error handler middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});

export default app;