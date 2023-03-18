import express from "express";
import { getTasks, createTask, getTask, updateTask, deleteTask } from "../controllers/tasks";

const router = express.Router();

router.get("/", getTasks);
router.get("/:taskId", getTask);
router.post("/", createTask);
router.patch("/:taskId", updateTask);
router.delete("/:taskId", deleteTask);

export default router;