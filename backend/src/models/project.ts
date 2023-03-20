import { InferSchemaType, model, Schema } from "mongoose";


const projectSchema = new Schema({
  title: { type: String, required: true },
});

type Project = InferSchemaType<typeof projectSchema>;

export default model<Project>("Project", projectSchema);