import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import tasksRoutes from './routes/tasks';

const app = express();

app.use("/api/tasks", tasksRoutes);

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