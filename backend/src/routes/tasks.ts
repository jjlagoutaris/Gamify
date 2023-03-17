import express from "express";
import { getTasks, createTasks, getTask } from "../controllers/tasks";

const router = express.Router();

router.get("/", getTasks);
router.get("/:taskId", getTask);
router.post("/", createTasks);

export default router;