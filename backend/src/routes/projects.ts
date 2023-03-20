import express from "express";
import { getProjects, createProject, getProject, updateProject, deleteProject } from "../controllers/projects";

const router = express.Router();

router.get("/", getProjects);
router.get("/:projectId", getProject);
router.post("/", createProject);
router.patch("/:projectId", updateProject);
router.delete("/:projectId", deleteProject);

export default router;