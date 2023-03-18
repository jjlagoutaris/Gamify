import createHttpError from 'http-errors';
import { RequestHandler } from "express";
import TaskModel from "../models/task";
import mongoose from 'mongoose';

export const getTasks: RequestHandler = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find().exec();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
}

export const getTask: RequestHandler = async(req, res, next) => {
  const taskId = req.params.taskId;
  try {
    if(!mongoose.isValidObjectId(taskId)){
      throw createHttpError(400, "Invalid task id");
    }

    const task = await TaskModel.findById(taskId).exec();

    if(!task){
      throw createHttpError(404, "Task not found");
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
}

// define types for request
interface CreateTaskBody{
  title?: string,
  text?: string,
  isCompleted?: boolean,
}

export const createTask: RequestHandler<unknown, unknown, CreateTaskBody, unknown> = async(req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  const isCompleted = req.body.isCompleted;

  try {
    // if user doesn't enter a title
    if(!title){
      throw createHttpError(400, "Tasks need a title.");
    }
    const newTask = await TaskModel.create({
      title: title,
      text: text,
      isCompleted: isCompleted,
    });

    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};