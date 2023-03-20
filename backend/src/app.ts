import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import tasksRoutes from './routes/tasks';
import projectsRoutes from './routes/projects';
import morgan from "morgan";
import createHttpError, {isHttpError} from "http-errors";

// creates express app
const app = express();

app.use(morgan("dev"));

// sets up express app to work with json
app.use(express.json());

// sets up routing
app.use("/api/tasks", tasksRoutes);
app.use("/api/projects", projectsRoutes);

// forward 404 to error handler
app.use((req, res, next) => {
  next(createHttpError(404, Error("Endpoint not found")));
});

// error handler middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;
  // checks if error is an HttpError type we defined above; if so, update status code and errorMessage
  if (isHttpError(error)){
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default app;