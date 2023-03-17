import Task from "../models/task.js";

export const getTasks = async (req, res) => {
  try {
    // find all task models
    const tasks = await Task.find();
    
    console.log(tasks);

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    })
  }
}

export const createTask = async (req, res) => {
  const task = req.body;

  const newTask = new Task(task);

  try {
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
}

// try {

// } catch (error) {
  
// }