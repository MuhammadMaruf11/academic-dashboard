import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  name: string;
  gpa: number;
  courses: number[];
  year: number;
}

const StudentSchema = new Schema<IStudent>({
  name: { type: String, required: true },
  gpa: { type: Number, required: true },
  courses: { type: [Number], required: true },
  year: { type: Number, required: true },
});

const Student =
  mongoose.models.Student || mongoose.model<IStudent>("Student", StudentSchema);

export default Student;
