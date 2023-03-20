import createHttpError from 'http-errors';
import { RequestHandler } from "express";
import ProjectModel from "../models/project";
import mongoose from 'mongoose';

export const getProjects: RequestHandler = async (req, res, next) => {
  try {
    const projects = await ProjectModel.find().exec();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
}

export const getProject: RequestHandler = async(req, res, next) => {
  const projectId = req.params.projectId;
  try {
    if(!mongoose.isValidObjectId(projectId)){
      throw createHttpError(400, "Invalid project id");
    }

    const project = await ProjectModel.findById(projectId).exec();

    if(!project){
      throw createHttpError(404, "Project not found");
    }

    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
}

// define types for request
interface CreateProjectBody{
  title?: string,
}

export const createProject: RequestHandler<unknown, unknown, CreateProjectBody, unknown> = async(req, res, next) => {
  const title = req.body.title;

  try {
    // if user doesn't enter a title
    if(!title){
      throw createHttpError(400, "Projects need a title.");
    }
    const newProject = await ProjectModel.create({
      title: title,
    });

    res.status(201).json(newProject);
  } catch (error) {
    next(error);
  }
};

interface UpdateProjectParams{
  projectId: string,
}

interface UpdateProjectBody{
  title?: string,
}


export const updateProject: RequestHandler<UpdateProjectParams, unknown, UpdateProjectBody, unknown> = async(req, res, next) => {
  const projectId = req.params.projectId;
  const newTitle = req.body.title;
  try {
    if(!mongoose.isValidObjectId(projectId)){
      throw createHttpError(400, "Invalid project id");
    }

    if(!newTitle){
      throw createHttpError(400, "Projects need a title.");
    }

    const project = await ProjectModel.findById(projectId).exec();

    if(!project){
      throw createHttpError(404, "Project not found");
    }


    project.title = newTitle;

    const updatedProject = await project.save();

    res.status(200).json(updatedProject);
  } catch (error) {
    next(error);
  }
}


export const deleteProject: RequestHandler = async(req, res, next) => {
  const projectId = req.params.projectId;
  try {
    if(!mongoose.isValidObjectId(projectId)){
      throw createHttpError(400, "Invalid project id");
    }
    const project = await ProjectModel.findById(projectId).exec();

    if(!project){
      throw createHttpError(404, "Project not found");
    }

    await project.deleteOne();

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}