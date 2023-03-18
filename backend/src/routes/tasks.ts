import express from "express";
import { getTasks, createTask, getTask } from "../controllers/tasks";

const router = express.Router();

router.get("/", getTasks);
router.get("/:taskId", getTask);
router.post("/", createTask);

export default router;