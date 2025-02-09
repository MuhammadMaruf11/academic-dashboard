import mongoose, { Schema, Document } from "mongoose";

export interface IFaculty extends Document {
  name: string;
  courses: number[];
  department: string;
}

const FacultySchema = new Schema<IFaculty>({
  name: { type: String, required: true },
  courses: { type: [Number], required: true },
  department: { type: String, required: true },
});

const Faculty =
  mongoose.models.Faculty || mongoose.model<IFaculty>("Faculty", FacultySchema);

export default Faculty;
