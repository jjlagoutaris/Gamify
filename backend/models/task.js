import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  category: String,
  selectedFile: String,
  isCompleted: Boolean,
  // experience value of task for Gamify
  // xpValue: {
  //   type: Number,
  //   default: 0
  // }
  createdAt: {
    type: Date,
    default: new Date(),
  }
})

const Task = mongoose.model('Task', taskSchema);

export default Task;