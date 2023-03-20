import { InferSchemaType, model, Schema } from "mongoose";


const taskSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String },
  isCompleted: { type: Boolean, default: false },
  dueDate: {type: String, default: "2023-03-20T17:47"},
  // experience value of task for Gamify
  // xpValue: {
  //   type: Number,
  //   default: 0
  // }
}, { timestamps: true });

type Task = InferSchemaType<typeof taskSchema>;

export default model<Task>("Task", taskSchema);